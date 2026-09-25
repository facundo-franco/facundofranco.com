import type { CSSProperties } from "react";
import Link from "next/link";
import { SCOUTHALO_URL } from "@/lib/site";
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
          <p className="eyebrow hero-eyebrow reveal-load">Founder of ScoutHalo</p>

          <h1 className="reveal-load" style={d(40)}>
            Facundo
            <br />
            Franco.
          </h1>

          <p className="hero-description reveal-load" style={d(80)}>
            Founder of <strong>ScoutHalo</strong>. Building location intelligence for production
            teams from Uruguay, with Miami next.
          </p>

          <div className="hero-actions reveal-load" style={d(160)}>
            <MagneticButton href={SCOUTHALO_URL} className="button button-primary">
              Explore ScoutHalo ↗
            </MagneticButton>
            <Link href="/building-scouthalo" className="button button-secondary">
              Building ScoutHalo →
            </Link>
          </div>
        </div>

        <Portrait priority delay={120} />
      </div>
    </section>
  );
}
