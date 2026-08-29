import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { MatLayout } from "@/components/MatLayout";
import { BrandMark, PradaPlaque, type BrandCode } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getDesignProjectArtDirection } from "@/lib/design-project-art-direction";
import {
  getBrandPavilion,
  type BrandPavilionImage,
  type BrandPavilionSource,
} from "@/lib/brand-pavilions";
import { designProjects, type DesignProject } from "@/lib/design-projects";

type PavilionStyle = CSSProperties & Record<`--${string}`, string | number>;

const pavilionChapters = [
  { href: "#philosophy", number: "01", label: "Philosophy" },
  { href: "#values", number: "02", label: "Values" },
  { href: "#needs", number: "03", label: "Needs" },
  { href: "#principles", number: "04", label: "Method" },
  { href: "#design", number: "05", label: "Design" },
  { href: "#world", number: "06", label: "World" },
] as const;

const pavilionFigureCodes: Record<BrandPavilionImage["slot"], string> = {
  hero: "H",
  tactile: "MT",
  spatial: "SP",
  context: "CX",
  editorialA: "A",
  editorialB: "B",
  editorialC: "C",
  editorialD: "D",
  editorialE: "E",
  editorialF: "F",
};

const brandRetailMenus: Record<BrandCode, string[]> = {
  hm: ["Women", "Men", "Kids", "Home", "Studio"],
  zara: ["Woman", "Man", "Kids", "Beauty"],
  uniqlo: ["Women", "Men", "Kids", "Baby"],
  prada: ["Women", "Men", "Bags", "Pradasphere"],
};

const brandSignatureContent: Record<
  BrandCode,
  { eyebrow: string; title: string; body: string; codes: string[] }
> = {
  hm: {
    eyebrow: "H&M / Fashion for the many",
    title: "Fashion and design should be accessible to everyone.",
    body: "An open, direct fashion system: many styles and identities, useful quality, clear value, and constant improvement without unnecessary complexity.",
    codes: ["Open to many", "Fashion + quality", "Keep it simple"],
  },
  zara: {
    eyebrow: "ZARA / Attention into fashion",
    title: "Listen closely. Edit clearly. Move continuously.",
    body: "Customer signals, creative teams, stores, and digital services operate as one responsive loop. The visual language stays quiet so every new silhouette can arrive with clarity.",
    codes: ["Attention", "Creative edit", "Connected experience"],
  },
  uniqlo: {
    eyebrow: "UNIQLO / LifeWear",
    title: "Simple made better.",
    body: "Everyday clothing shaped by Japanese values of simplicity, quality, longevity, thoughtful detail, and continuous improvement around real life.",
    codes: ["Simple", "Useful quality", "Always evolving"],
  },
  prada: {
    eyebrow: "PRADA / Milano dal 1913",
    title: "Reconsider the familiar.",
    body: "Concept, structure, and image are treated as one intellectual field. Familiar codes are examined, displaced, and returned through cultural perspective and material experiment.",
    codes: ["Observe", "Displace", "Reinterpret"],
  },
};

