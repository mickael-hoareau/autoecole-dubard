// app/mentions-legales/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales – Auto-école Dubard",
  description:
    "Mentions légales du site autoecoledubard.re – SARL Permis de Réussir.",
};

export default function MentionsLegales() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__brand">
            <a href="/" className="logo">
              <div className="logo__mark">D</div>
              <div className="logo__text">
                <span className="logo__line-1">AUTO-ÉCOLE</span>
                <span className="logo__line-2">DUBARD</span>
              </div>
            </a>
          </div>
          <div className="header__right">
            <a href="/" className="nav__cta nav__cta--desktop">
              Retour au site
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--white">
          <div className="container" style={{ maxWidth: 720 }}>
            <h1
              className="section__title fade-in"
              style={{ marginBottom: "2rem" }}
            >
              Mentions légales
            </h1>

            <div className="legal-content fade-in">
              <h2>1. Éditeur du site</h2>
              <p>
                <strong>SARL Permis de Réussir</strong> (Auto-école Dubard)
                <br />
                SIRET : 853 866 929 00021
                <br />
                Siège social : 59 rue Saint-Louis, 97450 Saint-Louis, La Réunion
                <br />
                Téléphone : 0262 26 11 57
                <br />
                Email : saintlouis@ecdubard.com
              </p>
              <p>
                <strong>Agréments préfectoraux d'enseignement de la conduite :</strong>
                <br />
                Agence Saint-Louis (59 rue Saint-Louis, 97450) : <strong>E 21 974 0023 0</strong>
                <br />
                Agence La Rivière (142 route de Cilaos, 97421) : <strong>E 21 974 0024 0</strong>
                <br />
                Délivrés par la Préfecture de La Réunion.
              </p>
              <p>
                <strong>Numéro de déclaration d'activité (organisme de formation) :</strong>{" "}
                04 97 35306 97
                <br />
                Enregistré auprès du Préfet de la Région Réunion. Cet
                enregistrement ne vaut pas agrément de l'État.
              </p>

              <h2>2. Directeur de la publication</h2>
              <p>Mickael HOAREAU, gérant de la SARL Permis de Réussir.</p>

              <h2>3. Hébergement</h2>
              <p>
                Vercel Inc.
                <br />
                440 N Bashaw St, Covina, CA 91723, États-Unis
                <br />
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
              </p>

              <h2>4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes,
                logo, icônes) est la propriété exclusive de la SARL Permis de
                Réussir, sauf mention contraire. Toute reproduction,
                représentation, modification, publication ou adaptation de tout
                ou partie des éléments du site est interdite sans
                l'autorisation écrite préalable de la SARL Permis de Réussir.
              </p>

              <h2>5. Collecte de données personnelles</h2>
              <p>
                Le formulaire de contact du site collecte les informations
                suivantes : nom, prénom, numéro de téléphone, adresse email
                (facultatif), type de permis souhaité et message libre. Ces
                données sont utilisées uniquement dans le but de répondre à
                votre demande d'information et de vous recontacter. Elles ne
                sont ni vendues, ni transmises à des tiers à des fins
                commerciales.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
                droit d'accès, de rectification, de suppression et d'opposition
                au traitement de vos données personnelles. Pour exercer ces
                droits, vous pouvez nous contacter à l'adresse :{" "}
                <a href="mailto:saintlouis@ecdubard.com">
                  saintlouis@ecdubard.com
                </a>
                .
              </p>

              <h2>6. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de suivi publicitaire, de
                profilage ni de mesure d'audience tierce. Seuls des cookies
                strictement nécessaires au fonctionnement technique du site
                peuvent être déposés.
              </p>
              <p>
                Conformément à la réglementation RGPD et aux recommandations de
                la CNIL, un bandeau de consentement vous est présenté lors de
                votre première visite. Vous pouvez à tout moment accepter ou
                refuser l'utilisation de ces cookies. Votre choix est conservé
                pour une durée maximale de 13 mois.
              </p>
              <p>
                Pour modifier votre choix, vous pouvez effacer les données de
                navigation de votre navigateur, ce qui réaffichera le bandeau
                de consentement lors de votre prochaine visite.
              </p>

              <h2>7. Limitation de responsabilité</h2>
              <p>
                Les informations publiées sur ce site sont fournies à titre
                indicatif et sont susceptibles d'évoluer. La SARL Permis de
                Réussir ne saurait être tenue responsable des éventuelles
                erreurs ou omissions, ni des résultats obtenus suite à
                l'utilisation de ces informations.
              </p>

              <h2>8. Médiation de la consommation</h2>
              <p>
                Conformément aux articles L.616-1 et R.616-1 du Code de la
                consommation, en cas de litige non résolu par notre service
                client, vous pouvez recourir gratuitement au médiateur de la
                consommation suivant :
              </p>
              <p>
                <strong>Société Médiation Professionnelle</strong>
                <br />
                Alteritae – 5 rue Salvaing, 12000 Rodez
                <br />
                Site web :{" "}
                <a
                  href="http://www.mediateur-consommation-smp.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mediateur-consommation-smp.fr
                </a>
              </p>

              <h2>9. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites. La SARL
                Permis de Réussir n'exerce aucun contrôle sur le contenu de ces
                sites tiers et décline toute responsabilité les concernant.
              </p>

              <h2>10. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, et après tentative de médiation,
                les tribunaux compétents seront ceux du ressort du siège social
                de la SARL Permis de Réussir.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div>
              <div>
                © {new Date().getFullYear()} Auto-école Dubard – Tous droits
                réservés.
              </div>
              <div className="footer__agrements">
                Agréments préfectoraux : E 21 974 0023 0 (Saint-Louis) – E 21 974 0024 0 (La Rivière) | NDA : 04 97 35306 97
              </div>
            </div>
            <div className="footer__links">
              <a href="/">Accueil</a>
              <a href="/tarifs">Tarifs</a>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/cgv">CGV</a>
              <a href="/reclamations">Réclamations</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
