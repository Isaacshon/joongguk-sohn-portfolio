import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { MatLayout } from "@/components/MatLayout";
import { BrandProjectMark } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import type { DesignProjectCoreMediaSlot } from "@/lib/design-project-media";
import { designProjects, type DesignProject } from "@/lib/design-projects";
import { projects, type Project } from "@/lib/projects";

import "@/work-studio.css";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Isaac Sohn" },
      {
        name: "description",
        content:
          "Independent brand, editorial, art direction, digital, social, and visual design projects by Isaac Sohn.",
      },
      { property: "og:title", content: "Work — Isaac Sohn" },
      {
        property: "og:description",
        content: "Individual projects and complete case studies by Isaac Sohn.",
      },
    ],
  }),
  component: Work,
});

const featuredBrandSlugs = [
  "hm-second-sun",
  "zara-the-air-between",
  "uniqlo-comfort-measured",
  "prada-the-quiet-error",
] as const;

type FeaturedBrandSlug = (typeof featuredBrandSlugs)[number];
type BrandIndexLayout = "lead" | "wide" | "portrait" | "closing";

type BrandIndexConfig = {
  slot: DesignProjectCoreMediaSlot;
  aspectRatio: string;
  layout: BrandIndexLayout;
};

const brandIndexRegistry = {
  "hm-second-sun": { slot: "hero", aspectRatio: "16 / 9", layout: "lead" },
  "zara-the-air-between": { slot: "context", aspectRatio: "3 / 2", layout: "wide" },
  "uniqlo-comfort-measured": {
    slot: "context",
    aspectRatio: "4 / 5",
    layout: "portrait",
  },
  "prada-the-quiet-error": { slot: "hero", aspectRatio: "16 / 10", layout: "closing" },
} satisfies Record<FeaturedBrandSlug, BrandIndexConfig>;

