import Link from "next/link";
import {
  Accessibility,
  PhoneCall,
  Mail,
  UserCircle2,
  CheckCircle2,
  Handshake,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Accessibilité et handicap — Notre démarche",
  description:
    "Référent handicap, accueil adapté, partenariats AGEFIPH et Cap emploi : la démarche d'accessibilité d'Alertis Formation pour les personnes en situation de handicap.",
  alternates: { canonical: "/accessibilite-handicap" },
};

const partnerUrl = {
  agefiph: "https://www.agefiph.fr",
  fiphfp: "https://www.fiphfp.fr",
  capemploi: "https://www.capemploi.info",
  mdph: "https://handicap.gouv.fr/ouvrir-mes-droits-rendez-vous-avec-votre-mdph",
};

const extLinkClass =
  "font-semibold text-[color:var(--brand-red)] underline decoration-[color:var(--brand-red)]/30 underline-offset-2 hover:decoration-[color:var(--brand-red)] transition-colors";

const principles = [
  {
    icon: Handshake,
    title: "Étude individualisée",
    description:
      "Toute demande de formation pour une personne en situation de handicap fait l'objet d'un entretien préalable avec notre référent handicap pour identifier les besoins, les contraintes et les aménagements possibles.",
  },
  {
    icon: Wrench,
    title: "Aménagements concrets",
    description:
      "Selon la situation : adaptation des supports (gros caractères, version audio), aménagement du rythme, alternative aux mises en pratique physiques, accompagnement humain, tiers temps pour les évaluations.",
  },
  {
    icon: CheckCircle2,
    title: "Compensation et orientation",
    description: (
      <>
        Si l&apos;aménagement dépasse nos capacités internes, nous orientons
        vers nos partenaires spécialisés et accompagnons la demande de
        compensation auprès de l&apos;
        <a
          href={partnerUrl.agefiph}
          target="_blank"
          rel="noopener noreferrer"
          className={extLinkClass}
        >
          AGEFIPH
        </a>
        , du{" "}
        <a
          href={partnerUrl.fiphfp}
          target="_blank"
          rel="noopener noreferrer"
          className={extLinkClass}
        >
          FIPHFP
        </a>{" "}
        ou de la{" "}
        <a
          href={partnerUrl.mdph}
          target="_blank"
          rel="noopener noreferrer"
          className={extLinkClass}
        >
          MDPH
        </a>
        .
      </>
    ),
  },
];

const accessibilityAreas = [
  {
    title: "Handicap moteur",
    items: [
      "Locaux de Chassieu accessibles PMR (rez-de-chaussée, parking adapté, sanitaires PMR)",
      "Aménagement des mises en situation pour les formations pratiques (PRAP, gestes et postures, secourisme)",
      "Possibilité de formation intra-entreprise dans des locaux adaptés au stagiaire",
    ],
  },
  {
    title: "Handicap visuel",
    items: [
      "Supports en gros caractères ou version numérique compatible lecteur d'écran",
      "Accompagnement personnalisé du formateur sur les contenus visuels",
      "Tiers temps systématique sur les évaluations",
    ],
  },
  {
    title: "Handicap auditif",
    items: [
      "Recours possible à un interprète LSF (sur demande, avec accompagnement du financement)",
      "Supports écrits renforcés et synthèse de chaque séquence",
      "Adaptation des modalités d'évaluation orale en écrit",
    ],
  },
  {
    title: "Handicap cognitif ou psychique",
    items: [
      "Séquences plus courtes, rythme adapté, pauses fréquentes",
      "Méthode pédagogique active avec ancrage concret",
      "Possibilité de réaliser la formation en plusieurs sessions courtes",
    ],
  },
];

const partners = [
  {
    name: "AGEFIPH",
    description:
      "Association de gestion du fonds pour l'insertion professionnelle des personnes handicapées — partenaire pour le secteur privé.",
    url: partnerUrl.agefiph,
  },
  {
    name: "FIPHFP",
    description:
      "Fonds pour l'insertion des personnes handicapées dans la fonction publique — partenaire pour le secteur public.",
    url: partnerUrl.fiphfp,
  },
  {
    name: "Cap emploi",
    description:
      "Réseau de conseillers spécialisés dans l'accompagnement des personnes en situation de handicap vers l'emploi et la formation.",
    url: partnerUrl.capemploi,
  },
  {
    name: "MDPH",
    description:
      "Maisons départementales des personnes handicapées — accueil, information, orientation et reconnaissance du handicap.",
    url: partnerUrl.mdph,
  },
];

const process = [
  {
    step: "01",
    title: "Prise de contact",
    description:
      "Vous nous contactez par téléphone ou par e-mail. Vous pouvez à ce stade rester sur des indications générales — nous n'attendons pas de justificatif médical pour démarrer l'échange.",
  },
  {
    step: "02",
    title: "Entretien avec le référent handicap",
    description:
      "Notre référent handicap vous rappelle dans les 5 jours ouvrés pour cerner le besoin, les contraintes et les attentes. Cet entretien est confidentiel.",
  },
  {
    step: "03",
    title: "Proposition d'aménagements",
    description:
      "Nous formalisons par écrit les aménagements proposés (supports, rythme, évaluation, accompagnement) et, le cas échéant, l'orientation vers un partenaire spécialisé.",
  },
  {
    step: "04",
    title: "Mise en œuvre et suivi",
    description:
      "Le formateur est briefé en amont sur les aménagements convenus. Un point individuel est fait avec le stagiaire en début et en fin de formation pour ajuster si besoin.",
  },
];

