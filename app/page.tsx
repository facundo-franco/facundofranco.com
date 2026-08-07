import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BuildingSection from "@/components/BuildingSection";
import WritingPreview from "@/components/WritingPreview";
import ContactSection from "@/components/ContactSection";
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
      <WritingPreview />
      <ContactSection />
    </main>
  );
}
