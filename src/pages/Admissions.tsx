import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { fees, school } from "../data/content";
import "./pages.css";

export function Admissions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Admissions</p>
          <h1>Join the Al Manarat family</h1>
          <p>
            Complete registration with the required documents. Entrance exams assess English and Math readiness for the grade ahead. Call the office at {school.officePhone} for guidance.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <img
              className="split-visual"
              src="/media/brand/admissions-banner.jpg"
              alt="Admissions at Al Manarat Heights"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Steps</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginTop: "0.5rem", color: "var(--green-950)" }}>
              How to register
            </h2>
            <ol style={{ margin: "1rem 0 0", paddingLeft: "1.2rem", color: "var(--ink-soft)", lineHeight: 1.7 }}>
              <li>Complete the registration form and attach checklist documents.</li>
              <li>Pay registration and supply fees at application; tuition begins in September.</li>
              <li>Sit the entrance exam when advised by admissions.</li>
              <li>Receive email confirmation of enrolment.</li>
            </ol>
            <div className="pill-row">
              <span className="pill">Registration form</span>
              <span className="pill">Birth certificate</span>
              <span className="pill">Immunization</span>
              <span className="pill">Health card</span>
              <span className="pill">Recent photo</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Fees</p>
            <h2>Transparent tuition planning</h2>
            <p>A one-time $150 registration fee applies to new students. Supply and ancillary fees are non-refundable. Scholarships/bursaries are available for qualifying families.</p>
          </Reveal>
          <Reveal className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Grade</th>
                  <th scope="col">Tuition</th>
                  <th scope="col">Supply</th>
                  <th scope="col">Ancillary</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((row) => (
                  <tr key={row.grade}>
                    <td>{row.grade}</td>
                    <td>{row.tuition}</td>
                    <td>{row.supply}</td>
                    <td>{row.ancillary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal className="value-item">
            <h3>Uniforms</h3>
            <p>
              Boys: white shirts, gray pants, green sweaters, black shoes. Girls: white shirts, gray tunics, green sweaters, scarfs, black shoes. Friday uniforms available via McCarthy Uniforms.
            </p>
          </Reveal>
          <Reveal className="value-item">
            <h3>AIR Lab interest</h3>
            <p>
              Middle and high school families can ask admissions about Robotics Club, after-school STEM, and the proposed six-week AIR Lab pilot for grades 6–12.
            </p>
            <Link to="/air-lab" style={{ display: "inline-block", marginTop: "0.75rem", fontWeight: 700, color: "var(--green-900)" }}>
              Learn about AIR Lab →
            </Link>
          </Reveal>
        </div>
        <div className="container" style={{ marginTop: "1.5rem" }}>
          <Reveal className="cta-band">
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>Questions about placement?</h2>
            <p>Our office can walk you through grade matching, entrance topics, and high school pathways.</p>
            <Link className="btn btn-secondary" to="/contact">
              Contact admissions
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
