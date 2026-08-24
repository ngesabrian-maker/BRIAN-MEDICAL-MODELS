// Backend Express server (local) — we try remote first and fall back to localStorage
const API_ROOT = 'http://localhost:3001';
const LOCAL_KEY = 'brian_notes_local_v1';

function localKey(organId, partId, subject) {
  return `${organId}||${normalizePartId(partId)}||${subject}`;
}

function readLocalStore() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

function writeLocalStore(obj) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(obj));
  } catch (e) {
    console.warn('Failed to write local notes', e);
  }
}

function normalizePartId(value) {
  return value === undefined || value === null ? '' : String(value);
}

export async function getNoteRemote(organId, partId, subject) {
  // try remote
  try {
    const params = new URLSearchParams();
    params.set('organId', organId || '');
    params.set('partId', normalizePartId(partId));
    params.set('subject', subject || '');
    const res = await fetch(`${API_ROOT}/api/note?${params.toString()}`);
    if (res.ok) {
      const j = await res.json();
      if (j && typeof j.content === 'string' && j.content.length > 0) return j.content;
    }
  } catch (e) {
    // fall through to local
  }

  const local = readLocalStore();
  return local[localKey(organId, normalizePartId(partId), subject)] || null;
}

export async function upsertNoteRemote(organId, partId, subject, content) {
  // try remote
  try {
    const res = await fetch(`${API_ROOT}/api/note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organId, partId: normalizePartId(partId), subject, content })
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // fall back to local
  }

  const local = readLocalStore();
  local[localKey(organId, normalizePartId(partId), subject)] = content;
  writeLocalStore(local);
  return { ok: true, fallback: true };
}

export async function listNotesRemote() {
  try {
    const res = await fetch(`${API_ROOT}/api/notes`);
    if (res.ok) return await res.json();
  } catch (e) {
    // fall back to local store
    const local = readLocalStore();
    return Object.keys(local).map(k => {
      const [organId, partId, subject] = k.split('||');
      return { organId, partId: partId || null, subject, content: local[k] };
    });
  }
  return [];
}

export async function syncLocalToServer() {
  const local = readLocalStore();
  const keys = Object.keys(local);
  if (keys.length === 0) return { ok: true, migrated: 0 };
  // check server availability
  try {
    const check = await fetch(`${API_ROOT}/api/notes`);
    if (!check.ok) throw new Error('server unreachable');
  } catch (e) {
    return { ok: false, reason: 'server-unreachable' };
  }

  let migrated = 0;
  for (const k of keys) {
    const [organId, partId, subject] = k.split('||');
    const content = local[k];
    try {
      await fetch(`${API_ROOT}/api/note`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organId, partId: normalizePartId(partId), subject, content })
      });
      migrated++;
    } catch (e) {
      console.warn('Failed to migrate note', k, e);
    }
  }

  // optionally clear local store after migration
  try { localStorage.removeItem(LOCAL_KEY); } catch (e) {}
  return { ok: true, migrated };
}

export function exportDbUrl() {
  // prefer server export, otherwise provide local JSON download
  const url = `${API_ROOT}/api/export`;
  return url;
}

export async function importDbFile(file) {
  // attempt server import, otherwise load JSON into local store
  try {
    const fd = new FormData();
    fd.append('dbfile', file);
    const res = await fetch(`${API_ROOT}/api/import`, { method: 'POST', body: fd });
    if (!res.ok) throw new Error('Failed to import DB');
    return await res.json();
  } catch (e) {
    // if uploaded JSON, try to parse and merge
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (typeof parsed === 'object') {
        writeLocalStore(parsed);
        return { ok: true, fallback: true };
      }
    } catch (e2) {
      throw new Error('Import failed');
    }
  }
}
