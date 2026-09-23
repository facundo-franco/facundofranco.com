import { CONNECT } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const FACTS = [
  { label: "Based in", value: "Uruguay → Miami" },
  { label: "Building", value: "ScoutHalo" },
  { label: "Focus", value: "Location intelligence for production teams" },
] as const;

// LinkedIn first here, then X.
const ABOUT_LINKS = ["LinkedIn", "X"].flatMap((label) => CONNECT.filter((c) => c.label === label));

// A short founder story — deliberately narrative, not a CV or timeline —
// with a small column of editorial facts beside it.
export default function AboutSection() {
  return (
    <section className="section section-compact" id="about">
      <div className="container">
        <SectionHeader eyebrow="02 · About" title="About.">
          <div className="about">
            <div className="prose story">
              <p>I&apos;m Facundo Franco, founder of ScoutHalo.</p>
              <p>
                I started in e-commerce, working directly on customer acquisition, conversion, and
                operations. That experience eventually pushed me from operating businesses toward
                building products myself.
              </p>
              <p>I built Sella, an AI sales agent for e-commerce, before starting ScoutHalo.</p>
              <p>
                Today I&apos;m focused on turning ScoutHalo from a working product into a company
                used by production teams around the world.
              </p>
            </div>

            <aside className="about-meta" aria-label="At a glance">
              <dl className="about-facts">
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <nav className="text-links about-links" aria-label="Profiles">
                {ABOUT_LINKS.map((c) => (
                  <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.label} ↗
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
