import { createServerFn } from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";

import { fetchInstagramFeed } from "../instagram.server";

const INSTAGRAM_CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=86400";

export const getInstagramFeed = createServerFn({ method: "GET" }).handler(async () => {
  setResponseHeader("Cache-Control", INSTAGRAM_CACHE_CONTROL);
  return fetchInstagramFeed();
});
