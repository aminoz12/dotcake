import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { Footer } from "./Footer";

type Props = {
  eyebrow?: string;
  title: string;
  updated?: string;
  children: ReactNode;
};

/**
 * Shared shell for legal / informational sub-pages.
 * Prose styling is applied via arbitrary variants (no typography plugin needed).
 */
export function LegalLayout({ eyebrow = "Informations", title, updated, children }: Props) {
  return (
    <>
      <PageHeader />
      <main className="relative">
        {/* header band */}
        <section className="relative overflow-hidden pb-12 pt-36">
          <div className="absolute inset-0 -z-10 bg-radial-blush" />
          <div className="container-luxe">
            <span className="eyebrow">
              <span className="h-px w-8 bg-rose/50" />
              {eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tightest text-ink sm:text-5xl">
              {title}
            </h1>
            {updated && (
              <p className="mt-3 text-sm text-ink-mute">Dernière mise à jour : {updated}</p>
            )}
          </div>
        </section>

        {/* content */}
        <section className="pb-24">
          <div
            className="container-luxe max-w-3xl text-[15px] leading-relaxed text-ink-soft
              [&_a]:font-medium [&_a]:text-rose [&_a:hover]:underline
              [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-ink
              [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ink
              [&_p]:mt-4
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5
              [&_strong]:font-semibold [&_strong]:text-ink"
          >
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
