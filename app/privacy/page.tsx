import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/metadata";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy — Facundo Franco",
  description:
    "How facundofranco.com handles data: no accounts, forms, or cookies — just privacy-friendly analytics and email.",
  path: "/privacy",
});

// Update whenever the site's handling of data changes.
const LAST_UPDATED = "September 2026";

// Above-the-fold: CSS entrance (reveal-load), same as the other page heroes.
const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

// One policy topic: number, plain heading, short answer.
function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="legal-section" id={id}>
      <p className="eyebrow">{index}</p>
      <h2 className="legal-heading">{title}</h2>
      <div className="legal-body">{children}</div>
    </Reveal>
  );
}

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <main id="main" className="profile">
      <div className="profile-container">
        <header className="profile-hero">
          <p className="eyebrow reveal-load">Legal</p>
          <h1 className="profile-title reveal-load" style={d(80)}>
            Privacy.
          </h1>
          <p className="now-page-updated reveal-load" style={d(120)}>
            Last updated · {LAST_UPDATED}
          </p>
          <p className="profile-intro reveal-load" style={d(180)}>
            This is my personal website. It has no accounts, forms, newsletter, or advertising, and
            it doesn&apos;t set cookies. This page explains the little data that is involved in
            visiting it.
          </p>
        </header>

        <Section id="information" index="01" title="Information collected">
          <p>
            You don&apos;t need to give me any personal information to use this site. The only
            personal information I receive directly is what you choose to send me by email.
          </p>
        </Section>

        <Section id="analytics" index="02" title="Analytics and basic usage data">
          <p>
            The site uses Vercel Web Analytics and Vercel Speed Insights to understand, in
            aggregate, how it&apos;s used and how quickly it loads. They record things like the
            pages visited, the referring site, approximate country, and device, browser, and
            operating system type, along with performance measurements such as load times.
          </p>
          <p>
            According to Vercel, Web Analytics doesn&apos;t use cookies, and visitors are
            identified only by a hash of the incoming request that is discarded after 24 hours. I
            see aggregate numbers, not individual people.
          </p>
        </Section>

        <Section id="cookies" index="03" title="Cookies and local storage">
          <p>
            Neither the site nor its analytics sets cookies, and the site doesn&apos;t use local
            storage or similar browser storage. That&apos;s why there&apos;s no cookie banner.
          </p>
        </Section>

        <Section id="third-parties" index="04" title="Third-party services">
          <p>
            The site is hosted on Vercel, which also provides the analytics above. Like any
            host, Vercel processes technical request data, such as IP addresses, to deliver the
            site and protect it from abuse.
          </p>
          <p>
            Fonts and images are served from this site; nothing is loaded from Google Fonts or
            other third-party services when you view a page. There are no embedded videos, social
            widgets, or ads.
          </p>
          <p>
            Links to ScoutHalo, X, LinkedIn, Instagram, and YouTube take you to those services,
            where their own privacy policies apply.
          </p>
        </Section>

        <Section id="contact-information" index="05" title="Contact information">
          <p>
            If you email me at {mail}, I receive your email address and whatever you include in
            your message. I use it only to reply and continue the conversation. I don&apos;t add
            anyone to a mailing list, and I don&apos;t sell or share messages.
          </p>
        </Section>

        <Section id="retention" index="06" title="Data retention">
          <p>
            Analytics data is kept by Vercel, in aggregate, under its own retention terms. Emails
            are kept for as long as they&apos;re useful for the conversation, and I&apos;ll delete
            yours if you ask.
          </p>
        </Section>

        <Section id="choices" index="07" title="Your choices and rights">
          <p>
            Blocking the analytics scripts with your browser or a content blocker doesn&apos;t
            affect how the site works.
          </p>
          <p>
            You can ask me what I hold from your emails, and ask me to correct or delete it.
            Depending on where you live, you may have additional rights under local law.
          </p>
        </Section>

        <Section id="changes" index="08" title="Changes to this policy">
          <p>
            If the way this site handles data changes — for example, if I add a newsletter —
            I&apos;ll update this page and the date at the top.
          </p>
        </Section>

        <Section id="questions" index="09" title="Contact">
          <p>Questions about this page, or about your data: {mail}.</p>
        </Section>
      </div>
    </main>
  );
}
