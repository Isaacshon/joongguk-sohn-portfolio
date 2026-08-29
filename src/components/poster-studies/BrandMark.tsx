import type { CSSProperties } from "react";

export type BrandCode = "hm" | "zara" | "uniqlo" | "prada";

type BrandMarkStyle = CSSProperties & {
  "--brand-mark-src"?: string;
};

const brandMarkAssets: Record<BrandCode, { src: string; label: string }> = {
  hm: { src: "/brand-marks/hm.svg", label: "H&M" },
  zara: { src: "/brand-marks/zara.svg", label: "ZARA" },
  uniqlo: { src: "/brand-marks/uniqlo.svg", label: "UNIQLO" },
  prada: { src: "/brand-marks/prada.svg", label: "PRADA" },
};

const projectBrandCodes: Record<string, BrandCode> = {
  "hm-second-sun": "hm",
  "zara-the-air-between": "zara",
  "uniqlo-comfort-measured": "uniqlo",
  "prada-the-quiet-error": "prada",
};

export function BrandMark({
  code,
  className,
  decorative = false,
}: {
  code: BrandCode;
  className?: string;
  decorative?: boolean;
}) {
  const asset = brandMarkAssets[code];
  const classes = ["brand-mark", `brand-mark--${code}`, className].filter(Boolean).join(" ");

  if (code === "uniqlo") {
    return (
      <span
        className={classes}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : asset.label}
        aria-hidden={decorative || undefined}
      >
        <img src={asset.src} alt="" className="brand-mark__image" draggable={false} />
      </span>
    );
  }

  const style: BrandMarkStyle = { "--brand-mark-src": `url("${asset.src}")` };

  return (
    <span
      className={classes}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : asset.label}
      aria-hidden={decorative || undefined}
    >
      <span className="brand-mark__mask" style={style} />
    </span>
  );
}

export function BrandProjectMark({
  projectSlug,
  className,
}: {
  projectSlug: string;
  className?: string;
}) {
  const code = projectBrandCodes[projectSlug];

  if (!code) return null;

  const classes = ["brand-project-mark", className].filter(Boolean).join(" ");

  return (
    <span className={classes} data-brand={code} aria-hidden="true">
      <BrandMark code={code} decorative />
    </span>
  );
}

export function PradaPlaque({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  const classes = ["prada-plaque", className].filter(Boolean).join(" ");

  return (
    <span
      className={classes}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "PRADA Milano triangle plaque"}
      aria-hidden={decorative || undefined}
    >
      <svg className="prada-plaque__outline" viewBox="0 0 300 264" aria-hidden="true">
        <path d="M20 18H280L157 246Q150 258 143 246L20 18Z" />
      </svg>
      <BrandMark code="prada" className="prada-plaque__wordmark" decorative />
      <span className="prada-plaque__milano">MILANO</span>
      <span className="prada-plaque__since">DAL 1913</span>
    </span>
  );
}
