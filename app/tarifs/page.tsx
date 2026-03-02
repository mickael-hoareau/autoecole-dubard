// app/tarifs/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs – Auto-école Dubard",
  description:
    "Tarifs détaillés TTC de l'Auto-école Dubard : formations au code, leçons de conduite, forfaits permis B, conduite accompagnée et supervisée à La Réunion.",
};

export default function Tarifs() {
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
        {/* EN-TÊTE */}
        <section className="section section--light" style={{ paddingBottom: "2rem" }}>
          <div className="container">
            <div className="section__heading fade-in">
              <div className="section__eyebrow">Transparence</div>
              <h1 className="section__title">Nos tarifs</h1>
              <p className="section__subtitle">
                Tous les prix sont indiqués en euros TTC. Tarifs en vigueur au
                1er janvier 2024.
              </p>
            </div>
          </div>
        </section>

        {/* TARIFS UNITAIRES — THÉORIE */}
        <section className="section section--white" style={{ paddingTop: "2.5rem" }}>
          <div className="container">
            <h2 className="tarifs__section-title fade-in">
              Tarifs unitaires — Théorie
            </h2>
            <div className="tarifs__table-wrap fade-in">
              <table className="tarifs__table">
                <thead>
                  <tr>
                    <th>Prestation</th>
                    <th>Durée</th>
                    <th>Prix TTC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Inscription</td>
                    <td>—</td>
                    <td><strong>60,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Livre de code</td>
                    <td>—</td>
                    <td><strong>10,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Formation théorique</td>
                    <td>33 heures</td>
                    <td><strong>135,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Prépacode (accès en ligne)</td>
                    <td>—</td>
                    <td><strong>40,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Code mobile</td>
                    <td>—</td>
                    <td><strong>10,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Tests de code en salle / en ligne</td>
                    <td>—</td>
                    <td><strong>60,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Frais d'accompagnement ETG</td>
                    <td>—</td>
                    <td><strong>Offert</strong></td>
                  </tr>
                  <tr>
                    <td>Redevance État (examen du code)</td>
                    <td>—</td>
                    <td><strong>30,00 €</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              className="tarifs__section-title fade-in"
              style={{ marginTop: "3rem" }}
            >
              Tarifs unitaires — Pratique
            </h2>
            <div className="tarifs__table-wrap fade-in">
              <table className="tarifs__table">
                <thead>
                  <tr>
                    <th>Prestation</th>
                    <th>Durée</th>
                    <th>Prix TTC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Évaluation de départ</td>
                    <td>—</td>
                    <td><strong>45,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Livret et fiche de suivi</td>
                    <td>—</td>
                    <td><strong>25,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Leçon de conduite (boîte manuelle BVM)</td>
                    <td>1 heure</td>
                    <td><strong>45,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Leçon de conduite (boîte automatique BEA)</td>
                    <td>1 heure</td>
                    <td><strong>45,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Vérifications int./ext. et 1ers secours</td>
                    <td>2 heures</td>
                    <td><strong>50,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Examens blancs</td>
                    <td>4 heures</td>
                    <td><strong>85,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Rendez-vous préalable</td>
                    <td>2 heures</td>
                    <td><strong>90,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>1er rendez-vous pédagogique</td>
                    <td>3 heures</td>
                    <td><strong>120,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>2e rendez-vous pédagogique</td>
                    <td>3 heures</td>
                    <td><strong>120,00 €</strong></td>
                  </tr>
                  <tr>
                    <td>Accompagnement pratique (BVM / BEA)</td>
                    <td>—</td>
                    <td><strong>45,00 €</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FORFAITS */}
        <section className="section section--light">
          <div className="container">
            <div className="section__heading fade-in">
              <div className="section__eyebrow">Forfaits</div>
              <h2 className="section__title">Nos formules</h2>
              <p className="section__subtitle">
                Des forfaits adaptés à chaque parcours, combinant théorie et
                pratique.
              </p>
            </div>

            <div className="grid grid--3 fade-in">
              {/* Forfait Théorie */}
              <div className="card">
                <div className="card__eyebrow">Théorie seule</div>
                <div className="card__title">Forfait Code</div>
                <div className="tarifs__price">345 €<span> TTC</span></div>
                <ul className="card__list">
                  <li>Inscription</li>
                  <li>Livre de code</li>
                  <li>Formation théorique (33h)</li>
                  <li>Prépacode (accès en ligne)</li>
                  <li>Tests de code</li>
                  <li>Accompagnement ETG offert</li>
                  <li>Redevance État</li>
                </ul>
              </div>

              {/* Forfait Pratique BVM 20h */}
              <div className="card">
                <div className="card__eyebrow">Boîte manuelle</div>
                <div className="card__title">Forfait Pratique BVM (20h)</div>
                <div className="tarifs__price">
                  À partir de 1 150 €<span> TTC</span>
                </div>
                <ul className="card__list">
                  <li>Évaluation de départ</li>
                  <li>Livret et fiche de suivi</li>
                  <li>20 leçons de conduite (1h)</li>
                  <li>Vérifications et 1ers secours (2h)</li>
                  <li>Examens blancs (4h)</li>
                  <li>Accompagnement pratique</li>
                </ul>
              </div>

              {/* Forfait Pratique BVM 25h */}
              <div className="card">
                <div className="card__eyebrow">Boîte manuelle</div>
                <div className="card__title">Forfait Pratique BVM (25h)</div>
                <div className="tarifs__price">
                  À partir de 1 375 €<span> TTC</span>
                </div>
                <ul className="card__list">
                  <li>Évaluation de départ</li>
                  <li>Livret et fiche de suivi</li>
                  <li>25 leçons de conduite (1h)</li>
                  <li>Vérifications et 1ers secours (2h)</li>
                  <li>Examens blancs (4h)</li>
                  <li>Accompagnement pratique</li>
                </ul>
              </div>

              {/* Forfait Pratique BEA */}
              <div className="card">
                <div className="card__eyebrow">Boîte automatique</div>
                <div className="card__title">Forfait Pratique BEA (13h)</div>
                <div className="tarifs__price">
                  À partir de 840 €<span> TTC</span>
                </div>
                <ul className="card__list">
                  <li>Évaluation de départ</li>
                  <li>Livret et fiche de suivi</li>
                  <li>13 leçons de conduite (1h)</li>
                  <li>Vérifications et 1ers secours (2h)</li>
                  <li>Examens blancs (4h)</li>
                  <li>Accompagnement pratique</li>
                </ul>
              </div>

              {/* Conduite supervisée */}
              <div className="card">
                <div className="card__eyebrow">Option</div>
                <div className="card__title">Conduite supervisée</div>
                <div className="tarifs__price">90 €<span> TTC</span></div>
                <p className="card__text">
                  À ajouter à un forfait Pratique BVM. Inclut le rendez-vous
                  préalable de 2 heures.
                </p>
              </div>

              {/* AAC */}
              <div className="card">
                <div className="card__eyebrow">Option – Dès 15 ans</div>
                <div className="card__title">
                  Conduite accompagnée (AAC)
                </div>
                <div className="tarifs__price">360 €<span> TTC</span></div>
                <p className="card__text">
                  À ajouter au forfait Pratique BVM. Inclut le rendez-vous
                  préalable et les 2 rendez-vous pédagogiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FORFAITS COMBINÉS */}
        <section className="section section--dark">
          <div className="container">
            <div className="section__heading fade-in">
              <div className="section__eyebrow">Tout compris</div>
              <h2 className="section__title">Forfaits combinés Code + Conduite</h2>
              <p className="section__subtitle">
                La formule la plus complète pour passer votre permis B.
              </p>
            </div>

            <div className="grid grid--2 fade-in">
              <div className="card">
                <div className="card__eyebrow">Forfait complet</div>
                <div className="card__title">Code + Conduite 20h (BVM)</div>
                <div className="tarifs__price tarifs__price--highlight">
                  1 495 €<span> TTC</span>
                </div>
                <p className="card__text">
                  Forfait Théorie complet + Forfait Pratique BVM 20 heures.
                </p>
                <a href="/#contact" className="card__cta">
                  Demander un devis <span>→</span>
                </a>
              </div>

              <div className="card">
                <div className="card__eyebrow">Forfait complet</div>
                <div className="card__title">Code + Conduite 25h (BVM)</div>
                <div className="tarifs__price tarifs__price--highlight">
                  1 720 €<span> TTC</span>
                </div>
                <p className="card__text">
                  Forfait Théorie complet + Forfait Pratique BVM 25 heures.
                </p>
                <a href="/#contact" className="card__cta">
                  Demander un devis <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FINANCEMENT */}
        <section className="section section--white" id="financement">
          <div className="container">
            <div className="section__heading fade-in">
              <div className="section__eyebrow">Aides et financement</div>
              <h2 className="section__title">Comment financer votre permis ?</h2>
              <p className="section__subtitle">
                Notre certification Qualiopi vous permet d'accéder à de
                nombreux dispositifs de financement publics ou mutualisés.
              </p>
            </div>

            <div className="grid grid--2 fade-in">
              <div className="card--soft">
                <div className="card__eyebrow">Financement principal</div>
                <h3 className="card__title">
                  Compte Personnel de Formation (CPF)
                </h3>
                <p className="card__text">
                  Vous avez 16 ans ou plus et êtes salarié(e), demandeur
                  d'emploi ou travailleur indépendant ? Vous cumulez chaque
                  année des droits à la formation sur votre Compte Personnel
                  de Formation.
                </p>
                <ul className="card__list">
                  <li>
                    <strong>Éligibilité :</strong> formation au permis B
                    (catégorie B, B78) — uniquement la première obtention
                  </li>
                  <li>
                    <strong>Condition :</strong> l'obtention du permis doit
                    contribuer à la réalisation d'un projet professionnel ou
                    à favoriser la sécurisation de votre parcours
                    professionnel
                  </li>
                  <li>
                    <strong>Montant :</strong> dépend de vos droits acquis
                    (consultez votre solde en ligne)
                  </li>
                  <li>
                    <strong>Comment faire :</strong> créez votre compte sur{" "}
                    <a
                      href="https://www.moncompteformation.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      moncompteformation.gouv.fr
                    </a>{" "}
                    et recherchez notre auto-école
                  </li>
                </ul>
              </div>

              <div className="card--soft">
                <div className="card__eyebrow">Jeunes de 15 à 25 ans</div>
                <h3 className="card__title">
                  Permis à 1 € par jour
                </h3>
                <p className="card__text">
                  Dispositif de l'État permettant aux jeunes de 15 à 25 ans
                  de bénéficier d'un prêt à taux zéro pour financer leur
                  formation au permis de conduire.
                </p>
                <ul className="card__list">
                  <li>
                    <strong>Montant :</strong> 600 €, 800 €, 1 000 € ou
                    1 200 € selon le forfait choisi
                  </li>
                  <li>
                    <strong>Remboursement :</strong> 30 € par mois (soit
                    environ 1 € par jour)
                  </li>
                  <li>
                    <strong>Intérêts :</strong> pris en charge par l'État
                  </li>
                  <li>
                    <strong>Comment faire :</strong> se renseigner auprès de
                    notre agence et d'un établissement bancaire partenaire
                  </li>
                </ul>
              </div>

              <div className="card--soft">
                <div className="card__eyebrow">Demandeurs d'emploi</div>
                <h3 className="card__title">
                  France Travail (ex-Pôle emploi)
                </h3>
                <p className="card__text">
                  Plusieurs aides sont mobilisables si le permis de conduire
                  est nécessaire à votre projet de retour à l'emploi :
                </p>
                <ul className="card__list">
                  <li>
                    <strong>AIF (Aide Individuelle à la Formation) :</strong>{" "}
                    financement total ou partiel de la formation au permis
                  </li>
                  <li>
                    <strong>Bon de commande :</strong> certaines agences
                    France Travail délivrent directement un bon de commande
                  </li>
                  <li>
                    <strong>Comment faire :</strong> en parler avec votre
                    conseiller France Travail qui pourra étudier votre
                    éligibilité
                  </li>
                </ul>
              </div>

              <div className="card--soft">
                <div className="card__eyebrow">Autres dispositifs</div>
                <h3 className="card__title">
                  Aides complémentaires
                </h3>
                <ul className="card__list">
                  <li>
                    <strong>Mission Locale :</strong> pour les jeunes de 16
                    à 25 ans, aide au financement du permis dans le cadre
                    d'un parcours d'insertion professionnelle
                  </li>
                  <li>
                    <strong>OPCO :</strong> si vous êtes salarié(e) en
                    contrat d'apprentissage ou de professionnalisation,
                    votre employeur peut mobiliser les fonds de son OPCO
                  </li>
                  <li>
                    <strong>Conseil Régional / Département :</strong>{" "}
                    certaines collectivités proposent des aides au permis
                    pour les jeunes ou les publics en insertion
                  </li>
                  <li>
                    <strong>FASTT :</strong> aide au permis pour les
                    travailleurs intérimaires
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="evaluation__footer fade-in"
              style={{ maxWidth: 780, margin: "2rem auto 0" }}
            >
              <p>
                <strong>Besoin d'aide pour votre dossier de financement ?</strong>{" "}
                Notre équipe vous accompagne dans les démarches administratives
                pour mobiliser vos droits. Contactez-nous au{" "}
                <strong>0262 26 11 57</strong> ou par email à{" "}
                <a href="mailto:saintlouis@ecdubard.com">
                  saintlouis@ecdubard.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* INFORMATIONS COMPLÉMENTAIRES */}
        <section className="section section--light">
          <div className="container" style={{ maxWidth: 720 }}>
            <div className="legal-content fade-in">
              <h2>Informations complémentaires</h2>
              <p>
                <strong>Moyens de paiement acceptés :</strong> carte bancaire,
                espèces, chèque, virement bancaire. Paiement en plusieurs fois
                possible (jusqu'à 4 fois sans frais).
              </p>
              <p>
                Les tarifs incluent l'ensemble des prestations mentionnées. Toute
                prestation supplémentaire (leçons additionnelles, nouvelle
                présentation à l'examen, etc.) sera facturée au tarif unitaire en
                vigueur.
              </p>
              <p>
                Pour toute question ou demande de devis personnalisé, n'hésitez
                pas à{" "}
                <a href="/#contact">nous contacter</a>.
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
