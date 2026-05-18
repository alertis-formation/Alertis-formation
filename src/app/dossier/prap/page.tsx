import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  BookOpen,
  FileText,
  ClipboardCheck,
  Eye,
  HeartHandshake,
  Factory,
  Building2,
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
  title: "Ressources PRAP IBC & 2S — Prévention des Risques liés à l'Activité Physique",
  description:
    "Documents de référence INRS pour la PRAP IBC (industrie, BTP, commerce) et PRAP 2S (sanitaire et social). Manuel acteur, fiches d'observation, supports formateur.",
  alternates: { canonical: "/dossier/prap" },
};

const documentsCommuns: DocumentItem[] = [
  {
    icon: BookOpen,
    title: "Document de référence PRAP",
    description:
      "Document de référence INRS du dispositif PRAP. Cadre, objectifs et architecture du dispositif Prévention des Risques liés à l'Activité Physique.",
    restricted: true,
  },
  {
    icon: FileText,
    title: "Manuel formation acteur PRAP IBC & 2S",
    description:
      "Manuel d'accompagnement complet pour le formateur PRAP, couvrant les deux secteurs (IBC et 2S). Méthodologie, supports d'animation et progression pédagogique.",
    restricted: true,
  },
  {
    icon: Eye,
    title: "Fiche d'observation et d'analyse — Acteur PRAP",
    description:
      "Grille d'observation et d'analyse à compléter par l'acteur PRAP dans son environnement de travail. Identification des risques liés à l'activité physique et propositions d'amélioration.",
    restricted: true,
  },
  {
    icon: ClipboardCheck,
    title: "Fiche d'observation et d'analyse — Formateur PRAP",
    description:
      "Outil d'évaluation pour le formateur : observation des compétences de l'acteur PRAP lors des mises en situation et de l'analyse d'une situation de travail réelle.",
    restricted: true,
  },
];

const supportsIbc: DocumentItem[] = [
  {
    icon: Factory,
    title: "Déroulé pédagogique PRAP IBC",
    description:
      "Trame d'animation pour le secteur Industrie, BTP, Commerce et activités de bureau. Séquences, durées, méthodes et matériel par module.",
    restricted: true,
  },
  {
    icon: BookOpen,
    title: "Livret participant PRAP IBC",
    description:
      "Support apprenant pour la formation PRAP IBC. Rappels anatomiques, principes de sécurité physique et économie d'effort, ergonomie au poste.",
    restricted: true,
  },
];

const supports2s: DocumentItem[] = [
  {
    icon: HeartHandshake,
    title: "Déroulé pédagogique PRAP 2S",
    description:
      "Trame d'animation pour le secteur Sanitaire et Social. Adaptations aux contraintes spécifiques : manutention de personnes, postures soignantes, aides techniques.",
    restricted: true,
  },
  {
    icon: Building2,
    title: "Livret participant PRAP 2S",
    description:
      "Support apprenant pour le secteur sanitaire et social : EHPAD, structures médico-sociales, soins à domicile. Mobilisation de personnes, prévention des TMS.",
    restricted: true,
  },
];

export default function DossierPrapPage() {
  return (
    <PageShell
      title="Ressources PRAP IBC & 2S"
      subtitle="Prévention des Risques liés à l'Activité Physique : référentiels et supports pédagogiques pour les deux secteurs — Industrie/BTP/Commerce (IBC) et Sanitaire/Social (2S)."
      breadcrumbs={[
        { label: "Espace formateur", href: "/dossier" },
        { label: "PRAP" },
      ]}
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">
              <Accessibility className="size-3.5" />
              PRAP · Référentiel INRS
            </span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Prévenir les{" "}
              <span className="text-[color:var(--brand-red)]">TMS</span> à la
              source.
            </h2>
            <p className="text-lg">
              La formation{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                PRAP
              </strong>{" "}
              (Prévention des Risques liés à l'Activité Physique) outille les
              salariés à devenir acteur de leur santé au travail. Elle se
              décline en deux secteurs :{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                IBC
              </strong>{" "}
              (Industrie, BTP, Commerce) et{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                2S
              </strong>{" "}
              (Sanitaire et Social).
            </p>
            <p>
              L'ensemble des supports PRAP est diffusé selon le cadre INRS et
              ses centres habilités. Les ressources ci-dessous sont
              accessibles aux formateurs missionnés Alertis sur demande à la
              coordination pédagogique.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/formations/formation-prap-ibc.jpg"
                alt="Formation PRAP — Prévention des Risques liés à l'Activité Physique"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <Accessibility className="size-4 text-[color:var(--brand-red)]" />
                  PRAP IBC & 2S
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents communs (INRS) */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Documents communs · Référentiel INRS"
            title="Cadre PRAP — IBC & 2S"
            description="Documents structurants du dispositif PRAP, communs aux deux secteurs. Diffusion encadrée par l'INRS — accès via la coordination pédagogique Alertis."
            items={documentsCommuns}
          />
        </div>
      </section>

      {/* PRAP IBC */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="PRAP IBC · Industrie, BTP, Commerce"
            title="Supports secteur IBC"
            description="Supports d'animation adaptés au secteur industrie, BTP, commerce et activités de bureau."
            items={supportsIbc}
          />
        </div>
      </section>

      {/* PRAP 2S */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="PRAP 2S · Sanitaire et Social"
            title="Supports secteur 2S"
            description="Supports d'animation adaptés au secteur sanitaire et social : EHPAD, structures médico-sociales, soins à domicile."
            items={supports2s}
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
            Former vos équipes à la PRAP&nbsp;?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Nous formons des acteurs PRAP IBC et 2S sur l'ensemble du
            territoire. Demandez un devis adapté à votre secteur et à vos
            effectifs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="uppercase tracking-wider font-semibold"
              render={
                <Link href="/contact">
                  <span>Demander un devis PRAP</span>
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
