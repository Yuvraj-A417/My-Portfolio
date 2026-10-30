import { RevealText } from "@/components/primitives/RevealText";
import { SectionEyebrow } from "@/components/primitives/SectionEyebrow";

const engineSignals = ["BIT MESRA", "ELECTRONICS", "CGPA: 7.59", "SYSTEM DESIGN", "COLLEGE", "CODING", "UKG"];

export function AboutSection() {
  return (
    <section className="story-section split-section" id="engine">
      <RevealText className="copy-block">
        <SectionEyebrow>Engine Room</SectionEyebrow>
        <h2>Scalable systems, engineered from first principles.</h2>
        <p>
          From BIT Mesra to UKG, Yuvraj bridges Electronics and Software Engineering with the instinct of a systems thinker.
          The foundation is precise: CGPA 7.59, backed by an ECE degree, hardened through algorithms, backend architecture, and product-grade execution.
        </p>
      </RevealText>
      <RevealText className="engine-marquee-shell">
        <div className="engine-marquee" aria-label="Education and foundation highlights">
          <div className="engine-marquee-track">
            {[0, 1].map((loop) =>
              engineSignals.map((signal) => (
                <span aria-hidden={loop === 1} key={`${loop}-${signal}`}>
                  {signal}
                </span>
              ))
            )}
          </div>
        </div>
      </RevealText>
    </section>
  );
}
