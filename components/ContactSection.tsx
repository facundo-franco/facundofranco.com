import Link from "next/link";
import { EMAIL, SOCIALS, mailto } from "@/lib/site";
import SectionHeader from "./SectionHeader";

// Who I want to hear from, and how. General on purpose: no round size, terms,
// or traction until they are confirmed and public.
const AUDIENCES = [
  {
    id: "investors",
    label: "Investors",
    title: "ScoutHalo's next stage.",
    text: "I'm raising capital for what comes next. If making the physical world searchable interests you, I'd be glad to talk.",
    cta: { label: "Email me about investing", href: mailto("Investing in ScoutHalo") },
  },
  {
    id: "founding-team",
    label: "Founding team",
    title: "Help build ScoutHalo.",
    text: "I'm planning a small founding team in Miami, across engineering, data, design, and brand.",
    cta: { label: "See the planned roles", href: "/now#team", internal: true },
  },
  {
    id: "partners",
    label: "Partners",
    title: "Build something together.",
    text: "Technology, data, location, creative, and strategic partnerships.",
    cta: { label: "Email me about a partnership", href: mailto("Partnership with ScoutHalo") },
  },
] as const;

const linkedin = SOCIALS.find((s) => s.label === "LinkedIn")?.href;

export default function ContactSection() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          eyebrow="06 · Work with me"
          title="Work with me."
          titleId="contact-title"
          intro="I'm looking for the people who will help take ScoutHalo to its next stage. If that might be you, write to me directly."
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
