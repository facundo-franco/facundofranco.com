import Link from "next/link";
import { NOW_UPDATED } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// Current priorities in four lines; the detail lives on /now. Plans, not results.
const PRIORITIES = [
  { index: "01", label: "Funding", value: "Preparing to raise the first round, to give ScoutHalo real runway." },
  { index: "02", label: "Founding team", value: "Finding exceptional early people who want real ownership." },
  { index: "03", label: "Product", value: "Improving ScoutHalo from how people actually use it." },
  { index: "04", label: "Customers", value: "Finding the first paying customers, and validating that the demand is real." },
] as const;

export default function NowSection() {
  return (
    <section className="section section-compact now" id="now" aria-labelledby="now-title">
      <div className="container">
        <SectionHeader eyebrow="03 · Now" title="Now." titleId="now-title">
          <p className="now-updated">Last updated · {NOW_UPDATED}</p>
          <p className="now-lead-text">
            The product exists. These four things decide what happens to it next.
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
