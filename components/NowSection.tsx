import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

// The next stage, as a short roadmap. Plans and direction, not results.
const ROADMAP = [
  { index: "01", label: "Raising", value: "Capital for the next stage" },
  { index: "02", label: "Building", value: "The early ScoutHalo team" },
  { index: "03", label: "Next", value: "Miami · Brickell" },
] as const;

// Where things are headed — the forward-looking close of the home page.
export default function NowSection() {
  return (
    <section className="section section-compact" id="now">
      <div className="container">
        <SectionHeader eyebrow="03 · Now" title="Now.">
          <div className="now-body">
            <div className="now-lead">
              <p className="now-subhead">Turning ScoutHalo into a company.</p>
              <p className="now-status">
                <span>
                  ScoutHalo · <span className="now-status-on">V1 live</span>
                </span>
                <span>
                  Next stage → <span className="now-status-on">In progress</span>
                </span>
              </p>
            </div>

            <div className="prose now-copy">
              <p>
                The first version is live. The company is established in the U.S. Now I&apos;m
                working toward the next stage: raising capital, building the early team, and getting
                ScoutHalo into the hands of production teams.
              </p>
              <p className="now-emphasis">The plan is to build from Miami.</p>
              <p>
                Not because it&apos;s the traditional place to build a technology company, but
                because it puts us closer to the market we&apos;re building for: creators, agencies,
                brands, and production.
              </p>
              <p>
                I want ScoutHalo to grow with a small, ambitious team from the beginning — and
                hopefully build that team from Brickell.
              </p>
            </div>

            {/* The destination: Brickell, beside the story on desktop */}
            <figure className="now-photo">
              <div className="now-photo-card">
                <div className="now-photo-frame">
                  {/* Square cover crop of a 3:2 original: the variant must be ~1.5× the
                      frame's width, or the crop upscales it. sizes says so. */}
                  <Image
                    src="/images/brickell-miami.jpg"
                    alt="Brickell, Miami at dusk: a street lined with glass towers and painted murals, traffic heading toward the skyline."
                    width={2000}
                    height={1333}
                    sizes="(max-width: 720px) 106vw, 680px"
                    quality={90}
                  />
                </div>
              </div>
              <figcaption className="now-photo-caption">
                <span className="now-photo-caption-title">Brickell</span>
                <span>Miami, Florida · Next</span>
              </figcaption>
            </figure>

            <ol className="now-roadmap" aria-label="Next stage">
              {ROADMAP.map((step, i) => (
                <li
                  key={step.index}
                  className={`now-step${i === ROADMAP.length - 1 ? " now-step-destination" : ""}`}
                >
                  <p className="now-step-head">
                    <span className="now-step-index">{step.index}</span>
                    {step.label}
                  </p>
                  <p className="now-step-value">{step.value}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* The full, living version of this section */}
          <div className="now-more">
            <Link href="/now" className="product-link">
              View current update →
            </Link>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
