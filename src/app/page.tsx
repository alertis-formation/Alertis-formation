import { HeroSection } from "@/components/sections/hero-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { PresentationSection } from "@/components/sections/presentation-section";
import { FormationsGridSection } from "@/components/sections/formations-grid-section";
import { FeaturedFormationsSection } from "@/components/sections/featured-formations-section";
import { NewsSection } from "@/components/sections/news-section";
import { FaqSection } from "@/components/sections/faq-section";
import { formationEntries } from "@/lib/formations-data";

export const metadata = {
  title:
    "Formation sécurité au travail : SST, incendie, habilitation électrique",
  description:
    "Organisme de formation en santé et sécurité au travail : SST, MAC SST, incendie, habilitation électrique, AFGSU, PRAP, ergonomie. Formateurs INRS sur tout le territoire français, intra-entreprise.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Alertis Formation — SST, incendie, habilitation électrique, AFGSU",
    description:
      `Centre de formation santé & sécurité au travail : ${formationEntries.length} formations conformes au Code du travail, formateurs INRS, intervention partout en France.`,
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <PresentationSection />
      <FormationsGridSection />
      <FeaturedFormationsSection />
      <NewsSection />
      <FaqSection />
    </>
  );
}
