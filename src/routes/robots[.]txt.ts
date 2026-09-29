import { createFileRoute } from "@tanstack/react-router";

import { getDb } from "@/lib/db.server";
import { DEFAULT_SITE_URL, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const db = getDb();
        const settings = db.prepare("SELECT site_url FROM site_settings WHERE id = 1").get() as
          | { site_url: string }
          | undefined;
        const siteUrl = settings?.site_url || DEFAULT_SITE_URL;

        const body = [
          "User-agent: *",
          "Allow: /",
          "Disallow: /admin",
          "Disallow: /api",
          "",
          `Sitemap: ${absoluteUrl("/sitemap.xml", siteUrl)}`,
          "",
        ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
