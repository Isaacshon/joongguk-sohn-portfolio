#!/usr/bin/env node

import { createHash, randomUUID } from "node:crypto";
import { createReadStream } from "node:fs";
import { access, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

import {
  DESIGN_PROJECTS,
  DESIGN_PROJECT_SLOTS,
  EXPECTED_ASSET_COUNT,
  getDesignProjectRequiredSlots,
  getDesignProjectSlotRule,
  PROJECT_BY_SLUG,
  PROJECT_ORDER,
  RESPONSIVE_LONG_EDGES,
  SLOT_ORDER,
} from "./design-project-image-rules.mjs";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "..");
const DEFAULT_INPUT = path.join(REPO_ROOT, "tmp", "higgsfield");
const DEFAULT_OUTPUT = path.join(REPO_ROOT, "public", "generated", "design-projects");
const ACCEPTED_INPUT_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const ACCEPTED_INPUT_FORMATS = new Set(["png", "jpeg"]);
const IGNORED_INPUT_BASENAMES = new Set(["afterimage-campaign-pilot.png"]);
const OUTPUT_MEDIA_TYPES = Object.freeze({ webp: "image/webp", avif: "image/avif" });
const ASPECT_TOLERANCE = 0.035;
const MANIFEST_SCHEMA_VERSION = 1;
const SLOT_BY_INPUT_TOKEN = new Map(
  Object.keys(DESIGN_PROJECT_SLOTS).flatMap((slot) => [
    [slot.toLowerCase(), slot],
    [slot.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`), slot],
  ]),
);

const HELP = `
Higgsfield design-project asset processor

Usage (PowerShell or cmd.exe):
  node scripts/process-design-project-images.mjs [options]
  scripts\\process-design-project-images.cmd [options]

Input naming (PNG/JPEG only):
  tmp/higgsfield/<NN>-<slug>/<slug>-<NN>-<slot>.png
  Example: tmp/higgsfield/01-afterimage/afterimage-01-hero.png

Slots and default aspect ratios (project overrides are applied automatically):
  hero      4:5
  tactile   3:2
  spatial  16:9
  context   9:16
  editorial-a  4:5  (brand studies only; output slot: editorialA)
  editorial-b  3:2  (brand studies only; output slot: editorialB)
  editorial-c  4:5  (selected brand studies; output slot: editorialC)
  editorial-d 16:9  (selected brand studies; output slot: editorialD)
  editorial-e  4:5  (selected brand studies; output slot: editorialE)
  editorial-f  3:2  (selected brand studies; output slot: editorialF)

Options:
  --input <path>                Input root (default: tmp/higgsfield)
  --output <path>               Output root (default: public/generated/design-projects)
  --projects <slug,...>         Process only selected projects
  --slots <slot,...>            Process only selected slots
  --formats <webp,avif>         Output formats (default: webp,avif; WebP is required)
  --webp-quality <1-100>        Override slot WebP quality
  --avif-quality <1-100>        Override slot AVIF quality
  --concurrency <1-8>           Concurrent encodes (default: 2)
  --force                       Atomically replace existing generated outputs
  --allow-low-res               Upscale low-res sources with Lanczos3 to fill the 3200 px tier
  --allow-aspect-mismatch       Allow sources outside the 3.5% aspect-ratio tolerance
  --strict                      Treat unmatched PNG/JPEG files as an error
  --dry-run                     Validate sources only; write nothing
  --help                        Show this help

The processor never modifies or deletes source images. Existing generated files are skipped
unless --force is supplied. Writes use verified temporary files followed by an atomic rename.
`;

function parseList(raw) {
  return raw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

function readOptionValue(argv, index, option) {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${option} requires a value.`);
  }
  return value;
}

function parseInteger(raw, option, minimum, maximum) {
  const value = Number.parseInt(raw, 10);
  if (!Number.isInteger(value) || value < minimum || value > maximum) {
    throw new Error(`${option} must be an integer from ${minimum} to ${maximum}.`);
  }
  return value;
}

function parseArgs(argv) {
  const options = {
    input: DEFAULT_INPUT,
    output: DEFAULT_OUTPUT,
    projects: new Set(DESIGN_PROJECTS.map((project) => project.slug)),
    slots: new Set(Object.keys(DESIGN_PROJECT_SLOTS)),
    formats: ["webp", "avif"],
    webpQuality: undefined,
    avifQuality: undefined,
    concurrency: 2,
    force: false,
    allowLowRes: false,
    allowAspectMismatch: false,
    strict: false,
    dryRun: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];

    if (option === "--help" || option === "-h") {
      options.help = true;
    } else if (option === "--force") {
      options.force = true;
    } else if (option === "--allow-low-res") {
      options.allowLowRes = true;
    } else if (option === "--allow-aspect-mismatch") {
      options.allowAspectMismatch = true;
    } else if (option === "--strict") {
      options.strict = true;
    } else if (option === "--dry-run") {
      options.dryRun = true;
    } else if (option === "--input") {
      options.input = path.resolve(REPO_ROOT, readOptionValue(argv, index, option));
      index += 1;
    } else if (option === "--output") {
      options.output = path.resolve(REPO_ROOT, readOptionValue(argv, index, option));
      index += 1;
    } else if (option === "--projects") {
      const projects = parseList(readOptionValue(argv, index, option));
      const unknown = projects.filter((slug) => !PROJECT_BY_SLUG.has(slug));
      if (unknown.length > 0) throw new Error(`Unknown project slug(s): ${unknown.join(", ")}`);
      options.projects = new Set(projects);
      index += 1;
    } else if (option === "--slots") {
      const requestedSlots = parseList(readOptionValue(argv, index, option));
      const unknown = requestedSlots.filter((slot) => !SLOT_BY_INPUT_TOKEN.has(slot));
      if (unknown.length > 0) throw new Error(`Unknown slot(s): ${unknown.join(", ")}`);
      options.slots = new Set(requestedSlots.map((slot) => SLOT_BY_INPUT_TOKEN.get(slot)));
      index += 1;
    } else if (option === "--formats") {
      const formats = [...new Set(parseList(readOptionValue(argv, index, option)))];
      const unknown = formats.filter((format) => !(format in OUTPUT_MEDIA_TYPES));
      if (unknown.length > 0) throw new Error(`Unknown output format(s): ${unknown.join(", ")}`);
      if (!formats.includes("webp")) throw new Error("--formats must include webp.");
      options.formats = formats;
      index += 1;
    } else if (option === "--webp-quality") {
      options.webpQuality = parseInteger(readOptionValue(argv, index, option), option, 1, 100);
      index += 1;
    } else if (option === "--avif-quality") {
      options.avifQuality = parseInteger(readOptionValue(argv, index, option), option, 1, 100);
      index += 1;
    } else if (option === "--concurrency") {
      options.concurrency = parseInteger(readOptionValue(argv, index, option), option, 1, 8);
      index += 1;
    } else {
      throw new Error(`Unknown option: ${option}`);
    }
  }

  if (options.projects.size === 0) throw new Error("At least one project must be selected.");
  if (options.slots.size === 0) throw new Error("At least one slot must be selected.");
  return options;
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function relativeToRepo(filePath) {
  const relative = path.relative(REPO_ROOT, filePath);
  return relative.startsWith("..") ? toPosix(filePath) : toPosix(relative);
}

async function walkInputFiles(root) {
  if (!(await pathExists(root))) return [];

  const files = [];
  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) continue;
      if (entry.isDirectory()) await visit(entryPath);
      else if (entry.isFile()) files.push(entryPath);
    }
  }
  await visit(root);
  return files.sort((left, right) => left.localeCompare(right));
}

