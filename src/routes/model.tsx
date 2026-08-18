import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import aug0101 from "@/assets/hanbyul-model/aug-01-01.webp";
import aug0102 from "@/assets/hanbyul-model/aug-01-02.webp";
import aug0103 from "@/assets/hanbyul-model/aug-01-03.webp";
import aug0104 from "@/assets/hanbyul-model/aug-01-04.webp";
import aug0105 from "@/assets/hanbyul-model/aug-01-05.webp";
import jul2701 from "@/assets/hanbyul-model/jul-27-01.webp";
import jul2702 from "@/assets/hanbyul-model/jul-27-02.webp";
import jul2703 from "@/assets/hanbyul-model/jul-27-03.webp";
import jul2704 from "@/assets/hanbyul-model/jul-27-04.webp";

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Model - Isaac Sohn" },
      {
        name: "description",
        content:
          "Selected Hanbyul modeling work by Isaac Sohn, Brand Copywriter and Model in Toronto.",
      },
      { property: "og:title", content: "Model - Isaac Sohn" },
      {
        property: "og:description",
        content: "Hanbyul editorial modeling work from July and August 2026.",
      },
    ],
  }),
  component: Model,
});

type EditorialImage = {
  src: string;
  alt: string;
};

const augustEditorial: EditorialImage[] = [
  {
    src: aug0101,
    alt: "Isaac Sohn seated on a stone in a charcoal knit sweater, faded black jeans, and white sneakers outside a Toronto cafe",
  },
  {
    src: aug0102,
    alt: "Isaac Sohn standing in a charcoal knit sweater while rolling his sleeve and holding an iced drink beside a metal fish sculpture",
  },
  {
    src: aug0103,
    alt: "Isaac Sohn seated on a stone in a charcoal sweater, holding an iced drink and looking to the side",
  },
  {
    src: aug0104,
    alt: "Isaac Sohn seated cross-legged on a stone in a charcoal sweater, raising a phone beside a metal fish sculpture",
  },
  {
    src: aug0105,
    alt: "Isaac Sohn seated cross-legged on a stone in a charcoal sweater, looking down at a phone",
  },
];

const julyEditorial: EditorialImage[] = [
  {
    src: jul2701,
    alt: "Isaac Sohn seated cross-legged on a park bench in a brown plaid overshirt, white T-shirt, faded jeans, and white sneakers",
  },
  {
    src: jul2702,
    alt: "Isaac Sohn facing forward on a park bench in a brown plaid overshirt and white T-shirt",
  },
  {
    src: jul2703,
    alt: "Isaac Sohn resting his head on one hand while seated on a park bench in a brown plaid overshirt",
  },
  {
    src: jul2704,
    alt: "Isaac Sohn reclining on a park bench with his hands behind his head in a brown plaid overshirt",
  },
];

type ContactSheetProps = {
  images: EditorialImage[];
  sequence: string;
  gridClassName: string;
};

