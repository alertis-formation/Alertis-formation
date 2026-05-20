import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { montpellier } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${montpellier.city}`,
  description: montpellier.metaDescription,
  alternates: { canonical: `/${montpellier.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${montpellier.city}`,
    description: montpellier.metaDescription,
    url: `/${montpellier.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteMontpellierPage() {
  return <LocationPageContent data={montpellier} />;
}
