import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Star, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { DevisForm } from "@/components/site/devis-form";
import { MapEmbed } from "@/components/site/map-embed";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact & demande de devis",
  description:
    "Contactez Alertis Formation pour un devis personnalisé sur vos besoins en formation santé et sécurité au travail. Réponse sous 24h ouvrées.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      title="Parlons de votre projet de formation"
      subtitle="Notre équipe revient vers vous sous 24 heures ouvrées avec une proposition adaptée à vos besoins."
      breadcrumbs={[{ label: "Contact" }]}
    >
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-[1fr_1.6fr] items-start">
          {/* Infos pratiques */}
          <aside className="space-y-6">
            <div>
              <span className="eyebrow">Coordonnées</span>
              <h2 className="mt-3 text-2xl">Joignez-nous directement.</h2>
              <p className="mt-3 text-sm text-[color:var(--brand-gray-medium)] leading-relaxed">
                Pour une réponse immédiate, contactez-nous par téléphone ou
                email. Sinon, remplissez le formulaire ci-contre et nous
                revenons vers vous sous 24h.
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
              <li>
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 items-start"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                      Adresse
                    </div>
                    <address className="not-italic text-sm text-[color:var(--brand-charcoal)] leading-snug group-hover:text-[color:var(--brand-red)] transition-colors">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.postalCode}{" "}
                      {siteConfig.contact.address.city}
                    </address>
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
                  <ul className="text-sm text-[color:var(--brand-charcoal)] space-y-0.5">
                    {siteConfig.contact.hours.map((h) => (
                      <li key={h.days}>
                        <span className="font-medium">{h.days}</span>
                        <span className="mx-1.5 text-[color:var(--brand-gray-medium)]">
                          ·
                        </span>
                        <span className="text-[color:var(--brand-gray-medium)]">
                          {h.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Google Maps embed — respects cookie consent */}
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold mb-2">
                Nous trouver
              </div>
              <MapEmbed />
            </div>

            <div className="rounded-sm bg-[color:var(--brand-cream)] p-4 text-xs text-[color:var(--brand-gray-medium)] leading-relaxed">
              <strong className="text-[color:var(--brand-charcoal)] block mb-1">
                Intervention partout en France
              </strong>
              Nos formateurs se déplacent sur l&apos;ensemble du territoire
              français avec leur matériel pédagogique (extincteurs, bac à feu,
              mannequins SST, etc.).
            </div>

            {/* Google review CTA */}
            <Link
              href="/avis"
              className="group flex items-start gap-3 rounded-sm border border-[color:var(--brand-gray-medium)]/15 bg-white p-4 hover:border-[color:var(--brand-red)]/40 hover:shadow-sm transition-all"
            >
              <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-[#fbbc04]/10 text-[#fbbc04] group-hover:bg-[#fbbc04] group-hover:text-white transition-colors">
                <Star className="size-5 fill-current" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                  Vous avez été formé chez nous&nbsp;?
                </div>
                <div className="mt-0.5 text-sm font-semibold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors inline-flex items-center gap-1">
                  Laissez-nous un avis Google
                  <ArrowUpRight className="size-3.5" />
                </div>
                <p className="mt-1 text-xs text-[color:var(--brand-gray-medium)] leading-relaxed">
                  Votre retour aide d&apos;autres entreprises à choisir leur
                  organisme de formation.
                </p>
              </div>
            </Link>
          </aside>

          {/* Formulaire embed */}
          <div>
            <span className="eyebrow">Formulaire de devis</span>
            <h2 className="mt-3 text-2xl mb-6">Décrivez votre besoin.</h2>
            <DevisForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
