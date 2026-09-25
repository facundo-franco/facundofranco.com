// Central site constants. Everything that could change lives here.

export const SITE = {
  url: "https://facundofranco.com",
  name: "Facundo Franco",
  title: "Facundo Franco — Founder of ScoutHalo",
  description:
    "Facundo Franco is the founder of ScoutHalo, building location intelligence for production teams. Building from Uruguay, with Miami next.",
  ogImage: "/images/facundo-franco-founder-scouthalo.png",
} as const;

export const IDS = {
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
  scouthalo: "https://scouthalo.com/#organization",
} as const;

export const SCOUTHALO_URL = "https://scouthalo.com";

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

export const EMAIL = "hello@scouthalo.com";

// Public profiles linked from the site (footer Connect). Also the Person's
// sameAs in structured data — only profiles the site itself shows.
export const SOCIALS = [
  { label: "X", href: "https://x.com/facundofranco_" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/facundo-franco" },
  { label: "Instagram", href: "https://www.instagram.com/facundofranco_1" },
  { label: "YouTube", href: "https://www.youtube.com/@facundofrancon" },
] as const;

export const SAME_AS: string[] = SOCIALS.map((s) => s.href);

