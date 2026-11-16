// Central site constants. Everything that could change lives here.

export const SITE = {
  url: "https://facundofranco.com",
  name: "Facundo Franco",
  title: "Facundo Franco — Founder & CEO of ScoutHalo",
  description:
    "Facundo Franco is the founder and CEO of ScoutHalo, AI search for real-world places. The story so far, what's built, and what comes next.",
  ogImage: "/images/facundo-franco-founder-scouthalo.png",
  // 800px copy of the portrait for structured data and small avatars (the
  // original PNG is ~2 MB and is only ever served through next/image).
  personImage: "/images/facundo-franco-800.jpg",
} as const;

// Founder role, used verbatim wherever the site names it.
export const ROLE = "Founder & CEO of ScoutHalo";

// ScoutHalo's one-line positioning, as scouthalo.com states it (Nov 2026).
export const SCOUTHALO_TAGLINE = "Find the right place. Know why it fits.";

// ScoutHalo in a phrase, used wherever the site names what it is.
export const SCOUTHALO_WHAT = "AI search for real-world places";

// The Person @id matches the founder reference published by scouthalo.com.
// The Organization @id is the one scouthalo.com itself publishes; it is an
// identifier, so it keeps that site's form even though links use www.
export const IDS = {
  person: `${SITE.url}/#facundo-franco`,
  website: `${SITE.url}/#website`,
  scouthalo: "https://scouthalo.com/#organization",
} as const;

export const SCOUTHALO_URL = "https://www.scouthalo.com";
export const SCOUTHALO_LINKEDIN = "https://www.linkedin.com/company/scouthalo/";

// Primary destinations, shared by the header and footer. "ScoutHalo" is the
// founder story on this site; the product site is linked separately and
// always marked external (↗). Contact jumps to the homepage's Get in touch.
// /talks still exists (one webinar) but is linked from the story, not the nav.
export const NAV = [
  { label: "About", href: "/about", kind: "page" },
  { label: "ScoutHalo", href: "/building-scouthalo", kind: "page" },
  { label: "Now", href: "/now", kind: "page" },
  { label: "Contact", href: "/#contact", kind: "connect" },
] as const;

// Prefilled subjects so each audience's email is easy to triage.
export const mailto = (subject?: string) =>
  `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const EMAIL = "facundofn1906@gmail.com";

// Public profiles linked from the site (footer Connect). Also the Person's
// sameAs in structured data — only profiles the site itself shows.
export const SOCIALS = [
  { label: "X", href: "https://x.com/facundofranco_" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/facundo-franco" },
  { label: "Instagram", href: "https://www.instagram.com/facundofranco_1" },
  { label: "YouTube", href: "https://www.youtube.com/@facundofrancon" },
] as const;

export const SAME_AS: string[] = SOCIALS.map((s) => s.href);

// X handle, credited on shared links (twitter:creator).
export const X_HANDLE = "@facundofranco_";


// The /now page's "last updated" stamp, also shown in the homepage's Now
// section. Update it whenever a priority moves.
export const NOW_UPDATED = "November 2026";

// Last meaningful content change per page (ISO dates). Feeds sitemap.xml and
// structured data; update a page's date whenever its content changes.
export const PAGE_UPDATED = {
  "/": "2026-11-16",
  "/about": "2026-11-16",
  "/building-scouthalo": "2026-11-16",
  "/now": "2026-11-16",
  "/talks": "2026-11-16",
  "/privacy": "2026-10-24",
} as const;
