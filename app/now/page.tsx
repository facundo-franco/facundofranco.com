import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { EMAIL, NOW_UPDATED, SCOUTHALO_URL, mailto } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Now — Facundo Franco",
  description:
    "Facundo Franco's current focus: preparing to raise ScoutHalo's first round, building a founding team, improving the product, and finding paying customers.",
  path: "/now",
});

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

// Where things stand, in plain facts. Update with NOW_UPDATED; never round up.
const STATUS = [
  { term: "Product", value: "Live, with Free and Pro plans and working payments" },
  { term: "Users", value: "A small number so far, no paying customers yet" },
  { term: "Team", value: "Sole founder, full-time" },
  { term: "Company", value: "ScoutHalo, Inc. · Delaware, September 2026" },
  { term: "Based", value: "Uruguay · open to relocating" },
] as const;

// Areas where the first people would own the most. Not open positions: no
// start date or funding is implied until both are confirmed.
const ROLES = [
  {
    title: "AI / Backend Engineering",
    focus: "The search pipeline, the AI reasoning behind each result, and the systems that serve it.",
  },
  {
    title: "Product Engineering",
    focus: "The product end to end: search, results, saved places, collections, and plans.",
  },
  {
    title: "Data / Location Intelligence",
    focus: "Place data, enrichment, and the evidence behind every recommendation.",
  },
  {
    title: "Product Design",
    focus: "How people describe what they need, understand the results, and decide.",
  },
  {
    title: "Brand & Growth",
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
            ScoutHalo works, and people can pay for it. Nobody has yet. That&apos;s the honest
            starting point for everything on this page.
          </p>
          <ol className="now-index reveal-load" style={d(240)} aria-label="Priorities">
            <li>
              <a href="#raising">01 · Funding</a>
            </li>
            <li>
              <a href="#team">02 · Founding team</a>
            </li>
            <li>
              <a href="#building">03 · Product</a>
            </li>
            <li>
              <a href="#customers">04 · Customers</a>
            </li>
            <li>
              <a href="#location">05 · Location</a>
            </li>
          </ol>
        </header>

        <Reveal as="section" className="glance">
          <p className="eyebrow">Where things stand</p>
          <dl className="glance-list">
            {STATUS.map((g) => (
              <div key={g.term}>
                <dt>{g.term}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Priority id="raising" index="01 · Funding" title="Preparing to raise.">
          <p>
            I&apos;m preparing to raise ScoutHalo&apos;s first round. Until now it has been built on
            my own time and my family&apos;s support.
          </p>
          <p>
            Funding is what lets me move faster on the rest of this page: bringing in the first
            people, putting ScoutHalo in front of the people it&apos;s for, and having enough
            runway to find out what works.
          </p>
        </Priority>

        <Priority id="team" index="02 · Founding team" title="Who I'm looking for.">
          <p>
            I&apos;m ScoutHalo&apos;s sole founder, and I&apos;m not looking for a cofounder. What I
            want to build is a strong founding team: a few exceptional people who can take real
            ownership of big parts of the product and the company, and who want that
            responsibility.
          </p>
          <p>These are the areas where that matters most:</p>

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
              <dd>Wherever ScoutHalo is built — see Location below</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>No open positions yet; I&apos;d rather meet the right people early</dd>
            </div>
          </dl>

          <p>
            If one of these sounds like you, tell me which, and what you&apos;ve built.
          </p>
          <p className="role-cta">
            <a href={mailto("Founding team — ScoutHalo")}>{EMAIL}</a>
          </p>
        </Priority>

        <Priority id="building" index="03 · Product" title="A product people come back to.">
          <p>
            The first version works. Now it has to be good enough that people return to it on
            their own: results they can trust, clear reasons why each place fits, and less
            distance between a question and a decision.
          </p>
          <p>
            I want those improvements to come from how people actually use ScoutHalo, not from
            what I assume they need.
          </p>
        </Priority>

        <Priority id="customers" index="04 · Customers" title="Proving people want it.">
          <p>
            ScoutHalo has no paying customers yet. Getting the first ones is the most important
            test in front of it.
          </p>
          <p>
            That means finding out who needs it most — travelers, people planning a night out,
            remote workers, event planners, creators, production teams — and where it&apos;s
            useful enough that people will pay. I&apos;d rather learn that from real usage and
            real conversations than decide it in advance.
          </p>
        </Priority>

        <Priority id="location" index="05 · Location" title="Where I'll build.">
          <p>
            I&apos;m based in Uruguay today. I&apos;m open to relocating wherever gives ScoutHalo
            the best chance to succeed: where the right people, investors, and customers are.
          </p>
          <p>
            San Francisco and Miami are both real options. I haven&apos;t decided, and the
            decision will follow what&apos;s best for the company.
          </p>
        </Priority>

        <Reveal as="aside" className="profile-next">
          <p className="eyebrow">Next</p>
          <h2 className="profile-heading">This page will change.</h2>
          <p className="profile-next-text">
            As things happen — funding, the first people on the team, the first paying
            customers, a decision on where to build — I&apos;ll update it here.
          </p>
          <div className="cta-row">
            <Link href="/#contact" className="cta-link">
              Get in touch →
            </Link>
            <a
              href={SCOUTHALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link cta-link-quiet"
            >
              Try ScoutHalo ↗
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
