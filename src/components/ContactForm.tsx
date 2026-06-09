"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ESTABLISHMENT_TYPES } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Record<string, string>;

const FIELDS = [
  { name: "store", label: "Nom du magasin / enseigne", type: "text", placeholder: "Ex. Carrefour City" },
  { name: "manager", label: "Nom du responsable", type: "text", placeholder: "Ex. Sophie Marchand" },
  { name: "phone", label: "Téléphone", type: "tel", placeholder: "Ex. 06 12 34 56 78" },
  { name: "email", label: "Email", type: "email", placeholder: "vous@enseigne.fr" },
  { name: "city", label: "Ville", type: "text", placeholder: "Ex. Lyon" },
] as const;

const BENEFITS = [
  "Réponse sous 24h ouvrées",
  "Tarifs revendeurs sur-mesure",
  "Sans engagement",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(json.message ?? "Demande envoyée avec succès.");
        form.reset();
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("error");
      } else {
        setStatus("error");
        setMessage(json.error ?? "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setMessage("Impossible d'envoyer la demande. Vérifiez votre connexion.");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-rose/15 bg-blush px-4 py-3.5 text-sm text-ink placeholder:text-ink-mute outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:ring-2 focus:ring-rose/20";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-radial-blush" />
      <div className="container-luxe">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left — pitch */}
          <div className="flex flex-col">
            <SectionHeading
              align="left"
              eyebrow="Contactez-nous"
              title={
                <>
                  Demandez un <span className="text-rose-grad">devis personnalisé</span>
                </>
              }
              subtitle="Une question ? Un projet ? Notre équipe est à votre écoute et vous recontacte avec une offre adaptée à votre point de vente."
            />

            <ul className="mt-10 flex flex-col gap-4">
              {BENEFITS.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.08} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pistachio/15 text-pistachio">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 13l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink-soft">{b}</span>
                </Reveal>
              ))}
            </ul>

          </div>

          {/* Right — form */}
          <Reveal direction="left" className="relative">
            <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-rose/10 bg-white p-7 shadow-soft sm:p-10">
              {/* honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-0 w-0" aria-hidden="true" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={inputClass}
                      aria-invalid={!!errors[field.name]}
                    />
                    {errors[field.name] && <span className="text-xs text-rose">{errors[field.name]}</span>}
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Type d&apos;établissement
                  </label>
                  <select id="type" name="type" defaultValue="" className={`${inputClass} appearance-none`} aria-invalid={!!errors.type}>
                    <option value="" disabled>Sélectionnez…</option>
                    {ESTABLISHMENT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.type && <span className="text-xs text-rose">{errors.type}</span>}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  Message <span className="text-ink-mute">(facultatif)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Parlez-nous de votre point de vente, volumes envisagés…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.98 }}
                className="group relative mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-rose-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    "Demander mon devis personnalisé"
                  )}
                </span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>

              {status === "success" && (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center gap-2 rounded-2xl bg-pistachio/10 px-4 py-3 text-sm text-pistachio">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {message}
                </motion.p>
              )}
              {status === "error" && message && (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl bg-rose/10 px-4 py-3 text-sm text-rose-deep">
                  {message}
                </motion.p>
              )}

              <p className="mt-4 text-center text-xs text-ink-mute">
                En soumettant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe commerciale.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
