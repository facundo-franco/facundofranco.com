// The founder timeline on the homepage, oldest first. Dates are only those on
// record: the original note, the ScoutHalo repository history (ScoutNYC v1
// built 30 Mar 2026; rebranded ScoutHalo 28 May 2026 — development dates, not
// public launches), the build-room photo, and the DataCamp talk. Anything undated uses neutral chronology ("Before", "Next").

export type Milestone = {
  id: string;
  when: string;
  title: string;
  text: string;
  href: string;
  /** A real image, or a place tile (name + coordinates) when there is none. */
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
    text: "About two years inside an e-commerce business on Mercado Libre, in Montevideo.",
    href: "/about#operating",
    place: { name: "Montevideo", lat: "34.90° S", lon: "56.16° W" },
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
    text: "Building the first version: a hand-built library of New York shoot locations.",
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
    text: "Rebranding ScoutNYC as ScoutHalo, ahead of the winter spent building it.",
    href: "/building-scouthalo#all-in",
    image: { src: "/images/scouthalo-mark.webp", alt: "The ScoutHalo mark.", contain: true },
  },
  {
    id: "all-in",
    when: "Winter 2026",
    title: "All in",
    text: "About three months in one small room in Uruguay, building the first real version.",
    href: "/building-scouthalo#all-in",
    image: {
      src: "/images/scouthalo-build-room-uruguay-2026.jpg",
      alt: "The small room in Uruguay where ScoutHalo was built.",
      position: "50% 45%",
    },
  },
  {
    id: "datacamp",
    when: "11 Sep 2026",
    title: "DataCamp",
    text: "A webinar on becoming an AI agent operator. 700+ people joined live.",
    href: "/talks",
    image: {
      src: "/images/datacamp-session-x-post.png",
      alt: "Screenshot of the live DataCamp session.",
      position: "50% 78%",
    },
  },
  {
    id: "miami",
    when: "Next",
    title: "Miami",
    text: "Relocating to Brickell to build the company and its founding team.",
    href: "/now#miami",
    image: {
      src: "/images/brickell-miami.jpg",
      alt: "Brickell, Miami at dusk.",
      position: "50% 50%",
    },
    next: true,
  },
];
