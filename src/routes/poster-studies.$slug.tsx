import { createFileRoute, Link } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import { BrandPavilion } from "@/components/poster-studies/BrandPavilion";
import { ProjectCaseStudy } from "@/components/poster-studies/ProjectCaseStudy";
import { getDesignProjectFontHref } from "@/lib/design-project-art-direction";
import { getDesignProjectMediaAsset } from "@/lib/design-project-media";
import { getBrandPavilion } from "@/lib/brand-pavilions";
import { designProjectCount, getDesignProject } from "@/lib/design-projects";

const siteOrigin = "https://isaactoast.ca";

export const Route = createFileRoute("/poster-studies/$slug")({
  head: ({ params }) => {
    const project = getDesignProject(params.slug);
    const pavilion = project?.brandStudy ? getBrandPavilion(project.slug) : undefined;
    const isBrandPavilion = Boolean(project?.brandStudy && pavilion);
    const title = project
      ? isBrandPavilion
        ? `${project.title} — Independent Unofficial Brand Concept by Isaac Sohn`
        : `${project.title} — Design Case Study by Isaac Sohn`
      : "Design Project — Isaac Sohn";
    const description =
      project && pavilion && project.brandStudy
        ? `${pavilion.hero.summary} Independent unofficial concept by Isaac Sohn; not commissioned, sponsored, or endorsed by ${project.brandStudy.brand}.`
        : (project?.description ?? "Independent design project by Isaac Sohn.");
    const canonicalUrl = project ? `${siteOrigin}/poster-studies/${project.slug}` : undefined;
    const socialImage =
      project && isBrandPavilion
        ? `${siteOrigin}/generated/design-projects/${project.slug}/spatial-1600.webp`
        : undefined;
    const socialImageAlt =
      project && isBrandPavilion
        ? getDesignProjectMediaAsset(project.slug, "spatial")?.alt
        : undefined;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        ...(isBrandPavilion && canonicalUrl && socialImage
          ? [
              { property: "og:url", content: canonicalUrl },
              { property: "og:image", content: socialImage },
              {
                property: "og:image:alt",
                content:
                  socialImageAlt ??
                  `${project?.title ?? "Brand"} independent unofficial concept pavilion`,
              },
            ]
          : []),
      ],
      links: project
        ? [
            { rel: "stylesheet", href: getDesignProjectFontHref(project) },
            ...(isBrandPavilion && canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []),
          ]
        : undefined,
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

  if (project.brandStudy && getBrandPavilion(project.slug)) {
    return <BrandPavilion project={project} />;
  }

  return <ProjectCaseStudy project={project} />;
}
