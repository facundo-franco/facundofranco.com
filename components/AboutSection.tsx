import Link from "next/link";
import SectionHeader from "./SectionHeader";

// The progression in four steps; the full story lives on /about.
const JOURNEY = [
  { index: "01", step: "Start", value: "Punta del Este, Uruguay" },
  { index: "02", step: "First chapter", value: "E-commerce & operating businesses" },
  { index: "03", step: "Shift", value: "From operating → building products" },
  { index: "04", step: "Now", value: "Founder & CEO of ScoutHalo" },
] as const;

// A short founder introduction that leads to /about: biography on the left,
// a compact founder journey on the right, in the same eyebrow | content frame as the
// other home sections. The fuller story (and the photo) lives on /about.
export default function AboutSection() {
  return (
    <section className="section section-compact" id="about">
      <div className="container">
        <SectionHeader eyebrow="01 · About" title="About.">
          <div className="about-body">
            <div className="about-bio">
              <div className="prose story">
                <p>I&apos;m Facundo Franco, Founder &amp; CEO of ScoutHalo.</p>
                <p>
                  I grew up in Punta del Este, Uruguay. I left university early and spent the next
                  few years experimenting with businesses and learning by doing.
                </p>
                <p>
                  My first real operating experience came in e-commerce, working across pricing,
                  sales, customer experience, and operations. That eventually pushed me from
                  operating businesses toward building products myself.
                </p>
                <p>
                  Today, I&apos;m building ScoutHalo, an AI-powered search engine for real-world
                  places: describe what you need, and find the right place.
                </p>
              </div>

              <div className="about-cta cta-row">
                <Link href="/about" className="cta-link">
                  Read my story →
                </Link>
                {/* Surfaces the featured appearance from /exposure */}
                <Link href="/exposure" className="cta-link cta-link-quiet">
                  DataCamp talk · 700+ live →
                </Link>
              </div>
            </div>

            <aside className="about-meta" aria-labelledby="about-journey-label">
              <p className="about-journey-label" id="about-journey-label">
                The story
              </p>
              <ol className="about-journey">
                {JOURNEY.map((j) => (
                  <li key={j.index}>
                    <p className="about-journey-step">
                      <span className="about-journey-index">{j.index}</span> — {j.step}
                    </p>
                    <p className="about-journey-value">{j.value}</p>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
