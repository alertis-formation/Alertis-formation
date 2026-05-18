import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations sur l'éditeur du site Alertis Formation.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <PageShell title="Mentions légales" breadcrumbs={[{ label: "Mentions légales" }]}>
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-8 text-[color:var(--brand-gray-medium)]">
          <div>
            <h2 className="text-[color:var(--brand-gray)] mb-3 text-2xl">Éditeur du site</h2>
            <p>
              <strong className="text-[color:var(--brand-gray)]">
                {siteConfig.fullName}
              </strong>
              <br />
              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--brand-red)] hover:underline"
              >
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.postalCode}{" "}
                {siteConfig.contact.address.city}
                <br />
                {siteConfig.contact.address.country}
              </a>
              <br />
              <br />
              SIRET : {siteConfig.legal.siret}
              <br />
              SIREN : {siteConfig.legal.siren}
              <br />
              N° TVA intracommunautaire : {siteConfig.legal.vat}
            </p>
            <p className="mt-4 text-sm">
              Déclaration d&apos;activité enregistrée sous le numéro{" "}
              <strong className="text-[color:var(--brand-gray)]">
                {siteConfig.legal.nda}
              </strong>{" "}
              auprès du préfet de région {siteConfig.legal.ndaRegion}. Cet
              enregistrement ne vaut pas agrément de l&apos;État.
            </p>
          </div>
          <div>
            <h2 className="text-[color:var(--brand-gray)] mb-3 text-2xl">Contact</h2>
            <p>
              Email : {siteConfig.contact.email}
              <br />
              Téléphone : {siteConfig.contact.phone}
            </p>
          </div>
          <div>
            <h2 className="text-[color:var(--brand-gray)] mb-3 text-2xl">Hébergement</h2>
            <p>
              <strong className="text-[color:var(--brand-gray)]">OVH</strong>
              <br />
              2 rue Kellermann
              <br />
              59100 Roubaix, France
              <br />
              <a
                href="https://www.ovh.com"
                target="_blank"
                rel="noopener"
                className="text-[color:var(--brand-red)] hover:underline"
              >
                www.ovh.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
