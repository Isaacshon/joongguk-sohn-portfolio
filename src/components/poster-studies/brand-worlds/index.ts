import { lazy, type ComponentType, type LazyExoticComponent } from "react";

import type { BrandCode } from "@/lib/brand-registry";

import type { BrandWorldProps } from "./BrandWorldShell";
const newBrandWorldRenderers = {
  muji: lazy(() => import("./MujiWorld").then((module) => ({ default: module.MujiWorld }))),
  levis: lazy(() => import("./LevisWorld").then((module) => ({ default: module.LevisWorld }))),
  polo: lazy(() => import("./PoloWorld").then((module) => ({ default: module.PoloWorld }))),
  nike: lazy(() => import("./NikeWorld").then((module) => ({ default: module.NikeWorld }))),
} satisfies Partial<Record<BrandCode, LazyExoticComponent<ComponentType<BrandWorldProps>>>>;

export function getNewBrandWorldRenderer(
  code: BrandCode,
): LazyExoticComponent<ComponentType<BrandWorldProps>> | undefined {
  return code in newBrandWorldRenderers
    ? newBrandWorldRenderers[code as keyof typeof newBrandWorldRenderers]
    : undefined;
}
