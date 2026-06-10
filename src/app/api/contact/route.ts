import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  store?: string;
  manager?: string;
  phone?: string;
  email?: string;
  city?: string;
  type?: string;
  message?: string;
  // honeypot
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Spam honeypot — silently accept to not tip off bots.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!data.store?.trim()) errors.store = "Le nom du magasin est requis.";
  if (!data.manager?.trim()) errors.manager = "Le nom du responsable est requis.";
  if (!data.phone?.trim()) errors.phone = "Le téléphone est requis.";
  if (!data.email?.trim() || !EMAIL_RE.test(data.email)) {
    errors.email = "Une adresse email valide est requise.";
  }
  if (!data.city?.trim()) errors.city = "La ville est requise.";
  if (!data.type?.trim()) errors.type = "Le type d'établissement est requis.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // SMTP configuration from environment variables
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_TO,
    MAIL_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP non configuré — variables d'environnement manquantes.");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré. Réessayez plus tard." },
      { status: 503 }
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true pour 465 (SSL), false pour 587 (STARTTLS)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = MAIL_TO || SMTP_USER;
  const from = MAIL_FROM || `"DOT CAKE — Site" <${SMTP_USER}>`;

  const rows: [string, string][] = [
    ["Magasin / enseigne", data.store!],
    ["Responsable", data.manager!],
    ["Téléphone", data.phone!],
    ["Email", data.email!],
    ["Ville", data.city!],
    ["Type d'établissement", data.type!],
    ["Message", data.message?.trim() || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto">
      <h2 style="color:#ec1c6b;margin:0 0 4px">Nouvelle demande de devis — DOT CAKE</h2>
      <p style="color:#5b4f55;margin:0 0 16px">Reçue depuis le formulaire du site.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1d1117">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 10px;background:#fff5f9;border:1px solid #ffe7f1;font-weight:bold;width:38%">${k}</td><td style="padding:8px 10px;border:1px solid #ffe7f1">${escapeHtml(
                v
              )}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `Demande de devis — ${data.store} (${data.city})`,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] Échec de l'envoi SMTP:", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou contactez-nous directement." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Merci ! Votre demande a bien été envoyée. Notre équipe vous recontacte sous 24h.",
  });
}
