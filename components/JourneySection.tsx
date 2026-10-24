import Image from "next/image";
import Link from "next/link";
import { JOURNEY } from "@/lib/journey";
import SectionHeader from "./SectionHeader";

// The founder timeline: one line from the first operating job to Miami.
// A horizontal rail on desktop (it scrolls sideways if the row is too wide),
// a vertical list on mobile. Each stop links to its full story.
export default function JourneySection() {
  return (
    <section className="section journey" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeader
          eyebrow="03 · The journey"
          title="From a note to a company."
          titleId="journey-title"
          intro="How ScoutHalo came together, in the order it happened. Each step links to the full story."
        />

        <div className="journey-track" role="region" aria-label="Founder timeline" tabIndex={0}>
          <ol className="journey-list">
            {JOURNEY.map((m) => (
              <li key={m.id} className={`journey-stop${m.next ? " journey-stop-next" : ""}`}>
                <p className="journey-when">{m.when}</p>
                <div className="journey-media" aria-hidden={m.image ? undefined : true}>
                  {m.image ? (
                    <Image
                      src={m.image.src}
                      alt={m.image.alt}
                      fill
                      sizes="(max-width: 720px) 88px, 180px"
                      className={m.image.contain ? "journey-media-contain" : undefined}
                      style={m.image.position ? { objectPosition: m.image.position } : undefined}
                    />
                  ) : m.place ? (
                    <span className="journey-place">
                      <span className="journey-place-name">{m.place.name}</span>
                      <span className="journey-place-coords">
                        <span>{m.place.lat}</span> <span>{m.place.lon}</span>
                      </span>
                    </span>
                  ) : null}
                </div>
                <h3 className="journey-title">
                  {/* The whole stop is clickable through this link */}
                  <Link href={m.href} className="journey-link">
                    {m.title}
                  </Link>
                </h3>
                <p className="journey-text">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="cta-row journey-ctas">
          <Link href="/about" className="cta-link">
            Read my story →
          </Link>
          <Link href="/building-scouthalo" className="cta-link cta-link-quiet">
            How ScoutHalo was built →
          </Link>
        </div>
      </div>
    </section>
  );
}
