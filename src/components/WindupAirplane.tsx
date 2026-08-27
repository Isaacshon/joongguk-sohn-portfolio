import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ToyPullFeedback } from "@/components/ToyPullFeedback";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import {
  calculateElasticPull,
  cancelHaptic,
  clamp,
  getLaunchPower,
  getMaxPullDistance,
  getTensionStep,
  triggerHaptic,
} from "@/lib/toy-motion";

type Props = {
  src: string;
  alt: string;
  top: number;
  left: number;
  width: number | string;
  heading?: number;
  z?: number;
  delay?: number;
};

type Point = { top: number; left: number };
type Velocity = { vx: number; vy: number };
type Dimensions = {
  parentW: number;
  parentH: number;
  planeW: number;
  planeH: number;
};

const MIN_TENSION = 0.06;
const MIN_SPEED = 95;
const MAX_SPEED = 460;
const FRICTION = 235;
const STOP_SPEED = 14;
const IMPACT_HAPTIC_COOLDOWN = 180;

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
  const motionDimensions = useRef<Dimensions | null>(null);
  const posRef = useRef<Point>({ top, left });
  const windRef = useRef(0);
  const headingRef = useRef(heading);
  const velocity = useRef<Velocity>({ vx: 0, vy: 0 });
  const draggingRef = useRef(false);
  const suppressClick = useRef(false);
  const hapticsActive = useRef(false);
  const lastHapticStep = useRef(0);
  const lastImpactHaptic = useRef(0);
  const drag = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    top,
    left,
    startHeading: heading,
    parentW: 1,
    parentH: 1,
    maxPull: 96,
  });

  const [pos, setPos] = useState<Point>({ top, left });
  const [wind, setWind] = useState(0);
  const [angle, setAngle] = useState(heading);
  const [dragging, setDragging] = useState(false);
  const [flying, setFlying] = useState(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [flight, setFlight] = useState(0);
  const [pull, setPull] = useState({ distance: 0, heading });
  const reducedMotion = usePrefersReducedMotion();

  const setPosition = (next: Point) => {
    posRef.current = next;
    setPos(next);
  };

  const setWindAmount = (next: number) => {
    const clamped = clamp(next, 0, 1);
    windRef.current = clamped;
    setWind(clamped);
  };

  const setHeading = (next: number) => {
    headingRef.current = next;
    setAngle(next);
  };

  const measure = (): Dimensions | null => {
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

    const xPad = ((dims.planeW * 0.34) / dims.parentW) * 100;
    const yPad = ((dims.planeH * 0.36) / dims.parentH) * 100;

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
    motionDimensions.current = null;
    velocity.current = { vx: 0, vy: 0 };
    setFlying(false);
    setFlight(0);
  };

  const animate = (time: number) => {
    const dims = motionDimensions.current;
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

    const minX = dims.planeW * 0.32;
    const maxX = dims.parentW - dims.planeW * 0.32;
    const minY = dims.planeH * 0.34;
    const maxY = dims.parentH - dims.planeH * 0.34;

    let x = (posRef.current.left / 100) * dims.parentW + vx * dt;
    let y = (posRef.current.top / 100) * dims.parentH + vy * dt;
    let bounced = false;

    if (x < minX || x > maxX) {
      x = clamp(x, minX, maxX);
      vx *= -0.22;
      vy *= 0.9;
      bounced = true;
    }

    if (y < minY || y > maxY) {
      y = clamp(y, minY, maxY);
      vy *= -0.22;
      vx *= 0.9;
      bounced = true;
    }

    if (
      bounced &&
      hapticsActive.current &&
      time - lastImpactHaptic.current > IMPACT_HAPTIC_COOLDOWN
    ) {
      triggerHaptic(8);
      lastImpactHaptic.current = time;
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
    const timer = window.setTimeout(() => setMounted(true), delay);
    return () => {
      window.clearTimeout(timer);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      cancelHaptic();
    };
  }, [delay]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !event.isPrimary ||
      draggingRef.current ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    const dims = measure();
    if (!dims) return;

    event.preventDefault();
    event.stopPropagation();
    stopFlight();

    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      top: posRef.current.top,
      left: posRef.current.left,
      startHeading: headingRef.current,
      parentW: dims.parentW,
      parentH: dims.parentH,
      maxPull: getMaxPullDistance(dims.parentW, dims.parentH),
    };

    draggingRef.current = true;
    suppressClick.current = true;
    hapticsActive.current = event.pointerType !== "mouse" && !reducedMotion;
    lastHapticStep.current = 0;
    setDragging(true);
    setInteracted(true);
    setPull({ distance: 0, heading: headingRef.current });
    setWindAmount(0);
    ref.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || event.pointerId !== drag.current.pointerId) return;

    event.preventDefault();
    event.stopPropagation();

    const gesture = calculateElasticPull(
      event.clientX - drag.current.startX,
      event.clientY - drag.current.startY,
      drag.current.maxPull,
    );

    setPosition(
      clampPosition({
        top: drag.current.top + (gesture.offsetY / drag.current.parentH) * 100,
        left: drag.current.left + (gesture.offsetX / drag.current.parentW) * 100,
      }),
    );
    const nextHeading = gesture.tension > 0 ? gesture.launchHeading : drag.current.startHeading;
    if (gesture.tension > 0) setHeading(nextHeading);
    setPull({ distance: gesture.distance, heading: nextHeading });
    setWindAmount(gesture.tension);

    const tensionStep = getTensionStep(gesture.tension);
    if (tensionStep > lastHapticStep.current && tensionStep > 0 && hapticsActive.current) {
      triggerHaptic(4 + tensionStep * 2);
      lastHapticStep.current = tensionStep;
    }
  };

  const launch = () => {
    const amount = windRef.current;
    if (amount < MIN_TENSION) return false;

    const dims = measure();
    if (!dims) return false;

    const speed = MIN_SPEED + (MAX_SPEED - MIN_SPEED) * getLaunchPower(amount);
    const radians = (headingRef.current * Math.PI) / 180;
    velocity.current = {
      vx: Math.cos(radians) * speed,
      vy: Math.sin(radians) * speed,
    };
    motionDimensions.current = dims;
    lastFrame.current = performance.now();
    setWindAmount(0);
    setFlight(amount);
    setFlying(true);
    frame.current = requestAnimationFrame(animate);
    return true;
  };

  const nudgeReducedMotion = (amount: number) => {
    const dims = measure();
    if (!dims) return;

    const distance = 16 + getLaunchPower(amount) * 24;
    const radians = (headingRef.current * Math.PI) / 180;
    setWindAmount(0);
    setFlight(0);
    setPosition(
      clampPosition(
        {
          top: posRef.current.top + (Math.sin(radians) * distance * 100) / dims.parentH,
          left: posRef.current.left + (Math.cos(radians) * distance * 100) / dims.parentW,
        },
        dims,
      ),
    );
  };

  const releasePointer = (pointerId: number) => {
    if (ref.current?.hasPointerCapture(pointerId)) {
      ref.current.releasePointerCapture(pointerId);
    }
  };

  const clearClickSuppression = () => {
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || event.pointerId !== drag.current.pointerId) return;

    event.preventDefault();
    event.stopPropagation();
    const amount = windRef.current;
    draggingRef.current = false;
    setDragging(false);
    setPull({ distance: 0, heading: headingRef.current });
    releasePointer(event.pointerId);
    clearClickSuppression();

    if (amount < MIN_TENSION) {
      setWindAmount(0);
      setHeading(drag.current.startHeading);
      setPosition(clampPosition({ top: drag.current.top, left: drag.current.left }));
      return;
    }

    if (reducedMotion) {
      nudgeReducedMotion(amount);
      return;
    }

    if (hapticsActive.current) {
      triggerHaptic(amount > 0.72 ? [10, 24, 15] : 10);
    }
    launch();
  };

  const resetDrag = (pointerId = drag.current.pointerId) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    setWindAmount(0);
    setHeading(drag.current.startHeading);
    setPull({ distance: 0, heading: drag.current.startHeading });
    setPosition(clampPosition({ top: drag.current.top, left: drag.current.left }));
    releasePointer(pointerId);
    clearClickSuppression();
    cancelHaptic();
  };

  const cancelDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || event.pointerId !== drag.current.pointerId) return;
    resetDrag(event.pointerId);
  };

  const activate = () => {
    stopFlight();
    setWindAmount(0.5);
    if (reducedMotion) {
      nudgeReducedMotion(0.5);
    } else {
      launch();
    }
  };

  const onClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (suppressClick.current) {
      event.preventDefault();
      return;
    }
    activate();
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      if (draggingRef.current) resetDrag();
      else stopFlight();
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.repeat) return;
    event.preventDefault();
    activate();
  };

  const planeRotation = angle + 90;
  const widthValue = typeof width === "number" ? `${width}px` : width;
  const lift = dragging ? 18 + wind * 12 : flying ? 18 + flight * 28 : hover ? 8 : 0;
  const scale = dragging ? 1.06 : flying ? 1.03 + flight * 0.05 : hover ? 1.035 : 1;
  const windTurns = wind * 3.2;
  const shadowBlur = 14 + flight * 22;
  const shadowOffset = 18 + flight * 38;

  return (
    <div
      ref={ref}
      data-no-pan
      role="button"
      tabIndex={0}
      aria-label={`${alt}. Pull back and release to launch.`}
      aria-keyshortcuts="Enter Space Escape"
      onClick={onClick}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={cancelDrag}
      onLostPointerCapture={cancelDrag}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className="windup-plane absolute select-none touch-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#f5efe2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#164f48]"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        width: widthValue,
        opacity: mounted ? 1 : 0,
        transform: `translate(-50%, calc(-50% - ${lift}px)) rotate(${planeRotation}deg) scale(${mounted ? scale : 0.72})`,
        transformOrigin: "center",
        cursor: dragging ? "grabbing" : "grab",
        zIndex: dragging || flying ? Math.max(z, 71) : z,
        transition: reducedMotion
          ? "none"
          : dragging || flying
            ? "opacity 300ms, filter 120ms"
            : "top 480ms cubic-bezier(.2,.9,.2,1), left 480ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.8,.2,1), opacity 650ms, filter 250ms",
        filter: `drop-shadow(0 ${shadowOffset}px ${shadowBlur}px rgba(0,0,0,${flying ? 0.22 : 0.32}))`,
        willChange: dragging || flying ? "top, left, transform" : undefined,
      }}
    >
      <ToyPullFeedback
        distance={pull.distance}
        heading={pull.heading}
        parentRotation={planeRotation}
        tension={wind}
        visible={dragging && wind > 0.01}
        showHint={!interacted && mounted}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[86%] z-0 h-1.5 w-[70%] -translate-x-1/2 rounded-full bg-[#f5efe2]/60 blur-[3px] transition-opacity duration-150"
        style={{
          opacity: flying ? 0.18 + flight * 0.42 : 0,
          transform: `translateX(-50%) scaleX(${0.7 + flight * 0.9})`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-150"
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
        className={`windup-plane-img pointer-events-none relative z-[2] block h-auto w-full object-contain ${
          dragging && wind > 0.02 ? "is-wound" : ""
        } ${flying ? "is-flying" : ""}`}
      />
    </div>
  );
}
