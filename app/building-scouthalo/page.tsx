import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import StoryCarousel from "@/components/StoryCarousel";
import type { CarouselSlide } from "@/components/StoryCarousel";
import StoryChapter from "@/components/StoryChapter";
import { pageMetadata } from "@/lib/metadata";
import { SCOUTHALO_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Building ScoutHalo — From an Idea to Location Intelligence",
  description:
    "How a note in Facundo Franco's phone became ScoutNYC, and then ScoutHalo: a location intelligence platform for production teams.",
  path: "/building-scouthalo",
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
    <main id="main">
      <header className="story-hero">
        <div className="container">
          <p className="eyebrow reveal-load">ScoutHalo</p>
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

      <StoryChapter
        id="all-in"
        eyebrow="03 · All in"
        title="Then I went all in."
        figure={{
          src: "/images/scouthalo-build-room-uruguay-2026.jpg",
          width: 1500,
          height: 2000,
          alt: "The small room where ScoutHalo was built: a desk with a computer and chair beside a bed, under a window.",
          caption: "Where I built ScoutHalo — Uruguay, winter 2026.",
        }}
      >
        <p>Eventually, I found a better way to build it.</p>
        <p>
          I came across a different approach to building with AI that made the part I&apos;d
          thought was impossible suddenly look solvable.
        </p>
        <p>
          The problem that had made the first version impossible to scale started to look
          solvable. I realized I could build the product differently, and this time I decided to
          go all in.
        </p>
        <p>
          I spent most of that winter in Uruguay in one small room, with a bed next to my desk and
          a computer. For about three months, most days started when I woke up and ended when I
          went to sleep.
        </p>
        <p>
          I was learning as I built. AI let me move at a speed that wouldn&apos;t have been
          possible for me otherwise. Some days I had as many as four Claude Code agents working in
          parallel on different parts of the product.
        </p>
        <p>
          I wasn&apos;t working a job during that period. My family made it possible for me to take
          that risk. They supported me emotionally and financially, helping cover my basic living
          expenses and the tools I needed to keep building.
        </p>
        <p>
          That support gave me something incredibly valuable: time. I used it to turn the rough
          idea I&apos;d written in Notes into the first real version of ScoutHalo.
        </p>
      </StoryChapter>

      <StoryChapter
        id="today"
        eyebrow="04 · Today"
        title="Still building."
        figure={{
          src: "/images/scouthalo-iphone-mockup.webp",
          width: 924,
          height: 1702,
          alt: "ScoutHalo on iPhone: the Scout search screen with recent location scouts.",
          caption: "ScoutHalo today.",
        }}
      >
        <p>
          What started as a sentence in my Notes became ScoutNYC, and eventually ScoutHalo.
        </p>
        <p>
          The product today is very different from that first version. ScoutHalo is a location
          intelligence platform for production teams, designed to help them discover, evaluate,
          and prepare locations before a shoot.
        </p>
        <p>
          I&apos;m now working on the next part: getting it into the hands of production teams,
          learning from how they use it, and building the company around it.
        </p>
        <p>This is still the beginning.</p>

        <div className="cta-row">
          <a
            href={SCOUTHALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            Visit ScoutHalo ↗
          </a>
          <Link href="/" className="cta-link cta-link-quiet">
            Back to home →
          </Link>
        </div>
      </StoryChapter>
    </main>
  );
}
