import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { villeurbanne } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${villeurbanne.city}`,
  description: villeurbanne.metaDescription,
  alternates: { canonical: `/${villeurbanne.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${villeurbanne.city}`,
    description: villeurbanne.metaDescription,
    url: `/${villeurbanne.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteVilleurbannePage() {
  return <LocationPageContent data={villeurbanne} />;
}
