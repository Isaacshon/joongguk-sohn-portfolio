import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type CSSProperties } from "react";

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
    title: "Cut a 0.5 mm strip",
    detail: "Make it long and thin.",
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

/* ─── Mascot & scene data ─── */

const spriteColors: Record<string, string> = {
  A: "#64d3df",
  B: "#bf355e",
  C: "#ff7f94",
  D: "#ff9aad",
  E: "#4b0908",
  H: "#ffe4e9",
  L: "#fff8f5",
  M: "#c9f2eb",
  N: "#7c1824",
  P: "#ffc0ca",
  T: "#2f829f",
  W: "#ffffff",
};

const mascotSprites = {
  idle: [
    "........BBB.....BBB........",
    ".......BHHB.....BHHB.......",
    ".......BHPB.....BPHB.......",
    ".......BHPB.....BPHB.......",
    "......BBPPB...BPPBB......",
    ".....BPPPPBBBBBPPPPB.....",
    "....BPPPPPPPPPPPPPPPB....",
    "...BPPHPPPPPPPPPPHPPB...",
    "..BPPHPEEPPPPPEEPHPPB..",
    "..BPPPPEPPPPPPPPEPPPB..",
    "..BPPPCPPPNNPPPCPPPB..",
    "...BPPPCPPDDPPCPPPB...",
    "....BPPPPPPPPPPPPPB....",
    ".....BBPPPPPPPPPBB.....",
    ".....TTBBPPPPPBBTT.....",
    "....TTAAABWWWBAAATT....",
    "...TTAWWAAWWWAAWWATT...",
    "..TTAAAMAAWWAAMAAATT..",
    "...TTTMMMMMMMMMMTTT...",
    "....TTTTTTTTTTTTTT....",
  ],
  happy: [
    "........BBB.....BBB........",
    ".......BHHB.....BHHB.......",
    ".......BHPB.....BPHB.......",
    ".......BHPB.....BPHB.......",
    "......BBPPB...BPPBB......",
    ".....BPPPPBBBBBPPPPB.....",
    "....BPPPPPPPPPPPPPPPB....",
    "...BPPHPPPPPPPPPPHPPB...",
    "..BPPHPBBPPPPPBBPHPPB..",
    "..BPPPPPPPPPPPPPPPPPB..",
    "..BPPPCPPBNNBPPCPPPB..",
    "...BPPPCPPDDPPCPPPB...",
    "....BPPPPPPPPPPPPPB....",
    ".....BBPPPPPPPPPBB.....",
    ".....TTBBPPPPPBBTT.....",
    "....TTAAABWWWBAAATT....",
    "...TTAWWAAWWWAAWWATT...",
    "..TTAAAMAAWWAAMAAATT..",
    "...TTTMMMMMMMMMMTTT...",
    "....TTTTTTTTTTTTTT....",
  ],
};
type MascotMood = keyof typeof mascotSprites;
const mascotPixelSize = 5;
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

