import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Target,
  Users,
  Mountain,
  Bike,
  Compass,
  ShieldCheck,
  ArrowUpRight,
  Recycle,
  Laptop,
  Leaf,
  Route,
  Award,
  Search,
  FileCheck2,
  GraduationCap,
  ClipboardCheck,
  Zap,
  Flame,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldAlert,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";

const values = [
  {
    icon: Heart,
    title: "L'humain d'abord",
    description:
      "La sécurité commence par l'humain. Nos formateurs viennent du terrain et savent transmettre des compétences concrètes, utiles et durables.",
  },
  {
    icon: Target,
    title: "Une vraie culture prévention",
    description:
      "Au-delà de la conformité réglementaire, notre mission est de développer une culture de prévention solide et partagée à tous les niveaux.",
  },
  {
    icon: Users,
    title: "Une approche immersive",
    description:
      "Nous ne nous contentons pas d'enseigner des procédures : nous faisons vivre la prévention à travers des formations engageantes et immersives.",
  },
];

const stats = [
  { value: "+15", label: "Collaborateurs au siège" },
  { value: "+1700", label: "Formateurs partenaires en France" },
  { value: "+7 400", label: "Entreprises accompagnées" },
  { value: "6 h", label: "Délai d'engagement de réponse" },
];

const direction = [
  {
    name: "Cyrille Gagnaire",
    role: "Gérant — Responsable Pédagogique",
    bio: "Cyrille dirige Alertis et forme sur l'incendie, les gestes et postures. Ancien pompier, il allie terrain et pédagogie avec passion.",
    hobby: "Randonnées en montagne",
    hobbyIcon: Mountain,
    image: "/team/cyrille-gagnaire.jpg",
  },
  {
    name: "Rose Rivoirard",
    role: "Directrice Formation & Commerciale",
    bio: "Rose dirige la formation et le commercial. Formatrice de formateurs SST, elle transmet les bons gestes et structure la pédagogie avec énergie.",
    hobby: "Explore les régions à vélo",
    hobbyIcon: Bike,
    image: "/team/roselyne-rivoirard.jpg",
  },
  {
    name: "Bruno Lodier",
    role: "Directeur — Cadre Administratif",
    bio: "Bruno coordonne les opérations et s'assure que tout roule. Véritable facilitateur, il fait le lien entre équipes, clients et terrain.",
    hobby: "Trail & organisation millimétrée",
    hobbyIcon: Compass,
    image: "/team/bruno-lodier.jpg",
  },
];

const qualificationStandards = [
  {
    icon: HeartPulse,
    domain: "Secourisme (SST, MAC SST)",
    standard:
      "Certificat de formateur SST délivré par l'INRS, MAC formateur à jour, expérience opérationnelle des gestes d'urgence.",
  },
  {
    icon: Stethoscope,
    domain: "AFGSU 1 & 2",
    standard:
      "Formateurs agréés CESU (Centre d'enseignement des soins d'urgence), profils soignants (médecins, IDE, ARM) ou paramédicaux qualifiés.",
  },
  {
    icon: Zap,
    domain: "Habilitation électrique",
    standard:
      "Titre d'habilitation BR/BC ou supérieur en cours de validité, expérience terrain en électrotechnique, qualification pédagogique attestée.",
  },
  {
    icon: Flame,
    domain: "Sécurité incendie (EPI, ESI, évacuation)",
    standard:
      "Profils sapeurs-pompiers professionnels ou volontaires, SSIAP 1/2/3 selon le niveau, expérience opérationnelle en intervention.",
  },
  {
    icon: Activity,
    domain: "Ergonomie (PRAP IBC, PRAP 2S, gestes & postures)",
    standard:
      "Certificat de formateur PRAP IBC ou 2S délivré par l'INRS, expérience en analyse de l'activité réelle de travail.",
  },
  {
    icon: ShieldAlert,
    domain: "Prévention (CSE, DUERP, RPS)",
    standard:
      "Formation supérieure en prévention, ergonomie ou psychologie du travail, expérience d'intervention en entreprise sur les risques pros.",
  },
];

