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
    description:
      "Building ScoutHalo, the AI-powered location intelligence platform for production teams and creative agencies.",
    images: [
      {
        url: SITE.ogImage,
        width: 1280,
        height: 1280,
        alt: "Facundo Franco, Founder and CEO of ScoutHalo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: "Building AI-powered location intelligence for production teams.",
    images: [SITE.ogImage],
  },
};

type PageMetaInput = {
  title?: string;
  description?: string;
  path: string;
  ogType?: "website" | "article" | "profile";
};

// Small helper so pages don't hand-roll canonical + OG each time.
// Next replaces (does not deep-merge) openGraph/twitter per route, so we emit
// the complete objects here.
export function pageMetadata({ title, description, path, ogType = "website" }: PageMetaInput): Metadata {
  const ogTitle = title ? `${title} — Facundo Franco` : SITE.title;
  const desc = description ?? SITE.description;
  return {
    // Omit when absent so the layout's default title/description are inherited
    // (passing `undefined` would suppress them).
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      siteName: "Facundo Franco",
      locale: "en_US",
      url: SITE.url + path,
      title: ogTitle,
      description: desc,
      images: [
        {
          url: SITE.ogImage,
          width: 1280,
          height: 1280,
          alt: "Facundo Franco, Founder and CEO of ScoutHalo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: desc,
      images: [SITE.ogImage],
    },
  };
}
