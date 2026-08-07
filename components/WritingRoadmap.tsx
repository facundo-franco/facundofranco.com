import { UPCOMING_ESSAYS } from "@/lib/site";
import Reveal from "./Reveal";

// A roadmap of real, planned topics — greyed and "coming soon".
// Not fabricated published articles; no dates, no fake metadata.
export default function WritingRoadmap({ delay = 0 }: { delay?: number }) {
  return (
    <Reveal as="ul" className="roadmap" delay={delay}>
      {UPCOMING_ESSAYS.map((title, i) => (
        <li className="roadmap-item" key={title}>
          <span className="roadmap-index">{String(i + 1).padStart(2, "0")}</span>
          <span className="roadmap-title">{title}</span>
          <span className="roadmap-status">Coming soon</span>
        </li>
      ))}
    </Reveal>
  );
}
