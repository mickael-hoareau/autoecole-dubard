// app/page.tsx
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import {
  getCompanyRating,
  getCompanySurveys,
  getCompanyInfo,
  computeAverageRating,
  computeSurveyRating,
  formatDate,
} from "@/lib/opinionsystem";

export const revalidate = 86400; // ISR : rebuild toutes les 24h

function renderStars(rating: number) {
  const stars = [];
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  for (let i = 0; i < full; i++) {
    stars.push(
      <span key={`full-${i}`} className="avis__star">
        &#9733;
      </span>
    );
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="avis__star--half">
        &#9733;
      </span>
    );
  }
  for (let i = 0; i < empty; i++) {
    stars.push(
      <span key={`empty-${i}`} className="avis__star--empty">
        &#9733;
      </span>
    );
  }
  return stars;
}

export default async function HomePage() {
  // Fetch avis OpinionSystem côté serveur
  let rating = null;
  let surveys: Awaited<ReturnType<typeof getCompanySurveys>> = [];
  let companyInfo = null;

  try {
    [rating, surveys, companyInfo] = await Promise.all([
      getCompanyRating(),
      getCompanySurveys(6),
      getCompanyInfo(),
    ]);
  } catch (err) {
    console.error("Erreur fetch OpinionSystem:", err);
  }

  const averageRating = rating ? computeAverageRating(rating) : null;
  const totalReviews = rating ? rating.survey_total : 0;
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero section section--light" id="hero">
          <div className="container">
            <div className="hero__grid">
              <div className="hero__content fade-in">
                <div className="hero__eyebrow">
                  <span>Nouveau</span>
                  <p>Un parcours complet, du code à la conduite.</p>
                </div>
                <h1 className="hero__title">
                  Ton permis,{" "}
                  <span className="hero__highlight">structuré pour maximiser ta réussite.</span>
                </h1>
                <p className="hero__text">
                  Auto-école Dubard combine stage code structuré, heures sur
                  simulateur et programme pratique progressif pour te rendre
                  autonome, confiant(e) et prêt(e) pour l'examen.
                </p>
                <div className="hero__ctas">
                  <a href="#contact" className="btn btn--primary">
                    Réserver un appel découverte
                  </a>
                  <a href="#code" className="btn btn--ghost">
                    Découvrir le Code Challenge
                  </a>
                </div>
                <div className="hero__meta">
                  <div className="hero__meta-item">
                    <span>2 semaines</span>
                    Stage code intensif accompagné.
                  </div>
                  <div className="hero__meta-item">
                    <span>+ Simulateur</span>
                    Jusqu'à 6 h pour maîtriser les bases.
                  </div>
                  <div className="hero__meta-item">
                    <span>Programme structuré</span>
                    10 leçons pensées pour la progression.
                  </div>
                </div>
              </div>

              <div className="hero__visual fade-in fade-in--delayed">
                <div className="hero__card">
                  <div className="hero__badge">
                    <div className="hero__badge-dot" />
                    Session en cours
                  </div>
                  <p className="hero__card-title">Parcours Dubard</p>
                  <p className="hero__card-main">
                    2 semaines pour maîtriser le code, avec une méthode claire.
                    <br />
                    Une pratique guidée jusqu'à être réellement prêt.
                  </p>
                  <div className="hero__pill-row">
                    <div className="hero__pill">Code Challenge</div>
                    <div className="hero__pill">Boîte automatique</div>
                    <div className="hero__pill">Conduite accompagnée</div>
                  </div>
                  <div className="hero__progress">
                    <span>Progression moyenne des élèves</span>
                    <span>78&nbsp;%</span>
                  </div>
                  <div className="hero__progress-bar">
                    <div className="hero__progress-fill" />
                  </div>
                  <div className="hero__bottom-row">
                    <div>
                      <strong>Suivi pédagogique</strong>
                      <br />
                      Bilan après chaque leçon, en toute transparence.
                    </div>
                    <div className="hero__avatars">
                      <div className="hero__avatar" />
                      <div className="hero__avatar" />
                      <div className="hero__avatar" />
                    </div>
                  </div>
                  <div className="hero__chip">
                    + de 1&nbsp;000 conducteurs formés avec bienveillance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CODE CHALLENGE */}
        <section className="section section--white" id="code">
          <div className="container">
            <div className="section__heading fade-in">
              <p className="section__eyebrow">Code de la route</p>
              <h2 className="section__title">
                Le Code Challenge : 2 semaines pour poser des bases solides.
              </h2>
              <p className="section__subtitle">
                Un stage structuré, encadré, avec une progression jour après
                jour. Tu ne révises plus seul devant ton écran : tu es
                accompagné(e), corrigé(e) et guidé(e) à chaque étape.
              </p>
            </div>
            <div className="grid grid--2">
              <div className="card--soft fade-in">
                <div className="card__eyebrow">Stage encadré</div>
                <h3 className="card__title">
                  Un rythme calé sur ta réussite, pas sur le hasard.
                </h3>
                <p className="card__text">
                  Chaque demi-journée alterne rappels de cours, entraînements
                  ciblés, corrections et réponses à tes questions. L'objectif :
                  que tu comprennes, pas que tu apprennes par cœur.
                </p>
                <ul className="card__list">
                  <li>Planning sur 10 jours répartis en thèmes clairs.</li>
                  <li>
                    Explications en direct sur les pièges et subtilités.
                  </li>
                  <li>
                    Méthodes pour gérer le stress et la concentration le jour J.
                  </li>
                </ul>
                <p className="card__meta">
                  Prochaines sessions : <strong>02 au 13 mars</strong> et{" "}
                  <strong>04 au 15 mai 2026</strong> – nombre de places limité
                  par groupe.
                </p>
              </div>
              <div className="card fade-in fade-in--delayed">
                <div className="card__eyebrow">Apprentissage actif</div>
                <h3 className="card__title">
                  Des outils numériques pour travailler comme tu révises
                  vraiment.
                </h3>
                <p className="card__text">
                  Plateformes en ligne, séries d'examens, statistiques de
                  progression : tu vois exactement où tu en es et sur quels
                  thèmes te concentrer pour progresser de façon ciblée sur les
                  points clés du code.
                </p>
                <ul className="card__list">
                  <li>
                    Accès illimité à une plateforme d'entraînement pendant la
                    formation.
                  </li>
                  <li>
                    Suivi de tes résultats par thème (priorisation des points
                    faibles).
                  </li>
                  <li>
                    Conseils pour continuer à t'entraîner chez toi entre les
                    sessions.
                  </li>
                </ul>
                <a href="#contact" className="card__cta">
                  Demander les dates des prochaines sessions
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Horaires Code Challenge */}
            <div className="horaires fade-in" id="horaires">
              <h3 className="horaires__title">Horaires du stage Code Challenge</h3>
              <p className="horaires__subtitle">
                Stage intensif sur 2 semaines.
                Nombre de places limité par session pour un accompagnement de qualité.
              </p>
              <div className="horaires__grid">
                <div className="horaires__slot">
                  <div className="horaires__day">Lundi, mardi, mercredi et vendredi</div>
                  <div className="horaires__time">9h00 – 12h00</div>
                  <div className="horaires__desc">Cours théoriques en salle + entraînements</div>
                </div>
                <div className="horaires__slot">
                  <div className="horaires__day">Lundi, mardi, mercredi et vendredi</div>
                  <div className="horaires__time">13h00 – 15h00</div>
                  <div className="horaires__desc">Séries de tests + corrections + examens blancs</div>
                </div>
                <div className="horaires__slot horaires__slot--alt">
                  <div className="horaires__day">Jeudi</div>
                  <div className="horaires__time">Entraînement libre</div>
                  <div className="horaires__desc">Pas de cours, mais la salle reste accessible pour s'entraîner</div>
                </div>
              </div>
              <div className="horaires__sessions">
                <h4>Prochaines sessions</h4>
                <div className="horaires__session-list">
                  <div className="horaires__session">
                    <span className="horaires__session-date">02 – 13 mars 2026</span>
                    <span className="horaires__session-status horaires__session-status--encours">En cours</span>
                  </div>
                  <div className="horaires__session">
                    <span className="horaires__session-date">04 – 15 mai 2026</span>
                    <span className="horaires__session-status">Places disponibles</span>
                  </div>
                </div>
                <p className="horaires__note">
                  D'autres sessions sont programmées tout au long de l'année.
                  Contactez-nous pour connaître les prochaines dates.
                </p>
              </div>
            </div>
          </div>
        </section>



