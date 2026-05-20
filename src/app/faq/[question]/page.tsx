import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faq";
import { FaqPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { linkifyLegalRefs } from "@/lib/legal-refs";

export const dynamicParams = false;

export function generateStaticParams() {
  return faqs.map((f) => ({ question: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ question: string }>;
}): Promise<Metadata> {
  const { question } = await params;
  const item = faqs.find((f) => f.slug === question);
  if (!item) return {};
  const description = item.a.replace(/\s+/g, " ").trim().slice(0, 155);
  return {
    title: item.q,
    description,
    alternates: { canonical: `/faq/${question}` },
    openGraph: {
      type: "article",
      title: item.q,
      description,
      url: `/faq/${question}`,
    },
    twitter: {
      card: "summary_large_image",
      title: item.q,
      description,
    },
  };
}

export default async function FaqQuestionPage({
  params,
}: {
  params: Promise<{ question: string }>;
}) {
  const { question } = await params;
  const item = faqs.find((f) => f.slug === question);
  if (!item) notFound();

  const blocks = item.a
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  const related = faqs.filter((f) => f.slug !== item.slug).slice(0, 5);

  return (
    <>
      <FaqPageJsonLd items={[{ q: item.q, a: item.a }]} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "FAQ", href: "/faq" },
          { name: item.q, href: `/faq/${item.slug}` },
        ]}
      />
      <PageShell
        title={item.q}
        subtitle="Question fréquente sur nos formations en santé et sécurité au travail."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }, { label: item.q }]}
      >
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
              {blocks.map((block, i) => {
                const lines = block.split("\n");
                const isList =
                  lines.length > 1 &&
                  lines.every((l) => l.trim().startsWith("- "));
                if (isList) {
                  return (
                    <ul
                      key={i}
                      className="list-disc pl-6 space-y-2 marker:text-[color:var(--brand-red)]"
                    >
                      {lines.map((l, j) => (
                        <li key={j}>
                          {linkifyLegalRefs(l.replace(/^\s*-\s+/, ""))}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{linkifyLegalRefs(block)}</p>;
              })}
            </div>

            {item.links && item.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {item.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-cream)] px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-red)] hover:bg-[color:var(--brand-red)] hover:text-white transition-colors"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-10 rounded-xl bg-[color:var(--brand-slate)] text-white p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-white text-xl mb-1">Une autre question ?</h2>
                <p className="text-white/80 text-sm">
                  Notre équipe vous répond et établit votre devis sous
                  24&nbsp;h.
                </p>
              </div>
              <Button
                variant="secondary"
                className="uppercase tracking-wider font-semibold shrink-0"
                render={
                  <Link href="/contact">
                    <span>Nous contacter</span>
                    <ArrowRight />
                  </Link>
                }
              />
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:underline underline-offset-4"
              >
                <ArrowLeft className="size-4" />
                <span>Toutes les questions fréquentes</span>
              </Link>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-semibold text-[color:var(--brand-gray)] mb-4">
                  Autres questions fréquentes
                </h2>
                <ul className="divide-y divide-border rounded-xl ring-1 ring-border overflow-hidden">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/faq/${r.slug}`}
                        className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-[color:var(--brand-cream)] transition-colors"
                      >
                        <span className="text-sm font-medium text-[color:var(--brand-gray)]">
                          {r.q}
                        </span>
                        <ArrowUpRight className="size-4 text-[color:var(--brand-red)] shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </PageShell>
    </>
  );
}
