import type { BrandProjectSlug } from "@/lib/brand-registry";
import type { PersonalProjectWorldSlug } from "@/lib/personal-project-worlds";

export type ProjectDesignReferenceSlug = PersonalProjectWorldSlug | BrandProjectSlug;

export type ProjectDesignReference = {
  slug: ProjectDesignReferenceSlug;
  kind: "studio" | "brand";
  sourceName: string;
  sourceTitle: string;
  sourceUrl: string;
  /** A paraphrased observation supported by the linked source, not a project claim. */
  observedPrinciple: string;
  /** Independent adaptation directions; these are not descriptions of the source UI. */
  layoutDirection: string;
  interactionDirection: string;
  signature: string;
  reviewedOn: string;
};

const reviewedOn = "2026-09-05";

/** One primary anchor per project. Supporting historical sources remain in each case study. */
export const projectDesignReferences = {
  afterimage: {
    slug: "afterimage",
    kind: "studio",
    sourceName: "Studio Dumbar / DEPT®",
    sourceTitle: "DEMO 2025",
    sourceUrl: "https://studiodumbar.com/work/demo-2025",
    observedPrinciple:
      "A stable typographic core carries a motion identity across radically different public-screen proportions.",
    layoutDirection:
      "Build an image-led screening sequence with a fixed information edge and two deliberately offset colour plates.",
    interactionDirection:
      "Let the viewer register the plates; movement belongs to the image while captions remain readable.",
    signature: "Registration / fixed information",
    reviewedOn,
  },
  "memory-type": {
    slug: "memory-type",
    kind: "studio",
    sourceName: "PORTO ROCHA",
    sourceTitle: "QUILO",
    sourceUrl: "https://www.portorocha.com/quilo",
    observedPrinciple:
      "Documentary photographs and regional voices shape an editorial journey rather than serving as decoration around a manifesto.",
    layoutDirection:
      "Pair collected Hangul surfaces with resident portraits, keeping original evidence and catalogue information visibly distinct.",
    interactionDirection:
      "Open a photographed source from its archive index; preserve the Korean lettering and the source context together.",
    signature: "Local voice / open archive",
    reviewedOn,
  },
  "field-notes-37": {
    slug: "field-notes-37",
    kind: "studio",
    sourceName: "Pentagram × Nomad",
    sourceTitle: "Natural History Museum",
    sourceUrl: "https://www.pentagram.com/work/natural-history-museum",
    observedPrinciple:
      "Nature-derived motion turns a museum identity from a passive catalogue into an invitation to participate.",
    layoutDirection:
      "Use a specimen-led field dossier with close observations, wider habitats, and compact records aligned beside the evidence.",
    interactionDirection:
      "Select a specimen to inspect it at useful scale; let record navigation guide discovery without decorative motion over the subject.",
    signature: "Observe / inspect / record",
    reviewedOn,
  },
  "last-letter": {
    slug: "last-letter",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "The Giancarlo DiTrapano Foundation",
    sourceUrl:
      "https://order.design/project/the-giancarlo-ditrapano-foundation-for-literature-and-the-arts",
    observedPrinciple:
      "A literary institution connects its archive and communications to one real place through a restrained, consistent identity.",
    layoutDirection:
      "Let the envelope, waiting room, and letter establish the setting before a short editorial passage; avoid oversized quotation walls.",
    interactionDirection:
      "Use deliberate page-opening and reading states, with a clear return to the original sealed object.",
    signature: "Correspondence / deliberate pause",
    reviewedOn,
  },
  "tactile-forecast": {
    slug: "tactile-forecast",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "Rebecca Atwood",
    sourceUrl: "https://order.design/project/rebecca-atwood",
    observedPrinciple:
      "The identity follows the maker's material process, letting pattern lead while technical details occupy a quieter supporting layer.",
    layoutDirection:
      "Arrange a swatch atlas around large surface photographs, compact specifications, and human-scale applications.",
    interactionDirection:
      "Select a material to move between surface, pressure, and application views; keep each caption attached to its sample.",
    signature: "Surface / sample / sensation",
    reviewedOn,
  },
  "night-index": {
    slug: "night-index",
    kind: "studio",
    sourceName: "PORTO ROCHA",
    sourceTitle: "Nothing Precious",
    sourceUrl: "https://www.portorocha.com/nothingprecious",
    observedPrinciple:
      "Full-bleed photographs, decisive crops, and varying editorial compositions keep the focus on the subjects' individuality.",
    layoutDirection:
      "Alternate a complete silhouette, a tight material crop, and a wider nocturnal setting with sparse, measured typography.",
    interactionDirection:
      "Reveal the next image through a controlled aperture and offer an unmasked close view on selection.",
    signature: "Silhouette / aperture / night",
    reviewedOn,
  },
  "public-memory": {
    slug: "public-memory",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "Washington Metropolitan Area Transit Authority",
    sourceUrl: "https://order.design/project/washington-metropolitan-area-transit-authority",
    observedPrinciple:
      "A digital wayfinding system preserves an existing visual language while making changing information clear and useful.",
    layoutDirection:
      "Build a walkable route of photographic stops around a narrow directional rail with equal Korean-English access.",
    interactionDirection:
      "Use stop navigation to move through the neighbourhood; active location and route labels must update together.",
    signature: "Route / stop / shared memory",
    reviewedOn,
  },
  "soft-machine": {
    slug: "soft-machine",
    kind: "studio",
    sourceName: "DIA",
    sourceTitle: "SPACE10",
    sourceUrl: "https://dia.tv/project/space10/",
    observedPrinciple:
      "A generative tool treats layout and imagery as parts of one adjustable system rather than isolated visual assets.",
    layoutDirection:
      "Place one soft specimen against a precise lab datum, separating material views from calibration notes.",
    interactionDirection:
      "Let controlled input alter the specimen's presentation while the measurement frame and labels remain still.",
    signature: "Soft response / rigid datum",
    reviewedOn,
  },
  "signal-noise": {
    slug: "signal-noise",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "KGNU",
    sourceUrl: "https://order.design/project/kgnu",
    observedPrinciple:
      "A radio identity supports diverse community programming while retaining a recognisable station-level structure.",
    layoutDirection:
      "Use a broadcast desk composition with a principal screen, compact channel selectors, and a distinct documentary evidence strip.",
    interactionDirection:
      "Channel selection changes the photograph and transmission metadata together; audio must remain opt-in.",
    signature: "Tune / transmit / receive",
    reviewedOn,
  },
  "chroma-tempo": {
    slug: "chroma-tempo",
    kind: "studio",
    sourceName: "COLLINS",
    sourceTitle: "San Francisco Symphony",
    sourceUrl: "https://wearecollins.com/case-studies/san-francisco-symphony/",
    observedPrinciple:
      "Responsive typography makes musical behaviour part of the identity while retaining a connection to its typographic heritage.",
    layoutDirection:
      "Organise photographs as a score: a clear beat rail, varied visual duration, and one restrained typographic voice.",
    interactionDirection:
      "Let tempo input influence image pacing and score emphasis without deforming readable captions or forcing automatic playback.",
    signature: "Tempo / visual score",
    reviewedOn,
  },
  "79w": {
    slug: "79w",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "Parks 2",
    sourceUrl: "https://order.design/project/parks-2",
    observedPrinciple:
      "A carefully documented collection of maps and brochures turns the physical records of travel into an editorial experience.",
    layoutDirection:
      "Build a westbound journey from landscape frames and travel ephemera, with distances and notes kept in a slim map margin.",
    interactionDirection:
      "Move between stops through a route strip; open a record for detail without losing the journey position.",
    signature: "Westbound / collected journey",
    reviewedOn,
  },
  tidehold: {
    slug: "tidehold",
    kind: "studio",
    sourceName: "DIA",
    sourceTitle: "Undercurrent",
    sourceUrl: "https://dia.tv/project/undercurrent/",
    observedPrinciple:
      "One organic behaviour gives an audiovisual installation a coherent identity across physical and digital applications.",
    layoutDirection:
      "Anchor coastal images to one visible waterline, moving from landscape to instrument to occupied space.",
    interactionDirection:
      "A tide control changes the image boundary and selected phase, with stable navigation and a still reduced-motion view.",
    signature: "Waterline / tidal phase",
    reviewedOn,
  },
  offsort: {
    slug: "offsort",
    kind: "studio",
    sourceName: "Pentagram",
    sourceTitle: "Circular Everything",
    sourceUrl: "https://www.pentagram.com/work/circular-everything",
    observedPrinciple:
      "Circular motion explains continued material use directly, instead of relying on a generic environmental symbol.",
    layoutDirection:
      "Follow one batch through sorting, transformation, use, and return, using visible provenance rather than sustainability slogans.",
    interactionDirection:
      "Let visitors sort a batch or choose its next state; the loop must expose material evidence rather than run as decoration.",
    signature: "Sort / reform / recirculate",
    reviewedOn,
  },
  horalis: {
    slug: "horalis",
    kind: "studio",
    sourceName: "PORTO ROCHA",
    sourceTitle: "GRAU",
    sourceUrl: "https://www.portorocha.com/grau",
    observedPrinciple:
      "An elemental graphic system allows sensory light and human interaction to carry meaning, balancing engineering precision with atmosphere.",
    layoutDirection:
      "Use changing natural light and human routines as the main story, with time and product information in a precise secondary layer.",
    interactionDirection:
      "A time dial selects a routine window and its light condition; keep informational claims unchanged by the atmospheric treatment.",
    signature: "Local time / changing light",
    reviewedOn,
  },
  "selv-00": {
    slug: "selv-00",
    kind: "studio",
    sourceName: "Pentagram",
    sourceTitle: "Hiut",
    sourceUrl: "https://www.pentagram.com/work/hiut",
    observedPrinciple:
      "Factory, makers, and place determine the art direction; utilitarian typography and human marks express craft without manufactured nostalgia.",
    layoutDirection:
      "Pair worn garments with real-looking repair details and makers' hands; keep the intervention record close to the seam.",
    interactionDirection:
      "Select a repair state to compare the garment before and after intervention, retaining earlier provenance.",
    signature: "Wear / repair / provenance",
    reviewedOn,
  },
  "tessera-live": {
    slug: "tessera-live",
    kind: "studio",
    sourceName: "PORTO ROCHA",
    sourceTitle: "PAC NYC",
    sourceUrl: "https://www.portorocha.com/pacnyc",
    observedPrinciple:
      "A square derived from the performing-arts venue expands to reveal different disciplines within one recognisable structure.",
    layoutDirection:
      "Compose a nine-room stage map with one active room and diverse photographic scales, keeping programme labels outside the performance image.",
    interactionDirection:
      "Room selection brings one performance into focus; a persistent room map preserves the relationship to the whole campus.",
    signature: "Nine rooms / one live centre",
    reviewedOn,
  },
  backmatter: {
    slug: "backmatter",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "Classified",
    sourceUrl: "https://order.design/project/classified",
    observedPrinciple:
      "High-resolution source material, careful categorisation, and compact editorial structure make an overlooked archive accessible for close inspection.",
    layoutDirection:
      "Keep documentary photographs adjacent to concise source records, with clear boundaries between a claim and supporting evidence.",
    interactionDirection:
      "Open an evidence drawer from a source marker; retain the active frame and return focus to the marker on closing.",
    signature: "Frame / evidence / correction",
    reviewedOn,
  },
  seamframe: {
    slug: "seamframe",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "Floyd",
    sourceUrl: "https://order.design/project/floyd",
    observedPrinciple:
      "An identity grounded in industrial origins carries consistently from component and packaging to the showroom and website.",
    layoutDirection:
      "Show architecture as parts, joints, assembly, and inhabitation; large construction images lead concise component schedules.",
    interactionDirection:
      "Navigate the assembly sequence in either direction and inspect a joint without hiding the building it belongs to.",
    signature: "Component / join / inhabit",
    reviewedOn,
  },
  "two-shores": {
    slug: "two-shores",
    kind: "studio",
    sourceName: "Ragged Edge",
    sourceTitle: "Wise",
    sourceUrl: "https://raggededge.com/partnerships/wise",
    observedPrinciple:
      "A global financial identity connects direct language, inclusive typography, and images of people using money in everyday life.",
    layoutDirection:
      "Give origin and arrival equal visual weight around a clear transaction record; avoid copying Wise's proprietary lettering or green palette.",
    interactionDirection:
      "Paired scene selection advances both sides of a transfer together while the complete fee and status stay visible.",
    signature: "Two places / one clear record",
    reviewedOn,
  },
  coldkiln: {
    slug: "coldkiln",
    kind: "studio",
    sourceName: "Order",
    sourceTitle: "Industrious Labs",
    sourceUrl: "https://order.design/project/industrious-labs",
    observedPrinciple:
      "A structural industrial element and documentary photography connect material production, community, and environmental accountability.",
    layoutDirection:
      "Present feedstock, fabrication, testing, installation, and return as an inspectable material sequence instead of a green-themed brochure.",
    interactionDirection:
      "Select a production stage or reverse the cycle to inspect the return path, with test information attached to its photograph.",
    signature: "Process / proof / return",
    reviewedOn,
  },
  "hm-second-sun": {
    slug: "hm-second-sun",
    kind: "brand",
    sourceName: "H&M",
    sourceTitle: "H&M Studio SS26",
    sourceUrl: "https://www2.hm.com/en_us/editorial/inspiration/presenting-hm-studio-ss26.html",
    observedPrinciple:
      "The official editorial juxtaposes complete silhouettes and garment details against quiet studio settings, presenting eccentricity through wearable styling.",
    layoutDirection:
      "Lead with people and complete looks, reserve the red mark for recognition, and alternate styling views with clear detail frames.",
    interactionDirection:
      "Switch between a complete look and its garment details; keep the interaction quick, direct, and accessible.",
    signature: "Personal styling / complete look",
    reviewedOn,
  },
  "zara-the-air-between": {
    slug: "zara-the-air-between",
    kind: "brand",
    sourceName: "ZARA",
    sourceTitle: "Studio Collection SS25 — official campaign dossier",
    sourceUrl:
      "https://www.zara.com/integration/pressapi/multimedia/be/40/d8c51b4048aa8a99d6415f647ac8_original.pdf",
    observedPrinciple:
      "The official dossier separates collection stories and photographic campaigns, with silhouette, texture, and styling as the organising material.",
    layoutDirection:
      "Use a restrained magazine sequence: generous fashion images, tightly edited labels, and separate look and material views.",
    interactionDirection:
      "Advance through an editorial contact sheet with stable image numbering; viewing a look should not require reading a manifesto.",
    signature: "Silhouette / texture / editorial",
    reviewedOn,
  },
  "uniqlo-comfort-measured": {
    slug: "uniqlo-comfort-measured",
    kind: "brand",
    sourceName: "UNIQLO",
    sourceTitle: "About LifeWear",
    sourceUrl: "https://www.uniqlo.com/us/en/contents/lifewear/",
    observedPrinciple:
      "LifeWear presents everyday clothing through practical beauty, considered detail, and the needs of ordinary life.",
    layoutDirection:
      "Use an orderly daily-life editorial with readable sans-serif text, clear product details, and the red square used sparingly as a brand marker.",
    interactionDirection:
      "Connect a daily activity to its clothing detail through simple selection; avoid clipping labels into decorative red boxes.",
    signature: "Everyday need / useful detail",
    reviewedOn,
  },
  "prada-the-quiet-error": {
    slug: "prada-the-quiet-error",
    kind: "brand",
    sourceName: "Prada Group",
    sourceTitle: "Fall/Winter 2026 — Simple Stories",
    sourceUrl:
      "https://www.pradagroup.com/en/news-media/news-section/26-07-21-prada-fw-26-campaign.html",
    observedPrinciple:
      "Quiet cinematic portraits and still lifes reframe ordinary domestic gestures, allowing clothes to act as part of an implied narrative.",
    layoutDirection:
      "Centre the official wordmark, keep optical alignment exact, and alternate composed portraits with isolated objects on restrained surfaces.",
    interactionDirection:
      "Use a deliberate scene cut or comparison to shift context; avoid noisy parallax, arbitrary neon, and long oversized statements.",
    signature: "Ordinary gesture / changed context",
    reviewedOn,
  },
  "muji-household-weather": {
    slug: "muji-household-weather",
    kind: "brand",
    sourceName: "ATELIER MUJI",
    sourceTitle: "Corporate Campaign 2003–2025 — Nothing, Yet Everything",
    sourceUrl: "https://atelier.muji.com/jp-en/exhibition/260404_osk/",
    observedPrinciple:
      "MUJI's campaign exhibition invites questions about living well through everyday life, explicitly avoiding lengthy explanations of corporate philosophy.",
    layoutDirection:
      "Let unforced household photographs and useful objects carry the story; use modest captions, plain surfaces, and patient spacing.",
    interactionDirection:
      "Select a household condition to uncover a useful object or daily gesture, with subtle changes and no spectacle.",
    signature: "Daily condition / useful object",
    reviewedOn,
  },
  "levis-wear-is-the-record": {
    slug: "levis-wear-is-the-record",
    kind: "brand",
    sourceName: "Levi Strauss & Co.",
    sourceTitle: "Keep It Loose — Fall/Winter 2026",
    sourceUrl: "https://www.levistrauss.com/2026/08/09/levis-keep-it-loose/",
    observedPrinciple:
      "Self-styled looks and loose proportions create distinct personal worlds within one recognisable denim campaign.",
    layoutDirection:
      "Build the story around worn denim, fit, leather patch, and lived-in details; integrate the housemark without a pasted-on white card.",
    interactionDirection:
      "Let the visitor move from the full silhouette to its construction and wear details through a clear visual selector.",
    signature: "Denim / fit / personal record",
    reviewedOn,
  },
  "polo-ralph-lauren-the-long-match": {
    slug: "polo-ralph-lauren-the-long-match",
    kind: "brand",
    sourceName: "Ralph Lauren",
    sourceTitle: "Heritage Icons",
    sourceUrl: "https://www.ralphlauren.com/brands-prl-men-heritage-icons-cg",
    observedPrinciple:
      "The official editorial connects named wardrobe icons, material character, and complete looks across a coherent lifestyle setting.",
    layoutDirection:
      "Treat twenty photographs as a cinematic wardrobe story, alternating group scenes, portraits, landscape, and close material observations.",
    interactionDirection:
      "Use chapter and item-family navigation to revisit the same wardrobe across the day; preserve the overall editorial sequence.",
    signature: "One wardrobe / a complete day",
    reviewedOn,
  },
  "nike-no-second-take": {
    slug: "nike-no-second-take",
    kind: "brand",
    sourceName: "NIKE, Inc.",
    sourceTitle: "Why Do It?",
    sourceUrl: "https://about.nike.com/en/newsroom/releases/nike-why-do-it-campaign",
    observedPrinciple:
      "The campaign centres the decision to begin and the unfiltered effort of sport, rather than treating victory as the only meaningful outcome.",
    layoutDirection:
      "Lead with decisive athletic frames and compact assertive type; show preparation, attempt, recovery, and another start.",
    interactionDirection:
      "Use a clear start action and a controllable action sequence; effort drives the timing, with no compulsory autoplay or audio.",
    signature: "Begin / attempt / begin again",
    reviewedOn,
  },
} satisfies {
  [Slug in ProjectDesignReferenceSlug]: ProjectDesignReference & { slug: Slug };
};

export function getProjectDesignReference(slug: string): ProjectDesignReference | undefined {
  if (!Object.hasOwn(projectDesignReferences, slug)) return undefined;
  return projectDesignReferences[slug as ProjectDesignReferenceSlug];
}

export function getProjectDesignReferenceEntries(): ProjectDesignReference[] {
  return Object.values(projectDesignReferences);
}
