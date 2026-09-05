let SQL = null;
let webDb = null; // sql.js DB instance for web
let nativeConn = null; // Capacitor native DB connection
const STORAGE_KEY = 'brian_sqlite_db_v1';
const DB_SCHEMA_VERSION_KEY = 'brian_db_schema_version';
const CURRENT_DB_SCHEMA_VERSION = 2;

function toBase64(uint8arr) {
  let binary = '';
  const len = uint8arr.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8arr[i]);
  }
  return btoa(binary);
}

function fromBase64(b64) {
  const binary = atob(b64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function normalizePartId(value) {
  return value === undefined || value === null ? '' : String(value);
}

function isNativeCapacitor() {
  try {
    return typeof window !== 'undefined' && window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform();
  } catch (e) {
    return false;
  }
}

function getStoredVersion() {
  try {
    if (typeof localStorage === 'undefined') return 0;
    const value = localStorage.getItem(DB_SCHEMA_VERSION_KEY);
    return value ? Number(value) || 0 : 0;
  } catch (e) {
    return 0;
  }
}

function setStoredVersion(version) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(DB_SCHEMA_VERSION_KEY, String(version));
    }
  } catch (e) {
    console.warn('Failed to persist DB schema version', e);
  }
}

function getColumnNamesFromPragmaResult(result) {
  if (!result || !Array.isArray(result) || result.length === 0) return [];
  const rows = Array.isArray(result[0] && result[0].values) ? result[0].values : [];
  return rows.map(row => row && row[1] ? String(row[1]) : '').filter(Boolean);
}

async function ensureNativeSchema() {
  if (!nativeConn) return { ok: true, version: CURRENT_DB_SCHEMA_VERSION };

  const createStmt = `CREATE TABLE IF NOT EXISTS notes (
    organId TEXT,
    partId TEXT DEFAULT '',
    subject TEXT,
    content TEXT,
    embeds TEXT DEFAULT '[]',
    PRIMARY KEY (organId, partId, subject)
  );`;

  try {
    if (typeof nativeConn.execute === 'function') {
      await nativeConn.execute({ statements: createStmt });
    } else if (typeof nativeConn.run === 'function') {
      await nativeConn.run(createStmt);
    }
  } catch (e) {
    console.warn('Failed to create notes table in native DB', e);
  }

  try {
    const pragma = typeof nativeConn.query === 'function' ? await nativeConn.query({ statement: "PRAGMA table_info('notes')", values: [] }) : null;
    const cols = getColumnNamesFromPragmaResult(pragma && pragma.values ? [pragma] : []);
    if (!cols.includes('partId')) {
      await nativeConn.run("ALTER TABLE notes ADD COLUMN partId TEXT DEFAULT ''");
    }
    if (!cols.includes('embeds')) {
      await nativeConn.run("ALTER TABLE notes ADD COLUMN embeds TEXT DEFAULT '[]'");
    }
  } catch (e) {
    console.warn('Native notes table migration failed gracefully', e);
  }

  setStoredVersion(CURRENT_DB_SCHEMA_VERSION);
  return { ok: true, version: CURRENT_DB_SCHEMA_VERSION };
}

async function ensureWebSchema() {
  if (!webDb) return { ok: true, version: CURRENT_DB_SCHEMA_VERSION };

  webDb.run(`CREATE TABLE IF NOT EXISTS notes (
    organId TEXT,
    partId TEXT DEFAULT '',
    subject TEXT,
    content TEXT,
    embeds TEXT DEFAULT '[]',
    PRIMARY KEY (organId, partId, subject)
  )`);

  try {
    const info = webDb.exec("PRAGMA table_info('notes')");
    const cols = getColumnNamesFromPragmaResult(info);
    if (!cols.includes('partId')) {
      webDb.run("ALTER TABLE notes ADD COLUMN partId TEXT DEFAULT ''");
    }
    if (!cols.includes('embeds')) {
      webDb.run("ALTER TABLE notes ADD COLUMN embeds TEXT DEFAULT '[]'");
    }
  } catch (e) {
    console.warn('Web notes table migration failed gracefully', e);
  }

  setStoredVersion(CURRENT_DB_SCHEMA_VERSION);
  return { ok: true, version: CURRENT_DB_SCHEMA_VERSION };
}

