"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, TouchEvent } from "react";

export type CarouselSlide = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

// Minimal framed carousel for historical screenshots: one at a time, prev/next,
// a 1 / N count, swipe on touch. No autoplay. Same frame as the Part 01 figure.
export default function StoryCarousel({
  slides,
  caption,
  label,
}: {
  slides: CarouselSlide[];
  caption?: string;
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const last = slides.length - 1;
  const first = slides[0];

  const go = (next: number) => setIndex(Math.max(0, Math.min(last, next)));

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  // Horizontal swipe only; vertical drags keep scrolling the page.
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <figure
      className="chapter-figure story-carousel"
      style={{ "--ratio": first.width / first.height } as CSSProperties}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="post-preview">
        <div
          className="post-preview-frame chapter-figure-frame story-carousel-frame"
          style={{ aspectRatio: `${first.width} / ${first.height}` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={`story-carousel-slide${i === index ? " is-active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
            >
              {/* Served as-is (unoptimized) so the original screenshots are never re-encoded. */}
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="story-carousel-meta">
        {caption ? <figcaption className="chapter-caption">{caption}</figcaption> : <span />}

        <div className="story-carousel-controls">
          <button
            type="button"
            className="story-carousel-button icon-button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous screenshot"
          >
            ←
          </button>
          <span className="story-carousel-count" aria-live="polite">
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            className="story-carousel-button icon-button"
            onClick={() => go(index + 1)}
            disabled={index === last}
            aria-label="Next screenshot"
          >
            →
          </button>
        </div>
      </div>
    </figure>
  );
}
