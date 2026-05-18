import Link from "next/link";
import {
  MessageSquareWarning,
  Mail,
  PhoneCall,
  Clock,
  CheckCircle2,
  FileText,
  Scale,
  ArrowUpRight,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Réclamations et amélioration continue",
  description:
    "Procédure de réclamation Alertis Formation : qui peut nous saisir, comment, et nos engagements de traitement. Démarche qualité conforme au Référentiel National Qualité.",
  alternates: { canonical: "/reclamations" },
};

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}?subject=Réclamation`,
    note: "Privilégié pour garder une trace écrite.",
  },
  {
    icon: PhoneCall,
    label: "Téléphone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneE164}`,
    note: "Du lundi au vendredi, 8h30 — 17h30.",
  },
  {
    icon: FileText,
    label: "Courrier",
    value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
    href: undefined,
    note: "Adresser à : Service Qualité.",
  },
];

const process = [
  {
    step: "01",
    icon: MessageSquareWarning,
    title: "Vous nous saisissez",
    description:
      "Par e-mail, téléphone ou courrier. Décrivez le plus précisément possible la situation, les personnes concernées, la formation ou la session si applicable.",
    delay: "Immédiat",
  },
  {
    step: "02",
    icon: CheckCircle2,
    title: "Accusé de réception",
    description:
      "Nous vous confirmons par écrit la prise en charge de votre réclamation et nous vous communiquons le nom de votre interlocuteur référent.",
    delay: "Sous 48 h ouvrées",
  },
  {
    step: "03",
    icon: FileText,
    title: "Instruction et échanges",
    description:
      "Le référent qualité instruit le dossier : audition des parties, consultation des pièces, vérification des process. Vous pouvez être recontacté pour précisions.",
    delay: "Sous 10 jours ouvrés",
  },
  {
    step: "04",
    icon: Scale,
    title: "Réponse motivée et plan d'action",
    description:
      "Vous recevez une réponse écrite circonstanciée. Si la réclamation est fondée, nous formalisons un plan d'action correctif et préventif. Tout est consigné dans notre registre qualité.",
    delay: "Sous 15 jours ouvrés",
  },
];

const whatToInclude = [
  "Vos coordonnées (nom, e-mail, téléphone) et votre lien avec Alertis (stagiaire, employeur, financeur)",
  "La date et le lieu de la formation (si applicable)",
  "Le nom de la formation suivie et celui du formateur (si applicable)",
  "Une description factuelle de la situation",
  "Vos attentes : information, correction, dédommagement, etc.",
  "Tout document utile (e-mails échangés, attestation, programme, etc.)",
];

const recourses = [
  {
    title: "Médiation de la consommation",
    description:
      "Si la réclamation concerne une formation suivie à titre individuel et qu'elle n'a pas trouvé d'issue après notre réponse, vous pouvez saisir le médiateur de la consommation.",
    href: "https://www.economie.gouv.fr/mediation-conso",
    linkLabel: "Médiation de la consommation — economie.gouv.fr",
  },
  {
    title: "France Compétences",
    description:
      "Pour toute réclamation portant sur la qualité d'une formation financée via le CPF ou un dispositif public, France Compétences peut être saisi en parallèle.",
    href: "https://www.francecompetences.fr",
    linkLabel: "francecompetences.fr",
  },
  {
    title: "DREETS Auvergne-Rhône-Alpes",
    description:
      "L'autorité administrative compétente pour les organismes de formation déclarés en région Auvergne-Rhône-Alpes (notre territoire d'enregistrement).",
    href: "https://auvergne-rhone-alpes.dreets.gouv.fr",
    linkLabel: "DREETS Auvergne-Rhône-Alpes",
  },
];

