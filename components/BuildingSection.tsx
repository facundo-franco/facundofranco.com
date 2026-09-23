import { SCOUTHALO_URL } from "@/lib/site";
import PostPreview from "./PostPreview";
import SectionHeader from "./SectionHeader";

// What I'm building now. ScoutHalo is the center of gravity of the site.
export default function BuildingSection() {
  return (
    <section className="section" id="scouthalo">
      <div className="container">
        <SectionHeader eyebrow="01 · ScoutHalo" title="Building ScoutHalo.">
          <div className="building">
            <div className="work-flagship">
              <p className="work-lede">
                ScoutHalo is location intelligence for production teams, helping them discover,
                evaluate, and prepare shoot-ready locations.
              </p>
              <p className="work-body">
                I built the first version from Uruguay and am now working toward the next stage:
                bringing it to production teams in the U.S. and building the company from Miami.
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

            <PostPreview
              src="/images/scouthalo-iphone-mockup.webp"
              width={924}
              height={1702}
              alt="ScoutHalo on iPhone: the Scout search screen with recent location scouts."
            />
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
