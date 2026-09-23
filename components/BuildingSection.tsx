import { SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// What I'm building now. ScoutHalo is the center of gravity of the site.
export default function BuildingSection() {
  return (
    <section className="section" id="scouthalo">
      <div className="container">
        <SectionHeader eyebrow="01 · Now" title="Building ScoutHalo.">
          <div className="work-flagship">
            <p className="work-lede">
              ScoutHalo is location intelligence for production teams. It helps teams discover,
              evaluate, and prepare shoot-ready locations.
            </p>
            <a
              href={SCOUTHALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              Visit ScoutHalo ↗
            </a>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
