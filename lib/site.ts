// Central site constants. Everything that could change lives here.

export const SITE = {
  url: "https://facundofranco.com",
  name: "Facundo Franco",
  title: "Facundo Franco — Founder & CEO of ScoutHalo",
  description:
    "Facundo Franco is the Founder & CEO of ScoutHalo, an AI-powered search engine for real-world places. Making the physical world searchable. Based in Uruguay, with Miami next.",
  ogImage: "/images/facundo-franco-founder-scouthalo.png",
} as const;

// Founder role, used verbatim wherever the site names it.
export const ROLE = "Founder & CEO of ScoutHalo";

// ScoutHalo's one-line positioning, as scouthalo.com states it.
export const SCOUTHALO_TAGLINE = "Making the physical world searchable.";

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

// Primary destinations, shared by the header and footer. ScoutHalo is the
// external product site; the pages are full destinations (home sections
// preview them); Connect jumps to the footer's contact links on any page.
export const NAV = [
  { label: "ScoutHalo", href: SCOUTHALO_URL, kind: "external" },
  { label: "About", href: "/about", kind: "page" },
  { label: "Building ScoutHalo", href: "/building-scouthalo", kind: "page" },
  { label: "Now", href: "/now", kind: "page" },
  { label: "Connect", href: "#contact", kind: "connect" },
] as const;

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


// Last meaningful content change per page (ISO dates). Feeds sitemap.xml and
// structured data; update a page's date whenever its content changes.
export const PAGE_UPDATED = {
  "/": "2026-10-24",
  "/about": "2026-10-24",
  "/building-scouthalo": "2026-10-24",
  "/now": "2026-10-24",
  "/exposure": "2026-10-24",
  "/privacy": "2026-10-24",
} as const;
