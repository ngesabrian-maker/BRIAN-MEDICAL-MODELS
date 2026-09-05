
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader
} from "@babylonjs/core";

import "@babylonjs/loaders/glTF";

import { SYSTEMS } from "./organs.js";

import {
  getNoteRemote,
  upsertNoteRemote,
  exportDbUrl,
  importDbFile,
  syncLocalToServer
} from "./api.js";

import { createEmbedController } from "./embed-modal.js";
import { createNotesController } from "./notes.js";
import { createMediaController } from "./media.js";
import { createDrawerController } from "./drawer.js";
import { createUiController } from "./ui.js";

import {
  resolvePermanentNoteHtml,
  buildDisplayNoteHtml,
  extractStickerNoteHtml,
  setStickerEditing
} from "./notePatterns.js";


console.log("[app] src/main.js loaded");


window.addEventListener("DOMContentLoaded", () => {

  console.log("[app] DOMContentLoaded — initializing UI");


  // ============================================================
  // DOM REFERENCES
  // ============================================================

  const canvas =
    document.getElementById("renderCanvas");

  const organListEl =
    document.getElementById("organList");

  const subjectListEl =
    document.getElementById("subjectList");

  const showNotesBtn =
    document.getElementById("showNotesBtn");

  const userNotesBtn =
    document.getElementById("userNotesBtn");

  const navigatorZoomBtn =
    document.getElementById("navigatorZoomBtn");

  const navigatorResetBtn =
    document.getElementById("navigatorResetBtn");


  // Drawer elements
  const notesDrawer =
    document.getElementById("notesDrawer");

  const drawerTitle =
    document.getElementById("drawerTitle");

  const drawerSubtitle =
    document.getElementById("drawerSubtitle");

  const drawerBody =
    document.getElementById("drawerBody");

  const drawerClose =
    document.getElementById("drawerClose");

  const drawerEdit =
    document.getElementById("drawerEdit");

  const drawerSave =
    document.getElementById("drawerSave");

  const drawerPin =
    document.getElementById("drawerPin");

  const drawerMax =
    document.getElementById("drawerMax");

  const drawerMin =
    document.getElementById("drawerMin");

  const drawerUploadMedia =
    document.getElementById("drawerUploadMedia");

  const drawerAddEmbed =
    document.getElementById("drawerAddEmbed");

  const drawerMediaInput =
    document.getElementById("drawerMediaInput");


  // Embed modal
  const embedModal =
    document.getElementById("embedModal");

  const embedUrlInput =
    document.getElementById("embedUrlInput");

  const embedTitleInput =
    document.getElementById("embedTitleInput");

  const embedCaptionInput =
    document.getElementById("embedCaptionInput");

  const embedCodeInput =
    document.getElementById("embedCodeInput");

  const insertEmbedBtn =
    document.getElementById("insertEmbedBtn");

  const cancelEmbedBtn =
    document.getElementById("cancelEmbedBtn");

  const closeEmbedModal =
    document.getElementById("closeEmbedModal");

  const embedsPanel =
    document.getElementById("embedsPanel");


  // Note modal
  const noteModal =
    document.getElementById("noteModal");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalBody =
    document.getElementById("modalBody");

  const closeNoteBtn =
    document.getElementById("closeNoteBtn");

  const editNoteBtn =
    document.getElementById("editNoteBtn");

  const saveNoteBtn =
    document.getElementById("saveNoteBtn");


  if (drawerUploadMedia) {
    drawerUploadMedia.hidden = true;
  }

  if (drawerAddEmbed) {
    drawerAddEmbed.hidden = false;
  }


  // ============================================================
  // EMBED CONTROLLER
  // ============================================================

  const embedCtrl =
    createEmbedController({
      notesDrawer,
      drawerBody,
      embedModal,
      embedUrlInput,
      embedTitleInput,
      embedCaptionInput,
      embedCodeInput,
      insertEmbedBtn,
      cancelEmbedBtn,
      closeEmbedModal,
      embedsPanel
    });

  embedCtrl.attachEventListeners();


  // ============================================================
  // SUBJECTS
  // ============================================================

  const SUBJECTS = [
    { id: "anatomy", label: "Anatomy" },
    { id: "biochemistry", label: "Biochemistry" },
    { id: "physiology", label: "Physiology" },
    { id: "parasitology", label: "Parasitology" },
    { id: "microbiology", label: "Microbiology" },
    { id: "pathology", label: "Pathology" },
    { id: "pharmacology", label: "Pharmacology" },
    { id: "histology", label: "Histology" },
    { id: "embryology", label: "Embryology" }
  ];


  let selectedSubject = "anatomy";

  let isNavigatorExpanded = false;


  const placeholder =
    document.getElementById("modelPlaceholder");

  const syncNotesBtn =
    document.getElementById("syncNotesBtn");


  if (!canvas) {

    console.warn(
      "[app] renderCanvas not found"
    );

    return;

  }


  // ============================================================
  // MODEL PLACEHOLDER
  // ============================================================

  const setPlaceholderLoading =
    (loading) => {

      if (!placeholder) {
        return;
      }


      placeholder.classList.remove(
        "is-unavailable"
      );


      placeholder.classList.toggle(
        "is-loading",
        loading
      );


      placeholder.classList.toggle(
        "visible",
        loading
      );


      if (loading) {

        placeholder.innerHTML =
          '<div class="model-loader" aria-hidden="true"></div>';

      }

    };


  const setPlaceholderUnavailable =
    () => {

      if (!placeholder) {
        return;
      }


      placeholder.classList.remove(
        "is-loading"
      );


      placeholder.classList.add(
        "is-unavailable",
        "visible"
      );


      placeholder.innerHTML = `
        <div class="model-loader" aria-hidden="true"></div>

        <span class="placeholder-copy">
          Developer will update models in the coming versions
        </span>
      `;

    };


  // ============================================================
  // BABYLON ENGINE
  // ============================================================

  const engine =
    new Engine(
      canvas,
      true,
      {
        preserveDrawingBuffer: true,
        stencil: true,
        antialias: true,
        disableWebGL2Support: false
      },
      true
    );


  // ============================================================
  // CANVAS RESOLUTION
  // ============================================================

  const syncCanvasResolution =
    () => {

      const rect =
        canvas.getBoundingClientRect();


      const ratio =
        window.devicePixelRatio || 1;


      const width =
        Math.max(
          1,
          Math.floor(
            rect.width * ratio
          )
        );


      const height =
        Math.max(
          1,
          Math.floor(
            rect.height * ratio
          )
        );


      if (
        canvas.width !== width ||
        canvas.height !== height
      ) {

        canvas.width =
          width;

        canvas.height =
          height;

      }


      engine.resize();

    };


  syncCanvasResolution();


  requestAnimationFrame(
    syncCanvasResolution
  );


  // ============================================================
  // SCENE / CAMERA REFERENCES
  // ============================================================

  let scene = null;

  /*
   * IMPORTANT:
   *
   * The camera must live outside createScene().
   *
   * Models are reloaded by disposing the old scene and creating
   * a new one. The anatomical controller therefore always uses
   * this shared camera reference.
   */

  let camera = null;


  // ============================================================
  // BLENDER-STYLE CAMERA PAN
  // ============================================================

  function panCamera(
    cameraInstance,
    dx,
    dy
  ) {

    if (!cameraInstance) {
      return;
    }


    const distance =
      Math.max(
        cameraInstance.radius,
        0.1
      );


    const panSpeed =
      distance * 0.0025;


    const right =
      cameraInstance.getDirection(
        Vector3.Right()
      );


    const up =
      cameraInstance.getDirection(
        Vector3.Up()
      );


    cameraInstance.target.addInPlace(
      right.scale(
        -dx * panSpeed
      )
    );


    cameraInstance.target.addInPlace(
      up.scale(
        dy * panSpeed
      )
    );

  }


  // ============================================================
  // BLENDER-STYLE CAMERA NAVIGATION
  // ============================================================

  function enableBlenderStyleNavigation(
    canvasElement,
    cameraInstance
  ) {

    if (
      !canvasElement ||
      !cameraInstance
    ) {

      return;

    }


    let isMiddleDragging = false;

    let isPanning = false;

    let lastX = 0;

    let lastY = 0;


    // ----------------------------------------------------------
    // RIGHT CLICK
    // ----------------------------------------------------------

    canvasElement.addEventListener(
      "contextmenu",
      event => {

        event.preventDefault();

      }
    );


    // ----------------------------------------------------------
    // MIDDLE MOUSE
    // ----------------------------------------------------------

    canvasElement.addEventListener(
      "mousedown",
      event => {

        if (event.button !== 1) {
          return;
        }


        event.preventDefault();


        isMiddleDragging =
          true;


        isPanning =
          event.shiftKey;


        lastX =
          event.clientX;


        lastY =
          event.clientY;


        if (
          cameraInstance.useAutoRotationBehavior &&
          cameraInstance.autoRotationBehavior
        ) {

          cameraInstance.autoRotationBehavior.stop();

        }

      }
    );


    // ----------------------------------------------------------
    // MOUSE MOVE
    // ----------------------------------------------------------

    window.addEventListener(
      "mousemove",
      event => {

        if (!isMiddleDragging) {
          return;
        }


        const dx =
          event.clientX -
          lastX;


        const dy =
          event.clientY -
          lastY;


        lastX =
          event.clientX;


        lastY =
          event.clientY;


        // ------------------------------------------------------
        // PAN
        // ------------------------------------------------------

        if (isPanning) {

          panCamera(
            cameraInstance,
            dx,
            dy
          );

          return;

        }


        // ------------------------------------------------------
        // ORBIT
        // ------------------------------------------------------

        const rotateSpeed =
          0.005;


        cameraInstance.alpha -=
          dx * rotateSpeed;


        cameraInstance.beta -=
          dy * rotateSpeed;


        const minBeta =
          0.05;


        const maxBeta =
          Math.PI - 0.05;


        cameraInstance.beta =
          Math.max(
            minBeta,
            Math.min(
              maxBeta,
              cameraInstance.beta
            )
          );

      }
    );


    // ----------------------------------------------------------
    // MOUSE UP
    // ----------------------------------------------------------

    window.addEventListener(
      "mouseup",
      event => {

        if (event.button !== 1) {
          return;
        }


        isMiddleDragging =
          false;


        isPanning =
          false;


        setTimeout(
          () => {

            if (
              cameraInstance &&
              cameraInstance.useAutoRotationBehavior &&
              cameraInstance.autoRotationBehavior
            ) {

              cameraInstance.autoRotationBehavior.start();

            }

          },
          1200
        );

      }
    );


    // ----------------------------------------------------------
    // WINDOW BLUR
    // ----------------------------------------------------------

    window.addEventListener(
      "blur",
      () => {

        isMiddleDragging =
          false;

        isPanning =
          false;

      }
    );


    // ----------------------------------------------------------
    // MOUSE WHEEL ZOOM
    // ----------------------------------------------------------

    canvasElement.addEventListener(
      "wheel",
      event => {

        /*
         * Shift + wheel is handled by the panning
         * listener below.
         */

        if (event.shiftKey) {
          return;
        }


        event.preventDefault();


        const zoomFactor =
          0.0015;


        const currentRadius =
          Math.max(
            cameraInstance.radius,
            0.1
          );


        cameraInstance.radius +=
          event.deltaY *
          currentRadius *
          zoomFactor;


        const lowerLimit =
          cameraInstance.lowerRadiusLimit ??
          0.5;


        const upperLimit =
          cameraInstance.upperRadiusLimit ??
          100;


        cameraInstance.radius =
          Math.max(
            lowerLimit,
            Math.min(
              upperLimit,
              cameraInstance.radius
            )
          );

      },
      {
        passive: false
      }
    );


    // ----------------------------------------------------------
    // SHIFT + WHEEL PAN
    // ----------------------------------------------------------

    canvasElement.addEventListener(
      "wheel",
      event => {

        if (!event.shiftKey) {
          return;
        }


        event.preventDefault();


        const dx =
          event.deltaX ||
          event.deltaY;


        const dy =
          event.deltaY;


        panCamera(
          cameraInstance,
          dx,
          dy
        );

      },
      {
        passive: false
      }
    );

  }


  // ============================================================
  // ANATOMICAL 3D PAN AXES
  // ============================================================

  const anatomicalPanAxes = {

    superior:
      new Vector3(
        0,
        1,
        0
      ),

    inferior:
      new Vector3(
        0,
        -1,
        0
      ),

    left:
      new Vector3(
        -1,
        0,
        0
      ),

    right:
      new Vector3(
        1,
        0,
        0
      ),

    /*
     * These assume the anatomical model uses:
     *
     * +Z = posterior
     * -Z = anterior
     *
     * If your Blender model is oriented the other way,
     * swap these two vectors.
     */

    anterior:
      new Vector3(
        0,
        0,
        -1
      ),

    posterior:
      new Vector3(
        0,
        0,
        1
      )

  };


  // ============================================================
  // PAN CAMERA BY ANATOMICAL DIRECTION
  // ============================================================

  function panCameraByDirection(
    direction,
    deltaSeconds = 1 / 60
  ) {

    if (!camera) {
      return;
    }


    const axis =
      anatomicalPanAxes[
        direction
      ];


    if (!axis) {
      return;
    }


    /*
     * Movement is scaled using camera distance.
     *
     * Zoomed in:
     *   smaller movement
     *
     * Zoomed out:
     *   larger movement
     */

    const speed =
      Math.max(
        camera.radius * 0.35,
        0.15
      );


    camera.target.addInPlace(
      axis.scale(
        speed * deltaSeconds
      )
    );

  }


  // ============================================================
  // ANATOMICAL PAN STATE
  // ============================================================

  let activePanDirection =
    null;

  let panAnimationFrame =
    null;

  let panLastTime =
    0;

  let panHoldTimer =
    null;


  // ============================================================
  // STOP ANATOMICAL PAN
  // ============================================================

  function stopAnatomicalPan() {

    activePanDirection =
      null;


    if (
      panAnimationFrame !== null
    ) {

      cancelAnimationFrame(
        panAnimationFrame
      );


      panAnimationFrame =
        null;

    }


    if (
      panHoldTimer !== null
    ) {

      clearTimeout(
        panHoldTimer
      );


      panHoldTimer =
        null;

    }


    document
      .querySelectorAll(
        "#navigator [data-pan]"
      )
      .forEach(
        button => {

          button.classList.remove(
            "is-active"
          );

        }
      );

  }


  // ============================================================
  // CONTINUOUS PAN LOOP
  // ============================================================

  function runAnatomicalPan(
    now
  ) {

    if (!activePanDirection) {

      panAnimationFrame =
        null;

      return;

    }


    const deltaSeconds =
      Math.min(
        (now - panLastTime) / 1000,
        0.05
      );


    panLastTime =
      now;


    panCameraByDirection(
      activePanDirection,
      deltaSeconds
    );


    panAnimationFrame =
      requestAnimationFrame(
        runAnatomicalPan
      );

  }


  // ============================================================
  // START ANATOMICAL PAN
  // ============================================================

  function startAnatomicalPan(
    direction,
    button
  ) {

    stopAnatomicalPan();


    activePanDirection =
      direction;


    if (button) {

      button.classList.add(
        "is-active"
      );

    }


    /*
     * Immediate movement.
     *
     * This makes a simple click/tap responsive.
     */

    panCameraByDirection(
      direction,
      0.18
    );


    /*
     * If held down, begin continuous movement.
     */

    panHoldTimer =
      setTimeout(
        () => {

          if (!activePanDirection) {
            return;
          }


          panLastTime =
            performance.now();


          panAnimationFrame =
            requestAnimationFrame(
              runAnatomicalPan
            );

        },
        140
      );

  }


  // ============================================================
  // CREATE ANATOMICAL NAVIGATOR
  // ============================================================

  function createAnatomicalNavigator() {

    const navigator =
      document.getElementById(
        "navigator"
      );


    if (!navigator) {

      console.warn(
        "[navigator] #navigator not found"
      );

      return null;

    }


    /*
     * Prevent the controller from being
     * created more than once.
     */

    let controller =
      navigator.querySelector(
        ".anatomical-controller"
      );


    if (controller) {
      return controller;
    }


    controller =
      document.createElement(
        "div"
      );


    controller.className =
      "anatomical-controller";


    controller.setAttribute(
      "role",
      "group"
    );


    controller.setAttribute(
      "aria-label",
      "Anatomical model navigation"
    );


    controller.innerHTML = `

      <button
        type="button"
        class="nav-direction nav-superior"
        data-pan="superior"
        aria-label="Pan superior"
        title="Superior"
      >
        ▲
        <span>Superior</span>
      </button>


      <div class="nav-middle-row">

        <button
          type="button"
          class="nav-direction nav-left"
          data-pan="left"
          aria-label="Pan left"
          title="Left"
        >
          ◀
          <span>Left</span>
        </button>


        <button
          type="button"
          class="nav-direction nav-anterior"
          data-pan="anterior"
          aria-label="Pan anterior"
          title="Anterior"
        >
          ●
          <span>Anterior</span>
        </button>


        <button
          type="button"
          class="nav-direction nav-right"
          data-pan="right"
          aria-label="Pan right"
          title="Right"
        >
          ▶
          <span>Right</span>
        </button>

      </div>


      <div class="nav-posterior-row">

        <button
          type="button"
          class="nav-direction nav-posterior"
          data-pan="posterior"
          aria-label="Pan posterior"
          title="Posterior"
        >
          ↙
          <span>Posterior</span>
        </button>

      </div>


      <button
        type="button"
        class="nav-direction nav-inferior"
        data-pan="inferior"
        aria-label="Pan inferior"
        title="Inferior"
      >
        ▼
        <span>Inferior</span>
      </button>

    `;


    if (navigatorZoomBtn) {

      navigator.insertBefore(
        controller,
        navigatorZoomBtn
      );

    } else {

      navigator.appendChild(
        controller
      );

    }


    return controller;

  }


  // ============================================================
  // SETUP ANATOMICAL PAN CONTROLS
  // ============================================================

  function setupAnatomicalPanControls() {

    const buttons =
      document.querySelectorAll(
        "#navigator [data-pan]"
      );


    if (!buttons.length) {

      console.warn(
        "[navigator] No anatomical pan buttons found."
      );

      return;

    }


    /*
     * IMPORTANT:
     *
     * Do not attach listeners repeatedly every time
     * a new organ/model is selected.
     */

    buttons.forEach(
      button => {

        if (
          button.dataset.panInitialized ===
          "true"
        ) {

          return;

        }


        button.dataset.panInitialized =
          "true";


        const direction =
          button.dataset.pan;


        if (!direction) {
          return;
        }


        // --------------------------------------------------------
        // POINTER DOWN
        // --------------------------------------------------------

        button.addEventListener(
          "pointerdown",
          event => {

            event.preventDefault();


            startAnatomicalPan(
              direction,
              button
            );


            try {

              button.setPointerCapture(
                event.pointerId
              );

            } catch (_) {}

          }
        );


        // --------------------------------------------------------
        // POINTER UP
        // --------------------------------------------------------

        button.addEventListener(
          "pointerup",
          event => {

            event.preventDefault();

            stopAnatomicalPan();

          }
        );


        // --------------------------------------------------------
        // POINTER CANCEL
        // --------------------------------------------------------

        button.addEventListener(
          "pointercancel",
          stopAnatomicalPan
        );


        // --------------------------------------------------------
        // LOST POINTER
        // --------------------------------------------------------

        button.addEventListener(
          "lostpointercapture",
          stopAnatomicalPan
        );


        // --------------------------------------------------------
        // KEYBOARD
        // --------------------------------------------------------

        button.addEventListener(
          "keydown",
          event => {

            if (
              event.key === "Enter" ||
              event.key === " "
            ) {

              event.preventDefault();


              if (
                activePanDirection !==
                direction
              ) {

                startAnatomicalPan(
                  direction,
                  button
                );

              }

            }

          }
        );


        button.addEventListener(
          "keyup",
          event => {

            if (
              event.key === "Enter" ||
              event.key === " "
            ) {

              event.preventDefault();

              stopAnatomicalPan();

            }

          }
        );


        // --------------------------------------------------------
        // CONTEXT MENU
        // --------------------------------------------------------

        button.addEventListener(
          "contextmenu",
          event => {

            event.preventDefault();

          }
        );

      }
    );


    window.addEventListener(
      "pointerup",
      stopAnatomicalPan
    );


    window.addEventListener(
      "pointercancel",
      stopAnatomicalPan
    );


    window.addEventListener(
      "blur",
      stopAnatomicalPan
    );


    console.log(
      `[navigator] ${buttons.length} anatomical controls ready`
    );

  }


  // ============================================================
  // NAVIGATOR
  // ============================================================

  function updateNavigatorState() {

    const viewer =
      document.querySelector(
        ".viewer"
      );


    if (!viewer) {
      return;
    }


    viewer.classList.toggle(
      "is-enlarged",
      isNavigatorExpanded
    );


    if (navigatorZoomBtn) {

      navigatorZoomBtn.textContent =
        isNavigatorExpanded
          ? "⤡"
          : "⤢";


      navigatorZoomBtn.setAttribute(
        "aria-label",
        isNavigatorExpanded
          ? "Restore view"
          : "Enlarge view"
      );

    }


    if (
      scene &&
      scene.activeCamera &&
      typeof scene.activeCamera.radius ===
        "number"
    ) {

      scene.activeCamera.radius =
        isNavigatorExpanded
          ? 2.8
          : 5;

    }

  }


  // ============================================================
  // RESET CAMERA TO DEFAULT
  // ============================================================

  function resetCameraToDefault() {

    if (!camera) {
      return;
    }

    stopAnatomicalPan();

    camera.alpha = Math.PI / 2;
    camera.beta = Math.PI / 2.5;
    camera.radius = 5;
    camera.setTarget(Vector3.Zero());

    if (
      camera.useAutoRotationBehavior &&
      camera.autoRotationBehavior
    ) {

      camera.autoRotationBehavior.restart();

    }

  }


  // ============================================================
  // CREATE BABYLON SCENE
  // ============================================================

  function createScene() {

    const s =
      new Scene(
        engine
      );


    /*
     * IMPORTANT:
     *
     * No "const" here.
     *
     * We need the anatomical controller to access
     * this camera after createScene() finishes.
     */

    camera =
      new ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 2.5,
        5,
        new Vector3(
          0,
          0,
          0
        ),
        s
      );


    // ----------------------------------------------------------
    // BABYLON CONTROL
    // ----------------------------------------------------------

    camera.attachControl(
      canvas,
      true
    );


    /*
     * Left mouse remains available.
     * Middle mouse is controlled by our Blender-style system.
     */

    if (
      camera.inputs &&
      camera.inputs.attached &&
      camera.inputs.attached.pointers
    ) {

      camera.inputs.attached.pointers.buttons =
        [0];

    }


    // ----------------------------------------------------------
    // AUTOMATIC ROTATION
    // ----------------------------------------------------------

    camera.useAutoRotationBehavior =
      true;


    camera.autoRotationBehavior.idleRotationSpeed =
      0.1;


    // ----------------------------------------------------------
    // ZOOM LIMITS
    // ----------------------------------------------------------

    camera.lowerRadiusLimit =
      2;


    camera.upperRadiusLimit =
      15;


    // ----------------------------------------------------------
    // VERTICAL CAMERA LIMITS
    // ----------------------------------------------------------

    camera.lowerBetaLimit =
      0.05;


    camera.upperBetaLimit =
      Math.PI - 0.05;


    // ----------------------------------------------------------
    // BLENDER NAVIGATION
    // ----------------------------------------------------------

    enableBlenderStyleNavigation(
      canvas,
      camera
    );


    // ----------------------------------------------------------
    // LIGHT
    // ----------------------------------------------------------

    const light =
      new HemisphericLight(
        "light",
        new Vector3(
          0,
          1,
          0
        ),
        s
      );


    light.intensity =
      0.8;


    return s;

  }


  // ============================================================
  // INITIALIZE ANATOMICAL NAVIGATOR
  // ============================================================

  /*
   * Create the controller ONCE.
   *
   * It does not need to be recreated every time
   * another organ is loaded because it operates
   * on the shared "camera" variable.
   */

  createAnatomicalNavigator();

  setupAnatomicalPanControls();


  // ============================================================
  // INITIALIZE CONTROLLERS
  // ============================================================

  const notesCtrl =
    createNotesController();


  const mediaCtrl =
    createMediaController({
      drawerBody
    });


  const drawerCtrl =
    createDrawerController({
      notesDrawer,
      drawerBody
    });


  const uiCtrl =
    createUiController();


  // ============================================================
  // DRAWER WRAPPERS
  // ============================================================

  const setDrawerMaximized =
    (m) =>
      drawerCtrl.setDrawerMaximized(
        m
      );


  const setDrawerEditing =
    (v) =>
      drawerCtrl.setDrawerEditing(
        v
      );


  const closeDrawer =
    () =>
      drawerCtrl.closeDrawer();


  const openDrawer =
    (
      org,
      part,
      mode = "combined"
    ) =>
      drawerCtrl.openDrawer(
        org,
        part,
        getNoteRemote,
        selectedSubject,
        mode
      );


  // ============================================================
  // READ EMBEDS
  // ============================================================

  function readEmbedsFromDrawer() {

    try {

      const metaEl =
        drawerBody &&
        drawerBody.querySelector &&
        drawerBody.querySelector(
          ".embed-metadata"
        );


      if (metaEl) {

        const parsed =
          JSON.parse(
            metaEl.textContent ||
            metaEl.getAttribute(
              "data-embeds"
            ) ||
            "[]"
          );


        if (
          Array.isArray(
            parsed
          )
        ) {

          return parsed;

        }

      }

    } catch (e) {}


    const embedsPanelEl =
      document.getElementById(
        "embedsPanel"
      );


    if (!embedsPanelEl) {
      return [];
    }


    return Array.from(
      embedsPanelEl.querySelectorAll(
        ".embedded-item"
      )
    )
      .map(
        item => ({

          id:
            item.dataset.embedId ||
            (
              "e_" +
              Date.now() +
              Math.random()
                .toString(16)
                .slice(2)
            ),

          title:
            item.querySelector("h4")
              ? item.querySelector("h4").textContent
              : "",

          caption:
            item.querySelector("p")
              ? item.querySelector("p").textContent
              : "",

          html:
            item.dataset.embedHtml ||
            "",

          createdAt:
            new Date().toISOString()

        })
      )
      .filter(
        item =>
          item.html ||
          item.title ||
          item.caption
      );

  }


  // ============================================================
  // EMBED METADATA
  // ============================================================

  function ensureDrawerEmbedMetadata(
    list = []
  ) {

    if (!drawerBody) {
      return;
    }


    let metaEl =
      drawerBody.querySelector &&
      drawerBody.querySelector(
        ".embed-metadata"
      );


    if (!metaEl) {

      metaEl =
        document.createElement(
          "div"
        );


      metaEl.className =
        "embed-metadata";


      metaEl.style.display =
        "none";


      drawerBody.appendChild(
        metaEl
      );

    }


    try {

      metaEl.textContent =
        JSON.stringify(
          Array.isArray(list)
            ? list
            : []
        );

    } catch (e) {

      metaEl.setAttribute(
        "data-embeds",
        JSON.stringify(
          Array.isArray(list)
            ? list
            : []
        )
      );

    }

  }


  // ============================================================
  // LOAD ORGAN MODEL
  // ============================================================

  async function loadOrganModel(
    org
  ) {

    /*
     * Dispose old scene.
     */

    try {

      if (scene) {

        scene.dispose();

      }

    } catch (e) {

      console.warn(
        "Error disposing old scene:",
        e
      );

    }


    /*
     * Create new scene and camera.
     */

    scene =
      createScene();


    setPlaceholderLoading(
      true
    );


    updateNavigatorState();


    const parentSystem =
      SYSTEMS.find(
        system =>
          Array.isArray(
            system.organs
          ) &&
          system.organs.includes(
            org
          )
      );


    const modelPath =
      org.modelPath ||
      (
        parentSystem &&
        parentSystem.modelPath
      );


    const modelFile =
      org.modelFile ||
      (
        parentSystem &&
        parentSystem.modelFile
      );


    if (
      !modelPath ||
      !modelFile
    ) {

      setPlaceholderUnavailable();

      return;

    }


    try {

      await SceneLoader.AppendAsync(
        modelPath,
        modelFile,
        scene
      );


      setPlaceholderLoading(
        false
      );

    } catch (err) {

      console.warn(
        "Failed to load model:",
        err
      );


      setPlaceholderUnavailable();

    }

  }


  // ============================================================
  // RENDER SYSTEMS
  // ============================================================

  function renderSystems() {

    SYSTEMS.forEach(
      system => {

        const wrapper =
          document.createElement(
            "div"
          );


        wrapper.className =
          "system-wrapper";


        const header =
          document.createElement(
            "button"
          );


        header.className =
          "system-header";


        header.textContent =
          system.name;


        const list =
          document.createElement(
            "ul"
          );


        list.className =
          "system-list collapsed";


        list.hidden =
          true;


        const toggleList =
          () => {

            const isCollapsed =
              list.classList.toggle(
                "collapsed"
              );


            list.hidden =
              isCollapsed;


            header.setAttribute(
              "aria-expanded",
              String(
                !isCollapsed
              )
            );

          };


        header.addEventListener(
          "click",
          toggleList
        );


        header.setAttribute(
          "aria-expanded",
          "false"
        );


        header.setAttribute(
          "role",
          "button"
        );


        header.tabIndex =
          0;


        header.addEventListener(
          "keydown",
          e => {

            if (
              e.key === "Enter" ||
              e.key === " "
            ) {

              e.preventDefault();

              header.click();

            }

          }
        );


        system.organs.forEach(
          org => {

            const li =
              document.createElement(
                "li"
              );


            li.className =
              "organ-item";


            li.textContent =
              org.name;


            li.dataset.id =
              org.id;


            li.setAttribute(
              "role",
              "button"
            );


            li.tabIndex =
              0;


            li.addEventListener(
              "click",
              async () => {

                await selectOrgan(
                  org
                );

              }
            );


            li.addEventListener(
              "keydown",
              e => {

                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {

                  e.preventDefault();

                  li.click();

                }

              }
            );


            list.appendChild(
              li
            );

          }
        );


        wrapper.appendChild(
          header
        );


        wrapper.appendChild(
          list
        );


        organListEl.appendChild(
          wrapper
        );

      }
    );

  }


  // ============================================================
  // RENDER SUBJECTS
  // ============================================================

  function renderSubjects() {

    SUBJECTS.forEach(
      s => {

        const btn =
          document.createElement(
            "button"
          );


        btn.className =
          "subject-btn";


        btn.textContent =
          s.label;


        btn.dataset.id =
          s.id;


        btn.addEventListener(
          "click",
          () => {

            selectedSubject =
              s.id;


            document
              .querySelectorAll(
                ".subject-btn"
              )
              .forEach(
                b => {

                  const isActive =
                    b.dataset.id ===
                    s.id;


                  b.classList.toggle(
                    "active",
                    isActive
                  );


                  b.setAttribute(
                    "aria-pressed",
                    isActive
                      ? "true"
                      : "false"
                  );


                  if (isActive) {

                    b.setAttribute(
                      "aria-current",
                      "true"
                    );

                  } else {

                    b.removeAttribute(
                      "aria-current"
                    );

                  }

                }
              );

          }
        );


        btn.addEventListener(
          "keydown",
          e => {

            if (
              e.key === "Enter" ||
              e.key === " "
            ) {

              e.preventDefault();

              btn.click();

            }

          }
        );


        subjectListEl.appendChild(
          btn
        );

      }
    );


    const first =
      subjectListEl.querySelector(
        ".subject-btn"
      );


    if (first) {

      first.classList.add(
        "active"
      );


      first.setAttribute(
        "aria-pressed",
        "true"
      );


      first.setAttribute(
        "aria-current",
        "true"
      );

    }

  }


  // ============================================================
  // FORMAT NOTE CONTENT
  // ============================================================

  function formatNoteContent(
    rawContent
  ) {

    return notesCtrl.formatNoteContent(
      rawContent
    );

  }


  // ============================================================
  // SELECT ORGAN
  // ============================================================

  async function selectOrgan(
    org
  ) {

    if (!org) {
      return;
    }


    document
      .querySelectorAll(
        ".organ-item"
      )
      .forEach(
        el => {

          const isSel =
            el.dataset.id ===
            org.id;


          el.classList.toggle(
            "selected",
            isSel
          );


          if (isSel) {

            el.setAttribute(
              "aria-current",
              "true"
            );

          } else {

            el.removeAttribute(
              "aria-current"
            );

          }

        }
      );


    if (org.notes) {

      showNotesBtn.hidden =
        false;


      showNotesBtn.dataset.id =
        org.id;


      showNotesBtn.dataset.subject =
        selectedSubject;


      if (userNotesBtn) {

        userNotesBtn.hidden =
          false;


        userNotesBtn.dataset.id =
          org.id;


        userNotesBtn.dataset.subject =
          selectedSubject;

      }

    } else {

      showNotesBtn.hidden =
        true;


      showNotesBtn.removeAttribute(
        "data-id"
      );


      if (userNotesBtn) {

        userNotesBtn.hidden =
          true;


        userNotesBtn.removeAttribute(
          "data-id"
        );

      }

    }


    await loadOrganModel(
      org
    );


    document
      .querySelectorAll(
        ".parts-list"
      )
      .forEach(
        n =>
          n.remove()
      );


    const selEl =
      document.querySelector(
        `.organ-item[data-id="${org.id}"]`
      );


    if (
      selEl &&
      org.parts &&
      org.parts.length
    ) {

      const partsList =
        document.createElement(
          "ul"
        );


      partsList.className =
        "parts-list";


      org.parts.forEach(
        part => {

          const p =
            document.createElement(
              "li"
            );


          p.className =
            "part-item";


          p.textContent =
            part.name;


          p.dataset.partId =
            part.id;


          p.setAttribute(
            "role",
            "button"
          );


          p.tabIndex =
            0;


          p.addEventListener(
            "click",
            e => {

              e.stopPropagation();


              selectPart(
                org,
                part
              );

            }
          );


          p.addEventListener(
            "keydown",
            e => {

              if (
                e.key === "Enter" ||
                e.key === " "
              ) {

                e.preventDefault();

                p.click();

              }

            }
          );


          partsList.appendChild(
            p
          );

        }
      );


      selEl.insertAdjacentElement(
        "afterend",
        partsList
      );

    }

  }


  // ============================================================
  // SELECT PART
  // ============================================================

  async function selectPart(
    org,
    part
  ) {

    document
      .querySelectorAll(
        ".part-item"
      )
      .forEach(
        el => {

          const isSel =
            el.dataset.partId ===
            part.id;


          el.classList.toggle(
            "selected",
            isSel
          );


          if (isSel) {

            el.setAttribute(
              "aria-current",
              "true"
            );

          } else {

            el.removeAttribute(
              "aria-current"
            );

          }

        }
      );


    showNotesBtn.hidden =
      false;


    showNotesBtn.dataset.id =
      org.id;


    showNotesBtn.dataset.partId =
      part.id;


    showNotesBtn.dataset.subject =
      selectedSubject;


    if (userNotesBtn) {

      userNotesBtn.hidden =
        false;


      userNotesBtn.dataset.id =
        org.id;


      userNotesBtn.dataset.partId =
        part.id;


      userNotesBtn.dataset.subject =
        selectedSubject;

    }


    if (
      part.modelFile ||
      org.modelFile ||
      (
        SYSTEMS.find(
          system =>
            Array.isArray(
              system.organs
            ) &&
            system.organs.includes(
              org
            )
        )?.modelFile
      )
    ) {

      const parentSystem =
        SYSTEMS.find(
          system =>
            Array.isArray(
              system.organs
            ) &&
            system.organs.includes(
              org
            )
        );


      const partOrg =
        Object.assign(
          {},
          org,
          {

            modelPath:
              part.modelPath ||
              org.modelPath ||
              (
                parentSystem &&
                parentSystem.modelPath
              ),

            modelFile:
              part.modelFile ||
              org.modelFile ||
              (
                parentSystem &&
                parentSystem.modelFile
              )

          }
        );


      await loadOrganModel(
        partOrg
      );

    }

  }


  // ============================================================
  // OPEN LEGACY NOTE MODAL
  // ============================================================

  async function openModal(
    org
  ) {

    const organId =
      (
        showNotesBtn &&
        showNotesBtn.dataset.id
      ) ||
      org._id ||
      org.id ||
      null;


    const partId =
      (
        showNotesBtn &&
        showNotesBtn.dataset.partId
      ) ||
      null;


    if (modalTitle) {

      modalTitle.innerText =
        `${org.name} — ${
          selectedSubject
            .charAt(0)
            .toUpperCase() +
          selectedSubject.slice(1)
        }`;

    }


    let stickerContent =
      "";


    try {

      const dbContent =
        await getNoteRemote(
          organId,
          partId,
          selectedSubject
        );


      if (dbContent) {

        stickerContent =
          typeof dbContent === "string"
            ? dbContent
            : (
              dbContent.content ||
              ""
            );

      }

    } catch (e) {}


    const permanentContent =
      resolvePermanentNoteHtml(
        org,
        null,
        selectedSubject
      ) ||
      "<p>No notes available.</p>";


    if (modalBody) {

      modalBody.innerHTML =
        notesCtrl.formatNoteContent(
          buildDisplayNoteHtml(
            permanentContent,
            stickerContent
          )
        );

    }


    if (saveNoteBtn) {
      saveNoteBtn.hidden = true;
    }


    if (editNoteBtn) {
      editNoteBtn.hidden = false;
    }


    if (noteModal) {

      noteModal.classList.remove(
        "hidden"
      );

    }

  }


  // ============================================================
  // MODEL CHOOSER
  // ============================================================

  const seeModelBtn =
    document.getElementById(
      "seeModelBtn"
    );


  const modelChooserModal =
    document.getElementById(
      "modelChooserModal"
    );


  const modelChooserList =
    document.getElementById(
      "modelChooserList"
    );


  const closeModelChooser =
    document.getElementById(
      "closeModelChooser"
    );


  function renderModelChooser() {

    if (
      !modelChooserList ||
      !embedsPanel
    ) {

      return;

    }


    const items =
      Array.from(
        embedsPanel.querySelectorAll(
          ".embedded-item"
        )
      );


    modelChooserList.innerHTML =
      "";


    let searchWrap =
      modelChooserList.parentNode &&
      modelChooserList.parentNode.querySelector &&
      modelChooserList.parentNode.querySelector(
        ".model-chooser-search"
      );


    if (
      !searchWrap &&
      modelChooserList.parentNode
    ) {

      searchWrap =
        document.createElement(
          "div"
        );


      searchWrap.className =
        "model-chooser-search";


      const searchInput =
        document.createElement(
          "input"
        );


      searchInput.type =
        "search";


      searchInput.placeholder =
        "Search models for this organ...";


      searchInput.className =
        "model-chooser-search-input";


      searchWrap.appendChild(
        searchInput
      );


      modelChooserList.parentNode.insertBefore(
        searchWrap,
        modelChooserList
      );


      let chooserTimer =
        null;


      searchInput.addEventListener(
        "input",
        e => {

          clearTimeout(
            chooserTimer
          );


          const q =
            String(
              e.target.value ||
              ""
            )
              .trim()
              .toLowerCase();


          chooserTimer =
            setTimeout(
              () => {

                Array.from(
                  modelChooserList.querySelectorAll(
                    ".model-chooser-option"
                  )
                ).forEach(
                  row => {

                    const label =
                      (
                        row.querySelector(
                          ".model-choice-label"
                        )
                          ? row.querySelector(
                              ".model-choice-label"
                            ).textContent
                          : ""
                      ).toLowerCase();


                    const caption =
                      (
                        row.querySelector(
                          ".model-choice-caption"
                        )
                          ? row.querySelector(
                              ".model-choice-caption"
                            ).textContent
                          : ""
                      ).toLowerCase();


                    row.style.display =
                      (
                        !q ||
                        label.indexOf(q) >= 0 ||
                        caption.indexOf(q) >= 0
                      )
                        ? ""
                        : "none";

                  }
                );

              },
              150
            );

        }
      );

    }


    if (!items.length) {

      const empty =
        document.createElement(
          "div"
        );


      empty.className =
        "model-choice-meta";


      empty.textContent =
        "No embedded models available.";


      modelChooserList.appendChild(
        empty
      );


      return;

    }


    items.forEach(
      item => {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "model-chooser-option";


        row.tabIndex =
          0;


        const title =
          item.querySelector("h4")
            ? item.querySelector("h4").textContent
            : "Embedded model";


        const caption =
          item.querySelector("p")
            ? item.querySelector("p").textContent
            : "Open model";


        row.innerHTML = `
          <div class="model-chooser-option">
            <div class="model-choice-meta">
              <span class="model-choice-label">${title}</span>
              <span class="model-choice-caption">${caption || "Open model"}</span>
            </div>

            <div class="model-choice-actions">
              <button class="model-choice-open">Open</button>
              <button class="model-choice-edit">Edit</button>
              <button class="model-choice-delete">Delete</button>
            </div>
          </div>
        `;


        row.querySelector(
          ".model-choice-open"
        ).addEventListener(
          "click",
          () => {

            openEmbedViewerFromElement(
              item
            );


            if (modelChooserModal) {

              modelChooserModal.classList.add(
                "hidden"
              );

            }

          }
        );


        row.querySelector(
          ".model-choice-edit"
        ).addEventListener(
          "click",
          () => {

            try {

              const metaEl =
                drawerBody &&
                drawerBody.querySelector &&
                drawerBody.querySelector(
                  ".embed-metadata"
                );


              let list =
                [];


              try {

                list =
                  metaEl
                    ? JSON.parse(
                        metaEl.textContent ||
                        metaEl.getAttribute(
                          "data-embeds"
                        ) ||
                        "[]"
                      )
                    : [];

              } catch (er) {

                list =
                  [];

              }


              const obj =
                list.find(
                  x =>
                    x &&
                    x.id ===
                    item.dataset.embedId
                );


              if (obj) {

                embedCtrl.openEmbedModal(
                  obj,
                  item
                );

              }

            } catch (er) {

              console.warn(
                "Failed to open embed editor",
                er
              );

            }


            if (modelChooserModal) {

              modelChooserModal.classList.add(
                "hidden"
              );

            }

          }
        );


        row.querySelector(
          ".model-choice-delete"
        ).addEventListener(
          "click",
          () => {

            try {

              const id =
                item.dataset.embedId;


              const sidebarItem =
                embedsPanel &&
                embedsPanel.querySelector &&
                embedsPanel.querySelector(
                  `.embedded-item[data-embed-id="${id}"]`
                );


              if (sidebarItem) {
                sidebarItem.remove();
              }


              const metaEl =
                drawerBody &&
                drawerBody.querySelector &&
                drawerBody.querySelector(
                  ".embed-metadata"
                );


              if (metaEl) {

                let list =
                  [];


                try {

                  list =
                    JSON.parse(
                      metaEl.textContent ||
                      metaEl.getAttribute(
                        "data-embeds"
                      ) ||
                      "[]"
                    );

                } catch (er) {

                  list =
                    [];

                }


                list =
                  list.filter(
                    x =>
                      x &&
                      x.id !== id
                  );


                try {

                  metaEl.textContent =
                    JSON.stringify(
                      list
                    );

                } catch (er) {

                  metaEl.setAttribute(
                    "data-embeds",
                    JSON.stringify(
                      list
                    )
                  );

                }

              }


              try {

                document.dispatchEvent(
                  new CustomEvent(
                    "embed:inserted",
                    {
                      detail: {
                        wasEdit: true
                      }
                    }
                  )
                );

              } catch (er) {}


              renderModelChooser();

            } catch (er) {

              console.warn(
                "Failed to delete embed from chooser",
                er
              );

            }

          }
        );


        row.addEventListener(
          "click",
          ev => {

            if (
              !ev.target.closest(
                "button"
              )
            ) {

              openEmbedViewerFromElement(
                item
              );

            }

          }
        );


        modelChooserList.appendChild(
          row
        );

      }
    );

  }


  // ============================================================
  // OPEN EMBED CHOOSER
  // ============================================================

  function openEmbedChooser() {

    if (!embedsPanel) {

      alert(
        "No embedded models available."
      );

      return;

    }


    const items =
      embedsPanel.querySelectorAll(
        ".embedded-item"
      );


    if (!items.length) {

      alert(
        "No embedded models available."
      );

      return;

    }


    renderModelChooser();


    if (modelChooserModal) {

      modelChooserModal.classList.remove(
        "hidden"
      );


      modelChooserModal.setAttribute(
        "aria-hidden",
        "false"
      );


      const firstFocusable =
        modelChooserModal.querySelector(
          "button, [tabindex]:not([tabindex='-1'])"
        );


      if (firstFocusable) {
        firstFocusable.focus();
      }

    }

  }


  // ============================================================
  // CLOSE MODEL CHOOSER
  // ============================================================

  if (closeModelChooser) {

    closeModelChooser.addEventListener(
      "click",
      () => {

        if (modelChooserModal) {

          modelChooserModal.classList.add(
            "hidden"
          );


          modelChooserModal.setAttribute(
            "aria-hidden",
            "true"
          );

        }

      }
    );

  }


  if (modelChooserModal) {

    modelChooserModal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          modelChooserModal
        ) {

          modelChooserModal.classList.add(
            "hidden"
          );


          modelChooserModal.setAttribute(
            "aria-hidden",
            "true"
          );

        }

      }
    );

  }


  // ============================================================
  // EMBED VIEWER
  // ============================================================

  function openEmbedViewerFromElement(
    el
  ) {

    if (!el) {
      return;
    }


    let iframe =
      el.querySelector &&
      el.querySelector(
        "iframe"
      );


    const embedHtml =
      el.dataset &&
      el.dataset.embedHtml
        ? el.dataset.embedHtml
        : "";


    if (!iframe && embedHtml) {

      try {

        const tmp =
          document.createElement(
            "div"
          );


        tmp.innerHTML =
          embedHtml;


        iframe =
          tmp.querySelector(
            "iframe"
          );

      } catch (e) {

        iframe =
          null;

      }

    }


    const title =
      el.querySelector &&
      (
        el.querySelector("h4")
          ? el.querySelector("h4").textContent
          : ""
      );


    const caption =
      el.querySelector &&
      (
        el.querySelector("p")
          ? el.querySelector("p").textContent
          : ""
      );


    if (!iframe) {
      return;
    }


    const existing =
      document.querySelector(
        ".embed-viewer"
      );


    if (existing) {

      try {
        existing.remove();
      } catch (e) {}

    }


    const viewer =
      document.createElement(
        "div"
      );


    viewer.className =
      "embed-viewer";


    const panel =
      document.createElement(
        "div"
      );


    panel.className =
      "viewer-panel";


    panel.setAttribute(
      "role",
      "dialog"
    );


    panel.setAttribute(
      "aria-modal",
      "true"
    );


    const titleId =
      "viewer-title-" +
      Date.now();


    panel.setAttribute(
      "aria-labelledby",
      titleId
    );


    const header =
      document.createElement(
        "div"
      );


    header.className =
      "viewer-header";


    const h =
      document.createElement(
        "h4"
      );


    h.textContent =
      title ||
      "Model Viewer";


    h.id =
      titleId;


    const closeBtn =
      document.createElement(
        "button"
      );


    closeBtn.className =
      "viewer-close";


    closeBtn.innerText =
      "✕";


    header.appendChild(
      h
    );


    header.appendChild(
      closeBtn
    );


    const iframeClone =
      iframe.cloneNode(
        true
      );


    const wrap =
      document.createElement(
        "div"
      );


    wrap.className =
      "embed-iframe-wrap";


    iframeClone.removeAttribute(
      "width"
    );


    iframeClone.removeAttribute(
      "height"
    );


    iframeClone.style.width =
      "100%";


    iframeClone.style.height =
      "100%";


    iframeClone.style.border =
      "0";


    wrap.appendChild(
      iframeClone
    );


    const cap =
      document.createElement(
        "div"
      );


    cap.className =
      "viewer-caption";


    cap.textContent =
      caption || "";


    panel.appendChild(
      header
    );


    panel.appendChild(
      wrap
    );


    if (caption) {

      panel.appendChild(
        cap
      );

    }


    viewer.appendChild(
      panel
    );


    let live =
      document.getElementById(
        "viewer-live-region"
      );


    if (!live) {

      live =
        document.createElement(
          "div"
        );


      live.id =
        "viewer-live-region";


      live.className =
        "visually-hidden";


      live.setAttribute(
        "aria-live",
        "assertive"
      );


      document.body.appendChild(
        live
      );

    }


    try {

      document.body.appendChild(
        viewer
      );

    } catch (e) {}


    requestAnimationFrame(
      () => {

        viewer.classList.add(
          "open"
        );

      }
    );


    try {

      live.textContent =
        (
          title ||
          "Model Viewer"
        ) +
        " opened";

    } catch (e) {}


    function closeViewer() {

      try {

        live.textContent =
          (
            title ||
            "Model Viewer"
          ) +
          " closed";

      } catch (e) {}


      viewer.classList.remove(
        "open"
      );


      viewer.classList.add(
        "closing"
      );


      setTimeout(
        () => {

          try {
            viewer.remove();
          } catch (e) {}

        },
        240
      );

    }


    closeBtn.addEventListener(
      "click",
      closeViewer
    );


    viewer.addEventListener(
      "click",
      ev => {

        if (
          ev.target ===
          viewer
        ) {

          closeViewer();

        }

      }
    );


    const escListener =
      function (e) {

        if (
          e.key ===
          "Escape"
        ) {

          closeViewer();


          document.removeEventListener(
            "keydown",
            escListener
          );

        }

      };


    document.addEventListener(
      "keydown",
      escListener
    );


    try {
      closeBtn.focus();
    } catch (e) {}


    const focusableSelector =
      "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex='-1'])";


    const focusables =
      panel.querySelectorAll(
        focusableSelector
      );


    let firstFocusable =
      closeBtn;


    let lastFocusable =
      closeBtn;


    if (
      focusables &&
      focusables.length > 0
    ) {

      firstFocusable =
        focusables[0];


      lastFocusable =
        focusables[
          focusables.length - 1
        ];

    }


    function handleFocus(e) {

      if (
        !viewer.contains(
          document.activeElement
        )
      ) {

        e.preventDefault();


        (
          firstFocusable ||
          closeBtn
        ).focus();

      }

    }


    document.addEventListener(
      "focus",
      handleFocus,
      true
    );


    const cleanup =
      () => {

        document.removeEventListener(
          "focus",
          handleFocus,
          true
        );

      };


    closeBtn.addEventListener(
      "click",
      cleanup
    );


    viewer.addEventListener(
      "remove",
      cleanup
    );

  }


  // ============================================================
  // INLINE EMBED
  // ============================================================

  function renderEmbedInline(
    el
  ) {

    if (!el) {
      return;
    }


    const iframe =
      el.querySelector &&
      el.querySelector(
        "iframe"
      );


    const title =
      el.querySelector &&
      (
        el.querySelector("h4")
          ? el.querySelector("h4").textContent
          : "Embedded Model"
      );


    const caption =
      el.querySelector &&
      (
        el.querySelector("p")
          ? el.querySelector("p").textContent
          : ""
      );


    if (!iframe) {
      return;
    }


    const viewerArea =
      document.getElementById(
        "viewer"
      );


    if (!viewerArea) {
      return;
    }


    const canvasEl =
      viewerArea.querySelector(
        "#renderCanvas"
      );


    if (canvasEl) {

      canvasEl.style.visibility =
        "hidden";

    }


    let container =
      viewerArea.querySelector(
        "#embedInlineContainer"
      );


    if (container) {
      container.remove();
    }


    container =
      document.createElement(
        "div"
      );


    container.id =
      "embedInlineContainer";


    container.className =
      "embed-inline";


    const header =
      document.createElement(
        "div"
      );


    header.className =
      "embed-inline-header";


    const h =
      document.createElement(
        "h4"
      );


    h.textContent =
      title ||
      "Embedded Model";


    const actions =
      document.createElement(
        "div"
      );


    actions.className =
      "embed-inline-actions";


    const viewBtn =
      document.createElement(
        "button"
      );


    viewBtn.className =
      "viewer-inline-open";


    viewBtn.textContent =
      "Open";


    const editBtn =
      document.createElement(
        "button"
      );


    editBtn.className =
      "viewer-inline-edit";


    editBtn.textContent =
      "Edit";


    const delBtn =
      document.createElement(
        "button"
      );


    delBtn.className =
      "viewer-inline-delete";


    delBtn.textContent =
      "Delete";


    actions.appendChild(
      viewBtn
    );


    actions.appendChild(
      editBtn
    );


    actions.appendChild(
      delBtn
    );


    header.appendChild(
      h
    );


    header.appendChild(
      actions
    );


    const wrap =
      document.createElement(
        "div"
      );


    wrap.className =
      "embed-inline-wrap";


    const iframeClone =
      iframe.cloneNode(
        true
      );


    iframeClone.removeAttribute(
      "width"
    );


    iframeClone.removeAttribute(
      "height"
    );


    iframeClone.style.width =
      "100%";


    iframeClone.style.height =
      "100%";


    iframeClone.style.border =
      "0";


    wrap.appendChild(
      iframeClone
    );


    const cap =
      document.createElement(
        "div"
      );


    cap.className =
      "embed-inline-caption";


    cap.textContent =
      caption || "";


    container.appendChild(
      header
    );


    container.appendChild(
      wrap
    );


    if (caption) {

      container.appendChild(
        cap
      );

    }


    viewerArea.appendChild(
      container
    );


    viewBtn.addEventListener(
      "click",
      () => {

        openEmbedViewerFromElement(
          el
        );

      }
    );


    editBtn.addEventListener(
      "click",
      () => {

        const metaEl =
          drawerBody &&
          drawerBody.querySelector &&
          drawerBody.querySelector(
            ".embed-metadata"
          );


        let list =
          [];


        try {

          list =
            metaEl
              ? JSON.parse(
                  metaEl.textContent ||
                  metaEl.getAttribute(
                    "data-embeds"
                  ) ||
                  "[]"
                )
              : [];

        } catch (er) {

          list =
            [];

        }


        const obj =
          list.find(
            x =>
              x &&
              x.id ===
              el.dataset.embedId
          );


        if (obj) {

          embedCtrl.openEmbedModal(
            obj,
            el
          );

        }

      }
    );


    delBtn.addEventListener(
      "click",
      () => {

        const sidebarItem =
          embedsPanel &&
          embedsPanel.querySelector &&
          embedsPanel.querySelector(
            `.embedded-item[data-embed-id="${el.dataset.embedId}"]`
          );


        if (sidebarItem) {
          sidebarItem.remove();
        }


        try {

          container.remove();

        } catch (e) {}


        if (canvasEl) {

          canvasEl.style.visibility =
            "visible";

        }


        try {

          const metaEl =
            drawerBody &&
            drawerBody.querySelector &&
            drawerBody.querySelector(
              ".embed-metadata"
            );


          let list =
            [];


          if (metaEl) {

            try {

              list =
                JSON.parse(
                  metaEl.textContent ||
                  metaEl.getAttribute(
                    "data-embeds"
                  ) ||
                  "[]"
                );

            } catch (e) {

              list =
                [];

            }


            list =
              list.filter(
                x =>
                  x &&
                  x.id !==
                  el.dataset.embedId
              );


            try {

              metaEl.textContent =
                JSON.stringify(
                  list
                );

            } catch (e) {

              metaEl.setAttribute(
                "data-embeds",
                JSON.stringify(
                  list
                )
              );

            }

          }

        } catch (e) {

          console.warn(
            "Failed to remove embed metadata",
            e
          );

        }


        try {

          document.dispatchEvent(
            new CustomEvent(
              "embed:inserted",
              {
                detail: {
                  wasEdit: true
                }
              }
            )
          );

        } catch (e) {}

      }
    );

  }


  // ============================================================
  // FLOATING EMBED ACTIONS
  // ============================================================

  function createFloatingEmbedActions() {

    let floatEl =
      document.getElementById(
        "embedActionFloating"
      );


    if (floatEl) {
      return floatEl;
    }


    floatEl =
      document.createElement(
        "div"
      );


    floatEl.id =
      "embedActionFloating";


    floatEl.className =
      "embed-action-floating";


    floatEl.setAttribute(
      "role",
      "toolbar"
    );


    floatEl.setAttribute(
      "aria-hidden",
      "true"
    );


    floatEl.innerHTML = `
      <div class="eaf-inner">
        <button class="eaf-open">Open</button>
        <button class="eaf-edit">Edit</button>
        <button class="eaf-delete">Delete</button>
      </div>
    `;


    document.body.appendChild(
      floatEl
    );


    floatEl
      .querySelector(
        ".eaf-open"
      )
      .addEventListener(
        "click",
        () => {

          const id =
            floatEl.dataset.embedId;


          const item =
            embedsPanel &&
            embedsPanel.querySelector &&
            embedsPanel.querySelector(
              `.embedded-item[data-embed-id="${id}"]`
            );


          if (item) {

            openEmbedViewerFromElement(
              item
            );

          }


          hideFloatingEmbedActions();

        }
      );


    floatEl
      .querySelector(
        ".eaf-edit"
      )
      .addEventListener(
        "click",
        () => {

          const id =
            floatEl.dataset.embedId;


          const metaEl =
            drawerBody &&
            drawerBody.querySelector &&
            drawerBody.querySelector(
              ".embed-metadata"
            );


          let list =
            [];


          try {

            list =
              metaEl
                ? JSON.parse(
                    metaEl.textContent ||
                    metaEl.getAttribute(
                      "data-embeds"
                    ) ||
                    "[]"
                  )
                : [];

          } catch (er) {

            list =
              [];

          }


          const obj =
            list.find(
              x =>
                x &&
                x.id === id
            );


          const item =
            embedsPanel &&
            embedsPanel.querySelector &&
            embedsPanel.querySelector(
              `.embedded-item[data-embed-id="${id}"]`
            );


          if (obj) {

            embedCtrl.openEmbedModal(
              obj,
              item
            );

          }


          hideFloatingEmbedActions();

        }
      );


    floatEl
      .querySelector(
        ".eaf-delete"
      )
      .addEventListener(
        "click",
        () => {

          const id =
            floatEl.dataset.embedId;


          const item =
            embedsPanel &&
            embedsPanel.querySelector &&
            embedsPanel.querySelector(
              `.embedded-item[data-embed-id="${id}"]`
            );


          if (item) {
            item.remove();
          }


          try {

            const metaEl =
              drawerBody &&
              drawerBody.querySelector &&
              drawerBody.querySelector(
                ".embed-metadata"
              );


            let list =
              [];


            if (metaEl) {

              try {

                list =
                  JSON.parse(
                    metaEl.textContent ||
                    metaEl.getAttribute(
                      "data-embeds"
                    ) ||
                    "[]"
                  );

              } catch (e) {

                list =
                  [];

              }


              list =
                list.filter(
                  x =>
                    x &&
                    x.id !== id
                );


              try {

                metaEl.textContent =
                  JSON.stringify(
                    list
                  );

              } catch (e) {

                metaEl.setAttribute(
                  "data-embeds",
                  JSON.stringify(
                    list
                  )
                );

              }

            }

          } catch (e) {

            console.warn(
              "Failed to remove embed metadata",
              e
            );

          }


          hideFloatingEmbedActions();


          try {

            document.dispatchEvent(
              new CustomEvent(
                "embed:inserted",
                {
                  detail: {
                    wasEdit: true
                  }
                }
              )
            );

          } catch (e) {}

        }
      );


    return floatEl;

  }


  let lastFloatingItem =
    null;


  function showFloatingEmbedActions(
    item
  ) {

    if (!item) {
      return;
    }


    const floatEl =
      createFloatingEmbedActions();


    floatEl.dataset.embedId =
      item.dataset.embedId ||
      "";


    if (
      lastFloatingItem &&
      lastFloatingItem !== item
    ) {

      lastFloatingItem.classList.remove(
        "with-floating"
      );

    }


    item.classList.add(
      "with-floating"
    );


    lastFloatingItem =
      item;


    floatEl.setAttribute(
      "aria-hidden",
      "false"
    );


    floatEl.classList.add(
      "visible"
    );


    try {

      floatEl
        .querySelector(
          "button"
        )
        .focus();

    } catch (e) {}

  }


  function hideFloatingEmbedActions() {

    const floatEl =
      document.getElementById(
        "embedActionFloating"
      );


    if (!floatEl) {
      return;
    }


    floatEl.setAttribute(
      "aria-hidden",
      "true"
    );


    floatEl.classList.remove(
      "visible"
    );


    if (lastFloatingItem) {

      lastFloatingItem.classList.remove(
        "with-floating"
      );


      lastFloatingItem =
        null;

    }

  }


  // ============================================================
  // SEE MODEL BUTTON
  // ============================================================

  if (seeModelBtn) {

    const syncSeeModelButtonState =
      () => {

        const hasEmbeds =
          !!(
            embedsPanel &&
            embedsPanel.querySelector(
              ".embedded-item"
            )
          );


        seeModelBtn.disabled =
          !hasEmbeds;


        seeModelBtn.title =
          hasEmbeds
            ? "Choose an embedded model"
            : "No embedded models available";

      };


    seeModelBtn.addEventListener(
      "click",
      () => {

        openEmbedChooser();

      }
    );


    if (embedsPanel) {

      const obs =
        new MutationObserver(
          syncSeeModelButtonState
        );


      obs.observe(
        embedsPanel,
        {
          childList: true,
          subtree: false
        }
      );


      syncSeeModelButtonState();

    }

  }


  // ============================================================
  // EMBEDS PANEL EVENTS
  // ============================================================

  if (embedsPanel) {

    embedsPanel.addEventListener(
      "click",
      e => {

        const seeBtn =
          e.target.closest &&
          e.target.closest(
            ".see-model-btn"
          );


        const editBtn =
          e.target.closest &&
          e.target.closest(
            ".edit-embed-btn"
          );


        const delBtn =
          e.target.closest &&
          e.target.closest(
            ".delete-embed-btn"
          );


        if (
          seeBtn ||
          editBtn ||
          delBtn
        ) {

          const item =
            (
              seeBtn ||
              editBtn ||
              delBtn
            ).closest(
              ".embedded-item"
            );


          if (!item) {
            return;
          }


          e.preventDefault();

          e.stopPropagation();


          showFloatingEmbedActions(
            item
          );


          return;

        }


        const tile =
          e.target.closest &&
          e.target.closest(
            ".embedded-item"
          );


        if (
          tile &&
          !e.target.closest(
            ".embed-actions"
          ) &&
          !e.target.closest(
            "button"
          )
        ) {

          showFloatingEmbedActions(
            tile
          );


          return;

        }

      }
    );


    embedsPanel.addEventListener(
      "keydown",
      e => {

        if (
          (
            e.key === "Enter" ||
            e.key === " "
          ) &&
          document.activeElement &&
          document.activeElement.classList &&
          document.activeElement.classList.contains(
            "embedded-item"
          )
        ) {

          e.preventDefault();


          openEmbedViewerFromElement(
            document.activeElement
          );

        }

      }
    );


    const obs =
      new MutationObserver(
        () => {

          if (seeModelBtn) {

            seeModelBtn.disabled =
              !(
                embedsPanel &&
                embedsPanel.querySelector(
                  ".embedded-item"
                )
              );

          }

        }
      );


    obs.observe(
      embedsPanel,
      {
        childList: true,
        subtree: false
      }
    );


    if (seeModelBtn) {

      seeModelBtn.disabled =
        !(
          embedsPanel &&
          embedsPanel.querySelector(
            ".embedded-item"
          )
        );

    }

  }


  // ============================================================
  // NAVIGATOR ZOOM BUTTON
  // ============================================================

  if (navigatorZoomBtn) {

    navigatorZoomBtn.addEventListener(
      "click",
      () => {

        isNavigatorExpanded =
          !isNavigatorExpanded;


        updateNavigatorState();

      }
    );

  }


  if (navigatorResetBtn) {

    navigatorResetBtn.addEventListener(
      "click",
      () => {

        resetCameraToDefault();

      }
    );

  }


  // ============================================================
  // OPEN NOTES
  // ============================================================

  const handleOpenNotes =
    async (
      buttonEl,
      mode = "combined"
    ) => {

      if (!buttonEl) {
        return;
      }


      if (
        buttonEl.dataset.loading ===
        "true"
      ) {

        return;

      }


      buttonEl.dataset.loading =
        "true";


      buttonEl.classList.add(
        "loading"
      );


      setPlaceholderLoading(
        true
      );


      try {

        buttonEl.setAttribute(
          "aria-busy",
          "true"
        );

      } catch (e) {}


      try {

        buttonEl.disabled =
          true;

      } catch (e) {}


      try {

        const id =
          buttonEl.dataset.id;


        const partId =
          buttonEl.dataset.partId;


        const foundOrg =
          SYSTEMS
            .flatMap(
              s =>
                s.organs
            )
            .find(
              o =>
                o.id === id
            );


        if (!foundOrg) {
          return;
        }


        if (partId) {

          const foundPart =
            (
              foundOrg.parts ||
              []
            ).find(
              p =>
                p.id === partId
            );


          if (foundPart) {

            await openDrawer(
              Object.assign(
                {
                  name:
                    `${foundOrg.name} — ${foundPart.name}`,

                  _id:
                    foundOrg.id
                },
                {
                  notes:
                    foundPart.notes
                }
              ),
              foundPart,
              mode
            );


            return;

          }

        }


        await openDrawer(
          Object.assign(
            {
              _id:
                foundOrg.id
            },
            foundOrg
          ),
          null,
          mode
        );

      } finally {

        setPlaceholderLoading(
          false
        );


        delete buttonEl.dataset.loading;


        buttonEl.classList.remove(
          "loading"
        );


        try {

          buttonEl.removeAttribute(
            "aria-busy"
          );

        } catch (e) {}


        try {

          buttonEl.disabled =
            false;

        } catch (e) {}

      }

    };


  // ============================================================
  // NOTES BUTTONS
  // ============================================================

  showNotesBtn.addEventListener(
    "click",
    async () => {

      await handleOpenNotes(
        showNotesBtn,
        "combined"
      );

    }
  );


  if (userNotesBtn) {

    userNotesBtn.addEventListener(
      "click",
      async () => {

        await handleOpenNotes(
          userNotesBtn,
          "sticker"
        );

      }
    );

  }


  // ============================================================
  // NOTE MODAL
  // ============================================================

  if (closeNoteBtn) {

    closeNoteBtn.addEventListener(
      "click",
      closeModal
    );

  }


  if (noteModal) {

    noteModal.addEventListener(
      "click",
      e => {

        if (
          e.target ===
          noteModal
        ) {

          closeModal();

        }

      }
    );

  }


  // ============================================================
  // DATABASE SYNC
  // ============================================================

  console.log(
    "[app] using remote DB API endpoints"
  );


  try {

    syncLocalToServer()
      .then(
        r => {

          if (
            r &&
            r.ok &&
            r.migrated
          ) {

            console.log(
              "[db] migrated local notes to server:",
              r.migrated
            );

          } else if (
            r &&
            r.ok
          ) {

            console.log(
              "[db] no local notes to migrate"
            );

          } else {

            console.log(
              "[db] migration skipped:",
              r &&
              r.reason
            );

          }

        }
      )
      .catch(
        e =>
          console.warn(
            "migration failed",
            e
          )
      );

  } catch (e) {}


  if (syncNotesBtn) {

    syncNotesBtn.addEventListener(
      "click",
      async () => {

        try {

          const r =
            await syncLocalToServer();


          if (
            r &&
            r.ok
          ) {

            alert(
              `Synced ${
                r.migrated || 0
              } notes to server`
            );

          } else {

            alert(
              "Sync skipped: " +
              (
                r &&
                r.reason
              )
            );

          }

        } catch (e) {

          alert(
            "Sync failed: " +
            e.message
          );

        }

      }
    );

  }


  // ============================================================
  // EDIT NOTE
  // ============================================================

  if (editNoteBtn) {

    editNoteBtn.addEventListener(
      "click",
      () => {

        setStickerEditing(
          modalBody,
          true
        );


        const sticker =
          modalBody &&
          modalBody.querySelector &&
          modalBody.querySelector(
            '.user-sticker-note[data-role="sticker-note"]'
          );


        if (sticker) {
          sticker.focus();
        }


        editNoteBtn.hidden =
          true;


        if (saveNoteBtn) {

          saveNoteBtn.hidden =
            false;

        }

      }
    );

  }


  // ============================================================
  // SAVE NOTE
  // ============================================================

  if (saveNoteBtn) {

    saveNoteBtn.addEventListener(
      "click",
      () => {

        const organId =
          showNotesBtn.dataset.id;


        const partId =
          showNotesBtn.dataset.partId ||
          null;


        const subject =
          showNotesBtn.dataset.subject ||
          selectedSubject;


        const stickerContent =
          extractStickerNoteHtml(
            modalBody.innerHTML
          );


        const embeds =
          readEmbedsFromDrawer();


        upsertNoteRemote(
          organId,
          partId,
          subject,
          stickerContent,
          embeds
        )
          .then(
            () =>
              console.log(
                "[db] saved sticker note"
              )
          )
          .catch(
            e =>
              console.warn(
                "save failed",
                e
              )
          );


        setStickerEditing(
          modalBody,
          false
        );


        saveNoteBtn.hidden =
          true;


        if (editNoteBtn) {

          editNoteBtn.hidden =
            false;

        }

      }
    );

  }


  // ============================================================
  // DRAWER CLOSE
  // ============================================================

  if (drawerClose) {

    drawerClose.addEventListener(
      "click",
      closeDrawer
    );

  }


  // ============================================================
  // DRAWER EDIT
  // ============================================================

  if (drawerEdit) {

    drawerEdit.addEventListener(
      "click",
      () => {

        setDrawerEditing(
          true
        );


        drawerBody.focus();

      }
    );

  }


  // ============================================================
  // DRAWER BODY
  // ============================================================

  if (drawerBody) {

    drawerBody.addEventListener(
      "click",
      event => {

        const removeBtn =
          event.target.closest(
            ".media-remove-btn"
          );


        if (
          !removeBtn ||
          !drawerBody.isContentEditable
        ) {

          return;

        }


        const mediaItem =
          removeBtn.closest(
            ".note-media-item"
          );


        if (mediaItem) {
          mediaItem.remove();
        }


        const iframe =
          event.target.closest(
            "iframe"
          );


        if (
          iframe &&
          drawerBody.isContentEditable
        ) {

          event.preventDefault();


          const figure =
            iframe.closest(
              "figure"
            );


          embedCtrl.openEmbedModal(
            figure
              ? figure.outerHTML
              : iframe.outerHTML,

            figure
              ? figure
              : iframe
          );

        }

      }
    );

  }


  // ============================================================
  // DRAWER SAVE
  // ============================================================

  if (drawerSave) {

    drawerSave.addEventListener(
      "click",
      () => {

        const organId =
          showNotesBtn.dataset.id;


        const partId =
          showNotesBtn.dataset.partId ||
          null;


        const subject =
          showNotesBtn.dataset.subject ||
          selectedSubject;


        const stickerContent =
          extractStickerNoteHtml(
            drawerBody.innerHTML
          );


        const embeds =
          readEmbedsFromDrawer();


        ensureDrawerEmbedMetadata(
          embeds
        );


        upsertNoteRemote(
          organId,
          partId,
          subject,
          stickerContent,
          embeds
        )
          .then(
            () =>
              console.log(
                "[db] saved sticker note"
              )
          )
          .catch(
            e =>
              console.warn(
                "save failed",
                e
              )
          );


        setDrawerEditing(
          false
        );

      }
    );

  }


  // ============================================================
  // DRAWER PIN
  // ============================================================

  if (drawerPin) {

    drawerPin.addEventListener(
      "click",
      () => {

        drawerPin.classList.toggle(
          "pinned"
        );

      }
    );

  }


  // ============================================================
  // DRAWER MEDIA UPLOAD
  // ============================================================

  if (
    drawerUploadMedia &&
    drawerMediaInput
  ) {

    drawerUploadMedia.addEventListener(
      "click",
      () => {

        if (
          drawerBody &&
          drawerBody.isContentEditable
        ) {

          drawerMediaInput.click();

        } else {

          alert(
            "Open the note in edit mode before uploading media."
          );

        }

      }
    );


    drawerMediaInput.addEventListener(
      "change",
      async event => {

        const files =
          Array.from(
            event.target.files ||
            []
          );


        await mediaCtrl.insertUploadedMediaFiles(
          files
        );


        event.target.value =
          "";

      }
    );

  }


  // ============================================================
  // DRAWER ADD EMBED
  // ============================================================

  if (drawerAddEmbed) {

    drawerAddEmbed.addEventListener(
      "click",
      () => {

        if (
          drawerBody &&
          !drawerBody.isContentEditable
        ) {

          setDrawerEditing(
            true
          );


          setTimeout(
            () => {

              if (drawerBody) {
                drawerBody.focus();
              }

            },
            120
          );

        }


        const sel =
          document.getSelection &&
          document.getSelection();


        let node =
          sel &&
          sel.anchorNode
            ? sel.anchorNode
            : null;


        if (
          node &&
          node.nodeType !==
            Node.ELEMENT_NODE
        ) {

          node =
            node.parentElement;

        }


        const iframe =
          node &&
          node.closest
            ? node.closest(
                "iframe"
              )
            : null;


        const figure =
          iframe
            ? (
              iframe.closest
                ? iframe.closest(
                    "figure"
                  )
                : null
            )
            : null;


        if (iframe) {

          embedCtrl.openEmbedModal(
            figure
              ? figure.outerHTML
              : iframe.outerHTML,

            figure
              ? figure
              : iframe
          );


          return;

        }


        embedCtrl.openEmbedModal(
          "",
          null
        );

      }
    );

  }


  // ============================================================
  // EMBED INSERTED
  // ============================================================

  document.addEventListener(
    "embed:inserted",
    async e => {

      try {

        const organId =
          (
            showNotesBtn &&
            showNotesBtn.dataset.id
          ) ||
          null;


        const partId =
          (
            showNotesBtn &&
            showNotesBtn.dataset.partId
          ) ||
          null;


        const subject =
          (
            showNotesBtn &&
            showNotesBtn.dataset.subject
          ) ||
          selectedSubject;


        if (!organId) {
          return;
        }


        const content =
          drawerBody
            ? drawerBody.innerHTML
            : "";


        const embeds =
          readEmbedsFromDrawer();


        ensureDrawerEmbedMetadata(
          embeds
        );


        const res =
          await upsertNoteRemote(
            organId,
            partId,
            subject,
            content,
            embeds
          );


        if (
          res &&
          res.savedTo ===
            "server"
        ) {

          showToast(
            "Saved to SQLite"
          );

        } else {

          showToast(
            "Saved locally (offline)"
          );

        }


        console.log(
          "[db] embed persisted for",
          organId,
          partId,
          subject,
          res &&
          res.savedTo
        );

      } catch (err) {

        console.warn(
          "Failed to persist embed immediately",
          err
        );

      }

    }
  );


  // ============================================================
  // TOAST
  // ============================================================

  function showToast(
    message = "",
    timeout = 2200
  ) {

    const toast =
      document.getElementById(
        "toast"
      );


    if (!toast) {
      return;
    }


    toast.textContent =
      message;


    toast.classList.remove(
      "hidden"
    );


    clearTimeout(
      toast._hideTimer
    );


    toast._hideTimer =
      setTimeout(
        () => {

          toast.classList.add(
            "hidden"
          );

        },
        timeout
      );

  }


  // ============================================================
  // DRAWER MAXIMIZE / MINIMIZE
  // ============================================================

  if (drawerMax) {

    drawerMax.addEventListener(
      "click",
      () => {

        setDrawerMaximized(
          true
        );

      }
    );

  }


  if (drawerMin) {

    drawerMin.addEventListener(
      "click",
      () => {

        setDrawerMaximized(
          false
        );

      }
    );

  }


  // ============================================================
  // INITIAL RENDER
  // ============================================================

  renderSubjects();

  renderSystems();


  const firstOrg =
    SYSTEMS.length > 0 &&
    SYSTEMS[0].organs &&
    SYSTEMS[0].organs[0];


  if (firstOrg) {

    selectOrgan(
      firstOrg
    );

  }


  // ============================================================
  // THEME
  // ============================================================

  const themeToggle =
    document.getElementById(
      "themeToggle"
    );


  function applyTheme(t) {

    document.documentElement.setAttribute(
      "data-theme",
      t
    );


    if (themeToggle) {

      themeToggle.textContent =
        t === "dark"
          ? "🌙"
          : "☀️";

    }

  }


  const stored =
    localStorage.getItem(
      "theme"
    );


  if (
    stored === "light" ||
    stored === "dark"
  ) {

    applyTheme(
      stored
    );

  } else {

    const prefersLight =
      window.matchMedia &&
      window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;


    applyTheme(
      prefersLight
        ? "light"
        : "dark"
    );

  }


  if (themeToggle) {

    themeToggle.addEventListener(
      "click",
      () => {

        const current =
          document.documentElement.getAttribute(
            "data-theme"
          ) ||
          "dark";


        const next =
          current === "dark"
            ? "light"
            : "dark";


        applyTheme(
          next
        );


        localStorage.setItem(
          "theme",
          next
        );

      }
    );

  }


  // ============================================================
  // SIDEBAR
  // ============================================================

  const sidebarToggle =
    document.getElementById(
      "sidebarToggle"
    );


  function setSidebarCollapsed(
    collapsed
  ) {

    document.documentElement.classList.toggle(
      "sidebar-collapsed",
      collapsed
    );


    localStorage.setItem(
      "sidebarCollapsed",
      collapsed
        ? "1"
        : "0"
    );

  }


  const storedSidebar =
    localStorage.getItem(
      "sidebarCollapsed"
    );


  if (
    storedSidebar === "1"
  ) {

    setSidebarCollapsed(
      true
    );

  }


  if (sidebarToggle) {

    sidebarToggle.addEventListener(
      "click",
      () => {

        const now =
          document.documentElement.classList.toggle(
            "sidebar-collapsed"
          );


        localStorage.setItem(
          "sidebarCollapsed",
          now
            ? "1"
            : "0"
        );

      }
    );

  }


  // ============================================================
  // RESIZE
  // ============================================================

  const resizeObserver =
    new ResizeObserver(
      () =>
        syncCanvasResolution()
    );


  resizeObserver.observe(
    canvas
  );


  window.addEventListener(
    "resize",
    syncCanvasResolution
  );


  // ============================================================
  // BABYLON RENDER LOOP
  // ============================================================

  engine.runRenderLoop(
    () => {

      if (scene) {

        scene.render();

      }

    }
  );

});