export function BrandPavilion({ project }: { project: DesignProject }) {
  const pavilion = getBrandPavilion(project.slug);

  if (!pavilion || !project.brandStudy) return null;

  const direction = getDesignProjectArtDirection(project);
  const brandProjects = designProjects.filter((candidate) => candidate.brandStudy);
  const currentIndex = brandProjects.findIndex((candidate) => candidate.slug === project.slug);
  const previous = brandProjects[(currentIndex - 1 + brandProjects.length) % brandProjects.length];
  const next = brandProjects[(currentIndex + 1) % brandProjects.length];
  const style: PavilionStyle = {
    "--pavilion-paper": direction.surfaces.paper,
    "--pavilion-ink": direction.surfaces.ink,
    "--pavilion-panel": direction.surfaces.panel,
    "--pavilion-dark": direction.surfaces.dark,
    "--pavilion-light": direction.surfaces.light,
    "--pavilion-accent": direction.surfaces.accent,
    "--pavilion-display": direction.fonts.display,
    "--pavilion-accent-font": direction.fonts.accent,
    "--pavilion-body": direction.fonts.body,
    "--pavilion-meta": direction.fonts.meta,
  };

  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11" immersive>
      <article
        className="brand-pavilion"
        data-brand={pavilion.code}
        data-project={project.slug}
        data-layout={direction.layout}
        data-gallery={direction.gallery}
        style={style}
      >
        <header className="brand-pavilion__hero" id="top">
          <ProjectPicture
            projectSlug={project.slug}
            slot="hero"
            sizes="100vw"
            className="brand-pavilion__hero-picture"
            imageClassName="brand-pavilion__hero-image"
            style={{ aspectRatio: "auto" }}
            priority
            fallback={
              <DesignProjectCover
                project={project}
                variant="hero"
                className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
              />
            }
          />
          <div className="brand-pavilion__hero-wash" aria-hidden="true" />

          <div className="brand-pavilion__hero-rail pavilion-shell pavilion-meta">
            <Link to="/poster-studies" className="brand-pavilion__back-link">
              <span aria-hidden="true">←</span> All design projects
            </Link>
            <div className="brand-pavilion__retail-menu" aria-hidden="true">
              {brandRetailMenus[pavilion.code].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <span>Independent concept · {project.index} / 24 · 2026</span>
          </div>

          <div className="brand-pavilion__hero-content pavilion-shell">
            <p className="brand-pavilion__hero-kicker pavilion-meta">{pavilion.hero.kicker}</p>
            <h1 className="brand-pavilion__wordmark" aria-label={project.brandStudy.brand}>
              <BrandMark code={pavilion.code} decorative />
            </h1>
            {pavilion.code === "prada" ? (
              <PradaPlaque className="brand-pavilion__hero-plaque" decorative />
            ) : null}
            <div className="brand-pavilion__hero-thesis">
              <p className="brand-pavilion__hero-statement">{pavilion.hero.statement}</p>
              <p className="brand-pavilion__hero-summary">{pavilion.hero.summary}</p>
              <a href="#philosophy" className="brand-pavilion__enter pavilion-meta">
                Enter the brand world <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </header>

        <nav className="brand-pavilion__chapter-nav" aria-label="Brand pavilion chapters">
          <div className="pavilion-shell brand-pavilion__chapter-nav-inner">
            <a href="#top" className="brand-pavilion__chapter-brand pavilion-meta">
              <BrandMark code={pavilion.code} decorative />
              <span>Brand pavilion</span>
            </a>
            <div className="brand-pavilion__chapter-links">
              {pavilionChapters.map((chapter) => (
                <a key={chapter.href} href={chapter.href} className="pavilion-meta">
                  <span>{chapter.number}</span> {chapter.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <BrandSignature code={pavilion.code} brand={project.brandStudy.brand} />

        <section className="brand-pavilion__section brand-pavilion__philosophy" id="philosophy">
          <div className="pavilion-shell">
            <PavilionSectionHeader
              code={pavilion.code}
              number="01"
              label="Philosophy"
              detail="Why the brand exists"
            />
            <PavilionScopeNote
              label="Official brand evidence"
              note="Paraphrased from the brand’s published materials"
              source={pavilion.philosophy.source}
            />
            <div className="brand-pavilion__philosophy-grid">
              <div className="brand-pavilion__philosophy-copy">
                <p className="brand-pavilion__section-kicker pavilion-meta">
                  {pavilion.philosophy.label}
                </p>
                <h2>{pavilion.philosophy.title}</h2>
                <p>{pavilion.philosophy.body}</p>
              </div>
              <PavilionFigure project={project} image={pavilion.philosophy.image} />
            </div>
          </div>
        </section>

        <section className="brand-pavilion__section brand-pavilion__values" id="values">
          <div className="pavilion-shell">
            <PavilionSectionHeader
              code={pavilion.code}
              number="02"
              label="Values"
              detail="What stays constant"
            />
            <PavilionScopeNote
              label="Official brand evidence"
              note="Published priorities stated in official materials"
              source={pavilion.valuesSource}
            />
            <div className="brand-pavilion__value-ledger">
              {pavilion.values.map((value) => (
                <article key={value.number} className="brand-pavilion__value">
                  <span className="brand-pavilion__value-number pavilion-meta">{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-pavilion__section brand-pavilion__needs" id="needs">
          <div className="pavilion-shell">
            <PavilionSectionHeader
              code={pavilion.code}
              number="03"
              label="Audience needs"
              detail="What the experience must solve"
              inverse
            />
            <PavilionScopeNote
              label="Official brand evidence"
              note="Customer priorities evidenced in published materials"
              source={pavilion.needs.source}
              inverse
            />
            <div className="brand-pavilion__needs-grid">
              <div className="brand-pavilion__needs-copy">
                <h2>{pavilion.needs.title}</h2>
                <p className="brand-pavilion__needs-intro">{pavilion.needs.intro}</p>
                <ol className="brand-pavilion__need-list">
                  {pavilion.needs.items.map((need, index) => (
                    <li key={need.title}>
                      <span className="pavilion-meta">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{need.title}</h3>
                        <p>{need.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="brand-pavilion__needs-images">
                {pavilion.needs.images.map((image) => (
                  <PavilionFigure key={image.slot} project={project} image={image} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="brand-pavilion__section brand-pavilion__principles" id="principles">
          <div className="pavilion-shell">
            <PavilionSectionHeader
              code={pavilion.code}
              number="04"
              label={pavilion.principles.label}
              detail="How ideas become decisions"
            />
            <PavilionScopeNote
              label="Official brand evidence"
              note="Published design and product-development principles"
              source={pavilion.principles.source}
            />
            <div className="brand-pavilion__principles-intro">
              <h2>{pavilion.principles.title}</h2>
              <p>{pavilion.principles.intro}</p>
            </div>
            <div className="brand-pavilion__principles-stage">
              <PavilionFigure project={project} image={pavilion.principles.image} />
              <ol className="brand-pavilion__principle-list">
                {pavilion.principles.items.map((principle) => (
                  <li key={principle.key}>
                    <span className="brand-pavilion__principle-key">{principle.key}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="brand-pavilion__section brand-pavilion__design" id="design">
          <div className="pavilion-shell">
            <PavilionSectionHeader
              code={pavilion.code}
              number="05"
              label="Design code"
              detail="Type, colour, material, space"
            />
            <PavilionScopeNote
              label="Independent virtual concept response"
              note="Original art direction, copy, and system design by Isaac Sohn"
            />
            <div className="brand-pavilion__design-heading">
              <h2>{pavilion.design.title}</h2>
              <p>{pavilion.design.intro}</p>
            </div>

            <PavilionFigure project={project} image={pavilion.design.image} featured />

            <div className="brand-pavilion__design-system">
              <div className="brand-pavilion__type-specimen">
                <p className="pavilion-meta">Official identifier / voice</p>
                <BrandMark code={pavilion.code} decorative />
                <span>{pavilion.hero.statement}</span>
              </div>
              <div
                className="brand-pavilion__palette"
                aria-label={`${project.title} colour system`}
              >
                <p className="pavilion-meta">Colour / role</p>
                <div>
                  {project.palette.map((swatch) => (
                    <span key={swatch.name} style={{ backgroundColor: swatch.value }}>
                      <b>{swatch.name}</b>
                      <small>{swatch.value}</small>
                    </span>
                  ))}
                </div>
              </div>
              <div className="brand-pavilion__materials">
                <p className="pavilion-meta">Material / behaviour</p>
                <ol>
                  {project.materials.map((material, index) => (
                    <li key={material}>
                      <span>{material}</span>
                      <small className="pavilion-meta">0{index + 1}</small>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="brand-pavilion__keyword-rail" aria-label="Design characteristics">
              {pavilion.design.keywords.map((keyword, index) => (
                <span key={keyword}>
                  {keyword}
                  <small className="pavilion-meta">0{index + 1}</small>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-pavilion__section brand-pavilion__world" id="world">
          <div className="pavilion-shell">
            <PavilionSectionHeader
              code={pavilion.code}
              number="06"
              label="Brand world"
              detail="The system in use"
              inverse
            />
            <PavilionScopeNote
              label="Independent virtual concept response"
              note="Uncommissioned imagery and applications created for portfolio study"
              inverse
            />
            <div className="brand-pavilion__world-intro">
              <h2>{pavilion.world.title}</h2>
              <p>{pavilion.world.intro}</p>
            </div>
            <div className="brand-pavilion__world-grid">
              {pavilion.world.scenes.map((scene, index) => (
                <PavilionFigure
                  key={scene.slot}
                  project={project}
                  image={scene}
                  sequence={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="brand-pavilion__research" aria-labelledby="research-basis">
          <div className="pavilion-shell brand-pavilion__research-grid">
            <div>
              <p className="pavilion-meta">Research basis / official primary sources</p>
              <h2 id="research-basis">The strategy begins with evidence.</h2>
            </div>
            <div>
              <p>
                Official brand and group materials informed the purpose, audience, and design
                principles. The pavilion narrative, art direction, copy, and imagery are Isaac
                Sohn&apos;s independent interpretation.
              </p>
              <ol>
                {pavilion.sources.map((source, index) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      <span className="pavilion-meta">0{index + 1}</span>
                      <span>{source.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <nav className="brand-pavilion__adjacent" aria-label="Adjacent brand pavilions">
          <BrandPavilionLink project={previous} direction="Previous" />
          <BrandPavilionLink project={next} direction="Next" />
        </nav>

        <footer className="brand-pavilion__disclosure">
          <div className="pavilion-shell">
            <strong lang="ko">가상 프로젝트</strong>
            <small lang="ko">
              포트폴리오를 위해 제작한 비상업적·비공식 브랜드 연구 프로젝트입니다.{" "}
              {project.brandStudy.brand} 및 관련 회사의 의뢰·승인·후원을 받은 작업이 아니며, 로고와
              상표의 권리는 각 권리자에게 있습니다. 이미지는 비상업적 디자인 연구를 위해 AI의 도움을
              받아 제작했습니다.
            </small>
          </div>
        </footer>
      </article>
    </MatLayout>
  );
}

function BrandSignature({ code, brand }: { code: BrandCode; brand: string }) {
  const content = brandSignatureContent[code];
  const headingId = `${code}-signature-heading`;

  return (
    <section className="brand-pavilion__identity" aria-labelledby={headingId}>
      <div className="pavilion-shell brand-pavilion__identity-inner">
        <div className="brand-pavilion__identity-mark" aria-hidden="true">
          <BrandMark code={code} decorative />
          {code === "prada" ? <PradaPlaque decorative /> : null}
        </div>
        <div className="brand-pavilion__identity-copy">
          <p className="pavilion-meta">{content.eyebrow}</p>
          <h2 id={headingId}>{content.title}</h2>
          <p>{content.body}</p>
        </div>
        <ol className="brand-pavilion__identity-codes" aria-label={`${brand} signature codes`}>
          {content.codes.map((item, index) => (
            <li key={item}>
              <span className="pavilion-meta">0{index + 1}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PavilionSectionHeader({
  code,
  number,
  label,
  detail,
  inverse = false,
}: {
  code: BrandCode;
  number: string;
  label: string;
  detail: string;
  inverse?: boolean;
}) {
  return (
    <header
      className="brand-pavilion__section-header pavilion-meta"
      data-inverse={inverse || undefined}
    >
      <span>{number}</span>
      <span>{label}</span>
      <span>{detail}</span>
      <span className="brand-pavilion__section-brand" aria-hidden="true">
        <BrandMark code={code} decorative />
      </span>
    </header>
  );
}

function PavilionScopeNote({
  label,
  note,
  source,
  inverse = false,
}: {
  label: string;
  note: string;
  source?: BrandPavilionSource;
  inverse?: boolean;
}) {
  return (
    <div
      className="brand-pavilion__scope-note flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-current/20 py-3"
      data-inverse={inverse || undefined}
    >
      <p className="m-0 flex min-w-0 items-center gap-2.5">
        <span className="h-1.5 w-1.5 shrink-0 bg-current opacity-70" aria-hidden="true" />
        <span className="brand-pavilion__scope-label pavilion-meta font-semibold">{label}</span>
        <span className="brand-pavilion__scope-detail hidden text-[0.72rem] leading-snug opacity-55 sm:inline">
          {note}
        </span>
      </p>
      {source ? <OfficialSourceLink source={source} /> : null}
    </div>
  );
}

function OfficialSourceLink({ source }: { source: BrandPavilionSource }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Official source: ${source.label}`}
      title={source.label}
      className="brand-pavilion__official-source group inline-flex shrink-0 items-center gap-1.5 border-b border-current/30 pb-0.5 text-inherit no-underline opacity-60 transition-[border-color,opacity] duration-200 hover:border-current hover:opacity-100 focus-visible:rounded-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      <span className="pavilion-meta">Official source</span>
      <span
        className="text-[0.72rem] leading-none transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  );
}

function PavilionFigure({
  project,
  image,
  featured = false,
  sequence,
}: {
  project: DesignProject;
  image: BrandPavilionImage;
  featured?: boolean;
  sequence?: number;
}) {
  const fallbackVariant = image.layout === "portrait" ? "poster" : "screen";

  return (
    <figure
      className="brand-pavilion__figure"
      data-layout={image.layout ?? "landscape"}
      data-featured={featured || undefined}
    >
      <ProjectPicture
        projectSlug={project.slug}
        slot={image.slot}
        sizes={
          featured || image.layout === "wide"
            ? "(min-width: 1280px) 72vw, (min-width: 768px) calc(100vw - 5rem), 100vw"
            : "(min-width: 1280px) 36vw, (min-width: 768px) 48vw, 100vw"
        }
        imageClassName="brand-pavilion__figure-image"
        fallback={
          <DesignProjectCover
            project={project}
            variant={fallbackVariant}
            showTitle={false}
            className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
          />
        }
      />
      <figcaption>
        <span className="brand-pavilion__figure-index pavilion-meta">
          {sequence ? String(sequence).padStart(2, "0") : pavilionFigureCodes[image.slot]}
        </span>
        <span>
          <span className="brand-pavilion__figure-eyebrow pavilion-meta">{image.eyebrow}</span>
          <strong>{image.title}</strong>
          <small>{image.copy}</small>
        </span>
      </figcaption>
    </figure>
  );
}

function BrandPavilionLink({
  project,
  direction,
}: {
  project: DesignProject;
  direction: "Previous" | "Next";
}) {
  return (
    <Link to="/poster-studies/$slug" params={{ slug: project.slug }}>
      <span className="pavilion-meta">
        {direction} pavilion / {project.index}
      </span>
      <strong>{project.title}</strong>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
