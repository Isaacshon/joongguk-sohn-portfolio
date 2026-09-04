import type { CaseStudyLayout } from "@/lib/design-project-art-direction";

export const personalProjectWorldSlugs = [
  "afterimage",
  "memory-type",
  "field-notes-37",
  "last-letter",
  "tactile-forecast",
  "night-index",
  "public-memory",
  "soft-machine",
  "signal-noise",
  "chroma-tempo",
  "79w",
  "tidehold",
  "offsort",
  "horalis",
  "selv-00",
  "tessera-live",
  "backmatter",
  "seamframe",
  "two-shores",
  "coldkiln",
] as const;

export type PersonalProjectWorldSlug = (typeof personalProjectWorldSlugs)[number];

export const personalProjectWorldBeatSlots = [
  "hero",
  "tactile",
  "spatial",
  "context",
  "editorialA",
  "editorialB",
  "editorialC",
  "editorialD",
] as const;

export type PersonalProjectWorldBeatSlot = (typeof personalProjectWorldBeatSlots)[number];

export const personalProjectMediaPolicy = {
  minimumUniquePhotographs: 8,
  minimumSourceLongestEdge: 2048,
  deliveryLongestEdges: [960, 1600, 3200],
  nativeDetailGuaranteedThrough: 1600,
  allowTextInsideGeneratedImages: false,
  requireUniqueSourceHashes: true,
  allowRecordedHighTierUpscale: true,
  recordAspectCropExceptions: true,
  typographyDelivery: "Render every title, label, caption, and mark as accessible DOM text.",
} as const;

export type PersonalProjectWorldBeat = {
  slot: PersonalProjectWorldBeatSlot;
  label: string;
  title: string;
  caption: string;
  ratio: string;
};

export type PersonalProjectWorld = {
  slug: PersonalProjectWorldSlug;
  layout: CaseStudyLayout;
  worldview: string;
  setting: string;
  coreValue: string;
  tension: string;
  message: string;
  beats: readonly PersonalProjectWorldBeat[];
  chapterLabels: readonly [string, string, string, string];
  mobileInteraction: string;
};

