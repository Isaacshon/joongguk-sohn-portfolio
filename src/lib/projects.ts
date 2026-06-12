export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  description: string;
  role: string;
  tools: string;
  accent: string;
  dark: string;
};

export const projects: Project[] = [
  {
    slug: "eknoc",
    title: "Eknoc",
    category: "Web Design, App Interface, Brand System",
    cover: "linear-gradient(135deg, #0f3b35 0%, #5fb6a5 52%, #f2efe4 100%)",
    description:
      "Eknoc is a digital product concept shaped around clean interaction flows, modular brand components, and a direct visual system for web and app surfaces.",
    role: "Web Design, App Interface, Brand System",
    tools: "Figma, React, Visual Direction",
    accent: "#5fb6a5",
    dark: "#0f3b35",
  },
  {
    slug: "wemplate",
    title: "Wemplate",
    category: "Template System, Web Experience, Visual Identity",
    cover: "linear-gradient(135deg, #151515 0%, #6b63ff 48%, #f5d56f 100%)",
    description:
      "Wemplate explores a flexible template system with reusable layouts, bold content rhythm, and a web experience that can scale across creative use cases.",
    role: "Template System, Web Experience, Visual Identity",
    tools: "Figma, Design Systems, Frontend Prototyping",
    accent: "#f5d56f",
    dark: "#151515",
  },
  {
    slug: "blessie",
    title: "Blessie",
    category: "Creative Direction, App Design, Digital Artwork",
    cover: "linear-gradient(135deg, #efe7d0 0%, #cf6f8f 46%, #2f5f73 100%)",
    description:
      "Blessie is a softer visual direction study combining app interface structure with expressive digital artwork and warm editorial pacing.",
    role: "Creative Direction, App Design, Digital Artwork",
    tools: "Figma, Photoshop, Art Direction",
    accent: "#cf6f8f",
    dark: "#2f5f73",
  },
  {
    slug: "3d-fashion",
    title: "3D Fashion",
    category: "3D Art Direction, Fashion Visualization, Motion",
    cover: "linear-gradient(135deg, #1f2933 0%, #8ea0a8 45%, #f7f4ed 100%)",
    description:
      "3D Fashion focuses on garment visualization, motion-led presentation, and atmospheric art direction for fashion concepts in digital space.",
    role: "3D Art Direction, Fashion Visualization, Motion",
    tools: "Blender, Cinema 4D, Creative Direction",
    accent: "#8ea0a8",
    dark: "#1f2933",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
