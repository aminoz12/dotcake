/**
 * Central content layer for the DOT CAKE by GMD GROUP B2B site.
 * All copy + data live here so section components stay presentational.
 */

export const BRAND = {
  name: "DOT CAKE",
  parent: "by GMD GROUP",
  trademark: "DOT CAKE™",
  tagline: "CRACK. SCOOP. ENJOY.",
  newBadge: "Nouveauté 2026",
  email: "gmdgroup@outlook.fr",
  phone: "+33 6 62 13 75 52",
  phoneHref: "+33662137552",
  site: "www.dotcake.fr",
  socialHandle: "@dotcake_officiel",
  hashtag: "#DOTCAKE",
};

export type IconKey =
  | "crack"
  | "heart"
  | "asmr"
  | "cup"
  | "share"
  | "basket"
  | "cupcake"
  | "shelf"
  | "store"
  | "plane"
  | "social"
  | "rotation"
  | "megaphone"
  | "traffic"
  | "check"
  | "tiktok"
  | "trend"
  | "impulse"
  | "nomad"
  | "repeat"
  | "camera";

/* ---------------------------------------------------------------- Flavors */

export type Flavor = {
  id: "dubai-pistachio" | "choco-bueno" | "strawberry-cloud" | "cookies-cream";
  name: string;
  genoise: string;
  creme: string;
  /** image slot inside /public/flavors */
  image: string;
  accent: string;
  glow: string;
  dots: string[];
};

export const FLAVORS: Flavor[] = [
  {
    id: "dubai-pistachio",
    name: "Dubai Pistachio",
    genoise: "Génoise pistache",
    creme: "Crème pistache & kadaïf",
    image: "/pistache1.png",
    accent: "#9dbe3b",
    glow: "rgba(157,190,59,0.45)",
    dots: ["#a8c24a", "#f4c94e", "#f3e7c6"],
  },
  {
    id: "choco-bueno",
    name: "Choco Bueno",
    genoise: "Génoise chocolat",
    creme: "Crème noisette & Bueno",
    image: "/noisette1.png",
    accent: "#7a4a2b",
    glow: "rgba(122,74,43,0.5)",
    dots: ["#7a4a2b", "#ec9a4c", "#f3e7c6"],
  },
  {
    id: "strawberry-cloud",
    name: "Strawberry Cloud",
    genoise: "Génoise vanille",
    creme: "Crème fraise & vanille",
    image: "/strawberry1.png",
    accent: "#e94e77",
    glow: "rgba(233,78,119,0.45)",
    dots: ["#f06ca0", "#f9a8c9", "#f3e7c6"],
  },
  {
    id: "cookies-cream",
    name: "Cookies & Cream",
    genoise: "Génoise cacao",
    creme: "Crème cookies & vanille",
    image: "/cookies1.png",
    accent: "#2b2228",
    glow: "rgba(43,34,40,0.4)",
    dots: ["#2b2228", "#f3e7c6", "#8a7d83"],
  },
];

/* --------------------------------------------------------- Product features */

export type Feature = { icon: IconKey; title: string; description?: string };

export const PRODUCT_FEATURES: Feature[] = [
  { icon: "crack", title: "Effet crack" },
  { icon: "heart", title: "Cœur fondant" },
  { icon: "asmr", title: "Expérience ASMR unique" },
  { icon: "cup", title: "Format individuel" },
  { icon: "share", title: "Ultra partageable" },
];

export const HERO_BADGES = {
  tiktok: {
    title: "Le phénomène TikTok",
    sub: "aux millions de vues !",
  },
  texture: {
    highlight: "90%",
    title: "de gâteau ultra moelleux",
    sub: "1 fine couche croustillante de mini billes",
  },
};

/* ----------------------------------------------------------- Pros section */

export const WHY_REFERENCE: Feature[] = [
  {
    icon: "tiktok",
    title: "Concept viral déjà adopté par des millions de consommateurs sur TikTok",
  },
  { icon: "impulse", title: "Achat d'impulsion garanti" },
  { icon: "nomad", title: "Format individuel nomade" },
  { icon: "repeat", title: "Forte récurrence d'achat" },
  { icon: "camera", title: "Produit photogénique & ultra partageable" },
  { icon: "traffic", title: "Générateur de trafic en magasin" },
  { icon: "megaphone", title: "Forte visibilité digitale" },
];

export type Rayon = { icon: IconKey; title: string };

export const RAYONS: Rayon[] = [
  { icon: "basket", title: "Rayon pâtisserie fraîche" },
  { icon: "cupcake", title: "Snacking premium" },
  { icon: "shelf", title: "Têtes de gondole & saisonnier" },
  { icon: "store", title: "Convenience stores" },
  { icon: "plane", title: "Travel retail" },
  { icon: "social", title: "Opérations TikTok & réseaux" },
];

export const CONSUMER_LINES = [
  "Le consommateur filme.",
  "Le consommateur partage.",
  "Le consommateur revient.",
];

export const KPIS: Feature[] = [
  { icon: "rotation", title: "Produit à très fort potentiel de rotation" },
  { icon: "megaphone", title: "Forte visibilité digitale" },
  { icon: "traffic", title: "Générateur de trafic en magasin" },
];

/* ------------------------------------------------------------- Viral proof */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub: string;
};

export const VIRAL_STATS: Stat[] = [
  { value: 50, suffix: "M+", label: "de vues TikTok", sub: "sur le concept dot cake" },
  { value: 4, label: "saveurs iconiques", sub: "une gamme courte & performante" },
  { value: 90, suffix: "%", label: "de gâteau moelleux", sub: "une fine couche croustillante" },
  { value: 24, suffix: "h", label: "réapprovisionnement", sub: "chaîne logistique fiable" },
];

/* ------------------------------------------------------------- Process B2B */

export type Step = { number: string; title: string; description: string };

export const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Demandez un devis",
    description:
      "Échangez avec notre équipe pour définir vos volumes et votre potentiel.",
  },
  {
    number: "02",
    title: "Recevez vos échantillons",
    description:
      "Testez les 4 saveurs iconiques et validez l'effet crack en conditions réelles.",
  },
  {
    number: "03",
    title: "Passez commande",
    description:
      "Profitez de tarifs revendeurs et d'une première commande sans engagement.",
  },
  {
    number: "04",
    title: "Faites le buzz en rayon",
    description:
      "Mettez en avant, vendez et profitez du trafic généré par le phénomène.",
  },
];

export const ESTABLISHMENT_TYPES = [
  "Supermarché / Hypermarché",
  "Épicerie / Magasin de proximité",
  "Boulangerie / Pâtisserie",
  "Café / Salon de thé",
  "Convenience store",
  "Travel retail",
  "Distributeur / Grossiste",
  "Chaîne de magasins",
  "Autre",
];
