import Link from "next/link";
import { EMAIL, SOCIALS, mailto } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// Who I want to hear from, and how. General on purpose: no round size, terms,
// or traction beyond what the site states elsewhere.
const AUDIENCES = [
  {
    id: "investors",
    label: "Investors",
    title: "ScoutHalo's first round.",
    text: "I'm preparing to raise ScoutHalo's first round, to give it the runway to find its customers and build the team. If you invest at this stage, I'd be glad to talk.",
    cta: { label: "Email me about investing", href: mailto("Investing in ScoutHalo") },
  },
  {
    id: "founding-team",
    label: "Founding team",
    title: "Help build it.",
    text: "I'm looking for a few exceptional early people who want to own a big part of the product and the company.",
    cta: { label: "What I'm looking for", href: "/now#team", internal: true },
  },
  {
    id: "founders",
    label: "Founders",
    title: "Compare notes.",
    text: "If you're building something of your own, especially with AI, or you've been where I am now, I'd like to hear from you.",
    cta: { label: "Say hello", href: mailto("Hello") },
  },
] as const;

const linkedin = SOCIALS.find((s) => s.label === "LinkedIn")?.href;

export default function ContactSection() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          eyebrow="04 · Get in touch"
          title="Get in touch."
          titleId="contact-title"
          intro="Email reaches me directly. Tell me who you are and why you're writing."
        />

        <ul className="contact-grid">
          {AUDIENCES.map((a) => (
            <li key={a.id} className="contact-card">
              <p className="contact-label">{a.label}</p>
              <h3 className="contact-title">{a.title}</h3>
              <p className="contact-text">{a.text}</p>
              {"internal" in a ? (
                <Link href={a.cta.href} className="cta-link">
                  {a.cta.label} →
                </Link>
              ) : (
                <a href={a.cta.href} className="cta-link">
                  {a.cta.label} →
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="contact-direct">
          <p className="contact-direct-label">Email</p>
          <a href={mailto()} className="contact-email">
            {EMAIL}
          </a>
          {linkedin ? (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="cta-link cta-link-quiet">
              Or find me on LinkedIn ↗
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