function parseSourceIdentity(inputRoot, filePath) {
  const extension = path.extname(filePath).toLowerCase();
  if (!ACCEPTED_INPUT_EXTENSIONS.has(extension)) return undefined;

  const relative = path.relative(inputRoot, filePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return undefined;
  const segments = relative.split(path.sep);
  const basename = path.basename(filePath, extension).toLowerCase();
  if (segments.length > 2) return undefined;

  for (const project of DESIGN_PROJECTS) {
    const directoryMatches =
      segments.length === 1 ||
      [project.slug, `${project.index}-${project.slug}`].includes(segments[0].toLowerCase());
    if (!directoryMatches) continue;

    for (const slot of getDesignProjectRequiredSlots(project.slug)) {
      const sourceTokens = new Set([
        slot.toLowerCase(),
        slot.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
      ]);
      const acceptedBasenames = new Set(
        [...sourceTokens].flatMap((token) => [
          token,
          `${project.slug}-${token}`,
          `${project.slug}--${token}`,
          `${project.slug}-${project.index}-${token}`,
          `${project.index}-${project.slug}-${token}`,
        ]),
      );
      if (acceptedBasenames.has(basename)) return { slug: project.slug, slot };
    }
  }
  return undefined;
}

async function sha256(filePath) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(filePath)) hash.update(chunk);
  return hash.digest("hex");
}

