import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Demander un devis",
  description:
    "Contactez l'équipe DOT CAKE by GMD GROUP pour référencer le dessert viral dans votre point de vente. Demandez un devis personnalisé.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <main className="relative">
        {/* header band */}
        <section className="relative overflow-hidden pb-4 pt-36">
          <div className="absolute inset-0 -z-10 bg-radial-blush" />
          <div className="container-luxe">
            <span className="eyebrow">
              <span className="h-px w-8 bg-rose/50" />
              Contactez-nous
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tightest text-ink sm:text-5xl">
              Parlons de votre <span className="text-rose-grad">point de vente</span>
            </h1>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Une question ? Un projet de référencement ? Notre équipe vous répond sous 24h ouvrées.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${BRAND.phoneHref}`}
                className="flex items-center gap-3 rounded-2xl border border-rose/10 bg-white px-5 py-3 shadow-card transition-colors hover:text-rose"
              >
                <span className="font-display text-lg font-extrabold text-ink">{BRAND.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 rounded-2xl border border-rose/10 bg-white px-5 py-3 text-ink-soft shadow-card transition-colors hover:text-rose"
              >
                {BRAND.email}
              </a>
              <span className="flex items-center gap-3 rounded-2xl border border-rose/10 bg-white px-5 py-3 text-ink-soft shadow-card">
                {BRAND.site} · <span className="text-rose">{BRAND.socialHandle}</span>
              </span>
            </div>
          </div>
        </section>

        {/* reuse the lead form section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
