import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getPublishedArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  // Only published articles — drafts are never listed.
  const articles: MetadataRoute.Sitemap = getPublishedArticles().map((a) => ({
    url: `${SITE.url}/writing/${a.slug}`,
    lastModified: a.updatedAt ?? a.publishedAt ?? now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...articles];
}
