import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MatLayout } from "@/components/MatLayout";
import { DraggablePolaroid } from "@/components/DraggablePolaroid";
import { WindupAirplane } from "@/components/WindupAirplane";
import { WindupCar } from "@/components/WindupCar";
import airplane from "@/assets/airplane.png";
import carboard from "@/assets/carboard.png";
import cross from "@/assets/cross.png";
import crossShadow from "@/assets/crossshadow.png";
import pushpins from "@/assets/pushpins.png";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isaac Sohn - Multi-disciplinary Creative" },
      {
        name: "description",
        content:
          "Portfolio of Isaac Sohn - web design, app design, visual artwork, and creative direction.",
      },
      { property: "og:title", content: "Isaac Sohn" },
      {
        property: "og:description",
        content: "Web design, app design, visual artwork, and creative direction.",
      },
    ],
  }),
  component: Index,
});

const polaroids = [
  { src: photo1, alt: "Portrait", top: 9, left: 25, width: 220, rotate: -6 },
  { src: photo2, alt: "Car at storefront", top: 10, left: 66, width: 220, rotate: 7 },
  { src: photo3, alt: "Garage meet", top: 60, left: 22, width: 210, rotate: -9 },
  { src: photo4, alt: "Desk setup", top: 59, left: 64, width: 220, rotate: 5 },
];

function CrossRelic({ onTrigger }: { onTrigger: () => void }) {
  return (
    <button
      type="button"
      data-no-pan
      aria-label="Trigger cross animation"
      onClick={(event) => {
        event.stopPropagation();
        onTrigger();
      }}
      className="cross-relic absolute left-[86%] top-[36%] z-[24] h-[112px] w-[112px] select-none"
    >
      <img
        src={crossShadow}
        alt=""
        aria-hidden
        draggable={false}
        className="cross-relic-shadow pointer-events-none absolute left-1/2 top-1/2 h-auto w-[250px] max-w-none"
      />
      <img
        src={cross}
        alt=""
        aria-hidden
        draggable={false}
        className="cross-relic-cross pointer-events-none absolute left-1/2 top-1/2 h-auto w-[250px] max-w-none"
      />
    </button>
  );
}

function BoardDimEvent({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 3400);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="cross-board-dim"
      aria-hidden
      style={{
        left: "-220px",
        right: "-220px",
        top: "-264px",
        bottom: "-220px",
      }}
    />
  );
}

function Index() {
  const [tearEvent, setTearEvent] = useState({ run: 0, targetIndex: 0 });
  const [dimRun, setDimRun] = useState(0);

  const triggerCrossEvent = () => {
    setTearEvent((current) => {
      let targetIndex = Math.floor(Math.random() * polaroids.length);

      if (polaroids.length > 1 && targetIndex === current.targetIndex) {
        targetIndex =
          (targetIndex + 1 + Math.floor(Math.random() * (polaroids.length - 1))) % polaroids.length;
      }

      return { run: current.run + 1, targetIndex };
    });
    setDimRun((current) => current + 1);
  };

  return (
    <MatLayout>
      {polaroids.map((p, i) => (
        <DraggablePolaroid
          key={i}
          {...p}
          z={i + 1}
          delay={i * 120}
          tearRun={i === tearEvent.targetIndex ? tearEvent.run : 0}
        />
      ))}

      <WindupCar
        src={carboard}
        alt="Wind-up toy car"
        top={57}
        left={76}
        width={145}
        heading={132}
        z={22}
        delay={420}
      />

      <WindupAirplane
        src={airplane}
        alt="Wind-up toy airplane"
        top={31}
        left={34}
        width={150}
        heading={-38}
        z={23}
        delay={520}
      />

      <CrossRelic onTrigger={triggerCrossEvent} />
      {dimRun > 0 && <BoardDimEvent key={dimRun} onDone={() => setDimRun(0)} />}

      <img
        src={pushpins}
        alt=""
        aria-hidden
        width={140}
        height={140}
        loading="lazy"
        className="pin-wobble pointer-events-none absolute right-[20%] top-[48%] w-[90px] drop-shadow-[0_18px_12px_rgba(0,0,0,0.4)]"
      />

      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center text-center">
        <h1
          className="title-in font-serif text-[clamp(3rem,9vw,8rem)] font-medium italic leading-none text-[#f5efe2]"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.35)" }}
        >
          Isaac Sohn
        </h1>

        <Link
          to="/work"
          className="pointer-events-auto group relative mt-6 inline-flex items-center justify-center px-8 py-3 font-serif text-2xl italic tracking-wide text-[#f5efe2] transition-all duration-300 hover:scale-110 hover:-rotate-2"
        >
          <svg
            viewBox="0 0 220 70"
            className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:rotate-3"
            preserveAspectRatio="none"
            aria-hidden
          >
            <ellipse
              cx="110"
              cy="35"
              rx="100"
              ry="26"
              fill="none"
              stroke="#f5efe2"
              strokeWidth="2"
              strokeLinecap="round"
              transform="rotate(-2 110 35)"
            />
            <ellipse
              cx="112"
              cy="36"
              rx="98"
              ry="24"
              fill="none"
              stroke="#f5efe2"
              strokeWidth="1.5"
              opacity="0.7"
              transform="rotate(1 112 36)"
            />
          </svg>
          <span className="relative tracking-[0.15em]">VIEW WORK</span>
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:right-[-28px] group-hover:opacity-100">
            -&gt;
          </span>
        </Link>
      </div>
    </MatLayout>
  );
}
