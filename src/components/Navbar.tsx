"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import { Logo } from "./ui/Logo";

/** Anchor (#) links stay native <a>; route links use client-side <Link>. */
function NavLink({ href, className, onClick, children }: { href: string; className?: string; onClick?: () => void; children: ReactNode }) {
  if (href.startsWith("#")) {
    return <a href={href} className={className} onClick={onClick}>{children}</a>;
  }
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}

const LINKS = [
  { href: "#hero", label: "Accueil" },
  { href: "#saveurs", label: "Nos Saveurs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      // setState only on threshold change → no re-render churn while scrolling
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

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className={`transition-[padding] duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <nav
          className={`container-luxe flex items-center justify-between rounded-full transition-[background-color,box-shadow,padding] duration-300 ${
            scrolled
              ? "border border-rose/10 bg-white/95 px-5 py-2.5 shadow-card lg:bg-white/70 lg:backdrop-blur-xl lg:saturate-150"
              : "border border-transparent bg-transparent px-2 py-1"
          }`}
        >
          <a href="#hero" className="flex items-center" aria-label="DOT CAKE — accueil">
            <Logo size="xl" img />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="group relative text-sm font-semibold text-ink/70 transition-colors hover:text-rose"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-rose transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href="#contact" className="px-6 py-3 text-xs">
              Demander un devis
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-rose/15 bg-white text-ink shadow-card lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-ink" />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-5 bg-ink" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-ink" />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            {/* Mobile menu sliding from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between mb-8">
                  <Logo size="lg" img />
                  <button
                    onClick={() => setOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-rose/15 bg-white text-ink shadow-card"
                    aria-label="Fermer le menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {LINKS.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 text-base font-semibold text-ink/80 transition-colors hover:bg-rose-mist hover:text-rose"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-auto">
                  <NavLink
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-rose-gradient px-4 py-4 text-center text-base font-semibold text-white"
                  >
                    Demander un devis
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
