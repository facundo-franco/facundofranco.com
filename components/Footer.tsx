import { CONNECT, EMAIL, SCOUTHALO_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Facundo Franco</h3>
            <p>Founder of ScoutHalo.</p>
          </div>

          <nav className="footer-links" aria-label="Connect">
            <a href={SCOUTHALO_URL} target="_blank" rel="noopener noreferrer">
              ScoutHalo ↗
            </a>
            {CONNECT.map((c) => (
              <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label} ↗
              </a>
            ))}
            <a href={`mailto:${EMAIL}`}>Email</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Facundo Franco</span>
        </div>
      </div>
    </footer>
  );
}
