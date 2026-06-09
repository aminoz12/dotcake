import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique cookies",
  description: "Gestion des cookies sur le site DOT CAKE by GMD GROUP.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Cookies" title="Politique cookies" updated="9 juin 2026">
      <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre terminal lors de la visite d&apos;un site. Il
        permet d&apos;assurer le bon fonctionnement du site et, le cas échéant, de mesurer son audience.
      </p>

      <h2>Cookies utilisés</h2>
      <ul>
        <li>
          <strong>Cookies techniques :</strong> nécessaires au fonctionnement du site (navigation,
          sécurité). Ils ne requièrent pas de consentement.
        </li>
        <li>
          <strong>Cookies de mesure d&apos;audience :</strong> statistiques de fréquentation
          anonymisées (déposés uniquement avec votre accord).
        </li>
      </ul>

      <h2>Gestion de vos préférences</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies, ou
        être averti lorsqu&apos;un cookie est déposé. Le refus de certains cookies peut altérer
        certaines fonctionnalités du site.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative aux cookies, écrivez à{" "}
        <a href="mailto:contact@gmd-group.com">contact@gmd-group.com</a>. Voir aussi notre{" "}
        <a href="/politique-de-confidentialite">politique de confidentialité</a>.
      </p>
    </LegalLayout>
  );
}
