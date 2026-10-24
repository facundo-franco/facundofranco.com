import Link from "next/link";
import { TALKS } from "@/lib/talks";
import SectionHeader from "./SectionHeader";
import TalkCard from "./TalkCard";

// The featured (most recent) appearance; /talks holds the full list.
export default function TalksSection() {
  const [featured] = TALKS;
  if (!featured) return null;

  return (
    <section className="section talks" id="talks" aria-labelledby="talks-title">
      <div className="container">
        <SectionHeader eyebrow="05 · Talks" title="Talks." titleId="talks-title" />
        <TalkCard talk={featured} headingLevel={3} />
        {TALKS.length > 1 ? (
          <div className="cta-row">
            <Link href="/talks" className="cta-link">
              All talks →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
