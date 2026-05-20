import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { saintEtienne } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${saintEtienne.city}`,
  description: saintEtienne.metaDescription,
  alternates: { canonical: `/${saintEtienne.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${saintEtienne.city}`,
    description: saintEtienne.metaDescription,
    url: `/${saintEtienne.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteSaintEtiennePage() {
  return <LocationPageContent data={saintEtienne} />;
}
