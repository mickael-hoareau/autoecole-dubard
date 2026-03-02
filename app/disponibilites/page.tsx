// app/disponibilites/page.tsx
import type { Metadata } from "next";
import { DisponibilitesForm } from "@/components/DisponibilitesForm";

export const metadata: Metadata = {
  title: "Mes disponibilites \u2013 Auto-ecole Dubard",
  description:
    "Indique tes creneaux de disponibilite pour faciliter la planification de tes lecons de conduite. Auto-ecole Dubard, La Reunion.",
};

export default function DisponibilitesPage() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__brand">
            <a href="/" className="logo">
              <div className="logo__mark">D</div>
              <div className="logo__text">
                <span className="logo__line-1">AUTO-ECOLE</span>
                <span className="logo__line-2">DUBARD</span>
              </div>
            </a>
          </div>
          <div className="header__right">
            <a href="/" className="nav__cta nav__cta--desktop">
              Retour au site
              <span>&uarr;</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--light">
          <div className="container">
            <div className="section__heading fade-in">
              <p className="section__eyebrow">Planning</p>
              <h1 className="section__title">Mes disponibilites</h1>
              <p className="section__subtitle">
                Pour faciliter la planification de tes lecons, indique-nous
                tes creneaux de disponibilite. Coche les cases correspondant
                aux heures ou tu es libre, du lundi au samedi.
              </p>
            </div>

            <div className="dispo__info fade-in">
              <div className="dispo__info-item">
                <strong>Comment ca marche ?</strong>
                <p>
                  Clique ou glisse sur les cases de la grille pour indiquer
                  tes creneaux disponibles (en vert). Si tes disponibilites
                  changent une semaine sur deux, active le mode
                  &laquo; Semaines alternees &raquo; pour remplir deux grilles
                  distinctes.
                </p>
              </div>
              <div className="dispo__info-item">
                <strong>Apres l&apos;envoi</strong>
                <p>
                  Tu recevras un recapitulatif par email. Notre equipe
                  utilisera ces informations pour te proposer un planning
                  adapte. Tu pourras toujours renvoyer le formulaire si tes
                  disponibilites changent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <DisponibilitesForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div>
              <div>
                &copy; {new Date().getFullYear()} Auto-ecole Dubard &ndash; Tous
                droits reserves.
              </div>
              <div className="footer__agrements">
                Agrements prefectoraux : E 21 974 0023 0 (Saint-Louis) &ndash; E
                21 974 0024 0 (La Riviere) | NDA : 04 97 35306 97
              </div>
            </div>
            <div className="footer__links">
              <a href="/">Accueil</a>
              <a href="/formations">Formations</a>
              <a href="/tarifs">Tarifs</a>
              <a href="/mentions-legales">Mentions legales</a>
              <a href="/cgv">CGV</a>
              <a href="/reclamations">Reclamations</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
