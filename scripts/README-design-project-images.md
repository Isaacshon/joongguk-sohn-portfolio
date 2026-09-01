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

Each of the 28 slugs is declared in `scripts/design-project-image-rules.mjs`. Every project requires
the four core slots below:

| Slot      | Required ratio | Minimum long edge | Purpose                              |
| --------- | -------------- | ----------------: | ------------------------------------ |
| `hero`    | 4:5            |           3200 px | Primary case-study image             |
| `tactile` | 3:2            |           3200 px | Material / close-detail image        |
| `spatial` | 16:9           |           3200 px | Environment / system image           |
| `context` | 9:16           |           3200 px | Vertical campaign / contextual plate |

The eight unofficial brand studies add a typed, variable editorial sequence. Including the four
core slots, H&M and UNIQLO resolve to 8 pictures, ZARA to 9, PRADA, MUJI, LEVI'S, and NIKE resolve
to 10, and the POLO RALPH LAUREN flagship resolves to 20.

| Source token  | Generated slot | Required ratio | Minimum long edge | Purpose                     |
| ------------- | -------------- | -------------- | ----------------: | --------------------------- |
| `editorial-a` | `editorialA`   | 4:5            |           3200 px | Editorial portrait / look   |
| `editorial-b` | `editorialB`   | 3:2            |           3200 px | Editorial landscape / set   |
| `editorial-c` | `editorialC`   | 4:5            |           3200 px | Portrait detail / evidence  |
| `editorial-d` | `editorialD`   | 16:9           |           3200 px | Environment / retail system |
| `editorial-e` | `editorialE`   | 4:5            |           3200 px | Object / publication        |
| `editorial-f` | `editorialF`   | 3:2            |           3200 px | Motion / sequence plate     |
| `editorial-g` | `editorialG`   | 4:5            |           3200 px | Dawn preparation portrait   |
| `editorial-h` | `editorialH`   | 3:2            |           3200 px | Court / field landscape     |
| `editorial-i` | `editorialI`   | 4:5            |           3200 px | Stable portrait             |
| `editorial-j` | `editorialJ`   | 16:9           |           3200 px | Stable environment          |
| `editorial-k` | `editorialK`   | 4:5            |           3200 px | Brownstone / city portrait  |
| `editorial-l` | `editorialL`   | 3:2            |           3200 px | City-life sequence          |
| `editorial-m` | `editorialM`   | 4:5            |           3200 px | Generations portrait        |
| `editorial-n` | `editorialN`   | 16:9           |           3200 px | Clubhouse / family table    |
| `editorial-o` | `editorialO`   | 1:1            |           3200 px | Object and material study   |
| `editorial-p` | `editorialP`   | 16:9           |           3200 px | Blue-hour closure           |

Required extras by slug:

- `hm-second-sun`: `editorial-a` through `editorial-d` (8 total pictures)
- `zara-the-air-between`: `editorial-a` through `editorial-e` (9 total pictures)
- `uniqlo-comfort-measured`: `editorial-a` through `editorial-d` (8 total pictures)
- `prada-the-quiet-error`: `editorial-a` through `editorial-f` (10 total pictures)
- `muji-household-weather`: `editorial-a` through `editorial-f` (10 total pictures)
- `levis-wear-is-the-record`: `editorial-a` through `editorial-f` (10 total pictures)
- `polo-ralph-lauren-the-long-match`: `editorial-a` through `editorial-p` (20 total pictures)
- `nike-no-second-take`: `editorial-a` through `editorial-f` (10 total pictures)

Use this exact eight-file source contract for project 21:

```text
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-hero.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-tactile.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-spatial.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-context.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-editorial-a.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-editorial-b.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-editorial-c.png
tmp/higgsfield/21-hm-second-sun/hm-second-sun-21-editorial-d.png
```

Replace the folder, slug, and index consistently for projects 22–28, then include the extra slots
listed above. Source tokens are kebab case; generated editorial filenames intentionally use the
typed camel-case slot names.

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

For an editorial extra this resolves to, for example,
`public/generated/design-projects/hm-second-sun/editorialD-3200.webp`.

The numeric suffix is the target long edge, not an assumed CSS width. Sharp auto-orients the source, applies the centred crop needed to normalise it to the slot ratio, and emits 960, 1600, and 3200 px long-edge variants. By default, undersized masters are rejected; `--allow-low-res` explicitly permits Lanczos3 enlargement and records the exception in both reports. The exact widths therefore match the site's responsive descriptors: 4:5 produces 768/1280/2560 px widths, 3:2 produces 960/1600/3200, 16:9 produces 960/1600/3200, and 9:16 produces 540/900/1800. The default output removes EXIF, ICC, IPTC, XMP, and comments and produces device-independent sRGB pixels. WebP is required; AVIF can be disabled with `--formats webp`.

Existing generated files are kept by default. After approving a replacement master, use `--force` to replace only its exact generated target with a verified atomic write:

```powershell
.\scripts\process-design-project-images.cmd --projects afterimage --slots hero --force
```

The command never deletes or modifies anything under `tmp/higgsfield`.

## Reports

Every successful write updates:

- `public/generated/design-projects/manifest.json` — machine-readable dimensions, byte sizes, hashes, colour-space and metadata checks.
- `public/generated/design-projects/manifest-report.md` — human-readable 115-slot coverage and missing-file report.

Useful safeguards:

- `--strict` fails if any PNG/JPEG in the input directory does not match the naming contract.
- `--allow-low-res` and `--allow-aspect-mismatch` exist for deliberate exceptions and record warnings in the manifest.
- `--webp-quality` and `--avif-quality` provide controlled overrides.
