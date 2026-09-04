import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { MatLayout } from "@/components/MatLayout";
import { PortfolioMotionRoot } from "@/components/motion/PortfolioMotionRoot";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { PersonalProjectWorld } from "@/components/poster-studies/PersonalProjectWorld";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getDesignProjectArtDirection } from "@/lib/design-project-art-direction";
import { getAdjacentDesignProjects, type DesignProject } from "@/lib/design-projects";
import { getProjectChoreography } from "@/lib/project-choreography";
import { getProjectTitleLockup } from "@/lib/project-title-lockups";

import "@/personal-project-premium.css";

type StudioCaseStyle = CSSProperties & Record<`--${string}`, string | number>;

export function ProjectCaseStudy({ project }: { project: DesignProject }) {
  const { previous, next } = getAdjacentDesignProjects(project.slug);
  const direction = getDesignProjectArtDirection(project);
  const choreography = getProjectChoreography(project.slug);
  const style: StudioCaseStyle = {
    "--studio-paper": direction.surfaces.paper,
    "--studio-ink": direction.surfaces.ink,
    "--studio-panel": direction.surfaces.panel,
    "--studio-accent": direction.surfaces.accent,
    "--studio-display": direction.fonts.display,
    "--studio-accent-font": direction.fonts.accent,
    "--studio-body": direction.fonts.body,
    "--studio-meta": direction.fonts.meta,
    "--studio-title-weight": direction.title.weight,
    "--studio-title-style": direction.title.style,
    "--studio-title-leading": direction.title.leading,
    "--studio-title-tracking": direction.title.tracking,
  };

  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <PortfolioMotionRoot
        className="studio-case"
        profile={choreography.family}
        projectId={project.slug}
        projectLabel={project.title}
        sceneSelector=".personal-world__opening, .personal-world__signature, [data-world-slot], .personal-world__rule, .personal-world__sources, .studio-adjacent"
        attributes={{
          "data-project": project.slug,
          "data-motif": project.motif,
          "data-motion-family": choreography.family,
          "data-layout": direction.layout,
        }}
        style={style}
      >
        <PersonalProjectWorld project={project} />

        <nav aria-label="Adjacent design projects" className="studio-adjacent">
          {previous ? <AdjacentProject project={previous} direction="previous" /> : <span />}
          {next ? <AdjacentProject project={next} direction="next" /> : <span />}
        </nav>
      </PortfolioMotionRoot>
    </MatLayout>
  );
}

function AdjacentProject({
  project,
  direction,
}: {
  project: DesignProject;
  direction: "previous" | "next";
}) {
  const titleLockup = getProjectTitleLockup(project.slug, project.title);

  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      className="studio-adjacent-link"
      data-direction={direction}
    >
      <ProjectPicture
        projectSlug={project.slug}
        slot="hero"
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{ aspectRatio: "16 / 9" }}
        decorative
        fallback={
          <DesignProjectCover
            project={project}
            variant="screen"
            showTitle={false}
            className="absolute inset-0 h-full min-h-0 aspect-auto"
          />
        }
      />
      <span className="studio-adjacent-copy">
        <span className="studio-meta">
          {direction === "previous" ? "Previous project" : "Next project"} · {project.index}
        </span>
        <strong lang={project.titleLang}>
          {titleLockup.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </strong>
      </span>
    </Link>
  );
}
