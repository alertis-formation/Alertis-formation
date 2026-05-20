import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { chambery } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${chambery.city}`,
  description: chambery.metaDescription,
  alternates: { canonical: `/${chambery.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${chambery.city}`,
    description: chambery.metaDescription,
    url: `/${chambery.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteChamberyPage() {
  return <LocationPageContent data={chambery} />;
}
