import type { CSSProperties } from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import MagneticButton from "@/components/MagneticButton";
import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/metadata";
import { aboutGraph } from "@/lib/schema";
import { SOCIALS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Facundo Franco, Founder and CEO of ScoutHalo — short and long bios, background, and where to find his work.",
  path: "/about",
  ogType: "profile",
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={aboutGraph()} />

      {/* Hero */}
      <section className="page-hero" id="top">
        <div className="container about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow reveal-load">About</p>
            <h1 className="reveal-load" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
              Facundo Franco
            </h1>
            <p className="page-lede reveal-load" style={{ "--reveal-delay": "160ms" } as CSSProperties}>
              Founder of <strong>ScoutHalo</strong>. I build AI products, and research the emerging{" "}
              <strong>AI Operator</strong> category.
            </p>
            <div
              className="about-actions reveal-load"
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              <MagneticButton href="https://scouthalo.com" className="button button-primary">
                Explore ScoutHalo ↗
              </MagneticButton>
              <MagneticButton href="#contact" className="button button-secondary" external={false}>
                Get in touch
              </MagneticButton>
            </div>
          </div>

          <Portrait priority delay={120} />
        </div>
      </section>

      {/* Bio */}
      <section className="section" id="bio">
        <div className="container">
          <SectionHeader eyebrow="01 · Bio" title="Founder bio." intro="Short and long, ready to quote." />

          <Reveal as="div" className="subsection">
            <p className="subsection-label">Short bio</p>
            <p className="bio-short">
              Facundo Franco is the founder and CEO of ScoutHalo, and researches the emerging AI
              Operator category at AgentOperator.
            </p>
          </Reveal>

          <Reveal as="div" className="subsection">
            <p className="subsection-label">Full bio</p>
            <div className="prose">
              <p>
                Facundo Franco is the founder and CEO of <strong>ScoutHalo</strong>, an AI location
                intelligence platform that helps production teams discover, evaluate, and prepare
                shoot-ready locations.
              </p>
              <p>
                Alongside the company, he researches the emerging <strong>AI Operator</strong>{" "}
                category — how AI systems are operated in production — in public at AgentOperator.
              </p>
              <p>
                Before ScoutHalo, he worked across growth and operations: acquisition, analytics,
                marketplaces, and commercial systems.
              </p>
              <p>He is based in Uruguay and relocating to Miami.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Elsewhere */}
      <section className="section" id="elsewhere">
        <div className="container">
          <SectionHeader eyebrow="02 · Elsewhere" title="Find me online." />

          <Reveal as="div" className="social-grid">
            {SOCIALS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-link-name">{s.label}</span>
                <span className="social-link-handle">{s.handle}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
