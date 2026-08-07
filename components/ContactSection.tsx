import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal as="div" className="contact-panel">
          <div className="contact-content">
            <p className="eyebrow">Contact</p>
            <h2>Get in touch.</h2>
            <p>Open to conversations about building and operating AI in production.</p>

            <div className="contact-actions">
              <MagneticButton
                href="https://www.linkedin.com/in/facundo-franco"
                className="button button-primary"
              >
                LinkedIn ↗
              </MagneticButton>
              <a
                href="https://x.com/facundofranco_"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                X ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
