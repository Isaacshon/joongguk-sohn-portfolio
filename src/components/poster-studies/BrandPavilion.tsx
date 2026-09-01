import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

import { MatLayout } from "@/components/MatLayout";
import { BrandMark, PradaPlaque, type BrandCode } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getNewBrandWorldRenderer } from "@/components/poster-studies/brand-worlds";
import {
  getLegacyBrandPavilionChoreography,
  type BrandPavilionChapter,
  type PavilionChapterKey,
  type PavilionStructuralModuleKey,
} from "@/lib/brand-pavilion-choreography";
import { getDesignProjectArtDirection } from "@/lib/design-project-art-direction";
import {
  getBrandPavilion,
  type BrandPavilionImage,
  type BrandPavilionProfile,
  type BrandPavilionSource,
} from "@/lib/brand-pavilions";
import { designProjectCount, designProjects, type DesignProject } from "@/lib/design-projects";

type PavilionStyle = CSSProperties & Record<`--${string}`, string | number>;

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
  editorialG: "G",
  editorialH: "H",
  editorialI: "I",
  editorialJ: "J",
  editorialK: "K",
  editorialL: "L",
  editorialM: "M",
  editorialN: "N",
  editorialO: "O",
  editorialP: "P",
};

const brandRetailMenus: Record<BrandCode, string[]> = {
  hm: ["Women", "Men", "Kids", "Home", "Studio"],
  zara: ["Woman", "Man", "Kids", "Beauty"],
  uniqlo: ["Women", "Men", "Kids", "Baby"],
  prada: ["Women", "Men", "Bags", "Pradasphere"],
  muji: ["Household", "Apparel", "Food", "Found MUJI"],
  levis: ["Denim", "Originals", "Repair", "Archive"],
  polo: ["Men", "Women", "Home", "RL Magazine"],
  nike: ["New", "Men", "Women", "Kids", "Sport"],
};

type BrandWorldview = {
  thesis: string;
  codes: readonly string[];
};

const brandThesisLines: Partial<Record<BrandCode, readonly string[]>> = {
  uniqlo: ["Comfort is quiet", "because the work happens", "before you notice it."],
  prada: ["The familiar becomes new", "when its context shifts."],
};

function BrandThesis({ code, text }: { code: BrandCode; text: string }) {
  const lines = brandThesisLines[code];

  if (!lines) return <>{text}</>;

  return (
    <>
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </>
  );
}

