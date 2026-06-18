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

const MEASURE_QUEST_INDEX = 4;
const INPUT_QUEST_INDEX = 5;
const SUCCESS_QUEST_INDEX = 6;

type SubmitState = "idle" | "sending" | "sent" | "error";
type RewardEvent = {
  message: string;
  stamp: number;
};
type MascotEvent = {
  message: string;
  stamp: number;
};

const questSceneLabels = ["Tools", "Cut", "Loop", "Mark", "Measure", "Send", "Done"];
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

function PixelSparkle({ className }: { className: string }) {
  return <span aria-hidden className={`absolute block h-3 w-3 bg-[#ffd86f] ${className}`} />;
}

function PixelMascot({ mood = "idle" }: { mood?: MascotMood }) {
  const spriteRows = mascotSprites[mood];
  const width = Math.max(...spriteRows.map((row) => row.length));
  const sprite = (
    <div
      aria-hidden
      className="grid drop-shadow-[5px_7px_0_rgba(191,53,94,.18)]"
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
  );

  return (
    <div className={mood === "happy" ? "sidequest-mascot-excited" : "sidequest-mascot-idle"}>
      {sprite}
    </div>
  );
}

function QuestProp({ activeQuest }: { activeQuest: number }) {
  let propName: PropSpriteName = "tools";

  if (activeQuest === SUCCESS_QUEST_INDEX) {
    propName = "trophy";
  } else if (activeQuest === INPUT_QUEST_INDEX) {
    propName = "send";
  } else if (activeQuest >= MEASURE_QUEST_INDEX) {
    propName = "measure";
  } else if (activeQuest >= 3) {
    propName = "mark";
  } else if (activeQuest >= 2) {
    propName = "loop";
  } else if (activeQuest >= 1) {
    propName = "strip";
  }

  return (
    <div className="absolute right-3 top-4">
      <PixelArt sprite={propSprites[propName]} colors={propColors} pixelSize={4} />
    </div>
  );
}

function CuteQuestScene({
  activeQuest,
  rewardStamp,
  playEvent,
}: {
  activeQuest: number;
  rewardStamp: number;
  playEvent: MascotEvent | null;
}) {
  const sceneLabel = questSceneLabels[activeQuest] ?? "Quest";
  const mascotStamp = Math.max(rewardStamp, playEvent?.stamp ?? 0);
  const isCelebrating = rewardStamp > 0 || activeQuest === SUCCESS_QUEST_INDEX;

  return (
    <div
      aria-label="Cute pixel quest scene"
      className="relative mt-4 h-44 overflow-hidden border-4 border-[#bf355e] bg-white shadow-[6px_6px_0_#64d3df]"
    >
      <div className="absolute inset-x-0 bottom-0 h-11 bg-[#c9f2eb]" />
      <div className="absolute bottom-0 left-0 h-4 w-full bg-[#2f829f]" />

      <PixelSparkle className="left-6 top-6 bg-[#ffc0ca] shadow-[18px_14px_0_#fff9c9]" />
      <PixelSparkle className="right-20 top-7 bg-[#64d3df] shadow-[16px_18px_0_#ffc0ca]" />
      <PixelSparkle className="bottom-14 left-8 bg-[#fff9c9]" />
      {activeQuest === SUCCESS_QUEST_INDEX && <PixelFireworks />}

      {playEvent && (
        <div
          key={playEvent.stamp}
          role="status"
          aria-live="polite"
          className="sidequest-pop pointer-events-none absolute left-1/2 top-2 z-20 -translate-x-1/2 border-2 border-[#54334f] bg-[#fff9c9] px-3 py-1 font-mono text-[12px] font-black uppercase tracking-[0.08em] text-[#bf355e] shadow-[3px_3px_0_rgba(84,51,79,.32)]"
        >
          {playEvent.message}
        </div>
      )}

      <div className="absolute left-1/2 top-9 z-10 -translate-x-1/2">
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

      <QuestProp activeQuest={activeQuest} />

      <div className="absolute bottom-4 left-4 border-[3px] border-[#bf355e] bg-white px-2 py-1 font-mono text-[11px] font-black uppercase tracking-[0.1em] text-[#bf355e] shadow-[3px_3px_0_#64d3df]">
        {sceneLabel}
      </div>
    </div>
  );
}

