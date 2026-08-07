import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { articleGraph } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getArticleBySlug, getStaticSlugs } from "@/lib/writing";

// Only slugs returned by generateStaticParams are valid — a draft (or unknown)
// URL 404s. In production, drafts are never in that list.
export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  const meta = pageMetadata({
    title: a.title,
    description: a.description,
    path: `/writing/${a.slug}`,
    ogType: "article",
  });
  if (a.draft) meta.robots = "noindex, nofollow";
  return meta;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) notFound();
  if (a.draft && process.env.NODE_ENV === "production") notFound();

  return (
    <main>
      <article className="article">
        <div className="article-container">
          {!a.draft ? <JsonLd data={articleGraph(a)} /> : null}

          {a.draft ? (
            <p className="draft-banner">
              <strong>Draft</strong> · Working draft — not yet published
            </p>
          ) : null}

          {a.category ? <p className="eyebrow">{a.category}</p> : null}
          <h1 className="article-title">{a.title}</h1>
          {a.description ? <p className="article-standfirst">{a.description}</p> : null}

          <div className="author-block">
            <span className="author-avatar">
              <Image src={SITE.ogImage} alt="Facundo Franco" width={42} height={42} />
            </span>
            <span>
              <Link href="/">Facundo Franco</Link>
              <span className="author-role">Founder &amp; CEO of ScoutHalo</span>
            </span>
          </div>

          <div className="article-body">
            <MDXRemote source={a.content} />
          </div>

          <div className="article-footer">
            <Link href="/writing">← All writing</Link>
            <a href="https://scouthalo.com" target="_blank" rel="noopener noreferrer">
              Visit ScoutHalo ↗
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