export default function ReclamationsPage() {
  return (
    <PageShell
      title="Réclamations et amélioration continue"
      subtitle="Toute personne ayant un lien avec une formation Alertis — stagiaire, employeur, financeur, partenaire — peut nous saisir d'une réclamation. Nous nous engageons à la traiter avec rigueur et dans des délais maîtrisés."
      breadcrumbs={[{ label: "Réclamations" }]}
    >
      {/* Contact strip */}
      <section className="bg-[color:var(--brand-charcoal)] text-white py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ul className="grid gap-4 sm:grid-cols-3 text-sm">
            <li className="flex items-start gap-3">
              <Clock className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Accusé de réception
                </div>
                <div className="text-white font-semibold">Sous 48 h ouvrées</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Scale className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Réponse motivée
                </div>
                <div className="text-white font-semibold">
                  Sous 15 jours ouvrés
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Traçabilité
                </div>
                <div className="text-white font-semibold">
                  Registre qualité interne
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-6 text-[color:var(--brand-gray-medium)] leading-relaxed">
          <span className="eyebrow">Notre engagement</span>
          <h2 className="text-[color:var(--brand-charcoal)]">
            Une réclamation n&apos;est pas un{" "}
            <span className="text-[color:var(--brand-red)]">problème</span>.
          </h2>
          <p className="text-lg">
            Chaque retour critique est une occasion d&apos;améliorer notre
            offre. C&apos;est pourquoi nous prenons les réclamations très au
            sérieux : elles sont enregistrées, instruites, et alimentent notre
            revue qualité périodique.
          </p>
          <p>
            Cette procédure est commune à toutes les parties prenantes :
            stagiaires, employeurs, financeurs (OPCO, France Travail,
            entreprises individuelles), partenaires et formateurs. Elle
            s&apos;inscrit dans notre démarche qualité et notre engagement
            d&apos;amélioration continue.
          </p>
          <p className="text-[color:var(--brand-red)] font-medium border-l-4 border-[color:var(--brand-red)] pl-4 italic">
            La confidentialité de l&apos;échange est garantie. Aucune
            réclamation n&apos;a d&apos;impact négatif sur le suivi de la
            formation en cours ou sur d&apos;éventuelles formations futures.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Comment nous saisir</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Trois canaux à votre{" "}
              <span className="text-[color:var(--brand-red)]">disposition</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href, note }) => {
              const content = (
                <>
                  <Icon className="size-7 text-[color:var(--brand-red)] mb-4" />
                  <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)] mb-2">
                    {label}
                  </div>
                  <div className="text-[color:var(--brand-charcoal)] font-semibold mb-2 leading-snug break-words">
                    {value}
                  </div>
                  <p className="text-xs text-[color:var(--brand-gray-medium)] leading-relaxed">
                    {note}
                  </p>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="block bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6 hover:border-[color:var(--brand-red)]/30 hover:shadow-sm transition-all"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Notre procédure</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Quatre étapes,{" "}
              <span className="text-[color:var(--brand-red)]">délais garantis</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, icon: Icon, title, description, delay }) => (
              <div
                key={step}
                className="relative bg-[color:var(--brand-cream)]/40 border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6 hover:border-[color:var(--brand-red)]/30 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-4">
                  Étape {step}
                </div>
                <Icon className="size-7 text-[color:var(--brand-red)] mb-4" />
                <h3 className="text-lg text-[color:var(--brand-charcoal)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.6] mb-3">
                  {description}
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-sm bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-red)] border border-[color:var(--brand-red)]/20">
                  <Clock className="size-3" />
                  {delay}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Pour aller plus vite</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Les éléments utiles dans votre{" "}
              <span className="text-[color:var(--brand-red)]">message</span>.
            </h2>
          </div>
          <ul className="bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6 space-y-3">
            {whatToInclude.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]"
              >
                <CheckCircle2 className="size-5 text-[color:var(--brand-red)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recourses */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Recours externes</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Si notre réponse ne vous{" "}
              <span className="text-[color:var(--brand-red)]">convient pas</span>.
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] max-w-2xl mx-auto">
              Au-delà de notre procédure interne, plusieurs voies de recours
              externes restent ouvertes selon la nature de la réclamation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recourses.map(({ title, description, href, linkLabel }) => (
              <div
                key={title}
                className="bg-[color:var(--brand-cream)]/40 border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
              >
                <h3 className="text-base text-[color:var(--brand-charcoal)] mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55] mb-4">
                  {description}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)] hover:gap-3 transition-all"
                >
                  {linkLabel}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-white text-[color:var(--brand-red)] mb-6">
            <MessageSquareWarning className="size-7" />
          </div>
          <h2 className="text-[color:var(--brand-charcoal)] mb-4">
            Envoyer une réclamation maintenant
          </h2>
          <p className="text-[color:var(--brand-gray-medium)] leading-relaxed mb-8">
            Notre service qualité prend en charge votre message dès réception.
            Vous recevrez un accusé de réception sous 48 heures ouvrées.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Réclamation`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
            >
              Envoyer un e-mail
              <Mail className="size-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border text-[color:var(--brand-gray)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Page contact
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
