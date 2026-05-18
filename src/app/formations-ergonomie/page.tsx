import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getFormationsByCategory } from "@/lib/formations-data";

export const metadata = {
  title:
    "Formation gestes et postures, PRAP IBC & 2S : prévention TMS en entreprise",
  description:
    "Formation ergonomie au travail : gestes et postures, PRAP IBC (industrie, BTP, tertiaire), PRAP 2S (sanitaire et social), prévention des TMS. Certification INRS, sessions intra et inter-entreprises.",
  alternates: { canonical: "/formations-ergonomie" },
  openGraph: {
    title: "Formations Ergonomie — Gestes et postures, PRAP, TMS",
    url: "/formations-ergonomie",
    type: "website",
  },
};

export default function ErgonomiePage() {
  const items = getFormationsByCategory("ergonomie");
  return (
    <PageShell
      title="Formations Ergonomie"
      subtitle="Préservez la santé de vos équipes en réduisant les risques liés aux postures et aux gestes du quotidien. Nos formations préviennent les douleurs, limitent les troubles musculo-squelettiques et réduisent les arrêts de travail."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "Ergonomie" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: "Ergonomie", href: "/formations-ergonomie" },
        ]}
      />
      <ItemListJsonLd
        name="Formations Ergonomie — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      <FormationsList
        category="ergonomie"
        title="Nos formations en ergonomie"
        subtitle="Gestes et postures par secteur, PRAP IBC et 2S, prévention TMS, formation de formateur : tout le catalogue ergonomie."
      />
      <FormationCategoryContent
        approaches={[
          {
            title: "Gestes et postures selon votre choix pédagogique",
            description:
              "Théorie ciblée, mises en situation ou cas concrets en milieu professionnel : chaque entreprise a ses besoins. En mêlant pratique et théorie, vos équipes acquièrent des réflexes durables et applicables immédiatement.",
            bullets: [
              "Analyse de poste sur site",
              "Démonstrations et exercices pratiques",
              "Étirements et échauffements adaptés",
              "Auto-évaluation des risques au quotidien",
            ],
          },
          {
            title: "Adaptées à votre secteur d'activité",
            description:
              "Contraintes physiques, environnements variés ou efforts spécifiques : chaque secteur présente ses propres risques. Nos formations gestes et postures sont adaptées à votre métier et à vos conditions de travail.",
            bullets: [
              "Bureautique et travail sur écran",
              "Logistique, manutention, port de charges",
              "Industrie et postes techniques",
              "Santé, social et aide à la personne",
            ],
          },
          {
            title: "Formation de formateur PRAP",
            description:
              "Former, c'est transmettre bien plus que des mouvements : c'est diffuser une culture de prévention durable. Notre programme structuré centre la formation sur la pédagogie active et les principes d'ergonomie pour vos référents internes.",
            bullets: [
              "PRAP IBC (Industrie, Bâtiment, Commerce)",
              "PRAP 2S (Sanitaire et social)",
              "Certification INRS reconnue",
              "Maintien et actualisation des compétences",
            ],
          },
        ]}
      />
    </PageShell>
  );
}
