import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as RKE,
  type MouseEvent as RME,
  type PointerEvent as RPE,
} from "react";
import fritillariaGreenPoster from "@/assets/project-fliers/fritillaria-thunbergii-green.png";
import fritillariaPinkPoster from "@/assets/project-fliers/fritillaria-thunbergii-pink.png";
import fritillariaPoster9 from "@/assets/project-fliers/fritillaria-thunbergii-9.png";
import fritillariaPoster15 from "@/assets/project-fliers/fritillaria-thunbergii-15.png";
import fritillariaPoster21 from "@/assets/project-fliers/fritillaria-thunbergii-21.png";
import pfConf2026Poster2 from "@/assets/project-fliers/pf-conf-2026-2.png";
import pfConf2026Poster4 from "@/assets/project-fliers/pf-conf-2026-4.png";
import pfConf2026Poster5 from "@/assets/project-fliers/pf-conf-2026-5.png";

export const Route = createFileRoute("/fliers")({
  head: () => ({
    meta: [
      { title: "Fliers - Isaac Sohn" },
      { name: "description", content: "A moving poster wall of fliers and printed ephemera." },
      { property: "og:title", content: "Fliers - Isaac Sohn" },
      {
        property: "og:description",
        content: "A moving poster wall of fliers and printed ephemera.",
      },
    ],
  }),
  component: Fliers,
});

const COLUMNS = 16;
const ROWS = 5;
const FLIER_MIX = [3, 0, 6, 1, 7, 2, 5, 4];
const POSTER_RATIO = 24 / 18;
const DESKTOP_CARD_RATIO = 0.18;
const MOBILE_CARD_RATIO = 0.4;
const DESKTOP_GUTTER_RATIO = 0.068;
const MOBILE_GUTTER_RATIO = 0.1;
const DRAG_RESPONSE = 0.82;
const DRAG_VELOCITY_TRANSFER = 0.34;
const MAX_VELOCITY = 54;
const VELOCITY_DECAY = 0.952;
const CLICK_SUPPRESS_DISTANCE = 8;
const CURSOR_TILT_LERP = 0.1;
const MOUSE_DRAG_POINTER_ID = -1;
const LIGHTBOX_OPEN_MS = 430;
const LIGHTBOX_CLOSE_MS = 560;

type Flier = {
  src: string;
  title: string;
  slug?: string;
};

const fliers = [
  { src: pfConf2026Poster2, title: "PassionFruits Conference 2026 Poster 2" },
  { src: pfConf2026Poster4, title: "PassionFruits Conference 2026 Poster 4" },
  { src: pfConf2026Poster5, title: "PassionFruits Conference 2026 Poster 5" },
  { src: fritillariaGreenPoster, title: "Fritillaria Thunbergii Green Poster" },
  { src: fritillariaPinkPoster, title: "Fritillaria Thunbergii Pink Poster" },
  { src: fritillariaPoster9, title: "Fritillaria Thunbergii Banana Poster" },
  { src: fritillariaPoster15, title: "Fritillaria Thunbergii Apple Poster" },
  { src: fritillariaPoster21, title: "Fritillaria Thunbergii Durian Poster" },
] satisfies Flier[];

type FliersMetrics = {
  posterWidth: number;
  posterHeight: number;
  gutter: number;
  pitchX: number;
  pitchY: number;
  tileWidth: number;
  tileHeight: number;
};

const wrap = (value: number, size: number) => ((value % size) + size) % size;
const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value));
const createStripTransform = (point: { x: number; y: number }, metrics: FliersMetrics) =>
  `translate3d(${-metrics.tileWidth + wrap(point.x, metrics.tileWidth)}px, ${-metrics.tileHeight + wrap(point.y, metrics.tileHeight)}px, 0)`;
const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};
const randomRange = (seed: number, min: number, max: number) =>
  min + (max - min) * seededRandom(seed);
