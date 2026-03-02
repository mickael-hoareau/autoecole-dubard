// app/formations/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos formations – Auto-école Dubard",
  description:
    "Programmes détaillés de nos formations : code de la route, permis B boîte manuelle et automatique, conduite accompagnée (AAC) et supervisée. Éligible CPF.",
};

/* ─── Bloc réutilisable : les 3 référents ─── */
function ReferentBlock() {
  return (
    <div className="formation__referents">
      <div className="formation__referent">
        <span className="formation__referent-role">Référent pédagogique</span>
        <span>Mickael HOAREAU</span>
      </div>
      <div className="formation__referent">
        <span className="formation__referent-role">Référent qualité</span>
        <span>Mickael HOAREAU</span>
      </div>
      <div className="formation__referent">
        <span className="formation__referent-role">Référent handicap</span>
        <span>Mickael HOAREAU</span>
      </div>
      <div className="formation__referent">
        <span className="formation__referent-role">Contact</span>
        <span>
          0262 26 11 57 –{" "}
          <a href="mailto:saintlouis@ecdubard.com">saintlouis@ecdubard.com</a>
        </span>
      </div>
    </div>
  );
}

/* ─── Bloc accessibilité ─── */
function AccessibiliteBlock() {
  return (
    <div className="formation__item">
      <h4>Accessibilité aux personnes en situation de handicap</h4>
      <p>
        Nos locaux sont accessibles aux personnes à mobilité réduite. Pour toute
        situation de handicap (moteur, sensoriel, cognitif, psychique…),
        contactez notre référent handicap Mickael HOAREAU au 0262 26 11 57 ou
        par email à{" "}
        <a href="mailto:saintlouis@ecdubard.com">saintlouis@ecdubard.com</a>{" "}
        afin d'étudier ensemble les adaptations possibles.
      </p>
      <p>
        Nous travaillons en partenariat avec les acteurs du handicap (MDPH,
        AGEFIPH, Cap Emploi) pour faciliter l'accès à nos formations.
      </p>
    </div>
  );
}

