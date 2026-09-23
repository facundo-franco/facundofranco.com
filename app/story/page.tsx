import type { Metadata } from "next";
import type { CSSProperties } from "react";
import StoryChapter from "@/components/StoryChapter";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Building ScoutHalo",
  description:
    "How an idea sitting in my Notes turned into ScoutHalo, the company I'm building today.",
  path: "/story",
  ogType: "article",
});

// Above-the-fold: CSS entrance (reveal-load), same as the home hero.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function StoryPage() {
  return (
    <main>
      <header className="story-hero">
        <div className="container">
          <p className="eyebrow reveal-load">The story</p>
          <h1 className="story-hero-title reveal-load" style={d(80)}>
            Building ScoutHalo.
          </h1>
          <p className="story-hero-intro reveal-load" style={d(160)}>
            How an idea sitting in my Notes turned into the company I&apos;m building today.
          </p>
        </div>
      </header>

      <StoryChapter
        id="the-idea"
        eyebrow="01 · The idea"
        title="It started with a note."
        figure={{
          src: "/images/scouthalo-original-note-october-2025.webp",
          width: 924,
          height: 2000,
          alt: "Screenshot of the original iPhone note, dated 9 October 2025, reading: “App para encontrar lugares especificos para cada creador de contenido.”",
          caption: "Original note — October 2025",
        }}
      >
        <p>
          In October 2025, I wrote down an idea: an app for finding specific places for different
          kinds of creators. It was one of those random ideas you capture before you forget it.
          Then I left it there.
        </p>
        <p>
          That summer, I was working at a friend&apos;s pub. When the season ended, I wasn&apos;t
          entirely sure what I was going to do next.
        </p>
        <p>
          I started spending every day working with AI and learning what I could build with it. A
          few weeks later, I went back to that note and decided to give the idea a shot.
        </p>
        <p>
          I started small: a landing page, some early experiments, and eventually the first
          version of what would become ScoutHalo.
        </p>
      </StoryChapter>
    </main>
  );
}
