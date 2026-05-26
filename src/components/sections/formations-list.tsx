import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { type FormationCategory } from "@/lib/formations-data";
import { getLiveFormationsByCategory } from "@/lib/formations-live";

export async function FormationsList({
  category,
  title = "Nos formations",
  subtitle,
}: {
  category: FormationCategory;
  title?: string;
  subtitle?: string;
}) {
  const items = await getLiveFormationsByCategory(category);

  if (items.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--brand-red)] mb-3">
            {items.length} formation{items.length > 1 ? "s" : ""} disponible
            {items.length > 1 ? "s" : ""}
          </p>
          <h2 className="text-[color:var(--brand-gray)]">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-[color:var(--brand-gray-medium)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <Link
              key={f.slug}
              href={`/formations/${f.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-border hover:ring-[color:var(--brand-red)] hover:shadow-lg transition-all"
            >
              {f.image ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--brand-cream)]">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-[color:var(--brand-slate)] to-[color:var(--brand-red)]" />
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
                  {f.categoryLabel}
                </div>
                <h3 className="mt-2 text-base font-semibold text-[color:var(--brand-gray)] leading-snug group-hover:text-[color:var(--brand-red)] transition-colors line-clamp-2">
                  {f.title}
                </h3>
                {f.duree && (
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[color:var(--brand-gray-medium)]">
                    <Clock className="size-3.5 text-[color:var(--brand-red)]" />
                    <span>{f.duree}</span>
                  </div>
                )}
                <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)]">
                  <span>Voir la formation</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