async function retryWindowsFileOperation(operation, attempts = 8) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!new Set(["EBUSY", "EPERM", "EACCES"]).has(error.code) || attempt === attempts - 1) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 40 * 2 ** attempt));
    }
  }
  throw lastError;
}

function rounded(value, places = 4) {
  const scale = 10 ** places;
  return Math.round(value * scale) / scale;
}

function formatAspect(rule) {
  return `${rule.aspectWidth}:${rule.aspectHeight}`;
}

function effectiveDimensions(metadata) {
  if (metadata.autoOrient?.width && metadata.autoOrient?.height) {
    return { width: metadata.autoOrient.width, height: metadata.autoOrient.height };
  }
  const swapsAxes = [5, 6, 7, 8].includes(metadata.orientation);
  return {
    width: swapsAxes ? metadata.height : metadata.width,
    height: swapsAxes ? metadata.width : metadata.height,
  };
}

async function inspectSource(source, options) {
  const project = PROJECT_BY_SLUG.get(source.slug);
  const rule = getDesignProjectSlotRule(source.slug, source.slot);
  const sourceStat = await stat(source.filePath);
  const metadata = await sharp(source.filePath, { failOn: "warning" }).metadata();
  const dimensions = effectiveDimensions(metadata);
  const errors = [];
  const warnings = [];

  if (!ACCEPTED_INPUT_FORMATS.has(metadata.format)) {
    errors.push(`decoded format is ${metadata.format ?? "unknown"}; expected PNG or JPEG`);
  }
  if (!dimensions.width || !dimensions.height) errors.push("width or height is unavailable");
  if ((metadata.pages ?? 1) !== 1) errors.push("animated or multi-page sources are not supported");

  let ratio;
  let aspectDelta;
  if (dimensions.width && dimensions.height) {
    ratio = dimensions.width / dimensions.height;
    const expectedRatio = rule.aspectWidth / rule.aspectHeight;
    aspectDelta = Math.abs(ratio - expectedRatio) / expectedRatio;
    if (aspectDelta > ASPECT_TOLERANCE && !options.allowAspectMismatch) {
      errors.push(
        `aspect ${dimensions.width}:${dimensions.height} differs from ${formatAspect(rule)} by ${rounded(aspectDelta * 100, 1)}%`,
      );
    } else if (aspectDelta > ASPECT_TOLERANCE) {
      warnings.push(`aspect mismatch allowed (${rounded(aspectDelta * 100, 1)}%)`);
    }

    const highTierDimensions = dimensionsForAspect(rule, rule.minLongEdge);
    const cannotFillHighTier =
      dimensions.width < highTierDimensions.width || dimensions.height < highTierDimensions.height;
    if (cannotFillHighTier && !options.allowLowRes) {
      errors.push(
        `${dimensions.width}x${dimensions.height} cannot fill the ${highTierDimensions.width}x${highTierDimensions.height} high tier without enlargement`,
      );
    } else if (cannotFillHighTier) {
      warnings.push(
        `low-resolution source allowed (${dimensions.width}x${dimensions.height}; high tier requested at ${highTierDimensions.width}x${highTierDimensions.height})`,
      );
    }
  }

  return {
    ...source,
    project,
    rule,
    sourceStat,
    sourceHash: await sha256(source.filePath),
    metadata,
    width: dimensions.width,
    height: dimensions.height,
    ratio,
    aspectDelta,
    errors,
    warnings,
  };
}

function dimensionsForAspect(rule, targetLongEdge) {
  if (rule.aspectWidth >= rule.aspectHeight) {
    return {
      width: targetLongEdge,
      height: Math.round((targetLongEdge * rule.aspectHeight) / rule.aspectWidth),
    };
  }
  return {
    width: Math.round((targetLongEdge * rule.aspectWidth) / rule.aspectHeight),
    height: targetLongEdge,
  };
}

