import { useState } from "react";
import { Link } from "react-router-dom";
import { Lightbox } from "../components/Lightbox";
import { Reveal } from "../components/Reveal";
import { airLab } from "../data/content";
import "./pages.css";

const gallery = [
  { src: "/media/generated/air-lab-hero.jpg", alt: "AIR Lab classroom atmosphere" },
  { src: "/media/generated/gesture-rover-detail.jpg", alt: "Gesture controller and rover" },
  { src: "/media/generated/3d-printing-accessory.jpg", alt: "3D printing a functional accessory" },
  { src: "/media/generated/pilot-team-stations.jpg", alt: "Four team pilot stations" },
  { src: "/media/generated/showcase-demo.jpg", alt: "End-of-pilot showcase demo" },
];

export function AirLab() {
  const [activeModule, setActiveModule] = useState(airLab.modules[0].id);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const module = airLab.modules.find((m) => m.id === activeModule) ?? airLab.modules[0];

  return (
    <>
      <section className="hero" aria-label="AIR Lab" style={{ minHeight: "min(82vh, 820px)" }}>
        <div className="hero-media" aria-hidden="true">
          <img src="/media/generated/pilot-team-stations.jpg" alt="" />
        </div>
        <div className="container hero-content">
          <p className="eyebrow" style={{ color: "var(--gold-300)" }}>
            Flagship · STEM Robotics Lab expansion
          </p>
          <h1 className="hero-brand" style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}>
            {airLab.title}
          </h1>
          <p>
            {airLab.full}. {airLab.intro}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#pilot">
              View the pilot
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Ask about enrollment
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Program overview</p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)", marginTop: "0.55rem", color: "var(--green-950)" }}>
              AI, robotics, and 3D printing — taught as one system.
            </h2>
            <p style={{ marginTop: "1rem" }}>{airLab.overview}</p>
            <p style={{ marginTop: "0.85rem" }}>
              Inspired by problem-solving robotics challenges, teams build a wearable micro:bit controller with a student-trained movement model that radios commands to a Cutebot rover — then design a small printed accessory that serves a real function.
            </p>
          </Reveal>
          <Reveal>
            <div className="quote-block">
              <p className="eyebrow">Audience</p>
              <p style={{ marginTop: "0.75rem", color: "var(--ink)" }}>{airLab.audience}</p>
              <div className="stat-inline">
                <div>
                  <strong>{airLab.pilot.cohort}</strong>
                  <p>Organized into four teams of three.</p>
                </div>
                <div>
                  <strong>18 hours</strong>
                  <p>{airLab.pilot.schedule}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Studio pillars</p>
            <h2>Three disciplines. One supervised lab.</h2>
          </Reveal>
          <div className="grid-3">
            {airLab.pillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <button
                  type="button"
                  className="media-tile"
                  onClick={() => setLightbox({ src: pillar.image, alt: pillar.title })}
                  aria-label={`Enlarge image for ${pillar.title}`}
                >
                  <img src={pillar.image} alt="" />
                </button>
                <h3 style={{ marginTop: "0.9rem", color: "var(--green-900)", fontSize: "1.35rem" }}>{pillar.title}</h3>
                <p style={{ marginTop: "0.45rem" }}>{pillar.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Modules</p>
            <h2>What students practice each week.</h2>
          </Reveal>
          <Reveal>
            <div className="tabs" role="tablist" aria-label="AIR Lab modules">
              {airLab.modules.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeModule === item.id}
                  className={`tab ${activeModule === item.id ? "active" : ""}`}
                  onClick={() => setActiveModule(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="module-panel" role="tabpanel">
              <h3 style={{ color: "var(--green-900)", marginBottom: "0.45rem" }}>{module.label}</h3>
              <p>{module.detail}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="pilot">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Six-week pilot</p>
            <h2>From safety baselines to a class showcase.</h2>
            <p>
              Two 90-minute sessions each week. {airLab.pilot.homework}. Final product: {airLab.pilot.product}.
            </p>
          </Reveal>
          <Reveal className="week-grid">
            {airLab.weeks.map((week) => (
              <article key={week.week} className="week-item">
                <h3>Week {week.week}</h3>
                <p style={{ color: "var(--ink)", fontWeight: 600 }}>{week.focus}</p>
                <p style={{ marginTop: "0.45rem" }}>Evidence: {week.evidence}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Outcomes</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginTop: "0.5rem", color: "var(--green-950)" }}>
              Every learner shows understanding — not just a working robot.
            </h2>
            <div className="outcome-grid" style={{ marginTop: "1.25rem" }}>
              {airLab.outcomes.map((outcome) => (
                <div key={outcome} className="outcome-item">
                  <p style={{ color: "var(--ink)" }}>{outcome}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="feature-copy" style={{ background: "var(--green-950)", borderRadius: "var(--radius)", color: "white" }}>
              <p className="eyebrow" style={{ color: "var(--gold-300)" }}>
                Launch readiness
              </p>
              <h3 style={{ fontSize: "1.7rem", margin: "0.55rem 0 0.85rem" }}>Safety first. Then scale.</h3>
              <p>{airLab.pilot.note}</p>
              <p style={{ marginTop: "0.85rem" }}>
                Built on existing STEM robotics culture, 30 iMacs, and adult-supervised printing — with bounded robot test areas and accessible participation routes for every learner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2>Lab atmosphere & pilot imagery.</h2>
          </Reveal>
          <Reveal className="media-grid">
            {gallery.map((item) => (
              <button
                key={item.src}
                type="button"
                className="media-tile"
                onClick={() => setLightbox(item)}
                aria-label={`Open ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            ))}
          </Reveal>
          <Reveal className="cta-band" style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>Bring AIR Lab to your learner</h2>
            <p>Talk with admissions about middle and high school pathways, Robotics Club, and the proposed six-week pilot.</p>
            <Link className="btn btn-secondary" to="/admissions">
              Admissions next steps
            </Link>
          </Reveal>
        </div>
      </section>

      {lightbox ? <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} /> : null}
    </>
  );
}