const qualificationProcess = [
  {
    icon: Search,
    title: "Sélection rigoureuse",
    description:
      "Avant intégration au réseau : vérification systématique des titres, diplômes, habilitations et de l'expérience terrain par notre responsable pédagogique.",
  },
  {
    icon: FileCheck2,
    title: "Dossier formateur tenu à jour",
    description:
      "Chaque intervenant dispose d'un dossier complet (CV, justificatifs, recyclages) maintenu à jour. Tout titre échu suspend automatiquement les missions concernées.",
  },
  {
    icon: GraduationCap,
    title: "Recyclage périodique obligatoire",
    description:
      "MAC formateur, recyclages habilitations, mises à jour réglementaires : nos formateurs maintiennent leurs certifications dans les délais imposés par chaque référentiel.",
  },
  {
    icon: ClipboardCheck,
    title: "Évaluation continue",
    description:
      "Les questionnaires de satisfaction stagiaires sont analysés après chaque session. Tout écart négatif déclenche un échange formateur et, si besoin, un retrait du réseau.",
  },
];

const ecoCommitments = [
  {
    icon: Laptop,
    title: "Pédagogie hybride",
    description:
      "Quand c'est pertinent, nous proposons du e-learning et de la formation à distance pour réduire les déplacements sans sacrifier la qualité pédagogique.",
  },
  {
    icon: Route,
    title: "Mutualisation des trajets",
    description:
      "Notre réseau de +1 700 formateurs partenaires nous permet d'envoyer un intervenant local plutôt que de faire traverser la France à un formateur.",
  },
  {
    icon: Recycle,
    title: "Supports dématérialisés",
    description:
      "Convocations, attestations, livrets stagiaires et émargements numériques : moins de papier, plus de traçabilité.",
  },
  {
    icon: Leaf,
    title: "Locaux raisonnés",
    description:
      "Au siège de Chassieu, nous limitons notre empreinte : tri sélectif, éclairage LED, et matériel pédagogique réutilisé d'une session à l'autre.",
  },
];

export const metadata = {
  title: "Qui sommes-nous",
  description:
    "Alertis Formation : 15 collaborateurs au siège, +1 700 formateurs partenaires partout en France, au service de la prévention des risques en entreprise. Notre équipe, nos valeurs, nos engagements.",
  alternates: { canonical: "/qui-sommes-nous" },
};

