"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="instagram-icon">
      <rect x="3" y="3" width="14" height="14" rx="4" />
      <circle cx="10" cy="10" r="3.2" />
      <circle className="instagram-dot" cx="14.6" cy="5.6" r=".85" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a
          className="brand"
          href="#top"
          aria-label="Elevated By Elle, home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Elevated By Elle"
            width={180}
            height={72}
            unoptimized
            className="brand-logo"
            loading="eager"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="social-button"
            href="https://www.instagram.com/elevatedhairbyelle"
            target="_blank"
            rel="noreferrer"
            aria-label="Elevated By Elle on Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            className="header-booking"
            href="https://www.vagaro.com/saintblonde"
            target="_blank"
            rel="noreferrer"
          >
            <span className="booking-label-long">Reserve appointment</span>
            <span className="booking-label-short">Book</span>
          </a>
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navItems.map(([label, href]) => (
          <a href={href} key={label} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
