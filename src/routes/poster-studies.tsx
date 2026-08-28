import { createFileRoute, Outlet } from "@tanstack/react-router";

import { designProjectCount } from "@/lib/design-projects";

export const Route = createFileRoute("/poster-studies")({
  head: () => ({
    meta: [
      { title: "Independent Design Projects — Isaac Sohn" },
      {
        name: "description",
        content: `${designProjectCount} individually developed visual identity, art direction, editorial, and brand projects by Isaac Sohn, with unofficial self-initiated brand concepts clearly identified.`,
      },
    ],
  }),
  component: PosterStudiesLayout,
});

function PosterStudiesLayout() {
  return <Outlet />;
}
