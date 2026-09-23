import SectionHeader from "./SectionHeader";

// A short founder story — deliberately narrative, not a CV or timeline.
export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader eyebrow="02 · About" title="About.">
          <div className="prose story">
            <p>I&apos;m Facundo Franco, founder of ScoutHalo.</p>
            <p>
              I started in e-commerce, working directly on customer acquisition, conversion, and
              operations. That experience eventually pushed me from operating businesses toward
              building products myself.
            </p>
            <p>I built Sella, an AI sales agent for e-commerce, before starting ScoutHalo.</p>
            <p>
              Today I&apos;m focused on turning ScoutHalo from a working product into a company used
              by production teams around the world.
            </p>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
