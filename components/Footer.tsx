import Link from "next/link";
import { CONNECT, EMAIL, SCOUTHALO_URL } from "@/lib/site";

// Profiles shown in the footer, in display order.
const FOOTER_SOCIALS = [
  ...CONNECT,
  { label: "Instagram", href: "https://www.instagram.com/facundofranco_1" },
  { label: "YouTube", href: "https://www.youtube.com/@facundofrancon" },
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

          <div className="footer-connect">
            <p className="footer-label">Connect</p>
            <nav className="footer-links" aria-label="Connect">
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

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Facundo Franco</span>
          <Link href="/exposure" className="social-link">
            Exposure →
          </Link>
        </div>
      </div>
    </footer>
  );
}
