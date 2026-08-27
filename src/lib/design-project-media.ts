export const designProjectMediaSlots = ["hero", "tactile", "spatial", "context"] as const;

export type DesignProjectMediaSlot = (typeof designProjectMediaSlots)[number];

export type DesignProjectMediaAsset = {
  slot: DesignProjectMediaSlot;
  src: string;
  srcSet: string;
  avifSrcSet: string;
  width: number;
  height: number;
  alt: string;
  focalPoint: string;
};

export type DesignProjectMediaSet = Record<DesignProjectMediaSlot, DesignProjectMediaAsset>;

type MediaDescription = {
  alt: string;
  focalPoint?: string;
  width?: number;
  height?: number;
};

type ProjectMediaDescription = Record<DesignProjectMediaSlot, MediaDescription>;

const slotDimensions: Record<DesignProjectMediaSlot, { width: number; height: number }> = {
  hero: { width: 2560, height: 3200 },
  tactile: { width: 3200, height: 2133 },
  spatial: { width: 3200, height: 1800 },
  context: { width: 1800, height: 3200 },
};

/**
 * File tiers are named by their longest edge. Width descriptors below are calculated from the
 * asset's intrinsic ratio, so portrait media remains honest to the browser's responsive selector.
 */
const mediaTiers = [960, 1600, 3200] as const;

