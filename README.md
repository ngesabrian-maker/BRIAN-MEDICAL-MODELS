# Brian Meds Documentation

## 1. Overview

Brian Notes is a web, android and desktop anatomy and other medical related learning application built to explore human organ systems, view 3D model previews when available, and maintain study notes by organ and subject area. The project combines a Vite frontend, a Babylon.js 3D viewer, an Express API for note storage, and a Tauri desktop shell for packaged application distribution.

The interface is organized around:

- Organ systems such as cardiovascular, respiratory, digestive, nervous, and urinary
- Subject filters like Anatomy, Biochemistry, Physiology, Parasitology, and Microbiology
- Interactive organ selection from the sidebar
- Notes drawer for reading and editing notes
- SQLite-backed note persistence with local fallback and synchronization support
- Optional desktop packaging through Tauri

---

## 2. Project Goals

This application is designed for medical and anatomy study workflows, especially when learners want to:

- browse organ systems visually
- inspect organ-specific details
- access notes by subject area
- save notes locally or server-side
- export/import note databases
- use the same project in both browser and desktop environments

---

## 3. Technology Stack

### Frontend

- Vite
- JavaScript / ES modules
- HTML and CSS
- Babylon.js for 3D model rendering

### Backend

- Node.js
- Express.js
- SQLite via sqlite3
- CORS and multipart upload support via multer

### Desktop wrapper

- Tauri 2
- Rust backend
- Desktop packaging configuration

### Key dependencies

From [package.json](package.json):

- @babylonjs/core
- @babylonjs/loaders
- express
- sqlite3
- sql.js
- multer
- cors
- @tauri-apps/cli
- vite
- concurrently

---

## 4. High-Level Architecture

The project has three major layers:

1. Frontend UI layer
   - Managed by Vite and browser JavaScript
   - Contains the organ tree, subject selectors, notes drawer, and 3D canvas

2. Data/notes layer
   - Express API stores notes in SQLite
   - Client falls back to localStorage when the backend is unavailable
   - Export/import endpoints support database transfer

3. Desktop app layer
   - Tauri wraps the web frontend into a desktop application
   - The desktop config points to the built frontend assets and runs the app in a native window

In practical terms, the browser client talks to the backend API at http://localhost:3001 while the desktop version uses the same frontend logic inside Tauri.

---

## 5. Folder Structure

```text
BRIAN/
├─ data/                     # SQLite DB storage and persistent app data
├─ models/                   # 3D model files and asset folders
├─ public/                   # Static public assets
├─ uploads/                  # Temporary upload directory for DB imports
├─ src/                      # Frontend source files
│  ├─ api.js                 # Remote/local note sync helpers
│  ├─ db.js                 # SQLite-related logic or data helpers
│  ├─ main.js               # Main UI logic and Babylon scene setup
│  ├─ organs.js             # Organ/system data catalog
│  ├─ style.css             # Frontend styling
│  └─ assets/               # UI assets
├─ src-tauri/                # Tauri app configuration and Rust shell
│  ├─ src/                  # Rust app code
│  ├─ capabilities/         # Tauri capabilities config
│  ├─ icons/                # App icon assets
│  ├─ Cargo.toml            # Rust package manifest
│  ├─ build.rs              # Rust build script
│  └─ tauri.conf.json       # Desktop app settings
├─ index.html                # App entry page
├─ server.js                 # Express note API server
├─ style.css                 # App-level CSS
├─ vite.config.js            # Vite config
├─ package.json              # Scripts and dependencies
├─ package-lock.json         # Lock file
├─ README.md                 # Project documentation
└─ ...
```

---

## 6. Application Workflow

### Web app flow

1. The page loads in the browser.
2. The sidebar renders organ systems and subject buttons.
3. The user selects a subject and organ.
4. Babylon.js loads a 3D model if the organ has a valid model path and file.
5. The notes drawer opens for the selected organ or part.
6. Notes are fetched from the backend or local storage.
7. The user can edit notes and save them.
8. Notes can be synchronized back to the server.

### Notes flow

- Each note is stored by:
  - organId
  - partId
  - subject
  - content
- This makes it possible to keep separate note records for anatomy, physiology, etc., for the same organ.

---

## 7. Core Files

### [index.html](index.html)

The page layout includes:

- sidebar with subjects and organs
- main viewer canvas
- 3D model placeholder
- notes drawer UI
- note-related controls

### [src/main.js](src/main.js)

This is the main frontend runtime. It handles:

- scene creation and camera setup
- organ selection and rendering
- model loading
- subject selection state
- notes drawer behavior
- modal or drawer editing flow
- UI interactions for notes viewing and synchronization