{/* PERMIS B – STRUCTURE */}
<section className="section section--light" id="permis-b">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Permis B</p>
      <h2 className="section__title">
        Un programme pratique structuré, pensé pour l'autonomie.
      </h2>
      <p className="section__subtitle">
        Plutôt que d'enchaîner des heures sans fil conducteur, nous avons découpé ta formation en étapes claires.
        Tu sais où tu en es, ce qui vient ensuite et ce qu'il te reste à consolider.
      </p>
    </div>
    <div className="grid grid--4 grid--2">
      <div className="card fade-in">
        <div className="card__eyebrow">Étape 1</div>
        <h3 className="card__title">Bases techniques et confort de conduite.</h3>
        <p className="card__text">
          Prise en main du véhicule, position, regard, trajectoires de base. Tu apprends à être à l'aise avec la voiture
          avant d'affronter des situations complexes.
        </p>
      </div>
      <div className="card fade-in fade-in--delayed">
        <div className="card__eyebrow">Étape 2</div>
        <h3 className="card__title">Circulation simple et premières analyses.</h3>
        <p className="card__text">
          Ronds-points simples, priorités, intersections : tu commences à lire la route et à anticiper les autres
          usagers, sans être débordé(e) par la technique.
        </p>
      </div>
      <div className="card fade-in">
        <div className="card__eyebrow">Étape 3</div>
        <h3 className="card__title">Trafic réel &amp; situations variées.</h3>
        <p className="card__text">
          Zones denses, dépassements, insertions, voies rapides. On multiplie les situations pour que tu ne découvres pas
          tout le jour de l'examen.
        </p>
      </div>
      <div className="card fade-in fade-in--delayed">
        <div className="card__eyebrow">Étape 4</div>
        <h3 className="card__title">Préparation fine à l'examen.</h3>
        <p className="card__text">
          Séances d'entraînement en condition réelle, gestion du stress, rappel des attentes de l'examinateur et des
          erreurs éliminatoires fréquentes.
        </p>
      </div>
    </div>
  </div>
