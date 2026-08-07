import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Facundo Franco</h3>
            <p>Founder of ScoutHalo. Building and operating AI in production.</p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <Link href="/about">About</Link>
            <Link href="/writing">Writing</Link>
            <a href="https://scouthalo.com" target="_blank" rel="noopener noreferrer">
              ScoutHalo ↗
            </a>
            <a href="https://agentoperator.io" target="_blank" rel="noopener noreferrer">
              AgentOperator ↗
            </a>
            <a href="https://www.linkedin.com/in/facundo-franco" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://x.com/facundofranco_" target="_blank" rel="noopener noreferrer">
              X ↗
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Facundo Franco</span>
        </div>
      </div>
    </footer>
  );
}
