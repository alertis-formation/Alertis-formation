import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { strasbourg } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${strasbourg.city}`,
  description: strasbourg.metaDescription,
  alternates: { canonical: `/${strasbourg.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${strasbourg.city}`,
    description: strasbourg.metaDescription,
    url: `/${strasbourg.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteStrasbourgPage() {
  return <LocationPageContent data={strasbourg} />;
}
