import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getFormationsByCategory } from "@/lib/formations-data";

export const metadata = {
  title:
    "Formation habilitation électrique B0, BS, BR, BC, H0 : initial & recyclage",
  description:
    "Formation habilitation électrique selon la norme NF C18-510 : B0, BS, BE Manœuvre, BR, BC, H0, H1, H2, BP photovoltaïque. Initial et recyclage tous les 3 ans, intra ou inter-entreprise.",
  alternates: { canonical: "/formations-habilitation-electrique" },
  openGraph: {
    title: "Formations Habilitation électrique — B0, BS, BR, BC, H0",
    url: "/formations-habilitation-electrique",
    type: "website",
  },
};

export default function HabilitationElectriquePage() {
  const items = getFormationsByCategory("habilitation-electrique");
  return (
    <PageShell
      title="Formations Habilitation électrique"
      subtitle="Assurez la sécurité de vos équipes avec nos formations conformes au recueil NFC 18-510. Vos salariés sont préparés à intervenir en toute sécurité sur ou à proximité d'installations électriques."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "Habilitation électrique" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          {
            name: "Habilitation électrique",
            href: "/formations-habilitation-electrique",
          },
        ]}
      />
      <ItemListJsonLd
        name="Formations Habilitation électrique — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      <FormationsList
        category="habilitation-electrique"
        title="Nos formations en habilitation électrique"
        subtitle="Habilitations BT et HT, initiales et recyclages, formation de formateur : tout le catalogue conforme NFC 18-510."
      />
      <FormationCategoryContent
        approaches={[
          {
            title: "Habilitations pour non-électriciens",
            description:
              "Pour le personnel amené à intervenir en environnement électrique sans réaliser de travaux d'ordre électrique : opérations simples, manœuvres ou interventions de remplacement.",
            bullets: [
              "B0 / H0 / H0V — Exécutant non électricien (BT/HT)",
              "BS — Intervention de remplacement et raccordement",
              "BE Manœuvre — Opérations simples (réarmement, etc.)",
              "Recyclage tous les 3 ans recommandé",
            ],
          },
          {
            title: "Habilitations pour électriciens",
            description:
              "Pour les chargés de travaux et exécutants électriciens intervenant sur ou à proximité d'ouvrages électriques. Programme adapté au niveau de responsabilité et à l'environnement (BT/HT, avec ou sans tension).",
            bullets: [
              "B1 / B2 — Exécutant et chargé de travaux BT",
              "BR — Chargé d'interventions générales BT",
              "BC — Chargé de consignation",
              "H1 / H2 / HC — Équivalents haute tension",
            ],
          },
          {
            title: "Formation théorique et pratique",
            description:
              "Chaque session combine une partie théorique (dangers de l'électricité, méthodes de travail sûres, premiers secours en cas d'accident électrique) et une partie pratique sur plateforme pédagogique ou sur site, selon vos besoins.",
            bullets: [
              "Évaluation des connaissances en fin de formation",
              "Avis après formation pour délivrance du titre",
              "Recyclage périodique conforme à la NFC 18-510",
              "Sessions inter ou intra-entreprise",
            ],
          },
        ]}
        furtherReading={{
          label:
            "Recyclage de l'habilitation électrique : fréquence, obligation et organisation",
          href: "/recyclage-habilitation-electrique-frequence-obligation",
        }}
      />
    </PageShell>
  );
}
