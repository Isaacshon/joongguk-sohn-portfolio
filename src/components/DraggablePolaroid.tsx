import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Props = {
  src: string;
  alt: string;
  top: number;
  left: number;
  width: number;
  rotate: number;
  z?: number;
  delay?: number;
  tearRun?: number;
};

function PolaroidCard({
  src,
  alt,
  className = "",
  ariaHidden = false,
}: {
  src: string;
  alt: string;
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className={`polaroid-card ${className}`} aria-hidden={ariaHidden || undefined}>
      <div className="polaroid-photo-frame">
        <img
          src={src}
          alt={ariaHidden ? "" : alt}
          draggable={false}
          className="polaroid-image pointer-events-none block h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

export function DraggablePolaroid({
  src,
  alt,
  top,
  left,
  width,
  rotate,
  z = 1,
  delay = 0,
  tearRun = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top, left });
  const [dragging, setDragging] = useState(false);
  const [hover, setHover] = useState(false);
  const [zTop, setZTop] = useState(z);
  const [mounted, setMounted] = useState(false);
  const [tearing, setTearing] = useState(false);
  const [tearKey, setTearKey] = useState(0);
  const start = useRef({ x: 0, y: 0, top: 0, left: 0, parentW: 1, parentH: 1, t: 0 });
  const vel = useRef({ vx: 0, vy: 0 });

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!tearRun) {
      setTearing(false);
      return;
    }

    setTearing(false);
    const startTimer = window.setTimeout(() => {
      setTearKey(tearRun);
      setTearing(true);
    }, 24);
    const endTimer = window.setTimeout(() => setTearing(false), 3400);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(endTimer);
    };
  }, [tearRun]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (tearing) return;

    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    start.current = {
      x: e.clientX,
      y: e.clientY,
      top: pos.top,
      left: pos.left,
      parentW: rect.width,
      parentH: rect.height,
      t: performance.now(),
    };
    vel.current = { vx: 0, vy: 0 };
    setDragging(true);
    setZTop(20);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dxPct = ((e.clientX - start.current.x) / start.current.parentW) * 100;
    const dyPct = ((e.clientY - start.current.y) / start.current.parentH) * 100;
    const now = performance.now();
    const dt = Math.max(1, now - start.current.t);
    vel.current = {
      vx: (((e.movementX / start.current.parentW) * 100) / dt) * 16,
      vy: (((e.movementY / start.current.parentH) * 100) / dt) * 16,
    };
    setPos({
      top: Math.max(-5, Math.min(95, start.current.top + dyPct)),
      left: Math.max(-5, Math.min(95, start.current.left + dxPct)),
    });
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(false);
    ref.current?.releasePointerCapture(e.pointerId);
    // tiny fling
    const { vx, vy } = vel.current;
    if (Math.abs(vx) > 0.2 || Math.abs(vy) > 0.2) {
      setPos((p) => ({
        top: Math.max(-5, Math.min(95, p.top + vy * 3)),
        left: Math.max(-5, Math.min(95, p.left + vx * 3)),
      }));
    }
  };

  const tilt = dragging ? rotate * 0.4 : hover ? rotate * 0.6 : rotate;
  const scale = dragging ? 1.06 : hover ? 1.04 : 1;
  const lift = dragging ? 14 : hover ? 6 : 0;

  const style: CSSProperties & { "--polaroid-card-width": string } = {
    top: `${pos.top}%`,
    left: `${pos.left}%`,
    width: `${width}px`,
    "--polaroid-card-width": `${width}px`,
    transform: `translateY(${-lift}px) rotate(${tilt}deg) scale(${mounted ? scale : 0.6})`,
    opacity: mounted ? 1 : 0,
    transformOrigin: "center",
    cursor: dragging ? "grabbing" : "grab",
    zIndex: tearing ? 46 : zTop,
    transition: dragging
      ? "transform 80ms ease, opacity 400ms"
      : "transform 500ms cubic-bezier(.2,.8,.2,1), opacity 600ms, box-shadow 300ms",
    boxShadow: dragging
      ? "0 6px 12px rgba(0,0,0,.3), 0 50px 70px -10px rgba(0,0,0,.6)"
      : hover
        ? "0 4px 8px rgba(0,0,0,.22), 0 30px 40px -10px rgba(0,0,0,.5)"
        : undefined,
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={`polaroid absolute select-none touch-none ${tearing ? "is-tearing" : ""}`}
      style={style}
    >
      <PolaroidCard src={src} alt={alt} className="polaroid-card-base" />
      {tearing && (
        <div key={tearKey} className="polaroid-tear-layer" aria-hidden>
          <div className="polaroid-tear-half polaroid-tear-left">
            <PolaroidCard src={src} alt={alt} className="polaroid-tear-card" ariaHidden />
          </div>
          <div className="polaroid-tear-half polaroid-tear-right">
            <PolaroidCard src={src} alt={alt} className="polaroid-tear-card" ariaHidden />
          </div>
        </div>
      )}
    </div>
  );
}
