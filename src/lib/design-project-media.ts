export const designProjectCoreMediaSlots = ["hero", "tactile", "spatial", "context"] as const;
export const designProjectEditorialMediaSlots = [
  "editorialA",
  "editorialB",
  "editorialC",
  "editorialD",
  "editorialE",
  "editorialF",
  "editorialG",
  "editorialH",
  "editorialI",
  "editorialJ",
  "editorialK",
  "editorialL",
  "editorialM",
  "editorialN",
  "editorialO",
  "editorialP",
] as const;
export const designProjectMediaSlots = [
  ...designProjectCoreMediaSlots,
  ...designProjectEditorialMediaSlots,
] as const;

export type DesignProjectMediaSlot = (typeof designProjectMediaSlots)[number];
export type DesignProjectCoreMediaSlot = (typeof designProjectCoreMediaSlots)[number];
export type DesignProjectEditorialMediaSlot = (typeof designProjectEditorialMediaSlots)[number];

export type DesignProjectMediaContinuity = {
  /** Stable sequence identifier shared by every frame in one visual narrative. */
  sequenceId: string;
  /** Human-readable position in the sequence, for example `03 / repair`. */
  beat: string;
  /** Persistent props or products that must remain recognisable between frames. */
  objectIds: readonly string[];
  /** Recurring people; an empty list means the frame is intentionally object-only. */
  castIds: readonly string[];
  /** Stable garment or styling packages that image production must not redesign. */
  wardrobeIds: readonly string[];
  /** What has changed since the preceding frame. */
  state: string;
  /** Concrete evidence that must be visible in the photograph. */
  visualProof: string;
  /** Keeps documented brand history separate from the invented portfolio sequence. */
  sourceBasis: "official-object/project-sequence" | "independent-project-reading";
  /** Optional opening frame deliberately echoed by this frame. */
  returnsTo?: DesignProjectMediaSlot;
};

export type DesignProjectMediaAsset = {
  slot: DesignProjectMediaSlot;
  src: string;
  srcSet: string;
  avifSrcSet: string;
  width: number;
  height: number;
  alt: string;
  focalPoint: string;
  continuity?: DesignProjectMediaContinuity;
};

export type DesignProjectMediaSet = Record<DesignProjectCoreMediaSlot, DesignProjectMediaAsset> &
  Partial<Record<DesignProjectEditorialMediaSlot, DesignProjectMediaAsset>>;

type MediaDescription = {
  alt: string;
  focalPoint?: string;
  width?: number;
  height?: number;
  continuity?: DesignProjectMediaContinuity;
};

type ProjectMediaDescription = Record<DesignProjectCoreMediaSlot, MediaDescription> &
  Partial<Record<DesignProjectEditorialMediaSlot, MediaDescription>>;

function independentBeat(
  sequenceId: string,
  beat: string,
  objectIds: readonly string[],
  castIds: readonly string[],
  wardrobeIds: readonly string[],
  state: string,
  visualProof: string,
  returnsTo?: DesignProjectMediaSlot,
): DesignProjectMediaContinuity {
  return {
    sequenceId,
    beat,
    objectIds,
    castIds,
    wardrobeIds,
    state,
    visualProof,
    sourceBasis: "independent-project-reading",
    returnsTo,
  };
}

