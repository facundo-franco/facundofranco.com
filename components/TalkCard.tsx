import Image from "next/image";
import type { Talk } from "@/lib/talks";

// One appearance: host and format, title, summary, the facts as a short list,
// and the post that documents it. The title is an h2 on /talks and an h3
// inside the homepage's Talks section.
export default function TalkCard({ talk, headingLevel = 2 }: { talk: Talk; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="talk-card" id={talk.id}>
      <div className="talk-text">
        <p className="talk-kicker">
          <span className="talk-host">{talk.host}</span>
          <span className="talk-format">{talk.format}</span>
        </p>
        <Heading className="talk-title">{talk.title}</Heading>
        <p className="talk-summary">{talk.summary}</p>

        <dl className="talk-facts">
          <div>
            <dt>Date</dt>
            <dd>
              <time dateTime={talk.isoDate}>{talk.date}</time>
            </dd>
          </div>
          {talk.location ? (
            <div>
              <dt>Location</dt>
              <dd>{talk.location}</dd>
            </div>
          ) : null}
          {talk.audience ? (
            <div className="talk-fact-audience">
              <dt>{talk.audience.label}</dt>
              <dd>{talk.audience.value}</dd>
            </div>
          ) : null}
        </dl>

        {talk.recordingUrl || talk.image?.href ? (
          <div className="cta-row">
            {talk.recordingUrl ? (
              <a href={talk.recordingUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                Watch the recording ↗
              </a>
            ) : null}
            {talk.image?.href ? (
              <a
                href={talk.image.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-link${talk.recordingUrl ? " cta-link-quiet" : ""}`}
              >
                {talk.image.hrefLabel ?? "View the post"} ↗
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {talk.image ? (
        <figure className="talk-figure">
          <Image
            src={talk.image.src}
            alt={talk.image.alt}
            width={talk.image.width}
            height={talk.image.height}
            sizes="(max-width: 900px) 92vw, 520px"
            quality={90}
          />
        </figure>
      ) : null}
    </article>
  );
}
