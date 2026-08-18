import { createFileRoute } from "@tanstack/react-router";
import { Fragment, type ComponentType } from "react";

import { MatLayout } from "@/components/MatLayout";
import {
  BackmatterWorld,
  ColdkilnWorld,
  SeamframeWorld,
  TesseraLiveWorld,
  TwoShoresWorld,
} from "@/components/poster-studies/BrandWorldsCivic";
import {
  HoralisWorld,
  OffsortWorld,
  SelvWorld,
  SeventyNineWorld,
  TideholdWorld,
} from "@/components/poster-studies/BrandWorldsConsumer";
import {
  AfterimageWorld,
  ChromaTempoWorld,
  FieldNotesWorld,
  LastLetterWorld,
  MemoryTypeWorld,
  NightIndexWorld,
  PublicMemoryWorld,
  SignalNoiseWorld,
  SoftMachineWorld,
  TactileWorld,
} from "@/components/poster-studies/PosterWorlds";
import { PosterProject, type PosterProjectProps } from "@/components/poster-studies/PosterProject";

export const Route = createFileRoute("/poster-studies")({
  head: () => ({
    meta: [
      { title: "Twenty Visual Worlds — Isaac Sohn" },
      {
        name: "description",
        content:
          "Twenty original art direction and fictional brand systems spanning culture, mobility, hospitality, publishing, finance, architecture, fashion, and material design.",
      },
      { property: "og:title", content: "Twenty Visual Worlds — Isaac Sohn" },
      {
        property: "og:description",
        content:
          "A collection of twenty self-initiated visual worlds and fictional brand case studies by Isaac Sohn.",
      },
    ],
  }),
  component: PosterStudies,
});

type ProjectDefinition = Omit<PosterProjectProps, "visual"> & {
  Visual: ComponentType;
};

type ProjectChapter = {
  number: string;
  title: string;
  description: string;
  projects: ProjectDefinition[];
};

