import Image from "next/image";
import Link from "next/link";
import {
  LifeBuoy,
  BookOpen,
  Video,
  ClipboardCheck,
  ListChecks,
  Award,
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
  title: "Ressources GQS — Gestes qui sauvent",
  description:
    "Référentiel GQS 2024, recommandations nationales, fiches techniques et supports d'animation pour conduire vos sensibilisations aux gestes qui sauvent.",
  alternates: { canonical: "/dossier/gestes-qui-sauvent" },
};

const referentiels: DocumentItem[] = [
  {
    icon: BookOpen,
    title: "Référentiel GQS 2024",
    description:
      "Recommandations et guide technique 2024 pour la sensibilisation aux gestes qui sauvent. Référentiel national aligné sur les recommandations PSC1 : alerte, hémorragie, perte de connaissance, arrêt cardiaque.",
    href: "/docs/referentiel-gqs-2024.pdf",
    fileSize: "1.3 Mo",
  },
];

const supportsFormateur: DocumentItem[] = [
  {
    icon: ListChecks,
    title: "Déroulé pédagogique GQS — 2 heures",
    description:
      "Trame complète d'animation d'une session GQS de 2 heures : séquences, durées, objectifs et matériel nécessaire.",
    restricted: true,
  },
  {
    icon: Video,
    title: "Vidéos techniques GQS",
    description:
      "Démonstrations gestuelles : alerter, compression d'hémorragie externe, position d'attente, position latérale de sécurité, compressions thoraciques.",
    restricted: true,
  },
  {
    icon: ClipboardCheck,
    title: "Attestation de sensibilisation GQS",
    description:
      "Modèle d'attestation de sensibilisation aux gestes qui sauvent à remettre aux participants en fin de session.",
    restricted: true,
  },
  {
    icon: Award,
    title: "Livret participant GQS",
    description:
      "Aide-mémoire à distribuer aux participants à l'issue de la sensibilisation : rappel des gestes, fiches synthétiques par situation.",
    restricted: true,
  },
];

export default function DossierGqsPage() {
  return (
    <PageShell
      title="Ressources GQS — Gestes qui sauvent"
      subtitle="Référentiel 2024, recommandations nationales et supports d'animation pour conduire vos sensibilisations aux gestes qui sauvent — un format court (2h) accessible à tous publics."
      breadcrumbs={[
        { label: "Espace formateur", href: "/dossier" },
        { label: "Gestes qui sauvent" },
      ]}
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">
              <LifeBuoy className="size-3.5" />
              GQS · Référentiel national 2024
            </span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Sensibiliser au{" "}
              <span className="text-[color:var(--brand-red)]">geste qui sauve</span>.
            </h2>
            <p className="text-lg">
              Le module GQS est une{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                sensibilisation de 2 heures
              </strong>{" "}
              accessible à tous, structurée par le référentiel national de
              2024. Elle vise à donner à chacun les premiers réflexes face à
              l'urgence vitale.
            </p>
            <p>
              Le contenu pédagogique est aligné sur les recommandations PSC1
              (alerter, secourir face à une hémorragie, perte de connaissance,
              arrêt cardiaque) — il constitue la passerelle naturelle vers
              les formations PSC1, SST, PSE1 et PSE2.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/formations/formation-gqs-gestes-qui-sauvent.jpg"
                alt="Formation gestes qui sauvent"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <LifeBuoy className="size-4 text-[color:var(--brand-red)]" />
                  Gestes qui sauvent
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
            eyebrow="Référentiel officiel · Téléchargement libre"
            title="Recommandations nationales 2024"
            description="Document de référence pour la sensibilisation aux gestes qui sauvent. Recommandations techniques et pédagogiques nationales."
            items={referentiels}
          />
        </div>
      </section>

      {/* Supports formateur */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Supports formateur · Accès Alertis"
            title="Supports d'animation GQS"
            description="Déroulé pédagogique, vidéos techniques et livret participant. Réservés aux formateurs missionnés Alertis."
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
            Organiser une session GQS&nbsp;?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Nous organisons des sensibilisations GQS dans vos locaux ou sur
            notre centre de formation. Contactez-nous pour un devis.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="uppercase tracking-wider font-semibold"
              render={
                <Link href="/contact">
                  <span>Demander un devis GQS</span>
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
