// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Auto-école Dubard – Permis B, Code & Conduite accompagnée",
  description:
    "Auto-école Dubard : parcours structuré, stage code intensif, simulateur de conduite et accompagnement personnalisé à La Réunion.",

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
