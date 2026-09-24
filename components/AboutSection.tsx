import Image from "next/image";
import Link from "next/link";
import { CONNECT } from "@/lib/site";
import Reveal from "./Reveal";

const FACTS = [
  { label: "Next", value: "Uruguay → Miami" },
  { label: "Building", value: "ScoutHalo" },
  { label: "Background", value: "E-commerce → Products" },
  { label: "Focus", value: "Location intelligence for production teams" },
] as const;

// LinkedIn first here, then X.
const ABOUT_LINKS = ["LinkedIn", "X"].flatMap((label) => CONNECT.filter((c) => c.label === label));

// A short founder story — deliberately narrative, not a CV or timeline —
// with a small photo under the label and a column of editorial facts beside it.
// Same label/heading treatment as SectionHeader, laid out on one grid so the
// photo can sit in the label column on desktop and after the bio on mobile.
export default function AboutSection() {
  return (
    <section className="section section-compact" id="about">
      <div className="container">
        <Reveal as="div" className="about-layout">
          <p className="eyebrow about-label">01 · About</p>
          <h2 className="section-title about-title">About.</h2>

          <figure className="about-photo">
            <div className="about-photo-card">
              <div className="about-photo-frame">
                <Image
                  src="/images/facundo-franco-about.jpg"
                  alt="Facundo Franco standing on a city street, with white apartment buildings behind him."
                  fill
                  sizes="(max-width: 940px) 65vw, 272px"
                  quality={90}
                />
              </div>
            </div>
            <figcaption className="about-photo-caption">Buenos Aires, Argentina — 2026</figcaption>
          </figure>

          <div className="about-bio">
            <div className="prose story">
              <p>I&apos;m Facundo Franco, founder of ScoutHalo.</p>
              <p>
                I grew up in Punta del Este, Uruguay. I left university early and spent the next few
                years experimenting with businesses and learning by doing.
              </p>
              <p>
                My first real operating experience came in e-commerce, working across pricing, sales,
                customer experience, and operations. That eventually pushed me from operating
                businesses toward building products myself.
              </p>
              <p>
                Today, I&apos;m building ScoutHalo, a location intelligence platform for production
                teams.
              </p>
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

          <div className="about-cta">
            <Link href="/about" className="product-link">
              More about me →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
