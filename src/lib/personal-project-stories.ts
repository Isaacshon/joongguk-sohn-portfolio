import type { DesignProjectCoreMediaSlot } from "@/lib/design-project-media";

export type PersonalHeroLayout = "image-first" | "split" | "type-first" | "overlap" | "folio";

export type PersonalStoryBlock =
  | {
      type: "media";
      slot: DesignProjectCoreMediaSlot;
      width: "bleed" | "wide" | "inset";
      ratio?: string;
      align?: "start" | "center" | "end";
    }
  | {
      type: "spread";
      slots: readonly [DesignProjectCoreMediaSlot, DesignProjectCoreMediaSlot];
      split: "7-5" | "5-7" | "6-6";
      ratios?: readonly [string, string];
      keepPair?: boolean;
    }
  | {
      type: "statement";
      align: "start" | "center" | "offset" | "rail";
      scale: "quiet" | "large" | "monumental";
    }
  | {
      type: "principle";
      align: "start" | "center" | "end";
    }
  | {
      type: "method";
      layout: "editorial" | "sequence" | "contrast";
    }
  | {
      type: "material";
      layout: "specimen" | "ledger" | "bands" | "index";
    }
  | {
      type: "sources";
      layout: "compact" | "columns";
    };

export type PersonalProjectStory = {
  hero: {
    layout: PersonalHeroLayout;
    slot: DesignProjectCoreMediaSlot;
    ratio: string;
  };
  blocks: readonly PersonalStoryBlock[];
};

