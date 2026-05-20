import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { lille } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${lille.city}`,
  description: lille.metaDescription,
  alternates: { canonical: `/${lille.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${lille.city}`,
    description: lille.metaDescription,
    url: `/${lille.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteLillePage() {
  return <LocationPageContent data={lille} />;
}
