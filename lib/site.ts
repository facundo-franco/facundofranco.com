// Central site constants. Everything that could change lives here.

export const SITE = {
  url: "https://facundofranco.com",
  name: "Facundo Franco",
  title: "Facundo Franco — Founder & CEO of ScoutHalo",
  description:
    "Facundo Franco is the Founder and CEO of ScoutHalo, an AI-powered location intelligence platform for production teams and creative agencies.",
  ogImage: "/images/facundo-franco-founder-scouthalo.png",
} as const;

export const IDS = {
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
  scouthalo: "https://scouthalo.com/#organization",
  agentOperator: "https://agentoperator.io/#website",
} as const;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
] as const;

export const SOCIALS = [
  { label: "LinkedIn", handle: "/in/facundo-franco", href: "https://www.linkedin.com/in/facundo-franco" },
  { label: "X", handle: "@facundofranco_", href: "https://x.com/facundofranco_" },
  { label: "YouTube", handle: "@FacundoFrancoN", href: "https://www.youtube.com/@FacundoFrancoN" },
  { label: "Instagram", handle: "@facundofranco_1", href: "https://www.instagram.com/facundofranco_1" },
  { label: "TikTok", handle: "@facundofranco_1", href: "https://www.tiktok.com/@facundofranco_1" },
  { label: "Facebook", handle: "/facundofrancon", href: "https://www.facebook.com/facundofrancon" },
] as const;

export const SAME_AS: string[] = SOCIALS.map((s) => s.href);

// Real, planned topics — a roadmap, not fabricated published articles.
export const UPCOMING_ESSAYS = [
  "How to Become an AI Operator",
  "Production Intelligence",
  "AI Needs Operators",
  "Location Intelligence",
] as const;
