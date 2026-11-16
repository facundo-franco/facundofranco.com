import Image from "next/image";
import Link from "next/link";
import { SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";
import ShowcaseVideo from "./ShowcaseVideo";

// What ScoutHalo does today. Every capability mirrors scouthalo.com (Nov 2026);
// the only forward-looking line is the one labelled "The ambition".
const CAPABILITIES = [
  {
    title: "Describe it",
    text: "Search in plain words: the kind of place, where, when, and what matters.",
  },
  {
    title: "Or show it",
    text: "Start from a photo or a screenshot, and find real places that share its look.",
  },
  {
    title: "Understand the fit",
    text: "Every result explains why it fits, and what to confirm before you go.",
  },
  {
    title: "Decide",
    text: "Save places, organize them into collections, and compare a shortlist side by side.",
  },
] as const;

const USE_CASES = [
  "Going out",
  "Travel",
  "Work & study",
  "Experiences",
  "Venues",
  "Creators & production",
] as const;

// The product, presented editorially: the London product preview video beside
// what ScoutHalo does and who it's for.
export default function ShowcaseSection() {
  return (
    <section className="section showcase" id="building" aria-labelledby="showcase-title">
      <div className="container">
        <SectionHeader
          eyebrow="01 · What I'm building"
          titleId="showcase-title"
          titleClassName="showcase-title"
          title={
            <>
              <span className="showcase-mark" aria-hidden="true">
                <Image src="/images/scouthalo-mark.webp" alt="" width={1254} height={1254} sizes="64px" />
              </span>
              ScoutHalo.
            </>
          }
        >
          <p className="showcase-lead">
            Describe what you need, or start from a photo, and ScoutHalo finds real places,
            explains why each one fits, and helps you decide.
          </p>
        </SectionHeader>

        <div className="showcase-body">
          <figure className="showcase-stage">
            <p className="showcase-preview-tag">Product preview</p>
            <ShowcaseVideo
              sources={[
                { src: "/videos/scouthalo-london-gardens.webm", type: "video/webm" },
                { src: "/videos/scouthalo-london-gardens.mp4", type: "video/mp4" },
              ]}
              poster="/videos/scouthalo-london-gardens-poster.webp"
              label="ScoutHalo product preview: searching “Beautiful quiet gardens and hidden courtyards in central London”, then browsing matching places on a map, opening Medici Courtyard to see why it fits, and getting a route there."
            />
            <figcaption className="showcase-caption">
              London · gardens &amp; courtyards
            </figcaption>
          </figure>

          <div className="showcase-details">
            <ol className="showcase-capabilities">
              {CAPABILITIES.map((c, i) => (
                <li key={c.title}>
                  <p className="showcase-capability-head">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {c.title}
                  </p>
                  <p className="showcase-capability-text">{c.text}</p>
                </li>
              ))}
            </ol>

            <dl className="showcase-status">
              <div>
                <dt>Today</dt>
                <dd>
                  Live, with Free and Pro plans and working payments. Still early, with its first
                  users.
                </dd>
              </div>
              <div>
                <dt>The ambition</dt>
                <dd>
                  A global platform for discovering places: the first thing people reach for when
                  they need to find somewhere real.
                </dd>
              </div>
            </dl>

            <div className="showcase-uses">
              <p className="showcase-uses-label">One search for</p>
              <ul className="showcase-chips">
                {USE_CASES.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <div className="cta-row">
                <a href={SCOUTHALO_URL} target="_blank" rel="noopener noreferrer" className="cta-link">
                  Visit scouthalo.com ↗
                </a>
                <Link href="/building-scouthalo" className="cta-link cta-link-quiet">
                  How it started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
