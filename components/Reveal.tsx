"use client";

import { createElement, useEffect, useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

// One shared observer for the whole page, plus a self-healing fallback so
// above-the-fold content is never left hidden if async callbacks are throttled.
let observer: IntersectionObserver | null = null;
let fallbackArmed = false;

function show(el: Element) {
  el.classList.add("is-visible");
}

function ensureObserver(): IntersectionObserver {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  if (!fallbackArmed) {
    fallbackArmed = true;
    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) {
          show(el);
          observer?.unobserve(el);
        }
      });
    };
    requestAnimationFrame(revealInView);
    window.setTimeout(revealInView, 400);
    window.addEventListener("load", revealInView);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) revealInView();
    });
  }

  return observer;
}

/** Observe an element for reveal. */
function registerReveal(el: Element): () => void {
  const io = ensureObserver();
  io.observe(el);
  return () => io.unobserve(el);
}

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  id?: string;
};

export default function Reveal({ as = "div", children, className, delay = 0, style, id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    return registerReveal(el);
  }, []);

  const mergedStyle = { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties;

  return createElement(as, { ref, id, "data-reveal": "", className, style: mergedStyle }, children);
}
