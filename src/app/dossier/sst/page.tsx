import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  BookOpen,
  FileText,
  ClipboardCheck,
  GraduationCap,
  Award,
  Layout,
  Video,
  Image as ImageIcon,
  ListChecks,
  Gamepad2,
  Volume2,
  Megaphone,
  Scale,
  FileSignature,
  BookMarked,
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
  title: "Ressources SST — Sauveteur Secouriste du Travail",
  description:
    "Bibliothèque de ressources pédagogiques pour la formation SST : référentiels INRS, manuels formateurs, aide-mémoires, grilles de certification, plans d'action prévention et outils d'animation.",
  alternates: { canonical: "/dossier/sst" },
};

const referentiels: DocumentItem[] = [
  {
    icon: BookOpen,
    title: "Guide de données techniques SST 2024",
    description:
      "Dernière version du guide technique INRS V9 : nouvelles séquences sur l'arrêt cardio-respiratoire, l'utilisation du DAE, l'évaluation respiratoire à 10 secondes, les compressions hémorragiques et les brûlures chimiques.",
    href: "/docs/guide-donnees-techniques-sst-2024.pdf",
    fileSize: "0.9 Mo",
  },
  {
    icon: GraduationCap,
    title: "Manuel du formateur SST",
    description:
      "Manuel d'accompagnement complet pour le formateur SST : lecture du référentiel de compétences, utilisation des grilles de certification et animation des outils pédagogiques INRS (PAP, plan d'intervention).",
    href: "/docs/manuel-formateur-sst.pdf",
    fileSize: "2.3 Mo",
  },
  {
    icon: BookMarked,
    title: "Aide-mémoire SST",
    description:
      "Aide-mémoire distribué aux apprenants à l'issue de la formation initiale SST et du recyclage MAC SST. Accès rapide aux connaissances essentielles : prévention des risques et conduite en cas d'accident.",
    href: "/docs/aide-memoire-sst.pdf",
    fileSize: "0.3 Mo",
  },
  {
    icon: FileText,
    title: "Document de référence SST",
    description:
      "Document de référence du dispositif SST INRS. Cadre, objectifs de formation, procédures de certification, modalités de mise en œuvre et rôles des acteurs du dispositif.",
    href: "/docs/document-reference-sst.pdf",
    fileSize: "1.0 Mo",
  },
  {
    icon: Award,
    title: "Cahier des charges habilitation SST",
    description:
      "Cahier des charges relatif à l'habilitation SST par l'INRS et la CARSAT. Preuves techniques et pédagogiques attendues, critères d'évaluation pour les organismes souhaitant délivrer la formation SST.",
    href: "/docs/cahier-charges-habilitation-sst.pdf",
    fileSize: "0.3 Mo",
  },
  {
    icon: ClipboardCheck,
    title: "Plan d'action prévention PAP (dématérialisé)",
    description:
      "Outil pédagogique INRS conçu pour les formations SST. Archive contenant le PAP dématérialisé à installer : animation du plan d'action prévention et démonstration aux apprenants.",
    href: "/docs/plan-actions-prevention-pap.zip",
    fileSize: "2.3 Mo",
    fileType: "ZIP",
  },
];

const ressourcesFormateur: DocumentItem[] = [
  {
    icon: Layout,
    title: "Plan d'intervention SST (PREFAS)",
    description:
      "Animation du PREFAS et plan d'intervention dématérialisé pour les exercices de mise en situation en formation SST.",
    restricted: true,
  },
  {
    icon: Video,
    title: "Vidéos techniques INRS",
    description:
      "Bibliothèque vidéo des techniques en formation SST conformément au référentiel INRS V9. Démonstrations gestuelles, mises en situation et corrections.",
    restricted: true,
  },
  {
    icon: ClipboardCheck,
    title: "Grille de certification SST",
    description:
      "Grille officielle de certification des compétences du SST. Critères d'évaluation par domaine de compétences.",
    restricted: true,
  },
  {
    icon: ClipboardCheck,
    title: "Grille de certification MAC SST",
    description:
      "Grille de certification du maintien et actualisation des compétences SST. Évaluation des compétences lors du recyclage.",
    restricted: true,
  },
  {
    icon: ListChecks,
    title: "Déroulé pédagogique SST",
    description:
      "Trame complète du déroulé pédagogique de la formation SST : séquences, durées, objectifs, méthodes et supports recommandés.",
    restricted: true,
  },
  {
    icon: ImageIcon,
    title: "Logos SST (vert & rouge)",
    description:
      "Téléchargement des logos officiels SST vert et rouge à apposer sur les attestations et supports de communication formateur.",
    restricted: true,
  },
];

