"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Escape closes the menu; if focus was inside it, hand focus back to the
    // toggle so keyboard users aren't dropped onto <body>.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const header = toggleRef.current?.closest("header");
      if (header?.contains(document.activeElement)) toggleRef.current?.focus();
      setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 721px)");
    const onMq = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Tabbing out of the header closes the menu instead of leaving it over the page.
  // Only when focus lands on something else: a null relatedTarget can be a click
  // on a link that doesn't take focus (Safari), which must still go through.
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    const next = e.relatedTarget as Node | null;
    if (open && next && !e.currentTarget.contains(next)) setOpen(false);
  };

  return (
    <header className={`site-header${open ? " nav-open" : ""}`} onBlur={onBlur}>
      <nav className="nav container" aria-label="Main navigation">
        {/* Accessible name is the visible name; the monogram is decorative */}
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            FF
          </span>
          <span className="brand-name">Facundo Franco</span>
        </Link>

        <button
          ref={toggleRef}
          className="nav-toggle icon-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
        </button>

        <ul className="nav-links" id="primary-nav">
          {NAV.map((item) => (
            <li key={item.href} className={item.kind === "connect" ? "nav-connect" : undefined}>
              {item.kind === "page" ? (
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  {...(item.kind === "external"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
