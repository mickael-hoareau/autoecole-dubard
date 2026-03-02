// app/reclamations/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réclamations – Auto-école Dubard",
  description:
    "Procédure de traitement des réclamations de l'auto-école Dubard. Contactez-nous pour toute insatisfaction ou réclamation.",
};

export default function Reclamations() {
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
        <section className="section section--light">
          <div className="container">
            <div className="section__heading fade-in">
              <p className="section__eyebrow">Qualité</p>
              <h1 className="section__title">Réclamations</h1>
              <p className="section__subtitle">
                Votre satisfaction est au cœur de notre démarche qualité.
                Si vous rencontrez un problème ou souhaitez nous faire part
                d'une insatisfaction, nous nous engageons à traiter votre
                réclamation avec sérieux et réactivité.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <div className="reclamation fade-in">
              <h2 className="reclamation__section-title">
                Comment formuler une réclamation ?
              </h2>
              <p className="reclamation__text">
                Vous pouvez nous adresser votre réclamation par l'un des
                moyens suivants :
              </p>

              <div className="reclamation__channels">
                <div className="reclamation__channel">
                  <div className="reclamation__channel-icon">✉</div>
                  <div>
                    <strong>Par email</strong>
                    <p>
                      <a href="mailto:saintlouis@ecdubard.com">
                        saintlouis@ecdubard.com
                      </a>
                    </p>
                    <p>Objet : « Réclamation – [votre nom] »</p>
                  </div>
                </div>

                <div className="reclamation__channel">
                  <div className="reclamation__channel-icon">📞</div>
                  <div>
                    <strong>Par téléphone</strong>
                    <p>0262 26 11 57</p>
                    <p>Du lundi au vendredi, aux heures d'ouverture</p>
                  </div>
                </div>

                <div className="reclamation__channel">
                  <div className="reclamation__channel-icon">📮</div>
                  <div>
                    <strong>Par courrier</strong>
                    <p>
                      SARL Permis de Réussir – Auto-école Dubard
                      <br />
                      59 rue Saint-Louis, 97450 Saint-Louis
                      <br />
                      La Réunion
                    </p>
                  </div>
                </div>

                <div className="reclamation__channel">
                  <div className="reclamation__channel-icon">🏢</div>
                  <div>
                    <strong>En agence</strong>
                    <p>
                      Directement auprès de l'accueil de nos agences de
                      Saint-Louis ou La Rivière.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="reclamation__section-title">
                Procédure de traitement
              </h2>
              <p className="reclamation__text">
                Conformément à notre démarche qualité Qualiopi, chaque
                réclamation est traitée selon le processus suivant :
              </p>

              <div className="evaluation">
                <div className="evaluation__step">
                  <div className="evaluation__number">1</div>
                  <div className="evaluation__content">
                    <h3>Réception et accusé de réception</h3>
                    <p>
                      Votre réclamation est enregistrée et un <strong>accusé
                      de réception</strong> vous est envoyé dans un délai
                      de <strong>48 heures ouvrées</strong>. Un numéro de
                      suivi vous est attribué.
                    </p>
                  </div>
                </div>

                <div className="evaluation__step">
                  <div className="evaluation__number">2</div>
                  <div className="evaluation__content">
                    <h3>Analyse et investigation</h3>
                    <p>
                      Votre réclamation est transmise au <strong>référent
                      qualité</strong> (Mickael HOAREAU) qui analyse la
                      situation, consulte les parties concernées et
                      recherche les causes du problème.
                    </p>
                  </div>
                </div>

                <div className="evaluation__step">
                  <div className="evaluation__number">3</div>
                  <div className="evaluation__content">
                    <h3>Réponse et actions correctives</h3>
                    <p>
                      Une réponse écrite vous est adressée dans un délai
                      maximum de <strong>15 jours ouvrés</strong> à compter
                      de la réception de la réclamation. Cette réponse
                      comprend :
                    </p>
                    <ul>
                      <li>L'analyse de votre réclamation</li>
                      <li>
                        La ou les mesures correctives mises en place le cas
                        échéant
                      </li>
                      <li>
                        Les actions d'amélioration envisagées pour éviter que
                        le problème ne se reproduise
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="evaluation__step">
                  <div className="evaluation__number">4</div>
                  <div className="evaluation__content">
                    <h3>Suivi et clôture</h3>
                    <p>
                      Si la réponse ne vous satisfait pas, vous pouvez
                      demander un réexamen de votre dossier. En dernier
                      recours, vous pouvez saisir le <strong>médiateur de
                      la consommation</strong> :
                    </p>
                    <ul>
                      <li>
                        <strong>Société Médiation Professionnelle</strong>
                      </li>
                      <li>
                        Alteritae – 5 rue Salvaing, 12000 Rodez
                      </li>
                      <li>
                        <a
                          href="https://www.mediateur-consommation-smp.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.mediateur-consommation-smp.fr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="evaluation__footer fade-in">
                <p>
                  <strong>Engagement qualité :</strong> toutes les
                  réclamations sont consignées dans un registre interne et
                  font l'objet d'un bilan régulier dans le cadre de notre
                  démarche d'amélioration continue. Ce registre est
                  consultable lors des audits Qualiopi.
                </p>
              </div>

              <h2
                className="reclamation__section-title"
                style={{ marginTop: "2.5rem" }}
              >
                Référent qualité
              </h2>
              <div className="reclamation__referent">
                <p>
                  <strong>Mickael HOAREAU</strong> – Gérant et référent qualité
                </p>
                <p>
                  Email :{" "}
                  <a href="mailto:saintlouis@ecdubard.com">
                    saintlouis@ecdubard.com
                  </a>
                </p>
                <p>Téléphone : 0262 26 11 57</p>
                <p>
                  SARL Permis de Réussir – SIRET : 853 866 929 00021
                </p>
              </div>
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
                Agréments préfectoraux : E 21 974 0023 0 (Saint-Louis) – E 21
                974 0024 0 (La Rivière) | NDA : 04 97 35306 97
              </div>
            </div>
            <div className="footer__links">
              <a href="/">Accueil</a>
              <a href="/formations">Formations</a>
              <a href="/tarifs">Tarifs</a>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/cgv">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
