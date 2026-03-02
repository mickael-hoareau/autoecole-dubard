"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nom: formData.get("nom") || "",
      telephone: formData.get("telephone") || "",
      email: formData.get("email") || "",
      typePermis: formData.get("type-permis") || "",
      message: formData.get("message") || "",
    };

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="section section--light" id="contact">
      <div className="container">
        <div className="section__heading fade-in">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Parlons de ton projet permis.</h2>
          <p className="section__subtitle">
            Laisse-nous quelques informations, nous te rappelons pour t’orienter
            vers la bonne formule : boîte auto ou manuelle, conduite accompagnée
            ou supervisée, stage code… On fait le point ensemble avant toute
            décision.
          </p>
        </div>

        <div className="contact-grid">
          <form
            className="form fade-in"
            aria-label="Formulaire de contact"
            onSubmit={handleSubmit}
          >
            <div className="form__row">
              <label htmlFor="nom" className="form__label">
                Nom et prénom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="form__input"
                placeholder="Ton nom complet"
                required
              />
            </div>

            <div className="form__row">
              <label htmlFor="telephone" className="form__label">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="form__input"
                placeholder="Ton numéro de portable"
                required
              />
            </div>

            <div className="form__row">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                placeholder="Ton adresse email"
              />
            </div>

            <div className="form__row">
              <label htmlFor="type-permis" className="form__label">
                Type de permis souhaité
              </label>
              <select
                id="type-permis"
                name="type-permis"
                className="form__select"
              >
                <option value="">Sélectionne une option</option>
                <option value="b-auto">Permis B – Boîte automatique</option>
                <option value="b-manuelle">Permis B – Boîte manuelle</option>
                <option value="aac">Conduite accompagnée (AAC)</option>
                <option value="supervisee">Conduite supervisée</option>
                <option value="code">Stage code uniquement</option>
              </select>
            </div>

            <div className="form__row">
              <label htmlFor="message" className="form__label">
                Message ou questions
              </label>
              <textarea
                id="message"
                name="message"
                className="form__textarea"
                placeholder="Dis-nous où tu en es (jamais conduit, déjà des heures, code en cours…)"
              />
            </div>

            <div className="form__row">
              <button
                type="submit"
                className="btn btn--primary"
                style={{ width: "100%" }}
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Envoi en cours…"
                  : "Être rappelé(e) par l’équipe Dubard"}
              </button>
            </div>

            {status === "success" && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#16a34a",
                  marginTop: "0.35rem",
                }}
              >
                Merci ! Ta demande a bien été envoyée. Nous te recontactons
                rapidement.
              </p>
            )}

            {status === "error" && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#b91c1c",
                  marginTop: "0.35rem",
                }}
              >
                Une erreur est survenue. Tu peux réessayer ou nous appeler au
                0262 26 11 57.
              </p>
            )}

            <p style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "0.4rem" }}>
              En envoyant ce formulaire, tu acceptes que nous te recontactions
              par téléphone ou par email pour te présenter les différentes
              formules et répondre à tes questions.
            </p>
          </form>

          <div className="contact-info fade-in fade-in--delayed">
            <div className="contact-info__item">
              <p className="contact-info__label">Téléphone</p>
              <p>0262 26 11 57 (appel &amp; WhatsApp)</p>
            </div>

            <div className="contact-info__item">
              <p className="contact-info__label">Nos agences</p>
              <p>
                <strong>Saint-Louis</strong>
                <br />
                59 rue Saint-Louis
                <br />
                97450 Saint-Louis
              </p>
              <p style={{ marginTop: "0.6rem" }}>
                <strong>La Rivière</strong>
                <br />
                142 route de Cilaos
                <br />
                97421 La Rivière
              </p>
            </div>

            <div className="contact-info__item">
              <p className="contact-info__label">
                Horaires d’ouverture des agences
              </p>
              <p>
                <strong>Lundi au jeudi</strong> : 9h à 12h et 13h à 17h
                <br />
                <strong>Vendredi</strong> : 9h à 12h et 13h à 16h
                <br />
                <strong>Samedi</strong> (Saint-Louis uniquement) : 9h à 12h
              </p>
            </div>

            <div className="contact-info__item">
              <p className="contact-info__label">Horaires de conduite</p>
              <p>Du lundi au samedi, de 7h à 18h.</p>
            </div>

            <div className="contact-whatsapp">
              <span>💬</span>
              <div>
                Préfères-tu WhatsApp&nbsp;?
                <br />
                <a
                  href="https://wa.me/262262261157"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Écris-nous au 0262 26 11 57
                </a>{" "}
                pour une réponse rapide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
