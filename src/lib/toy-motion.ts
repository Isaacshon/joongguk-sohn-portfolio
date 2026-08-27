export type ElasticPull = {
  offsetX: number;
  offsetY: number;
  distance: number;
  rawDistance: number;
  tension: number;
  launchHeading: number;
};

export type HapticPattern = number | number[];

const PULL_DEAD_ZONE = 8;

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const getMaxPullDistance = (width: number, height: number) =>
  clamp(Math.min(width, height) * 0.28, 72, 132);

export function calculateElasticPull(dx: number, dy: number, maxPull: number): ElasticPull {
  const rawDistance = Math.hypot(dx, dy);

  if (rawDistance < 0.001) {
    return {
      offsetX: 0,
      offsetY: 0,
      distance: 0,
      rawDistance: 0,
      tension: 0,
      launchHeading: 0,
    };
  }

  const tension = clamp((rawDistance - PULL_DEAD_ZONE) / (maxPull - PULL_DEAD_ZONE), 0, 1);
  const resistance = 0.62 - tension * 0.12;
  const distance = Math.min(maxPull * 0.58, rawDistance * resistance);
  const ratio = distance / rawDistance;

  return {
    offsetX: dx * ratio,
    offsetY: dy * ratio,
    distance,
    rawDistance,
    tension,
    launchHeading: (Math.atan2(-dy, -dx) * 180) / Math.PI,
  };
}

export const getLaunchPower = (tension: number) => 1 - Math.pow(1 - clamp(tension, 0, 1), 2.2);

export const getTensionStep = (tension: number) => Math.min(4, Math.floor(tension * 4.001));

export function triggerHaptic(pattern: HapticPattern) {
  if (
    typeof navigator === "undefined" ||
    !("vibrate" in navigator) ||
    (navigator.userActivation && !navigator.userActivation.hasBeenActive)
  ) {
    return false;
  }

  try {
    return navigator.vibrate(pattern);
  } catch {
    return false;
  }
}

export function cancelHaptic() {
  if (typeof navigator === "undefined" || !("vibrate" in navigator)) return;

  try {
    navigator.vibrate(0);
  } catch {
    // Vibration is progressive enhancement. Unsupported browsers quietly keep the visual feedback.
  }
}
