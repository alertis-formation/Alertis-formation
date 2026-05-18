import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Calendar, Clock } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { articles, veilleArticleSlugs } from "@/lib/articles";

type SearchParams = { page?: string; categorie?: string };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { page, categorie } = await searchParams;
  const parsed = Number(page);
  const isPaginated = Number.isFinite(parsed) && parsed > 1;
  const isVeille = categorie === "veille";
  const qs = [
    isVeille ? "categorie=veille" : null,
    isPaginated ? `page=${parsed}` : null,
  ]
    .filter(Boolean)
    .join("&");
  return {
    title: isVeille
      ? isPaginated
        ? `Veille réglementaire — page ${parsed}`
        : "Veille réglementaire — Analyses Alertis"
      : isPaginated
        ? `Actualités — page ${parsed}`
        : "Actualités",
    description: isVeille
      ? "Toutes nos analyses des évolutions réglementaires, normatives et pédagogiques en santé et sécurité au travail."
      : "Articles, conseils et veille réglementaire sur la santé et la sécurité au travail, par Alertis Formation.",
    alternates: {
      canonical: qs ? `/articles?${qs}` : "/articles",
    },
    robots: isPaginated
      ? { index: false, follow: true }
      : undefined,
  };
}

type FeedItem = {
  key: string;
  href: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readingTime: number;
  image?: string;
};

const PAGE_SIZE = 12;

const articleItems: FeedItem[] = Object.entries(articles).map(([slug, a]) => ({
  key: slug,
  href: `/${slug}`,
  title: a.title,
  excerpt: a.excerpt,
  publishedAt: a.publishedAt,
  category: a.category,
  readingTime: a.readingTime,
  image: a.image,
}));

const sortedItems: FeedItem[] = articleItems.sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export default async function ArticlesIndexPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { page, categorie } = await searchParams;
  const isVeille = categorie === "veille";

  const allItems = isVeille
    ? sortedItems.filter((item) => veilleArticleSlugs.has(item.key))
    : sortedItems;

  const totalPages = Math.max(1, Math.ceil(allItems.length / PAGE_SIZE));
  const parsed = Number(page);
  const currentPage = Number.isFinite(parsed) && parsed > 0
    ? Math.min(Math.floor(parsed), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const items = allItems.slice(startIndex, startIndex + PAGE_SIZE);

  const pageHref = (p: number) => {
    const params = [
      isVeille ? "categorie=veille" : null,
      p > 1 ? `page=${p}` : null,
    ].filter(Boolean);
    return params.length ? `/articles?${params.join("&")}` : "/articles";
  };

  return (
    <PageShell
      title={isVeille ? "Veille réglementaire" : "Actualités"}
      subtitle={
        isVeille
          ? "Toutes nos analyses des évolutions réglementaires, normatives et pédagogiques publiées sur les 12 derniers mois, regroupées au même endroit."
          : "Nos articles, conseils pratiques et retours d'expérience sur la santé, la sécurité au travail et la prévention des risques professionnels."
      }
      breadcrumbs={
        isVeille
          ? [
              { label: "Actualités", href: "/articles" },
              { label: "Veille réglementaire" },
            ]
          : [{ label: "Actualités" }]
      }
    >
      {isVeille && (
        <section className="bg-[color:var(--brand-cream)]/60 border-b border-[color:var(--brand-gray-medium)]/10 py-4">
          <div className="mx-auto max-w-6xl px-6 lg:px-10 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-gray-medium)]">
              Filtre actif
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-white px-2.5 py-1 text-xs font-semibold text-[color:var(--brand-red)] border border-[color:var(--brand-red)]/20">
              Veille réglementaire
              <Link href="/articles" aria-label="Retirer le filtre" className="text-[color:var(--brand-gray-medium)] hover:text-[color:var(--brand-red)]">×</Link>
            </span>
            <Link
              href="/articles"
              className="ml-auto text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-gray-medium)] hover:text-[color:var(--brand-red)] transition-colors"
            >
              Voir toutes les actualités
            </Link>
          </div>
        </section>
      )}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.key}
              className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-border hover:ring-[color:var(--brand-red)] hover:shadow-lg transition-all"
            >
              <Link
                href={item.href}
                className="relative aspect-[16/10] overflow-hidden"
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute top-3 left-3 inline-flex items-center rounded bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
                  {item.category}
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-[color:var(--brand-gray-medium)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    <time dateTime={item.publishedAt}>
                      {new Date(item.publishedAt).toLocaleDateString(
                        "fr-FR",
                        { day: "numeric", month: "long", year: "numeric" }
                      )}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    <span>{item.readingTime} min</span>
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-[color:var(--brand-gray)] leading-snug group-hover:text-[color:var(--brand-red)] transition-colors">
                  <Link href={item.href}>{item.title}</Link>
                </h2>
                <p className="mt-3 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed flex-1 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:underline underline-offset-4"
                >
                  <span>Lire l&apos;article</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Pagination des actualités"
            className="mx-auto max-w-6xl px-6 mt-14 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="text-sm text-[color:var(--brand-gray-medium)]">
              Page <strong className="text-[color:var(--brand-charcoal)]">{currentPage}</strong>{" "}
              sur {totalPages} — {allItems.length} publications
            </div>
            <div className="flex items-center gap-2">
              {currentPage > 1 ? (
                <Link
                  href={pageHref(currentPage - 1)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white text-[color:var(--brand-charcoal)] px-3.5 py-2 text-sm font-semibold hover:bg-[color:var(--brand-cream)] transition-colors"
                  rel="prev"
                >
                  <ArrowLeft className="size-4" />
                  Précédent
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-[color:var(--brand-cream)] text-[color:var(--brand-gray-medium)]/60 px-3.5 py-2 text-sm font-semibold cursor-not-allowed">
                  <ArrowLeft className="size-4" />
                  Précédent
                </span>
              )}
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - currentPage) <= 1,
                  )
                  .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                    if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("…");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((p, i) =>
                    p === "…" ? (
                      <span
                        key={`ellipsis-${i}`}
                        className="px-2 text-sm text-[color:var(--brand-gray-medium)]"
                      >
                        …
                      </span>
                    ) : (
                      <Link
                        key={p}
                        href={pageHref(p)}
                        aria-current={p === currentPage ? "page" : undefined}
                        className={
                          p === currentPage
                            ? "inline-flex size-9 items-center justify-center rounded-lg bg-[color:var(--brand-red)] text-white text-sm font-semibold"
                            : "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-white text-[color:var(--brand-charcoal)] text-sm font-semibold hover:bg-[color:var(--brand-cream)] transition-colors"
                        }
                      >
                        {p}
                      </Link>
                    ),
                  )}
              </div>
              {currentPage < totalPages ? (
                <Link
                  href={pageHref(currentPage + 1)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white text-[color:var(--brand-charcoal)] px-3.5 py-2 text-sm font-semibold hover:bg-[color:var(--brand-cream)] transition-colors"
                  rel="next"
                >
                  Suivant
                  <ArrowRight className="size-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-[color:var(--brand-cream)] text-[color:var(--brand-gray-medium)]/60 px-3.5 py-2 text-sm font-semibold cursor-not-allowed">
                  Suivant
                  <ArrowRight className="size-4" />
                </span>
              )}
            </div>
          </nav>
        )}
      </section>
    </PageShell>
  );
}
