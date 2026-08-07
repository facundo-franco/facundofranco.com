import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import WritingRoadmap from "./WritingRoadmap";

export default function WritingPreview() {
  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHeader
          eyebrow="02 · Writing"
          title="Writing."
          intro="Essays on building AI in production, and the discipline of operating it."
        />

        <WritingRoadmap />

        <Reveal as="p" className="roadmap-note">
          Published as they&apos;re ready — no fixed dates.
        </Reveal>

        <Link href="/writing" className="product-link">
          Visit the writing index →
        </Link>
      </div>
    </section>
  );
}
