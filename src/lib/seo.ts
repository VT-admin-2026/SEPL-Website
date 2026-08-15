/**
 * Public, indexable routes for SEO (sitemap, canonical URLs).
 * Add new entries here when standalone pages are created under src/app/.
 */
export const CANONICAL_DOMAIN = "https://seplweb.in";

export type PublicRoute = {
  /** App Router path, e.g. "/" or "/about" */
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/**
 * All public pages that should appear in sitemap.xml.
 * Hash-only sections (#about, #contact, etc.) are intentionally omitted —
 * they are part of the homepage, not separate indexable URLs.
 */
export const publicRoutes: PublicRoute[] = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
  },
];

export function toCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") {
    return `${CANONICAL_DOMAIN}/`;
  }
  return `${CANONICAL_DOMAIN}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;
}
