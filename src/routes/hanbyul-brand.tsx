import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { MatLayout } from "@/components/MatLayout";
import beforeAfter from "@/assets/hanbyul-brand/before-after-board.webp";
import modelFourView from "@/assets/hanbyul-brand/ai-model-4view-board.webp";
import editorialFourView from "@/assets/hanbyul-brand/ai-editorial-4view-board.webp";
import detailBoard from "@/assets/hanbyul-brand/detail-6view-board.webp";
import flatLay from "@/assets/hanbyul-brand/flatlay-clean-logo-final.webp";
import editorialWalk from "@/assets/hanbyul-brand/ai-editorial-walk.webp";

export const Route = createFileRoute("/hanbyul-brand")({
  head: () => ({
    meta: [
      { title: "Hanbyul Brand System — Isaac Sohn" },
      {
        name: "description",
        content:
          "Brand copy, modeling, visual direction, and a repeatable product-page system for Korean menswear brand Hanbyul.",
      },
      { property: "og:title", content: "Hanbyul Brand System — Isaac Sohn" },
      {
        property: "og:description",
        content: "A trust-first visual and product-page system for Hanbyul menswear.",
      },
    ],
  }),
  component: HanbyulBrand,
});

const workflow = [
  [
    "01",
    "Source capture",
    "Phone photos remain the product truth: colour, texture, seams, and hardware.",
  ],
  [
    "02",
    "Product master",
    "A neutral master image establishes the silhouette before any editorial variation.",
  ],
  [
    "03",
    "Fit study",
    "Front, side, and back views make proportion and styling choices easy to compare.",
  ],
  ["04", "Editorial layer", "Campaign images add context while the garment identity stays locked."],
  [
    "05",
    "QA + handoff",
    "Unverified measurements, composition, and care details stay as honest placeholders.",
  ],
];

function Figure({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure className={`group overflow-hidden bg-[#e7e1d8] ${className}`}>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.015]"
        />
      </div>
      <figcaption className="flex items-center justify-between border-t border-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60">
        <span>{label}</span>
        <span>2026</span>
      </figcaption>
    </figure>
  );
}

