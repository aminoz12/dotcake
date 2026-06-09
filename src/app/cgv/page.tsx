import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "CGV professionnelles",
  description: "Conditions générales de vente professionnelles — DOT CAKE by GMD GROUP.",
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return (
    <LegalLayout
      eyebrow="Conditions de vente"
      title="CGV professionnelles"
      updated="9 juin 2026"
    >
      <p>
        Les présentes conditions générales de vente (CGV) régissent les relations commerciales entre
        GMD Group, exploitant la marque DOT CAKE™, et ses clients professionnels (revendeurs,
        distributeurs, points de vente).
      </p>

      <h2>1. Commandes</h2>
      <p>
        Toute commande implique l&apos;acceptation sans réserve des présentes CGV. Les commandes sont
        passées après émission d&apos;un devis personnalisé et validation écrite des deux parties.
      </p>

      <h2>2. Tarifs</h2>
      <p>
        Les prix sont indiqués hors taxes et s&apos;entendent en euros. Des paliers tarifaires
        dégressifs s&apos;appliquent selon les volumes commandés et sont précisés dans chaque devis.
      </p>

      <h2>3. Livraison</h2>
      <p>
        Les délais de livraison sont communiqués à titre indicatif. GMD Group s&apos;engage à assurer
        un approvisionnement fiable et un réapprovisionnement rapide, dans le respect de la chaîne du
        froid lorsque applicable.
      </p>

      <h2>4. Paiement</h2>
      <p>
        Les conditions de règlement sont précisées sur la facture. Tout retard de paiement pourra
        donner lieu à des pénalités conformément à la réglementation en vigueur.
      </p>

      <h2>5. Produits</h2>
      <p>
        Les produits DOT CAKE™ sont conformes à la réglementation alimentaire applicable. Les
        informations relatives aux allergènes et à la conservation sont fournies sur les emballages et
        fiches produits.
      </p>

      <h2>6. Responsabilité & litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, compétence est attribuée
        aux tribunaux compétents du ressort du siège de GMD Group, à défaut de résolution amiable.
      </p>

      <p>
        Pour toute question : <a href="mailto:gmdgroup@outlook.fr">gmdgroup@outlook.fr</a>.
      </p>
    </LegalLayout>
  );
}
