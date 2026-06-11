import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

/**
 * FAQ — visible + balisée FAQPage (AEO : featured snippets Google,
 * réponses ChatGPT/Perplexity). Accordéon natif <details>, zéro JS.
 */
const FAQ_ITEMS = [
  {
    q: "Qu'est-ce que DOT CAKE ?",
    a: "DOT CAKE est un dessert individuel premium devenu viral sur TikTok : une fine couche croustillante de mini billes colorées à casser à la cuillère, et un cœur de gâteau ultra moelleux qui représente 90 % du produit. Il est décliné en 4 saveurs iconiques : Dubai Pistachio, Choco Bueno, Strawberry Cloud et Cookies & Cream.",
  },
  {
    q: "Qui peut commander DOT CAKE ?",
    a: "DOT CAKE est réservé aux professionnels : supermarchés, épiceries, magasins de proximité, boulangeries, cafés, convenience stores, travel retail et distributeurs. Il n'y a pas de vente directe aux particuliers — les consommateurs retrouvent le produit chez nos revendeurs partenaires.",
  },
  {
    q: "Comment devenir revendeur DOT CAKE ?",
    a: "Il suffit de remplir le formulaire de demande de devis sur le site. Notre équipe vous recontacte sous 24h ouvrées avec une offre adaptée à votre point de vente, des échantillons des 4 saveurs et des tarifs revendeurs sur-mesure, sans engagement.",
  },
  {
    q: "Livrez-vous partout en France ?",
    a: "Oui. GMD Group assure une distribution professionnelle sur toute la France, avec un approvisionnement fiable et un réapprovisionnement rapide pour éviter toute rupture en rayon.",
  },
  {
    q: "Pourquoi référencer un dessert viral TikTok en magasin ?",
    a: "Un produit viral génère du trafic en magasin : les consommateurs qui l'ont vu en ligne viennent le chercher activement. DOT CAKE bénéficie d'une forte demande, d'un excellent taux de réachat et d'un format individuel à forte rotation, idéal pour l'achat d'impulsion.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-luxe">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions <span className="text-rose-grad">fréquentes</span>
            </>
          }
          subtitle="Tout ce que les professionnels veulent savoir avant de référencer DOT CAKE."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <details className="group rounded-3xl border border-rose/10 bg-white shadow-card open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-extrabold text-ink transition-colors hover:text-rose sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-rose-mist text-rose transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
