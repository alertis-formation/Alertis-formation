import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { articles, articleSlugs } from "@/lib/articles";

export const dynamicParams = false;

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/${slug}`,
      images: article.image ? [{ url: article.image }] : undefined,
      publishedTime: article.publishedAt,
      tags: [article.category],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];
  if (!article) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Actualités", href: "/articles" },
          { name: article.title, href: `/${slug}` },
        ]}
      />
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={`/${slug}`}
        datePublished={article.publishedAt}
        image={article.image}
      />
      <PageShell
        title={article.title}
        subtitle={article.excerpt}
        breadcrumbs={[
          { label: "Actualités", href: "/articles" },
          { label: article.category },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-center gap-4 mb-8 text-sm text-[color:var(--brand-gray-medium)]">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                <span>{article.readingTime} min de lecture</span>
              </span>
            </div>

            {article.image && (
              <div className="relative aspect-[16/9] mb-10 rounded-xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose-article space-y-5 text-[color:var(--brand-gray)] leading-relaxed">
              {article.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-semibold text-[color:var(--brand-gray)] mt-10 mb-2"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="text-xl md:text-2xl font-semibold text-[color:var(--brand-gray)] mt-8 mb-1"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p key={i} className="text-[color:var(--brand-gray-medium)]">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul
                      key={i}
                      className="list-disc pl-6 space-y-2 text-[color:var(--brand-gray-medium)] marker:text-[color:var(--brand-red)]"
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-[color:var(--brand-red)] pl-5 py-1 italic text-[color:var(--brand-gray)] text-lg my-8"
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>

            <div className="mt-14 pt-8 border-t border-border">
              <Link
                href="/articles"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:underline underline-offset-4"
              >
                <ArrowLeft className="size-4" />
                <span>Retour aux actualités</span>
              </Link>
            </div>
          </div>
        </article>
      </PageShell>
    </>
  );
}
