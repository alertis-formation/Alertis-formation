import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  BookOpenCheck,
  RefreshCw,
  FileSearch,
  Bell,
  ArrowUpRight,
  ExternalLink,
  CalendarDays,
  Stethoscope,
  UserCircle2,
  Repeat,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-config";
import { linkifyLegalRefs } from "@/lib/legal-refs";

export const metadata = {
  title: "Veille réglementaire — Sécurité et santé au travail",
  description:
    "Notre démarche de veille réglementaire en santé et sécurité au travail : sources officielles, mise à jour continue des programmes et traçabilité de nos actions.",
  alternates: { canonical: "/veille-reglementaire" },
};

const pillars = [
  {
    icon: Scale,
    title: "Veille légale et réglementaire",
    description:
      "Suivi quotidien du Code du travail, des décrets, arrêtés et circulaires publiés au Journal officiel relatifs à la santé-sécurité au travail.",
  },
  {
    icon: BookOpenCheck,
    title: "Veille pédagogique",
    description:
      "Évolutions des référentiels (INRS, SST, PRAP, CACES®, habilitation électrique, AFGSU) et bonnes pratiques métier.",
  },
  {
    icon: RefreshCw,
    title: "Veille sectorielle",
    description:
      "Suivi des évolutions du secteur de la formation professionnelle (France Compétences, France VAE, certifications RNCP / RS).",
  },
];

const domains = [
  {
    image: "/categories/securite-incendie.jpg",
    title: "Sécurité incendie",
    href: "/formations-securite-incendie",
    items: [
      "Code du travail R.4227",
      "Règlement ERP – arrêté du 25 juin 1980",
      "IGH – Code de la construction",
      "Référentiels APSAD R4 / R6",
    ],
  },
  {
    image: "/categories/secourisme.jpg",
    title: "Secourisme",
    href: "/formations-secourisme",
    items: [
      "Document de référence INRS V9",
      "Code du travail R.4224-15 (SST)",
      "Recommandations ILCOR / ERC",
      "PSC1 – Arrêté du 24 juillet 2007",
    ],
  },
  {
    image: "/categories/habilitation-electrique.jpg",
    title: "Habilitation électrique",
    href: "/formations-habilitation-electrique",
    items: [
      "Norme NF C18-510",
      "Code du travail R.4544",
      "Décret n°2010-1118",
      "Photovoltaïque BP / BR – NF C18-550",
    ],
  },
  {
    image: "/categories/ergonomie.jpg",
    title: "Ergonomie",
    href: "/formations-ergonomie",
    items: [
      "Code du travail R.4541",
      "Référentiel INRS PRAP IBC / 2S",
      "TMS – Plan régional santé travail",
      "Recommandations CNAM R.367 / R.471",
    ],
  },
  {
    image: "/categories/prevention.jpg",
    title: "Prévention",
    href: "/formations-prevention",
    items: [
      "DUERP – Décret 2022-395",
      "Loi Santé au travail du 2 août 2021",
      "CSE – Ordonnance 2017-1386",
      "Harcèlement – L.1153 / ANI sur le stress",
    ],
  },
  {
    image: "/categories/safety-day.jpg",
    title: "Safety Day",
    href: "/formations-safety-day",
    items: [
      "DUERP – Décret 2022-395",
      "Recommandations CARSAT sectorielles",
      "Culture sécurité INRS",
      "Plan d'action prévention employeur",
    ],
  },
];


const process = [
  {
    icon: FileSearch,
    title: "Identifier",
    description:
      "Revue hebdomadaire des sources officielles (Légifrance, INRS, ministère du Travail, DREETS, CARSAT, France Compétences) par notre référent qualité.",
  },
  {
    icon: Bell,
    title: "Analyser",
    description:
      "Évaluation de l'impact sur nos programmes par Cyrille Gagnaire, référent pédagogique, en concertation avec nos formateurs experts.",
  },
  {
    icon: RefreshCw,
    title: "Mettre à jour",
    description:
      "Adaptation des supports, séquences pédagogiques et évaluations pour rester en conformité.",
  },
  {
    icon: ShieldCheck,
    title: "Tracer & diffuser",
    description:
      "Consignation dans notre tableau de veille, information des formateurs et mention dans les programmes diffusés aux bénéficiaires.",
  },
];

