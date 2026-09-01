import type { ComponentType } from "react";

import type { BrandCode } from "@/lib/brand-registry";

import type { BrandWorldProps } from "./BrandWorldShell";
import { LevisWorld } from "./LevisWorld";
import { MujiWorld } from "./MujiWorld";
import { NikeWorld } from "./NikeWorld";
import { PoloWorld } from "./PoloWorld";

const newBrandWorldRenderers = {
  muji: MujiWorld,
  levis: LevisWorld,
  polo: PoloWorld,
  nike: NikeWorld,
} satisfies Partial<Record<BrandCode, ComponentType<BrandWorldProps>>>;

export function getNewBrandWorldRenderer(
  code: BrandCode,
): ComponentType<BrandWorldProps> | undefined {
  return code in newBrandWorldRenderers
    ? newBrandWorldRenderers[code as keyof typeof newBrandWorldRenderers]
    : undefined;
}
