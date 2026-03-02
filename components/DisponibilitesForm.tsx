"use client";

import { FormEvent, useState, useCallback } from "react";

type Status = "idle" | "loading" | "success" | "error";
type WeekMode = "identique" | "alternees";
type Grid = Record<string, boolean[]>;

const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const CRENEAUX = [
  "07h-08h",
  "08h-09h",
  "09h-10h",
  "10h-11h",
  "11h-12h",
  "12h-13h",
  "13h-14h",
  "14h-15h",
  "15h-16h",
  "16h-17h",
  "17h-18h",
  "18h-19h",
];

const FORMATIONS = [
  { value: "code", label: "Stage code (Code Challenge)" },
  { value: "b-manuelle", label: "Permis B - Boite manuelle" },
  { value: "b-auto", label: "Permis B - Boite automatique" },
  { value: "aac", label: "Conduite accompagnee (AAC)" },
  { value: "supervisee", label: "Conduite supervisee" },
];

function createEmptyGrid(): Grid {
  const grid: Grid = {};
  for (const jour of JOURS) {
    grid[jour] = new Array(CRENEAUX.length).fill(false);
  }
  return grid;
}

function gridToPayload(grid: Grid): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const jour of JOURS) {
    const selected = grid[jour]
      .map((v, i) => (v ? CRENEAUX[i] : null))
      .filter((v): v is string => v !== null);
    if (selected.length > 0) {
      result[jour.toLowerCase()] = selected;
    }
  }
  return result;
}

function countSelected(grid: Grid): number {
  return Object.values(grid).reduce(
    (sum, arr) => sum + arr.filter(Boolean).length,
    0
  );
}

