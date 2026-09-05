// ============================================================
// drawer.js
// Notes drawer controller
//
// BEHAVIOUR
// ------------------------------------------------------------
// Static / permanent notes:
//    - Read only
//    - Download PDF visible
//    - Edit hidden
//
// Combined notes:
//    - Read only
//    - Download PDF visible
//    - Edit hidden
//
// Sticker / user notes:
//    - Edit visible
//    - Save available while editing
//    - Upload Media available while editing
//    - Add Embed available while editing
//    - Download PDF available when not editing
//
// PDF EXPORT:
//    - Exports the notes currently rendered in drawerBody
//    - Supports multi-page A4 documents
// ============================================================


import {
  resolvePermanentNoteHtml,
  buildDisplayNoteHtml,
  setStickerEditing
} from './notePatterns.js';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { save } from '@tauri-apps/plugin-dialog';


// ============================================================
// NOTES DRAWER CONTROLLER
// ============================================================

export function createDrawerController({
  notesDrawer,
  drawerBody
}) {

  // ==========================================================
  // FONT SIZE CONFIGURATION
  // ==========================================================

  const FONT_CONFIG = {
    default: 16,
    min: 12,
    max: 42,
    step: 2
  };

  let currentFontSize =
    FONT_CONFIG.default;


  // ==========================================================
  // CURRENT DRAWER MODE
  //
  // combined = permanent + sticker
  // sticker  = user/sticker notes
  // ==========================================================

  let currentDrawerMode =
    'combined';


  // ==========================================================
  // INITIALISE NOTE VIEWER STYLING
  // ==========================================================

  function ensureNoteViewerStyles() {

    if (
      document.getElementById(
        'drawerNoteDynamicStyles'
      )
    ) {
      return;
    }


    const style =
      document.createElement('style');

    style.id =
      'drawerNoteDynamicStyles';


    style.textContent = `

      /* ================================================
         NOTE CONTENT WRAPPING
         ================================================ */

      .drawer-body,
      .drawer-body .note-content,
      .drawer-body .notes-content,
      .drawer-body .permanent-note,
      .drawer-body .sticker-note {

        max-width: 100%;

        box-sizing: border-box;

        overflow-x: hidden;

        overflow-wrap: anywhere;

        word-wrap: break-word;

        word-break: normal;

        white-space: normal;

        min-width: 0;
      }


      /* ================================================
         TEXT ELEMENTS
         ================================================ */

      .drawer-body p,
      .drawer-body div,
      .drawer-body span,
      .drawer-body li,
      .drawer-body td,
      .drawer-body th,
      .drawer-body blockquote,
      .drawer-body figcaption {

        max-width: 100%;

        box-sizing: border-box;

        overflow-wrap: anywhere;

        word-wrap: break-word;
      }


      /* ================================================
         HEADINGS
         ================================================ */

      .drawer-body h1,
      .drawer-body h2,
      .drawer-body h3,
      .drawer-body h4,
      .drawer-body h5,
      .drawer-body h6 {

        max-width: 100%;

        overflow-wrap: anywhere;

        word-break: normal;

        white-space: normal;
      }


      /* ================================================
         TABLES
         ================================================ */

      .drawer-body table {

        width: 100%;

        max-width: 100%;

        table-layout: fixed;

        border-collapse: collapse;

        overflow-wrap: anywhere;

        word-break: break-word;
      }


      .drawer-body td,
      .drawer-body th {

        max-width: 100%;

        overflow-wrap: anywhere;

        word-break: break-word;

        white-space: normal;
      }


      /* ================================================
         CODE
         ================================================ */

      .drawer-body pre {

        max-width: 100%;

        overflow-x: auto;

        white-space: pre-wrap;

        overflow-wrap: anywhere;

        word-break: break-word;

        box-sizing: border-box;
      }


      .drawer-body code {

        max-width: 100%;

        white-space: pre-wrap;

        overflow-wrap: anywhere;

        word-break: break-word;
      }


      /* ================================================
         IMAGES
         ================================================ */

      .drawer-body img {

        max-width: 100%;

        height: auto;

        box-sizing: border-box;

        object-fit: contain;
      }


      /* ================================================
         VIDEOS / IFRAMES
         ================================================ */

      .drawer-body iframe,
      .drawer-body video,
      .drawer-body embed,
      .drawer-body object {

        max-width: 100% !important;

        box-sizing: border-box;
      }


      /* ================================================
         LINKS
         ================================================ */

      .drawer-body a {

        overflow-wrap: anywhere;

        word-break: break-word;
      }


      /* ================================================
         FONT SIZE CONTROL
         ================================================ */

      .drawer-body.note-font-controlled {

        font-size:
          var(--drawer-note-font-size, 16px);

        overflow-x: hidden;
      }


      .drawer-body.note-font-controlled p,
      .drawer-body.note-font-controlled li,
      .drawer-body.note-font-controlled td,
      .drawer-body.note-font-controlled th,
      .drawer-body.note-font-controlled blockquote {

        font-size: inherit;
      }


      /* ================================================
         MAXIMIZED DRAWER
         ================================================ */

      .notes-drawer.is-maximized {

        max-width: 100vw;

        max-height: 100vh;

        box-sizing: border-box;

        overflow: hidden;
      }


      .notes-drawer.is-maximized .drawer-body {

        max-width: 100%;

        min-width: 0;

        overflow-x: hidden;

        overflow-y: auto;

        box-sizing: border-box;
      }


      /* ================================================
         LIGHT MODE PRESERVATION
         ================================================ */

      .notes-drawer.is-maximized.light-mode,
      .notes-drawer.is-maximized[data-theme="light"] {

        color-scheme: light;
      }


      /* ================================================
         PDF BUTTON
         ================================================ */

      #drawerDownloadPdf {

        cursor: pointer;
      }


      #drawerDownloadPdf[hidden],
      #drawerEdit[hidden],
      #drawerSave[hidden],
      #drawerUploadMedia[hidden],
      #drawerAddEmbed[hidden] {

        display: none !important;
      }

    `;


    document.head.appendChild(style);
  }


  // ==========================================================
  // FONT SIZE
  // ==========================================================

  function applyFontSize(size) {

    if (!drawerBody) {
      return;
    }


    const clampedSize =
      Math.min(
        FONT_CONFIG.max,
        Math.max(
          FONT_CONFIG.min,
          size
        )
      );


    currentFontSize =
      clampedSize;


    drawerBody.classList.add(
      'note-font-controlled'
    );


    drawerBody.style.setProperty(
      '--drawer-note-font-size',
      `${clampedSize}px`
    );


    drawerBody.style.fontSize =
      `${clampedSize}px`;


    updateFontControls();
  }


  function increaseFontSize() {

    applyFontSize(
      currentFontSize +
      FONT_CONFIG.step
    );
  }


  function decreaseFontSize() {

    applyFontSize(
      currentFontSize -
      FONT_CONFIG.step
    );
  }


  function resetFontSize() {

    applyFontSize(
      FONT_CONFIG.default
    );
  }


  // ==========================================================
  // FONT CONTROL BUTTONS
  // ==========================================================

  function createFontControls() {

    if (!notesDrawer) {
      return;
    }


    let decreaseBtn =
      document.getElementById(
        'drawerFontDecrease'
      );


    let resetBtn =
      document.getElementById(
        'drawerFontReset'
      );


    let increaseBtn =
      document.getElementById(
        'drawerFontIncrease'
      );


    // --------------------------------------------------------
    // CREATE TOOLBAR IF NECESSARY
    // --------------------------------------------------------

    if (
      !decreaseBtn ||
      !resetBtn ||
      !increaseBtn
    ) {

      let toolbar =
        notesDrawer.querySelector(
          '.drawer-font-controls'
        );


      if (!toolbar) {

        toolbar =
          document.createElement(
            'div'
          );


        toolbar.className =
          'drawer-font-controls';


        toolbar.setAttribute(
          'aria-label',
          'Note font size controls'
        );


        const header =
          notesDrawer.querySelector(
            '.drawer-header'
          );


        if (header) {

          header.appendChild(
            toolbar
          );

        } else {

          notesDrawer.prepend(
            toolbar
          );
        }
      }


      // ------------------------------------------------------
      // DECREASE
      // ------------------------------------------------------

      if (!decreaseBtn) {

        decreaseBtn =
          document.createElement(
            'button'
          );


        decreaseBtn.id =
          'drawerFontDecrease';


        decreaseBtn.type =
          'button';


        decreaseBtn.textContent =
          'A−';


        decreaseBtn.title =
          'Decrease note font size';


        decreaseBtn.setAttribute(
          'aria-label',
          'Decrease note font size'
        );


        toolbar.appendChild(
          decreaseBtn
        );
      }


      // ------------------------------------------------------
      // RESET
      // ------------------------------------------------------

      if (!resetBtn) {

        resetBtn =
          document.createElement(
            'button'
          );


        resetBtn.id =
          'drawerFontReset';


        resetBtn.type =
          'button';


        resetBtn.textContent =
          'A';


        resetBtn.title =
          'Reset note font size';


        resetBtn.setAttribute(
          'aria-label',
          'Reset note font size'
        );


        toolbar.appendChild(
          resetBtn
        );
      }


      // ------------------------------------------------------
      // INCREASE
      // ------------------------------------------------------

      if (!increaseBtn) {

        increaseBtn =
          document.createElement(
            'button'
          );


        increaseBtn.id =
          'drawerFontIncrease';


        increaseBtn.type =
          'button';


        increaseBtn.textContent =
          'A+';


        increaseBtn.title =
          'Increase note font size';


        increaseBtn.setAttribute(
          'aria-label',
          'Increase note font size'
        );


        toolbar.appendChild(
          increaseBtn
        );
      }
    }


    // --------------------------------------------------------
    // PREVENT DUPLICATE LISTENERS
    // --------------------------------------------------------

    if (
      !decreaseBtn.dataset.drawerFontBound
    ) {

      decreaseBtn.addEventListener(
        'click',
        decreaseFontSize
      );


      decreaseBtn.dataset.drawerFontBound =
        '1';
    }


    if (
      !resetBtn.dataset.drawerFontBound
    ) {

      resetBtn.addEventListener(
        'click',
        resetFontSize
      );


      resetBtn.dataset.drawerFontBound =
        '1';
    }


    if (
      !increaseBtn.dataset.drawerFontBound
    ) {

      increaseBtn.addEventListener(
        'click',
        increaseFontSize
      );


      increaseBtn.dataset.drawerFontBound =
        '1';
    }


    updateFontControls();
  }


  function updateFontControls() {

    const decreaseBtn =
      document.getElementById(
        'drawerFontDecrease'
      );


    const increaseBtn =
      document.getElementById(
        'drawerFontIncrease'
      );


    if (decreaseBtn) {

      decreaseBtn.disabled =
        currentFontSize <=
        FONT_CONFIG.min;
    }


    if (increaseBtn) {

      increaseBtn.disabled =
        currentFontSize >=
        FONT_CONFIG.max;
    }
  }


  // ==========================================================
  // KEYBOARD FONT CONTROLS
  //
  // Ctrl/Cmd + +
  // Ctrl/Cmd + -
  // Ctrl/Cmd + 0
  // ==========================================================

  function setupKeyboardFontControls() {

    if (
      document.body.dataset.drawerFontKeyboardBound
    ) {
      return;
    }


    document.body.dataset.drawerFontKeyboardBound =
      '1';


    document.addEventListener(
      'keydown',
      (event) => {

        if (
          !notesDrawer ||
          !notesDrawer.classList.contains(
            'open'
          )
        ) {
          return;
        }


        const target =
          event.target;


        if (
          target &&
          (
            target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable
          )
        ) {
          return;
        }


        if (
          !(
            event.ctrlKey ||
            event.metaKey
          )
        ) {
          return;
        }


        if (
          event.key === '+' ||
          event.key === '='
        ) {

          event.preventDefault();

          increaseFontSize();

        }
        else if (
          event.key === '-'
        ) {

          event.preventDefault();

          decreaseFontSize();

        }
        else if (
          event.key === '0'
        ) {

          event.preventDefault();

          resetFontSize();
        }
      }
    );
  }


  // ==========================================================
  // PRESERVE LIGHT MODE
  // ==========================================================

  function captureThemeState() {

    if (!notesDrawer) {
      return;
    }


    notesDrawer.dataset.originalLightMode =
      notesDrawer.classList.contains(
        'light-mode'
      )
        ? '1'
        : '0';


    if (
      notesDrawer.hasAttribute(
        'data-theme'
      )
    ) {

      notesDrawer.dataset.originalTheme =
        notesDrawer.getAttribute(
          'data-theme'
        );

    } else {

      delete notesDrawer.dataset.originalTheme;
    }
  }


  function restoreThemeState() {

    if (!notesDrawer) {
      return;
    }


    if (
      notesDrawer.dataset.originalTheme !==
      undefined
    ) {

      notesDrawer.setAttribute(
        'data-theme',
        notesDrawer.dataset.originalTheme
      );

    } else {

      notesDrawer.removeAttribute(
        'data-theme'
      );
    }


    if (
      notesDrawer.dataset.originalLightMode ===
      '1'
    ) {

      notesDrawer.classList.add(
        'light-mode'
      );

    } else {

      notesDrawer.classList.remove(
        'light-mode'
      );
    }
  }


  // ==========================================================
  // MAXIMIZE / MINIMIZE
  // ==========================================================

  function setDrawerMaximized(
    maximized
  ) {

    if (!notesDrawer) {
      return;
    }


    if (maximized) {
      captureThemeState();
    }


    notesDrawer.classList.toggle(
      'is-maximized',
      maximized
    );


    if (
      maximized &&
      notesDrawer.dataset.originalLightMode ===
      '1'
    ) {

      notesDrawer.classList.add(
        'light-mode'
      );
    }


    if (maximized) {
      restoreThemeState();
    }


    const drawerMax =
      document.getElementById(
        'drawerMax'
      );


    const drawerMin =
      document.getElementById(
        'drawerMin'
      );


    if (drawerMax) {

      drawerMax.hidden =
        maximized;
    }


    if (drawerMin) {

      drawerMin.hidden =
        !maximized;
    }


    if (drawerBody) {

      drawerBody.style.maxWidth =
        '100%';

      drawerBody.style.overflowX =
        'hidden';
    }


    applyFontSize(
      currentFontSize
    );
  }


  // ==========================================================
  // EDITING
  //
  // IMPORTANT:
  // Editing is ONLY possible when:
  //
  //     currentDrawerMode === 'sticker'
  //
  // Static notes can never enter editing mode.
  // ==========================================================

  function setDrawerEditing(
    isEditing,
    forceStickerMode = false
  ) {

    if (!drawerBody) {
      return;
    }


    const isStickerOnly =
      forceStickerMode ||
      currentDrawerMode ===
      'sticker';


    /*
     * Only sticker/user notes may be edited.
     */
    const actuallyEditing =
      Boolean(
        isEditing &&
        isStickerOnly
      );


    /*
     * Tell notePatterns.js whether sticker content
     * should be contenteditable.
     */
    setStickerEditing(
      drawerBody,
      actuallyEditing
    );


    drawerBody.classList.toggle(
      'is-editing',
      actuallyEditing
    );


    const drawerEdit =
      document.getElementById(
        'drawerEdit'
      );


    const drawerSave =
      document.getElementById(
        'drawerSave'
      );


    const drawerDownloadPdf =
      document.getElementById(
        'drawerDownloadPdf'
      );


    const drawerUploadMedia =
      document.getElementById(
        'drawerUploadMedia'
      );


    const drawerAddEmbed =
      document.getElementById(
        'drawerAddEmbed'
      );


    // ========================================================
    // EDIT BUTTON
    //
    // THIS IS THE IMPORTANT PART:
    //
    // It remains visible for sticker/user notes.
    // ========================================================

    if (drawerEdit) {

      drawerEdit.hidden =
        !isStickerOnly ||
        actuallyEditing;
    }


    // ========================================================
    // SAVE BUTTON
    // ========================================================

    if (drawerSave) {

      drawerSave.hidden =
        !actuallyEditing;
    }


    // ========================================================
    // PDF BUTTON
    //
    // PDF is available when not editing.
    // ========================================================

    if (drawerDownloadPdf) {

      drawerDownloadPdf.hidden =
        actuallyEditing;
    }


    // ========================================================
    // UPLOAD MEDIA
    // ========================================================

    if (drawerUploadMedia) {

      drawerUploadMedia.hidden =
        !actuallyEditing;
    }


    // ========================================================
    // ADD EMBED
    // ========================================================

    if (drawerAddEmbed) {

      drawerAddEmbed.hidden =
        !actuallyEditing;
    }
  }


// ==========================================================
// PDF SUPPORT CHECK
// ==========================================================

function pdfLibrariesAvailable() {
  return (
    typeof html2canvas === 'function' &&
    typeof jsPDF === 'function'
  );
}


// ==========================================================
// WAIT FOR IMAGES
// ==========================================================

async function waitForImages(container) {
  if (!container) {
    return;
  }

  const images = Array.from(
    container.querySelectorAll('img')
  );

  if (!images.length) {
    return;
  }

  await Promise.all(
    images.map(image => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        image.addEventListener(
          'load',
          resolve,
          { once: true }
        );

        image.addEventListener(
          'error',
          resolve,
          { once: true }
        );
      });
    })
  );
}


