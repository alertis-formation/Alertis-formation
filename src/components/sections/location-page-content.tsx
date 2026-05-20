import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd, LocalServiceJsonLd } from "@/components/seo/json-ld";
import type { Location } from "@/lib/locations";

/**
 * Rendu d'une page locale. La mise en page est commune ; tout le contenu
 * (intro, tissu économique, secteurs, formations) provient de `data` et est
 * propre à chaque ville.
 */
export function LocationPageContent({ data }: { data: Location }) {
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
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl mb-6">
              Le tissu économique de {data.city} et ses enjeux de prévention
            </h2>
            <div className="space-y-4 leading-relaxed text-[color:var(--brand-gray-medium)]">
              {data.economy.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Secteurs */}
        <section className="py-16 bg-[color:var(--brand-cream)]">
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
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-[color:var(--brand-charcoal)] text-2xl md:text-3xl mb-8">
              Les formations prioritaires à {data.city}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {data.priorityFormations.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="group flex flex-col rounded-xl p-6 ring-1 ring-[color:var(--brand-gray-medium)]/15 hover:ring-[color:var(--brand-red)] hover:shadow-lg transition-all"
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
