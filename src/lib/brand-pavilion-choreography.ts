import type { BrandCode } from "@/components/poster-studies/BrandMark";

export type PavilionChapterKey =
  | "philosophy"
  | "values"
  | "needs"
  | "principles"
  | "design"
  | "world";

export type PavilionStructuralModuleKey =
  | "hm-second-life-tag"
  | "hm-circular-rack"
  | "zara-negative-space"
  | "zara-air-gap"
  | "uniqlo-comfort-matrix"
  | "uniqlo-feedback-loop"
  | "prada-code-shift"
  | "prada-movable-wall";

export type BrandPavilionChapter = {
  key: PavilionChapterKey;
  id: string;
  label: string;
  detail: string;
  moduleAfter?: PavilionStructuralModuleKey;
};

/**
 * Each brand keeps the same researched content pool, but edits it into a different
 * visit. The sequence is part of the identity: it must not be normalised back into
 * a shared philosophy/values/needs template.
 */
export const brandPavilionChoreographies = {
  hm: [
    {
      key: "philosophy",
      id: "people-and-choice",
      label: "People & choice",
      detail: "The invitation comes first",
    },
    {
      key: "needs",
      id: "relevant-access",
      label: "Relevant access",
      detail: "What the public experience must solve",
    },
    {
      key: "values",
      id: "open-fashion",
      label: "Open fashion",
      detail: "The priorities that hold the offer together",
      moduleAfter: "hm-second-life-tag",
    },
    {
      key: "principles",
      id: "garment-states",
      label: "Garment states",
      detail: "How first life becomes next life",
    },
    {
      key: "design",
      id: "retail-language",
      label: "Retail language",
      detail: "One message from label to store",
      moduleAfter: "hm-circular-rack",
    },
    {
      key: "world",
      id: "next-season",
      label: "Next season",
      detail: "The campaign returns to the street",
    },
  ],
  zara: [
    {
      key: "philosophy",
      id: "atmosphere",
      label: "Atmosphere",
      detail: "Space arrives before product",
      moduleAfter: "zara-negative-space",
    },
    {
      key: "principles",
      id: "silhouette",
      label: "Silhouette",
      detail: "Form is read through distance",
    },
    {
      key: "design",
      id: "material",
      label: "Material",
      detail: "Texture carries the transition",
    },
    {
      key: "values",
      id: "the-edit",
      label: "The edit",
      detail: "Creativity, fashion, and restraint",
    },
    {
      key: "needs",
      id: "window-and-screen",
      label: "Window / screen",
      detail: "One experience across physical and digital",
      moduleAfter: "zara-air-gap",
    },
    {
      key: "world",
      id: "stillness",
      label: "Stillness",
      detail: "The image holds after the atmosphere moves",
    },
  ],
  uniqlo: [
    {
      key: "needs",
      id: "everyday-need",
      label: "Everyday need",
      detail: "The body supplies the brief",
      moduleAfter: "uniqlo-comfort-matrix",
    },
    {
      key: "philosophy",
      id: "lifewear",
      label: "LifeWear",
      detail: "Clothing designed to make life better",
    },
    {
      key: "values",
      id: "useful-standard",
      label: "Useful standard",
      detail: "Simple, high-quality, always evolving",
    },
    {
      key: "principles",
      id: "engineer",
      label: "Engineer",
      detail: "Feedback becomes construction",
      moduleAfter: "uniqlo-feedback-loop",
    },
    {
      key: "design",
      id: "layer",
      label: "Layer",
      detail: "Information follows daily use",
    },
    {
      key: "world",
      id: "everyday-again",
      label: "Everyday again",
      detail: "The system returns to real life",
    },
  ],
  prada: [
    {
      key: "philosophy",
      id: "observation",
      label: "Observation",
      detail: "Ideas precede category",
      moduleAfter: "prada-code-shift",
    },
    {
      key: "needs",
      id: "contradiction",
      label: "Contradiction",
      detail: "Individuality becomes visible in relation",
    },
    {
      key: "principles",
      id: "object-and-method",
      label: "Object / method",
      detail: "The familiar is tested physically",
    },
    {
      key: "values",
      id: "culture",
      label: "Culture",
      detail: "Perspective holds the house together",
    },
    {
      key: "design",
      id: "recontextualization",
      label: "Recontextualization",
      detail: "One code changes through context",
      moduleAfter: "prada-movable-wall",
    },
    {
      key: "world",
      id: "quiet-error",
      label: "Quiet error",
      detail: "Image, object, and space remain adjustable",
    },
  ],
} satisfies Record<BrandCode, readonly BrandPavilionChapter[]>;
