export const brandDefinitions = {
  hm: {
    projectSlug: "hm-second-sun",
    label: "H&M",
    mark: { src: "/brand-marks/hm.svg", mode: "mask" },
    legacy: true,
  },
  zara: {
    projectSlug: "zara-the-air-between",
    label: "ZARA",
    mark: { src: "/brand-marks/zara.svg", mode: "mask" },
    legacy: true,
  },
  uniqlo: {
    projectSlug: "uniqlo-comfort-measured",
    label: "UNIQLO",
    mark: { src: "/brand-marks/uniqlo.svg", mode: "image" },
    legacy: true,
  },
  prada: {
    projectSlug: "prada-the-quiet-error",
    label: "PRADA",
    mark: { src: "/brand-marks/prada.svg", mode: "mask" },
    legacy: true,
  },
  muji: {
    projectSlug: "muji-household-weather",
    label: "MUJI",
    mark: { src: "/brand-marks/muji.svg", mode: "image" },
    legacy: false,
  },
  levis: {
    projectSlug: "levis-wear-is-the-record",
    label: "LEVI'S",
    mark: { src: "/brand-marks/levis.svg", mode: "image" },
    legacy: false,
  },
  polo: {
    projectSlug: "polo-ralph-lauren-the-long-match",
    label: "POLO RALPH LAUREN",
    mark: { src: "/brand-marks/polo-ralph-lauren.svg", mode: "mask" },
    legacy: false,
  },
  nike: {
    projectSlug: "nike-no-second-take",
    label: "NIKE",
    mark: { src: "/brand-marks/nike.svg", mode: "mask" },
    legacy: false,
  },
} as const;

export type BrandCode = keyof typeof brandDefinitions;
export type BrandProjectSlug = (typeof brandDefinitions)[BrandCode]["projectSlug"];
export type BrandMarkMode = (typeof brandDefinitions)[BrandCode]["mark"]["mode"];

export const brandCodes = Object.keys(brandDefinitions) as BrandCode[];
export const brandProjectSlugs = brandCodes.map(
  (code) => brandDefinitions[code].projectSlug,
) as BrandProjectSlug[];

const projectBrandCodes = new Map<BrandProjectSlug, BrandCode>(
  brandCodes.map((code) => [brandDefinitions[code].projectSlug, code]),
);

export function getBrandDefinition(code: BrandCode) {
  return brandDefinitions[code];
}

export function getBrandCodeForProject(projectSlug: string): BrandCode | undefined {
  return projectBrandCodes.get(projectSlug as BrandProjectSlug);
}

export function isBrandProjectSlug(projectSlug: string): projectSlug is BrandProjectSlug {
  return projectBrandCodes.has(projectSlug as BrandProjectSlug);
}
