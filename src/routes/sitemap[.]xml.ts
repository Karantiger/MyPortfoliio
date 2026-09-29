import { createFileRoute } from "@tanstack/react-router";

import { getDb } from "@/lib/db.server";
import { DEFAULT_SITE_URL, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const db = getDb();
        const settings = db.prepare("SELECT site_url FROM site_settings WHERE id = 1").get() as
          | { site_url: string }
          | undefined;
        const siteUrl = settings?.site_url || DEFAULT_SITE_URL;

        const staticPaths = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/projects", priority: "0.9", changefreq: "weekly" },
          { path: "/experience", priority: "0.8", changefreq: "monthly" },
          { path: "/skills", priority: "0.8", changefreq: "monthly" },
          { path: "/education", priority: "0.7", changefreq: "monthly" },
          { path: "/achievements", priority: "0.7", changefreq: "monthly" },
          { path: "/resume", priority: "0.7", changefreq: "monthly" },
        ];

        const projects = db
          .prepare("SELECT slug, updated_at FROM projects WHERE published = 1 ORDER BY sort_order ASC")
          .all() as { slug: string; updated_at: string }[];

        const urls = [
          ...staticPaths.map(
            (p) =>
              `  <url>\n    <loc>${absoluteUrl(p.path, siteUrl)}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
          ),
          ...projects.map(
            (p) =>
              `  <url>\n    <loc>${absoluteUrl(`/projects/${p.slug}`, siteUrl)}</loc>\n    <lastmod>${(p.updated_at || "").replace(" ", "T")}Z</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`,
          ),
        ].join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