const sources = [
  {
    name: "Légifrance",
    url: "https://www.legifrance.gouv.fr",
    description: "Textes officiels, Code du travail, décrets et arrêtés.",
  },
  {
    name: "INRS",
    url: "https://www.inrs.fr",
    description: "Références juridiques et bonnes pratiques en santé au travail.",
  },
  {
    name: "Ministère du Travail",
    url: "https://travail-emploi.gouv.fr",
    description: "Politiques publiques, circulaires et instructions ministérielles.",
  },
  {
    name: "France Compétences",
    url: "https://www.francecompetences.fr",
    description: "Référentiels qualité, RNCP, RS et évolutions de la certification professionnelle.",
  },
  {
    name: "Service-public.fr",
    url: "https://entreprendre.service-public.fr",
    description: "Obligations employeur, démarches et fiches pratiques.",
  },
  {
    name: "ANACT",
    url: "https://www.anact.fr",
    description: "Conditions de travail, prévention RPS et TMS.",
  },
  {
    name: "OPPBTP",
    url: "https://www.oppbtp.com",
    description:
      "Organisme professionnel de prévention du BTP — recommandations sectorielles et bonnes pratiques chantier.",
  },
  {
    name: "Assurance Maladie – Risques pro / CARSAT",
    url: "https://www.ameli.fr/entreprise/sante-travail",
    description:
      "Recommandations CARSAT / CNAM (R.xxx), aides financières et données sinistralité par secteur.",
  },
  {
    name: "ANCESU",
    url: "https://ancesu.fr/cesu/ancesu/",
    description:
      "Association Nationale des CESU — référentiels AFGSU et évolutions des formations aux gestes et soins d'urgence.",
  },
  {
    name: "ILCOR",
    url: "https://www.ilcor.org/",
    description:
      "International Liaison Committee on Resuscitation — consensus scientifique mondial sur la réanimation (CoSTR).",
  },
  {
    name: "ERC",
    url: "https://erc.europa.eu/homepage",
    description:
      "European Resuscitation Council — recommandations européennes de réanimation, mises à jour quinquennales.",
  },
  {
    name: "Armée de Terre",
    url: "https://www.terre.defense.gouv.fr/",
    description:
      "Doctrines de sauvetage au combat (SC1 / SC2) et référentiels secourisme appliqués au milieu opérationnel.",
  },
  {
    name: "APSAD",
    url: "https://www.cnpp.com/Formation/Certifications-APSAD",
    description:
      "Référentiels APSAD (R4, R5, R6, R7…) en sécurité incendie, sûreté et protection des biens.",
  },
  {
    name: "CNPP",
    url: "https://www.cnpp.com",
    description:
      "Centre National de Prévention et de Protection — recherche, normes et bonnes pratiques en sécurité incendie et sûreté.",
  },
];

const updates: {
  date: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}[] = [
  {
    date: "Mars 2026",
    title: "Brochure INRS ED 6349 — RPS : quatre circonstances pour agir",
    description:
      "Cadrage actualisé de la prévention des risques psychosociaux : nous refondons le plan de notre module RPS et ajoutons une séquence dédiée en formation CSE.",
    slug: "brochure-inrs-ed-6349-rps-quatre-circonstances-agir-prevention",
    image: "/formations/formation-cse-chsct.png",
  },
  {
    date: "Janvier 2026",
    title: "Suppression de la majoration SIR pour l'habilitation électrique",
    description:
      "Au 1er janvier 2026, la cotisation SIR liée aux habilitations électriques disparaît. Bascule complète sur le certificat médical 5 ans introduit par le décret 2025-355.",
    slug: "suppression-majoration-sir-habilitation-electrique-2026",
    image: "/formations/habilitation-electrique-br-b1-b2-bc.jpg",
  },
  {
    date: "Décembre 2025",
    title: "Nouveau cahier des charges PRAP — spécificités sectorielles",
    description:
      "L'INRS met à jour le dispositif PRAP avec les volets ASD, sanitaire et social, transport-logistique. Nos formations IBC et 2S intègrent ces évolutions.",
    slug: "cahier-des-charges-prap-dispositions-sectorielles-2025",
    image: "/formations/formation-prap-2s-sanitaire-et-social.jpg",
  },
  {
    date: "Octobre 2025",
    title: "ERC Guidelines 2025 — refonte de la RCP en Europe",
    description:
      "Lancement des nouvelles recommandations européennes de réanimation à Rotterdam. Référence directe pour l'AFGSU 1 et 2 dès validation ANCESU.",
    slug: "erc-guidelines-2025-rotterdam-recommandations-europeennes-rcp",
    image: "/formations/formation-afgsu2.jpg",
  },
  {
    date: "Octobre 2025",
    title: "Décret 2025-355 — nouveau suivi médical des habilités électriques",
    description:
      "Depuis le 1er octobre 2025, la délivrance et le renouvellement de l'habilitation sont subordonnés à un certificat médical de 5 ans du médecin du travail.",
    slug: "decret-2025-355-nouveau-suivi-medical-habilitation-electrique",
    image: "/formations/habilitation-electrique-bs-be-manoeuvre.jpg",
  },
  {
    date: "Octobre 2025",
    title: "Nouvelle édition du référentiel APSAD R1 — sprinklers",
    description:
      "Le CNPP publie une refonte majeure (430 pages) du référentiel APSAD R1 sur l'extinction automatique à eau. Slides ESI à actualiser avant Q1 2026.",
    slug: "referentiel-apsad-r1-nouvelle-edition-2025-sprinklers",
    image: "/formations/formation-equipier-de-seconde-intervention.jpg",
  },
];

