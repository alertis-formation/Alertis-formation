import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { dijon } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${dijon.city}`,
  description: dijon.metaDescription,
  alternates: { canonical: `/${dijon.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${dijon.city}`,
    description: dijon.metaDescription,
    url: `/${dijon.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteDijonPage() {
  return <LocationPageContent data={dijon} />;
}
