import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getLiveFormationsByCategory } from "@/lib/formations-live";

export const revalidate = 3600;

export const metadata = {
  title:
    "Safety Day en entreprise : journée sécurité ludique et sur-mesure",
  description:
    "Organisez une journée Safety Day dans votre entreprise : ateliers extincteur sur feu réel, réalité virtuelle, secourisme, gestes et postures, défibrillateur. De 30 à 500 participants, partout en France.",
  alternates: { canonical: "/formations-safety-day" },
  openGraph: {
    title: "Safety Day — Journée Sécurité en entreprise",
    url: "/formations-safety-day",
    type: "website",
  },
};

export default async function SafetyDayPage() {
  const items = await getLiveFormationsByCategory("safety-day");
  return (
    <PageShell
      title="Safety Day — Journée Sécurité"
      subtitle="Faites vivre la prévention autrement avec une journée dédiée à la sécurité en entreprise. Le Safety Day Alertis combine ateliers interactifs et mises en situation concrètes pour sensibiliser vos équipes — une expérience collective qui renforce les réflexes, la cohésion et l'engagement."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "Safety Day" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: "Safety Day", href: "/formations-safety-day" },
        ]}
      />
      <ItemListJsonLd
        name="Ateliers Safety Day — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      <FormationsList
        category="safety-day"
        title="Nos ateliers Safety Day"
        subtitle="9 ateliers thématiques modulaires : incendie, secourisme, gestes et postures, défibrillateur, hémorragie, risques routiers. Composez votre journée sur mesure."
      />
      <FormationCategoryContent
        approaches={[
          {
            title: "Une journée modulaire et sur-mesure",
            description:
              "Construisez votre Safety Day en assemblant les ateliers les plus pertinents pour vos équipes. Format court (4h), demi-journée ou journée complète, chez vous ou dans un lieu dédié.",
            bullets: [
              "De 30 à 500 participants par session",
              "Format inter-équipes ou inter-services",
              "Atmosphère ludique et bienveillante",
              "Animation par nos formateurs experts",
            ],
          },
          {
            title: "Nos ateliers immersifs",
            description:
              "Urgences médicales, incidents en milieu professionnel ou comportements à adopter : chaque atelier propose un format court et immersif mêlant cas concrets, mises en pratique et échanges participatifs.",
            bullets: [
              "Bac à feu écologique — manipulation d'extincteurs",
              "Simulation incendie en réalité virtuelle",
              "Atelier secourisme & gestes qui sauvent",
              "Atelier gestes et postures",
              "Initiation aux risques électriques",
              "Quiz interactif et challenges collectifs",
            ],
          },
          {
            title: "Un événement fédérateur autour de la sécurité",
            description:
              "Au-delà de la sensibilisation, le Safety Day ancre une culture de prévention durable dans votre organisation. Un moment fort de cohésion qui valorise l'engagement de vos équipes pour la sécurité au quotidien.",
            bullets: [
              "Brief amont avec vos référents sécurité",
              "Animation tournante par ateliers",
              "Photos et debrief en fin de journée",
              "Bilan détaillé et recommandations post-événement",
            ],
          },
        ]}
        ctaTitle="Organiser un Safety Day"
        ctaDescription="Parlons de votre événement : nombre de participants, lieu, ateliers souhaités. Devis sur-mesure sous 48h."
      />
    </PageShell>
  );
}
