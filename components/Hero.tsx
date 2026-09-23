import type { CSSProperties } from "react";
import Link from "next/link";
import { CONNECT, SCOUTHALO_URL } from "@/lib/site";
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
          <h1 className="reveal-load">
            Facundo
            <br />
            Franco.
          </h1>

          <p className="hero-description reveal-load" style={d(80)}>
            Founder of <strong>ScoutHalo</strong>, building location intelligence for production
            teams.
          </p>

          <div className="hero-actions reveal-load" style={d(160)}>
            <MagneticButton href={SCOUTHALO_URL} className="button button-primary">
              Explore ScoutHalo ↗
            </MagneticButton>
            <nav className="text-links" aria-label="More">
              <Link href="/story">My story →</Link>
              {CONNECT.map((c) => (
                <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Portrait priority delay={120} />
      </div>
    </section>
  );
}
