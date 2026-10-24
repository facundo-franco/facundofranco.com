import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import SectionHeader from "./SectionHeader";

type ChapterFigure = {
  src: string;
  // Intrinsic size; the frame takes this aspect ratio so the image is shown
  // whole — never cropped or stretched.
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** Above the fold on some screens: load eagerly with high priority. */
  priority?: boolean;
};

// One chapter of the /building-scouthalo page: copy left, optional framed figure right.
// `lead` is the opening paragraph: on mobile the figure sits right after it, next to
// the text it illustrates, instead of after the whole chapter.
// `aside` takes a custom right-column visual (e.g. a carousel) in place of `figure`.
export default function StoryChapter({
  id,
  eyebrow,
  title,
  lead,
  figure,
  aside,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  figure?: ChapterFigure;
  aside?: ReactNode;
  children: ReactNode;
}) {
  const hasVisual = Boolean(figure || aside);

  return (
    <section className="section story-chapter" id={id}>
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title}>
          <div className={`chapter${hasVisual ? "" : " chapter-text-only"}`}>
            {lead ? <div className="prose chapter-copy chapter-lead">{lead}</div> : null}

            {figure ? (
              <figure
                className="chapter-figure"
                style={{ "--ratio": figure.width / figure.height } as CSSProperties}
              >
                <div className="post-preview">
                  <div
                    className="post-preview-frame chapter-figure-frame"
                    style={{ aspectRatio: `${figure.width} / ${figure.height}` }}
                  >
                    {/* Figures are at most 360px wide: serve a matching variant. */}
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={figure.width}
                      height={figure.height}
                      sizes="(max-width: 720px) 340px, 360px"
                      quality={90}
                      priority={figure.priority}
                    />
                  </div>
                </div>
                {figure.caption ? (
                  <figcaption className="chapter-caption">{figure.caption}</figcaption>
                ) : null}
              </figure>
            ) : (
              aside
            )}

            <div className="prose chapter-copy chapter-body">{children}</div>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
