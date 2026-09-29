/**
 * Shared SEO helpers used by every route's `head()`. Safe to import from
 * both server and client code — no server-only APIs here.
 */

export const DEFAULT_SITE_URL = "https://karankumarbind.vercel.app";
export const SITE_NAME = "Karan Kumar Bind";

export function absoluteUrl(path: string, siteUrl: string = DEFAULT_SITE_URL) {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export type PageSeoInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  siteUrl?: string;
  noindex?: boolean;
  type?: "website" | "profile";
};

/**
 * Builds the standard set of <meta>/<link> tags for a page: unique title,
 * description, canonical URL, Open Graph (incl. og:image + og:url), and
 * Twitter Card tags. Every route should call this instead of hand-rolling
 * meta arrays, so canonical/OG coverage never drifts between pages.
 */
export function buildPageHead({
  path,
  title,
  description,
  image = "/og-image.png",
  siteUrl = DEFAULT_SITE_URL,
  noindex = false,
  type = "website",
}: PageSeoInput) {
  const url = absoluteUrl(path, siteUrl);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image, siteUrl);

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];

  const links = [{ rel: "canonical", href: url }];

  return { meta, links };
}

/** JSON-LD: Person schema for the site owner — used on the homepage. */
export function personJsonLd(siteUrl: string = DEFAULT_SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karan Kumar Bind",
    url: siteUrl,
    jobTitle: "Java Full Stack Developer",
    sameAs: [
      "https://github.com/karantiger",
      "https://linkedin.com/in/karantiger/",
      "https://www.instagram.com/karan.thetiger/",
    ],
  };
}

/** JSON-LD: WebSite schema with a SearchAction, used on the homepage. */
export function websiteJsonLd(siteUrl: string = DEFAULT_SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
  };
}

/** JSON-LD: BreadcrumbList schema, used on every inner page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[], siteUrl: string = DEFAULT_SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteUrl),
    })),
  };
}

/** JSON-LD: CreativeWork schema for an individual project page. */
export function projectJsonLd(
  project: { title: string; desc: string; image: string; sourceUrl?: string | null },
  path: string,
  siteUrl: string = DEFAULT_SITE_URL,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.desc,
    url: absoluteUrl(path, siteUrl),
    image: project.image.startsWith("http") ? project.image : absoluteUrl(project.image, siteUrl),
    author: {
      "@type": "Person",
      name: "Karan Kumar Bind",
    },
    ...(project.sourceUrl ? { codeRepository: project.sourceUrl } : {}),
  };
}

export function jsonLdScript(data: object) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
