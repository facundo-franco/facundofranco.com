import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import StoryCarousel from "@/components/StoryCarousel";
import type { CarouselSlide } from "@/components/StoryCarousel";
import StoryChapter from "@/components/StoryChapter";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { storyGraph } from "@/lib/schema";
import { PAGE_UPDATED, SCOUTHALO_URL } from "@/lib/site";

const TITLE = "Building ScoutHalo — From a Note to a Product";
const DESCRIPTION =
  "How a note in Facundo Franco's phone became ScoutNYC, and then ScoutHalo: an AI-powered search engine for real-world places, making the physical world searchable.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/building-scouthalo",
  ogType: "article",
});

// First published as /story on 2026-09-23.
const STORY_SCHEMA = storyGraph({
  headline: TITLE,
  description: DESCRIPTION,
  image: "/building-scouthalo/opengraph-image.jpg",
  datePublished: "2026-09-23",
  dateModified: PAGE_UPDATED["/building-scouthalo"],
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

// The chronology at a glance. Dates: the note itself, and the ScoutHalo
// repository history (ScoutNYC v1 built 30 Mar 2026; rebranded ScoutHalo 28 May 2026).
// Development dates, not public launch dates. Incorporation: Delaware certificate,
// filed 9 Sep 2026.
const CHRONOLOGY = [
  { when: "Oct 2025", what: "The note", href: "#the-idea" },
  { when: "Mar 2026", what: "ScoutNYC built", href: "#the-first-version" },
  { when: "May 2026", what: "Rebranded ScoutHalo", href: "#all-in" },
  { when: "Winter 2026", what: "All in", href: "#all-in" },
  { when: "Sep 2026", what: "ScoutHalo, Inc.", href: "#incorporated" },
  { when: "Today", what: "Still building", href: "#today" },
] as const;

// Above-the-fold: CSS entrance (reveal-load), same as the home hero.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function StoryPage() {
  return (
    <main id="main">
      <JsonLd data={STORY_SCHEMA} />
      <header className="story-hero">
        <div className="container">
          <p className="eyebrow reveal-load">ScoutHalo</p>
          <h1 className="story-hero-title reveal-load" style={d(80)}>
            Building ScoutHalo.
          </h1>
          <p className="story-hero-intro reveal-load" style={d(160)}>
            How an idea sitting in my Notes turned into the company I&apos;m building today.
          </p>
          <nav className="story-chronology reveal-load" style={d(220)} aria-label="Chapters">
            <ol>
              {CHRONOLOGY.map((c) => (
                <li key={c.what}>
                  <a href={c.href}>
                    <span className="story-chronology-when">{c.when}</span>
                    <span className="story-chronology-what">{c.what}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>

      <StoryChapter
        id="the-idea"
        eyebrow="01 · October 2025"
        title="It started with a note."
        lead={
          <p>
            In October 2025, I wrote down an idea: an app for finding specific places for different
            kinds of creators. It was one of those random ideas you capture before you forget it.
            Then I left it there.
          </p>
        }
        figure={{
          src: "/images/scouthalo-original-note-october-2025.webp",
          width: 924,
          height: 2000,
          alt: "Screenshot of the original iPhone note, dated 9 October 2025, reading: “App para encontrar lugares especificos para cada creador de contenido.”",
          caption: "Original note — 9 October 2025",
          priority: true,
        }}
      >
        <p>
          That summer — Uruguay&apos;s summer of 2025–26 — I was working at a friend&apos;s pub.
          When the season ended, I wasn&apos;t entirely sure what I was going to do next.
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
        eyebrow="02 · March 2026"
        title="I started small."
        lead={
          <>
            <p>The idea eventually became something I wanted to test.</p>
            <p>
              I wasn&apos;t a software engineer, but AI gave me a way to start building it myself.
              The first version was called ScoutNYC. The plan was simple: start with one city,
              build a useful collection of shoot locations, then expand to Los Angeles, Miami, and
              beyond.
            </p>
          </>
        }
        aside={
          <StoryCarousel
            label="Screenshots of the original ScoutNYC website"
            caption="ScoutNYC — built March 2026"
            slides={SCOUTNYC_SLIDES}
          />
        }
      >
        <p>
          I built the first website and started adding locations manually. Each one needed the
          information I thought a creator would need to actually use it — where to shoot, how to
          frame it, when to go, and what could go wrong.
        </p>
        <p>It worked well enough to prove the concept to myself.</p>
        <p className="chapter-emphasis">
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
        eyebrow="03 · Winter 2026"
        title="Then I went all in."
        lead={
          <>
            <p>Eventually, I found a better way to build it.</p>
            <p>
              Instead of manually building a database of places, I started using AI to understand
              what people were looking for, search for real locations, and evaluate how well those
              places matched their needs.
            </p>
            <p>
              The problem that had made the first version impossible to scale started to look
              solvable. I realized I could build the product differently, and this time I decided
              to go all in.
            </p>
          </>
        }
        figure={{
          src: "/images/scouthalo-build-room-uruguay-2026.jpg",
          width: 1500,
          height: 2000,
          alt: "The small room where ScoutHalo was built: a desk with a computer and chair beside a bed, under a window.",
          caption: "Where I built ScoutHalo — Uruguay, winter 2026.",
        }}
      >
        <p>In May 2026, I renamed ScoutNYC to ScoutHalo.</p>
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
        id="incorporated"
        eyebrow="04 · September 2026"
        title="Then it became a company."
        lead={
          <p>
            On September 9, 2026, ScoutHalo, Inc. was incorporated in Delaware, in the United
            States.
          </p>
        }
        figure={{
          src: "/images/scouthalo-inc-delaware-certificate-2026.webp",
          width: 900,
          height: 1067,
          alt: "The State of Delaware's certification of the certificate of incorporation of ScoutHalo, Inc., filed on September 9, 2026. Administrative identifiers are hidden.",
          caption: "Delaware certificate — 9 September 2026 · identifiers hidden",
        }}
      >
        <p>
          Two days later, I spoke on a DataCamp webinar about becoming an AI agent operator,
          sharing lessons from building ScoutHalo with more than 700 people who joined live.
        </p>
        <div className="cta-row">
          <Link href="/talks" className="cta-link cta-link-quiet">
            The DataCamp talk →
          </Link>
        </div>
      </StoryChapter>

      <StoryChapter
        id="today"
        eyebrow="05 · Today"
        title="Still building."
        lead={
          <>
            <p>
              What started as a sentence in my Notes became ScoutNYC, and eventually ScoutHalo.
            </p>
            <p>
              The product today is very different from that first version. ScoutHalo is an
              AI-powered search engine for real-world places, built to make the physical world
              searchable.
            </p>
          </>
        }
        figure={{
          src: "/images/scouthalo-home-mobile-october-2026.webp",
          width: 924,
          height: 1327,
          alt: "ScoutHalo's homepage on a phone: “AI search for places and things to do. Describe what you need. Find the right place.” above a search box with the example “Rooftop bar with sunset views for drinks with friends in Lisbon.”",
          caption: "ScoutHalo today — scouthalo.com, October 2026.",
        }}
      >
        <p>
          You describe what you need in a sentence, or start from a photo. ScoutHalo finds real
          places, explains why each one fits and what to confirm before you go, and helps you
          save, compare, and decide — whether it&apos;s a dinner, a trip, a place to work, a
          venue, or an experience.
        </p>
        <p>
          Production scouting, where ScoutNYC began, is still one of those uses, with reads built
          for shoots.
        </p>
        <p>
          I&apos;m now working on the next part: getting it into more people&apos;s hands,
          learning from how they use it, and building the company around it.
        </p>
        <p className="chapter-emphasis">This is still the beginning.</p>

        <div className="cta-row">
          <a
            href={SCOUTHALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            Visit scouthalo.com ↗
          </a>
          <Link href="/now" className="cta-link cta-link-quiet">
            What I&apos;m working on now →
          </Link>
        </div>
      </StoryChapter>
    </main>
  );
}
