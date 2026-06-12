import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

type Props = {
  src: string;
  alt: string;
  top: number;
  left: number;
  width: number;
  heading?: number;
  z?: number;
  delay?: number;
};

type Point = { top: number; left: number };
type Velocity = { vx: number; vy: number };

const MAX_WIND = 1;
const MIN_SPEED = 190;
const MAX_SPEED = 920;
const FRICTION = 205;
const STOP_SPEED = 12;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export function WindupAirplane({
  src,
  alt,
  top,
  left,
  width,
  heading = 0,
  z = 11,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const lastFrame = useRef(0);
  const posRef = useRef<Point>({ top, left });
  const windRef = useRef(0);
  const headingRef = useRef(heading);
  const velocity = useRef<Velocity>({ vx: 0, vy: 0 });
  const draggingRef = useRef(false);
  const drag = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    top,
    left,
    parentW: 1,
    parentH: 1,
  });

  const [pos, setPos] = useState<Point>({ top, left });
  const [wind, setWind] = useState(0);
  const [angle, setAngle] = useState(heading);
  const [dragging, setDragging] = useState(false);
  const [flying, setFlying] = useState(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [flight, setFlight] = useState(0);

  const setPosition = (next: Point) => {
    posRef.current = next;
    setPos(next);
  };

  const setWindAmount = (next: number) => {
    const clamped = clamp(next, 0, MAX_WIND);
    windRef.current = clamped;
    setWind(clamped);
  };

  const setHeading = (next: number) => {
    headingRef.current = next;
    setAngle(next);
  };

  const measure = () => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return null;

    const rect = parent.getBoundingClientRect();
    return {
      parentW: rect.width,
      parentH: rect.height,
      planeW: el.offsetWidth,
      planeH: el.offsetHeight,
    };
  };

  const clampPosition = (next: Point, dims = measure()) => {
    if (!dims) return next;

    const xPad = (dims.planeW * 0.26) / dims.parentW * 100;
    const yPad = (dims.planeH * 0.3) / dims.parentH * 100;

    return {
      top: clamp(next.top, yPad, 100 - yPad),
      left: clamp(next.left, xPad, 100 - xPad),
    };
  };

  const stopFlight = () => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    velocity.current = { vx: 0, vy: 0 };
    setFlying(false);
    setFlight(0);
  };

  const animate = (time: number) => {
    const dims = measure();
    if (!dims) {
      stopFlight();
      return;
    }

    const dt = Math.min(0.034, Math.max(0.001, (time - lastFrame.current) / 1000 || 0.016));
    lastFrame.current = time;

    let { vx, vy } = velocity.current;
    let speed = Math.hypot(vx, vy);

    if (speed < STOP_SPEED) {
      stopFlight();
      return;
    }

    const minX = dims.planeW * 0.24;
    const maxX = dims.parentW - dims.planeW * 0.24;
    const minY = dims.planeH * 0.28;
    const maxY = dims.parentH - dims.planeH * 0.28;

    let x = (posRef.current.left / 100) * dims.parentW + vx * dt;
    let y = (posRef.current.top / 100) * dims.parentH + vy * dt;

    if (x < minX || x > maxX) {
      x = clamp(x, minX, maxX);
      vx *= -0.24;
      vy *= 0.9;
    }

    if (y < minY || y > maxY) {
      y = clamp(y, minY, maxY);
      vy *= -0.24;
      vx *= 0.9;
    }

    speed = Math.hypot(vx, vy);
    const nextSpeed = Math.max(0, speed - FRICTION * dt);

    if (speed > 0) {
      const ratio = nextSpeed / speed;
      vx *= ratio;
      vy *= ratio;
    }

    velocity.current = { vx, vy };
    setFlight(clamp(nextSpeed / MAX_SPEED, 0, 1));
    setPosition({
      top: (y / dims.parentH) * 100,
      left: (x / dims.parentW) * 100,
    });

    if (Math.hypot(vx, vy) > STOP_SPEED) {
      setHeading((Math.atan2(vy, vx) * 180) / Math.PI);
      frame.current = requestAnimationFrame(animate);
    } else {
      stopFlight();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => {
      clearTimeout(timer);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [delay]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const dims = measure();
    if (!dims) return;

    e.preventDefault();
    e.stopPropagation();
    stopFlight();

    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      lastX: e.clientX,
      lastY: e.clientY,
      top: posRef.current.top,
      left: posRef.current.left,
      parentW: dims.parentW,
      parentH: dims.parentH,
    };

    draggingRef.current = true;
    setDragging(true);
    setWindAmount(0);
    ref.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    e.preventDefault();
    e.stopPropagation();

    const dxPct = ((e.clientX - drag.current.startX) / drag.current.parentW) * 100;
    const dyPct = ((e.clientY - drag.current.startY) / drag.current.parentH) * 100;

    setPosition(
      clampPosition({
        top: drag.current.top + dyPct,
        left: drag.current.left + dxPct,
      }),
    );

    const moveX = e.clientX - drag.current.lastX;
    const moveY = e.clientY - drag.current.lastY;
    if (Math.hypot(moveX, moveY) > 1.5) {
      setHeading((Math.atan2(moveY, moveX) * 180) / Math.PI);
    }

    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
  };

  const launch = () => {
    const amount = windRef.current;
    setWindAmount(0);

    if (amount < 0.035) return;

    const speed = MIN_SPEED + (MAX_SPEED - MIN_SPEED) * amount;
    const rad = (headingRef.current * Math.PI) / 180;
    velocity.current = {
      vx: Math.cos(rad) * speed,
      vy: Math.sin(rad) * speed,
    };
    lastFrame.current = performance.now();
    setFlight(amount);
    setFlying(true);
    frame.current = requestAnimationFrame(animate);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = false;
    setDragging(false);
    ref.current?.releasePointerCapture(e.pointerId);
    launch();
  };

  const onWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaMode === 1 ? Math.abs(e.deltaY) * 24 : Math.abs(e.deltaY);
    const add = Math.min(0.16, delta / 720);
    setWindAmount(windRef.current + add);
  };

  const planeRotation = angle + 90;
  const lift = dragging ? 18 : flying ? 18 + flight * 28 : hover ? 8 : 0;
  const scale = dragging ? 1.06 : flying ? 1.03 + flight * 0.05 : hover ? 1.035 : 1;
  const windTurns = wind * 3.2;
  const shadowBlur = 14 + flight * 22;
  const shadowOffset = 18 + flight * 38;

  return (
    <div
      ref={ref}
      data-no-pan
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onWheel={onWheel}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className="windup-plane absolute select-none touch-none"
      aria-label={alt}
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        width: `${width}px`,
        opacity: mounted ? 1 : 0,
        transform: `translate(-50%, calc(-50% - ${lift}px)) rotate(${planeRotation}deg) scale(${mounted ? scale : 0.72})`,
        transformOrigin: "center",
        cursor: dragging ? "grabbing" : "grab",
        zIndex: dragging || flying ? 28 : z,
        transition: dragging || flying
          ? "opacity 300ms, filter 120ms"
          : "transform 520ms cubic-bezier(.2,.8,.2,1), opacity 650ms, filter 250ms",
        filter: `drop-shadow(0 ${shadowOffset}px ${shadowBlur}px rgba(0,0,0,${flying ? 0.22 : 0.32}))`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[86%] h-1.5 w-[70%] -translate-x-1/2 rounded-full bg-[#f5efe2]/60 blur-[3px] transition-opacity duration-150"
        style={{
          opacity: flying ? 0.18 + flight * 0.42 : 0,
          transform: `translateX(-50%) scaleX(${0.7 + flight * 0.9})`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-150"
        style={{
          opacity: dragging && wind > 0.02 ? 0.8 : 0,
          background: `conic-gradient(from ${windTurns}turn, rgba(245,239,226,.9), rgba(245,239,226,.1) ${28 + wind * 56}%, transparent 0)`,
          transform: `translate(-50%, -50%) rotate(${windTurns}turn) scale(${0.78 + wind * 0.48})`,
        }}
      />
      <img
        src={src}
        alt=""
        draggable={false}
        className={`windup-plane-img pointer-events-none block h-auto w-full object-contain ${
          dragging && wind > 0.02 ? "is-wound" : ""
        } ${flying ? "is-flying" : ""}`}
      />
    </div>
  );
}
