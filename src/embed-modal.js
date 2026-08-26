// embed-modal.js — extracted embed modal logic
export function createEmbedController({ notesDrawer, drawerBody, embedModal, embedUrlInput, embedTitleInput, embedCaptionInput, embedCodeInput, insertEmbedBtn, cancelEmbedBtn, closeEmbedModal, embedsPanel }) {
  let currentEmbedEditTarget = null;
  let currentEditingId = null;
  let lastFocusedElement = null;
  let focusTrapHandler = null;
  let overlayActive = false;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;');
  }

  function sanitizeEmbedHtml(rawHtml) {
    const markup = String(rawHtml || '').trim();
    if (!markup) return '';

    const wrapper = document.createElement('div');
    wrapper.innerHTML = markup;

    const allowedTags = new Set(['IFRAME', 'DIV', 'FIGURE', 'FIGCAPTION', 'P', 'SPAN', 'A', 'BR']);
    wrapper.querySelectorAll('*').forEach(node => {
      if (!allowedTags.has(node.tagName)) {
        node.replaceWith(...Array.from(node.childNodes));
      }
    });

    const iframe = wrapper.querySelector('iframe');
    if (!iframe) return '';

    const src = iframe.getAttribute('src') || '';
    const allowedOrigin = /^(https?:\/\/)?(www\.)?(sketchfab\.com|player\.vimeo\.com|www\.youtube\.com|youtube\.com|youtube-nocookie\.com|app\.microsoft\.com|3dwarehouse\.sketchup\.com|modelviewer\.dev)/i;
    if (!src || !allowedOrigin.test(src)) {
      return '';
    }

    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('allow', 'fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

    const fig = document.createElement('figure');
    fig.className = 'embedded-scene';
    fig.appendChild(iframe.cloneNode(true));
    const caption = document.createElement('figcaption');
    caption.textContent = 'External 3D model embed';
    fig.appendChild(caption);
    return fig.outerHTML;
  }

  function openEmbedModal(existing = '', targetEl = null) {
    if (!embedModal) return;
    if (embedUrlInput) embedUrlInput.value = '';
    if (embedCodeInput) embedCodeInput.value = '';
    currentEmbedEditTarget = targetEl || null;
    currentEditingId = null;
    lastFocusedElement = document.activeElement;
    if (!overlayActive) {
      document.documentElement.classList.add('overlay-active');
      // hide background content from assistive tech while modal is open
      try {
        const main = document.querySelector('main');
        const sidebar = document.getElementById('sidebar');
        if (main) main.setAttribute('aria-hidden', 'true');
        if (sidebar) sidebar.setAttribute('aria-hidden', 'true');
        if (notesDrawer) {
          notesDrawer.setAttribute('aria-hidden', 'true');
          notesDrawer.style.pointerEvents = 'none';
        }
      } catch (e) {}
      overlayActive = true;
    }
    try {
      if (embedModal && embedModal.parentNode !== document.body) document.body.appendChild(embedModal);
    } catch (e) {}

    // `existing` may be a string of HTML, or an embed object { id, html, title, caption }
    if (existing) {
      if (typeof existing === 'string') {
        const existingNode = document.createElement('div');
        existingNode.innerHTML = existing.trim();
        const iframe = existingNode.querySelector('iframe');
        const figcap = existingNode.querySelector('figcaption');
        if (iframe) {
          const src = iframe.getAttribute('src') || '';
          if (src && embedUrlInput) embedUrlInput.value = src;
          if (embedCodeInput) embedCodeInput.value = iframe.outerHTML;
        }
        if (figcap && embedTitleInput) {
          const text = figcap.textContent || '';
          const parts = text.split('\n').map(s => s.trim()).filter(Boolean);
          if (parts.length) {
            embedTitleInput.value = parts[0] || '';
            embedCaptionInput.value = parts[1] || '';
          }
        }
      } else if (typeof existing === 'object') {
        // embed object
        currentEditingId = existing.id || null;
        if (embedCodeInput) embedCodeInput.value = existing.html || '';
        if (embedTitleInput) embedTitleInput.value = existing.title || '';
        if (embedCaptionInput) embedCaptionInput.value = existing.caption || '';
        // try to set url field from iframe src
        try {
          const tmp = document.createElement('div'); tmp.innerHTML = existing.html || '';
          const iframe = tmp.querySelector && tmp.querySelector('iframe');
          if (iframe && embedUrlInput) embedUrlInput.value = iframe.getAttribute('src') || '';
        } catch (e) {}
      }
    }

    embedModal.classList.remove('hidden');
    embedModal.setAttribute('aria-hidden', 'false');
    embedModal.setAttribute('aria-describedby', 'embedHelpText');
    trapFocus(embedModal);
    if (embedUrlInput) setTimeout(() => embedUrlInput.focus(), 50);
  }

  function closeEmbedModalPanel() {
    if (!embedModal) return;
    embedModal.classList.add('hidden');
    embedModal.setAttribute('aria-hidden', 'true');
    currentEmbedEditTarget = null;
    releaseFocusTrap();
    try { if (lastFocusedElement && lastFocusedElement.focus) lastFocusedElement.focus(); } catch (e) {}
    lastFocusedElement = null;
    if (overlayActive) {
      document.documentElement.classList.remove('overlay-active');
      // restore background accessibility
      try {
        const main = document.querySelector('main');
        const sidebar = document.getElementById('sidebar');
        if (main) main.removeAttribute('aria-hidden');
        if (sidebar) sidebar.removeAttribute('aria-hidden');
        if (notesDrawer) {
          notesDrawer.removeAttribute('aria-hidden');
          notesDrawer.style.pointerEvents = '';
        }
      } catch (e) {}
      overlayActive = false;
    }
  }

  function buildSafeEmbedMarkup(rawUrl, rawCode) {
    const directUrl = String(rawUrl || '').trim();
    const code = String(rawCode || '').trim();
    const safeUrl = directUrl && /^(https?:\/\/)/i.test(directUrl) ? directUrl : '';

    if (safeUrl) {
      const allowedOrigin = /^(https?:\/\/)?(www\.)?(sketchfab\.com|player\.vimeo\.com|www\.youtube\.com|youtube\.com|youtube-nocookie\.com|app\.microsoft\.com|3dwarehouse\.sketchup\.com|modelviewer\.dev)/i;
      if (!allowedOrigin.test(safeUrl)) {
        alert('Only trusted 3D/embed sources are allowed for safety. Use a supported model-sharing site URL.');
        return '';
      }
      const src = safeUrl.includes('://') ? safeUrl : `https://${safeUrl}`;
      return `<figure class="embedded-scene"><iframe src="${escapeHtml(src)}" title="Embedded 3D model" loading="lazy" allowfullscreen="true" referrerpolicy="strict-origin-when-cross-origin" allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><figcaption>External 3D model embed</figcaption></figure>`;
    }

    if (code) {
      const filtered = sanitizeEmbedHtml(code);
      if (!filtered) {
        alert('Only iframe embed code from supported 3D model sources is allowed.');
        return '';
      }
      return filtered;
    }

    return '';
  }

  function showToast(message = '', timeout = 2500) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, timeout);
  }

  function trapFocus(container) {
    if (!container) return;
    releaseFocusTrap();
    focusTrapHandler = (e) => {
      if (e.key !== 'Tab') return;
      const focusable = Array.from(container.querySelectorAll('a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])')).filter(Boolean);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', focusTrapHandler);
  }

  function releaseFocusTrap() {
    if (focusTrapHandler) {
      document.removeEventListener('keydown', focusTrapHandler);
      focusTrapHandler = null;
    }
  }

  function attachEventListeners() {
    if (insertEmbedBtn) {
      insertEmbedBtn.addEventListener('click', () => {
        const embedHtml = buildSafeEmbedMarkup(embedUrlInput && embedUrlInput.value, embedCodeInput && embedCodeInput.value);
        if (!embedHtml) return;

        const tmp = document.createElement('div');
        tmp.innerHTML = embedHtml.trim();
        const newNode = tmp.firstElementChild;

        // build embed object with metadata
        const editId = currentEditingId || (currentEmbedEditTarget && currentEmbedEditTarget.dataset && currentEmbedEditTarget.dataset.embedId ? currentEmbedEditTarget.dataset.embedId : null);
        const id = editId || ('e_' + Date.now());
        const title = embedTitleInput && embedTitleInput.value ? String(embedTitleInput.value).trim() : '';
        const caption = embedCaptionInput && embedCaptionInput.value ? String(embedCaptionInput.value).trim() : '';
        const embedObj = { id, html: embedHtml, title, caption, createdAt: new Date().toISOString() };

        // update embeds panel display (separate from notes)
        if (embedsPanel) {
          try {
            const tile = buildEmbedTile(embedObj);
            // mark draggable property
            if (tile) {
              tile.setAttribute('draggable', 'true');
              embedsPanel.appendChild(tile);
            }
          } catch (e) { console.warn('Failed to append embed tile', e); }
        }

        // persist embed metadata into a hidden metadata block inside drawerBody so server/local save contains embeds list
        try {
          let metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
          let list = [];
          if (metaEl) {
            try { list = JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]'); } catch (e) { list = []; }
          } else if (drawerBody) {
            metaEl = document.createElement('div');
            metaEl.className = 'embed-metadata';
            metaEl.style.display = 'none';
            drawerBody.appendChild(metaEl);
          }
          // add or replace
          const existingIdx = list.findIndex(x => x && x.id === id);
          if (existingIdx >= 0) {
            // preserve original createdAt if present
            embedObj.createdAt = list[existingIdx].createdAt || embedObj.createdAt;
            list[existingIdx] = embedObj;
          } else {
            list.push(embedObj);
          }
          try { metaEl.textContent = JSON.stringify(list); } catch (e) { metaEl.setAttribute('data-embeds', JSON.stringify(list)); }
        } catch (e) {
          console.warn('Failed to update embed metadata', e);
        }

        // update existing tile if editing
        if (editId && embedsPanel) {
          const existingTile = embedsPanel.querySelector && embedsPanel.querySelector(`.embedded-item[data-embed-id="${editId}"]`);
          if (existingTile) {
            try {
              // rebuild tile content using buildEmbedTile so move buttons are present
              const newTile = buildEmbedTile(embedObj);
              if (newTile) existingTile.replaceWith(newTile);
            } catch (e) { console.warn('Failed to update existing embed tile', e); }
          }
        }

        closeEmbedModalPanel();
        if (drawerBody) drawerBody.focus();
        // notify app that an embed was inserted/updated so it can persist the note content + metadata
        try { document.dispatchEvent(new CustomEvent('embed:inserted', { detail: { wasEdit: false } })); } catch (e) {}
        showToast('Embed inserted');
      });
    }
    if (cancelEmbedBtn) cancelEmbedBtn.addEventListener('click', closeEmbedModalPanel);
    if (closeEmbedModal) closeEmbedModal.addEventListener('click', closeEmbedModalPanel);
    if (embedModal) embedModal.addEventListener('click', (event) => {
      if (event.target === embedModal) closeEmbedModalPanel();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && embedModal && !embedModal.classList.contains('hidden')) {
        closeEmbedModalPanel();
      }
    });
    // enable drag-and-drop reordering
    try { setupDragAndDrop(); } catch (e) {}
  }

  // expose helper to build a tile element from embed object (used by drawer)
  function buildEmbedTile(embedObj) {
    if (!embedObj) return null;
    const wrapper = document.createElement('div');
    wrapper.className = 'embedded-item';
    wrapper.dataset.embedId = embedObj.id;
    wrapper.dataset.embedHtml = embedObj.html || '';
    wrapper.setAttribute('draggable', 'true');

    // add drag handle for affordance
    const handle = document.createElement('span');
    handle.className = 'drag-handle';
    handle.setAttribute('aria-hidden', 'true');
    handle.textContent = '⋮⋮';

    const thumb = document.createElement('div');
    thumb.className = 'embed-thumb';
    const img = document.createElement('img');
    img.className = 'embed-thumb-img';
    img.alt = embedObj.title || 'Embed thumbnail';
    img.src = getThumbnailForEmbed(embedObj.html, embedObj.title);
    thumb.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'embed-meta';
    const h4 = document.createElement('h4'); h4.textContent = embedObj.title || 'Untitled';
    const p = document.createElement('p'); p.textContent = embedObj.caption || '';
    meta.appendChild(h4); if (embedObj.caption) meta.appendChild(p);

    const actions = document.createElement('div');
    actions.className = 'embed-actions';
    const seeBtn = document.createElement('button'); seeBtn.className = 'see-model-btn'; seeBtn.type = 'button'; seeBtn.textContent = 'See Model'; seeBtn.setAttribute('aria-label','See model in viewer'); seeBtn.title='See model';
    const editBtn = document.createElement('button'); editBtn.className = 'edit-embed-btn'; editBtn.type = 'button'; editBtn.textContent = 'Edit'; editBtn.setAttribute('aria-label','Edit embed'); editBtn.title='Edit embed';
    const delBtn = document.createElement('button'); delBtn.className = 'delete-embed-btn'; delBtn.type = 'button'; delBtn.textContent = 'Delete'; delBtn.setAttribute('aria-label','Delete embed'); delBtn.title='Delete embed';
    actions.appendChild(seeBtn); actions.appendChild(editBtn); actions.appendChild(delBtn);

    // keyboard handlers for accessibility
    [seeBtn, editBtn, delBtn].forEach(btn => {
      btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); } });
    });

    wrapper.appendChild(handle);
    wrapper.appendChild(thumb);
    wrapper.appendChild(meta);
    wrapper.appendChild(actions);

    // dragstart/dragend for visual feedback
    wrapper.addEventListener('dragstart', (e) => {
      try {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', wrapper.dataset.embedId || '');
      } catch (err) {}
      wrapper.classList.add('dragging');
    });
    wrapper.addEventListener('dragend', () => { wrapper.classList.remove('dragging'); });
    return wrapper;
  }

  // Setup drag-and-drop reordering on the embedsPanel
  function setupDragAndDrop() {
    if (!embedsPanel) return;
    let dragSrc = null;
    embedsPanel.addEventListener('dragstart', (e) => {
      const item = e.target.closest && e.target.closest('.embedded-item');
      if (!item) return;
      dragSrc = item;
      try { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', item.dataset.embedId || ''); } catch (er) {}
      item.classList.add('dragging');
    });
    embedsPanel.addEventListener('dragover', (e) => {
      e.preventDefault();
      const target = e.target.closest && e.target.closest('.embedded-item');
      if (!target || !dragSrc || target === dragSrc) return;
      const rect = target.getBoundingClientRect();
      const before = (e.clientY - rect.top) < (rect.height / 2);
      if (before) target.parentNode.insertBefore(dragSrc, target);
      else target.parentNode.insertBefore(dragSrc, target.nextSibling);
    });
    embedsPanel.addEventListener('drop', (e) => {
      e.preventDefault();
      if (dragSrc) dragSrc.classList.remove('dragging');
      dragSrc = null;
      persistEmbedOrder();
    });
    embedsPanel.addEventListener('dragend', () => { if (dragSrc) dragSrc.classList.remove('dragging'); dragSrc = null; });
  }

  function persistEmbedOrder() {
    try {
      const metaEl = drawerBody && drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
      if (!metaEl) return;
      let list = [];
      try { list = JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]'); } catch (e) { list = []; }
      const order = Array.from(embedsPanel.querySelectorAll('.embedded-item')).map(n => n.dataset.embedId);
      const newList = order.map(id => list.find(x => x && x.id === id)).filter(Boolean);
      try { metaEl.textContent = JSON.stringify(newList); } catch (e) { metaEl.setAttribute('data-embeds', JSON.stringify(newList)); }
      document.dispatchEvent(new CustomEvent('embed:inserted', { detail: { wasEdit: true } }));
    } catch (e) { console.warn('Failed to persist embed order', e); }
  }

  function getIframeSrcFromHtml(html) {
    try {
      const tmp = document.createElement('div'); tmp.innerHTML = String(html || '');
      const iframe = tmp.querySelector && tmp.querySelector('iframe');
      return iframe ? (iframe.getAttribute('src') || '') : '';
    } catch (e) { return ''; }
  }

  function getThumbnailForEmbed(html, title) {
    const src = getIframeSrcFromHtml(html);
    if (!src) return makeSvgDataUrl(title || '3D Model');
    // YouTube
    const ytMatch = src.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
    if (ytMatch && ytMatch[1]) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
    // Vimeo (try vumbnail as a lightweight fallback)
    const vimeoMatch = src.match(/vimeo\.com\/(?:video\/)?(\d+)/i) || src.match(/player\.vimeo\.com\/video\/(\d+)/i);
    if (vimeoMatch && vimeoMatch[1]) return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
    // Sketchfab - try to extract model id from url like /models/{id}/ or /models/{id}/embed
    const skMatch = src.match(/sketchfab\.com\/models\/([a-zA-Z0-9_-]+)/i);
    if (skMatch && skMatch[1]) return makeSvgDataUrl(title || 'Sketchfab');
    return makeSvgDataUrl(title || '3D Model');
  }

  function makeSvgDataUrl(text) {
    const safe = String(text).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='100%' height='100%' fill='%23202a36'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Segoe UI,Inter,Arial' font-size='20'>${safe}</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  return { openEmbedModal, closeEmbedModalPanel, buildSafeEmbedMarkup, attachEventListeners, buildEmbedTile };
}
