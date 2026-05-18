const stats = [
  {
    value: "97,4",
    suffix: "%",
    label: "Satisfaction stagiaires",
    sub: "Note moyenne sur l'ensemble de nos sessions 2025-2026.",
  },
  {
    value: "100",
    suffix: "%",
    label: "Réussite SST",
    sub: "Taux de validation du certificat Sauveteur Secouriste du Travail.",
  },
  {
    value: "100",
    suffix: "%",
    label: "Réussite habilitation",
    sub: "Habilitations électriques B0 à BR — initiales et recyclages.",
  },
  {
    value: "61",
    label: "Formations actives",
    sub: "Du SST aux habilitations BR, en passant par le Safety Day.",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--brand-charcoal)] text-white overflow-hidden">
      {/* Section number */}
      <div className="absolute -top-4 right-6 lg:right-12 select-none pointer-events-none">
        <span className="font-black text-[8rem] lg:text-[12rem] leading-none text-white/[0.04] tracking-tighter">
          04
        </span>
      </div>

      {/* Soft red wash */}
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-[color:var(--brand-red)]/12 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute top-1/2 right-0 size-[400px] rounded-full bg-[color:var(--brand-mint)]/6 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="eyebrow text-[color:var(--brand-mint)]">
            La confiance, en chiffres
          </span>
          <h2 className="mt-4 text-white">
            Des <span className="text-[color:var(--brand-mint)]">résultats</span>{" "}
            qui parlent d&apos;eux-mêmes.
          </h2>
          <p className="mt-5 text-white/65 max-w-xl leading-relaxed">
            Une démarche d&apos;amélioration continue : chaque session est
            évaluée à chaud, et les retours stagiaires alimentent
            nos prochains programmes.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative bg-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-slate-dark)] transition-colors p-7 lg:p-9 flex flex-col min-h-[280px]"
            >
              {/* Top accent line */}
              <div
                aria-hidden
                className="absolute top-0 left-0 h-0.5 w-12 bg-[color:var(--brand-red)] group-hover:w-full transition-all duration-700 ease-out"
              />

              {/* Index */}
              <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/35 mb-8">
                / {String(i + 1).padStart(2, "0")}
              </div>

              {/* Number */}
              <div className="flex items-start gap-0.5 leading-none">
                <span className="text-[clamp(3.5rem,7vw,5.5rem)] font-black tracking-[-0.04em] text-white leading-[0.9]">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="text-[clamp(1.5rem,3vw,2.25rem)] font-black tracking-tight text-[color:var(--brand-red)] leading-[0.9] mt-1">
                    {s.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="mt-auto pt-8">
                <div className="text-sm font-bold uppercase tracking-widest text-white mb-2">
                  {s.label}
                </div>
                <p className="text-xs text-white/55 leading-relaxed">
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
