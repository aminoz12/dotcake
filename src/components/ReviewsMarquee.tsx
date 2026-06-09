"use client";

import Image from "next/image";
import { Icon } from "./ui/Icon";

// /1.png … /10.png à déposer à la racine de public/
const REVIEWS = Array.from({ length: 10 }, (_, i) => `/${i + 1}.png`);

/**
 * Bande d'avis TikTok défilant en boucle continue de droite à gauche.
 * La piste est dupliquée pour une boucle sans couture (animation -50%).
 */
export function ReviewsMarquee() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-blush" />

      <div className="container-luxe">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-rose/50" />
            Vu sur TikTok
            <span className="h-px w-8 bg-rose/50" />
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tightest text-ink sm:text-4xl">
            Ils craquent déjà <span className="text-rose-grad">en vidéo</span>
          </h2>
        </div>
      </div>

      {/* marquee */}
      <div className="group relative mt-10">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-blush to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-blush to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-5" aria-hidden={dup === 1}>
              {REVIEWS.map((src, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="relative aspect-[9/16] w-44 shrink-0 overflow-hidden rounded-2xl border border-rose/10 bg-white shadow-card sm:w-52"
                >
                  <Image
                    src={src}
                    alt={`Avis TikTok DOT CAKE n°${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover"
                  />
                  {/* TikTok native feel */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-ink">
                    <Icon name="tiktok" className="h-4 w-4" />
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