const outilsAnimation: DocumentItem[] = [
  {
    icon: Layout,
    title: "Planches TUTOPREV — chasse aux risques",
    description:
      "Ensemble des planches de situations dangereuses TUTOPREV INRS pour les exercices de repérage de risques en formation SST.",
    restricted: true,
  },
  {
    icon: Gamepad2,
    title: "Jeu de cartes PREV-ACTEURS",
    description:
      "Jeu de cartes \"acteur de la prévention\" (versions interne et externe) pour animer les séquences sur le rôle préventif du SST.",
    restricted: true,
  },
  {
    icon: Gamepad2,
    title: "Escape game LudoPrev — CARSAT",
    description:
      "Jeux LUDOPREV réalisés par la CARSAT pour les sessions de sensibilisation et de prévention en formation SST.",
    restricted: true,
  },
  {
    icon: Volume2,
    title: "Bandes sonores Signal National d'Alerte",
    description:
      "Bandes sonores officielles des alertes aux populations (SNA, FR-Alert) à diffuser pour la séquence \"alerter\" en formation SST.",
    restricted: true,
  },
  {
    icon: Megaphone,
    title: "Vidéo de présentation FR-Alert",
    description:
      "Vidéo explicative sur le dispositif national FR-Alert : fonctionnement, déclenchement et bonnes pratiques de réaction.",
    restricted: true,
  },
  {
    icon: Scale,
    title: "Vidéo — Code civil et pénal au travail",
    description:
      "Intervention de Maître Michel LEDOUX sur la responsabilité civile et pénale en milieu professionnel. Support pour la séquence sur le cadre juridique.",
    restricted: true,
  },
];

const outilsAdministratifs: DocumentItem[] = [
  {
    icon: FileSignature,
    title: "CERFA Accident du Travail / Trajet",
    description:
      "Modèle officiel de CERFA pour la déclaration d'accident du travail ou de trajet. Document de référence pour les séquences administratives.",
    restricted: true,
  },
  {
    icon: BookMarked,
    title: "Registre des accidents bénins",
    description:
      "Modèle de registre des accidents du travail bénins, conforme à la réglementation. Outil de traçabilité pour l'employeur et le SST.",
    restricted: true,
  },
];

export default function DossierSstPage() {
  return (
    <PageShell
      title="Ressources SST — Sauveteur Secouriste du Travail"
      subtitle="Référentiels INRS V9, manuels formateur, aide-mémoires, grilles de certification et outils d'animation pour conduire et faire évoluer vos formations SST et MAC SST."
      breadcrumbs={[
        { label: "Espace formateur", href: "/dossier" },
        { label: "SST" },
      ]}
    >
      {/* Intro + hero image */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">
              <HeartPulse className="size-3.5" />
              SST · Référentiel INRS V9
            </span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Tout ce qu'il faut pour conduire une formation{" "}
              <span className="text-[color:var(--brand-red)]">SST conforme</span>.
            </h2>
            <p className="text-lg">
              Cette section rassemble l'ensemble des ressources documentaires
              pour les formateurs SST : référentiels officiels INRS, manuels,
              aide-mémoires apprenants, grilles d'évaluation et outils
              d'animation. Tout ce qu'il faut pour préparer, animer et
              certifier une session SST ou MAC SST.
            </p>
            <p>
              Les documents{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                publics
              </strong>{" "}
              sont en téléchargement direct. Les supports réservés aux
              formateurs missionnés Alertis sont accessibles sur demande à la
              coordination pédagogique.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/formations/formation-sst-sauveteur-secouriste-du-travail.jpg"
                alt="Formation Sauveteur Secouriste du Travail"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <HeartPulse className="size-4 text-[color:var(--brand-red)]" />
                  Sauveteur Secouriste du Travail
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Référentiels officiels (public) */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Référentiels officiels · Téléchargement libre"
            title="Documents INRS de référence"
            description="Les référentiels et guides officiels publiés par l'INRS, en accès libre. Ces documents font foi et servent de cadre à toute formation SST conduite en France."
            items={referentiels}
          />
        </div>
      </section>

      {/* Ressources formateur (sur demande) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Ressources formateur · Accès Alertis"
            title="Supports de mise en œuvre"
            description="Supports pédagogiques internes Alertis : plan d'intervention dématérialisé, vidéos techniques, grilles de certification, déroulés pédagogiques. Réservés aux formateurs SST missionnés."
            items={ressourcesFormateur}
          />
        </div>
      </section>

      {/* Outils d'animation */}
      <section className="py-16 lg:py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Outils d'animation"
            title="Mises en situation et serious games"
            description="Outils ludiques et pédagogiques pour engager les apprenants : planches TUTOPREV, jeux PREV-ACTEURS, LudoPrev CARSAT, bandes sonores SNA, vidéos de mise en contexte."
            items={outilsAnimation}
          />
        </div>
      </section>

      {/* Outils administratifs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <DocumentList
            eyebrow="Outils administratifs"
            title="Documents réglementaires & traçabilité"
            description="Modèles de documents administratifs liés au dispositif SST : déclaration d'accident, registre des accidents bénins."
            items={outilsAdministratifs}
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
            Besoin d'un accès aux ressources formateur&nbsp;?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Si vous êtes formateur SST missionné par Alertis, notre coordination
            pédagogique vous transmet les supports internes sur demande.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="uppercase tracking-wider font-semibold"
              render={
                <Link href="/contact">
                  <span>Demander l'accès</span>
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
