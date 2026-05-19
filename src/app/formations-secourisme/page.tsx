import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getFormationsByCategory } from "@/lib/formations-data";

export const metadata = {
  title:
    "Formation SST, MAC SST, PSC, défibrillateur : secourisme en entreprise",
  description:
    "Formation Sauveteur Secouriste du Travail (SST), MAC SST, PSC, défibrillateur (DAE), gestes qui sauvent. Certifications INRS, sessions intra et inter-entreprises partout en France.",
  alternates: { canonical: "/formations-secourisme" },
  openGraph: {
    title: "Formations Secourisme — SST, MAC SST, PSC, DAE",
    url: "/formations-secourisme",
    type: "website",
  },
};

export default function SecourismePage() {
  const items = getFormationsByCategory("secourisme");
  return (
    <PageShell
      title="Formations Secourisme"
      subtitle="Préparez vos équipes à intervenir efficacement face à une situation d'urgence. Apports théoriques et exercices pratiques pour apprendre à protéger, alerter et porter secours en toute sécurité."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "Secourisme" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: "Secourisme", href: "/formations-secourisme" },
        ]}
      />
      <ItemListJsonLd
        name="Formations Secourisme — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      <FormationsList
        category="secourisme"
        title="Nos formations en secourisme"
        subtitle="SST initial et recyclage, formateurs SST, PSC, défibrillateur, gestes qui sauvent, oxygénothérapie… Découvrez l'ensemble du catalogue secourisme."
      />
      <FormationCategoryContent
        approaches={[
          {
            title: "Formations aux premiers secours",
            description:
              "Gestes d'urgence, mises en situation ou cas concrets en milieu professionnel : chaque entreprise a ses besoins. Alertis propose plusieurs formats combinant apports théoriques, exercices pratiques et scénarios adaptés au terrain.",
            bullets: [
              "SST (Sauveteur Secouriste du Travail), certification INRS",
              "MAC SST (recyclage), tous les 24 mois",
              "Gestes qui sauvent, sensibilisation grand public",
              "Initiation à l'utilisation du défibrillateur (DAE)…",
            ],
          },
          {
            title: "Sensibilisation grand public et secours citoyen",
            description:
              "Au-delà des certifications professionnelles, nous formons aussi vos collaborateurs aux gestes qui sauvent et au PSC — des compétences citoyennes qui font la différence en cas d'urgence, dans l'entreprise comme à l'extérieur.",
            bullets: [
              "PSC — Prévention et Secours Civiques",
              "GQS — Gestes Qui Sauvent",
              "Initiation au défibrillateur (DAE)",
              "Oxygénothérapie d'urgence…",
            ],
          },
          {
            title: "Formations de formateur SST",
            description:
              "Former, c'est transmettre plus que des gestes : c'est ancrer une culture de prévention. Notre programme structuré accompagne vos futurs formateurs SST sur la pédagogie active, l'animation de groupe et la maîtrise des référentiels INRS.",
            bullets: [
              "Programme axé pédagogie active et animation",
              "Maîtrise des référentiels INRS",
              "Validation par certification de formateur",
              "Maintien et actualisation des compétences inclus",
            ],
          },
        ]}
      />
    </PageShell>
  );
}
