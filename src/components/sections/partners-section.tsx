import { PartnersMarquee } from "./partners-marquee";

export function PartnersSection() {
  return (
    <section className="relative py-14 md:py-16 bg-white border-y border-[color:var(--brand-gray-medium)]/15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="mt-3 text-2xl md:text-3xl">
            Des organisations qui n&apos;attendent{" "}
            <span className="italic font-bold text-[color:var(--brand-red)]">
              pas
            </span>{" "}
            l&apos;incident pour former.
          </h2>
        </div>
        <div className="text-sm text-[color:var(--brand-gray-medium)] max-w-xs">
          Plus de 500 entreprises, collectivités et établissements de santé
          forment leurs équipes avec Alertis.
        </div>
      </div>

      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"
      />

      <PartnersMarquee />
    </section>
  );
}
