import Link from "next/link";
import { NOW_UPDATED } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// Current priorities in four lines; the detail lives on /now. Plans, not results.
const PRIORITIES = [
  { index: "01", label: "Building", value: "Improving ScoutHalo with the people using it." },
  { index: "02", label: "Raising", value: "Raising capital for ScoutHalo's next stage." },
  { index: "03", label: "Founding team", value: "Planning a small founding team, together in Miami." },
  { index: "04", label: "Miami", value: "Preparing to relocate to Brickell." },
] as const;

export default function NowSection() {
  return (
    <section className="section section-compact now" id="now" aria-labelledby="now-title">
      <div className="container">
        <SectionHeader eyebrow="04 · Now" title="Now." titleId="now-title">
          <p className="now-updated">Last updated · {NOW_UPDATED}</p>
          <p className="now-lead-text">
            ScoutHalo is live in early access, and the company is legally established in the U.S.
            This is what I&apos;m working on next.
          </p>

          <ol className="now-roadmap">
            {PRIORITIES.map((p) => (
              <li key={p.index} className="now-step">
                <p className="now-step-head">
                  <span className="now-step-index">{p.index}</span>
                  {p.label}
                </p>
                <p className="now-step-value">{p.value}</p>
              </li>
            ))}
          </ol>

          <div className="cta-row">
            <Link href="/now" className="cta-link">
              Read the full update →
            </Link>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
