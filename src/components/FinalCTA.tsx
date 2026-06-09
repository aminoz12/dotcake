"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import { Logo } from "./ui/Logo";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { PRODUCT_FEATURES } from "@/lib/data";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-rose/30 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-dot-yellow/20 blur-[120px]"
          />
          <div className="absolute inset-0 bg-noise opacity-40" />

          <div className="relative flex flex-col items-center">
            <Reveal>
              <Logo size="xl" withParent light />
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 font-display text-base font-bold uppercase tracking-luxe">
                <span className="text-rose">Crack.</span>{" "}
                <span className="text-pistachio">Scoop.</span>{" "}
                <span className="text-dot-yellow">Enjoy.</span>
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <h2 className="mx-auto mt-8 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Prêt à faire le buzz dans vos rayons ?
              </h2>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 text-balance">
                Référencez le dessert viral qui fait revenir les consommateurs. Disponible
                dès maintenant pour vos commandes.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton href="#contact" variant="primary">
                  Demander un devis
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {PRODUCT_FEATURES.map((f) => (
                  <div key={f.title} className="flex flex-col items-center gap-2">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-rose-light">
                      <Icon name={f.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white/70">
                      {f.title}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
