import { useState, type CSSProperties, type ReactNode } from "react";

import {
  getDesignProjectMediaAsset,
  type DesignProjectMediaSlot,
} from "@/lib/design-project-media";

type ImageAttempt = "modern" | "webp" | "single" | "failed";

type ProjectPictureProps = {
  projectSlug: string;
  slot: DesignProjectMediaSlot;
  sizes: string;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
  priority?: boolean;
  decorative?: boolean;
  fit?: "cover" | "contain";
  alt?: string;
  focalPoint?: string;
  fallback?: ReactNode;
  overlay?: ReactNode;
};

export function ProjectPicture({
  projectSlug,
  slot,
  sizes,
  className = "",
  imageClassName = "",
  style,
  priority = false,
  decorative = false,
  fit = "cover",
  alt,
  focalPoint,
  fallback = null,
  overlay = null,
}: ProjectPictureProps) {
  const asset = getDesignProjectMediaAsset(projectSlug, slot);
  const [attempt, setAttempt] = useState<{ src: string; state: ImageAttempt } | null>(null);

  if (!asset) {
    return <>{fallback}</>;
  }

  const state = attempt?.src === asset.src ? attempt.state : "modern";
  const frameStyle = {
    aspectRatio: `${asset.width} / ${asset.height}`,
    ...style,
  } satisfies CSSProperties;

  if (state === "failed") {
    return (
      <div
        className={`relative block w-full overflow-hidden ${className}`}
        style={frameStyle}
        data-project-media={`${projectSlug}:${slot}`}
        data-project-media-state="fallback"
      >
        {fallback}
        {overlay}
      </div>
    );
  }

  const handleError = () => {
    const nextState: ImageAttempt =
      state === "modern" ? "webp" : state === "webp" ? "single" : "failed";
    setAttempt({ src: asset.src, state: nextState });
  };

  return (
    <div
      className={`relative block w-full overflow-hidden ${className}`}
      style={frameStyle}
      data-project-media={`${projectSlug}:${slot}`}
      data-project-media-state={state}
    >
      <picture className="absolute inset-0 block h-full w-full">
        {state === "modern" ? (
          <source type="image/avif" srcSet={asset.avifSrcSet} sizes={sizes} />
        ) : null}
        {state === "modern" || state === "webp" ? (
          <source type="image/webp" srcSet={asset.srcSet} sizes={sizes} />
        ) : null}
        <img
          key={`${asset.src}:${state}`}
          src={asset.src}
          alt={decorative ? "" : (alt ?? asset.alt)}
          aria-hidden={decorative || undefined}
          width={asset.width}
          height={asset.height}
          srcSet={state === "modern" || state === "webp" ? asset.srcSet : undefined}
          sizes={state === "modern" || state === "webp" ? sizes : undefined}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={handleError}
          className={`h-full w-full transition-transform duration-700 ease-out ${
            fit === "contain" ? "object-contain" : "object-cover"
          } ${imageClassName}`}
          style={{ objectPosition: focalPoint ?? asset.focalPoint }}
        />
      </picture>
      {overlay}
    </div>
  );
}
