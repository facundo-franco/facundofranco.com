import type { Metadata } from "next";
import type { CSSProperties } from "react";
import StoryCarousel from "@/components/StoryCarousel";
import type { CarouselSlide } from "@/components/StoryCarousel";
import StoryChapter from "@/components/StoryChapter";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Building ScoutHalo",
  description:
    "How an idea sitting in my Notes turned into ScoutHalo, the company I'm building today.",
  path: "/story",
  ogType: "article",
});

// Original ScoutNYC screenshots, in story order: landing page first.
const SCOUTNYC_SLIDES: CarouselSlide[] = [
  {
    src: "/images/scoutnyc-01-landing.webp",
    alt: "ScoutNYC landing page on iPhone: “Stop losing shoot days to bad location decisions.”",
  },
  {
    src: "/images/scoutnyc-02-how-it-works.webp",
    alt: "ScoutNYC landing page on iPhone: the “Send me your shoot — get locations today” button and the How it works steps.",
  },
  {
    src: "/images/scoutnyc-03-the-problem.webp",
    alt: "ScoutNYC landing page on iPhone: The Problem section with three cards.",
  },
  {
    src: "/images/scoutnyc-04-the-solution.webp",
    alt: "ScoutNYC landing page on iPhone: “Every location is a fully validated execution brief.” with the What you get per location list.",
  },
  {
    src: "/images/scoutnyc-05-nyc-locations.webp",
    alt: "ScoutNYC execution library on iPhone: NYC shoot locations, with cards for Brooklyn Bridge and DUMBO locations.",
  },
].map((s) => ({ ...s, width: 924, height: 2000 }));

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

      <StoryChapter
        id="the-first-version"
        eyebrow="02 · The first version"
        title="I started small."
        aside={
          <StoryCarousel
            label="Screenshots of the original ScoutNYC website"
            caption="ScoutNYC — the first version"
            slides={SCOUTNYC_SLIDES}
          />
        }
      >
        <p>The idea eventually became something I wanted to test.</p>
        <p>
          I wasn&apos;t a software engineer, but AI gave me a way to start building it myself. The
          first version was called ScoutNYC. The plan was simple: start with one city, build a
          useful collection of shoot locations, then expand to Los Angeles, Miami, and beyond.
        </p>
        <p>
          I built the first website and started adding locations manually. Each one needed the
          information I thought a creator would need to actually use it — where to shoot, how to
          frame it, when to go, and what could go wrong.
        </p>
        <p>It worked well enough to prove the concept to myself.</p>
        <p>
          But it also exposed the problem with the way I was building it: I was the database.
        </p>
        <p>
          Every new location required me to find it, research it, structure the information, and
          upload it myself. Getting from a handful of locations in New York to thousands around
          the world wasn&apos;t going to happen that way.
        </p>
        <p>
          At the time I also needed to make money and had other projects competing for my
          attention, so I put it aside.
        </p>
      </StoryChapter>
    </main>
  );
}
