import type { Metadata } from "next";
import type { CSSProperties } from "react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import TalkCard from "@/components/TalkCard";
import { pageMetadata } from "@/lib/metadata";
import { talksGraph } from "@/lib/schema";
import { mailto } from "@/lib/site";
import { TALKS } from "@/lib/talks";

export const metadata: Metadata = pageMetadata({
  title: "Talks — Facundo Franco",
  description:
    "Talks and conversations with Facundo Franco, Founder & CEO of ScoutHalo — including a DataCamp webinar on becoming an AI agent operator, with 700+ people live.",
  path: "/talks",
});

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function TalksPage() {
  return (
    <main id="main" className="talks-page">
      <JsonLd data={talksGraph(TALKS)} />
      <div className="container">
        <header className="talks-hero">
          <p className="eyebrow reveal-load">Talks · Webinars · Interviews</p>
          <h1 className="talks-page-title reveal-load" style={d(80)}>
            Talks.
          </h1>
          <p className="talks-intro reveal-load" style={d(140)}>
            Conversations about building ScoutHalo and working with AI agents.
          </p>
        </header>

        <div className="talks-list">
          {TALKS.map((t) => (
            <Reveal key={t.id} as="div">
              <TalkCard talk={t} />
            </Reveal>
          ))}
        </div>

        <Reveal as="aside" className="talks-invite">
          <p>Hosting a talk, podcast, or interview about AI, search, or building a company?</p>
          <a href={mailto("Speaking invitation")} className="cta-link">
            Invite me to speak →
          </a>
        </Reveal>
      </div>
    </main>
  );
}
