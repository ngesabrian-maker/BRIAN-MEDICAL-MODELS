# Brian Meds Developer Guide

## Overview

Brian Meds is a Vite-based anatomy study application with a Babylon.js 3D viewer, a local SQLite-backed notes system, and a mobile-ready Capacitor setup. The project is designed for medical study workflows where users can browse organ systems, inspect anatomy data, and store per-organ and per-subject notes locally or through a REST API.

The current implementation combines:

- a frontend UI in Vite + JavaScript
- a Babylon.js 3D model viewer
- a SQLite storage layer for note persistence
- an Express REST server for notes and DB import/export
- a Capacitor wrapper for Android/iOS native builds
- optional Tauri desktop packaging

---

## Tech stack

### Core runtime

- Node.js
- Vite
- JavaScript ES modules
- Babylon.js
- Express
- SQLite (`sqlite3` and `sql.js`)
- Capacitor
- Tauri

### Key dependencies

- `@babylonjs/core`
- `@babylonjs/loaders`
- `express`
- `sqlite3`
- `sql.js`
- `multer`
- `cors`
- `@capacitor/core`
- `@capacitor-community/sqlite`
- `@capacitor/android`
- `@capacitor/ios`
- `@tauri-apps/cli`
- `concurrently`

---

## Architecture

### 1. Frontend layer

The frontend is the interactive anatomy viewer and study interface.

Relevant files:

- `index.html`
- `src/main.js`
- `src/organs.js`
- `src/style.css`

Responsibilities:

- render organ systems and subject filters
- select organs and parts
- load 3D models with Babylon.js
- open notes drawer/modal flows
- read and save notes by organ, part, and subject
- manage interaction state and viewer updates

### 2. Data layer

The app stores notes in SQLite. The storage contract is intentionally small and keyed by organ, part, and subject.

Relevant files:

- `server.js`
- `src/db.js`
- `src/api.js`

Schema used by the app:

```sql
CREATE TABLE IF NOT EXISTS notes (
  organId TEXT,
  partId TEXT DEFAULT '',
  subject TEXT,
  content TEXT,
  PRIMARY KEY (organId, partId, subject)
);
```

This allows one note per `(organId, partId, subject)` tuple. Examples:

- `heart`, `left-ventricle`, `anatomy`
- `lungs`, `right-lower-lobe`, `physiology`

### 3. REST API layer

The backend Express server exposes the database through a local REST API for inspection, import/export, and testing.

Main endpoints:

- `GET /api/note`
- `POST /api/note`
- `GET /api/notes`
- `GET /api/export`
- `POST /api/import`

### 4. Native/mobile layer

The app has been scaffolded with Capacitor to support Android and iOS packaging and device-local SQLite storage.

Relevant files:

- `capacitor.config.json`
- `android/`
- `ios/`

The intended mobile pattern is:

- native SQLite on the device
- JS reads/writes through Capacitor Community SQLite
- browser fallback remains available for web execution

---

## Project structure

```text
BRIAN/
├─ android/                  # Capacitor Android project
├─ ios/                      # Capacitor iOS project
├─ data/                     # SQLite DB folder for server usage
├─ dist/                     # Vite build output
├─ models/                   # 3D model assets
├─ public/                   # static public assets
├─ src/                      # frontend code
│  ├─ api.js                 # REST + local fallback helpers
│  ├─ db.js                 # SQLite abstraction (web + native)
│  ├─ main.js               # app bootstrap and UI logic
│  ├─ organs.js             # organ/system metadata + notes
│  ├─ style.css             # app styles
│  └─ assets/
├─ src-tauri/                # Tauri desktop project
├─ server.js                 # Express SQLite REST server
├─ capacitor.config.json     # Capacitor config
├─ index.html                # app shell
├─ package.json              # scripts and dependencies
├─ vite.config.js            # Vite config
├─ README.md                 # developer documentation
└─ ...
```

---

## Local development

### Install dependencies

```bash
npm install
```

### Start the app in dev mode

```bash
npm run dev
```

This starts the backend API and the Vite frontend together.

### Run only the backend API

```bash
npm run start:server
```

### Build the frontend

```bash
npm run build
```

### Preview the built app

```bash
npm run preview
```

---

## Database and storage behavior

### Web mode

