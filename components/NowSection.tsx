import Link from "next/link";
import { EMAIL, SCOUTHALO_URL } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// Where things stand today and what comes next — text only, closing the page.
export default function NowSection() {
  return (
    <section className="section section-compact" id="now">
      <div className="container">
        <SectionHeader eyebrow="04 · Now" title="Now.">
          <div className="prose story">
            <p>ScoutHalo has moved from an idea to a working product.</p>
            <p>
              I&apos;m now putting V1 in the hands of production teams and agencies, learning from
              how they use it, and continuing to sharpen the product around real production
              workflows.
            </p>
            <p>
              I&apos;ve established the company in the U.S. and I&apos;m raising capital to take
              ScoutHalo into its next stage.
            </p>
            <p>
              The focus now is simple: better product, more teams using it, and building the
              company around what works.
            </p>
          </div>

          <div className="work-actions">
            <a
              href={SCOUTHALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              Explore ScoutHalo ↗
            </a>
            <Link href="/story" className="product-link product-link-quiet">
              Read the story →
            </Link>
            <a href={`mailto:${EMAIL}`} className="product-link product-link-quiet">
              Get in touch ↗
            </a>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
