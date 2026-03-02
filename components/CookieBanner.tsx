"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Ne montrer que si pas de choix déjà enregistré
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem("cookie-consent", "refused");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Gestion des cookies">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <strong>Respect de votre vie privée</strong>
          <p>
            Ce site utilise des cookies pour mesurer son audience (Google
            Analytics) et améliorer votre expérience. En cliquant sur
            « Accepter », vous consentez à l'utilisation de ces cookies
            d'analyse.{" "}
            <a href="/mentions-legales">En savoir plus</a>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            className="cookie-banner__btn cookie-banner__btn--refuse"
            onClick={refuse}
          >
            Refuser
          </button>
          <button
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={accept}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
