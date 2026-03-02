"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Verifier le consentement initial
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted") {
      setConsent(true);
    }

    // Ecouter les changements de consentement (emis par CookieBanner)
    function handleConsent() {
      const current = localStorage.getItem("cookie-consent");
      setConsent(current === "accepted");
    }

    window.addEventListener("cookie-consent-change", handleConsent);
    return () => window.removeEventListener("cookie-consent-change", handleConsent);
  }, []);

  if (!GA_ID || !consent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
