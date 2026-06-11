import Image from "next/image";
import { MagneticButton } from "./ui/MagneticButton";
import { Logo } from "./ui/Logo";
import { Icon } from "./ui/Icon";
import { Sprinkles } from "./ui/Sprinkles";
import { BRAND, HERO_BADGES } from "@/lib/data";

/**
 * Hero — SERVER component, animated with pure CSS (fade-up + delays).
 * Renders fully visible in the SSR HTML: no hydration gate, instant LCP.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden pb-14 pt-28 lg:min-h-[82svh] lg:pb-12 lg:pt-24"
    >
      {/* Light backdrop */}
      <div className="absolute inset-0 bg-radial-blush" />
      <div className="absolute inset-0 bg-noise opacity-60" />
      <Sprinkles className="opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-rose/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-dot-yellow/15 blur-[140px]" />

      <div className="container-luxe relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-8 lg:gap-y-2">
          {/* ── A : brand + headline ── */}
          <div className="animate-fade-up text-center lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-or/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-luxe text-or-deep shadow-card">
              {BRAND.newBadge}
            </span>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Logo size="xl" withParent />
            </div>

            <h1 className="mt-7 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl text-balance">
              Le dessert <span className="text-rose">viral</span>
              <br />
              qui fait craquer <span className="text-rose">TikTok</span> !
            </h1>
          </div>

          {/* ── B : product cup + floating badges ── */}
          <div className="relative animate-fade-up [animation-delay:0.15s] lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/15 blur-[100px] sm:h-[32rem] sm:w-[32rem]" />

            {/* main product image */}
            <div className="relative mx-auto aspect-[4/5] w-[16rem] animate-float drop-shadow-[0_40px_70px_rgba(236,28,107,0.25)] sm:w-[24rem] lg:w-[32rem]">
              <Image
                src="/hero1.png"
                alt="Gobelet DOT CAKE — dessert viral à couche croustillante de mini billes"
                fill
                priority
                sizes="(max-width: 640px) 16rem, (max-width: 1024px) 24rem, 32rem"
                className="object-contain"
              />
            </div>

            {/* "casse la couche" circle */}
            <div className="absolute -left-2 top-1/2 hidden h-24 w-24 rotate-[-8deg] animate-fade-in [animation-delay:0.6s] sm:block">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-dashed border-rose/50 bg-white/80 p-2 text-center shadow-card backdrop-blur">
                <span className="text-[9px] font-bold uppercase leading-tight tracking-wide text-ink">
                  Casse la couche
                </span>
                <span className="mt-0.5 text-[8px] font-semibold uppercase leading-tight text-rose">
                  Découvre le cœur
                </span>
              </div>
            </div>

            {/* TikTok phenomenon badge */}
            <div className="absolute -right-2 top-2 hidden max-w-[10rem] animate-fade-in items-center gap-2 rounded-2xl border border-rose/15 bg-white px-3 py-2 shadow-card [animation-delay:0.7s] sm:flex lg:-right-4 lg:top-0">
              <Icon name="tiktok" className="h-7 w-7 shrink-0 text-rose" />
              <span className="text-[10px] font-bold uppercase leading-tight text-ink">
                {HERO_BADGES.tiktok.title}{" "}
                <span className="text-rose">{HERO_BADGES.tiktok.sub}</span>
              </span>
            </div>

            {/* 90% badge */}
            <div className="absolute -bottom-2 right-2 hidden h-28 w-28 animate-fade-in flex-col items-center justify-center rounded-full border-2 border-rose bg-white p-2 text-center shadow-soft [animation-delay:0.8s] sm:flex">
              <span className="text-[7px] font-semibold uppercase leading-tight text-ink-soft">
                {HERO_BADGES.texture.sub}
              </span>
              <span className="font-display text-3xl font-extrabold leading-none text-rose">
                {HERO_BADGES.texture.highlight}
              </span>
              <span className="text-[8px] font-bold uppercase leading-tight text-ink">
                {HERO_BADGES.texture.title}
              </span>
            </div>
          </div>

          {/* ── C : pitch + CTA + tagline (under the cup on mobile) ── */}
          <div className="flex animate-fade-up flex-col items-center text-center [animation-delay:0.25s] lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:items-start lg:self-start lg:text-left">
            <p className="max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Une fine couche croustillante de mini billes, et à l&apos;intérieur…
              un cœur ultra gourmand !
            </p>

            <div className="mt-8">
              <MagneticButton href="/#contact" variant="primary">
                Demander un devis
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
            </div>

            <p className="mt-8 font-display text-sm font-bold uppercase tracking-luxe">
              <span className="text-rose">Crack.</span>{" "}
              <span className="text-pistachio">Scoop.</span>{" "}
              <span className="text-dot-yellow">Enjoy.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
