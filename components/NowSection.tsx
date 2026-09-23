import SectionHeader from "./SectionHeader";

// A plain current-status snapshot — intentionally not cards, stats, or a timeline.
export default function NowSection() {
  return (
    <section className="section" id="now">
      <div className="container">
        <SectionHeader eyebrow="04 · Now" title="Now.">
          <ul className="prose story now-list">
            <li>Building ScoutHalo.</li>
            <li>Working with production teams and agencies as I shape the product.</li>
            <li>Preparing to build the next stage of the company from Miami.</li>
          </ul>
        </SectionHeader>
      </div>
    </section>
  );
}
