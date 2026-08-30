export type ProjectChapter = "premise" | "system" | "applications" | "material" | "motion";

export type ProjectChoreographyFamily =
  | "press-archive"
  | "sensory-editorial"
  | "public-signal"
  | "product-ritual"
  | "evidence-infrastructure";

export type ProjectChoreography = {
  family: ProjectChoreographyFamily;
  familyLabel: string;
  signatureLabel: string;
  openingCue: string;
  closingCue: string;
  sequence: readonly ProjectChapter[];
};

const projectChoreography: Record<string, ProjectChoreography> = {
  afterimage: {
    family: "press-archive",
    familyLabel: "Press sheet / two plates",
    signatureLabel: "Registration 02–04%",
    openingCue: "Begin with the drift.",
    closingCue: "The plates align only at the exit.",
    sequence: ["system", "applications", "premise", "motion", "material"],
  },
  "memory-type": {
    family: "press-archive",
    familyLabel: "Archive drawer / vernacular type",
    signatureLabel: "Collected stroke 14",
    openingCue: "Begin with the evidence of one stroke.",
    closingCue: "Every letter returns to its street.",
    sequence: ["premise", "system", "material", "applications", "motion"],
  },
  "field-notes-37": {
    family: "press-archive",
    familyLabel: "Specimen ledger / observation",
    signatureLabel: "Field record 37",
    openingCue: "Begin with the coordinate.",
    closingCue: "The last field note remains open.",
    sequence: ["premise", "material", "system", "applications", "motion"],
  },
  "last-letter": {
    family: "press-archive",
    familyLabel: "Correspondence file / undelivered",
    signatureLabel: "Routing copy 01",
    openingCue: "Begin with the fold.",
    closingCue: "The letter leaves a final crease.",
    sequence: ["premise", "applications", "system", "material", "motion"],
  },
  "tactile-forecast": {
    family: "sensory-editorial",
    familyLabel: "Material forecast / pressure",
    signatureLabel: "Surface reading 08",
    openingCue: "Let touch arrive before colour.",
    closingCue: "The surface keeps the pressure.",
    sequence: ["material", "system", "premise", "applications", "motion"],
  },
  "night-index": {
    family: "sensory-editorial",
    familyLabel: "Quarterly index / blue hour",
    signatureLabel: "Nocturne 06",
    openingCue: "Enter through the image, not the caption.",
    closingCue: "Blue closes like an aperture.",
    sequence: ["applications", "premise", "system", "motion", "material"],
  },
  "soft-machine": {
    family: "sensory-editorial",
    familyLabel: "Material laboratory / memory",
    signatureLabel: "Pressure sample 08",
    openingCue: "Hold the datum. Let the form breathe.",
    closingCue: "The datum survives the touch.",
    sequence: ["system", "material", "premise", "motion", "applications"],
  },
  "chroma-tempo": {
    family: "sensory-editorial",
    familyLabel: "Live score / frequency",
    signatureLabel: "BPM → scale → colour",
    openingCue: "Start on the beat.",
    closingCue: "Every colour resolves to the score.",
    sequence: ["motion", "system", "applications", "premise", "material"],
  },
  "public-memory": {
    family: "public-signal",
    familyLabel: "Civic route / shared memory",
    signatureLabel: "Line P7",
    openingCue: "Read the street in walking order.",
    closingCue: "The route ends where another begins.",
    sequence: ["premise", "applications", "system", "motion", "material"],
  },
  "signal-noise": {
    family: "public-signal",
    familyLabel: "Broadcast desk / fixed information",
    signatureLabel: "Channel 03",
    openingCue: "Keep the programme layer still.",
    closingCue: "The message remains after the signal breaks.",
    sequence: ["system", "motion", "premise", "applications", "material"],
  },
  "79w": {
    family: "public-signal",
    familyLabel: "Regional line / westbound",
    signatureLabel: "Route 79W",
    openingCue: "Follow one line across every handoff.",
    closingCue: "The line parks, but never disconnects.",
    sequence: ["applications", "system", "premise", "motion", "material"],
  },
  "tessera-live": {
    family: "public-signal",
    familyLabel: "Performing campus / live nine",
    signatureLabel: "8 fixed + 1 live",
    openingCue: "The centre changes. The rooms hold.",
    closingCue: "The live tile returns the campus to stillness.",
    sequence: ["applications", "premise", "motion", "system", "material"],
  },
  tidehold: {
    family: "product-ritual",
    familyLabel: "Waterline stay / reciprocal use",
    signatureLabel: "Tide datum 01",
    openingCue: "Check the shoreline before check-in.",
    closingCue: "The guest leaves; the waterline remains.",
    sequence: ["premise", "material", "applications", "system", "motion"],
  },
  offsort: {
    family: "product-ritual",
    familyLabel: "Pantry batch / whole crop",
    signatureLabel: "Batch, not defect",
    openingCue: "Name the batch before the product.",
    closingCue: "Nothing useful exits as leftover.",
    sequence: ["applications", "material", "premise", "system", "motion"],
  },
  horalis: {
    family: "product-ritual",
    familyLabel: "Travel ritual / local time",
    signatureLabel: "24H / one action",
    openingCue: "Begin with the next useful hour.",
    closingCue: "The dial stops at the body’s time.",
    sequence: ["premise", "applications", "motion", "material", "system"],
  },
  "selv-00": {
    family: "product-ritual",
    familyLabel: "Repair table / open seam",
    signatureLabel: "Pattern state / 00",
    openingCue: "Open the seam before naming the garment.",
    closingCue: "A new repair becomes the next pattern state.",
    sequence: ["material", "applications", "system", "premise", "motion"],
  },
  backmatter: {
    family: "evidence-infrastructure",
    familyLabel: "Evidence desk / claim and source",
    signatureLabel: "Record + revision",
    openingCue: "Place the source beside the claim.",
    closingCue: "The context stays inside the picture.",
    sequence: ["premise", "system", "applications", "material", "motion"],
  },
  seamframe: {
    family: "evidence-infrastructure",
    familyLabel: "Assembly record / reversible joint",
    signatureLabel: "Joint SF–04",
    openingCue: "Show the joint before the building.",
    closingCue: "The last drawing is a path back apart.",
    sequence: ["system", "material", "applications", "premise", "motion"],
  },
  "two-shores": {
    family: "evidence-infrastructure",
    familyLabel: "Paired ledger / two lives",
    signatureLabel: "Left = right",
    openingCue: "Keep both shores on the same baseline.",
    closingCue: "The transfer ends with two complete records.",
    sequence: ["applications", "premise", "system", "material", "motion"],
  },
  coldkiln: {
    family: "evidence-infrastructure",
    familyLabel: "Material passport / no kiln",
    signatureLabel: "Press / cure / return",
    openingCue: "Account for the heat that was never used.",
    closingCue: "Return is part of the specification.",
    sequence: ["material", "system", "applications", "motion", "premise"],
  },
};

export function getProjectChoreography(slug: string): ProjectChoreography {
  return projectChoreography[slug] ?? projectChoreography.afterimage;
}
