import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import sidequestHeart from "@/assets/sidequest-heart.png";
import sidequestReferenceBunny from "@/assets/sidequest-reference-bunny.png";
import sidequestRewardStar from "@/assets/sidequest-reward-star.png";
import { submitSidequestMeasurement } from "@/lib/api/sidequest.functions";

export const Route = createFileRoute("/sidequest")({
  head: () => ({
    meta: [
      { title: "Sidequest - Isaac Sohn" },
      {
        name: "description",
        content: "A mobile pixel quest hidden inside Isaac Sohn's portfolio.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Sidequest - Isaac Sohn" },
      {
        property: "og:description",
        content: "A mobile pixel quest hidden inside Isaac Sohn's portfolio.",
      },
    ],
  }),
  component: Sidequest,
});

/* ─── Pixel Icon sprites ─── */

type PixelIconName = "back" | "check" | "mail" | "pen" | "ruler" | "scissors" | "search" | "trophy";

const pixelIconSprites: Record<PixelIconName, string[]> = {
  back: ["..#....", ".##....", "#######", "#######", ".##....", "..#....", "......."],
  check: [".......", ".....##", "....##.", "#..##..", ".##....", "..#....", "......."],
  mail: ["#######", "#.....#", "#.#.#.#", "#..#..#", "#.....#", "#######", "......."],
  pen: ["....##.", "...###.", "..###..", ".###...", "###....", "##.....", "#......"],
  ruler: ["#######", "#.#.#.#", "#######", ".......", ".......", ".......", "......."],
  scissors: ["#...#..", ".#.#...", "..#....", ".#.#...", "#...#..", "..#....", "..#...."],
  search: [".####..", "#....#.", "#....#.", ".####..", "...##..", "....##.", ".....#."],
  trophy: [".#####.", "#.#.#.#", "#.#.#.#", ".###...", "..#....", ".###...", "#######"],
};

function PixelIcon({
  name,
  className = "",
  pixelSize = 3,
}: {
  name: PixelIconName;
  className?: string;
  pixelSize?: number;
}) {
  const sprite = pixelIconSprites[name];
  const width = Math.max(...sprite.map((row) => row.length));

  return (
    <span
      aria-hidden
      className={`inline-grid shrink-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(${width}, ${pixelSize}px)` }}
    >
      {sprite.flatMap((row, rowIndex) =>
        Array.from({ length: width }, (_, columnIndex) => {
          const pixel = row[columnIndex] ?? ".";

          return (
            <span
              key={`${name}-${rowIndex}-${columnIndex}`}
              style={{
                width: pixelSize,
                height: pixelSize,
                backgroundColor: pixel === "." ? "transparent" : "currentColor",
              }}
            />
          );
        }),
      )}
    </span>
  );
}

function PixelSpinner() {
  return (
    <span
      aria-hidden
      className="inline-grid h-5 w-5 shrink-0 animate-spin grid-cols-3 gap-[2px] text-[#54334f]"
    >
      {Array.from({ length: 9 }, (_, index) => (
        <span
          key={index}
          className={index === 4 ? "bg-transparent" : "h-[4px] w-[4px] bg-current"}
        />
      ))}
    </span>
  );
}

/* ─── Quest data ─── */

type Quest = {
  title: string;
  detail: string;
  hint?: string;
  clearText: string;
  icon: PixelIconName;
};

const quests: Quest[] = [
  {
    title: "Find paper and a ruler",
    detail: "Get one flat sheet and a ruler.",
    hint: "A ruler is best, but any length-measuring tool works.",
    clearText: "Supplies ready.",
    icon: "search",
  },
  {
    title: "Cut a 0.5-1 cm strip",
    detail: "Make it long enough to wrap.",
    clearText: "Strip ready.",
    icon: "scissors",
  },
  {
    title: "Wrap your left fourth finger",
    detail: "Keep it snug, not tight.",
    clearText: "Wrap set.",
    icon: "ruler",
  },
  {
    title: "Mark the overlap with a pen",
    detail: "Mark where the paper meets.",
    clearText: "Mark done.",
    icon: "pen",
  },
  {
    title: "Measure the marked strip",
    detail: "Use the ruler to read the millimeters.",
    hint: "If you already know the number, it is okay to move on and enter it.",
    clearText: "Measured.",
    icon: "ruler",
  },
  {
    title: "Enter the millimeter number",
    detail: "Type the number from the ruler.",
    clearText: "Number sent.",
    icon: "mail",
  },
  {
    title: "Quest Complete!",
    detail: "Thank you, Alyssa.",
    clearText: "Quest clear.",
    icon: "trophy",
  },
];

