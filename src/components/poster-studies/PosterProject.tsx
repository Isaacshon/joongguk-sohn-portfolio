import type { ReactNode } from "react";

export type PaletteSwatch = {
  name: string;
  className: string;
};

export type PosterProjectProps = {
  id: string;
  index: string;
  projectLabel: string;
  title: string;
  titleLang?: "ko";
  discipline: string;
  statement: string;
  description: string;
  rule: string;
  palette: PaletteSwatch[];
  deliverables: string[];
  visual: ReactNode;
  layout?: "feature" | "split" | "reverse";
};

export function PosterProject({
  id,
  index,
  projectLabel,
  title,
  titleLang,
  discipline,
  statement,
  description,
  rule,
  palette,
  deliverables,
  visual,
  layout = "split",
}: PosterProjectProps) {
  const isFeature = layout === "feature";
  const isReverse = layout === "reverse";
  const isBrandWorld = projectLabel.toLowerCase().includes("fictional brand");

  return (
    <article
      id={id}
      className="scroll-mt-16 border-t border-black/25 py-14 [content-visibility:auto] [contain-intrinsic-size:1100px] md:py-20"
    >
      <div
        className={
          isFeature
            ? "grid gap-9"
            : `grid gap-9 min-[1500px]:items-start min-[1500px]:gap-12 ${
                isReverse
                  ? "min-[1500px]:grid-cols-[minmax(0,1.7fr)_minmax(245px,0.55fr)]"
                  : "min-[1500px]:grid-cols-[minmax(245px,0.55fr)_minmax(0,1.7fr)]"
              }`
        }
      >
        <div
          className={`min-w-0 ${
            isReverse
              ? "min-[1500px]:col-start-2 min-[1500px]:row-start-1"
              : "min-[1500px]:col-start-1 min-[1500px]:row-start-1"
          }`}
        >
          <div className={isFeature ? "grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end" : ""}>
            <div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="tabular-nums">{index}</span>
                <span aria-hidden="true" className="h-px w-5 bg-current opacity-45" />
                <span>{projectLabel}</span>
              </p>
              <h3
                lang={titleLang}
                className={`mt-3 max-w-[12ch] text-balance font-serif font-medium leading-[0.78] tracking-[-0.055em] ${
                  isFeature
                    ? "text-[clamp(3rem,6.5vw,6.6rem)]"
                    : "text-[clamp(3rem,6.5vw,6.6rem)] min-[1500px]:text-[clamp(2.8rem,3.7vw,4.5rem)]"
                }`}
              >
                {title}
              </h3>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {discipline}
              </p>
            </div>

            <p className="mt-7 max-w-[34ch] text-balance font-serif text-[clamp(1.55rem,2.7vw,2.6rem)] italic leading-[1.02] tracking-[-0.02em] lg:mt-0">
              {statement}
            </p>
          </div>

          <div
            className={`mt-8 border-t border-black/15 pt-5 ${isFeature ? "lg:grid lg:grid-cols-2 lg:gap-12" : ""}`}
          >
            <p className="max-w-[58ch] text-[13px] leading-[1.7] text-muted-foreground">
              {description}
            </p>

            <dl className={`mt-6 space-y-4 ${isFeature ? "lg:mt-0" : ""}`}>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  System rule
                </dt>
                <dd className="mt-1 text-[12px] leading-[1.55]">{rule}</dd>
              </div>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  Palette
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {palette.map((swatch) => (
                    <span
                      key={swatch.name}
                      title={swatch.name}
                      className={`block h-5 w-9 border border-black/20 ${swatch.className}`}
                    >
                      <span className="sr-only">{swatch.name}</span>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-7 border-t border-black/15 pt-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Applications
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`min-w-0 ${
            isReverse
              ? "min-[1500px]:col-start-1 min-[1500px]:row-start-1"
              : !isFeature
                ? "min-[1500px]:col-start-2 min-[1500px]:row-start-1"
                : ""
          }`}
        >
          <div className="mb-3 flex items-center justify-between border-b border-black/20 pb-2 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-black/50">
            <span>Visual system</span>
            <span>{isBrandWorld ? "04+ application boards" : "Key art + applications"}</span>
          </div>
          {visual}
        </div>
      </div>
    </article>
  );
}