const slotDimensions: Record<DesignProjectMediaSlot, { width: number; height: number }> = {
  hero: { width: 2560, height: 3200 },
  tactile: { width: 3200, height: 2133 },
  spatial: { width: 3200, height: 1800 },
  context: { width: 1800, height: 3200 },
  editorialA: { width: 2560, height: 3200 },
  editorialB: { width: 3200, height: 2133 },
  editorialC: { width: 2560, height: 3200 },
  editorialD: { width: 3200, height: 1800 },
  editorialE: { width: 2560, height: 3200 },
  editorialF: { width: 3200, height: 2133 },
  editorialG: { width: 2560, height: 3200 },
  editorialH: { width: 3200, height: 2133 },
  editorialI: { width: 2560, height: 3200 },
  editorialJ: { width: 3200, height: 1800 },
  editorialK: { width: 2560, height: 3200 },
  editorialL: { width: 3200, height: 2133 },
  editorialM: { width: 2560, height: 3200 },
  editorialN: { width: 3200, height: 1800 },
  editorialO: { width: 3200, height: 3200 },
  editorialP: { width: 3200, height: 1800 },
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
    editorialA: {
      alt: "Printmaker aligning the fluorescent-orange plate over a cobalt festival sheet by hand.",
      focalPoint: "48% 43%",
      continuity: independentBeat(
        "afterimage-eight",
        "05 / registration",
        ["cobalt-sheet", "orange-plate", "registration-pins"],
        ["printmaker-01"],
        ["ink-apron-01"],
        "The second colour plate is being aligned.",
        "Registration pins and both wet colour edges remain visible.",
      ),
    },
    editorialB: {
      alt: "Viewers crossing overlapping cobalt and orange projections while the programme text stays fixed.",
      focalPoint: "50% 42%",
      continuity: independentBeat(
        "afterimage-eight",
        "06 / audience",
        ["cobalt-projection", "orange-projection", "fixed-programme-rail"],
        ["viewer-group-01"],
        ["viewer-dark-01"],
        "The audience completes the moving exposure.",
        "Bodies interrupt both colour fields without obscuring the fixed programme rail.",
      ),
    },
    editorialC: {
      alt: "Festival attendant arranging admission tickets and programmes beside an orange light plate.",
      focalPoint: "50% 47%",
      continuity: independentBeat(
        "afterimage-eight",
        "07 / admission",
        ["admission-ticket", "festival-programme", "orange-light-plate"],
        ["attendant-01"],
        ["black-uniform-01"],
        "The registration rule scales to entry objects.",
        "Dates remain sharp while image layers visibly drift.",
      ),
    },
    editorialD: {
      alt: "Empty screening room after the audience leaves, with cobalt and orange shadows lingering on the screen.",
      focalPoint: "50% 46%",
      continuity: independentBeat(
        "afterimage-eight",
        "08 / residue",
        ["cinema-screen", "orange-light-plate"],
        [],
        [],
        "The event ends while its optical residue remains.",
        "Two offset colour shadows echo the opening dancer without a figure present.",
        "hero",
      ),
    },
  },
  "memory-type": {
    hero: {
      alt: "Suspended archive of painted Hangul stroke fragments arranged above a glass specimen case.",
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
    editorialA: {
      alt: "Veteran sign painter forming a Hangul stroke while a resident watches in the workshop doorway.",
      focalPoint: "46% 39%",
      continuity: independentBeat(
        "memory-type-eight",
        "05 / voice",
        ["sign-brush", "painted-board"],
        ["sign-painter-01", "resident-01"],
        ["work-smock-01", "navy-cardigan-01"],
        "A living source stroke is recorded with its maker.",
        "The wet black stroke and the painter's hand are both legible.",
      ),
    },
    editorialB: {
      alt: "Awning letter, handwritten notice, and shop receipt photographed together before cataloguing.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "memory-type-eight",
        "06 / evidence",
        ["awning-letter", "handwritten-notice", "shop-receipt"],
        ["archivist-01"],
        ["archive-coat-01"],
        "Ordinary printed material enters the source record.",
        "All three source surfaces and their catalogue cards remain visible.",
      ),
    },
    editorialC: {
      alt: "Older shopkeeper describing a painted sign while a younger recorder listens beside it.",
      focalPoint: "47% 40%",
      continuity: independentBeat(
        "memory-type-eight",
        "07 / voice",
        ["painted-board", "field-recorder", "catalogue-card"],
        ["resident-01", "archivist-01"],
        ["navy-cardigan-01", "archive-coat-01"],
        "The resident names the context of the collected stroke.",
        "Speaker, listener, and original sign remain together in the frame.",
      ),
    },
    editorialD: {
      alt: "New neighbourhood notice pairing a reconstructed Hangul glyph with its photographed source.",
      focalPoint: "51% 45%",
      continuity: independentBeat(
        "memory-type-eight",
        "08 / return",
        ["reconstructed-glyph", "source-photograph", "neighbourhood-notice"],
        ["resident-01"],
        ["navy-cardigan-01"],
        "The reconstructed form returns to everyday street use.",
        "New glyph and source photograph share equal weight on the notice.",
        "hero",
      ),
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
    editorialA: {
      alt: "Weathered field card showing one specimen coordinate, collection time, and rain status beside the living seam.",
      focalPoint: "48% 49%",
      continuity: independentBeat(
        "field-notes-eight",
        "05 / coordinate",
        ["field-card-37", "concrete-seam", "acid-green-marker"],
        ["researcher-01"],
        ["field-jacket-01"],
        "The observation receives a precise coordinate without being removed.",
        "Coordinate, weather, time, and living specimen appear in one frame.",
      ),
    },
    editorialB: {
      alt: "Researcher photographing lichen in place with a scale card instead of collecting it.",
      focalPoint: "52% 45%",
      continuity: independentBeat(
        "field-notes-eight",
        "06 / observe",
        ["field-card-37", "macro-camera", "scale-card"],
        ["researcher-01"],
        ["field-jacket-01"],
        "The study advances through in-situ observation.",
        "The organism remains attached while the scale and camera document it.",
      ),
    },
    editorialC: {
      alt: "Thirty-seven city coordinates plotted beside a specimen cabinet with deliberately empty observation cells.",
      focalPoint: "50% 46%",
      continuity: independentBeat(
        "field-notes-eight",
        "07 / absence",
        ["city-coordinate-map", "specimen-cabinet", "field-card-37"],
        [],
        [],
        "Observed and missing records enter the same index.",
        "Blank numbered cells are as legible as occupied ones.",
      ),
    },
    editorialD: {
      alt: "Concrete seam still occupied by its living specimen at dusk after the researcher has left.",
      focalPoint: "52% 47%",
      continuity: independentBeat(
        "field-notes-eight",
        "08 / release",
        ["concrete-seam", "specimen-37", "field-card-37"],
        [],
        [],
        "Observation ends before the life being observed.",
        "The undisturbed specimen remains at the recorded coordinate without a person present.",
        "hero",
      ),
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
    editorialA: {
      alt: "Writer's hand paused above the address line of an open cream envelope in a quiet waiting room.",
      focalPoint: "45% 48%",
      continuity: independentBeat(
        "last-letter-eight",
        "05 / hesitation",
        ["cream-envelope", "graphite-pencil", "waiting-room-table"],
        ["passenger-01"],
        ["charcoal-coat-01"],
        "The letter is complete but remains unaddressed.",
        "The empty address line and stopped pencil share the focal plane.",
      ),
    },
    editorialB: {
      alt: "Returned envelopes, cancelled routing marks, and one unbroken fold arranged at the postal counter.",
      focalPoint: "51% 48%",
      continuity: independentBeat(
        "last-letter-eight",
        "06 / return",
        ["cream-envelope", "routing-stamp", "postal-tray"],
        [],
        [],
        "Delivery traces accumulate without resolving the message.",
        "Cancelled marks never cover the unfinished sentence or fold.",
      ),
    },
    editorialC: {
      alt: "Empty mail slot facing a returned cream envelope on the tiled floor below.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "last-letter-eight",
        "07 / return",
        ["cream-envelope", "railway-post-box"],
        [],
        [],
        "The delivery system returns no resolution.",
        "The empty slot and returned envelope occupy the same quiet axis.",
      ),
    },
    editorialD: {
      alt: "Daylight reaching the same sealed letter on a quiet waiting-room table the next morning.",
      focalPoint: "50% 47%",
      continuity: independentBeat(
        "last-letter-eight",
        "08 / morning",
        ["cream-envelope", "waiting-room-table"],
        [],
        [],
        "The unfinished sentence remains sealed after the night journey.",
        "The same envelope and fold line return in clean morning light.",
        "hero",
      ),
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
    editorialA: {
      alt: "Fingertip depressing a soft sample while a depth gauge records the material response.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "tactile-forecast-eight",
        "05 / compression",
        ["soft-sample-01", "depth-gauge", "pressure-card"],
        ["designer-01"],
        ["studio-apron-01"],
        "The surface keeps a measurable trace of touch.",
        "Fingertip, depression, and gauge reading are visible together.",
      ),
    },
    editorialB: {
      alt: "Material lab comparing gloss and fibre response under a calibrated moving light.",
      focalPoint: "52% 47%",
      continuity: independentBeat(
        "tactile-forecast-eight",
        "06 / light",
        ["material-fan-01", "calibrated-light", "reflectance-scale"],
        ["designer-01"],
        ["studio-apron-01"],
        "Surface response becomes measurable under controlled light.",
        "The reflectance scale and changing highlight appear together.",
      ),
    },
    editorialC: {
      alt: "Participant comparing coded material samples by touch without seeing their colours.",
      focalPoint: "49% 42%",
      continuity: independentBeat(
        "tactile-forecast-eight",
        "07 / blind read",
        ["coded-sample-set", "pressure-card"],
        ["participant-01", "designer-01"],
        ["testing-shirt-01", "studio-apron-01"],
        "Colour leaves the evaluation so touch can lead.",
        "The participant's hands and neutral sample codes remain unobstructed.",
      ),
    },
    editorialD: {
      alt: "Visitors resting against tactile wall panels and upholstered seating made from the tested material system.",
      focalPoint: "51% 44%",
      continuity: independentBeat(
        "tactile-forecast-eight",
        "08 / use",
        ["material-fan-01", "tactile-wall-panel", "upholstered-seat"],
        ["participant-01", "visitor-02"],
        ["testing-shirt-01", "visitor-knit-02"],
        "The forecast becomes a full-scale bodily environment.",
        "The approved plum and terracotta surfaces remain identifiable at room scale.",
        "hero",
      ),
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
    editorialA: {
      alt: "Model preparing before a mirror as a single midnight-blue arch frames the dressing room.",
      focalPoint: "48% 36%",
      continuity: independentBeat(
        "night-index-eight",
        "05 / prepare",
        ["midnight-arch", "quarterly-folio"],
        ["model-01"],
        ["navy-look-01"],
        "The night index begins before the public pose.",
        "The same arch and navy garment are visible in the mirror.",
      ),
    },
    editorialB: {
      alt: "Fashion figure crossing a rain-wet city lane with one long diagonal blue shadow.",
      focalPoint: "44% 39%",
      continuity: independentBeat(
        "night-index-eight",
        "06 / street",
        ["midnight-arch", "wet-pavement"],
        ["model-01"],
        ["navy-look-01"],
        "The controlled silhouette enters the city after dark.",
        "One off-axis shadow interrupts the otherwise axial frame.",
      ),
    },
    editorialC: {
      alt: "Tailored figure and one diagonal blue light reflected across rain-polished pavement.",
      focalPoint: "50% 40%",
      continuity: independentBeat(
        "night-index-eight",
        "07 / reflection",
        ["wet-pavement", "diagonal-blue-light"],
        ["model-01"],
        ["navy-look-01"],
        "The fashion frame doubles below the figure.",
        "The same tailored silhouette and diagonal interruption repeat in reflection.",
      ),
    },
    editorialD: {
      alt: "Empty pavilion at dawn with a thin line of morning light passing through its final arch.",
      focalPoint: "50% 45%",
      continuity: independentBeat(
        "night-index-eight",
        "08 / dawn",
        ["midnight-arch", "morning-light-line"],
        [],
        [],
        "The iris closes as natural light returns.",
        "One thin dawn line interrupts the empty final arch.",
        "hero",
      ),
    },
  },
  "public-memory": {
    hero: {
      alt: "Civic pavilion with folded red, yellow, and blue route forms reflected in water.",
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
    editorialA: {
      alt: "Resident pointing to the outline left by a removed storefront sign on the P7 route.",
      focalPoint: "46% 41%",
      continuity: independentBeat(
        "public-memory-eight",
        "05 / trace",
        ["route-p7-card", "removed-sign-outline", "shuttered-shop"],
        ["resident-01"],
        ["resident-coat-01"],
        "The missing shop keeps a visible place on the route.",
        "The resident's gesture aligns with the removed sign outline.",
      ),
    },
    editorialB: {
      alt: "Two generations holding the same folded P7 map above the street it describes.",
      focalPoint: "50% 44%",
      continuity: independentBeat(
        "public-memory-eight",
        "06 / map",
        ["route-p7-map", "route-p7-marker"],
        ["resident-01", "walker-01"],
        ["resident-coat-01", "walker-jacket-01"],
        "Two generations choose the next story stop together.",
        "The map route and visible street marker share the same P7 code.",
      ),
    },
    editorialC: {
      alt: "Residents crossing an intersection while the bilingual P7 route marker remains visible behind them.",
      focalPoint: "53% 42%",
      continuity: independentBeat(
        "public-memory-eight",
        "07 / walk",
        ["route-p7-map", "walk-ticket", "route-p7-marker"],
        ["resident-01", "walker-01", "walker-02"],
        ["resident-coat-01", "walker-jacket-01", "walker-jacket-02"],
        "Memory moves through the neighbourhood as a group.",
        "The walkers and fixed P7 marker remain in one continuous street frame.",
      ),
    },
    editorialD: {
      alt: "Blue-hour elevated view connecting the neighbourhood through a line of illuminated P7 story stops.",
      focalPoint: "50% 47%",
      continuity: independentBeat(
        "public-memory-eight",
        "08 / repeat",
        ["route-p7-marker", "route-p7-map", "story-stop-lights"],
        [],
        [],
        "The complete repeated route becomes visible at blue hour.",
        "Every illuminated stop follows the same mapped neighbourhood line.",
        "hero",
      ),
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
    editorialA: {
      alt: "Material researcher pouring coral silicone into a rigid chrome mould on the laboratory datum.",
      focalPoint: "49% 44%",
      continuity: independentBeat(
        "soft-machine-eight",
        "05 / cast",
        ["coral-silicone-01", "chrome-mould-01", "datum-table"],
        ["researcher-01"],
        ["lab-coat-01"],
        "The living form begins inside a repeatable tool.",
        "Liquid silicone, mould edge, and horizontal datum are visible together.",
      ),
    },
    editorialB: {
      alt: "Robotic probe compressing the cured silicone while a monitor records deformation depth.",
      focalPoint: "53% 45%",
      continuity: independentBeat(
        "soft-machine-eight",
        "06 / measure",
        ["coral-silicone-01", "robotic-probe", "deformation-monitor"],
        ["researcher-01"],
        ["lab-coat-01"],
        "Touch memory is translated into measurable deformation.",
        "Probe depth and the corresponding stored surface dent are simultaneously legible.",
      ),
    },
    editorialC: {
      alt: "Visitor pressing a full-scale coral membrane inside the chrome material pavilion.",
      focalPoint: "46% 41%",
      continuity: independentBeat(
        "soft-machine-eight",
        "07 / encounter",
        ["coral-membrane-01", "chrome-pavilion-datum"],
        ["visitor-01"],
        ["charcoal-visitor-look-01"],
        "The laboratory behaviour becomes a public bodily encounter.",
        "The visitor's palm visibly changes the membrane against a fixed datum.",
      ),
    },
    editorialD: {
      alt: "Compressed silicone membrane slowly recovering its original contour after the visitor steps away.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "soft-machine-eight",
        "08 / recover",
        ["coral-membrane-01", "chrome-pavilion-datum"],
        [],
        [],
        "The material releases the stored touch over time.",
        "A residual hand-shaped depression remains beneath the unmoving datum.",
        "hero",
      ),
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
    editorialA: {
      alt: "Patch cables and labelled carriers connecting a compact transmitter rack during the live broadcast.",
      focalPoint: "52% 45%",
      continuity: independentBeat(
        "signal-noise-eight",
        "05 / transmit",
        ["patch-cable-set", "transmitter-rack", "labelled-carrier"],
        ["technician-01"],
        ["broadcast-jacket-01"],
        "The signal leaves the room through a traceable physical route.",
        "Every cable and carrier remains labelled at the transmitter.",
      ),
    },
    editorialB: {
      alt: "Late-night listener watching the live feed from a small CRT in a dark domestic room.",
      focalPoint: "43% 42%",
      continuity: independentBeat(
        "signal-noise-eight",
        "06 / receive",
        ["listener-crt-01", "white-data-rail", "broadcast-clock"],
        ["listener-01", "vocalist-01"],
        ["listener-shirt-01", "black-stage-look-01"],
        "One listener closes the live broadcast circuit.",
        "The vocalist remains recognisable through noise on the domestic CRT.",
      ),
    },
    editorialC: {
      alt: "Programme time and accessibility details staying sharp over a drifting colour image channel.",
      focalPoint: "50% 47%",
      continuity: independentBeat(
        "signal-noise-eight",
        "07 / decode",
        ["white-data-rail", "broadcast-clock", "drifting-image-channel"],
        ["vocalist-01"],
        ["black-stage-look-01"],
        "Public information holds still while the image drifts.",
        "Time, channel, and access details stay optically sharp over the unstable feed.",
      ),
    },
    editorialD: {
      alt: "Broadcast ending at dawn with the interference gone and only the white information rail on screen.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "signal-noise-eight",
        "08 / decode",
        ["listener-crt-01", "white-data-rail", "broadcast-clock"],
        [],
        [],
        "Expression falls away while essential information persists.",
        "The unchanged time, channel, and access line remain on a clean screen.",
        "hero",
      ),
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
    editorialA: {
      alt: "Drum membrane flexing beneath a mallet at the exact instant of impact.",
      focalPoint: "50% 47%",
      continuity: independentBeat(
        "chroma-tempo-eight",
        "05 / pulse",
        ["drum-01", "mallet-01", "frequency-key"],
        ["percussionist-01"],
        ["performance-look-01"],
        "Physical impact becomes the first visible input.",
        "Mallet contact and the flexed drum surface share one sharp instant.",
      ),
    },
    editorialB: {
      alt: "Rehearsal sheet pairing BPM, key, and three frequency bands with their approved hues.",
      focalPoint: "50% 49%",
      continuity: independentBeat(
        "chroma-tempo-eight",
        "06 / score",
        ["tempo-score-01", "tuning-fork-01", "frequency-key"],
        ["percussionist-01"],
        ["performance-look-01"],
        "Every stage colour receives an audible source.",
        "BPM, key, frequency bands, and the three approved hues are readable together.",
      ),
    },
    editorialC: {
      alt: "Real audio levels on a mixing desk corresponding to luminous amplitude bars behind it.",
      focalPoint: "55% 43%",
      continuity: independentBeat(
        "chroma-tempo-eight",
        "07 / console",
        ["live-mixer-01", "amplitude-bars", "frequency-key"],
        ["engineer-01"],
        ["engineer-black-01"],
        "The live meters lead the visible stage response.",
        "Mixer levels and matching bar heights appear in the same frame.",
      ),
    },
    editorialD: {
      alt: "Final note leaving one luminous frequency band above the empty stage after the players exit.",
      focalPoint: "50% 45%",
      continuity: independentBeat(
        "chroma-tempo-eight",
        "08 / release",
        ["amplitude-bars", "frequency-key", "tempo-score-01"],
        [],
        [],
        "The performance resolves into its last audible value.",
        "One colour band remains at the height recorded by the final note.",
        "hero",
      ),
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
    editorialA: {
      alt: "Driver completing a dawn safety check beside the electric coach and continuous orange route line.",
      focalPoint: "43% 42%",
      continuity: independentBeat(
        "79w-eight",
        "05 / prepare",
        ["coach-79w-01", "orange-route-line", "inspection-tablet"],
        ["driver-01"],
        ["driver-uniform-01"],
        "The westbound journey begins with a visible check.",
        "Vehicle number, route line, and completed inspection state remain legible.",
      ),
    },
    editorialB: {
      alt: "Charging connector locked into the coach while the station display shows departure readiness.",
      focalPoint: "55% 48%",
      continuity: independentBeat(
        "79w-eight",
        "06 / charge",
        ["coach-79w-01", "charging-connector-01", "departure-display"],
        ["driver-01"],
        ["driver-uniform-01"],
        "A planned pause becomes useful journey information.",
        "Connector state and departure time appear without decorative animation.",
      ),
    },
    editorialC: {
      alt: "Passengers facing a wide regional landscape through the quiet electric coach interior.",
      focalPoint: "54% 43%",
      continuity: independentBeat(
        "79w-eight",
        "07 / distance",
        ["coach-79w-01", "orange-route-line", "regional-landscape"],
        ["commuter-01", "passenger-group-01"],
        ["commuter-coat-01", "passenger-neutral-01"],
        "The westbound line crosses the open distance between cities.",
        "The calm interior, passengers, and moving landscape share one continuous horizon.",
      ),
    },
    editorialD: {
      alt: "Commuter leaving the coach and walking beneath the same orange line into the arrival city.",
      focalPoint: "57% 43%",
      continuity: independentBeat(
        "79w-eight",
        "08 / arrive",
        ["coach-79w-01", "rider-pass-01", "orange-route-line"],
        ["commuter-01"],
        ["commuter-coat-01"],
        "The intercity route resolves as a continuous urban path.",
        "The orange line leaves the vehicle and continues toward the city.",
        "hero",
      ),
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
    editorialA: {
      alt: "Waterfront hotel at low tide with mudflat channels and new reed growth exposed below the datum.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "tidehold-eight",
        "05 / low water",
        ["tidehold-hotel", "tide-datum", "reed-bed-01"],
        [],
        [],
        "The same shore exposes its active habitat at low water.",
        "Mudflat channels and new reed growth sit below the unchanged datum.",
      ),
    },
    editorialB: {
      alt: "Guest receiving a room key and current habitat guide at the timber check-in counter.",
      focalPoint: "48% 44%",
      continuity: independentBeat(
        "tidehold-eight",
        "06 / arrival",
        ["room-key-01", "linen-field-guide", "tide-card"],
        ["guest-01", "host-01"],
        ["guest-knit-01", "host-jacket-01"],
        "Check-in begins with field knowledge.",
        "The room key and current habitat route are handed over together.",
      ),
    },
    editorialC: {
      alt: "Local restoration crew planting reeds along a measured section of the tidal bank.",
      focalPoint: "52% 43%",
      continuity: independentBeat(
        "tidehold-eight",
        "07 / restoration",
        ["reed-seedlings", "tide-datum", "survey-marker"],
        ["naturalist-01", "restoration-crew-01"],
        ["naturalist-fieldwear-01", "restoration-workwear-01"],
        "The shoreline is actively returned through measured work.",
        "New reeds align with the marked restoration section.",
      ),
    },
    editorialD: {
      alt: "One warm hotel-room window facing a dark undisturbed marsh after service ends.",
      focalPoint: "55% 45%",
      continuity: independentBeat(
        "tidehold-eight",
        "08 / night tide",
        ["tidehold-hotel", "warm-room-window", "reed-bed-01"],
        [],
        [],
        "The habitat remains active after hospitality service ends.",
        "Only one room window is lit while the marsh remains dark and undisturbed.",
        "hero",
      ),
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
    editorialA: {
      alt: "Farmer sorting cosmetically imperfect vegetables beside harvest crates marked for rescue.",
      focalPoint: "46% 42%",
      continuity: independentBeat(
        "offsort-eight",
        "05 / rescue",
        ["rescue-crate-01", "batch-marker-01", "imperfect-produce"],
        ["farmer-01"],
        ["farm-apron-01"],
        "Rejected appearance is separated from usable value.",
        "Imperfect produce and the rescue batch code are visible together.",
      ),
    },
    editorialB: {
      alt: "Produce sorted by its next use route rather than cosmetic grade on a working line.",
      focalPoint: "51% 45%",
      continuity: independentBeat(
        "offsort-eight",
        "06 / sort",
        ["rescue-crate-01", "batch-marker-01", "use-route-bins"],
        ["farmer-01", "sorter-01"],
        ["farm-apron-01", "sorting-apron-01"],
        "Sorting records the useful route for every input.",
        "Each bin names processing purpose rather than appearance grade.",
      ),
    },
    editorialC: {
      alt: "Reusable glass jars filling on a small production line with batch and next-route labels facing forward.",
      focalPoint: "53% 47%",
      continuity: independentBeat(
        "offsort-eight",
        "07 / fill",
        ["reusable-jar-01", "batch-marker-01", "return-label"],
        ["cook-01"],
        ["kitchen-apron-01"],
        "The finished product retains its origin and return path.",
        "Input, method, batch, and next route are readable on every jar.",
      ),
    },
    editorialD: {
      alt: "Washed jars and folded produce crates returning through the same working market counter.",
      focalPoint: "52% 45%",
      continuity: independentBeat(
        "offsort-eight",
        "08 / return",
        ["reusable-jar-01", "return-crate-01", "market-counter-01"],
        ["market-worker-01"],
        ["market-apron-01"],
        "The empty pack keeps moving through the market system.",
        "Clean jars and folded crates carry the same batch-route labels back.",
        "hero",
      ),
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
    editorialA: {
      alt: "Traveller watching blue-hour light through an aircraft window with the compact regimen at hand.",
      focalPoint: "42% 39%",
      continuity: independentBeat(
        "horalis-eight",
        "05 / cross",
        ["horalis-vial-set", "time-dial-01", "aircraft-window"],
        ["traveller-01"],
        ["travel-look-01"],
        "The body crosses time zones before the skin routine changes.",
        "Window light and the physical dial show different local times.",
      ),
    },
    editorialB: {
      alt: "Tired traveller facing a hotel mirror while the twenty-four-hour dial marks the current routine window.",
      focalPoint: "47% 37%",
      continuity: independentBeat(
        "horalis-eight",
        "06 / locate",
        ["horalis-vial-set", "time-dial-01", "hotel-mirror"],
        ["traveller-01"],
        ["travel-look-01"],
        "The regimen locates the traveller in destination time.",
        "Mirror, dial window, and unchanged three-vial kit appear together.",
      ),
    },
    editorialC: {
      alt: "Hand dispensing one fixed dose from a frosted vial beside the aligned local-time marker.",
      focalPoint: "49% 48%",
      continuity: independentBeat(
        "horalis-eight",
        "07 / dose",
        ["horalis-vial-02", "time-dial-01", "dosage-tray"],
        ["traveller-01"],
        ["travel-look-01"],
        "The time window changes while dosage remains fixed.",
        "One measured dose and its local-time action are clearly paired.",
      ),
    },
    editorialD: {
      alt: "Phone schedule and machined dial showing the same sleep window as the traveller closes the curtains.",
      focalPoint: "54% 42%",
      continuity: independentBeat(
        "horalis-eight",
        "08 / rest",
        ["horalis-vial-set", "time-dial-01", "horalis-app-screen"],
        ["traveller-01"],
        ["sleepwear-01"],
        "Digital and physical routines resolve into rest.",
        "Both interfaces display the same window beside the recurring kit.",
        "hero",
      ),
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
    editorialA: {
      alt: "Original slash-zero garment hanging beside its flat pattern and empty intervention record.",
      focalPoint: "49% 43%",
      continuity: independentBeat(
        "selv-eight",
        "05 / state 00",
        ["selv-garment-01", "seam-code-00", "flat-pattern-01", "garment-passport-01"],
        [],
        [],
        "The base garment begins deliberately unfinished.",
        "Garment, pattern, /00 code, and blank intervention record appear together.",
      ),
    },
    editorialB: {
      alt: "Torn elbow and stressed seam documented on the wearer before any repair begins.",
      focalPoint: "48% 40%",
      continuity: independentBeat(
        "selv-eight",
        "06 / damage 01",
        ["selv-garment-01", "seam-code-00", "repair-tab-01"],
        ["wearer-01"],
        ["selv-look-00"],
        "Use creates the next intervention instruction.",
        "The torn elbow, stressed seam, and original /00 code remain visible.",
      ),
    },
    editorialC: {
      alt: "Maker stitching the damaged panel with contrast thread and adding the next visible seam code.",
      focalPoint: "51% 44%",
      continuity: independentBeat(
        "selv-eight",
        "07 / repair 02",
        ["selv-garment-01", "seam-code-02", "oxide-panel-01"],
        ["repairer-01"],
        ["repair-apron-01"],
        "The repair names itself without hiding the earlier state.",
        "Contrast thread, new panel, and added /02 code remain legible.",
      ),
    },
    editorialD: {
      alt: "Second owner scanning the garment passport while wearing every accumulated repair code in view.",
      focalPoint: "47% 36%",
      continuity: independentBeat(
        "selv-eight",
        "08 / continue",
        ["selv-garment-01", "seam-code-01", "garment-passport-01"],
        ["owner-02"],
        ["selv-look-01"],
        "The repaired garment begins another life without resetting to new.",
        "Passport screen and physical /00 plus /01 codes match.",
        "hero",
      ),
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
    editorialA: {
      alt: "Dancer rehearsing alone in one illuminated cell while the other eight stage rooms remain visible.",
      focalPoint: "44% 39%",
      continuity: independentBeat(
        "tessera-eight",
        "05 / rehearse",
        ["nine-cell-stage", "centre-live-tile"],
        ["dancer-01"],
        ["rehearsal-look-01"],
        "The season begins as work inside one room.",
        "All nine cells remain legible with the active centre tile lit.",
      ),
    },
    editorialB: {
      alt: "Musicians sound-checking across adjacent rooms as the nine-tile lighting state responds to rehearsal.",
      focalPoint: "52% 43%",
      continuity: independentBeat(
        "tessera-eight",
        "06 / tune",
        ["nine-cell-stage", "centre-live-tile", "soundcheck-console"],
        ["musician-01", "musician-02"],
        ["soundcheck-look-01", "soundcheck-look-02"],
        "A second discipline changes the live centre without changing the field.",
        "The nine-cell plan and active programme colour remain visible.",
      ),
    },
    editorialC: {
      alt: "Stage technician setting the final light while ticket, programme, and backstage pass wait on the console.",
      focalPoint: "51% 42%",
      continuity: independentBeat(
        "tessera-eight",
        "07 / ready",
        ["centre-live-tile", "season-ticket", "programme-01", "backstage-pass-01"],
        ["technician-01"],
        ["crew-black-01"],
        "Production and admission align before the audience arrives.",
        "All three access objects repeat the active nine-tile state.",
      ),
    },
    editorialD: {
      alt: "Post-show stage empty except for one illuminated central tile in the nine-cell floor.",
      focalPoint: "50% 46%",
      continuity: independentBeat(
        "tessera-eight",
        "08 / after",
        ["nine-cell-stage", "centre-live-tile"],
        [],
        [],
        "The many-room event resolves to one live centre.",
        "Eight dark stage cells surround the same illuminated centre tile.",
        "hero",
      ),
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
    editorialA: {
      alt: "Field journalist recording location, date, and camera position on the slate before filming.",
      focalPoint: "47% 42%",
      continuity: independentBeat(
        "backmatter-eight",
        "05 / record",
        ["field-slate-14", "camera-01", "source-number-14"],
        ["reporter-01"],
        ["reporter-jacket-01"],
        "The source begins before the edit or interview.",
        "Location, date, camera position, and source number remain readable on the slate.",
      ),
    },
    editorialB: {
      alt: "Interview subject, recorder, room, and signed consent notes preserved in one documentary frame.",
      focalPoint: "47% 39%",
      continuity: independentBeat(
        "backmatter-eight",
        "06 / testimony",
        ["audio-recorder-01", "consent-notes-14", "source-number-14"],
        ["reporter-01", "source-01"],
        ["reporter-jacket-01", "source-look-01"],
        "The interview keeps the conditions under which it was made.",
        "Subject, recorder, room context, and consent record remain visible together.",
      ),
    },
    editorialC: {
      alt: "Editor calling the interview subject while the disputed sentence and source record remain side by side.",
      focalPoint: "45% 40%",
      continuity: independentBeat(
        "backmatter-eight",
        "07 / verify",
        ["source-ledger-14", "edit-monitor-01", "correction-marker"],
        ["editor-01", "source-01"],
        ["editor-shirt-01", "source-look-01"],
        "The claim pauses for direct verification.",
        "The old sentence, evidence number, and live call are all visible.",
      ),
    },
    editorialD: {
      alt: "Public screening interface preserving the corrected statement beside its earlier version and source drawer.",
      focalPoint: "52% 44%",
      continuity: independentBeat(
        "backmatter-eight",
        "08 / correct",
        ["source-ledger-14", "public-screen-01", "correction-marker"],
        ["editor-01", "viewer-group-01"],
        ["editor-shirt-01", "viewer-dark-01"],
        "Correction becomes visible rather than silently replacing history.",
        "Previous text, corrected text, and supporting record remain accessible together.",
        "hero",
      ),
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
    editorialA: {
      alt: "Numbered mass-timber components stacked in assembly order beside their material passports.",
      focalPoint: "51% 46%",
      continuity: independentBeat(
        "seamframe-eight",
        "05 / index",
        ["timber-module-01", "joint-01", "material-passport-01"],
        [],
        [],
        "Every building part enters the project as a recoverable component.",
        "Part number, joint path, and passport code appear on each stack.",
      ),
    },
    editorialB: {
      alt: "Construction crew locking a reversible timber joint while the exposed structural grid remains visible.",
      focalPoint: "52% 43%",
      continuity: independentBeat(
        "seamframe-eight",
        "06 / assemble",
        ["timber-module-01", "joint-01", "grid-marker-01"],
        ["builder-01", "builder-02"],
        ["sitewear-01", "sitewear-02"],
        "Assembly makes the future disassembly path legible.",
        "The open joint and matching grid marker remain unobstructed.",
      ),
    },
    editorialC: {
      alt: "One timber wall module detached while the adjacent occupied room remains intact.",
      focalPoint: "52% 43%",
      continuity: independentBeat(
        "seamframe-eight",
        "07 / change",
        ["timber-module-01", "joint-01", "occupied-room-01"],
        ["builder-01", "resident-01"],
        ["sitewear-01", "resident-look-01"],
        "One room can change without demolishing its neighbour.",
        "Detached module, reversible joint, and intact occupied space appear together.",
      ),
    },
    editorialD: {
      alt: "Recovered timber module catalogued in the warehouse after removal from the occupied building.",
      focalPoint: "55% 45%",
      continuity: independentBeat(
        "seamframe-eight",
        "08 / recover",
        ["timber-module-01", "joint-01", "material-passport-01"],
        ["builder-01"],
        ["sitewear-01"],
        "The building remembers how one part can leave and return.",
        "The recovered part number matches its original passport and joint.",
        "hero",
      ),
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
    editorialA: {
      alt: "Canadian wage deposit displayed beside the member's matching pay statement before transfer.",
      focalPoint: "48% 44%",
      continuity: independentBeat(
        "two-shores-eight",
        "05 / income",
        ["member-phone-01", "pay-statement-01", "member-card-01"],
        ["member-01"],
        ["member-work-look-01"],
        "The cross-border record begins with documented work.",
        "Deposit amount and Canadian pay statement reference match.",
      ),
    },
    editorialB: {
      alt: "Member reviewing both currencies, the live exchange rate, and the complete fee before transfer.",
      focalPoint: "47% 43%",
      continuity: independentBeat(
        "two-shores-eight",
        "06 / disclose",
        ["member-phone-01", "paired-currency-screen", "member-card-01"],
        ["member-01"],
        ["member-work-look-01"],
        "The transfer pauses until both sides are transparent.",
        "Send amount, receive amount, rate, and total fee share one screen.",
      ),
    },
    editorialC: {
      alt: "Family member receiving the transfer with the matching bilingual reference number in view.",
      focalPoint: "48% 41%",
      continuity: independentBeat(
        "two-shores-eight",
        "07 / arrival",
        ["family-phone-01", "bilingual-reference-01", "member-phone-01"],
        ["family-01", "member-01"],
        ["family-home-look-01", "member-work-look-01"],
        "The second shore sees the same completed status.",
        "Receiving amount and bilingual reference match the sending record.",
      ),
    },
    editorialD: {
      alt: "Dinners beginning in two countries while both phones display the same completed transfer record.",
      focalPoint: "50% 42%",
      continuity: independentBeat(
        "two-shores-eight",
        "08 / together",
        ["member-phone-01", "family-phone-01", "completed-record-01"],
        ["member-01", "family-01"],
        ["member-home-look-01", "family-home-look-01"],
        "Two separate tables share the completed financial moment.",
        "Both phones display the same reference and final amount.",
        "hero",
      ),
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
    editorialA: {
      alt: "Recovered mineral aggregate and fibre feedstock separated into measured trays before pressing.",
      focalPoint: "50% 48%",
      continuity: independentBeat(
        "coldkiln-eight",
        "05 / feedstock",
        ["mineral-batch-01", "fibre-batch-01", "material-passport-01"],
        ["technician-01"],
        ["material-labwear-01"],
        "The material story begins with disclosed inputs.",
        "Aggregate, fibre, mass, and batch code are visible before colour or finish.",
      ),
    },
    editorialB: {
      alt: "Cold press releasing an unfired tile beside a curing rack with no kiln in the production hall.",
      focalPoint: "53% 44%",
      continuity: independentBeat(
        "coldkiln-eight",
        "06 / press and cure",
        ["mineral-batch-01", "cold-press-01", "curing-rack-01"],
        ["technician-01"],
        ["material-labwear-01"],
        "Press and ambient cure replace the absent firing stage.",
        "Fresh tile, cold press, curing rack, and energy reading share the frame.",
      ),
    },
    editorialC: {
      alt: "Material laboratory testing the mineral tile for load, moisture, and reversible fixing performance.",
      focalPoint: "50% 43%",
      continuity: independentBeat(
        "coldkiln-eight",
        "07 / verify",
        ["mineral-tile-01", "test-rig-01", "material-passport-01"],
        ["technician-01", "architect-01"],
        ["material-labwear-01", "architect-look-01"],
        "The unfired claim is tested before specification.",
        "Tile batch and three measured results remain legible on the rig.",
      ),
    },
    editorialD: {
      alt: "Demounted mineral facade tiles strapped to a return pallet with their original passports attached.",
      focalPoint: "55% 46%",
      continuity: independentBeat(
        "coldkiln-eight",
        "08 / return",
        ["mineral-tile-01", "return-pallet-01", "material-passport-01"],
        ["site-engineer-01"],
        ["sitewear-01"],
        "Use ends as a documented return rather than demolition waste.",
        "Returned tiles retain the same batch and passport shown at feedstock stage.",
        "hero",
      ),
    },
  },
  "hm-second-sun": {
    hero: {
      alt: "Fashion portrait in sun-washed red and amber layers beneath a second circular light.",
      focalPoint: "50% 36%",
    },
    tactile: {
      alt: "Close material study of rib knit, translucent technical cloth, topstitching, and a solar-yellow label.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Temporary fashion environment formed from translucent amber screens and two low light discs.",
      focalPoint: "50% 44%",
    },
    context: {
      alt: "Layered everyday looks moving through a blue-hour city while warm light traces their silhouettes.",
      focalPoint: "50% 37%",
    },
    editorialA: {
      alt: "Close fashion portrait framed by a translucent orange layer and a sharp ring of warm light.",
      focalPoint: "50% 34%",
    },
    editorialB: {
      alt: "Three coordinated looks crossing a graphic field of long shadows and paired sun discs.",
      focalPoint: "51% 43%",
    },
    editorialC: {
      alt: "Repaired summer garment documented with dated patches, care marks, and a visible second-life label.",
      focalPoint: "50% 45%",
    },
    editorialD: {
      alt: "Warm retail take-back station where folded garments move from return to repair and rewear routes.",
      focalPoint: "50% 44%",
    },
  },
  "zara-the-air-between": {
    hero: {
      alt: "Sculptural neutral tailoring held inside an airy limestone room with fabric suspended overhead.",
      focalPoint: "50% 36%",
    },
    tactile: {
      alt: "Close study of pleated organza, dry wool, polished metal, and a restrained paper garment tag.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Gallery-like fashion environment shaped by drifting fabric planes, stone, and precise daylight.",
      focalPoint: "50% 44%",
    },
    context: {
      alt: "Model in fluid tailoring crossing a wind-cut colonnade with cloth moving through the open space.",
      focalPoint: "50% 35%",
    },
    editorialA: {
      alt: "Monochrome fashion portrait composed around the negative space between body and suspended cloth.",
      focalPoint: "50% 33%",
    },
    editorialB: {
      alt: "Coordinated garments and transparent textiles lifted by calibrated airflow in a pale studio.",
      focalPoint: "50% 45%",
    },
    editorialC: {
      alt: "Flagship window composition holding one sculptural look between large fields of empty space.",
      focalPoint: "50% 42%",
    },
    editorialD: {
      alt: "Quiet mobile and fitting-room fashion screens using measured gutters and suspended image crops.",
      focalPoint: "50% 46%",
    },
    editorialE: {
      alt: "Editorial lookbook still life of sheer cloth, neutral tailoring, and precise garment captions.",
      focalPoint: "50% 45%",
    },
  },
  "uniqlo-comfort-measured": {
    hero: {
      alt: "Everyday layered clothing photographed inside a precise red and white comfort-measurement grid.",
      focalPoint: "50% 36%",
    },
    tactile: {
      alt: "Close construction study of soft jersey, insulated quilting, clean seams, and measured fabric notation.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Modular domestic set organised as a calm laboratory for movement, temperature, and daily comfort.",
      focalPoint: "50% 44%",
    },
    context: {
      alt: "People in adaptable everyday layers moving between transit, work, and home across one day.",
      focalPoint: "50% 37%",
    },
    editorialA: {
      alt: "Macro garment portrait pairing soft fabric texture with restrained thermal and movement annotations.",
      focalPoint: "50% 40%",
    },
    editorialB: {
      alt: "Multi-generational group portrait arranged on a measured grid in coordinated functional layers.",
      focalPoint: "50% 40%",
    },
    editorialC: {
      alt: "In-store measurement wall translating garment movement, layering, temperature, and use into calm diagrams.",
      focalPoint: "50% 43%",
    },
    editorialD: {
      alt: "Open field guide and product cards pairing everyday clothing details with plain-language use conditions.",
      focalPoint: "50% 47%",
    },
  },
  "prada-the-quiet-error": {
    hero: {
      alt: "Three fashion models walk through a spare white casting room in burgundy, brown, blue, ivory, and black tailoring.",
      focalPoint: "50% 34%",
    },
    tactile: {
      alt: "Close view of hands fastening a black coat above a stainless-steel table holding a leather wallet and green glass strip.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Adaptable gallery installation with stainless-steel plinths, mirrored panels, paper sheets, and translucent green glass.",
      focalPoint: "50% 43%",
    },
    context: {
      alt: "Woman in dark brown and man in pale blue descend wet stone steps outside an industrial building.",
      focalPoint: "50% 35%",
    },
    editorialA: {
      alt: "Woman in a charcoal coat and burgundy knit looks toward her partial reflection in a metal partition.",
      focalPoint: "50% 32%",
    },
    editorialB: {
      alt: "Black folios, blank paper, a circular leather object, and a narrow green strip arranged on brushed steel.",
      focalPoint: "50% 47%",
    },
    editorialC: {
      alt: "Blank black-bound folio opened around a vertical metal divider on a brushed-steel table.",
      focalPoint: "50% 45%",
    },
    editorialD: {
      alt: "Two people assemble movable mesh and green-glass planes inside a sparse gallery.",
      focalPoint: "50% 48%",
    },
    editorialE: {
      alt: "Frontal cropped view of a long black coat with burgundy knit visible at collar and cuffs.",
      focalPoint: "50% 41%",
    },
    editorialF: {
      alt: "Three models in burgundy, black leather, blue shirting, and white trousers cross a dim casting room.",
      focalPoint: "50% 45%",
    },
  },
  "muji-household-weather": {
    hero: {
      alt: "A woman in a white shirt and dark trousers stands beside an open sliding balcony door in a spare apartment.",
      focalPoint: "50% 42%",
    },
    tactile: {
      alt: "Gloved hands sort plain paper packets, a translucent box, tape, and a metal ruler on a wooden worktable.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "A man reads in an armchair while a woman writes at a low table in a compact living room at dusk.",
      focalPoint: "50% 48%",
    },
    context: {
      alt: "A person in a tan suit steps through an entry while placing a black umbrella in a white stand.",
      focalPoint: "50% 48%",
    },
    editorialA: {
      alt: "A man clips a white shirt to a laundry rail on a narrow concrete balcony.",
      focalPoint: "50% 42%",
    },
    editorialB: {
      alt: "Two pairs of hands handle folded off-white cloths on a wooden shelf beneath cups, trays, and a small brush.",
      focalPoint: "50% 52%",
    },
    editorialC: {
      alt: "A man reads in an armchair while a woman writes at a dining table beneath a round paper lamp.",
      focalPoint: "52% 47%",
    },
    editorialD: {
      alt: "An apron-wearing woman works on a small wooden drawer unit at a pale table while a man stands near the wall.",
      focalPoint: "50% 48%",
    },
    editorialE: {
      alt: "A man handles folded material behind a crowded counter while two people with an umbrella stand inside a small workshop.",
      focalPoint: "43% 48%",
    },
    editorialF: {
      alt: "Three people seated around a wooden table pass a small bowl beneath a bronze pendant lamp.",
      focalPoint: "50% 46%",
    },
  },
  "levis-wear-is-the-record": {
    hero: {
      alt: "Full-length opening portrait of wearer A in 501 record 001, identified by a crescent repair at the right knee, frayed left hem, creased Two Horse patch, and red fabric tab.",
      focalPoint: "50% 35%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "01 / first wearer",
        objectIds: ["501-RECORD-001", "COPPER-RIVET-SET-001", "TWO-HORSE-PATCH-001", "RED-TAB-001"],
        castIds: ["WEARER-A"],
        wardrobeIds: ["501-FIT-001", "WHITE-TEE-A", "WORK-BOOT-A"],
        state: "pre-repair / knee abrasion beginning",
        visualProof:
          "Copper hardware, the right-knee crescent abrasion, left-hem fray, patch crease, and Red Tab establish immutable identifiers for the same jean.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    tactile: {
      alt: "Macro evidence from 501 record 001: faded denim, copper rivets, Arcuate stitching, red fabric tab, creased Two Horse leather patch, and the first indigo repair thread.",
      focalPoint: "50% 50%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "03 / construction proof",
        objectIds: [
          "501-RECORD-001",
          "COPPER-RIVET-SET-001",
          "ARCUATE-001",
          "TWO-HORSE-PATCH-001",
          "RED-TAB-001",
          "INDIGO-FADE-MAP-001",
          "KNEE-REPAIR-001",
        ],
        castIds: [],
        wardrobeIds: [],
        state: "first repair completed / original wear still legible",
        visualProof:
          "Copper rivet, Arcuate, Red Tab, Two Horse patch, and crescent knee repair are photographed on the same garment, not assembled as unrelated samples.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    spatial: {
      alt: "Active denim repair workshop with 501 record 001 isolated on the central table beside its dated repair card, while other garments remain secondary.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "07 / active archive",
        objectIds: ["501-RECORD-001", "REPAIR-LEDGER-001", "TWO-HORSE-PATCH-001"],
        castIds: ["MAKER-01", "WEARER-A"],
        wardrobeIds: ["WORKSHOP-APRON-01", "501-FIT-001"],
        state: "garment checked after repair",
        visualProof:
          "The jean's crescent stitch, left-hem fray, and patch crease match the opening portrait while its ledger remains physically attached.",
        sourceBasis: "independent-project-reading",
      },
    },
    context: {
      alt: "Candid street portrait led by wearer A in 501 record 001, whose crescent knee repair, frayed left hem, Two Horse patch crease, and Red Tab remain readable among differently worn jeans.",
      focalPoint: "50% 37%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "02 / worn in public",
        objectIds: ["501-RECORD-001", "TWO-HORSE-PATCH-001", "RED-TAB-001"],
        castIds: ["WEARER-A", "FRIEND-A", "FRIEND-B"],
        wardrobeIds: ["501-FIT-001", "DENIM-WARDROBE-GROUP-01"],
        state: "crease and abrasion deepen through movement",
        visualProof:
          "The camera keeps record 001 identifiable by the same four marks while showing that every surrounding garment wears differently.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialA: {
      alt: "Seated portrait of wearer A in 501 record 001, with the right-knee crescent abrasion, left-hem fray, and creased Two Horse patch visible in an unposed gesture.",
      focalPoint: "50% 34%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "02B / fit becomes personal",
        objectIds: ["501-RECORD-001", "TWO-HORSE-PATCH-001"],
        castIds: ["WEARER-A"],
        wardrobeIds: ["501-FIT-001", "WHITE-TEE-A", "WORK-BOOT-A"],
        state: "same pre-repair jean / seated creases visible",
        visualProof:
          "The opening wardrobe and garment damage recur unchanged; pose and body, rather than new styling, alter the silhouette.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialB: {
      alt: "Repair table centred on 501 record 001, its Two Horse patch, Red Tab, crescent knee abrasion, matching indigo thread, and dated ownership card kept together.",
      focalPoint: "50% 48%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "04 / intervention dated",
        objectIds: [
          "501-RECORD-001",
          "KNEE-REPAIR-001",
          "REPAIR-LEDGER-001",
          "TWO-HORSE-PATCH-001",
        ],
        castIds: ["MAKER-01"],
        wardrobeIds: ["WORKSHOP-APRON-01"],
        state: "knee opened for repair / original fibres retained",
        visualProof:
          "Ledger date, thread colour, patch crease, and garment number all refer to record 001; no anonymous denim offcut may replace the actual jean.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialC: {
      alt: "Frontal archival record of 501 record 001 after repair, documenting Arcuate pocket construction, Red Tab, Two Horse patch crease, crescent knee stitches, fading, and wearer-A ownership marks.",
      focalPoint: "50% 43%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "05 / garment file",
        objectIds: [
          "501-RECORD-001",
          "COPPER-RIVET-SET-001",
          "ARCUATE-001",
          "TWO-HORSE-PATCH-001",
          "RED-TAB-001",
          "INDIGO-FADE-MAP-001",
          "KNEE-REPAIR-001",
        ],
        castIds: [],
        wardrobeIds: [],
        state: "post-repair / wear mapped front and back",
        visualProof:
          "A single front-and-back garment record keeps the crescent repair, frayed hem, Arcuate, Red Tab, and patch in their true relative positions.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialD: {
      alt: "Long repair counter where maker 01 returns 501 record 001 to wearer A, checking its crescent knee repair and attaching the dated repair ledger beneath practical task lighting.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "06 / repair returned",
        objectIds: ["501-RECORD-001", "KNEE-REPAIR-001", "REPAIR-LEDGER-001"],
        castIds: ["MAKER-01", "WEARER-A"],
        wardrobeIds: ["WORKSHOP-APRON-01", "WHITE-TEE-A"],
        state: "repair complete / first ownership retained",
        visualProof:
          "Both hands hold the same jean at its repaired knee; its left-hem fray and Two Horse patch crease remain intentionally unrepaired.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialE: {
      alt: "Wearer A's hand inside the back pocket of 501 record 001 beside its Arcuate stitching, Red Tab, creased Two Horse patch, and small repair-date label.",
      focalPoint: "50% 42%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "08 / use resumes",
        objectIds: ["501-RECORD-001", "TWO-HORSE-PATCH-001", "RED-TAB-001", "REPAIR-LEDGER-001"],
        castIds: ["WEARER-A"],
        wardrobeIds: ["501-FIT-001"],
        state: "post-repair wear / new pocket polish",
        visualProof:
          "The repair date and original identifiers share one close frame; new hand polish is added without erasing the earlier record.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialF: {
      alt: "Wearer A hands 501 record 001 to wearer B, who steps into an echo of the opening portrait with the same crescent knee repair, frayed left hem, creased Two Horse patch, and Red Tab visible.",
      focalPoint: "50% 43%",
      continuity: {
        sequenceId: "LEVIS-GARMENT-RECORD-001",
        beat: "09 / pass on",
        objectIds: [
          "501-RECORD-001",
          "COPPER-RIVET-SET-001",
          "ARCUATE-001",
          "TWO-HORSE-PATCH-001",
          "RED-TAB-001",
          "INDIGO-FADE-MAP-001",
          "KNEE-REPAIR-001",
        ],
        castIds: ["WEARER-A", "WEARER-B"],
        wardrobeIds: ["501-FIT-001", "SECOND-WEARER-LAYER-B"],
        state: "ownership changes / garment evidence remains",
        visualProof:
          "The physical handoff and wearer-B fit are shown in one frame; all four master marks match the opening jean exactly.",
        sourceBasis: "independent-project-reading",
        returnsTo: "hero",
      },
    },
  },
  "polo-ralph-lauren-the-long-match": {
    hero: {
      alt: "Opening portrait of player A beside the field in the story's navy Polo shirt, blue oxford, cream cable knit, and saddle-leather belt, holding the same wood racquet used throughout the day.",
      focalPoint: "50% 34%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "01 / opening portrait",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "FIELD-TROUSER-A"],
        state: "shirt crisp / racquet grip clean / leather lightly worn",
        visualProof:
          "Player A's face, navy shirt, Pony placement, taped racquet handle, and saddle-leather crease establish the master continuity references.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    tactile: {
      alt: "Late-day material record of player A's navy cotton-piqué Polo shirt, blue oxford cuff, cream cable knit, taped wood racquet handle, and saddle leather after repeated use.",
      focalPoint: "50% 50%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "15 / material memory",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: [],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A"],
        state: "collar softened / grip darkened / leather newly burnished",
        visualProof:
          "The shirt's repaired lower button, diagonal racquet tape, and crescent leather scuff match every earlier appearance; cotton piqué is clearly distinct from oxford cloth.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    spatial: {
      alt: "Opening landscape linking field, wooden grandstand, stable, and clubhouse, with player A in the navy Polo shirt carrying the taped wood racquet and saddle-leather duffel along one continuous route.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "00 / one world established",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "PLAYER-B"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "FIELD-LAYER-B"],
        state: "dawn / wardrobe and equipment unmarked",
        visualProof:
          "The same cast travels between all four locations in one credible landscape; the shirt, racquet, and leather duffel are visible on player A rather than placed as props.",
        sourceBasis: "independent-project-reading",
      },
    },
    context: {
      alt: "Player A at the country station after the match, still wearing the softened navy Polo shirt beneath the blue oxford and carrying the same taped racquet in the scuffed saddle-leather duffel.",
      focalPoint: "50% 37%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "17 / return journey",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "EVENING-COAT-A"],
        state: "shirt relaxed / racquet retaped / duffel visibly scuffed",
        visualProof:
          "Player A and all three master objects retain their opening identifiers while the wardrobe is re-layered for travel.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialA: {
      alt: "Player A ties boots at dawn with the navy Polo shirt already on, blue oxford and cream cable knit laid beside the same taped wood racquet and saddle-leather duffel.",
      focalPoint: "50% 35%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "02 / preparation",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "FIELD-TROUSER-A"],
        state: "base shirt on / later layers waiting",
        visualProof:
          "The opening shirt, face, racquet tape, and leather crease are present before action; layers are arranged in the exact order worn later.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialB: {
      alt: "Player A and player B move along the grass-court edge, player A's navy Polo shirt and taped wood racquet clearly leading while the blue oxford and cream cable knit wait on the same saddle-leather bench bag.",
      focalPoint: "50% 43%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "04 / match begins",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "PLAYER-B"],
        wardrobeIds: ["FIELD-TROUSER-A", "FIELD-LAYER-B"],
        state: "shirt in motion / first grass mark on racquet frame",
        visualProof:
          "Player A's stable face and shirt identifier remain legible; the same diagonal grip tape and leather crease prevent a generic sports tableau.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialC: {
      alt: "Player A in the clubhouse after play, navy Polo shirt visible beneath the rolled blue oxford, with the same taped racquet, saddle-leather duffel, and handwritten scorebook at the window.",
      focalPoint: "50% 38%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "10 / clubhouse pause",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01", "SCOREBOOK-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A", "FIELD-TROUSER-A"],
        state: "collar open / sleeve rolled / grass and sweat retained",
        visualProof:
          "The shirt's repaired lower button, racquet grip tape, and leather scuff connect this quiet portrait directly to the match.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialD: {
      alt: "Long clubhouse table after play with player A still in the navy Polo shirt and cream cable knit, the taped racquet leaning against the same saddle-leather duffel beside the used scorebook.",
      focalPoint: "50% 46%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "12 / company after play",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01", "SCOREBOOK-01"],
        castIds: ["PLAYER-A", "PLAYER-B", "GRANDPARENT-C", "TEEN-D"],
        wardrobeIds: ["CABLE-CREAM-A", "CLUBHOUSE-LAYERS-GROUP-01"],
        state: "sport objects remain in reach during the meal",
        visualProof:
          "Objects occupy believable resting positions beside their users; the same cast, marks, and layers continue rather than resetting for a styled dinner.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialE: {
      alt: "Player A's scorebook and field map beside the navy Polo shirt cuff, a strip of diagonal racquet grip tape, and the same scuffed saddle-leather duffel after the match.",
      focalPoint: "50% 47%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "11 / day recorded",
        objectIds: ["SCOREBOOK-01", "POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A"],
        state: "score entered / grass stain and leather scuff indexed",
        visualProof:
          "Handwriting, score, racquet tape, shirt cuff, and leather mark all correspond to the actions and objects already shown.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialF: {
      alt: "Player A and player B arrive at the evening terrace in re-layered versions of the same sporting wardrobe; player A's navy Polo shirt, taped racquet, and scuffed saddle-leather duffel remain unmistakable.",
      focalPoint: "50% 43%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "18 / evening arrival",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "PLAYER-B"],
        wardrobeIds: ["OXFORD-BLUE-A", "EVENING-COAT-A", "EVENING-LAYER-B"],
        state: "same base wardrobe / social layer added",
        visualProof:
          "Faces, shirt repair, racquet tape, and leather scuff match earlier frames; tailoring is added without replacing the field identity.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialG: {
      alt: "Player A opens wooden shutters at dawn wearing the navy Polo shirt while the blue oxford, cream cable knit, taped wood racquet, and saddle-leather duffel wait in the established dressing order.",
      focalPoint: "49% 37%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "03 / dawn route",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "FIELD-TROUSER-A"],
        state: "same clean opening wardrobe / first natural light",
        visualProof:
          "Player A, repaired shirt button, diagonal grip tape, and leather crease exactly match beats 01 and 02 while the camera widens to the route outside.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialH: {
      alt: "Wide grass-court exchange with player A serving in the navy Polo shirt using the taped wood racquet, player B returning, and the cream cable knit and saddle-leather duffel visible at the same bench.",
      focalPoint: "52% 44%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "05 / match widens",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "PLAYER-B"],
        wardrobeIds: ["FIELD-TROUSER-A", "FIELD-LAYER-B", "CABLE-CREAM-A"],
        state: "shirt creased / racquet frame grass-marked",
        visualProof:
          "Player A and the master racquet remain readable in action; the bench objects prove the wardrobe belongs to the same ongoing day.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialI: {
      alt: "Player A in the stable doorway wearing the same navy Polo shirt beneath the cream cable knit, handling the saddle made from the leather thread while the taped racquet remains in the open duffel.",
      focalPoint: "48% 36%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "07 / stable portrait",
        objectIds: ["POLO-SHIRT-NAVY-A", "SADDLE-LEATHER-01", "WOOD-RACQUET-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["CABLE-CREAM-A", "FIELD-JACKET-A", "FIELD-TROUSER-A"],
        state: "cable knit added / saddle leather being cared for",
        visualProof:
          "The same face, shirt repair, racquet tape, and leather crescent appear while genuine handling links sport to equestrian care.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialJ: {
      alt: "Working stable at midday with player A and player B cleaning the recurring saddle leather; player A's navy Polo shirt, cream cable knit, and taped racquet remain in the working space rather than becoming set decoration.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "06 / leather cared for",
        objectIds: ["SADDLE-LEATHER-01", "POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01"],
        castIds: ["PLAYER-A", "PLAYER-B"],
        wardrobeIds: ["CABLE-CREAM-A", "FIELD-JACKET-A", "FIELD-LAYER-B"],
        state: "saddle cleaned / shirt and racquet retain match wear",
        visualProof:
          "Hands actively clean the same crescent-scuffed leather while the match-worn shirt and racquet remain identifiable in a credible stable workflow.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialK: {
      alt: "Player A returning to a brownstone in the same navy Polo shirt and blue oxford under a tailored coat, with the taped racquet and scuffed saddle-leather duffel still carried from the field.",
      focalPoint: "50% 38%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "09 / city portrait",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A"],
        wardrobeIds: ["OXFORD-BLUE-A", "CITY-COAT-A", "FIELD-TROUSER-A"],
        state: "field wardrobe re-layered for the city",
        visualProof:
          "No costume reset: the shirt crease, repaired button, racquet tape, leather scuff, and player A's face all carry over from the field.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialL: {
      alt: "Player A, grandparent C, and teen D walk past brownstones; player A carries the same navy Polo shirt, taped racquet, and saddle-leather duffel while related oxford and cable-knit layers bridge generations.",
      focalPoint: "51% 43%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "08 / city route",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "GRANDPARENT-C", "TEEN-D"],
        wardrobeIds: ["OXFORD-BLUE-A", "GENERATION-LAYER-C", "GENERATION-LAYER-D"],
        state: "one wardrobe language adapted by age and purpose",
        visualProof:
          "Player A's exact objects continue while C and D echo colour and material without wearing matching costumes or duplicate logos.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialM: {
      alt: "Grandparent C and teen D share the clubhouse bench with player A's navy Polo shirt, taped racquet, and scuffed saddle-leather duffel between them, discussing the day's handwritten scorebook.",
      focalPoint: "50% 37%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "14 / knowledge passed",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01", "SCOREBOOK-01"],
        castIds: ["GRANDPARENT-C", "TEEN-D"],
        wardrobeIds: ["GENERATION-LAYER-C", "GENERATION-LAYER-D"],
        state: "objects temporarily held by another generation",
        visualProof:
          "The shirt repair, racquet tape, leather scuff, and scorebook handwriting remain exact while the hands holding them change.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialN: {
      alt: "Player A, player B, grandparent C, and teen D gather after play; the navy Polo shirt remains on player A while the taped racquet, saddle-leather duffel, blue oxford, and cable knit retain their accumulated wear nearby.",
      focalPoint: "50% 44%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "13 / generations gather",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "PLAYER-B", "GRANDPARENT-C", "TEEN-D"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "CLUBHOUSE-LAYERS-GROUP-01"],
        state: "full cast and object system reunited",
        visualProof:
          "Every recurring face and master object is locatable in one candid scene, with consistent stains, tape, creases, and layer combinations.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialO: {
      alt: "Square evidence still life of player A's navy cotton-piqué Polo shirt, blue oxford, cream cable knit, taped wood racquet, scuffed saddle leather, score pencil, and field-worn hardware.",
      focalPoint: "50% 50%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "16 / five objects indexed",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01", "SCOREBOOK-01"],
        castIds: [],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A"],
        state: "all use marks compared before departure",
        visualProof:
          "The repaired shirt button, diagonal grip tape, crescent leather scuff, oxford cuff roll, knit snag, and score handwriting match the preceding scenes.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialP: {
      alt: "Blue-hour return to the opening field: player A stands in the same framing and navy Polo shirt with the now grass-marked racquet and scuffed saddle-leather duffel, while the recurring cast departs behind them.",
      focalPoint: "51% 46%",
      continuity: {
        sequenceId: "POLO-LONG-MATCH-01",
        beat: "19 / opening frame returned",
        objectIds: ["POLO-SHIRT-NAVY-A", "WOOD-RACQUET-01", "SADDLE-LEATHER-01"],
        castIds: ["PLAYER-A", "PLAYER-B", "GRANDPARENT-C", "TEEN-D"],
        wardrobeIds: ["OXFORD-BLUE-A", "CABLE-CREAM-A", "EVENING-COAT-A"],
        state: "same shirt / softened collar / marked racquet / burnished leather",
        visualProof:
          "Camera height, player A, Pony placement, shirt repair, racquet tape, and leather crease echo the opening portrait; only wear, light, and company have changed.",
        sourceBasis: "independent-project-reading",
        returnsTo: "hero",
      },
    },
  },
  "nike-no-second-take": {
    hero: {
      alt: "Opening frame of runner A committing to an unrehearsed turn in motion shoe 01, whose white Swoosh orientation mark, black upper, and lime heel nick remain the story's visual reference.",
      focalPoint: "50% 38%",
      continuity: {
        sequenceId: "NIKE-SWOOSH-MOTION-01",
        beat: "01 / motion mark",
        objectIds: ["MOTION-SHOE-01", "SWOOSH-MARK-01"],
        castIds: ["RUNNER-A"],
        wardrobeIds: ["RUN-KIT-A"],
        state: "opening attempt / outsole clean",
        visualProof:
          "Runner A's face, black kit, white lateral Swoosh, lime heel nick, and camera-side shoe establish the repeatable opening reference.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    tactile: {
      alt: "Four-part product evidence bench keeping the Swoosh mark, waffle outsole, visible Air cushioning, and Flyknit upper on separate labelled prototypes rather than merging them into one invented shoe.",
      focalPoint: "50% 50%",
      continuity: {
        sequenceId: "NIKE-FOUR-LINEAGES-INDEX",
        beat: "04 / lineages separated",
        objectIds: [
          "SWOOSH-MARK-01",
          "WAFFLE-TEST-SHOE-01",
          "AIR-TEST-SHOE-01",
          "FLYKNIT-TEST-UPPER-01",
        ],
        castIds: [],
        wardrobeIds: [],
        state: "four independent prototypes / before testing",
        visualProof:
          "Four distinct stations visibly isolate mark, traction, cushioning, and engineered fit; labels cite official histories while the test sequence is marked independent.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    spatial: {
      alt: "Wide training environment with four physically separate test lanes for motion marking, waffle traction, Air landing, and Flyknit fit, each occupied by its recurring athlete and prototype.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "NIKE-FOUR-LINEAGES-INDEX",
        beat: "00 / four tests established",
        objectIds: [
          "MOTION-SHOE-01",
          "WAFFLE-TEST-SHOE-01",
          "AIR-TEST-SHOE-01",
          "FLYKNIT-TEST-UPPER-01",
        ],
        castIds: ["RUNNER-A", "RUNNER-B", "BALL-ATHLETE-C", "FIT-ATHLETE-D"],
        wardrobeIds: ["RUN-KIT-A", "TRACTION-KIT-B", "COURT-KIT-C", "FIT-KIT-D"],
        state: "independent baselines / no result claimed",
        visualProof:
          "Lane labels, stable athletes, and visibly different prototypes prevent one modern test process from being presented as a shared historical origin.",
        sourceBasis: "independent-project-reading",
      },
    },
    context: {
      alt: "Runner A recovering on a city stair after the opening turn, still wearing motion shoe 01 with the same white Swoosh, lime heel nick, and newly abraded lateral outsole visible.",
      focalPoint: "50% 38%",
      continuity: {
        sequenceId: "NIKE-SWOOSH-MOTION-01",
        beat: "08 / body recovers",
        objectIds: ["MOTION-SHOE-01", "SWOOSH-MARK-01"],
        castIds: ["RUNNER-A"],
        wardrobeIds: ["RUN-KIT-A"],
        state: "same attempt complete / lateral outsole abraded",
        visualProof:
          "Runner A, kit, mark orientation, and heel nick match the opening while sweat, breath, and outsole wear register the attempt without a victory pose.",
        sourceBasis: "independent-project-reading",
      },
    },
    editorialA: {
      alt: "Runner A enters the same sharp turn from a lower angle, motion shoe 01's white Swoosh and lime heel nick staying legible as directional identifiers rather than claimed performance technologies.",
      focalPoint: "50% 38%",
      continuity: {
        sequenceId: "NIKE-SWOOSH-MOTION-01",
        beat: "02 / direction seen",
        objectIds: ["MOTION-SHOE-01", "SWOOSH-MARK-01"],
        castIds: ["RUNNER-A"],
        wardrobeIds: ["RUN-KIT-A"],
        state: "turn committed / mark tracks orientation",
        visualProof:
          "The mark remains a visual record of direction; copy and composition must not imply that the Swoosh itself supplies traction or cushioning.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialB: {
      alt: "Runner B's waffle test shoe at loaded ground contact on wet track, with the rubber lug pattern visibly deforming and leaving a matching print beside the athlete's planted foot.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "NIKE-WAFFLE-TRACTION-01",
        beat: "05 / traction observed",
        objectIds: ["WAFFLE-TEST-SHOE-01", "WAFFLE-OUTSOLE-PRINT-01"],
        castIds: ["RUNNER-B"],
        wardrobeIds: ["TRACTION-KIT-B"],
        state: "wet-contact test / lug print recorded",
        visualProof:
          "Outsole, planted foot, wet surface, and matching print coexist in one credible frame; the caption observes contact without claiming laboratory performance data.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialC: {
      alt: "Ball athlete C immediately after landing in Air test shoe 01, with the heel visibly loaded, transparent cushioning unit compressed, and a calibrated side marker recording deformation.",
      focalPoint: "50% 36%",
      continuity: {
        sequenceId: "NIKE-AIR-IMPACT-01",
        beat: "06 / cushioning observed",
        objectIds: ["AIR-TEST-SHOE-01", "AIR-SIDE-MARKER-01"],
        castIds: ["BALL-ATHLETE-C"],
        wardrobeIds: ["COURT-KIT-C"],
        state: "post-contact / heel unit under load",
        visualProof:
          "The frame occurs after contact, not in suspension: planted heel, compressed visible unit, and side marker make the observation physically coherent.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialD: {
      alt: "Prototype room divided into four labelled bays: Swoosh motion studies, waffle outsole casts, transparent Air landing rigs, and Flyknit tension maps, all clearly documented as separate lineages.",
      focalPoint: "50% 45%",
      continuity: {
        sequenceId: "NIKE-FOUR-LINEAGES-INDEX",
        beat: "03 / histories indexed",
        objectIds: [
          "SWOOSH-MARK-01",
          "WAFFLE-TEST-SHOE-01",
          "AIR-TEST-SHOE-01",
          "FLYKNIT-TEST-UPPER-01",
        ],
        castIds: [],
        wardrobeIds: [],
        state: "historical anchors separated from proposed tests",
        visualProof:
          "Each bay has its own date, source, material, and test question; no A.I.R. process label is applied retroactively to the other three histories.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialE: {
      alt: "Fit athlete D in a Flyknit fitting session, with the recurring upper on foot, yarn tension map aligned to the foot, flex and breathability notes, and the marked-up journal beside the test last.",
      focalPoint: "50% 46%",
      continuity: {
        sequenceId: "NIKE-FLYKNIT-FIT-01",
        beat: "07 / fit observed",
        objectIds: ["FLYKNIT-TEST-UPPER-01", "FIT-MAP-01", "TEST-JOURNAL-01"],
        castIds: ["FIT-ATHLETE-D"],
        wardrobeIds: ["FIT-KIT-D"],
        state: "upper on foot / tension zones annotated",
        visualProof:
          "The knitted structure is visibly on the athlete's foot, with mapped support, flexibility, and breathability questions tied to exact yarn zones rather than generic notes.",
        sourceBasis: "official-object/project-sequence",
      },
    },
    editorialF: {
      alt: "Return to the opening turn at blue hour: runner A begins the next attempt in motion shoe 01 with the same Swoosh and lime heel nick, now joined by its recorded lateral outsole abrasion as the other test athletes reset behind.",
      focalPoint: "50% 43%",
      continuity: {
        sequenceId: "NIKE-SWOOSH-MOTION-01",
        beat: "09 / next attempt",
        objectIds: ["MOTION-SHOE-01", "SWOOSH-MARK-01", "TEST-JOURNAL-01"],
        castIds: ["RUNNER-A", "RUNNER-B", "BALL-ATHLETE-C", "FIT-ATHLETE-D"],
        wardrobeIds: ["RUN-KIT-A", "TRACTION-KIT-B", "COURT-KIT-C", "FIT-KIT-D"],
        state: "opening action repeated / evidence retained / outcome open",
        visualProof:
          "Runner A, camera angle, mark, heel nick, and kit echo the opening; the new abrasion and carried journal show learning without inventing a victory or product claim.",
        sourceBasis: "independent-project-reading",
        returnsTo: "hero",
      },
    },
  },
} satisfies Record<string, ProjectMediaDescription>;

/**
 * Final descriptions for the four 2026 brand worlds are tied to the selected photographs, not to
 * pre-production continuity prompts. These overrides deliberately omit continuity tags: the story
 * is carried by recurring object families and editorial sequencing, not by claiming that unrelated
 * people or props are physically identical between frames.
 */
const verifiedBrandMediaDescriptions = {
  "muji-household-weather": {
    hero: {
      alt: "A woman in a white shirt and dark trousers stands beside an open sliding balcony door in a spare apartment.",
      focalPoint: "50% 42%",
    },
    tactile: {
      alt: "Gloved hands sort plain paper packets, a translucent box, tape, and a metal ruler on a wooden worktable.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "A man reads in an armchair while a woman writes at a low table in a compact living room at dusk.",
      focalPoint: "50% 48%",
    },
    context: {
      alt: "A person in a tan suit steps through an entry while placing a black umbrella in a white stand.",
      focalPoint: "50% 48%",
    },
    editorialA: {
      alt: "A man clips a white shirt to a laundry rail on a narrow concrete balcony.",
      focalPoint: "50% 42%",
    },
    editorialB: {
      alt: "Two pairs of hands handle folded off-white cloths on a wooden shelf beneath cups, trays, and a small brush.",
      focalPoint: "50% 52%",
    },
    editorialC: {
      alt: "A man reads in an armchair while a woman writes at a dining table beneath a round paper lamp.",
      focalPoint: "52% 47%",
    },
    editorialD: {
      alt: "An apron-wearing woman works on a small wooden drawer unit at a pale table while a man stands near the wall.",
      focalPoint: "50% 48%",
    },
    editorialE: {
      alt: "A man handles folded material behind a crowded counter while two people with an umbrella stand inside a small workshop.",
      focalPoint: "43% 48%",
    },
    editorialF: {
      alt: "Three people seated around a wooden table pass a small bowl beneath a bronze pendant lamp.",
      focalPoint: "50% 46%",
    },
  },
  "levis-wear-is-the-record": {
    hero: {
      alt: "An older repairer and a younger wearer pass worn blue jeans across an oak workbench, with the back pockets, waistband patch, red tab, repaired knee, and frayed hems visible.",
      focalPoint: "50% 50%",
      width: 3200,
      height: 1800,
    },
    tactile: {
      alt: "Two seated people mark and inspect worn denim legs on a wooden table with patch material, scissors, and a tape measure.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "A woman and a man in jeans lift a worn black trunk beside the open rear of a dark van.",
      focalPoint: "50% 48%",
    },
    context: {
      alt: "Two people in loose jeans cross a downtown street beside a white bus in late-day light.",
      focalPoint: "50% 44%",
    },
    editorialA: {
      alt: "A young man in a denim shirt and jeans sits on a night bus beside a guitar case and a rain-speckled window.",
      focalPoint: "50% 40%",
    },
    editorialB: {
      alt: "Hands guide layered dark denim beneath a black sewing machine beside thread and scissors.",
      focalPoint: "57% 50%",
    },
    editorialC: {
      alt: "A skateboarder in loose blue jeans and a brown jacket rides beside a wooden box on a sunlit concrete lot.",
      focalPoint: "50% 46%",
    },
    editorialD: {
      alt: "A man clips ripped jeans to a clothesline in a concrete courtyard with a basin of denim and tools below.",
      focalPoint: "50% 48%",
    },
    editorialE: {
      alt: "Two hands open the button fly of laid-flat jeans beside thread, scissors, and a wooden tool.",
      focalPoint: "50% 48%",
    },
    editorialF: {
      alt: "Older hands feed a folded piece of worn denim beneath a black sewing machine.",
      focalPoint: "50% 50%",
    },
  },
  "polo-ralph-lauren-the-long-match": {
    hero: {
      alt: "Two people in brown, cream, and navy layers sit side by side on a brownstone stoop with bicycles at the edges.",
      focalPoint: "50% 42%",
    },
    tactile: {
      alt: "An older man and a younger man work on a wooden tennis racquet at a green-topped bench.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "Three people carrying wooden racquets walk across a seaside grass court while another person stands behind them.",
      focalPoint: "50% 48%",
    },
    context: {
      alt: "A white-haired person sits by a window while a younger person ties a white shoe in a wood-panelled room.",
      focalPoint: "50% 43%",
    },
    editorialA: {
      alt: "Hands stitch a navy garment beside a white cable-knit textile and a wooden tennis racquet.",
      focalPoint: "50% 48%",
    },
    editorialB: {
      alt: "A woman in navy and white lunges for a low tennis ball while an older man watches from a bench.",
      focalPoint: "50% 48%",
    },
    editorialC: {
      alt: "Two people stand on the steps of a brownstone entrance, framed by bicycles and a large brown tote.",
      focalPoint: "50% 43%",
    },
    editorialD: {
      alt: "Four people stand inside a wood-panelled seaside clubhouse with racquets, bags, and folded clothing.",
      focalPoint: "50% 47%",
    },
    editorialE: {
      alt: "Hands arrange folded polo shirts in cream, navy, green, yellow, red, and blue across a table.",
      focalPoint: "50% 48%",
    },
    editorialF: {
      alt: "An older man and a younger woman clean a brown leather saddle on a workbench.",
      focalPoint: "50% 50%",
    },
    editorialG: {
      alt: "A man and a woman stand beside a chestnut horse in a wooden stable and rest their hands on its back.",
      focalPoint: "50% 44%",
    },
    editorialH: {
      alt: "A man pulls a metal line roller across a worn grass court while a bench and two players sit behind him.",
      focalPoint: "50% 50%",
    },
    editorialI: {
      alt: "A man and a woman touch a chestnut horse inside an open wooden stall.",
      focalPoint: "50% 43%",
    },
    editorialJ: {
      alt: "A woman in layered tan clothing walks a chestnut horse across a muddy stable yard.",
      focalPoint: "50% 48%",
    },
    editorialK: {
      alt: "A woman in a navy raincoat and a child holding a wooden racquet walk on a wet city street beside a yellow car.",
      focalPoint: "50% 45%",
    },
    editorialL: {
      alt: "An older man and two women cross a rooftop in layered navy, cream, red, and blue clothing while carrying a racquet bag.",
      focalPoint: "50% 48%",
    },
    editorialM: {
      alt: "A white-haired person sits by a window while a younger person ties a white shoe behind them.",
      focalPoint: "50% 43%",
    },
    editorialN: {
      alt: "An older man and a younger woman walk away from a lit clubhouse at night carrying racquet cases.",
      focalPoint: "50% 48%",
    },
    editorialO: {
      alt: "A top-down view shows hands above a folded navy polo shirt, a wooden racquet, and a small green case.",
      focalPoint: "50% 50%",
    },
    editorialP: {
      alt: "A folded navy sweater, wooden racquet, balls, and a white towel sit on a bench beside a grass court at dusk.",
      focalPoint: "50% 48%",
    },
  },
  "nike-no-second-take": {
    hero: {
      alt: "A basketball player drives into a live play on an indoor court as defenders close the space.",
      focalPoint: "50% 42%",
    },
    tactile: {
      alt: "A hand holds a worn black rubber outsole with a waffle-like grid pattern in close view.",
      focalPoint: "50% 50%",
    },
    spatial: {
      alt: "A wheelchair racer accelerates on an outdoor track in a wide side-on action frame.",
      focalPoint: "50% 48%",
    },
    context: {
      alt: "A track athlete sits in recovery beside the lanes after exertion.",
      focalPoint: "50% 42%",
    },
    editorialA: {
      alt: "A runner accelerates through a floodlit outdoor drill while another figure remains at the edge of the frame.",
      focalPoint: "50% 43%",
    },
    editorialB: {
      alt: "A caliper measures the depth and spacing of a waffle-like rubber outsole.",
      focalPoint: "50% 50%",
    },
    editorialC: {
      alt: "A basketball player holds a low loaded stance on court before the next move.",
      focalPoint: "50% 43%",
    },
    editorialD: {
      alt: "A boxer sits in the ring between efforts while the gym remains active around them.",
      focalPoint: "50% 45%",
    },
    editorialE: {
      alt: "A track athlete is photographed at rest after a training effort.",
      focalPoint: "50% 42%",
    },
    editorialF: {
      alt: "A basketball player commits to a fast change of direction during a crowded live play.",
      focalPoint: "50% 44%",
    },
  },
} satisfies Record<string, ProjectMediaDescription>;

Object.assign(projectMediaDescriptions, verifiedBrandMediaDescriptions);

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
    continuity: description.continuity,
  };
}

export const designProjectMedia = Object.fromEntries(
  Object.entries(projectMediaDescriptions).map(([slug, descriptions]) => [
    slug,
    Object.fromEntries(
      Object.entries(descriptions).map(([slot, description]) => [
        slot,
        buildMediaAsset(slug, slot as DesignProjectMediaSlot, description),
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
