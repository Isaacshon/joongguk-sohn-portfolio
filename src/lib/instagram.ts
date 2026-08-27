export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type InstagramProfile = {
  id: string;
  username: string;
  name: string;
  biography: string;
  profilePictureUrl: string | null;
  followersCount: number;
  followsCount: number;
  mediaCount: number;
};

export type InstagramPost = {
  id: string;
  permalink: string;
  mediaType: InstagramMediaType;
  mediaUrl: string | null;
  caption: string;
  alt: string;
};

export type InstagramFeed = {
  status: "live" | "cached";
  cachedReason: "unconfigured" | "upstream_error" | null;
  syncedAt: string | null;
  profile: InstagramProfile;
  posts: InstagramPost[];
};

export const INSTAGRAM_FALLBACK_PROFILE: InstagramProfile = {
  id: "saved-lsaac-toast",
  username: "lsaac_toast",
  name: "Isaac Sohn",
  biography:
    "Model · Actor · Novelist | ✝\nBorn in 🇰🇷 Based in 🇨🇦 | 04 INTJ\nCampaign model of @hanbyul.official\nSong 4:7",
  profilePictureUrl: null,
  followersCount: 2_934,
  followsCount: 262,
  mediaCount: 6,
};

export const INSTAGRAM_FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "DcR6eTZGVRN",
    permalink: "https://www.instagram.com/lsaac_toast/p/DcR6eTZGVRN/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: null,
    caption: "졸리면 진해지는 쌍꺼풀. Clouds of the Northern Hemisphere — Toronto field notes.",
    alt: "Isaac Sohn lying in green grass in a close-up portrait",
  },
  {
    id: "DcMvsduv9HF",
    permalink: "https://www.instagram.com/lsaac_toast/reel/DcMvsduv9HF/",
    mediaType: "VIDEO",
    mediaUrl: null,
    caption:
      "Finally choosing to create instead of just watching — modeling, acting, and everyday life in Toronto.",
    alt: "A dark cinematic reel cover introducing Isaac Sohn's creative journey",
  },
  {
    id: "DcLVUcGm9Ga",
    permalink: "https://www.instagram.com/lsaac_toast/p/DcLVUcGm9Ga/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: null,
    caption: "조금은 시원해진 것 같기도.",
    alt: "Isaac Sohn in a low-light close-up selfie",
  },
  {
    id: "DcIPUR-uIUm",
    permalink: "https://www.instagram.com/lsaac_toast/reel/DcIPUR-uIUm/",
    mediaType: "VIDEO",
    mediaUrl: null,
    caption: "Hi, I’m Isaac — a Korean model, actor and writer based in Toronto.",
    alt: "Isaac Sohn wearing a gray polo in an introductory reel",
  },
  {
    id: "DcCHs5ymSJV",
    permalink: "https://www.instagram.com/lsaac_toast/p/DcCHs5ymSJV/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: null,
    caption: "🐈 ⭐ 🌝",
    alt: "A close side-profile portrait of Isaac Sohn",
  },
  {
    id: "Db8jQxrDuA7",
    permalink: "https://www.instagram.com/lsaac_toast/p/Db8jQxrDuA7/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: null,
    caption: "Skipping leg days.",
    alt: "Isaac Sohn photographed outdoors in daylight",
  },
];

export function createInstagramFallback(
  cachedReason: Exclude<InstagramFeed["cachedReason"], null>,
): InstagramFeed {
  return {
    status: "cached",
    cachedReason,
    syncedAt: null,
    profile: INSTAGRAM_FALLBACK_PROFILE,
    posts: INSTAGRAM_FALLBACK_POSTS,
  };
}

export function getInstagramProfileUrl(username: string) {
  return `https://www.instagram.com/${encodeURIComponent(username)}/`;
}
