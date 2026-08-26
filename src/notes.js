// notes.js — helpers for formatting and sanitizing note content
export function createNotesController() {
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

    wrapper.querySelectorAll('iframe').forEach(el => {
      const src = el.getAttribute('src') || '';
      const allowedOrigin = /^(https?:\/\/)?(www\.)?(sketchfab\.com|player\.vimeo\.com|www\.youtube\.com|youtube\.com|youtube-nocookie\.com|app\.microsoft\.com|3dwarehouse\.sketchup\.com|modelviewer\.dev)/i;
      if (!src || !allowedOrigin.test(src)) {
        el.remove();
        return;
      }
      el.setAttribute('loading', 'lazy');
      el.setAttribute('allowfullscreen', 'true');
      el.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      el.setAttribute('allow', 'fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    });

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

    if (!wrapper.querySelector('p, ul, ol, h1, h2, h3, h4, blockquote, figure, img, video, iframe') && wrapper.textContent.trim()) {
      wrapper.innerHTML = `<p>${escapeHtml(wrapper.textContent.trim()).replace(/\n/g, '<br>')}</p>`;
    }

    return wrapper.innerHTML || '<p>No notes available.</p>';
  }

  return { formatNoteContent, sanitizeEmbedHtml };
}
