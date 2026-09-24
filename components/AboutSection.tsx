import Link from "next/link";
import { CONNECT } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const FACTS = [
  { label: "Based in", value: "Uruguay → Miami" },
  { label: "Building", value: "ScoutHalo" },
  { label: "Background", value: "E-commerce → Products" },
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
            <div className="about-bio">
              <div className="prose story">
                <p>I&apos;m Facundo Franco, founder of ScoutHalo.</p>
                <p>
                  I grew up in Punta del Este, Uruguay. My path into building companies wasn&apos;t
                  particularly conventional — I left university early and learned mostly by doing.
                </p>
                <p>
                  I spent several years experimenting with businesses before getting my first real
                  operating experience in e-commerce, working across pricing, sales, customer
                  experience, and operations.
                </p>
                <p>
                  That eventually pushed me from operating businesses toward building products
                  myself.
                </p>
                <p>
                  Today, I&apos;m building ScoutHalo, a location intelligence platform for production
                  teams.
                </p>
              </div>

              <Link href="/about" className="product-link about-more">
                More about me →
              </Link>
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
