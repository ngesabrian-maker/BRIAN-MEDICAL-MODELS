// media.js — helpers for reading files and inserting uploaded media into editor
export function createMediaController({ drawerBody }) {
  function readFileAsDataUrl(file) {
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

  return { readFileAsDataUrl, insertUploadedMediaFiles };
}
