import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { school } from "../data/content";
import "./Layout.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/air-lab", label: "AIR Lab" },
  { to: "/faculty", label: "Faculty" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" } as ScrollToOptions);
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Al Manarat Heights home">
            <img src="/media/brand/logo.png" alt="" width={48} height={48} />
            <span className="brand-copy">
              <strong>Al Manarat Heights</strong>
              <span>Islamic School · Mississauga</span>
            </span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav id="site-nav" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link className="nav-cta" to="/air-lab">
              Explore AIR Lab
            </Link>
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Al Manarat Heights</h3>
            <p style={{ color: "rgba(255,255,255,0.78)" }}>{school.tagline}</p>
            <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.78)" }}>{school.address}</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.1rem" }}>Navigate</h3>
            <div className="footer-links">
              {links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "1.1rem" }}>Connect</h3>
            <div className="footer-links">
              <a href={`tel:${school.phoneTel}`}>{school.phoneDisplay}</a>
              <a href={`mailto:${school.email}`}>{school.email}</a>
              <span>{school.hours}</span>
            </div>
          </div>
        </div>
        <div className="container footer-meta">
          <span>© {new Date().getFullYear()} Al Manarat Heights Islamic School</span>
          <span>{school.ranking}</span>
        </div>
      </footer>
    </>
  );
}
