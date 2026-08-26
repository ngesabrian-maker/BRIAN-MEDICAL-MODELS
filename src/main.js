import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { SYSTEMS } from "./organs.js";
import { getNoteRemote, upsertNoteRemote, exportDbUrl, importDbFile, syncLocalToServer } from "./api.js";
import { createEmbedController } from "./embed-modal.js";
import { createNotesController } from "./notes.js";
import { createMediaController } from "./media.js";
import { createDrawerController } from "./drawer.js";
import { createUiController } from "./ui.js";
import { resolvePermanentNoteHtml, buildDisplayNoteHtml, extractStickerNoteHtml, setStickerEditing } from "./notePatterns.js";

console.log('[app] src/main.js loaded');

window.addEventListener("DOMContentLoaded", () => {
  console.log('[app] DOMContentLoaded — initializing UI');
  const canvas = document.getElementById("renderCanvas");
  const organListEl = document.getElementById("organList");
  const subjectListEl = document.getElementById("subjectList");
  const showNotesBtn = document.getElementById("showNotesBtn");
  const userNotesBtn = document.getElementById("userNotesBtn");
  const navigatorZoomBtn = document.getElementById("navigatorZoomBtn");
  // drawer elements
  const notesDrawer = document.getElementById('notesDrawer');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerSubtitle = document.getElementById('drawerSubtitle');
  const drawerBody = document.getElementById('drawerBody');
  const drawerClose = document.getElementById('drawerClose');
  const drawerEdit = document.getElementById('drawerEdit');
  const drawerSave = document.getElementById('drawerSave');
  const drawerPin = document.getElementById('drawerPin');
  const drawerMax = document.getElementById('drawerMax');
  const drawerMin = document.getElementById('drawerMin');
  const drawerUploadMedia = document.getElementById('drawerUploadMedia');
  const drawerAddEmbed = document.getElementById('drawerAddEmbed');
  const drawerMediaInput = document.getElementById('drawerMediaInput');
  const embedModal = document.getElementById('embedModal');
  const embedUrlInput = document.getElementById('embedUrlInput');
  const embedTitleInput = document.getElementById('embedTitleInput');
  const embedCaptionInput = document.getElementById('embedCaptionInput');
  const embedCodeInput = document.getElementById('embedCodeInput');
  const insertEmbedBtn = document.getElementById('insertEmbedBtn');
  const cancelEmbedBtn = document.getElementById('cancelEmbedBtn');
  const closeEmbedModal = document.getElementById('closeEmbedModal');
  const embedsPanel = document.getElementById('embedsPanel');
  const noteModal = document.getElementById("noteModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeNoteBtn = document.getElementById("closeNoteBtn");
  const editNoteBtn = document.getElementById('editNoteBtn');
  const saveNoteBtn = document.getElementById('saveNoteBtn');

  if (drawerUploadMedia) drawerUploadMedia.hidden = true;
  if (drawerAddEmbed) drawerAddEmbed.hidden = false;

  // Initialize embed controller
  const embedCtrl = createEmbedController({ notesDrawer, drawerBody, embedModal, embedUrlInput, embedTitleInput, embedCaptionInput, embedCodeInput, insertEmbedBtn, cancelEmbedBtn, closeEmbedModal, embedsPanel });
  embedCtrl.attachEventListeners();

  const SUBJECTS = [
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'biochemistry', label: 'Biochemistry' },
    { id: 'physiology', label: 'Physiology' },
    { id: 'parasitology', label: 'Parasitology' },
    { id: 'microbiology', label: 'Microbiology' },
    { id: 'pathology', label: 'Pathology' },
    { id: 'pharmacology', label: 'Pharmacology' },
    { id: 'histology', label: 'Histology' },
    { id: 'embryology', label: 'Embryology' },
  ];
  let selectedSubject = 'anatomy';
  let isNavigatorExpanded = false;
  const placeholder = document.getElementById("modelPlaceholder");
  const syncNotesBtn = document.getElementById('syncNotesBtn');
  if (!canvas) return;

  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    antialias: true,
    disableWebGL2Support: false
  }, true);

  const syncCanvasResolution = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.floor(rect.width * ratio));
    const height = Math.max(1, Math.floor(rect.height * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    engine.resize();
  };

  syncCanvasResolution();
  requestAnimationFrame(syncCanvasResolution);
  let scene = null;

  function updateNavigatorState() {
    const viewer = document.querySelector('.viewer');
    if (!viewer) return;
    viewer.classList.toggle('is-enlarged', isNavigatorExpanded);
    if (navigatorZoomBtn) {
      navigatorZoomBtn.textContent = isNavigatorExpanded ? '⤡' : '⤢';
      navigatorZoomBtn.setAttribute('aria-label', isNavigatorExpanded ? 'Restore view' : 'Enlarge view');
    }

    if (scene && scene.activeCamera && typeof scene.activeCamera.radius === 'number') {
      scene.activeCamera.radius = isNavigatorExpanded ? 2.8 : 5;
    }
  }

  function createScene() {
    const s = new Scene(engine);
    const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 5, new Vector3(0, 0, 0), s);
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    camera.autoRotationBehavior.idleRotationSpeed = 0.1;
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 15;

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), s);
    light.intensity = 0.8;

    return s;
  }

  // initialize controllers
  const notesCtrl = createNotesController();
  const mediaCtrl = createMediaController({ drawerBody });
  const drawerCtrl = createDrawerController({ notesDrawer, drawerBody });
  const uiCtrl = createUiController();

  // Drawer wrappers (delegate to drawer controller)
  const setDrawerMaximized = (m) => drawerCtrl.setDrawerMaximized(m);
  const setDrawerEditing = (v) => drawerCtrl.setDrawerEditing(v);
  const closeDrawer = () => drawerCtrl.closeDrawer();
  const openDrawer = (org, part, mode = 'combined') => drawerCtrl.openDrawer(org, part, getNoteRemote, selectedSubject, mode);

  function readEmbedsFromDrawer() {
    try {
      const metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
      if (metaEl) {
        const parsed = JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]');
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}

    const embedsPanelEl = document.getElementById('embedsPanel');
    if (!embedsPanelEl) return [];
    return Array.from(embedsPanelEl.querySelectorAll('.embedded-item')).map(item => ({
      id: item.dataset.embedId || ('e_' + Date.now() + Math.random().toString(16).slice(2)),
      title: item.querySelector('h4') ? item.querySelector('h4').textContent : '',
      caption: item.querySelector('p') ? item.querySelector('p').textContent : '',
      html: item.dataset.embedHtml || '',
      createdAt: new Date().toISOString()
    })).filter(item => item.html || item.title || item.caption);
  }

  function ensureDrawerEmbedMetadata(list = []) {
    if (!drawerBody) return;
    let metaEl = drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
    if (!metaEl) {
      metaEl = document.createElement('div');
      metaEl.className = 'embed-metadata';
      metaEl.style.display = 'none';
      drawerBody.appendChild(metaEl);
    }
    try {
      metaEl.textContent = JSON.stringify(Array.isArray(list) ? list : []);
    } catch (e) {
      metaEl.setAttribute('data-embeds', JSON.stringify(Array.isArray(list) ? list : []));
    }
  }

  async function loadOrganModel(org) {
    // Dispose old scene and create a fresh scene so models don't collide
    try {
      if (scene) {
        scene.dispose();
      }
    } catch (e) {
      console.warn("Error disposing old scene:", e);
    }

    scene = createScene();
    placeholder.style.display = "none";
    updateNavigatorState();

    if (!org.modelPath || !org.modelFile) {
      placeholder.style.display = "block";
      return;
    }

    try {
      await SceneLoader.AppendAsync(org.modelPath, org.modelFile, scene);
    } catch (err) {
      console.warn("Failed to load model:", err);
      placeholder.style.display = "block";
    }
  }

  function renderSystems() {
    SYSTEMS.forEach(system => {
      const wrapper = document.createElement("div");
      wrapper.className = "system-wrapper";

      const header = document.createElement("button");
      header.className = "system-header";
      header.textContent = system.name;

      const list = document.createElement("ul");
      list.className = "system-list collapsed";
      list.hidden = true;

      const toggleList = () => {
        const isCollapsed = list.classList.toggle("collapsed");
        list.hidden = isCollapsed;
        header.setAttribute('aria-expanded', String(!isCollapsed));
      };

      header.addEventListener("click", toggleList);
      header.setAttribute('aria-expanded', 'false');
      header.setAttribute('role', 'button');
      header.tabIndex = 0;
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
      });

      system.organs.forEach(org => {
        const li = document.createElement("li");
        li.className = "organ-item";
        li.textContent = org.name;
        li.dataset.id = org.id;
          li.setAttribute('role','button');
          li.tabIndex = 0;
          li.addEventListener("click", async () => {
            await selectOrgan(org);
          });
          li.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); li.click(); } });
        list.appendChild(li);
      });

      wrapper.appendChild(header);
      wrapper.appendChild(list);
      organListEl.appendChild(wrapper);
    });
  }

  function renderSubjects() {
    SUBJECTS.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'subject-btn';
      btn.textContent = s.label;
      btn.dataset.id = s.id;
      btn.addEventListener('click', () => {
        selectedSubject = s.id;
        document.querySelectorAll('.subject-btn').forEach(b => {
          const isActive = b.dataset.id === s.id;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
          if (isActive) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
        });
        // update modal content if open
      });
      // keyboard activation (Enter/Space)
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
      });
      subjectListEl.appendChild(btn);
    });
    // mark first as active
    const first = subjectListEl.querySelector('.subject-btn');
    if (first) { first.classList.add('active'); first.setAttribute('aria-pressed','true'); first.setAttribute('aria-current','true'); }
  }
  

  function formatNoteContent(rawContent) {
    return notesCtrl.formatNoteContent(rawContent);
  }

  async function selectOrgan(org) {
    if (!org) return;

    // highlight selected organ and set aria-current
    document.querySelectorAll(".organ-item").forEach(el => {
      const isSel = el.dataset.id === org.id;
      el.classList.toggle("selected", isSel);
      if (isSel) el.setAttribute('aria-current','true'); else el.removeAttribute('aria-current');
    });

    // show notes button if notes exist
    if (org.notes) {
      showNotesBtn.hidden = false;
      showNotesBtn.dataset.id = org.id;
      showNotesBtn.dataset.subject = selectedSubject;
      if (userNotesBtn) {
        userNotesBtn.hidden = false;
        userNotesBtn.dataset.id = org.id;
        userNotesBtn.dataset.subject = selectedSubject;
      }
    } else {
      showNotesBtn.hidden = true;
      showNotesBtn.removeAttribute("data-id");
      if (userNotesBtn) {
        userNotesBtn.hidden = true;
        userNotesBtn.removeAttribute("data-id");
      }
    }

    await loadOrganModel(org);

    // render parts (if any) as nested list beneath the selected organ
    document.querySelectorAll('.parts-list').forEach(n => n.remove());
    const selEl = document.querySelector(`.organ-item[data-id="${org.id}"]`);
    if (selEl && org.parts && org.parts.length) {
      const partsList = document.createElement('ul');
      partsList.className = 'parts-list';
      org.parts.forEach(part => {
        const p = document.createElement('li');
        p.className = 'part-item';
        p.textContent = part.name;
        p.dataset.partId = part.id;
        p.setAttribute('role','button');
        p.tabIndex = 0;
        p.addEventListener('click', (e) => {
          e.stopPropagation();
          selectPart(org, part);
        });
        p.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); p.click(); } });
        partsList.appendChild(p);
      });
      selEl.insertAdjacentElement('afterend', partsList);
    }
  }

  async function selectPart(org, part) {
      // highlight selected part and set aria-current
      document.querySelectorAll('.part-item').forEach(el => {
        const isSel = el.dataset.partId === part.id;
        el.classList.toggle('selected', isSel);
        if (isSel) el.setAttribute('aria-current','true'); else el.removeAttribute('aria-current');
      });

    // show notes button for the part
    showNotesBtn.hidden = false;
    showNotesBtn.dataset.id = org.id;
    showNotesBtn.dataset.partId = part.id;
    showNotesBtn.dataset.subject = selectedSubject;
    if (userNotesBtn) {
      userNotesBtn.hidden = false;
      userNotesBtn.dataset.id = org.id;
      userNotesBtn.dataset.partId = part.id;
      userNotesBtn.dataset.subject = selectedSubject;
    }

    // if part has own modelFile, try to load it from same path as organ
    if (part.modelFile) {
      const partOrg = Object.assign({}, org, { modelFile: part.modelFile });
      await loadOrganModel(partOrg);
    }
  }

  // wire modal
  async function openModal(org) {
    // kept for compatibility (not used by default)
    const organId = (showNotesBtn && showNotesBtn.dataset.id) || org._id || org.id || null;
    const partId = (showNotesBtn && showNotesBtn.dataset.partId) || null;
    if (modalTitle) modalTitle.innerText = `${org.name} — ${selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)}`;
    let stickerContent = '';
    try {
      const dbContent = await getNoteRemote(organId, partId, selectedSubject);
      if (dbContent) {
        stickerContent = typeof dbContent === 'string' ? dbContent : (dbContent.content || '');
      }
    } catch (e) {}
    const permanentContent = resolvePermanentNoteHtml(org, null, selectedSubject) || '<p>No notes available.</p>';
    if (modalBody) modalBody.innerHTML = notesCtrl.formatNoteContent(buildDisplayNoteHtml(permanentContent, stickerContent));
    if (saveNoteBtn) saveNoteBtn.hidden = true;
    if (editNoteBtn) editNoteBtn.hidden = false;
    if (noteModal) noteModal.classList.remove("hidden");
  }

  // Drawer functions are delegated to drawer controller via wrappers

  // See Model: floating chooser + viewer
  const seeModelBtn = document.getElementById('seeModelBtn');
  const modelChooserModal = document.getElementById('modelChooserModal');
  const modelChooserList = document.getElementById('modelChooserList');
  const closeModelChooser = document.getElementById('closeModelChooser');

  function renderModelChooser() {
    if (!modelChooserList || !embedsPanel) return;
    const items = Array.from(embedsPanel.querySelectorAll('.embedded-item'));
    modelChooserList.innerHTML = '';
    if (!items.length) {
      const empty = document.createElement('div');
      empty.className = 'model-choice-meta';
      empty.textContent = 'No embedded models available.';
      modelChooserList.appendChild(empty);
      return;
    }

    items.forEach((item) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'model-chooser-option';
      const title = item.querySelector('h4') ? item.querySelector('h4').textContent : 'Embedded model';
      const caption = item.querySelector('p') ? item.querySelector('p').textContent : 'Open model';
      row.innerHTML = `
        <div class="model-choice-meta">
          <span class="model-choice-label">${title}</span>
          <span class="model-choice-caption">${caption || 'Open model'}</span>
        </div>
        <span class="model-choice-open">Open</span>
      `;
      row.addEventListener('click', () => {
        openEmbedViewerFromElement(item);
        if (modelChooserModal) modelChooserModal.classList.add('hidden');
      });
      modelChooserList.appendChild(row);
    });
  }

  function openEmbedChooser() {
    if (!embedsPanel) {
      alert('No embedded models available.');
      return;
    }
    const items = embedsPanel.querySelectorAll('.embedded-item');
    if (!items.length) {
      alert('No embedded models available.');
      return;
    }
    renderModelChooser();
    if (modelChooserModal) {
      modelChooserModal.classList.remove('hidden');
      modelChooserModal.setAttribute('aria-hidden', 'false');
      const firstFocusable = modelChooserModal.querySelector('button, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    }
  }

  if (closeModelChooser) {
    closeModelChooser.addEventListener('click', () => {
      if (modelChooserModal) {
        modelChooserModal.classList.add('hidden');
        modelChooserModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (modelChooserModal) {
    modelChooserModal.addEventListener('click', (event) => {
      if (event.target === modelChooserModal) {
        modelChooserModal.classList.add('hidden');
        modelChooserModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function openEmbedViewerFromElement(el) {
    if (!el) return;
    let iframe = el.querySelector && el.querySelector('iframe');
    const embedHtml = el.dataset && el.dataset.embedHtml ? el.dataset.embedHtml : '';
    if (!iframe && embedHtml) {
      try {
        const tmp = document.createElement('div');
        tmp.innerHTML = embedHtml;
        iframe = tmp.querySelector('iframe');
      } catch (e) {
        iframe = null;
      }
    }
    const title = el.querySelector && (el.querySelector('h4') ? el.querySelector('h4').textContent : '');
    const caption = el.querySelector && (el.querySelector('p') ? el.querySelector('p').textContent : '');
    if (!iframe) return;
    // attach viewer inside the .viewer area to avoid covering the notes drawer
    // Ensure only one viewer exists and append to document.body so it centers above app
    const existing = document.querySelector('.embed-viewer');
    if (existing) try { existing.remove(); } catch (e) {}
    const viewer = document.createElement('div');
    viewer.className = 'embed-viewer';
    const panel = document.createElement('div');
    panel.className = 'viewer-panel';
    // accessibility: role dialog + modal
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-modal','true');
    const titleId = 'viewer-title-' + Date.now();
    panel.setAttribute('aria-labelledby', titleId);
    const header = document.createElement('div');
    header.className = 'viewer-header';
    const h = document.createElement('h4'); h.textContent = title || 'Model Viewer';
    h.id = titleId;
    const closeBtn = document.createElement('button'); closeBtn.className = 'viewer-close'; closeBtn.innerText = '✕';
    header.appendChild(h); header.appendChild(closeBtn);
    const iframeClone = iframe.cloneNode(true);
    // Wrap iframe in an aspect-ratio preserving container to avoid distortion
    const wrap = document.createElement('div');
    wrap.className = 'embed-iframe-wrap';
    // ensure no inline width/height styles interfere
    iframeClone.removeAttribute('width'); iframeClone.removeAttribute('height');
    iframeClone.style.width = '100%'; iframeClone.style.height = '100%'; iframeClone.style.border = '0';
    wrap.appendChild(iframeClone);
    const cap = document.createElement('div'); cap.className = 'viewer-caption'; cap.textContent = caption || '';
    panel.appendChild(header);
    panel.appendChild(wrap);
    if (caption) panel.appendChild(cap);
    viewer.appendChild(panel);
    // create a small live region for screen reader announcement
    let live = document.getElementById('viewer-live-region');
    if (!live) {
      live = document.createElement('div');
      live.id = 'viewer-live-region';
      live.className = 'visually-hidden';
      live.setAttribute('aria-live','assertive');
      document.body.appendChild(live);
    }
    try { document.body.appendChild(viewer); } catch (e) { /* fallback */ }
    // apply open class after next paint to trigger CSS transition
    requestAnimationFrame(() => { viewer.classList.add('open'); });
    // announce to SR users
    try { live.textContent = (title || 'Model Viewer') + ' opened'; } catch (e) {}
    function closeViewer() {
      // announce closing
      try { live.textContent = (title || 'Model Viewer') + ' closed'; } catch (e) {}
      // play reverse animation then remove
      viewer.classList.remove('open');
      viewer.classList.add('closing');
      setTimeout(() => { try { viewer.remove(); } catch (e) {} }, 240);
    }
    closeBtn.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (ev) => { if (ev.target === viewer) closeViewer(); });
    const escListener = function (e) { if (e.key === 'Escape') { closeViewer(); document.removeEventListener('keydown', escListener); } };
    document.addEventListener('keydown', escListener);
    // focus close button for keyboard users
    try { closeBtn.focus(); } catch (e) {}
    // trap focus inside the panel while open (basic)
    const focusableSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusables = panel.querySelectorAll(focusableSelector);
    let firstFocusable = closeBtn;
    let lastFocusable = closeBtn;
    if (focusables && focusables.length > 0) { firstFocusable = focusables[0]; lastFocusable = focusables[focusables.length - 1]; }
    function handleFocus(e) {
      if (!viewer.contains(document.activeElement)) {
        e.preventDefault();
        (firstFocusable || closeBtn).focus();
      }
    }
    document.addEventListener('focus', handleFocus, true);
    // cleanup focus trap on close
    const originalClose = closeBtn.onclick;
    const cleanup = () => { document.removeEventListener('focus', handleFocus, true); };
    closeBtn.addEventListener('click', () => { cleanup(); });
    // also cleanup when viewer removed via backdrop/escape
    viewer.addEventListener('remove', cleanup);
  }

  // Render embed inline inside the main viewer area (replaces canvas view)
  function renderEmbedInline(el) {
    if (!el) return;
    const iframe = el.querySelector && el.querySelector('iframe');
    const title = el.querySelector && (el.querySelector('h4') ? el.querySelector('h4').textContent : 'Embedded Model');
    const caption = el.querySelector && (el.querySelector('p') ? el.querySelector('p').textContent : '');
    if (!iframe) return;
    // find or create inline container
    const viewerArea = document.getElementById('viewer');
    if (!viewerArea) return;
    // hide the WebGL canvas while embed is shown
    const canvas = viewerArea.querySelector('#renderCanvas');
    if (canvas) canvas.style.visibility = 'hidden';
    // remove any existing inline embed
    let container = viewerArea.querySelector('#embedInlineContainer');
    if (container) container.remove();
    container = document.createElement('div');
    container.id = 'embedInlineContainer';
    container.className = 'embed-inline';
    const header = document.createElement('div'); header.className = 'embed-inline-header';
    const h = document.createElement('h4'); h.textContent = title || 'Embedded Model';
    const actions = document.createElement('div'); actions.className = 'embed-inline-actions';
    const viewBtn = document.createElement('button'); viewBtn.className = 'viewer-inline-open'; viewBtn.textContent = 'Open';
    const editBtn = document.createElement('button'); editBtn.className = 'viewer-inline-edit'; editBtn.textContent = 'Edit';
    const delBtn = document.createElement('button'); delBtn.className = 'viewer-inline-delete'; delBtn.textContent = 'Delete';
    actions.appendChild(viewBtn); actions.appendChild(editBtn); actions.appendChild(delBtn);
    header.appendChild(h); header.appendChild(actions);
    const wrap = document.createElement('div'); wrap.className = 'embed-inline-wrap';
    const iframeClone = iframe.cloneNode(true);
    iframeClone.removeAttribute('width'); iframeClone.removeAttribute('height'); iframeClone.style.width = '100%'; iframeClone.style.height = '100%'; iframeClone.style.border = '0';
    wrap.appendChild(iframeClone);
    const cap = document.createElement('div'); cap.className = 'embed-inline-caption'; cap.textContent = caption || '';
    container.appendChild(header); container.appendChild(wrap); if (caption) container.appendChild(cap);
    viewerArea.appendChild(container);

    // wire inline actions
    viewBtn.addEventListener('click', () => openEmbedViewerFromElement(el));
    editBtn.addEventListener('click', () => {
      // open embed modal for this item
      const metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
      let list = [];
      try { list = metaEl ? JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]') : []; } catch (er) { list = []; }
      const obj = list.find(x => x && x.id === el.dataset.embedId);
      if (obj) embedCtrl.openEmbedModal(obj, el);
    });
    delBtn.addEventListener('click', () => {
      // trigger delete from sidebar list (find the tile and remove)
      const sidebarItem = embedsPanel && embedsPanel.querySelector && embedsPanel.querySelector(`.embedded-item[data-embed-id="${el.dataset.embedId}"]`);
      if (sidebarItem) sidebarItem.remove();
      try { container.remove(); } catch (e) {}
      if (canvas) canvas.style.visibility = 'visible';
      // update metadata
      try {
        const metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
        let list = [];
        if (metaEl) {
          try { list = JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]'); } catch (e) { list = []; }
          list = list.filter(x => x && x.id !== el.dataset.embedId);
          try { metaEl.textContent = JSON.stringify(list); } catch (e) { metaEl.setAttribute('data-embeds', JSON.stringify(list)); }
        }
      } catch (e) { console.warn('Failed to remove embed metadata', e); }
      // persist
      try { document.dispatchEvent(new CustomEvent('embed:inserted', { detail: { wasEdit: true } })); } catch (e) {}
    });
  }

  // Floating centered actions for embeds (Open / Edit / Delete)
  function createFloatingEmbedActions() {
    let floatEl = document.getElementById('embedActionFloating');
    if (floatEl) return floatEl;
    floatEl = document.createElement('div');
    floatEl.id = 'embedActionFloating';
    floatEl.className = 'embed-action-floating';
    floatEl.setAttribute('role','toolbar');
    floatEl.setAttribute('aria-hidden','true');
    floatEl.innerHTML = `
      <div class="eaf-inner">
        <button class="eaf-open">Open</button>
        <button class="eaf-edit">Edit</button>
        <button class="eaf-delete">Delete</button>
      </div>
    `;
    document.body.appendChild(floatEl);
    // wire handlers
    floatEl.querySelector('.eaf-open').addEventListener('click', () => {
      const id = floatEl.dataset.embedId;
      const item = embedsPanel && embedsPanel.querySelector && embedsPanel.querySelector(`.embedded-item[data-embed-id="${id}"]`);
      if (item) openEmbedViewerFromElement(item);
      hideFloatingEmbedActions();
    });
    floatEl.querySelector('.eaf-edit').addEventListener('click', () => {
      const id = floatEl.dataset.embedId;
      const metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
      let list = [];
      try { list = metaEl ? JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]') : []; } catch (er) { list = []; }
      const obj = list.find(x => x && x.id === id);
      const item = embedsPanel && embedsPanel.querySelector && embedsPanel.querySelector(`.embedded-item[data-embed-id="${id}"]`);
      if (obj) embedCtrl.openEmbedModal(obj, item);
      hideFloatingEmbedActions();
    });
    floatEl.querySelector('.eaf-delete').addEventListener('click', () => {
      const id = floatEl.dataset.embedId;
      const item = embedsPanel && embedsPanel.querySelector && embedsPanel.querySelector(`.embedded-item[data-embed-id="${id}"]`);
      if (item) item.remove();
      // update metadata
      try {
        const metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
        let list = [];
        if (metaEl) {
          try { list = JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]'); } catch (e) { list = []; }
          list = list.filter(x => x && x.id !== id);
          try { metaEl.textContent = JSON.stringify(list); } catch (e) { metaEl.setAttribute('data-embeds', JSON.stringify(list)); }
        }
      } catch (e) { console.warn('Failed to remove embed metadata', e); }
      hideFloatingEmbedActions();
      try { document.dispatchEvent(new CustomEvent('embed:inserted', { detail: { wasEdit: true } })); } catch (e) {}
    });
    return floatEl;
  }

  let lastFloatingItem = null;

  function showFloatingEmbedActions(item) {
    if (!item) return;
    const floatEl = createFloatingEmbedActions();
    floatEl.dataset.embedId = item.dataset.embedId || '';
    // mark the source tile so its local actions hide
    if (lastFloatingItem && lastFloatingItem !== item) lastFloatingItem.classList.remove('with-floating');
    item.classList.add('with-floating');
    lastFloatingItem = item;
    // center over viewer
    floatEl.setAttribute('aria-hidden','false');
    floatEl.classList.add('visible');
    // focus first button for keyboard users
    try { floatEl.querySelector('button').focus(); } catch (e) {}
  }

  function hideFloatingEmbedActions() {
    const floatEl = document.getElementById('embedActionFloating');
    if (!floatEl) return;
    floatEl.setAttribute('aria-hidden','true');
    floatEl.classList.remove('visible');
    if (lastFloatingItem) { lastFloatingItem.classList.remove('with-floating'); lastFloatingItem = null; }
  }

  if (seeModelBtn) {
    const syncSeeModelButtonState = () => {
      const hasEmbeds = !!(embedsPanel && embedsPanel.querySelector('.embedded-item'));
      seeModelBtn.disabled = !hasEmbeds;
      seeModelBtn.title = hasEmbeds ? 'Choose an embedded model' : 'No embedded models available';
    };

    seeModelBtn.addEventListener('click', () => {
      openEmbedChooser();
    });

    if (embedsPanel) {
      const obs = new MutationObserver(syncSeeModelButtonState);
      obs.observe(embedsPanel, { childList: true, subtree: false });
      syncSeeModelButtonState();
    }
  }

  // open model on click in embeds panel
  if (embedsPanel) {
    // only open viewer when the explicit See Model button is clicked
    embedsPanel.addEventListener('click', (e) => {
      const seeBtn = e.target.closest && e.target.closest('.see-model-btn');
      const editBtn = e.target.closest && e.target.closest('.edit-embed-btn');
      const delBtn = e.target.closest && e.target.closest('.delete-embed-btn');
      if (seeBtn || editBtn || delBtn) {
        const item = (seeBtn || editBtn || delBtn).closest('.embedded-item');
        if (!item) return;
        // Show centered floating toolbar instead of using local sidebar actions
        e.preventDefault();
        e.stopPropagation();
        showFloatingEmbedActions(item);
        return;
      }

      // If user clicks on the tile itself (not on an action), open viewer
      const tile = e.target.closest && e.target.closest('.embedded-item');
      if (tile && !e.target.closest('.embed-actions') && !e.target.closest('button')) {
        // show centered floating actions for this tile
        showFloatingEmbedActions(tile);
        return;
      }
    });
    // keyboard activation: Enter on focused tile opens viewer
    embedsPanel.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('embedded-item')) {
        e.preventDefault();
        openEmbedViewerFromElement(document.activeElement);
      }
    });
    // keep the action button visible but disable it when no embed model exists
    const obs = new MutationObserver(() => {
      if (seeModelBtn) seeModelBtn.disabled = !(embedsPanel && embedsPanel.querySelector('.embedded-item'));
    });
    obs.observe(embedsPanel, { childList: true, subtree: false });
    if (seeModelBtn) seeModelBtn.disabled = !(embedsPanel && embedsPanel.querySelector('.embedded-item'));
  }

  if (navigatorZoomBtn) {
    navigatorZoomBtn.addEventListener('click', () => {
      isNavigatorExpanded = !isNavigatorExpanded;
      updateNavigatorState();
    });
  }

  const handleOpenNotes = async (buttonEl, mode = 'combined') => {
    if (!buttonEl) return;
    if (buttonEl.dataset.loading === 'true') return;
    buttonEl.dataset.loading = 'true';
    buttonEl.classList.add('loading');
    try { buttonEl.setAttribute('aria-busy','true'); } catch(e){}
    try { buttonEl.disabled = true; } catch(e){}
    try {
      const id = buttonEl.dataset.id;
      const partId = buttonEl.dataset.partId;
      const foundOrg = SYSTEMS.flatMap(s => s.organs).find(o => o.id === id);
      if (!foundOrg) return;
      if (partId) {
        const foundPart = (foundOrg.parts || []).find(p => p.id === partId);
        if (foundPart) {
          await openDrawer(Object.assign({ name: `${foundOrg.name} — ${foundPart.name}`, _id: foundOrg.id }, { notes: foundPart.notes }), foundPart, mode);
          return;
        }
      }
      await openDrawer(Object.assign({ _id: foundOrg.id }, foundOrg), null, mode);
    } finally {
      delete buttonEl.dataset.loading;
      buttonEl.classList.remove('loading');
      try { buttonEl.removeAttribute('aria-busy'); } catch(e){}
      try { buttonEl.disabled = false; } catch(e){}
    }
  };

  showNotesBtn.addEventListener("click", async () => {
    await handleOpenNotes(showNotesBtn, 'combined');
  });

  if (userNotesBtn) {
    userNotesBtn.addEventListener('click', async () => {
      await handleOpenNotes(userNotesBtn, 'sticker');
    });
  }
  if (closeNoteBtn) closeNoteBtn.addEventListener("click", closeModal);
  if (noteModal) noteModal.addEventListener("click", (e) => {
    if (e.target === noteModal) closeModal();
  });

  console.log('[app] using remote DB API endpoints');
  // attempt to migrate any locally saved notes into server DB
  try {
    syncLocalToServer().then(r => {
      if (r && r.ok && r.migrated) console.log('[db] migrated local notes to server:', r.migrated);
      else if (r && r.ok) console.log('[db] no local notes to migrate');
      else console.log('[db] migration skipped:', r && r.reason);
    }).catch(e => console.warn('migration failed', e));
  } catch (e) {}

  if (syncNotesBtn) {
    syncNotesBtn.addEventListener('click', async () => {
      try {
        const r = await syncLocalToServer();
        if (r && r.ok) alert(`Synced ${r.migrated || 0} notes to server`);
        else alert('Sync skipped: ' + (r && r.reason));
      } catch (e) { alert('Sync failed: ' + e.message); }
    });
  }

  // Edit / Save note handlers
  if (editNoteBtn) {
    editNoteBtn.addEventListener('click', () => {
      setStickerEditing(modalBody, true);
      const sticker = modalBody && modalBody.querySelector && modalBody.querySelector('.user-sticker-note[data-role="sticker-note"]');
      if (sticker) sticker.focus();
      editNoteBtn.hidden = true;
      if (saveNoteBtn) saveNoteBtn.hidden = false;
    });
  }

  if (saveNoteBtn) {
    saveNoteBtn.addEventListener('click', () => {
      const organId = showNotesBtn.dataset.id;
      const partId = showNotesBtn.dataset.partId || null;
      const subject = showNotesBtn.dataset.subject || selectedSubject;
      const stickerContent = extractStickerNoteHtml(modalBody.innerHTML);
      const embeds = readEmbedsFromDrawer();
      upsertNoteRemote(organId, partId, subject, stickerContent, embeds).then(() => console.log('[db] saved sticker note')).catch(e => console.warn('save failed', e));
      setStickerEditing(modalBody, false);
      saveNoteBtn.hidden = true;
      if (editNoteBtn) editNoteBtn.hidden = false;
    });
  }

  // Drawer edit/save/close handlers
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerEdit) {
    drawerEdit.addEventListener('click', () => {
      setDrawerEditing(true);
      drawerBody.focus();
    });
  }
  if (drawerBody) {
    drawerBody.addEventListener('click', (event) => {
      const removeBtn = event.target.closest('.media-remove-btn');
      if (!removeBtn || !drawerBody.isContentEditable) return;
      const mediaItem = removeBtn.closest('.note-media-item');
      if (mediaItem) mediaItem.remove();

      const iframe = event.target.closest('iframe');
      if (iframe && drawerBody.isContentEditable) {
        event.preventDefault();
        const figure = iframe.closest('figure');
        embedCtrl.openEmbedModal(figure ? figure.outerHTML : iframe.outerHTML, figure ? figure : iframe);
      }
    });
  }
  if (drawerSave) {
    drawerSave.addEventListener('click', () => {
      const organId = showNotesBtn.dataset.id;
      const partId = showNotesBtn.dataset.partId || null;
      const subject = showNotesBtn.dataset.subject || selectedSubject;
      const stickerContent = extractStickerNoteHtml(drawerBody.innerHTML);
      const embeds = readEmbedsFromDrawer();
      ensureDrawerEmbedMetadata(embeds);
      upsertNoteRemote(organId, partId, subject, stickerContent, embeds).then(() => console.log('[db] saved sticker note')).catch(e => console.warn('save failed', e));
      setDrawerEditing(false);
    });
  }
  if (drawerPin) {
    drawerPin.addEventListener('click', () => {
      drawerPin.classList.toggle('pinned');
    });
  }
  if (drawerUploadMedia && drawerMediaInput) {
    drawerUploadMedia.addEventListener('click', () => {
      if (drawerBody && drawerBody.isContentEditable) {
        drawerMediaInput.click();
      } else {
        alert('Open the note in edit mode before uploading media.');
      }
    });
      drawerMediaInput.addEventListener('change', async (event) => {
        const files = Array.from(event.target.files || []);
        await mediaCtrl.insertUploadedMediaFiles(files);
        event.target.value = '';
    });
  }
  if (drawerAddEmbed) {
    drawerAddEmbed.addEventListener('click', () => {
      // Ensure the drawer is in edit mode so inserts succeed
      if (drawerBody && !drawerBody.isContentEditable) {
        setDrawerEditing(true);
        // focus editable area
        setTimeout(() => { if (drawerBody) drawerBody.focus(); }, 120);
      }
      // If the user has clicked/selected an existing embed, open the modal for that embed
      const sel = document.getSelection && document.getSelection();
      let node = sel && sel.anchorNode ? sel.anchorNode : null;
      if (node && node.nodeType !== Node.ELEMENT_NODE) node = node.parentElement;
      const iframe = node && node.closest ? node.closest('iframe') : null;
      const figure = iframe ? (iframe.closest ? iframe.closest('figure') : null) : null;
      if (iframe) {
        embedCtrl.openEmbedModal(figure ? figure.outerHTML : iframe.outerHTML, figure ? figure : iframe);
        return;
      }
      // Open empty insert dialog
      embedCtrl.openEmbedModal('', null);
    });
  }
  // embed modal event handlers are attached by the embed controller
  // Persist embeds immediately when inserted via the embed modal
  document.addEventListener('embed:inserted', async (e) => {
    try {
      const organId = (showNotesBtn && showNotesBtn.dataset.id) || null;
      const partId = (showNotesBtn && showNotesBtn.dataset.partId) || null;
      const subject = (showNotesBtn && showNotesBtn.dataset.subject) || selectedSubject;
      if (!organId) return; // nothing to save against
      const content = drawerBody ? drawerBody.innerHTML : '';
      const embeds = readEmbedsFromDrawer();
      ensureDrawerEmbedMetadata(embeds);
      const res = await upsertNoteRemote(organId, partId, subject, content, embeds);
      if (res && res.savedTo === 'server') {
        showToast('Saved to SQLite');
      } else {
        showToast('Saved locally (offline)');
      }
      console.log('[db] embed persisted for', organId, partId, subject, res && res.savedTo);
    } catch (err) {
      console.warn('Failed to persist embed immediately', err);
    }
  });

  function showToast(message = '', timeout = 2200) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, timeout);
  }
  if (drawerMax) {
    drawerMax.addEventListener('click', () => setDrawerMaximized(true));
  }
  if (drawerMin) {
    drawerMin.addEventListener('click', () => setDrawerMaximized(false));
  }

  // initial render + selection
  renderSubjects();
  renderSystems();
  // select first organ in first system if present
  const firstOrg = SYSTEMS.length > 0 && SYSTEMS[0].organs && SYSTEMS[0].organs[0];
  if (firstOrg) selectOrgan(firstOrg);

  // THEME: initialize from localStorage or system preference
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    if (themeToggle) themeToggle.textContent = t === 'dark' ? '🌙' : '☀️';
  }

  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    applyTheme(stored);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  // SIDEBAR TOGGLE: initialize and wire control
  const sidebarToggle = document.getElementById('sidebarToggle');
  function setSidebarCollapsed(collapsed) {
    document.documentElement.classList.toggle('sidebar-collapsed', collapsed);
    localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
  }

  const storedSidebar = localStorage.getItem('sidebarCollapsed');
  if (storedSidebar === '1') setSidebarCollapsed(true);

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const now = document.documentElement.classList.toggle('sidebar-collapsed');
      localStorage.setItem('sidebarCollapsed', now ? '1' : '0');
    });
  }

  const resizeObserver = new ResizeObserver(() => syncCanvasResolution());
  resizeObserver.observe(canvas);

  engine.runRenderLoop(() => {
    if (scene) scene.render();
  });

  window.addEventListener("resize", syncCanvasResolution);
});