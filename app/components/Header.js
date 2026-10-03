"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">

        <a href="/" className="brand">
          <img
            src="/images/badge.png"
            alt="Danderhall Miners Football Club"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <a href="/">Home</a>
          <a href="/our-club">Our Club</a>
          <a href="/teams">Teams</a>
          <a href="/community">Community</a>
          <a href="/facilities">Facilities</a>
          <a href="/safeguarding">Safeguarding</a>
          <a href="/sponsors">Sponsors</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
        </nav>

        <a
          href="/contact"
          className="btn btn-yellow nav-button desktop-join"
        >
          Join Our Club
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
      >
        <nav className="mobile-menu-links">

          <a href="/">
            <span>Home</span>
            <ArrowRight size={18} />
          </a>

          <a href="/our-club">
            <span>Our Club</span>
            <ArrowRight size={18} />
          </a>

          <a href="/teams">
            <span>Teams</span>
            <ArrowRight size={18} />
          </a>

          <a href="/community">
            <span>Community</span>
            <ArrowRight size={18} />
          </a>

          <a href="/facilities">
            <span>Facilities</span>
            <ArrowRight size={18} />
          </a>

          <a href="/safeguarding">
            <span>Safeguarding</span>
            <ArrowRight size={18} />
          </a>

          <a href="/sponsors">
            <span>Sponsors</span>
            <ArrowRight size={18} />
          </a>

          <a href="/news">
            <span>News</span>
            <ArrowRight size={18} />
          </a>

          <a href="/contact">
            <span>Contact</span>
            <ArrowRight size={18} />
          </a>

        </nav>

        <a
          href="/contact"
          className="btn btn-yellow mobile-join-button"
        >
          Join Our Club <ArrowRight size={17} />
        </a>

      </div>
    </header>
  );
}
