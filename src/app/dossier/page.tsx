import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Flame,
  LifeBuoy,
  Stethoscope,
  Accessibility,
  Scale,
  Video,
  Presentation,
  UserPlus,
  Lock,
  KeyRound,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  Sparkles,
  Library,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Espace formateur — Ressources pédagogiques santé & sécurité au travail",
  description:
    "L'espace formateur Alertis : ressources pédagogiques officielles (SST, incendie, gestes qui sauvent, PSC, PRAP), supports de formation, vidéos et accès dédié à nos formateurs missionnés.",
  alternates: { canonical: "/dossier" },
};

type Resource = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  stats: { publics: number; surDemande: number };
};

const resources: Resource[] = [
  {
    icon: HeartPulse,
    title: "Sauveteur Secouriste du Travail",
    shortLabel: "SST",
    description:
      "Référentiels INRS V9, manuel formateur, aide-mémoire, grilles de certification, plans d'action prévention et outils d'animation pour préparer et conduire vos sessions SST et MAC SST.",
    image: "/formations/formation-sst-sauveteur-secouriste-du-travail.jpg",
    href: "/dossier/sst",
    cta: "Consulter les ressources SST",
    stats: { publics: 6, surDemande: 14 },
  },
  {
    icon: Flame,
    title: "Formation incendie",
    shortLabel: "Incendie",
    description:
      "Consignes de sécurité affichables, livret de formation participant et supports d'animation par secteur — ERP, IGH, crèches, EHPAD et établissements de soins type J et U.",
    image: "/categories/securite-incendie.jpg",
    href: "/dossier/incendie",
    cta: "Consulter les ressources incendie",
    stats: { publics: 3, surDemande: 6 },
  },
  {
    icon: LifeBuoy,
    title: "Gestes qui sauvent",
    shortLabel: "GQS",
    description:
      "Référentiel national 2024 et supports d'animation pour conduire vos sensibilisations GQS de 2 heures — passerelle naturelle vers le PSC, le SST et les premiers secours en équipe.",
    image: "/formations/formation-gqs-gestes-qui-sauvent.jpg",
    href: "/dossier/gestes-qui-sauvent",
    cta: "Consulter les ressources GQS",
    stats: { publics: 1, surDemande: 4 },
  },
  {
    icon: Stethoscope,
    title: "PSC — Premier Secours Citoyen",
    shortLabel: "PSC",
    description:
      "Référentiel 2024 de la formation citoyenne aux premiers secours (PSC). Recommandations nationales, grilles d'évaluation et scénarios de mise en situation.",
    image: "/formations/formation-psc-premiers-secours-citoyen.jpg",
    href: "/dossier/psc-pse",
    cta: "Consulter les ressources PSC",
    stats: { publics: 1, surDemande: 3 },
  },
  {
    icon: Accessibility,
    title: "PRAP IBC & 2S",
    shortLabel: "PRAP",
    description:
      "Cadre PRAP INRS et supports adaptés aux deux secteurs : Industrie/BTP/Commerce (IBC) et Sanitaire/Social (2S). Manuel acteur, fiches d'observation, livrets participants.",
    image: "/formations/formation-prap-ibc.jpg",
    href: "/dossier/prap",
    cta: "Consulter les ressources PRAP",
    stats: { publics: 0, surDemande: 8 },
  },
];

type Tool = {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
};

const tools: Tool[] = [
  {
    icon: Video,
    eyebrow: "Outil pédagogique",
    title: "Vidéos pédagogiques",
    description:
      "Au-delà de la simple transmission de connaissances, nos vidéos sont conçues comme de véritables outils pédagogiques. Méthodes, mises en situation et techniques pour rendre la formation plus efficace et interactive — incendie, secourisme, habilitation électrique, gestes et postures.",
    image: "/formations/formation-incendie-en-realite-virtuelle.jpg",
    href: "/formations",
    cta: "Boostez vos formations",
  },
  {
    icon: Presentation,
    eyebrow: "Supports prêts à l'emploi",
    title: "Livrets & PowerPoint",
    description:
      "Des supports pédagogiques solides pour assurer des formations de qualité. Livrets de formation détaillés pour chaque participant, diaporamas clairs et structurés favorisant l'interaction. Téléchargez nos supports gratuits.",
    image: "/formations/formation-incendie-en-entreprise.jpg",
    href: "/contact",
    cta: "Demander nos supports gratuits",
  },
  {
    icon: UserPlus,
    eyebrow: "Alertis recrute",
    title: "Rejoignez le réseau",
    description:
      "Vous êtes formateur·rice et souhaitez faire bénéficier de vos compétences à un réseau dynamique présent sur tout le territoire ? Proposez votre candidature : nous accompagnons les profils terrain expérimentés en sécurité incendie, secourisme, habilitation électrique et ergonomie.",
    image: "/images/formateurs.jpg",
    href: "/contact",
    cta: "Postuler",
  },
];

