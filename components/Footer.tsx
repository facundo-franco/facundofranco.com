import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { CONNECT, EMAIL, SCOUTHALO_URL } from "@/lib/site";

type IconProps = { size?: number; stroke?: number; "aria-hidden"?: boolean };

// Site pages, plus the ScoutHalo product site.
const FOOTER_NAV = [
  { label: "ScoutHalo", href: SCOUTHALO_URL, external: true },
  { label: "Building ScoutHalo", href: "/story" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/#now" },
  { label: "Exposure", href: "/exposure" },
] as const;

const hrefOf = (label: string) => CONNECT.find((c) => c.label === label)?.href ?? "";

// Profiles and email, each with its outline icon.
const FOOTER_SOCIALS: { label: string; href: string; Icon: ComponentType<IconProps> }[] = [
  { label: "X", href: hrefOf("X"), Icon: IconBrandX },
  { label: "LinkedIn", href: hrefOf("LinkedIn"), Icon: IconBrandLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/facundofranco_1", Icon: IconBrandInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@facundofrancon", Icon: IconBrandYoutube },
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
              <h3>Facundo Franco</h3>
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
              {FOOTER_NAV.map((n) =>
                "external" in n ? (
                  <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer">
                    {n.label}
                  </a>
                ) : (
                  <Link key={n.href} href={n.href}>
                    {n.label}
                  </Link>
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
          <span>Built from Uruguay.</span>
        </div>
      </div>
    </footer>
  );
}
