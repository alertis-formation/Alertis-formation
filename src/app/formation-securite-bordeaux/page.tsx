import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { bordeaux } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${bordeaux.city}`,
  description: bordeaux.metaDescription,
  alternates: { canonical: `/${bordeaux.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${bordeaux.city}`,
    description: bordeaux.metaDescription,
    url: `/${bordeaux.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteBordeauxPage() {
  return <LocationPageContent data={bordeaux} />;
}
