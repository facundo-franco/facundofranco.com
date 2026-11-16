import type { CSSProperties } from "react";
import { ROLE } from "@/lib/site";
import MagneticButton from "./MagneticButton";
import Portrait from "./Portrait";

// Above-the-fold: CSS entrance (reveal-load), not JS reveal, so the LCP text
// paints immediately.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow reveal-load">{ROLE}</p>

          {/* The space before <br> keeps the accessible name "Facundo Franco." */}
          <h1 className="reveal-load" style={d(40)}>
            Facundo <br />
            Franco.
          </h1>

          <p className="hero-description reveal-load" style={d(80)}>
            I&apos;m a founder from Uruguay. After years of trying ideas and learning to run a
            business from the inside, I&apos;m building <strong>ScoutHalo</strong> full-time: AI
            search that finds real-world places for what you need, and tells you why they fit.
          </p>

          <div className="hero-actions reveal-load" style={d(160)}>
            <MagneticButton href="#building" external={false} className="button button-primary">
              See what I&apos;m building ↓
            </MagneticButton>
            <a href="#contact" className="button button-secondary">
              Get in touch
            </a>
          </div>
        </div>

        <Portrait priority delay={120} />
      </div>
    </section>
  );
}
