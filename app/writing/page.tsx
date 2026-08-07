import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import WritingRoadmap from "@/components/WritingRoadmap";
import { pageMetadata } from "@/lib/metadata";
import { writingGraph } from "@/lib/schema";
import { getPublishedArticles } from "@/lib/writing";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description: "Essays on building AI in production, and the discipline of operating it.",
  path: "/writing",
});

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function WritingPage() {
  const published = getPublishedArticles();

  return (
    <main>
      <JsonLd data={writingGraph()} />

      {/* Hero */}
      <section className="page-hero" id="top">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            Writing
          </Reveal>
          <Reveal as="h1" delay={80}>
            Writing.
          </Reveal>
          <Reveal as="p" className="page-lede" delay={160}>
            Essays on building AI in production, and the discipline of operating it.
          </Reveal>
        </div>
      </section>

      {/* Index */}
      <section className="section" id="index">
        <div className="container">
          {published.length > 0 ? (
            <Reveal as="ul" className="writing-list">
              {published.map((a) => (
                <li key={a.slug}>
                  <Link href={`/writing/${a.slug}`} className="writing-card">
                    <div className="writing-card-meta">
                      {a.category ? <span className="writing-card-cat">{a.category}</span> : null}
                      <span className="writing-card-date">{formatDate(a.publishedAt)}</span>
                    </div>
                    <div className="writing-card-body">
                      <h3>{a.title}</h3>
                      <p>{a.excerpt ?? a.description}</p>
                      <span className="writing-card-readlink">Read →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </Reveal>
          ) : null}

          <Reveal as="p" className="eyebrow" style={{ marginBottom: "26px" }}>
            Upcoming essays
          </Reveal>

          <WritingRoadmap delay={80} />

          <Reveal as="p" className="roadmap-note">
            Published as they&apos;re ready — no fixed dates.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
