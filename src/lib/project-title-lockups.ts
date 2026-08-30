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

export function getProjectTitleLockup(slug: string, fallback: string): readonly string[] {
  return projectTitleLockups[slug] ?? [fallback];
}
