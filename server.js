import express from 'express';
import path from 'path';
import fs from 'fs';
import os from 'os';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sqlite = sqlite3.verbose();

const DB_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DB_DIR, 'notes.db');
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const normalizePartId = (value) => value === undefined || value === null ? '' : String(value);

// ensure DB exists
let db = new sqlite.Database(DB_FILE, (err) => {
  if (err) {
    console.error('Failed to open DB file', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS notes (
      organId TEXT,
      partId TEXT DEFAULT '',
      subject TEXT,
      content TEXT,
      embeds TEXT DEFAULT '[]',
      PRIMARY KEY (organId, partId, subject)
    )`);
    // ensure legacy DBs get an embeds column
    db.all("PRAGMA table_info('notes')", (err, cols) => {
      if (!err && Array.isArray(cols)) {
        const hasEmbeds = cols.some(c => c && c.name === 'embeds');
        if (!hasEmbeds) {
          try {
            db.run("ALTER TABLE notes ADD COLUMN embeds TEXT DEFAULT '[]'");
            console.log('Migrated notes table: added embeds column');
          } catch (e) {
            console.warn('Failed to add embeds column', e);
          }
        }
      }
    });
    console.log('SQLite DB ready at', DB_FILE);
  }
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

function getReachableLanIps() {
  const interfaces = os.networkInterfaces();
  const addresses = new Set();

  for (const details of Object.values(interfaces)) {
    for (const detail of details || []) {
      if (detail.family !== 'IPv4' || detail.internal) continue;
      const ip = detail.address;
      if (/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip) || /^169\.254\./.test(ip)) {
        addresses.add(ip);
      }
    }
  }

  return Array.from(addresses).sort((a, b) => a.localeCompare(b));
}

app.get('/api/network-ip', (req, res) => {
  const ips = getReachableLanIps();
  res.json({ ips, preferred: ips[0] || 'localhost' });
});

// API: get a note
app.get('/api/note', (req, res) => {
  const { organId, partId, subject } = req.query;
  const normalizedPartId = normalizePartId(partId);
  db.get('SELECT content, embeds FROM notes WHERE organId = ? AND COALESCE(partId, "") = ? AND subject = ?', [organId, normalizedPartId, subject], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.json({ content: null, embeds: [] });
    let embeds = [];
    try { embeds = row.embeds ? JSON.parse(row.embeds) : []; } catch (e) { embeds = []; }
    res.json({ content: row.content, embeds });
  });
});

// API: upsert note
app.post('/api/note', (req, res) => {
  const { organId, partId, subject, content } = req.body;
  let { embeds } = req.body;
  if (!Array.isArray(embeds)) embeds = embeds ? embeds : [];
  if (!organId || !subject) return res.status(400).json({ error: 'organId and subject required' });
  const normalizedPartId = normalizePartId(partId);
  db.run('INSERT OR REPLACE INTO notes (organId, partId, subject, content, embeds) VALUES (?, ?, ?, ?, ?)', [organId, normalizedPartId, subject, content, JSON.stringify(embeds)], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ok: true });
  });
});

// API: list all notes
app.get('/api/notes', (req, res) => {
  db.all('SELECT organId, partId, subject, content, embeds FROM notes', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const normalized = (rows || []).map(r => {
      let embeds = [];
      try { embeds = r.embeds ? JSON.parse(r.embeds) : []; } catch (e) { embeds = []; }
      return { organId: r.organId, partId: r.partId, subject: r.subject, content: r.content, embeds };
    });
    res.json(normalized);
  });
});

// Export DB file for download
app.get('/api/export', (req, res) => {
  res.download(DB_FILE, 'notes.db');
});

// Import DB file (multipart upload)
const upload = multer({ dest: path.join(__dirname, 'uploads') });
app.post('/api/import', upload.single('dbfile'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const tmp = req.file.path;
  fs.copyFile(tmp, DB_FILE, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    // reopen DB
    db.close(() => {
      db = new sqlite3.Database(DB_FILE, (err2) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.json({ ok: true });
      });
    });
  });
});

const mediaUpload = multer({
  dest: path.join(__dirname, 'uploads'),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const mimeOk = /^image\//i.test(file.mimetype) || /^video\//i.test(file.mimetype);
    const extOk = /\.(jpg|jpeg|png|gif|webp|bmp|svg|tif|tiff|jfif|avif|mp4|m4v|mov|webm|avi|mkv|wmv|flv|mpeg|mpg|3gp|3g2)$/i.test(file.originalname || '');
    if (!mimeOk && !extOk) {
      return cb(new Error('Only image and video files are allowed'));
    }
    cb(null, true);
  }
});

app.post('/api/upload', mediaUpload.array('media', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No media uploaded' });
  }

  const uploaded = req.files.map(file => {
    const originalExt = path.extname(file.originalname) || '';
    const safeName = `${Date.now()}-${Math.random().toString(16).slice(2)}${originalExt}`;
    const targetPath = path.join(__dirname, 'uploads', safeName);
    fs.renameSync(file.path, targetPath);
    return {
      name: file.originalname,
      url: `/uploads/${safeName}`
    };
  });

  res.json({ ok: true, files: uploaded });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static app for preview (optional)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));