const chapters: ProjectChapter[] = [
  {
    number: "I",
    title: "Matter & Memory",
    description:
      "Print is treated as evidence: ink drifts, language is collected, specimens are catalogued, letters remain unsent, and paper remembers pressure.",
    projects: [
      {
        id: "afterimage",
        index: "01",
        projectLabel: "Self-initiated art direction / 2026",
        title: "AFTERIMAGE",
        discipline: "Scan-punk / Risograph festival identity",
        statement: "An image does not end when the eye looks away.",
        description:
          "A two-ink cultural campaign built from cobalt, fluorescent orange, halftone density, and controlled registration drift. Every application behaves like a second pass through the press, leaving a physical trace rather than applying a decorative grain filter.",
        rule: "Every repeated form shifts 2–4% on the second colour plate; information remains fixed and legible.",
        palette: [
          { name: "Cobalt", className: "bg-[#1948cb]" },
          { name: "Fluorescent orange", className: "bg-[#ff5a36]" },
          { name: "Uncoated stock", className: "bg-[#f8ead6]" },
        ],
        deliverables: ["Poster series", "Festival programme", "Admission ticket", "Motion loop"],
        Visual: AfterimageWorld,
        layout: "feature",
      },
      {
        id: "memory-type",
        index: "02",
        projectLabel: "Self-initiated art direction / 2026",
        title: "기억의 활자",
        titleLang: "ko",
        discipline: "Vernacular Hangul / Community archive",
        statement: "A neighbourhood can survive inside the shape of a letter.",
        description:
          "A modular Hangul system that studies awnings, receipts, handwritten notices, and fading walls as living typographic evidence. The project avoids generic ‘Korean’ decoration and instead builds a new character set from baseline shifts, missing strokes, and the speed of the hand.",
        rule: "Each glyph combines one collected stroke, one modular block, and one documented absence.",
        palette: [
          { name: "Paper", className: "bg-[#eee5d2]" },
          { name: "Ink", className: "bg-[#191a17]" },
          { name: "Vermilion", className: "bg-[#b73527]" },
          { name: "Archive blue", className: "bg-[#394f69]" },
        ],
        deliverables: ["Exhibition poster", "Archive folder", "Wall labels", "Digital index"],
        Visual: MemoryTypeWorld,
        layout: "reverse",
      },
      {
        id: "field-notes-37",
        index: "03",
        projectLabel: "Self-initiated art direction / 2026",
        title: "FIELD NOTES 37",
        discipline: "Visual index / Speculative bio-design",
        statement: "Life persists in the smallest interval.",
        description:
          "A fictional natural-history identity for 37 forms of life found in the seams of a city. Coordinates, weather, collection time, and missing data are not ornamental microtype; each notation maps to a specimen, a location, or an intentional gap in the archive.",
        rule: "One specimen, one coordinate, one status code; missing observations stay visible as data.",
        palette: [
          { name: "Bone paper", className: "bg-[#e9e3d3]" },
          { name: "Acid leaf", className: "bg-[#b9ef32]" },
          { name: "Field ink", className: "bg-[#151714]" },
          { name: "Dry grass", className: "bg-[#c9d47e]" },
        ],
        deliverables: [
          "Specimen poster",
          "Field folder",
          "Classification labels",
          "Exhibition guide",
        ],
        Visual: FieldNotesWorld,
        layout: "split",
      },
      {
        id: "last-letter",
        index: "04",
        projectLabel: "Self-initiated art direction / 2026",
        title: "THE LAST LETTER",
        discipline: "Poetcore / Correspondence publishing",
        statement: "Some sentences remain alive because they never arrive.",
        description:
          "A clearly fictional literary exhibition about unsent letters and unfinished sentences. Original micro-text, marginal notes, folds, stamps, and archival codes form an intimate publishing system without inventing a false historical institution or borrowing found correspondence.",
        rule: "Every composition contains one interrupted sentence, one fold line, and one mark of attempted delivery.",
        palette: [
          { name: "Tea ivory", className: "bg-[#efe6d3]" },
          { name: "Oxblood", className: "bg-[#762b35]" },
          { name: "Faded blue", className: "bg-[#394f69]" },
          { name: "Graphite", className: "bg-[#2a2925]" },
        ],
        deliverables: ["Exhibition poster", "Letter folio", "Entry ticket", "Reading programme"],
        Visual: LastLetterWorld,
        layout: "reverse",
      },
      {
        id: "tactile-forecast",
        index: "05",
        projectLabel: "Self-initiated art direction / 2026",
        title: "TACTILE FORECAST",
        discipline: "CMF / Material direction library",
        statement: "A surface remembers pressure before it remembers colour.",
        description:
          "Eight emotional temperatures are translated into paper tone, fibre, reflectivity, and pressure. Blind embossing and close tonal shifts make quiet material luxury feel specific and physical instead of becoming another beige minimalist moodboard.",
        rule: "Each emotion receives one hue, one surface, one pressure depth, and one light response.",
        palette: [
          { name: "Plum noir", className: "bg-[#291c21]" },
          { name: "Heat", className: "bg-[#bc6d58]" },
          { name: "Warmth", className: "bg-[#d2aa8c]" },
          { name: "Stillness", className: "bg-[#9da3a2]" },
        ],
        deliverables: ["Embossed poster", "Material fan", "Sample folio", "CMF digital library"],
        Visual: TactileWorld,
        layout: "feature",
      },
    ],
  },
  {
    number: "II",
    title: "Culture & Space",
    description:
      "Two systems frame the body and the city: one through nocturnal fashion, the other through bilingual signs that belong to everyone.",
    projects: [
      {
        id: "night-index",
        index: "06",
        projectLabel: "Self-initiated art direction / 2026",
        title: "NIGHT INDEX",
        discipline: "Neo Deco / After-dark fashion editorial",
        statement: "The night is catalogued through posture, shadow, and blue.",
        description:
          "A quarterly fashion and culture journal with cool-blue depth, restrained symmetry, iris-like arches, and interrupted geometric frames. The system references Deco proportion without reproducing familiar Gatsby fans, gold borders, or period pastiche.",
        rule: "Every image is held by an arch, then interrupted once by an off-axis line or crop.",
        palette: [
          { name: "Cool blue", className: "bg-[#cfe7f6]" },
          { name: "Midnight", className: "bg-[#071a35]" },
          { name: "Cobalt shadow", className: "bg-[#335f80]" },
          { name: "Ice", className: "bg-[#dff7ff]" },
        ],
        deliverables: [
          "Campaign poster",
          "Quarterly cover",
          "Fashion film titles",
          "Story sequence",
        ],
        Visual: NightIndexWorld,
        layout: "reverse",
      },
      {
        id: "public-memory",
        index: "07",
        projectLabel: "Self-initiated art direction / 2026",
        title: "PUBLIC MEMORY",
        discipline: "Civic wayfinding / Bilingual identity",
        statement: "A city speaks through the routes people repeat together.",
        description:
          "A bilingual public-culture system for neighbourhood walks, small landmarks, and shared stories. A route code, directional arrow, and modular Korean–Latin hierarchy repeat across street signs, maps, tickets, and public notices without reducing place to a decorative motif.",
        rule: "Every object carries route P7, one directional gesture, and equal Korean–English hierarchy.",
        palette: [
          { name: "Civic yellow", className: "bg-[#f1d83d]" },
          { name: "Signal red", className: "bg-[#e9472f]" },
          { name: "Route blue", className: "bg-[#2748a8]" },
          { name: "Street black", className: "bg-[#161616]" },
        ],
        deliverables: ["Wayfinding poster", "Street sign", "Neighbourhood map", "Walk ticket"],
        Visual: PublicMemoryWorld,
        layout: "split",
      },
    ],
  },
  {
    number: "III",
    title: "Signal & Future",
    description:
      "Matter starts breathing, signals break apart, and sound becomes a measurable field of colour—three identities designed to move without losing their message.",
    projects: [
      {
        id: "soft-machine",
        index: "08",
        projectLabel: "Self-initiated art direction / 2026",
        title: "SOFT MACHINE",
        discipline: "Blotch identity / Organic chrome",
        statement: "What if a machine could remember the touch that shaped it?",
        description:
          "A speculative material laboratory positioned between silicone, chrome, and the body. One original inflated form carries the identity while calm supporting type provides contrast; the form stretches and rotates, but appears only once per composition so the effect stays iconic.",
        rule: "One living form per frame; all secondary information sits on a rigid horizontal datum.",
        palette: [
          { name: "Milk", className: "bg-[#e9e5df]" },
          { name: "Coral", className: "bg-[#ee604d]" },
          { name: "Chrome", className: "bg-[#8b8f90]" },
          { name: "Machine black", className: "bg-[#171717]" },
        ],
        deliverables: [
          "Pavilion poster",
          "Material samples",
          "Foil identity card",
          "Motion wordmark",
        ],
        Visual: SoftMachineWorld,
        layout: "feature",
      },
      {
        id: "signal-noise",
        index: "09",
        projectLabel: "Self-initiated art direction / 2026",
        title: "SIGNAL / NOISE",
        discipline: "Glitchy glam / Broadcast motion system",
        statement: "A broken signal can still carry a precise message.",
        description:
          "A visual identity for an experimental broadcast and sound night. RGB separation, scan lines, and spectral fields follow fixed channel offsets and frame intervals; the expressive interference never distorts dates, times, or essential programme information.",
        rule: "Cyan moves +3 units, magenta moves −3, lime marks decoded information; white type never shifts.",
        palette: [
          { name: "Black", className: "bg-[#050607]" },
          { name: "Cyan", className: "bg-[#00e5ff]" },
          { name: "Magenta", className: "bg-[#ff2c8c]" },
          { name: "Lime", className: "bg-[#a4ff36]" },
        ],
        deliverables: ["Hero poster", "Motion frames", "Broadcast titles", "Social loop"],
        Visual: SignalNoiseWorld,
        layout: "reverse",
      },
      {
        id: "chroma-tempo",
        index: "10",
        projectLabel: "Self-initiated art direction / 2026",
        title: "CHROMA TEMPO",
        discipline: "Micrographics / Audio-data identity",
        statement: "Rhythm becomes scale. Frequency becomes colour.",
        description:
          "A concert identity generated from one track’s 127 BPM tempo, C-minor key, duration, measure density, and frequency bands. Every number and bar has a job, turning technical micrographics into an operating manual for a live visual system rather than decorative data theatre.",
        rule: "Tempo controls rotation, amplitude controls bar height, and three frequency bands control colour.",
        palette: [
          { name: "Score paper", className: "bg-[#f0eee7]" },
          { name: "Safety orange", className: "bg-[#ff633f]" },
          { name: "Frequency cyan", className: "bg-[#11b8d2]" },
          { name: "Stage cobalt", className: "bg-[#1737b8]" },
        ],
        deliverables: [
          "Generative poster",
          "Live visual screen",
          "Spectrogram ticket",
          "Motion toolkit",
        ],
        Visual: ChromaTempoWorld,
        layout: "split",
      },
    ],
  },
  {
    number: "IV",
    title: "Brands as Systems",
    description:
      "Ten fictional organisations are designed from the inside out: a proposition, an operating rule, a verbal stance, and a visual system tested across the places where each brand would have to perform.",
    projects: [
      {
        id: "79w",
        index: "11",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "79W",
        discipline: "Electric regional mobility / Service identity",
        statement: "The distance between cities should feel like one connected line.",
        description:
          "A fictional electric mobility network built for the space between local transit and air travel. The identity turns the westbound route line into a practical organising device across vehicles, charging interfaces, rider passes, stations, and live journey information.",
        rule: "One westbound line links every touchpoint; orange signals movement, while route data stays neutral and fixed.",
        palette: [
          { name: "Transit black", className: "bg-[#171b1d]" },
          { name: "Charge orange", className: "bg-[#ff5a24]" },
          { name: "Electric mist", className: "bg-[#e7efed]" },
          { name: "Platform steel", className: "bg-[#9eb2b2]" },
        ],
        deliverables: ["Vehicle livery", "Station system", "Charging interface", "Rider pass"],
        Visual: SeventyNineWorld,
        layout: "feature",
      },
      {
        id: "tidehold",
        index: "12",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "TIDEHOLD",
        discipline: "Waterfront regeneration hotel / Hospitality identity",
        statement: "A stay at the waterline should give the shoreline room to return.",
        description:
          "A fictional hotel and tidal-restoration programme conceived as one public waterfront system. Guest rituals, habitat updates, wayfinding, amenities, and seasonal programming share a calm identity measured against the changing waterline.",
        rule: "Every composition holds a visible tide datum; amber marks hospitality and blue-grey records the living shoreline.",
        palette: [
          { name: "Deep water", className: "bg-[#26343b]" },
          { name: "Tidal amber", className: "bg-[#d69336]" },
          { name: "Salt paper", className: "bg-[#e4e8e4]" },
          { name: "Harbour mist", className: "bg-[#71858b]" },
        ],
        deliverables: ["Hotel identity", "Guest field guide", "Habitat signage", "Booking flow"],
        Visual: TideholdWorld,
        layout: "reverse",
      },
      {
        id: "offsort",
        index: "13",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "OFFSORT",
        discipline: "Circular food / Packaging and service system",
        statement: "The useful part should never be treated like the leftover part.",
        description:
          "A fictional food company that builds pantry products from cosmetically imperfect produce and by-product streams. Batch origins, preservation method, return routes, and recipe ideas are brought forward as the identity instead of hidden in sustainability fine print.",
        rule: "Every pack names the rescued input, processing method, batch number, and next route before it names a flavour.",
        palette: [
          { name: "Pantry cream", className: "bg-[#f1e5cf]" },
          { name: "Aubergine ink", className: "bg-[#41233c]" },
          { name: "Tomato signal", className: "bg-[#ef5638]" },
          { name: "Leaf green", className: "bg-[#83a747]" },
        ],
        deliverables: ["Packaging family", "Batch labels", "Return crate", "Recipe platform"],
        Visual: OffsortWorld,
        layout: "split",
      },
      {
        id: "horalis",
        index: "14",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "HORALIS",
        discipline: "Time-zone skincare / Product and digital identity",
        statement: "Skin keeps local time, even while the body crosses it.",
        description:
          "A fictional skincare system organised around travel, sleep windows, and local light rather than an endless shelf of concerns. A 24-hour dial connects compact formulas, travel kits, routine cards, and a restrained scheduling interface.",
        rule: "Each product owns one time window and one action; the dial rotates, while dosage and instructions remain fixed.",
        palette: [
          { name: "Dawn paper", className: "bg-[#e9e2d6]" },
          { name: "Night blue", className: "bg-[#263d67]" },
          { name: "Cloud silver", className: "bg-[#c6ccd0]" },
          { name: "Sunset coral", className: "bg-[#e77b6b]" },
        ],
        deliverables: ["Travel regimen", "Product family", "Routine cards", "Time-zone app"],
        Visual: HoralisWorld,
        layout: "reverse",
      },
      {
        id: "selv-00",
        index: "15",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "SELV/00",
        discipline: "Modular repair fashion / Circular identity",
        statement: "A garment is not finished while its seams can open again.",
        description:
          "A fictional fashion label whose base pieces are designed to be altered, repaired, traded, and reassembled. Visible seam codes turn care history into provenance across garments, repair studios, part libraries, and second-life certificates.",
        rule: "Every piece begins at /00; each intervention adds one visible seam code without erasing the previous state.",
        palette: [
          { name: "Workshop black", className: "bg-[#191917]" },
          { name: "Pattern paper", className: "bg-[#d9ccb7]" },
          { name: "Repair yellow", className: "bg-[#f0e52e]" },
          { name: "Oxide thread", className: "bg-[#a54d34]" },
        ],
        deliverables: ["Garment system", "Repair tags", "Parts library", "Second-life passport"],
        Visual: SelvWorld,
        layout: "feature",
      },
      {
        id: "tessera-live",
        index: "16",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "TESSERA LIVE",
        discipline: "Performing arts campus / Seasonal identity",
        statement: "Many rooms can move as one living season.",
        description:
          "A fictional performing-arts campus uniting theatre, dance, music, rehearsal, and public gathering without flattening their differences. A nine-tile mark behaves as stage plan, calendar, facade signal, and flexible frame for a changing programme.",
        rule: "Nine tiles always define the field; the centre stays live and changes colour with the programme state.",
        palette: [
          { name: "Campus blue", className: "bg-[#3137d9]" },
          { name: "Stage black", className: "bg-[#11131d]" },
          { name: "Live yellow", className: "bg-[#ffdf4f]" },
          { name: "Curtain coral", className: "bg-[#ef5b45]" },
        ],
        deliverables: ["Campus facade", "Season campaign", "Mobile schedule", "Admission system"],
        Visual: TesseraLiveWorld,
        layout: "split",
      },
      {
        id: "backmatter",
        index: "17",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "BACKMATTER",
        discipline: "Documentary journalism / Network identity",
        statement: "Context is not outside the story. It is part of the picture.",
        description:
          "A fictional documentary journalism network that keeps evidence visible while a story is watched. Source ledgers, version notes, field records, and corrections become navigable layers across streaming, cinema, publishing, and press materials.",
        rule: "Every public claim carries a source number that opens the supporting record in the same viewing context.",
        palette: [
          { name: "Archive stock", className: "bg-[#d9d3c6]" },
          { name: "Record black", className: "bg-[#11110f]" },
          { name: "Correction red", className: "bg-[#e24b35]" },
          { name: "Footnote grey", className: "bg-[#5e5a51]" },
        ],
        deliverables: [
          "Streaming platform",
          "Source ledger",
          "Cinema campaign",
          "Press credentials",
        ],
        Visual: BackmatterWorld,
        layout: "reverse",
      },
      {
        id: "seamframe",
        index: "18",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "SEAMFRAME",
        discipline: "Modular architecture / Platform identity",
        statement: "A building should remember how it can come apart.",
        description:
          "A fictional modular architecture platform connecting mass-timber components, housing layouts, resident choices, and material passports. The seam is treated as an honest, legible interface between rooms, teams, and future adaptations.",
        rule: "Every assembly shows its grid, joint, and disassembly path; the seam is never concealed by the graphic system.",
        palette: [
          { name: "Planning green", className: "bg-[#b8c49a]" },
          { name: "Frame forest", className: "bg-[#173527]" },
          { name: "Joint orange", className: "bg-[#e66e43]" },
          { name: "Drawing stock", className: "bg-[#f0eadc]" },
        ],
        deliverables: [
          "Architecture platform",
          "Construction wrap",
          "Resident interface",
          "Material passport",
        ],
        Visual: SeamframeWorld,
        layout: "split",
      },
      {
        id: "two-shores",
        index: "19",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "TWO SHORES",
        discipline: "Cross-border fintech / Cooperative identity",
        statement: "Money should understand both sides of a life lived between places.",
        description:
          "A fictional member-owned finance service for people whose income, family, and obligations cross borders. Paired forms make exchange rates, fees, language, transfer status, and shared accounts feel like one transparent record rather than two disconnected products.",
        rule: "Every transaction shows both currencies, both languages, and the complete fee before one directional action is taken.",
        palette: [
          { name: "Water mint", className: "bg-[#a8dfd3]" },
          { name: "Deep harbour", className: "bg-[#0b2c38]" },
          { name: "Transfer coral", className: "bg-[#ff6d55]" },
          { name: "Receipt cream", className: "bg-[#f8f0da]" },
        ],
        deliverables: ["Transfer app", "Member card", "Bilingual receipt", "Public campaign"],
        Visual: TwoShoresWorld,
        layout: "reverse",
      },
      {
        id: "coldkiln",
        index: "20",
        projectLabel: "Fictional brand / Self-initiated / 2026",
        title: "COLDKILN",
        discipline: "Low-carbon building material / Industrial identity",
        statement: "The material story begins with the heat that was never used.",
        description:
          "A fictional unfired mineral-material company designed to make specification, reuse, and end-of-life routes legible. The identity moves beyond a green badge by giving composition, curing method, module code, and return instructions equal visual weight.",
        rule: "Every application names the material cycle—press, cure, install, return—before it presents colour or finish.",
        palette: [
          { name: "Cold mineral", className: "bg-[#d7d5ce]" },
          { name: "Kiln black", className: "bg-[#171a19]" },
          { name: "Specification blue", className: "bg-[#2353d3]" },
          { name: "Clay oxide", className: "bg-[#a7573f]" },
        ],
        deliverables: [
          "Facade modules",
          "Specification sheets",
          "Sample library",
          "Returnable site pack",
        ],
        Visual: ColdkilnWorld,
        layout: "feature",
      },
    ],
  },
];

