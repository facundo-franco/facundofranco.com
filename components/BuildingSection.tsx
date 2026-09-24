import Image from "next/image";
import Link from "next/link";
import { SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// What I'm building now. ScoutHalo is the center of gravity of the site.
export default function BuildingSection() {
  return (
    <section className="section" id="scouthalo">
      <div className="container">
        <SectionHeader eyebrow="01 · ScoutHalo" title="Building ScoutHalo.">
          <div className="building">
            <div className="work-flagship">
              {/* Brand signature: mark + status, upper-right of the card on desktop */}
              <div className="work-brand">
                <span className="work-brand-mark">
                  <Image
                    src="/images/scouthalo-mark.webp"
                    alt="ScoutHalo"
                    width={1254}
                    height={1254}
                    sizes="60px"
                  />
                </span>
                <span className="work-brand-status">
                  V1 · <span className="work-brand-live">Live</span>
                </span>
              </div>
              <p className="work-lede">
                ScoutHalo is location intelligence for production teams, helping them discover,
                evaluate, and prepare shoot-ready locations.
              </p>
              <p className="work-body">
                The first version is live. I built it from Uruguay, established the company in the
                U.S., and am now working with production teams while preparing to raise capital for
                the next stage.
              </p>
              <div className="work-actions">
                <a
                  href={SCOUTHALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-link"
                >
                  Visit ScoutHalo ↗
                </a>
                <Link href="/story" className="product-link product-link-quiet">
                  Read the story →
                </Link>
              </div>
            </div>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
