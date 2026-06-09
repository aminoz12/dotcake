"use client";

import { motion } from "framer-motion";
import { CONSUMER_LINES, KPIS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

export function Pros() {
  return (
    <section id="pros" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-ink shadow-soft">
            {/* TikTok phenomenon header */}
            <div className="relative flex flex-col items-center gap-4 px-8 py-10 text-center sm:flex-row sm:text-left sm:px-12">
              <div className="absolute inset-0 bg-noise opacity-30" />
              <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-rose text-white shadow-glow">
                <Icon name="tiktok" className="h-8 w-8" />
              </span>
              <div className="relative">
                <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                  Le phénomène TikTok aux millions de vues !
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
                  Un dessert aussi beau que bon, pensé pour être filmé, partagé,
                  reposté et surtout… dévoré.
                </p>
              </div>
            </div>

            <div className="mx-8 h-px bg-white/10 sm:mx-12" />

            {/* Consumer statement + KPIs */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
              {/* pink statement */}
              <div className="relative flex flex-col justify-center bg-rose-gradient p-10 sm:p-12">
                <div className="absolute inset-0 bg-noise opacity-30" />
                <div className="relative">
                  {CONSUMER_LINES.map((line) => (
                    <p
                      key={line}
                      className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              {/* KPIs */}
              <div className="flex flex-col justify-center gap-6 p-10 sm:p-12">
                {KPIS.map((kpi, i) => (
                  <motion.div
                    key={kpi.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-rose-light">
                      <Icon name={kpi.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide text-white">
                      {kpi.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
