import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ArticleCard } from "@/lib/articles";

/**
 * Module de maillage interne : grille de vignettes d'articles.
 * Utilisé en bas des articles (articles liés) et sur les pages catégories
 * (catégorie → articles), pour renforcer le réseau de liens internes.
 */
export function RelatedArticles({
  title,
  subtitle,
  articles,
}: {
  title: string;
  subtitle?: string;
  articles: ArticleCard[];
}) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)] border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10">
          <h2 className="text-[color:var(--brand-gray)]">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-[color:var(--brand-gray-medium)] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.slug} className="group flex flex-col">
              <Link
                href={`/${a.slug}`}
                className="relative aspect-[5/4] overflow-hidden rounded-sm bg-[color:var(--brand-slate)] block"
              >
                {a.image ? (
                  <Image
                    src={a.image}
                    alt={`${a.title} — article ${a.category}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-charcoal)] to-[color:var(--brand-red)]/70" />
                )}
                <span className="absolute bottom-4 left-4 inline-flex items-center bg-white px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">
                  {a.category}
                </span>
              </Link>

              <div className="pt-5 flex flex-col flex-1">
                <div className="text-xs text-[color:var(--brand-gray-medium)] mb-2">
                  {a.readingTime} min de lecture
                </div>
                <h3 className="text-lg lg:text-xl text-[color:var(--brand-charcoal)] leading-tight group-hover:text-[color:var(--brand-red)] transition-colors">
                  <Link href={`/${a.slug}`}>{a.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed line-clamp-2">
                  {a.excerpt}
                </p>
                <Link
                  href={`/${a.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] self-start"
                >
                  <span className="editorial-link">Lire l&apos;article</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
