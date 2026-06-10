import Link from "next/link";
import { Star, ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGoogleRating } from "@/lib/google-rating";
import { reviews } from "@/lib/reviews";
import { ReviewsJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

function Stars({ value = 5, size = 15 }: { value?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          className="text-[#fbbc04]"
          fill={value >= i + 1 ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={2}
        />
      ))}
    </span>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Section « Avis clients » — affiche un échantillon d'avis Google RÉELS.
 * Server component : récupère la note agrégée (cache 24h) et émet le schéma
 * `ReviewsJsonLd` (aggregateRating + review) afin que la note corresponde aux
 * avis visibles à l'écran. À utiliser sur l'accueil et `/avis`.
 */
export async function ReviewsSection() {
  const rating = await getGoogleRating();
  const formattedValue = rating.value.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const formattedCount = rating.count.toLocaleString("fr-FR");

  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--brand-cream)]/40 overflow-hidden">
      <ReviewsJsonLd />

      <div className="absolute top-16 left-4 lg:left-12 select-none pointer-events-none">
        <span className="section-number">06</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Ils nous ont fait confiance</span>
            <h2 className="mt-4">
              <span className="italic font-bold text-[color:var(--brand-red)]">
                {formattedValue}/5
              </span>{" "}
              sur {formattedCount} avis Google.
            </h2>
            <p className="mt-6 text-[color:var(--brand-gray-medium)] leading-relaxed text-base">
              Stagiaires, responsables HSE et services RH : ce qu&apos;ils
              retiennent de nos formations en santé et sécurité au travail.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Stars value={rating.value} size={20} />
              <span className="text-2xl font-black text-[color:var(--brand-charcoal)] tabular-nums">
                {formattedValue}
              </span>
            </div>
            <Button
              variant="outline"
              className="uppercase tracking-wider"
              render={
                <Link href="/avis">
                  <span>Laisser un avis</span>
                  <ArrowUpRight />
                </Link>
              }
            />
          </div>
        </div>

        {/* Grid */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <li
              key={i}
              className="flex flex-col rounded-sm bg-white ring-1 ring-[color:var(--brand-gray-medium)]/15 p-6 hover:ring-[color:var(--brand-red)]/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <Stars value={r.rating} />
                <Quote className="size-5 text-[color:var(--brand-red)]/30" />
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[color:var(--brand-charcoal)]">
                {r.body}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[color:var(--brand-gray-medium)]/15 pt-4">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-[color:var(--brand-charcoal)]">
                    {r.author}
                  </div>
                  <div className="text-xs text-[color:var(--brand-gray-medium)]">
                    {formatDate(r.date)}
                    {r.topic ? ` · ${r.topic}` : ""}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold shrink-0">
                  Google
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-[color:var(--brand-gray-medium)]">
          Avis publiés sur la{" "}
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[color:var(--brand-red)] hover:underline"
          >
            fiche Google Business d&apos;Alertis
          </a>
          .
        </p>
      </div>
    </section>
  );
}
