import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "./hero-carousel";
import { formationEntries } from "@/lib/formations-data";

const trustBadges = [
  { label: "Formateurs INRS", icon: Award },
  { label: "Approche CARSAT", icon: ShieldCheck },
  { label: "Conforme Code du travail", icon: ShieldCheck },
];

const heroStats = [
  { value: "97,4%", label: "Satisfaction stagiaires" },
  { value: "100%", label: "Réussite SST" },
  { value: "61", label: "Formations au catalogue" },
  { value: "10+", label: "Ans d'expertise terrain" },
];

export async function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-cream)]">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-red)]/30 to-transparent"
      />

      {/* Soft mint blob right */}
      <div
        aria-hidden
        className="absolute -top-32 -right-40 size-[640px] rounded-full bg-[color:var(--brand-mint)]/50 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 size-[400px] rounded-full bg-[color:var(--brand-red-soft)]/40 blur-[100px]"
      />

      {/* Subtle dot grid behind */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-10">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-12 items-start">
          {/* LEFT: 7 cols */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <span className="eyebrow">Organisme de formation · Santé & sécurité au travail</span>
              <h1 className="!text-balance">
                Nous formons vos équipes à la{" "}
                <span className="text-[color:var(--brand-red)]">
                  prévention
                </span>{" "}
                des risques.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[color:var(--brand-gray-medium)] max-w-2xl leading-[1.55]">
              Sécurité incendie, secourisme, habilitation électrique, ergonomie&nbsp;:
              nos formateurs — issus du terrain — interviennent partout en France
              pour ancrer une vraie culture de prévention dans vos équipes.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="uppercase tracking-wider font-semibold"
                render={
                  <Link href="/formations">
                    <span>Voir les {formationEntries.length} formations</span>
                    <ArrowUpRight />
                  </Link>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="uppercase tracking-wider"
                render={
                  <a
                    href="/catalogue-alertis.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    <FileText />
                    <span>Catalogue PDF</span>
                  </a>
                }
              />
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <div className="text-xs uppercase tracking-widest font-semibold text-[color:var(--brand-gray-medium)]">
                Agréments
              </div>
              <span className="h-4 w-px bg-[color:var(--brand-gray-medium)]/30" />
              {trustBadges.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-charcoal)] font-medium"
                >
                  <Icon className="size-4 text-[color:var(--brand-red)]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: 5 cols carousel — 1 slide per category, clickable */}
          <div className="lg:col-span-5 relative">
            <HeroCarousel />
          </div>
        </div>

        {/* Bottom stat strip — editorial ledger */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="bg-[color:var(--brand-cream)] px-6 py-7 flex flex-col justify-between min-h-[140px] group hover:bg-white transition-colors"
            >
              <div className="text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[0.9] text-[color:var(--brand-charcoal)] tracking-[-0.04em]">
                {s.value}
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold flex items-center justify-between">
                <span>{s.label}</span>
                <span className="size-1.5 rounded-full bg-[color:var(--brand-red)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