export default function Formations() {
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
        <section
          className="section section--light"
          style={{ paddingBottom: "2rem" }}
        >
          <div className="container">
            <div className="section__heading fade-in">
              <div className="section__eyebrow">Programmes détaillés</div>
              <h1 className="section__title">Nos formations</h1>
              <p className="section__subtitle">
                Retrouvez ci-dessous le programme complet de chacune de nos
                formations, conformément au référentiel Qualiopi.
              </p>
            </div>

            {/* Sommaire */}
            <nav className="formation__nav fade-in">
              <a href="#evaluation" className="formation__nav-link">
                Procédé d'évaluation
              </a>
              <a href="#code" className="formation__nav-link">
                Code de la route
              </a>
              <a href="#permis-b-bvm" className="formation__nav-link">
                Permis B – Boîte manuelle
              </a>
              <a href="#permis-b-bea" className="formation__nav-link">
                Permis B – Boîte automatique
              </a>
              <a href="#aac" className="formation__nav-link">
                Conduite accompagnée (AAC)
              </a>
              <a href="#supervisee" className="formation__nav-link">
                Conduite supervisée
              </a>
            </nav>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROCÉDÉ D'ÉVALUATION (Qualiopi ind. 11)
            ═══════════════════════════════════════ */}
        <section className="section section--white" id="evaluation">
          <div className="container">
            <div className="section__heading fade-in">
              <p className="section__eyebrow">Qualité</p>
              <h2 className="section__title">Notre procédé d'évaluation</h2>
              <p className="section__subtitle">
                Tout au long de votre parcours, nous évaluons votre progression
                à travers un dispositif structuré en trois étapes clés, conforme
                aux exigences du référentiel Qualiopi.
              </p>
            </div>

            <div className="evaluation fade-in">
              <div className="evaluation__step">
                <div className="evaluation__number">1</div>
                <div className="evaluation__content">
                  <h3>Évaluation de départ</h3>
                  <p>
                    Avant toute formation pratique, une <strong>évaluation initiale</strong> est
                    réalisée. Elle permet de mesurer vos connaissances, vos aptitudes
                    et votre expérience afin de définir un volume prévisionnel
                    d'heures et un parcours de formation personnalisé.
                  </p>
                  <ul>
                    <li>Bilan de compétences conduite (environ 1h)</li>
                    <li>Évaluation des connaissances du code de la route</li>
                    <li>Définition du volume d'heures prévisionnel</li>
                    <li>Remise d'un contrat de formation avec le programme personnalisé</li>
                  </ul>
                </div>
              </div>

              <div className="evaluation__step">
                <div className="evaluation__number">2</div>
                <div className="evaluation__content">
                  <h3>Évaluation en cours de formation</h3>
                  <p>
                    Tout au long de la formation, votre progression est suivie
                    de manière <strong>continue et individualisée</strong> :
                  </p>
                  <ul>
                    <li>
                      <strong>Code de la route :</strong> tests réguliers en salle
                      (séries de 40 questions), examens blancs en conditions
                      d'examen, suivi statistique par thème via Prépacode
                    </li>
                    <li>
                      <strong>Conduite :</strong> livret d'apprentissage numérique
                      avec validation progressive des 4 compétences du REMC
                      (Référentiel pour l'Éducation à une Mobilité Citoyenne)
                    </li>
                    <li>
                      <strong>Bilan pédagogique</strong> à l'issue de chaque leçon :
                      l'enseignant note les acquis, les points à améliorer et les
                      objectifs de la prochaine séance
                    </li>
                    <li>
                      <strong>Rendez-vous pédagogiques</strong> (AAC et supervisée) :
                      bilan intermédiaire avec l'élève et l'accompagnateur
                    </li>
                  </ul>
                </div>
              </div>

              <div className="evaluation__step">
                <div className="evaluation__number">3</div>
                <div className="evaluation__content">
                  <h3>Évaluation finale et présentation à l'examen</h3>
                  <p>
                    La présentation à l'examen est une <strong>décision
                    pédagogique</strong> prise par l'enseignant lorsque toutes les
                    compétences sont validées :
                  </p>
                  <ul>
                    <li>
                      <strong>ETG (code) :</strong> présentation lorsque les
                      résultats aux examens blancs sont régulièrement supérieurs
                      à 35/40
                    </li>
                    <li>
                      <strong>Épreuve pratique :</strong> présentation après
                      validation des 4 compétences du REMC et réussite aux examens
                      blancs de conduite
                    </li>
                    <li>
                      <strong>Examens blancs :</strong> séances de 4h en conditions
                      réelles d'examen (parcours, manœuvres, vérifications)
                    </li>
                    <li>
                      En cas d'échec, un bilan est réalisé pour identifier les
                      axes de travail et adapter le programme de remise à niveau
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="evaluation__footer fade-in">
              <p>
                <strong>Enquête de satisfaction :</strong> à l'issue de chaque
                formation, un questionnaire de satisfaction est remis à l'élève.
                Les résultats sont analysés pour améliorer continuellement nos
                prestations.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FORMATION 1 : CODE DE LA ROUTE
            ═══════════════════════════════════════ */}
        <section className="section section--white" id="code">
          <div className="container">
            <div className="formation fade-in">
              <div className="formation__header">
                <div className="formation__tag">Formation théorique</div>
                <h2 className="formation__title">
                  Code de la route – Stage intensif « Code Challenge »
                </h2>
              </div>

              <div className="formation__grid">
                <div className="formation__item">
                  <h4>Prérequis</h4>
                  <ul>
                    <li>Avoir 15 ans révolus minimum</li>
                    <li>Pièce d'identité en cours de validité</li>
                    <li>Justificatif de domicile de moins de 6 mois</li>
                    <li>
                      ASSR 2 (Attestation Scolaire de Sécurité Routière) ou ASR
                      pour les personnes nées après le 1er janvier 1988
                    </li>
                    <li>Photo d'identité numérique e-photo</li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Objectifs de la formation</h4>
                  <ul>
                    <li>
                      Acquérir les connaissances théoriques nécessaires à la
                      sécurité routière
                    </li>
                    <li>
                      Maîtriser les règles du code de la route et de la
                      signalisation
                    </li>
                    <li>
                      Développer une attitude responsable et citoyenne sur la
                      route
                    </li>
                    <li>
                      Réussir l'Examen Théorique Général (ETG)
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Durée</h4>
                  <p>
                    <strong>33 heures</strong> de formation théorique, réparties
                    sur <strong>2 semaines</strong> de stage intensif.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Modalités et délais d'accès</h4>
                  <p>
                    Inscription en agence ou par téléphone au 0262 26 11 57.
                    L'accès à la formation est conditionné à la constitution du
                    dossier complet et au versement du premier règlement.
                  </p>
                  <p>
                    <strong>Délai d'accès :</strong> variable selon les sessions
                    programmées et les places disponibles. Prochaines sessions
                    communiquées sur demande.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Tarifs</h4>
                  <p>
                    <strong>Forfait Code : 345 € TTC</strong>
                  </p>
                  <p>
                    Comprend : inscription, livre de code, formation théorique
                    (33h), Prépacode (accès en ligne), tests de code,
                    accompagnement ETG, redevance État (30 €).
                  </p>
                  <p>
                    <a href="/tarifs">Voir tous les tarifs détaillés →</a>
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Contacts et référents</h4>
                  <ReferentBlock />
                </div>

                <div className="formation__item">
                  <h4>Méthodes mobilisées</h4>
                  <ul>
                    <li>
                      Cours théoriques en salle animés par un enseignant
                      diplômé (BEPECASER ou Titre Pro ECSR)
                    </li>
                    <li>
                      Plateforme d'entraînement en ligne Prépacode (accès
                      illimité pendant la formation)
                    </li>
                    <li>
                      Supports pédagogiques : livre de code, séries de tests,
                      vidéos, fiches thématiques
                    </li>
                    <li>
                      Examens blancs en conditions réelles
                    </li>
                    <li>
                      Suivi individualisé et correction des erreurs
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Modalités d'évaluation</h4>
                  <ul>
                    <li>
                      Tests de code réguliers en salle et en ligne (séries de
                      40 questions)
                    </li>
                    <li>
                      Examens blancs en conditions d'examen
                    </li>
                    <li>
                      Évaluation continue par l'enseignant
                    </li>
                    <li>
                      Présentation à l'Examen Théorique Général (ETG) sur
                      décision pédagogique de l'enseignant
                    </li>
                    <li>
                      <strong>Certification visée :</strong> Examen Théorique
                      Général (ETG), validité 5 ans
                    </li>
                  </ul>
                </div>

                <AccessibiliteBlock />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FORMATION 2 : PERMIS B – BOÎTE MANUELLE
            ═══════════════════════════════════════ */}
        <section className="section section--light" id="permis-b-bvm">
          <div className="container">
            <div className="formation fade-in">
              <div className="formation__header">
                <div className="formation__tag">Formation pratique</div>
                <h2 className="formation__title">
                  Permis B – Boîte manuelle (BVM)
                </h2>
              </div>

              <div className="formation__grid">
                <div className="formation__item">
                  <h4>Prérequis</h4>
                  <ul>
                    <li>Avoir 17 ans révolus minimum</li>
                    <li>
                      Être titulaire de l'ETG (code) en cours de validité
                    </li>
                    <li>Pièce d'identité en cours de validité</li>
                    <li>
                      ASSR 2 ou ASR pour les personnes nées après le 1er
                      janvier 1988
                    </li>
                    <li>
                      Certificat de participation à la JDC (Journée Défense et
                      Citoyenneté) ou attestation d'exemption
                    </li>
                    <li>
                      Photo d'identité numérique e-photo
                    </li>
                    <li>Justificatif de domicile de moins de 6 mois</li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Objectifs de la formation</h4>
                  <p>
                    Conformément au Référentiel pour l'Éducation à une Mobilité
                    Citoyenne (REMC), la formation vise à acquérir les 4
                    compétences globales :
                  </p>
                  <ul>
                    <li>
                      <strong>Compétence 1 :</strong> Maîtriser le maniement du
                      véhicule dans un trafic faible ou nul
                    </li>
                    <li>
                      <strong>Compétence 2 :</strong> Appréhender la route et
                      circuler dans des conditions normales
                    </li>
                    <li>
                      <strong>Compétence 3 :</strong> Circuler dans des
                      conditions difficiles et partager la route avec les autres
                      usagers
                    </li>
                    <li>
                      <strong>Compétence 4 :</strong> Pratiquer une conduite
                      autonome, sûre et économique
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Durée</h4>
                  <p>
                    <strong>20 heures minimum</strong> de conduite obligatoires
                    (dont 15h minimum sur voies ouvertes à la circulation).
                  </p>
                  <p>
                    Forfait 25h disponible pour une formation plus approfondie.
                    Des heures supplémentaires sont possibles au tarif unitaire
                    (45 €/h).
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Modalités et délais d'accès</h4>
                  <p>
                    Inscription en agence. La formation débute par une
                    évaluation de départ qui permet de définir un volume
                    prévisionnel d'heures de conduite.
                  </p>
                  <p>
                    <strong>Délai d'accès :</strong> variable selon les
                    disponibilités et le planning. Les leçons de conduite sont
                    programmées en fonction de l'emploi du temps de l'élève et
                    des enseignants.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Tarifs</h4>
                  <p>
                    <strong>Forfait Pratique BVM 20h : à partir de 1 150 € TTC</strong>
                  </p>
                  <p>
                    <strong>Forfait Pratique BVM 25h : à partir de 1 375 € TTC</strong>
                  </p>
                  <p>
                    <strong>
                      Forfait complet Code + Conduite 20h : 1 495 € TTC
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Forfait complet Code + Conduite 25h : 1 720 € TTC
                    </strong>
                  </p>
                  <p>
                    Heure supplémentaire : 45 € TTC.{" "}
                    <a href="/tarifs">Voir tous les tarifs détaillés →</a>
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Contacts et référents</h4>
                  <ReferentBlock />
                </div>

                <div className="formation__item">
                  <h4>Méthodes mobilisées</h4>
                  <ul>
                    <li>
                      Évaluation de départ pour définir le volume
                      prévisionnel de formation
                    </li>
                    <li>
                      Leçons de conduite individuelles (1h) avec un enseignant
                      diplômé
                    </li>
                    <li>
                      Jusqu'à 6h de simulateur de conduite pour l'acquisition
                      des bases techniques (compétence 1)
                    </li>
                    <li>
                      Programme structuré en 4 étapes progressives selon le REMC
                    </li>
                    <li>
                      Livret d'apprentissage numérique pour le suivi de
                      progression
                    </li>
                    <li>
                      Séance de vérifications intérieures/extérieures et
                      premiers secours (2h)
                    </li>
                    <li>Examens blancs en conditions réelles (4h)</li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Modalités d'évaluation</h4>
                  <ul>
                    <li>
                      Évaluation de départ (bilan de compétences initial)
                    </li>
                    <li>
                      Évaluation continue tout au long de la formation via le
                      livret d'apprentissage
                    </li>
                    <li>
                      Validation progressive des 4 compétences du REMC
                    </li>
                    <li>
                      Examens blancs en conditions d'examen
                    </li>
                    <li>
                      Présentation à l'épreuve pratique du permis de conduire
                      sur décision pédagogique de l'enseignant
                    </li>
                    <li>
                      <strong>Certification visée :</strong> Permis de conduire
                      catégorie B (RNCP)
                    </li>
                  </ul>
                </div>

                <AccessibiliteBlock />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FORMATION 3 : PERMIS B – BOÎTE AUTOMATIQUE
            ═══════════════════════════════════════ */}
        <section className="section section--white" id="permis-b-bea">
          <div className="container">
            <div className="formation fade-in">
              <div className="formation__header">
                <div className="formation__tag">Formation pratique</div>
                <h2 className="formation__title">
                  Permis B – Boîte automatique (BEA)
                </h2>
              </div>

              <div className="formation__grid">
                <div className="formation__item">
                  <h4>Prérequis</h4>
                  <ul>
                    <li>Avoir 17 ans révolus minimum</li>
                    <li>
                      Être titulaire de l'ETG (code) en cours de validité
                    </li>
                    <li>Pièce d'identité en cours de validité</li>
                    <li>
                      ASSR 2 ou ASR pour les personnes nées après le 1er
                      janvier 1988
                    </li>
                    <li>
                      Certificat de participation à la JDC ou attestation
                      d'exemption
                    </li>
                    <li>
                      Photo d'identité numérique e-photo
                    </li>
                    <li>Justificatif de domicile de moins de 6 mois</li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Objectifs de la formation</h4>
                  <p>
                    Identiques au permis B BVM, conformément au REMC :
                    acquisition des 4 compétences globales de conduite. Le
                    permis obtenu porte la mention restrictive B78 (véhicules à
                    boîte automatique uniquement).
                  </p>
                  <p>
                    Après 3 mois de permis, une formation complémentaire de 7h
                    permet de lever la restriction et conduire un véhicule à
                    boîte manuelle.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Durée</h4>
                  <p>
                    <strong>13 heures minimum</strong> de conduite obligatoires
                    (dont 10h minimum sur voies ouvertes à la circulation).
                  </p>
                  <p>
                    Des heures supplémentaires sont possibles au tarif unitaire
                    (45 €/h).
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Modalités et délais d'accès</h4>
                  <p>
                    Inscription en agence. La formation débute par une
                    évaluation de départ.
                  </p>
                  <p>
                    <strong>Délai d'accès :</strong> variable selon les
                    disponibilités et le planning.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Tarifs</h4>
                  <p>
                    <strong>
                      Forfait Pratique BEA 13h : à partir de 840 € TTC
                    </strong>
                  </p>
                  <p>
                    Heure supplémentaire : 45 € TTC.{" "}
                    <a href="/tarifs">Voir tous les tarifs détaillés →</a>
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Contacts et référents</h4>
                  <ReferentBlock />
                </div>

                <div className="formation__item">
                  <h4>Méthodes mobilisées</h4>
                  <ul>
                    <li>Évaluation de départ</li>
                    <li>
                      Leçons de conduite individuelles (1h) sur véhicule à
                      boîte automatique
                    </li>
                    <li>
                      Programme structuré en 4 étapes progressives selon le REMC
                    </li>
                    <li>
                      Livret d'apprentissage numérique
                    </li>
                    <li>
                      Vérifications intérieures/extérieures et premiers secours
                      (2h)
                    </li>
                    <li>Examens blancs en conditions réelles (4h)</li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Modalités d'évaluation</h4>
                  <ul>
                    <li>Évaluation de départ</li>
                    <li>
                      Évaluation continue via le livret d'apprentissage
                    </li>
                    <li>
                      Validation progressive des 4 compétences du REMC
                    </li>
                    <li>Examens blancs</li>
                    <li>
                      Présentation à l'épreuve pratique sur décision
                      pédagogique
                    </li>
                    <li>
                      <strong>Certification visée :</strong> Permis de conduire
                      catégorie B mention B78
                    </li>
                  </ul>
                </div>

                <AccessibiliteBlock />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FORMATION 4 : CONDUITE ACCOMPAGNÉE (AAC)
            ═══════════════════════════════════════ */}
        <section className="section section--light" id="aac">
          <div className="container">
            <div className="formation fade-in">
              <div className="formation__header">
                <div className="formation__tag">Apprentissage anticipé</div>
                <h2 className="formation__title">
                  Conduite accompagnée (AAC) – Dès 15 ans
                </h2>
              </div>

              <div className="formation__grid">
                <div className="formation__item">
                  <h4>Prérequis</h4>
                  <ul>
                    <li>Avoir 15 ans révolus minimum</li>
                    <li>
                      Être titulaire de l'ETG (code) en cours de validité
                    </li>
                    <li>
                      Avoir effectué la formation initiale pratique en
                      auto-école (minimum 20h en BVM)
                    </li>
                    <li>
                      Disposer d'un accompagnateur titulaire du permis B depuis
                      au moins 5 ans (sans annulation ni suspension en cours)
                    </li>
                    <li>Accord de l'assureur du véhicule utilisé</li>
                    <li>
                      Mêmes pièces justificatives que pour le permis B
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Objectifs de la formation</h4>
                  <ul>
                    <li>
                      Acquérir une expérience de conduite significative avant
                      l'examen (minimum 3 000 km sur 1 an)
                    </li>
                    <li>
                      Développer des automatismes et une meilleure anticipation
                    </li>
                    <li>
                      Réduire le risque accidentel des jeunes conducteurs
                    </li>
                    <li>
                      Bénéficier d'une période probatoire réduite (2 ans au
                      lieu de 3)
                    </li>
                    <li>
                      Possibilité de passer l'examen pratique dès 17 ans
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Durée</h4>
                  <p>
                    <strong>Formation initiale :</strong> minimum 20h de conduite
                    en auto-école (BVM).
                  </p>
                  <p>
                    <strong>Phase de conduite accompagnée :</strong> minimum 1
                    an et 3 000 km avec l'accompagnateur, ponctuée de 2
                    rendez-vous pédagogiques obligatoires (3h chacun).
                  </p>
                  <p>
                    <strong>Rendez-vous préalable :</strong> 2h (avec
                    l'accompagnateur et l'enseignant).
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Modalités et délais d'accès</h4>
                  <p>
                    L'AAC s'ajoute à un forfait Pratique BVM. L'option AAC est
                    activée après validation de la formation initiale par
                    l'enseignant et le rendez-vous préalable avec
                    l'accompagnateur.
                  </p>
                  <p>
                    <strong>Délai d'accès :</strong> variable selon l'avancement
                    de la formation initiale.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Tarifs</h4>
                  <p>
                    <strong>Option AAC : 360 € TTC</strong> (à ajouter au
                    forfait Pratique BVM)
                  </p>
                  <p>
                    Comprend : rendez-vous préalable (2h) + 2 rendez-vous
                    pédagogiques obligatoires (3h chacun).
                  </p>
                  <p>
                    <a href="/tarifs">Voir tous les tarifs détaillés →</a>
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Contacts et référents</h4>
                  <ReferentBlock />
                </div>

                <div className="formation__item">
                  <h4>Méthodes mobilisées</h4>
                  <ul>
                    <li>
                      Formation initiale identique au permis B BVM (20h
                      minimum)
                    </li>
                    <li>
                      Rendez-vous préalable (2h) : conseils à l'accompagnateur,
                      ajustement des rétroviseurs, premier trajet ensemble
                    </li>
                    <li>
                      1er rendez-vous pédagogique (3h) : après environ 1 000
                      km, bilan avec l'élève et l'accompagnateur
                    </li>
                    <li>
                      2e rendez-vous pédagogique (3h) : après environ 3 000
                      km, préparation à l'examen
                    </li>
                    <li>
                      Livret d'apprentissage pour le suivi des kilomètres et
                      des compétences
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Modalités d'évaluation</h4>
                  <ul>
                    <li>
                      Évaluation de la formation initiale (identique au permis
                      B)
                    </li>
                    <li>
                      Suivi via le livret d'apprentissage pendant la phase
                      accompagnée
                    </li>
                    <li>
                      Bilans lors des 2 rendez-vous pédagogiques
                    </li>
                    <li>
                      Présentation à l'examen pratique dès 17 ans (sur décision
                      pédagogique)
                    </li>
                    <li>
                      <strong>Certification visée :</strong> Permis de conduire
                      catégorie B
                    </li>
                  </ul>
                </div>

                <AccessibiliteBlock />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FORMATION 5 : CONDUITE SUPERVISÉE
            ═══════════════════════════════════════ */}
        <section className="section section--white" id="supervisee">
          <div className="container">
            <div className="formation fade-in">
              <div className="formation__header">
                <div className="formation__tag">Complément de formation</div>
                <h2 className="formation__title">
                  Conduite supervisée – Dès 18 ans
                </h2>
              </div>

              <div className="formation__grid">
                <div className="formation__item">
                  <h4>Prérequis</h4>
                  <ul>
                    <li>Avoir 18 ans révolus minimum</li>
                    <li>
                      Être titulaire de l'ETG (code) en cours de validité
                    </li>
                    <li>
                      Avoir effectué la formation initiale pratique en
                      auto-école (minimum 20h en BVM)
                    </li>
                    <li>
                      Disposer d'un accompagnateur titulaire du permis B depuis
                      au moins 5 ans (sans annulation ni suspension en cours)
                    </li>
                    <li>Accord de l'assureur du véhicule utilisé</li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Objectifs de la formation</h4>
                  <ul>
                    <li>
                      Acquérir une expérience complémentaire de conduite avant
                      ou après un échec à l'examen
                    </li>
                    <li>
                      Gagner en confiance et en autonomie au volant
                    </li>
                    <li>
                      Maintenir un niveau de pratique régulier entre les leçons
                    </li>
                    <li>
                      Consolider les acquis de la formation initiale
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Durée</h4>
                  <p>
                    <strong>Pas de durée minimale</strong> ni de distance
                    obligatoire (contrairement à l'AAC). La conduite supervisée
                    peut durer de quelques semaines à plusieurs mois selon les
                    besoins de l'élève.
                  </p>
                  <p>
                    <strong>Rendez-vous préalable :</strong> 2h (obligatoire,
                    avec l'accompagnateur et l'enseignant).
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Modalités et délais d'accès</h4>
                  <p>
                    L'option s'ajoute à un forfait Pratique BVM. Elle est
                    activée après validation de la formation initiale par
                    l'enseignant et accord de l'accompagnateur.
                  </p>
                  <p>
                    <strong>Délai d'accès :</strong> variable selon l'avancement
                    de la formation initiale.
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Tarifs</h4>
                  <p>
                    <strong>Option Conduite supervisée : 90 € TTC</strong> (à
                    ajouter au forfait Pratique BVM)
                  </p>
                  <p>
                    Comprend le rendez-vous préalable de 2h.{" "}
                    <a href="/tarifs">Voir tous les tarifs détaillés →</a>
                  </p>
                </div>

                <div className="formation__item">
                  <h4>Contacts et référents</h4>
                  <ReferentBlock />
                </div>

                <div className="formation__item">
                  <h4>Méthodes mobilisées</h4>
                  <ul>
                    <li>
                      Formation initiale identique au permis B BVM (20h
                      minimum)
                    </li>
                    <li>
                      Rendez-vous préalable (2h) : conseils à l'accompagnateur,
                      consignes de sécurité
                    </li>
                    <li>
                      Conduite libre avec l'accompagnateur sur tous types de
                      routes
                    </li>
                    <li>
                      Livret d'apprentissage pour le suivi de la progression
                    </li>
                  </ul>
                </div>

                <div className="formation__item">
                  <h4>Modalités d'évaluation</h4>
                  <ul>
                    <li>
                      Évaluation de la formation initiale (identique au permis
                      B)
                    </li>
                    <li>
                      Suivi de la progression via le livret d'apprentissage
                    </li>
                    <li>
                      Bilan avec l'enseignant avant présentation à l'examen
                    </li>
                    <li>
                      Présentation à l'examen pratique sur décision pédagogique
                    </li>
                    <li>
                      <strong>Certification visée :</strong> Permis de conduire
                      catégorie B
                    </li>
                  </ul>
                </div>

                <AccessibiliteBlock />
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
                Agréments préfectoraux : E 21 974 0023 0 (Saint-Louis) – E 21 974 0024 0 (La Rivière) | NDA : 04 97 35306 97
              </div>
            </div>
            <div className="footer__links">
              <a href="/">Accueil</a>
              <a href="/formations">Formations</a>
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
