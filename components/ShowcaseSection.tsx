import Image from "next/image";
import Link from "next/link";
import { SCOUTHALO_TAGLINE, SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";

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

// The product, presented editorially: a captured browser window with the
// phone view set over its corner, then what it does and who it's for.
export default function ShowcaseSection() {
  return (
    <section className="section showcase" id="building" aria-labelledby="showcase-title">
      <div className="container">
        <SectionHeader
          eyebrow="02 · What I'm building"
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
          <p className="showcase-tagline">{SCOUTHALO_TAGLINE}</p>
          <p className="showcase-lead">
            An AI-powered search engine for real-world places. Describe what you need, and
            ScoutHalo finds real places, explains why each one fits, and helps you decide.
          </p>
        </SectionHeader>

        <figure className="showcase-stage">
          <div className="showcase-browser">
            <div className="showcase-browser-bar" aria-hidden="true">
              <span className="showcase-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="showcase-url">www.scouthalo.com</span>
            </div>
            <Image
              src="/images/scouthalo-home-desktop-october-2026.webp"
              alt="ScoutHalo's homepage: “AI search for places and things to do. Describe what you need. Find the right place.” above a search box with the example “Boutique hotel for a romantic weekend in Porto.”"
              width={1600}
              height={700}
              sizes="(max-width: 720px) 92vw, (max-width: 1300px) 80vw, 1000px"
              quality={90}
            />
          </div>
          <div className="showcase-phone">
            <Image
              src="/images/scouthalo-home-mobile-october-2026.webp"
              alt="ScoutHalo on a phone, with the example search “Rooftop bar with sunset views for drinks with friends in Lisbon.”"
              width={924}
              height={1327}
              sizes="(max-width: 720px) 46vw, 230px"
              quality={90}
            />
          </div>
          <figcaption className="showcase-caption">
            scouthalo.com · captured October 2026 · live in early access
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
    </section>
  );
}