function ContactSheet({ images, sequence, gridClassName }: ContactSheetProps) {
  return (
    <div className={`grid gap-px border border-[#14232c] bg-[#14232c] ${gridClassName}`}>
      {images.map((image, index) => (
        <figure key={image.src} className="group bg-[#dce6e9] p-2 sm:p-3">
          <div className="aspect-[3/4] overflow-hidden bg-[#91a2aa]">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover saturate-[0.76] transition-[filter] duration-300 group-hover:saturate-100 motion-reduce:transition-none"
            />
          </div>
          <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase text-[#324650] sm:text-[11px]">
            <span>
              {sequence}.{String(index + 1).padStart(2, "0")}
            </span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

type EditorialSectionProps = {
  issue: string;
  dateTime: string;
  dateLabel: string;
  caption: string;
  frameCount: number;
  postUrl: string;
  images: EditorialImage[];
  gridClassName: string;
};

function EditorialSection({
  issue,
  dateTime,
  dateLabel,
  caption,
  frameCount,
  postUrl,
  images,
  gridClassName,
}: EditorialSectionProps) {
  const headingId = `editorial-${issue}`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-[#14232c] px-4 py-14 sm:px-6 sm:py-20 xl:px-10"
    >
      <header className="mb-8 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-2">
          <p className="font-mono text-[11px] uppercase text-[#405a66]">Editorial / {issue}</p>
          <p className="mt-2 font-serif text-5xl italic leading-none text-[#14232c]">{issue}</p>
        </div>

        <div className="md:col-span-7">
          <time dateTime={dateTime} className="font-mono text-[11px] uppercase text-[#405a66]">
            {dateLabel}
          </time>
          <h2
            id={headingId}
            className="mt-3 max-w-4xl text-balance font-serif text-[clamp(2.6rem,6vw,6.8rem)] font-medium italic leading-[0.86] text-[#14232c]"
          >
            {caption}
          </h2>
        </div>

        <div className="border-l border-[#7d939d] pl-4 md:col-span-3">
          <p className="font-mono text-[11px] uppercase text-[#405a66]">
            {String(frameCount).padStart(2, "0")} frames / Hanbyul
          </p>
          <a
            href={postUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center border-b border-[#14232c] text-sm font-medium text-[#14232c] outline-none transition-colors hover:border-[#6f8f87] hover:text-[#43675c] focus-visible:ring-2 focus-visible:ring-[#14232c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#d7e2e6]"
          >
            View original post{" "}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
      </header>

      <ContactSheet images={images} sequence={issue} gridClassName={gridClassName} />
    </section>
  );
}

function Model() {
  return (
    <MatLayout surface="plain" contentClassName="max-w-none pt-11">
      <div className="relative -mx-3 -mb-12 overflow-hidden bg-[#d7e2e6] text-[#14232c]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#29434f_1px,transparent_1px),linear-gradient(to_bottom,#29434f_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <header className="relative grid border-b border-[#14232c] lg:min-h-[calc(100svh-2.75rem)] lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.22fr)]">
          <div className="flex flex-col justify-between px-4 py-10 sm:px-6 sm:py-14 xl:px-10">
            <div>
              <div className="flex items-center justify-between border-b border-[#7d939d] pb-3 font-mono text-[10px] uppercase sm:text-[11px]">
                <span>Selected appearances</span>
                <span>Toronto / 2026</span>
              </div>

              <p className="mt-8 text-[12px] font-semibold uppercase text-[#43675c]">
                Hanbyul / Brand Copywriter &amp; Model
              </p>
              <h1 className="mt-4 text-balance font-serif text-[clamp(5rem,7.25vw,9rem)] font-medium uppercase leading-[0.72]">
                Model
                <span className="mt-6 block text-[0.32em] italic normal-case leading-none text-[#405a66]">
                  / Hanbyul
                </span>
              </h1>

              <p className="mt-10 max-w-md text-pretty text-[15px] leading-relaxed text-[#324650]">
                Two Hanbyul feed appearances arranged as a casting ledger: nine frames, two looks,
                one Toronto field study.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-px border border-[#14232c] bg-[#14232c] text-[12px] sm:text-[13px]">
              <div className="bg-[#d7e2e6] p-3 sm:p-4">
                <dt className="font-mono text-[9px] uppercase text-[#526b76] sm:text-[10px]">
                  Role
                </dt>
                <dd className="mt-2 leading-snug">Brand Copywriter &amp; Model</dd>
              </div>
              <div className="bg-[#d7e2e6] p-3 sm:p-4">
                <dt className="font-mono text-[9px] uppercase text-[#526b76] sm:text-[10px]">
                  Base
                </dt>
                <dd className="mt-2 leading-snug">Toronto</dd>
              </div>
              <div className="bg-[#d7e2e6] p-3 sm:p-4">
                <dt className="font-mono text-[9px] uppercase text-[#526b76] sm:text-[10px]">
                  Tenure
                </dt>
                <dd className="mt-2 leading-snug">May 2025–Present</dd>
              </div>
              <div className="bg-[#d7e2e6] p-3 sm:p-4">
                <dt className="font-mono text-[9px] uppercase text-[#526b76] sm:text-[10px]">
                  Archive
                </dt>
                <dd className="mt-2 leading-snug">02 posts / 09 frames</dd>
              </div>
            </dl>
          </div>

          <figure className="relative min-h-[560px] overflow-hidden border-t border-[#14232c] bg-[#7f929b] lg:min-h-0 lg:border-l lg:border-t-0">
            <img
              src={aug0101}
              alt="Isaac Sohn modeling a charcoal knit sweater and faded black jeans while seated on a stone outside a Toronto cafe"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center saturate-[0.76]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#102b3a]/10 mix-blend-color" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#101a22]/80 via-[#101a22]/25 to-transparent px-4 pb-5 pt-24 font-mono text-[10px] uppercase text-[#edf2ef] sm:px-6 sm:text-[11px] xl:px-8">
              <span>Frame 01 / 09</span>
              <span>Hanbyul · Toronto</span>
            </figcaption>
          </figure>
        </header>

        <EditorialSection
          issue="01"
          dateTime="2026-08-01"
          dateLabel="01 August 2026"
          caption="🍁🍂"
          frameCount={5}
          postUrl="https://www.instagram.com/hanbyul.official/p/DbgQg_wFrr9/"
          images={augustEditorial}
          gridClassName="grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
        />

        <EditorialSection
          issue="02"
          dateTime="2026-07-27"
          dateLabel="27 July 2026"
          caption="FW2026 Dropping at Aug 20, 6pm EST"
          frameCount={4}
          postUrl="https://www.instagram.com/hanbyul.official/p/DbTYTtblld-/"
          images={julyEditorial}
          gridClassName="grid-cols-2 lg:grid-cols-4"
        />

        <footer className="relative flex flex-col gap-3 border-t border-[#14232c] bg-[#14232c] px-4 py-8 font-mono text-[10px] uppercase text-[#d7e2e6] sm:flex-row sm:items-center sm:justify-between sm:px-6 xl:px-10">
          <p>Hanbyul / Brand Copywriter &amp; Model</p>
          <p>Toronto · May 2025–Present</p>
        </footer>
      </div>
    </MatLayout>
  );
}
