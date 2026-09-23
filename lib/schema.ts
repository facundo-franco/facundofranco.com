// Reusable JSON-LD builders. One canonical Person, one ScoutHalo Organization,
// referenced by @id, never duplicated by hand.
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
    jobTitle: "Founder",
    description: "Founder of ScoutHalo, building location intelligence for production teams.",
    worksFor: { "@id": IDS.scouthalo },
    founderOf: { "@id": IDS.scouthalo },
    knowsAbout: [
      "Location Intelligence",
      "Production Location Scouting",
      "Artificial Intelligence",
      "E-commerce",
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
    description: "Location intelligence for production teams.",
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

const graph = (nodes: Node[]) => ({ "@context": "https://schema.org", "@graph": nodes });

export function homeGraph() {
  return graph([websiteNode(), personNode(), organizationNode()]);
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
