import Image from "next/image";
import type { ReactNode } from "react";
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

// One chapter of the /story page: copy left, optional framed figure right.
// Chapters stack as sections, so new parts can be appended without layout work.
export default function StoryChapter({
  id,
  eyebrow,
  title,
  figure,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  figure?: ChapterFigure;
  children: ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title}>
          <div className={`chapter${figure ? "" : " chapter-text-only"}`}>
            <div className="prose chapter-copy">{children}</div>

            {figure ? (
              <figure className="chapter-figure">
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
            ) : null}
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
