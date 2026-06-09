import Link from "next/link";
import { Logo } from "./ui/Logo";

/** Minimal sticky header for sub-pages (legal, contact). */
export function PageHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4">
      <nav className="container-luxe flex items-center justify-between rounded-full glass-strong px-5 py-2.5 shadow-card">
        <Link href="/" aria-label="DOT CAKE — accueil">
          <Logo size="sm" />
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="hidden text-sm font-semibold text-ink/70 transition-colors hover:text-rose sm:block"
          >
            ← Accueil
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-rose-gradient px-5 py-2.5 text-xs font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
          >
            Demander un devis
          </Link>
        </div>
      </nav>
    </header>
  );
}
