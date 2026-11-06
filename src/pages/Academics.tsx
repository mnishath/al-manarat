import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { coreSubjects, programs } from "../data/content";
import "./pages.css";

export function Academics() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Academics</p>
          <h1>Ontario learning. Islamic lens.</h1>
          <p>
            From preschool through Grade 12 and Hifz, students grow academically and spiritually — with clubs, athletics, after-school STEM & robotics, and the new AIR Lab pathway for middle and high school.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <img
              className="split-visual"
              src="/media/brand/academics-banner.jpg"
              alt="Academics at Al Manarat Heights"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Core subjects 1–8</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginTop: "0.5rem", color: "var(--green-950)" }}>
              A layered curriculum built for mastery.
            </h2>
            <p style={{ marginTop: "0.85rem" }}>
              Mathematics, English, Science, Social Studies, French, Quran, Islamic Studies, and Arts — taught with retention strategies, low ratios, and long-term teacher relationships.
            </p>
            <div className="subject-chips" style={{ marginTop: "1.25rem" }}>
              {coreSubjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Programs</p>
            <h2>Every stage, one continuous tarbiyyah.</h2>
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
        <div className="container grid-3">
          <Reveal className="value-item">
            <h3>Islamic Advantage</h3>
            <p>
              Morning azkaar, daily Qur’an, salah practice, Jummah, and an Islamic Studies core that equips students to live faith unapologetically.
            </p>
          </Reveal>
          <Reveal className="value-item">
            <h3>STEM & Robotics</h3>
            <p>
              After-school STEM & robotics and the Robotics Club feed into the AIR Lab — gesture AI, radio-controlled rovers, and purposeful 3D printing.
            </p>
            <Link to="/air-lab" style={{ display: "inline-block", marginTop: "0.75rem", fontWeight: 700, color: "var(--green-900)" }}>
              Visit AIR Lab →
            </Link>
          </Reveal>
          <Reveal className="value-item">
            <h3>After school</h3>
            <p>
              Snack, sports, martial arts, Qur’an/tajweed, homework support, and enrichment until 6:00 PM for busy families.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
