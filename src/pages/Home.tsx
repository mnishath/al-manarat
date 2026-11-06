import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { airLab, programs, school } from "../data/content";
import "./pages.css";

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Welcome">
        <div className="hero-media" aria-hidden="true">
          <img src="/media/generated/air-lab-hero.jpg" alt="" />
        </div>
        <div className="container hero-content">
          <p className="eyebrow" style={{ color: "var(--gold-300)" }}>
            Mississauga · {school.ranking}
          </p>
          <h1 className="hero-brand">Al Manarat Heights</h1>
          <p>{school.tagline} Ontario curriculum, Islamic character, and a new AIR Lab for AI, robotics, and 3D design.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/air-lab">
              Discover the AIR Lab
            </Link>
            <Link className="btn btn-ghost" to="/admissions">
              Start admissions
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Who we are</p>
              <h2>A God-oriented school preparing confident Muslim Canadians.</h2>
              <p style={{ marginTop: "1rem" }}>{school.mission}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/about">
                  Our story
                </Link>
                <Link className="btn btn-secondary" to="/faculty">
                  Meet faculty
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="quote-block">
              <p>“{school.founderQuote}”</p>
              <footer>
                {school.founder} · {school.founderTitle}
              </footer>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Pathways</p>
            <h2>Preschool through high school, Hifz, and enrichment.</h2>
            <p>Ontario curriculum infused with a comprehensive Islamic program — now expanding STEM robotics into the AIR Lab.</p>
          </Reveal>
          <Reveal className="program-list">
            {programs.map((program) => (
              <article key={program.title} className="program-item">
                <h3>{program.title}</h3>
                <div className="ages">{program.ages}</div>
                <p>{program.summary}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="feature-panel">
            <img src="/media/generated/gesture-rover-detail.jpg" alt="Gesture controller and educational rover in the AIR Lab" />
            <div className="feature-copy">
              <p className="eyebrow" style={{ color: "var(--gold-300)" }}>
                Flagship program
              </p>
              <h2>{airLab.title}: {airLab.full}</h2>
              <p>{airLab.intro}</p>
              <div className="pill-row">
                <span className="pill" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  Grades 6–12
                </span>
                <span className="pill" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  6-week pilot
                </span>
                <span className="pill" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  AI · Robotics · 3D
                </span>
              </div>
              <div className="hero-actions">
                <Link className="btn btn-secondary" to="/air-lab">
                  Explore curriculum
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band">
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Ready to visit campus?</h2>
            <p>Tour classrooms, ask about Hifz and high school pathways, and learn how the AIR Lab pilot will open for grades 6–12.</p>
            <Link className="btn btn-secondary" to="/contact">
              Schedule a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
