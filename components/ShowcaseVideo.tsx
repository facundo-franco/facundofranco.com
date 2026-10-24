"use client";

import { useEffect, useRef, useState } from "react";

// Muted, looping product video. It loads nothing until it nears the viewport
// (preload="none" + poster), plays only while visible, and pauses off-screen.
// With reduced motion it never autoplays: the poster shows with a play button.
// The source has no audio track worth playing (it is silent), so there is no
// sound toggle; only play/pause, which autoplaying motion over 5s needs anyway.
export default function ShowcaseVideo({
  sources,
  poster,
  label,
}: {
  /** In order of preference; the browser downloads only the first it can play. */
  sources: { src: string; type: string }[];
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // A deliberate pause (or reduced motion) wins over scroll-driven autoplay.
  const userPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <div className="showcase-video-frame">
      <video
        ref={ref}
        className="showcase-video"
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </video>
      <button
        type="button"
        className="showcase-video-toggle icon-button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {playing ? (
          <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
            <rect x="1" y="1" width="3.5" height="12" fill="currentColor" />
            <rect x="7.5" y="1" width="3.5" height="12" fill="currentColor" />
          </svg>
        ) : (
          <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
            <path d="M2 1.2v11.6L11 7z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
