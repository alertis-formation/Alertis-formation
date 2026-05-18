import Link from "next/link";
import { ChevronRight, Construction } from "lucide-react";

type Breadcrumb = { label: string; href?: string };

type PageShellProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
};

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
}: PageShellProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-[color:var(--brand-cream)] via-white to-[color:var(--brand-mint)]/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Fil d'Ariane"
              className="mb-6 flex items-center flex-wrap gap-1.5 text-sm text-[color:var(--brand-gray-medium)]"
            >
              <Link
                href="/"
                className="hover:text-[color:var(--brand-red)]"
              >
                Accueil
              </Link>
              {breadcrumbs.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="size-3.5 text-[color:var(--brand-gray-medium)]/60" />
                  {b.href ? (
                    <Link
                      href={b.href}
                      className="hover:text-[color:var(--brand-red)]"
                    >
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-[color:var(--brand-gray)] font-medium">
                      {b.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="text-[color:var(--brand-gray)] max-w-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-lg text-[color:var(--brand-gray-medium)] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
      {children}
    </>
  );
}

export function ComingSoonBlock({
  description = "Cette page est en cours de migration depuis WordPress. Elle sera disponible prochainement avec l'ensemble du contenu.",
}: {
  description?: string;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] mb-6">
          <Construction className="size-7" />
        </div>
        <h2 className="text-[color:var(--brand-gray)] mb-4">
          Migration en cours
        </h2>
        <p className="text-[color:var(--brand-gray-medium)] leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
          >
            Nous contacter
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-border text-[color:var(--brand-gray)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-cream)] transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
