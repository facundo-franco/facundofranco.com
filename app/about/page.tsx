import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { SCOUTHALO_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Facundo Franco — Founder of ScoutHalo",
  description:
    "Facundo Franco's path from growing up in Punta del Este, Uruguay, through e-commerce and operations, to founding ScoutHalo.",
  path: "/about",
  ogType: "profile",
});

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

// One chapter of the personal story: label, heading, copy. Chapters flow as a
// single reading column rather than full-height sections.
function Chapter({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="profile-chapter" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="profile-heading">{title}</h2>
      <div className="profile-body">{children}</div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <main id="main" className="profile">
      <div className="profile-container">
        <header className="profile-hero">
          <p className="eyebrow reveal-load">About</p>
          <h1 className="profile-title reveal-load" style={d(80)}>
            Facundo Franco.
          </h1>
          <p className="profile-role reveal-load" style={d(140)}>
            Founder of ScoutHalo.
          </p>
          <p className="profile-intro reveal-load" style={d(200)}>
            I grew up in Uruguay and took a fairly unconventional path into building companies.
            This is the short version of how I got here.
          </p>
        </header>

        <Chapter id="the-beginning" eyebrow="01 · The beginning" title="Growing up in Uruguay.">
          <p>
            I was born in Montevideo in 2001 and grew up in Punta del Este, where my family moved
            when I was very young.
          </p>
          <p>
            I was fortunate to have a good childhood. I went to private school, learned English
            from an early age, and spent a lot of time playing and competing in tennis.
          </p>
          <p>
            We also traveled frequently, particularly to the United States. I got to experience
            places like New York, California, and Miami while I was still young. Looking back,
            that exposure had a much bigger impact on me than I understood at the time. Seeing
            different places, cultures, and ways of living expanded my idea of what was possible
            beyond Uruguay.
          </p>
          <p>
            I wasn&apos;t an especially consistent student. Some years I did well, others I
            didn&apos;t. But I was always drawn to particular subjects, especially history and
            geography. I was much more interested in understanding the world than in being good
            at school for its own sake.
          </p>
        </Chapter>

        <Chapter id="the-reset" eyebrow="02 · The reset" title="Three days in Buenos Aires.">
          <p>
            After high school, I planned to move to Buenos Aires with a friend and study business
            at the University of Palermo. I wanted the degree, but more than anything, I wanted
            to leave home and experience life somewhere new.
          </p>
          <p>I moved into the apartment.</p>
          <p>Three days later, the pandemic hit.</p>
          <p>
            My parents called and told me to come home. I remember getting off the ferry in
            Colonia and seeing their faces. They could tell how frustrated I was. I had been
            waiting for that independence, and suddenly I was back in my childhood bedroom
            taking university classes through a screen.
          </p>
          <p>It didn&apos;t last long.</p>
          <p>I struggled with online university and left after the first semester.</p>
          <p>
            But I wasn&apos;t interested in doing nothing. I was taking courses on my own, reading
            constantly, and becoming increasingly interested in business and entrepreneurship.
          </p>
          <p>That became the beginning of a very different education.</p>
          <p>
            I tried e-commerce. I imported products into Uruguay and sold them locally. I worked
            on businesses with friends, explored services, tried to patent ideas, and
            experimented with more things than I can probably remember.
          </p>
          <p>Most of them went nowhere.</p>
          <p>
            But that period taught me something university hadn&apos;t: I liked building things,
            testing ideas, and figuring out how businesses actually worked.
          </p>
        </Chapter>

        <Chapter
          id="operating"
          eyebrow="03 · Operating"
          title="Learning how a business actually works."
        >
          <p>
            Eventually, I moved to Montevideo and got the opportunity to work inside an
            e-commerce business selling through Mercado Libre.
          </p>
          <p>
            It became my first real experience operating a business consistently. Monday through
            Saturday, full days, and plenty of work that followed me beyond normal hours.
          </p>
          <p>
            I was responsible for pricing, publishing and maintaining a large catalog of
            products, writing listings, managing sales, dealing with customer complaints, and
            protecting the account&apos;s reputation on Mercado Libre.
          </p>
          <p>
            That reputation mattered. A late shipment, a cancellation, or a bad customer
            experience wasn&apos;t an abstract metric. Enough mistakes affected the account&apos;s
            standing, visibility, and ultimately its ability to sell.
          </p>
          <p>
            The physical operation mattered just as much. I worked on keeping the warehouse
            organized and improving how products moved from inventory to dispatch so we could get
            orders out quickly.
          </p>
          <p>
            The owner gave me a lot of freedom to figure things out and experiment with ways to
            improve the business. With a large catalog and constant sales activity, there was
            always something that needed attention.
          </p>
          <p>I spent around two years doing it.</p>
          <p>
            It was demanding, but I loved it. For the first time, I was seeing how all the pieces
            of a business connected: pricing, merchandising, customers, operations, logistics,
            and execution.
          </p>
          <p>It taught me more about running a business than anything I had done before.</p>
        </Chapter>

        <Chapter id="back-home" eyebrow="04 · Back home" title="Figuring out what came next.">
          <p>
            Eventually, I decided to leave Montevideo and return home to Punta del Este.
          </p>
          <p>That transition wasn&apos;t particularly glamorous.</p>
          <p>
            During the following summer, I worked nights as a cashier at a friend&apos;s pub. Most
            shifts started around 8 PM and finished around 6 in the morning.
          </p>
          <p>
            When the season ended, I found myself back at home trying to figure out what came
            next.
          </p>
          <p>An idea I&apos;d written down months earlier was still sitting in my Notes.</p>
          <p>I decided to give it a shot.</p>
        </Chapter>

        {/* Where the path has led: a recent photo, between the personal story and ScoutHalo */}
        <Reveal as="figure" className="profile-photo">
          <div className="profile-photo-card">
            <Image
              src="/images/facundo-franco-about.jpg"
              alt="Facundo Franco standing on a city street, with white apartment buildings behind him."
              width={1578}
              height={1475}
              sizes="(max-width: 720px) 88vw, 560px"
              quality={90}
            />
          </div>
          <figcaption className="profile-photo-caption">Buenos Aires, Argentina — 2026</figcaption>
        </Reveal>

        {/* Hand-off to the ScoutHalo build story on /building-scouthalo */}
        <Reveal as="aside" className="profile-next">
          <p className="eyebrow">Next</p>
          <h2 className="profile-heading">Building ScoutHalo.</h2>
          <p className="profile-next-text">
            How that idea in my Notes became ScoutNYC, and eventually ScoutHalo.
          </p>
          <div className="work-actions">
            <Link href="/building-scouthalo" className="product-link">
              Building ScoutHalo →
            </Link>
            <a
              href={SCOUTHALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link product-link-quiet"
            >
              Visit ScoutHalo ↗
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
