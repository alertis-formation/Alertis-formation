import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd, LocalServiceJsonLd } from "@/components/seo/json-ld";
import { getUpcomingSessionsByDepartments } from "@/lib/alertis-api";
import type { Location } from "@/lib/locations";

/**
 * Rendu d'une page locale. La mise en page est commune ; le contenu
 * (intro, tissu économique, secteurs, formations) est propre à chaque ville,
 * et les sessions affichées sont les vraies sessions de l'API pour ses
 * départements.
 */
export async function LocationPageContent({ data }: { data: Location }) {
  const sessions = await getUpcomingSessionsByDepartments(data.departments, 10);
  const hasSessions = sessions.length > 0;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          {
            name: `Formation sécurité au travail à ${data.city}`,
            href: `/${data.slug}`,
          },
        ]}
      />
      <LocalServiceJsonLd city={data.city} url={`/${data.slug}`} />
      <PageShell
        title={`Formation sécurité au travail à ${data.city}`}
        subtitle={data.intro}
        breadcrumbs={[{ label: `${data.city} (${data.departmentName})` }]}
      >
        {/* Tissu économique local */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            {data.image && (
              <figure className="mb-12">
                <div className="relative aspect-[21/9] overflow-hidden rounded-xl ring-1 ring-border">
                  <Image
                    src={data.image}
                    alt={`Formation sécurité au travail à ${data.city}`}
                    fill
                    sizes="(max-width: 1152px) 100vw, 1100px"
                    className="object-cover"
                    priority
                  />
                </div>
                {data.imageCredit && (
                  <figcaption className="mt-1.5 text-[11px] text-[color:var(--brand-gray-medium)]">
                    {data.imageCredit}
                  </figcaption>
                )}
              </figure>
            )}
            <div className="mx-auto max-w-3xl">
              <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl mb-6">
                Le tissu économique de {data.city} et ses enjeux de prévention
              </h2>
              <div className="space-y-4 leading-relaxed text-[color:var(--brand-gray-medium)]">
                {data.economy.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prochaines sessions — données live de l'API */}
        {hasSessions && (
          <section className="py-16 bg-[color:var(--brand-cream)]">
            <div className="mx-auto max-w-3xl px-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="size-5 text-[color:var(--brand-red)]" />
                <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl">
                  Prochaines sessions inter-entreprises à {data.city}
                </h2>
              </div>
              <p className="text-sm text-[color:var(--brand-gray-medium)] mb-6">
                Calendrier des sessions planifiées près de chez vous. Nous
                organisons également des formations en intra-entreprise, dans
                vos locaux et calibrées sur votre activité.
              </p>
              <ul className="divide-y divide-[color:var(--brand-gray-medium)]/15 rounded-xl bg-white ring-1 ring-border overflow-hidden">
                {sessions.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between gap-4 p-4"
                  >
                    <div>
                      <div className="text-sm font-bold text-[color:var(--brand-charcoal)]">
                        {s.formation}
                      </div>
                      <div className="text-xs text-[color:var(--brand-gray-medium)] mt-0.5">
                        {formatDateRange(s.dateDebut, s.dateFin)} · {s.ville}
                        {s.departement ? ` (${s.departement})` : ""}
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
          </section>
        )}

        {/* Secteurs */}
        <section
          className={`py-16 ${hasSessions ? "bg-white" : "bg-[color:var(--brand-cream)]"}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl mb-8">
              Secteurs et besoins de formation à {data.city}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.sectors.map((s) => (
                <div
                  key={s.name}
                  className="rounded-xl bg-white p-6 ring-1 ring-border"
                >
                  <h3 className="text-base font-semibold text-[color:var(--brand-charcoal)] mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm text-[color:var(--brand-gray-medium)] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formations prioritaires */}
        <section
          className={`py-16 ${hasSessions ? "bg-[color:var(--brand-cream)]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl mb-8">
              Les formations prioritaires à {data.city}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {data.priorityFormations.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="group flex flex-col rounded-xl bg-white p-6 ring-1 ring-[color:var(--brand-gray-medium)]/15 hover:ring-[color:var(--brand-red)] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors">
                      {f.label}
                    </h3>
                    <ArrowUpRight className="size-4 shrink-0 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed">
                    {f.reason}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Intervention + CTA */}
        <section className="py-14 bg-[color:var(--brand-slate)] text-white">
          <div className="mx-auto max-w-6xl px-6 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-mint)] mb-3">
                <MapPin className="size-4" />
                Intervention à {data.city}
              </div>
              <p className="text-white/85 leading-relaxed">{data.logistics}</p>
            </div>
            <div className="lg:justify-self-end">
              <Button
                size="lg"
                variant="secondary"
                className="uppercase tracking-wider font-semibold"
                render={
                  <Link href="/contact">
                    <span>Demander un devis</span>
                    <ArrowRight />
                  </Link>
                }
              />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  return s.toDateString() === e.toDateString()
    ? fmt(s)
    : `${fmt(s)} → ${fmt(e)}`;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}
