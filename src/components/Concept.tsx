"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONCEPT_STEPS, BRAND } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";

export function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-blush" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-radial-blush" />

      <div className="container-luxe">
        <SectionHeading
          eyebrow="L'expérience dot cake"
          title={
            <>
              <span className="text-ink">Crack.</span>{" "}
              <span className="text-pistachio">Scoop.</span>{" "}
              <span className="text-rose">Enjoy.</span>
            </>
          }
          subtitle={`${BRAND.trademark}, c'est le plaisir d'un dessert à vivre en 3 temps.`}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CONCEPT_STEPS.map((step, i) => (
            <motion.article
              key={step.word}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-[2rem] border border-rose/10 bg-white shadow-card transition-shadow duration-500 hover:shadow-soft-lg"
            >
              {/* full-bleed photo */}
              <Image
                src={step.image}
                alt={`Étape ${step.number} — ${step.word}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* light gradient — top only — so the heading text stays readable
                  without washing out the photo below */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-2/5"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,245,249,0.96) 0%, rgba(255,245,249,0.75) 45%, rgba(255,245,249,0) 100%)",
                }}
              />

              {/* text */}
              <div className="relative z-10 p-7 sm:p-8">
                <h3 className="flex items-baseline gap-2 font-display font-extrabold uppercase leading-none tracking-tight">
                  <span className="text-4xl sm:text-5xl" style={{ color: step.accent }}>
                    {step.number}
                  </span>
                  <span className="text-3xl sm:text-4xl" style={{ color: step.accent }}>
                    {step.word}
                  </span>
                </h3>
                <p className="mt-4 max-w-[18rem] text-sm font-medium leading-snug text-ink-soft sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
