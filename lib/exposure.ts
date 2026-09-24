// External appearances and coverage: talks, webinars, podcasts, interviews,
// press, events. Newest first; the first entry is featured on /exposure.

export type ExposureEntry = {
  id: string;
  outlet: string;
  title: string;
  summary: string;
  metric?: { value: string; label: string };
  location?: string;
  date: string;
  // Only set when there is a confirmed link to the appearance itself.
  url?: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    // Where the screenshot itself comes from (e.g. the post it shows).
    href?: string;
  };
};

export const EXPOSURE: ExposureEntry[] = [
  {
    id: "datacamp-ai-agent-operator",
    outlet: "DataCamp",
    title: "Becoming an AI Agent Operator.",
    summary:
      "A conversation about building and operating AI agents in real-world workflows, including lessons from building ScoutHalo.",
    metric: { value: "700+", label: "People joined live" },
    location: "New York",
    date: "September 11, 2026",
    image: {
      src: "/images/datacamp-session-x-post.png",
      width: 601,
      height: 551,
      alt: "Facundo Franco's post on X about his DataCamp webinar on becoming an AI Agent Operator, with a screenshot of the live session.",
      href: "https://x.com/facundofranco_/status/2098448293063807117",
    },
  },
];
