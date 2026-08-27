type Props = {
  distance: number;
  heading: number;
  parentRotation: number;
  tension: number;
  visible: boolean;
  showHint: boolean;
};

export function ToyPullFeedback({
  distance,
  heading,
  parentRotation,
  tension,
  visible,
  showHint,
}: Props) {
  return (
    <>
      <span
        aria-hidden
        className="toy-pull-tether pointer-events-none absolute left-1/2 top-1/2"
        style={{
          width: `${distance}px`,
          opacity: visible ? 0.28 + tension * 0.58 : 0,
          transform: `translateY(-50%) rotate(${heading - parentRotation}deg)`,
        }}
      />
      <span
        aria-hidden
        className={`toy-gesture-hint pointer-events-none absolute ${showHint ? "" : "is-hidden"}`}
        style={{ transform: `translate(-50%, 0) rotate(${-parentRotation}deg)` }}
      >
        pull · release
      </span>
    </>
  );
}
