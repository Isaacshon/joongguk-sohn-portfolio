import { z } from "zod";

import { getServerConfig } from "./config.server";
import { createInstagramFallback, type InstagramFeed, type InstagramPost } from "./instagram";

const instagramProfileResponseSchema = z.object({
  id: z.string().min(1),
  username: z.string().min(1),
  name: z.string().nullish(),
  biography: z.string().nullish(),
  profile_picture_url: z.string().url().nullish(),
  followers_count: z.number().int().nonnegative(),
  follows_count: z.number().int().nonnegative(),
  media_count: z.number().int().nonnegative(),
});

const instagramMediaEnvelopeSchema = z.object({
  data: z.array(z.unknown()),
});

const instagramMediaResponseSchema = z.object({
  id: z.string().min(1),
  permalink: z.string().url(),
  media_type: z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]),
  media_url: z.string().url().nullish(),
  thumbnail_url: z.string().url().nullish(),
  caption: z.string().nullish(),
  is_shared_to_feed: z.boolean().optional(),
});

const instagramErrorSchema = z.object({
  error: z.object({
    code: z.number().optional(),
    message: z.string().optional(),
    type: z.string().optional(),
  }),
});

const PROFILE_FIELDS = [
  "id",
  "username",
  "name",
  "biography",
  "profile_picture_url",
  "followers_count",
  "follows_count",
  "media_count",
].join(",");

const MEDIA_FIELDS = [
  "id",
  "caption",
  "media_type",
  "media_url",
  "permalink",
  "thumbnail_url",
  "is_shared_to_feed",
].join(",");

const DISPLAYED_MEDIA_LIMIT = 6;
const UPSTREAM_MEDIA_LIMIT = 100;

async function fetchInstagramJson(url: URL, accessToken: string) {
  const response = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "User-Agent": "isaac-sohn-portfolio/1.0",
    },
    signal: AbortSignal.timeout(8_000),
  });

  const body: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const apiError = instagramErrorSchema.safeParse(body);
    console.error("Instagram API request failed", {
      status: response.status,
      code: apiError.success ? apiError.data.error.code : undefined,
      type: apiError.success ? apiError.data.error.type : undefined,
      message: apiError.success ? apiError.data.error.message : undefined,
    });
    throw new Error("Instagram API request failed");
  }

  return body;
}

export async function fetchInstagramFeed(): Promise<InstagramFeed> {
  const config = getServerConfig();
  const accessToken = config.instagramAccessToken?.trim();

  if (!accessToken) {
    return createInstagramFallback("unconfigured");
  }

  try {
    const apiRoot = `https://graph.instagram.com/${config.instagramApiVersion}`;
    const profileUrl = new URL(`${apiRoot}/me`);
    profileUrl.searchParams.set("fields", PROFILE_FIELDS);

    const mediaUrl = new URL(`${apiRoot}/me/media`);
    mediaUrl.searchParams.set("fields", MEDIA_FIELDS);
    mediaUrl.searchParams.set("limit", String(UPSTREAM_MEDIA_LIMIT));

    const [profileBody, mediaBody] = await Promise.all([
      fetchInstagramJson(profileUrl, accessToken),
      fetchInstagramJson(mediaUrl, accessToken),
    ]);

    const profile = instagramProfileResponseSchema.safeParse(profileBody);
    const mediaEnvelope = instagramMediaEnvelopeSchema.safeParse(mediaBody);

    if (!profile.success || !mediaEnvelope.success) {
      console.error("Instagram API returned an unexpected response shape", {
        profileValid: profile.success,
        mediaEnvelopeValid: mediaEnvelope.success,
      });
      return createInstagramFallback("upstream_error");
    }

    const posts = mediaEnvelope.data.data
      .flatMap((item): InstagramPost[] => {
        const parsed = instagramMediaResponseSchema.safeParse(item);

        if (!parsed.success) {
          return [];
        }

        // Trial Reels and other Reels kept off the profile feed report false here.
        // Excluding them keeps this grid aligned with the public profile grid.
        if (parsed.data.is_shared_to_feed === false) {
          return [];
        }

        const caption = parsed.data.caption?.trim() || `Latest post by @${profile.data.username}`;
        const preferredMediaUrl =
          parsed.data.media_type === "VIDEO"
            ? (parsed.data.thumbnail_url ?? parsed.data.media_url)
            : (parsed.data.media_url ?? parsed.data.thumbnail_url);

        return [
          {
            id: parsed.data.id,
            permalink: parsed.data.permalink,
            mediaType: parsed.data.media_type,
            mediaUrl: preferredMediaUrl ?? null,
            caption,
            alt: caption,
          },
        ];
      })
      .slice(0, DISPLAYED_MEDIA_LIMIT);

    if (posts.length === 0 && profile.data.media_count > 0) {
      console.error("Instagram API returned no usable media items");
      return createInstagramFallback("upstream_error");
    }

    return {
      status: "live",
      cachedReason: null,
      syncedAt: new Date().toISOString(),
      profile: {
        id: profile.data.id,
        username: profile.data.username,
        name: profile.data.name?.trim() || profile.data.username,
        biography: profile.data.biography?.trim() || "Model · Actor · Writer",
        profilePictureUrl: profile.data.profile_picture_url ?? null,
        followersCount: profile.data.followers_count,
        followsCount: profile.data.follows_count,
        mediaCount: profile.data.media_count,
      },
      posts,
    };
  } catch (error) {
    console.error("Instagram feed sync failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return createInstagramFallback("upstream_error");
  }
}
