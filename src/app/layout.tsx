import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL, GA_ID } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

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
  // GEO — ciblage géographique France
  other: {
    "geo.region": "FR",
    "geo.placename": "Paris",
    language: "fr",
  },
};

export const viewport: Viewport = {
  themeColor: "#ec1c6b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/** JSON-LD enrichi : Organization + Brand + WebSite (SEO / GEO / AEO). */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GMD Group",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      email: "gmdgroup@outlook.fr",
      telephone: "+33-6-62-13-75-52",
      address: { "@type": "PostalAddress", addressCountry: "FR", addressLocality: "Paris" },
      areaServed: { "@type": "Country", name: "France" },
      sameAs: [
        "https://tiktok.com/@dotcake_officiel",
        "https://instagram.com/dotcake_officiel",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "gmdgroup@outlook.fr",
        telephone: "+33-6-62-13-75-52",
        areaServed: "FR",
        availableLanguage: ["French"],
      },
    },
    {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: "DOT CAKE",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      slogan: "Crack. Scoop. Enjoy.",
      description:
        "Dessert viral à couche croustillante de mini billes et cœur ultra moelleux, distribué par GMD Group auprès des professionnels en France.",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DOT CAKE by GMD GROUP",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    ...["Dubai Pistachio", "Choco Bueno", "Strawberry Cloud", "Cookies & Cream"].map(
      (f) => ({
        "@type": "Product",
        name: `DOT CAKE — ${f}`,
        brand: { "@id": `${SITE_URL}/#brand` },
        category: "Dessert individuel premium",
        audience: { "@type": "BusinessAudience", name: "Revendeurs et distributeurs alimentaires" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "FR",
          businessFunction: "https://schema.org/Sell",
        },
      })
    ),
  ],
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

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
