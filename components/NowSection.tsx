import SectionHeader from "./SectionHeader";

// A plain current-status snapshot — intentionally not cards, stats, or a timeline.
export default function NowSection() {
  return (
    <section className="section" id="now">
      <div className="container">
        <SectionHeader eyebrow="03 · Now" title="Now.">
          <ul className="prose story now-list">
            <li>Building ScoutHalo.</li>
            <li>Talking with production teams and agencies.</li>
            <li>Preparing for the next stage of the company in the U.S.</li>
          </ul>
        </SectionHeader>
      </div>
    </section>
  );
}
