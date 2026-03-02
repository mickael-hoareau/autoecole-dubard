// app/cgv/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente – Auto-école Dubard",
  description:
    "Conditions générales de vente de l'Auto-école Dubard – SARL Permis de Réussir, La Réunion.",
};

export default function CGV() {
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
              Conditions Générales de Vente
            </h1>

            <div className="legal-content fade-in">
              <p>
                <em>En vigueur au 1er mars 2026</em>
              </p>

              <h2>1. Identification du prestataire</h2>
              <p>
                <strong>SARL Permis de Réussir</strong> (Auto-école Dubard)
                <br />
                SIRET : 853 866 929 00021
                <br />
                Siège social : 59 rue Saint-Louis, 97450 Saint-Louis, La Réunion
                <br />
                Téléphone : 0262 26 11 57
                <br />
                Email :{" "}
                <a href="mailto:saintlouis@ecdubard.com">
                  saintlouis@ecdubard.com
                </a>
              </p>

              <h2>2. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à
                l'ensemble des prestations de formation à la conduite proposées
                par l'Auto-école Dubard : formation au code de la route, leçons
                de conduite (boîte manuelle et automatique), stages code
                intensifs, heures sur simulateur, conduite accompagnée (AAC) et
                conduite supervisée.
              </p>
              <p>
                Toute inscription implique l'acceptation pleine et entière des
                présentes CGV.
              </p>

              <h2>3. Inscription et contrat de formation</h2>
              <p>
                L'inscription est effective après la signature du contrat de
                formation conforme au contrat-type réglementaire en vigueur
                (arrêté du 19 juin 2023 modifié), la fourniture des pièces
                justificatives requises et le versement du premier règlement.
              </p>
              <p>
                Le contrat de formation détaille les prestations choisies, leur
                volume horaire, leur tarif unitaire et le coût total de la
                formation. Un exemplaire est remis à l'élève avant le début de
                la formation.
              </p>

              <h2>4. Tarifs et prestations</h2>
              <p>
                Les tarifs des prestations sont affichés en euros toutes taxes
                comprises (TTC) sur le site internet, dans les locaux de
                l'auto-école et dans le contrat de formation. Ils comprennent
                notamment :
              </p>
              <ul>
                <li>Les frais d'inscription et de dossier</li>
                <li>
                  Les cours de code de la route (en salle et/ou en ligne)
                </li>
                <li>Les leçons de conduite (unité : 1 heure)</li>
                <li>Les heures sur simulateur de conduite</li>
                <li>Les frais de présentation aux examens (code et conduite)</li>
                <li>Les stages code intensifs</li>
                <li>
                  Les prestations complémentaires (conduite accompagnée,
                  supervisée, rendez-vous pédagogiques)
                </li>
              </ul>
              <p>
                Les tarifs sont susceptibles d'évoluer. Toute modification
                tarifaire ne s'applique pas aux contrats déjà signés.
              </p>

              <h2>5. Modalités de paiement</h2>
              <p>Le règlement des prestations peut s'effectuer par :</p>
              <ul>
                <li>Carte bancaire</li>
                <li>Espèces</li>
                <li>Chèque (à l'ordre de SARL Permis de Réussir)</li>
                <li>Virement bancaire</li>
              </ul>
              <p>
                Un paiement en plusieurs fois (jusqu'à 4 fois sans frais) peut
                être accordé sur demande. Les modalités de l'échéancier sont
                définies dans le contrat de formation. Tout retard de paiement
                entraîne la suspension des prestations jusqu'à régularisation.
              </p>

              <h2>6. Droit de rétractation</h2>
              <p>
                Conformément aux articles L.221-18 et suivants du Code de la
                consommation, l'élève dispose d'un délai de{" "}
                <strong>14 jours calendaires</strong> à compter de la signature
                du contrat pour exercer son droit de rétractation, sans avoir à
                justifier de motifs ni à payer de pénalités.
              </p>
              <p>
                Pour exercer ce droit, l'élève doit adresser sa demande par
                courrier recommandé avec accusé de réception ou par email à
                l'adresse{" "}
                <a href="mailto:saintlouis@ecdubard.com">
                  saintlouis@ecdubard.com
                </a>
                . Le remboursement des sommes versées est effectué dans un délai
                maximum de 14 jours suivant la réception de la demande,
                déduction faite des prestations déjà réalisées.
              </p>
              <p>
                Si l'élève a expressément demandé le début de la formation
                pendant le délai de rétractation, les prestations effectuées
                seront facturées au prorata.
              </p>

              <h2>7. Annulation et report des leçons de conduite</h2>
              <p>
                Toute leçon de conduite peut être annulée ou reportée sans frais
                si l'élève prévient au moins{" "}
                <strong>48 heures à l'avance</strong> (hors dimanches et jours
                fériés).
              </p>
              <p>
                En cas d'annulation tardive (moins de 48 heures) ou d'absence
                sans prévenir, la leçon est considérée comme due et sera
                facturée à l'élève.
              </p>
              <p>
                L'auto-école se réserve le droit d'annuler ou de reporter une
                leçon en cas de force majeure (conditions météorologiques
                dangereuses, indisponibilité du véhicule, etc.). Dans ce cas, la
                leçon est reprogrammée sans frais supplémentaires.
              </p>

              <h2>8. Résiliation du contrat</h2>
              <p>
                Passé le délai de rétractation de 14 jours, l'élève peut
                résilier son contrat à tout moment par courrier recommandé avec
                accusé de réception. Dans ce cas :
              </p>
              <ul>
                <li>
                  Les prestations déjà réalisées sont facturées au tarif
                  unitaire en vigueur
                </li>
                <li>
                  Les sommes restantes, après déduction des prestations
                  effectuées, sont remboursées dans un délai de 30 jours
                </li>
              </ul>
              <p>
                L'auto-école peut résilier le contrat en cas de non-respect du
                règlement intérieur, de comportement dangereux ou de non-paiement
                persistant, après mise en demeure restée sans effet pendant 15
                jours.
              </p>

              <h2>9. Obligations de l'auto-école</h2>
              <p>L'Auto-école Dubard s'engage à :</p>
              <ul>
                <li>
                  Fournir un enseignement conforme au programme réglementaire
                  (REMC)
                </li>
                <li>
                  Mettre à disposition des enseignants titulaires de
                  l'autorisation d'enseigner en cours de validité
                </li>
                <li>
                  Mettre à disposition des véhicules conformes et en bon état
                </li>
                <li>
                  Présenter l'élève aux examens dans les délais raisonnables
                </li>
                <li>
                  Remettre à l'élève un livret d'apprentissage conforme à la
                  réglementation
                </li>
              </ul>

              <h2>10. Obligations de l'élève</h2>
              <p>L'élève s'engage à :</p>
              <ul>
                <li>
                  Se présenter à l'heure aux leçons et aux examens
                </li>
                <li>
                  Respecter le règlement intérieur de l'auto-école
                </li>
                <li>
                  Se munir de son livret d'apprentissage à chaque leçon
                </li>
                <li>
                  Fournir des documents d'identité en cours de validité
                </li>
                <li>
                  Régler les sommes dues selon l'échéancier convenu
                </li>
                <li>
                  Se présenter en condition physique et psychologique compatible
                  avec l'apprentissage de la conduite (ni alcool, ni stupéfiants)
                </li>
              </ul>

              <h2>11. Examens</h2>
              <p>
                La présentation aux examens du code de la route et de la
                conduite est soumise à l'appréciation pédagogique de
                l'enseignant. L'auto-école ne peut garantir une date d'examen
                précise, les convocations dépendant des services de l'État.
              </p>
              <p>
                En cas d'échec, des leçons supplémentaires pourront être
                nécessaires et feront l'objet d'une facturation complémentaire
                au tarif unitaire en vigueur.
              </p>

              <h2>12. Garantie financière</h2>
              <p>
                Conformément à la réglementation en vigueur, l'Auto-école Dubard
                informe ses élèves de l'existence ou de l'absence d'une garantie
                financière. Les détails relatifs à cette garantie sont
                mentionnés dans le contrat de formation remis à chaque élève
                lors de l'inscription.
              </p>

              <h2>13. Protection des données personnelles</h2>
              <p>
                Les données personnelles collectées dans le cadre de la
                formation sont traitées conformément au Règlement Général sur la
                Protection des Données (RGPD). Pour plus de détails, consultez
                notre{" "}
                <a href="/mentions-legales">politique de confidentialité</a>.
              </p>

              <h2>14. Médiation et règlement des litiges</h2>
              <p>
                En cas de litige relatif à l'exécution du contrat, l'élève peut
                adresser une réclamation écrite à l'Auto-école Dubard par
                courrier ou par email à{" "}
                <a href="mailto:saintlouis@ecdubard.com">
                  saintlouis@ecdubard.com
                </a>
                .
              </p>
              <p>
                À défaut de résolution amiable dans un délai de 30 jours,
                l'élève peut recourir gratuitement au médiateur de la
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
              <p>
                Conformément à la réglementation européenne, l'élève peut
                également utiliser la plateforme de résolution des litiges en
                ligne.
              </p>

              <h2>15. Droit applicable</h2>
              <p>
                Les présentes Conditions Générales de Vente sont régies par le
                droit français. En cas de litige, et après tentative de
                médiation, les tribunaux compétents seront ceux du ressort du
                siège social de la SARL Permis de Réussir (Saint-Louis, La
                Réunion).
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