const featuredBrandProjects = featuredBrandSlugs.flatMap((slug) => {
  const project = designProjects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const personalDesignProjectSlugs = [
  "afterimage",
  "night-index",
  "public-memory",
  "soft-machine",
  "memory-type",
  "79w",
  "tactile-forecast",
  "tessera-live",
  "field-notes-37",
  "horalis",
  "signal-noise",
  "tidehold",
  "last-letter",
  "backmatter",
  "chroma-tempo",
  "offsort",
  "seamframe",
  "two-shores",
  "selv-00",
  "coldkiln",
] as const;

type IndependentDesignSlug = (typeof personalDesignProjectSlugs)[number];
type PersonalIndexLayout =
  | "feature-left"
  | "portrait-right"
  | "compact-left"
  | "wide-right"
  | "full"
  | "portrait-left"
  | "feature-right"
  | "wide-left"
  | "compact-right"
  | "center";

type DesignIndexConfig = {
  slot: DesignProjectCoreMediaSlot;
  aspectRatio: string;
  layout: PersonalIndexLayout;
  coverVariant: "card" | "poster" | "screen";
};

const designIndexRegistry = {
  afterimage: {
    slot: "tactile",
    aspectRatio: "16 / 10",
    layout: "feature-left",
    coverVariant: "screen",
  },
  "night-index": {
    slot: "hero",
    aspectRatio: "4 / 5",
    layout: "portrait-right",
    coverVariant: "poster",
  },
  "public-memory": {
    slot: "spatial",
    aspectRatio: "4 / 3",
    layout: "compact-left",
    coverVariant: "screen",
  },
  "soft-machine": {
    slot: "tactile",
    aspectRatio: "3 / 2",
    layout: "wide-right",
    coverVariant: "screen",
  },
  "memory-type": {
    slot: "hero",
    aspectRatio: "16 / 9",
    layout: "full",
    coverVariant: "poster",
  },
  "79w": {
    slot: "hero",
    aspectRatio: "4 / 5",
    layout: "portrait-left",
    coverVariant: "screen",
  },
  "tactile-forecast": {
    slot: "tactile",
    aspectRatio: "16 / 10",
    layout: "feature-right",
    coverVariant: "screen",
  },
  "tessera-live": {
    slot: "spatial",
    aspectRatio: "3 / 2",
    layout: "wide-left",
    coverVariant: "card",
  },
  "field-notes-37": {
    slot: "context",
    aspectRatio: "4 / 5",
    layout: "compact-right",
    coverVariant: "poster",
  },
  horalis: {
    slot: "tactile",
    aspectRatio: "16 / 9",
    layout: "center",
    coverVariant: "screen",
  },
  "signal-noise": {
    slot: "context",
    aspectRatio: "4 / 5",
    layout: "portrait-left",
    coverVariant: "screen",
  },
  tidehold: {
    slot: "hero",
    aspectRatio: "16 / 10",
    layout: "feature-right",
    coverVariant: "screen",
  },
  "last-letter": {
    slot: "tactile",
    aspectRatio: "3 / 2",
    layout: "wide-left",
    coverVariant: "poster",
  },
  backmatter: {
    slot: "context",
    aspectRatio: "4 / 5",
    layout: "compact-right",
    coverVariant: "poster",
  },
  "chroma-tempo": {
    slot: "context",
    aspectRatio: "16 / 9",
    layout: "full",
    coverVariant: "poster",
  },
  offsort: {
    slot: "tactile",
    aspectRatio: "1 / 1",
    layout: "compact-left",
    coverVariant: "card",
  },
  seamframe: {
    slot: "tactile",
    aspectRatio: "3 / 2",
    layout: "wide-right",
    coverVariant: "screen",
  },
  "two-shores": {
    slot: "hero",
    aspectRatio: "4 / 5",
    layout: "portrait-left",
    coverVariant: "poster",
  },
  "selv-00": {
    slot: "hero",
    aspectRatio: "16 / 10",
    layout: "feature-right",
    coverVariant: "poster",
  },
  coldkiln: {
    slot: "tactile",
    aspectRatio: "16 / 9",
    layout: "center",
    coverVariant: "screen",
  },
} satisfies Record<IndependentDesignSlug, DesignIndexConfig>;

type WorkMediaStyle = CSSProperties & {
  "--work-media-ratio"?: string;
};

function getRequiredDesignProject(slug: IndependentDesignSlug) {
  const project = designProjects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing design project: ${slug}`);
  return project;
}

const personalDesignProjects = personalDesignProjectSlugs.map(getRequiredDesignProject);
const portfolioArchiveItems = projects;
const personalProjectCount = personalDesignProjects.length + portfolioArchiveItems.length;
const visibleProjectCount = featuredBrandProjects.length + personalProjectCount;

function Work() {
  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <div className="work-studio">
        <header className="work-studio__intro">
          <div className="work-studio__shell work-studio__intro-grid">
            <div>
              <p className="work-studio__eyebrow">Isaac Sohn / Selected work</p>
              <h1 className="work-studio__display">Work</h1>
            </div>

            <div className="work-studio__intro-copy">
              <p className="work-studio__lede">
                Brand worlds, visual systems, and independently authored projects, shown through the
                work itself.
              </p>
              <p className="work-studio__intro-note">
                {visibleProjectCount} complete case studies across identity, fashion, editorial,
                digital, and art direction.
              </p>
              <nav className="work-studio__jump-nav" aria-label="Work sections">
                <a href="#brand-projects">
                  <span>01</span>
                  Brand projects
                  <b>04</b>
                </a>
                <a href="#personal-projects">
                  <span>02</span>
                  Personal projects
                  <b>{String(personalProjectCount).padStart(2, "0")}</b>
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <section id="brand-projects" aria-labelledby="brand-projects-heading">
            <div className="work-studio__shell work-studio__section-shell">
              <SectionHeading
                number="01"
                title="Brand projects"
                description="Four independent brand worlds, each led by its own imagery, identity, and editorial rhythm."
                headingId="brand-projects-heading"
              />

              <ol className="work-studio__brand-grid">
                {featuredBrandProjects.map((project) => (
                  <FeaturedBrandCard key={project.slug} project={project} />
                ))}
              </ol>

              <p className="work-studio__legal">
                Independent, unofficial concept studies created for portfolio presentation. All
                trademarks and brand identifiers belong to their respective owners.
              </p>
            </div>
          </section>

          <section
            id="personal-projects"
            aria-labelledby="personal-projects-heading"
            className="work-studio__personal-section"
          >
            <div className="work-studio__shell work-studio__section-shell">
              <SectionHeading
                number="02"
                title="Personal projects"
                description="Twenty distinct visual systems. Image, scale, proportion, and pacing change with each idea—not with a reusable card template."
                headingId="personal-projects-heading"
              />

              <ol className="work-studio__personal-grid">
                {personalDesignProjects.map((project) => (
                  <DesignWorkCard key={project.slug} project={project} />
                ))}
              </ol>

              <section className="work-studio__archive" aria-labelledby="applied-work-heading">
                <header className="work-studio__archive-heading">
                  <p className="work-studio__eyebrow">Applied practice</p>
                  <h3 id="applied-work-heading">Selected client &amp; digital work</h3>
                </header>
                <ol className="work-studio__archive-grid">
                  {portfolioArchiveItems.map((project, index) => (
                    <li key={project.slug}>
                      <PortfolioWorkRow project={project} index={index + 1} />
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </section>
        </main>
      </div>
    </MatLayout>
  );
}

function SectionHeading({
  number,
  title,
  description,
  headingId,
}: {
  number: string;
  title: string;
  description: string;
  headingId: string;
}) {
  return (
    <header className="work-studio__section-heading">
      <p className="work-studio__section-number">{number}</p>
      <h2 id={headingId}>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

function FeaturedBrandCard({ project }: { project: DesignProject }) {
  const slug = project.slug as FeaturedBrandSlug;
  const config = brandIndexRegistry[slug];

  if (!config) return null;

  const mediaStyle: WorkMediaStyle = { "--work-media-ratio": config.aspectRatio };

  return (
    <li className={`work-studio__brand-item work-studio__brand-item--${config.layout}`}>
      <Link
        to="/poster-studies/$slug"
        params={{ slug: project.slug }}
        aria-label={`View the ${project.title} brand project`}
        className="work-studio__project-link"
      >
        <article>
          <div className="work-studio__media work-studio__brand-media" style={mediaStyle}>
            <ProjectPicture
              projectSlug={project.slug}
              slot={config.slot}
              sizes="(min-width: 1500px) 1400px, (min-width: 900px) 92vw, calc(100vw - 2rem)"
              priority={config.layout === "lead"}
              className="work-studio__picture"
              imageClassName="work-studio__image"
              style={{ aspectRatio: "auto" }}
              fallback={
                <DesignProjectCover
                  project={project}
                  variant="card"
                  className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
                />
              }
            />
            <BrandProjectMark projectSlug={project.slug} className="work-studio__brand-mark" />
          </div>

          <div className="work-studio__brand-caption">
            <div className="work-studio__brand-title">
              <p>{project.index} / Independent brand project</p>
              <h3>{project.title}</h3>
            </div>
            <p className="work-studio__brand-statement">{project.statement}</p>
            <div className="work-studio__brand-meta">
              <p>{project.discipline}</p>
              <span>View project ↗</span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}

function DesignWorkCard({ project }: { project: DesignProject }) {
  const config = designIndexRegistry[project.slug as IndependentDesignSlug];

  if (!config) return null;

  const mediaStyle: WorkMediaStyle = { "--work-media-ratio": config.aspectRatio };

  return (
    <li className={`work-studio__personal-item work-studio__personal-item--${config.layout}`}>
      <Link
        to="/poster-studies/$slug"
        params={{ slug: project.slug }}
        aria-label={`View ${project.title} case study`}
        className="work-studio__project-link"
      >
        <article>
          <div className="work-studio__media work-studio__personal-media" style={mediaStyle}>
            <ProjectPicture
              projectSlug={project.slug}
              slot={config.slot}
              sizes="(min-width: 1500px) 920px, (min-width: 900px) 60vw, calc(100vw - 2rem)"
              className="work-studio__picture"
              imageClassName="work-studio__image"
              style={{ aspectRatio: "auto" }}
              fallback={
                <DesignProjectCover
                  project={project}
                  variant={config.coverVariant}
                  className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
                />
              }
            />
          </div>
          <ProjectCaption
            index={project.index}
            title={project.title}
            titleLang={project.titleLang}
            category={project.discipline}
          />
        </article>
      </Link>
    </li>
  );
}

function PortfolioWorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.href ?? `/project/${project.slug}`}
      aria-label={`View ${project.title} case study`}
      className="work-studio__archive-link"
    >
      <span className="work-studio__archive-number">{String(index).padStart(2, "0")}</span>
      <span className="work-studio__archive-thumb" style={{ background: project.cover }}>
        {project.coverImage ? (
          <img src={project.coverImage} alt="" aria-hidden loading="lazy" />
        ) : null}
      </span>
      <span className="work-studio__archive-copy">
        <strong>{project.title}</strong>
        <small>{project.category}</small>
      </span>
      <span className="work-studio__archive-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function ProjectCaption({
  index,
  title,
  titleLang,
  category,
}: {
  index: string;
  title: string;
  titleLang?: "ko";
  category: string;
}) {
  return (
    <div className="work-studio__project-caption">
      <span className="work-studio__caption-index">{index}</span>
      <div>
        <h3 lang={titleLang}>{title}</h3>
        <p>{category}</p>
      </div>
      <span className="work-studio__caption-arrow" aria-hidden="true">
        ↗
      </span>
    </div>
  );
}
