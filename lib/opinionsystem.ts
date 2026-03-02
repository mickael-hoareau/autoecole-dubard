// lib/opinionsystem.ts
// Fonctions utilitaires pour l'API OpinionSystem v2
// Doc : https://api.opinionsystem.fr/v2

const API_BASE = "https://api.opinionsystem.fr/v2";

// ---------- Types (calques sur la reponse reelle de l'API) ----------

export type CompanyRating = {
  company_id: number;
  sector_id: number;
  survey_total: number;
  survey_good_total: number;
  survey_neutral_total: number;
  survey_bad_total: number;
  rating: number; // note globale sur 100
  question_1: number;
  question_2: number;
  question_3: number;
  question_4: number;
  question_5: number;
  question_6: number;
  roi?: { total: number; seen: number; help: number };
};

export type SurveyClient = {
  first_name?: string;
  last_name?: string;
  address?: string | null;
  city?: string;
  postal_code?: string;
  country?: string;
  email?: string;
};

export type Survey = {
  survey_id: number;
  collaborator_id: number;
  company_id: number;
  category_id: number;
  answer: string; // date ISO
  name: string; // ex: "Judicael P."
  language?: { code: string; locale: string };
  client: SurveyClient;
  invoice_detail?: string;
  invoice_period?: string;
  rating: number; // note globale sur 100
  smiley_good: number;
  smiley_neutral: number;
  smiley_bad: number;
  question_1: number;
  question_2: number;
  question_3: number;
  question_4: number;
  question_5: number;
  question_6: number;
  roi?: { seen: number; help: number };
  comment?: string;
  comment_response?: string | null;
  review_abuse_url?: string;
  single_survey_link?: string;
};

export type CompanyInfo = {
  company_id: number;
  brand_id?: number | null;
  sector_id?: number;
  siret?: string;
  name?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  country?: string;
  telephone?: string;
  fax?: string | null;
  email?: string;
  web_site?: string;
  certificate?: string;
  survey?: string;
  logo?: string;
  enrollment?: string;
};

// ---------- Helpers ----------

function getApiKey(): string {
  const key = process.env.OPINIONSYSTEM_API_KEY;
  if (!key) throw new Error("OPINIONSYSTEM_API_KEY manquante");
  return key;
}

function getCompanyId(): string {
  const id = process.env.OPINIONSYSTEM_COMPANY_ID;
  if (!id) throw new Error("OPINIONSYSTEM_COMPANY_ID manquante");
  return id;
}

async function apiFetch<T>(
  path: string,
  params: Record<string, string> = {}
): Promise<T | null> {
  const url = new URL(`${API_BASE}${path}`);
  url.searchParams.set("api_key", getApiKey());
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(url.toString(), {
      signal: controller.signal,
      next: { revalidate: 86400 }, // ISR 24h
    });

    if (!res.ok) {
      console.error(
        `OpinionSystem API error: ${res.status} ${res.statusText} for ${path}`
      );
      return null;
    }

    const data = await res.json();
    return data as T;
  } catch (err) {
    console.error(`OpinionSystem API fetch error for ${path}:`, err);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// ---------- Types de reponse API (wrappers) ----------

type RatingResponse = { company_rating: CompanyRating[] };
type SurveyResponse = { company_survey: Survey[] };
type CompanyResponse = { company: CompanyInfo[] };

// ---------- API publiques ----------

/**
 * Recupere la note moyenne et les stats d'avis de l'entreprise.
 */
export async function getCompanyRating(): Promise<CompanyRating | null> {
  const companyId = getCompanyId();
  const data = await apiFetch<RatingResponse>("/client/company/rating", {
    company_id: companyId,
  });
  if (data?.company_rating && data.company_rating.length > 0) {
    return data.company_rating[0];
  }
  return null;
}

/**
 * Recupere les derniers avis de l'entreprise.
 */
export async function getCompanySurveys(limit = 6): Promise<Survey[]> {
  const companyId = getCompanyId();
  const data = await apiFetch<SurveyResponse>("/client/company/survey", {
    company_id: companyId,
    limit: String(limit),
    offset: "0",
  });
  if (data?.company_survey && Array.isArray(data.company_survey)) {
    return data.company_survey;
  }
  return [];
}

/**
 * Recupere les infos de l'entreprise (utile pour le lien attestation).
 */
export async function getCompanyInfo(): Promise<CompanyInfo | null> {
  const companyId = getCompanyId();
  const data = await apiFetch<CompanyResponse>("/client/company", {
    company_id: companyId,
  });
  if (data?.company && data.company.length > 0) {
    return data.company[0];
  }
  return null;
}

// ---------- Utilitaires d'affichage ----------

/**
 * Convertit la note globale (sur 100) en note sur 5.
 */
export function ratingToFive(ratingOn100: number): number {
  return Math.round((ratingOn100 / 100) * 5 * 10) / 10;
}

/**
 * Calcule la note moyenne a partir du champ rating global (sur 100).
 * Retourne la note ramenee sur 5.
 */
export function computeAverageRating(rating: CompanyRating): number {
  return ratingToFive(rating.rating);
}

/**
 * Calcule la note d'un avis individuel (sur 5).
 */
export function computeSurveyRating(survey: Survey): number {
  return ratingToFive(survey.rating);
}

/**
 * Formate une date ISO en format lisible francais.
 */
export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}
