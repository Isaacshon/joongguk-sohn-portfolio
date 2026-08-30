import type { DesignProject, DesignProjectMotif } from "@/lib/design-projects";

export type CaseStudyLayout =
  | "overprint-bands"
  | "archive-cards"
  | "specimen-dossier"
  | "correspondence-scroll"
  | "material-atlas"
  | "deco-axis"
  | "route-sign"
  | "soft-datum"
  | "signal-console"
  | "score-grid"
  | "westbound-line"
  | "tide-datum"
  | "batch-stack"
  | "circadian-dial"
  | "pattern-table"
  | "live-nine"
  | "evidence-ledger"
  | "assembly-grid"
  | "paired-ledger"
  | "material-spec"
  | "kinetic-civic"
  | "quiet-fourteen"
  | "comfort-matrix"
  | "error-sixteen";

export type GalleryLayout = "cascade" | "ledger" | "diptych" | "tiles" | "sequence";

export type ProjectArtDirection = {
  layout: CaseStudyLayout;
  gallery: GalleryLayout;
  fonts: {
    display: string;
    accent: string;
    body: string;
    meta: string;
  };
  title: {
    weight: number;
    style: "normal" | "italic";
    leading: string;
    tracking: string;
    measure: string;
  };
  surfaces: {
    paper: string;
    ink: string;
    panel: string;
    dark: string;
    light: string;
    accent: string;
  };
  labels: {
    challenge: string;
    response: string;
    rule: string;
  };
  headings: {
    premise: string;
    system: string;
    applications: string;
    material: string;
    motion: string;
  };
};