const treatColors: Record<string, string> = {
  B: "#bf355e",
  G: "#8fe88a",
  P: "#ff9fc8",
  W: "#fff9c9",
  Y: "#ffe08a",
};
const treatSprites = [
  ["..G.", ".GYY", "GYYB", ".BB."],
  [".PP.", "PWWP", ".PP.", "...."],
  [".Y..", "YYY.", ".Y..", "...."],
];
const fireworkDots = [
  { x: "18%", y: "22%", dx: "-28px", dy: "-22px", color: "#ff9fc8", delay: "0ms" },
  { x: "18%", y: "22%", dx: "0px", dy: "-34px", color: "#ffe08a", delay: "80ms" },
  { x: "18%", y: "22%", dx: "26px", dy: "-20px", color: "#64d3df", delay: "130ms" },
  { x: "18%", y: "22%", dx: "-22px", dy: "18px", color: "#fff9c9", delay: "180ms" },
  { x: "18%", y: "22%", dx: "24px", dy: "20px", color: "#ff7f94", delay: "230ms" },
  { x: "79%", y: "25%", dx: "-24px", dy: "-26px", color: "#64d3df", delay: "260ms" },
  { x: "79%", y: "25%", dx: "8px", dy: "-36px", color: "#fff9c9", delay: "310ms" },
  { x: "79%", y: "25%", dx: "30px", dy: "-12px", color: "#ff9fc8", delay: "360ms" },
  { x: "79%", y: "25%", dx: "-28px", dy: "20px", color: "#ffe08a", delay: "410ms" },
  { x: "79%", y: "25%", dx: "22px", dy: "24px", color: "#64d3df", delay: "460ms" },
  { x: "50%", y: "15%", dx: "-30px", dy: "-14px", color: "#ff7f94", delay: "520ms" },
  { x: "50%", y: "15%", dx: "0px", dy: "-32px", color: "#ffe08a", delay: "580ms" },
  { x: "50%", y: "15%", dx: "30px", dy: "-14px", color: "#64d3df", delay: "640ms" },
  { x: "50%", y: "15%", dx: "-18px", dy: "22px", color: "#fff9c9", delay: "700ms" },
  { x: "50%", y: "15%", dx: "18px", dy: "22px", color: "#ff9fc8", delay: "760ms" },
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
      {treatSprites.map((sprite, index) => (
        <span
          key={index}
          className="sidequest-treat absolute"
          style={
            {
              left: `${26 + index * 24}%`,
              top: `${18 + (index % 2) * 10}%`,
              "--treat-delay": `${index * 90}ms`,
            } as CSSProperties
          }
        >
          <PixelArt sprite={sprite} colors={treatColors} pixelSize={4} />
        </span>
      ))}
    </div>
  );
}

function PixelFireworks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {fireworkDots.map((dot, index) => (
        <span
          key={index}
          className="sidequest-firework-dot absolute"
          style={
            {
              left: dot.x,
              top: dot.y,
              color: dot.color,
              backgroundColor: dot.color,
              "--firework-x": dot.dx,
              "--firework-y": dot.dy,
              "--firework-delay": dot.delay,
            } as CSSProperties
          }
        />
      ))}
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
  const spriteRows = mascotSprites[mood];
  const width = Math.max(...spriteRows.map((row) => row.length));

  return (
    <div className={mood === "happy" ? "sidequest-mascot-excited" : "sidequest-mascot-idle"}>
      <div
        aria-hidden
        className="grid drop-shadow-[4px_5px_0_rgba(191,53,94,.18)]"
        style={{ gridTemplateColumns: `repeat(${width}, ${mascotPixelSize}px)` }}
      >
        {spriteRows.flatMap((row, rowIndex) =>
          Array.from({ length: width }, (_, columnIndex) => {
            const pixel = row[columnIndex] ?? ".";

            return (
              <span
                key={`${rowIndex}-${columnIndex}`}
                style={{
                  width: mascotPixelSize,
                  height: mascotPixelSize,
                  backgroundColor: spriteColors[pixel] ?? "transparent",
                  opacity: pixel === "." ? 0 : 1,
                }}
              />
            );
          }),
        )}
      </div>
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
  const mascotStamp = Math.max(rewardStamp, playEvent?.stamp ?? 0);
  const isCelebrating = rewardStamp > 0 || activeQuest === SUCCESS_QUEST_INDEX;

  return (
    <div
      aria-label="Pixel quest scene"
      className="sq-panel relative h-40 overflow-hidden"
    >
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
          className="sidequest-pop pointer-events-none absolute left-1/2 top-1 z-20 -translate-x-1/2 rounded-lg border-[3px] border-[#54334f] bg-[#fff9c9] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-wider text-[#bf355e] shadow-[2px_3px_0_rgba(84,51,79,.3)]"
        >
          {playEvent.message}
        </div>
      )}

      {/* Mascot */}
      <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2">
        <div className="relative">
          <PixelTreatBurst stamp={rewardStamp} />
          <span
            key={mascotStamp}
            className={`block ${isCelebrating ? "sidequest-mascot-cheer" : ""}`}
          >
            <PixelMascot mood={isCelebrating ? "happy" : "idle"} />
          </span>
        </div>
      </div>

      {/* Quest prop */}
      <QuestProp activeQuest={activeQuest} />
    </div>
  );
}