</section>
{/* BOÎTE AUTOMATIQUE */}
<section className="section section--white" id="boite-auto">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Boîte automatique</p>
      <h2 className="section__title">
        Moins de mécanique, plus d'analyse. Le permis en boîte auto, tout simplement.
      </h2>
      <p className="section__subtitle">
        En choisissant la boîte automatique, tu élimines la gestion de l'embrayage et des vitesses. Tu peux te
        concentrer sur ce qui compte le plus : la route, les autres, tes décisions.
      </p>
    </div>
    <div className="grid grid--2">
      <div className="card--soft fade-in">
        <h3 className="card__title">Pourquoi choisir la boîte auto&nbsp;?</h3>
        <ul className="card__list">
          <li>Moins de stress au démarrage, dans les côtes ou en ville dense.</li>
          <li>Apprentissage plus rapide de l'observation et de l'anticipation.</li>
          <li>Permis obtenu sur boîte auto (B78), avec la possibilité d'extension.</li>
        </ul>
        <p className="card__meta">
          Après l'obtention du permis, une <strong>formation de 7 heures</strong> te permet de conduire aussi une
          boîte manuelle, sans repasser d'examen.
        </p>
      </div>
      <div className="card fade-in fade-in--delayed">
        <h3 className="card__title">Comment se déroule la passerelle 7h&nbsp;?</h3>
        <ul className="card__list">
          <li>Rappel des bases mécaniques (embrayage, point de patinage, démarrage en côte).</li>
          <li>Enchaînement de situations réelles pour automatiser tes gestes.</li>
          <li>Bilan final pour valider ensemble ton aisance en boîte manuelle.</li>
        </ul>
        <a href="#contact" className="card__cta">
          Parler avec un formateur de la boîte auto
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>
{/* SIMULATEUR DE CONDUITE */}
<section className="section section--light" id="simulateur">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Simulateur</p>
      <h2 className="section__title">Un simulateur pour te tromper ici, pas sur la route.</h2>
      <p className="section__subtitle">
        Le simulateur permet de travailler en toute sécurité les gestes techniques qui demandent 
        de la répétition : démarrages, freinages, trajectoires, gestion du regard. Tu peux te tromper, 
        recommencer, progresser… sans danger.
      </p>
    </div>

    <div className="grid grid--3">
      <div className="card fade-in">
        <div className="card__eyebrow">Bases techniques</div>
        <h3 className="card__title">Démarrage, freinage, coordination.</h3>
        <p className="card__text">
          Tu apprends à doser tes pédales, à garder une trajectoire stable, à coordonner tes yeux et tes mains dans un 
          environnement sans pression.
        </p>
      </div>

      <div className="card fade-in fade-in--delayed">
        <div className="card__eyebrow">Scénarios guidés</div>
        <h3 className="card__title">Intersections, ronds-points, surprises.</h3>
        <p className="card__text">
          Des exercices progressifs te mettent dans des situations que tu retrouveras plus tard sur route, avec un 
          formateur pour t'accompagner.
        </p>
      </div>

      <div className="card fade-in">
        <div className="card__eyebrow">Confiance</div>
        <h3 className="card__title">Monter en aisance avant la vraie voiture.</h3>
        <p className="card__text">
          En prenant de l'avance sur simulateur, tes premières heures sur route sont plus sereines. Tu arrives à la voiture 
          avec déjà des réflexes.
        </p>
      </div>
    </div>
  </div>
