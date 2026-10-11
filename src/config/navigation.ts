import type { ComponentType } from "react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: ComponentType<{ className?: string }>;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "creator", path: "/creator", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "career", path: "/career", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
