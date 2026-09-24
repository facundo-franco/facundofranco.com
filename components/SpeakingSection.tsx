import PostPreview from "./PostPreview";
import SectionHeader from "./SectionHeader";

const SESSION_URL = "https://x.com/facundofranco_/status/2098448293063807117";

export default function SpeakingSection() {
  return (
    <section className="section section-compact" id="speaking">
      <div className="container">
        <SectionHeader eyebrow="03 · Speaking" title="Sharing what I learn.">
          <div className="speaking">
            <div className="speaking-copy">
              <div className="prose">
                <p>
                  I joined DataCamp to talk about becoming an AI Agent Operator and what I&apos;ve
                  learned building ScoutHalo and working with AI agents in real-world workflows.
                </p>
              </div>

              {/* Attendance as a single proof point */}
              <p className="speaking-stat">
                <span className="speaking-stat-value">700+</span>
                <span className="speaking-stat-label">People joined live</span>
              </p>
            </div>

            {/* The post, documented with a small caption */}
            <div className="speaking-media">
              <PostPreview
                src="/images/datacamp-session-x-post.png"
                width={601}
                height={551}
                alt="Facundo Franco's post on X about his DataCamp webinar on becoming an AI Agent Operator, with a screenshot of the live session."
                href={SESSION_URL}
              />
              <div className="speaking-meta">
                <p className="speaking-meta-title">DataCamp — AI Agent Operator</p>
                <p className="speaking-meta-detail">New York · September 11, 2026</p>
              </div>
            </div>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