</section>
{/* CONDUITE ACCOMPAGNÉE / SUPERVISÉE */}
<section className="section section--white" id="accompagnee">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Expérience réelle</p>
      <h2 className="section__title">
        Conduite accompagnée ou supervisée : accumuler des kilomètres, sans brûler les étapes.
      </h2>
      <p className="section__subtitle">
        L'examen dure quelques dizaines de minutes. Ta vie de conducteur durera des années. La conduite accompagnée ou
        supervisée te permet de prendre le temps de pratiquer, analyser, corriger, avant le jour J.
      </p>
    </div>

    <div className="grid grid--2">
      <div className="card fade-in">
        <h3 className="card__title">Conduite accompagnée (AAC)</h3>
        <p className="card__text">
          Pour les plus jeunes, c'est le format idéal pour apprendre sur la durée, avec un adulte référent à tes côtés.
        </p>
        <ul className="card__list">
          <li>Phase de formation initiale avec l'auto-école.</li>
          <li>Conduite avec accompagnateur sur une longue période.</li>
          <li>Retour régulier avec nous pour ajuster et consolider.</li>
        </ul>
      </div>

      <div className="card fade-in fade-in--delayed">
        <h3 className="card__title">Conduite supervisée</h3>
        <p className="card__text">
          Après un premier parcours de formation, tu peux continuer à conduire avec un accompagnateur en attendant
          une date d'examen ou pour renforcer tes automatismes.
        </p>
        <ul className="card__list">
          <li>Idéal si tu manques de confiance ou de kilomètres.</li>
          <li>Tu restes dans un cadre encadré et sécurisé.</li>
          <li>Nous restons disponibles pour faire le point et ajuster.</li>
        </ul>
        <a href="#contact" className="card__cta">
          Discuter de la meilleure option pour toi
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>
{/* PÉDAGOGIE & TÉMOIGNAGES */}
<section className="section section--dark" id="pedagogie">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Notre pédagogie</p>
      <h2 className="section__title">Structure, bienveillance, suivi : les trois piliers Dubard.</h2>
      <p className="section__subtitle">
        Derrière chaque permis obtenu, il y a une méthode claire. Nous ne te promettons pas de "truc magique", mais un
        cadre sérieux, humain et exigeant pour progresser avec confiance jusqu'à l'examen.
      </p>
    </div>

    <div className="pillars">
      <div className="pillar fade-in">
        <p className="pillar__tag">Pilier 01</p>
        <h3 className="pillar__title">Une formation structurée.</h3>
        <p className="pillar__text">
          Du code à la conduite, chaque étape est pensée, planifiée et expliquée. Tu sais toujours où tu en es et ce que
          tu travailles. On ne laisse pas ta progression au hasard.
        </p>
      </div>

      <div className="pillar fade-in fade-in--delayed">
        <p className="pillar__tag">Pilier 02</p>
        <h3 className="pillar__title">Une bienveillance exigeante.</h3>
        <p className="pillar__text">
          On t'encourage, on t'écoute, on adapte notre pédagogie. Mais on te dit aussi ce qui doit progresser, avec des
          retours clairs, pour que tu grandisses à chaque leçon.
        </p>
      </div>

      <div className="pillar fade-in">
        <p className="pillar__tag">Pilier 03</p>
        <h3 className="pillar__title">Un suivi continu.</h3>
        <p className="pillar__text">
          Bilans réguliers, échanges avec les parents si besoin, visibilité sur le nombre d'heures et le niveau atteint :
          tout est transparent pour éviter les mauvaises surprises.
        </p>
      </div>
    </div>

    <div className="stats-row">
      <div className="stat-pill">
        <strong>+ de 1&nbsp;000</strong>
        élèves accompagnés vers le permis.
      </div>
      <div className="stat-pill">
        <strong>2 semaines</strong>
        pour structurer ton code avec le Code Challenge.
      </div>
      <div className="stat-pill">
        <strong>1 parcours</strong>
        pour ton autonomie, pas un simple "forfait".
      </div>
    </div>

    <div className="section__heading" style={{ marginTop: "3rem" }}>
      <p className="section__eyebrow">Avis vérifiés</p>
      <h3 className="section__title" style={{ fontSize: "1.5rem" }}>Ce que disent nos élèves</h3>
    </div>

    {averageRating !== null && totalReviews > 0 ? (
      <>
        <div className="avis__header fade-in">
          <div className="avis__score">
            <span className="avis__score-value">{averageRating}</span>
            <span className="avis__score-max">/5</span>
          </div>
          <div>
            <div className="avis__stars">
              {renderStars(averageRating)}
            </div>
            <p className="avis__count">{totalReviews} avis vérifiés</p>
          </div>
          {companyInfo?.certificate && (
            <a
              href={companyInfo.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="avis__link"
            >
              Voir l&apos;attestation OpinionSystem <span>↗</span>
            </a>
          )}
        </div>

        {surveys.length > 0 ? (
          <div className="avis__grid">
            {surveys.map((survey, i) => {
              const surveyNote = computeSurveyRating(survey);
              const authorName = survey.name || "Eleve";
              return (
                <div
                  key={survey.survey_id || i}
                  className={`avis__card fade-in${i % 2 === 1 ? " fade-in--delayed" : ""}`}
                >
                  <div className="avis__stars avis__stars--small">
                    {renderStars(surveyNote)}
                  </div>
                  {survey.comment && (
                    <p className="avis__card-text">{survey.comment}</p>
                  )}
                  <div className="avis__card-footer">
                    <div>
                      <span className="avis__card-author">{authorName}</span>
                      <div className="avis__badge">
                        <span className="avis__badge-icon">OS</span>
                        <span className="avis__badge-text">OpinionSystem</span>
                      </div>
                    </div>
                    {survey.answer && (
                      <span className="avis__card-date">
                        {formatDate(survey.answer)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="avis__empty">Aucun avis disponible pour le moment.</p>
        )}

        {companyInfo?.survey && (
          <div className="avis__footer fade-in">
            <a
              href={companyInfo.survey}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Tous les avis sur OpinionSystem
            </a>
          </div>
        )}
      </>
    ) : (
      <div className="testimonials">
        <div className="testimonial fade-in">
          &ldquo;Je pensais que le permis serait un parcours du combattant. Le fait d&apos;avoir un stage code, des heures sur
          simulateur et un programme clair m&apos;a vraiment rassurée. J&apos;ai compris ce que je travaillais à chaque leçon.&rdquo;
          <p className="testimonial__author">Élodie, 19 ans</p>
          <p className="testimonial__meta">Permis B – Boîte automatique</p>
        </div>
        <div className="testimonial fade-in fade-in--delayed">
          &ldquo;On savait où en était notre fils à chaque étape. Les bilans réguliers et l&apos;accompagnement en conduite supervisée
          nous ont permis d&apos;aborder l&apos;examen avec sérénité.&rdquo;
          <p className="testimonial__author">Parents de Lucas</p>
          <p className="testimonial__meta">Conduite accompagnée &amp; examen B</p>
        </div>
      </div>
    )}
  </div>
</section>

{/* CERTIFICATION QUALIOPI */}
<section className="section section--white" id="qualiopi">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Certification</p>
      <h2 className="section__title">Certifiée Qualiopi</h2>
      <p className="section__subtitle">
        La certification qualité a été délivrée à notre organisme au titre
        de la catégorie d'action suivante : <strong>actions de formation</strong>.
      </p>
    </div>

    <div className="qualiopi fade-in">
      <div className="qualiopi__badge">
        <div className="qualiopi__mark">
          <span className="qualiopi__mark-q">Q</span>
        </div>
        <div className="qualiopi__info">
          <h3 className="qualiopi__title">Certification Qualiopi</h3>
          <p className="qualiopi__subtitle">
            Référentiel National Qualité (RNQ) – Article L.6316-3 du Code du travail
          </p>
        </div>
      </div>

      <div className="qualiopi__details">
        <div className="qualiopi__detail">
          <span className="qualiopi__detail-label">Organisme certifié</span>
          <span className="qualiopi__detail-value">PERMIS DE REUSSIR (Auto-école Dubard)</span>
        </div>
        <div className="qualiopi__detail">
          <span className="qualiopi__detail-label">Catégorie d'action</span>
          <span className="qualiopi__detail-value">Actions de formation</span>
        </div>
        <div className="qualiopi__detail">
          <span className="qualiopi__detail-label">Organisme labellisateur</span>
          <span className="qualiopi__detail-value">Ministère de l'Intérieur</span>
        </div>
        <div className="qualiopi__detail">
          <span className="qualiopi__detail-label">Validité</span>
          <span className="qualiopi__detail-value">02 avril 2024 – 27 mars 2027</span>
        </div>
        <div className="qualiopi__detail">
          <span className="qualiopi__detail-label">NDA</span>
          <span className="qualiopi__detail-value">04 97 35306 97</span>
        </div>
      </div>

      <div className="qualiopi__actions">
        <a
          href="/documents/certificat-qualiopi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Télécharger le certificat (PDF)
        </a>
        <a href="/formations" className="btn btn--ghost">
          Voir nos formations
        </a>
      </div>

      <p className="qualiopi__note">
        Cette certification atteste du respect des exigences du Référentiel
        National Qualité (32 indicateurs) et permet l'éligibilité de nos
        formations au financement par fonds publics ou mutualisés (CPF, OPCO, Pôle emploi…).
      </p>
    </div>
  </div>
</section>

{/* NOS RÉSULTATS — Indicateurs Qualiopi */}
<section className="section section--light" id="resultats">
  <div className="container">
    <div className="section__heading fade-in">
      <p className="section__eyebrow">Transparence</p>
      <h2 className="section__title">Nos résultats</h2>
      <p className="section__subtitle">
        Indicateurs de performance publiés conformément au référentiel
        Qualiopi. Données mises à jour annuellement.
      </p>
    </div>

    <div className="resultats fade-in">
      <p className="resultats__period">
        Période de référence : mars 2025 – février 2026
      </p>

      <div className="resultats__grid">
        <div className="resultats__card">
          <div className="resultats__value">50 %</div>
          <div className="resultats__label">
            Taux de réussite conduite
            <span>1ère présentation</span>
          </div>
        </div>

        <div className="resultats__card">
          <div className="resultats__value">56 %</div>
          <div className="resultats__label">
            Taux de réussite conduite
            <span>2ème passage</span>
          </div>
        </div>

        <div className="resultats__card">
          <div className="resultats__value">31,5 h</div>
          <div className="resultats__label">
            Moyenne d'heures
            <span>1ère présentation</span>
          </div>
        </div>

        <div className="resultats__card">
          <div className="resultats__value">33,8 h</div>
          <div className="resultats__label">
            Moyenne d'heures
            <span>2ème présentation</span>
          </div>
        </div>

        <div className="resultats__card">
          <div className="resultats__value">373</div>
          <div className="resultats__label">
            Présentations à l'examen
            <span>Toutes catégories confondues</span>
          </div>
        </div>

        <div className="resultats__card">
          <div className="resultats__value">52,8 %</div>
          <div className="resultats__label">
            Taux de réussite global
            <span>Toutes agences confondues</span>
          </div>
        </div>
      </div>

      <p className="resultats__note">
        Données issues de notre logiciel de gestion (année mars 2025 –
        février 2026). Catégories : B, B (BEA), conduite accompagnée,
        conduite supervisée. Ces indicateurs sont actualisés chaque année.
      </p>
    </div>
  </div>
</section>

<ContactSection />


     </main>
     <footer className="footer">
  <div className="container">
    <div className="footer__inner">
      <div>
        <div>© {new Date().getFullYear()} Auto-école Dubard – Tous droits réservés.</div>
        <div className="footer__agrements">
          Agréments préfectoraux : E 21 974 0023 0 (Saint-Louis) – E 21 974 0024 0 (La Rivière) | NDA : 04 97 35306 97
        </div>
      </div>
      <div className="footer__links">
        <a href="#hero">Accueil</a>
        <a href="#code">Code</a>
        <a href="#permis-b">Permis B</a>
        <a href="#contact">Contact</a>
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