export default function AccessibiliteHandicapPage() {
  return (
    <PageShell
      title="Accessibilité et handicap"
      subtitle="Toute personne en situation de handicap peut suivre nos formations. Notre référent handicap est votre interlocuteur unique pour étudier votre besoin et formaliser les aménagements adaptés."
      breadcrumbs={[{ label: "Accessibilité et handicap" }]}
    >
      {/* Contact strip */}
      <section className="bg-[color:var(--brand-charcoal)] text-white py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ul className="grid gap-4 sm:grid-cols-3 text-sm">
            <li className="flex items-start gap-3">
              <UserCircle2 className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Référent handicap
                </div>
                <div className="text-white font-semibold">Hugo Desbois</div>
                <div className="text-white/60 text-xs">
                  Disponible pour toute demande
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <PhoneCall className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  Téléphone
                </div>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="text-white font-semibold hover:text-[color:var(--brand-mint)] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="size-5 text-[color:var(--brand-mint)] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">
                  E-mail
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Accessibilité%20et%20handicap`}
                  className="text-white font-semibold hover:text-[color:var(--brand-mint)] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
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
            Pas de formation{" "}
            <span className="text-[color:var(--brand-red)]">inaccessible</span>{" "}
            par principe.
          </h2>
          <p className="text-lg">
            Chez{" "}
            <strong className="text-[color:var(--brand-charcoal)]">
              {siteConfig.fullName}
            </strong>
            , notre point de départ est simple : toute personne en situation de
            handicap qui souhaite se former doit pouvoir le faire. C&apos;est
            ensuite à nous d&apos;identifier les aménagements nécessaires, ou
            d&apos;orienter vers un acteur mieux placé que nous quand
            c&apos;est justifié.
          </p>
          <p>
            Cette démarche est portée par notre référent handicap, en lien
            avec nos formateurs et nos partenaires institutionnels (
            <a
              href={partnerUrl.agefiph}
              target="_blank"
              rel="noopener noreferrer"
              className={extLinkClass}
            >
              AGEFIPH
            </a>
            ,{" "}
            <a
              href={partnerUrl.fiphfp}
              target="_blank"
              rel="noopener noreferrer"
              className={extLinkClass}
            >
              FIPHFP
            </a>
            ,{" "}
            <a
              href={partnerUrl.capemploi}
              target="_blank"
              rel="noopener noreferrer"
              className={extLinkClass}
            >
              Cap emploi
            </a>
            ,{" "}
            <a
              href={partnerUrl.mdph}
              target="_blank"
              rel="noopener noreferrer"
              className={extLinkClass}
            >
              MDPH
            </a>
            ). Elle s&apos;inscrit dans nos engagements qualité et notre
            démarche d&apos;amélioration continue.
          </p>
          <p className="text-[color:var(--brand-red)] font-medium border-l-4 border-[color:var(--brand-red)] pl-4 italic">
            Vous, votre RH ou votre référent handicap d&apos;entreprise pouvez
            nous contacter en amont d&apos;une inscription. C&apos;est ce qui
            nous permet de préparer la formation dans les meilleures
            conditions.
          </p>
        </div>
      </section>

      {/* Three principles */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Notre approche</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Trois{" "}
              <span className="text-[color:var(--brand-red)]">principes</span>{" "}
              pour adapter la formation.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
              >
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

      {/* Areas */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Aménagements types</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Concrètement, ce que nous{" "}
              <span className="text-[color:var(--brand-red)]">proposons</span>.
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] max-w-2xl mx-auto">
              Liste non exhaustive — chaque situation est étudiée
              individuellement avec la personne concernée et, si elle le
              souhaite, son employeur ou son accompagnant.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {accessibilityAreas.map(({ title, items }) => (
              <div
                key={title}
                className="bg-[color:var(--brand-cream)]/40 border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
              >
                <h3 className="text-lg text-[color:var(--brand-charcoal)] mb-4 pb-3 border-b border-[color:var(--brand-gray-medium)]/15">
                  <Accessibility className="inline-block size-5 text-[color:var(--brand-red)] mr-2 -mt-1" />
                  {title}
                </h3>
                <ul className="space-y-2 text-sm text-[color:var(--brand-gray-medium)]">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-[1.55]">
                      <span className="mt-1.5 size-1 rounded-full bg-[color:var(--brand-red)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Comment ça se passe</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Quatre étapes pour préparer une formation{" "}
              <span className="text-[color:var(--brand-red)]">adaptée</span>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, description }) => (
              <div
                key={step}
                className="bg-white border border-[color:var(--brand-gray-medium)]/10 rounded-sm p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-4">
                  Étape {step}
                </div>
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

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">Nos partenaires</span>
            <h2 className="mt-4 text-[color:var(--brand-charcoal)]">
              Les acteurs qui peuvent vous{" "}
              <span className="text-[color:var(--brand-red)]">accompagner</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden sm:grid-cols-2">
            {partners.map(({ name, description, url }) => (
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
                  <ArrowUpRight className="size-4 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-white text-[color:var(--brand-red)] mb-6">
            <Accessibility className="size-7" />
          </div>
          <h2 className="text-[color:var(--brand-charcoal)] mb-4">
            Une question, un besoin&nbsp;?
          </h2>
          <p className="text-[color:var(--brand-gray-medium)] leading-relaxed mb-8">
            Contactez directement notre référent handicap. Premier échange
            confidentiel, sans engagement et sans avoir à transmettre de
            justificatif médical.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Accessibilité%20et%20handicap`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
            >
              Écrire au référent
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
