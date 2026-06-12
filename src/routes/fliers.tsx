import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as RPE,
} from "react";
import fashionPoster from "@/assets/project-fliers/3d-fashion.svg";
import blessiePoster from "@/assets/project-fliers/blessie.svg";
import eknocPoster from "@/assets/project-fliers/eknoc.svg";
import wemplatePoster from "@/assets/project-fliers/wemplate.svg";

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

const POSTER_WIDTH = 346;
const POSTER_HEIGHT = 461;
const GAP_X = 130;
const GAP_Y = 130;
const PITCH_X = POSTER_WIDTH + GAP_X;
const PITCH_Y = POSTER_HEIGHT + GAP_Y;
const COLUMNS = 16;
const ROWS = 5;
const TILE_WIDTH = COLUMNS * PITCH_X;
const TILE_HEIGHT = ROWS * PITCH_Y;
const DRAG_RESPONSE = 0.68;
const MAX_VELOCITY = 18;

const fliers = [
  { src: eknocPoster, title: "Eknoc" },
  { src: wemplatePoster, title: "Wemplate" },
  { src: blessiePoster, title: "Blessie" },
  { src: fashionPoster, title: "3D Fashion" },
];

const posterLayout = Array.from({ length: ROWS * COLUMNS }, (_, index) => {
  const row = Math.floor(index / COLUMNS);
  const col = index % COLUMNS;
  const rowOffsets = [0, 303, 0, 303, 0];

  return {
    col,
    row,
    x: col * PITCH_X + rowOffsets[row],
    y: row * PITCH_Y,
    w: POSTER_WIDTH,
    r: 0,
  };
});

const wrap = (value: number, size: number) => ((value % size) + size) % size;
const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value));
const normalizeWheel = (event: WheelEvent) => {
  const unit = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
  return { x: event.deltaX * unit, y: event.deltaY * unit };
};

type PosterStyle = CSSProperties & {
  "--poster-rotate": string;
};