export default function VeilleReglementairePage() {
  return (
    <PageShell
      title="Notre veille réglementaire en santé-sécurité au travail"
      subtitle="Parce qu'une formation n'a de valeur que si elle reste à jour, Alertis Formation conduit une veille active, traçable et documentée sur l'ensemble des évolutions légales, techniques et pédagogiques de notre secteur."
      breadcrumbs={[{ label: "Veille réglementaire" }]}
    >
      {/* Veille facts strip */}
      <section className="bg-[color:var(--brand-charcoal)] text-white py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ul className="grid gap-4 sm:grid-cols-3 text-sm">
            <li className="flex items-start gap-3">
              <Repeat className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Périodicité
                </div>
                <div className="text-white font-semibold">Revue hebdomadaire</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <UserCircle2 className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Référent
                </div>
                <div className="text-white font-semibold">
                  Cyrille Gagnaire
                </div>
                <div className="text-white/60 text-xs">Référent pédagogique</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileSearch className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Sources suivies
                </div>
                <div className="text-white font-semibold">
                  14 sources officielles
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Engagement qualité */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">Notre engagement</span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Une exigence inscrite dans notre démarche{" "}
              <span className="text-[color:var(--brand-red)]">qualité</span>.
            </h2>
            <p className="text-lg">
              <strong className="text-[color:var(--brand-charcoal)]">
                {siteConfig.fullName}
              </strong>{" "}
              s'engage à suivre, comprendre et intégrer les évolutions
              réglementaires, légales et pédagogiques qui touchent la santé et
              la sécurité au travail.
            </p>
            <p>
              Cette veille structurée garantit à nos clients que chaque formation
              dispensée — qu'il s'agisse d'incendie, de secourisme, d'habilitation
              électrique, d'ergonomie ou de prévention — repose sur le cadre
              réglementaire le plus récent.
            </p>
            <p className="text-[color:var(--brand-red)] font-medium border-l-4 border-[color:var(--brand-red)] pl-4 italic">
              Notre démarche d'amélioration continue est inscrite dans nos
              process internes : identification, analyse, mise à jour et
              traçabilité de chaque évolution applicable à nos formations.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/images/formateurs.jpg"
                alt="Formateurs Alertis en intervention sur le terrain"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <ShieldCheck className="size-4 text-[color:var(--brand-red)]" />
                  Démarche qualité
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
                <Image
                  src="/formations/formation-cse-chsct.png"
                  alt="Étude de la réglementation santé-sécurité au travail"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--brand-charcoal)]/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-10">
                <span className="eyebrow">Trois axes de veille</span>
                <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
                  Une veille{" "}
                  <span className="text-[color:var(--brand-red)]">à 360°</span>.
                </h2>
              </div>
              <div className="space-y-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden">
                {pillars.map(({ icon: Icon, title, description }, i) => (
                  <div
                    key={title}
                    className="group bg-white hover:bg-[color:var(--brand-cream)] p-6 transition-colors flex gap-5 items-start"
                  >
                    <div className="shrink-0 inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)] mb-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-lg text-[color:var(--brand-charcoal)] mb-1.5">
                        {title}
                      </h3>
                      <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial divider */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] min-h-[260px]">
          <Image
            src="/images/formateurs.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--brand-charcoal)]/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                La réglementation évolue.
                <br />
                <span className="text-[color:var(--brand-mint)]">
                  Notre veille suit le rythme.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Notre méthode</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Un processus{" "}
              <span className="text-[color:var(--brand-red)]">continu</span> en
              quatre étapes.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="relative bg-[color:var(--brand-cream)]/40 border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6 hover:border-[color:var(--brand-red)]/30 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-4">
                  Étape {String(i + 1).padStart(2, "0")}
                </div>
                <Icon className="size-7 text-[color:var(--brand-red)] mb-4" />
                <h3 className="text-lg text-[color:var(--brand-charcoal)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Nos 7 catégories de formations</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Une veille adossée à{" "}
              <span className="text-[color:var(--brand-red)]">chaque domaine</span>{" "}
              que nous formons.
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] max-w-2xl mx-auto">
              Chaque catégorie de formation que nous proposons fait l'objet
              d'une veille thématique dédiée, avec ses propres sources et
              références réglementaires.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map(({ image, title, href, items }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm overflow-hidden hover:shadow-md hover:border-[color:var(--brand-red)]/30 transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image}
                    alt={`Veille réglementaire — ${title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/80 via-[color:var(--brand-charcoal)]/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-lg text-white font-semibold">
                    {title}
                  </h3>
                </div>
                <ul className="p-6 space-y-1.5 text-sm text-[color:var(--brand-gray-medium)] flex-1">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 leading-[1.55]"
                    >
                      <span className="mt-1.5 size-1 rounded-full bg-[color:var(--brand-red)] shrink-0" />
                      <span>{linkifyLegalRefs(item)}</span>
                    </li>
                  ))}
                </ul>
                <span className="px-6 pb-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)] group-hover:gap-3 transition-all">
                  Voir les formations
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* AFGSU — featured (healthcare professionals only) */}
          <Link
            href="/nos-formations-afgsu"
            className="group relative mt-6 grid sm:grid-cols-2 overflow-hidden rounded-sm bg-[color:var(--brand-slate)] min-h-[260px] lg:min-h-[280px]"
          >
            <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
              <Image
                src="/formations/formation-afgsu2.jpg"
                alt="Veille réglementaire — AFGSU"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent to-[color:var(--brand-slate)]/40 sm:to-[color:var(--brand-slate)]"
              />
            </div>

            <div className="relative flex flex-col justify-center p-8 lg:p-10 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex size-10 items-center justify-center rounded-sm bg-[color:var(--brand-red)] text-white">
                  <Stethoscope className="size-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Pour les professionnels de santé
                </span>
              </div>

              <h3 className="text-white text-2xl md:text-3xl leading-[1.05] mb-4">
                AFGSU
              </h3>
              <ul className="space-y-1.5 text-sm text-white/85 mb-5">
                {[
                  "Arrêté du 1er juillet 2019 (AFGSU 1 & 2)",
                  "Code de la santé publique R.6311-15-1",
                  "Référentiels CESU / ANCESU",
                  "Recommandations OMS / ILCOR",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 leading-[1.55]"
                  >
                    <span className="mt-1.5 size-1 rounded-full bg-[color:var(--brand-red)] shrink-0" />
                    <span>{linkifyLegalRefs(item)}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                Voir les formations AFGSU
                <ArrowUpRight className="size-4 text-[color:var(--brand-red)]" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Sources officielles</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Des sources{" "}
              <span className="text-[color:var(--brand-red)]">faisant foi</span>.
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] max-w-2xl mx-auto">
              Notre veille s'appuie exclusivement sur des sources primaires et
              institutionnelles, vérifiables et traçables.
            </p>
          </div>
          <div className="grid gap-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {sources.map(({ name, url, description }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-[color:var(--brand-cream)] p-6 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[color:var(--brand-charcoal)] font-semibold">
                    {name}
                  </span>
                  <ExternalLink className="size-4 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent updates */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Dernières évolutions</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Ce que nous avons{" "}
              <span className="text-[color:var(--brand-red)]">intégré</span>{" "}
              récemment.
            </h2>
          </div>
          <div className="space-y-6">
            {updates.map(({ date, title, description, slug, image }) => (
              <Link
                key={title}
                href={`/${slug}`}
                className="group grid gap-5 sm:grid-cols-12 bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm overflow-hidden hover:shadow-md hover:border-[color:var(--brand-red)]/30 transition-all"
              >
                <div className="relative sm:col-span-4 aspect-[16/10] sm:aspect-auto sm:min-h-[180px] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-8 p-6 sm:py-6 sm:pr-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-2">
                    <CalendarDays className="size-3.5" />
                    {date}
                  </div>
                  <h3 className="text-lg text-[color:var(--brand-charcoal)] mb-1.5 group-hover:text-[color:var(--brand-red)] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6] mb-3">
                    {description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)] group-hover:gap-3 transition-all">
                    Lire l'analyse
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/articles?categorie=veille"
              className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)] hover:gap-3 transition-all"
            >
              Voir toutes nos analyses de veille
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] mb-6">
            <ShieldCheck className="size-7" />
          </div>
          <h2 className="text-[color:var(--brand-charcoal)] mb-4">
            Une question sur notre démarche qualité&nbsp;?
          </h2>
          <p className="text-[color:var(--brand-gray-medium)] leading-relaxed mb-8">
            <strong className="text-[color:var(--brand-charcoal)]">
              Cyrille Gagnaire
            </strong>
            , notre référent pédagogique, peut vous transmettre sur demande
            l'extrait de notre tableau de veille et le détail des références
            réglementaires applicables à votre projet de formation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
            >
              Nous contacter
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/qui-sommes-nous"
              className="inline-flex items-center justify-center rounded-lg border border-border text-[color:var(--brand-gray)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-cream)] transition-colors"
            >
              Découvrir Alertis
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
