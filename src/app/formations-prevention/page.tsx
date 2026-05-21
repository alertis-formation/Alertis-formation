import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getLiveFormationsByCategory } from "@/lib/formations-live";

export const revalidate = 3600;

export const metadata = {
  title:
    "Formation prévention des risques : CSE, DUERP, RPS, PSSM, HACCP",
  description:
    "Formations prévention des risques professionnels : membres CSE/CSSCT, Document Unique (DUERP), risques psychosociaux (RPS), PSSM, HACCP, travaux en hauteur, PPMS. Conformes au Code du travail.",
  alternates: { canonical: "/formations-prevention" },
  openGraph: {
    title: "Formations Prévention — CSE, DUERP, RPS, PSSM, HACCP",
    url: "/formations-prevention",
    type: "website",
  },
};

export default async function PreventionPage() {
  const items = await getLiveFormationsByCategory("prevention");
  return (
    <PageShell
      title="Formations Prévention des risques"
      subtitle="Améliorez les conditions de travail et réduisez les risques grâce à une démarche active de prévention. Nos formations soutiennent votre stratégie QHSE et répondent aux exigences réglementaires."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "Prévention" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: "Prévention", href: "/formations-prevention" },
        ]}
      />
      <ItemListJsonLd
        name="Formations Prévention des risques — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      <FormationsList
        category="prevention"
        title="Nos formations en prévention"
        subtitle="CSE / CHSCT, menace terroriste, HACCP, PPMS, travaux en hauteur, gestion des situations d'urgence en crèche : tout le catalogue prévention."
      />
      <FormationCategoryContent
        approaches={[
          {
            title: "Formations aux situations d'urgence",
            description:
              "Urgences médicales, incidents en milieu de travail ou réactions à adopter : chaque situation exige une préparation spécifique. Approche mêlant théorie, mises en situation réalistes et exercices pratiques.",
            bullets: [
              "Gestion d'une crise interne",
              "Protocole d'alerte et de communication",
              "Coordination avec les services de secours",
              "Mises en situation grandeur nature",
            ],
          },
          {
            title: "Prévention des risques professionnels",
            description:
              "Procédures internes, registres réglementaires ou organisation des consignes : chaque structure a ses exigences. Nos formations vous aident à structurer vos démarches, garantir la traçabilité et renforcer la conformité de votre organisation.",
            bullets: [
              "Rédaction du Document Unique d'Évaluation des Risques (DUERP)",
              "Formation des membres du CSE / CSSCT",
              "Prévention des risques psychosociaux (RPS)",
              "Formation PSSM — Premiers secours en santé mentale",
            ],
          },
          {
            title: "Risques sanitaires et hygiène",
            description:
              "Former, c'est transmettre plus que des règles d'hygiène : c'est ancrer une culture de prévention sanitaire. Programme structuré fondé sur les bonnes pratiques, l'analyse des risques et l'application des protocoles.",
            bullets: [
              "HACCP et hygiène en restauration collective",
              "Prévention du risque biologique",
              "Procédures en milieu médical et soignant",
              "Gestion des EPI et risques chimiques",
            ],
          },
        ]}
      />
    </PageShell>
  );
}
