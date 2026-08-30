const projectTitleLockups: Record<string, readonly string[]> = {
  afterimage: ["AFTER", "IMAGE"],
  "memory-type": ["기억의", "활자"],
  "field-notes-37": ["FIELD", "NOTES 37"],
  "last-letter": ["THE LAST", "LETTER"],
  "tactile-forecast": ["TACTILE", "FORECAST"],
  "night-index": ["NIGHT", "INDEX"],
  "public-memory": ["PUBLIC", "MEMORY"],
  "soft-machine": ["SOFT", "MACHINE"],
  "signal-noise": ["SIGNAL /", "NOISE"],
  "chroma-tempo": ["CHROMA", "TEMPO"],
  "79w": ["79W"],
  tidehold: ["TIDEHOLD"],
  offsort: ["OFFSORT"],
  horalis: ["HORALIS"],
  "selv-00": ["SELV/00"],
  "tessera-live": ["TESSERA", "LIVE"],
  backmatter: ["BACK", "MATTER"],
  seamframe: ["SEAM", "FRAME"],
  "two-shores": ["TWO", "SHORES"],
  coldkiln: ["COLD", "KILN"],
};

const projectStatementLockups: Record<string, readonly string[]> = {
  afterimage: ["An image does not end", "when the eye looks away."],
  "memory-type": ["A neighbourhood can survive", "inside the shape", "of a letter."],
  "field-notes-37": ["Life persists", "in the smallest interval."],
  "last-letter": ["Some sentences remain alive", "because they never arrive."],
  "tactile-forecast": ["A surface remembers pressure", "before it remembers colour."],
  "night-index": ["The night is catalogued", "through posture, shadow, and blue."],
  "public-memory": ["A city speaks through the routes", "people repeat together."],
  "soft-machine": ["What if a machine could remember", "the touch that shaped it?"],
  "signal-noise": ["A broken signal can still carry", "a precise message."],
  "chroma-tempo": ["Rhythm becomes scale.", "Frequency becomes colour."],
  "79w": ["The distance between cities", "should feel like one connected line."],
  tidehold: ["A stay at the waterline", "should give the shoreline room to return."],
  offsort: ["The useful part should never", "be treated like the leftover part."],
  horalis: ["Skin keeps local time,", "even while the body crosses it."],
  "selv-00": ["A garment is not finished", "while its seams can open again."],
  "tessera-live": ["Many rooms can move", "as one living season."],
  backmatter: ["Context is not outside the story.", "It is part of the picture."],
  seamframe: ["A building should remember", "how it can come apart."],
  "two-shores": ["Money should understand both sides", "of a life lived between places."],
  coldkiln: ["The material story begins", "with the heat that was never used."],
};

export function getProjectTitleLockup(slug: string, fallback: string): readonly string[] {
  return projectTitleLockups[slug] ?? [fallback];
}

export function getProjectStatementLockup(slug: string, fallback: string): readonly string[] {
  return projectStatementLockups[slug] ?? [fallback];
}
