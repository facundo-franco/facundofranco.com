import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <Reveal as="div" className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className="section-title">{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
    </Reveal>
  );
}
