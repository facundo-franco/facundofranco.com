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
              I started in e-commerce, where I got close to the day-to-day reality of acquiring
              customers, converting them, and operating a business.
            </p>
            <p>
              That eventually pushed me toward building products myself. I built Sella, an AI sales
              agent for e-commerce, and started spending more of my time building with AI.
            </p>
            <p>
              ScoutHalo came out of that path. Today I&apos;m focused on building intelligence for the
              physical world, starting with how production teams discover and evaluate locations.
            </p>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
