// Reusable JSON-LD builders. One canonical Person, one ScoutHalo Organization,
// referenced by @id, never duplicated by hand.
import { IDS, ROLE, SAME_AS, SCOUTHALO_LINKEDIN, SCOUTHALO_TAGLINE, SCOUTHALO_URL, SITE } from "./site";
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
    description: `${ROLE}, an AI-powered search engine for real-world places.`,
    // ScoutHalo's side of the relationship is Organization.founder (below).
    worksFor: { "@id": IDS.scouthalo },
    knowsAbout: ["AI search", "Location intelligence", "Product development", "E-commerce operations"],
    sameAs: SAME_AS,
  };
}

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": IDS.scouthalo,
    name: "ScoutHalo",
    url: `${SCOUTHALO_URL}/`,
    slogan: SCOUTHALO_TAGLINE,
    // scouthalo.com's own Organization description, kept word for word.
    description:
      "Find the right real-world place for what you need, and understand whether it actually fits before you go.",
    founder: personRef(),
    sameAs: [SCOUTHALO_LINKEDIN],
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en",
    publisher: personRef(),
    about: personRef(),
  };
}

const graph = (nodes: Node[]) => ({ "@context": "https://schema.org", "@graph": nodes });

export function homeGraph() {
  return graph([websiteNode(), personNode(), organizationNode()]);
}

// /about: a ProfilePage whose subject is the canonical Person.
export function aboutGraph() {
  const url = `${SITE.url}/about`;
  return graph([
    {
      "@type": "ProfilePage",
      "@id": `${url}#webpage`,
      url,
      name: "About Facundo Franco",
      inLanguage: "en",
      isPartOf: { "@id": IDS.website },
      mainEntity: personRef(),
    },
    personNode(),
    organizationNode(),
  ]);
}

// /building-scouthalo: the founder story, as an Article by the Person.
export function storyGraph({
  headline,
  description,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${SITE.url}/building-scouthalo`;
  return graph([
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline,
      description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: SITE.url + image,
      datePublished,
      dateModified,
      inLanguage: "en",
      author: personRef(),
      publisher: personRef(),
      about: { "@id": IDS.scouthalo },
      isPartOf: { "@id": IDS.website },
    },
    personNode(),
    organizationNode(),
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
      publisher: personRef(),
      isPartOf: { "@id": IDS.website },
    },
  ]);
}
