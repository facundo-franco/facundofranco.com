import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getPublishedArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/building-scouthalo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/now`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/exposure`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
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
