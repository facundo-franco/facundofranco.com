import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BuildingSection from "@/components/BuildingSection";
import AboutSection from "@/components/AboutSection";
import NowSection from "@/components/NowSection";
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

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={homeGraph()} />
      <Hero />
      <AboutSection />
      <BuildingSection />
      <NowSection />
    </main>
  );
}