const normalizeWheel = (event: WheelEvent) => {
  const unit = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
  return { x: event.deltaX * unit, y: event.deltaY * unit };
};
const createMetrics = (width: number): FliersMetrics => {
  const isDesktop = width >= 1024;
  const posterWidth = Math.round(width * (isDesktop ? DESKTOP_CARD_RATIO : MOBILE_CARD_RATIO));
  const posterHeight = Math.round(posterWidth * POSTER_RATIO);
  const gutter = Math.round(width * (isDesktop ? DESKTOP_GUTTER_RATIO : MOBILE_GUTTER_RATIO));
  const pitchX = posterWidth + gutter;
  const pitchY = posterHeight + gutter;

  return {
    posterWidth,
    posterHeight,
    gutter,
    pitchX,
    pitchY,
    tileWidth: COLUMNS * pitchX,
    tileHeight: ROWS * pitchY,
  };
};

type PosterStyle = CSSProperties & {
  "--poster-rotate": string;
  "--poster-z": number;
};

type CursorTiltState = {
  x: number;
  y: number;
};

type LightboxPhase = "opening" | "open" | "closing";

type LightboxStyle = CSSProperties & {
  "--flier-start-x": string;
  "--flier-start-y": string;
  "--flier-start-scale": string;
  "--flier-target-w": string;
  "--flier-target-h": string;
};

type ActiveLightbox = {
  flier: Flier;
  phase: LightboxPhase;
  style: LightboxStyle;
};

type PendingPosterClick = {
  flier: Flier;
  rect: DOMRect;
};

const createLightboxStyle = (rect: DOMRect): LightboxStyle => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const maxTargetHeight = Math.min(viewportHeight * 0.88, 980);
  const targetWidth = Math.max(
    1,
    Math.min(viewportWidth * 0.78, 760, maxTargetHeight / POSTER_RATIO),
  );
  const targetHeight = targetWidth * POSTER_RATIO;
  const startX = rect.left + rect.width / 2 - viewportWidth / 2;
  const startY = rect.top + rect.height / 2 - viewportHeight / 2;
  const startScale = rect.width / targetWidth;

  return {
    "--flier-start-x": `${startX}px`,
    "--flier-start-y": `${startY}px`,
    "--flier-start-scale": startScale.toFixed(4),
    "--flier-target-w": `${targetWidth}px`,
    "--flier-target-h": `${targetHeight}px`,
  };
};

