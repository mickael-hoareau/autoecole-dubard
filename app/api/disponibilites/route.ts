// app/api/disponibilites/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

type WeekGrid = Record<string, string[]>;

type DispoPayload = {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  formation?: string;
  mode?: "identique" | "alternees";
  semaineA?: WeekGrid;
  semaineB?: WeekGrid;
  commentaire?: string;
  source?: string;
  timestamp?: string;
};

function clean(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const JOURS_ORDRE = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

function formatGridHtml(grid: WeekGrid): string {
  const rows: string[] = [];
  for (const jour of JOURS_ORDRE) {
    const slots = grid[jour];
    if (slots && slots.length > 0) {
      const jourCap = jour.charAt(0).toUpperCase() + jour.slice(1);
      rows.push(
        `<tr>
          <td style="padding:6px 12px;font-weight:600;border:1px solid #e5e7eb;">${escapeHtml(jourCap)}</td>
          <td style="padding:6px 12px;border:1px solid #e5e7eb;">${slots.map(escapeHtml).join(", ")}</td>
        </tr>`
      );
    }
  }
  if (rows.length === 0) {
    return "<p>Aucun creneau selectionne.</p>";
  }
  return `
    <table style="border-collapse:collapse;width:100%;margin:8px 0;">
      <thead>
        <tr style="background:#f3f4f6;">
          <th style="padding:6px 12px;text-align:left;border:1px solid #e5e7eb;">Jour</th>
          <th style="padding:6px 12px;text-align:left;border:1px solid #e5e7eb;">Creneaux disponibles</th>
        </tr>
      </thead>
      <tbody>${rows.join("")}</tbody>
    </table>
  `;
}

function buildEmailHtml(
  prenom: string,
  nom: string,
  telephone: string,
  email: string,
  formation: string,
  mode: string,
  semaineA: WeekGrid,
  semaineB: WeekGrid | null,
  commentaire: string,
  isForStudent: boolean
): string {
  const greeting = isForStudent
    ? `<p>Bonjour ${escapeHtml(prenom)},</p><p>Voici le recapitulatif de tes disponibilites envoyees a l'auto-ecole Dubard :</p>`
    : `<h2 style="margin:0 0 12px;">Nouvelles disponibilites recues</h2>`;

  const identityBlock = `
    <p style="margin:4px 0;"><strong>Nom :</strong> ${escapeHtml(prenom)} ${escapeHtml(nom)}</p>
    <p style="margin:4px 0;"><strong>Telephone :</strong> ${escapeHtml(telephone)}</p>
    <p style="margin:4px 0;"><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p style="margin:4px 0;"><strong>Formation :</strong> ${escapeHtml(formation || "Non precisee")}</p>
    <p style="margin:4px 0;"><strong>Mode :</strong> ${mode === "alternees" ? "Semaines alternees (A/B)" : "Identique chaque semaine"}</p>
  `;

  let gridBlock = "";
  if (mode === "alternees") {
    gridBlock = `
      <h3 style="margin:16px 0 4px;">Semaine A</h3>
      ${formatGridHtml(semaineA)}
      <h3 style="margin:16px 0 4px;">Semaine B</h3>
      ${formatGridHtml(semaineB || {})}
    `;
  } else {
    gridBlock = formatGridHtml(semaineA);
  }

  const commentBlock = commentaire
    ? `<p style="margin:14px 0 4px;"><strong>Commentaire :</strong></p><p style="margin:0;white-space:pre-wrap;">${escapeHtml(commentaire)}</p>`
    : "";

  const footer = isForStudent
    ? `<hr style="margin:18px 0;border:none;border-top:1px solid #e5e7eb;" />
       <p style="font-size:12px;color:#6b7280;">
         Ce recapitulatif sert de preuve de depot. Si tes disponibilites changent, tu peux renvoyer le formulaire a tout moment sur notre site.
       </p>
       <p style="font-size:12px;color:#6b7280;">
         Auto-ecole Dubard &mdash; 0262 26 11 57
       </p>`
    : `<hr style="margin:18px 0;border:none;border-top:1px solid #e5e7eb;" />
       <p style="font-size:12px;color:#6b7280;">Envoye depuis le site Auto-ecole Dubard.</p>`;

  return `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.5;max-width:600px;">
      ${greeting}
      ${identityBlock}
      ${gridBlock}
      ${commentBlock}
      ${footer}
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as DispoPayload;

    const prenom = clean(body.prenom);
    const nom = clean(body.nom);
    const email = clean(body.email);
    const telephone = clean(body.telephone);
    const formation = clean(body.formation);
    const mode = body.mode === "alternees" ? "alternees" : "identique";
    const semaineA: WeekGrid = body.semaineA || {};
    const semaineB: WeekGrid | null =
      mode === "alternees" ? body.semaineB || {} : null;
    const commentaire = clean(body.commentaire);

    // Validation
    if (!prenom || !nom || !telephone) {
      return NextResponse.json(
        { ok: false, error: "Prenom, nom et telephone sont obligatoires." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email valide obligatoire." },
        { status: 400 }
      );
    }

    // Verifier qu'il y a au moins un creneau
    const hasSlots = Object.values(semaineA).some(
      (arr) => Array.isArray(arr) && arr.length > 0
    );
    const hasSlotsB =
      semaineB &&
      Object.values(semaineB).some(
        (arr) => Array.isArray(arr) && arr.length > 0
      );
    if (!hasSlots && !hasSlotsB) {
      return NextResponse.json(
        { ok: false, error: "Aucun creneau selectionne." },
        { status: 400 }
      );
    }

    // Env vars
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_DISPONIBILITES_URL;

    if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
      console.error("Env vars Resend manquantes pour /api/disponibilites");
      return NextResponse.json(
        { ok: false, error: "Configuration email manquante." },
        { status: 500 }
      );
    }

    // 1) Emails via Resend
    const resend = new Resend(RESEND_API_KEY);

    // Email a l'auto-ecole
    const schoolHtml = buildEmailHtml(
      prenom,
      nom,
      telephone,
      email,
      formation,
      mode,
      semaineA,
      semaineB,
      commentaire,
      false
    );

    await resend.emails.send({
      from: `Auto-ecole Dubard <${CONTACT_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
      subject: `Disponibilites - ${prenom} ${nom} (${telephone})`,
      html: schoolHtml,
      replyTo: email,
    });

    // Email a l'eleve (copie/accusé de reception)
    const studentHtml = buildEmailHtml(
      prenom,
      nom,
      telephone,
      email,
      formation,
      mode,
      semaineA,
      semaineB,
      commentaire,
      true
    );

    await resend.emails.send({
      from: `Auto-ecole Dubard <${CONTACT_FROM_EMAIL}>`,
      to: [email],
      subject: `Recapitulatif de tes disponibilites - Auto-ecole Dubard`,
      html: studentHtml,
    });

    // 2) Webhook Make (Google Sheets)
    if (MAKE_WEBHOOK_URL) {
      const makePayload = {
        prenom,
        nom,
        email,
        telephone,
        formation: formation || "",
        mode,
        semaineA,
        ...(semaineB ? { semaineB } : {}),
        commentaire: commentaire || "",
        source: "site",
        timestamp: new Date().toISOString(),
      };

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      try {
        const makeRes = await fetch(MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(makePayload),
          signal: controller.signal,
        });

        if (!makeRes.ok) {
          const text = await makeRes.text().catch(() => "");
          console.error("Make non-OK:", makeRes.status, text);
        }
      } catch (err) {
        console.error("Make fetch error:", err);
      } finally {
        clearTimeout(timeout);
      }
    } else {
      console.warn(
        "MAKE_WEBHOOK_DISPONIBILITES_URL non configuree, webhook ignore."
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API /api/disponibilites :", error);
    return NextResponse.json(
      { ok: false, error: "Erreur interne serveur." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Cette route accepte uniquement POST." },
    { status: 405 }
  );
}
