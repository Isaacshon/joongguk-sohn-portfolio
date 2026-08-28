export const DESIGN_PROJECTS = Object.freeze([
  { index: "01", slug: "afterimage", title: "AFTERIMAGE" },
  { index: "02", slug: "memory-type", title: "기억의 활자" },
  { index: "03", slug: "field-notes-37", title: "FIELD NOTES 37" },
  { index: "04", slug: "last-letter", title: "THE LAST LETTER" },
  { index: "05", slug: "tactile-forecast", title: "TACTILE FORECAST" },
  { index: "06", slug: "night-index", title: "NIGHT INDEX" },
  { index: "07", slug: "public-memory", title: "PUBLIC MEMORY" },
  { index: "08", slug: "soft-machine", title: "SOFT MACHINE" },
  { index: "09", slug: "signal-noise", title: "SIGNAL / NOISE" },
  { index: "10", slug: "chroma-tempo", title: "CHROMA TEMPO" },
  { index: "11", slug: "79w", title: "79W" },
  { index: "12", slug: "tidehold", title: "TIDEHOLD" },
  { index: "13", slug: "offsort", title: "OFFSORT" },
  { index: "14", slug: "horalis", title: "HORALIS" },
  { index: "15", slug: "selv-00", title: "SELV/00" },
  { index: "16", slug: "tessera-live", title: "TESSERA LIVE" },
  { index: "17", slug: "backmatter", title: "BACKMATTER" },
  { index: "18", slug: "seamframe", title: "SEAMFRAME" },
  { index: "19", slug: "two-shores", title: "TWO SHORES" },
  { index: "20", slug: "coldkiln", title: "COLDKILN" },
  { index: "21", slug: "hm-second-sun", title: "SECOND SUN" },
  { index: "22", slug: "zara-the-air-between", title: "THE AIR BETWEEN" },
  { index: "23", slug: "uniqlo-comfort-measured", title: "COMFORT, MEASURED" },
  { index: "24", slug: "prada-the-quiet-error", title: "THE QUIET ERROR" },
]);

export const DESIGN_PROJECT_SLOTS = Object.freeze({
  hero: Object.freeze({
    order: 1,
    label: "Hero",
    aspectWidth: 4,
    aspectHeight: 5,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
  tactile: Object.freeze({
    order: 2,
    label: "Tactile detail",
    aspectWidth: 3,
    aspectHeight: 2,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
  spatial: Object.freeze({
    order: 3,
    label: "Spatial system",
    aspectWidth: 16,
    aspectHeight: 9,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 86,
    avifQuality: 60,
  }),
  context: Object.freeze({
    order: 4,
    label: "Context / campaign plate",
    aspectWidth: 9,
    aspectHeight: 16,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 86,
    avifQuality: 60,
  }),
  editorialA: Object.freeze({
    order: 5,
    label: "Editorial portrait",
    aspectWidth: 4,
    aspectHeight: 5,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
  editorialB: Object.freeze({
    order: 6,
    label: "Editorial landscape",
    aspectWidth: 3,
    aspectHeight: 2,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
  editorialC: Object.freeze({
    order: 7,
    label: "Editorial portrait detail",
    aspectWidth: 4,
    aspectHeight: 5,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
  editorialD: Object.freeze({
    order: 8,
    label: "Editorial environment",
    aspectWidth: 16,
    aspectHeight: 9,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 86,
    avifQuality: 60,
  }),
  editorialE: Object.freeze({
    order: 9,
    label: "Editorial object",
    aspectWidth: 4,
    aspectHeight: 5,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
  editorialF: Object.freeze({
    order: 10,
    label: "Editorial motion sequence",
    aspectWidth: 3,
    aspectHeight: 2,
    minLongEdge: 3200,
    maxLongEdge: 3200,
    webpQuality: 88,
    avifQuality: 62,
  }),
});

export const BRAND_EDITORIAL_SLOT_COUNT = Object.freeze({
  "hm-second-sun": 4,
  "zara-the-air-between": 5,
  "uniqlo-comfort-measured": 4,
  "prada-the-quiet-error": 6,
});

export const BRAND_EDITORIAL_PROJECT_SLUGS = Object.freeze(Object.keys(BRAND_EDITORIAL_SLOT_COUNT));

const CORE_SLOTS = Object.freeze(
  Object.keys(DESIGN_PROJECT_SLOTS).filter((slot) => !slot.startsWith("editorial")),
);
const EDITORIAL_SLOTS = Object.freeze(
  Object.keys(DESIGN_PROJECT_SLOTS).filter((slot) => slot.startsWith("editorial")),
);

export function getDesignProjectRequiredSlots(projectSlug) {
  const editorialCount = BRAND_EDITORIAL_SLOT_COUNT[projectSlug] ?? 0;
  return [...CORE_SLOTS, ...EDITORIAL_SLOTS.slice(0, editorialCount)];
}

const WIDE_HERO_OVERRIDE = Object.freeze({ aspectWidth: 16, aspectHeight: 9 });
const SQUARE_TACTILE_OVERRIDE = Object.freeze({ aspectWidth: 1, aspectHeight: 1 });

export const DESIGN_PROJECT_SLOT_OVERRIDES = Object.freeze({
  "79w": Object.freeze({ hero: WIDE_HERO_OVERRIDE }),
  tidehold: Object.freeze({ hero: WIDE_HERO_OVERRIDE }),
  backmatter: Object.freeze({ hero: WIDE_HERO_OVERRIDE }),
  seamframe: Object.freeze({ hero: WIDE_HERO_OVERRIDE }),
  "tactile-forecast": Object.freeze({ tactile: SQUARE_TACTILE_OVERRIDE }),
  "soft-machine": Object.freeze({ tactile: SQUARE_TACTILE_OVERRIDE }),
  offsort: Object.freeze({ tactile: SQUARE_TACTILE_OVERRIDE }),
  horalis: Object.freeze({ tactile: SQUARE_TACTILE_OVERRIDE }),
  "selv-00": Object.freeze({ tactile: SQUARE_TACTILE_OVERRIDE }),
});

export function getDesignProjectSlotRule(projectSlug, slot) {
  const baseRule = DESIGN_PROJECT_SLOTS[slot];
  const override = DESIGN_PROJECT_SLOT_OVERRIDES[projectSlug]?.[slot];
  return override ? { ...baseRule, ...override } : baseRule;
}

export const PROJECT_BY_SLUG = new Map(DESIGN_PROJECTS.map((project) => [project.slug, project]));
export const PROJECT_ORDER = new Map(
  DESIGN_PROJECTS.map((project, index) => [project.slug, index]),
);
export const SLOT_ORDER = new Map(
  Object.entries(DESIGN_PROJECT_SLOTS).map(([slot, rule]) => [slot, rule.order]),
);

export const EXPECTED_ASSET_COUNT = DESIGN_PROJECTS.reduce(
  (count, project) => count + getDesignProjectRequiredSlots(project.slug).length,
  0,
);

export const RESPONSIVE_LONG_EDGES = Object.freeze([960, 1600, 3200]);