const artDirectionByMotif = {
  misregister: {
    layout: "overprint-bands",
    gallery: "cascade",
    fonts: {
      display: '"Archivo Black", "Arial Black", sans-serif',
      accent: '"Instrument Serif", Georgia, serif',
      body: '"Archivo", "Arial Narrow", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".76", tracking: "-.075em", measure: "9ch" },
    surfaces: {
      paper: "#f2f0eb",
      ink: "#15171a",
      panel: "#dedad2",
      dark: "#15171a",
      light: "#fffdf8",
      accent: "#ff5a36",
    },
    labels: {
      challenge: "The drift",
      response: "The fixed plate",
      rule: "Registration law",
    },
    headings: {
      premise: "The image refuses to sit still.",
      system: "Registration becomes the signature.",
      applications: "One offset. Every scale.",
      material: "Ink behaves before it describes.",
      motion: "The second plate arrives late.",
    },
  },
  hangul: {
    layout: "archive-cards",
    gallery: "ledger",
    fonts: {
      display: '"Noto Serif KR", "Batang", serif',
      accent: '"Noto Serif KR", "Batang", serif',
      body: '"Pretendard Variable", "Malgun Gothic", sans-serif',
      meta: '"IBM Plex Mono", "Pretendard Variable", monospace',
    },
    title: { weight: 900, style: "normal", leading: ".96", tracking: "-.055em", measure: "10ch" },
    surfaces: {
      paper: "#d8ccb4",
      ink: "#191a17",
      panel: "#bcae93",
      dark: "#191a17",
      light: "#f5ecd9",
      accent: "#b73527",
    },
    labels: {
      challenge: "Collected absence",
      response: "Modular reply",
      rule: "Archive rule",
    },
    headings: {
      premise: "Memory lives in the stroke.",
      system: "A neighbourhood, indexed by hand.",
      applications: "The archive leaves the folder.",
      material: "Language becomes material.",
      motion: "Collected forms keep moving.",
    },
  },
  specimen: {
    layout: "specimen-dossier",
    gallery: "ledger",
    fonts: {
      display: '"Newsreader", Georgia, serif',
      accent: '"Newsreader", Georgia, serif',
      body: '"Source Sans 3", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 600, style: "italic", leading: ".82", tracking: "-.045em", measure: "11ch" },
    surfaces: {
      paper: "#dce2d2",
      ink: "#151714",
      panel: "#c5ceb9",
      dark: "#151714",
      light: "#f2f6ea",
      accent: "#b9ef32",
    },
    labels: {
      challenge: "Observation 01",
      response: "Classification 02",
      rule: "Field protocol",
    },
    headings: {
      premise: "Observation precedes identity.",
      system: "Every specimen earns a coordinate.",
      applications: "Field logic travels intact.",
      material: "Evidence, set in type.",
      motion: "A study advances by notation.",
    },
  },
  correspondence: {
    layout: "correspondence-scroll",
    gallery: "diptych",
    fonts: {
      display: '"EB Garamond", Garamond, Georgia, serif',
      accent: '"Instrument Serif", Georgia, serif',
      body: '"IBM Plex Sans", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 500, style: "italic", leading: ".8", tracking: "-.04em", measure: "12ch" },
    surfaces: {
      paper: "#e6d8d4",
      ink: "#2a2925",
      panel: "#cdbcb7",
      dark: "#2a2925",
      light: "#f7eeeb",
      accent: "#762b35",
    },
    labels: {
      challenge: "Undelivered",
      response: "Forwarded",
      rule: "Handling instruction",
    },
    headings: {
      premise: "Some messages outlive delivery.",
      system: "Distance leaves a visible trace.",
      applications: "A letter becomes an environment.",
      material: "Paper carries the pause.",
      motion: "The fold is the transition.",
    },
  },
  material: {
    layout: "material-atlas",
    gallery: "cascade",
    fonts: {
      display: '"Bodoni Moda", Didot, serif',
      accent: '"Bodoni Moda", Didot, serif',
      body: '"Manrope", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 600, style: "italic", leading: ".78", tracking: "-.055em", measure: "12ch" },
    surfaces: {
      paper: "#291c21",
      ink: "#f4e9df",
      panel: "#3c2a31",
      dark: "#181216",
      light: "#f4e9df",
      accent: "#bc6d58",
    },
    labels: {
      challenge: "Cold reading",
      response: "Tactile reading",
      rule: "Surface constant",
    },
    headings: {
      premise: "Touch is part of the forecast.",
      system: "Temperature becomes a surface.",
      applications: "Sensation scales into use.",
      material: "Type you almost feel.",
      motion: "Warmth travels slowly.",
    },
  },
  deco: {
    layout: "deco-axis",
    gallery: "diptych",
    fonts: {
      display: '"Bodoni Moda", Didot, serif',
      accent: '"Gilda Display", Georgia, serif',
      body: '"Barlow Condensed", "Arial Narrow", sans-serif',
      meta: '"Space Mono", ui-monospace, monospace',
    },
    title: { weight: 700, style: "normal", leading: ".72", tracking: "-.045em", measure: "9ch" },
    surfaces: {
      paper: "#cfe7f6",
      ink: "#071a35",
      panel: "#b8d8ec",
      dark: "#071a35",
      light: "#eafaff",
      accent: "#335f80",
    },
    labels: {
      challenge: "Before dark",
      response: "After illumination",
      rule: "Axial rule",
    },
    headings: {
      premise: "Night needs its own index.",
      system: "The city aligns after dark.",
      applications: "An axis for every encounter.",
      material: "Elegance held under tension.",
      motion: "Light reveals by sequence.",
    },
  },
  wayfinding: {
    layout: "route-sign",
    gallery: "sequence",
    fonts: {
      display: '"Archivo Black", "Arial Black", sans-serif',
      accent: '"Pretendard Variable", "Malgun Gothic", sans-serif',
      body: '"Pretendard Variable", "Malgun Gothic", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".78", tracking: "-.065em", measure: "12ch" },
    surfaces: {
      paper: "#f1d83d",
      ink: "#161616",
      panel: "#e8cb27",
      dark: "#161616",
      light: "#fff8cf",
      accent: "#2748a8",
    },
    labels: {
      challenge: "Origin / P1",
      response: "Destination / P7",
      rule: "Route instruction",
    },
    headings: {
      premise: "Memory needs a route.",
      system: "The street becomes the archive.",
      applications: "Public history, placed in reach.",
      material: "Clarity at civic scale.",
      motion: "Every arrow returns a story.",
    },
  },
  biomorphic: {
    layout: "soft-datum",
    gallery: "cascade",
    fonts: {
      display: '"Bricolage Grotesque", sans-serif',
      accent: '"Fraunces", Georgia, serif',
      body: '"Manrope", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 800, style: "normal", leading: ".77", tracking: "-.07em", measure: "10ch" },
    surfaces: {
      paper: "#e9e5df",
      ink: "#171717",
      panel: "#d9d5d0",
      dark: "#171717",
      light: "#f7f5f1",
      accent: "#ee604d",
    },
    labels: {
      challenge: "Yielding form",
      response: "Fixed datum",
      rule: "Soft constraint",
    },
    headings: {
      premise: "Softness can run a system.",
      system: "Organic form meets a hard datum.",
      applications: "The machine adapts to touch.",
      material: "Structure without stiffness.",
      motion: "Everything yields, then settles.",
    },
  },
  signal: {
    layout: "signal-console",
    gallery: "ledger",
    fonts: {
      display: '"Archivo Black", "Arial Black", sans-serif',
      accent: '"Space Mono", ui-monospace, monospace',
      body: '"IBM Plex Sans", sans-serif',
      meta: '"Space Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".74", tracking: "-.085em", measure: "11ch" },
    surfaces: {
      paper: "#050607",
      ink: "#f3f7f3",
      panel: "#101316",
      dark: "#050607",
      light: "#f3f7f3",
      accent: "#aeb59c",
    },
    labels: {
      challenge: "Input / Noise",
      response: "Output / Signal",
      rule: "Decode protocol",
    },
    headings: {
      premise: "Clarity survives interference.",
      system: "Noise becomes measurable.",
      applications: "The signal holds under pressure.",
      material: "Decoded in real time.",
      motion: "Channels drift. Data stays fixed.",
    },
  },
  frequency: {
    layout: "score-grid",
    gallery: "sequence",
    fonts: {
      display: '"Unbounded", sans-serif',
      accent: '"Newsreader", Georgia, serif',
      body: '"Manrope", sans-serif',
      meta: '"Space Mono", ui-monospace, monospace',
    },
    title: { weight: 800, style: "normal", leading: ".83", tracking: "-.07em", measure: "13ch" },
    surfaces: {
      paper: "#f0eee7",
      ink: "#15171a",
      panel: "#e3e0d6",
      dark: "#1737b8",
      light: "#f7f5ef",
      accent: "#ff633f",
    },
    labels: {
      challenge: "Measure 01",
      response: "Measure 02",
      rule: "Tempo constant",
    },
    headings: {
      premise: "Colour keeps the beat.",
      system: "Tempo becomes a grid.",
      applications: "One score, many stages.",
      material: "Rhythm is typographic.",
      motion: "Every interval has a pulse.",
    },
  },
  route: {
    layout: "westbound-line",
    gallery: "sequence",
    fonts: {
      display: '"Barlow", sans-serif',
      accent: '"Barlow Condensed", "Arial Narrow", sans-serif',
      body: '"Barlow", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 900, style: "normal", leading: ".68", tracking: "-.08em", measure: "6ch" },
    surfaces: {
      paper: "#171b1d",
      ink: "#e7efed",
      panel: "#22292c",
      dark: "#111416",
      light: "#eef6f4",
      accent: "#ff5a24",
    },
    labels: {
      challenge: "Stop 01 / Origin",
      response: "Stop 02 / Transfer",
      rule: "Westbound service",
    },
    headings: {
      premise: "A route is a promise.",
      system: "Westbound, precisely marked.",
      applications: "The line continues off screen.",
      material: "Distance, numbered clearly.",
      motion: "Each stop advances the story.",
    },
  },
  tide: {
    layout: "tide-datum",
    gallery: "diptych",
    fonts: {
      display: '"Instrument Serif", Georgia, serif',
      accent: '"Gilda Display", Georgia, serif',
      body: '"Manrope", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "italic", leading: ".78", tracking: "-.05em", measure: "11ch" },
    surfaces: {
      paper: "#e4e8e4",
      ink: "#26343b",
      panel: "#d2dcda",
      dark: "#26343b",
      light: "#f3f6f3",
      accent: "#d69336",
    },
    labels: {
      challenge: "Above water",
      response: "At the datum",
      rule: "Tide protocol",
    },
    headings: {
      premise: "The line between land and water holds.",
      system: "Hospitality follows the tide.",
      applications: "Calm, carried into every touchpoint.",
      material: "Space moves like water.",
      motion: "The horizon shifts by degrees.",
    },
  },
  batch: {
    layout: "batch-stack",
    gallery: "cascade",
    fonts: {
      display: '"Archivo Black", "Arial Black", sans-serif',
      accent: '"Newsreader", Georgia, serif',
      body: '"Libre Franklin", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".77", tracking: "-.075em", measure: "9ch" },
    surfaces: {
      paper: "#f1e5cf",
      ink: "#41233c",
      panel: "#e4d3b5",
      dark: "#41233c",
      light: "#fff2dc",
      accent: "#ef5638",
    },
    labels: {
      challenge: "Unsorted batch",
      response: "Visible grade",
      rule: "Packing rule",
    },
    headings: {
      premise: "Irregular goods deserve a system.",
      system: "Every batch keeps its character.",
      applications: "From crate to shelf, nothing is hidden.",
      material: "Utility with appetite.",
      motion: "Labels stack, sort, and release.",
    },
  },
  dial: {
    layout: "circadian-dial",
    gallery: "diptych",
    fonts: {
      display: '"Gilda Display", Georgia, serif',
      accent: '"Instrument Serif", Georgia, serif',
      body: '"Manrope", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".88", tracking: ".04em", measure: "12ch" },
    surfaces: {
      paper: "#e9e2d6",
      ink: "#263d67",
      panel: "#d9d6d0",
      dark: "#263d67",
      light: "#f7f1e8",
      accent: "#e77b6b",
    },
    labels: {
      challenge: "AM / Friction",
      response: "PM / Rhythm",
      rule: "Dosage axis",
    },
    headings: {
      premise: "Routine can feel ceremonial.",
      system: "Time becomes a gentle dial.",
      applications: "The day opens in measured stages.",
      material: "Quiet enough to trust.",
      motion: "Light moves the schedule.",
    },
  },
  seam: {
    layout: "pattern-table",
    gallery: "ledger",
    fonts: {
      display: '"Saira Stencil One", "Arial Black", sans-serif',
      accent: '"Barlow Condensed", "Arial Narrow", sans-serif',
      body: '"Barlow", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".7", tracking: "-.065em", measure: "8ch" },
    surfaces: {
      paper: "#191917",
      ink: "#efe7d7",
      panel: "#292824",
      dark: "#11110f",
      light: "#f5ecd9",
      accent: "#f0e52e",
    },
    labels: {
      challenge: "Before / Tear",
      response: "After / Repair",
      rule: "Seam allowance",
    },
    headings: {
      premise: "Repair begins at the seam.",
      system: "Intervention stays visible.",
      applications: "Every fix becomes a specification.",
      material: "Built like a pattern sheet.",
      motion: "The stitch traces its own logic.",
    },
  },
  tiles: {
    layout: "live-nine",
    gallery: "tiles",
    fonts: {
      display: '"Syne", sans-serif',
      accent: '"Source Serif 4", Georgia, serif',
      body: '"Manrope", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 800, style: "normal", leading: ".75", tracking: "-.075em", measure: "10ch" },
    surfaces: {
      paper: "#3137d9",
      ink: "#fff4d5",
      panel: "#252ac1",
      dark: "#11131d",
      light: "#fff4d5",
      accent: "#ffdf4f",
    },
    labels: {
      challenge: "Room 01 / Idle",
      response: "Room 05 / Live",
      rule: "Stage state",
    },
    headings: {
      premise: "A venue is always becoming live.",
      system: "Nine tiles hold one stage.",
      applications: "The programme rearranges itself.",
      material: "Culture speaks in changing blocks.",
      motion: "The grid wakes tile by tile.",
    },
  },
  footnote: {
    layout: "evidence-ledger",
    gallery: "ledger",
    fonts: {
      display: '"Source Serif 4", Georgia, serif',
      accent: '"Source Serif 4", Georgia, serif',
      body: '"Libre Franklin", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 600, style: "normal", leading: ".8", tracking: "-.045em", measure: "12ch" },
    surfaces: {
      paper: "#d9d3c6",
      ink: "#11110f",
      panel: "#c9c2b4",
      dark: "#11110f",
      light: "#eee9df",
      accent: "#e24b35",
    },
    labels: {
      challenge: "Claim 01",
      response: "Evidence 01A",
      rule: "Citation rule",
    },
    headings: {
      premise: "The proof belongs beside the claim.",
      system: "Every statement keeps its source.",
      applications: "Evidence travels with the message.",
      material: "The footnote moves forward.",
      motion: "A note expands into context.",
    },
  },
  assembly: {
    layout: "assembly-grid",
    gallery: "tiles",
    fonts: {
      display: '"Familjen Grotesk", sans-serif',
      accent: '"Source Serif 4", Georgia, serif',
      body: '"Familjen Grotesk", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 700, style: "normal", leading: ".74", tracking: "-.065em", measure: "10ch" },
    surfaces: {
      paper: "#f0eadc",
      ink: "#173527",
      panel: "#dce2ce",
      dark: "#173527",
      light: "#f8f3e8",
      accent: "#e66e43",
    },
    labels: {
      challenge: "State 00 / Loose",
      response: "State 01 / Joined",
      rule: "Assembly path",
    },
    headings: {
      premise: "A joint can explain the whole system.",
      system: "Assembly stays visible.",
      applications: "One frame, many configurations.",
      material: "Construction becomes communication.",
      motion: "Parts meet without disappearing.",
    },
  },
  exchange: {
    layout: "paired-ledger",
    gallery: "diptych",
    fonts: {
      display: '"Pretendard Variable", "Malgun Gothic", sans-serif',
      accent: '"Newsreader", Georgia, serif',
      body: '"Pretendard Variable", "Malgun Gothic", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 800, style: "normal", leading: ".78", tracking: "-.07em", measure: "11ch" },
    surfaces: {
      paper: "#a8dfd3",
      ink: "#0b2c38",
      panel: "#8fcfc1",
      dark: "#0b2c38",
      light: "#f8f0da",
      accent: "#ff6d55",
    },
    labels: {
      challenge: "Shore A / Origin",
      response: "Shore B / Arrival",
      rule: "Paired record",
    },
    headings: {
      premise: "Exchange needs two clear shores.",
      system: "Both sides see the same record.",
      applications: "Trust crosses every touchpoint.",
      material: "Two ledgers, one language.",
      motion: "Value moves. Records remain paired.",
    },
  },
  mineral: {
    layout: "material-spec",
    gallery: "tiles",
    fonts: {
      display: '"Barlow Condensed", "Arial Narrow", sans-serif',
      accent: '"League Spartan", sans-serif',
      body: '"Source Sans 3", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 900, style: "normal", leading: ".68", tracking: "-.065em", measure: "9ch" },
    surfaces: {
      paper: "#d7d5ce",
      ink: "#171a19",
      panel: "#c5c4bd",
      dark: "#171a19",
      light: "#f0efea",
      accent: "#2353d3",
    },
    labels: {
      challenge: "Heat / Avoided",
      response: "Cycle / Declared",
      rule: "Material specification",
    },
    headings: {
      premise: "Less heat. More evidence.",
      system: "The cycle is the identity.",
      applications: "Specification becomes the story.",
      material: "Material facts at full scale.",
      motion: "Press, cure, install, return.",
    },
  },
  "hm-edit": {
    layout: "kinetic-civic",
    gallery: "sequence",
    fonts: {
      display: '"Archivo", "Helvetica Neue", Arial, sans-serif',
      accent: '"Archivo", "Helvetica Neue", Arial, sans-serif',
      body: '"Archivo", "Helvetica Neue", Arial, sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 400, style: "normal", leading: ".72", tracking: "-.078em", measure: "11ch" },
    surfaces: {
      paper: "#fffaf7",
      ink: "#111111",
      panel: "#efeae5",
      dark: "#111111",
      light: "#ffffff",
      accent: "#e50010",
    },
    labels: {
      challenge: "First life / 01",
      response: "Next life / 02",
      rule: "Rewear instruction",
    },
    headings: {
      premise: "A season returns in a second light.",
      system: "Every garment keeps its next chapter.",
      applications: "Rewear enters the high street.",
      material: "History stays attached.",
      motion: "The second sun crosses the frame.",
    },
  },
  "zara-atelier": {
    layout: "quiet-fourteen",
    gallery: "diptych",
    fonts: {
      display: '"Manrope", "Helvetica Neue", Arial, sans-serif',
      accent: '"Manrope", "Helvetica Neue", Arial, sans-serif',
      body: '"Manrope", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 500, style: "normal", leading: ".82", tracking: "-.052em", measure: "16ch" },
    surfaces: {
      paper: "#ffffff",
      ink: "#050505",
      panel: "#f3f3f1",
      dark: "#050505",
      light: "#ffffff",
      accent: "#050505",
    },
    labels: {
      challenge: "Pressure / 01",
      response: "Negative space / 02",
      rule: "Atmospheric constant",
    },
    headings: {
      premise: "Air gives the silhouette its edge.",
      system: "A collection held between pressures.",
      applications: "Silence, sequenced precisely.",
      material: "Restraint reveals the construction.",
      motion: "The atmosphere moves first.",
    },
  },
  "uniqlo-life": {
    layout: "comfort-matrix",
    gallery: "ledger",
    fonts: {
      display: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
      accent: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
      body: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
      meta: '"IBM Plex Mono", ui-monospace, monospace',
    },
    title: { weight: 700, style: "normal", leading: ".86", tracking: "-.042em", measure: "14ch" },
    surfaces: {
      paper: "#ffffff",
      ink: "#111111",
      panel: "#f1f1ee",
      dark: "#111111",
      light: "#ffffff",
      accent: "#ff0000",
    },
    labels: {
      challenge: "Body / Input",
      response: "Garment / Output",
      rule: "Comfort tolerance",
    },
    headings: {
      premise: "Comfort becomes measurable.",
      system: "Daily movement, resolved as data.",
      applications: "One measure across every layer.",
      material: "Useful detail at human scale.",
      motion: "The grid responds to the body.",
    },
  },
  "prada-observation": {
    layout: "error-sixteen",
    gallery: "cascade",
    fonts: {
      display: '"Libre Caslon Display", "Times New Roman", serif',
      accent: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      body: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      meta: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
    },
    title: { weight: 400, style: "normal", leading: ".76", tracking: "-.058em", measure: "13ch" },
    surfaces: {
      paper: "#f2f1ed",
      ink: "#1b1b1b",
      panel: "#d8d7d2",
      dark: "#1b1b1b",
      light: "#ffffff",
      accent: "#7e8871",
    },
    labels: {
      challenge: "Observation / 00",
      response: "Controlled fault / 01",
      rule: "Error tolerance",
    },
    headings: {
      premise: "Precision notices its own failure.",
      system: "The error is placed, then held.",
      applications: "A fault repeats with discipline.",
      material: "Intelligence lives in the offset.",
      motion: "Registration fails on purpose.",
    },
  },
} satisfies Record<DesignProjectMotif, ProjectArtDirection>;

export function getDesignProjectArtDirection(project: DesignProject): ProjectArtDirection {
  return artDirectionByMotif[project.motif];
}

const fontHrefByMotif = {
  misregister:
    "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=Archivo+Black&family=IBM+Plex+Mono:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap",
  hangul:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Noto+Serif+KR:wght@400;700;900&display=swap",
  specimen:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Newsreader:ital,wght@0,400;0,600;1,400;1,600&family=Source+Sans+3:wght@400;600&display=swap",
  correspondence:
    "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap",
  material:
    "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;600;700&display=swap",
  deco: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Bodoni+Moda:ital,wght@0,500;0,700;1,500&family=Gilda+Display&family=Space+Mono:wght@400;700&display=swap",
  wayfinding:
    "https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Mono:wght@500;600&display=swap",
  biomorphic:
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&family=Fraunces:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;600&display=swap",
  signal:
    "https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Sans:wght@400;600&family=Space+Mono:wght@400;700&display=swap",
  frequency:
    "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Newsreader:ital,wght@0,400;1,400&family=Space+Mono:wght@400;700&family=Unbounded:wght@500;600;800&display=swap",
  route:
    "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&family=Barlow+Condensed:wght@500;700&family=IBM+Plex+Mono:wght@500;600&display=swap",
  tide: "https://fonts.googleapis.com/css2?family=Gilda+Display&family=IBM+Plex+Mono:wght@500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;600&display=swap",
  batch:
    "https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Mono:wght@500;600&family=Libre+Franklin:wght@400;600&family=Newsreader:ital,wght@0,400;1,400&display=swap",
  dial: "https://fonts.googleapis.com/css2?family=Gilda+Display&family=IBM+Plex+Mono:wght@500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;600&display=swap",
  seam: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Barlow+Condensed:wght@500;700&family=IBM+Plex+Mono:wght@500;600&family=Saira+Stencil+One&display=swap",
  tiles:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Syne:wght@600;800&display=swap",
  footnote:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Libre+Franklin:wght@400;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap",
  assembly:
    "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;600;700&family=IBM+Plex+Mono:wght@500&family=Source+Serif+4:ital,wght@0,400;1,400&display=swap",
  exchange:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Newsreader:ital,wght@0,400;1,400&display=swap",
  mineral:
    "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;900&family=IBM+Plex+Mono:wght@500;600&family=League+Spartan:wght@500;700&family=Source+Sans+3:wght@400;600&display=swap",
  "hm-edit":
    "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Black&family=IBM+Plex+Mono:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap",
  "zara-atelier":
    "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;500;600&display=swap",
  "uniqlo-life":
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700;900&display=swap",
  "prada-observation":
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Libre+Caslon+Display&display=swap",
} satisfies Record<DesignProjectMotif, string>;

export function getDesignProjectFontHref(project: DesignProject): string {
  return fontHrefByMotif[project.motif];
}