const projectMediaDescriptions = {
  afterimage: {
    hero: {
      alt: "Avant-garde dancer held between cobalt and fluorescent-orange optical echoes.",
      focalPoint: "50% 42%",
    },
    tactile: {
      alt: "Risograph worktable with wet cobalt and orange ink, halftones, and misregistered sheets.",
      focalPoint: "52% 48%",
    },
    spatial: {
      alt: "Brutalist cultural venue transformed by overlapping cobalt and orange scrims.",
      focalPoint: "52% 48%",
    },
    context: {
      alt: "Night projection washing an urban concrete wall in repeated cobalt and orange shadows.",
      focalPoint: "50% 44%",
    },
  },
  "memory-type": {
    hero: {
      alt: "Archivist documenting the worn lettering of a Seoul awning and neighbourhood wall.",
      focalPoint: "47% 42%",
    },
    tactile: {
      alt: "Carbon copies, weathered wood, modular paper blocks, and archival red stamp ink.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Community letterform archive arranged as a quiet material installation.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Archivist scanning hand-painted surfaces in a narrow Korean neighbourhood alley.",
      focalPoint: "48% 42%",
    },
  },
  "field-notes-37": {
    hero: {
      alt: "Macro view of an insect and lichen ecosystem surviving in a concrete seam.",
      focalPoint: "53% 43%",
    },
    tactile: {
      alt: "Urban ecology specimen table with glassine, field tools, and acid-green markers.",
      focalPoint: "50% 48%",
    },
    spatial: {
      alt: "Luminous natural-history cabinet presenting tiny urban specimens as a living index.",
      focalPoint: "50% 46%",
    },
    context: {
      alt: "Field researcher collecting observations from rain-darkened city masonry.",
      focalPoint: "52% 42%",
    },
  },
  "last-letter": {
    hero: {
      alt: "Unaddressed cream letter resting on a railway waiting-room table at dusk.",
      focalPoint: "50% 47%",
    },
    tactile: {
      alt: "Folded tea-toned paper, glassine, graphite, and oxblood ink in close detail.",
      focalPoint: "48% 50%",
    },
    spatial: {
      alt: "Suspended correspondence sheets forming a restrained literary gallery installation.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Passenger holding an unaddressed envelope beside a night train window.",
      focalPoint: "48% 39%",
    },
  },
  "tactile-forecast": {
    hero: {
      alt: "Sculptural fan of plum, terracotta, beige, silver, and reflective material samples.",
      focalPoint: "50% 45%",
    },
    tactile: {
      alt: "Macro study of blind embossing, painted edges, fibre, and metallic foil.",
      focalPoint: "50% 50%",
      width: 3200,
      height: 3200,
    },
    spatial: {
      alt: "Refined CMF library organised by surface, pressure depth, and light response.",
      focalPoint: "50% 46%",
    },
    context: {
      alt: "Designer comparing tactile samples beneath a controlled material-review light.",
      focalPoint: "51% 42%",
    },
  },
  "night-index": {
    hero: {
      alt: "Androgynous model framed by a midnight arch and a single diagonal shadow.",
      focalPoint: "51% 38%",
    },
    tactile: {
      alt: "Pearlescent blue folio, translucent sleeve, gloss image plate, and black foil.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Contemporary fashion pavilion shaped by compressed iris-like arches.",
      focalPoint: "50% 44%",
    },
    context: {
      alt: "Night fashion campaign projected across an arched architectural facade.",
      focalPoint: "50% 40%",
    },
  },
  "public-memory": {
    hero: {
      alt: "Neighbourhood walkers carrying a folded civic map through a Seoul street.",
      focalPoint: "49% 41%",
    },
    tactile: {
      alt: "Enamel direction panels, route arrows, map folds, and recycled walk tickets.",
      focalPoint: "50% 48%",
    },
    spatial: {
      alt: "Modular neighbourhood wayfinding installed at pedestrian scale in Korea.",
      focalPoint: "50% 46%",
    },
    context: {
      alt: "Older resident sharing a local route with younger neighbourhood walkers.",
      focalPoint: "50% 40%",
    },
  },
  "soft-machine": {
    hero: {
      alt: "Coral silicone organism poised on a mirror-polished chrome research plinth.",
      focalPoint: "50% 45%",
    },
    tactile: {
      alt: "Finger pressing a translucent silicone membrane as the surface stores its deformation.",
      focalPoint: "51% 49%",
      width: 3200,
      height: 3200,
    },
    spatial: {
      alt: "Large biomorphic material-research pavilion with soft coral forms and chrome equipment.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Robotic testing arm measuring a responsive silicone form in a quiet laboratory.",
      focalPoint: "50% 43%",
    },
  },
  "signal-noise": {
    hero: {
      alt: "Vocalist seen through CRT glass in cyan, magenta, and electric-lime signal spill.",
      focalPoint: "50% 37%",
    },
    tactile: {
      alt: "Black stock, scan acetate, spectral film, and broadcast calibration surfaces.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Live broadcast studio built as a deep LED and CRT signal tunnel.",
      focalPoint: "50% 44%",
    },
    context: {
      alt: "Hands operating an analog video mixer before a wall of colour-shifted CRT monitors.",
      focalPoint: "49% 45%",
    },
  },
  "chroma-tempo": {
    hero: {
      alt: "Percussionist moving between precise coloured light bars in a dark performance room.",
      focalPoint: "51% 39%",
    },
    tactile: {
      alt: "Die-cut pass, spectrogram film, and tuning fork arranged as performance ephemera.",
      focalPoint: "50% 49%",
    },
    spatial: {
      alt: "Concert stage translated into a field of luminous amplitude bars.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Suspended glass resonator plates forming a luminous rhythm spiral in a black-box hall.",
      focalPoint: "50% 41%",
    },
  },
  "79w": {
    hero: {
      alt: "Electric regional coach waiting beneath an orange route line at a concrete terminal.",
      focalPoint: "52% 47%",
      width: 3200,
      height: 1800,
    },
    tactile: {
      alt: "Transit panel, rider card, durable vinyl, and charging-status strip in close detail.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Calm intercity mobility hub organised around one continuous westbound route line.",
      focalPoint: "51% 46%",
    },
    context: {
      alt: "Early commuter approaching an electric coach at a blue-hour regional terminal.",
      focalPoint: "47% 40%",
    },
  },
  tidehold: {
    hero: {
      alt: "Low waterfront hotel integrated into reeds, marsh water, and a living shoreline.",
      focalPoint: "50% 47%",
      width: 3200,
      height: 1800,
    },
    tactile: {
      alt: "Salt-textured paper, weathered brass, linen, and habitat survey materials.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Timber boardwalk threading through a restored tidal wetland and quiet hotel grounds.",
      focalPoint: "50% 46%",
    },
    context: {
      alt: "Guest and naturalist measuring the evening tide from a marsh-edge platform.",
      focalPoint: "51% 41%",
    },
  },
  offsort: {
    hero: {
      alt: "Reusable glass jars filled with imperfect vegetables on a working market counter.",
      focalPoint: "50% 47%",
    },
    tactile: {
      alt: "Batch marker, crate timber, reusable label surface, and rescued produce textures.",
      focalPoint: "50% 50%",
      width: 3200,
      height: 3200,
    },
    spatial: {
      alt: "Warm refill market built around visible produce batches and reusable containers.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Communal kitchen preparing a meal from rescued vegetables and refill ingredients.",
      focalPoint: "50% 41%",
    },
  },
  horalis: {
    hero: {
      alt: "Frosted skincare vials arranged across a machined twenty-four-hour aluminium dial.",
      focalPoint: "50% 46%",
    },
    tactile: {
      alt: "Frosted glass, precision cap, and brushed aluminium tray under cool directional light.",
      focalPoint: "50% 50%",
      width: 3200,
      height: 3200,
    },
    spatial: {
      alt: "Circular airport-lounge skincare bar organised around local time and light.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Jet-lagged traveller using a compact skincare ritual beside an airport window.",
      focalPoint: "50% 39%",
    },
  },
  "selv-00": {
    hero: {
      alt: "Model wearing a modular black repair garment with yellow and oxide-red components.",
      focalPoint: "50% 35%",
    },
    tactile: {
      alt: "Replaceable seam, reinforced stitch, repair tab, and numbered garment component.",
      focalPoint: "50% 49%",
      width: 3200,
      height: 3200,
    },
    spatial: {
      alt: "Industrial repair atelier with a visible library of garment parts and tools.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Modular garment campaign photographed in a raw industrial passage.",
      focalPoint: "50% 36%",
    },
  },
  "tessera-live": {
    hero: {
      alt: "Contemporary dancer moving through a precisely lit nine-cell stage grid.",
      focalPoint: "50% 38%",
    },
    tactile: {
      alt: "Performance ticket, programme, and laminate assembled from blank modular tiles.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Campus performance venue animated by a nine-tile LED facade.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Nine simultaneous performer fragments forming one vertical live campaign image.",
      focalPoint: "50% 40%",
    },
  },
  backmatter: {
    hero: {
      alt: "Documentary editor reviewing evidence and source material in a film archive.",
      focalPoint: "49% 39%",
      width: 3200,
      height: 1800,
    },
    tactile: {
      alt: "Source ledger, contact sheet, correction marker, and archive credential.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Cinema lobby transformed into a disciplined evidence and source room.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Editor cross-checking footage on a laptop beside an open evidence drawer.",
      focalPoint: "50% 42%",
    },
  },
  seamframe: {
    hero: {
      alt: "Prefabricated timber housing modules being craned into an exposed structural grid.",
      focalPoint: "50% 46%",
      width: 3200,
      height: 1800,
    },
    tactile: {
      alt: "Reversible timber joint, assembly passport, and construction registration marker.",
      focalPoint: "50% 49%",
    },
    spatial: {
      alt: "Adaptable timber housing courtyard with visible seams and shared circulation.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Architect and resident reviewing a modular home adaptation on a tablet.",
      focalPoint: "50% 42%",
    },
  },
  "two-shores": {
    hero: {
      alt: "Two hands meeting across a reflective harbour table beside a mint service card.",
      focalPoint: "50% 46%",
    },
    tactile: {
      alt: "Mint card, transfer receipt, envelope, and paired coin trays on a quiet counter.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Cross-border service lounge organised as two calm parallel assistance lanes.",
      focalPoint: "50% 45%",
    },
    context: {
      alt: "Migrant professional video-calling family across two distant time zones.",
      focalPoint: "50% 40%",
    },
  },
  coldkiln: {
    hero: {
      alt: "Unfired mineral tiles stacked as a restrained circular material study.",
      focalPoint: "50% 47%",
    },
    tactile: {
      alt: "Compressed mineral tile revealing aggregate, fibre, and cool matte surface detail.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Demountable mineral-tile facade installed across a contemporary civic building.",
      focalPoint: "50% 46%",
    },
    context: {
      alt: "Architect and site engineer comparing returnable tile samples in a material library.",
      focalPoint: "50% 40%",
    },
  },
} satisfies Record<string, ProjectMediaDescription>;

