import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { DragScroller } from "@/components/ui/drag-scroller";
import { linkifyLegalRefs } from "@/lib/legal-refs";
import { formationCategories, siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/json-ld";
import {
  formationEntries,
  getFormationsByCategory,
  type FormationCategory,
} from "@/lib/formations-data";

type CategoryRow = {
  key: FormationCategory;
  label: string;
  href: string;
  description: string;
};

const categoryRows: CategoryRow[] = [
  ...formationCategories.map((c) => {
    const map: Record<string, FormationCategory> = {
      "/formations-securite-incendie": "securite-incendie",
      "/formations-secourisme": "secourisme",
      "/formations-habilitation-electrique": "habilitation-electrique",
      "/formations-ergonomie": "ergonomie",
      "/formations-prevention": "prevention",
      "/formations-safety-day": "safety-day",
    };
    return {
      key: map[c.href]!,
      label: c.label,
      href: c.href,
      description: c.description ?? "",
    };
  }),
  {
    key: "afgsu",
    label: "AFGSU",
    href: "/nos-formations-afgsu",
    description:
      "Attestation de Formation aux Gestes et Soins d'Urgence pour les professionnels de santé. Niveaux 1, 2 et recyclage.",
  },
];

export const metadata = {
  title: "Toutes nos formations santé & sécurité au travail",
  description: `Catalogue complet Alertis : Sécurité Incendie, Secourisme, Habilitation électrique, Ergonomie, Prévention, Safety Day, AFGSU. ${formationEntries.length} formations conformes au Code du travail.`,
  alternates: { canonical: "/formations" },
};

export default function FormationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
        ]}
      />
      <ItemListJsonLd
        name="Catalogue des formations Alertis"
        items={formationEntries.map((f) => ({
          name: f.title,
          url: `${siteConfig.url}/formations/${f.slug}`,
        }))}
      />
      <PageShell
        title="Toutes nos formations"
        subtitle={`Sept domaines, ${formationEntries.length} formations conformes au Code du travail pour outiller vos équipes face aux risques quotidiens — incendie, secourisme, électrique, ergonomie.`}
        breadcrumbs={[{ label: "Formations" }]}
      >
        {/* Intro editorial block */}
        <section className="bg-white border-b border-[color:var(--brand-gray-medium)]/15">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-16 grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow">Catalogue 2026</span>
              <h2 className="text-2xl md:text-3xl leading-tight text-[color:var(--brand-charcoal)]">
                Un catalogue pensé pour{" "}
                <span className="text-[color:var(--brand-red)]">
                  l&apos;efficacité terrain
                </span>
                , pas pour cocher des cases.
              </h2>
              <p className="text-[color:var(--brand-gray-medium)] leading-relaxed text-base md:text-lg">
                Chaque formation est conçue pour répondre à une{" "}
                <strong className="text-[color:var(--brand-charcoal)]">
                  obligation précise du Code du travail
                </strong>{" "}
                ou à un risque concret rencontré sur le terrain. Nos formateurs
                — tous diplômés et habilités dans leur spécialité (sapeurs-pompiers
                SSIAP, soignants urgentistes formateurs AFGSU, formateurs SST
                INRS, électriciens habilités, formateurs PRAP INRS,
                ergonomes…) — adaptent les contenus à votre secteur, votre
                matériel et vos contraintes.
              </p>
              <p className="text-[color:var(--brand-gray-medium)] leading-relaxed">
                Sessions en{" "}
                <strong className="text-[color:var(--brand-charcoal)]">
                  intra-entreprise
                </strong>{" "}
                (chez vous, avec vos équipements) ou en{" "}
                <strong className="text-[color:var(--brand-charcoal)]">
                  inter-entreprises
                </strong>{" "}
                dans nos centres. Intervention partout en France
                métropolitaine, devis sous 24h.
              </p>
            </div>

            {/* Editorial commitments list */}
            <ul className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[color:var(--brand-gray-medium)]/20 space-y-6 lg:self-center">
              {[
                {
                  title: "Formateurs diplômés issus du terrain",
                  body: "Sapeurs-pompiers SSIAP, soignants urgentistes formateurs AFGSU, formateurs SST INRS, électriciens habilités, formateurs PRAP INRS — chacun diplômé et habilité dans son domaine d'expertise.",
                },
                {
                  title: "Conforme Code du travail",
                  body: "Programmes calés sur les obligations réelles : R4224-15, R4227-28, NF C18-510, arrêté du 1er juillet 2019.",
                },
                {
                  title: "Intra ou inter-entreprises",
                  body: "Chez vous, avec votre matériel et vos consignes — ou en sessions inter dans nos centres.",
                },
                {
                  title: "Devis instantané",
                  body: "Formulaire en ligne, retour immédiat. Devis détaillé sous 24h ouvrées.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand-red)]"
                  />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.15em] text-[color:var(--brand-charcoal)] mb-1">
                      {item.title}
                    </div>
                    <p className="text-sm text-[color:var(--brand-gray-medium)] leading-relaxed">
                      {linkifyLegalRefs(item.body)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="bg-white">
          {categoryRows.map((row, idx) => {
            const items = getFormationsByCategory(row.key);
            if (items.length === 0) return null;

            return (
              <section
                key={row.key}
                className={`py-12 lg:py-16 ${
                  idx % 2 === 1 ? "bg-[color:var(--brand-cream)]" : "bg-white"
                }`}
                aria-labelledby={`cat-${row.key}`}
              >
                <div className="mx-auto max-w-7xl">
                  {/* Row header */}
                  <div className="px-6 lg:px-10 mb-6 flex items-end justify-between gap-6">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-red)] tabular-nums">
                          {String(items.length).padStart(2, "0")} formation
                          {items.length > 1 ? "s" : ""}
                        </span>
                      </div>
                      <h2
                        id={`cat-${row.key}`}
                        className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl lg:text-4xl leading-tight"
                      >
                        {row.label}
                      </h2>
                      {row.description && (
                        <p className="mt-2 text-sm md:text-base text-[color:var(--brand-gray-medium)] max-w-2xl leading-relaxed">
                          {row.description}
                        </p>
                      )}
                    </div>
                    <Link
                      href={row.href}
                      className="hidden md:inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:gap-3 transition-all whitespace-nowrap"
                    >
                      <span>Voir la catégorie</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>

                  {/* Horizontal scroll row */}
                  <DragScroller className="pb-3">
                    <ul
                      className="flex gap-4 px-6 lg:px-10 w-max"
                      role="list"
                    >
                      {items.map((f) => (
                        <li
                          key={f.slug}
                          className="shrink-0 w-[260px] sm:w-[300px]"
                        >
                          <Link
                            href={`/formations/${f.slug}`}
                            className="group flex h-full flex-col overflow-hidden rounded-sm bg-white ring-1 ring-[color:var(--brand-gray-medium)]/15 hover:ring-[color:var(--brand-red)] hover:shadow-lg transition-all"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--brand-slate)]">
                              {f.image && (
                                <Image
                                  src={f.image}
                                  alt={`${f.title} — formation ${row.label.toLowerCase()} Alertis`}
                                  fill
                                  sizes="300px"
                                  draggable={false}
                                  className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                                />
                              )}
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                              <h3 className="text-sm font-semibold text-[color:var(--brand-charcoal)] leading-snug line-clamp-3 group-hover:text-[color:var(--brand-red)] transition-colors">
                                {f.title}
                              </h3>
                              <div className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--brand-red)]">
                                <span>Voir la formation</span>
                                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}

                      {/* Tail card → link to full category page */}
                      <li className="shrink-0 w-[260px] sm:w-[300px]">
                        <Link
                          href={row.href}
                          className="group flex h-full flex-col items-center justify-center gap-3 rounded-sm bg-[color:var(--brand-slate)] text-white p-6 hover:bg-[color:var(--brand-red)] transition-colors"
                        >
                          <span className="text-3xl font-mono font-bold leading-none">
                            →
                          </span>
                          <span className="text-sm font-semibold text-center">
                            Toute la catégorie
                            <br />
                            <span className="text-white/80">{row.label}</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </DragScroller>

                  {/* Mobile "voir tout" link */}
                  <div className="px-6 mt-4 md:hidden">
                    <Link
                      href={row.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)]"
                    >
                      <span>Voir la catégorie {row.label}</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}

          <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <p className="text-sm text-[color:var(--brand-gray-medium)] italic flex items-center gap-2 max-w-2xl">
                <span className="size-1 rounded-full bg-[color:var(--brand-red)]" />
                Programmes conformes au Code du travail et aux recommandations
                INRS. Démarche d&apos;amélioration continue.
              </p>
            </div>
          </section>
        </div>
      </PageShell>
    </>
  );
}
