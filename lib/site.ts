// Central site constants. Everything that could change lives here.

export const SITE = {
  url: "https://facundofranco.com",
  name: "Facundo Franco",
  title: "Facundo Franco — Founder of ScoutHalo",
  description:
    "Facundo Franco is the founder of ScoutHalo, building location intelligence for production teams.",
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
  { label: "Building ScoutHalo", href: "/story", kind: "page" },
  { label: "About", href: "/about", kind: "page" },
  { label: "Now", href: "/now", kind: "page" },
  { label: "Connect", href: "#contact", kind: "connect" },
] as const;

// The few ways to reach me that the site actually surfaces.
export const CONNECT = [
  { label: "X", href: "https://x.com/facundofranco_" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/facundo-franco" },
] as const;

export const EMAIL = "hello@scouthalo.com";

// Every public profile — used only for structured data (sameAs), not shown on the page.
export const SOCIALS = [
  { label: "LinkedIn", handle: "/in/facundo-franco", href: "https://www.linkedin.com/in/facundo-franco" },
  { label: "X", handle: "@facundofranco_", href: "https://x.com/facundofranco_" },
  { label: "YouTube", handle: "@FacundoFrancoN", href: "https://www.youtube.com/@FacundoFrancoN" },
  { label: "Instagram", handle: "@facundofranco_1", href: "https://www.instagram.com/facundofranco_1" },
  { label: "TikTok", handle: "@facundofranco_1", href: "https://www.tiktok.com/@facundofranco_1" },
  { label: "Facebook", handle: "/facundofrancon", href: "https://www.facebook.com/facundofrancon" },
] as const;

export const SAME_AS: string[] = SOCIALS.map((s) => s.href);