/* ─── Kairosoft-style HP Bar ─── */

function QuestProgressBar({
  activeQuest,
  total,
}: {
  activeQuest: number;
  total: number;
}) {
  const progressPercent = useMemo(
    () => `${((activeQuest + 1) / total) * 100}%`,
    [activeQuest, total],
  );

  return (
    <div className="sq-panel p-3">
      {/* Top row: stage label & counter */}
      <div className="flex items-center justify-between gap-2">
        <span className="rounded border-2 border-[#54334f] bg-[#ffe08a] px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest text-[#54334f]">
          Stage {String(activeQuest + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[16px] font-black leading-none text-[#bf355e]">
          {activeQuest + 1}/{total}
        </span>
      </div>

      {/* HP-style bar */}
      <div className="mt-2 h-5 overflow-hidden rounded-full border-[3px] border-[#54334f] bg-[#2a1a2e]">
        <div
          className="sq-hp-fill h-full rounded-full transition-[width] duration-500 ease-out"
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
              className={`h-[10px] rounded-sm border-2 border-[#54334f] transition-all duration-300 ${
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
          <p className="rounded border-2 border-[#bf355e] bg-[#bf355e] px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest text-white inline-block">
            Side Quest
          </p>
          <h1 className="mt-2 text-[26px] font-black leading-[1.1] text-[#54334f]">
            A tiny task appeared.
          </h1>
          <p className="mt-2 text-[14px] font-semibold leading-[1.5] text-[#5f4a59]">
            Clear seven quick steps and send one millimeter number.
          </p>

          <button
            type="button"
            onClick={onStart}
            className="sq-btn sq-btn-primary mt-4 w-full"
          >
            <PixelIcon name="check" className="text-[#54334f]" pixelSize={3} />
            Start Quest
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

  const active = quests[activeQuest];
  const isSubmitting = submitState === "sending";

  const showClearText = (message: string) => {
    const stamp = Date.now();
    setRewardEvent({ message, stamp });
    setPlayEvent({
      message: mascotClearMessages[activeQuest] ?? "Nice!",
      stamp,
    });
  };

  const unlockQuest = (nextQuest: number) => {
    setActiveQuest(nextQuest);
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
      showClearText(quests[INPUT_QUEST_INDEX].clearText);
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
          <span className="absolute left-[10%] top-[15%] h-2 w-2 rounded-sm bg-[#ffe08a]/40 sidequest-sparkle" style={{ animationDelay: "200ms" }} />
          <span className="absolute left-[75%] top-[10%] h-2 w-2 rounded-sm bg-[#64d3df]/35 sidequest-sparkle" style={{ animationDelay: "900ms" }} />
          <span className="absolute left-[50%] top-[40%] h-[6px] w-[6px] rounded-sm bg-[#ff9fc8]/30 sidequest-sparkle" style={{ animationDelay: "1600ms" }} />
          <span className="absolute left-[25%] top-[65%] h-[5px] w-[5px] rounded-sm bg-[#fff9c9]/35 sidequest-sparkle" style={{ animationDelay: "2200ms" }} />
          <span className="absolute left-[82%] top-[55%] h-[7px] w-[7px] rounded-sm bg-[#c9f2eb]/40 sidequest-sparkle" style={{ animationDelay: "600ms" }} />
        </div>

        {/* Top bar — Kairosoft game header */}
        <header className="relative z-10 flex min-h-10 items-center justify-between gap-2">
          <Link
            to="/"
            className="sq-btn inline-flex h-9 items-center gap-1.5 px-2.5 text-[11px]"
          >
            <PixelIcon name="back" className="text-[#54334f]" pixelSize={2} />
            Back
          </Link>
          <div className="rounded-lg border-[3px] border-[#54334f] bg-[#bf355e] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-widest text-white shadow-[2px_3px_0_rgba(0,0,0,.25)]">
            Sidequest
          </div>
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[3px] border-[#54334f] bg-[#ffe08a] shadow-[2px_2px_0_rgba(84,51,79,.3)]">
                  <PixelIcon name={active.icon} className="text-[#54334f]" pixelSize={3} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[20px] font-black leading-[1.15] text-[#54334f]">
                    {active.title}
                  </h2>
                  <p className="mt-1 text-[13px] font-semibold leading-[1.5] text-[#5f4a59]">
                    {active.detail}
                  </p>
                </div>
              </div>

              {active.hint && (
                <p className="mt-2 rounded border-2 border-[#d4c8d2] bg-[#f5f0f4] px-2 py-1.5 text-[11px] font-semibold leading-[1.4] text-[#9a8498]">
                  💡 {active.hint}
                </p>
              )}

              {/* Reward message */}
              {rewardEvent &&
                activeQuest !== INPUT_QUEST_INDEX &&
                activeQuest !== SUCCESS_QUEST_INDEX && (
                  <p
                    key={rewardEvent.stamp}
                    role="status"
                    aria-live="polite"
                    className="mt-3 rounded-lg border-[3px] border-[#54334f] bg-white px-3 py-2 font-mono text-[12px] font-black uppercase tracking-wider text-[#bf355e] shadow-[2px_2px_0_rgba(84,51,79,.2)]"
                  >
                    ✨ {rewardEvent.message}
                  </p>
                )}

              {/* Input field */}
              {activeQuest === INPUT_QUEST_INDEX && (
                <div className="mt-3">
                  <label
                    htmlFor="fingerCircumference"
                    className="block font-mono text-[11px] font-black uppercase tracking-wider text-[#54334f]"
                  >
                    Finger circumference
                  </label>
                  <div className="mt-1.5 flex items-center overflow-hidden rounded-lg border-[3px] border-[#54334f] bg-[#fff9dc] shadow-[2px_2px_0_rgba(84,51,79,.25)] focus-within:border-[#ff78b4] focus-within:ring-2 focus-within:ring-[#ff78b4]/30">
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
                      className="h-11 min-w-0 flex-1 bg-transparent px-3 text-[22px] font-black text-[#54334f] outline-none"
                      aria-describedby={inputError ? "fingerCircumference-error" : undefined}
                    />
                    <span className="pr-3 text-[14px] font-black text-[#6f5a1c]">mm</span>
                  </div>
                  {inputError && (
                    <p
                      id="fingerCircumference-error"
                      className="mt-2 rounded-lg border-[3px] border-[#d44] bg-[#ffe0d4] px-3 py-2 text-[12px] font-black text-[#982514] shadow-[2px_2px_0_rgba(84,51,79,.25)]"
                      role="alert"
                    >
                      {inputError}
                    </p>
                  )}
                </div>
              )}

              {/* Success state */}
              {activeQuest === SUCCESS_QUEST_INDEX && (
                <div className="mt-4 flex items-center gap-2.5 rounded-lg border-[3px] border-[#2a7a3a] bg-[#d8ffd8] px-3 py-2.5 shadow-[2px_2px_0_rgba(30,80,40,.25)]">
                  <PixelIcon name="trophy" className="text-[#173d29]" pixelSize={3} />
                  <p className="text-[13px] font-black uppercase leading-snug text-[#173d29]">
                    Sent. Thank you, Alyssa.
                  </p>
                </div>
              )}
            </div>
          </section>
        ) : null}

        {/* Sticky bottom action button */}
        {hasStarted && activeQuest !== SUCCESS_QUEST_INDEX ? (
          <div className="relative z-10 sticky bottom-0 -mx-3 mt-3 bg-[#3a6b4e]/90 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-sm">
            <button
              type="button"
              onClick={completeQuest}
              disabled={isSubmitting}
              className="sq-btn sq-btn-primary w-full h-12"
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
              <p
                className="mt-2 text-center text-[12px] font-bold text-[#ffb0a0]"
                role="alert"
              >
                Email delivery failed. Try again.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </main>
  );
}
