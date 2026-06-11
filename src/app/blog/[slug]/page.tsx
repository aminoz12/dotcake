import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ARTICLES, getArticle, getRelatedArticles } from "@/lib/blog";

const SITE_URL = "https://www.dotcakre.fr";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article introuvable" };

  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: ["GMD Group"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "GMD Group" },
    publisher: {
      "@type": "Organization",
      name: "DOT CAKE by GMD GROUP",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${article.slug}` },
    keywords: article.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader />
      <main className="relative">
        {/* header band */}
        <section
          className="relative overflow-hidden pb-12 pt-36"
          style={{ background: `linear-gradient(160deg, ${article.accent}22, #fff5f9 70%)` }}
        >
          <div className="container-luxe max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-rose transition-colors hover:text-rose-deep"
            >
              ← Tous les articles
            </Link>
            <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-rose">
              <span>{article.category}</span>
              <span className="text-ink-mute">·</span>
              <span className="text-ink-mute">{article.dateLabel}</span>
              <span className="text-ink-mute">·</span>
              <span className="text-ink-mute">{article.readingTime}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tightest text-ink sm:text-5xl text-balance">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{article.excerpt}</p>
          </div>
        </section>

        {/* body */}
        <article className="pb-20 pt-12">
          <div className="container-luxe max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {article.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="mt-10 font-display text-xl font-extrabold uppercase tracking-tight text-ink sm:text-2xl">
                    {section.heading}
                  </h2>
                )}
                {section.body.map((p, j) => (
                  <p key={j} className="mt-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {/* CTA */}
            <div className="mt-12 flex flex-col items-center gap-4 rounded-[2rem] bg-ink p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-extrabold uppercase text-white">
                Envie de référencer DOT CAKE ?
              </h2>
              <p className="max-w-xl text-sm text-white/70">
                Recevez un devis personnalisé et des échantillons des 4 saveurs iconiques.
              </p>
              <div className="mt-2">
                <MagneticButton href="/#contact" variant="primary">
                  Demander un devis
                </MagneticButton>
              </div>
            </div>
          </div>
        </article>

        {/* related */}
        {related.length > 0 && (
          <section className="border-t border-rose/10 bg-blush py-16">
            <div className="container-luxe">
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
                À lire aussi
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-rose/10 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft-lg"
                  >
                    <div
                      className="relative h-28"
                      style={{ background: `linear-gradient(135deg, ${a.accent}, #1d1117)` }}
                    >
                      <div className="absolute inset-0 bg-noise opacity-30" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                        {a.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <h3 className="font-display text-base font-extrabold leading-tight text-ink transition-colors group-hover:text-rose">
                        {a.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-soft line-clamp-3">{a.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
