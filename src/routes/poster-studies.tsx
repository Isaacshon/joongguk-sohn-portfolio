import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/poster-studies")({
  head: () => ({
    meta: [
      { title: "Independent Design Projects — Isaac Sohn" },
      {
        name: "description",
        content:
          "Twenty individually developed visual identity, art direction, editorial, and fictional brand projects by Isaac Sohn.",
      },
    ],
  }),
  component: PosterStudiesLayout,
});

function PosterStudiesLayout() {
  return <Outlet />;
}
