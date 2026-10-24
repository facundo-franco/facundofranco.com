import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ShowcaseSection from "@/components/ShowcaseSection";
import JourneySection from "@/components/JourneySection";
import NowSection from "@/components/NowSection";
import TalksSection from "@/components/TalksSection";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { homeGraph } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
  ogType: "profile",
});

// 01 Introduction · 02 What I'm building · 03 The journey · 04 Now · 05 Talks · 06 Work with me
export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={homeGraph()} />
      <Hero />
      <ShowcaseSection />
      <JourneySection />
      <NowSection />
      <TalksSection />
      <ContactSection />
    </main>
  );
}
