import { Reveal } from "../components/Reveal";
import { journey, school, values } from "../data/content";
import "./pages.css";

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Who we are</h1>
          <p>{school.vision}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <div className="split-visual">
              <img src="/media/brand/promo-elementary-03.jpg" alt="Students and learning at Al Manarat Heights" />
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">Mission</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginTop: "0.5rem", color: "var(--green-950)" }}>
              Academically rigorous. Morally empowering. Spiritually attuned.
            </h2>
            <p style={{ marginTop: "1rem" }}>{school.mission}</p>
            <div className="stat-inline">
              <div>
                <strong>Since 2006</strong>
                <p>From a basement classroom of seven students to a full PK–12 Islamic school community.</p>
              </div>
              <div>
                <strong>#1 in Ontario</strong>
                <p>{school.ranking} by the Fraser Institute (2025).</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Pillars</p>
            <h2>Character that shapes every subject.</h2>
          </Reveal>
          <Reveal className="value-grid">
            {values.map((value) => (
              <article key={value.arabic} className="value-item">
                <div className="arabic">{value.arabic}</div>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Our journey</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginTop: "0.5rem", color: "var(--green-950)" }}>
              Growing with the community we serve.
            </h2>
            <p style={{ marginTop: "1rem" }}>
              From evening Qur’an programs to Ministry-approved high school credits — and now a proposed AIR Lab that extends our STEM robotics legacy.
            </p>
          </Reveal>
          <Reveal className="timeline">
            {journey.map((item) => (
              <div key={item.year} className="timeline-item">
                <strong>{item.year}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
