import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { EXPOSURE } from "@/lib/exposure";
import type { ExposureEntry } from "@/lib/exposure";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Exposure",
  description: "Talks, interviews and features with Facundo Franco and ScoutHalo.",
  path: "/exposure",
});

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

function Entry({ entry, index }: { entry: ExposureEntry; index: number }) {
  const meta = [entry.location, entry.date].filter(Boolean).join(" · ");
  const shot = entry.image ? (
    <Image
      src={entry.image.src}
      alt={entry.image.alt}
      width={entry.image.width}
      height={entry.image.height}
      sizes="(max-width: 900px) 92vw, 560px"
      quality={90}
    />
  ) : null;

  return (
    <Reveal as="article" className="exposure-entry" id={entry.id}>
      <div className="exposure-text">
        <p className="exposure-outlet">
          <span className="exposure-index">{String(index + 1).padStart(2, "0")}</span>
          {entry.outlet}
        </p>
        <h2 className="exposure-title">{entry.title}</h2>
        <p className="exposure-summary">{entry.summary}</p>

        {entry.metric ? (
          <p className="exposure-metric">
            <span className="exposure-metric-value">{entry.metric.value}</span>
            <span className="exposure-metric-label">{entry.metric.label}</span>
          </p>
        ) : null}

        <p className="exposure-meta">{meta}</p>

        {entry.url ? (
          <a href={entry.url} target="_blank" rel="noopener noreferrer" className="product-link">
            View appearance ↗
          </a>
        ) : null}
      </div>

      {entry.image && shot ? (
        <figure className="exposure-figure">
          {entry.image.href ? (
            <a
              href={entry.image.href}
              target="_blank"
              rel="noopener noreferrer"
              className="exposure-shot"
              aria-label={`${entry.outlet}: view the post on X`}
            >
              {shot}
            </a>
          ) : (
            <div className="exposure-shot">{shot}</div>
          )}
        </figure>
      ) : null}
    </Reveal>
  );
}

export default function ExposurePage() {
  return (
    <main className="exposure">
      <div className="container">
        <header className="exposure-hero">
          <p className="eyebrow reveal-load">Talks · Interviews · Features</p>
          <h1 className="exposure-page-title reveal-load" style={d(80)}>
            Exposure.
          </h1>
        </header>

        <div className="exposure-list">
          {EXPOSURE.map((entry, i) => (
            <Entry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
