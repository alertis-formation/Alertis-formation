import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import { formationCategories } from "@/lib/site-config";
import {
  getCategoryHeroImage,
  type FormationCategory,
} from "@/lib/formations-data";
import { getLiveFormations } from "@/lib/formations-live";

const slugToCategory: Record<string, FormationCategory> = {
  "/formations-securite-incendie": "securite-incendie",
  "/formations-secourisme": "secourisme",
  "/formations-habilitation-electrique": "habilitation-electrique",
  "/formations-ergonomie": "ergonomie",
  "/formations-prevention": "prevention",
  "/formations-safety-day": "safety-day",
};

const afgsuImage = getCategoryHeroImage("afgsu");

export async function FormationsGridSection() {
  const liveFormations = await getLiveFormations();
  const countByCategory = (cat: FormationCategory) =>
    liveFormations.filter((f) => f.category === cat).length;
  const afgsuCount = countByCategory("afgsu");
  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--brand-cream)] overflow-hidden">
      <div className="absolute top-16 left-4 lg:left-12 select-none pointer-events-none">
        <span className="section-number">02</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Six domaines, un catalogue</span>
            <h2 className="mt-4">
              Tout ce qu&apos;il faut pour{" "}
              <span className="text-[color:var(--brand-red)]">protéger</span>{" "}
              vos équipes.
            </h2>
          </div>
          <p className="text-[color:var(--brand-gray-medium)] max-w-sm text-base leading-relaxed">
            {liveFormations.length} formations pour répondre aux obligations réglementaires et
            renforcer la sécurité au quotidien — du SST à l&apos;habilitation BR.
          </p>
        </div>

        {/* Six standard categories in a clean 3-col grid (2-col on mobile) */}
        <div className="grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3">
          {formationCategories.map((cat) => {
            const category = slugToCategory[cat.href];
            const count = category
              ? countByCategory(category)
              : 0;
            const heroImage = category ? getCategoryHeroImage(category) : "";

            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative block aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-sm bg-[color:var(--brand-slate)]"
              >
                {heroImage && (
                  <Image
                    src={heroImage}
                    alt={`Formation ${cat.label} en intra-entreprise — Alertis Formation`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]"
                  />
                )}

                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/95 via-[color:var(--brand-charcoal)]/40 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 lg:p-7">
                  <div className="flex items-baseline gap-1.5 sm:gap-2.5 mb-2 sm:mb-4">
                    <span className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold leading-none text-white tabular-nums drop-shadow-sm">
                      {String(count).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white drop-shadow-sm">
                      formation{count > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="h-0.5 w-8 sm:w-10 bg-[color:var(--brand-red)] mb-2 sm:mb-4" />

                  <h3 className="text-white text-base sm:text-2xl md:text-[1.65rem] leading-[1.05] mb-2 sm:mb-3 max-w-[14ch]">
                    {cat.label}
                  </h3>
                  {cat.description && (
                    <p className="hidden sm:block text-sm text-white/75 leading-snug mb-5 max-w-[32ch] line-clamp-2">
                      {cat.description}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:gap-3 transition-all">
                    Découvrir
                    <ArrowUpRight className="size-3 sm:size-4 text-[color:var(--brand-red)]" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* AFGSU — full-width featured banner (professionals only audience) */}
        <Link
          href="/nos-formations-afgsu"
          className="group relative mt-5 grid sm:grid-cols-2 overflow-hidden rounded-sm bg-[color:var(--brand-slate)] min-h-[260px] lg:min-h-[300px]"
        >
          {/* Image side */}
          <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
            {afgsuImage && (
              <Image
                src={afgsuImage}
                alt="Formation AFGSU — Attestation de Formation aux Gestes et Soins d'Urgence pour professionnels de santé"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]"
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-transparent to-[color:var(--brand-slate)]/40 sm:to-[color:var(--brand-slate)]"
            />
          </div>

          {/* Content side */}
          <div className="relative flex flex-col justify-center p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex size-10 items-center justify-center rounded-sm bg-[color:var(--brand-red)] text-white">
                <Stethoscope className="size-5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                Pour les professionnels de santé
              </span>
            </div>

            <div className="flex items-baseline gap-2.5 mb-3">
              <span className="font-mono text-4xl md:text-5xl font-bold leading-none text-white tabular-nums">
                {String(afgsuCount).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-white drop-shadow-sm">
                formation{afgsuCount > 1 ? "s" : ""}
              </span>
            </div>

            <div className="h-0.5 w-10 bg-[color:var(--brand-red)] mb-4" />

            <h3 className="text-white text-2xl md:text-3xl leading-[1.05] mb-3">
              AFGSU
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-snug mb-5 max-w-md">
              Attestation de Formation aux Gestes et Soins d&apos;Urgence —
              niveaux 1, 2 et recyclage pour le personnel médical et
              paramédical.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-3 transition-all">
              Découvrir les formations AFGSU
              <ArrowUpRight className="size-4 text-[color:var(--brand-red)]" />
            </span>
          </div>
        </Link>

        {/* Footnote */}
        <p className="mt-10 text-sm text-[color:var(--brand-gray-medium)] italic flex items-center gap-2">
          <span className="size-1 rounded-full bg-[color:var(--brand-red)]" />
          Programmes conformes au Code du travail et aux recommandations INRS.
          Démarche d&apos;amélioration continue.
        </p>
      </div>
    </section>
  );
}
