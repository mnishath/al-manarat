import { useState } from "react";
import { Lightbox } from "../components/Lightbox";
import { Reveal } from "../components/Reveal";
import { faculty, school } from "../data/content";
import "./pages.css";

export function Faculty() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Faculty</p>
          <h1>Our faculty</h1>
          <p>
            Mentors who walk with students for years — tarbiyyah-based relationships that shape both academic growth and imaan. Photos reused from the school’s live faculty page.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="quote-block" style={{ marginBottom: "2rem" }}>
            <p>“{school.founderQuote.slice(0, 220)}…”</p>
            <footer>
              {school.founder} · {school.founderTitle}
            </footer>
          </Reveal>
          <Reveal className="faculty-grid">
            {faculty.map((person) => (
              <button
                key={person.name}
                type="button"
                className="faculty-card"
                onClick={() => setLightbox({ src: person.photo, alt: person.name })}
              >
                <figure>
                  <img src={person.photo} alt={person.name} loading="lazy" />
                  <figcaption>
                    <strong>{person.name}</strong>
                    <span>{person.role}</span>
                  </figcaption>
                </figure>
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {lightbox ? <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} /> : null}
    </>
  );
}
