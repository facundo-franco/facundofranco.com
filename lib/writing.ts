import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  updatedAt?: string;
  draft: boolean;
  featured: boolean;
  ogImage?: string;
  content: string; // raw MDX body
};

function toDateString(value: unknown): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function readAll(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: (data.title as string) ?? slug,
        description: (data.description as string) ?? "",
        excerpt: data.excerpt as string | undefined,
        category: data.category as string | undefined,
        publishedAt: toDateString(data.publishedAt),
        updatedAt: toDateString(data.updatedAt),
        draft: Boolean(data.draft),
        featured: Boolean(data.featured),
        ogImage: data.ogImage as string | undefined,
        content,
      } satisfies Article;
    });
}

export function getAllArticles(): Article[] {
  return readAll().sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

/** Articles that may be shown publicly — never drafts. */
export function getPublishedArticles(): Article[] {
  return getAllArticles().filter((a) => !a.draft);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

/**
 * Slugs to statically generate. In production, drafts are excluded entirely
 * (combined with `dynamicParams = false`, a draft URL simply 404s).
 * In development, drafts are included so the author can preview them locally.
 */
export function getStaticSlugs(): string[] {
  const isDev = process.env.NODE_ENV !== "production";
  return getAllArticles()
    .filter((a) => isDev || !a.draft)
    .map((a) => a.slug);
}
