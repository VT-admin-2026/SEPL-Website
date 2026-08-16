/**
 * Production SEO configuration — single source of truth for canonical URLs.
 */
export const SITE_URL = "https://www.seplweb.in";

/** @deprecated Use SITE_URL */
export const CANONICAL_DOMAIN = SITE_URL;

export const seoMetadata = {
  title:
    "Suvidhinath Electronics Pvt. Ltd. | Electrical Infrastructure & Renewable Energy Solutions",
  organizationName: "Suvidhinath Electronics Pvt. Ltd.",
  alternateName: "SEPL",
  description:
    "Suvidhinath Electronics Pvt. Ltd. (SEPL) delivers electrical infrastructure, power distribution, renewable energy, solar and engineering solutions across India.",
  locale: "en_IN",
  logoPath: "/images/SEPL logo.png",
} as const;

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
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;
}

export function toAbsoluteAssetUrl(assetPath: string): string {
  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${SITE_URL}${encodeURI(normalizedPath)}`;
}
