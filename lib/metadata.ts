import type { Metadata } from "next";
import { SITE } from "./site";

// Base metadata applied to every route; pages override title/description/canonical.
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Facundo Franco",
  },
  description: SITE.description,
  applicationName: "Facundo Franco",
  authors: [{ name: "Facundo Franco", url: SITE.url }],
  robots: "index, follow, max-image-preview:large",
  appleWebApp: {
    capable: true,
    title: "Facundo Franco",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    siteName: "Facundo Franco",
    locale: "en_US",
    url: `${SITE.url}/`,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

type PageMetaInput = {
  /** Full page title, used as-is (no template) for <title>, og:title and twitter:title. */
  title?: string;
  description?: string;
  path: string;
  ogType?: "website" | "article" | "profile";
};

// Small helper so pages don't hand-roll canonical + OG each time.
// Next replaces (does not deep-merge) openGraph/twitter per route, so we emit
// the complete objects here. og:image / twitter:image come from each route's
// opengraph-image / twitter-image files.
export function pageMetadata({ title, description, path, ogType = "website" }: PageMetaInput): Metadata {
  const fullTitle = title ?? SITE.title;
  const desc = description ?? SITE.description;
  const url = SITE.url + path;
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      ...(ogType === "profile"
        ? { type: "profile", firstName: "Facundo", lastName: "Franco" }
        : { type: ogType }),
      siteName: "Facundo Franco",
      locale: "en_US",
      url,
      title: fullTitle,
      description: desc,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