function outputDimensions(source, targetLongEdge, allowEnlargement = false) {
  const ideal = dimensionsForAspect(source.rule, targetLongEdge);
  if (allowEnlargement) return ideal;
  const scale = Math.min(1, source.width / ideal.width, source.height / ideal.height);
  return {
    width: Math.max(1, Math.floor(ideal.width * scale)),
    height: Math.max(1, Math.floor(ideal.height * scale)),
  };
}

function hasMetadata(metadata) {
  return Boolean(
    metadata.exif || metadata.icc || metadata.iptc || metadata.xmp || metadata.comments?.length,
  );
}

async function inspectOutput(filePath, format, expectedDimensions) {
  const metadata = await sharp(filePath, { failOn: "warning" }).metadata();
  const outputStat = await stat(filePath);
  const errors = [];

  if (metadata.mediaType !== OUTPUT_MEDIA_TYPES[format]) {
    errors.push(
      `media type ${metadata.mediaType ?? "unknown"} is not ${OUTPUT_MEDIA_TYPES[format]}`,
    );
  }
  if (
    metadata.width !== expectedDimensions.width ||
    metadata.height !== expectedDimensions.height
  ) {
    errors.push(
      `dimensions ${metadata.width}x${metadata.height} do not match expected ${expectedDimensions.width}x${expectedDimensions.height}`,
    );
  }
  if (metadata.space !== "srgb")
    errors.push(`colour space is ${metadata.space ?? "unknown"}, not sRGB`);
  if (hasMetadata(metadata))
    errors.push("EXIF/ICC/IPTC/XMP/comment metadata was not fully stripped");

  return {
    format,
    path: relativeToRepo(filePath),
    url: `/generated/design-projects/${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`,
    width: metadata.width,
    height: metadata.height,
    bytes: outputStat.size,
    sha256: await sha256(filePath),
    mediaType: metadata.mediaType,
    colourSpace: metadata.space,
    metadataStripped: !hasMetadata(metadata),
    errors,
  };
}

async function verifyOutputBuffer(data, format, expectedDimensions) {
  const metadata = await sharp(data, { failOn: "warning" }).metadata();
  const errors = [];
  if (metadata.mediaType !== OUTPUT_MEDIA_TYPES[format]) {
    errors.push(
      `media type ${metadata.mediaType ?? "unknown"} is not ${OUTPUT_MEDIA_TYPES[format]}`,
    );
  }
  if (
    metadata.width !== expectedDimensions.width ||
    metadata.height !== expectedDimensions.height
  ) {
    errors.push(
      `dimensions ${metadata.width}x${metadata.height} do not match expected ${expectedDimensions.width}x${expectedDimensions.height}`,
    );
  }
  if (metadata.space !== "srgb")
    errors.push(`colour space is ${metadata.space ?? "unknown"}, not sRGB`);
  if (hasMetadata(metadata))
    errors.push("EXIF/ICC/IPTC/XMP/comment metadata was not fully stripped");
  return errors;
}

async function atomicPromote(tempPath, targetPath, replacing) {
  if (!replacing) {
    await retryWindowsFileOperation(() => rename(tempPath, targetPath));
    return;
  }

  const backupPath = `${targetPath}.backup-${randomUUID()}`;
  await retryWindowsFileOperation(() => rename(targetPath, backupPath));
  try {
    await retryWindowsFileOperation(() => rename(tempPath, targetPath));
  } catch (error) {
    await retryWindowsFileOperation(() => rename(backupPath, targetPath));
    throw error;
  }
  await retryWindowsFileOperation(() => rm(backupPath, { force: true }));
}

