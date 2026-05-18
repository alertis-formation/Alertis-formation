import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CategoryApproach = {
  title: string;
  description: string;
  bullets?: string[];
};

export type CategoryContentProps = {
  approaches: CategoryApproach[];
  ctaTitle?: string;
  ctaDescription?: string;
};

export function FormationCategoryContent({
  approaches,
  ctaTitle = "Cette formation vous intéresse ?",
  ctaDescription = "Devis sous 24h, intervention sur tout le territoire, sessions inter ou intra-entreprise.",
}: CategoryContentProps) {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {approaches.map((a, idx) => (
            <div
              key={a.title}
              className={`grid gap-10 lg:grid-cols-2 items-start ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-cream)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-red)] mb-4">
                  <span className="size-1.5 rounded-full bg-[color:var(--brand-red)]" />
                  Approche {idx + 1}
                </div>
                <h2 className="text-[color:var(--brand-gray)] mb-5">
                  {a.title}
                </h2>
                <p className="text-base text-[color:var(--brand-gray-medium)] leading-relaxed">
                  {a.description}
                </p>
              </div>
              {a.bullets && a.bullets.length > 0 && (
                <ul className="space-y-3 rounded-xl bg-[color:var(--brand-cream)] p-6">
                  {a.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-[color:var(--brand-gray)]"
                    >
                      <CheckCircle2 className="size-5 text-[color:var(--brand-red)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-[color:var(--brand-slate)] text-white">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-white text-2xl md:text-3xl mb-2">
              {ctaTitle}
            </h2>
            <p className="text-white/80 text-sm">{ctaDescription}</p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="uppercase tracking-wider font-semibold shrink-0"
            render={
              <Link href="/contact">
                <span>Demander un devis</span>
                <ArrowRight />
              </Link>
            }
          />
        </div>
      </section>
    </>
  );
}
