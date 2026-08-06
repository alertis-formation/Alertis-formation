import { PageShell } from "@/components/site/page-shell";
import { FormationCategoryContent } from "@/components/sections/formation-category-content";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { RelatedArticles } from "@/components/sections/related-articles";
import { getArticlesByCategory } from "@/lib/articles";
import { getLiveFormationsByCategory } from "@/lib/formations-live";

export const revalidate = 3600;

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

export default async function SecourismePage() {
  const items = await getLiveFormationsByCategory("secourisme");
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
              "PSC — Premier Secours Citoyen",
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
        furtherReading={{
          label:
            "La formation SST est-elle obligatoire ? Ce que dit le Code du travail",
          href: "/formation-sst-obligatoire-code-du-travail",
        }}
      />
      {/* Nous formons a l'usage du defibrillateur, nous n'en vendons pas et
          nous n'entretenons pas les vôtres. Un stagiaire qui repart en sachant
          s'en servir demande souvent où en trouver un, ou qui s'occupe de
          celui qui dort dans le hall depuis quatre ans : autant lui dire. */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-3xl space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <h2 className="text-[color:var(--brand-charcoal)]">
              Former, oui. Encore faut-il que l&apos;appareil{" "}
              <span className="text-[color:var(--brand-red)]">fonctionne</span>.
            </h2>
            <p className="text-lg">
              Un défibrillateur signale ses pannes électroniques tout seul, mais jamais la
              date de péremption de ses électrodes : il continue de clignoter au vert avec
              des consommables périmés depuis des mois. La formation ne sert à rien si
              l&apos;appareil refuse le choc le jour venu.
            </p>
            <p>
              Ce n&apos;est pas notre métier, c&apos;est celui de{" "}
              <a
                href="https://www.entretien-maintenance-defibrillateur.fr"
                target="_blank"
                rel="noopener"
                className="font-semibold text-[color:var(--brand-charcoal)] underline underline-offset-4"
              >
                MaintenanceDAE
              </a>
              , qui contrôle les dates et mesure l&apos;énergie réellement délivrée au choc.
              Pour équiper un site qui n&apos;a pas encore d&apos;appareil, ou remplacer des
              électrodes,{" "}
              <a
                href="https://www.ventedefibrillateur.fr"
                target="_blank"
                rel="noopener"
                className="font-semibold text-[color:var(--brand-charcoal)] underline underline-offset-4"
              >
                VenteDéfibrillateur
              </a>{" "}
              tient le catalogue.
            </p>
          </div>
        </div>
      </section>

      <RelatedArticles
        title="Nos articles sur le secourisme"
        subtitle="SST, gestes qui sauvent, premiers secours : les conseils de nos formateurs."
        articles={getArticlesByCategory(["Secourisme", "SST"])}
      />
    </PageShell>
  );
}
