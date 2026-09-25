import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { SCOUTHALO_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Now — Facundo Franco",
  description:
    "What Facundo Franco is working on now: raising capital for ScoutHalo, building the early team, reaching production teams, and preparing for the next stage in Miami.",
  path: "/now",
});

// A living page: update the date whenever a priority moves.
const LAST_UPDATED = "September 2026";

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

// One current priority: number, name, then a short first-person note.
function Priority({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="profile-chapter" id={id}>
      <p className="eyebrow">{index}</p>
      <h2 className="profile-heading">{title}</h2>
      <div className="profile-body">{children}</div>
    </Reveal>
  );
}

export default function NowPage() {
  return (
    <main id="main" className="profile">
      <div className="profile-container">
        <header className="profile-hero">
          <p className="eyebrow reveal-load">Now</p>
          <h1 className="profile-title reveal-load" style={d(80)}>
            Now.
          </h1>
          <p className="now-page-updated reveal-load" style={d(120)}>
            Last updated — {LAST_UPDATED}
          </p>
          <p className="profile-intro reveal-load" style={d(180)}>
            ScoutHalo&apos;s first version is live and the company is established in the U.S.
            I&apos;m now working on turning the product into a company.
          </p>
        </header>

        <Priority id="raising" index="01 · Raising" title="Raising.">
          <p>Raising capital for the next stage of ScoutHalo.</p>
          <p>
            It&apos;s what makes the rest of this page possible: the team, the time spent with
            production teams, and the move to Miami.
          </p>
        </Priority>

        <Priority id="building" index="02 · Building" title="Building.">
          <p>Building a small, ambitious early team around the company.</p>
          <p>
            I want ScoutHalo to grow with a small, ambitious team from the beginning — people who
            want to build the product and the company, not just a list of features.
          </p>
        </Priority>

        <Priority id="market" index="03 · Getting into the market" title="Getting into the market.">
          <p>
            Working directly with production teams, learning from real usage, and getting
            ScoutHalo into the hands of the people we&apos;re building it for.
          </p>
          <p>
            The first version exists. The work now is making it part of how teams actually find
            and prepare locations.
          </p>
        </Priority>

        <Priority id="miami" index="04 · Miami" title="Building from Miami.">
          <p>The plan is to build the next stage from Miami, specifically around Brickell.</p>
          <p>
            The point isn&apos;t simply that Miami is exciting. ScoutHalo is being built for
            creators, agencies, brands, and production teams, and being physically close to an
            active content-production market is useful — it&apos;s easier to learn from the
            people you&apos;re building for when you&apos;re around them.
          </p>
          <p>
            Miami is also becoming a larger business and technology center. The idea is to build
            where the market is, rather than automatically defaulting to the Bay Area.
          </p>
        </Priority>
      </div>

      {/* The destination, shown wider than the reading column */}
      <Reveal as="figure" className="now-page-photo">
        <div className="now-page-photo-card">
          {/* Full frame (no crop), so width-based variants stay sharp. */}
          <Image
            src="/images/brickell-miami.jpg"
            alt="Brickell, Miami at dusk: a street lined with glass towers and painted murals, traffic heading toward the skyline."
            width={2000}
            height={1333}
            sizes="(max-width: 940px) 92vw, 884px"
            quality={90}
          />
        </div>
        <figcaption className="now-photo-caption">
          <span className="now-photo-caption-title">Brickell</span>
          <span>Miami, Florida · Next</span>
        </figcaption>
      </Reveal>

      <div className="profile-container">
        <Reveal as="aside" className="profile-next">
          <p className="eyebrow">Next</p>
          <h2 className="profile-heading">This page will change.</h2>
          <p className="profile-next-text">
            As things happen — capital raised, first hires, the move to Miami, new teams using
            ScoutHalo — I&apos;ll update it here.
          </p>
          <div className="cta-row">
            <a href={SCOUTHALO_URL} target="_blank" rel="noopener noreferrer" className="cta-link">
              Explore ScoutHalo ↗
            </a>
            <Link href="/building-scouthalo" className="cta-link cta-link-quiet">
              Building ScoutHalo →
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
