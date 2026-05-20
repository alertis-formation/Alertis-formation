import Link from "next/link";
import { CheckCircle2, Heart, Stethoscope, RefreshCw, MapPin, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { FormationsList } from "@/components/sections/formations-list";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import { getFormationsByCategory } from "@/lib/formations-data";
import { getApiIdForSlug } from "@/lib/alertis-api-mapping";
import { getFormationById } from "@/lib/alertis-api";

export const revalidate = 3600;

const levelsConfig = [
  {
    icon: Heart,
    title: "AFGSU niveau 1",
    audience: "Professionnels non médicaux",
    slug: "formation-afgsu1",
    fallbackDuration: "14 heures · 2 jours",
    description:
      "Destinée à tout personnel non soignant exerçant en établissement de santé. Initiation aux gestes de premiers secours, gestion des urgences collectives et risques sanitaires majeurs.",
  },
  {
    icon: Stethoscope,
    title: "AFGSU niveau 2",
    audience: "Soignants et professionnels de santé",
    slug: "formation-afgsu2",
    fallbackDuration: "21 heures · 3 jours",
    description:
      "Obligatoire pour les soignants. Approfondit la prise en charge des détresses vitales, l'utilisation du matériel d'urgence et la coordination interprofessionnelle.",
  },
  {
    icon: RefreshCw,
    title: "Remise à niveau AFGSU",
    audience: "Réactualisation des compétences",
    slug: "formation-recyclage-afgsu1",
    fallbackDuration: "7 heures · 1 jour",
    description:
      "Pour maintenir à jour vos réflexes et connaissances tous les 4 ans, niveau 1 ou niveau 2. Mises à jour des recommandations et exercices pratiques.",
  },
];

function formatApiDuration(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const match = raw.match(/^(\d+)H(\d{2})?$/i);
  if (!match) return raw;
  const hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const hoursLabel = minutes > 0 ? `${hours}h${match[2]}` : `${hours} heures`;
  let days: number;
  if (hours > 21) days = 4;
  else if (hours > 14) days = 3;
  else if (hours > 7) days = 2;
  else days = 1;
  return `${hoursLabel} · ${days} jour${days > 1 ? "s" : ""}`;
}

const objectives = [
  "Intervenir de manière adaptée et coordonnée face à l'urgence",
  "Acquérir les réflexes face à une urgence vitale ou potentielle",
  "Maîtriser les gestes techniques et la procédure d'alerte",
  "Connaître les protocoles d'hygiène et de protection",
  "Travailler en coordination avec les services d'urgence",
];

export const metadata = {
  title:
    "Formation AFGSU 1, AFGSU 2, remise à niveau : gestes et soins d'urgence",
  description:
    "Formation AFGSU pour professionnels de santé : niveau 1 (personnels non soignants), niveau 2 (soignants), remise à niveau tous les 4 ans. Conforme à l'arrêté du 1er juillet 2019, sessions partout en France.",
  alternates: { canonical: "/nos-formations-afgsu" },
  openGraph: {
    title: "Formations AFGSU 1, 2 et remise à niveau — Alertis",
    url: "/nos-formations-afgsu",
    type: "website",
  },
};

export default async function AfgsuPage() {
  const items = getFormationsByCategory("afgsu");

  const levels = await Promise.all(
    levelsConfig.map(async (lvl) => {
      const apiId = getApiIdForSlug(lvl.slug);
      const apiData = apiId ? await getFormationById(apiId) : null;
      const apiDuration = formatApiDuration(apiData?.duree);
      return {
        icon: lvl.icon,
        title: lvl.title,
        audience: lvl.audience,
        duration: apiDuration ?? lvl.fallbackDuration,
        description: lvl.description,
      };
    })
  );

  return (
    <PageShell
      title="Formations AFGSU"
      subtitle="Devenez acteur de l'urgence en milieu de soins. Nos formations AFGSU (Attestation de Formation aux Gestes et Soins d'Urgence) couvrent tous les niveaux pour les professionnels de santé, conformément à l'arrêté du 30 décembre 2014."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "AFGSU" },
      ]}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: "AFGSU", href: "/nos-formations-afgsu" },
        ]}
      />
      <ItemListJsonLd
        name="Formations AFGSU — Alertis"
        items={items.map((f) => ({
          name: f.title,
          url: `/formations/${f.slug}`,
        }))}
      />
      {/* Niveaux */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--brand-red)] mb-3">
              Les trois niveaux
            </p>
            <h2 className="text-[color:var(--brand-gray)]">
              Une formation adaptée à votre rôle en établissement de santé
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {levels.map(({ icon: Icon, title, audience, duration, description }) => (
              <div
                key={title}
                className="flex flex-col rounded-xl bg-[color:var(--brand-cream)] p-6 ring-1 ring-border"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-lg bg-[color:var(--brand-red)] text-white mb-5">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--brand-gray)]">
                  {title}
                </h3>
                <div className="mt-2 text-sm text-[color:var(--brand-red)] font-medium">
                  {audience}
                </div>
                <div className="mt-1 text-sm text-[color:var(--brand-gray-medium)]">
                  {duration}
                </div>
                <p className="mt-4 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed flex-1">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--brand-red)] mb-3">
              Objectifs de la formation
            </p>
            <h2 className="text-[color:var(--brand-gray)] mb-5">
              Devenir un maillon clé de la chaîne de secours.
            </h2>
            <p className="text-[color:var(--brand-gray-medium)] leading-relaxed">
              Dispensées par des formateurs expérimentés issus du monde
              médical, nos formations AFGSU sont proposées en présentiel
              dans toute la France, en intra ou inter-entreprise.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--brand-gray)]">
              <MapPin className="size-4 text-[color:var(--brand-red)]" />
              <span className="font-medium">
                Sessions dans toute la France
              </span>
            </div>
            <div className="mt-6">
              <Link
                href="/formation-afgsu-obligatoire-niveaux-1-2"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:underline underline-offset-4"
              >
                <span>À lire : la formation AFGSU est-elle obligatoire ?</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <ul className="space-y-3 rounded-xl bg-white p-6 ring-1 ring-border">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-sm text-[color:var(--brand-gray)]">
                <CheckCircle2 className="size-5 text-[color:var(--brand-red)] shrink-0 mt-0.5" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FormationsList
        category="afgsu"
        title="Nos sessions AFGSU disponibles"
        subtitle="Initial, remise à niveau, niveaux 1 et 2 : choisissez la session qui correspond à votre profil."
      />

      {/* CTA */}
      <section className="py-12 bg-[color:var(--brand-slate)] text-white">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl md:text-3xl mb-2">
              Inscrire vos équipes à une formation AFGSU
            </h2>
            <p className="text-white/80 text-sm">
              Formulaire dédié AFGSU avec financement (FIFPL accepté).
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="uppercase tracking-wider font-semibold shrink-0"
            render={
              <Link href="/contact-formation-afgsu">
                <span>Demander un devis AFGSU</span>
                <ArrowRight />
              </Link>
            }
          />
        </div>
      </section>
    </PageShell>
  );
}