type MemberArea = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  audience: string;
};

const memberAreas: MemberArea[] = [
  {
    icon: KeyRound,
    title: "Accès membre — Salariés du centre",
    description:
      "Accédez à toutes les ressources officielles Alertis pour vos formations : référentiels internes, procédures, supports d'animation et documents administratifs.",
    image: "/images/formateurs.jpg",
    audience: "Réservé aux salariés du centre",
  },
  {
    icon: HeartPulse,
    title: "Pack Formation SST",
    description:
      "Ressources officielles pour conduire une formation SST : référentiel INRS V9, fiches de séquence, grilles d'évaluation et supports stagiaires.",
    image: "/formations/formation-formateur-sst.jpg",
    audience: "Formateurs SST missionnés",
  },
  {
    icon: Flame,
    title: "Pack People & Baby — Crèches",
    description:
      "Supports dédiés à la journée pédagogique People & Baby. Programme, livret stagiaire et procédures spécifiques aux structures multi-accueil.",
    image: "/formations/formation-incendie-en-creche.jpg",
    audience: "Formateurs missionnés sur la convention",
  },
  {
    icon: Flame,
    title: "Pack Formation incendie",
    description:
      "Ressources pour animer une formation sécurité incendie : EPI, guide-file / serre-file, manipulation d'extincteur, exercice d'évacuation et trame de bilan.",
    image: "/formations/formation-de-formateur-incendie.jpg",
    audience: "Formateurs incendie missionnés",
  },
  {
    icon: Flame,
    title: "Pack Incendie crèche & petite enfance",
    description:
      "Adaptation des contenus incendie aux établissements de la petite enfance : risques spécifiques, mise à l'abri, évacuation enfants, communication équipe.",
    image: "/formations/formation-incendie-en-creche.jpg",
    audience: "Formateurs petite enfance missionnés",
  },
  {
    icon: ShieldCheck,
    title: "Pack Incendie type J et U",
    description:
      "Ressources pour les établissements de soins et structures d'accueil : ERP type J (personnes âgées, handicap) et type U (santé). Procédures, transfert horizontal, équipes de seconde intervention.",
    image: "/formations/formation-incendie-etablissements-de-soins-type-j-u.jpg",
    audience: "Formateurs sanitaire & médico-social",
  },
];

