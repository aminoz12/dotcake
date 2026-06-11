"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MagneticButton } from "./ui/MagneticButton";
import { Logo } from "./ui/Logo";

/**
 * Navbar — no JS-gated rendering: visible and clickable in the SSR HTML
 * (CSS entrance animation only). Links use /#anchor so they work from
 * every page, via next/link for instant client-side navigation.
 */
const LINKS = [
  { href: "/#hero", label: "Accueil" },
  { href: "/#saveurs", label: "Nos Saveurs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled((prev) => {
        const next = window.scrollY > 24;
        return prev === next ? prev : next;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-nav-in">
      <div className={`transition-[padding] duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <nav
          className={`container-luxe flex items-center justify-between rounded-full transition-[background-color,box-shadow,padding] duration-300 ${
            scrolled || open
              ? "border border-rose/10 bg-white/95 px-5 py-2.5 shadow-card lg:bg-white/70 lg:backdrop-blur-xl lg:saturate-150"
              : "border border-transparent bg-transparent px-2 py-1"
          }`}
        >
          <Link href="/#hero" className="flex items-center" aria-label="DOT CAKE — accueil" onClick={close}>
            <Logo size="lg" img />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-semibold text-ink/70 transition-colors hover:text-rose"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-rose transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href="/#contact" className="px-6 py-3 text-xs">
              Demander un devis
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-rose/15 bg-white text-ink shadow-card lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu — pure CSS expand/collapse, no AnimatePresence */}
      <div
        className={`container-luxe grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-rose/10 bg-white p-4 shadow-card">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-rose-mist hover:text-rose"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={close}
              className="mt-2 rounded-2xl bg-rose-gradient px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
