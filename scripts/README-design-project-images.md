# Design project image pipeline

This pipeline converts approved Higgsfield PNG/JPEG masters into web-ready WebP and AVIF assets without changing the originals.

## 1. Name the source files

Use the numbered project folder and filename contract used by the Higgsfield download step:

```text
tmp/higgsfield/01-afterimage/afterimage-01-hero.png
tmp/higgsfield/01-afterimage/afterimage-01-tactile.jpg
tmp/higgsfield/01-afterimage/afterimage-01-spatial.png
tmp/higgsfield/01-afterimage/afterimage-01-context.png
```

Each of the 20 slugs is declared in `scripts/design-project-image-rules.mjs`. The four required slots are:

| Slot      | Required ratio | Minimum long edge | Purpose                              |
| --------- | -------------- | ----------------: | ------------------------------------ |
| `hero`    | 4:5            |           3200 px | Primary case-study image             |
| `tactile` | 3:2            |           3200 px | Material / close-detail image        |
| `spatial` | 16:9           |           3200 px | Environment / system image           |
| `context` | 9:16           |           3200 px | Vertical campaign / contextual plate |

The ratio tolerance is 3.5%. The processor rejects duplicate files for the same project and slot.
The obsolete wrong-account file `afterimage-campaign-pilot.png` is explicitly excluded from discovery.

Project-specific ratio overrides are centralised beside the default rules:

- `79w`, `tidehold`, `backmatter`, and `seamframe` use a 16:9 `hero`.
- `tactile-forecast`, `soft-machine`, `offsort`, `horalis`, and `selv-00` use a 1:1 `tactile`.

## 2. Validate before writing

From PowerShell:

```powershell
.\scripts\process-design-project-images.cmd --dry-run
```

To validate only one project:

```powershell
.\scripts\process-design-project-images.cmd --projects afterimage --dry-run
```

## 3. Convert approved masters

```powershell
.\scripts\process-design-project-images.cmd
```

Outputs are written to:

```text
public/generated/design-projects/<slug>/<slot>-960.webp
public/generated/design-projects/<slug>/<slot>-1600.webp
public/generated/design-projects/<slug>/<slot>-3200.webp
public/generated/design-projects/<slug>/<slot>-{960|1600|3200}.avif
```

The numeric suffix is the target long edge, not an assumed CSS width. Sharp auto-orients the source, applies the centred crop needed to normalise it to the slot ratio, and emits 960, 1600, and 3200 px long-edge variants. By default, undersized masters are rejected; `--allow-low-res` explicitly permits Lanczos3 enlargement and records the exception in both reports. The exact widths therefore match the site's responsive descriptors: 4:5 produces 768/1280/2560 px widths, 3:2 produces 960/1600/3200, 16:9 produces 960/1600/3200, and 9:16 produces 540/900/1800. The default output removes EXIF, ICC, IPTC, XMP, and comments and produces device-independent sRGB pixels. WebP is required; AVIF can be disabled with `--formats webp`.

Existing generated files are kept by default. After approving a replacement master, use `--force` to replace only its exact generated target with a verified atomic write:

```powershell
.\scripts\process-design-project-images.cmd --projects afterimage --slots hero --force
```

The command never deletes or modifies anything under `tmp/higgsfield`.

## Reports

Every successful write updates:

- `public/generated/design-projects/manifest.json` — machine-readable dimensions, byte sizes, hashes, colour-space and metadata checks.
- `public/generated/design-projects/manifest-report.md` — human-readable 80-slot coverage and missing-file report.

Useful safeguards:

- `--strict` fails if any PNG/JPEG in the input directory does not match the naming contract.
- `--allow-low-res` and `--allow-aspect-mismatch` exist for deliberate exceptions and record warnings in the manifest.
- `--webp-quality` and `--avif-quality` provide controlled overrides.
