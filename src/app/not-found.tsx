import Link from "next/link";
import { Home, ArrowRight, Search, AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page introuvable",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos formations et nos coordonnées.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  {
    href: "/qui-sommes-nous",
    title: "Qui sommes-nous",
    description: "Notre équipe, nos valeurs, nos engagements",
  },
  {
    href: "/articles",
    title: "Actualités",
    description: "Veille réglementaire et conseils pratiques",
  },
  {
    href: "/faq",
    title: "FAQ",
    description: "Les réponses aux questions les plus fréquentes",
  },
  {
    href: "/contact",
    title: "Nous contacter",
    description: "Devis sous 24h, intervention partout en France",
  },
];

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-[color:var(--brand-cream)] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white mb-6">
          <AlertOctagon className="size-7" />
        </div>
        <div className="text-7xl md:text-8xl font-black tracking-[-0.05em] text-[color:var(--brand-charcoal)] leading-none mb-3">
          404
        </div>
        <h1 className="mb-4 text-[color:var(--brand-charcoal)]">
          Page introuvable
        </h1>
        <p className="text-[color:var(--brand-gray-medium)] mb-8 max-w-xl mx-auto leading-relaxed">
          La page que vous cherchez n&apos;existe pas, a été déplacée ou
          l&apos;adresse est mal orthographiée. Voici quelques liens utiles
          pour vous orienter.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            size="lg"
            className="uppercase tracking-wider font-semibold"
            render={
              <Link href="/">
                <Home />
                <span>Retour à l&apos;accueil</span>
              </Link>
            }
          />
          <Button
            size="lg"
            variant="outline"
            className="uppercase tracking-wider"
            render={
              <Link href="/formations">
                <Search />
                <span>Voir le catalogue</span>
              </Link>
            }
          />
        </div>

        <div className="text-left max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-bold text-[color:var(--brand-red)] mb-4 text-center">
            Liens utiles
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-start gap-3 rounded-sm border border-[color:var(--brand-gray-medium)]/15 bg-white p-4 hover:border-[color:var(--brand-red)] hover:shadow-sm transition-all"
                >
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors">
                      {link.title}
                    </div>
                    <div className="text-xs text-[color:var(--brand-gray-medium)] mt-0.5">
                      {link.description}
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] mt-0.5 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
