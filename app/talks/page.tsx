import type { Metadata } from "next";
import type { CSSProperties } from "react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import TalkCard from "@/components/TalkCard";
import { pageMetadata } from "@/lib/metadata";
import { talksGraph } from "@/lib/schema";
import { TALKS } from "@/lib/talks";

export const metadata: Metadata = pageMetadata({
  title: "Talks — Facundo Franco",
  description:
    "Facundo Franco's first public talk: a DataCamp webinar on becoming an AI agent operator, and what he learned building ScoutHalo with AI.",
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
          <p className="eyebrow reveal-load">Talks</p>
          <h1 className="talks-page-title reveal-load" style={d(80)}>
            Talks.
          </h1>
          <p className="talks-intro reveal-load" style={d(140)}>
            So far, one: my first time speaking in public, about building ScoutHalo with AI
            agents.
          </p>
        </header>

        <div className="talks-list">
          {TALKS.map((t) => (
            <Reveal key={t.id} as="div">
              <TalkCard talk={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
