import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.dotcakre.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DOT CAKE by GMD GROUP — Le dessert viral qui fait craquer TikTok",
    template: "%s · DOT CAKE",
  },
  description:
    "DOT CAKE, le dessert viral aux millions de vues TikTok : une fine couche croustillante de mini billes, un cœur ultra moelleux. 4 saveurs iconiques pour les professionnels — supermarchés, épiceries, convenience stores, travel retail. Demandez un devis.",
  keywords: [
    "dot cake",
    "dessert viral TikTok",
    "gâteau mini billes croustillant",
    "dessert individuel grossiste",
    "référencer dessert tendance",
    "snacking premium revendeur",
    "fournisseur dessert TikTok",
    "GMD Group",
  ],
  authors: [{ name: "GMD Group" }],
  creator: "GMD Group",
  publisher: "GMD Group",
  category: "Food & Beverage Distribution",
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "DOT CAKE by GMD GROUP",
    title: "DOT CAKE — Le dessert viral qui fait craquer TikTok",
    description:
      "Une fine couche croustillante de mini billes, un cœur ultra moelleux. 4 saveurs iconiques. Le produit viral pensé pour vos rayons.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DOT CAKE — dessert viral pour les professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DOT CAKE — Le dessert viral qui fait craquer TikTok",
    description:
      "4 saveurs iconiques, effet crack, cœur fondant. Le dessert viral à référencer dans vos points de vente.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#ec1c6b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  name: "DOT CAKE",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  slogan: "Crack. Scoop. Enjoy.",
  description:
    "Dessert viral à couche croustillante de mini billes et cœur ultra moelleux, distribué par GMD Group auprès des professionnels.",
  parentOrganization: {
    "@type": "Organization",
    name: "GMD Group",
    email: "gmdgroup@outlook.fr",
    telephone: "+33-6-62-13-75-52",
  },
  makesOffer: [
    "Dubai Pistachio",
    "Choco Bueno",
    "Strawberry Cloud",
    "Cookies & Cream",
  ].map((f) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: `DOT CAKE — ${f}` },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
