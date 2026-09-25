import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { EMAIL, NAV, SCOUTHALO_URL, SOCIALS } from "@/lib/site";

type IconProps = { size?: number; stroke?: number; "aria-hidden"?: boolean };

// The header's destinations, plus Exposure (footer only), placed before Connect.
const FOOTER_NAV = [
  ...NAV.filter((n) => n.kind !== "connect"),
  { label: "Exposure", href: "/exposure", kind: "page" },
  ...NAV.filter((n) => n.kind === "connect"),
] as const;

const hrefOf = (label: string) => SOCIALS.find((c) => c.label === label)?.href ?? "";

// Profiles and email, each with its outline icon.
const FOOTER_SOCIALS: { label: string; href: string; Icon: ComponentType<IconProps> }[] = [
  { label: "X", href: hrefOf("X"), Icon: IconBrandX },
  { label: "LinkedIn", href: hrefOf("LinkedIn"), Icon: IconBrandLinkedin },
  { label: "Instagram", href: hrefOf("Instagram"), Icon: IconBrandInstagram },
  { label: "YouTube", href: hrefOf("YouTube"), Icon: IconBrandYoutube },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: IconMail },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-identity">
              <span className="brand-mark" aria-hidden="true">
                FF
              </span>
              <p className="footer-name">Facundo Franco</p>
            </div>
            <p>
              Founder of{" "}
              <a href={SCOUTHALO_URL} target="_blank" rel="noopener noreferrer">
                ScoutHalo
              </a>
              .
              <br />
              Building location intelligence for production teams.
            </p>
          </div>

          <div className="footer-group">
            <p className="footer-label">Navigate</p>
            <nav className="footer-nav" aria-label="Site">
              {/* Same destinations as the header, plus Exposure */}
              {FOOTER_NAV.map((n) =>
                n.kind === "page" ? (
                  <Link key={n.href} href={n.href}>
                    {n.label}
                  </Link>
                ) : (
                  <a
                    key={n.href}
                    href={n.href}
                    {...(n.kind === "external"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {n.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="footer-group">
            <p className="footer-label">Connect</p>
            <nav className="footer-social" aria-label="Connect">
              {FOOTER_SOCIALS.map(({ label, href, Icon }) => {
                const isEmail = href.startsWith("mailto:");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={isEmail ? "footer-social-email" : undefined}
                    {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <Icon size={18} stroke={1.5} aria-hidden />
                    <span className="footer-social-label">{label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Facundo Franco</span>
          <span className="footer-legal">
            <span>Built from Uruguay.</span>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