export async function ensureDbSchema() {
  const currentVersion = getStoredVersion();
  if (currentVersion >= CURRENT_DB_SCHEMA_VERSION && (nativeConn || webDb)) {
    return { ok: true, version: currentVersion };
  }

  if (nativeConn) {
    return ensureNativeSchema();
  }
  if (webDb) {
    return ensureWebSchema();
  }
  return { ok: true, version: CURRENT_DB_SCHEMA_VERSION };
}

// initialize DB: prefer native Capacitor SQLite, otherwise use sql.js (in-browser)
export async function initDB() {
  if (isNativeCapacitor() && !nativeConn) {
    try {
      const capMod = await import('@capacitor/core');
      const sqliteMod = await import('@capacitor-community/sqlite');
      const { Capacitor } = capMod;
      const { CapacitorSQLite } = sqliteMod;

      const sqlite = CapacitorSQLite && (CapacitorSQLite.CapacitorSQLite || CapacitorSQLite) ? (CapacitorSQLite.CapacitorSQLite || CapacitorSQLite) : CapacitorSQLite;
      // create connection (try a couple of API shapes)
      try {
        // some versions expose a class instance
        nativeConn = await sqlite.createConnection({ database: 'notes_db', iosDatabaseLocation: 'default' });
      } catch (e) {
        try {
          // alternative call signature
          nativeConn = await sqlite.createConnection('notes_db', false, 'no-encryption', 1);
        } catch (e2) {
          // fallback: try openConnection/open
          if (typeof sqlite.open === 'function') {
            nativeConn = await sqlite.open({ database: 'notes_db' });
          }
        }
      }

      if (nativeConn && typeof nativeConn.open === 'function') {
        await nativeConn.open();
      }

      await ensureNativeSchema();
      return { type: 'native', conn: nativeConn };
    } catch (e) {
      console.warn('Capacitor SQLite init failed, falling back to web sql.js', e);
      // fall through to web
    }
  }

  // Web fallback: sql.js
  if (webDb) {
    await ensureWebSchema();
    return { type: 'web', db: webDb };
  }
  if (!SQL) {
    try {
      const mod = await import('sql.js/dist/sql-wasm.js');
      const initSqlJs = mod && (mod.default || mod);
      SQL = await initSqlJs({ locateFile: file => `/node_modules/sql.js/dist/${file}` });
    } catch (e) {
      const mod = await import('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js');
      const initSqlJs = mod && (mod.default || mod);
      SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}` });
    }
  }

  const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
  if (saved) {
    try {
      const u8 = fromBase64(saved);
      webDb = new SQL.Database(u8);
    } catch (e) {
      console.warn('Failed to load saved DB, creating new one', e);
      webDb = new SQL.Database();
    }
  } else {
    webDb = new SQL.Database();
  }

  await ensureWebSchema();
  return { type: 'web', db: webDb };
}

export async function saveDB() {
  if (nativeConn) {
    // native connection persists automatically; no-op
    return;
  }
  if (!webDb) return;
  await ensureWebSchema();
  const data = webDb.export();
  const b64 = toBase64(data);
  try { localStorage.setItem(STORAGE_KEY, b64); } catch (e) { console.warn('saveDB failed', e); }
}

async function execNativeQuery(sql, values = []) {
  if (!nativeConn) return null;
  // prefer query/run/execute depending on API
  if (typeof nativeConn.query === 'function') {
    const res = await nativeConn.query({ statement: sql, values });
    return res && res.values ? res : null;
  }
  if (typeof nativeConn.run === 'function') {
    await nativeConn.run(sql, values);
    return null;
  }
  if (typeof nativeConn.execute === 'function') {
    await nativeConn.execute({ statements: sql });
    return null;
  }
  // last resort: try global plugin execute
  try {
    const sqliteMod = await import('@capacitor-community/sqlite');
    const sqlite = sqliteMod.CapacitorSQLite || sqliteMod;
    if (sqlite && typeof sqlite.execute === 'function') {
      await sqlite.execute({ statements: sql });
    }
  } catch (e) {}
  return null;
}

export async function getNote(organId, partId, subject) {
  const normalizedPartId = normalizePartId(partId);
  if (nativeConn) {
    const q = `SELECT content FROM notes WHERE organId = ? AND COALESCE(partId,'') = ? AND subject = ?`;
    // many native APIs support `query` with values
    try {
      if (typeof nativeConn.query === 'function') {
        const res = await nativeConn.query({ statement: q, values: [organId, normalizedPartId, subject] });
        if (res && res.values && res.values.length) return res.values[0][0];
      } else {
        // fallback to run then query
        await execNativeQuery(q, [organId, normalizedPartId, subject]);
      }
    } catch (e) {
      console.warn('native getNote failed', e);
    }
    return null;
  }

  if (!webDb) return null;
  const stmt = webDb.prepare('SELECT content FROM notes WHERE organId = ? AND COALESCE(partId, "") = ? AND subject = ?');
  stmt.bind([organId, normalizedPartId, subject]);
  if (stmt.step()) {
    const row = stmt.getAsObject();
    stmt.free();
    return row.content;
  }
  stmt.free();
  return null;
}

export async function upsertNote(organId, partId, subject, content) {
  const normalizedPartId = normalizePartId(partId);
  if (nativeConn) {
    const insert = `INSERT OR REPLACE INTO notes (organId, partId, subject, content) VALUES (?, ?, ?, ?);`;
    try {
      if (typeof nativeConn.run === 'function') {
        await nativeConn.run(insert, [organId, normalizedPartId, subject, content]);
      } else if (typeof nativeConn.execute === 'function') {
        await nativeConn.execute({ statements: `BEGIN; ${insert.replace(/;$/,'')}; COMMIT;` });
      } else {
        await execNativeQuery(insert, [organId, normalizedPartId, subject, content]);
      }
      return { ok: true };
    } catch (e) {
      console.warn('native upsert failed', e);
      return { ok: false, error: e.message };
    }
  }

  if (!webDb) return { ok: false };
  const insert = `INSERT OR REPLACE INTO notes (organId, partId, subject, content) VALUES (?, ?, ?, ?)`;
  webDb.run(insert, [organId, normalizedPartId, subject, content]);
  await saveDB();
  return { ok: true };
}

export async function queryDb(sql, params = []) {
  await initDB();

  if (nativeConn) {
    try {
      if (typeof nativeConn.query === 'function') {
        const res = await nativeConn.query({ statement: sql, values: params });
        if (res && res.values) return res.values;
      }
    } catch (e) {
      console.warn('native queryDb failed', e);
    }
    return [];
  }

  if (!webDb) return [];
  const res = webDb.exec(sql);
  if (!res || res.length === 0) return [];
  return res[0].values || [];
}

export async function getAllNotes() {
  const rows = await queryDb('SELECT organId, partId, subject, content FROM notes');
  return rows.map(r => ({ organId: r[0], partId: r[1], subject: r[2], content: r[3] }));
}

export async function fetchNotesFromSqlite() {
  return getAllNotes();
}

export async function closeDB() {
  try {
    if (nativeConn) {
      if (typeof nativeConn.close === 'function') await nativeConn.close();
      try {
        const sqliteMod = await import('@capacitor-community/sqlite');
        const sqlite = sqliteMod.CapacitorSQLite || sqliteMod;
        if (sqlite && typeof sqlite.closeConnection === 'function') await sqlite.closeConnection({ database: 'notes_db' });
      } catch (e) {}
      nativeConn = null;
    }
  } finally {
    // keep webDb in memory
  }
}