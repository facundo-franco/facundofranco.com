import Image from "next/image";
import Link from "next/link";
import { SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// An editorial way into /story: the hook, a short origin, and the path from
// note to product. Stage and plans live in the Now section.
export default function BuildingSection() {
  return (
    <section className="section" id="scouthalo">
      <div className="container">
        <SectionHeader eyebrow="02 · Building ScoutHalo" title="Building ScoutHalo.">
          <div className="origin">
            <p className="origin-hook">From a note in my phone to a working product.</p>

            <div className="prose origin-copy">
              <p>
                ScoutHalo started in October 2025 as a simple note: an app for finding specific
                places for different kinds of creators.
              </p>
              <p>
                I built the first version myself from Uruguay. It became ScoutNYC, then evolved into
                ScoutHalo — a location intelligence platform built for production teams.
              </p>
            </div>

            <ol className="origin-path" aria-label="How ScoutHalo came together">
              <li className="origin-step">
                <span className="origin-step-meta">Oct 2025</span>
                <span className="origin-step-title">The note</span>
              </li>
              <li className="origin-arrow" aria-hidden="true">
                →
              </li>
              <li className="origin-step">
                <span className="origin-step-meta">ScoutNYC</span>
                <span className="origin-step-title">First version</span>
              </li>
              <li className="origin-arrow" aria-hidden="true">
                →
              </li>
              <li className="origin-step origin-step-now">
                <span className="origin-step-meta">2026</span>
                <span className="origin-step-title">
                  <span className="origin-mark">
                    <Image
                      src="/images/scouthalo-mark.webp"
                      alt=""
                      width={1254}
                      height={1254}
                      sizes="48px"
                    />
                  </span>
                  ScoutHalo
                </span>
                <span className="origin-step-status">V1 live</span>
              </li>
            </ol>

            <div className="origin-actions">
              <Link href="/story" className="story-cta">
                <span className="story-cta-label">Read the story</span>
                <span className="story-cta-arrow">→</span>
              </Link>
              <a
                href={SCOUTHALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link product-link-quiet"
              >
                Visit ScoutHalo ↗
              </a>
            </div>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