async function encodeVariant(source, format, targetPath, expectedDimensions, options) {
  const targetExists = await pathExists(targetPath);
  if (targetExists && !options.force) {
    const inspected = await inspectOutput(targetPath, format, expectedDimensions);
    if (inspected.errors.length > 0) {
      throw new Error(
        `${relativeToRepo(targetPath)} exists but is invalid (${inspected.errors.join("; ")}); rerun with --force`,
      );
    }
    return { ...inspected, action: "kept" };
  }

  await mkdir(path.dirname(targetPath), { recursive: true });
  const tempPath = path.join(
    path.dirname(targetPath),
    `.${path.basename(targetPath)}.${process.pid}.${randomUUID()}.tmp`,
  );
  try {
    let pipeline = sharp(source.filePath, { failOn: "warning" })
      .rotate()
      .resize({
        width: expectedDimensions.width,
        height: expectedDimensions.height,
        fit: "cover",
        position: "centre",
        withoutEnlargement: !options.allowLowRes,
        kernel: "lanczos3",
      })
      .toColourspace("srgb");

    if (format === "webp") {
      pipeline = pipeline.webp({
        quality: options.webpQuality ?? source.rule.webpQuality,
        alphaQuality: 95,
        effort: 6,
        smartSubsample: true,
      });
    } else {
      pipeline = pipeline.avif({
        quality: options.avifQuality ?? source.rule.avifQuality,
        effort: 4,
        chromaSubsampling: "4:4:4",
      });
    }

    const { data } = await pipeline.toBuffer({ resolveWithObject: true });
    const bufferErrors = await verifyOutputBuffer(data, format, expectedDimensions);
    if (bufferErrors.length > 0) {
      throw new Error(`encoded ${format} failed verification: ${bufferErrors.join("; ")}`);
    }
    await writeFile(tempPath, data, { flag: "wx" });
    await atomicPromote(tempPath, targetPath, targetExists);
    return {
      ...(await inspectOutput(targetPath, format, expectedDimensions)),
      action: targetExists ? "replaced" : "created",
    };
  } finally {
    await retryWindowsFileOperation(() => rm(tempPath, { force: true }));
  }
}

async function processSource(source, options) {
  const outputs = {};

  for (const format of options.formats) {
    outputs[format] = {};
    for (const targetLongEdge of RESPONSIVE_LONG_EDGES) {
      const maxLongEdge = Math.min(targetLongEdge, source.rule.maxLongEdge);
      const expectedDimensions = outputDimensions(source, maxLongEdge, options.allowLowRes);
      const targetPath = path.join(
        options.output,
        source.slug,
        `${source.slot}-${targetLongEdge}.${format}`,
      );
      outputs[format][targetLongEdge] = await encodeVariant(
        source,
        format,
        targetPath,
        expectedDimensions,
        options,
      );
    }
  }

  const warnings = [...source.warnings];
  for (const output of Object.values(outputs).flatMap((variants) => Object.values(variants))) {
    const softLimit = output.format === "webp" ? 2_500_000 : 2_000_000;
    if (output.bytes > softLimit) {
      warnings.push(`${output.format.toUpperCase()} is ${rounded(output.bytes / 1_000_000, 2)} MB`);
    }
  }

  const sourceAfter = await stat(source.filePath);
  const sourceHashAfter = await sha256(source.filePath);
  if (
    sourceAfter.size !== source.sourceStat.size ||
    sourceAfter.mtimeMs !== source.sourceStat.mtimeMs ||
    sourceHashAfter !== source.sourceHash
  ) {
    throw new Error(`${relativeToRepo(source.filePath)} changed while it was being processed`);
  }

  return {
    key: `${source.slug}/${source.slot}`,
    project: {
      index: source.project.index,
      slug: source.project.slug,
      title: source.project.title,
    },
    slot: source.slot,
    expectedAspect: formatAspect(source.rule),
    source: {
      path: relativeToRepo(source.filePath),
      format: source.metadata.format,
      width: source.width,
      height: source.height,
      bytes: source.sourceStat.size,
      sha256: source.sourceHash,
      colourSpace: source.metadata.space,
      hadEmbeddedMetadata: hasMetadata(source.metadata),
    },
    outputs,
    warnings,
    status: "ready",
  };
}

async function mapLimit(items, concurrency, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
  return results;
}

function sortAssets(assets) {
  return assets.sort((left, right) => {
    const projectDelta =
      PROJECT_ORDER.get(left.project.slug) - PROJECT_ORDER.get(right.project.slug);
    return projectDelta || SLOT_ORDER.get(left.slot) - SLOT_ORDER.get(right.slot);
  });
}

