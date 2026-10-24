// Talks, webinars, podcasts and interviews. Newest first; the first entry is
// featured on the homepage. Only confirmed facts: a recording link is set only
// when one is verified.

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
    // The post the screenshot shows, when there is one.
    href?: string;
    hrefLabel?: string;
  };
};

export const TALKS: Talk[] = [
  {
    id: "datacamp-ai-agent-operator",
    host: "DataCamp",
    title: "Becoming an AI Agent Operator.",
    format: "Webinar",
    summary:
      "A conversation about building and operating AI agents in real-world workflows, including lessons from building ScoutHalo.",
    date: "September 11, 2026",
    isoDate: "2026-09-11",
    location: "New York",
    audience: { value: "700+", label: "People joined live" },
    image: {
      src: "/images/datacamp-session-x-post.png",
      width: 601,
      height: 551,
      alt: "Facundo Franco's post on X about his DataCamp webinar on becoming an AI Agent Operator, with a screenshot of the live session.",
      href: "https://x.com/facundofranco_/status/2098448293063807117",
      hrefLabel: "View the post on X",
    },
  },
];