### [src/organs.js](src/organs.js)

This file defines the anatomy dataset. It contains:

- system definitions
- organ metadata
- model file references
- notes templates and content blocks
- part metadata for substructures like ventricles and lobes

### [src/api.js](src/api.js)

This file centralizes API calls and local fallback logic. It provides functions like:

- getNoteRemote
- upsertNoteRemote
- listNotesRemote
- syncLocalToServer
- exportDbUrl
- importDbFile

### [server.js](server.js)

The Express server provides the backend API. It:

- opens and initializes the SQLite database
- exposes endpoints for reading and writing notes
- supports database export
- supports database import via multipart upload
- serves static files for preview use

---

## Components

- **Main (app entry):** App bootstrap, Babylon scene and camera setup, organ selection, model loading, and UI wiring — see [src/main.js](src/main.js#L1).
- **Data catalog (`SYSTEMS`):** Organ/system dataset, model metadata, notes templates, and part definitions — see [src/organs.js](src/organs.js#L1).
- **API layer:** Remote and fallback note storage, sync, import/export helpers (`getNoteRemote`, `upsertNoteRemote`, `syncLocalToServer`) — see [src/api.js](src/api.js#L1).
- **Storage (DB):** SQLite initialization and query layer with native (Capacitor) and web sql.js fallbacks (`initDB`, `getNote`, `upsertNote`) — see [src/db.js](src/db.js#L1).
- **Notes formatting:** Sanitization and conversion of plain/text or HTML notes, media path resolution, and safe embed handling (`formatNoteContent`, `sanitizeEmbedHtml`) — see [src/notes.js](src/notes.js#L1).
- **Drawer controller:** Notes drawer behavior, edit/save state, embed metadata rendering, and accessibility handling (`createDrawerController`) — see [src/drawer.js](src/drawer.js#L1).
- **Embed modal:** Insert/edit trusted iframe embeds, build embed tiles, drag-and-drop ordering, and focus trapping (`createEmbedController`) — see [src/embed-modal.js](src/embed-modal.js#L1).
- **Media helper:** File reading and upload fallback; inserts image/video markup into editor (`createMediaController`) — see [src/media.js](src/media.js#L1).
- **UI helpers:** Theme toggling and sidebar state persistence (`createUiController`) — see [src/ui.js](src/ui.js#L1).
- **Utilities / examples:** Small helper like `setupCounter` for quick UI demos — see [src/counter.js](src/counter.js#L1).
- **Styles & assets:** Core styles live in [src/style.css](src/style.css#L1) and project-level [style.css](style.css), with static assets under `src/assets/`.

This section provides a quick mapping from runtime responsibilities to source files so contributors can find the code implementing each feature.

## 8. API Reference

The backend server runs on port 3001 by default.

### Base URL

```text
http://localhost:3001
```

### GET /api/note

Gets a single note.

Query parameters:

- organId
- partId
- subject

Example:

```http
GET /api/note?organId=heart&partId=left-ventricle&subject=anatomy
```

Response:

```json
{
  "content": "<p>Left ventricle: ...</p>"
}
```

### POST /api/note

Creates or updates a note.

Body:

```json
{
  "organId": "heart",
  "partId": "left-ventricle",
  "subject": "anatomy",
  "content": "<p>Example note content</p>"
}
```

Response:

```json
{
  "ok": true
}
```

### GET /api/notes

Returns all notes in the database.

Response:

```json
[
  {
    "organId": "heart",
    "partId": "left-ventricle",
    "subject": "anatomy",
    "content": "<p>Example note</p>"
  }
]
```

### GET /api/export

Downloads the current SQLite database as notes.db.

### POST /api/import

Uploads a database file for replacement.

Expected multipart field:

- dbfile

---

## 9. Data Model

Notes are stored in a SQLite table named notes.

Schema:

```sql
CREATE TABLE IF NOT EXISTS notes (
  organId TEXT,
  partId TEXT DEFAULT '',
  subject TEXT,
  content TEXT,
  PRIMARY KEY (organId, partId, subject)
)
```

This allows per-topic note records for each organ or part.

---

## 10. Local Storage Fallback

If the server is unavailable, the client uses localStorage. The logic in [src/api.js](src/api.js) stores notes using a composite key:

```text
organId||partId||subject
```

The application supports syncing saved local notes back to the server using:

```js
syncLocalToServer();
```

This is especially useful when running the app without a stable backend service.

---

## 11. 3D Model Integration

The app uses Babylon.js to load organ models.

The viewer logic in [src/main.js](src/main.js) does the following:

- creates an engine and scene
- sets up an ArcRotateCamera
- adds a hemispheric light
- loads models with SceneLoader.AppendAsync
- disposes the previous scene before loading a new model

Model metadata is declared in [src/organs.js](src/organs.js), where each organ may define:

- modelPath
- modelFile
- notes
- parts

Some organs do not currently have valid model files, which triggers the placeholder message in the viewer.

---

## 12. Subject Areas

The application includes the following study categories:

- Anatomy
- Biochemistry
- Physiology
- Parasitology
- Microbiology

These subject filters drive the note content displayed for each organ and part.

---

## 13. Running the Project

### Install dependencies

```bash
npm install
```

### Start the web app with backend and Vite

```bash
npm run dev
```

This script runs:

- Express server on port 3001
- Vite frontend development server

### Start only the backend API

```bash
npm run start:server
```

### Start backend in development mode

```bash
npm run dev:server
```

### Build the frontend for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 14. Desktop App (Tauri)

The project also supports packaging as a desktop application.

### Run in desktop development mode

```bash
npm run dev:desktop
```

This uses the Tauri CLI and launches the native desktop app.

### Build desktop installer/bundle

```bash
npm run build:desktop
```

Desktop configuration is defined in [src-tauri/tauri.conf.json](src-tauri/tauri.conf.json).

The app metadata includes:

- product name: Brian Meds
- application identifier: com.brian.app
- window width/height
- bundle settings for desktop packaging

---

## 15. Development Notes

### Frontend behavior

The app currently relies on a dynamic data structure where organ definitions and their notes are embedded in [src/organs.js](src/organs.js). This makes it easy to add new organs, systems, and note content without changing the UI logic heavily.

### Data extensibility

To extend the app:

1. Add a new system in [src/organs.js](src/organs.js)
2. Add an organ entry with metadata and notes
3. Optionally add subparts and their own note content
4. Add a model path/file if a 3D preview should be available

### Potential enhancements

The current codebase is a solid base for future improvements such as:

- search and filtering across organs
- richer note editing tools
- image attachments
- export to CSV/JSON
- user accounts
- cloud sync
- full interactive anatomical labeling

---

## 16. Common Tasks

### Add a new organ

Edit [src/organs.js](src/organs.js) and add a new object under a system's organs array.

Example structure:

```js
{
  id: "kidney",
  name: "Kidney",
  modelPath: null,
  modelFile: null,
  notes: {
    anatomy: "<p>...</p>",
    physiology: "<p>...</p>"
  }
}
```

### Add a note for a specific organ/part

Use the note data under the chosen organ or part and set the appropriate subject key.

### Export notes

Direct the browser to the server export endpoint or use the app's UI if present.

### Import notes

Use the import endpoint and upload a notes database file.

---

## 17. Known Observations

From the current code and structure:

- Some models are present while others are intentionally unset with null paths.
- The app supports both backend persistence and local fallback.
- The project is meant to be flexible for educational content and anatomy-focused note taking.
- The frontend UI is modular and easy to extend for additional anatomy systems or media.

---

## 18. Build and Deployment Considerations

### Local development

Use the Vite + Express combination for a quick local workflow.

### Production deployment

For web deployment:

- build the frontend with `npm run build`
- serve the generated bundle using an appropriate hosting service
- keep the Express API available or replace it with a production database-backed service

For desktop deployment:

- use Tauri packaging commands
- ensure the required app icons and platform resources are present

---

## 19. Troubleshooting

### Server not responding

Check whether the backend is running on port 3001.

```bash
npm run start:server
```

### Model not rendering

Verify that the organ has valid model metadata in [src/organs.js](src/organs.js).

### Notes not saving

Check whether the backend is reachable and whether the browser has localStorage available.

### Tauri build issues

Confirm dependencies are installed and Rust toolchain is available for the Tauri environment.

---

## 20. Summary

Brian Meds is an anatomy-focused educational application combining 3D visualization, structured note-taking, and cross-platform deployment. It is designed for study workflows where a learner needs quick access to organ information, subject-specific notes, and persistent data storage.

The project is practical, modular, and well-suited for future expansion into richer educational content and data management features.

---

## 21. Quick Start

```bash
npm install
npm run dev
```

Then open the app in the browser and interact with the anatomy system list.

For desktop use:

```bash
npm run dev:desktop

npm run build:desktop
```

---

## 22. Notes for Maintainers

- Prefer adding new anatomy content in [src/organs.js](src/organs.js)
- Keep API compatibility consistent in [src/api.js](src/api.js)
- Validate note structure before adding new subject labels
- Rebuild the app after major data or UI changes

This documentation reflects the current implementation as seen in the repository structure and source files.