const INPUT_QUEST_INDEX = 5;
const SUCCESS_QUEST_INDEX = 6;

type SubmitState = "idle" | "sending" | "sent" | "error";
type RewardEvent = { message: string; stamp: number };
type MascotEvent = { message: string; stamp: number };
const MASCOT_EFFECT_MS = 1400;

/* ─── Mascot & scene data ─── */

type MascotMood = "idle" | "happy";
const mascotClearMessages = [
  "Ready!",
  "Good cut!",
  "Cozy!",
  "Marked!",
  "Measured!",
  "Sent!",
  "Clear!",
];

const propColors: Record<string, string> = {
  B: "#bf355e",
  C: "#64d3df",
  D: "#54334f",
  G: "#d8ffd8",
  M: "#c9f2eb",
  P: "#ff9fc8",
  W: "#ffffff",
  Y: "#ffe08a",
};

const propSprites = {
  tools: [
    "......................",
    "..BBBBBBB......BB.....",
    "..BWWWWWB.....BPPB....",
    "..BWWWWWB......BP.....",
    "..BWWWWWB.............",
    "..BWWWWWB.............",
    "..BBBBBBB.............",
    ".....BBBBBBBBBBBB.....",
    "....BYYYYYYYYYYB......",
    "....BYDYDYDYDYB.......",
    ".....BBBBBBBBB........",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
  strip: [
    "......................",
    "......................",
    "...BBBBBBBBBBBBBBBB...",
    "..BWWWWWWWWWWWWWWB...",
    "...BBBBBBBBBBBBBBBB...",
    "......................",
    ".............BBBB.....",
    "............BPPPPB....",
    ".............BBBB.....",
    "......................",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
  loop: [
    "......................",
    ".......BBBBBBBB.......",
    ".....BBWWWWWWBB.......",
    "....BWWBBBBWWWB.......",
    "....BWWB..BWWWB.......",
    "....BWWBBBBWWWB.......",
    ".....BBWWWWWWBB.......",
    ".......BBBBBBBB.......",
    "......................",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
  mark: [
    "......................",
    "....BBBBBBBBBBBB......",
    "...BPPPPPPPPPPB.......",
    "....BBBBBBBBBBBB......",
    ".............BB.......",
    "............BWWB......",
    "...........BWWB.......",
    "..........BWWB........",
    ".........BWWB.........",
    "........BWWB..........",
    "........BDB...........",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
  measure: [
    "......................",
    "..BBBBBBBBBBBBBBBBBB..",
    "..BYYYYYYYYYYYYYYYYB..",
    "..BYDYDYDYDYDYDYDYB..",
    "..BYYYYYYYYYYYYYYYYB..",
    "..BBBBBBBBBBBBBBBBBB..",
    ".....BBBBBBBBBBBB.....",
    "....BWWWWWWWWWWB......",
    ".....BBBBBBBBBB.......",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
  send: [
    "......................",
    "....BBBBBBBBBBBBBB....",
    "....BWWWWWWWWWWWB....",
    "....BWPWWWWWWWPWB....",
    "....BWWPWWWWWPWWB....",
    "....BWWWPWWWPWWWB....",
    "....BWWWWPPPWWWWB....",
    "....BBBBBBBBBBBBBB....",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
  trophy: [
    "......................",
    "......BBBBBBBBBB......",
    "....BBYYYYYYYYBB......",
    "...BYYBYYYYYYBYYB.....",
    "...BYYBYYYYYYBYYB.....",
    "....BBYYYYYYYYBB......",
    "......BBYYYYBB........",
    "........BYYB..........",
    "......BBBBBBBB........",
    ".....BYYYYYYYYB.......",
    ".....BBBBBBBBBB.......",
    ".................CCCC.",
    "....CCCCCCCCCCCCCCCC.",
  ],
} satisfies Record<string, string[]>;

type PropSpriteName = keyof typeof propSprites;

const rewardStarBursts = [
  {
    left: "-20px",
    top: "6px",
    size: "40px",
    x: "-22px",
    y: "-34px",
    rotate: "-14deg",
    delay: "0ms",
  },
  { left: "54px", top: "-20px", size: "48px", x: "0px", y: "-42px", rotate: "6deg", delay: "70ms" },
  {
    left: "128px",
    top: "10px",
    size: "38px",
    x: "24px",
    y: "-30px",
    rotate: "15deg",
    delay: "120ms",
  },
  {
    left: "8px",
    top: "74px",
    size: "30px",
    x: "-30px",
    y: "2px",
    rotate: "-10deg",
    delay: "170ms",
  },
  {
    left: "116px",
    top: "72px",
    size: "32px",
    x: "28px",
    y: "0px",
    rotate: "12deg",
    delay: "220ms",
  },
];
const fireworkStars = [
  { x: "16%", y: "24%", dx: "-28px", dy: "-28px", size: "34px", delay: "0ms", rotate: "-16deg" },
  { x: "16%", y: "24%", dx: "12px", dy: "-42px", size: "28px", delay: "110ms", rotate: "8deg" },
  { x: "16%", y: "24%", dx: "34px", dy: "-12px", size: "24px", delay: "220ms", rotate: "18deg" },
  { x: "78%", y: "23%", dx: "-34px", dy: "-18px", size: "28px", delay: "260ms", rotate: "-12deg" },
  { x: "78%", y: "23%", dx: "8px", dy: "-44px", size: "36px", delay: "360ms", rotate: "10deg" },
  { x: "78%", y: "23%", dx: "30px", dy: "8px", size: "24px", delay: "460ms", rotate: "18deg" },
  { x: "50%", y: "15%", dx: "-36px", dy: "-16px", size: "30px", delay: "560ms", rotate: "-14deg" },
  { x: "50%", y: "15%", dx: "0px", dy: "-42px", size: "40px", delay: "660ms", rotate: "6deg" },
  { x: "50%", y: "15%", dx: "36px", dy: "-16px", size: "30px", delay: "760ms", rotate: "14deg" },
];
const heartBalloons = [
  { left: "3%", size: "36px", delay: "80ms", duration: "9920ms", drift: "18px", sway: "-9deg" },
  { left: "10%", size: "72px", delay: "0ms", duration: "10000ms", drift: "-26px", sway: "7deg" },
  { left: "18%", size: "44px", delay: "620ms", duration: "9380ms", drift: "24px", sway: "-8deg" },
  { left: "26%", size: "92px", delay: "240ms", duration: "9760ms", drift: "-18px", sway: "6deg" },
  { left: "36%", size: "30px", delay: "900ms", duration: "9100ms", drift: "16px", sway: "-10deg" },
  { left: "43%", size: "58px", delay: "420ms", duration: "9580ms", drift: "-28px", sway: "9deg" },
  { left: "53%", size: "82px", delay: "110ms", duration: "9890ms", drift: "24px", sway: "-7deg" },
  { left: "62%", size: "38px", delay: "760ms", duration: "9240ms", drift: "-20px", sway: "8deg" },
  { left: "69%", size: "64px", delay: "330ms", duration: "9670ms", drift: "30px", sway: "-11deg" },
  { left: "79%", size: "46px", delay: "1010ms", duration: "8990ms", drift: "-14px", sway: "7deg" },
  { left: "87%", size: "76px", delay: "520ms", duration: "9480ms", drift: "18px", sway: "-6deg" },
  { left: "94%", size: "34px", delay: "1180ms", duration: "8820ms", drift: "-16px", sway: "10deg" },
  { left: "6%", size: "54px", delay: "1360ms", duration: "8640ms", drift: "28px", sway: "-7deg" },
  { left: "21%", size: "28px", delay: "1540ms", duration: "8460ms", drift: "-18px", sway: "9deg" },
  { left: "33%", size: "68px", delay: "1260ms", duration: "8740ms", drift: "20px", sway: "-8deg" },
  { left: "49%", size: "40px", delay: "1680ms", duration: "8320ms", drift: "-24px", sway: "6deg" },
  { left: "58%", size: "102px", delay: "980ms", duration: "9020ms", drift: "16px", sway: "-5deg" },
  { left: "73%", size: "32px", delay: "1460ms", duration: "8540ms", drift: "-18px", sway: "10deg" },
  { left: "82%", size: "56px", delay: "1640ms", duration: "8360ms", drift: "22px", sway: "-8deg" },
];

/* ─── Pixel rendering components ─── */

function PixelArt({
  sprite,
  colors,
  pixelSize = 4,
  className = "",
}: {
  sprite: string[];
  colors: Record<string, string>;
  pixelSize?: number;
  className?: string;
}) {
  const width = Math.max(...sprite.map((row) => row.length));

  return (
    <span
      aria-hidden
      className={`inline-grid shrink-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(${width}, ${pixelSize}px)` }}
    >
      {sprite.flatMap((row, rowIndex) =>
        Array.from({ length: width }, (_, columnIndex) => {
          const pixel = row[columnIndex] ?? ".";

          return (
            <span
              key={`${rowIndex}-${columnIndex}`}
              style={{
                width: pixelSize,
                height: pixelSize,
                backgroundColor: colors[pixel] ?? "transparent",
              }}
            />
          );
        }),
      )}
    </span>
  );
}

function PixelTreatBurst({ stamp }: { stamp: number }) {
  if (!stamp) return null;

  return (
    <div key={stamp} aria-hidden className="pointer-events-none absolute inset-0 z-20">
      {rewardStarBursts.map((star, index) => (
        <img
          key={`${stamp}-${index}`}
          src={sidequestRewardStar}
          alt=""
          draggable={false}
          className="sidequest-reward-star absolute"
          style={
            {
              left: star.left,
              top: star.top,
              width: star.size,
              "--star-delay": star.delay,
              "--star-x": star.x,
              "--star-y": star.y,
              "--star-rotate": star.rotate,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function PixelFireworks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {fireworkStars.map((star, index) => (
        <img
          key={index}
          src={sidequestRewardStar}
          alt=""
          draggable={false}
          className="sidequest-firework-star absolute"
          style={
            {
              left: star.x,
              top: star.y,
              width: star.size,
              "--firework-x": star.dx,
              "--firework-y": star.dy,
              "--firework-delay": star.delay,
              "--firework-rotate": star.rotate,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function PixelHeartBalloons({ stamp }: { stamp: number | null }) {
  if (!stamp) return null;

  return (
    <div key={stamp} className="sidequest-heart-overlay fixed inset-0">
      <div aria-hidden className="sidequest-heart-shade absolute inset-0" />
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {heartBalloons.map((heart, index) => (
          <img
            key={`${stamp}-${index}`}
            src={sidequestHeart}
            alt=""
            draggable={false}
            className="sidequest-heart-balloon absolute"
            style={
              {
                left: heart.left,
                width: heart.size,
                "--heart-delay": heart.delay,
                "--heart-duration": heart.duration,
                "--heart-drift": heart.drift,
                "--heart-sway": heart.sway,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <p role="status" aria-live="polite" className="sidequest-love-message">
        <span className="sidequest-love-type">I Love You, Alyssa❤</span>
      </p>
    </div>
  );
}

function PixelSparkle({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <span
      aria-hidden
      className={`absolute block h-3 w-3 bg-[#ffd86f] sidequest-sparkle ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

/* ─── Mascot ─── */

function PixelMascot({ mood = "idle" }: { mood?: MascotMood }) {
  return (
    <div
      className={`sidequest-reference-mascot ${
        mood === "happy" ? "sidequest-mascot-excited" : "sidequest-mascot-idle"
      }`}
    >
      <img src={sidequestReferenceBunny} alt="" aria-hidden draggable={false} />
    </div>
  );
}

/* ─── Quest prop sprite ─── */

function QuestProp({ activeQuest }: { activeQuest: number }) {
  let propName: PropSpriteName = "tools";

  if (activeQuest === SUCCESS_QUEST_INDEX) {
    propName = "trophy";
  } else if (activeQuest === INPUT_QUEST_INDEX) {
    propName = "send";
  } else if (activeQuest >= 4) {
    propName = "measure";
  } else if (activeQuest >= 3) {
    propName = "mark";
  } else if (activeQuest >= 2) {
    propName = "loop";
  } else if (activeQuest >= 1) {
    propName = "strip";
  }

  return (
    <div className="absolute right-3 top-3">
      <PixelArt sprite={propSprites[propName]} colors={propColors} pixelSize={3} />
    </div>
  );
}

/* ─── Kairosoft-style Scene Panel ─── */

function GameScene({
  activeQuest,
  rewardStamp,
  playEvent,
}: {
  activeQuest: number;
  rewardStamp: number;
  playEvent: MascotEvent | null;
}) {
  const isSuccess = activeQuest === SUCCESS_QUEST_INDEX;
  const isMascotEffectActive = Boolean(playEvent) || isSuccess;
  const mascotStamp = playEvent?.stamp ?? (isSuccess ? rewardStamp : 0);

  return (
    <div aria-label="Pixel quest scene" className="sq-panel relative h-40 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f8ff] via-[#fff5f8] to-[#c9f2eb]" />

      {/* Ground tiles — Kairosoft grass strip */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-[#7ec87e]" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[#5ba35b]" />
      <div
        className="absolute inset-x-0 bottom-[10px] h-[4px] opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #4a8f4a 0 4px, transparent 4px 8px)",
        }}
      />

      {/* Sparkles */}
      <PixelSparkle className="left-5 top-4 h-2 w-2 bg-[#ffc0ca]" delay={0} />
      <PixelSparkle className="right-16 top-5 h-2 w-2 bg-[#64d3df]" delay={500} />
      <PixelSparkle className="left-1/4 top-2 h-[6px] w-[6px] bg-[#ffe08a]" delay={1000} />
      <PixelSparkle className="right-1/4 top-8 h-[5px] w-[5px] bg-[#ff9fc8]" delay={1500} />

      {activeQuest === SUCCESS_QUEST_INDEX && <PixelFireworks />}

      {/* Mascot speech bubble */}
      {playEvent && (
        <div
          key={playEvent.stamp}
          role="status"
          aria-live="polite"
          className="sidequest-pop sq-pop-bubble sq-caption pointer-events-none absolute left-1/2 top-1 z-20 -translate-x-1/2 px-3 py-1"
        >
          {playEvent.message}
        </div>
      )}

      {/* Mascot */}
      <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2">
        <div className="relative">
          <PixelTreatBurst stamp={playEvent?.stamp ?? 0} />
          <span
            key={mascotStamp}
            className={`block ${isMascotEffectActive ? "sidequest-mascot-cheer" : ""}`}
          >
            <PixelMascot mood={isMascotEffectActive ? "happy" : "idle"} />
          </span>
        </div>
      </div>

      {/* Quest prop */}
      <QuestProp activeQuest={activeQuest} />
    </div>
  );
}

/* ─── Kairosoft-style HP Bar ─── */

function QuestProgressBar({ activeQuest, total }: { activeQuest: number; total: number }) {
  const progressPercent = useMemo(
    () => `${((activeQuest + 1) / total) * 100}%`,
    [activeQuest, total],
  );

  return (
    <div className="sq-panel p-3">
      {/* Top row: stage label & counter */}
      <div className="flex items-center justify-between gap-2">
        <span className="sq-chip sq-caption">Stage {String(activeQuest + 1).padStart(2, "0")}</span>
        <span className="sq-counter">
          {activeQuest + 1}/{total}
        </span>
      </div>

      {/* HP-style bar */}
      <div className="sq-progress-track mt-2">
        <div
          className="sq-hp-fill h-full transition-[width] duration-500 ease-out"
          style={{ width: progressPercent }}
        />
      </div>

      {/* Dot indicators */}
      <div
        className="mt-2 grid gap-1"
        aria-label="Quest progress"
        style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
      >
        {quests.map((quest, index) => {
          const isCleared = index < activeQuest;
          const isActive = index === activeQuest;

          return (
            <span
              key={quest.title}
              aria-label={`Stage ${index + 1}`}
              className={`sq-progress-step transition-all duration-300 ${
                isActive
                  ? "bg-[#ff9fc8] sidequest-dot-active"
                  : isCleared
                    ? "bg-[#64d3df]"
                    : "bg-[#3d2640]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ─── Kairosoft-style Intro Screen ─── */

function QuestIntro({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative z-10 flex flex-1 flex-col justify-center py-4">
      <div className="sq-panel relative overflow-hidden p-0">
        {/* Scene area */}
        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-[#e8f8ff] via-[#fff5f8] to-[#c9f2eb]">
          <div className="absolute inset-x-0 bottom-0 h-12 bg-[#7ec87e]" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-[#5ba35b]" />
          <PixelSparkle className="left-6 top-6 bg-[#ffc0ca]" delay={0} />
          <PixelSparkle className="right-8 top-8 bg-[#64d3df]" delay={600} />
          <PixelSparkle className="left-1/3 bottom-16 h-2 w-2 bg-[#ffe08a]" delay={1200} />
          <div className="relative z-10">
            <PixelMascot />
          </div>
        </div>

        {/* Dialog box */}
        <div className="sq-dialog mx-3 -mt-4 mb-4 relative z-10">
          <p className="sq-chip sq-chip-accent sq-caption">Side Quest</p>
          <h1 className="sq-title sq-title-lg mt-3">A tiny task appeared.</h1>
          <p className="sq-body sq-body-lg mt-2">
            Clear seven quick steps and send one millimeter number.
          </p>

          <button
            type="button"
            onClick={onStart}
            className="sq-btn sq-btn-primary sq-btn-start mt-5 w-full"
          >
            <PixelIcon name="check" className="text-[#54334f]" pixelSize={4} />
            <span>Start Quest</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Sidequest Component ─── */

function Sidequest() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeQuest, setActiveQuest] = useState(0);
  const [fingerCircumference, setFingerCircumference] = useState("");
  const [inputError, setInputError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [rewardEvent, setRewardEvent] = useState<RewardEvent | null>(null);
  const [playEvent, setPlayEvent] = useState<MascotEvent | null>(null);
  const [heartEventStamp, setHeartEventStamp] = useState<number | null>(null);
  const mascotEffectTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const active = quests[activeQuest];
  const isSubmitting = submitState === "sending";

  useEffect(() => {
    return () => {
      if (mascotEffectTimerRef.current) {
        window.clearTimeout(mascotEffectTimerRef.current);
      }
    };
  }, []);

  const clearMascotEffect = () => {
    if (mascotEffectTimerRef.current) {
      window.clearTimeout(mascotEffectTimerRef.current);
      mascotEffectTimerRef.current = null;
    }
    setPlayEvent(null);
  };

  const clearHeartEffect = () => {
    setHeartEventStamp(null);
  };

  const showHeartEffect = (stamp: number) => {
    setHeartEventStamp(stamp);
  };

  const showClearText = (message: string) => {
    const stamp = Date.now();
    setRewardEvent({ message, stamp });
    setPlayEvent({
      message: mascotClearMessages[activeQuest] ?? "Nice!",
      stamp,
    });
    if (mascotEffectTimerRef.current) {
      window.clearTimeout(mascotEffectTimerRef.current);
    }
    mascotEffectTimerRef.current = window.setTimeout(() => {
      setPlayEvent((current) => (current?.stamp === stamp ? null : current));
      mascotEffectTimerRef.current = null;
    }, MASCOT_EFFECT_MS);

    return stamp;
  };

  const unlockQuest = (nextQuest: number) => {
    setActiveQuest(nextQuest);
  };

  const goBack = () => {
    if (!hasStarted || isSubmitting) return;

    setInputError("");
    setRewardEvent(null);
    clearMascotEffect();
    clearHeartEffect();
    setSubmitState("idle");

    if (activeQuest === 0) {
      setHasStarted(false);
      return;
    }

    setActiveQuest((current) => current - 1);
  };

  const validateCircumference = () => {
    const trimmed = fingerCircumference.trim();
    const parsed = Number(trimmed);

    if (!trimmed || !Number.isFinite(parsed) || parsed <= 0 || parsed > 200) {
      setInputError("Enter a millimeter value from 1 to 200.");
      return null;
    }

    if (!/^\d{1,3}(\.\d{1,2})?$/.test(trimmed)) {
      setInputError("Use up to two decimal places.");
      return null;
    }

    setInputError("");
    return trimmed;
  };

  const completeQuest = async () => {
    if (activeQuest === SUCCESS_QUEST_INDEX) {
      return;
    }

    if (activeQuest !== INPUT_QUEST_INDEX) {
      showClearText(active.clearText);
      unlockQuest(activeQuest + 1);
      return;
    }

    const measurement = validateCircumference();
    if (!measurement) return;

    setSubmitState("sending");
    const result = await submitSidequestMeasurement({
      data: { fingerCircumference: measurement },
    }).catch(() => ({ ok: false as const, reason: "send_failed" as const }));

    if (result.ok) {
      setSubmitState("sent");
      const stamp = showClearText(quests[INPUT_QUEST_INDEX].clearText);
      showHeartEffect(stamp);
      unlockQuest(SUCCESS_QUEST_INDEX);
      return;
    }

    setSubmitState("error");
    setInputError(
      result.reason === "missing_config"
        ? "Email setup is missing. Check the Vercel environment variables."
        : "Email delivery failed. Try again in a moment.",
    );
  };

  return (
    <main className="sq-page min-h-dvh overflow-hidden font-sans text-[#54334f]">
      <PixelHeartBalloons stamp={heartEventStamp} />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-3 pb-3 pt-3">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#3a6b4e]" />
          {/* Pixel grass texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 4px, transparent 4px 8px), repeating-linear-gradient(180deg, rgba(0,0,0,0.06) 0 4px, transparent 4px 8px)",
            }}
          />
          {/* Floating sparkles */}
          <span
            className="absolute left-[10%] top-[15%] h-2 w-2 bg-[#ffe08a]/40 sidequest-sparkle"
            style={{ animationDelay: "200ms" }}
          />
          <span
            className="absolute left-[75%] top-[10%] h-2 w-2 bg-[#64d3df]/35 sidequest-sparkle"
            style={{ animationDelay: "900ms" }}
          />
          <span
            className="absolute left-[50%] top-[40%] h-[6px] w-[6px] bg-[#ff9fc8]/30 sidequest-sparkle"
            style={{ animationDelay: "1600ms" }}
          />
          <span
            className="absolute left-[25%] top-[65%] h-[5px] w-[5px] bg-[#fff9c9]/35 sidequest-sparkle"
            style={{ animationDelay: "2200ms" }}
          />
          <span
            className="absolute left-[82%] top-[55%] h-[7px] w-[7px] bg-[#c9f2eb]/40 sidequest-sparkle"
            style={{ animationDelay: "600ms" }}
          />
        </div>

        {/* Top bar — Kairosoft game header */}
        <header className="relative z-10 flex min-h-12 items-center justify-between gap-2">
          {hasStarted ? (
            <button
              type="button"
              onClick={goBack}
              disabled={isSubmitting}
              className="sq-btn sq-btn-header"
              aria-label={activeQuest === 0 ? "Back to intro" : "Previous stage"}
            >
              <PixelIcon name="back" className="text-[#54334f]" pixelSize={2} />
              <span>Back</span>
            </button>
          ) : (
            <div className="h-11 w-[94px]" aria-hidden />
          )}
          <div className="sq-header-title sq-caption px-3 py-2">Sidequest</div>
        </header>

        {!hasStarted ? <QuestIntro onStart={() => setHasStarted(true)} /> : null}

        {hasStarted ? (
          <section className="relative z-10 mt-3 flex flex-1 flex-col gap-3">
            {/* Progress panel */}
            <QuestProgressBar activeQuest={activeQuest} total={quests.length} />

            {/* Scene panel */}
            <GameScene
              activeQuest={activeQuest}
              rewardStamp={rewardEvent?.stamp ?? 0}
              playEvent={playEvent}
            />

            {/* Quest dialog panel */}
            <div className="sq-dialog flex-1">
              {/* Icon + title row */}
              <div className="flex items-start gap-3">
                <div className="sq-icon-tile">
                  <PixelIcon name={active.icon} className="text-[#54334f]" pixelSize={4} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="sq-title">{active.title}</h2>
                  <p className="sq-body mt-1">{active.detail}</p>
                </div>
              </div>

              {active.hint && <p className="sq-info sq-note mt-3 font-semibold">{active.hint}</p>}

              {/* Reward message */}
              {rewardEvent &&
                activeQuest !== INPUT_QUEST_INDEX &&
                activeQuest !== SUCCESS_QUEST_INDEX && (
                  <p
                    key={rewardEvent.stamp}
                    role="status"
                    aria-live="polite"
                    className="sq-reward sq-caption mt-3"
                  >
                    {rewardEvent.message}
                  </p>
                )}

              {/* Input field */}
              {activeQuest === INPUT_QUEST_INDEX && (
                <div className="mt-3">
                  <label htmlFor="fingerCircumference" className="sq-caption block text-[#54334f]">
                    Finger circumference
                  </label>
                  <div className="sq-input-shell mt-2">
                    <input
                      id="fingerCircumference"
                      name="fingerCircumference"
                      type="number"
                      min="1"
                      max="200"
                      step="0.1"
                      inputMode="decimal"
                      value={fingerCircumference}
                      onChange={(event) => {
                        setFingerCircumference(event.target.value);
                        if (inputError) setInputError("");
                      }}
                      className="sq-input"
                      aria-describedby={inputError ? "fingerCircumference-error" : undefined}
                    />
                    <span className="sq-unit">mm</span>
                  </div>
                  {inputError && (
                    <p id="fingerCircumference-error" className="sq-error mt-2" role="alert">
                      {inputError}
                    </p>
                  )}
                </div>
              )}

              {/* Success state */}
              {activeQuest === SUCCESS_QUEST_INDEX && (
                <div className="sq-success sq-success-quest mt-4">
                  <div className="flex items-center gap-3">
                    <div className="sq-success-medal">
                      <PixelIcon name="trophy" className="text-[#173d29]" pixelSize={4} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="sq-caption text-[#2a7a3a]">Quest Complete</p>
                      <p className="sq-success-title">Thank you, Alyssa.</p>
                      <p className="sq-body mt-1 text-[#38664a]">Your number has been sent.</p>
                    </div>
                    <img
                      src={sidequestHeart}
                      alt=""
                      aria-hidden
                      draggable={false}
                      className="sq-success-heart"
                    />
                  </div>
                  <div className="sq-success-badges mt-3">
                    <span className="sq-caption">Mail Sent</span>
                    <span className="sq-caption">Quest Clear</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : null}

        {/* Sticky bottom action button */}
        {hasStarted && activeQuest !== SUCCESS_QUEST_INDEX ? (
          <div className="sq-action-bar relative z-10 sticky bottom-0 -mx-3 mt-3 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2">
            <button
              type="button"
              onClick={completeQuest}
              disabled={isSubmitting}
              className="sq-btn sq-btn-primary sq-btn-action w-full"
            >
              {isSubmitting ? (
                <PixelSpinner />
              ) : (
                <PixelIcon name="check" className="text-[#54334f]" pixelSize={3} />
              )}
              <span>
                {isSubmitting ? "Sending" : activeQuest === INPUT_QUEST_INDEX ? "Send" : "Done"}
              </span>
            </button>
            {submitState === "error" && !inputError && (
              <p className="sq-action-error mt-2" role="alert">
                Email delivery failed. Try again.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </main>
  );
}
