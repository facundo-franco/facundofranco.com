import Link from "next/link";
import { getPublishedArticles } from "@/lib/writing";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// Kept deliberately small. Lists only real, published articles — when there
// are none, it's just the heading and the one-line description.
export default function WritingSection() {
  const published = getPublishedArticles();

  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHeader
          eyebrow="04 · Writing"
          title="Writing."
          intro="Notes on building ScoutHalo, location intelligence, AI, and startups."
        />

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
      </div>
    </section>
  );
}