async function loadPreviousAssets(manifestPath) {
  if (!(await pathExists(manifestPath))) return [];
  try {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    if (manifest.schemaVersion !== MANIFEST_SCHEMA_VERSION || !Array.isArray(manifest.assets))
      return [];
    const retained = [];
    for (const asset of manifest.assets) {
      const webpPaths = RESPONSIVE_LONG_EDGES.map(
        (longEdge) => asset.outputs?.webp?.[longEdge]?.path,
      );
      if (webpPaths.some((webpPath) => !webpPath)) continue;
      const allExist = await Promise.all(
        webpPaths.map((webpPath) => pathExists(path.resolve(REPO_ROOT, webpPath))),
      );
      if (allExist.every(Boolean)) retained.push(asset);
    }
    return retained;
  } catch {
    return [];
  }
}

function coverageFor(assets) {
  const readyKeys = new Set(
    assets
      .filter((asset) => RESPONSIVE_LONG_EDGES.every((longEdge) => asset.outputs?.webp?.[longEdge]))
      .map((asset) => asset.key),
  );
  const missing = [];
  for (const project of DESIGN_PROJECTS) {
    for (const slot of getDesignProjectRequiredSlots(project.slug)) {
      const key = `${project.slug}/${slot}`;
      if (!readyKeys.has(key)) missing.push(key);
    }
  }
  return {
    expected: EXPECTED_ASSET_COUNT,
    ready: EXPECTED_ASSET_COUNT - missing.length,
    missingCount: missing.length,
    missing,
  };
}

function renderReport(manifest) {
  const lines = [
    "# Design project image manifest",
    "",
    `Generated: ${manifest.generatedAt}`,
    "",
    `Coverage: **${manifest.coverage.ready}/${manifest.coverage.expected}** required WebP assets ready.`,
    "",
    "| Project | Slot | Source | Output | WebP | AVIF | Notes |",
    "| --- | --- | --- | --- | ---: | ---: | --- |",
  ];

  for (const asset of manifest.assets) {
    const source = `${asset.source.width}×${asset.source.height}`;
    const primary = asset.outputs.webp?.[3200];
    const output = primary ? `${primary.width}×${primary.height}` : "—";
    const webp = asset.outputs.webp
      ? `${rounded(Object.values(asset.outputs.webp).reduce((sum, item) => sum + item.bytes, 0) / 1000, 1)} KB`
      : "—";
    const avif = asset.outputs.avif
      ? `${rounded(Object.values(asset.outputs.avif).reduce((sum, item) => sum + item.bytes, 0) / 1000, 1)} KB`
      : "—";
    const notes = asset.warnings.length > 0 ? asset.warnings.join("; ") : "Ready";
    lines.push(
      `| ${asset.project.index} ${asset.project.title} | ${asset.slot} (${asset.expectedAspect}) | ${source} | ${output} | ${webp} | ${avif} | ${notes} |`,
    );
  }

  lines.push("", "## Missing required assets", "");
  if (manifest.coverage.missing.length === 0) lines.push("None.");
  else manifest.coverage.missing.forEach((key) => lines.push(`- ${key}`));
  lines.push("");
  return lines.join("\n");
}

async function atomicWrite(filePath, contents) {
  await mkdir(path.dirname(filePath), { recursive: true });
  const tempPath = path.join(
    path.dirname(filePath),
    `.${path.basename(filePath)}.${process.pid}.${randomUUID()}.tmp`,
  );
  try {
    await writeFile(tempPath, contents, "utf8");
    const targetExists = await pathExists(filePath);
    await atomicPromote(tempPath, filePath, targetExists);
  } finally {
    await retryWindowsFileOperation(() => rm(tempPath, { force: true }));
  }
}

