import MagneticButton from "./MagneticButton";
import Portrait from "./Portrait";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">
            Building &amp; operating AI
          </Reveal>

          <Reveal as="h1" delay={80}>
            Facundo
            <br />
            Franco.
          </Reveal>

          <Reveal as="p" className="hero-description" delay={160}>
            Founder of <strong>ScoutHalo</strong>. I build AI products, and research the emerging{" "}
            <strong>AI Operator</strong> category — how AI gets operated in production.
          </Reveal>

          <Reveal as="div" className="hero-actions" delay={240}>
            <MagneticButton href="https://scouthalo.com" className="button button-primary">
              Explore ScoutHalo ↗
            </MagneticButton>
            <MagneticButton href="https://agentoperator.io" className="button button-secondary">
              AgentOperator ↗
            </MagneticButton>
          </Reveal>
        </div>

        <Portrait priority delay={120} />
      </div>
    </section>
  );
}