export default function DossierPage() {
  return (
    <PageShell
      title="Espace formateur — Ressources pédagogiques"
      subtitle="Une bibliothèque dédiée aux formateurs en santé et sécurité au travail. Référentiels officiels, supports prêts à l'emploi, outils pédagogiques et accès réservé à nos formateurs missionnés."
      breadcrumbs={[{ label: "Espace formateur" }]}
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">Bienvenue</span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Tout ce dont vous avez besoin pour{" "}
              <span className="text-[color:var(--brand-red)]">animer</span> vos
              formations.
            </h2>
            <p className="text-lg">
              Cet espace rassemble les <strong className="text-[color:var(--brand-charcoal)]">ressources documentaires</strong>, supports d'animation et référentiels officiels qui structurent les formations Alertis — de la sécurité incendie au secourisme, en passant par l'ergonomie et la prévention des risques.
            </p>
            <p>
              Que vous prépariez une session SST, conceviez un exercice d'évacuation ou recherchiez les dernières évolutions de la réglementation, vous trouverez ici une base à jour, sourcée et conforme aux exigences du{" "}
              <strong className="text-[color:var(--brand-charcoal)]">Code du travail</strong> et des référentiels{" "}
              <strong className="text-[color:var(--brand-charcoal)]">INRS</strong>.
            </p>
          </div>
          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[color:var(--brand-cream)] border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6 lg:p-7">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-3">
                <Sparkles className="size-3.5" />
                Sommaire
              </div>
              <nav className="space-y-2.5 text-sm">
                {[
                  ["#ressources", "Ressources pédagogiques officielles"],
                  ["#reglementation", "Réglementation santé-sécurité"],
                  ["#outils", "Outils & supports de formation"],
                  ["#espace-membre", "Espace formateur Alertis"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center justify-between gap-3 py-1.5 border-b border-[color:var(--brand-gray-medium)]/10 last:border-0 text-[color:var(--brand-charcoal)] hover:text-[color:var(--brand-red)] transition-colors"
                  >
                    <span>{label}</span>
                    <ChevronRight className="size-4 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>

      {/* Section 1 — Ressources pédagogiques officielles */}
      <section
        id="ressources"
        className="py-20 bg-[color:var(--brand-cream)] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Section 01</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Ressources pédagogiques{" "}
              <span className="text-[color:var(--brand-red)]">officielles</span>.
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] leading-relaxed">
              Une base documentaire complète pour tous ceux qui cherchent à se
              former, se perfectionner ou enrichir leurs connaissances en
              matière de santé et sécurité au travail. De la réglementation en
              vigueur aux meilleures pratiques, chaque domaine couvre
              l'ensemble du référentiel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map(
              ({
                icon: Icon,
                title,
                shortLabel,
                description,
                image,
                href,
                cta,
                stats,
              }) => (
                <article
                  key={title}
                  className="group flex flex-col bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={image}
                      alt={`Ressources formateur — ${title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/85 via-[color:var(--brand-charcoal)]/20 to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-sm bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                      <Icon className="size-3.5 text-[color:var(--brand-red)]" />
                      {shortLabel}
                    </div>
                    <h3 className="absolute bottom-3 left-4 right-4 text-lg text-white font-semibold">
                      {title}
                    </h3>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6] flex-1">
                      {description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-mono">
                      {stats.publics > 0 && (
                        <span className="inline-flex items-center gap-1 rounded-sm bg-[color:var(--brand-red-soft)] text-[color:var(--brand-red)] px-1.5 py-0.5">
                          <Download className="size-3" />
                          {stats.publics} document{stats.publics > 1 ? "s" : ""} libre
                          {stats.publics > 1 ? "s" : ""}
                        </span>
                      )}
                      {stats.surDemande > 0 && (
                        <span className="inline-flex items-center gap-1 rounded-sm bg-[color:var(--brand-gray-medium)]/10 text-[color:var(--brand-gray-medium)] px-1.5 py-0.5">
                          <Lock className="size-3" />
                          {stats.surDemande} sur demande
                        </span>
                      )}
                    </div>
                    <Link
                      href={href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:text-[color:var(--brand-red-dark)] transition-colors"
                    >
                      {cta}
                      <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Section 2 — Réglementation */}
      <section
        id="reglementation"
        className="py-20 bg-white scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/categories/prevention.jpg"
                alt="Réglementation santé et sécurité au travail"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--brand-charcoal)]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/95 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-[color:var(--brand-charcoal)]">
                  <Scale className="size-4 text-[color:var(--brand-red)]" />
                  Décryptage légal
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow">Section 02</span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Réglementations en santé et{" "}
              <span className="text-[color:var(--brand-red)]">sécurité au travail</span>.
            </h2>
            <p className="text-lg text-[color:var(--brand-gray-medium)] leading-relaxed">
              Naviguez à travers une liste de ressources couvrant les{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                réglementations essentielles
              </strong>{" "}
              liées à la santé et à la sécurité au travail.
            </p>
            <p className="text-[color:var(--brand-gray-medium)] leading-relaxed">
              Cette section vous informe sur les dispositions légales concernant
              les obligations des employeurs, les droits et devoirs des
              salariés, et{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                les exigences spécifiques en matière de formation et
                d'équipement
              </strong>{" "}
              — Code du travail, arrêtés ministériels, référentiels INRS,
              normes NF C18-510, règlement ERP.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="uppercase tracking-wider font-semibold"
                render={
                  <Link href="/veille-reglementaire">
                    <span>Législation décryptée</span>
                    <ArrowRight />
                  </Link>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="uppercase tracking-wider"
                render={
                  <Link href="/articles">
                    <span>Articles & analyses</span>
                  </Link>
                }
              />
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
          <div className="absolute inset-0 bg-[color:var(--brand-charcoal)]/75" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Une formation de qualité commence
                <br />
                <span className="text-[color:var(--brand-mint)]">
                  par les bons outils.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Outils pédagogiques */}
      <section
        id="outils"
        className="py-20 bg-[color:var(--brand-cream)] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Section 03</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Outils pédagogiques{" "}
              <span className="text-[color:var(--brand-red)]">de formation</span>.
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] leading-relaxed">
              Des ressources complètes pour renforcer vos sessions d'apprentissage
              et engager durablement vos stagiaires.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tools.map(
              ({ icon: Icon, eyebrow, title, description, image, href, cta }) => (
                <article
                  key={title}
                  className="group flex flex-col bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm overflow-hidden hover:border-[color:var(--brand-red)]/30 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/30 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-3">
                      <Icon className="size-3.5" />
                      {eyebrow}
                    </div>
                    <h3 className="text-xl text-[color:var(--brand-charcoal)] mb-3">
                      {title}
                    </h3>
                    <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6] flex-1">
                      {description}
                    </p>
                    <Link
                      href={href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:text-[color:var(--brand-red-dark)] transition-colors"
                    >
                      {cta}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Section 4 — Espace formateur Alertis (accès membre) */}
      <section
        id="espace-membre"
        className="py-20 bg-[color:var(--brand-charcoal)] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-12">
            <div className="lg:col-span-8 space-y-5">
              <span className="eyebrow !text-[color:var(--brand-mint)]">
                Section 04 — Supports formateurs
              </span>
              <h2 className="text-white">
                Espace formateur{" "}
                <span className="text-[color:var(--brand-mint)]">Alertis</span>.
              </h2>
              <p className="text-white/75 leading-relaxed max-w-2xl">
                Les supports internes diffusés aux{" "}
                <strong className="text-white">formateurs Alertis</strong>{" "}
                missionnés : supports de cours, guides d'utilisation des
                équipements, procédures et documents administratifs. Chaque
                pack est transmis sur demande par notre coordination
                pédagogique.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-2 rounded-sm bg-white/10 border border-white/15 backdrop-blur px-3 py-2 text-xs uppercase tracking-[0.22em] font-semibold text-white">
                <Lock className="size-3.5 text-[color:var(--brand-mint)]" />
                Sur demande
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memberAreas.map(
              ({ icon: Icon, title, description, image, audience }) => (
                <article
                  key={title}
                  className="group relative flex flex-col bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:bg-white/[0.08] hover:border-[color:var(--brand-mint)]/40 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)] via-[color:var(--brand-charcoal)]/40 to-transparent" />
                    <div className="absolute top-3 right-3 inline-flex items-center justify-center size-8 rounded-full bg-[color:var(--brand-charcoal)]/80 backdrop-blur ring-1 ring-white/20">
                      <Lock className="size-3.5 text-[color:var(--brand-mint)]" />
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                      <Icon className="size-4 text-[color:var(--brand-mint)] shrink-0" />
                      <h3 className="text-base text-white font-semibold leading-tight">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-sm text-white/70 leading-[1.6] flex-1">
                      {description}
                    </p>
                    <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                      <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-white/50">
                        {audience}
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-mint)] hover:text-white transition-colors"
                        aria-label={`Demander l'accès — ${title}`}
                      >
                        Demander l'accès
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 bg-white/5 border border-white/10 rounded-sm p-6 lg:p-8">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--brand-mint)]/15 text-[color:var(--brand-mint)]">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h4 className="text-white mb-1.5">
                  Vous êtes formateur Alertis missionné&nbsp;?
                </h4>
                <p className="text-sm text-white/65 leading-relaxed">
                  Indiquez-nous votre mission et le pack souhaité dans le
                  formulaire de contact : la coordination pédagogique vous
                  transmet les supports correspondants.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--brand-mint)]/15 text-[color:var(--brand-mint)]">
                <Library className="size-5" />
              </div>
              <div>
                <h4 className="text-white mb-1.5">
                  Suggestions sur nos supports&nbsp;?
                </h4>
                <p className="text-sm text-white/65 leading-relaxed">
                  Vos retours terrain alimentent l'amélioration continue de nos
                  référentiels. N'hésitez pas à nous transmettre vos
                  observations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] mb-6">
            <Mail className="size-7" />
          </div>
          <h2 className="text-[color:var(--brand-charcoal)] mb-4">
            Une question, une demande de support&nbsp;?
          </h2>
          <p className="text-[color:var(--brand-gray-medium)] leading-relaxed mb-8">
            Notre coordination pédagogique répond à vos demandes d'accès,
            d'envoi de supports ou de mise à jour de référentiels. Pour toute
            question liée à la conduite d'une formation,{" "}
            <strong className="text-[color:var(--brand-charcoal)]">
              {siteConfig.contact.email}
            </strong>{" "}
            ou {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="uppercase tracking-wider font-semibold"
              render={
                <Link href="/contact">
                  <span>Nous contacter</span>
                  <ArrowRight />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="uppercase tracking-wider"
              render={
                <a
                  href="/catalogue-alertis.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <Download />
                  <span>Catalogue PDF</span>
                </a>
              }
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
