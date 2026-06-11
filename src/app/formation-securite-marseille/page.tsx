import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { marseille } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${marseille.city}`,
  description: marseille.metaDescription,
  alternates: { canonical: `/${marseille.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${marseille.city}`,
    description: marseille.metaDescription,
    url: `/${marseille.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteMarseillePage() {
  return <LocationPageContent data={marseille} />;
}
