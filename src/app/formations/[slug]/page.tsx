import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  FileText,
  Calendar,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import {
  formationEntries,
  formationEntriesBySlug,
  HIDDEN_FORMATION_SLUGS,
} from "@/lib/formations-data";
import { getLiveFormationsByCategory } from "@/lib/formations-live";
import {
  getFormationContent,
  DEFAULT_PEDAGOGIE,
  DEFAULT_VALIDATION,
} from "@/lib/formations-content";
import { linkifyLegalRefs } from "@/lib/legal-refs";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/seo/json-ld";
import { getApiIdForSlug } from "@/lib/alertis-api-mapping";
import {
  fetchFormation,
  getUpcomingSessionsForFormation,
} from "@/lib/alertis-api";
import {
  interpolateContent,
  interpolateList,
} from "@/lib/formation-content-interpolation";

export const dynamicParams = false;
// Revalidate API data every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  return formationEntries.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = formationEntriesBySlug[slug];
  if (!f) return {};
  return {
    title: f.title,
    description: f.excerpt,
    alternates: { canonical: `/formations/${slug}` },
    openGraph: {
      title: f.title,
      description: f.excerpt,
      url: `/formations/${slug}`,
      images: f.image ? [{ url: f.image }] : undefined,
    },
  };
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = formationEntriesBySlug[slug];
  if (!f) notFound();

  // Formations retirées du catalogue : redirection vers la catégorie parente.
  if (HIDDEN_FORMATION_SLUGS.has(slug)) {
    redirect(f.categoryHref);
  }

  // Live API data (server-side, cached 1h via fetch revalidate).
  // Une formation n'a de page que si elle est référencée dans le back-office :
  //  - slug non mappé à un ID API → page retirée
  //  - ID API absent (404)        → formation supprimée du back-office
  // Dans les deux cas on redirige vers la liste des formations. Une panne API
  // ("error") ne déclenche PAS la redirection : on garde la page avec le
  // contenu local de secours.
  const apiId = getApiIdForSlug(slug);
  if (!apiId) {
    redirect("/formations");
  }
  const apiLookup = await fetchFormation(apiId);
  if (apiLookup.status === "not-found") {
    redirect("/formations");
  }
  const apiData = apiLookup.status === "ok" ? apiLookup.formation : null;
  const sessions = apiData
    ? await getUpcomingSessionsForFormation(apiData.nom, 5)
    : [];

  // Related formations from the same category (excluding current),
  // filtered to those still live in the back-office.
  const related = (await getLiveFormationsByCategory(f.category))
    .filter((r) => r.slug !== f.slug)
    .slice(0, 3);

  // WordPress-imported descriptive content (cleaned)
  const content = getFormationContent(slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Formations", href: "/formations" },
          { name: f.categoryLabel, href: f.categoryHref },
          { name: f.title, href: `/formations/${slug}` },
        ]}
      />
      <CourseJsonLd
        name={f.title}
        description={f.excerpt}
        url={`/formations/${slug}`}
        audienceType={audienceForCategory(f.category)}
        image={f.image}
        priceEUR={parsePriceEUR(apiData?.tarifIntra)}
        duration={apiData?.duree ?? undefined}
        sessions={sessions.map((s) => ({
          location: `${s.ville}${s.departement ? ` (${s.departement})` : ""}`,
          startDate: s.dateDebut,
          endDate: s.dateFin,
          priceEUR: s.prixVente,
        }))}
      />
      <PageShell
        title={f.title}
        subtitle={f.excerpt}
        breadcrumbs={[
          { label: "Formations", href: "/formations" },
          { label: f.categoryLabel, href: f.categoryHref },
          { label: f.title },
        ]}
      >
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              {/* Featured image */}
              {f.image && (
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/15">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Key facts (from API if available) */}
              <div className="grid sm:grid-cols-3 gap-3">
                <KeyFact
                  icon={Clock}
                  label="Durée"
                  value={apiData?.duree ?? "Sur demande"}
                />
                <KeyFact
                  icon={Users}
                  label="Participants"
                  value={apiData?.nombreParticipants ?? "Sur demande"}
                />
                <KeyFact
                  icon={MapPin}
                  label="Format"
                  value={
                    apiData?.interDisponible
                      ? "Intra & inter-entreprises"
                      : "Intra-entreprise"
                  }
                />
              </div>

              {/* Programme PDF */}
              {apiData?.programmePdf && (
                <a
                  href={apiData.programmePdf.downloadUrl}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-4 rounded-sm border border-[color:var(--brand-gray-medium)]/15 bg-[color:var(--brand-cream)] p-5 hover:border-[color:var(--brand-red)]/40 hover:bg-white transition-all"
                >
                  <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-red)] text-white">
                    <FileText className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--brand-red)]">
                      Programme détaillé
                    </div>
                    <div className="text-sm font-semibold text-[color:var(--brand-charcoal)] mt-0.5">
                      Télécharger le PDF
                    </div>
                    <div className="text-xs text-[color:var(--brand-gray-medium)] mt-0.5">
                      {apiData.programmePdf.nom}
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] group-hover:translate-x-1 transition-all" />
                </a>
              )}

              {/* Upcoming inter-entreprise sessions */}
              {sessions.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[color:var(--brand-charcoal)] text-xl md:text-2xl flex items-center gap-2">
                      <Calendar className="size-5 text-[color:var(--brand-red)]" />
                      Prochaines sessions inter-entreprises
                    </h2>
                  </div>
                  <ul className="divide-y divide-[color:var(--brand-gray-medium)]/15 rounded-sm border border-[color:var(--brand-gray-medium)]/15 overflow-hidden">
                    {sessions.map((s) => (
                      <li
                        key={s.id}
                        className="flex items-center justify-between gap-4 p-4 hover:bg-[color:var(--brand-cream)] transition-colors"
                      >
                        <div>
                          <div className="text-sm font-bold text-[color:var(--brand-charcoal)]">
                            {formatDateRange(s.dateDebut, s.dateFin)}
                          </div>
                          <div className="text-xs text-[color:var(--brand-gray-medium)] mt-0.5">
                            {s.ville}
                            {s.departement && ` · ${s.departement}`}
                            {s.entreprise && ` · ${s.entreprise}`}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-bold text-[color:var(--brand-charcoal)]">
                            {formatPrice(s.prixVente)}
                          </div>
                          {typeof s.disponibilite === "number" && (
                            <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] mt-0.5">
                              {s.disponibilite > 0
                                ? `${s.disponibilite} place${s.disponibilite > 1 ? "s" : ""}`
                                : "Complet"}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Editorial content — intro, description, objectifs, programme, public, pedagogie, validation */}
              {content && (
                <div className="space-y-12">
                  {/* Intro paragraph — large editorial lead */}
                  <p className="text-lg md:text-xl leading-relaxed text-[color:var(--brand-charcoal)] border-l-2 border-[color:var(--brand-red)] pl-5">
                    {linkifyLegalRefs(interpolateContent(content.intro, apiData))}
                  </p>

                  {/* Description — contextual paragraph */}
                  {content.description && (
                    <div>
                      <SectionHeader number="01" title="Description" />
                      <p className="mt-6 leading-relaxed text-[color:var(--brand-gray)]">
                        {linkifyLegalRefs(interpolateContent(content.description, apiData))}
                      </p>
                    </div>
                  )}

                  {/* Objectifs */}
                  {content.objectifs.length > 0 && (
                    <FormationSection
                      number="02"
                      title="Objectifs pédagogiques"
                      items={interpolateList(content.objectifs, apiData)}
                    />
                  )}

                  {/* Programme */}
                  {content.programme.length > 0 && (
                    <FormationSection
                      number="03"
                      title="Programme"
                      items={interpolateList(content.programme, apiData)}
                    />
                  )}

                  {/* Public & Prérequis */}
                  {(content.publicConcerne || content.prerequis) && (
                    <div>
                      <SectionHeader number="04" title="Public & pré-requis" />
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {content.publicConcerne && (
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-red)] mb-2">
                              Public concerné
                            </div>
                            <p className="text-sm leading-relaxed text-[color:var(--brand-gray)]">
                              {linkifyLegalRefs(interpolateContent(content.publicConcerne, apiData))}
                            </p>
                          </div>
                        )}
                        {content.prerequis && (
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-red)] mb-2">
                              Pré-requis
                            </div>
                            <p className="text-sm leading-relaxed text-[color:var(--brand-gray)]">
                              {linkifyLegalRefs(interpolateContent(content.prerequis, apiData))}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Pédagogie & Validation */}
                  <div>
                    <SectionHeader number="05" title="Pédagogie & validation" />
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-red)] mb-2">
                          Méthode pédagogique
                        </div>
                        <p className="text-sm leading-relaxed text-[color:var(--brand-gray)]">
                          {linkifyLegalRefs(content.pedagogie ?? DEFAULT_PEDAGOGIE)}
                        </p>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-red)] mb-2">
                          Évaluation & attestation
                        </div>
                        <p className="text-sm leading-relaxed text-[color:var(--brand-gray)]">
                          {linkifyLegalRefs(content.validation ?? DEFAULT_VALIDATION)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Notes (durée, validité, etc.) */}
                  {content.notes && content.notes.length > 0 && (
                    <ul className="border-t border-[color:var(--brand-gray-medium)]/20 pt-6 space-y-2">
                      {content.notes.map((note, i) => (
                        <li
                          key={i}
                          className="text-xs text-[color:var(--brand-gray-medium)] flex items-start gap-2"
                        >
                          <span className="size-1 mt-2 rounded-full bg-[color:var(--brand-red)] shrink-0" />
                          <span>{linkifyLegalRefs(note)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Fallback notice when no API data AND no imported content */}
              {!apiData && !content && (
                <div className="rounded-sm bg-[color:var(--brand-cream)] p-5 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed border-l-4 border-[color:var(--brand-red)]">
                  Pour le programme détaillé, la durée exacte et un devis
                  personnalisé pour cette formation, contactez-nous via le
                  formulaire.
                </div>
              )}
            </div>

            {/* Sticky CTA card */}
            <aside className="lg:sticky lg:top-32 self-start">
              <div className="rounded-sm bg-[color:var(--brand-slate)] text-white p-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--brand-mint)] mb-2 inline-flex items-center gap-2">
                    <Tag className="size-3" />
                    {f.categoryLabel}
                  </p>
                  <h3 className="text-2xl text-white">
                    Cette formation vous intéresse&nbsp;?
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Devis sous 24h, intervention partout en France, sessions
                    inter ou intra-entreprise.
                  </p>
                </div>

                {apiData?.tarifIntra && (
                  <div className="rounded-sm bg-white/5 ring-1 ring-white/10 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-mint)] font-bold">
                      À partir de
                    </div>
                    <div className="mt-1 text-3xl font-black text-white leading-none">
                      {apiData.tarifIntra}
                    </div>
                    <div className="text-xs text-white/55 mt-1">
                      Tarif indicatif intra-entreprise
                    </div>
                  </div>
                )}

                {apiData?.interDisponible && (
                  <div className="inline-flex items-center gap-2 text-xs text-[color:var(--brand-mint)] font-semibold">
                    <CheckCircle2 className="size-4" />
                    Disponible en inter-entreprises
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="uppercase tracking-wider font-semibold w-full"
                    render={
                      <Link href="/contact">
                        <span>Demander un devis</span>
                        <ArrowRight />
                      </Link>
                    }
                  />
                  <Link
                    href={f.categoryHref}
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white py-2"
                  >
                    <ArrowLeft className="size-4" />
                    <span>Toutes les formations {f.categoryLabel}</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related formations */}
        {related.length > 0 && (
          <section className="py-16 bg-[color:var(--brand-cream)]">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl">
                  Autres formations {f.categoryLabel.toLowerCase()}
                </h2>
                <Link
                  href={f.categoryHref}
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:underline"
                >
                  <span>Toutes</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/formations/${r.slug}`}
                    className="group flex flex-col overflow-hidden rounded-sm bg-white ring-1 ring-[color:var(--brand-gray-medium)]/15 hover:ring-[color:var(--brand-red)] hover:shadow-lg transition-all"
                  >
                    {r.image && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
                        {r.categoryLabel}
                      </div>
                      <h3 className="mt-2 text-base font-semibold text-[color:var(--brand-charcoal)] leading-snug group-hover:text-[color:var(--brand-red)] transition-colors">
                        {r.title}
                      </h3>
                      {r.duree && (
                        <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[color:var(--brand-gray-medium)]">
                          <Clock className="size-3.5 text-[color:var(--brand-red)]" />
                          <span>{r.duree}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </PageShell>
    </>
  );
}

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-2">
      <span className="font-mono text-xs font-bold text-[color:var(--brand-red)] tabular-nums">
        {number}
      </span>
      <h2 className="text-2xl md:text-[1.6rem] leading-tight text-[color:var(--brand-charcoal)]">
        {title}
      </h2>
    </div>
  );
}

function FormationSection({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <SectionHeader number={number} title={title} />
      <ul className="mt-6 space-y-3">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[color:var(--brand-gray)] leading-relaxed"
          >
            <span
              aria-hidden
              className="mt-2.5 size-1 shrink-0 rounded-full bg-[color:var(--brand-red)]"
            />
            <span>{linkifyLegalRefs(it)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function KeyFact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-sm border border-[color:var(--brand-gray-medium)]/15 bg-white p-4">
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">
        <Icon className="size-3.5" />
        {label}
      </div>
      <div className="mt-1.5 text-sm font-medium text-[color:var(--brand-charcoal)] leading-snug">
        {value}
      </div>
    </div>
  );
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const sameDay = s.toDateString() === e.toDateString();
  const fmt = (d: Date) =>
    d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  return sameDay ? fmt(s) : `${fmt(s)} → ${fmt(e)}`;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

/** Parse a French price string ("875 €", "1 700 €") into a number. */
function parsePriceEUR(raw: string | null | undefined): number | undefined {
  if (!raw) return undefined;
  const cleaned = raw.replace(/\s/g, "").replace(",", ".").replace("€", "");
  const n = Number(cleaned);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

function audienceForCategory(
  category: (typeof formationEntries)[number]["category"],
): string {
  switch (category) {
    case "afgsu":
      return "Professionnels de santé et personnels d'établissements de santé";
    case "secourisme":
      return "Salariés désignés Sauveteurs Secouristes du Travail";
    case "securite-incendie":
      return "Salariés, EPI, guides-files et serres-files";
    case "habilitation-electrique":
      return "Personnels exécutants et chargés d'intervention électrique";
    case "ergonomie":
      return "Salariés exposés aux risques de TMS (industrie, BTP, sanitaire, social)";
    case "prevention":
      return "Membres CSE, encadrants, référents santé-sécurité";
    case "safety-day":
      return "Toutes équipes d'entreprise lors d'une journée prévention";
  }
}
