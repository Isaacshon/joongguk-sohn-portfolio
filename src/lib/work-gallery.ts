import { designProjects } from "./design-projects";
import type { DesignProjectMediaSlot } from "./design-project-media";

export type WorkSelection = {
  slug: string;
  category: string;
  slot: DesignProjectMediaSlot;
  alternate: DesignProjectMediaSlot;
  ratio: string;
  placement: "broad" | "narrow" | "half";
  focalPoint?: string;
  alt?: string;
};

export const brandWork: WorkSelection[] = [
  {
    slug: "polo-ralph-lauren-the-long-match",
    category: "Art direction / Sporting life",
    slot: "spatial",
    alternate: "editorialJ",
    ratio: "16 / 9",
    placement: "broad",
  },
  {
    slug: "prada-the-quiet-error",
    category: "Fashion / Editorial",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "narrow",
  },
  {
    slug: "levis-wear-is-the-record",
    category: "Denim / Craft",
    slot: "hero",
    alternate: "spatial",
    ratio: "16 / 9",
    placement: "broad",
  },
  {
    slug: "nike-no-second-take",
    category: "Sport / Campaign",
    slot: "hero",
    alternate: "editorialC",
    ratio: "4 / 5",
    placement: "narrow",
  },
  {
    slug: "muji-household-weather",
    category: "Objects / Everyday life",
    slot: "spatial",
    alternate: "editorialD",
    ratio: "16 / 9",
    placement: "broad",
  },
  {
    slug: "zara-the-air-between",
    category: "Fashion / Image-making",
    slot: "context",
    alternate: "editorialA",
    ratio: "9 / 16",
    placement: "narrow",
    alt: "Fashion portrait in a quiet interior with a mirror and window.",
  },
  {
    slug: "hm-second-sun",
    category: "Fashion / Collection",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "half",
    alt: "Two people walking past a bus stop in an urban fashion campaign.",
  },
  {
    slug: "uniqlo-comfort-measured",
    category: "LifeWear / Product stories",
    slot: "context",
    alternate: "editorialA",
    ratio: "9 / 16",
    placement: "half",
    alt: "A woman standing beside a bicycle in a doorway, wearing everyday layers.",
  },
];

export const personalWork: WorkSelection[] = [
  {
    slug: "afterimage",
    category: "Print / Cultural identity",
    slot: "editorialB",
    alternate: "tactile",
    ratio: "3 / 2",
    placement: "broad",
  },
  {
    slug: "memory-type",
    category: "Typography / Local archive",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "narrow",
  },
  {
    slug: "night-index",
    category: "Fashion / Light studies",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "narrow",
  },
  {
    slug: "soft-machine",
    category: "Material / Speculative design",
    slot: "tactile",
    alternate: "editorialB",
    ratio: "1 / 1",
    placement: "broad",
  },
  {
    slug: "public-memory",
    category: "Wayfinding / Public culture",
    slot: "spatial",
    alternate: "editorialD",
    ratio: "16 / 9",
    placement: "half",
  },
  {
    slug: "tidehold",
    category: "Identity / Coastal hospitality",
    slot: "hero",
    alternate: "spatial",
    ratio: "16 / 9",
    placement: "half",
  },
  {
    slug: "79w",
    category: "Travel / Editorial",
    slot: "hero",
    alternate: "spatial",
    ratio: "16 / 9",
    placement: "narrow",
  },
  {
    slug: "tactile-forecast",
    category: "Material / Sensory design",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "broad",
  },
  {
    slug: "field-notes-37",
    category: "Ecology / Field research",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "broad",
  },
  {
    slug: "horalis",
    category: "Skincare / Time",
    slot: "tactile",
    alternate: "editorialC",
    ratio: "1 / 1",
    placement: "narrow",
  },
  {
    slug: "tessera-live",
    category: "Culture / Spatial identity",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "half",
  },
  {
    slug: "chroma-tempo",
    category: "Music / Motion identity",
    slot: "spatial",
    alternate: "editorialD",
    ratio: "16 / 9",
    placement: "half",
  },
  {
    slug: "last-letter",
    category: "Literature / Publishing",
    slot: "tactile",
    alternate: "editorialB",
    ratio: "3 / 2",
    placement: "broad",
  },
  {
    slug: "signal-noise",
    category: "Broadcast / Sound",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "narrow",
  },
  {
    slug: "backmatter",
    category: "Documentary / Archive",
    slot: "hero",
    alternate: "spatial",
    ratio: "16 / 9",
    placement: "narrow",
  },
  {
    slug: "offsort",
    category: "Circularity / Product system",
    slot: "hero",
    alternate: "editorialC",
    ratio: "4 / 5",
    placement: "broad",
  },
  {
    slug: "seamframe",
    category: "Architecture / Assembly",
    slot: "hero",
    alternate: "spatial",
    ratio: "16 / 9",
    placement: "half",
  },
  {
    slug: "two-shores",
    category: "Finance / Service design",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "half",
    alt: "Two differently coloured sculptural ribbons meeting above a surface of water.",
  },
  {
    slug: "selv-00",
    category: "Garment / Repair",
    slot: "hero",
    alternate: "editorialA",
    ratio: "4 / 5",
    placement: "narrow",
    alt: "A repaired garment displayed on a mannequin, with its construction and seams visible.",
  },
  {
    slug: "coldkiln",
    category: "Industry / Material cycles",
    slot: "tactile",
    alternate: "editorialB",
    ratio: "3 / 2",
    placement: "broad",
  },
];

export function getWorkProject(slug: string) {
  const project = designProjects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown work selection: ${slug}`);
  return project;
}
