import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { nantes } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${nantes.city}`,
  description: nantes.metaDescription,
  alternates: { canonical: `/${nantes.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${nantes.city}`,
    description: nantes.metaDescription,
    url: `/${nantes.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteNantesPage() {
  return <LocationPageContent data={nantes} />;
}
