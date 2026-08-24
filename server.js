import express from 'express';
import path from 'path';
import fs from 'fs';
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
      PRIMARY KEY (organId, partId, subject)
    )`);
    console.log('SQLite DB ready at', DB_FILE);
  }
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// API: get a note
app.get('/api/note', (req, res) => {
  const { organId, partId, subject } = req.query;
  const normalizedPartId = normalizePartId(partId);
  db.get('SELECT content FROM notes WHERE organId = ? AND COALESCE(partId, "") = ? AND subject = ?', [organId, normalizedPartId, subject], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ content: row ? row.content : null });
  });
});

// API: upsert note
app.post('/api/note', (req, res) => {
  const { organId, partId, subject, content } = req.body;
  if (!organId || !subject) return res.status(400).json({ error: 'organId and subject required' });
  const normalizedPartId = normalizePartId(partId);
  db.run('INSERT OR REPLACE INTO notes (organId, partId, subject, content) VALUES (?, ?, ?, ?)', [organId, normalizedPartId, subject, content], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ok: true });
  });
});

// API: list all notes
app.get('/api/notes', (req, res) => {
  db.all('SELECT organId, partId, subject, content FROM notes', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
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

// Serve static app for preview (optional)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