function Fliers() {
  const [tileGrid, setTileGrid] = useState({ cols: 4, rows: 4 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: -3022, y: -873 });
  const velocity = useRef({ x: -0.12, y: 0.06 });
  const wheel = useRef({ x: 0, y: 0 });
  const reducedMotion = useRef(false);
  const drift = useRef({ tick: 0 });
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
  });

  const tiles = useMemo(
    () =>
      Array.from({ length: tileGrid.cols * tileGrid.rows }, (_, index) => ({
        x: index % tileGrid.cols,
        y: Math.floor(index / tileGrid.cols),
      })),
    [tileGrid],
  );

  const applyTransform = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const x = -TILE_WIDTH + wrap(offset.current.x, TILE_WIDTH);
    const y = -TILE_HEIGHT + wrap(offset.current.y, TILE_HEIGHT);
    strip.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, []);

  const addVelocity = useCallback((x: number, y: number) => {
    velocity.current.x = clamp(velocity.current.x + x, MAX_VELOCITY);
    velocity.current.y = clamp(velocity.current.y + y, MAX_VELOCITY);
  }, []);

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
        x: clamp(velocity.current.x * 0.25 + vx * 0.06, MAX_VELOCITY),
        y: clamp(velocity.current.y * 0.25 + vy * 0.06, MAX_VELOCITY),
      };
      drag.current.lx = clientX;
      drag.current.ly = clientY;
      drag.current.lt = timeStamp;
      applyTransform();
    },
    [applyTransform],
  );

  const endDrag = useCallback((pointerId: number) => {
    if (drag.current.pointerId !== pointerId) return;

    drag.current.active = false;
    drag.current.pointerId = null;
    offset.current.x = wrap(offset.current.x, TILE_WIDTH);
    offset.current.y = wrap(offset.current.y, TILE_HEIGHT);

    const canvas = canvasRef.current;
    if (!canvas) return;

    delete canvas.dataset.dragging;
    if (canvas.hasPointerCapture(pointerId)) {
      canvas.releasePointerCapture(pointerId);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      reducedMotion.current = motionQuery.matches;
      if (reducedMotion.current) velocity.current = { x: 0, y: 0 };
    };
    syncReducedMotion();
    motionQuery.addEventListener("change", syncReducedMotion);

    let frame = 0;
    let lastTime = performance.now();
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setTileGrid({
        cols: Math.max(3, Math.ceil(width / TILE_WIDTH) + 2),
        rows: Math.max(3, Math.ceil(height / TILE_HEIGHT) + 2),
      });
    });
    const onNativeWheel = (event: WheelEvent) => {
      if (event.cancelable) event.preventDefault();
      const delta = normalizeWheel(event);
      wheel.current.x += delta.x;
      wheel.current.y += delta.y;
    };

    resizeObserver.observe(canvas);
    canvas.addEventListener("wheel", onNativeWheel, { passive: false });

    const tick = (now: number) => {
      const dt = Math.min(2.4, Math.max(0.25, (now - lastTime) / 16.667));
      lastTime = now;

      if (!drag.current.active) {
        if (!reducedMotion.current && (wheel.current.x || wheel.current.y)) {
          addVelocity(-wheel.current.x * 0.018 - wheel.current.y * 0.06, wheel.current.y * 0.032);
          wheel.current = { x: 0, y: 0 };
        }

        drift.current.tick += 1;
        const driftY = reducedMotion.current ? 0 : Math.sin(drift.current.tick / 92) * 0.026;

        offset.current.x = wrap(offset.current.x + velocity.current.x * dt, TILE_WIDTH);
        offset.current.y = wrap(offset.current.y + velocity.current.y * dt + driftY, TILE_HEIGHT);
        velocity.current.x *= Math.pow(0.88, dt);
        velocity.current.y *= Math.pow(0.88, dt);

        if (!reducedMotion.current && Math.abs(velocity.current.x) < 0.12)
          velocity.current.x = -0.12;
        if (!reducedMotion.current && Math.abs(velocity.current.y) < 0.06)
          velocity.current.y = 0.06;
      }

      applyTransform();
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("wheel", onNativeWheel);
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", syncReducedMotion);
    };
  }, [addVelocity, applyTransform]);

  useEffect(() => {
    const onWindowMove = (event: PointerEvent) => {
      if (!drag.current.active || drag.current.pointerId !== event.pointerId) return;
      if (event.cancelable) event.preventDefault();
      moveDrag(event.clientX, event.clientY, event.timeStamp);
    };
    const onWindowUp = (event: PointerEvent) => {
      endDrag(event.pointerId);
    };

    window.addEventListener("pointermove", onWindowMove, { passive: false });
    window.addEventListener("pointerup", onWindowUp);
    window.addEventListener("pointercancel", onWindowUp);

    return () => {
      window.removeEventListener("pointermove", onWindowMove);
      window.removeEventListener("pointerup", onWindowUp);
      window.removeEventListener("pointercancel", onWindowUp);
    };
  }, [endDrag, moveDrag]);

  const onDown = (e: RPE<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button")) return;

    e.preventDefault();
    drag.current = {
      active: true,
      pointerId: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      ox: offset.current.x,
      oy: offset.current.y,
      lx: e.clientX,
      ly: e.clientY,
      lt: e.timeStamp,
    };
    velocity.current = { x: 0, y: 0 };
    e.currentTarget.dataset.dragging = "true";
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#3f9f68] text-[#f7f2e8]">
      <nav className="fixed left-5 top-5 z-50 flex gap-5 text-[15px] font-medium mix-blend-difference">
        <Link to="/" className="story-link">
          Isaac Sohn
        </Link>
        <Link to="/work" className="story-link">
          Work
        </Link>
      </nav>

      <div
        ref={canvasRef}
        data-no-pan
        onPointerDown={onDown}
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
            width: TILE_WIDTH * tileGrid.cols,
            height: TILE_HEIGHT * tileGrid.rows,
            transform: `translate3d(${-TILE_WIDTH}px, ${-TILE_HEIGHT}px, 0)`,
          }}
        >
          {tiles.map((tile) => (
            <div
              key={`${tile.x}-${tile.y}`}
              className="absolute"
              style={{
                left: tile.x * TILE_WIDTH,
                top: tile.y * TILE_HEIGHT,
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
              }}
            >
              {posterLayout.map((poster, index) => {
                const flier =
                  fliers[(poster.col + poster.row * 3 + tile.x * 2 + tile.y * 5) % fliers.length];
                const style: PosterStyle = {
                  left: poster.x,
                  top: poster.y,
                  width: poster.w,
                  "--poster-rotate": `${poster.r}deg`,
                };

                return (
                  <article
                    key={`${tile.x}-${tile.y}-${index}`}
                    className="fliers-poster absolute select-none overflow-hidden rounded-[2px] bg-[#fbfaf6] shadow-[0_2px_6px_rgba(0,0,0,0.22),0_18px_30px_-18px_rgba(0,0,0,0.55)]"
                    style={style}
                  >
                    <img
                      src={flier.src}
                      alt={`${flier.title} project poster`}
                      decoding="async"
                      draggable={false}
                      loading={index < 12 ? "eager" : "lazy"}
                      className="pointer-events-none block h-[461px] w-full select-none object-cover"
                    />
                  </article>
                );
              })}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.025)_55%,rgba(0,0,0,0.19)_100%)]" />
      </div>
    </div>
  );
}
