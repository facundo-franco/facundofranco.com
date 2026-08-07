import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

// Deliberately asymmetric: ScoutHalo (flagship) carries more weight than
// AgentOperator (research). This hierarchy is intentional — do not equalize.
export default function BuildingSection() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader eyebrow="01 · Building" title="A company, and a category." />

        <div className="work">
          <Reveal as="article" className="work-flagship">
            <p className="work-tag">Flagship product</p>
            <h3>ScoutHalo</h3>
            <p>
              AI location intelligence for production teams — discover, evaluate, and prepare
              shoot-ready locations.
            </p>
            <a
              href="https://scouthalo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              Visit ScoutHalo ↗
            </a>
          </Reveal>

          <Reveal as="aside" className="work-research" delay={120}>
            <p className="work-tag">Research</p>
            <p className="work-manifesto">
              The model is a commodity. <em>The operator is not.</em>
            </p>
            <p>Defining the AI Operator category in public.</p>
            <a
              href="https://agentoperator.io"
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              Read at AgentOperator.io ↗
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
