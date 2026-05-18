import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
};

const articles: Article[] = [
  {
    slug: "/prevention-des-risques-electriques-limportance-de-lhabilitation-professionnelle",
    title:
      "Prévention des risques électriques : l'importance de l'habilitation professionnelle",
    excerpt:
      "Électrocution, électrisation, brûlures : tour d'horizon des niveaux d'habilitation et de leur portée.",
    date: "23 juillet 2025",
    category: "Habilitation électrique",
    image:
      "/images/prevention-des-risques-electriques-l-importance-de-l-habilitation-professionne.png",
    readTime: "5 min",
  },
  {
    slug: "/formation-pssm-premiers-secours-en-sante-mentale",
    title: "Formation PSSM : premiers secours en santé mentale",
    excerpt:
      "Repérer, soutenir et orienter un collègue en souffrance psychique : la PSSM devient un pilier de la prévention des RPS.",
    date: "12 février 2025",
    category: "Santé mentale",
    image: "/images/formation-pssm-premiers-secours-en-sante-mentale.webp",
    readTime: "6 min",
  },
  {
    slug: "/formation-incendie-obligatoire-ce-que-dit-la-reglementation",
    title:
      "Formation incendie obligatoire : ce que dit la réglementation",
    excerpt:
      "Code du travail, ERP, exercices d'évacuation : on fait le point sur les obligations et bonnes pratiques.",
    date: "7 février 2025",
    category: "Sécurité incendie",
    image: "/images/image-1.png",
    readTime: "5 min",
  },
];

export function NewsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--brand-cream)] overflow-hidden">
      <div className="absolute top-16 left-4 lg:left-12 select-none pointer-events-none">
        <span className="section-number">04</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Actualités & veille</span>
            <h2 className="mt-4">
              La{" "}
              <span className="italic font-bold text-[color:var(--brand-red)]">
                réglementation
              </span>{" "}
              décryptée par nos experts.
            </h2>
          </div>
          <Button
            variant="outline"
            className="uppercase tracking-wider self-start lg:self-end"
            render={
              <Link href="/articles">
                <span>Tous les articles</span>
                <ArrowUpRight />
              </Link>
            }
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {articles.map((a, i) => (
            <article key={a.slug} className="group flex flex-col">
              {/* Image */}
              <Link
                href={a.slug}
                className="relative aspect-[5/4] overflow-hidden rounded-sm bg-[color:var(--brand-slate)] block"
              >
                <Image
                  src={a.image}
                  alt={`${a.title} — article ${a.category} par Alertis Formation`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center bg-white px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">
                    {a.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-white/90">
                    Art. {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>

              <div className="pt-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[color:var(--brand-gray-medium)] mb-3">
                  <time>{a.date}</time>
                  <span className="size-0.5 rounded-full bg-[color:var(--brand-gray-medium)]" />
                  <span>{a.readTime} de lecture</span>
                </div>

                <h3 className="text-xl lg:text-2xl text-[color:var(--brand-charcoal)] leading-tight group-hover:text-[color:var(--brand-red)] transition-colors">
                  <Link href={a.slug}>{a.title}</Link>
                </h3>

                <p className="mt-3 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed line-clamp-3">
                  {a.excerpt}
                </p>

                <Link
                  href={a.slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] self-start"
                >
                  <span className="editorial-link">Lire l&apos;article</span>
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
