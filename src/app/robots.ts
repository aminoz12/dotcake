import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.dotcakre.fr/sitemap.xml",
    host: "https://www.dotcakre.fr",
  };
}
