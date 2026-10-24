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

// Hero, then 01 What I'm building · 02 The journey · 03 Now · 04 Talks · 05 Work with me
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
