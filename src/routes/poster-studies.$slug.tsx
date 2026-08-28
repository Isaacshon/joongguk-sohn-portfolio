import { createFileRoute, Link } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import { ProjectCaseStudy } from "@/components/poster-studies/ProjectCaseStudy";
import { getDesignProjectFontHref } from "@/lib/design-project-art-direction";
import { designProjectCount, getDesignProject } from "@/lib/design-projects";

export const Route = createFileRoute("/poster-studies/$slug")({
  head: ({ params }) => {
    const project = getDesignProject(params.slug);
    const title = project
      ? `${project.title} — Design Case Study by Isaac Sohn`
      : "Design Project — Isaac Sohn";
    const description = project?.description ?? "Independent design project by Isaac Sohn.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
      links: project ? [{ rel: "stylesheet", href: getDesignProjectFontHref(project) }] : undefined,
    };
  },
  component: DesignProjectDetail,
});

function DesignProjectDetail() {
  const { slug } = Route.useParams();
  const project = getDesignProject(slug);

  if (!project) {
    return (
      <MatLayout surface="plain" contentClassName="pt-16">
        <div className="mx-auto max-w-4xl py-20">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">
            404 / Design project
          </p>
          <h1 className="mt-4 font-serif text-[clamp(4rem,10vw,9rem)] italic leading-[.75] tracking-[-.06em]">
            Project not found.
          </h1>
          <Link
            to="/poster-studies"
            className="mt-10 inline-block border-b border-current pb-1 text-sm"
          >
            View all {designProjectCount} projects ↗
          </Link>
        </div>
      </MatLayout>
    );
  }

  return <ProjectCaseStudy project={project} />;
}
