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
  carW: number;
  carH: number;
};

const MIN_TENSION = 0.06;
const MIN_SPEED = 150;
const MAX_SPEED = 720;
const FRICTION = 610;
const STOP_SPEED = 16;
const IMPACT_HAPTIC_COOLDOWN = 180;

export function WindupCar({ src, alt, top, left, width, heading = 0, z = 12, delay = 0 }: Props) {
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
  const [moving, setMoving] = useState(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [interacted, setInteracted] = useState(false);
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
      carW: el.offsetWidth,
      carH: el.offsetHeight,
    };
  };

  const clampPosition = (next: Point, dims = measure()) => {
    if (!dims) return next;

    const xPad = ((dims.carW * 0.42) / dims.parentW) * 100;
    const yPad = ((dims.carH * 0.42) / dims.parentH) * 100;

    return {
      top: clamp(next.top, yPad, 100 - yPad),
      left: clamp(next.left, xPad, 100 - xPad),
    };
  };

  const stopMotion = () => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    motionDimensions.current = null;
    velocity.current = { vx: 0, vy: 0 };
    setMoving(false);
  };

  const animate = (time: number) => {
    const dims = motionDimensions.current;
    if (!dims) {
      stopMotion();
      return;
    }

    const dt = Math.min(0.034, Math.max(0.001, (time - lastFrame.current) / 1000 || 0.016));
    lastFrame.current = time;

    let { vx, vy } = velocity.current;
    let speed = Math.hypot(vx, vy);

    if (speed < STOP_SPEED) {
      stopMotion();
      return;
    }

    const minX = dims.carW * 0.42;
    const maxX = dims.parentW - dims.carW * 0.42;
    const minY = dims.carH * 0.42;
    const maxY = dims.parentH - dims.carH * 0.42;

    let x = (posRef.current.left / 100) * dims.parentW + vx * dt;
    let y = (posRef.current.top / 100) * dims.parentH + vy * dt;
    let bounced = false;

    if (x < minX || x > maxX) {
      x = clamp(x, minX, maxX);
      vx *= -0.32;
      vy *= 0.82;
      bounced = true;
    }

    if (y < minY || y > maxY) {
      y = clamp(y, minY, maxY);
      vy *= -0.32;
      vx *= 0.82;
      bounced = true;
    }

    if (
      bounced &&
      hapticsActive.current &&
      time - lastImpactHaptic.current > IMPACT_HAPTIC_COOLDOWN
    ) {
      triggerHaptic(9);
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
    setPosition({
      top: (y / dims.parentH) * 100,
      left: (x / dims.parentW) * 100,
    });

    if (Math.hypot(vx, vy) > STOP_SPEED) {
      setHeading((Math.atan2(vy, vx) * 180) / Math.PI);
      frame.current = requestAnimationFrame(animate);
    } else {
      stopMotion();
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
    stopMotion();

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
    setMoving(true);
    frame.current = requestAnimationFrame(animate);
    return true;
  };

  const nudgeReducedMotion = (amount: number) => {
    const dims = measure();
    if (!dims) return;

    const distance = 18 + getLaunchPower(amount) * 28;
    const radians = (headingRef.current * Math.PI) / 180;
    setWindAmount(0);
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
      triggerHaptic(amount > 0.72 ? [12, 28, 16] : 12);
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
    stopMotion();
    setWindAmount(0.52);
    if (reducedMotion) {
      nudgeReducedMotion(0.52);
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
      else stopMotion();
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.repeat) return;
    event.preventDefault();
    activate();
  };

  const carRotation = angle + 90;
  const widthValue = typeof width === "number" ? `${width}px` : width;
  const scale = dragging ? 1.08 : moving ? 1.03 : hover ? 1.04 : 1;
  const lift = dragging ? 12 + wind * 8 : hover ? 5 : 0;
  const windTurns = wind * 2.75;

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
      className="windup-car absolute select-none touch-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#f5efe2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#164f48]"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        width: widthValue,
        opacity: mounted ? 1 : 0,
        transform: `translate(-50%, calc(-50% - ${lift}px)) rotate(${carRotation}deg) scale(${mounted ? scale : 0.7})`,
        transformOrigin: "center",
        cursor: dragging ? "grabbing" : "grab",
        zIndex: dragging || moving ? Math.max(z, 70) : z,
        transition: reducedMotion
          ? "none"
          : dragging || moving
            ? "opacity 300ms, filter 160ms"
            : "top 420ms cubic-bezier(.2,.9,.2,1), left 420ms cubic-bezier(.2,.9,.2,1), transform 500ms cubic-bezier(.2,.8,.2,1), opacity 650ms, filter 250ms",
        filter:
          dragging || moving
            ? "drop-shadow(0 24px 18px rgba(0,0,0,.42))"
            : "drop-shadow(0 16px 12px rgba(0,0,0,.34))",
        willChange: dragging || moving ? "top, left, transform" : undefined,
      }}
    >
      <ToyPullFeedback
        distance={pull.distance}
        heading={pull.heading}
        parentRotation={carRotation}
        tension={wind}
        visible={dragging && wind > 0.01}
        showHint={!interacted && mounted}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-150"
        style={{
          opacity: dragging && wind > 0.02 ? 0.85 : 0,
          background: `conic-gradient(from ${windTurns}turn, rgba(245,239,226,.92), rgba(245,239,226,.12) ${30 + wind * 55}%, transparent 0)`,
          transform: `translate(-50%, -50%) rotate(${windTurns}turn) scale(${0.75 + wind * 0.45})`,
        }}
      />
      <img
        src={src}
        alt=""
        draggable={false}
        className={`windup-car-img pointer-events-none relative z-[2] block h-auto w-full object-contain ${dragging && wind > 0.02 ? "is-wound" : ""}`}
      />
    </div>
  );
}