function buildMediaAsset(
  slug: string,
  slot: DesignProjectMediaSlot,
  description: MediaDescription,
): DesignProjectMediaAsset {
  const dimensions = {
    width: description.width ?? slotDimensions[slot].width,
    height: description.height ?? slotDimensions[slot].height,
  };
  const basePath = `/generated/design-projects/${slug}/${slot}`;
  const longestEdge = Math.max(dimensions.width, dimensions.height);

  const srcSet = mediaTiers
    .map((tier) => {
      const scale = tier / longestEdge;
      const renderedWidth = Math.round(dimensions.width * scale);
      return `${basePath}-${tier}.webp ${renderedWidth}w`;
    })
    .join(", ");
  const avifSrcSet = mediaTiers
    .map((tier) => {
      const scale = tier / longestEdge;
      const renderedWidth = Math.round(dimensions.width * scale);
      return `${basePath}-${tier}.avif ${renderedWidth}w`;
    })
    .join(", ");

  return {
    slot,
    src: `${basePath}-3200.webp`,
    srcSet,
    avifSrcSet,
    width: dimensions.width,
    height: dimensions.height,
    alt: description.alt,
    focalPoint: description.focalPoint ?? "50% 50%",
  };
}

export const designProjectMedia = Object.fromEntries(
  Object.entries(projectMediaDescriptions).map(([slug, descriptions]) => [
    slug,
    Object.fromEntries(
      designProjectMediaSlots.map((slot) => [
        slot,
        buildMediaAsset(slug, slot, descriptions[slot]),
      ]),
    ) as DesignProjectMediaSet,
  ]),
) as Record<string, DesignProjectMediaSet>;

export function getDesignProjectMedia(slug: string): DesignProjectMediaSet | undefined {
  return designProjectMedia[slug];
}

export function getDesignProjectMediaAsset(
  slug: string,
  slot: DesignProjectMediaSlot,
): DesignProjectMediaAsset | undefined {
  return getDesignProjectMedia(slug)?.[slot];
}
