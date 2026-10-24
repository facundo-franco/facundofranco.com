import Image from "next/image";
import Link from "next/link";
import { SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";
import ShowcaseVideo from "./ShowcaseVideo";

// What ScoutHalo does today. Every line mirrors scouthalo.com (product page,
// October 2026); nothing here is roadmap.
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

// The product, presented editorially: the New York product preview video beside
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
                { src: "/videos/scouthalo-new-york-cafe.mp4", type: "video/mp4" },
                { src: "/videos/scouthalo-new-york-cafe.webm", type: "video/webm" },
              ]}
              poster="/videos/scouthalo-new-york-cafe-poster.webp"
              label="ScoutHalo product preview: searching “I'm in New York, I want a good café to work from”, then browsing real cafés with their evidence, and seeing them on a map."
            />
            <figcaption className="showcase-caption">
              New York · a café to work from
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
