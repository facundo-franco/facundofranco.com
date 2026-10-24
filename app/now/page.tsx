import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { EMAIL, NOW_UPDATED, SCOUTHALO_URL, mailto } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Now — Facundo Franco",
  description:
    "What Facundo Franco is working on now: making ScoutHalo a product people value, raising funding, building a founding team in Miami, earning a place in the market, and growing as a founder.",
  path: "/now",
});

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

// Planned founding roles. Not open positions: no start date or funding is
// implied until both are confirmed.
const ROLES = [
  {
    title: "Founding AI / Backend Engineer",
    focus: "The search pipeline, the AI reasoning behind each result, and the systems that serve it.",
  },
  {
    title: "Founding Product Engineer",
    focus: "The product end to end: search, results, saved places, collections, and plans.",
  },
  {
    title: "Founding Data / Location Intelligence Engineer",
    focus: "Place data, enrichment, and the evidence behind every recommendation.",
  },
  {
    title: "Founding Product Designer",
    focus: "How people describe what they need, understand the results, and decide.",
  },
  {
    title: "Founding Brand / Communications Lead",
    focus: "How ScoutHalo is told, and how the people it's for find it.",
  },
] as const;

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
            Last updated — {NOW_UPDATED}
          </p>
          <p className="profile-intro reveal-load" style={d(180)}>
            ScoutHalo is live in early access, and ScoutHalo, Inc. is incorporated in Delaware.
            These are my priorities for what comes next.
          </p>
          <ol className="now-index reveal-load" style={d(240)} aria-label="Priorities">
            <li>
              <a href="#building">01 · Product</a>
            </li>
            <li>
              <a href="#raising">02 · Funding</a>
            </li>
            <li>
              <a href="#team">03 · Founding team</a>
            </li>
            <li>
              <a href="#market">04 · Market</a>
            </li>
            <li>
              <a href="#miami">05 · Miami</a>
            </li>
            <li>
              <a href="#growing">06 · As a founder</a>
            </li>
          </ol>
        </header>

        <Priority id="building" index="01 · Product" title="A product people value.">
          <p>
            My first priority is turning ScoutHalo into something people genuinely use and value,
            not just something that works.
          </p>
          <p>
            That means improving it with the people we&apos;re building for — travelers, remote
            workers, event planners, creators, and production teams — and learning from real
            usage.
          </p>
          <p>
            The first version exists. The work now is making it part of how people actually find
            the right real-world place and decide on it.
          </p>
        </Priority>

        <Priority id="raising" index="02 · Funding" title="Raising.">
          <p>I&apos;m working to secure the funding ScoutHalo needs to grow.</p>
          <p>
            It&apos;s what makes the rest of this page possible: the founding team, more time with
            the people using ScoutHalo, and the move to Miami.
          </p>
        </Priority>

        <Priority id="team" index="03 · Founding team" title="Who I'm looking for.">
          <p>
            I want to build a talented, ambitious founding team in Miami — people who share the
            vision of making the physical world searchable, and who want to build the product and
            the company, not just a list of features.
          </p>
          <p>These are the founding roles I&apos;m planning for:</p>

          <ul className="role-list">
            {ROLES.map((r) => (
              <li key={r.title}>
                <p className="role-title">{r.title}</p>
                <p className="role-focus">{r.focus}</p>
              </li>
            ))}
          </ul>

          <dl className="role-terms">
            <div>
              <dt>Where</dt>
              <dd>Miami — based there, or willing to relocate</dd>
            </div>
            <div>
              <dt>How</dt>
              <dd>Hybrid, with three days a week together in person</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Planned founding roles, not open positions yet</dd>
            </div>
          </dl>

          <p>
            If one of them sounds like you, I&apos;d like to hear from you early. Tell me which
            role, and what you&apos;ve built.
          </p>
          <p className="role-cta">
            <a href={mailto("Founding team — ScoutHalo")}>{EMAIL}</a>
          </p>
        </Priority>

        <Priority id="market" index="04 · Market" title="Earning a place in the market.">
          <p>
            I want ScoutHalo to build a meaningful presence in its market: to become what people
            reach for when they need to find the right real-world place.
          </p>
          <p>That kind of presence has to be earned through the product, one person at a time.</p>
        </Priority>

        <Priority id="miami" index="05 · Miami" title="Building from Miami.">
          <p>
            I&apos;m planning to relocate to Miami, specifically around Brickell, to build the
            next stage of ScoutHalo.
          </p>
          <p>
            The move has four purposes: building the company, recruiting talent for the founding
            team, connecting with investors, and developing partnerships.
          </p>
          <p>
            Miami is also becoming a larger business and technology center. The idea is to build
            where those people are, rather than automatically defaulting to the Bay Area.
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
        <Priority id="growing" index="06 · As a founder" title="Growing as a founder.">
          <p>
            I&apos;m still early as a founder, and I want to keep growing into the role as
            ScoutHalo grows.
          </p>
          <p>
            Part of that is speaking more in public. The DataCamp webinar was a start; I&apos;d
            like to do more talks, podcasts, and conversations about AI, search, and building a
            company.
          </p>
          <p className="role-cta">
            <Link href="/talks">Talks and invitations →</Link>
          </p>
        </Priority>

        <Reveal as="aside" className="profile-next">
          <p className="eyebrow">Next</p>
          <h2 className="profile-heading">This page will change.</h2>
          <p className="profile-next-text">
            As things happen — capital raised, first hires, the move to Miami, more people using
            ScoutHalo — I&apos;ll update it here.
          </p>
          <div className="cta-row">
            <Link href="/#contact" className="cta-link">
              Work with me →
            </Link>
            <a
              href={SCOUTHALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link cta-link-quiet"
            >
              Visit scouthalo.com ↗
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
