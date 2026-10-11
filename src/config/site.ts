export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Become a Youtuber Wiki",
  shortName: "Become a Youtuber",
  logoText: "BY",
  tagline: "Complete Guides, Codes, Upgrades & Simulator Tips",
  description: "Your ultimate guide to Become a Youtuber on Roblox! Explore active working codes, equipment upgrades, money making tips, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://becomeayoutuber.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://becomeayoutuber.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/107137293512986/be-a-youtuber",
  heroVideoId: "Tc4mtr-bmq4", // Roblox Become a Youtuber codes & gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
