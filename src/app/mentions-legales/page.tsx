import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site DOT CAKE by GMD GROUP.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout eyebrow="Informations légales" title="Mentions légales" updated="9 juin 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le présent site <strong>www.dotcake.fr</strong> est édité par <strong>GMD Group</strong>,
        société exploitant la marque <strong>DOT CAKE™</strong>.
      </p>
      <ul>
        <li><strong>Raison sociale :</strong> GMD Group</li>
        <li><strong>Forme juridique :</strong> SAS</li>
        <li><strong>Adresse :</strong> 24 rue du Faubourg, 75008 Paris, France</li>
        <li><strong>Email :</strong> <a href="mailto:gmdgroup@outlook.fr">gmdgroup@outlook.fr</a></li>
        <li><strong>Téléphone :</strong> <a href="tel:+33662137552">+33 6 62 13 75 52</a></li>
        <li><strong>Capital social :</strong> [à compléter]</li>
        <li><strong>RCS / SIREN :</strong> [à compléter]</li>
        <li><strong>N° TVA intracommunautaire :</strong> [à compléter]</li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication est le représentant légal de GMD Group.</p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par son prestataire d&apos;hébergement. Les coordonnées complètes de
        l&apos;hébergeur sont disponibles sur simple demande à{" "}
        <a href="mailto:gmdgroup@outlook.fr">gmdgroup@outlook.fr</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments du site (textes, visuels, logos, marque DOT CAKE™, identité
        graphique) est protégé par le droit de la propriété intellectuelle et demeure la propriété
        exclusive de GMD Group. Toute reproduction, représentation ou diffusion, totale ou partielle,
        sans autorisation préalable, est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        GMD Group s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur le
        site mais ne saurait être tenue responsable des erreurs, omissions ou indisponibilités.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, contactez-nous à{" "}
        <a href="mailto:gmdgroup@outlook.fr">gmdgroup@outlook.fr</a>.
      </p>
    </LegalLayout>
  );
}
