export type DesignProjectPalette = {
  name: string;
  value: string;
};

export type DesignProjectReference = {
  label: string;
  href: string;
};

export type DesignProjectMotif =
  | "misregister"
  | "hangul"
  | "specimen"
  | "correspondence"
  | "material"
  | "deco"
  | "wayfinding"
  | "biomorphic"
  | "signal"
  | "frequency"
  | "route"
  | "tide"
  | "batch"
  | "dial"
  | "seam"
  | "tiles"
  | "footnote"
  | "assembly"
  | "exchange"
  | "mineral"
  | "hm-edit"
  | "zara-atelier"
  | "uniqlo-life"
  | "prada-observation";

export type DesignProject = {
  slug: string;
  index: string;
  title: string;
  titleLang?: "ko";
  projectLabel: string;
  discipline: string;
  statement: string;
  description: string;
  challenge: string;
  response: string;
  rule: string;
  typography: string;
  motion: string;
  materials: string[];
  palette: DesignProjectPalette[];
  applications: string[];
  lineage: string;
  references: DesignProjectReference[];
  chapter:
    | "Matter & Memory"
    | "Culture & Space"
    | "Signal & Future"
    | "Brands as Systems"
    | "Fashion & Retail";
  motif: DesignProjectMotif;
  theme: "light" | "dark";
  brandStudy?: {
    brand: string;
    relationship: "unofficial-self-initiated";
  };
};

