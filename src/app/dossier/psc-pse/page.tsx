import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  BookOpen,
  Award,
  Users,
  ArrowLeft,
  Mail,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import {
  DocumentList,
  type DocumentItem,
} from "@/components/site/document-list";

export const metadata = {
  title: "Ressources PSC — Premier Secours Citoyen",
  description:
    "Référentiel national 2024 du PSC (Premier Secours Citoyen). Recommandations et supports de formation citoyens aux gestes qui sauvent.",
  alternates: { canonical: "/dossier/psc-pse" },
};

const psc: DocumentItem[] = [
  {
    icon: BookOpen,
    title: "Référentiel PSC 2024",
    description:
      "Recommandations et référentiel national 2024 du PSC (Premier Secours Citoyen). Cadre d'intervention citoyen face aux personnes en détresse, techniques de premiers secours conformes aux normes en vigueur.",
    href: "/docs/referentiel-psc1-2024.pdf",
    fileSize: "1.6 Mo",
  },
];

const supportsFormateur: DocumentItem[] = [
  {
    icon: Award,
    title: "Grilles d'évaluation PSC",
    description:
      "Grilles d'évaluation des compétences PSC par séquence : reconnaissance, alerte, gestes techniques, mises en situation.",
    restricted: true,
  },
  {
    icon: Users,
    title: "Scénarios de mise en situation",
    description:
      "Bibliothèque de scénarios pédagogiques (cas concrets, simulations) pour les formations PSC.",
    restricted: true,
  },
  {
    icon: BookOpen,
    title: "Livret participant PSC",
    description:
      "Support apprenant à distribuer aux participants de la formation PSC : fiches techniques, aide-mémoire des gestes.",
    restricted: true,
  },
];

export default function DossierPscPsePage() {
  return (
    <PageShell
      title="Ressources PSC"
      subtitle="Référentiel 2024 de la formation Premier Secours Citoyen — la formation grand public aux gestes qui sauvent."
      breadcrumbs={[
        { label: "Espace formateur", href: "/dossier" },
        { label: "PSC" },
      ]}
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">
              <Stethoscope className="size-3.5" />
              PSC · Référentiel 2024
            </span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Premier Secours{" "}
              <span className="text-[color:var(--brand-red)]">Citoyen</span>.
            </h2>
            <p className="text-lg">
              Le{" "}
              <strong className="text-[color:var(--brand-charcoal)]">PSC</strong>{" "}
              équipe le citoyen pour intervenir en attendant les secours. Le
              diplôme d&apos;État PSC relève du ministère de l&apos;Intérieur
              et n&apos;est délivré que par les associations agréées de
              sécurité civile : Alertis dispense le contenu pédagogique de
              référence et remet une attestation de participation.
            </p>
            <p>
              Le référentiel national 2024 ci-dessous fait foi. Il est élaboré
              par les commissions d&apos;experts à partir des sociétés savantes
              et adapté au contexte d&apos;intervention des secouristes
              français.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/formations/formation-psc-premiers-secours-citoyen.jpg"
                alt="Formation PSC — Premier Secours Citoyen"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <Stethoscope className="size-4 text-[color:var(--brand-red)]" />
                  Premiers secours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Référentiel public */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Référentiel PSC · Téléchargement libre"
            title="Premier Secours Citoyen"
            description="Le référentiel PSC 2024, document national de référence pour la formation citoyenne aux premiers secours."
            items={psc}
          />
        </div>
      </section>

      {/* Supports formateur */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Supports formateur · Accès Alertis"
            title="Grilles, scénarios et livrets participants"
            description="Supports pédagogiques internes pour conduire et évaluer les formations PSC. Réservés aux formateurs missionnés Alertis."
            items={supportsFormateur}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[color:var(--brand-charcoal)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-[color:var(--brand-mint)]/15 text-[color:var(--brand-mint)] mb-6">
            <Mail className="size-7" />
          </div>
          <h2 className="text-white mb-4">
            Organiser une formation PSC&nbsp;?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Nous formons les citoyens sur tout le territoire français — en
            intra-entreprise ou sur notre centre.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="uppercase tracking-wider font-semibold"
              render={
                <Link href="/contact">
                  <span>Demander un devis</span>
                  <ArrowRight />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="uppercase tracking-wider bg-transparent text-white hover:text-[color:var(--brand-charcoal)]"
              render={
                <Link href="/dossier">
                  <ArrowLeft />
                  <span>Espace formateur</span>
                </Link>
              }
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
