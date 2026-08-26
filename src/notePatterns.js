export function resolvePermanentNoteHtml(org, part, subject) {
  const candidateSubjects = Array.from(new Set([subject, 'anatomy', 'biochemistry', 'physiology', 'parasitology', 'microbiology'].filter(Boolean)));
  const noteMaps = [
    part && part.notes ? part.notes : null,
    org && org.notes ? org.notes : null
  ].filter(Boolean);

  for (const noteMap of noteMaps) {
    for (const key of candidateSubjects) {
      const value = noteMap && noteMap[key];
      if (typeof value === 'string' && value.trim()) return value;
    }
  }

  return '';
}

export function buildDisplayNoteHtml(baseHtml, stickerHtml, options = {}) {
  const { includePermanent = true, includeSticker = true } = options;
  const permanent = typeof baseHtml === 'string' && baseHtml.trim() ? baseHtml : '<p>No notes available.</p>';
  const sticker = typeof stickerHtml === 'string' ? stickerHtml.trim() : '';
  const safeSticker = sticker || '<p>New sticker note</p>';

  if (!includePermanent && includeSticker) {
    return `<div class="user-sticker-note" data-role="sticker-note"><div class="sticker-header">Sticker note</div>${safeSticker}</div>`;
  }

  if (includePermanent && !includeSticker) {
    return `<div class="permanent-note" data-role="permanent-note">${permanent}</div>`;
  }

  return `<div class="permanent-note" data-role="permanent-note">${permanent}</div><div class="user-sticker-note" data-role="sticker-note"><div class="sticker-header">Sticker note</div>${safeSticker}</div>`;
}

export function extractStickerNoteHtml(combinedHtml) {
  const source = typeof combinedHtml === 'string' ? combinedHtml : '';
  if (!source) return '';

  if (typeof document !== 'undefined') {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = source;
    const sticker = wrapper.querySelector('.user-sticker-note[data-role="sticker-note"]');
    if (sticker) {
      const header = sticker.querySelector('.sticker-header');
      if (header) header.remove();
      return sticker.innerHTML.trim();
    }
    return source.trim();
  }

  const marker = '<div class="user-sticker-note" data-role="sticker-note">';
  const start = source.indexOf(marker);
  if (start === -1) return source.trim();

  const startInner = start + marker.length;
  const end = source.lastIndexOf('</div>');
  if (end <= startInner) return source.trim();

  const body = source.slice(startInner, end);
  return body.replace(/^<div class="sticker-header">.*?<\/div>/is, '').trim();
}

export function ensureStickerNoteMarkup(targetEl) {
  if (!targetEl) return;
  const wrapper = targetEl.querySelector ? targetEl.querySelector('.user-sticker-note[data-role="sticker-note"]') : null;
  if (wrapper) return;

  targetEl.innerHTML = `${targetEl.innerHTML || ''}<div class="user-sticker-note" data-role="sticker-note"><div class="sticker-header">Sticker note</div><p>New sticker note</p></div>`;
}

export function setStickerEditing(targetEl, isEditing) {
  if (!targetEl) return;
  if (isEditing) {
    ensureStickerNoteMarkup(targetEl);
  }
  const sticker = targetEl.querySelector && targetEl.querySelector('.user-sticker-note[data-role="sticker-note"]');
  if (sticker) {
    sticker.contentEditable = isEditing ? 'true' : 'false';
    sticker.classList.toggle('is-editing', isEditing);
    sticker.setAttribute('tabindex', isEditing ? '0' : '-1');
  }
  const permanent = targetEl.querySelector && targetEl.querySelector('[data-role="permanent-note"]');
  if (permanent) {
    permanent.contentEditable = 'false';
  }
  targetEl.contentEditable = 'false';
}