export default function QuiSommesNousPage() {
  return (
    <PageShell
      title="Une équipe engagée pour la prévention"
      subtitle="Pour beaucoup, la prévention des risques peut sembler abstraite. En réalité, c'est tout ce qui protège les personnes au quotidien. Et nous, on est là pour vous l'expliquer simplement."
      breadcrumbs={[{ label: "Qui sommes-nous" }]}
    >
      {/* Manifesto + portrait */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-6 text-[color:var(--brand-gray-medium)] leading-relaxed">
            <span className="eyebrow">Notre manifeste</span>
            <h2 className="text-[color:var(--brand-charcoal)]">
              Faire de la sécurité au travail{" "}
              <span className="text-[color:var(--brand-red)]">
                une évidence partagée
              </span>
              .
            </h2>
            <p className="text-lg">
              Chez{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                Alertis Formation
              </strong>
              , nous sommes convaincus que la sécurité passe par la
              compréhension, l&apos;humain, et l&apos;action concrète.
              C&apos;est pourquoi nos formateurs — tous issus du terrain —
              conçoivent des formations accessibles, utiles et engageantes,
              pour tous les secteurs d&apos;activité.
            </p>
            <p>
              Nous sommes un organisme de formation spécialisé en sécurité
              incendie, secourisme, prévention des risques professionnels et
              ergonomie, au service des entreprises, collectivités et
              établissements publics.
            </p>
            <p>
              Nos formateurs — sapeurs-pompiers, professionnels de la
              prévention, spécialistes en santé au travail — partagent un même
              engagement : transmettre des compétences concrètes, utiles et
              durables. Nous adaptons chaque programme à vos réalités de
              terrain.
            </p>
            <p className="text-[color:var(--brand-red)] font-medium border-l-4 border-[color:var(--brand-red)] pl-4 italic">
              Nous ne vendons pas juste des formations : nous aidons les
              entreprises à créer une véritable culture de la prévention, à
              tous les niveaux.
            </p>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/10 shadow-md">
              <Image
                src="/images/formateurs.jpg"
                alt="Formateurs Alertis en action"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs text-[color:var(--brand-gray-medium)] italic text-center">
              Nos formateurs en intervention sur le terrain — Chassieu, Lyon.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews badge */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 flex flex-col items-center text-center">
          <span className="eyebrow">Ce que disent nos stagiaires</span>
          <h2 className="mt-3 text-[color:var(--brand-charcoal)] text-2xl md:text-3xl max-w-2xl">
            Une note Google qui reflète notre exigence sur le terrain.
          </h2>
          <div className="mt-6">
            <GoogleRatingBadge variant="card" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[color:var(--brand-charcoal)] text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="eyebrow text-[color:var(--brand-mint)]">
              Alertis en chiffres
            </span>
          </div>
          <div className="grid gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[color:var(--brand-charcoal)] px-6 py-10 text-center"
              >
                <div className="font-bold text-4xl lg:text-5xl text-white tracking-tight">
                  {value}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.22em] text-[color:var(--brand-mint)]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Notre valeur ajoutée</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Un vrai pas en avant dans la{" "}
              <span className="text-[color:var(--brand-red)]">
                culture sécurité
              </span>
              .
            </h2>
          </div>
          <div className="grid gap-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="group bg-white hover:bg-[color:var(--brand-cream)] p-7 lg:p-8 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors mb-5">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-xl text-[color:var(--brand-charcoal)] mb-2">
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

      {/* Direction (featured) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">La direction</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Trois profils,
              <br />
              une{" "}
              <span className="text-[color:var(--brand-red)]">vision commune</span>
              .
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {direction.map(
              ({ name, role, bio, hobby, hobbyIcon: HobbyIcon, image }) => (
                <article
                  key={name}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative size-32 lg:size-36 mb-5">
                    <div className="absolute inset-0 rounded-full overflow-hidden bg-[color:var(--brand-cream)] ring-4 ring-white shadow-md">
                      <Image
                        src={image}
                        alt={`Portrait de ${name}, ${role}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                    <span
                      aria-hidden
                      className="absolute -bottom-1 -right-1 size-7 rounded-full bg-[color:var(--brand-red)] text-white inline-flex items-center justify-center ring-4 ring-white"
                    >
                      <HobbyIcon className="size-3.5" />
                    </span>
                  </div>
                  <h3 className="text-xl text-[color:var(--brand-charcoal)] leading-tight">
                    {name}
                  </h3>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--brand-red)] font-bold mt-1.5">
                    {role}
                  </div>
                  <p className="mt-4 text-sm text-[color:var(--brand-gray-medium)] leading-[1.6] max-w-xs">
                    {bio}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs text-[color:var(--brand-gray-medium)] italic">
                    <span>·</span>
                    <span>{hobby}</span>
                    <span>·</span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* Réseau formateurs — politique de qualification */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="eyebrow">Notre réseau de formateurs</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              +1700 formateurs partenaires,{" "}
              <span className="text-[color:var(--brand-red)]">
                une exigence non négociable
              </span>
              .
            </h2>
            <p className="mt-5 text-[color:var(--brand-gray-medium)] leading-relaxed">
              Pour intervenir au nom d&apos;Alertis, chaque formateur doit
              répondre à des exigences précises sur son domaine&nbsp;: titres,
              habilitations en cours de validité, expérience terrain et
              recyclages à jour. Voici comment nous garantissons la qualité du
              formateur que vous recevez, partout en France.
            </p>
          </div>

          {/* Standards par domaine */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <Award className="size-5 text-[color:var(--brand-red)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)]">
                Standards de qualification par domaine
              </span>
            </div>
            <div className="grid gap-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
              {qualificationStandards.map(({ icon: Icon, domain, standard }) => (
                <div
                  key={domain}
                  className="bg-white p-6 hover:bg-[color:var(--brand-cream)]/60 transition-colors"
                >
                  <Icon className="size-6 text-[color:var(--brand-red)] mb-4" />
                  <h3 className="text-sm font-bold text-[color:var(--brand-charcoal)] mb-2 leading-snug">
                    {domain}
                  </h3>
                  <p className="text-xs text-[color:var(--brand-gray-medium)] leading-[1.6]">
                    {standard}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="size-5 text-[color:var(--brand-red)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)]">
                Comment nous garantissons cette qualité
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {qualificationProcess.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
                >
                  <Icon className="size-7 text-[color:var(--brand-red)] mb-4" />
                  <h3 className="text-base text-[color:var(--brand-charcoal)] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs text-[color:var(--brand-gray-medium)] leading-[1.6]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-[color:var(--brand-gray-medium)] italic max-w-2xl mx-auto leading-relaxed">
            Le détail nominatif des qualifications de chaque formateur
            intervenant sur vos sessions est mis à disposition sur simple
            demande auprès de notre responsable pédagogique.
          </p>
        </div>
      </section>

      {/* Engagement écologique */}
      <section className="py-20 bg-[color:var(--brand-mint)]/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="eyebrow">
                <Leaf className="size-4" />
                Engagement environnemental
              </span>
              <h2 className="text-[color:var(--brand-charcoal)]">
                Former, c&apos;est aussi{" "}
                <span className="text-[color:var(--brand-red)]">
                  préserver
                </span>
                .
              </h2>
              <p className="text-[color:var(--brand-gray-medium)] leading-relaxed">
                La prévention des risques inclut, pour nous, la responsabilité
                vis-à-vis de l&apos;environnement. Sans en faire un argument
                marketing, nous avons mis en place des pratiques concrètes pour
                limiter l&apos;empreinte de notre activité — sans rogner sur la
                qualité pédagogique.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {ecoCommitments.map(
                  ({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-5"
                    >
                      <div className="inline-flex size-10 items-center justify-center rounded-full bg-[color:var(--brand-mint)]/60 text-[color:var(--brand-charcoal)] mb-3">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-base text-[color:var(--brand-charcoal)] mb-1.5">
                        {title}
                      </h3>
                      <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Démarche qualité / Veille réglementaire */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="bg-[color:var(--brand-cream)] border border-[color:var(--brand-gray-medium)]/10 rounded-sm overflow-hidden grid gap-0 md:grid-cols-12">
            <div className="md:col-span-4 bg-[color:var(--brand-charcoal)] text-white p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white mb-5">
                <ShieldCheck className="size-5" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-mint)] mb-2">
                Notre engagement
              </div>
              <h3 className="text-2xl leading-tight text-white">
                Une{" "}
                <span className="text-[color:var(--brand-mint)]">
                  démarche qualité
                </span>{" "}
                continue
              </h3>
            </div>
            <div className="md:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[color:var(--brand-gray-medium)] leading-relaxed mb-5">
                Alertis Formation mène une{" "}
                <strong className="text-[color:var(--brand-charcoal)]">
                  veille réglementaire continue
                </strong>{" "}
                sur l&apos;ensemble des évolutions législatives, techniques et
                pédagogiques de la santé-sécurité au travail, pour garantir des
                formations toujours alignées sur le cadre légal en vigueur.
              </p>
              <Link
                href="/veille-reglementaire"
                className="inline-flex items-center gap-1.5 self-start text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)] hover:text-[color:var(--brand-red-dark)] transition-colors"
              >
                Découvrir notre démarche de veille
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