const stories: Record<string, PersonalProjectStory> = {
  afterimage: {
    hero: { layout: "overlap", slot: "hero", ratio: "16 / 10" },
    blocks: [
      {
        type: "spread",
        slots: ["tactile", "spatial"],
        split: "7-5",
        ratios: ["4 / 3", "4 / 5"],
        keepPair: true,
      },
      { type: "principle", align: "center" },
      { type: "media", slot: "context", width: "bleed", ratio: "16 / 9" },
      { type: "statement", align: "offset", scale: "large" },
      { type: "method", layout: "sequence" },
      { type: "material", layout: "bands" },
      { type: "sources", layout: "compact" },
    ],
  },
  "memory-type": {
    hero: { layout: "split", slot: "hero", ratio: "4 / 5" },
    blocks: [
      { type: "media", slot: "tactile", width: "inset", ratio: "1 / 1", align: "start" },
      { type: "statement", align: "rail", scale: "large" },
      { type: "spread", slots: ["spatial", "context"], split: "5-7", ratios: ["16 / 10", "4 / 5"] },
      { type: "method", layout: "editorial" },
      { type: "principle", align: "end" },
      { type: "material", layout: "specimen" },
      { type: "sources", layout: "columns" },
    ],
  },
  "field-notes-37": {
    hero: { layout: "image-first", slot: "hero", ratio: "16 / 9" },
    blocks: [
      { type: "media", slot: "context", width: "wide", ratio: "3 / 2", align: "end" },
      { type: "method", layout: "editorial" },
      {
        type: "spread",
        slots: ["tactile", "spatial"],
        split: "6-6",
        ratios: ["1 / 1", "16 / 10"],
        keepPair: true,
      },
      { type: "principle", align: "start" },
      { type: "statement", align: "offset", scale: "quiet" },
      { type: "material", layout: "index" },
      { type: "sources", layout: "compact" },
    ],
  },
  "last-letter": {
    hero: { layout: "folio", slot: "hero", ratio: "3 / 2" },
    blocks: [
      { type: "media", slot: "tactile", width: "inset", ratio: "4 / 5", align: "end" },
      { type: "principle", align: "center" },
      { type: "media", slot: "context", width: "wide", ratio: "4 / 5", align: "start" },
      { type: "statement", align: "rail", scale: "large" },
      { type: "media", slot: "spatial", width: "bleed", ratio: "16 / 9" },
      { type: "method", layout: "contrast" },
      { type: "material", layout: "specimen" },
      { type: "sources", layout: "compact" },
    ],
  },
  "tactile-forecast": {
    hero: { layout: "image-first", slot: "hero", ratio: "21 / 10" },
    blocks: [
      {
        type: "spread",
        slots: ["tactile", "context"],
        split: "7-5",
        ratios: ["1 / 1", "4 / 5"],
        keepPair: true,
      },
      { type: "statement", align: "center", scale: "large" },
      { type: "material", layout: "bands" },
      { type: "media", slot: "spatial", width: "wide", ratio: "16 / 9", align: "center" },
      { type: "principle", align: "start" },
      { type: "method", layout: "sequence" },
      { type: "sources", layout: "columns" },
    ],
  },
  "night-index": {
    hero: { layout: "type-first", slot: "hero", ratio: "3 / 4" },
    blocks: [
      { type: "media", slot: "context", width: "bleed", ratio: "16 / 9" },
      { type: "spread", slots: ["spatial", "tactile"], split: "7-5", ratios: ["16 / 10", "1 / 1"] },
      { type: "statement", align: "offset", scale: "monumental" },
      { type: "method", layout: "editorial" },
      { type: "material", layout: "index" },
      { type: "principle", align: "end" },
      { type: "sources", layout: "compact" },
    ],
  },
  "public-memory": {
    hero: { layout: "split", slot: "hero", ratio: "3 / 2" },
    blocks: [
      { type: "statement", align: "center", scale: "monumental" },
      { type: "spread", slots: ["tactile", "context"], split: "5-7", ratios: ["3 / 2", "4 / 5"] },
      { type: "principle", align: "start" },
      { type: "media", slot: "spatial", width: "bleed", ratio: "21 / 9" },
      { type: "method", layout: "sequence" },
      { type: "material", layout: "ledger" },
      { type: "sources", layout: "columns" },
    ],
  },
  "soft-machine": {
    hero: { layout: "overlap", slot: "hero", ratio: "4 / 5" },
    blocks: [
      {
        type: "spread",
        slots: ["tactile", "spatial"],
        split: "6-6",
        ratios: ["1 / 1", "16 / 10"],
        keepPair: true,
      },
      { type: "media", slot: "context", width: "inset", ratio: "3 / 4", align: "end" },
      { type: "statement", align: "rail", scale: "large" },
      { type: "material", layout: "specimen" },
      { type: "method", layout: "contrast" },
      { type: "principle", align: "center" },
      { type: "sources", layout: "compact" },
    ],
  },
  "signal-noise": {
    hero: { layout: "image-first", slot: "hero", ratio: "21 / 9" },
    blocks: [
      { type: "media", slot: "context", width: "bleed", ratio: "16 / 8" },
      { type: "principle", align: "center" },
      { type: "spread", slots: ["tactile", "spatial"], split: "5-7", ratios: ["1 / 1", "16 / 10"] },
      { type: "method", layout: "sequence" },
      { type: "statement", align: "start", scale: "large" },
      { type: "material", layout: "index" },
      { type: "sources", layout: "columns" },
    ],
  },
  "chroma-tempo": {
    hero: { layout: "overlap", slot: "hero", ratio: "16 / 10" },
    blocks: [
      { type: "spread", slots: ["context", "spatial"], split: "7-5", ratios: ["16 / 10", "4 / 5"] },
      { type: "material", layout: "bands" },
      { type: "statement", align: "center", scale: "monumental" },
      { type: "media", slot: "tactile", width: "wide", ratio: "3 / 2", align: "end" },
      { type: "method", layout: "sequence" },
      { type: "principle", align: "start" },
      { type: "sources", layout: "compact" },
    ],
  },
  "79w": {
    hero: { layout: "folio", slot: "hero", ratio: "21 / 9" },
    blocks: [
      { type: "media", slot: "spatial", width: "bleed", ratio: "21 / 8" },
      { type: "principle", align: "start" },
      {
        type: "spread",
        slots: ["tactile", "context"],
        split: "7-5",
        ratios: ["3 / 2", "4 / 5"],
        keepPair: true,
      },
      { type: "statement", align: "rail", scale: "large" },
      { type: "method", layout: "editorial" },
      { type: "material", layout: "ledger" },
      { type: "sources", layout: "columns" },
    ],
  },
  tidehold: {
    hero: { layout: "image-first", slot: "hero", ratio: "21 / 10" },
    blocks: [
      { type: "spread", slots: ["spatial", "tactile"], split: "7-5", ratios: ["16 / 10", "1 / 1"] },
      { type: "principle", align: "end" },
      { type: "method", layout: "contrast" },
      { type: "media", slot: "context", width: "bleed", ratio: "21 / 9" },
      { type: "statement", align: "offset", scale: "quiet" },
      { type: "material", layout: "bands" },
      { type: "sources", layout: "compact" },
    ],
  },
  offsort: {
    hero: { layout: "split", slot: "hero", ratio: "4 / 5" },
    blocks: [
      {
        type: "spread",
        slots: ["context", "tactile"],
        split: "6-6",
        ratios: ["4 / 5", "1 / 1"],
        keepPair: true,
      },
      { type: "method", layout: "sequence" },
      { type: "media", slot: "spatial", width: "wide", ratio: "16 / 9", align: "start" },
      { type: "principle", align: "center" },
      { type: "statement", align: "start", scale: "large" },
      { type: "material", layout: "index" },
      { type: "sources", layout: "columns" },
    ],
  },
  horalis: {
    hero: { layout: "type-first", slot: "hero", ratio: "3 / 4" },
    blocks: [
      { type: "media", slot: "context", width: "wide", ratio: "3 / 2", align: "end" },
      { type: "material", layout: "bands" },
      { type: "principle", align: "start" },
      { type: "spread", slots: ["tactile", "spatial"], split: "5-7", ratios: ["1 / 1", "16 / 10"] },
      { type: "statement", align: "offset", scale: "large" },
      { type: "method", layout: "editorial" },
      { type: "sources", layout: "compact" },
    ],
  },
  "selv-00": {
    hero: { layout: "overlap", slot: "hero", ratio: "3 / 4" },
    blocks: [
      {
        type: "spread",
        slots: ["tactile", "context"],
        split: "6-6",
        ratios: ["1 / 1", "4 / 5"],
        keepPair: true,
      },
      { type: "principle", align: "end" },
      { type: "media", slot: "spatial", width: "bleed", ratio: "16 / 9" },
      { type: "material", layout: "specimen" },
      { type: "statement", align: "rail", scale: "quiet" },
      { type: "method", layout: "contrast" },
      { type: "sources", layout: "columns" },
    ],
  },
  "tessera-live": {
    hero: { layout: "image-first", slot: "hero", ratio: "16 / 8" },
    blocks: [
      { type: "media", slot: "spatial", width: "bleed", ratio: "21 / 9" },
      { type: "spread", slots: ["tactile", "context"], split: "5-7", ratios: ["1 / 1", "16 / 10"] },
      { type: "statement", align: "center", scale: "large" },
      { type: "principle", align: "start" },
      { type: "method", layout: "sequence" },
      { type: "material", layout: "index" },
      { type: "sources", layout: "compact" },
    ],
  },
  backmatter: {
    hero: { layout: "folio", slot: "hero", ratio: "3 / 2" },
    blocks: [
      { type: "spread", slots: ["tactile", "context"], split: "7-5", ratios: ["3 / 2", "4 / 5"] },
      { type: "method", layout: "editorial" },
      { type: "statement", align: "offset", scale: "large" },
      { type: "media", slot: "spatial", width: "wide", ratio: "16 / 9", align: "end" },
      { type: "material", layout: "ledger" },
      { type: "principle", align: "center" },
      { type: "sources", layout: "columns" },
    ],
  },
  seamframe: {
    hero: { layout: "split", slot: "hero", ratio: "3 / 2" },
    blocks: [
      { type: "media", slot: "tactile", width: "wide", ratio: "1 / 1", align: "start" },
      { type: "spread", slots: ["context", "spatial"], split: "5-7", ratios: ["4 / 5", "16 / 9"] },
      { type: "principle", align: "start" },
      { type: "method", layout: "contrast" },
      { type: "statement", align: "rail", scale: "large" },
      { type: "material", layout: "index" },
      { type: "sources", layout: "compact" },
    ],
  },
  "two-shores": {
    hero: { layout: "type-first", slot: "hero", ratio: "16 / 10" },
    blocks: [
      { type: "statement", align: "center", scale: "large" },
      {
        type: "spread",
        slots: ["context", "spatial"],
        split: "6-6",
        ratios: ["4 / 5", "16 / 10"],
        keepPair: true,
      },
      { type: "method", layout: "sequence" },
      { type: "media", slot: "tactile", width: "inset", ratio: "3 / 2", align: "center" },
      { type: "principle", align: "end" },
      { type: "material", layout: "ledger" },
      { type: "sources", layout: "columns" },
    ],
  },
  coldkiln: {
    hero: { layout: "overlap", slot: "hero", ratio: "16 / 10" },
    blocks: [
      {
        type: "spread",
        slots: ["tactile", "spatial"],
        split: "7-5",
        ratios: ["1 / 1", "16 / 10"],
        keepPair: true,
      },
      { type: "material", layout: "specimen" },
      { type: "method", layout: "contrast" },
      { type: "principle", align: "center" },
      { type: "media", slot: "context", width: "bleed", ratio: "21 / 9" },
      { type: "statement", align: "start", scale: "quiet" },
      { type: "sources", layout: "compact" },
    ],
  },
};

export function getPersonalProjectStory(slug: string): PersonalProjectStory {
  return stories[slug] ?? stories.afterimage;
}

export function getPersonalProjectStoryEntries() {
  return Object.entries(stories);
}
