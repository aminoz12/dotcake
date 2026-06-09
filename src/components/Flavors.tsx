import { FLAVORS } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { FlavorCard } from "./FlavorCard";

export function Flavors() {
  return (
    <section id="saveurs" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="La gamme"
          title={
            <>
              4 saveurs <span className="text-rose-grad">iconiques</span>
            </>
          }
          subtitle="Une collection courte et virale, pensée pour maximiser la rotation en rayon et séduire chaque profil de consommateur."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLAVORS.map((flavor, i) => (
            <FlavorCard key={flavor.id} flavor={flavor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
