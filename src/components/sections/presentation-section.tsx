import { CheckCircle2, MapPin, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: CheckCircle2,
    label: "Formateurs experts",
    body: "Issus du terrain — sapeurs-pompiers, professionnels de la prévention, spécialistes santé au travail. Agréments INRS, CARSAT, démarche qualité interne.",
  },
  {
    icon: MapPin,
    label: "Réseau national",
    body: "Nos formateurs interviennent sur tout le territoire français, en intra-entreprise ou en inter-entreprises, avec leur propre matériel pédagogique.",
  },
  {
    icon: Sparkles,
    label: "Approche terrain",
    body: "Sessions pratiques, mises en situation grandeur nature, exercices et cas concrets adaptés à votre activité réelle. Pas que de la théorie.",
  },
];

export function PresentationSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Section number */}
      <div className="absolute top-12 left-4 lg:left-12 select-none pointer-events-none">
        <span className="section-number">01</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Centered header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="eyebrow">Notre raison d&apos;être</span>
          <h2 className="mt-4">
            Alertis,{" "}
            <span className="text-[color:var(--brand-red)]">organisme de formation</span>{" "}
            spécialisé en santé et sécurité au travail.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--brand-gray-medium)] leading-[1.65] max-w-2xl mx-auto">
            Notre mission&nbsp;: transmettre à vos équipes les compétences
            essentielles pour travailler en sécurité, respecter la
            réglementation et réagir efficacement face aux situations critiques —
            au-delà de la stricte conformité.
          </p>
        </div>

        {/* 3 pillars in horizontal grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {pillars.map(({ icon: Icon, label, body }, i) => (
            <div
              key={label}
              className="group bg-white rounded-sm border border-[color:var(--brand-gray-medium)]/15 p-6 lg:p-7 hover:border-[color:var(--brand-red)]/30 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                  <Icon className="size-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl text-[color:var(--brand-charcoal)] mb-2">
                {label}
              </h3>
              <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6]">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote — bottom centered */}
        <figure className="max-w-3xl mx-auto text-center border-t border-[color:var(--brand-gray-medium)]/15 pt-10">
          <blockquote className="text-xl md:text-2xl text-[color:var(--brand-charcoal)] leading-[1.4] font-medium">
            «&nbsp;La sécurité commence par l&apos;humain. C&apos;est notre ligne
            directrice depuis le premier jour.&nbsp;»
          </blockquote>
          <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-[color:var(--brand-gray-medium)] font-bold">
            — Cyrille Gagnaire, dirigeant
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
