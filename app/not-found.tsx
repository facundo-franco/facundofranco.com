import type { Metadata } from "next";
import Link from "next/link";
import { SCOUTHALO_URL } from "@/lib/site";

// Not indexed, but its links are still followed. (Next also adds its own
// `noindex` tag to not-found responses; this replaces the inherited default.)
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Building ScoutHalo", href: "/building-scouthalo" },
  { label: "Now", href: "/now" },
] as const;

export default function NotFound() {
  return (
    <main id="main" className="notfound">
      <div className="container notfound-inner">
        <p className="eyebrow">404 · Not found</p>
        <h1>Nothing here.</h1>
        <p className="notfound-text">
          This page doesn&apos;t exist, or it has moved. One of these should get you back on track.
        </p>
        <nav className="notfound-links" aria-label="Main pages">
          {DESTINATIONS.map((d) => (
            <Link key={d.href} href={d.href} className="product-link">
              {d.label} →
            </Link>
          ))}
          <a
            href={SCOUTHALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="product-link product-link-quiet"
          >
            ScoutHalo ↗
          </a>
        </nav>
      </div>
    </main>
  );
}