In browser mode, the app uses `sql.js` and persists the database in `localStorage` as a base64-encoded blob. This is useful for fallback and debugging but is not the production-ready storage layer for a phone app.

### Native/mobile mode

When running in a Capacitor native environment, the app attempts to use `@capacitor-community/sqlite`. That stores the SQLite DB in the app sandbox on the device and gives true phone-local persistence.

### REST server mode

The Express server writes to the filesystem database file:

```text
data/notes.db
```

This allows the app or an external client to read and write the database via HTTP without a browser-only storage model.

---

## REST API reference

### Base URL

```text
http://localhost:3001
```

### GET /api/note

Query params:

- `organId`
- `partId`
- `subject`

Example:

```http
GET /api/note?organId=heart&partId=left-ventricle&subject=anatomy
```

Response:

```json
{
  "content": "<p>Left ventricle note</p>"
}
```

### POST /api/note

Request body:

```json
{
  "organId": "heart",
  "partId": "left-ventricle",
  "subject": "anatomy",
  "content": "<p>Updated note</p>"
}
```

Response:

```json
{
  "ok": true
}
```

### GET /api/notes

Returns all rows currently in the notes table.

### GET /api/export

Downloads the current SQLite DB file.

### POST /api/import

Uploads a DB file and replaces the server database.

---

## Capacitor mobile workflow

### Install and scaffold

```bash
npm install @capacitor/core @capacitor/cli @capacitor-community/sqlite --save
npm install @capacitor/android @capacitor/ios --save-dev
npx cap init brian com.brian.app --web-dir=dist
npx cap add android
npx cap add ios
```

### Build and sync

```bash
npm run build
npx cap copy
npx cap sync
```

### Open native projects

```bash
npx cap open android
npx cap open ios
```

This is the correct setup for device-local SQLite persistence and native app packaging.

---

## Data flow in app

The app currently follows this flow:

1. User selects an organ and subject.
2. UI requests note content.
3. Data is read from one of the active storage layers:
   - native SQLite (Capacitor)
   - web SQLite (`sql.js`)
   - REST API (`server.js`)
4. Notes are saved back to that same layer.
5. Optional sync can send local data to the backend API.

This keeps the app flexible for dev, web, desktop, and mobile deployment.

---

## Important implementation notes

### 1. Browser storage is a fallback, not a production store

`localStorage` is useful for prototype work and to keep the app running offline in the browser, but it is not the right long-term persistence model for phone-native data.

### 2. Native SQLite is the correct long-term mobile storage solution

For a true offline-first app where data lives on the user’s phone, the Capacitor SQLite plugin is the best fit.

### 3. REST remains useful for sync/export/import workflows

The Express API is useful for:

- exporting/importing DB files
- testing or debugging
- local sync scenarios
- bridging to a server later in the product lifecycle

### 4. The schema is intentionally lightweight

The notes table is simple and effective for the current anatomy study workflow. If the app grows, a normalized schema with `organs`, `parts`, and `notes` tables can be introduced cleanly.

---

## Future improvements

Potential upgrades include:

- schema migrations
- note tagging/search
- richer note metadata
- export to JSON or SQL dump
- conflict resolution for sync
- user-specific data storage
- normalized anatomy tables

---

## Troubleshooting

### Server not responding

```bash
npm run start:server
```

Then check:

```bash
curl http://localhost:3001/api/notes
```

### Notes not saving

Verify that:

- `data/` exists
- the DB file is writable
- the schema was created
- the correct storage layer is active

### Native app issues

```bash
npx cap sync
npx cap open android
```

Then inspect native logs for Capacitor SQLite errors.

### Web fallback issues

Ensure `localStorage` is available and `initDB()` has been called before DB reads/writes.

---

## Quick command reference

```bash
npm install
npm run dev
npm run start:server
npm run build
npm run preview
npx cap copy
npx cap sync
npx cap open android
npx cap open ios
```

---

## Summary

This project is a study-oriented anatomy app with a flexible persistence architecture:

- SQLite for structured notes
- local REST API for access and export/import
- Capacitor for native on-device storage on Android/iOS
- browser fallback for development and testing

The strongest production direction is to treat native SQLite as the primary storage mechanism and use the REST API as an optional sync/export layer rather than the main persistence model.

