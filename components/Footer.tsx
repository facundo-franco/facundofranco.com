import Link from "next/link";
import { CONNECT, EMAIL, SCOUTHALO_URL } from "@/lib/site";

// Profiles shown in the footer, in display order.
const FOOTER_SOCIALS = [
  ...CONNECT,
  { label: "Instagram", href: "https://www.instagram.com/facundofranco_1" },
  { label: "YouTube", href: "https://www.youtube.com/@facundofrancon" },
] as const;

// Site navigation, now that page sections end without their own link rows.
const FOOTER_NAV = [
  { label: "Building ScoutHalo →", href: "/story" },
  { label: "About →", href: "/about" },
  { label: "Now ↑", href: "/#now" },
  { label: "Exposure →", href: "/exposure" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Facundo Franco</h3>
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

          <div className="footer-groups">
            <div className="footer-group">
              <p className="footer-label">Navigate</p>
              <nav className="footer-links footer-links-stack" aria-label="Site">
                <a
                  href={SCOUTHALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  ScoutHalo ↗
                </a>
                {FOOTER_NAV.map((n) => (
                  <Link key={n.href} href={n.href} className="social-link">
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer-group">
              <p className="footer-label">Connect</p>
              <nav className="footer-links footer-links-stack" aria-label="Connect">
                {FOOTER_SOCIALS.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {c.label} ↗
                  </a>
                ))}
                <a href={`mailto:${EMAIL}`} className="social-link">
                  Email ↗
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Facundo Franco</span>
        </div>
      </div>
    </footer>
  );
}
