import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FaqAccordion, type FaqItem } from "./faq-accordion";
import { FaqPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

const faqs: FaqItem[] = [
  {
    q: "Quelle est la durée de validité d'une formation SST et comment la renouveler ?",
    a: `La certification de Sauveteur Secouriste du Travail (SST) est valable 24 mois à compter de la date de délivrance par l'INRS. Pour conserver vos compétences et votre certification, vous devez suivre un Maintien et Actualisation des Compétences (MAC SST) de 7 heures avant la date d'échéance.

Si le MAC est réalisé après la date d'échéance, la certification n'est pas supprimée mais mise en veille : le salarié ne peut plus exercer en tant que SST tant qu'il n'a pas suivi son MAC de 7 heures. Aucune limite de temps n'est imposée par le référentiel INRS 2026 pour effectuer ce rattrapage par un MAC, sans repasser la formation initiale. La formation SST reste l'une des plus demandées en entreprise : un salarié SST est obligatoire dans chaque atelier où sont effectués des travaux dangereux et dans chaque chantier de plus de 20 personnes durant plus de 15 jours (article R4224-15 du Code du travail).

Nous proposons les sessions SST et MAC SST en intra-entreprise dans toute la France, avec un formateur certifié par l'INRS.`,
    links: [
      { label: "Formations Secourisme & SST", href: "/formations-secourisme" },
    ],
  },
  {
    q: "La formation incendie est-elle obligatoire pour toutes les entreprises ?",
    a: `Oui. L'article R4227-28 du Code du travail impose à tout employeur de prendre les mesures nécessaires pour que tout commencement d'incendie puisse être rapidement et efficacement combattu, et que les salariés sachent évacuer les lieux. L'article R4227-39 précise qu'une consigne incendie doit être affichée et que des exercices d'évacuation et de manipulation du matériel doivent être organisés au moins tous les 6 mois.

Selon votre établissement (ERP, IGH, ICPE, EHPAD, crèche, industrie…), des obligations complémentaires s'appliquent : équipiers de première intervention (EPI), guides-files et serres-files, manipulation d'extincteurs, exercices sur feu réel.

Notre équipe vous accompagne pour identifier vos obligations réglementaires et adapter le format (bac à flammes, réalité virtuelle, extincteur laser, camion mobile ou e-learning) à votre site.`,
    links: [
      { label: "Formations Sécurité incendie", href: "/formations-securite-incendie" },
      {
        label: "Article : ce que dit la réglementation",
        href: "/formation-incendie-obligatoire-ce-que-dit-la-reglementation",
      },
    ],
  },
  {
    q: "Quelle est la fréquence de recyclage d'une habilitation électrique ?",
    a: `La norme NF C 18-510 et la recommandation INRS recommandent un recyclage de l'habilitation électrique tous les 3 ans. C'est l'employeur qui délivre le titre d'habilitation, après une formation théorique et pratique adaptée au niveau requis.

Les niveaux les plus courants sont : B0 / H0 (non-électricien intervenant à proximité), BS (interventions élémentaires hors tension type changement d'ampoule, prise, interrupteur), BE Manœuvre, BR (interventions générales basse tension), BC (consignation). Chaque niveau correspond à un périmètre d'intervention précis.

Nos sessions d'habilitation électrique (initiale ou recyclage) sont organisées en intra-entreprise ou en inter-entreprise, avec une partie pratique sur platines pédagogiques pour valider les gestes professionnels.`,
    links: [
      {
        label: "Formations Habilitation électrique",
        href: "/formations-habilitation-electrique",
      },
      {
        label: "Article : prévention des risques électriques",
        href: "/prevention-des-risques-electriques-limportance-de-lhabilitation-professionnelle",
      },
    ],
  },
  {
    q: "Qui doit suivre une formation AFGSU et quelle est la différence entre niveau 1 et niveau 2 ?",
    a: `L'AFGSU (Attestation de Formation aux Gestes et Soins d'Urgence) est obligatoire pour les professionnels de santé et certains personnels travaillant en établissement de santé ou médico-social.

L'AFGSU niveau 1 (14 heures sur 2 jours) s'adresse à tout personnel non soignant exerçant en milieu de santé : agents administratifs, techniques, hôteliers. L'AFGSU niveau 2 (21 heures sur 3 jours) est destinée aux professionnels de santé inscrits dans la quatrième partie du Code de la santé publique : infirmiers, aides-soignants, médecins, sages-femmes, kinésithérapeutes, manipulateurs radio, étudiants en santé.

L'attestation est valable 4 ans et doit être renouvelée par une formation de remise à niveau de 7 heures. Alertis organise des sessions AFGSU 1, AFGSU 2 et remises à niveau en tant que centre habilité par des CESU. L'attestation officielle est délivrée par le CESU habilitant, conformément à l'arrêté du 1er juillet 2019.`,
    links: [
      { label: "Nos formations AFGSU", href: "/nos-formations-afgsu" },
      { label: "Contact AFGSU", href: "/contact-formation-afgsu" },
    ],
  },
  {
    q: "Quelle est la différence entre les formations PRAP IBC et PRAP 2S ?",
    a: `Les formations PRAP (Prévention des Risques liés à l'Activité Physique) visent à rendre chaque salarié acteur de sa propre prévention face aux troubles musculo-squelettiques (TMS), première cause de maladie professionnelle en France.

Le PRAP IBC (Industrie, BTP, Commerce et activités de bureau) s'adresse aux salariés des secteurs industriels, du bâtiment, du commerce et du tertiaire. Le PRAP 2S (Sanitaire et Social) concerne les professionnels exerçant auprès de personnes — EHPAD, structures handicap, aide à domicile, hôpital — et intègre la manutention de personnes à mobilité réduite.

Le PRAP IBC dure 2 jours (14 heures) en initial, avec un MAC de 1 jour (7 heures) tous les 24 mois. Le PRAP 2S, plus exigeant en raison de la mobilisation de personnes, dure 4 jours (28 heures) en initial, avec un MAC de 2 jours (14 heures) tous les 24 mois. À l'issue, chaque participant reçoit un certificat d'acteur PRAP (IBC ou 2S), valable 24 mois.`,
    links: [
      { label: "Formations Ergonomie & PRAP", href: "/formations-ergonomie" },
    ],
  },
  {
    q: "Pouvez-vous organiser une formation directement dans nos locaux (intra-entreprise) ?",
    a: `Oui, la majorité de nos sessions se déroulent en intra-entreprise, partout en France métropolitaine. Nos formateurs se déplacent sur votre site avec l'ensemble du matériel pédagogique : extincteurs, bac à feu écologique, mannequins SST adulte / enfant / nourrisson, défibrillateur de formation, platines électriques, casques de réalité virtuelle.

L'avantage de l'intra : la formation est calibrée sur votre activité réelle, vos locaux, vos risques. Vos équipes manipulent vos propres équipements et identifient les points de vigilance spécifiques à votre site.

Nous adaptons les horaires (matin, après-midi, samedi) pour limiter l'impact sur votre production. Un audit préalable peut être réalisé pour personnaliser les scénarios et les exercices pratiques.`,
    links: [
      { label: "Demander un devis intra", href: "/contact" },
      { label: "Voir le catalogue complet", href: "/formations" },
    ],
  },
  {
    q: "Comment financer une formation en santé et sécurité au travail ?",
    a: `Plusieurs dispositifs de financement existent pour les formations en santé et sécurité au travail :

- Plan de développement des compétences de l'entreprise : prise en charge directe par l'employeur, principal canal pour les formations obligatoires (SST, incendie, habilitation électrique).
- Opérateur de compétences (OPCO) de votre branche : selon votre convention collective et votre masse salariale, une prise en charge totale ou partielle peut être étudiée.
- Fonds propres pour les TPE / indépendants, avec facturation directe.

Nos formations répondent aux référentiels qualité nationaux applicables aux organismes de formation. Nous vous accompagnons sur la constitution du dossier administratif : convention de formation, programme détaillé, feuilles de présence, attestations et certificats — pièces indispensables pour valider la prise en charge.`,
    links: [
      { label: "Demander un devis", href: "/contact" },
      { label: "Notre dossier institutionnel", href: "/dossier" },
    ],
  },
  {
    q: "Quel est le délai pour organiser une formation et comment réserver une session ?",
    a: `Le délai standard entre la première prise de contact et la session est de 2 à 4 semaines, le temps de finaliser la convention, de caler les dates avec vos équipes et de mobiliser le formateur le plus adapté à votre besoin.

Pour les demandes urgentes (audit de sécurité, mise en conformité avant une visite, salarié à former rapidement), nous pouvons généralement intervenir sous 7 à 10 jours, dans la limite des disponibilités de nos formateurs sur votre zone géographique.

Pour réserver une session, contactez-nous par téléphone au ${siteConfig.contact.phone}, par email à ${siteConfig.contact.email}, ou via notre formulaire de devis en ligne. Vous recevrez sous 48 heures un devis détaillé, le programme de la formation et plusieurs créneaux possibles.`,
    links: [
      { label: "Nous contacter", href: "/contact" },
      { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
    ],
  },
];

export const metadata = {
  title:
    "FAQ formations sécurité au travail : SST, incendie, habilitation électrique",
  description:
    "Réponses aux questions fréquentes sur nos formations en santé et sécurité au travail : durée de validité SST, recyclage habilitation électrique, AFGSU, PRAP, obligations incendie, financement et organisation en intra-entreprise.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title:
      "FAQ formations sécurité au travail · Alertis Formation",
    description:
      "Tout savoir sur la durée de validité d'une formation SST, le recyclage des habilitations électriques, l'AFGSU, le PRAP, les obligations incendie et le financement de vos formations.",
    url: "/faq",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqPageJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <PageShell
        title="Foire aux questions"
        subtitle="Réponses détaillées à vos questions sur nos formations en santé et sécurité au travail : SST, incendie, habilitation électrique, AFGSU, PRAP, financement et organisation."
        breadcrumbs={[{ label: "FAQ" }]}
      >
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section className="py-16 bg-[color:var(--brand-cream)]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[color:var(--brand-gray)] mb-4">
              Vous avez une question particulière ?
            </h2>
            <p className="text-[color:var(--brand-gray-medium)] mb-8">
              Notre équipe répond à toutes vos questions concernant nos
              formations, leur financement et leur déroulement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="uppercase tracking-wider font-semibold"
                render={
                  <Link href="/contact">
                    <span>Contactez-nous</span>
                    <ArrowRight />
                  </Link>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="uppercase tracking-wider"
                render={
                  <a href={`tel:${siteConfig.contact.phoneE164}`}>
                    <Phone />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                }
              />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
