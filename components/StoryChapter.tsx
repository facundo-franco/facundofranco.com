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
};

// One chapter of the /building-scouthalo page: copy left, optional framed figure right.
// Chapters stack as sections, so new parts can be appended without layout work.
// `aside` takes a custom right-column visual (e.g. a carousel) in place of `figure`.
export default function StoryChapter({
  id,
  eyebrow,
  title,
  figure,
  aside,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
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
            <div className="prose chapter-copy">{children}</div>

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
                    {/* Served as-is (unoptimized) so the original screenshot is never re-encoded. */}
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={figure.width}
                      height={figure.height}
                      unoptimized
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
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