function QuestIntro({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative z-10 flex min-h-[calc(100dvh-5rem)] flex-col justify-center py-5">
      <div className="relative overflow-hidden border-4 border-[#54334f] bg-white p-4 shadow-[7px_7px_0_#64d3df]">
        <div className="absolute inset-x-0 bottom-0 h-14 bg-[#c9f2eb]" />
        <PixelSparkle className="left-7 top-8 bg-[#ffc0ca] shadow-[28px_28px_0_#fff9c9]" />
        <PixelSparkle className="right-10 top-10 bg-[#64d3df] shadow-[-30px_34px_0_#ffc0ca]" />

        <div className="relative mx-auto flex h-44 items-center justify-center">
          <PixelMascot />
        </div>

        <div className="relative mt-3 border-4 border-[#54334f] bg-[#fffaf0] p-4 shadow-[4px_4px_0_rgba(84,51,79,.35)]">
          <p className="font-mono text-[12px] font-black uppercase tracking-[0.12em] text-[#bf355e]">
            Side Quest
          </p>
          <h1 className="mt-2 text-[32px] font-black leading-[1.05] text-[#54334f]">
            A tiny task appeared.
          </h1>
          <p className="mt-3 text-[17px] font-semibold leading-[1.55] text-[#4f3d4c]">
            Clear seven quick steps and send one millimeter number.
          </p>

          <button
            type="button"
            onClick={onStart}
            className="mt-5 flex h-14 w-full cursor-pointer items-center justify-center gap-2 border-2 border-[#54334f] bg-[#ff9fc8] px-4 font-mono text-[18px] font-black uppercase tracking-[0.08em] text-[#54334f] shadow-[5px_5px_0_rgba(84,51,79,.42)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#ffb7d5] hover:shadow-[3px_3px_0_rgba(84,51,79,.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f829f]"
          >
            <PixelIcon name="check" className="text-[#54334f]" pixelSize={3} />
            Start
          </button>
        </div>
      </div>
    </section>
  );
}

