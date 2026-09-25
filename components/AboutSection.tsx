import Link from "next/link";
import { CONNECT } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const FACTS = [
  { label: "Next", value: "Uruguay → Miami" },
  { label: "Building", value: "ScoutHalo" },
  { label: "Background", value: "E-commerce → Products" },
  { label: "Focus", value: "Location intelligence for production teams" },
] as const;

// LinkedIn first here, then X.
const ABOUT_LINKS = ["LinkedIn", "X"].flatMap((label) => CONNECT.filter((c) => c.label === label));

// A short founder introduction that leads to /about: biography on the left,
// editorial facts on the right, in the same eyebrow | content frame as the
// other home sections. The fuller story (and the photo) lives on /about.
export default function AboutSection() {
  return (
    <section className="section section-compact" id="about">
      <div className="container">
        <SectionHeader eyebrow="01 · About" title="About.">
          <div className="about-body">
            <div className="about-bio">
              <div className="prose story">
                <p>I&apos;m Facundo Franco, founder of ScoutHalo.</p>
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
                  Today, I&apos;m building ScoutHalo, a location intelligence platform for
                  production teams.
                </p>
              </div>

              <div className="about-cta">
                <Link href="/about" className="product-link">
                  Read more →
                </Link>
              </div>
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
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
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
