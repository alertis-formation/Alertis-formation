import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type Formation = {
  slug: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  audience: string;
  format: string;
  image: string;
};

const featured: Formation[] = [
  {
    slug: "/formations/formation-sst-sauveteur-secouriste-du-travail",
    title: "Sauveteur Secouriste du Travail",
    category: "Secourisme",
    description:
      "Formation initiale de 14h pour intervenir efficacement en cas d'accident dans l'entreprise. Certification INRS reconnue, valable 24 mois.",
    duration: "14 heures",
    audience: "Tout salarié",
    format: "Intra ou inter-entreprises",
    image: "/images/formateurs.jpg",
  },
  {
    slug: "/formations/formation-incendie-evacuation-guide-serre-file",
    title: "Évacuation, guide & serre-file",
    category: "Sécurité incendie",
    description:
      "Préparez vos équipes à coordonner une évacuation : missions du guide-file, du serre-file, mises en situation et exercice grandeur nature.",
    duration: "3h30",
    audience: "Personnel désigné",
    format: "Présentiel sur site",
    image: "/images/image-1.png",
  },
  {
    slug: "/formations/formation-incendie",
    title: "Manipulation d'extincteurs",
    category: "Sécurité incendie",
    description:
      "Formation pratique avec feu réel ou bac à feu écologique. Vos équipes apprennent à choisir le bon extincteur et à intervenir efficacement.",
    duration: "3 heures",
    audience: "Tout salarié",
    format: "Présentiel sur site",
    image:
      "/images/prevention-des-risques-electriques-l-importance-de-l-habilitation-professionne.png",
  },
];

export function FeaturedFormationsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-16 left-4 lg:left-12 select-none pointer-events-none">
        <span className="section-number">03</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Formations phares</span>
            <h2 className="mt-4">
              Les sessions les{" "}
              <span className="italic font-bold text-[color:var(--brand-red)]">
                plus demandées
              </span>{" "}
              par nos clients.
            </h2>
          </div>
          <Button
            variant="outline"
            className="uppercase tracking-wider self-start lg:self-end"
            render={
              <Link href="/formations">
                <span>Voir tout le catalogue</span>
                <ArrowUpRight />
              </Link>
            }
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((f, idx) => (
            <article
              key={f.slug}
              className="group flex flex-col"
            >
              {/* Image with editorial frame */}
              <Link
                href={f.slug}
                className="relative aspect-[5/4] overflow-hidden rounded-sm bg-[color:var(--brand-slate)] block"
              >
                <Image
                  src={f.image}
                  alt={`${f.title} — formation ${f.category.toLowerCase()} en intra-entreprise`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />

                {/* Editorial corner mark */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white px-3 py-1 rounded-sm shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--brand-gray-medium)]">
                    N°
                  </span>
                  <span className="text-xs font-semibold text-[color:var(--brand-red)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-4 right-4 inline-flex items-center bg-[color:var(--brand-red)] text-white px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-widest">
                  {f.category}
                </div>
              </Link>

              <div className="pt-6 flex flex-col flex-1">
                <h3 className="text-2xl text-[color:var(--brand-charcoal)] leading-tight group-hover:text-[color:var(--brand-red)] transition-colors">
                  <Link href={f.slug}>{f.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed line-clamp-3">
                  {f.description}
                </p>

                <dl className="mt-6 grid grid-cols-3 gap-3 text-xs border-t border-[color:var(--brand-gray-medium)]/15 pt-5">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] mb-1 inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      Durée
                    </dt>
                    <dd className="font-semibold text-[color:var(--brand-charcoal)]">
                      {f.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] mb-1 inline-flex items-center gap-1">
                      <Users className="size-3" />
                      Public
                    </dt>
                    <dd className="font-semibold text-[color:var(--brand-charcoal)]">
                      {f.audience}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] mb-1 inline-flex items-center gap-1">
                      <MapPin className="size-3" />
                      Format
                    </dt>
                    <dd className="font-semibold text-[color:var(--brand-charcoal)] line-clamp-1">
                      {f.format}
                    </dd>
                  </div>
                </dl>

                <Link
                  href={f.slug}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] self-start"
                >
                  <span className="editorial-link">Voir le programme</span>
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
