import Link from "next/link";
import { Star } from "lucide-react";
import { getGoogleRating } from "@/lib/google-rating";

type Variant = "trust" | "compact" | "card";

/**
 * Affiche la note Google Business d'Alertis. Server component : la valeur est
 * récupérée à la construction (cache 24h via `getGoogleRating`).
 *
 * Variantes :
 *   - `trust`   : ligne horizontale pour le hero (à côté des trust badges)
 *   - `compact` : version compacte pour menus / header
 *   - `card`    : bloc large pour pages éditoriales (Qui sommes-nous, footer)
 */
export async function GoogleRatingBadge({
  variant = "trust",
}: {
  variant?: Variant;
}) {
  const rating = await getGoogleRating();
  if (variant === "compact") return <CompactBadge rating={rating} />;
  if (variant === "card") return <CardBadge rating={rating} />;
  return <TrustBadge rating={rating} />;
}

type RatingProps = { rating: { value: number; count: number } };

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <span
      className="inline-flex items-center"
      aria-hidden
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = value >= i + 1;
        const half = !filled && value >= i + 0.5;
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star
              className="text-[#fbbc04]"
              fill="none"
              stroke="currentColor"
              size={size}
              strokeWidth={2}
            />
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? size : size / 2 }}
              >
                <Star
                  className="text-[#fbbc04]"
                  fill="currentColor"
                  stroke="currentColor"
                  size={size}
                />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

function formatValue(value: number): string {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function formatCount(count: number): string {
  return count.toLocaleString("fr-FR");
}

function TrustBadge({ rating }: RatingProps) {
  return (
    <Link
      href="/avis"
      aria-label={`Note Google ${formatValue(rating.value)} sur 5 — ${rating.count} avis · Laisser un avis`}
      className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-charcoal)] font-medium hover:text-[color:var(--brand-red)] transition-colors"
    >
      <Stars value={rating.value} size={16} />
      <span className="font-bold">{formatValue(rating.value)}/5</span>
      <span className="text-[color:var(--brand-gray-medium)]">
        · {formatCount(rating.count)} avis Google
      </span>
    </Link>
  );
}

function CompactBadge({ rating }: RatingProps) {
  return (
    <Link
      href="/avis"
      aria-label={`Note Google ${formatValue(rating.value)} sur 5 — ${rating.count} avis · Laisser un avis`}
      className="group flex items-center gap-2 rounded-sm px-3 py-2 hover:bg-[color:var(--brand-cream)] transition-colors text-xs"
    >
      <Stars value={rating.value} size={13} />
      <span className="font-bold text-[color:var(--brand-charcoal)]">
        {formatValue(rating.value)}
      </span>
      <span className="text-[color:var(--brand-gray-medium)]">
        ({formatCount(rating.count)} avis)
      </span>
      <span className="ml-auto text-[10px] uppercase tracking-widest text-[color:var(--brand-red)] font-semibold group-hover:underline">
        Google
      </span>
    </Link>
  );
}

function CardBadge({ rating }: RatingProps) {
  return (
    <Link
      href="/avis"
      aria-label={`Note Google ${formatValue(rating.value)} sur 5 — ${rating.count} avis · Laisser un avis`}
      className="group flex items-center gap-5 rounded-sm bg-white ring-1 ring-[color:var(--brand-gray-medium)]/15 p-5 hover:ring-[color:var(--brand-red)] hover:shadow-md transition-all max-w-md"
    >
      <div className="flex flex-col items-center justify-center shrink-0 px-4 py-2 rounded-sm bg-[color:var(--brand-cream)]">
        <div className="text-3xl font-black text-[color:var(--brand-charcoal)] leading-none tabular-nums">
          {formatValue(rating.value)}
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
          sur 5
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Stars value={rating.value} size={16} />
        </div>
        <div className="mt-1.5 text-sm font-semibold text-[color:var(--brand-charcoal)]">
          {formatCount(rating.count)} avis vérifiés
        </div>
        <div className="mt-0.5 text-xs text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] transition-colors">
          Laissez-nous un avis →
        </div>
      </div>
    </Link>
  );
}
