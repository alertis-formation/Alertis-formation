import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  BookOpen,
  Award,
  Users,
  ShieldPlus,
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
  title: "Ressources PSC, PSE1 & PSE2 — Premiers secours civiques et en équipe",
  description:
    "Référentiels 2024 des formations PSC (Prévention et Secours Civiques de niveau 1) et PSE1/PSE2 (Premiers Secours en Équipe). Recommandations nationales et supports de formation.",
  alternates: { canonical: "/dossier/psc-pse" },
};

const psc1: DocumentItem[] = [
  {
    icon: BookOpen,
    title: "Référentiel PSC 2024",
    description:
      "Recommandations et référentiel national 2024 du PSC (Prévention et Secours Civiques de niveau 1). Cadre d'intervention citoyen face aux personnes en détresse, techniques de premiers secours conformes aux normes en vigueur.",
    href: "/docs/referentiel-psc1-2024.pdf",
    fileSize: "1.6 Mo",
  },
];

const pse: DocumentItem[] = [
  {
    icon: ShieldPlus,
    title: "Référentiel PSE1 & PSE2 2024",
    description:
      "Recommandations et guide de référence 2024 pour les Premiers Secours en Équipe de niveau 1 et de niveau 2. Procédures et techniques pour les acteurs des secours organisés et des associations agréées de sécurité civile.",
    href: "/docs/referentiel-pse-2024.pdf",
    fileSize: "5.8 Mo",
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
    icon: Award,
    title: "Grilles d'évaluation PSE1 & PSE2",
    description:
      "Grilles d'évaluation continue et de validation finale des formations PSE1 et PSE2. Critères d'évaluation par compétence.",
    restricted: true,
  },
  {
    icon: Users,
    title: "Scénarios de mise en situation",
    description:
      "Bibliothèque de scénarios pédagogiques (cas concrets, simulations) pour les formations PSC, PSE1 et PSE2.",
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
      title="Ressources PSC, PSE1 & PSE2"
      subtitle="Référentiels 2024 des formations citoyennes et en équipe : PSC pour le grand public, PSE1 et PSE2 pour les secouristes des associations agréées de sécurité civile et des services de secours."
      breadcrumbs={[
        { label: "Espace formateur", href: "/dossier" },
        { label: "PSC & PSE" },
      ]}
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">
              <Stethoscope className="size-3.5" />
              PSC · PSE1 · PSE2 · Référentiels 2024
            </span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Prévention et secours{" "}
              <span className="text-[color:var(--brand-red)]">civiques et en équipe</span>.
            </h2>
            <p className="text-lg">
              Le{" "}
              <strong className="text-[color:var(--brand-charcoal)]">PSC</strong>{" "}
              équipe le citoyen pour intervenir en attendant les secours.
              Le{" "}
              <strong className="text-[color:var(--brand-charcoal)]">PSE1</strong>{" "}
              et le{" "}
              <strong className="text-[color:var(--brand-charcoal)]">PSE2</strong>{" "}
              forment les secouristes membres des associations agréées de
              sécurité civile et des services de secours, à travailler en
              équipe et avec du matériel spécifique.
            </p>
            <p>
              Les référentiels nationaux 2024 ci-dessous font foi. Ils sont
              élaborés par les commissions d'experts à partir des sociétés
              savantes et adaptés au contexte d'intervention des
              secouristes français.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/formations/formation-psc-premiers-secours-citoyen.jpg"
                alt="Formation PSC — Premiers Secours Citoyens"
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

      {/* Référentiels publics */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Référentiel PSC · Téléchargement libre"
            title="Prévention et Secours Civiques de niveau 1"
            description="Le référentiel PSC 2024, document national de référence pour la formation citoyenne aux premiers secours."
            items={psc1}
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Référentiel PSE · Téléchargement libre"
            title="Premiers Secours en Équipe niveaux 1 & 2"
            description="Recommandations 2024 pour les acteurs des secours organisés : utilisation de matériel, prise en charge à deux ou plus, coordination avec les services de secours."
            items={pse}
          />
        </div>
      </section>

      {/* Supports formateur */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Supports formateur · Accès Alertis"
            title="Grilles, scénarios et livrets participants"
            description="Supports pédagogiques internes pour conduire et évaluer les formations PSC, PSE1 et PSE2. Réservés aux formateurs missionnés Alertis."
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
            Organiser une formation PSC, PSE1 ou PSE2&nbsp;?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Nous formons les citoyens et secouristes sur tout le territoire
            français — en intra-entreprise, association ou sur notre centre.
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