function logValidation(source) {
  const marker = source.errors.length > 0 ? "FAIL" : "OK";
  const notes = [...source.errors, ...source.warnings];
  console.log(
    `[${marker}] ${source.slug}/${source.slot} ${source.width ?? "?"}x${source.height ?? "?"} (${formatAspect(source.rule)})${notes.length > 0 ? ` — ${notes.join("; ")}` : ""}`,
  );
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    console.log(HELP.trim());
    return;
  }

  const files = await walkInputFiles(options.input);
  const imageFiles = files.filter(
    (filePath) =>
      ACCEPTED_INPUT_EXTENSIONS.has(path.extname(filePath).toLowerCase()) &&
      !IGNORED_INPUT_BASENAMES.has(path.basename(filePath).toLowerCase()),
  );
  const unmatched = [];
  const sources = [];

  for (const filePath of imageFiles) {
    const identity = parseSourceIdentity(options.input, filePath);
    if (!identity) {
      unmatched.push(filePath);
      continue;
    }
    if (!options.projects.has(identity.slug) || !options.slots.has(identity.slot)) continue;
    sources.push({ ...identity, filePath });
  }

  const seen = new Map();
  const duplicates = [];
  for (const source of sources) {
    const key = `${source.slug}/${source.slot}`;
    if (seen.has(key))
      duplicates.push(
        `${key}: ${relativeToRepo(seen.get(key))}, ${relativeToRepo(source.filePath)}`,
      );
    else seen.set(key, source.filePath);
  }
  if (duplicates.length > 0) {
    throw new Error(
      `Duplicate project slots found:\n${duplicates.map((value) => `  - ${value}`).join("\n")}`,
    );
  }

  if (unmatched.length > 0) {
    console.warn(
      `Ignored ${unmatched.length} unmatched PNG/JPEG file(s):\n${unmatched.map((filePath) => `  - ${relativeToRepo(filePath)}`).join("\n")}`,
    );
    if (options.strict) throw new Error("Unmatched images are not allowed with --strict.");
  }

  if (sources.length === 0) {
    console.log(`No matching source images found in ${relativeToRepo(options.input)}.`);
    return;
  }

  const inspected = await mapLimit(sources, Math.min(options.concurrency, 4), (source) =>
    inspectSource(source, options),
  );
  inspected.forEach(logValidation);
  const invalid = inspected.filter((source) => source.errors.length > 0);
  if (invalid.length > 0) {
    throw new Error(
      `${invalid.length} source image(s) failed validation; no outputs were written.`,
    );
  }

  if (options.dryRun) {
    console.log(`Dry run passed for ${inspected.length} source image(s); no files were written.`);
    return;
  }

  const manifestPath = path.join(options.output, "manifest.json");
  const reportPath = path.join(options.output, "manifest-report.md");
  const previous = await loadPreviousAssets(manifestPath);
  const previousByKey = new Map(previous.map((asset) => [asset.key, asset]));
  if (!options.force) {
    for (const source of inspected) {
      const key = `${source.slug}/${source.slot}`;
      const existingTargets = await Promise.all(
        options.formats.flatMap((format) =>
          RESPONSIVE_LONG_EDGES.map((longEdge) =>
            pathExists(
              path.join(options.output, source.slug, `${source.slot}-${longEdge}.${format}`),
            ),
          ),
        ),
      );
      if (!existingTargets.some(Boolean)) continue;
      const previousAsset = previousByKey.get(key);
      if (!previousAsset) {
        throw new Error(
          `${key} has generated outputs without manifest provenance; rerun with --force`,
        );
      }
      if (previousAsset.source?.sha256 !== source.sourceHash) {
        throw new Error(`${key} source changed since the current outputs; rerun with --force`);
      }
    }
  }

  const processed = await mapLimit(inspected, options.concurrency, async (source) => {
    const result = await processSource(source, options);
    const actions = Object.entries(result.outputs)
      .flatMap(([format, variants]) =>
        Object.entries(variants).map(([size, output]) => `${format}-${size}:${output.action}`),
      )
      .join(", ");
    console.log(`[WRITE] ${result.key} — ${actions}`);
    return result;
  });

  const merged = new Map(previous.map((asset) => [asset.key, asset]));
  processed.forEach((asset) => merged.set(asset.key, asset));
  const assets = sortAssets([...merged.values()]);
  const coverage = coverageFor(assets);
  const manifest = {
    schemaVersion: MANIFEST_SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    pipeline: {
      input: relativeToRepo(options.input),
      output: relativeToRepo(options.output),
      formats: options.formats,
      responsiveLongEdges: RESPONSIVE_LONG_EDGES,
      sRGB: true,
      metadataStripped: true,
      sourceFilesPreserved: true,
    },
    coverage,
    assets,
  };

  await atomicWrite(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await atomicWrite(reportPath, renderReport(manifest));
  console.log(
    `Manifest written: ${relativeToRepo(manifestPath)} (${coverage.ready}/${coverage.expected} WebP assets ready)`,
  );
}

main().catch((error) => {
  console.error(`\nImage pipeline failed: ${error.message}`);
  process.exitCode = 1;
});
