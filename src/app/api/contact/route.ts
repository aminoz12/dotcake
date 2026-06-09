import { NextResponse } from "next/server";

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

  // In production: forward to CRM / email service / database.
  // Here we log server-side and acknowledge. Replace with your integration.
  console.info("[lead] Nouvelle demande professionnelle:", {
    store: data.store,
    manager: data.manager,
    email: data.email,
    city: data.city,
    type: data.type,
  });

  return NextResponse.json({
    ok: true,
    message:
      "Merci ! Votre demande a bien été reçue. Notre équipe commerciale vous recontacte sous 24h.",
  });
}
