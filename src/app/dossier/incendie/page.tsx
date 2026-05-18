import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  FileText,
  BookOpen,
  Building2,
  Baby,
  Heart,
  Megaphone,
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
  title: "Ressources Incendie — Supports & consignes de sécurité",
  description:
    "Bibliothèque de ressources pédagogiques sur la sécurité incendie : consignes affichables, livret de formation, supports d'animation et procédures pour ERP, IGH, crèches et établissements de soins.",
  alternates: { canonical: "/dossier/incendie" },
};

const publics: DocumentItem[] = [
  {
    icon: Megaphone,
    title: "Consigne de sécurité incendie",
    description:
      "Fiche à afficher dans l'entreprise pour permettre aux salariés de connaître les numéros d'urgence, l'emplacement du point de rassemblement et la conduite à tenir en cas d'incendie.",
    href: "/docs/consigne-securite-incendie.pdf",
    fileSize: "0.2 Mo",
  },
  {
    icon: Megaphone,
    title: "Consigne de sécurité incendie (avec confinement)",
    description:
      "Variante de la consigne intégrant la procédure de confinement, recommandée pour les établissements concernés par le PPMS et les risques industriels environnants.",
    href: "/docs/consigne-securite-incendie-confinement.pdf",
    fileSize: "0.2 Mo",
  },
  {
    icon: BookOpen,
    title: "Livret de formation incendie",
    description:
      "Support pédagogique complet à remettre aux participants : classes de feu, modes de propagation, types d'extincteurs, évacuation, rôle des équipiers de première intervention.",
    href: "/docs/livret-formation-incendie.pdf",
    fileSize: "2.9 Mo",
  },
];

const supportsMembres: DocumentItem[] = [
  {
    icon: Flame,
    title: "Pack Formation incendie en entreprise",
    description:
      "Supports d'animation Alertis pour la formation incendie standard : diaporama, fiches techniques EPI, scénario d'exercice d'évacuation, trame de bilan.",
    restricted: true,
  },
  {
    icon: Building2,
    title: "Pack ERP & IGH",
    description:
      "Adaptation des supports aux établissements recevant du public et aux immeubles de grande hauteur : règlement de sécurité, équipes de seconde intervention, transferts horizontaux.",
    restricted: true,
  },
  {
    icon: Baby,
    title: "Pack Incendie crèche & petite enfance",
    description:
      "Supports dédiés aux structures d'accueil de la petite enfance : risques spécifiques, mise à l'abri, évacuation enfants en bas âge, coordination équipe.",
    restricted: true,
  },
  {
    icon: Heart,
    title: "Pack Incendie ERP type J et U",
    description:
      "Supports pour les établissements de soins, EHPAD, maisons de retraite et structures sanitaires : procédures de transfert, gestion des personnes à mobilité réduite, équipes de seconde intervention.",
    restricted: true,
  },
  {
    icon: Baby,
    title: "Pack People & Baby — Journée pédagogique",
    description:
      "Ressources spécifiques à la convention People & Baby : programme de la journée, livret stagiaire, procédures internes et déroulé d'animation.",
    restricted: true,
  },
  {
    icon: FileText,
    title: "Fiches techniques EPI & extincteurs",
    description:
      "Fiches techniques détaillées sur les Équipements de Première Intervention : types d'extincteurs, mode opératoire, vérification périodique, dotation minimale.",
    restricted: true,
  },
];

export default function DossierIncendiePage() {
  return (
    <PageShell
      title="Ressources Incendie — Supports & consignes"
      subtitle="Consignes affichables, livret formation et supports d'animation pour la sécurité incendie. ERP, IGH, crèches, EHPAD, établissements de soins type J et U : tout pour préparer vos sessions et exercices d'évacuation."
      breadcrumbs={[
        { label: "Espace formateur", href: "/dossier" },
        { label: "Incendie" },
      ]}
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">
              <Flame className="size-3.5" />
              Prévention & lutte contre l'incendie
            </span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Ressources pour vos formations{" "}
              <span className="text-[color:var(--brand-red)]">incendie</span>.
            </h2>
            <p className="text-lg">
              De la consigne de sécurité affichable au livret de formation
              complet, en passant par les supports adaptés aux ERP, IGH,
              crèches et établissements de soins — cette section regroupe
              tout ce qui structure une formation incendie efficace.
            </p>
            <p>
              Les trois{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                documents publics
              </strong>{" "}
              ci-dessous sont en téléchargement libre et peuvent être
              redistribués à vos stagiaires. Les supports d'animation
              spécifiques aux missions Alertis restent réservés aux
              formateurs missionnés.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/categories/securite-incendie.jpg"
                alt="Formation sécurité incendie Alertis"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <Flame className="size-4 text-[color:var(--brand-red)]" />
                  Sécurité incendie
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public PDFs */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Documents publics · Téléchargement libre"
            title="Consignes & livret de formation"
            description="Documents conçus pour être affichés dans l'entreprise ou distribués aux participants en formation."
            items={publics}
          />
        </div>
      </section>

      {/* Member packs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Packs formateur · Accès Alertis"
            title="Supports d'animation par secteur"
            description="Supports complets adaptés à chaque type d'établissement. Réservés aux formateurs missionnés par Alertis sur les conventions correspondantes."
            items={supportsMembres}
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
            Besoin d'un support spécifique&nbsp;?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Notre coordination pédagogique adapte les supports d'animation aux
            spécificités de votre établissement et de votre public.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="uppercase tracking-wider font-semibold"
              render={
                <Link href="/contact">
                  <span>Demander un support</span>
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