function HanbyulBrand() {
  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11" desktopSidebar="flow">
      <article className="overflow-hidden bg-[#f0ece3] text-[#181713]">
        <header className="relative min-h-[78vh] overflow-hidden bg-[#241710] px-5 py-8 text-[#f2eee5] sm:px-8 lg:px-12 lg:py-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:calc(100%/12)_100%]"
          />
          <div className="relative flex min-h-[calc(78vh-6rem)] flex-col justify-between">
            <div className="flex flex-wrap items-start justify-between gap-6 border-t border-white/35 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              <span>Case study / 2025—present</span>
              <span>Toronto, Canada</span>
              <span>Menswear / E-commerce</span>
            </div>

            <div className="py-16 lg:py-24">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#c4a58c]">
                Hanbyul Clothing
              </p>
              <h1 className="max-w-[1100px] font-sans text-[clamp(58px,12vw,170px)] font-black uppercase leading-[0.76] tracking-[-0.075em]">
                Brand
                <br />
                System
              </h1>
            </div>

            <div className="grid gap-8 border-t border-white/35 pt-4 md:grid-cols-[1.2fr_1fr_1fr]">
              <p className="max-w-lg text-[clamp(19px,2.2vw,30px)] font-medium leading-tight">
                Making ordinary visuals a trust-building brand position.
              </p>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">Role</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Brand copywriter, model, visual direction, product-page system
                </p>
              </div>
              <div className="flex items-end gap-4 md:justify-end">
                <a
                  href="https://www.hanbyul.ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm transition hover:border-white"
                >
                  Visit Hanbyul <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="grid border-b border-black/20 lg:grid-cols-12">
          <div className="border-b border-black/20 p-5 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6b4d3c]">
              The position
            </p>
            <h2 className="mt-8 max-w-xl font-serif text-[clamp(44px,6vw,78px)] italic leading-[0.92]">
              “Dress better. Don’t become a fashion guy.”
            </h2>
          </div>
          <div className="grid gap-10 p-5 sm:p-8 md:grid-cols-2 lg:col-span-7 lg:p-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]">The tension</p>
              <p className="mt-4 text-[16px] leading-relaxed text-black/70">
                Plenty of Canadian men like clean Korean casual style, but feel distanced by
                over-polished, model-first fashion language.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]">The response</p>
              <p className="mt-4 text-[16px] leading-relaxed text-black/70">
                Hanbyul treats mirror selfies, familiar settings, and easy combinations as proof
                that the clothes work beyond a campaign set.
              </p>
            </div>
            <p className="md:col-span-2 text-[clamp(24px,3vw,42px)] font-medium leading-[1.08] tracking-[-0.025em]">
              “You don’t need a fashion era. You need one better outfit.”
            </p>
          </div>
        </section>

        <section className="px-3 py-16 sm:px-5 lg:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 grid gap-6 border-t border-black/30 pt-3 md:grid-cols-[1fr_2fr]">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6b4d3c]">
                Product-page system / V3
              </p>
              <div>
                <h2 className="max-w-4xl text-[clamp(38px,6vw,84px)] font-semibold leading-[0.92] tracking-[-0.055em]">
                  Product truth,
                  <br />
                  editorial clarity.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/65">
                  A repeatable square, face-free system built from real product photographs. AI is
                  used to control presentation, fit, view, and styling—not to invent garment
                  details.
                </p>
              </div>
            </div>

            <Figure
              src={beforeAfter}
              alt="Comparison board showing a generic slim-fit sweater look beside Hanbyul's dark chocolate cable knit styled with a relaxed silhouette"
              label="01 / Fit direction — before & after"
            />

            <div className="mt-3 grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
              <Figure
                src={editorialWalk}
                alt="AI-assisted editorial study of the dark chocolate Hanbyul cable knit worn outdoors"
                label="02 / Editorial context"
                className="[&>div]:aspect-[4/5]"
              />
              <Figure
                src={modelFourView}
                alt="Four-view fit study showing the dark chocolate cable knit from front, both sides, and back"
                label="03 / Locked four-view fit study"
                className="[&>div]:aspect-square"
              />
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-2">
              <Figure
                src={detailBoard}
                alt="Six close-up studies of cable texture, neckline, shoulder, cuff, and hem construction"
                label="04 / Detail truth"
                className="[&>div]:aspect-square"
              />
              <Figure
                src={flatLay}
                alt="Clean flat-lay product master of the dark chocolate cable knit on a warm neutral background"
                label="05 / Flat-lay master"
                className="[&>div]:aspect-square"
              />
            </div>

            <Figure
              src={editorialFourView}
              alt="Four editorial scenarios for the Hanbyul cable knit, including walking, standing, seated, and close-up views"
              label="06 / Campaign scenario set"
              className="mt-3"
            />
          </div>
        </section>

        <section className="bg-[#171612] px-5 py-16 text-[#eee9df] sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c4a58c]">
                Repeatable workflow
              </p>
              <h2 className="mt-6 max-w-lg font-serif text-[clamp(48px,7vw,92px)] italic leading-[0.88]">
                A system,
                <br />
                not a filter.
              </h2>
            </div>
            <ol className="border-t border-white/25">
              {workflow.map(([number, title, description]) => (
                <li
                  key={number}
                  className="grid gap-3 border-b border-white/20 py-5 sm:grid-cols-[56px_180px_1fr] sm:items-start"
                >
                  <span className="font-mono text-[11px] text-[#c4a58c]">{number}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">{title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-white/60">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="grid border-b border-black/20 md:grid-cols-3">
          {[
            [
              "Source of truth",
              "Real phone captures define the product. Presentation may change; construction cannot.",
            ],
            [
              "Identity lock",
              "Model, body, camera, crop, background, and garment master remain consistent across a set.",
            ],
            [
              "Honest data",
              "Measurements, fibre composition, and care instructions stay blank until the brand confirms them.",
            ],
          ].map(([title, body], index) => (
            <div
              key={title}
              className={`p-6 sm:p-8 lg:p-10 ${index < 2 ? "border-b border-black/20 md:border-b-0 md:border-r" : ""}`}
            >
              <p className="font-mono text-[10px] text-[#6b4d3c]">0{index + 1}</p>
              <h3 className="mt-10 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">{body}</p>
            </div>
          ))}
        </section>

        <footer className="grid gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:px-12 lg:py-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6b4d3c]">
              Continue
            </p>
            <h2 className="mt-3 font-serif text-[clamp(42px,6vw,76px)] italic leading-none">
              See the clothes in life.
            </h2>
          </div>
          <div className="flex flex-wrap items-end gap-3 md:justify-end">
            <Link
              to="/model"
              className="inline-flex items-center gap-2 rounded-full bg-[#241710] px-5 py-3 text-sm text-white transition hover:bg-[#493326]"
            >
              Model archive <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="https://www.instagram.com/hanbyul.official/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-sm transition hover:bg-black hover:text-white"
            >
              Instagram <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </footer>
      </article>
    </MatLayout>
  );
}
