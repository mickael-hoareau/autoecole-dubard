// app/api/contact/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  nom?: string;
  telephone?: string;
  email?: string;
  typePermis?: string;
  message?: string;
};

function clean(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

function isValidEmail(email: string) {
  if (!email) return true; // optionnel
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    const nom = clean(body.nom);
    const telephone = clean(body.telephone);
    const email = clean(body.email);
    const typePermis = clean(body.typePermis);
    const message = clean(body.message);

    // Validation minimale
    if (!nom || !telephone) {
      return NextResponse.json(
        { ok: false, error: "Nom et téléphone sont obligatoires." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 }
      );
    }

    // Env vars
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY manquante." },
        { status: 500 }
      );
    }
    if (!CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL manquantes." },
        { status: 500 }
      );
    }
    if (!MAKE_WEBHOOK_URL) {
      return NextResponse.json(
        { ok: false, error: "MAKE_WEBHOOK_URL manquante." },
        { status: 500 }
      );
    }

    // 1) Email via Resend
    const resend = new Resend(RESEND_API_KEY);

    const subject = `Nouvelle demande – ${nom} (${telephone})`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.5;">
        <h2 style="margin:0 0 12px;">Nouvelle demande de contact</h2>
        <p style="margin:0 0 8px;"><strong>Nom :</strong> ${escapeHtml(nom)}</p>
        <p style="margin:0 0 8px;"><strong>Téléphone :</strong> ${escapeHtml(telephone)}</p>
        <p style="margin:0 0 8px;"><strong>Email :</strong> ${escapeHtml(email || "—")}</p>
        <p style="margin:0 0 8px;"><strong>Type :</strong> ${escapeHtml(typePermis || "—")}</p>
        <p style="margin:14px 0 6px;"><strong>Message :</strong></p>
        <p style="margin:0; white-space:pre-wrap;">${escapeHtml(message || "—")}</p>
        <hr style="margin:18px 0; border:none; border-top:1px solid #e5e7eb;" />
        <p style="margin:0; font-size:12px; color:#6b7280;">
          Envoyé depuis le site Auto-école Dubard.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: `Auto-école Dubard <${CONTACT_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
      subject,
      html,
      replyTo: email ? email : undefined,
    });

    // 2) Webhook Make (Google Sheet + WhatsApp)
    const makePayload = {
      nom,
      telephone,
      email: email || "",
      typePermis: typePermis || "",
      message: message || "",
      source: "site",
      timestamp: new Date().toISOString(),
    };

    // Timeout + logs Make (sécurité prod)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let makeRes: Response | null = null;

    try {
      makeRes = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(makePayload),
        signal: controller.signal,
      });
    } catch (err) {
      console.error("❌ Make fetch error:", err);
      return NextResponse.json(
        {
          ok: true,
          warning:
            "Email envoyé, mais Make est injoignable (timeout ou erreur réseau).",
        },
        { status: 200 }
      );
    } finally {
      clearTimeout(timeout);
    }

  if (!makeRes || !makeRes.ok) {
      const text = makeRes ? await makeRes.text().catch(() => "") : "";
      console.error("❌ Make non-OK:", makeRes?.status, text);

      return NextResponse.json(
        { ok: true, warning: "Email envoyé, mais Make n'a pas répondu OK." },
        { status: 200 }
      );
    }


    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Erreur API /api/contact :", error);
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

// petite sécurité contre injection HTML
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
