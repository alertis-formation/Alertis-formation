import Link from "next/link";
import {
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  CalendarDays,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { QualiopiSection } from "@/components/sections/qualiopi-section";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Indicateurs de résultats — Qualité de nos formations",
  description:
    "Taux de satisfaction, taux de réussite, taux d'abandon : les indicateurs de résultats publics d'Alertis Formation, organisme certifié Qualiopi, sur les 12 derniers mois.",
  alternates: { canonical: "/indicateurs-de-resultats" },
  openGraph: {
    title: "Indicateurs de résultats — Qualité de nos formations",
    url: "/indicateurs-de-resultats",
    type: "website",
  },
};

const period = "01/01/2025 — 31/12/2025 (12 mois glissants)";
const lastUpdate = "31/12/2025";

const headlineStats = [
  {
    icon: Users,
    value: "3 082",
    label: "Stagiaires formés",
    sub: "Nombre de stagiaires formés sur la période, toutes formations confondues.",
  },
  {
    icon: Award,
    value: "402",
    label: "Stagiaires SST tous niveaux",
    sub: "Stagiaires Sauveteur Secouriste du Travail, formation initiale et recyclage (MAC).",
  },
  {
    icon: CalendarDays,
    value: "391",
    label: "Stages réalisés",
    sub: "Sessions de formation réalisées sur la période, en intra comme en inter-entreprises.",
  },
  {
    icon: TrendingUp,
    value: "9,4",
    suffix: "/10",
    label: "Satisfaction à chaud",
    sub: "Note moyenne issue des évaluations à chaud remplies par les apprenants en fin de session.",
  },
];

const methodology = [
  {
    icon: CheckCircle2,
    title: "Évaluation à chaud",
    description:
      "Questionnaire individuel anonyme rempli à la fin de chaque session : note globale, qualité du formateur, supports, pertinence des contenus, conditions d'accueil.",
  },
  {
    icon: Users,
    title: "Retours des parties prenantes",
    description:
      "Échanges structurés avec les employeurs et financeurs (OPCO, entreprises) à l'issue des sessions intra et inter, pour mesurer la satisfaction côté commanditaire.",
  },
  {
    icon: TrendingUp,
    title: "Analyse et amélioration continue",
    description:
      "Revue trimestrielle des indicateurs en réunion pédagogique. Tout écart négatif déclenche un plan d'action documenté : revue de support, formation formateur, ajustement du programme.",
  },
];

export default function IndicateursPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Indicateurs de résultats", href: "/indicateurs-de-resultats" },
        ]}
      />
      <PageShell
      title="Nos indicateurs de résultats"
      subtitle="Publication transparente de la satisfaction, de la réussite et des volumes de nos formations sur les 12 derniers mois."
      breadcrumbs={[{ label: "Indicateurs de résultats" }]}
    >
      {/* Header strip */}
      <section className="bg-[color:var(--brand-charcoal)] text-white py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ul className="grid gap-4 sm:grid-cols-3 text-sm">
            <li className="flex items-start gap-3">
              <CalendarDays className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Période
                </div>
                <div className="text-white font-semibold">{period}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Dernière mise à jour
                </div>
                <div className="text-white font-semibold">{lastUpdate}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Démarche
                </div>
                <div className="text-white font-semibold">
                  Certifié Qualiopi n° {siteConfig.qualiopi.certificateNumber}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Headline stats */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Vue d&apos;ensemble</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Quatre indicateurs{" "}
              <span className="text-[color:var(--brand-red)]">clés</span>.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {headlineStats.map(({ icon: Icon, value, suffix, label, sub }) => {
              const isTodo = value === "TODO";
              return (
                <div
                  key={label}
                  className={
                    isTodo
                      ? "bg-yellow-50 border-2 border-dashed border-yellow-500 rounded-sm p-6"
                      : "bg-[color:var(--brand-cream)]/40 border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
                  }
                >
                  <Icon
                    className={
                      isTodo
                        ? "size-6 text-yellow-600 mb-5"
                        : "size-6 text-[color:var(--brand-red)] mb-5"
                    }
                  />
                  <div className="flex items-start gap-1 leading-none mb-5">
                    <span
                      className={
                        isTodo
                          ? "text-3xl font-black tracking-tight text-yellow-700 leading-[0.9]"
                          : "text-5xl font-black tracking-[-0.03em] text-[color:var(--brand-charcoal)] leading-[0.9]"
                      }
                    >
                      {value}
                    </span>
                    {suffix && !isTodo && (
                      <span className="text-2xl font-black tracking-tight text-[color:var(--brand-red)] leading-[0.9] mt-1">
                        {suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-charcoal)] mb-2">
                    {label}
                  </div>
                  <p className="text-xs text-[color:var(--brand-gray-medium)] leading-relaxed">
                    {sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Qualiopi */}
      <QualiopiSection />

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Notre méthode</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Comment ces chiffres sont{" "}
              <span className="text-[color:var(--brand-red)]">collectés</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {methodology.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[color:var(--brand-cream)]/40 border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
              >
                <Icon className="size-7 text-[color:var(--brand-red)] mb-4" />
                <h3 className="text-lg text-[color:var(--brand-charcoal)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-white text-[color:var(--brand-red)] mb-6">
            <ShieldCheck className="size-7" />
          </div>
          <h2 className="text-[color:var(--brand-charcoal)] mb-4">
            Besoin du détail complet&nbsp;?
          </h2>
          <p className="text-[color:var(--brand-gray-medium)] leading-relaxed mb-8">
            Nous tenons à disposition de tout financeur (OPCO, entreprise
            cliente, France Travail, individuel) l&apos;extrait détaillé de nos
            indicateurs de résultats par session et par formation. Notre
            référent pédagogique vous transmet ces éléments sur simple demande.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
            >
              Demander le détail
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/veille-reglementaire"
              className="inline-flex items-center justify-center rounded-lg border border-border text-[color:var(--brand-gray)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Notre veille réglementaire
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
    </>
  );
}
