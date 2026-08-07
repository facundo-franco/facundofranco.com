"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { registerReveal } from "./Reveal";
import { SITE } from "@/lib/site";

export default function Portrait({ priority = false, delay = 120 }: { priority?: boolean; delay?: number }) {
  const figureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let unregister: (() => void) | undefined;

    if (reduce) {
      figure.classList.add("is-visible");
    } else {
      unregister = registerReveal(figure);
    }

    const img = figure.querySelector("img");
    if (reduce || !img) return () => unregister?.();

    let raf: number | null = null;
    const update = () => {
      const rect = figure.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
      const shift = Math.max(-1, Math.min(1, offset)) * -16;
      img.style.transform = `translate3d(0,${shift.toFixed(2)}px,0) scale(1.06)`;
      raf = null;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      unregister?.();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <figure
      ref={figureRef}
      className="portrait-card"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div className="portrait-frame">
        <Image
          src={SITE.ogImage}
          alt="Facundo Franco, founder of ScoutHalo"
          fill
          priority={priority}
          sizes="(max-width: 720px) 90vw, 300px"
          quality={90}
        />
      </div>
    </figure>
  );
}
