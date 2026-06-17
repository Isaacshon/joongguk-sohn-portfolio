import { createFileRoute, Link } from "@tanstack/react-router";
import { type CSSProperties, type PointerEvent as RPE } from "react";
import { MatLayout } from "@/components/MatLayout";
import airplane from "@/assets/airplane.png";
import carboard from "@/assets/carboard.png";
import cross from "@/assets/cross.png";
import photo1 from "@/assets/photo1.jpg";
import photo4 from "@/assets/photo4.jpg";
import flierPoster from "@/assets/project-fliers/fritillaria-thunbergii-pink.png";

export const Route = createFileRoute("/interactive")({
  head: () => ({
    meta: [
      { title: "Interactive - Isaac Sohn" },
      {
        name: "description",
        content: "Interactive motion studies, draggable objects, and poster experiences.",
      },
      { property: "og:title", content: "Interactive - Isaac Sohn" },
      {
        property: "og:description",
        content: "Interactive motion studies, draggable objects, and poster experiences.",
      },
    ],
  }),
  component: Interactive,
});

type InteractiveCardStyle = CSSProperties & {
  "--mx": string;
  "--my": string;
  "--rx": string;
  "--ry": string;
};

const entries = [
  {
    to: "/",
    label: "Board",
    title: "Motion Board",
    summary: "Draggable photos, wind-up toys, relic interaction.",
    tone: "from-[#143f39] via-[#24685e] to-[#f2efe4]",
    preview: "board",
  },
  {
    to: "/fliers",
    label: "Fliers",
    title: "Poster Wall",
    summary: "Infinite pan, cursor tilt, poster zoom.",
    tone: "from-[#3f9f68] via-[#d2e0b8] to-[#f2c5d5]",
    preview: "fliers",
  },
  {
    to: "/work",
    label: "Projects",
    title: "Project Index",
    summary: "Selected web, app, visual artwork studies.",
    tone: "from-[#151515] via-[#5d5bea] to-[#f5d56f]",
    preview: "projects",
  },
] as const;

function setCardPointer(e: RPE<HTMLAnchorElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const xRatio = x / rect.width;
  const yRatio = y / rect.height;

  e.currentTarget.style.setProperty("--mx", `${(xRatio * 100).toFixed(1)}%`);
  e.currentTarget.style.setProperty("--my", `${(yRatio * 100).toFixed(1)}%`);
  e.currentTarget.style.setProperty("--rx", `${((0.5 - yRatio) * 7).toFixed(2)}deg`);
  e.currentTarget.style.setProperty("--ry", `${((xRatio - 0.5) * 8).toFixed(2)}deg`);
}

function resetCardPointer(e: RPE<HTMLAnchorElement>) {
  e.currentTarget.style.setProperty("--mx", "50%");
  e.currentTarget.style.setProperty("--my", "50%");
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
}

function Preview({ type }: { type: (typeof entries)[number]["preview"] }) {
  if (type === "fliers") {
    return (
      <div className="interactive-preview interactive-preview-fliers">
        <img src={flierPoster} alt="" draggable={false} className="interactive-poster one" />
        <img src={photo4} alt="" draggable={false} className="interactive-poster two" />
        <span className="interactive-grid-line" />
      </div>
    );
  }

  if (type === "projects") {
    return (
      <div className="interactive-preview interactive-preview-projects">
        <span className="interactive-project-tile">Eknoc</span>
        <span className="interactive-project-tile">Blessie</span>
        <span className="interactive-project-tile">3D</span>
      </div>
    );
  }

  return (
    <div className="interactive-preview interactive-preview-board">
      <img src={photo1} alt="" draggable={false} className="interactive-polaroid" />
      <img src={carboard} alt="" draggable={false} className="interactive-car" />
      <img src={airplane} alt="" draggable={false} className="interactive-plane" />
      <img src={cross} alt="" draggable={false} className="interactive-cross" />
    </div>
  );
}

function Interactive() {
  return (
    <MatLayout surface="plain" contentClassName="max-w-[1500px]">
      <section className="grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-4 lg:grid-cols-[minmax(240px,0.65fr)_minmax(0,1.35fr)]">
        <div className="flex flex-col justify-between border-r border-black/10 pr-4">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.18em] text-primary">INTERACTIVE</p>
            <h1 className="mt-4 max-w-[480px] font-serif text-[clamp(54px,8vw,116px)] font-medium italic leading-[0.9] text-foreground">
              Playable motion studies
            </h1>
          </div>
          <p className="mt-8 max-w-[360px] text-[15px] leading-relaxed text-muted-foreground">
            A small index for the portfolio's moving pieces: objects, posters, and project surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
          {entries.map((entry) => {
            const style: InteractiveCardStyle = {
              "--mx": "50%",
              "--my": "50%",
              "--rx": "0deg",
              "--ry": "0deg",
            };

            return (
              <Link
                key={entry.title}
                to={entry.to}
                onPointerMove={setCardPointer}
                onPointerLeave={resetCardPointer}
                className="interactive-card group relative block min-h-[520px] overflow-hidden rounded-md border border-black/10 bg-[#fbfaf6] p-4 text-foreground"
                style={style}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${entry.tone} opacity-90`} />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:38px_38px]" />
                <div className="interactive-card-shine" />

                <div className="relative z-10 flex h-full min-h-[488px] flex-col">
                  <div className="flex items-center justify-between text-[13px] font-semibold tracking-[0.18em] text-white/80">
                    <span>{entry.label}</span>
                    <span>&rarr;</span>
                  </div>

                  <Preview type={entry.preview} />

                  <div className="mt-auto text-white">
                    <h2 className="font-serif text-[clamp(38px,4vw,64px)] italic leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,.28)]">
                      {entry.title}
                    </h2>
                    <p className="mt-3 max-w-[280px] text-[14px] leading-snug text-white/78">
                      {entry.summary}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </MatLayout>
  );
}
