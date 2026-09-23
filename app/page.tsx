import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BuildingSection from "@/components/BuildingSection";
import AboutSection from "@/components/AboutSection";
import NowSection from "@/components/NowSection";
import SpeakingSection from "@/components/SpeakingSection";
import JsonLd from "@/components/JsonLd";
import { homeGraph } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ path: "/", ogType: "profile" });

export default function HomePage() {
  return (
    <main>
      <JsonLd data={homeGraph()} />
      <Hero />
      <BuildingSection />
      <AboutSection />
      <SpeakingSection />
      <NowSection />
    </main>
  );
}
