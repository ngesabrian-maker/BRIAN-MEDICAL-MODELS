import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DB_DIR, 'notes.db');
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const sqlite = sqlite3.verbose();
const db = new sqlite.Database(DB_FILE);

function normalizePartId(value) {
  return value === undefined || value === null ? '' : String(value);
}

const starterNotes = [
  {
    organId: 'heart',
    partId: '',
    subject: 'anatomy',
    content: `<h3>Heart — Basic Anatomy</h3>
<p>The heart has four chambers: two atria and two ventricles. Valves ensure unidirectional blood flow (tricuspid, pulmonary, mitral, aortic). Coronary arteries supply the myocardium.</p>
<p><strong>Study tasks:</strong> Identify chambers on the model; trace blood flow; label the major valves.</p>`
  },
  {
    organId: 'heart',
    partId: 'left-ventricle',
    subject: 'anatomy',
    content: `<h4>Left Ventricle</h4>
<p>Thick muscular wall responsible for generating systemic arterial pressure. Note trabeculations (trabeculae carneae) and the aortic outflow tract.</p>`
  },
  {
    organId: 'brain',
    partId: '',
    subject: 'anatomy',
    content: `<h3>Brain — Overview</h3>
<p>Cerebrum (lobes), cerebellum, and brainstem. Focus on major functional regions: frontal (motor), parietal (sensory), temporal (auditory/memory), occipital (vision).</p>`
  },
  {
    organId: 'lungs',
    partId: '',
    subject: 'anatomy',
    content: `<h3>Lungs</h3>
<p>Paired organs for gas exchange. Bronchial branching leads to alveoli where diffusion occurs. Remember ventilation-perfusion matching.</p>`
  }
];

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS notes (
    organId TEXT,
    partId TEXT DEFAULT '',
    subject TEXT,
    content TEXT,
    embeds TEXT DEFAULT '[]',
    PRIMARY KEY (organId, partId, subject)
  )`);

  const stmt = db.prepare('INSERT OR REPLACE INTO notes (organId, partId, subject, content, embeds) VALUES (?, ?, ?, ?, ?)');
  for (const n of starterNotes) {
    stmt.run(n.organId, normalizePartId(n.partId), n.subject, n.content, JSON.stringify([]));
  }
  stmt.finalize((err) => {
    if (err) console.error('Failed finalizing seed statements:', err);
    db.close((err2) => {
      if (err2) console.error('Failed closing DB after seed:', err2);
      else console.log(`Seed complete — inserted ${starterNotes.length} notes into ${DB_FILE}`);
    });
  });
});

// Usage: `node seed-notes.js` (run from project root). This writes/updates `data/notes.db`.
