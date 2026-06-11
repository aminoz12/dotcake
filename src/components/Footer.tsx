import Link from "next/link";
import { FLAVORS, BRAND } from "@/lib/data";
import { Logo } from "./ui/Logo";

const SOCIALS = [
  {
    name: "TikTok",
    href: "https://tiktok.com/@dotcake_officiel",
    path: "M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.4c-1.3.1-2.5-.3-3.5-1v5.9c0 3.4-2.6 5.6-5.6 5.1a4.9 4.9 0 0 1-4-4.6c-.1-2.9 2.4-5.2 5.3-4.8v2.5c-.4-.1-.9-.1-1.3 0a2.3 2.3 0 0 0-1.5 2.6 2.3 2.3 0 0 0 4.5-.6V3z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dotcake_officiel",
    path: "M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17 5.8a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 17 5.8zM21 7a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5zm-1.8 8A3.2 3.2 0 0 1 16 18.2H8A3.2 3.2 0 0 1 4.8 15V7A3.2 3.2 0 0 1 8 3.8h8A3.2 3.2 0 0 1 19.2 7z",
  },
];

const LINKS = {
  "Nos saveurs": FLAVORS.map((f) => ({ label: f.name, href: "/#saveurs" })),
  "Le concept": [
    { label: "Crack. Scoop. Enjoy.", href: "/#hero" },
    { label: "Le phénomène TikTok", href: "/#pros" },
  ],
  Professionnels: [
    { label: "Demander un devis", href: "/#contact" },
    { label: "Nous contacter", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-rose/10 bg-blush pt-20">
      <div className="container-luxe">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand block */}
          <div className="col-span-2 flex flex-col gap-5">
            <Logo size="sm" img />
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              Le dessert viral qui fait craquer TikTok. Une gamme premium, photogénique
              et ultra partageable, pensée pour les professionnels.
            </p>

            <div className="text-sm text-ink-soft">
              <p className="font-semibold text-ink">GMD Group</p>
              <p>
                <a href={`tel:${BRAND.phoneHref}`} className="transition-colors hover:text-rose">
                  {BRAND.phone}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-rose">
                  {BRAND.email}
                </a>
              </p>
              <p>{BRAND.site}</p>
            </div>

            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-rose/15 bg-white text-ink-soft shadow-card transition-all duration-300 hover:text-rose"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-luxe text-rose">{BRAND.hashtag}</p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-luxe text-rose">{title}</h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-rose/10 py-8 sm:flex-row">
          <p className="text-xs text-ink-mute">
            © {new Date().getFullYear()} {BRAND.name} {BRAND.parent}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-mute">
            <Link href="/mentions-legales" className="transition-colors hover:text-ink">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-ink">Politique de confidentialité</Link>
            <Link href="/cgv" className="transition-colors hover:text-ink">CGV professionnelles</Link>
            <Link href="/cookies" className="transition-colors hover:text-ink">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
