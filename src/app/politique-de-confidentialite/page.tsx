import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données — DOT CAKE by GMD GROUP.",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      updated="9 juin 2026"
    >
      <p>
        GMD Group (« nous ») attache une grande importance à la protection de vos données
        personnelles, dans le respect du Règlement Général sur la Protection des Données (RGPD) et de
        la loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement est GMD Group, 24 rue du Faubourg, 75008 Paris —{" "}
        <a href="mailto:contact@gmd-group.com">contact@gmd-group.com</a>.
      </p>

      <h2>Données collectées</h2>
      <p>
        Via notre formulaire de demande de devis professionnel, nous collectons : nom du magasin /
        enseigne, nom du responsable, téléphone, email, ville, type d&apos;établissement et votre
        message éventuel.
      </p>

      <h2>Finalités</h2>
      <ul>
        <li>Répondre à vos demandes de devis et d&apos;information ;</li>
        <li>Gérer la relation commerciale B2B ;</li>
        <li>Vous transmettre des offres professionnelles adaptées.</li>
      </ul>

      <h2>Base légale</h2>
      <p>
        Les traitements reposent sur votre consentement et sur l&apos;intérêt légitime de GMD Group à
        développer son réseau de distribution.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées le temps nécessaire au traitement de votre demande puis archivées
        conformément aux durées légales applicables.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
        d&apos;opposition et de portabilité. Pour les exercer, écrivez à{" "}
        <a href="mailto:contact@gmd-group.com">contact@gmd-group.com</a>. Vous pouvez également
        introduire une réclamation auprès de la CNIL.
      </p>

      <h2>Cookies</h2>
      <p>
        La gestion des cookies est détaillée dans notre <a href="/cookies">politique cookies</a>.
      </p>
    </LegalLayout>
  );
}
