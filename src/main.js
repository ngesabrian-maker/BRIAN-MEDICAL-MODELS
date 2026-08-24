import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { SYSTEMS } from "./organs.js";
import { getNoteRemote, upsertNoteRemote, exportDbUrl, importDbFile, syncLocalToServer } from "./api.js";

console.log('[app] src/main.js loaded');

window.addEventListener("DOMContentLoaded", () => {
  console.log('[app] DOMContentLoaded — initializing UI');
  const canvas = document.getElementById("renderCanvas");
  const organListEl = document.getElementById("organList");
  const subjectListEl = document.getElementById("subjectList");
  const showNotesBtn = document.getElementById("showNotesBtn");
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
  const drawerMediaInput = document.getElementById('drawerMediaInput');
  const noteModal = document.getElementById("noteModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeNoteBtn = document.getElementById("closeNoteBtn");
  const editNoteBtn = document.getElementById('editNoteBtn');
  const saveNoteBtn = document.getElementById('saveNoteBtn');

  if (drawerUploadMedia) drawerUploadMedia.hidden = true;

  const SUBJECTS = [
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'biochemistry', label: 'Biochemistry' },
    { id: 'physiology', label: 'Physiology' },
    { id: 'parasitology', label: 'Parasitology' },
    { id: 'microbiology', label: 'Microbiology' }
  ];
  let selectedSubject = 'anatomy';
  let isNavigatorExpanded = false;
  const placeholder = document.getElementById("modelPlaceholder");
  const syncNotesBtn = document.getElementById('syncNotesBtn');
  if (!canvas) return;

  const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
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
      header.addEventListener("click", () => {
        list.classList.toggle("collapsed");
      });

      const list = document.createElement("ul");
      list.className = "system-list";
      system.organs.forEach(org => {
        const li = document.createElement("li");
        li.className = "organ-item";
        li.textContent = org.name;
        li.dataset.id = org.id;
        li.addEventListener("click", async () => {
          await selectOrgan(org);
        });
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
        document.querySelectorAll('.subject-btn').forEach(b => b.classList.toggle('active', b.dataset.id === s.id));
        // update modal content if open
      });
      subjectListEl.appendChild(btn);
    });
    // mark first as active
    const first = subjectListEl.querySelector('.subject-btn');
    if (first) first.classList.add('active');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;');
  }

  function resolveMediaPath(value) {
    if (!value) return value;
    if (/^(?:[a-z]+:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('blob:')) return value;
    const cleaned = value.replace(/^\.?\//, '').replace(/^uploads\//i, '');
    if (cleaned.startsWith('http://') || cleaned.startsWith('https://')) return cleaned;
    return `/${cleaned.startsWith('uploads/') ? cleaned : `uploads/${cleaned}`}`;
  }

  function formatNoteContent(rawContent) {
    if (rawContent === null || rawContent === undefined) {
      return '<p>No notes available.</p>';
    }

    const source = String(rawContent).trim();
    if (!source) {
      return '<p>No notes available.</p>';
    }

    const hasHtml = /<\/?[a-z][\s\S]*>/i.test(source);
    if (!hasHtml) {
      const blocks = source
        .split(/\n{2,}/)
        .map(block => block.replace(/\r/g, '').trim())
        .filter(Boolean);

      if (blocks.length) {
        return blocks
          .map(block => {
            const lines = block
              .split(/\n+/)
              .map(line => line.trim())
              .filter(Boolean)
              .map(line => {
                let rendered = escapeHtml(line);
                rendered = rendered.replace(/(https?:\/\/[^\s]+|uploads\/[^\s]+)/gi, match => {
                  const resolved = resolveMediaPath(match);
                  const lower = match.toLowerCase();
                  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(lower)) {
                    return `<img src="${resolved}" alt="Uploaded image" loading="lazy" />`;
                  }
                  if (/\.(mp4|webm|mov|m4v|avi)$/i.test(lower)) {
                    return `<video src="${resolved}" controls playsinline></video>`;
                  }
                  return `<a href="${resolved}" target="_blank" rel="noreferrer">${escapeHtml(match)}</a>`;
                });
                return rendered;
              })
              .join('<br>');
            return `<p>${lines}</p>`;
          })
          .join('');
      }

      return `<p>${escapeHtml(source).replace(/\n/g, '<br>')}</p>`;
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = source;
    wrapper.querySelectorAll('script, style').forEach(el => el.remove());

    wrapper.querySelectorAll('img, video').forEach(el => {
      const src = el.getAttribute('src');
      if (src) {
        el.setAttribute('src', resolveMediaPath(src));
      }
      if (el.tagName === 'VIDEO' && !el.hasAttribute('controls')) {
        el.setAttribute('controls', 'controls');
      }
      if (el.tagName === 'IMG' && !el.hasAttribute('alt')) {
        el.setAttribute('alt', 'Uploaded media');
      }
      if (el.tagName === 'IMG' && !el.hasAttribute('loading')) {
        el.setAttribute('loading', 'lazy');
      }
    });

    if (!wrapper.querySelector('p, ul, ol, h1, h2, h3, h4, blockquote, figure, img, video') && wrapper.textContent.trim()) {
      wrapper.innerHTML = `<p>${escapeHtml(wrapper.textContent.trim()).replace(/\n/g, '<br>')}</p>`;
    }

    return wrapper.innerHTML || '<p>No notes available.</p>';
  }

  async function selectOrgan(org) {
    if (!org) return;

    // highlight selected organ
    document.querySelectorAll(".organ-item").forEach(el => el.classList.toggle("selected", el.dataset.id === org.id));

    // show notes button if notes exist
    if (org.notes) {
      showNotesBtn.hidden = false;
      showNotesBtn.dataset.id = org.id;
      showNotesBtn.dataset.subject = selectedSubject;
    } else {
      showNotesBtn.hidden = true;
      showNotesBtn.removeAttribute("data-id");
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
        p.addEventListener('click', (e) => {
          e.stopPropagation();
          selectPart(org, part);
        });
        partsList.appendChild(p);
      });
      selEl.insertAdjacentElement('afterend', partsList);
    }
  }

  async function selectPart(org, part) {
    // highlight selected part
    document.querySelectorAll('.part-item').forEach(el => el.classList.toggle('selected', el.dataset.partId === part.id));

    // show notes button for the part
    showNotesBtn.hidden = false;
    showNotesBtn.dataset.id = org.id;
    showNotesBtn.dataset.partId = part.id;
    showNotesBtn.dataset.subject = selectedSubject;

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
    let dbContent = null;
    try {
      dbContent = await getNoteRemote(organId, partId, selectedSubject);
    } catch (e) {}
    const content = dbContent || (org.notes && org.notes[selectedSubject]) || org.notes && (org.notes.anatomy || org.notes.biochemistry) || "<p>No notes available.</p>";
    if (modalBody) modalBody.innerHTML = formatNoteContent(content);
    if (saveNoteBtn) saveNoteBtn.hidden = true;
    if (editNoteBtn) editNoteBtn.hidden = false;
    if (noteModal) noteModal.classList.remove("hidden");
  }

  // Drawer functions
  function setDrawerMaximized(maximized) {
    if (!notesDrawer) return;
    const viewer = document.querySelector('.viewer');
    notesDrawer.classList.toggle('is-maximized', maximized);
    notesDrawer.classList.toggle('presentation-mode', maximized);
    if (viewer) viewer.classList.toggle('presentation-mode', maximized);
    if (drawerMax) drawerMax.hidden = maximized;
    if (drawerMin) drawerMin.hidden = !maximized;
  }

  function setDrawerEditing(isEditing) {
    if (!drawerBody) return;
    drawerBody.contentEditable = isEditing ? 'true' : 'false';
    drawerBody.classList.toggle('is-editing', isEditing);
    if (drawerEdit) drawerEdit.hidden = isEditing;
    if (drawerSave) drawerSave.hidden = !isEditing;
    if (drawerUploadMedia) drawerUploadMedia.hidden = !isEditing;
  }

  function closeDrawer() {
    if (!notesDrawer) return;
    const viewer = document.querySelector('.viewer');
    notesDrawer.classList.remove('open');
    notesDrawer.classList.remove('is-maximized');
    notesDrawer.classList.remove('presentation-mode');
    if (viewer) viewer.classList.remove('presentation-mode');
    notesDrawer.setAttribute('aria-hidden', 'true');
    if (drawerMax) drawerMax.hidden = false;
    if (drawerMin) drawerMin.hidden = true;
    setDrawerEditing(false);
  }

  async function openDrawer(org, part) {
    if (!notesDrawer) return;
    const organId = org && (org.id || org._id) || (showNotesBtn && showNotesBtn.dataset.id) || null;
    const partId = part && part.id || (showNotesBtn && showNotesBtn.dataset.partId) || null;
    drawerTitle.textContent = org ? org.name : 'Notes';
    drawerSubtitle.textContent = part ? part.name : '';
    // fetch note
    let content = null;
    try {
      content = await getNoteRemote(organId, partId, selectedSubject);
    } catch (e) {
      console.warn('fetch note failed', e);
    }
    if (!content) {
      content = (part && part.notes && part.notes[selectedSubject]) || (org && org.notes && org.notes[selectedSubject]) || '<p>No notes available.</p>';
    }
    drawerBody.innerHTML = formatNoteContent(content);
    setDrawerEditing(false);
    setDrawerMaximized(false);
    notesDrawer.classList.add('open');
    notesDrawer.setAttribute('aria-hidden', 'false');
    // store current selection on showNotesBtn dataset for save handler
    if (showNotesBtn) {
      showNotesBtn.dataset.id = organId;
      if (partId) showNotesBtn.dataset.partId = partId; else delete showNotesBtn.dataset.partId;
      showNotesBtn.dataset.subject = selectedSubject;
    }
  }

  function closeModal() {
    if (noteModal) noteModal.classList.add("hidden");
  }

  function buildMediaMarkup(url) {
    const lower = String(url).toLowerCase();
    if (/\.(png|jpe?g|gif|webp|bmp|svg|tif|tiff|jfif|avif)$/i.test(lower)) {
      return `<div class="note-media-item"><button type="button" class="media-remove-btn" aria-label="Delete image">✕</button><img src="${url}" alt="Uploaded image" loading="lazy" /></div>`;
    }
    if (/\.(mp4|m4v|mov|webm|avi|mkv|wmv|flv|mpeg|mpg|3gp|3g2)$/i.test(lower)) {
      return `<div class="note-media-item"><button type="button" class="media-remove-btn" aria-label="Delete video">✕</button><video src="${url}" controls playsinline></video></div>`;
    }
    return `<div class="note-media-item"><button type="button" class="media-remove-btn" aria-label="Delete file">✕</button><a href="${url}" target="_blank" rel="noreferrer">${url}</a></div>`;
  }

  async function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  }

  async function insertUploadedMediaFiles(files) {
    if (!files || files.length === 0) return;
    const editor = drawerBody && drawerBody.isContentEditable ? drawerBody : null;
    if (!editor) {
      alert('Open the note in edit mode before uploading media.');
      return;
    }

    try {
      const results = [];
      for (const file of files) {
        const lowerName = String(file.name || '').toLowerCase();
        const isImage = /^image\//.test(file.type) || /\.(png|jpe?g|gif|webp|bmp|svg|tif|tiff|jfif|avif)$/i.test(lowerName);
        const isVideo = /^video\//.test(file.type) || /\.(mp4|m4v|mov|webm|avi|mkv|wmv|flv|mpeg|mpg|3gp|3g2)$/i.test(lowerName);

        try {
          const form = new FormData();
          form.append('media', file);
          const res = await fetch('http://localhost:3001/api/upload', { method: 'POST', body: form });
          if (res.ok) {
            const json = await res.json();
            if (json.files) {
              results.push(...json.files.map(item => ({ url: item.url, kind: isImage ? 'image' : isVideo ? 'video' : 'file' })));
              continue;
            }
          }
        } catch (e) {
          console.warn('Server upload unavailable, using local fallback:', e);
        }

        const dataUrl = await readFileAsDataUrl(file);
        results.push({ url: dataUrl, kind: isImage ? 'image' : isVideo ? 'video' : 'file' });
      }

      if (!results.length) return;

      const html = results
        .map(({ url, kind }) => {
          if (kind === 'image') {
            return `<div class="note-media-item"><button type="button" class="media-remove-btn" aria-label="Delete image">✕</button><img src="${url}" alt="Uploaded image" loading="lazy" /></div>`;
          }
          if (kind === 'video') {
            return `<div class="note-media-item"><button type="button" class="media-remove-btn" aria-label="Delete video">✕</button><video src="${url}" controls playsinline></video></div>`;
          }
          return `<div class="note-media-item"><button type="button" class="media-remove-btn" aria-label="Delete file">✕</button><a href="${url}" target="_blank" rel="noreferrer">${url}</a></div>`;
        })
        .join('');

      if (document.activeElement === editor || editor.contains(document.activeElement)) {
        document.execCommand('insertHTML', false, html);
      } else {
        editor.innerHTML += html;
      }

      editor.focus();
    } catch (e) {
      console.error('Failed to upload media', e);
      alert('Upload failed. Please make sure the app server is running or try a smaller file.');
    }
  }

  if (navigatorZoomBtn) {
    navigatorZoomBtn.addEventListener('click', () => {
      isNavigatorExpanded = !isNavigatorExpanded;
      updateNavigatorState();
    });
  }

  showNotesBtn.addEventListener("click", async () => {
    const id = showNotesBtn.dataset.id;
    const partId = showNotesBtn.dataset.partId;
    const foundOrg = SYSTEMS.flatMap(s => s.organs).find(o => o.id === id);
    if (!foundOrg) return;
    if (partId) {
      const foundPart = (foundOrg.parts || []).find(p => p.id === partId);
      if (foundPart) {
        // prefer part notes
          await openDrawer(Object.assign({ name: `${foundOrg.name} — ${foundPart.name}`, _id: foundOrg.id }, { notes: foundPart.notes }), foundPart);
        return;
      }
    }
      await openDrawer(Object.assign({ _id: foundOrg.id }, foundOrg), null);
  });
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
      modalBody.contentEditable = 'true';
      modalBody.focus();
      editNoteBtn.hidden = true;
      if (saveNoteBtn) saveNoteBtn.hidden = false;
    });
  }

  if (saveNoteBtn) {
    saveNoteBtn.addEventListener('click', () => {
      // determine current organ and part from showNotesBtn dataset
      const organId = showNotesBtn.dataset.id;
      const partId = showNotesBtn.dataset.partId || null;
      const subject = showNotesBtn.dataset.subject || selectedSubject;
      const content = modalBody.innerHTML;
      upsertNoteRemote(organId, partId, subject, content).then(() => console.log('[db] saved')).catch(e => console.warn('save failed', e));
      modalBody.contentEditable = 'false';
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
    });
  }
  if (drawerSave) {
    drawerSave.addEventListener('click', () => {
      const organId = showNotesBtn.dataset.id;
      const partId = showNotesBtn.dataset.partId || null;
      const subject = showNotesBtn.dataset.subject || selectedSubject;
      const content = drawerBody.innerHTML;
      upsertNoteRemote(organId, partId, subject, content).then(() => console.log('[db] saved')).catch(e => console.warn('save failed', e));
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
      await insertUploadedMediaFiles(files);
      event.target.value = '';
    });
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

  engine.runRenderLoop(() => {
    if (scene) scene.render();
  });

  window.addEventListener("resize", () => engine.resize());
});