// ==========================================================
// PREPARE PDF CLONE
//
// Creates a temporary copy of the currently rendered notes.
// Sticker notes are deliberately excluded.
// ==========================================================

function createPdfContent() {
  if (!drawerBody) {
    return null;
  }

  const clone =
    drawerBody.cloneNode(true);


  // --------------------------------------------------------
  // REMOVE STICKER NOTES
  // --------------------------------------------------------

  const stickerSelectors = [
    '.sticker-note',
    '.sticker-notes',
    '.user-note',
    '.user-notes',
    '[data-note-type="sticker"]',
    '[data-note-type="user"]',
    '[data-note-mode="sticker"]',
    '[data-sticker-note]',
    '.note-sticker'
  ];

  stickerSelectors.forEach(selector => {
    clone
      .querySelectorAll(selector)
      .forEach(element => {
        element.remove();
      });
  });


  // --------------------------------------------------------
  // REMOVE EDITING / INTERACTIVE CONTROLS
  // --------------------------------------------------------

  clone
    .querySelectorAll(
      '.note-actions, ' +
      '.embed-actions, ' +
      '.sticker-actions, ' +
      'button'
    )
    .forEach(element => {
      element.remove();
    });


  // --------------------------------------------------------
  // REMOVE EMBED ACTIONS
  // --------------------------------------------------------

  clone
    .querySelectorAll(
      '.embedded-actions, ' +
      '.embed-buttons, ' +
      '[data-embed-action]'
    )
    .forEach(element => {
      element.remove();
    });


 // --------------------------------------------------------
// CREATE CLEAN PDF CONTAINER
//
// Creates a controlled A4-like rendering area.
// Content remains readable while images, tables and
// other elements are prevented from overflowing.
// --------------------------------------------------------

const container =
  document.createElement('div');


// --------------------------------------------------------
// POSITION
// --------------------------------------------------------

container.style.position =
  'fixed';

container.style.left =
  '-100000px';

container.style.top =
  '0';


// --------------------------------------------------------
// A4 RENDERING WIDTH
//
// 794px ≈ A4 width at 96 DPI.
// --------------------------------------------------------

container.style.width =
  '794px';

container.style.maxWidth =
  '794px';


// --------------------------------------------------------
// BOX MODEL
// --------------------------------------------------------

container.style.boxSizing =
  'border-box';


// --------------------------------------------------------
// PAGE APPEARANCE
// --------------------------------------------------------

container.style.background =
  '#ffffff';

container.style.color =
  '#111111';


// --------------------------------------------------------
// PRINTABLE MARGINS
//
// 40px ≈ 10mm.
// This leaves approximately 714px for actual content.
// --------------------------------------------------------

container.style.padding =
  '40px';

container.style.margin =
  '0';


// --------------------------------------------------------
// TYPOGRAPHY
// --------------------------------------------------------

container.style.fontFamily =
  'Arial, Helvetica, sans-serif';

container.style.fontSize =
  '16px';

container.style.lineHeight =
  '1.55';


// --------------------------------------------------------
// TEXT WRAPPING
// --------------------------------------------------------

container.style.overflow =
  'visible';

container.style.overflowWrap =
  'break-word';

container.style.wordBreak =
  'normal';


// --------------------------------------------------------
// FORCE CHILD CONTENT TO RESPECT THE PDF WIDTH
// --------------------------------------------------------

container.style.setProperty(
  'width',
  '794px',
  'important'
);

container.style.setProperty(
  'max-width',
  '794px',
  'important'
);


// --------------------------------------------------------
// ADD CLEAN CLONED NOTES
// --------------------------------------------------------

container.appendChild(
  clone
);


// --------------------------------------------------------
// ADD TO DOCUMENT TEMPORARILY
//
// html2canvas needs the element to be attached to the
// document in order to calculate its layout correctly.
// --------------------------------------------------------

document.body.appendChild(
  container
);

// --------------------------------------------------------
// FORCE CLONED CONTENT TO FIT PDF WIDTH
// --------------------------------------------------------

clone.style.width =
  '100%';

clone.style.maxWidth =
  '100%';

clone.style.minWidth =
  '0';

clone.style.boxSizing =
  'border-box';

clone.style.overflow =
  'visible';

clone.style.overflowWrap =
  'break-word';

clone.style.wordBreak =
  'normal';
  // --------------------------------------------------------
  // GENERAL TEXT
  // --------------------------------------------------------

  container
    .querySelectorAll(
      'p, li, td, th, div, span'
    )
    .forEach(element => {

      element.style.boxSizing =
        'border-box';

      element.style.maxWidth =
        '100%';

      element.style.overflowWrap =
        'break-word';

      element.style.wordBreak =
        'normal';

      element.style.whiteSpace =
        'normal';
    });


  // --------------------------------------------------------
  // HEADINGS
  // --------------------------------------------------------

  container
    .querySelectorAll(
      'h1'
    )
    .forEach(element => {
      element.style.fontSize =
        '26px';

      element.style.lineHeight =
        '1.25';

      element.style.marginTop =
        '20px';

      element.style.marginBottom =
        '12px';

      element.style.pageBreakAfter =
        'avoid';
    });


  container
    .querySelectorAll(
      'h2'
    )
    .forEach(element => {
      element.style.fontSize =
        '22px';

      element.style.lineHeight =
        '1.3';

      element.style.marginTop =
        '18px';

      element.style.marginBottom =
        '10px';

      element.style.pageBreakAfter =
        'avoid';
    });


  container
    .querySelectorAll(
      'h3'
    )
    .forEach(element => {
      element.style.fontSize =
        '19px';

      element.style.lineHeight =
        '1.35';

      element.style.marginTop =
        '16px';

      element.style.marginBottom =
        '8px';

      element.style.pageBreakAfter =
        'avoid';
    });


  container
    .querySelectorAll(
      'h4, h5, h6'
    )
    .forEach(element => {
      element.style.fontSize =
        '17px';

      element.style.lineHeight =
        '1.4';

      element.style.marginTop =
        '14px';

      element.style.marginBottom =
        '7px';

      element.style.pageBreakAfter =
        'avoid';
    });


  // --------------------------------------------------------
  // PARAGRAPHS
  // --------------------------------------------------------

  container
    .querySelectorAll('p')
    .forEach(element => {

      element.style.marginTop =
        '0';

      element.style.marginBottom =
        '10px';

      element.style.fontSize =
        '16px';

      element.style.lineHeight =
        '1.55';
    });


  // --------------------------------------------------------
  // LISTS
  // --------------------------------------------------------

  container
    .querySelectorAll(
      'ul, ol'
    )
    .forEach(element => {

      element.style.paddingLeft =
        '28px';

      element.style.marginTop =
        '6px';

      element.style.marginBottom =
        '12px';
    });


  container
    .querySelectorAll(
      'li'
    )
    .forEach(element => {

      element.style.fontSize =
        '16px';

      element.style.lineHeight =
        '1.5';

      element.style.marginBottom =
        '5px';
    });


  // --------------------------------------------------------
  // TABLES
  // --------------------------------------------------------

  container
    .querySelectorAll('table')
    .forEach(table => {

      table.style.width =
        '100%';

      table.style.maxWidth =
        '100%';

      table.style.borderCollapse =
        'collapse';

      table.style.tableLayout =
        'fixed';

      table.style.fontSize =
        '13px';

      table.style.lineHeight =
        '1.4';

      table.style.marginTop =
        '12px';

      table.style.marginBottom =
        '14px';
    });


  container
    .querySelectorAll(
      'th, td'
    )
    .forEach(cell => {

      cell.style.padding =
        '6px';

      cell.style.border =
        '1px solid #999';

      cell.style.overflowWrap =
        'break-word';

      cell.style.wordBreak =
        'break-word';

      cell.style.verticalAlign =
        'top';
    });


// --------------------------------------------------------
// IMAGES
//
// Images are automatically constrained to the printable
// document width while preserving their original ratio.
// --------------------------------------------------------

container
  .querySelectorAll('img')
  .forEach(image => {

    image.style.display =
      'block';

    image.style.width =
      'auto';

    image.style.maxWidth =
      '100%';

    image.style.height =
      'auto';

    image.style.maxHeight =
      '650px';

    image.style.objectFit =
      'contain';

    image.style.margin =
      '14px auto';

    image.style.boxSizing =
      'border-box';

    image.style.pageBreakInside =
      'avoid';

    image.style.breakInside =
      'avoid';

    image.style.overflow =
      'hidden';
  });

  // --------------------------------------------------------
  // VIDEOS / IFRAMES
  //
  // Embedded media cannot reliably be rendered by
  // html2canvas. Replace them with a clean placeholder.
  // --------------------------------------------------------

  container
    .querySelectorAll(
      'video, iframe'
    )
    .forEach(element => {

      const placeholder =
        document.createElement('div');

      placeholder.textContent =
        'Embedded media';

      placeholder.style.width =
        '100%';

      placeholder.style.height =
        '120px';

      placeholder.style.display =
        'flex';

      placeholder.style.alignItems =
        'center';

      placeholder.style.justifyContent =
        'center';

      placeholder.style.border =
        '1px solid #ccc';

      placeholder.style.background =
        '#f5f5f5';

      placeholder.style.color =
        '#555';

      placeholder.style.fontSize =
        '14px';

      placeholder.style.margin =
        '12px 0';

      element.replaceWith(
        placeholder
      );
    });


  // --------------------------------------------------------
  // LINKS
  // --------------------------------------------------------

  container
    .querySelectorAll('a')
    .forEach(link => {

      link.style.color =
        '#111';

      link.style.textDecoration =
        'underline';

      link.style.overflowWrap =
        'break-word';
    });


  return container;
}


