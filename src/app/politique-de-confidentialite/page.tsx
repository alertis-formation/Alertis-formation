import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles d'Alertis Formation, conforme au RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Politique de confidentialité"
      subtitle="Engagement de transparence sur la collecte, l'usage et la conservation des données personnelles que vous nous confiez. Conforme au Règlement Général sur la Protection des Données (RGPD)."
      breadcrumbs={[{ label: "Politique de confidentialité" }]}
    >
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 space-y-10 text-[color:var(--brand-gray-medium)] leading-relaxed">
          <div className="rounded-sm bg-[color:var(--brand-cream)] p-5 text-sm">
            <strong className="block text-[color:var(--brand-charcoal)] mb-1">
              Dernière mise à jour
            </strong>
            12 mai 2026
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur ce site est :
            </p>
            <ul className="space-y-1 list-none">
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  {siteConfig.fullName}
                </strong>
              </li>
              <li>SIRET : {siteConfig.legal.siret}</li>
              <li>Email : {siteConfig.contact.email}</li>
              <li>Téléphone : {siteConfig.contact.phone}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              2. Données collectées
            </h2>
            <p>
              Nous collectons uniquement les données strictement nécessaires à
              la fourniture de nos services :
            </p>
            <ul className="space-y-2 list-disc pl-6 marker:text-[color:var(--brand-red)]">
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  Formulaire de contact
                </strong>{" "}
                : civilité, nom, prénom, email, téléphone, nom de
                l&apos;entreprise, message.
              </li>
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  Demande de formation AFGSU
                </strong>{" "}
                : informations professionnelles, date et lieu de naissance,
                adresse, financement souhaité.
              </li>
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  Navigation
                </strong>{" "}
                : données de connexion anonymisées pour les statistiques
                d&apos;audience (durée de visite, pages consultées).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              3. Finalités du traitement
            </h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="space-y-2 list-disc pl-6 marker:text-[color:var(--brand-red)]">
              <li>Répondre à vos demandes de devis et de renseignements</li>
              <li>Organiser et planifier les sessions de formation</li>
              <li>
                Émettre les conventions de formation et documents
                administratifs
              </li>
              <li>
                Vous informer ponctuellement de nos actualités (uniquement avec
                votre consentement explicite)
              </li>
              <li>
                Améliorer la qualité de nos services via les statistiques
                d&apos;audience
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              4. Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur l&apos;
              <strong className="text-[color:var(--brand-charcoal)]">
                exécution d&apos;un contrat
              </strong>{" "}
              (organisation de formation), votre{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                consentement
              </strong>{" "}
              (newsletter), ou l&apos;
              <strong className="text-[color:var(--brand-charcoal)]">
                intérêt légitime
              </strong>{" "}
              du responsable du traitement (réponse à une demande de contact).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              5. Durée de conservation
            </h2>
            <ul className="space-y-2 list-disc pl-6 marker:text-[color:var(--brand-red)]">
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  Données prospects
                </strong>{" "}
                : 3 ans à compter du dernier contact.
              </li>
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  Données clients
                </strong>{" "}
                : durée légale de conservation des documents comptables et de
                formation (10 ans).
              </li>
              <li>
                <strong className="text-[color:var(--brand-charcoal)]">
                  Données de navigation
                </strong>{" "}
                : 13 mois maximum.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              6. Destinataires
            </h2>
            <p>
              Vos données sont accessibles uniquement aux personnes habilitées
              chez Alertis Formation et à nos sous-traitants techniques
              (hébergement, envoi d&apos;emails) qui sont liés par des accords
              de confidentialité conformes au RGPD. Aucune donnée n&apos;est
              vendue ni transférée à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;
              <strong className="text-[color:var(--brand-charcoal)]">
                accès
              </strong>
              , de{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                rectification
              </strong>
              , d&apos;
              <strong className="text-[color:var(--brand-charcoal)]">
                effacement
              </strong>
              , de{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                limitation
              </strong>
              , d&apos;
              <strong className="text-[color:var(--brand-charcoal)]">
                opposition
              </strong>
              , et de{" "}
              <strong className="text-[color:var(--brand-charcoal)]">
                portabilité
              </strong>{" "}
              de vos données. Pour exercer ces droits, contactez-nous :
            </p>
            <ul className="space-y-1 list-none">
              <li>
                Email :{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[color:var(--brand-red)] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                Courrier : objet « Demande RGPD » — à l&apos;adresse du
                responsable du traitement.
              </li>
            </ul>
            <p>
              Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener"
                className="text-[color:var(--brand-red)] hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              8. Cookies
            </h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à
              son bon fonctionnement et, le cas échéant, des cookies de mesure
              d&apos;audience anonymisés. Aucun cookie publicitaire ni de
              traçage tiers n&apos;est déposé sans votre consentement explicite.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-[color:var(--brand-charcoal)]">
              9. Sécurité
            </h2>
            <p>
              Toutes les communications avec ce site sont chiffrées (HTTPS).
              Les données sont stockées sur des serveurs sécurisés situés en
              Union européenne, et l&apos;accès est restreint aux personnes
              autorisées.
            </p>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
