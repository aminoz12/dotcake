import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ARTICLES } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Tendances dessert viral & conseils revendeurs",
  description:
    "Le blog DOT CAKE : tendances du dessert viral TikTok, snacking premium, conseils pour revendeurs et stratégies retail. Articles experts pour les professionnels.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const featured = ARTICLES[0];
const rest = ARTICLES.slice(1);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* hero */}
        <section className="relative overflow-hidden pb-10 pt-36">
          <div className="absolute inset-0 -z-10 bg-radial-blush" />
          <div className="container-luxe">
            <span className="eyebrow">
              <span className="h-px w-8 bg-rose/50" />
              Le blog
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tightest text-ink sm:text-5xl text-balance">
              Tendances, <span className="text-rose-grad">retail</span> & conseils revendeurs
            </h1>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Tout ce qu&apos;il faut savoir pour référencer et vendre le dessert viral qui
              fait craquer TikTok.
            </p>
          </div>
        </section>

        {/* featured */}
        <section className="pb-6">
          <div className="container-luxe">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-[2rem] border border-rose/10 bg-white shadow-card transition-shadow hover:shadow-soft-lg lg:grid-cols-2"
            >
              <div
                className="relative min-h-[14rem] overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${featured.accent}, #1d1117)` }}
              >
                <div className="absolute inset-0 bg-noise opacity-30" />
                <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                  À la une
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-rose">
                  <span>{featured.category}</span>
                  <span className="text-ink-mute">·</span>
                  <span className="text-ink-mute">{featured.readingTime}</span>
                </div>
                <h2 className="font-display text-2xl font-extrabold leading-tight text-ink transition-colors group-hover:text-rose sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-soft">{featured.excerpt}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-rose">
                  Lire l&apos;article
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* grid */}
        <section className="pb-24 pt-6">
          <div className="container-luxe grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-rose/10 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div
                  className="relative h-36 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${a.accent}, #1d1117)` }}
                >
                  <div className="absolute inset-0 bg-noise opacity-30" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <span className="text-xs text-ink-mute">{a.dateLabel} · {a.readingTime}</span>
                  <h3 className="font-display text-lg font-extrabold leading-tight text-ink transition-colors group-hover:text-rose">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
