import type { MetadataRoute } from "next";
import { PAGE_UPDATED, SITE } from "@/lib/site";
import { getPublishedArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const route = (
    path: keyof typeof PAGE_UPDATED,
    changeFrequency: "monthly" | "yearly",
    priority: number
  ) => ({
    url: `${SITE.url}${path}`,
    lastModified: PAGE_UPDATED[path],
    changeFrequency,
    priority,
  });

  const routes: MetadataRoute.Sitemap = [
    route("/", "monthly", 1),
    route("/building-scouthalo", "monthly", 0.8),
    route("/about", "monthly", 0.8),
    route("/now", "monthly", 0.8),
    route("/exposure", "monthly", 0.6),
    route("/privacy", "yearly", 0.3),
  ];

  // Only published articles — drafts are never listed.
  const articles: MetadataRoute.Sitemap = getPublishedArticles().map((a) => ({
    url: `${SITE.url}/writing/${a.slug}`,
    lastModified: a.updatedAt ?? a.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...articles];
}
