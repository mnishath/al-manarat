import { useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "../components/Reveal";
import { school } from "../data/content";
import "./pages.css";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>We would love to meet you</h1>
          <p>
            Visit us in Mississauga, call the office, or send a note about admissions, campus tours, or the AIR Lab pilot.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <div className="quote-block">
              <h2 style={{ fontSize: "1.6rem", color: "var(--green-900)", marginBottom: "1rem" }}>School office</h2>
              <div className="stat-inline">
                <div>
                  <strong>Address</strong>
                  <p>{school.address}</p>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href={`tel:${school.phoneTel}`}>{school.phoneDisplay}</a>
                    <br />
                    Admissions: {school.officePhone}
                  </p>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href={`mailto:${school.email}`}>{school.email}</a>
                  </p>
                </div>
                <div>
                  <strong>Hours</strong>
                  <p>{school.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <form className="contact-form quote-block" onSubmit={onSubmit}>
              <h2 style={{ fontSize: "1.6rem", color: "var(--green-900)" }}>Send a message</h2>
              <label>
                Full name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required autoComplete="email" />
              </label>
              <label>
                Interest
                <select name="interest" defaultValue="admissions">
                  <option value="admissions">Admissions</option>
                  <option value="air-lab">AIR Lab pilot</option>
                  <option value="tour">Campus tour</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required />
              </label>
              <button className="btn btn-primary" type="submit">
                Submit inquiry
              </button>
              {sent ? (
                <p className="form-note" role="status">
                  Thank you — this demo form is ready for school staff to connect via {school.email}. Please also call {school.phoneDisplay} for timely support.
                </p>
              ) : (
                <p className="form-note">
                  Sample inquiry form for this preview site. For official registration, contact the school office directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
