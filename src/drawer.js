// drawer.js — controls for notes drawer behavior
import { resolvePermanentNoteHtml, buildDisplayNoteHtml, setStickerEditing } from './notePatterns.js';

export function createDrawerController({ notesDrawer, drawerBody }) {
  function setDrawerMaximized(maximized) {
    if (!notesDrawer) return;
    const viewer = document.querySelector('.viewer');
    notesDrawer.classList.toggle('is-maximized', maximized);
    notesDrawer.classList.toggle('presentation-mode', maximized);
    if (viewer) viewer.classList.toggle('presentation-mode', maximized);
    const drawerMax = document.getElementById('drawerMax');
    const drawerMin = document.getElementById('drawerMin');
    if (drawerMax) drawerMax.hidden = maximized;
    if (drawerMin) drawerMin.hidden = !maximized;
  }

  function setDrawerEditing(isEditing) {
    if (!drawerBody) return;
    setStickerEditing(drawerBody, isEditing);
    drawerBody.classList.toggle('is-editing', isEditing);
    const drawerEdit = document.getElementById('drawerEdit');
    const drawerSave = document.getElementById('drawerSave');
    const drawerUploadMedia = document.getElementById('drawerUploadMedia');
    const drawerAddEmbed = document.getElementById('drawerAddEmbed');
    if (drawerEdit) drawerEdit.hidden = isEditing;
    if (drawerSave) drawerSave.hidden = !isEditing;
    if (drawerUploadMedia) drawerUploadMedia.hidden = !isEditing;
    if (drawerAddEmbed) drawerAddEmbed.hidden = !isEditing;
  }

  function closeDrawer() {
    if (!notesDrawer) return;
    const viewer = document.querySelector('.viewer');
    notesDrawer.classList.remove('open');
    notesDrawer.classList.remove('is-maximized');
    notesDrawer.classList.remove('presentation-mode');
    if (viewer) viewer.classList.remove('presentation-mode');
    notesDrawer.setAttribute('aria-hidden', 'true');
    const drawerMax = document.getElementById('drawerMax');
    const drawerMin = document.getElementById('drawerMin');
    if (drawerMax) drawerMax.hidden = false;
    if (drawerMin) drawerMin.hidden = true;
    setDrawerEditing(false);
  }

  async function openDrawer(org, part, getNoteRemote, selectedSubject, mode = 'combined') {
    if (!notesDrawer) return;
    const organId = org && (org.id || org._id) || null;
    const partId = part && part.id || null;
    const isStickerOnly = mode === 'sticker';
    const drawerTitle = document.getElementById('drawerTitle');
    const drawerSubtitle = document.getElementById('drawerSubtitle');
    if (drawerTitle) drawerTitle.textContent = org ? (isStickerOnly ? `${org.name} — Sticker Notes` : org.name) : 'Notes';
    if (drawerSubtitle) drawerSubtitle.textContent = part ? part.name : '';
    // fetch note
    let content = null;
    let fetchedEmbeds = [];
    try {
      if (getNoteRemote) {
        const note = await getNoteRemote(organId, partId, selectedSubject);
        if (note) {
          if (typeof note === 'string') content = note;
          else if (note.content !== undefined) content = note.content;
          if (note.embeds && Array.isArray(note.embeds)) fetchedEmbeds = note.embeds;
        }
      }
    } catch (e) {
      console.warn('fetch note failed', e);
    }
    const permanentContent = resolvePermanentNoteHtml(org, part, selectedSubject) || '<p>No notes available.</p>';
    const stickerContent = typeof content === 'string' ? content : '';
    const displayHtml = buildDisplayNoteHtml(permanentContent, stickerContent, {
      includePermanent: !isStickerOnly,
      includeSticker: true
    });
    if (drawerBody) {
      drawerBody.innerHTML = displayHtml;
      // extract embed metadata and render into embeds panel if present. Prefer structured `fetchedEmbeds` when available.
      try {
        const metaEl = drawerBody.querySelector && drawerBody.querySelector('.embed-metadata');
        const embedsPanel = document.getElementById('embedsPanel');
        if (embedsPanel) embedsPanel.innerHTML = '';
        let list = [];
        if (fetchedEmbeds && fetchedEmbeds.length) list = fetchedEmbeds;
        else if (metaEl) {
          try { list = JSON.parse(metaEl.textContent || metaEl.getAttribute('data-embeds') || '[]'); } catch (e) { list = []; }
        }
        if (!list.length) {
          const panelItems = Array.from((embedsPanel || []).querySelectorAll ? (embedsPanel || []).querySelectorAll('.embedded-item') : []);
          list = panelItems.map(item => ({
            id: item.dataset.embedId || '',
            title: item.querySelector('h4') ? item.querySelector('h4').textContent : '',
            caption: item.querySelector('p') ? item.querySelector('p').textContent : '',
            html: item.dataset.embedHtml || ''
          })).filter(item => item.html || item.title || item.caption);
        }
        list.forEach(item => {
          try {
            // build compact tile with actions
            const wrapper = document.createElement('div');
            wrapper.className = 'embedded-item';
            wrapper.dataset.embedId = item.id;
            wrapper.dataset.embedHtml = item.html || '';

            const thumb = document.createElement('div');
            thumb.className = 'embed-thumb';
            const img = document.createElement('img');
            img.className = 'embed-thumb-img';
            img.alt = item.title || 'Embed thumbnail';
            // simple thumbnail heuristic: use YouTube/Vimeo when possible, otherwise SVG fallback
            try {
              const tmp = document.createElement('div'); tmp.innerHTML = item.html;
              const iframe = tmp.querySelector && tmp.querySelector('iframe');
              const src = iframe ? (iframe.getAttribute('src') || '') : '';
              if (src) {
                const ytMatch = src.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
                if (ytMatch && ytMatch[1]) img.src = `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
                else {
                  const vimeoMatch = src.match(/vimeo\.com\/(?:video\/)?(\d+)/i) || src.match(/player\.vimeo\.com\/video\/(\d+)/i);
                  if (vimeoMatch && vimeoMatch[1]) img.src = `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
                  else img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='100%' height='100%' fill='%23202a36'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Segoe UI,Inter,Arial' font-size='20'>${(item.title||'3D Model').replace(/</g,'&lt;')}</text></svg>`);
                }
              } else {
                img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='100%' height='100%' fill='%23202a36'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Segoe UI,Inter,Arial' font-size='20'>${(item.title||'3D Model').replace(/</g,'&lt;')}</text></svg>`);
              }
            } catch (e) {
              img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='100%' height='100%' fill='%23202a36'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Segoe UI,Inter,Arial' font-size='20'>${(item.title||'3D Model').replace(/</g,'&lt;')}</text></svg>`);
            }
            thumb.appendChild(img);

            const meta = document.createElement('div');
            meta.className = 'embed-meta';
            const h4 = document.createElement('h4'); h4.textContent = item.title || 'Untitled';
            const p = document.createElement('p'); p.textContent = item.caption || '';
            meta.appendChild(h4); if (item.caption) meta.appendChild(p);

              const actions = document.createElement('div'); actions.className = 'embed-actions';
              const seeBtn = document.createElement('button'); seeBtn.className = 'see-model-btn'; seeBtn.type = 'button'; seeBtn.textContent = 'See Model'; seeBtn.setAttribute('aria-label','See model in viewer'); seeBtn.title='See model';
              const upBtn = document.createElement('button'); upBtn.className = 'move-up-btn'; upBtn.type = 'button'; upBtn.textContent = '↑'; upBtn.setAttribute('aria-label','Move up'); upBtn.title='Move up';
              const downBtn = document.createElement('button'); downBtn.className = 'move-down-btn'; downBtn.type = 'button'; downBtn.textContent = '↓'; downBtn.setAttribute('aria-label','Move down'); downBtn.title='Move down';
              const editBtn = document.createElement('button'); editBtn.className = 'edit-embed-btn'; editBtn.type = 'button'; editBtn.textContent = 'Edit'; editBtn.setAttribute('aria-label','Edit embed'); editBtn.title='Edit embed';
              const delBtn = document.createElement('button'); delBtn.className = 'delete-embed-btn'; delBtn.type = 'button'; delBtn.textContent = 'Delete'; delBtn.setAttribute('aria-label','Delete embed'); delBtn.title='Delete embed';
              actions.appendChild(seeBtn); actions.appendChild(upBtn); actions.appendChild(downBtn); actions.appendChild(editBtn); actions.appendChild(delBtn);

            // Keyboard activation for accessibility (Enter/Space)
            [seeBtn, editBtn, delBtn].forEach(btn => {
              btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  btn.click();
                }
              });
            });
              // include up/down buttons in keyboard handler
              [upBtn, downBtn].forEach(btn => {
                btn.addEventListener('keydown', (e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
                });
              });

            wrapper.appendChild(thumb);
            wrapper.appendChild(meta);
            wrapper.appendChild(actions);
            if (embedsPanel) embedsPanel.appendChild(wrapper);
          } catch (e) {}
        });
      } catch (e) { console.warn('Failed to render embed metadata', e); }
    }
    setDrawerEditing(false);
    setDrawerMaximized(false);
    notesDrawer.classList.add('open');
    notesDrawer.setAttribute('aria-hidden', 'false');
  }

  return { setDrawerMaximized, setDrawerEditing, closeDrawer, openDrawer };
}
