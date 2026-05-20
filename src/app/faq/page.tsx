import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FaqAccordion } from "./faq-accordion";
import { faqs } from "@/lib/faq";
import { FaqPageJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title:
    "FAQ formations sécurité au travail : SST, incendie, habilitation électrique",
  description:
    "Réponses aux questions fréquentes sur nos formations en santé et sécurité au travail : durée de validité SST, recyclage habilitation électrique, AFGSU, PRAP, obligations incendie, financement et organisation en intra-entreprise.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ formations sécurité au travail · Alertis Formation",
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
