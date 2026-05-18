import { Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { DevisForm } from "@/components/site/devis-form";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Demande de formation AFGSU",
  description:
    "Inscription et demande de devis pour une formation AFGSU niveau 1, niveau 2 ou recyclage. Réponse sous 24h ouvrées.",
  alternates: { canonical: "/contact-formation-afgsu" },
};

export default function ContactAfgsuPage() {
  return (
    <PageShell
      title="Demande de formation AFGSU"
      subtitle="Une question sur nos formations AFGSU 1, AFGSU 2 ou sur l'accompagnement Alertis ? Notre équipe vous répond rapidement."
      breadcrumbs={[
        { label: "Formations", href: "/formations" },
        { label: "AFGSU", href: "/nos-formations-afgsu" },
        { label: "Demande" },
      ]}
    >
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-[1fr_1.6fr] items-start">
          {/* Quick contact */}
          <aside className="lg:sticky lg:top-32 space-y-6">
            <div>
              <span className="eyebrow">Spécifique AFGSU</span>
              <h2 className="mt-3 text-2xl">Une équipe dédiée santé.</h2>
              <p className="mt-3 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed">
                Formations AFGSU 1, 2 et recyclage pour les professionnels de
                santé, conformes à l&apos;arrêté du 30 décembre 2014.
              </p>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="group flex gap-3 items-start"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                      Téléphone
                    </div>
                    <div className="text-lg font-bold text-[color:var(--brand-charcoal)]">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex gap-3 items-start"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                      Email
                    </div>
                    <div className="text-sm font-medium text-[color:var(--brand-charcoal)] break-all">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)]">
                  <Clock className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                    Horaires
                  </div>
                  <div className="text-sm text-[color:var(--brand-charcoal)]">
                    Lun-sam 8h30-18h30
                  </div>
                </div>
              </li>
            </ul>

            <div className="rounded-sm border border-[color:var(--brand-red)]/20 bg-white p-4">
              <div className="flex items-center gap-2 mb-2 text-[color:var(--brand-red)]">
                <ShieldCheck className="size-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  Financement FIFPL
                </span>
              </div>
              <p className="text-xs text-[color:var(--brand-gray-medium)] leading-relaxed">
                Nos formations AFGSU sont éligibles aux financements{" "}
                <strong className="text-[color:var(--brand-charcoal)]">
                  FIFPL
                </strong>{" "}
                pour les professions libérales de santé. Possibilité de prise
                en charge par votre établissement ou financement personnel.
              </p>
            </div>
          </aside>

          {/* Formulaire embed avec source AFGSU */}
          <div>
            <span className="eyebrow">Inscription AFGSU</span>
            <h2 className="mt-3 text-2xl mb-6">Réservez votre session.</h2>
            <DevisForm params={{ source: "afgsu" }} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
