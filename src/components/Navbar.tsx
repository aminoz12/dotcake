"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import { Logo } from "./ui/Logo";

const LINKS = [
  { href: "#hero", label: "Accueil" },
  { href: "#saveurs", label: "Nos Saveurs" },
  { href: "#pros", label: "Pros" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
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
      <div className={`transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <nav
          className={`container-luxe flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled ? "glass-strong px-5 py-2.5 shadow-card" : "bg-transparent px-2 py-1"
          }`}
        >
          <a href="#hero" className="flex items-center" aria-label="DOT CAKE — accueil">
            <Logo size="sm" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-semibold text-ink/70 transition-colors hover:text-rose"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-rose transition-all duration-300 group-hover:w-full" />
                </a>
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="container-luxe overflow-hidden lg:hidden"
          >
            <div className="glass-strong mt-2 flex flex-col gap-1 rounded-3xl p-4 shadow-card">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-rose-mist hover:text-rose"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-rose-gradient px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
