import type { CSSProperties } from "react";
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
          <p className="eyebrow reveal-load">Building &amp; operating AI</p>

          <h1 className="reveal-load" style={d(80)}>
            Facundo
            <br />
            Franco.
          </h1>

          <p className="hero-description reveal-load" style={d(160)}>
            Founder of <strong>ScoutHalo</strong>. I build AI products, and research the emerging{" "}
            <strong>AI Operator</strong> category — how AI gets operated in production.
          </p>

          <div className="hero-actions reveal-load" style={d(240)}>
            <MagneticButton href="https://scouthalo.com" className="button button-primary">
              Explore ScoutHalo ↗
            </MagneticButton>
            <MagneticButton href="https://agentoperator.io" className="button button-secondary">
              AgentOperator ↗
            </MagneticButton>
          </div>
        </div>

        <Portrait priority delay={120} />
      </div>
    </section>
  );
}