export function DisponibilitesForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [weekMode, setWeekMode] = useState<WeekMode>("identique");
  const [activeWeek, setActiveWeek] = useState<"A" | "B">("A");
  const [gridA, setGridA] = useState<Grid>(createEmptyGrid);
  const [gridB, setGridB] = useState<Grid>(createEmptyGrid);
  const [isDragging, setIsDragging] = useState(false);
  const [dragValue, setDragValue] = useState(true);

  const currentGrid = weekMode === "identique" || activeWeek === "A" ? gridA : gridB;
  const setCurrentGrid =
    weekMode === "identique" || activeWeek === "A" ? setGridA : setGridB;

  const toggleCell = useCallback(
    (jour: string, index: number) => {
      setCurrentGrid((prev) => {
        const next = { ...prev };
        next[jour] = [...prev[jour]];
        next[jour][index] = !next[jour][index];
        return next;
      });
    },
    [setCurrentGrid]
  );

  const handleCellDown = useCallback(
    (jour: string, index: number) => {
      setIsDragging(true);
      const newValue = !currentGrid[jour][index];
      setDragValue(newValue);
      setCurrentGrid((prev) => {
        const next = { ...prev };
        next[jour] = [...prev[jour]];
        next[jour][index] = newValue;
        return next;
      });
    },
    [currentGrid, setCurrentGrid]
  );

  const handleCellEnter = useCallback(
    (jour: string, index: number) => {
      if (!isDragging) return;
      setCurrentGrid((prev) => {
        if (prev[jour][index] === dragValue) return prev;
        const next = { ...prev };
        next[jour] = [...prev[jour]];
        next[jour][index] = dragValue;
        return next;
      });
    },
    [isDragging, dragValue, setCurrentGrid]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Boutons rapides
  const fillAll = () => {
    const grid: Grid = {};
    for (const jour of JOURS) {
      grid[jour] = new Array(CRENEAUX.length).fill(true);
    }
    setCurrentGrid(grid);
  };

  const clearAll = () => {
    setCurrentGrid(createEmptyGrid());
  };

  const fillMorning = () => {
    setCurrentGrid((prev) => {
      const next: Grid = {};
      for (const jour of JOURS) {
        next[jour] = prev[jour].map((v, i) => (i < 6 ? true : v));
      }
      return next;
    });
  };

  const fillAfternoon = () => {
    setCurrentGrid((prev) => {
      const next: Grid = {};
      for (const jour of JOURS) {
        next[jour] = prev[jour].map((v, i) => (i >= 6 ? true : v));
      }
      return next;
    });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const prenom = (fd.get("prenom") as string) || "";
    const nom = (fd.get("nom") as string) || "";
    const email = (fd.get("email") as string) || "";
    const telephone = (fd.get("telephone") as string) || "";
    const formation = (fd.get("formation") as string) || "";
    const commentaire = (fd.get("commentaire") as string) || "";

    // Validation front
    if (!prenom || !nom || !email || !telephone) return;

    const totalA = countSelected(gridA);
    const totalB = weekMode === "alternees" ? countSelected(gridB) : 0;
    if (totalA === 0 && (weekMode === "identique" || totalB === 0)) {
      alert("Veuillez selectionner au moins un creneau de disponibilite.");
      return;
    }

    const payload: Record<string, unknown> = {
      prenom,
      nom,
      email,
      telephone,
      formation,
      mode: weekMode,
      semaineA: gridToPayload(gridA),
      commentaire,
      source: "site",
      timestamp: new Date().toISOString(),
    };

    if (weekMode === "alternees") {
      payload.semaineB = gridToPayload(gridB);
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/disponibilites", {
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
      setGridA(createEmptyGrid());
      setGridB(createEmptyGrid());
      setWeekMode("identique");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const totalSelected =
    countSelected(gridA) +
    (weekMode === "alternees" ? countSelected(gridB) : 0);

  return (
    <form
      className="dispo fade-in"
      aria-label="Formulaire de disponibilites"
      onSubmit={handleSubmit}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Identification */}
      <div className="dispo__identity">
        <div className="dispo__field">
          <label htmlFor="dispo-prenom" className="form__label">
            Prenom *
          </label>
          <input
            type="text"
            id="dispo-prenom"
            name="prenom"
            className="form__input"
            placeholder="Ton prenom"
            required
          />
        </div>
        <div className="dispo__field">
          <label htmlFor="dispo-nom" className="form__label">
            Nom *
          </label>
          <input
            type="text"
            id="dispo-nom"
            name="nom"
            className="form__input"
            placeholder="Ton nom de famille"
            required
          />
        </div>
        <div className="dispo__field">
          <label htmlFor="dispo-email" className="form__label">
            Email *
          </label>
          <input
            type="email"
            id="dispo-email"
            name="email"
            className="form__input"
            placeholder="ton.email@exemple.com"
            required
          />
        </div>
        <div className="dispo__field">
          <label htmlFor="dispo-tel" className="form__label">
            Telephone *
          </label>
          <input
            type="tel"
            id="dispo-tel"
            name="telephone"
            className="form__input"
            placeholder="0692 00 00 00"
            required
          />
        </div>
        <div className="dispo__field">
          <label htmlFor="dispo-formation" className="form__label">
            Formation
          </label>
          <select
            id="dispo-formation"
            name="formation"
            className="form__select"
          >
            <option value="">Selectionne ta formation</option>
            {FORMATIONS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mode semaine */}
      <div className="dispo__mode">
        <p className="dispo__mode-label">Tes disponibilites sont :</p>
        <div className="dispo__mode-options">
          <button
            type="button"
            className={`dispo__mode-btn${weekMode === "identique" ? " dispo__mode-btn--active" : ""}`}
            onClick={() => setWeekMode("identique")}
          >
            Identiques chaque semaine
          </button>
          <button
            type="button"
            className={`dispo__mode-btn${weekMode === "alternees" ? " dispo__mode-btn--active" : ""}`}
            onClick={() => setWeekMode("alternees")}
          >
            Alternees (semaine A / B)
          </button>
        </div>
        <p className="dispo__mode-hint">
          {weekMode === "identique"
            ? "Coche les creneaux ou tu es disponible chaque semaine."
            : "Ex : lyceen avec devoir surveille un samedi sur deux. Remplis chaque semaine separement."}
        </p>
      </div>

      {/* Onglets semaine A/B */}
      {weekMode === "alternees" && (
        <div className="dispo__tabs">
          <button
            type="button"
            className={`dispo__tab${activeWeek === "A" ? " dispo__tab--active" : ""}`}
            onClick={() => setActiveWeek("A")}
          >
            Semaine A
            <span className="dispo__tab-count">
              {countSelected(gridA)} creneaux
            </span>
          </button>
          <button
            type="button"
            className={`dispo__tab${activeWeek === "B" ? " dispo__tab--active" : ""}`}
            onClick={() => setActiveWeek("B")}
          >
            Semaine B
            <span className="dispo__tab-count">
              {countSelected(gridB)} creneaux
            </span>
          </button>
        </div>
      )}

      {/* Boutons rapides */}
      <div className="dispo__actions">
        <button type="button" className="dispo__action" onClick={fillAll}>
          Tout cocher
        </button>
        <button type="button" className="dispo__action" onClick={clearAll}>
          Tout decocher
        </button>
        <button type="button" className="dispo__action" onClick={fillMorning}>
          Matinees (7h-13h)
        </button>
        <button
          type="button"
          className="dispo__action"
          onClick={fillAfternoon}
        >
          Apres-midi (13h-19h)
        </button>
      </div>

      {/* Grille */}
      <div className="dispo__grid-wrapper">
        <div className="dispo__grid" role="grid">
          {/* Header row */}
          <div className="dispo__grid-header" role="row">
            <div className="dispo__grid-corner" role="columnheader"></div>
            {JOURS.map((jour) => (
              <div key={jour} className="dispo__grid-day" role="columnheader">
                {jour.slice(0, 3)}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {CRENEAUX.map((creneau, rowIdx) => (
            <div key={creneau} className="dispo__grid-row" role="row">
              <div className="dispo__grid-time" role="rowheader">
                {creneau}
              </div>
              {JOURS.map((jour) => (
                <div
                  key={`${jour}-${rowIdx}`}
                  role="gridcell"
                  className={`dispo__cell${currentGrid[jour][rowIdx] ? " dispo__cell--active" : ""}`}
                  aria-label={`${jour} ${creneau}`}
                  aria-pressed={currentGrid[jour][rowIdx]}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleCellDown(jour, rowIdx);
                  }}
                  onMouseEnter={() => handleCellEnter(jour, rowIdx)}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    toggleCell(jour, rowIdx);
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legende */}
      <div className="dispo__legend">
        <div className="dispo__legend-item">
          <span className="dispo__legend-swatch dispo__legend-swatch--active" />
          Disponible
        </div>
        <div className="dispo__legend-item">
          <span className="dispo__legend-swatch" />
          Indisponible
        </div>
        <span className="dispo__legend-total">
          {totalSelected} creneau{totalSelected > 1 ? "x" : ""} selectionne
          {totalSelected > 1 ? "s" : ""}
        </span>
      </div>

      {/* Commentaire */}
      <div className="dispo__comment">
        <label htmlFor="dispo-commentaire" className="form__label">
          Commentaire (optionnel)
        </label>
        <textarea
          id="dispo-commentaire"
          name="commentaire"
          className="form__textarea"
          placeholder="Ex : indisponible les samedis pairs, en stage la 1ere semaine de juin..."
          rows={3}
        />
      </div>

      {/* Submit */}
      <div className="dispo__submit">
        <button
          type="submit"
          className="btn btn--primary"
          style={{ width: "100%" }}
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Envoi en cours..."
            : "Envoyer mes disponibilites"}
        </button>
      </div>

      {status === "success" && (
        <p className="dispo__msg dispo__msg--success">
          Merci ! Tes disponibilites ont bien ete envoyees. Tu recevras un
          recapitulatif par email.
        </p>
      )}

      {status === "error" && (
        <p className="dispo__msg dispo__msg--error">
          Une erreur est survenue. Tu peux reessayer ou nous appeler au 0262 26
          11 57.
        </p>
      )}

      <p className="dispo__privacy">
        En envoyant ce formulaire, tu acceptes que nous utilisions ces
        informations pour organiser ton planning de formation. Un recapitulatif
        te sera envoye par email.
      </p>
    </form>
  );
}
