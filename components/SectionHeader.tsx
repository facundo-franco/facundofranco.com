import type { ReactNode } from "react";
import Reveal from "./Reveal";

// Eyebrow in the left column; title, intro, and any extra content in the right.
export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  titleClassName,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  titleClassName?: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal as="div" className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className={`section-title${titleClassName ? ` ${titleClassName}` : ""}`} id={titleId}>
          {title}
        </h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
        {children}
      </div>
    </Reveal>
  );
}
