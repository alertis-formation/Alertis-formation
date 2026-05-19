import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getFormationsByCategory } from "@/lib/formations-data";

export const metadata = {
  title:
    "Formations sécurité incendie en entreprise : extincteur, EPI, évacuation",
  description:
    "Formations incendie obligatoires (R4227-28) : manipulation d'extincteurs sur feu réel ou en réalité virtuelle, équipiers EPI, guides-files/serres-files, évacuation. Intra & inter-entreprises partout en France.",
  alternates: { canonical: "/formations-securite-incendie" },
  openGraph: {
    title: "Formations sécurité incendie — extincteur, EPI, évacuation",
    url: "/formations-securite-incendie",
    type: "website",
  },
};

export default function SecuriteIncendiePage() {
  const items = getFormationsByCategory("securite-incendie");
  return (
    <PageShell
      title="Formations Sécurité Incendie"
      subtitle="Préparez vos équipes à réagir efficacement face à un départ de feu. Théorie, mise en situation réelle, utilisation d'extincteurs et procédures d'évacuation : nos formations renforcent la prévention et la maîtrise des risques au quotidien."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "Sécurité incendie" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: "Sécurité incendie", href: "/formations-securite-incendie" },
        ]}
      />
      <ItemListJsonLd
        name="Formations Sécurité Incendie — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      <FormationsList
        category="securite-incendie"
        title="Nos formations en sécurité incendie"
        subtitle="Manipulation d'extincteurs, équipiers d'intervention, formations spécifiques par établissement : explorez le catalogue complet."
      />
      <FormationCategoryContent
        approaches={[
          {
            title: "Selon votre choix pédagogique",
            description:
              "Extincteur sur feu réel, réalité virtuelle ou unité mobile : à chaque entreprise sa solution. Alertis propose plusieurs formats de formation incendie pensés pour s'adapter à vos objectifs et contraintes.",
            bullets: [
              "Bac à flammes écologique (feu réel maîtrisé)",
              "Réalité virtuelle immersive",
              "Camion mobile équipé sur votre site",
              "Extincteur laser (intérieur sans fumée)",
              "E-learning + exercices pratiques sur site",
            ],
          },
          {
            title: "Adaptée à vos équipements et infrastructures",
            description:
              "Chaque site présente des risques spécifiques liés à son aménagement et à son matériel. Alertis adapte ses formations à votre environnement réel : bâtiment, équipements, alarmes ou systèmes d'extinction.",
            bullets: [
              "Audit des moyens de secours existants",
              "Étude du plan d'évacuation de votre site",
              "Adaptation aux types d'extincteurs en place (eau, CO₂, poudre)",
              "Prise en compte des spécificités ICPE ou ERP",
            ],
          },
          {
            title: "Calibrée à votre effectif et type d'établissement",
            description:
              "Les besoins ne sont pas les mêmes selon que vous formez 5 salariés ou 200, dans un bureau ou un établissement recevant du public. Alertis dimensionne ses formations selon la taille de vos équipes, la configuration de vos locaux et vos obligations réglementaires.",
            bullets: [
              "Entreprises, collectivités, crèches, EHPAD",
              "Immeubles de grande hauteur (IGH)",
              "Sites ICPE et établissements recevant du public",
              "Effectifs limités, calibrés selon le format de la formation",
            ],
          },
        ]}
      />
    </PageShell>
  );
}