export const designProjects: DesignProject[] = [
  {
    slug: "afterimage",
    index: "01",
    title: "AFTERIMAGE",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Two-colour risograph festival identity",
    statement: "An image does not end when the eye looks away.",
    description:
      "A cultural campaign built from cobalt, fluorescent orange, halftone density, and controlled registration drift. Print behaviour becomes the identity instead of a decorative vintage filter.",
    challenge:
      "Give an experimental image festival a physical signature that can survive across inexpensive print, tickets, programmes, and fast social motion.",
    response:
      "Two plates do all the work: the information layer stays fixed while a second image pass slips just enough to leave a visible optical echo.",
    rule: "Every repeated form shifts 2–4% on the second colour plate; dates and access information never move.",
    typography:
      "Compressed grotesk headlines, neutral grotesk information, tabular edition numbers.",
    motion:
      "The orange plate arrives three frames after cobalt, then settles without moving the information layer.",
    materials: ["Uncoated stock", "Two-colour soy ink", "Visible halftone", "Stapled programme"],
    palette: [
      { name: "Cobalt", value: "#1948cb" },
      { name: "Fluorescent orange", value: "#ff5a36" },
      { name: "Uncoated stock", value: "#f2f0eb" },
      { name: "Press black", value: "#15171a" },
    ],
    applications: ["Poster series", "Festival programme", "Admission ticket", "Motion ident"],
    lineage:
      "Risograph pre-press, punk duplication, and image persistence—translated into a repeatable two-plate system.",
    references: [
      {
        label: "Cooper Hewitt — The Rise of Risography",
        href: "https://www.cooperhewitt.org/2015/05/15/the-rise-of-risography/",
      },
      {
        label: "RISD Graphic Design — Risograph coursework",
        href: "https://www.risd.edu/academics/graphic-design/courses",
      },
    ],
    chapter: "Matter & Memory",
    motif: "misregister",
    theme: "light",
  },
  {
    slug: "memory-type",
    index: "02",
    title: "기억의 활자",
    titleLang: "ko",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Vernacular Hangul community archive",
    statement: "A neighbourhood can survive inside the shape of a letter.",
    description:
      "A modular Hangul system built from awnings, receipts, handwritten notices, and fading walls. Each source stroke is catalogued before it enters a new character set.",
    challenge:
      "Represent disappearing local voices without turning Korean lettering into generic decoration or inventing false historical material.",
    response:
      "Real Unicode Hangul, a stable Korean font stack, and a documented stroke library let archival evidence drive every poster, label, and folder.",
    rule: "Each glyph combines one collected stroke, one modular block, and one documented absence.",
    typography:
      "Noto Serif KR gives the archive its literary Hangul voice; Pretendard and monospaced catalogue notes keep every source legible without distorting a glyph.",
    motion:
      "Jamo assemble into syllable blocks in reading order; each source tag appears before the completed character.",
    materials: ["Archive board", "Vermilion stamp ink", "Carbon copy", "Hand-labelled folder"],
    palette: [
      { name: "Paper", value: "#d8ccb4" },
      { name: "Ink", value: "#191a17" },
      { name: "Vermilion", value: "#b73527" },
      { name: "Archive blue", value: "#394f69" },
    ],
    applications: ["Exhibition poster", "Archive folder", "Wall labels", "Digital index"],
    lineage:
      "Hangul construction, vernacular sign painting, and community archives—kept legible as language first.",
    references: [
      {
        label: "National Hangeul Museum — Prototypes and Future",
        href: "https://www.hangeul.go.kr/exhibition/543",
      },
      {
        label: "National Hangeul Museum — SOUND × HANGEUL",
        href: "https://www.hangeul.go.kr/exhibition/512",
      },
    ],
    chapter: "Matter & Memory",
    motif: "hangul",
    theme: "light",
  },
  {
    slug: "field-notes-37",
    index: "03",
    title: "FIELD NOTES 37",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Natural-history index and speculative bio-design",
    statement: "Life persists in the smallest interval.",
    description:
      "A fictional archive for 37 forms of life found in the seams of a city. Coordinates, weather, collection time, and missing observations operate as real information rather than ornamental microtype.",
    challenge:
      "Make a speculative ecological archive feel credible without relying on pseudo-scientific decoration or fabricated certainty.",
    response:
      "A specimen ID connects every photograph, label, coordinate, status code, and deliberate gap across the collection.",
    rule: "One specimen, one coordinate, one status code; missing observations remain visible as data.",
    typography:
      "Editorial serif for field observations, compact mono for coordinates and collection status.",
    motion:
      "The interface reveals a specimen from location to condition to image, preserving the catalogue hierarchy.",
    materials: [
      "Glassine sleeve",
      "Pinned specimen",
      "Acid-green field tag",
      "Recycled index stock",
    ],
    palette: [
      { name: "Botanical paper", value: "#dce2d2" },
      { name: "Acid leaf", value: "#b9ef32" },
      { name: "Field ink", value: "#151714" },
      { name: "Dry grass", value: "#c9d47e" },
    ],
    applications: ["Specimen poster", "Field folder", "Classification label", "Exhibition guide"],
    lineage:
      "Natural-history catalogues and collection digitisation, reframed as a living urban field index.",
    references: [
      {
        label: "Natural History Museum — Pinned insect digitisation",
        href: "https://www.nhm.ac.uk/our-science/services/collections/digital/programme/pinned-insect-digitisation.html",
      },
      {
        label: "Natural History Museum — Collection Data Portal",
        href: "https://data.nhm.ac.uk/dataset/collection-specimens",
      },
    ],
    chapter: "Matter & Memory",
    motif: "specimen",
    theme: "light",
  },
  {
    slug: "last-letter",
    index: "04",
    title: "THE LAST LETTER",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Correspondence publishing and literary exhibition",
    statement: "Some sentences remain alive because they never arrive.",
    description:
      "A fictional exhibition about unsent letters and unfinished sentences. Original micro-text, folds, routing marks, and interrupted lines create an intimate publishing system without false provenance.",
    challenge:
      "Build emotional weight through editorial evidence while avoiding borrowed private correspondence and costume-drama nostalgia.",
    response:
      "Every object carries an original interrupted sentence, one physical fold, and one trace of attempted delivery.",
    rule: "One interrupted sentence, one fold line, and one delivery mark appear in every composition.",
    typography:
      "Literary italic for the voice, sober mono for routing, restrained sans for exhibition information.",
    motion:
      "Sentences type to the final unsent word; a fold closes the frame before the routing mark appears.",
    materials: ["Tea-toned paper", "Oxblood ink", "Blind fold", "Numbered glassine"],
    palette: [
      { name: "Faded rose stock", value: "#e6d8d4" },
      { name: "Oxblood", value: "#762b35" },
      { name: "Faded blue", value: "#394f69" },
      { name: "Graphite", value: "#2a2925" },
    ],
    applications: ["Exhibition poster", "Letter folio", "Entry ticket", "Reading programme"],
    lineage:
      "Mail art and literary ephemera, with wholly original writing and a contemporary archival system.",
    references: [
      {
        label: "MoMA — Analog Network: Mail Art",
        href: "https://www.moma.org/interactives/exhibitions/2014/analognetwork/",
      },
      { label: "Letterform Archive — Ephemera", href: "https://letterformarchive.org/ephemera/" },
    ],
    chapter: "Matter & Memory",
    motif: "correspondence",
    theme: "light",
  },
  {
    slug: "tactile-forecast",
    index: "05",
    title: "TACTILE FORECAST",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "CMF and emotional material library",
    statement: "A surface remembers pressure before it remembers colour.",
    description:
      "Eight emotional temperatures are translated into paper tone, fibre, reflectivity, and pressure. Quiet material luxury becomes measurable rather than a generic beige moodboard.",
    challenge:
      "Turn subjective feeling into a material system that designers can specify, compare, and reproduce.",
    response:
      "Each forecast receives one hue, stock weight, surface, pressure depth, and light response documented in a physical fan.",
    rule: "Each emotion receives one hue, one surface, one pressure depth, and one light response.",
    typography:
      "High-contrast serif for emotional names, technical mono for pressure, stock, and reflectivity values.",
    motion: "A moving light rake reveals emboss depth before colour information enters the frame.",
    materials: ["Blind emboss", "Soft-touch stock", "Edge paint", "Reflective foil"],
    palette: [
      { name: "Plum noir", value: "#291c21" },
      { name: "Heat", value: "#bc6d58" },
      { name: "Warmth", value: "#d2aa8c" },
      { name: "Stillness", value: "#9da3a2" },
    ],
    applications: ["Embossed poster", "Material fan", "Sample folio", "CMF digital library"],
    lineage:
      "Colour-plan specification and tactile print finishing, organised as a usable emotional forecast.",
    references: [
      { label: "G . F Smith — Colorplan", href: "https://shop.gfsmith.com/colorplan-papers" },
      {
        label: "G . F Smith — Colour palettes",
        href: "https://shop.gfsmith.com/colour-palettes-homepage",
      },
    ],
    chapter: "Matter & Memory",
    motif: "material",
    theme: "dark",
  },
  {
    slug: "night-index",
    index: "06",
    title: "NIGHT INDEX",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Neo-Deco fashion editorial",
    statement: "The night is catalogued through posture, shadow, and blue.",
    description:
      "A quarterly fashion and culture journal using cool-blue depth, compressed symmetry, iris-like arches, and interrupted geometric frames without Gatsby-era pastiche.",
    challenge:
      "Give an after-dark fashion journal a recognisable visual ritual while leaving the photography controlled, quiet, and contemporary.",
    response:
      "The arch behaves as crop, portal, page number, and motion mask; a single off-axis cut prevents symmetry from becoming static.",
    rule: "Every image is held by an arch, then interrupted once by an off-axis line or crop.",
    typography:
      "Condensed modern display with generous editorial serif captions and cool mono indexing.",
    motion:
      "The arch closes like an iris while one diagonal line crosses the sequence at a constant speed.",
    materials: ["Pearlescent blue stock", "Black foil", "Gloss image plate", "Translucent sleeve"],
    palette: [
      { name: "Cool blue", value: "#cfe7f6" },
      { name: "Midnight", value: "#071a35" },
      { name: "Cobalt shadow", value: "#335f80" },
      { name: "Ice", value: "#dff7ff" },
    ],
    applications: ["Campaign poster", "Quarterly cover", "Fashion film titles", "Story sequence"],
    lineage:
      "Art Deco proportion and contemporary fashion systems, stripped of gold-fan shorthand.",
    references: [
      { label: "Letterform Archive — Art Deco", href: "https://letterformarchive.org/art-deco/" },
      {
        label: "Pentagram — London Fashion Week SS19",
        href: "https://www.pentagram.com/work/london-fashion-week-ss19",
      },
    ],
    chapter: "Culture & Space",
    motif: "deco",
    theme: "light",
  },
  {
    slug: "public-memory",
    index: "07",
    title: "PUBLIC MEMORY",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Bilingual civic identity and wayfinding",
    statement: "A city speaks through the routes people repeat together.",
    description:
      "A bilingual public-culture system for neighbourhood walks, landmarks, and shared stories. Route codes and directional gestures create equal Korean–English hierarchy.",
    challenge:
      "Make local history useful at walking speed instead of reducing place and bilingual copy to decoration.",
    response:
      "Distance, direction, route, and story number remain in the same position across signs, maps, tickets, and notices.",
    rule: "Every object carries route P7, one directional gesture, and equal Korean–English hierarchy.",
    typography:
      "Archivo Black sets the civic headline while Pretendard carries matched Korean–English information with generous apertures and outdoor-scale spacing.",
    motion:
      "The route line advances only in the indicated direction; story cards enter from the corresponding edge.",
    materials: ["Enamel sign", "Folded street map", "Weatherproof vinyl", "Recycled ticket stock"],
    palette: [
      { name: "Civic yellow", value: "#f1d83d" },
      { name: "Signal red", value: "#e9472f" },
      { name: "Route blue", value: "#2748a8" },
      { name: "Street black", value: "#161616" },
    ],
    applications: ["Wayfinding poster", "Street sign", "Neighbourhood map", "Walk ticket"],
    lineage:
      "Pedestrian wayfinding and bilingual civic design, evaluated through direction and reading distance.",
    references: [
      { label: "Pentagram — WalkNYC", href: "https://www.pentagram.com/work/walknyc/story" },
      { label: "Pentagram — LOOK!", href: "https://www.pentagram.com/work/look/story" },
    ],
    chapter: "Culture & Space",
    motif: "wayfinding",
    theme: "light",
  },
  {
    slug: "soft-machine",
    index: "08",
    title: "SOFT MACHINE",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Biomorphic material laboratory identity",
    statement: "What if a machine could remember the touch that shaped it?",
    description:
      "A speculative material laboratory positioned between silicone, chrome, and the body. One inflated form carries the identity while rigid supporting type holds the system still.",
    challenge:
      "Balance sensuous 3D imagery with enough discipline to behave like a recognisable research identity rather than an effects reel.",
    response:
      "One living form appears per frame; every label, sample number, and caption locks to a strict horizontal datum.",
    rule: "One living form per frame; all secondary information sits on a rigid horizontal datum.",
    typography:
      "Soft editorial italic against a blunt industrial grotesk and mono sample identifiers.",
    motion:
      "The form inhales once while the type remains optically fixed, separating living matter from system data.",
    materials: ["Chrome foil", "Translucent silicone", "Frosted acrylic", "Soft-touch card"],
    palette: [
      { name: "Milk", value: "#e9e5df" },
      { name: "Coral", value: "#ee604d" },
      { name: "Chrome", value: "#8b8f90" },
      { name: "Machine black", value: "#171717" },
    ],
    applications: ["Pavilion poster", "Material samples", "Foil identity card", "Motion wordmark"],
    lineage:
      "Biomorphic sculpture and adaptive identity, reduced to one memorable soft-hard contradiction.",
    references: [
      {
        label: "MoMA — Lygia Clark, The Inside Is the Outside",
        href: "https://www.moma.org/collection/works/133319",
      },
      {
        label: "Pentagram — Mellon Foundation",
        href: "https://www.pentagram.com/work/the-mellon-foundation",
      },
    ],
    chapter: "Signal & Future",
    motif: "biomorphic",
    theme: "light",
  },
  {
    slug: "signal-noise",
    index: "09",
    title: "SIGNAL / NOISE",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Broadcast motion and spectral identity",
    statement: "A broken signal can still carry a precise message.",
    description:
      "An identity for an experimental sound broadcast. Signal decay, scan lines, and frequency bands follow fixed intervals while essential programme information remains stable.",
    challenge:
      "Build expressive interference that still communicates dates, times, accessibility, and programme order immediately.",
    response:
      "A restrained interference field carries the atmosphere while a separate white information channel remains locked and readable across every frame.",
    rule: "Noise shifts on fixed intervals, sage marks decoded information, and white type never moves.",
    typography:
      "Neutral broadcast grotesk for facts, expanded display capitals for the signal layer, mono timecode.",
    motion:
      "Signal bands drift by fixed offsets and resolve on the beat; the white information plane does not move.",
    materials: ["LED field", "Scan-line acetate", "Reflective pass", "Black programme stock"],
    palette: [
      { name: "Black", value: "#050607" },
      { name: "Chalk", value: "#f3f7f3" },
      { name: "Receiver grey", value: "#8f9da3" },
      { name: "Status sage", value: "#aeb59c" },
    ],
    applications: ["Hero poster", "Motion frames", "Broadcast titles", "Social loop"],
    lineage:
      "Network motion systems and spectral interference, with expression separated from public information.",
    references: [
      { label: "Studio Dumbar — MSI 24", href: "https://studiodumbar.com/work/msi-24" },
      {
        label: "Studio Dumbar — Instagram motion system",
        href: "https://studiodumbar.com/work/instagram",
      },
    ],
    chapter: "Signal & Future",
    motif: "signal",
    theme: "dark",
  },
  {
    slug: "chroma-tempo",
    index: "10",
    title: "CHROMA TEMPO",
    projectLabel: "Self-initiated art direction / 2026",
    discipline: "Audio-data concert identity",
    statement: "Rhythm becomes scale. Frequency becomes colour.",
    description:
      "A concert identity generated from tempo, key, duration, measure density, and frequency bands. Every number and bar is tied to one audible input.",
    challenge:
      "Make a data-led music system expressive without filling the work with meaningless pseudo-data.",
    response:
      "A published mapping table governs every poster, live screen, ticket, and motion sequence from the same track data.",
    rule: "Tempo controls rotation, amplitude controls bar height, and three frequency bands control colour.",
    typography:
      "Wide grotesk performance titles, functional mono notation, tabular figures for all audio measurements.",
    motion:
      "Bars respond to measured amplitude while colour changes only when the dominant frequency band changes.",
    materials: ["Score stock", "Fluorescent overprint", "LED stage field", "Spectrogram ticket"],
    palette: [
      { name: "Score paper", value: "#f0eee7" },
      { name: "Safety orange", value: "#ff633f" },
      { name: "Frequency cyan", value: "#11b8d2" },
      { name: "Stage cobalt", value: "#1737b8" },
    ],
    applications: [
      "Generative poster",
      "Live visual screen",
      "Spectrogram ticket",
      "Motion toolkit",
    ],
    lineage:
      "Music interface standards and sound-responsive graphics, unified by a transparent translation table.",
    references: [
      { label: "Pentagram — MIDI", href: "https://www.pentagram.com/work/midi/story" },
      {
        label: "Pentagram — Hennessy V.S.O.P.",
        href: "https://www.pentagram.com/work/hennessy-vsop",
      },
    ],
    chapter: "Signal & Future",
    motif: "frequency",
    theme: "light",
  },
  {
    slug: "79w",
    index: "11",
    title: "79W",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Electric regional mobility service",
    statement: "The distance between cities should feel like one connected line.",
    description:
      "A fictional electric mobility network for the space between local transit and air travel. A westbound line organises vehicles, stations, charging, passes, and live journey information.",
    challenge:
      "Unify physical travel and charging status without making regional mobility feel like an airline imitation.",
    response:
      "One continuous route line connects every touchpoint and bends only when the rider changes direction, service, or state.",
    rule: "One westbound line links every touchpoint; orange signals movement while route data stays neutral.",
    typography:
      "Open transport grotesk with tabular route data, large platform numerals, and short action labels.",
    motion:
      "The route line advances with real journey status and pauses visibly during transfer or charge states.",
    materials: [
      "Vehicle vinyl",
      "Anodised station sign",
      "Recycled rider pass",
      "LED charging strip",
    ],
    palette: [
      { name: "Transit black", value: "#171b1d" },
      { name: "Charge orange", value: "#ff5a24" },
      { name: "Electric mist", value: "#e7efed" },
      { name: "Platform steel", value: "#9eb2b2" },
    ],
    applications: ["Vehicle livery", "Station system", "Charging interface", "Rider pass"],
    lineage:
      "Transit wayfinding and service behaviour, with a single line carrying brand and journey state.",
    references: [
      { label: "Pentagram — OMNY", href: "https://www.pentagram.com/work/omny/story" },
      { label: "Studio Dumbar — Transavia", href: "https://studiodumbar.com/work/transavia" },
    ],
    chapter: "Brands as Systems",
    motif: "route",
    theme: "dark",
  },
  {
    slug: "tidehold",
    index: "12",
    title: "TIDEHOLD",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Waterfront restoration hotel",
    statement: "A stay at the waterline should give the shoreline room to return.",
    description:
      "A fictional hotel and tidal-restoration programme conceived as one waterfront system. Guest rituals, habitat updates, wayfinding, and seasonal programming share a measured waterline.",
    challenge:
      "Connect hospitality and ecological restoration without hiding environmental data behind soft lifestyle imagery.",
    response:
      "A visible tide datum records what guests experience and what the shoreline is doing at the same moment.",
    rule: "Every composition holds a tide datum; amber marks hospitality and blue-grey records the living shoreline.",
    typography:
      "Warm editorial serif for guest rituals, calm sans and tabular figures for habitat and tide records.",
    motion:
      "The datum rises and falls with the selected tide window while guest information stays anchored above it.",
    materials: ["Salt-washed paper", "Brass room marker", "Habitat board", "Linen field guide"],
    palette: [
      { name: "Deep water", value: "#26343b" },
      { name: "Tidal amber", value: "#d69336" },
      { name: "Salt paper", value: "#e4e8e4" },
      { name: "Harbour mist", value: "#71858b" },
    ],
    applications: ["Hotel identity", "Guest field guide", "Habitat signage", "Booking flow"],
    lineage:
      "Environmental reporting and waterfront hospitality, held together by one changing physical measure.",
    references: [
      {
        label: "Base — Biennale of Sydney: rīvus",
        href: "https://www.basedesign.com/projects/biennale-of-sydney",
      },
      { label: "Pentagram — Maker Park", href: "https://www.pentagram.com/work/maker-park" },
    ],
    chapter: "Brands as Systems",
    motif: "tide",
    theme: "dark",
  },
  {
    slug: "offsort",
    index: "13",
    title: "OFFSORT",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Circular food and packaging service",
    statement: "The useful part should never be treated like the leftover part.",
    description:
      "A fictional pantry company built from cosmetically imperfect produce and by-product streams. Origins, preservation, batch, and return routes become the front of pack.",
    challenge:
      "Make circular sourcing tangible before a customer reaches the sustainability fine print.",
    response:
      "The label hierarchy starts with rescued input and process, then builds flavour, recipe, and return information around the batch.",
    rule: "Every pack names the rescued input, processing method, batch number, and next route before flavour.",
    typography:
      "Bold utilitarian labels, warm recipe serif, mono batch numbers, and clear expiry/return hierarchy.",
    motion:
      "Batch cards stack by source and peel away to reveal the product’s next circular route.",
    materials: ["Return crate", "Unbleached label", "Reusable jar", "Overprinted batch sticker"],
    palette: [
      { name: "Pantry cream", value: "#f1e5cf" },
      { name: "Aubergine ink", value: "#41233c" },
      { name: "Tomato signal", value: "#ef5638" },
      { name: "Leaf green", value: "#83a747" },
    ],
    applications: ["Packaging family", "Batch labels", "Return crate", "Recipe platform"],
    lineage:
      "Food rescue and modular packaging, with provenance turned into the brand’s most visible layer.",
    references: [
      { label: "Base — Iles de Paix", href: "https://www.basedesign.com/projects/iles-de-paix" },
      {
        label: "Pentagram — Eat Offbeat",
        href: "https://www.pentagram.com/work/eat-offbeat/story",
      },
    ],
    chapter: "Brands as Systems",
    motif: "batch",
    theme: "light",
  },
  {
    slug: "horalis",
    index: "14",
    title: "HORALIS",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Time-zone skincare system",
    statement: "Skin keeps local time, even while the body crosses it.",
    description:
      "A fictional travel skincare system organised around local light and sleep windows. A 24-hour dial connects formulas, travel kits, routine cards, and scheduling UI.",
    challenge:
      "Replace an endless shelf of concerns with a compact routine that remains understandable across time-zone changes.",
    response:
      "Every product owns one time window, one action, and one dosage; the dial changes while instructions remain fixed.",
    rule: "Each product owns one time window and one action; the dial rotates while dosage stays fixed.",
    typography:
      "Refined humanist sans with restrained serif time markers and tabular 24-hour notation.",
    motion:
      "The dial rotates to local time, then pauses at the next usable window with no decorative looping.",
    materials: [
      "Brushed aluminium",
      "Frosted travel vial",
      "Routine card",
      "Recycled moulded tray",
    ],
    palette: [
      { name: "Dawn paper", value: "#e9e2d6" },
      { name: "Night blue", value: "#263d67" },
      { name: "Cloud silver", value: "#c6ccd0" },
      { name: "Sunset coral", value: "#e77b6b" },
    ],
    applications: ["Travel regimen", "Product family", "Routine cards", "Time-zone app"],
    lineage: "Apothecary clarity and travel utility, organised around a functional circadian dial.",
    references: [
      { label: "Pentagram — Plenaire", href: "https://www.pentagram.com/work/plenaire" },
      { label: "Base — Kit", href: "https://www.basedesign.com/projects/kit" },
    ],
    chapter: "Brands as Systems",
    motif: "dial",
    theme: "light",
  },
  {
    slug: "selv-00",
    index: "15",
    title: "SELV/00",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Modular repair fashion",
    statement: "A garment is not finished while its seams can open again.",
    description:
      "A fictional label whose base garments can be altered, repaired, traded, and reassembled. Visible seam codes turn care history into provenance.",
    challenge:
      "Make repair desirable and legible without presenting circular fashion as another temporary capsule collection.",
    response:
      "Every garment begins at /00 and accumulates repair codes, dates, parts, and owners without erasing earlier states.",
    rule: "Every piece begins at /00; each intervention adds one visible seam code without erasing history.",
    typography:
      "Industrial stencil for seam codes, compact grotesk for care, and large pattern-room numerals.",
    motion:
      "Digital seams open to reveal the previous garment state, then close with the new intervention code visible.",
    materials: [
      "Pattern paper",
      "Contrast repair thread",
      "Woven passport",
      "Reusable parts pouch",
    ],
    palette: [
      { name: "Workshop black", value: "#191917" },
      { name: "Pattern paper", value: "#d9ccb7" },
      { name: "Repair yellow", value: "#f0e52e" },
      { name: "Oxide thread", value: "#a54d34" },
    ],
    applications: ["Garment system", "Repair tags", "Parts library", "Second-life passport"],
    lineage:
      "Visible mending and product passports, with garment history treated as the primary graphic asset.",
    references: [
      {
        label: "Patagonia Worn Wear — Repairs",
        href: "https://wornwear.patagonia.com/pages/repairs",
      },
      {
        label: "Pentagram — Fashion for Good",
        href: "https://www.pentagram.com/work/fashion-for-good/story",
      },
    ],
    chapter: "Brands as Systems",
    motif: "seam",
    theme: "dark",
  },
  {
    slug: "tessera-live",
    index: "16",
    title: "TESSERA LIVE",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Performing-arts campus identity",
    statement: "Many rooms can move as one living season.",
    description:
      "A fictional campus for theatre, dance, music, rehearsal, and gathering. A nine-tile mark behaves as stage plan, calendar, façade signal, and programme frame.",
    challenge:
      "Unify many art forms without flattening their different tempos, audiences, and spatial needs.",
    response:
      "Eight structural tiles remain stable while the centre tile changes colour, content, and motion with the live programme state.",
    rule: "Nine tiles always define the field; the centre stays live and changes with programme state.",
    typography:
      "Large institutional grotesk, compact programme serif, and clear mono room/time notation.",
    motion:
      "Outer tiles build the stage; the live centre responds to genre, availability, and performance state.",
    materials: [
      "LED façade tile",
      "Newsprint season guide",
      "Embossed ticket",
      "Backstage laminate",
    ],
    palette: [
      { name: "Campus blue", value: "#3137d9" },
      { name: "Stage black", value: "#11131d" },
      { name: "Live yellow", value: "#ffdf4f" },
      { name: "Curtain coral", value: "#ef5b45" },
    ],
    applications: ["Campus façade", "Season campaign", "Mobile schedule", "Admission system"],
    lineage:
      "Performing-arts identities and stage planning, unified through a disciplined variable tile field.",
    references: [
      {
        label: "Studio Dumbar — Ruhrtriennale",
        href: "https://studiodumbar.com/work/ruhrtriennale",
      },
      {
        label: "Base — The Substation",
        href: "https://www.basedesign.com/projects/the-substation",
      },
    ],
    chapter: "Brands as Systems",
    motif: "tiles",
    theme: "dark",
  },
  {
    slug: "backmatter",
    index: "17",
    title: "BACKMATTER",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Evidence-led documentary network",
    statement: "Context is not outside the story. It is part of the picture.",
    description:
      "A fictional documentary network that keeps evidence visible while a story is watched. Source ledgers, versions, field records, and corrections become navigable layers.",
    challenge:
      "Let viewers inspect evidence without breaking the emotional continuity of documentary storytelling.",
    response:
      "Every public claim receives a source number that opens its supporting record in the same viewing context.",
    rule: "Every public claim carries a source number that opens the supporting record beside it.",
    typography:
      "News serif for narrative, neutral sans for navigation, mono source numbers and version states.",
    motion:
      "Footnotes expand laterally without replacing the frame; corrections visibly preserve the earlier version.",
    materials: ["Archive stock", "Correction label", "Field ledger", "Press credential"],
    palette: [
      { name: "Archive stock", value: "#d9d3c6" },
      { name: "Record black", value: "#11110f" },
      { name: "Correction red", value: "#e24b35" },
      { name: "Footnote grey", value: "#5e5a51" },
    ],
    applications: ["Streaming platform", "Source ledger", "Cinema campaign", "Press credentials"],
    lineage:
      "Editorial archives and documentary interfaces, with sourcing and correction states made first-class.",
    references: [
      {
        label: "Pentagram — The New Republic",
        href: "https://www.pentagram.com/work/the-new-republic",
      },
      {
        label: "Pentagram — Harry Ransom Center",
        href: "https://www.pentagram.com/work/harry-ransom-center",
      },
    ],
    chapter: "Brands as Systems",
    motif: "footnote",
    theme: "light",
  },
  {
    slug: "seamframe",
    index: "18",
    title: "SEAMFRAME",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Modular architecture platform",
    statement: "A building should remember how it can come apart.",
    description:
      "A fictional platform connecting mass-timber components, housing layouts, resident choices, and material passports. The seam becomes an honest interface.",
    challenge:
      "Explain assembly, adaptation, and disassembly to residents and builders without hiding behind finished-building photography.",
    response:
      "Every view exposes grid, joint, sequence, and return path; component identity travels from drawing to construction to future reuse.",
    rule: "Every assembly shows its grid, joint, and disassembly path; the seam is never concealed.",
    typography:
      "Architectural grotesk, mono component codes, and generous serif explanations for resident decisions.",
    motion:
      "Modules assemble in numbered order and reverse along the same path to demonstrate disassembly.",
    materials: ["Mass timber", "Recycled site mesh", "Joint marker", "Material passport card"],
    palette: [
      { name: "Planning green", value: "#b8c49a" },
      { name: "Frame forest", value: "#173527" },
      { name: "Joint orange", value: "#e66e43" },
      { name: "Drawing stock", value: "#f0eadc" },
    ],
    applications: [
      "Architecture platform",
      "Construction wrap",
      "Resident interface",
      "Material passport",
    ],
    lineage:
      "Architectural drawing and kit-of-parts systems, centred on reversible construction rather than façade styling.",
    references: [
      { label: "Base — Choreus", href: "https://www.basedesign.com/projects/choreus" },
      {
        label: "Base — Allies and Morrison",
        href: "https://www.basedesign.com/projects/allies-and-morrison",
      },
    ],
    chapter: "Brands as Systems",
    motif: "assembly",
    theme: "light",
  },
  {
    slug: "two-shores",
    index: "19",
    title: "TWO SHORES",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Cross-border cooperative finance",
    statement: "Money should understand both sides of a life lived between places.",
    description:
      "A fictional member-owned service for people whose income, family, and obligations cross borders. Paired forms keep currencies, languages, fees, and status in one transparent record.",
    challenge:
      "Reduce the anxiety of cross-border transfer without hiding fees, exchange assumptions, or the second language behind progressive disclosure.",
    response:
      "Both sides of every transfer remain visible from quote through receipt, with aligned tabular figures and equal-language actions.",
    rule: "Every transaction shows both currencies, both languages, and the complete fee before action.",
    typography:
      "Bilingual humanist sans, tabular financial figures, mirrored labels, and fixed decimal alignment.",
    motion:
      "Two lanes stretch toward one another; completion occurs only when both records display the same status.",
    materials: [
      "Member card",
      "Bilingual thermal receipt",
      "Security envelope",
      "Mobile transfer lane",
    ],
    palette: [
      { name: "Water mint", value: "#a8dfd3" },
      { name: "Deep harbour", value: "#0b2c38" },
      { name: "Transfer coral", value: "#ff6d55" },
      { name: "Receipt cream", value: "#f8f0da" },
    ],
    applications: ["Transfer app", "Member card", "Bilingual receipt", "Public campaign"],
    lineage:
      "Cross-border product design and kinetic identity, made accountable through paired records.",
    references: [
      { label: "Studio Dumbar — Tempo", href: "https://studiodumbar.com/work/tempo" },
      { label: "Studio Dumbar — Request", href: "https://studiodumbar.com/work/request" },
    ],
    chapter: "Brands as Systems",
    motif: "exchange",
    theme: "light",
  },
  {
    slug: "coldkiln",
    index: "20",
    title: "COLDKILN",
    projectLabel: "Fictional brand / Self-initiated / 2026",
    discipline: "Low-carbon building material",
    statement: "The material story begins with the heat that was never used.",
    description:
      "A fictional unfired mineral-material company designed to make composition, curing, reuse, and end-of-life routes legible across specification and site use.",
    challenge:
      "Communicate credible low-carbon material performance without relying on a green badge or vague nature imagery.",
    response:
      "Press, cure, install, and return form a visible cycle supported by module code, composition, and recovery instructions.",
    rule: "Every application names press, cure, install, and return before colour or finish.",
    typography:
      "Industrial condensed display, specification mono, tabular environmental data, and unambiguous module codes.",
    motion:
      "Four material stages advance in a square cycle; any stage can reverse to show the return route.",
    materials: [
      "Unfired mineral tile",
      "Returnable site pack",
      "Cold-stamped sample",
      "Specification sheet",
    ],
    palette: [
      { name: "Cold mineral", value: "#d7d5ce" },
      { name: "Kiln black", value: "#171a19" },
      { name: "Specification blue", value: "#2353d3" },
      { name: "Clay oxide", value: "#a7573f" },
    ],
    applications: [
      "Façade modules",
      "Specification sheets",
      "Sample library",
      "Returnable site pack",
    ],
    lineage:
      "Industrial specification and circular-material systems, replacing eco symbolism with traceable process.",
    references: [
      { label: "Pentagram — Zeff", href: "https://www.pentagram.com/work/zeff-2" },
      { label: "Pentagram — Gush", href: "https://www.pentagram.com/work/gush" },
    ],
    chapter: "Brands as Systems",
    motif: "mineral",
    theme: "light",
  },
  {
    slug: "hm-second-sun",
    index: "21",
    title: "H&M",
    projectLabel: "Circular summer retail campaign / 2026",
    discipline: "Circular summer retail campaign",
    statement: "The next season begins with what is already here.",
    description:
      "A seasonal H&M design project that turns repair, rewear, and garment history into a sun-faded campaign system spanning imagery, garment labels, retail service moments, and digital product stories.",
    challenge:
      "Make circular wardrobe behaviour feel immediate and desirable at high-street scale without reducing the message to a green badge or an abstract promise.",
    response:
      "A second-sun device follows every garment through its first wear, repair, exchange, and return, while provenance labels make the next action visible at a glance.",
    rule: "Every touchpoint pairs one garment state with one clear next-life action; an environmental claim is never used as decoration.",
    typography:
      "A wide editorial grotesk carries the campaign voice; condensed utility labels record garment state, date, and next-life action.",
    motion:
      "A warm disc crosses the frame twice: the first pass reveals the garment, and the second reveals its repair or return route.",
    materials: [
      "Recycled poster stock",
      "Woven repair patch",
      "Heat-transfer care label",
      "Reusable garment wrap",
    ],
    palette: [
      { name: "H&M red", value: "#e50010" },
      { name: "Retail white", value: "#ffffff" },
      { name: "Campaign black", value: "#111111" },
      { name: "Studio neutral", value: "#ded8d2" },
    ],
    applications: [
      "Seasonal campaign",
      "Garment take-back kiosk",
      "Repair and rewear labels",
      "Digital product stories",
    ],
    lineage:
      "Built from H&M Group's published circular-design and product-lifecycle material, then translated into an original campaign and service language.",
    references: [
      {
        label: "H&M Group — Circularity",
        href: "https://hmgroup.com/sustainability/circularity-and-climate/circularity/",
      },
      {
        label: "H&M Group — Circulator guide",
        href: "https://hmgroup.com/news/hm-group-launches-circular-design-tool-circulator/",
      },
    ],
    chapter: "Fashion & Retail",
    motif: "hm-edit",
    theme: "light",
    brandStudy: {
      brand: "H&M",
      relationship: "unofficial-self-initiated",
    },
  },
  {
    slug: "zara-the-air-between",
    index: "22",
    title: "ZARA",
    projectLabel: "Trans-seasonal fashion editorial / 2026",
    discipline: "Trans-seasonal fashion editorial and retail system",
    statement: "Clothes become visible in the pause around the body.",
    description:
      "A ZARA fashion editorial and retail project built around negative space, sheer layers, and the interval between body and garment, moving across storefront, lookbook, fitting-room, and mobile formats.",
    challenge:
      "Create a quiet fashion launch that can hold product, atmosphere, and information across storefront, editorial, and mobile formats without visual noise.",
    response:
      "Suspended crops, pale directional light, and deliberately measured gutters let silhouette and fabric movement carry the story before captions enter.",
    rule: "At least one third of every composition remains open, and typography never crosses the primary silhouette.",
    typography:
      "A high-contrast editorial serif sets the atmospheric line; a restrained neo-grotesk handles garments, dates, and navigation.",
    motion:
      "Two image planes drift apart by a few millimetres, exposing a quiet field of light before returning to alignment.",
    materials: ["Cold gloss paper", "Translucent vellum", "Brushed aluminium", "Sheer scrim"],
    palette: [
      { name: "ZARA black", value: "#050505" },
      { name: "Collection white", value: "#ffffff" },
      { name: "Editorial stone", value: "#f3f3f1" },
      { name: "Display steel", value: "#b8b8b5" },
    ],
    applications: [
      "Flagship window",
      "Editorial lookbook",
      "Mobile collection launch",
      "Fitting-room screens",
    ],
    lineage:
      "Responds to Inditex's published emphasis on customer experience, store environments, and fashion presentation through an original spatial editorial system.",
    references: [
      {
        label: "Inditex Annual Report 2025 — Our drivers",
        href: "https://annualreport.inditex.com/anrpxxvui/en/our-drivers",
      },
      {
        label: "Inditex Annual Report 2025 — CEO statement",
        href: "https://annualreport.inditex.com/anrpxxvui/en/ceo-statement",
      },
    ],
    chapter: "Fashion & Retail",
    motif: "zara-atelier",
    theme: "light",
    brandStudy: {
      brand: "ZARA",
      relationship: "unofficial-self-initiated",
    },
  },
  {
    slug: "uniqlo-comfort-measured",
    index: "23",
    title: "UNIQLO",
    projectLabel: "Everyday apparel information system / 2026",
    discipline: "Everyday apparel information system",
    statement: "Comfort is quiet because the work happens before you notice it.",
    description:
      "A UNIQLO apparel information project visualising everyday comfort through movement, layering, temperature, and use, with campaign photography, retail modules, and product information sharing one calm system.",
    challenge:
      "Explain functional everyday clothing with enough useful detail to build confidence while keeping the experience calm, accessible, and human.",
    response:
      "A modular comfort index connects each garment to a real daily condition, using plain-language notes and measured diagrams instead of technical spectacle.",
    rule: "Every feature is paired with a use condition and a plain-language benefit; no unsupported number appears as proof.",
    typography:
      "A precise Japanese-influenced grotesk leads the system, supported by monospaced measurements and generous multilingual spacing.",
    motion:
      "Comfort values respond to the body in four calm states—rest, walk, commute, and layer—without abrupt transitions.",
    materials: [
      "Soft-touch product card",
      "Translucent measurement film",
      "Recycled fabric swatch",
      "Modular shelf rail",
    ],
    palette: [
      { name: "UNIQLO red", value: "#ff0000" },
      { name: "LifeWear white", value: "#ffffff" },
      { name: "Utility black", value: "#111111" },
      { name: "Function grey", value: "#e6e6e3" },
    ],
    applications: [
      "Product information system",
      "Comfort finder",
      "In-store measurement wall",
      "LifeWear field guide",
    ],
    lineage:
      "Grounded in UNIQLO's published LifeWear philosophy of useful, evolving everyday clothing, expressed here as an original information and retail concept.",
    references: [
      {
        label: "UNIQLO — About LifeWear",
        href: "https://www.uniqlo.com/us/en/contents/lifewear/",
      },
      {
        label: "Fast Retailing — UNIQLO business model",
        href: "https://www.fastretailing.com/eng/group/strategy/uniqlobusiness.html",
      },
    ],
    chapter: "Fashion & Retail",
    motif: "uniqlo-life",
    theme: "light",
    brandStudy: {
      brand: "UNIQLO",
      relationship: "unofficial-self-initiated",
    },
  },
  {
    slug: "prada-the-quiet-error",
    index: "24",
    title: "PRADA",
    projectLabel: "Fashion exhibition and editorial identity / 2026",
    discipline: "Fashion exhibition and editorial identity",
    statement: "The familiar becomes new when its context shifts.",
    description:
      "A PRADA fashion exhibition and editorial study connecting quiet photography, garment construction, object publication, and an adaptable gallery environment.",
    challenge:
      "Create intellectual tension and luxury restraint without copying an existing campaign, logo treatment, runway environment, or house artwork.",
    response:
      "Neutral typography and image-led pacing establish order; shifts of crop, viewpoint, scale, and juxtaposition reframe familiar fashion codes without visual effects.",
    rule: "Each composition reframes one familiar code through crop, juxtaposition, or scale while identity typography remains intact.",
    typography:
      "A neutral grotesk carries evidence and navigation; a classical roman is reserved for the project title and never used as body copy.",
    motion:
      "The image holds; a frame, crop, or viewpoint changes once, then leaves the scene still again.",
    materials: [
      "Black technical textile",
      "Smoked acrylic",
      "Brushed stainless steel",
      "Blind-embossed paper",
    ],
    palette: [
      { name: "Observation black", value: "#1b1b1b" },
      { name: "Gallery white", value: "#f2f1ed" },
      { name: "Stainless", value: "#b7b7b1" },
      { name: "Frame green", value: "#7e8871" },
    ],
    applications: [
      "Exhibition invitation",
      "Editorial object book",
      "Gallery installation",
      "Digital motion teaser",
    ],
    lineage:
      "Draws research context from Prada Group's public writing on experimentation, architecture, and its design archive, then builds an original system around documented deviation.",
    references: [
      {
        label: "Prada Group — Prada brand identity",
        href: "https://www.pradagroup.com/en/brands/prada.html",
      },
      {
        label: "Prada Group — Design archive",
        href: "https://www.pradagroup.com/en/perspectives/stories/sezione-know-how/design-archive.html",
      },
    ],
    chapter: "Fashion & Retail",
    motif: "prada-observation",
    theme: "dark",
    brandStudy: {
      brand: "PRADA",
      relationship: "unofficial-self-initiated",
    },
  },
];

export const designProjectCount = designProjects.length;

export const designProjectApplicationCount = designProjects.reduce(
  (total, project) => total + project.applications.length,
  0,
);

export const designProjectChapters = Array.from(
  designProjects.reduce((chapters, project) => {
    const items = chapters.get(project.chapter) ?? [];
    items.push(project);
    chapters.set(project.chapter, items);
    return chapters;
  }, new Map<DesignProject["chapter"], DesignProject[]>()),
);

export const getDesignProject = (slug: string) =>
  designProjects.find((project) => project.slug === slug);

export function getAdjacentDesignProjects(slug: string) {
  const index = designProjects.findIndex((project) => project.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };

  return {
    previous: designProjects[(index - 1 + designProjects.length) % designProjects.length],
    next: designProjects[(index + 1) % designProjects.length],
  };
}