function Sidequest() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeQuest, setActiveQuest] = useState(0);
  const [fingerCircumference, setFingerCircumference] = useState("");
  const [inputError, setInputError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [rewardEvent, setRewardEvent] = useState<RewardEvent | null>(null);
  const [playEvent, setPlayEvent] = useState<MascotEvent | null>(null);

  const active = quests[activeQuest];
  const progressLabel = `${activeQuest + 1}/${quests.length}`;
  const progressPercent = useMemo(
    () => `${((activeQuest + 1) / quests.length) * 100}%`,
    [activeQuest],
  );
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
    <main className="min-h-dvh overflow-hidden bg-[#fffaf7] font-sans text-[#54334f]">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[560px] flex-col px-4 pb-4 pt-4 sm:max-w-[640px] md:max-w-[860px] md:px-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffaf7_0%,#ffeaf1_48%,#d9f7f1_100%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(191,53,94,.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(47,130,159,.1)_2px,transparent_2px)] [background-size:18px_18px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[#c9f2eb]" />
          <div className="absolute left-7 top-28 h-3 w-3 bg-[#ffc0ca] shadow-[72px_86px_0_#fff9c9,238px_28px_0_#64d3df,292px_176px_0_#ffc0ca]" />
        </div>

        <header className="relative z-10 flex min-h-12 items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 border-2 border-[#54334f] bg-[#fffaf0] px-3 text-[13px] font-black uppercase tracking-[0.08em] text-[#54334f] shadow-[4px_4px_0_rgba(84,51,79,.42)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(84,51,79,.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff78b4]"
          >
            <PixelIcon name="back" className="text-[#54334f]" pixelSize={2} />
            Isaac
          </Link>
          <div className="flex h-11 items-center border-2 border-[#54334f] bg-[#ff9fc8] px-3 text-[12px] font-black uppercase tracking-[0.16em] text-[#54334f] shadow-[4px_4px_0_rgba(84,51,79,.42)]">
            Sidequest
          </div>
        </header>

        {!hasStarted ? <QuestIntro onStart={() => setHasStarted(true)} /> : null}

        {hasStarted ? (
          <section className="relative z-10 mt-4 flex flex-1 flex-col">
            <div className="border-4 border-[#54334f] bg-[#fffaf0] p-3 shadow-[5px_5px_0_rgba(84,51,79,.35)]">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[12px] font-black uppercase tracking-[0.12em] text-[#2f829f]">
                  Stage {String(activeQuest + 1).padStart(2, "0")}
                </p>
                <p className="font-mono text-[18px] font-black leading-none text-[#bf355e]">
                  {progressLabel}
                </p>
              </div>
              <div className="mt-3 h-4 border-2 border-[#54334f] bg-white p-1">
                <div
                  className="h-full bg-[#ff9fc8] transition-[width] duration-300 ease-out"
                  style={{ width: progressPercent }}
                />
              </div>
              <div
                className="mt-3 grid gap-1"
                aria-label="Quest progress"
                style={{ gridTemplateColumns: `repeat(${quests.length}, minmax(0, 1fr))` }}
              >
                {quests.map((quest, index) => {
                  const isCleared = index < activeQuest;
                  const isActive = index === activeQuest;

                  return (
                    <span
                      key={quest.title}
                      aria-label={`Stage ${index + 1}`}
                      className={`h-3 border border-[#54334f] ${
                        isActive ? "bg-[#ff9fc8]" : isCleared ? "bg-[#64d3df]" : "bg-white"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            <CuteQuestScene
              activeQuest={activeQuest}
              rewardStamp={rewardEvent?.stamp ?? 0}
              playEvent={playEvent}
            />

            <div className="mt-4">
              <div className="relative overflow-hidden border-4 border-[#54334f] bg-[#fffaf0] p-4 text-[#54334f] shadow-[8px_8px_0_rgba(84,51,79,.42)] sm:p-6">
                <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(84,51,79,.16)_2px,transparent_2px),linear-gradient(to_bottom,rgba(84,51,79,.12)_2px,transparent_2px)] [background-size:18px_18px]" />
                <div className="absolute inset-x-0 top-0 h-3 bg-[#ff9fc8]" />

                <article className="relative">
                  <div className="flex items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-[#54334f] bg-[#ffe08a] text-[#54334f] shadow-[4px_4px_0_rgba(84,51,79,.42)]">
                      <PixelIcon name={active.icon} className="text-[#54334f]" pixelSize={4} />
                    </div>
                  </div>

                  <h2 className="mt-4 text-[28px] font-black leading-[1.15] text-[#54334f] sm:text-[38px]">
                    {active.title}
                  </h2>
                  <p className="mt-2 text-[17px] font-semibold leading-[1.6] text-[#5f4a59]">
                    {active.detail}
                  </p>
                  {active.hint && (
                    <p className="mt-1 text-[12px] font-semibold leading-[1.45] text-[#9a8498]">
                      {active.hint}
                    </p>
                  )}

                  {rewardEvent &&
                    activeQuest !== INPUT_QUEST_INDEX &&
                    activeQuest !== SUCCESS_QUEST_INDEX && (
                      <p
                        key={rewardEvent.stamp}
                        role="status"
                        aria-live="polite"
                        className="mt-4 border-2 border-[#54334f] bg-white px-3 py-2 font-mono text-[13px] font-black uppercase tracking-[0.08em] text-[#bf355e] shadow-[3px_3px_0_rgba(84,51,79,.24)]"
                      >
                        {rewardEvent.message}
                      </p>
                    )}

                  {activeQuest === INPUT_QUEST_INDEX && (
                    <div className="mt-5">
                      <label
                        htmlFor="fingerCircumference"
                        className="block font-mono text-[13px] font-black uppercase tracking-[0.08em] text-[#54334f]"
                      >
                        What is your finger circumference?
                      </label>
                      <div className="mt-2 flex min-h-14 items-center border-2 border-[#54334f] bg-[#fff9dc] px-3 shadow-[4px_4px_0_rgba(84,51,79,.35)] focus-within:border-[#ff78b4] focus-within:ring-2 focus-within:ring-[#ff78b4]/28">
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
                          className="h-12 min-w-0 flex-1 bg-transparent text-[24px] font-black text-[#54334f] outline-none"
                          aria-describedby={inputError ? "fingerCircumference-error" : undefined}
                        />
                        <span className="pl-2 text-[15px] font-black text-[#6f5a1c]">mm</span>
                      </div>
                      {inputError && (
                        <p
                          id="fingerCircumference-error"
                          className="mt-3 border-2 border-[#54334f] bg-[#ffe0d4] px-3 py-2 text-[13px] font-black text-[#982514] shadow-[3px_3px_0_rgba(84,51,79,.34)]"
                          role="alert"
                        >
                          {inputError}
                        </p>
                      )}
                    </div>
                  )}

                  {activeQuest === SUCCESS_QUEST_INDEX && (
                    <div className="mt-6 flex items-center gap-3 border-2 border-[#54334f] bg-[#d8ffd8] px-3 py-3 shadow-[4px_4px_0_rgba(84,51,79,.35)]">
                      <PixelIcon name="trophy" className="text-[#173d29]" pixelSize={4} />
                      <p className="text-[14px] font-black uppercase leading-snug text-[#173d29]">
                        Sent. Thank you, Alyssa.
                      </p>
                    </div>
                  )}
                </article>
              </div>
            </div>
          </section>
        ) : null}

        {hasStarted && activeQuest !== SUCCESS_QUEST_INDEX ? (
          <div className="relative z-10 sticky bottom-0 -mx-4 mt-4 border-t-2 border-[#54334f]/18 bg-[#fffaf7]/92 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:-mx-6 md:px-6">
            <div className="mx-auto max-w-[560px] md:max-w-[860px]">
              <button
                type="button"
                onClick={completeQuest}
                disabled={isSubmitting}
                className="flex h-14 w-full min-w-0 cursor-pointer items-center justify-center gap-2 border-2 border-[#54334f] bg-[#ff9fc8] px-4 font-mono text-[15px] font-black uppercase tracking-[0.08em] text-[#54334f] shadow-[5px_5px_0_rgba(84,51,79,.42)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#ffb7d5] hover:shadow-[3px_3px_0_rgba(84,51,79,.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff4c9] disabled:cursor-wait disabled:opacity-70"
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
            </div>
            {submitState === "error" && !inputError && (
              <p
                className="mx-auto mt-2 max-w-[560px] text-[13px] font-bold text-[#ff9b8d]"
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
