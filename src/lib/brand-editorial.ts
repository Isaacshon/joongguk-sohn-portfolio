import type { DesignProjectEditorialMediaSlot } from "@/lib/design-project-media";

export type BrandEditorialPicture = {
  slot: DesignProjectEditorialMediaSlot;
  eyebrow: string;
  title: string;
  note: string;
};

export const brandEditorialExtras = {
  "hm-second-sun": [
    {
      slot: "editorialA",
      eyebrow: "Second-light portrait",
      title: "Wear / reveal / wear again",
      note: "A warm second pass reveals the garment's next-life route while the information layer stays fixed and precise.",
    },
    {
      slot: "editorialB",
      eyebrow: "Rewear ensemble",
      title: "One season, more than once",
      note: "Coordinated looks turn repair and rewear into the campaign's most visible styling behaviour.",
    },
    {
      slot: "editorialC",
      eyebrow: "Garment history",
      title: "The proof stays attached",
      note: "Patch, care, date, and next action are documented as physical evidence rather than an abstract sustainability claim.",
    },
    {
      slot: "editorialD",
      eyebrow: "Retail route",
      title: "Return becomes a beginning",
      note: "The take-back environment separates repair, exchange, and rewear into immediately legible paths.",
    },
  ],
  "zara-the-air-between": [
    {
      slot: "editorialA",
      eyebrow: "Negative-space portrait",
      title: "The silhouette starts with air",
      note: "Body, cloth, and open field share the frame so the garment remains the first point of attention.",
    },
    {
      slot: "editorialB",
      eyebrow: "Moving silhouette",
      title: "Fabric carries the transition",
      note: "Airflow, translucency, and restrained styling connect the collection across seasonal conditions.",
    },
    {
      slot: "editorialC",
      eyebrow: "Flagship window",
      title: "A measured pause on the street",
      note: "The window gives one look enough empty space to read at architectural scale.",
    },
    {
      slot: "editorialD",
      eyebrow: "Quiet interface",
      title: "Product enters after atmosphere",
      note: "Mobile and fitting-room screens preserve the same gutters, crops, and directional light as the editorial.",
    },
    {
      slot: "editorialE",
      eyebrow: "Object lookbook",
      title: "Layers held in sequence",
      note: "A tactile publication pairs sheer material studies with restrained, factual garment captions.",
    },
  ],
  "uniqlo-comfort-measured": [
    {
      slot: "editorialA",
      eyebrow: "Comfort close-up",
      title: "Construction before claim",
      note: "Fabric, seam, and layering behaviour are shown directly; measurements remain illustrative design devices.",
    },
    {
      slot: "editorialB",
      eyebrow: "Everyday ensemble",
      title: "Different bodies, shared clarity",
      note: "A multi-generational wardrobe moves through the same calm visual measurement system.",
    },
    {
      slot: "editorialC",
      eyebrow: "Measurement wall",
      title: "Movement becomes useful information",
      note: "The retail layer translates walk, commute, rest, and layering into plain-language choices.",
    },
    {
      slot: "editorialD",
      eyebrow: "Field guide",
      title: "A system for the whole day",
      note: "Product cards connect each clothing detail to a real use condition without unsupported performance proof.",
    },
  ],
  "prada-the-quiet-error": [
    {
      slot: "editorialA",
      eyebrow: "Misaligned portrait",
      title: "Deviation 01 / Reflection",
      note: "The portrait remains exact until its reflection shifts one documented unit out of place.",
    },
    {
      slot: "editorialB",
      eyebrow: "Error still life",
      title: "Deviation 02 / Shadow",
      note: "A severe object composition is interrupted by one shifted shadow and nothing else.",
    },
    {
      slot: "editorialC",
      eyebrow: "Object book",
      title: "Deviation 03 / Crop",
      note: "The editorial volume records each anomaly in a separate forensic caption.",
    },
    {
      slot: "editorialD",
      eyebrow: "Invitation protocol",
      title: "Deviation 04 / Registration",
      note: "Smoked acrylic and blind embossing establish order before one line leaves the grid.",
    },
    {
      slot: "editorialE",
      eyebrow: "Construction evidence",
      title: "Deviation 05 / Seam",
      note: "A close material study isolates one displaced seam against an otherwise controlled garment.",
    },
    {
      slot: "editorialF",
      eyebrow: "Motion evidence",
      title: "Deviation 06 / Frame",
      note: "The sequence holds still, moves one element by one unit, and documents the resulting error.",
    },
  ],
} as const satisfies Record<string, readonly BrandEditorialPicture[]>;

const noEditorialExtras: readonly BrandEditorialPicture[] = [];

export function getBrandEditorialExtras(slug: string): readonly BrandEditorialPicture[] {
  return brandEditorialExtras[slug as keyof typeof brandEditorialExtras] ?? noEditorialExtras;
}