// ==========================================================
// DOWNLOAD NOTES AS PDF
// ==========================================================

async function downloadNotesPdf() {

  if (!drawerBody) {
    return;
  }


  // --------------------------------------------------------
  // DO NOT EXPORT WHILE EDITING
  // --------------------------------------------------------

  if (
    drawerBody.classList.contains(
      'is-editing'
    )
  ) {

    console.warn(
      'Finish editing the sticker note before downloading the PDF.'
    );

    return;
  }


  // --------------------------------------------------------
  // VERIFY CONTENT
  // --------------------------------------------------------

  if (
    !drawerBody.innerHTML.trim()
  ) {

    alert(
      'There are no notes available to download.'
    );

    return;
  }


  // --------------------------------------------------------
  // VERIFY PDF LIBRARIES
  // --------------------------------------------------------

  if (
    !pdfLibrariesAvailable()
  ) {

    console.error(
      'PDF libraries are not loaded.'
    );

    alert(
      'PDF support is not available. Please make sure jsPDF and html2canvas are loaded.'
    );

    return;
  }


  let pdfContainer =
    null;


  try {

    // ======================================================
    // CREATE CLEAN PDF CONTENT
    // ======================================================

    pdfContainer =
      createPdfContent();


    if (!pdfContainer) {
      return;
    }


    // ======================================================
    // WAIT FOR IMAGES
    // ======================================================

    await waitForImages(
      pdfContainer
    );


    // ======================================================
    // ALLOW BROWSER TO COMPLETE LAYOUT
    // ======================================================

    await new Promise(
      resolve =>
        requestAnimationFrame(
          () =>
            requestAnimationFrame(
              resolve
            )
        )
    );


    // ======================================================
    // CAPTURE CLEAN NOTES
    // ======================================================

    const canvas =
      await html2canvas(
        pdfContainer,
        {
          scale: 2,

          useCORS: true,

          allowTaint: false,

          backgroundColor:
            '#ffffff',

          logging: false,

          width:
            pdfContainer.scrollWidth,

          height:
            pdfContainer.scrollHeight,

          windowWidth:
            pdfContainer.scrollWidth,

          windowHeight:
            pdfContainer.scrollHeight
        }
      );


    // ======================================================
    // CREATE A4 PDF
    // ======================================================

    const pdf =
      new jsPDF({
        orientation:
          'portrait',

        unit:
          'mm',

        format:
          'a4'
      });


    const pageWidth =
      pdf.internal.pageSize.getWidth();

    const pageHeight =
      pdf.internal.pageSize.getHeight();


    // ------------------------------------------------------
    // PDF MARGINS
    // ------------------------------------------------------

    const margin =
      10;


    const usableWidth =
      pageWidth -
      margin * 2;


    const usableHeight =
      pageHeight -
      margin * 2;


    // ------------------------------------------------------
    // IMAGE DIMENSIONS
    // ------------------------------------------------------

    const imageWidth =
      usableWidth;


    const imageHeight =
      (
        canvas.height *
        imageWidth
      ) /
      canvas.width;


    // ------------------------------------------------------
    // HOW MANY PIXELS FIT ON ONE A4 PAGE?
    // ------------------------------------------------------

    const pagePixelHeight =
      (
        usableHeight *
        canvas.width
      ) /
      usableWidth;


    let sourceY =
      0;


    let remainingPixels =
      canvas.height;


    let pageNumber =
      0;


    // ======================================================
    // CREATE A4 PAGES
    // ======================================================

    while (
      remainingPixels > 0
    ) {

      if (pageNumber > 0) {

        pdf.addPage();
      }


      const sliceHeight =
        Math.min(
          pagePixelHeight,
          remainingPixels
        );


      const pageCanvas =
        document.createElement(
          'canvas'
        );


      pageCanvas.width =
        canvas.width;


      pageCanvas.height =
        Math.ceil(
          sliceHeight
        );


      const context =
        pageCanvas.getContext(
          '2d'
        );


      context.drawImage(
        canvas,

        0,
        sourceY,

        canvas.width,
        sliceHeight,

        0,
        0,

        canvas.width,
        sliceHeight
      );


      const pageImage =
        pageCanvas.toDataURL(
          'image/jpeg',
          0.95
        );


      const renderedHeight =
        (
          sliceHeight *
          imageWidth
        ) /
        canvas.width;


      pdf.addImage(
        pageImage,
        'JPEG',

        margin,
        margin,

        imageWidth,
        renderedHeight,

        undefined,
        'FAST'
      );


      sourceY +=
        sliceHeight;


      remainingPixels -=
        sliceHeight;


      pageNumber++;
    }


    // ======================================================
    // BUILD FILE NAME
    // ======================================================

    const drawerTitle =
      document.getElementById(
        'drawerTitle'
      );


    const drawerSubtitle =
      document.getElementById(
        'drawerSubtitle'
      );


    const title =
      drawerTitle
        ? drawerTitle.textContent.trim()
        : 'Notes';


    const subtitle =
      drawerSubtitle
        ? drawerSubtitle.textContent.trim()
        : '';


    let filenameParts =
      [];


    if (title) {

      filenameParts.push(
        title
      );
    }


    if (subtitle) {

      filenameParts.push(
        subtitle
      );
    }


    // ------------------------------------------------------
    // IMPORTANT:
    // Do NOT add "Sticker Notes".
    // Sticker notes are excluded from the PDF.
    // ------------------------------------------------------


    let filename =
      filenameParts.join(
        ' - '
      );


    filename =
      filename
        .replace(
          /[<>:"/\\|?*]+/g,
          ''
        )
        .replace(
          /\s+/g,
          ' '
        )
        .trim();


    if (!filename) {

      filename =
        'Notes';
    }


    // ======================================================
    // SAVE PDF
    // ======================================================

// ======================================================
// ASK USER WHERE TO SAVE THE PDF
// ======================================================

const savePath =
  await save({
    title: 'Save Notes as PDF',

    defaultPath:
      `${filename}.pdf`,

    filters: [
      {
        name: 'PDF Document',
        extensions: ['pdf']
      }
    ]
  });


// ------------------------------------------------------
// USER CANCELLED SAVE DIALOG
// ------------------------------------------------------

if (!savePath) {
  return;
}


// ------------------------------------------------------
// GET PDF BINARY DATA
// ------------------------------------------------------

const pdfBlob =
  pdf.output('blob');


// ------------------------------------------------------
// CONVERT BLOB TO ARRAY BUFFER
// ------------------------------------------------------

const arrayBuffer =
  await pdfBlob.arrayBuffer();


// ------------------------------------------------------
// WRITE FILE THROUGH TAURI
// ------------------------------------------------------

const { writeFile } =
  await import(
    '@tauri-apps/plugin-fs'
  );

await writeFile(
  savePath,
  new Uint8Array(
    arrayBuffer
  )
);


  } catch (error) {

    console.error(
      'Failed to generate PDF:',
      error
    );


    alert(
      'Unable to generate the PDF. Please try again.'
    );


  } finally {

    // ======================================================
    // REMOVE TEMPORARY PDF CONTAINER
    // ======================================================

    if (
      pdfContainer &&
      pdfContainer.parentNode
    ) {

      pdfContainer.parentNode.removeChild(
        pdfContainer
      );
    }
  }
}


// ==========================================================
// SETUP PDF BUTTON
// ==========================================================

function setupPdfButton() {

  const button =
    document.getElementById(
      'drawerDownloadPdf'
    );


  if (
    !button ||
    button.dataset.drawerPdfBound
  ) {
    return;
  }


  button.addEventListener(
    'click',
    downloadNotesPdf
  );


  button.dataset.drawerPdfBound =
    '1';
}

  // ==========================================================
  // SETUP EDIT BUTTON
  //
  // This makes the Edit button work specifically for
  // sticker/user notes.
  // ==========================================================

  function setupEditControls() {

    const drawerEdit =
      document.getElementById(
        'drawerEdit'
      );


    const drawerSave =
      document.getElementById(
        'drawerSave'
      );


    /*
     * EDIT
     */
    if (
      drawerEdit &&
      !drawerEdit.dataset.drawerEditBound
    ) {

      drawerEdit.addEventListener(
        'click',
        () => {

          /*
           * Never allow editing static/combined notes.
           */
          if (
            currentDrawerMode !==
            'sticker'
          ) {

            return;
          }


          setDrawerEditing(
            true,
            true
          );
        }
      );


      drawerEdit.dataset.drawerEditBound =
        '1';
    }


    /*
     * SAVE
     *
     * NOTE:
     * Your existing save system can still listen to
     * drawerSave. This simply exits editing mode after
     * the save action if no other handler overrides it.
     */
    if (
      drawerSave &&
      !drawerSave.dataset.drawerSaveBound
    ) {

      drawerSave.addEventListener(
        'click',
        () => {

          /*
           * The actual persistence of sticker content
           * should remain in your existing save logic.
           *
           * This restores the normal sticker-note toolbar
           * after save.
           */
          setDrawerEditing(
            false,
            true
          );
        }
      );


      drawerSave.dataset.drawerSaveBound =
        '1';
    }
  }


  // ==========================================================
  // CLOSE DRAWER
  // ==========================================================

  function closeDrawer() {

    if (!notesDrawer) {
      return;
    }


    notesDrawer.classList.remove(
      'open'
    );


    notesDrawer.classList.remove(
      'is-maximized'
    );


    notesDrawer.setAttribute(
      'aria-hidden',
      'true'
    );


    const drawerMax =
      document.getElementById(
        'drawerMax'
      );


    const drawerMin =
      document.getElementById(
        'drawerMin'
      );


    if (drawerMax) {

      drawerMax.hidden =
        false;
    }


    if (drawerMin) {

      drawerMin.hidden =
        true;
    }


    /*
     * Stop editing.
     */
    setDrawerEditing(
      false,
      currentDrawerMode ===
        'sticker'
    );
  }


  // ==========================================================
  // OPEN DRAWER
  // ==========================================================

  async function openDrawer(
    org,
    part,
    getNoteRemote,
    selectedSubject,
    mode = 'combined'
  ) {

    if (!notesDrawer) {
      return;
    }


    // ========================================================
    // INITIAL SETUP
    // ========================================================

    ensureNoteViewerStyles();

    createFontControls();

    setupKeyboardFontControls();

    setupPdfButton();

    setupEditControls();


    // ========================================================
    // STORE CURRENT MODE
    // ========================================================

    currentDrawerMode =
      mode === 'sticker'
        ? 'sticker'
        : 'combined';


    const isStickerOnly =
      currentDrawerMode ===
      'sticker';


    // ========================================================
    // IDENTIFIERS
    // ========================================================

    const organId =
      org &&
      (
        org.id ||
        org._id
      ) ||
      null;


    const partId =
      part &&
      part.id ||
      null;


    // ========================================================
    // DRAWER TITLE
    // ========================================================

    const drawerTitle =
      document.getElementById(
        'drawerTitle'
      );


    const drawerSubtitle =
      document.getElementById(
        'drawerSubtitle'
      );


    if (drawerTitle) {

      drawerTitle.textContent =
        org
          ? (
              isStickerOnly

                ? `${org.name} — Sticker Notes`

                : org.name
            )

          : 'Notes';
    }


    if (drawerSubtitle) {

      drawerSubtitle.textContent =
        part
          ? part.name
          : '';
    }


    // ========================================================
    // FETCH STICKER NOTE
    // ========================================================

    let content =
      null;


    let fetchedEmbeds =
      [];


    try {

      if (getNoteRemote) {

        const note =
          await getNoteRemote(
            organId,
            partId,
            selectedSubject
          );


        if (note) {

          if (
            typeof note ===
            'string'
          ) {

            content =
              note;

          }
          else if (
            note.content !==
            undefined
          ) {

            content =
              note.content;
          }


          if (
            note.embeds &&
            Array.isArray(
              note.embeds
            )
          ) {

            fetchedEmbeds =
              note.embeds;
          }
        }
      }

    } catch (error) {

      console.warn(
        'fetch note failed',
        error
      );
    }


    // ========================================================
    // PERMANENT / STATIC CONTENT
    // ========================================================

    const permanentContent =
      resolvePermanentNoteHtml(
        org,
        part,
        selectedSubject
      ) ||
      '<p>No notes available.</p>';


    // ========================================================
    // STICKER CONTENT
    // ========================================================

    const stickerContent =
      typeof content ===
      'string'
        ? content
        : '';


    // ========================================================
    // BUILD DISPLAY
    //
    // Sticker-only mode:
    //     permanent hidden
    //     sticker visible
    //
    // Combined mode:
    //     permanent visible
    //     sticker visible
    // ========================================================

    const displayHtml =
      buildDisplayNoteHtml(
        permanentContent,
        stickerContent,
        {
          includePermanent:
            !isStickerOnly,

          includeSticker:
            true
        }
      );


    // ========================================================
    // RENDER NOTE
    // ========================================================

    if (drawerBody) {

      drawerBody.innerHTML =
        displayHtml;


      drawerBody.classList.add(
        'note-font-controlled'
      );


      drawerBody.style.setProperty(
        '--drawer-note-font-size',
        `${currentFontSize}px`
      );


      drawerBody.style.fontSize =
        `${currentFontSize}px`;


      drawerBody.style.maxWidth =
        '100%';


      drawerBody.style.overflowX =
        'hidden';


      // ======================================================
      // EMBEDS
      // ======================================================

      try {

        const metaEl =
          drawerBody.querySelector
            ? drawerBody.querySelector(
                '.embed-metadata'
              )
            : null;


        const embedsPanel =
          document.getElementById(
            'embedsPanel'
          );


        if (embedsPanel) {

          embedsPanel.innerHTML =
            '';
        }


        let list =
          [];


        // ----------------------------------------------------
        // REMOTE EMBEDS
        // ----------------------------------------------------

        if (
          fetchedEmbeds &&
          fetchedEmbeds.length
        ) {

          list =
            fetchedEmbeds;
        }


        // ----------------------------------------------------
        // EMBED METADATA
        // ----------------------------------------------------

        else if (metaEl) {

          try {

            list =
              JSON.parse(
                metaEl.textContent ||
                metaEl.getAttribute(
                  'data-embeds'
                ) ||
                '[]'
              );

          } catch (error) {

            console.warn(
              'Could not parse embed metadata',
              error
            );

            list =
              [];
          }
        }


        // ----------------------------------------------------
        // EXISTING EMBED ITEMS
        // ----------------------------------------------------

        if (!list.length) {

          const panelItems =
            embedsPanel
              ? Array.from(
                  embedsPanel.querySelectorAll(
                    '.embedded-item'
                  )
                )
              : [];


          list =
            panelItems
              .map(
                item => ({

                  id:
                    item.dataset.embedId ||
                    '',

                  title:
                    item.querySelector('h4')
                      ? item
                          .querySelector('h4')
                          .textContent
                      : '',

                  caption:
                    item.querySelector('p')
                      ? item
                          .querySelector('p')
                          .textContent
                      : '',

                  html:
                    item.dataset.embedHtml ||
                    ''
                })
              )
              .filter(
                item =>
                  item.html ||
                  item.title ||
                  item.caption
              );
        }


        // ====================================================
        // RENDER EMBEDS
        // ====================================================

        list.forEach(
          item => {

            try {

              const wrapper =
                document.createElement(
                  'div'
                );


              wrapper.className =
                'embedded-item';


              wrapper.dataset.embedId =
                item.id ||
                '';


              wrapper.dataset.embedHtml =
                item.html ||
                '';


              // ------------------------------------------------
              // THUMBNAIL
              // ------------------------------------------------

              const thumb =
                document.createElement(
                  'div'
                );


              thumb.className =
                'embed-thumb';


              const img =
                document.createElement(
                  'img'
                );


              img.className =
                'embed-thumb-img';


              img.alt =
                item.title ||
                'Embed thumbnail';


              let thumbnailCreated =
                false;


              try {

                const tmp =
                  document.createElement(
                    'div'
                  );


                tmp.innerHTML =
                  item.html ||
                  '';


                const iframe =
                  tmp.querySelector
                    ? tmp.querySelector(
                        'iframe'
                      )
                    : null;


                const src =
                  iframe
                    ? (
                        iframe.getAttribute(
                          'src'
                        ) ||
                        ''
                      )
                    : '';


                if (src) {

                  // --------------------------------------------
                  // YOUTUBE
                  // --------------------------------------------

                  const ytMatch =
                    src.match(
                      /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/i
                    );


                  if (
                    ytMatch &&
                    ytMatch[1]
                  ) {

                    img.src =
                      `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;

                    thumbnailCreated =
                      true;
                  }


                  // --------------------------------------------
                  // VIMEO
                  // --------------------------------------------

                  if (
                    !thumbnailCreated
                  ) {

                    const vimeoMatch =
                      src.match(
                        /vimeo\.com\/(?:video\/)?(\d+)/i
                      ) ||
                      src.match(
                        /player\.vimeo\.com\/video\/(\d+)/i
                      );


                    if (
                      vimeoMatch &&
                      vimeoMatch[1]
                    ) {

                      img.src =
                        `https://vumbnail.com/${vimeoMatch[1]}.jpg`;

                      thumbnailCreated =
                        true;
                    }
                  }
                }

              } catch (error) {

                console.warn(
                  'Thumbnail detection failed',
                  error
                );
              }


              if (
                !thumbnailCreated
              ) {

                img.src =
                  createEmbedFallback(
                    item.title
                  );
              }


              thumb.appendChild(
                img
              );


              // ------------------------------------------------
              // METADATA
              // ------------------------------------------------

              const meta =
                document.createElement(
                  'div'
                );


              meta.className =
                'embed-meta';


              const h4 =
                document.createElement(
                  'h4'
                );


              h4.textContent =
                item.title ||
                'Untitled';


              const p =
                document.createElement(
                  'p'
                );


              p.textContent =
                item.caption ||
                '';


              meta.appendChild(
                h4
              );


              if (item.caption) {

                meta.appendChild(
                  p
                );
              }


              // ------------------------------------------------
              // ACTIONS
              // ------------------------------------------------

              const actions =
                document.createElement(
                  'div'
                );


              actions.className =
                'embed-actions';


              const seeBtn =
                createButton(
                  'see-model-btn',
                  'See Model',
                  'See model in viewer'
                );


              const upBtn =
                createButton(
                  'move-up-btn',
                  '↑',
                  'Move up'
                );


              const downBtn =
                createButton(
                  'move-down-btn',
                  '↓',
                  'Move down'
                );


              const editBtn =
                createButton(
                  'edit-embed-btn',
                  'Edit',
                  'Edit embed'
                );


              const delBtn =
                createButton(
                  'delete-embed-btn',
                  'Delete',
                  'Delete embed'
                );


              actions.appendChild(
                seeBtn
              );


              actions.appendChild(
                upBtn
              );


              actions.appendChild(
                downBtn
              );


              actions.appendChild(
                editBtn
              );


              actions.appendChild(
                delBtn
              );


              // ------------------------------------------------
              // KEYBOARD ACCESSIBILITY
              // ------------------------------------------------

              [
                seeBtn,
                upBtn,
                downBtn,
                editBtn,
                delBtn
              ].forEach(
                button => {

                  button.addEventListener(
                    'keydown',
                    event => {

                      if (
                        event.key ===
                          'Enter' ||
                        event.key ===
                          ' '
                      ) {

                        event.preventDefault();

                        button.click();
                      }
                    }
                  );
                }
              );


              wrapper.appendChild(
                thumb
              );


              wrapper.appendChild(
                meta
              );


              wrapper.appendChild(
                actions
              );


              if (embedsPanel) {

                embedsPanel.appendChild(
                  wrapper
                );
              }

            } catch (error) {

              console.warn(
                'Failed to render embed',
                error
              );
            }
          }
        );

      } catch (error) {

        console.warn(
          'Failed to render embed metadata',
          error
        );
      }
    }


    // ========================================================
    // FINAL DRAWER STATE
    // ========================================================

    /*
     * IMPORTANT:
     *
     * For sticker notes:
     *     Edit is visible.
     *
     * For static/combined:
     *     Edit is hidden.
     *
     * PDF is visible when not editing.
     */
    setDrawerEditing(
      false,
      isStickerOnly
    );


    /*
     * Always start normal size.
     *
     * Current font size is intentionally preserved.
     */
    setDrawerMaximized(
      false
    );


    // ========================================================
    // OPEN
    // ========================================================

    notesDrawer.classList.add(
      'open'
    );


    notesDrawer.setAttribute(
      'aria-hidden',
      'false'
    );


    // ========================================================
    // REAPPLY FONT
    // ========================================================

    applyFontSize(
      currentFontSize
    );
  }


  // ==========================================================
  // HELPER — CREATE BUTTON
  // ==========================================================

  function createButton(
    className,
    text,
    label
  ) {

    const button =
      document.createElement(
        'button'
      );


    button.className =
      className;


    button.type =
      'button';


    button.textContent =
      text;


    button.setAttribute(
      'aria-label',
      label
    );


    button.title =
      label;


    return button;
  }


  // ==========================================================
  // HELPER — EMBED FALLBACK
  // ==========================================================

  function createEmbedFallback(
    title
  ) {

    const safeTitle =
      String(
        title ||
        '3D Model'
      )
      .replace(
        /</g,
        '&lt;'
      )
      .replace(
        />/g,
        '&gt;'
      );


    const svg = `

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="640"
        height="360"
        viewBox="0 0 640 360"
      >

        <rect
          width="100%"
          height="100%"
          fill="#202a36"
        />

        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="#ffffff"
          font-family="Segoe UI, Inter, Arial"
          font-size="20"
        >
          ${safeTitle}
        </text>

      </svg>

    `;


    return (
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(svg)
    );
  }


  // ==========================================================
  // INITIAL SETUP
  // ==========================================================

  ensureNoteViewerStyles();

  createFontControls();

  setupKeyboardFontControls();

  setupPdfButton();

  setupEditControls();

  applyFontSize(
    FONT_CONFIG.default
  );


  // ==========================================================
  // PUBLIC API
  // ==========================================================

  return {

    setDrawerMaximized,

    setDrawerEditing,

    closeDrawer,

    openDrawer,

    downloadNotesPdf,

    increaseFontSize,

    decreaseFontSize,

    resetFontSize,

    applyFontSize

  };
}