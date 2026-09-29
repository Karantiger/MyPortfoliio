// Central site + SEO configuration. Client-safe.

export const SITE_URL = "https://karankumarbind.vercel.app";
export const SITE_NAME = "Karan Kumar Bind";
export const SITE_TAGLINE = "Java Developer & Computer Science Student";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const TWITTER_HANDLE = "@karankumarbind";

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
};

type MetaTag = Record<string, string>;

/**
 * Builds a complete, self-referencing head config for a page:
 * title, description, canonical, Open Graph and Twitter card.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: PageMetaInput): { meta: MetaTag[]; links: MetaTag[] } {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? DEFAULT_OG_IMAGE);

  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  } else {
    meta.push({ name: "robots", content: "index, follow, max-image-preview:large" });
  }

  return { meta, links: [{ rel: "canonical", href: url }] };
}

/** Pages included in sitemap.xml, in priority order. */
export const staticPages: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
  { path: "/skills", priority: "0.8", changefreq: "monthly" },
  { path: "/experience", priority: "0.8", changefreq: "monthly" },
  { path: "/education", priority: "0.7", changefreq: "monthly" },
  { path: "/achievements", priority: "0.7", changefreq: "monthly" },
  { path: "/resume", priority: "0.8", changefreq: "monthly" },
];
