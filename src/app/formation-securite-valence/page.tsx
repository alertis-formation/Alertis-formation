import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { valence } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${valence.city}`,
  description: valence.metaDescription,
  alternates: { canonical: `/${valence.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${valence.city}`,
    description: valence.metaDescription,
    url: `/${valence.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteValencePage() {
  return <LocationPageContent data={valence} />;
}