const personalProjectWorlds = {
  afterimage: {
    slug: "afterimage",
    layout: "overprint-bands",
    worldview: "A print error becomes the visual memory of an experimental image festival.",
    setting: "A working risograph press, a concrete venue, and the city after the final screening.",
    coreValue: "Physical imperfection with informational discipline.",
    tension: "The image may drift; dates, access, and orientation must remain exact.",
    message: "An image continues after the eye looks away.",
    beats: [
      {
        slot: "hero",
        label: "Exposure 01",
        title: "The body leaves two traces.",
        caption: "A dancer holds one gesture between cobalt and fluorescent-orange echoes.",
        ratio: "16 / 10",
      },
      {
        slot: "tactile",
        label: "Plate 02",
        title: "Registration stays visible.",
        caption: "Wet ink, halftone dots, and misaligned sheets remain on the press table.",
        ratio: "3 / 2",
      },
      {
        slot: "spatial",
        label: "Venue 03",
        title: "Two planes occupy one room.",
        caption: "Cobalt and orange scrims divide a raw concrete screening hall.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Projection 04",
        title: "The image reaches the street.",
        caption: "Repeated shadows wash across an urban wall after dark.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Press 05",
        title: "The second colour arrives late.",
        caption: "A printer aligns the orange plate while the cobalt pass dries beside it.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "Audience 06",
        title: "The room completes the exposure.",
        caption:
          "Viewers cross overlapping projections without obscuring the fixed programme text.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Admission 07",
        title: "Information does not drift.",
        caption: "Tickets and programmes share one registration system at the entrance desk.",
        ratio: "1 / 1",
      },
      {
        slot: "editorialD",
        label: "Residual 08",
        title: "Only the colour remains.",
        caption:
          "An empty cinema holds the final cobalt and orange reflection after the crowd leaves.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["Exposure", "Second plate", "Public surface", "Residual light"],
    mobileInteraction:
      "Drag the orange plate into registration; release it to reveal the next photograph while the information rail remains fixed.",
  },
  "memory-type": {
    slug: "memory-type",
    layout: "archive-cards",
    worldview:
      "A neighbourhood survives through the strokes its residents painted, printed, and wrote.",
    setting:
      "A Korean shopping alley, a community scanning table, and a material letterform archive.",
    coreValue: "Preserve local voice without turning language into ornament.",
    tension: "Archival order can protect evidence or flatten the people who made it.",
    message: "A neighbourhood can remain inside the shape of a letter.",
    beats: [
      {
        slot: "hero",
        label: "Archive 01",
        title: "The stroke enters the collection.",
        caption: "Painted Hangul fragments hang above a glass case with their source tags intact.",
        ratio: "4 / 5",
      },
      {
        slot: "tactile",
        label: "Trace 02",
        title: "Every surface carries a hand.",
        caption:
          "Carbon copies, weathered wood, paper blocks, and vermilion stamp ink share one table.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Index 03",
        title: "The archive remains inhabitable.",
        caption:
          "Original signs and reconstructed characters face one another in a quiet community room.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Survey 04",
        title: "Collection begins outside.",
        caption: "An archivist scans a hand-painted surface in a narrow neighbourhood alley.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Maker 05",
        title: "A brush defines the voice.",
        caption: "A sign painter repairs one Hangul stroke on an ageing storefront panel.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Evidence 06",
        title: "Ordinary print becomes a source.",
        caption:
          "An awning letter, handwritten notice, and shop receipt are photographed before cataloguing.",
        ratio: "1 / 1",
      },
      {
        slot: "editorialC",
        label: "Voice 07",
        title: "The resident names the context.",
        caption: "An older shopkeeper describes a sign while a younger recorder listens beside it.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialD",
        label: "Return 08",
        title: "The archive returns to the street.",
        caption:
          "A new neighbourhood notice pairs a reconstructed glyph with the photographed source.",
        ratio: "3 / 2",
      },
    ],
    chapterLabels: ["Collected stroke", "Resident voice", "Modular letter", "Public return"],
    mobileInteraction:
      "Open vertical archive drawers; tapping a completed glyph reveals its photographed stroke source without replacing the Korean text.",
  },
  "field-notes-37": {
    slug: "field-notes-37",
    layout: "specimen-dossier",
    worldview: "Thirty-seven small lives turn the seams of a city into an active field station.",
    setting:
      "Rain-dark masonry, street-level surveys, and a natural-history cabinet built for incomplete evidence.",
    coreValue: "Careful observation before classification.",
    tension: "Discovery invites certainty, but the living field always exceeds the record.",
    message: "What remains unobserved is still part of the data.",
    beats: [
      {
        slot: "hero",
        label: "Specimen 01",
        title: "Life occupies the smallest interval.",
        caption: "An insect and lichen colony fills a rain-wet crack in concrete.",
        ratio: "16 / 9",
      },
      {
        slot: "tactile",
        label: "Field kit 02",
        title: "Collection has limits.",
        caption:
          "Glassine, a hand lens, and acid-green markers sit beside an empty specimen sleeve.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Cabinet 03",
        title: "Absence keeps its place.",
        caption:
          "A luminous cabinet presents identified specimens beside deliberately vacant cells.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Site 04",
        title: "The researcher meets the curb.",
        caption: "A field worker records growth along rain-darkened city masonry.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialA",
        label: "Condition 05",
        title: "Weather belongs to the record.",
        caption:
          "A coordinate card shows time, temperature, moisture, and one missing observation.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "Protocol 06",
        title: "The subject stays in place.",
        caption: "The researcher photographs a living specimen without removing it from the seam.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Map 07",
        title: "Thirty-seven points form a habitat.",
        caption:
          "Field photographs and coordinates cover a working city map without decorative data.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialD",
        label: "Release 08",
        title: "Observation ends before life does.",
        caption: "At dusk, the same concrete seam remains occupied after the researcher has left.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["Locate", "Observe", "Classify", "Leave living"],
    mobileInteraction:
      "Swipe a horizontal specimen film while a narrow coordinate rail stays fixed; empty records remain swipeable rather than disappearing.",
  },
  "last-letter": {
    slug: "last-letter",
    layout: "correspondence-scroll",
    worldview: "An undelivered sentence can outlive the journey it never made.",
    setting:
      "A railway waiting room, a night train, a returned-mail room, and a suspended paper exhibition.",
    coreValue: "Emotional restraint and original testimony.",
    tension: "The need to speak meets the choice not to send.",
    message: "A message does not need to arrive to remain alive.",
    beats: [
      {
        slot: "hero",
        label: "Draft 01",
        title: "The address remains blank.",
        caption: "An unaddressed cream envelope rests on a railway waiting-room table at dusk.",
        ratio: "3 / 2",
      },
      {
        slot: "tactile",
        label: "Fold 02",
        title: "Pressure survives the sentence.",
        caption:
          "Tea-toned paper, graphite indentations, glassine, and oxblood ink reveal handling.",
        ratio: "4 / 5",
      },
      {
        slot: "spatial",
        label: "Room 03",
        title: "Private distance becomes public space.",
        caption: "Suspended correspondence sheets form a restrained literary installation.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Transit 04",
        title: "The letter travels without leaving.",
        caption: "A passenger holds the sealed envelope beside a dark train window.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Pause 05",
        title: "The hand stops before the name.",
        caption:
          "A pen hovers above the address line while the writer's other hand closes the page.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "Routing 06",
        title: "Delivery leaves a failed trace.",
        caption: "Cancelled marks, a torn label, and one blind fold cross the original envelope.",
        ratio: "1 / 1",
      },
      {
        slot: "editorialC",
        label: "Return 07",
        title: "The box gives nothing back.",
        caption: "An empty mail slot faces a returned envelope on the tiled floor below.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialD",
        label: "Morning 08",
        title: "The sentence remains unopened.",
        caption: "Daylight reaches the same sealed letter on a quiet table.",
        ratio: "16 / 10",
      },
    ],
    chapterLabels: ["Draft", "Attempted route", "Return", "Unopened"],
    mobileInteraction:
      "Tap the page fold to open each chapter; the unfinished sentence remains behind the photograph instead of becoming a long text block.",
  },
  "tactile-forecast": {
    slug: "tactile-forecast",
    layout: "material-atlas",
    worldview:
      "Emotional temperature can be specified through pressure, fibre, reflectivity, and light.",
    setting:
      "A CMF review studio, a controlled light bench, and a material library used at human scale.",
    coreValue: "Make subjective sensation reproducible without draining it of feeling.",
    tension: "A mood is personal; a material specification must be repeatable.",
    message: "A surface remembers pressure before it remembers colour.",
    beats: [
      {
        slot: "hero",
        label: "Forecast 01",
        title: "Eight temperatures enter the hand.",
        caption: "A sculptural fan moves from plum and terracotta to silver and still grey.",
        ratio: "21 / 10",
      },
      {
        slot: "tactile",
        label: "Depth 02",
        title: "Light measures the pressure.",
        caption: "Raking light reveals emboss depth, edge paint, fibre, and reflective foil.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Library 03",
        title: "Feeling becomes retrievable.",
        caption:
          "Samples are indexed by surface, pressure, and light response across a working wall.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Review 04",
        title: "The hand verifies the chart.",
        caption: "A designer compares two samples beneath a controlled material-review lamp.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Compression 05",
        title: "The surface keeps the touch.",
        caption: "A fingertip depresses a soft sample while a depth gauge records the change.",
        ratio: "1 / 1",
      },
      {
        slot: "editorialB",
        label: "Reflection 06",
        title: "Gloss changes with the viewer.",
        caption: "One foil sample is photographed at three measured viewing angles.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Blind read 07",
        title: "Colour leaves the test.",
        caption: "A participant compares coded materials by touch without seeing their hues.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialD",
        label: "Application 08",
        title: "Specification becomes atmosphere.",
        caption:
          "The selected surfaces appear as seating, wall panels, and hand-contact points in one room.",
        ratio: "16 / 9",
      },
    ],
    chapterLabels: ["Temperature", "Pressure", "Light response", "Human use"],
    mobileInteraction:
      "Swipe the sample fan; press and hold a material to replace colour information with its pressure and reflectivity evidence.",
  },
  "night-index": {
    slug: "night-index",
    layout: "deco-axis",
    worldview: "Night fashion is indexed by posture, shadow, reflection, and cool-blue depth.",
    setting:
      "A midnight studio, wet city streets, an arched pavilion, and the last hour before dawn.",
    coreValue: "Contemporary restraint over decorative nostalgia.",
    tension: "Symmetry creates ceremony but can freeze the living image.",
    message: "Night requires its own visual index.",
    beats: [
      {
        slot: "hero",
        label: "Entry 01",
        title: "The figure enters the axis.",
        caption: "An androgynous model stands inside a midnight arch cut by one diagonal shadow.",
        ratio: "3 / 4",
      },
      {
        slot: "tactile",
        label: "Edition 02",
        title: "Blue becomes an object.",
        caption:
          "Pearlescent stock, black foil, gloss photography, and a translucent sleeve form the issue.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Pavilion 03",
        title: "The arch becomes a room.",
        caption: "Compressed iris-like openings lead through a cool-blue fashion installation.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Facade 04",
        title: "The issue reaches the city.",
        caption: "A nocturnal campaign is projected across an arched architectural facade.",
        ratio: "16 / 9",
      },
      {
        slot: "editorialA",
        label: "Preparation 05",
        title: "The night begins backstage.",
        caption: "A model adjusts one cuff before a mirror lit only by cool work lights.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "Street 06",
        title: "Posture replaces ornament.",
        caption: "A single silhouette crosses an empty street between hard pools of blue light.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Reflection 07",
        title: "The frame doubles below.",
        caption: "A tailored figure and one diagonal light repeat across rain-polished pavement.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialD",
        label: "Dawn 08",
        title: "The iris closes.",
        caption: "The empty pavilion holds a thin line of morning light through its final arch.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["Backstage", "Posture", "City reflection", "Closing iris"],
    mobileInteraction:
      "Scroll through a vertical iris: each photograph opens from the central axis, then one off-axis cut advances to the next scene.",
  },
  "public-memory": {
    slug: "public-memory",
    layout: "route-sign",
    worldview: "A city remembers through routes walked and retold by its residents.",
    setting:
      "A bilingual neighbourhood walk linking storefronts, civic signs, a shelter, and an elevated route view.",
    coreValue: "Shared authorship and equal Korean-English access.",
    tension: "Wayfinding demands speed while memory asks people to stop and listen.",
    message: "A repeated route can become a public archive.",
    beats: [
      {
        slot: "hero",
        label: "P7 / Origin",
        title: "The route begins in public.",
        caption: "Folded civic forms mark the first gathering point beside a reflecting pool.",
        ratio: "3 / 2",
      },
      {
        slot: "tactile",
        label: "P7 / Tools",
        title: "Direction fits in the hand.",
        caption:
          "Enamel arrows, a folded map, and walk tickets share equal Korean-English hierarchy.",
        ratio: "3 / 2",
      },
      {
        slot: "spatial",
        label: "P7 / Street",
        title: "The archive stands at walking speed.",
        caption: "Neighbourhood wayfinding is installed where pedestrians naturally pause.",
        ratio: "21 / 9",
      },
      {
        slot: "context",
        label: "P7 / Voice",
        title: "A route becomes a story.",
        caption: "An older resident points out a local landmark to younger walkers.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "P7 / Trace",
        title: "The missing shop keeps a place.",
        caption: "A resident points to the outline left by a removed storefront sign.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "P7 / Map",
        title: "Hands choose the next stop.",
        caption: "Two generations hold the same folded map above the street it describes.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "P7 / Walk",
        title: "Memory moves as a group.",
        caption:
          "Residents cross an intersection while the route marker stays visible behind them.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialD",
        label: "P7 / Return",
        title: "The whole line becomes visible.",
        caption:
          "At blue hour, lit story stops connect the neighbourhood from an elevated viewpoint.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["Origin", "Resident voice", "Shared walk", "Route at night"],
    mobileInteraction:
      "Follow a horizontal walking route with a fixed compass; each stop snaps into place and reveals its bilingual story on tap.",
  },
  "soft-machine": {
    slug: "soft-machine",
    layout: "soft-datum",
    worldview:
      "Responsive matter can feel alive while remaining accountable to a research protocol.",
    setting: "A silicone casting room, a robotic test bench, and a public material pavilion.",
    coreValue: "Sensory invitation supported by repeatable evidence.",
    tension: "Organic change resists the fixed datum required by measurement.",
    message: "Softness can operate a rigorous system.",
    beats: [
      {
        slot: "hero",
        label: "Form 01",
        title: "The specimen appears to breathe.",
        caption: "A coral silicone body rests on a mirror-polished chrome plinth.",
        ratio: "4 / 5",
      },
      {
        slot: "tactile",
        label: "Touch 02",
        title: "Pressure leaves a memory.",
        caption: "A fingertip deforms a translucent membrane while the surface holds its shape.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Pavilion 03",
        title: "The laboratory expands to body scale.",
        caption: "Soft coral forms and chrome instruments organise a public research hall.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Test 04",
        title: "The machine records the yield.",
        caption: "A robotic arm measures the same silicone form on a quiet bench.",
        ratio: "3 / 4",
      },
      {
        slot: "editorialA",
        label: "Cast 05",
        title: "The body begins as liquid.",
        caption: "A technician pours pigmented silicone into a numbered translucent mould.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Record 06",
        title: "Deformation becomes evidence.",
        caption: "A researcher marks compression depth beside the changed profile of the form.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Encounter 07",
        title: "The visitor completes the test.",
        caption: "Two hands press a large membrane while its fixed datum remains visible.",
        ratio: "16 / 9",
      },
      {
        slot: "editorialD",
        label: "Recovery 08",
        title: "The form settles without erasing touch.",
        caption:
          "The released membrane returns toward its original contour with one shallow impression left.",
        ratio: "3 / 2",
      },
    ],
    chapterLabels: ["Cast", "Touch", "Measure", "Recover"],
    mobileInteraction:
      "Press the responsive photograph to deform its contour against a fixed measurement line; release to watch one controlled recovery.",
  },
  "signal-noise": {
    slug: "signal-noise",
    layout: "signal-console",
    worldview:
      "An independent broadcast preserves essential information through deliberate interference.",
    setting:
      "A CRT performance studio, an analogue control room, a transmitter bay, and a solitary late-night receiver.",
    coreValue: "Expression never compromises access or schedule clarity.",
    tension: "Interference creates atmosphere but can destroy the message it carries.",
    message: "Clarity can survive a broken signal.",
    beats: [
      {
        slot: "hero",
        label: "Channel 01",
        title: "The voice crosses the glass.",
        caption: "A vocalist appears through CRT glass under controlled spectral spill.",
        ratio: "21 / 9",
      },
      {
        slot: "tactile",
        label: "Carrier 02",
        title: "Interference has a material body.",
        caption:
          "Scan acetate, spectral film, black stock, and a reflective pass form the broadcast kit.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Studio 03",
        title: "The channel becomes a tunnel.",
        caption: "CRT banks and an LED field create a deep live-broadcast room.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Mix 04",
        title: "Noise is operated, not random.",
        caption: "Hands adjust an analogue video mixer before colour-shifted monitors.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialA",
        label: "Transmit 05",
        title: "The signal leaves the room.",
        caption: "Patch cables and labelled carriers connect a compact transmitter rack.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "Receive 06",
        title: "One listener closes the circuit.",
        caption: "A late-night listener watches the live feed from a dark domestic room.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Decode 07",
        title: "Public information holds still.",
        caption:
          "Programme time and accessibility details remain sharp over a drifting image channel.",
        ratio: "16 / 9",
      },
      {
        slot: "editorialD",
        label: "Resolve 08",
        title: "The carrier fades at dawn.",
        caption:
          "The studio monitors settle to a clear white information plane after transmission.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["Input", "Interference", "Decode", "Clear carrier"],
    mobileInteraction:
      "Swipe between broadcast channels while time and access stay pinned; a tuner control changes only the image layer.",
  },
  "chroma-tempo": {
    slug: "chroma-tempo",
    layout: "score-grid",
    worldview:
      "Measured sound data conducts the scale, colour, and duration of a live visual identity.",
    setting: "A rehearsal desk, an audio console, a black-box stage, and a standing audience.",
    coreValue: "Transparent translation from sound to image.",
    tension: "Data can explain music without replacing its physical force.",
    message: "Rhythm becomes scale; frequency becomes colour.",
    beats: [
      {
        slot: "hero",
        label: "Measure 01",
        title: "The performer enters the spectrum.",
        caption: "A percussionist moves between coloured light bars in a dark room.",
        ratio: "16 / 10",
      },
      {
        slot: "tactile",
        label: "Notation 02",
        title: "The track leaves physical evidence.",
        caption: "A die-cut pass, spectrogram film, and tuning fork sit on score stock.",
        ratio: "3 / 2",
      },
      {
        slot: "spatial",
        label: "Amplitude 03",
        title: "The stage becomes the waveform.",
        caption: "Luminous bars rise across a black-box concert stage at measured heights.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Resonance 04",
        title: "Frequency occupies the hall.",
        caption: "Suspended resonator plates form a luminous spiral above the performance floor.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Pulse 05",
        title: "Impact becomes visible.",
        caption: "A drum membrane flexes under a mallet at the instant of contact.",
        ratio: "1 / 1",
      },
      {
        slot: "editorialB",
        label: "Score 06",
        title: "Every colour has a source.",
        caption: "A rehearsal sheet pairs BPM, key, and frequency bands with three approved hues.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Console 07",
        title: "The meters lead the light.",
        caption: "Real audio levels on a mixing desk correspond to the bars visible behind it.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialD",
        label: "Finale 08",
        title: "One frequency remains.",
        caption: "Audience silhouettes face a stage reduced to the final dominant colour band.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["Pulse", "Translation", "Performance", "Final frequency"],
    mobileInteraction:
      "Scrub a score timeline; image height follows measured amplitude and colour changes only at a documented frequency shift.",
  },
  "79w": {
    slug: "79w",
    layout: "westbound-line",
    worldview:
      "Regional travel between local transit and air routes becomes one continuous electric service.",
    setting:
      "A blue-hour terminal, an electric coach, a charging stop, and arrival on foot in the next city.",
    coreValue: "Continuity, legibility, and calm movement.",
    tension: "A journey promises progress but must make transfer and charging pauses honest.",
    message: "The distance between cities should feel like one connected line.",
    beats: [
      {
        slot: "hero",
        label: "79W / 00",
        title: "Westbound begins before sunrise.",
        caption: "An electric regional coach waits beneath an orange line at a concrete terminal.",
        ratio: "21 / 9",
      },
      {
        slot: "tactile",
        label: "79W / 01",
        title: "The service fits in the hand.",
        caption:
          "A rider card, transit panel, durable vinyl, and charging strip share one route code.",
        ratio: "3 / 2",
      },
      {
        slot: "spatial",
        label: "79W / 02",
        title: "The line organises the hub.",
        caption: "A continuous westbound marker links platform, waiting area, and vehicle door.",
        ratio: "21 / 8",
      },
      {
        slot: "context",
        label: "79W / 03",
        title: "The first rider approaches.",
        caption: "An early commuter walks toward the coach at a blue-hour regional terminal.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "79W / 04",
        title: "Departure begins with inspection.",
        caption: "The driver checks tyres, lights, and the live route display before boarding.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "79W / 05",
        title: "Charge becomes a visible stop.",
        caption: "A connector locks into the coach while the platform strip shows a paused state.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "79W / 06",
        title: "The route crosses open distance.",
        caption: "Passengers face a wide regional landscape through the quiet coach interior.",
        ratio: "16 / 9",
      },
      {
        slot: "editorialD",
        label: "79W / 07",
        title: "The line ends in walking.",
        caption: "A rider leaves the arrival platform and continues into the next city.",
        ratio: "3 / 2",
      },
    ],
    chapterLabels: ["Board", "Travel", "Pause to charge", "Arrive"],
    mobileInteraction:
      "Snap through the westbound journey horizontally; the persistent route line bends at transfer and visibly pauses during charge.",
  },
  tidehold: {
    slug: "tidehold",
    layout: "tide-datum",
    worldview: "Hospitality and shoreline restoration are measured as one waterfront system.",
    setting:
      "A low marsh hotel, a tidal boardwalk, a habitat field station, and the same shoreline at night.",
    coreValue: "A stay must leave room for ecological return.",
    tension: "Guest comfort occupies the same edge that a living shoreline needs to reclaim.",
    message: "Good hospitality gives the waterline space to move.",
    beats: [
      {
        slot: "hero",
        label: "High water 01",
        title: "The hotel holds above the reeds.",
        caption: "A low waterfront building sits within marsh water at high tide.",
        ratio: "21 / 10",
      },
      {
        slot: "tactile",
        label: "Materials 02",
        title: "Salt reaches every touchpoint.",
        caption:
          "Weathered brass, linen, salt-textured paper, and a habitat record share one table.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Boardwalk 03",
        title: "Circulation avoids the habitat.",
        caption:
          "A timber path threads above a restored wetland without cutting through the reeds.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Reading 04",
        title: "The guest meets the datum.",
        caption: "A naturalist and guest record evening tide height from a marsh platform.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Low water 05",
        title: "The same shore exposes its work.",
        caption: "At low tide, the hotel view reveals mudflat channels and new plant growth.",
        ratio: "21 / 9",
      },
      {
        slot: "editorialB",
        label: "Arrival 06",
        title: "Check-in begins with field knowledge.",
        caption: "A guest receives a room key and current habitat guide at the same counter.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Restoration 07",
        title: "The shoreline is actively returned.",
        caption: "A local crew plants reeds along a measured section of the bank.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialD",
        label: "Night tide 08",
        title: "The habitat remains after service ends.",
        caption: "One warm room window faces a dark, undisturbed marsh at night.",
        ratio: "21 / 9",
      },
    ],
    chapterLabels: ["High water", "Guest ritual", "Restoration", "Night habitat"],
    mobileInteraction:
      "Drag a horizontal tide datum to compare high and low water; hospitality stays above it and habitat evidence remains below.",
  },
  offsort: {
    slug: "offsort",
    layout: "batch-stack",
    worldview:
      "Food rejected by cosmetic standards becomes a transparent pantry system with a visible next route.",
    setting: "A farm sorting table, a preservation kitchen, a refill market, and a communal meal.",
    coreValue: "Useful material is named before it is styled.",
    tension: "Retail expects visual perfection while circular value begins with irregular supply.",
    message: "The useful part is never the leftover part.",
    beats: [
      {
        slot: "hero",
        label: "Batch 01",
        title: "Irregular produce reaches the counter.",
        caption: "Reusable jars and visibly imperfect vegetables fill a working market display.",
        ratio: "4 / 5",
      },
      {
        slot: "tactile",
        label: "Batch 02",
        title: "The source stays on the pack.",
        caption:
          "A batch marker, crate timber, reusable label, and rescued produce show handling wear.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Batch 03",
        title: "The market sorts without hiding.",
        caption: "Open crates and refill vessels organise a warm pantry by source and process.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Batch 04",
        title: "The rescued input becomes a meal.",
        caption: "A communal kitchen prepares dinner from preserved and fresh irregular produce.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Batch 05",
        title: "Value begins at harvest.",
        caption: "A farm worker gathers crooked vegetables into a clearly dated field crate.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Batch 06",
        title: "Sorting records the reason.",
        caption: "Produce is separated by use route rather than cosmetic grade on a working line.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialC",
        label: "Batch 07",
        title: "Preservation extends the route.",
        caption:
          "A cook fills returnable jars while the source crate remains visible behind the bench.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialD",
        label: "Batch 08",
        title: "The empty pack keeps moving.",
        caption: "Washed jars and folded crates return through the same market counter.",
        ratio: "3 / 2",
      },
    ],
    chapterLabels: ["Rescue", "Preserve", "Share", "Return"],
    mobileInteraction:
      "Peel a vertical stack of batch labels from source to return; each label reveals the next photograph and its real route.",
  },
  horalis: {
    slug: "horalis",
    layout: "circadian-dial",
    worldview:
      "A compact skincare ritual follows local light and sleep windows rather than an expanding shelf of concerns.",
    setting:
      "An overnight flight, an airport lounge, a hotel room, and the first dawn in a new time zone.",
    coreValue: "Fewer actions, timed clearly.",
    tension: "The traveller has arrived while the body still follows another clock.",
    message: "Skin keeps local time even while the body crosses it.",
    beats: [
      {
        slot: "hero",
        label: "Local 00:00",
        title: "The routine begins on a dial.",
        caption: "Three frosted vials sit across a machined twenty-four-hour aluminium face.",
        ratio: "3 / 4",
      },
      {
        slot: "tactile",
        label: "Dose 02:00",
        title: "Quantity remains fixed.",
        caption: "Frosted glass, a precision cap, and a measured tray hold one night dose.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Transit 05:00",
        title: "The clock becomes a place.",
        caption: "A circular airport skincare bar is organised by local time and available light.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Window 06:00",
        title: "The traveller reads the new light.",
        caption: "A tired passenger uses one compact step beside an airport window.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialA",
        label: "Crossing 23:00",
        title: "Two clocks share the cabin.",
        caption: "A plane window, wristwatch, and dim cabin reveal conflicting local times.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialB",
        label: "Reset 07:00",
        title: "The mirror shows the distance.",
        caption:
          "A traveller faces a hotel mirror while the local-time card sits beside the basin.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Action 07:05",
        title: "One window, one action.",
        caption:
          "A fingertip dispenses the stated amount while the dial points to the current window.",
        ratio: "1 / 1",
      },
      {
        slot: "editorialD",
        label: "Rest 21:30",
        title: "The body catches the room.",
        caption:
          "Curtains close over the destination skyline as the final vial returns to its tray.",
        ratio: "16 / 9",
      },
    ],
    chapterLabels: ["Crossing", "Local light", "Measured action", "Rest"],
    mobileInteraction:
      "Rotate a twenty-four-hour dial to select each photograph; dosage remains pinned while light and routine window change.",
  },
  "selv-00": {
    slug: "selv-00",
    layout: "pattern-table",
    worldview:
      "A garment remains open to repair, transfer, and reconstruction throughout its life.",
    setting:
      "A pattern room, an industrial repair atelier, a parts library, and two wearers in the city.",
    coreValue: "Visible intervention as provenance.",
    tension: "Fashion sells completion while a durable garment must remain unfinished.",
    message: "A seam that can reopen gives the garment another future.",
    beats: [
      {
        slot: "hero",
        label: "State /04",
        title: "The garment carries its changes.",
        caption:
          "A model wears a modular black piece with yellow and oxide-red repaired components.",
        ratio: "3 / 4",
      },
      {
        slot: "tactile",
        label: "Seam /02",
        title: "The intervention stays legible.",
        caption: "A replaceable seam, repair tab, and numbered component meet in close view.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Library /03",
        title: "Parts wait for another life.",
        caption:
          "An industrial atelier displays garment panels, fasteners, thread, and tools by code.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Wear /05",
        title: "Repair returns to movement.",
        caption:
          "The altered garment is worn through a raw industrial passage rather than displayed as an object.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "State /00",
        title: "The base begins unfinished.",
        caption:
          "The original garment hangs beside its flat pattern and empty intervention record.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Damage /01",
        title: "Use creates the next instruction.",
        caption: "A torn elbow and stressed seam are documented on the wearer before repair.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Repair /02",
        title: "The new seam names itself.",
        caption: "A maker stitches the damaged panel with contrast thread and adds the next code.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialD",
        label: "Transfer /06",
        title: "History reaches another owner.",
        caption: "A second wearer scans the passport while every earlier seam remains visible.",
        ratio: "4 / 5",
      },
    ],
    chapterLabels: ["Base /00", "Damage", "Intervention", "Next owner"],
    mobileInteraction:
      "Follow a vertical seam path; tapping a code opens its photographed state without hiding earlier repairs.",
  },
  "tessera-live": {
    slug: "tessera-live",
    layout: "live-nine",
    worldview: "Nine rooms hold many artistic tempos while one centre remains visibly live.",
    setting:
      "A performing-arts campus moving from rehearsal and setup to audience arrival and the empty stage after release.",
    coreValue: "Difference held inside a recognisable shared structure.",
    tension: "An institution needs unity without flattening theatre, dance, music, and gathering.",
    message: "Many rooms can move as one living season.",
    beats: [
      {
        slot: "hero",
        label: "Tile 05 / Dance",
        title: "The centre turns live.",
        caption: "A dancer crosses a precisely lit nine-cell stage grid.",
        ratio: "16 / 8",
      },
      {
        slot: "tactile",
        label: "Tile 01 / Entry",
        title: "The grid fits the audience journey.",
        caption: "Ticket, programme, and laminate are assembled from blank modular tiles.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Tile 09 / Facade",
        title: "The building broadcasts its state.",
        caption: "A nine-tile LED facade shows which campus room is active.",
        ratio: "21 / 9",
      },
      {
        slot: "context",
        label: "Tile 05 / Season",
        title: "Nine fragments share one instant.",
        caption: "Simultaneous performer views form a single live campaign image.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialA",
        label: "Tile 02 / Rehearsal",
        title: "The day begins without an audience.",
        caption: "Performers mark positions across an unlit rehearsal-room floor.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Tile 03 / Sound",
        title: "Another room keeps another tempo.",
        caption: "A small ensemble completes soundcheck while the auditorium remains empty.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Tile 04 / Setup",
        title: "The live state is built by hand.",
        caption: "A technician focuses one lighting fixture above the nine-cell floor.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialD",
        label: "Tile 05 / Release",
        title: "The centre stays after the crowd.",
        caption: "The post-show stage is empty except for one illuminated central tile.",
        ratio: "16 / 9",
      },
    ],
    chapterLabels: ["Rehearse", "Build live", "Gather", "Release"],
    mobileInteraction:
      "Use a persistent three-by-three pager; swipe one tile at a time while the active room always returns to the centre.",
  },
  backmatter: {
    slug: "backmatter",
    layout: "evidence-ledger",
    worldview: "Documentary evidence remains visible beside the emotional story it supports.",
    setting:
      "A field interview, an archive, an editing room, a verification desk, and a cinema source wall.",
    coreValue: "Accountability without sacrificing human continuity.",
    tension: "Immersion asks the viewer to trust; evidence asks the viewer to inspect.",
    message: "Context belongs inside the picture.",
    beats: [
      {
        slot: "hero",
        label: "Claim 01",
        title: "The edit begins with evidence open.",
        caption: "A documentary editor reviews footage beside the records that support it.",
        ratio: "3 / 2",
      },
      {
        slot: "tactile",
        label: "Source 01A",
        title: "The record has a physical trail.",
        caption:
          "A ledger, contact sheet, correction marker, and archive credential share one source number.",
        ratio: "3 / 2",
      },
      {
        slot: "spatial",
        label: "Public 01B",
        title: "The lobby becomes a source room.",
        caption: "Cinema visitors can inspect records without leaving the screening context.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Check 01C",
        title: "The drawer stays beside the frame.",
        caption: "An editor cross-checks footage on a laptop beside an open evidence drawer.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Field 02",
        title: "The source begins before the edit.",
        caption: "A field journalist records location, date, and camera position before filming.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialB",
        label: "Testimony 03",
        title: "The interview keeps its conditions.",
        caption: "The subject, recorder, room, and consent notes remain visible in one frame.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Verify 04",
        title: "A claim meets a second source.",
        caption: "A researcher confirms a detail by phone while the relevant document stays open.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialD",
        label: "Correction 05",
        title: "Revision does not erase the record.",
        caption: "A corrected caption appears beside its earlier version and timestamp.",
        ratio: "16 / 9",
      },
    ],
    chapterLabels: ["Field record", "Claim", "Verification", "Correction"],
    mobileInteraction:
      "Tap a source number to open a lateral evidence drawer; corrections stack over, rather than replace, the previous version.",
  },
  seamframe: {
    slug: "seamframe",
    layout: "assembly-grid",
    worldview: "A building communicates how it can be assembled, adapted, and taken apart.",
    setting:
      "A mass-timber yard, an active construction site, an inhabited courtyard, and a component recovery store.",
    coreValue: "Reversibility made legible to builders and residents.",
    tension: "Finished architecture hides the seams required for future change.",
    message: "A building should remember how it comes apart.",
    beats: [
      {
        slot: "hero",
        label: "Assembly 01",
        title: "The first room arrives by crane.",
        caption: "A prefabricated timber module moves into an exposed structural grid.",
        ratio: "3 / 2",
      },
      {
        slot: "tactile",
        label: "Joint 02",
        title: "The seam explains the system.",
        caption: "A reversible timber joint, passport, and registration marker meet at full scale.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Use 03",
        title: "The grid supports ordinary life.",
        caption:
          "Residents occupy an adaptable courtyard with visible seams and shared circulation.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Choice 04",
        title: "Adaptation begins with the resident.",
        caption: "An architect and resident compare a room change on a tablet inside the home.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Inventory 05",
        title: "Parts arrive with identities.",
        caption: "Numbered columns, beams, wall panels, and connectors wait in assembly order.",
        ratio: "21 / 9",
      },
      {
        slot: "editorialB",
        label: "Sequence 06",
        title: "Construction remains readable.",
        caption: "Workers join two modules while the next numbered connection stays exposed.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialC",
        label: "Change 07",
        title: "One room can leave without demolition.",
        caption: "A wall module is detached while the adjacent occupied space remains intact.",
        ratio: "16 / 10",
      },
      {
        slot: "editorialD",
        label: "Return 08",
        title: "The building becomes inventory again.",
        caption:
          "Recovered timber components are inspected and relabelled for their next assembly.",
        ratio: "3 / 2",
      },
    ],
    chapterLabels: ["Inventory", "Join", "Inhabit", "Disassemble"],
    mobileInteraction:
      "Scroll to assemble numbered modules; reverse direction to disassemble them along the same path while joints remain tappable.",
  },
  "two-shores": {
    slug: "two-shores",
    layout: "paired-ledger",
    worldview:
      "One financial record serves people whose income, family, and obligations occupy two countries.",
    setting:
      "A Canadian workday, a distant family home, a cooperative service desk, and two simultaneous dinners.",
    coreValue: "Equal language, complete fees, and shared ownership.",
    tension: "Fast transfer interfaces often hide the assumptions that create anxiety.",
    message: "Money should understand both sides of a life between places.",
    beats: [
      {
        slot: "hero",
        label: "Shore A / B",
        title: "Two hands enter one record.",
        caption: "Hands meet across a reflective harbour table beside a cooperative member card.",
        ratio: "16 / 10",
      },
      {
        slot: "tactile",
        label: "Record 01",
        title: "The fee fits beside the value.",
        caption: "A bilingual receipt, card, envelope, and paired coin trays show both currencies.",
        ratio: "3 / 2",
      },
      {
        slot: "spatial",
        label: "Service 02",
        title: "Assistance has two equal lanes.",
        caption: "A cooperative lounge aligns origin and arrival support across one counter.",
        ratio: "16 / 10",
      },
      {
        slot: "context",
        label: "Family 03",
        title: "The transfer belongs to a relationship.",
        caption: "A migrant professional video-calls family across two visible time zones.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Income 04",
        title: "The record begins with work.",
        caption: "A wage deposit appears beside the worker's Canadian pay statement.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Quote 05",
        title: "Nothing hides before confirmation.",
        caption: "The phone shows send amount, receive amount, rate, and complete fee at once.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialC",
        label: "Arrival 06",
        title: "The second shore sees the same status.",
        caption:
          "A family member receives the transfer with the matching bilingual reference number.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialD",
        label: "Together 07",
        title: "Two tables share one moment.",
        caption: "Dinners begin in two countries while both phones display the completed record.",
        ratio: "16 / 9",
      },
    ],
    chapterLabels: ["Earn", "Quote", "Transfer", "Shared record"],
    mobileInteraction:
      "Stack paired origin and arrival photographs vertically around a fixed fee rail; both halves advance only when their status matches.",
  },
  coldkiln: {
    slug: "coldkiln",
    layout: "material-spec",
    worldview:
      "An unfired building material proves its value through a visible process and return route.",
    setting:
      "A mineral feedstock yard, a cold press, a testing lab, a civic facade, and a recovery pallet.",
    coreValue: "Traceable process instead of green symbolism.",
    tension:
      "Environmental claims are easy to style and difficult to verify across a material life.",
    message: "The material story begins with heat that was never used.",
    beats: [
      {
        slot: "hero",
        label: "Cycle 01",
        title: "The module begins without a kiln.",
        caption: "Unfired mineral tiles form a restrained circular stack on a cold work surface.",
        ratio: "16 / 10",
      },
      {
        slot: "tactile",
        label: "Cycle 02",
        title: "Composition remains visible.",
        caption: "Aggregate, fibre, and a cool matte face appear in a cut tile sample.",
        ratio: "1 / 1",
      },
      {
        slot: "spatial",
        label: "Cycle 03",
        title: "The module works at building scale.",
        caption: "Demountable mineral tiles cover an occupied contemporary civic facade.",
        ratio: "16 / 9",
      },
      {
        slot: "context",
        label: "Cycle 04",
        title: "Specification enters the decision.",
        caption: "An architect and site engineer compare coded samples in a material library.",
        ratio: "4 / 5",
      },
      {
        slot: "editorialA",
        label: "Press 05",
        title: "Waste becomes feedstock.",
        caption: "Mineral by-product and fibre are weighed before entering a cold press.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialB",
        label: "Cure 06",
        title: "Time replaces firing.",
        caption: "Numbered modules cure on open racks with no kiln in the production bay.",
        ratio: "21 / 9",
      },
      {
        slot: "editorialC",
        label: "Verify 07",
        title: "The claim meets the bench.",
        caption: "A technician records a physical test beside the matching module code.",
        ratio: "3 / 2",
      },
      {
        slot: "editorialD",
        label: "Return 08",
        title: "The facade becomes material again.",
        caption: "Removed tiles are inspected and strapped to a labelled return pallet.",
        ratio: "16 / 10",
      },
    ],
    chapterLabels: ["Press", "Cure", "Install", "Return"],
    mobileInteraction:
      "Move around a four-stage cycle rather than a flat feed; each stage can reverse to reveal its photographed return path.",
  },
} satisfies Record<PersonalProjectWorldSlug, PersonalProjectWorld>;

export function getPersonalProjectWorld(slug: string): PersonalProjectWorld | undefined {
  return personalProjectWorlds[slug as PersonalProjectWorldSlug];
}

export function getPersonalProjectWorldEntries() {
  return personalProjectWorldSlugs.map((slug) => personalProjectWorlds[slug]);
}
