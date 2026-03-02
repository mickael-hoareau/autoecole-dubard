"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Dès qu'on dépasse ~20px, on active le mode "shrink"
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Appel initial au cas où la page est déjà scrollée
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        {/* MARQUE */}
        <div className="header__brand">
          <div className="logo">
            <div className="logo__mark">D</div>
            <div className="logo__text">
              <span className="logo__line-1">AUTO-ÉCOLE</span>
              <span className="logo__line-2">DUBARD</span>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          className={`nav ${open ? "nav--open" : ""}`}
          aria-label="Navigation principale"
        >
          <a href="#hero" className="nav__link">
            Accueil
          </a>
          <a href="#code" className="nav__link">
            Code
          </a>
          <a href="#permis-b" className="nav__link">
            Permis B
          </a>
          <a href="#boite-auto" className="nav__link">
            Boîte auto
          </a>
          <a href="#simulateur" className="nav__link">
            Simulateur
          </a>
          <a href="#accompagnee" className="nav__link">
            Accompagnée
          </a>

          {/* CONTACT MOBILE DANS LE MENU */}
          <div className="nav__mobile-contact">
            <a href="tel:0262261157" className="nav__mobile-contact-link">
              📞 Appeler : 0262 26 11 57
            </a>
            <a
              href="https://wa.me/262262261157"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__mobile-contact-link"
            >
              💬 WhatsApp direct
            </a>
          </div>

          {/* CTA MOBILE */}
          <a href="#contact" className="nav__cta nav__cta--mobile">
            Être rappelé(e)
            <span>↗</span>
          </a>
        </nav>

        {/* BLOC CONTACT + CTA (DESKTOP) */}
        <div className="header__right">
          <a href="tel:0262261157" className="header__phone">
            <span className="header__phone-label">Appeler</span>
            <span className="header__phone-number">0262 26 11 57</span>
          </a>

          <a
            href="https://wa.me/262262261157"
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp-pill"
          >
            <span className="header__whatsapp-dot" />
            <span className="header__whatsapp-text">WhatsApp</span>
          </a>

          <a href="#contact" className="nav__cta nav__cta--desktop">
            Être rappelé(e)
            <span>↗</span>
          </a>
        </div>

        {/* TOGGLE MOBILE */}
        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="nav-toggle__icon" />
        </button>
      </div>
    </header>
  );
}