function Fliers() {
  const [metrics, setMetrics] = useState(() => createMetrics(1280));
  const [tileGrid, setTileGrid] = useState({ cols: 4, rows: 4 });
  const [activeLightbox, setActiveLightbox] = useState<ActiveLightbox | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef(metrics);
  const lightboxActiveRef = useRef(false);
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const pendingPosterClick = useRef<PendingPosterClick | null>(null);
  const offset = useRef({ x: 64, y: 64 });
  const velocity = useRef({ x: -0.12, y: 0.06 });
  const wheel = useRef({ x: 0, y: 0 });
  const initializedLayout = useRef(false);
  const suppressClickUntil = useRef(0);
  const cursorTiltFrame = useRef(0);
  const cursorTiltPointer = useRef({ x: 0, y: 0, active: false });
  const cursorTiltState = useRef(new Map<HTMLElement, CursorTiltState>());
  const drag = useRef({
    active: false,
    pointerId: null as number | null,
    x: 0,
    y: 0,
    ox: 0,
    oy: 0,
    lx: 0,
    ly: 0,
    lt: 0,
    distance: 0,
  });

  metricsRef.current = metrics;

  const tiles = useMemo(
    () =>
      Array.from({ length: tileGrid.cols * tileGrid.rows }, (_, index) => ({
        x: index % tileGrid.cols,
        y: Math.floor(index / tileGrid.cols),
      })),
    [tileGrid],
  );

  const posterLayout = useMemo(
    () =>
      Array.from({ length: ROWS * COLUMNS }, (_, index) => {
        const row = Math.floor(index / COLUMNS);
        const col = index % COLUMNS;
        const seed = index + 1;
        const rowOffset = row % 2 === 0 ? 0 : -metrics.posterWidth * 0.18;
        const xJitter = randomRange(seed * 17 + 3, -metrics.gutter * 0.14, metrics.gutter * 0.14);
        const yJitter = randomRange(seed * 23 + 7, -metrics.gutter * 0.1, metrics.gutter * 0.1);

        return {
          col,
          row,
          seed,
          x: col * metrics.pitchX + rowOffset + xJitter,
          y: row * metrics.pitchY + yJitter,
          r: randomRange(seed * 29 + 11, -1.8, 1.8),
          z: 1 + Math.floor(seededRandom(seed * 31 + 13) * 3),
        };
      }),
    [metrics],
  );

  useEffect(() => {
    lightboxActiveRef.current = Boolean(activeLightbox);
  }, [activeLightbox]);

  const clearLightboxTimers = useCallback(() => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeLightbox = useCallback(() => {
    clearLightboxTimers();
    setActiveLightbox((current) =>
      current && current.phase !== "closing" ? { ...current, phase: "closing" } : current,
    );
    closeTimerRef.current = window.setTimeout(() => {
      setActiveLightbox(null);
      closeTimerRef.current = null;
    }, LIGHTBOX_CLOSE_MS);
  }, [clearLightboxTimers]);

  const openLightbox = useCallback(
    (flier: Flier, rect: DOMRect) => {
      clearLightboxTimers();
      setActiveLightbox({
        flier,
        phase: "opening",
        style: createLightboxStyle(rect),
      });
      openTimerRef.current = window.setTimeout(() => {
        setActiveLightbox((current) =>
          current && current.flier === flier ? { ...current, phase: "open" } : current,
        );
        openTimerRef.current = null;
      }, LIGHTBOX_OPEN_MS);
    },
    [clearLightboxTimers],
  );

  useEffect(() => () => clearLightboxTimers(), [clearLightboxTimers]);

  const applyTransform = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    strip.style.transform = createStripTransform(offset.current, metricsRef.current);
  }, []);

  const addVelocity = useCallback((x: number, y: number) => {
    velocity.current.x = clamp(velocity.current.x + x, MAX_VELOCITY);
    velocity.current.y = clamp(velocity.current.y + y, MAX_VELOCITY);
  }, []);

  const resetCursorTilt = useCallback(() => {
    if (cursorTiltFrame.current) {
      window.cancelAnimationFrame(cursorTiltFrame.current);
      cursorTiltFrame.current = 0;
    }

    cursorTiltState.current.forEach((_, poster) => {
      poster.style.setProperty("--tilt-x", "0deg");
      poster.style.setProperty("--tilt-y", "0deg");
      poster.style.setProperty("--shine-x", "50%");
      poster.style.setProperty("--shine-y", "50%");
    });
    cursorTiltState.current.clear();
    cursorTiltPointer.current.active = false;
  }, []);

  const applyCursorTilt = useCallback(() => {
    cursorTiltFrame.current = 0;
    const canvas = canvasRef.current;
    if (!canvas || drag.current.active || !cursorTiltPointer.current.active) {
      return;
    }

    let needsNextFrame = false;
    const visiblePosters = new Set<HTMLElement>();
    const buffer = metricsRef.current.posterWidth * 0.35;

    canvas.querySelectorAll<HTMLElement>(".fliers-poster").forEach((poster) => {
      const rect = poster.getBoundingClientRect();
      const inViewport =
        rect.right > -buffer &&
        rect.bottom > -buffer &&
        rect.left < window.innerWidth + buffer &&
        rect.top < window.innerHeight + buffer;

      if (!inViewport) return;

      visiblePosters.add(poster);
      const targetX = cursorTiltPointer.current.x - rect.left;
      const targetY = cursorTiltPointer.current.y - rect.top;
      const state = cursorTiltState.current.get(poster) ?? {
        x: rect.width / 2,
        y: rect.height / 2,
      };
      state.x += (targetX - state.x) * CURSOR_TILT_LERP;
      state.y += (targetY - state.y) * CURSOR_TILT_LERP;
      cursorTiltState.current.set(poster, state);

      const xRatio = state.x / rect.width;
      const yRatio = state.y / rect.height;
      poster.style.setProperty("--tilt-x", `${((0.5 - yRatio) * 8).toFixed(2)}deg`);
      poster.style.setProperty("--tilt-y", `${((xRatio - 0.5) * 8).toFixed(2)}deg`);
      poster.style.setProperty("--shine-x", `${(xRatio * 100).toFixed(1)}%`);
      poster.style.setProperty("--shine-y", `${(yRatio * 100).toFixed(1)}%`);

      if (Math.abs(targetX - state.x) > 0.35 || Math.abs(targetY - state.y) > 0.35) {
        needsNextFrame = true;
      }
    });

    cursorTiltState.current.forEach((_, poster) => {
      if (visiblePosters.has(poster)) return;
      cursorTiltState.current.delete(poster);
      poster.style.setProperty("--tilt-x", "0deg");
      poster.style.setProperty("--tilt-y", "0deg");
      poster.style.setProperty("--shine-x", "50%");
      poster.style.setProperty("--shine-y", "50%");
    });

    if (needsNextFrame) {
      cursorTiltFrame.current = window.requestAnimationFrame(applyCursorTilt);
    }
  }, []);

  const queueCursorTilt = useCallback(
    (clientX: number, clientY: number) => {
      if (drag.current.active) return;

      cursorTiltPointer.current = { x: clientX, y: clientY, active: true };
      if (!cursorTiltFrame.current) {
        cursorTiltFrame.current = window.requestAnimationFrame(applyCursorTilt);
      }
    },
    [applyCursorTilt],
  );

  const moveDrag = useCallback(
    (clientX: number, clientY: number, timeStamp: number) => {
      if (!drag.current.active) return;

      const dx = clientX - drag.current.x;
      const dy = clientY - drag.current.y;

      offset.current = {
        x: drag.current.ox + dx * DRAG_RESPONSE,
        y: drag.current.oy + dy * DRAG_RESPONSE,
      };

      const dt = Math.max(8, timeStamp - drag.current.lt);
      const vx = ((clientX - drag.current.lx) / dt) * 16.667;
      const vy = ((clientY - drag.current.ly) / dt) * 16.667;
      velocity.current = {
        x: clamp(velocity.current.x * 0.18 + vx * DRAG_VELOCITY_TRANSFER, MAX_VELOCITY),
        y: clamp(velocity.current.y * 0.18 + vy * DRAG_VELOCITY_TRANSFER, MAX_VELOCITY),
      };
      drag.current.lx = clientX;
      drag.current.ly = clientY;
      drag.current.lt = timeStamp;
      drag.current.distance = Math.max(drag.current.distance, Math.hypot(dx, dy));
      applyTransform();
    },
    [applyTransform],
  );

  const endDrag = useCallback(
    (pointerId: number) => {
      if (drag.current.pointerId !== pointerId) return;

      const clickCandidate = pendingPosterClick.current;
      const shouldOpenPoster =
        Boolean(clickCandidate) &&
        drag.current.distance <= CLICK_SUPPRESS_DISTANCE &&
        !lightboxActiveRef.current;
      const { tileWidth, tileHeight } = metricsRef.current;
      drag.current.active = false;
      drag.current.pointerId = null;
      offset.current.x = wrap(offset.current.x, tileWidth);
      offset.current.y = wrap(offset.current.y, tileHeight);
      wheel.current = { x: 0, y: 0 };
      pendingPosterClick.current = null;

      if (drag.current.distance > CLICK_SUPPRESS_DISTANCE) {
        suppressClickUntil.current = performance.now() + 260;
      }

      const canvas = canvasRef.current;
      if (canvas) {
        delete canvas.dataset.dragging;
        if (pointerId !== MOUSE_DRAG_POINTER_ID && canvas.hasPointerCapture(pointerId)) {
          canvas.releasePointerCapture(pointerId);
        }
      }

      if (shouldOpenPoster && clickCandidate) {
        suppressClickUntil.current = performance.now() + 260;
        openLightbox(clickCandidate.flier, clickCandidate.rect);
      }
    },
    [openLightbox],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frame = 0;
    let lastTime = performance.now();
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const nextMetrics = createMetrics(width);
      metricsRef.current = nextMetrics;
      setMetrics(nextMetrics);

      if (!initializedLayout.current) {
        offset.current = {
          x: Math.max(48, nextMetrics.gutter * 0.72),
          y: Math.max(52, Math.min(height * 0.09, nextMetrics.gutter * 0.78)),
        };
        initializedLayout.current = true;
      }

      setTileGrid({
        cols: Math.max(3, Math.ceil(width / nextMetrics.tileWidth) + 2),
        rows: Math.max(3, Math.ceil(height / nextMetrics.tileHeight) + 2),
      });
      applyTransform();
    });
    const onNativeWheel = (event: WheelEvent) => {
      if (event.cancelable) event.preventDefault();
      if (drag.current.active) {
        wheel.current = { x: 0, y: 0 };
        return;
      }
      const delta = normalizeWheel(event);
      wheel.current.x += delta.x;
      wheel.current.y += delta.y;
    };

    resizeObserver.observe(canvas);
    canvas.addEventListener("wheel", onNativeWheel, { passive: false });

    const tick = (now: number) => {
      const dt = Math.min(2.4, Math.max(0.25, (now - lastTime) / 16.667));
      lastTime = now;

      if (!drag.current.active && !lightboxActiveRef.current) {
        if (wheel.current.x || wheel.current.y) {
          addVelocity(-wheel.current.x * 0.055, -wheel.current.y * 0.055);
          wheel.current = { x: 0, y: 0 };
        }

        const { tileWidth, tileHeight } = metricsRef.current;
        offset.current.x = wrap(offset.current.x + velocity.current.x * dt, tileWidth);
        offset.current.y = wrap(offset.current.y + velocity.current.y * dt, tileHeight);
        velocity.current.x *= Math.pow(VELOCITY_DECAY, dt);
        velocity.current.y *= Math.pow(VELOCITY_DECAY, dt);

        if (Math.abs(velocity.current.x) < 0.012) velocity.current.x = 0;
        if (Math.abs(velocity.current.y) < 0.012) velocity.current.y = 0;
      } else if (lightboxActiveRef.current) {
        wheel.current = { x: 0, y: 0 };
      }

      applyTransform();
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("wheel", onNativeWheel);
      resizeObserver.disconnect();
      resetCursorTilt();
    };
  }, [addVelocity, applyTransform, resetCursorTilt]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const onWindowMove = (event: PointerEvent) => {
      if (!drag.current.active || drag.current.pointerId !== event.pointerId) return;
      if (event.cancelable) event.preventDefault();
      moveDrag(event.clientX, event.clientY, event.timeStamp);
    };
    const onWindowUp = (event: PointerEvent) => {
      endDrag(event.pointerId);
    };
    const onLostPointerCapture = (event: PointerEvent) => {
      endDrag(event.pointerId);
    };

    window.addEventListener("pointermove", onWindowMove, { passive: false });
    window.addEventListener("pointerup", onWindowUp);
    window.addEventListener("pointercancel", onWindowUp);
    canvas?.addEventListener("lostpointercapture", onLostPointerCapture);

    return () => {
      window.removeEventListener("pointermove", onWindowMove);
      window.removeEventListener("pointerup", onWindowUp);
      window.removeEventListener("pointercancel", onWindowUp);
      canvas?.removeEventListener("lostpointercapture", onLostPointerCapture);
    };
  }, [endDrag, moveDrag]);

  useEffect(() => {
    const onDocumentMouseMove = (event: MouseEvent) => {
      if (drag.current.active && drag.current.pointerId === MOUSE_DRAG_POINTER_ID) {
        if (event.cancelable) event.preventDefault();
        moveDrag(event.clientX, event.clientY, event.timeStamp);
        return;
      }

      queueCursorTilt(event.clientX, event.clientY);
    };
    const onDocumentPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      queueCursorTilt(event.clientX, event.clientY);
    };
    const onDocumentMouseLeave = () => {
      resetCursorTilt();
    };
    const onDocumentMouseUp = () => {
      if (drag.current.pointerId !== MOUSE_DRAG_POINTER_ID) return;
      endDrag(MOUSE_DRAG_POINTER_ID);
    };

    document.addEventListener("mousemove", onDocumentMouseMove, {
      capture: true,
      passive: false,
    });
    document.addEventListener("pointermove", onDocumentPointerMove, {
      capture: true,
      passive: true,
    });
    document.addEventListener("mouseleave", onDocumentMouseLeave);
    document.addEventListener("mouseup", onDocumentMouseUp);

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove, true);
      document.removeEventListener("pointermove", onDocumentPointerMove, true);
      document.removeEventListener("mouseleave", onDocumentMouseLeave);
      document.removeEventListener("mouseup", onDocumentMouseUp);
    };
  }, [endDrag, moveDrag, queueCursorTilt, resetCursorTilt]);

  useEffect(() => {
    if (!activeLightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLightbox, closeLightbox]);

  const beginDrag = (
    canvas: HTMLDivElement,
    clientX: number,
    clientY: number,
    timeStamp: number,
    pointerId: number,
  ) => {
    wheel.current = { x: 0, y: 0 };
    resetCursorTilt();
    drag.current = {
      active: true,
      pointerId,
      x: clientX,
      y: clientY,
      ox: offset.current.x,
      oy: offset.current.y,
      lx: clientX,
      ly: clientY,
      lt: timeStamp,
      distance: 0,
    };
    velocity.current = { x: 0, y: 0 };
    canvas.dataset.dragging = "true";
  };

  const onDown = (e: RPE<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-no-drag]")) return;
    if (drag.current.active) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    if (!target.closest(".fliers-poster")) {
      pendingPosterClick.current = null;
    }
    if (e.cancelable) e.preventDefault();
    beginDrag(e.currentTarget, e.clientX, e.clientY, e.timeStamp, e.pointerId);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onCanvasMouseDown = (e: RME<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-no-drag]")) return;
    if (drag.current.active) return;
    if (e.button !== 0) return;

    if (!target.closest(".fliers-poster")) {
      pendingPosterClick.current = null;
    }
    if (e.cancelable) e.preventDefault();
    beginDrag(e.currentTarget, e.clientX, e.clientY, e.timeStamp, MOUSE_DRAG_POINTER_ID);
  };

  const onCanvasMouseMove = (e: RME<HTMLDivElement>) => {
    queueCursorTilt(e.clientX, e.clientY);
  };

  const onCanvasPointerMove = (e: RPE<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    queueCursorTilt(e.clientX, e.clientY);
  };

  const registerPosterPointer = (e: RPE<HTMLButtonElement>, flier: Flier) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pendingPosterClick.current = {
      flier,
      rect: e.currentTarget.getBoundingClientRect(),
    };
  };

  const registerPosterMouseDown = (e: RME<HTMLButtonElement>, flier: Flier) => {
    if (e.button !== 0) return;
    pendingPosterClick.current = {
      flier,
      rect: e.currentTarget.getBoundingClientRect(),
    };
  };

  const onPosterKeyDown = (e: RKE<HTMLButtonElement>, flier: Flier) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();

    if (performance.now() < suppressClickUntil.current || activeLightbox) {
      return;
    }

    openLightbox(flier, e.currentTarget.getBoundingClientRect());
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#3f9f68] text-[#f7f2e8]">
      <nav className="fixed left-5 top-5 z-50 flex gap-5 text-[15px] font-medium mix-blend-difference">
        <Link to="/" data-no-drag className="story-link">
          Isaac Sohn
        </Link>
        <Link to="/work" data-no-drag className="story-link">
          Work
        </Link>
        <Link to="/interactive" data-no-drag className="story-link">
          Interactive
        </Link>
      </nav>

      <div
        ref={canvasRef}
        data-no-pan
        onPointerDown={onDown}
        onMouseDown={onCanvasMouseDown}
        onPointerMove={onCanvasPointerMove}
        onMouseMove={onCanvasMouseMove}
        className="fliers-canvas absolute inset-0 z-20 overflow-hidden touch-none"
        style={{ cursor: "grab" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 24% 18%, rgba(255,255,255,0.16), transparent 24%), radial-gradient(circle at 74% 68%, rgba(25,83,54,0.24), transparent 34%)",
          }}
        />
        <div
          ref={stripRef}
          className="absolute left-0 top-0 will-change-transform"
          style={{
            width: metrics.tileWidth * tileGrid.cols,
            height: metrics.tileHeight * tileGrid.rows,
            transform: createStripTransform(offset.current, metrics),
          }}
        >
          {tiles.map((tile) => (
            <div
              key={`${tile.x}-${tile.y}`}
              className="absolute"
              style={{
                left: tile.x * metrics.tileWidth,
                top: tile.y * metrics.tileHeight,
                width: metrics.tileWidth,
                height: metrics.tileHeight,
              }}
            >
              {posterLayout.map((poster, index) => {
                const flierMixIndex =
                  (poster.col + poster.row * 4 + tile.x * 3 + tile.y * 5) % fliers.length;
                const flier = fliers[FLIER_MIX[flierMixIndex]];
                const style: PosterStyle = {
                  left: poster.x,
                  top: poster.y,
                  width: metrics.posterWidth,
                  height: metrics.posterHeight,
                  "--poster-rotate": `${poster.r}deg`,
                  "--poster-z": poster.z,
                };

                const posterContent = (
                  <span className="fliers-poster__inner pointer-events-none block h-full w-full overflow-hidden rounded-[2px] bg-[#fbfaf6]">
                    <img
                      src={flier.src}
                      alt={`${flier.title} flyer poster`}
                      decoding="async"
                      draggable={false}
                      loading={index < 12 ? "eager" : "lazy"}
                      className="block h-full w-full select-none object-cover"
                    />
                    <span className="fliers-poster__shine pointer-events-none absolute inset-0" />
                  </span>
                );

                return (
                  <button
                    key={`${tile.x}-${tile.y}-${index}`}
                    aria-label={`View ${flier.title}`}
                    className="fliers-poster absolute block select-none overflow-visible rounded-[2px]"
                    onKeyDown={(e) => onPosterKeyDown(e, flier)}
                    onMouseDownCapture={(e) => registerPosterMouseDown(e, flier)}
                    onPointerDownCapture={(e) => registerPosterPointer(e, flier)}
                    style={style}
                    type="button"
                  >
                    {posterContent}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.025)_55%,rgba(0,0,0,0.19)_100%)]" />
      </div>

      {activeLightbox ? (
        <div
          aria-label={`${activeLightbox.flier.title} enlarged poster`}
          aria-modal="true"
          className="fliers-lightbox"
          data-state={activeLightbox.phase}
          data-no-drag
          onClick={closeLightbox}
          role="dialog"
        >
          <button
            aria-label="Close enlarged poster"
            className="fliers-lightbox__close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            type="button"
          >
            ×
          </button>
          <div
            className="fliers-lightbox__image-wrap"
            data-state={activeLightbox.phase}
            onClick={(e) => e.stopPropagation()}
            style={activeLightbox.style}
          >
            <img
              alt={`${activeLightbox.flier.title} enlarged`}
              className="fliers-lightbox__image"
              decoding="async"
              draggable={false}
              src={activeLightbox.flier.src}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
