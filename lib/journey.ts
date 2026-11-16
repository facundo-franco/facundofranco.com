// The founder timeline on the homepage, oldest first. Dates are only those on
// record: the original note, the ScoutHalo repository history (ScoutNYC v1
// built 30 Mar 2026; rebranded ScoutHalo 28 May 2026 — development dates, not
// public launches), the build-room photo, the Delaware certificate of
// incorporation (9 Sep 2026). Anything undated uses neutral chronology
// ("Before", "Today", "Next"). The DataCamp webinar is told on /about and
// /building-scouthalo, not here: this line is the company's.

export type Milestone = {
  id: string;
  when: string;
  title: string;
  text: string;
  href: string;
  /** A real image, or a text tile (a name over two short mono lines) when there is none. */
  image?: { src: string; alt: string; position?: string; contain?: boolean };
  place?: { name: string; lat: string; lon: string };
  /** The forward-looking end of the line. */
  next?: boolean;
};

export const JOURNEY: Milestone[] = [
  {
    id: "operating",
    when: "Before ScoutHalo",
    title: "Learning to operate",
    text: "A year and a half running day-to-day operations for a Mercado Libre seller in Montevideo: 30–50 orders a day.",
    href: "/about#operating",
    image: {
      src: "/images/montevideo-palacio-salvo.webp",
      alt: "Palacio Salvo on Plaza Independencia, Montevideo, under a clear blue sky.",
      position: "50% 32%",
    },
  },
  {
    id: "note",
    when: "9 Oct 2025",
    title: "The note",
    text: "“App para encontrar lugares especificos para cada creador de contenido.”",
    href: "/building-scouthalo#the-idea",
    image: {
      src: "/images/scouthalo-original-note-october-2025.webp",
      alt: "The original iPhone note, dated 9 October 2025.",
      position: "50% 8%",
    },
  },
  {
    id: "scoutnyc",
    when: "Mar 2026",
    title: "ScoutNYC",
    text: "The first version: a hand-built library of New York shoot locations. I was the database.",
    href: "/building-scouthalo#the-first-version",
    image: {
      src: "/images/scoutnyc-01-landing.webp",
      alt: "The ScoutNYC landing page on iPhone.",
      position: "50% 22%",
    },
  },
  {
    id: "scouthalo",
    when: "May 2026",
    title: "ScoutHalo",
    text: "A new name, and a better approach: let AI find and evaluate places instead of adding them by hand.",
    href: "/building-scouthalo#all-in",
    image: { src: "/images/scouthalo-mark.webp", alt: "The ScoutHalo mark.", contain: true },
  },
  {
    id: "all-in",
    when: "Jun–Aug 2026",
    title: "All in",
    text: "Three months full-time in one small room in Uruguay, building the first real version.",
    href: "/building-scouthalo#all-in",
    image: {
      src: "/images/scouthalo-build-room-uruguay-2026.jpg",
      alt: "The small room in Uruguay where ScoutHalo was built.",
      position: "50% 45%",
    },
  },
  {
    id: "incorporated",
    when: "9 Sep 2026",
    title: "ScoutHalo, Inc.",
    text: "Incorporated in Delaware, United States.",
    href: "/building-scouthalo#incorporated",
    image: {
      src: "/images/scouthalo-inc-delaware-certificate-2026.webp",
      alt: "The Delaware certificate of incorporation of ScoutHalo, Inc.",
      position: "50% 12%",
    },
  },
  {
    id: "live",
    when: "Today",
    title: "Live",
    text: "Free and Pro plans, with working payments. Still early, with its first users.",
    href: "/building-scouthalo#today",
    image: {
      src: "/images/scouthalo-home-mobile-october-2026.webp",
      alt: "ScoutHalo's homepage on a phone.",
      position: "50% 20%",
    },
  },
  {
    id: "next",
    when: "Next",
    title: "The next stage",
    text: "Funding, a founding team, and the first paying customers, from wherever gives ScoutHalo the best chance.",
    href: "/now",
    place: { name: "Wherever is best", lat: "San Francisco", lon: "Miami · elsewhere" },
    next: true,
  },
];