export function BrandPavilion({ project }: { project: DesignProject }) {
  const pavilion = getBrandPavilion(project.slug);

  if (!pavilion || !project.brandStudy) return null;

  const NewBrandWorld = getNewBrandWorldRenderer(pavilion.code);

  if (NewBrandWorld) {
    return <NewBrandWorld project={project} pavilion={pavilion} />;
  }

  const choreography = getLegacyBrandPavilionChoreography(pavilion.code);

  if (!choreography) return null;

  const direction = getDesignProjectArtDirection(project);
  const brandProjects = designProjects.filter((candidate) => candidate.brandStudy);
  const currentIndex = brandProjects.findIndex((candidate) => candidate.slug === project.slug);
  const previous = brandProjects[(currentIndex - 1 + brandProjects.length) % brandProjects.length];
  const next = brandProjects[(currentIndex + 1) % brandProjects.length];
  const worldview: BrandWorldview = {
    thesis: project.statement,
    codes: pavilion.design.keywords.slice(0, 3),
  };
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
        <PavilionHero
          pavilion={pavilion}
          project={project}
          worldview={worldview}
          firstChapterId={choreography[0].id}
        />

        <nav className="brand-pavilion__chapter-nav" aria-label="Brand pavilion chapters">
          <div className="pavilion-shell brand-pavilion__chapter-nav-inner">
            <a href="#top" className="brand-pavilion__chapter-brand pavilion-meta">
              <BrandMark code={pavilion.code} decorative />
              <span>Brand pavilion</span>
            </a>
            <div className="brand-pavilion__chapter-links">
              {choreography.map((chapter, index) => (
                <a key={chapter.id} href={`#${chapter.id}`} className="pavilion-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span> {chapter.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <BrandSignature
          code={pavilion.code}
          brand={project.brandStudy.brand}
          project={project}
          worldview={worldview}
          summary={pavilion.hero.summary}
        />

        <div className="brand-pavilion__chapters" data-choreography={pavilion.code}>
          {choreography.map((chapter, index) => (
            <PavilionChapterScene
              key={chapter.id}
              chapter={chapter}
              number={String(index + 1).padStart(2, "0")}
              pavilion={pavilion}
              project={project}
              worldview={worldview}
            />
          ))}
        </div>

        <BrandWorldviewClosing
          code={pavilion.code}
          brand={project.brandStudy.brand}
          worldview={worldview}
          summary={pavilion.hero.summary}
          proofs={pavilion.world.scenes.map((scene) => scene.title)}
        />

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

function PavilionHero({
  pavilion,
  project,
  worldview,
  firstChapterId,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
  worldview: BrandWorldview;
  firstChapterId: string;
}) {
  if (pavilion.code === "prada") {
    return (
      <header className="brand-pavilion__hero brand-pavilion__hero--prada" id="top">
        <div className="brand-pavilion__prada-rail pavilion-meta">
          <Link to="/poster-studies" className="brand-pavilion__back-link">
            <span aria-hidden="true">←</span> Projects
          </Link>
          <h1 className="brand-pavilion__prada-rail-wordmark" aria-label="PRADA">
            <BrandMark code="prada" decorative />
          </h1>
          <span>Independent concept</span>
        </div>

        <ProjectPicture
          projectSlug={project.slug}
          slot="editorialF"
          sizes="(min-width: 768px) calc(100vw - 40px), calc(100vw - 20px)"
          className="brand-pavilion__prada-hero-picture"
          imageClassName="brand-pavilion__prada-hero-image"
          priority
          fallback={
            <DesignProjectCover
              project={project}
              variant="hero"
              className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
            />
          }
        />

        <div className="brand-pavilion__prada-intro">
          <p className="pavilion-meta">PRADA / editorial study / 2026</p>
          <p className="brand-pavilion__hero-statement brand-pavilion__thesis-lines">
            <BrandThesis code="prada" text={worldview.thesis} />
          </p>
          <p className="brand-pavilion__hero-summary">{pavilion.hero.summary}</p>
          <a href={`#${firstChapterId}`} className="brand-pavilion__enter pavilion-meta">
            Enter the brand world <span aria-hidden="true">↘</span>
          </a>
        </div>
      </header>
    );
  }

  return (
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
        <span>
          Independent concept · {project.index} / {designProjectCount} · 2026
        </span>
      </div>

      <div className="brand-pavilion__hero-content pavilion-shell">
        <p className="brand-pavilion__hero-kicker pavilion-meta">{pavilion.hero.kicker}</p>
        <h1 className="brand-pavilion__wordmark" aria-label={project.brandStudy?.brand}>
          <BrandMark code={pavilion.code} decorative />
        </h1>
        <div className="brand-pavilion__hero-thesis">
          <p className="brand-pavilion__hero-statement brand-pavilion__thesis-lines">
            <BrandThesis code={pavilion.code} text={worldview.thesis} />
          </p>
          <p className="brand-pavilion__hero-summary">{pavilion.hero.summary}</p>
          <a href={`#${firstChapterId}`} className="brand-pavilion__enter pavilion-meta">
            Enter the brand world <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </header>
  );
}

type PavilionChapterSceneProps = {
  chapter: BrandPavilionChapter;
  number: string;
  pavilion: BrandPavilionProfile;
  project: DesignProject;
  worldview: BrandWorldview;
};

function PavilionChapterScene({
  chapter,
  number,
  pavilion,
  project,
  worldview,
}: PavilionChapterSceneProps) {
  const scene = renderChapterScene({ chapter, number, pavilion, project, worldview });

  return (
    <>
      {scene}
      {chapter.moduleAfter ? (
        <BrandStructuralModule
          moduleKey={chapter.moduleAfter}
          pavilion={pavilion}
          project={project}
          worldview={worldview}
        />
      ) : null}
    </>
  );
}

function renderChapterScene({
  chapter,
  number,
  pavilion,
  project,
  worldview,
}: PavilionChapterSceneProps): ReactNode {
  const code = pavilion.code;
  const heading = (
    <PavilionSectionHeader
      code={code}
      number={number}
      label={chapter.label}
      detail={chapter.detail}
      source={getChapterSource(chapter.key, pavilion)}
    />
  );

  if (chapter.key === "philosophy") {
    return (
      <section
        className="brand-pavilion__section brand-pavilion__philosophy"
        id={chapter.id}
        data-chapter={chapter.key}
      >
        <div className="pavilion-shell">
          {heading}
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
    );
  }

  if (chapter.key === "values") {
    return (
      <section
        className="brand-pavilion__section brand-pavilion__values"
        id={chapter.id}
        data-chapter={chapter.key}
      >
        <div className="pavilion-shell">
          {heading}
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
    );
  }

  if (chapter.key === "needs") {
    return (
      <section
        className="brand-pavilion__section brand-pavilion__needs"
        id={chapter.id}
        data-chapter={chapter.key}
      >
        <div className="pavilion-shell">
          <PavilionSectionHeader
            code={code}
            number={number}
            label={chapter.label}
            detail={chapter.detail}
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
    );
  }

  if (chapter.key === "principles") {
    return (
      <section
        className="brand-pavilion__section brand-pavilion__principles"
        id={chapter.id}
        data-chapter={chapter.key}
      >
        <div className="pavilion-shell">
          {heading}
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
    );
  }

  if (chapter.key === "design") {
    return (
      <section
        className="brand-pavilion__section brand-pavilion__design"
        id={chapter.id}
        data-chapter={chapter.key}
      >
        <div className="pavilion-shell">
          {heading}
          <div className="brand-pavilion__design-heading">
            <h2>{pavilion.design.title}</h2>
            <p>{pavilion.design.intro}</p>
          </div>

          <PavilionFigure project={project} image={pavilion.design.image} featured />

          <div className="brand-pavilion__design-system">
            <div className="brand-pavilion__type-specimen">
              <p className="pavilion-meta">Official identifier / concept voice</p>
              <BrandMark code={code} decorative />
              <span>{worldview.thesis}</span>
            </div>
            <div className="brand-pavilion__palette" aria-label={`${project.title} colour system`}>
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
    );
  }

  return (
    <section
      className="brand-pavilion__section brand-pavilion__world"
      id={chapter.id}
      data-chapter={chapter.key}
    >
      <div className="pavilion-shell">
        <PavilionSectionHeader
          code={code}
          number={number}
          label={chapter.label}
          detail={chapter.detail}
          inverse
        />
        <div className="brand-pavilion__world-intro">
          <h2>{pavilion.world.title}</h2>
          <p>{pavilion.world.intro}</p>
        </div>
        <div className="brand-pavilion__world-grid">
          {pavilion.world.scenes.map((scene, index) => (
            <PavilionFigure key={scene.slot} project={project} image={scene} sequence={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getChapterSource(
  chapter: PavilionChapterKey,
  pavilion: BrandPavilionProfile,
): BrandPavilionSource | undefined {
  if (chapter === "philosophy") return pavilion.philosophy.source;
  if (chapter === "values") return pavilion.valuesSource;
  if (chapter === "needs") return pavilion.needs.source;
  if (chapter === "principles") return pavilion.principles.source;
  return undefined;
}

function BrandStructuralModule({
  moduleKey,
  pavilion,
  project,
  worldview,
}: {
  moduleKey: PavilionStructuralModuleKey;
  pavilion: BrandPavilionProfile;
  project: DesignProject;
  worldview: BrandWorldview;
}) {
  switch (moduleKey) {
    case "hm-second-life-tag":
      return <HmSecondLifeTag project={project} worldview={worldview} />;
    case "hm-circular-rack":
      return <HmCircularRack pavilion={pavilion} project={project} />;
    case "zara-negative-space":
      return <ZaraNegativeSpace pavilion={pavilion} project={project} />;
    case "zara-air-gap":
      return <ZaraAirGap pavilion={pavilion} project={project} />;
    case "uniqlo-comfort-matrix":
      return <UniqloComfortMatrix pavilion={pavilion} project={project} />;
    case "uniqlo-feedback-loop":
      return <UniqloFeedbackLoop pavilion={pavilion} project={project} />;
    case "prada-code-shift":
      return <PradaCodeShift pavilion={pavilion} project={project} />;
    case "prada-movable-wall":
      return <PradaMovableWall pavilion={pavilion} project={project} />;
  }
}

function StructuralModuleShell({
  brand,
  moduleName,
  children,
}: {
  brand: BrandCode;
  moduleName: string;
  children: ReactNode;
}) {
  return (
    <section
      className="brand-pavilion__structural-module"
      data-brand-module={brand}
      data-module={moduleName}
      aria-label={`${moduleName.replaceAll("-", " ")} brand system module`}
    >
      <div className="pavilion-shell">{children}</div>
    </section>
  );
}

function HmSecondLifeTag({
  project,
  worldview,
}: {
  project: DesignProject;
  worldview: BrandWorldview;
}) {
  const actions = ["Wear", "Repair", "Rewear", "Return"];

  return (
    <StructuralModuleShell brand="hm" moduleName="second-life-tag">
      <div className="hm-second-life-tag">
        <div className="hm-second-life-tag__image">
          <ProjectPicture
            projectSlug={project.slug}
            slot="tactile"
            sizes="(min-width: 1024px) 44vw, 100vw"
          />
        </div>
        <div className="hm-second-life-tag__label">
          <div className="hm-second-life-tag__mark">
            <BrandMark code="hm" decorative />
            <span className="pavilion-meta">Second-life garment tag / 2026</span>
          </div>
          <h2>{worldview.thesis}</h2>
          <ol>
            {actions.map((action, index) => (
              <li key={action} data-current={index === 2 || undefined}>
                <span className="pavilion-meta">0{index + 1}</span>
                <strong>{action}</strong>
              </li>
            ))}
          </ol>
          <p>{project.rule}</p>
        </div>
      </div>
    </StructuralModuleShell>
  );
}

function HmCircularRack({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  return (
    <StructuralModuleShell brand="hm" moduleName="circular-retail-rack">
      <div className="hm-circular-rack">
        <header>
          <span className="pavilion-meta">Retail activation / one open loop</span>
          <h2>Choose it. Wear it. Keep it moving.</h2>
        </header>
        <div className="hm-circular-rack__stages">
          {pavilion.world.scenes.slice(0, 3).map((scene, index) => (
            <article key={scene.slot}>
              <span className="pavilion-meta">0{index + 1}</span>
              <strong>{scene.title}</strong>
              <p>{scene.copy}</p>
            </article>
          ))}
        </div>
        <ProjectPicture
          projectSlug={project.slug}
          slot="spatial"
          sizes="(min-width: 1024px) 84vw, 100vw"
        />
      </div>
    </StructuralModuleShell>
  );
}

function ZaraNegativeSpace({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  return (
    <StructuralModuleShell brand="zara" moduleName="negative-space-lookbook">
      <div className="zara-negative-space">
        <div className="zara-negative-space__image">
          <ProjectPicture
            projectSlug={project.slug}
            slot="editorialA"
            sizes="(min-width: 1024px) 54vw, 100vw"
          />
        </div>
        <div className="zara-negative-space__copy">
          <BrandMark code="zara" decorative />
          <p className="pavilion-meta">Look 01 / atmosphere study</p>
          <h2>{pavilion.design.keywords[0]}</h2>
          <p>{project.rule}</p>
          <dl>
            <div>
              <dt className="pavilion-meta">Image</dt>
              <dd>07 columns</dd>
            </div>
            <div>
              <dt className="pavilion-meta">Air</dt>
              <dd>05 columns</dd>
            </div>
          </dl>
        </div>
      </div>
    </StructuralModuleShell>
  );
}

function ZaraAirGap({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  const scenes = pavilion.world.scenes.slice(0, 2);

  return (
    <StructuralModuleShell brand="zara" moduleName="air-gap-window">
      <header className="zara-air-gap__header">
        <p className="pavilion-meta">Window / screen / measured pause</p>
        <h2>The edit holds because the space between images is deliberate.</h2>
      </header>
      <div className="zara-air-gap">
        {scenes.map((scene, index) => (
          <figure key={scene.slot} data-plane={index + 1}>
            <ProjectPicture
              projectSlug={project.slug}
              slot={scene.slot}
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
            <figcaption>
              <span className="pavilion-meta">Plane 0{index + 1}</span>
              <strong>{scene.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </StructuralModuleShell>
  );
}

function UniqloComfortMatrix({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  const states = ["Rest", "Walk", "Commute", "Layer"];

  return (
    <StructuralModuleShell brand="uniqlo" moduleName="comfort-state-matrix">
      <div className="uniqlo-comfort-matrix">
        <header>
          <BrandMark code="uniqlo" decorative />
          <div>
            <p className="pavilion-meta">Life condition / product response</p>
            <h2>Comfort is tested in the day it has to serve.</h2>
          </div>
        </header>
        <div className="uniqlo-comfort-matrix__grid">
          {states.map((state, index) => {
            const need = pavilion.needs.items[index % pavilion.needs.items.length];
            return (
              <article key={state}>
                <span className="pavilion-meta">
                  0{index + 1} / {state}
                </span>
                <strong>{need.title}</strong>
                <p>{need.body}</p>
                <small className="pavilion-meta">{project.materials[index]}</small>
              </article>
            );
          })}
        </div>
      </div>
    </StructuralModuleShell>
  );
}

function UniqloFeedbackLoop({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  return (
    <StructuralModuleShell brand="uniqlo" moduleName="feedback-to-feature-loop">
      <div className="uniqlo-feedback-loop">
        <div className="uniqlo-feedback-loop__image">
          <ProjectPicture
            projectSlug={project.slug}
            slot="editorialC"
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
        <div className="uniqlo-feedback-loop__steps">
          <p className="pavilion-meta">Customer feedback / development cycle</p>
          <h2>{pavilion.principles.title}</h2>
          <ol>
            {pavilion.principles.items.map((principle, index) => (
              <li key={principle.key}>
                <span className="pavilion-meta">0{index + 1}</span>
                <div>
                  <strong>{principle.title}</strong>
                  <p>{principle.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </StructuralModuleShell>
  );
}

function PradaCodeShift({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  const shifts = ["Crop", "Juxtaposition", "Scale"];

  return (
    <StructuralModuleShell brand="prada" moduleName="code-shift-table">
      <div className="prada-code-shift">
        <header>
          <PradaPlaque decorative />
          <div>
            <p className="pavilion-meta">Observation / one code, changed context</p>
            <h2>The familiar is held long enough to become strange again.</h2>
          </div>
        </header>
        <div className="prada-code-shift__table">
          {shifts.map((shift, index) => (
            <article key={shift}>
              <span className="pavilion-meta">0{index + 1}</span>
              <h3>{shift}</h3>
              <p>{pavilion.design.keywords[index] ?? project.materials[index]}</p>
            </article>
          ))}
        </div>
        <p className="prada-code-shift__rule">{project.rule}</p>
      </div>
    </StructuralModuleShell>
  );
}

function PradaMovableWall({
  pavilion,
  project,
}: {
  pavilion: BrandPavilionProfile;
  project: DesignProject;
}) {
  return (
    <StructuralModuleShell brand="prada" moduleName="movable-wall-plan">
      <div className="prada-movable-wall">
        <div className="prada-movable-wall__image">
          <ProjectPicture
            projectSlug={project.slug}
            slot="spatial"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
          <div className="prada-movable-wall__planes" aria-hidden="true">
            {project.materials.map((material, index) => (
              <span key={material} data-plane={index + 1} />
            ))}
          </div>
        </div>
        <div className="prada-movable-wall__legend">
          <div>
            <p className="pavilion-meta">Exhibition plan / adjustable room</p>
            <h2>{pavilion.world.title}</h2>
          </div>
          <ol>
            {project.materials.map((material, index) => (
              <li key={material}>
                <span className="pavilion-meta">P{index + 1}</span>
                <strong>{material}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </StructuralModuleShell>
  );
}

function BrandSignature({
  code,
  brand,
  project,
  worldview,
  summary,
}: {
  code: BrandCode;
  brand: string;
  project: DesignProject;
  worldview: BrandWorldview;
  summary: string;
}) {
  const headingId = `${code}-signature-heading`;

  return (
    <section className="brand-pavilion__identity" aria-labelledby={headingId}>
      <div className="pavilion-shell brand-pavilion__identity-inner">
        {code === "prada" ? null : (
          <div className="brand-pavilion__identity-mark" aria-hidden="true">
            <BrandMark code={code} decorative />
          </div>
        )}
        <div className="brand-pavilion__identity-copy">
          <p className="pavilion-meta">{brand} / one worldview, every touchpoint</p>
          <h2 id={headingId} className="brand-pavilion__thesis-lines">
            <BrandThesis code={code} text={worldview.thesis} />
          </h2>
          <p>{summary}</p>
        </div>
        {code === "prada" ? (
          <figure className="brand-pavilion__identity-editorial">
            <ProjectPicture
              projectSlug={project.slug}
              slot="editorialF"
              sizes="(min-width: 1280px) 1520px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2rem)"
              className="brand-pavilion__identity-editorial-picture"
              imageClassName="brand-pavilion__identity-editorial-image"
              style={{ aspectRatio: "auto" }}
            />
            <figcaption className="pavilion-meta">
              <span>Editorial study / quiet gesture, exact frame</span>
              <span>Independent concept · 2026</span>
            </figcaption>
          </figure>
        ) : null}
        <ol className="brand-pavilion__identity-codes" aria-label={`${brand} signature codes`}>
          {worldview.codes.map((item, index) => (
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
  source,
  inverse = false,
}: {
  code: BrandCode;
  number: string;
  label: string;
  detail: string;
  source?: BrandPavilionSource;
  inverse?: boolean;
}) {
  return (
    <div className="brand-pavilion__section-heading-group" data-inverse={inverse || undefined}>
      <header
        className="brand-pavilion__section-header pavilion-meta"
        data-inverse={inverse || undefined}
      >
        <span>{number}</span>
        <span>{label}</span>
        <span className="brand-pavilion__section-detail">
          <span>{detail}</span>
          {source ? <OfficialSourceLink source={source} /> : null}
        </span>
        <span className="brand-pavilion__section-brand" aria-hidden="true">
          <BrandMark code={code} decorative />
        </span>
      </header>
    </div>
  );
}

function BrandWorldviewClosing({
  code,
  brand,
  worldview,
  summary,
  proofs,
}: {
  code: BrandCode;
  brand: string;
  worldview: BrandWorldview;
  summary: string;
  proofs: string[];
}) {
  const headingId = `${code}-worldview-return`;

  return (
    <section className="brand-pavilion__worldview-closing" aria-labelledby={headingId}>
      <div className="pavilion-shell brand-pavilion__worldview-closing-inner">
        <div className="brand-pavilion__worldview-closing-mark" aria-hidden="true">
          <BrandMark code={code} decorative />
          {code === "prada" ? <PradaPlaque decorative /> : null}
        </div>
        <div className="brand-pavilion__worldview-closing-copy">
          <p className="pavilion-meta">Return / {brand} worldview</p>
          <h2 id={headingId} className="brand-pavilion__thesis-lines">
            <BrandThesis code={code} text={worldview.thesis} />
          </h2>
          <p>{summary}</p>
        </div>
        <ol aria-label={`${brand} worldview proof sequence`}>
          {proofs.map((proof, index) => (
            <li key={proof}>
              <span className="pavilion-meta">0{index + 1}</span>
              <strong>{proof}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
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
