# DOT CAKE by GMD GROUP — Site vitrine B2B

Site vitrine pour **DOT CAKE**, le dessert viral TikTok (« CRACK. SCOOP. ENJOY. »), **destiné aux professionnels** : supermarchés, épiceries, convenience stores, boulangeries, cafés, travel retail et distributeurs.

> Objectif : convaincre les points de vente de **référencer** le produit. C'est un site de **génération de leads B2B**, pas un e-commerce grand public.

## ✨ Stack technique

- **Next.js 15** (App Router) + **React 19** + **TypeScript** strict
- **Tailwind CSS 3.4** — thème clair **blanc & rose** + dots multicolores + filets dorés (d'après le logo)
- **Framer Motion** — reveals au scroll, tilt 3D, carrousel, micro-interactions
- **GSAP + ScrollTrigger** — parallaxe du hero
- **SEO avancé** — metadata, Open Graph, Twitter Card, JSON-LD (`Brand` / `GMD Group`), `sitemap.xml`, `robots.txt`
- **Core Web Vitals** — `next/image`, fonts `display: swap`, animations GPU, `prefers-reduced-motion`

## 🚀 Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

Production : `npm run build && npm run start`.

> **Note réseau (build) :** `next/font/google` télécharge Montserrat + Inter au build. Derrière un proxy bloquant (certificat non vérifié), préfixez par `NODE_TLS_REJECT_UNAUTHORIZED=0` **uniquement pour le build**, ou self-hostez les `.woff2` via `next/font/local`.

## 🗂️ Sections (one-pager)

Hero · 4 Saveurs iconiques · Notre Concept (Crack/Scoop/Enjoy + TikTok) · Pros (Pourquoi référencer + Idéal pour tous les rayons + bandeau « Le consommateur filme/partage/revient » + KPIs) · Preuve virale (compteurs) · Processus en 4 étapes · Galerie · Contact / Devis · CTA final · Footer.

Nav : **Accueil · Nos Saveurs · Notre Concept · Pros · Contact · [Demander un devis]**

## 🖼️ Emplacements images (à déposer dans `public/`)

| Fichier | Usage |
|---|---|
| `public/hero1.png` | Gobelet principal du Hero ✅ *(déjà présent)* |
| `public/flavors/dubai-pistachio.png` | Carte + galerie saveur Dubai Pistachio |
| `public/flavors/choco-bueno.png` | Carte + galerie saveur Choco Bueno |
| `public/flavors/strawberry-cloud.png` | Carte + galerie saveur Strawberry Cloud |
| `public/flavors/cookies-cream.png` | Carte + galerie saveur Cookies & Cream |
| `public/og-image.png` | Image de partage social (1200×630) |
| `public/logo.png` | Logo pour SEO / JSON-LD |

Format conseillé : **PNG détouré, fond transparent**, gobelet centré. Tant qu'une image manque, l'emplacement reste vide (le reste s'affiche normalement).

## 🎨 Direction artistique

Fond blanc / blush, **rose signature `#ec1c6b`**, accents dots (`#a8c24a`, `#f4c94e`, `#ec9a4c`, `#f06ca0`) et filets dorés. Wordmark **D[•]T CAKE** (le « O » = orbe de mini-billes) dans `components/ui/Logo.tsx`. Police display **Montserrat** (titres) + **Inter** (texte).

## 🔌 Personnalisation

- **Contenu / copy** : `src/lib/data.ts` (saveurs, features, concept, pros, rayons, KPIs, coordonnées)
- **Couleurs / typo** : `tailwind.config.ts`
- **Leads** : brancher `src/app/api/contact/route.ts` sur votre CRM / email (placeholder `console.info`)
- **Coordonnées** : objet `BRAND` dans `data.ts` (email `contact@gmd-group.com`, tél, site, `@dotcake_officiel`)
- **Domaine SEO** : `https://www.dotcake.com` dans `layout.tsx`, `sitemap.ts`, `robots.ts`
