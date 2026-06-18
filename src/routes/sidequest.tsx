import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MatLayout } from "@/components/MatLayout";
import cross from "@/assets/cross.png";
import flierPink from "@/assets/project-fliers/fritillaria-thunbergii-pink.png";
import flierGreen from "@/assets/project-fliers/fritillaria-thunbergii-green.png";
import wemplate from "@/assets/project-fliers/wemplate.svg";

export const Route = createFileRoute("/sidequest")({
  head: () => ({
    meta: [
      { title: "Sidequest - Isaac Sohn" },
      {
        name: "description",
        content: "A hidden sidequest page inside Isaac Sohn's portfolio.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Sidequest - Isaac Sohn" },
      {
        property: "og:description",
        content: "A hidden sidequest page inside Isaac Sohn's portfolio.",
      },
    ],
  }),
  component: Sidequest,
});

const questItems = ["Find the board.", "Tilt the posters.", "Leave through the work door."];

function Sidequest() {
  const [active, setActive] = useState(0);

  const progress = useMemo(() => `${active + 1}/${questItems.length}`, [active]);

  return (
    <MatLayout surface="plain" contentClassName="max-w-[1440px]">
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden rounded-md border border-black/10 bg-[#111411] text-[#f7f1df] shadow-[inset_0_0_80px_rgba(0,0,0,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,230,184,.18),transparent_26%),radial-gradient(circle_at_78%_26%,rgba(85,174,143,.2),transparent_28%),linear-gradient(135deg,#111411,#1e3f38_48%,#111411)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,.38)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.62),transparent_44%,rgba(0,0,0,.28))]" />

        <img
          src={flierPink}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-10 top-16 w-[220px] rotate-6 opacity-50 shadow-[0_28px_42px_rgba(0,0,0,.35)] md:w-[330px]"
        />
        <img
          src={flierGreen}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-[-90px] left-[42%] hidden w-[250px] -rotate-3 opacity-35 shadow-[0_28px_42px_rgba(0,0,0,.35)] lg:block"
        />
        <img
          src={wemplate}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-12 w-[210px] -rotate-12 opacity-35 shadow-[0_24px_36px_rgba(0,0,0,.35)] md:w-[280px]"
        />

        <div className="relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-8 px-5 py-6 md:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)] lg:px-10 lg:py-8">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.28em] text-[#b6f2d3]">
                HIDDEN ROUTE / SIDEQUEST
              </p>
              <h1 className="mt-5 max-w-[760px] font-serif text-[clamp(64px,10vw,142px)] font-medium italic leading-[0.82]">
                You found the side room.
              </h1>
              <p className="mt-7 max-w-[520px] text-[16px] leading-relaxed text-[#f7f1df]/72">
                This page is not wired into the site navigation. It only opens when someone knows
                the path: <span className="font-semibold text-[#b6f2d3]">/sidequest</span>.
              </p>
            </div>

            <div className="mt-12 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-3">
              <Link
                to="/"
                className="group rounded-md border border-white/18 bg-white/[0.07] px-4 py-3 text-[13px] uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#b6f2d3]/70 hover:text-[#b6f2d3]"
              >
                Board{" "}
                <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                to="/fliers"
                className="group rounded-md border border-white/18 bg-white/[0.07] px-4 py-3 text-[13px] uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#b6f2d3]/70 hover:text-[#b6f2d3]"
              >
                Fliers{" "}
                <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                to="/work"
                className="group rounded-md border border-white/18 bg-white/[0.07] px-4 py-3 text-[13px] uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#b6f2d3]/70 hover:text-[#b6f2d3]"
              >
                Work{" "}
                <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          <aside className="relative self-stretch rounded-md border border-white/16 bg-[#f7f1df]/[0.08] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/14 pb-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55">
                Quest Log
              </span>
              <span className="font-serif text-3xl italic text-[#b6f2d3]">{progress}</span>
            </div>

            <div className="mt-5 space-y-2">
              {questItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`block w-full rounded-md border px-4 py-4 text-left transition ${
                    active === index
                      ? "border-[#b6f2d3]/80 bg-[#b6f2d3]/14 text-[#f7f1df]"
                      : "border-white/12 bg-black/10 text-white/52 hover:border-white/30 hover:text-white/82"
                  }`}
                >
                  <span className="block text-[11px] uppercase tracking-[0.22em] opacity-55">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-serif text-2xl italic leading-none">{item}</span>
                </button>
              ))}
            </div>

            <div className="relative mt-8 aspect-square overflow-hidden rounded-md border border-white/12 bg-black/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(182,242,211,.32),transparent_30%)]" />
              <img
                src={cross}
                alt=""
                aria-hidden
                className="absolute left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] opacity-80 drop-shadow-[0_22px_16px_rgba(0,0,0,.5)] transition duration-500 hover:rotate-3 hover:scale-105"
              />
              <p className="absolute bottom-4 left-4 right-4 text-[12px] leading-snug text-white/54">
                Keep this one unlisted. It is a quiet room for people who know the route.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </MatLayout>
  );
}
