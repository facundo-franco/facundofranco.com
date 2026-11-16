// Talks, webinars, podcasts and interviews. Newest first; the first entry is
// listed on /talks (no longer on the homepage). Only confirmed facts: a
// recording link is set only when one is verified; no audience figure is shown
// until its source is confirmed.

export type Talk = {
  id: string;
  host: string;
  /** Display title, in the site's sentence style (ends with a full stop). */
  title: string;
  format: string;
  summary: string;
  /** Display date and the same date as ISO, for structured data. */
  date: string;
  isoDate: string;
  location?: string;
  audience?: { value: string; label: string };
  recordingUrl?: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    /** Shown under the image; say when a screenshot was taken. */
    caption?: string;
    // The post the screenshot comes from, when there is one.
    href?: string;
    hrefLabel?: string;
  };
};

export const TALKS: Talk[] = [
  {
    id: "datacamp-ai-agent-operator",
    host: "DataCamp",
    title: "Becoming an AI Agent Operator.",
    format: "Webinar · First public talk",
    summary:
      "My first time speaking in public: a DataCamp webinar about building and operating AI agents in real-world workflows, where I shared what I'd learned building ScoutHalo by directing AI coding agents.",
    date: "September 11, 2026",
    isoDate: "2026-09-11",
    location: "Online",
    // The live-session frame from Facundo's post on X, cropped to the session
    // itself. Its on-screen counter is a moment in time, so the caption says
    // when; the full post stays one click away.
    image: {
      src: "/images/datacamp-session-live.png",
      width: 552,
      height: 295,
      alt: "The live DataCamp webinar “How to Become an AI Agent Operator”, 27 minutes in: four speakers on video, including Facundo Franco, with the audience chat alongside.",
      caption: "The live session, 27 minutes in.",
      href: "https://x.com/facundofranco_/status/2098448293063807117",
      hrefLabel: "View the post on X",
    },
  },
];
