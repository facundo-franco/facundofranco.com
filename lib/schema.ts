// Reusable JSON-LD builders. One canonical Person, one ScoutHalo Organization,
// one AgentOperator WebSite — referenced by @id, never duplicated by hand.
import { IDS, SITE, SAME_AS } from "./site";
import type { Article } from "./writing";

type Node = Record<string, unknown>;

export const personRef = () => ({ "@id": IDS.person });

export function personNode(): Node {
  return {
    "@type": "Person",
    "@id": IDS.person,
    name: "Facundo Franco",
    givenName: "Facundo",
    familyName: "Franco",
    url: `${SITE.url}/`,
    image: SITE.url + SITE.ogImage,
    jobTitle: "Founder & CEO",
    description:
      "Founder and CEO of ScoutHalo, an AI-powered location intelligence platform for production teams and creative agencies.",
    worksFor: { "@id": IDS.scouthalo },
    founderOf: { "@id": IDS.scouthalo },
    knowsAbout: [
      "Artificial Intelligence",
      "AI Operators",
      "Location Intelligence",
      "Production AI",
      "Production Location Scouting",
      "Search Systems",
      "Creative Production",
      "B2B SaaS",
    ],
    sameAs: SAME_AS,
  };
}

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": IDS.scouthalo,
    name: "ScoutHalo",
    url: "https://scouthalo.com",
    description:
      "AI-powered location intelligence platform for production teams and creative agencies.",
    founder: personRef(),
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: "en",
    publisher: personRef(),
  };
}

export function agentOperatorNode(): Node {
  return {
    "@type": "WebSite",
    "@id": IDS.agentOperator,
    url: "https://agentoperator.io",
    name: "Agent Operator",
    description: "Defining the AI Operator category in public.",
    author: personRef(),
    creator: personRef(),
  };
}

const graph = (nodes: Node[]) => ({ "@context": "https://schema.org", "@graph": nodes });

export function homeGraph() {
  return graph([websiteNode(), personNode(), organizationNode(), agentOperatorNode()]);
}

export function aboutGraph() {
  return graph([
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/about#page`,
      url: `${SITE.url}/about`,
      name: "About Facundo Franco — Founder & CEO of ScoutHalo",
      isPartOf: { "@id": IDS.website },
      mainEntity: personNode(),
    },
  ]);
}

export function writingGraph() {
  return graph([
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}/writing#page`,
      url: `${SITE.url}/writing`,
      name: "Writing — Facundo Franco",
      description: "Essays on building AI in production, and the discipline of operating it.",
      isPartOf: { "@id": IDS.website },
      author: personRef(),
    },
  ]);
}

export function articleGraph(a: Article) {
  return graph([
    {
      "@type": "BlogPosting",
      "@id": `${SITE.url}/writing/${a.slug}#article`,
      headline: a.title,
      description: a.description,
      url: `${SITE.url}/writing/${a.slug}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/writing/${a.slug}` },
      ...(a.publishedAt ? { datePublished: a.publishedAt } : {}),
      ...(a.updatedAt || a.publishedAt ? { dateModified: a.updatedAt ?? a.publishedAt } : {}),
      image: a.ogImage ? SITE.url + a.ogImage : SITE.url + SITE.ogImage,
      author: personRef(),
      publisher: { "@id": IDS.scouthalo },
      isPartOf: { "@id": IDS.website },
    },
  ]);
}
