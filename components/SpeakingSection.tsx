import PostPreview from "./PostPreview";
import SectionHeader from "./SectionHeader";

const SESSION_URL = "https://x.com/facundofranco_/status/2098448293063807117";

export default function SpeakingSection() {
  return (
    <section className="section" id="speaking">
      <div className="container">
        <SectionHeader eyebrow="03 · Speaking" title="Sharing what I learn.">
          <div className="speaking">
            <div className="speaking-copy">
              <div className="prose">
                <p>
                  I joined DataCamp to talk about becoming an AI Agent Operator and what I&apos;ve
                  learned building ScoutHalo with AI agents.
                </p>
                <p>More than 700 people joined live.</p>
              </div>
            </div>

            <PostPreview
              src="/images/datacamp-session-x-post.png"
              width={601}
              height={551}
              alt="Facundo Franco's post on X about his DataCamp webinar on becoming an AI Agent Operator, with a screenshot of the live session."
              href={SESSION_URL}
            />
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