const allProjects = chapters.flatMap((chapter) => chapter.projects);

function PosterStudies() {
  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <div className="bg-[#efede7] text-[#171713]">
        <header className="relative overflow-hidden border-b border-black/25 px-5 py-14 sm:px-8 md:py-20 xl:px-12">
          <div className="pointer-events-none absolute -right-[0.04em] -top-[0.2em] font-mono text-[clamp(15rem,36vw,42rem)] font-black leading-none tracking-[-0.18em] text-transparent opacity-[0.07] [-webkit-text-stroke:2px_#171713]">
            20
          </div>

          <div className="relative mx-auto max-w-[1460px]">
            <div className="grid gap-12 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b23c28]">
                  Art direction + fictional brand archive / 2026
                </p>
                <h1 className="mt-5 max-w-[10ch] text-balance font-serif text-[clamp(4.7rem,11.5vw,11.5rem)] font-medium leading-[0.7] tracking-[-0.075em]">
                  Twenty Visual
                  <span className="block pl-[0.24em] italic">Worlds</span>
                </h1>
              </div>

              <div className="max-w-[470px] lg:pb-3">
                <p className="text-balance font-serif text-[clamp(1.65rem,3vw,2.7rem)] italic leading-[1.02] tracking-[-0.025em]">
                  Twenty ideas. Twenty rules. Twenty different ways to make meaning visible.
                </p>
                <p className="mt-6 max-w-[56ch] text-[13px] leading-[1.7] text-black/60">
                  A research-led collection spanning print, culture, mobility, hospitality,
                  publishing, finance, architecture, fashion, and material design. The first ten
                  explore art direction; the next ten build fictional brands from proposition to
                  operating system. Every project is self-initiated.
                </p>
              </div>
            </div>

            <div
              className="mt-14 grid h-2 grid-cols-[repeat(20,minmax(0,1fr))] md:mt-20"
              aria-hidden="true"
            >
              {[
                "bg-[#1948cb]",
                "bg-[#b73527]",
                "bg-[#b9ef32]",
                "bg-[#762b35]",
                "bg-[#bc6d58]",
                "bg-[#cfe7f6]",
                "bg-[#f1d83d]",
                "bg-[#ee604d]",
                "bg-[#050607]",
                "bg-[#1737b8]",
                "bg-[#ff5a24]",
                "bg-[#d69336]",
                "bg-[#83a747]",
                "bg-[#e77b6b]",
                "bg-[#f0e52e]",
                "bg-[#3137d9]",
                "bg-[#e24b35]",
                "bg-[#b8c49a]",
                "bg-[#a8dfd3]",
                "bg-[#2353d3]",
              ].map((tone) => (
                <span key={tone} className={tone} />
              ))}
            </div>

            <nav id="project-index" aria-label="Project index" className="mt-8 scroll-mt-16">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/50">
                Project index
              </p>
              <ol className="mt-3 grid border-t border-black/25 sm:grid-cols-2 xl:grid-cols-5">
                {allProjects.map((project) => (
                  <li
                    key={project.id}
                    className="border-b border-black/25 sm:odd:border-r xl:border-r xl:last:border-r-0"
                  >
                    <a
                      href={`#${project.id}`}
                      className="group flex min-h-16 items-center gap-3 px-3 py-3 transition-colors hover:bg-[#171713] hover:text-[#efede7] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b23c28]"
                    >
                      <span className="font-mono text-[9px] text-[#b23c28] group-hover:text-[#ff735c]">
                        {project.index}
                      </span>
                      <span
                        lang={project.titleLang}
                        className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                      >
                        {project.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-[1460px] px-5 sm:px-8 xl:px-12">
          {chapters.map((chapter, chapterIndex) => (
            <Fragment key={chapter.number}>
              {chapter.number === "IV" ? (
                <aside
                  aria-labelledby="brand-worlds-interstitial"
                  className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-[#171713] text-[#efede7] md:mt-28"
                >
                  <div className="pointer-events-none absolute -right-[0.07em] -top-[0.24em] font-mono text-[clamp(18rem,42vw,48rem)] font-black leading-none tracking-[-0.2em] text-white/[0.035]">
                    10
                  </div>
                  <div className="relative mx-auto grid min-h-[72vh] max-w-[1460px] gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-end xl:px-12">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff735c]">
                        Chapter shift / Projects 11—20
                      </p>
                      <h2
                        id="brand-worlds-interstitial"
                        className="mt-6 max-w-[10ch] text-balance font-serif text-[clamp(4.6rem,10.5vw,10.5rem)] font-medium italic leading-[0.75] tracking-[-0.07em]"
                      >
                        Brands as living systems.
                      </h2>
                    </div>

                    <div className="max-w-[470px] border-t border-white/25 pt-6 lg:mb-3">
                      <p className="text-pretty font-serif text-[clamp(1.55rem,2.7vw,2.5rem)] italic leading-[1.02]">
                        Ten fictional case studies, each built to work beyond a logo.
                      </p>
                      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/55">
                        <div>
                          <dt className="text-white">11—15</dt>
                          <dd className="mt-1">Consumer systems</dd>
                        </div>
                        <div>
                          <dt className="text-white">16—20</dt>
                          <dd className="mt-1">Civic systems</dd>
                        </div>
                        <div>
                          <dt className="text-white">10</dt>
                          <dd className="mt-1">Distinct sectors</dd>
                        </div>
                        <div>
                          <dt className="text-white">2026</dt>
                          <dd className="mt-1">Self-initiated</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="grid h-3 grid-cols-[repeat(10,minmax(0,1fr))]" aria-hidden="true">
                    {[
                      "bg-[#ff5a24]",
                      "bg-[#d69336]",
                      "bg-[#83a747]",
                      "bg-[#e77b6b]",
                      "bg-[#f0e52e]",
                      "bg-[#3137d9]",
                      "bg-[#e24b35]",
                      "bg-[#b8c49a]",
                      "bg-[#a8dfd3]",
                      "bg-[#2353d3]",
                    ].map((tone) => (
                      <span key={tone} className={tone} />
                    ))}
                  </div>
                </aside>
              ) : null}

              <section aria-labelledby={`chapter-${chapter.number}`} className="pt-16 md:pt-24">
                <header className="grid gap-5 pb-10 md:grid-cols-[1fr_1fr] md:items-end md:pb-14">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b23c28]">
                      Chapter {chapter.number} / {String(chapterIndex + 1).padStart(2, "0")}
                    </p>
                    <h2
                      id={`chapter-${chapter.number}`}
                      className="mt-3 font-serif text-[clamp(3.5rem,7.8vw,8rem)] font-medium italic leading-[0.78] tracking-[-0.055em]"
                    >
                      {chapter.title}
                    </h2>
                  </div>
                  <p className="max-w-[58ch] text-[13px] leading-[1.7] text-black/60 md:justify-self-end">
                    {chapter.description}
                  </p>
                </header>

                {chapter.projects.map(({ Visual, ...project }) => (
                  <PosterProject key={project.id} {...project} visual={<Visual />} />
                ))}
              </section>
            </Fragment>
          ))}
        </main>

        <footer className="mt-10 border-t border-black/25 bg-[#171713] px-5 py-12 text-[#efede7] sm:px-8 md:py-16 xl:px-12">
          <div className="mx-auto flex max-w-[1460px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#ff735c]">
                End of archive / 01—20
              </p>
              <p className="mt-4 max-w-[17ch] font-serif text-[clamp(2.8rem,6vw,6rem)] italic leading-[0.82] tracking-[-0.04em]">
                One rule can build an entire world.
              </p>
            </div>
            <a
              href="#project-index"
              className="w-fit border-b border-[#efede7]/50 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-[#ff735c] hover:text-[#ff735c]"
            >
              Back to project index ↑
            </a>
          </div>
        </footer>
      </div>
    </MatLayout>
  );
}
