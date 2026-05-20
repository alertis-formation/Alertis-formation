import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { aixEnProvence } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${aixEnProvence.city}`,
  description: aixEnProvence.metaDescription,
  alternates: { canonical: `/${aixEnProvence.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${aixEnProvence.city}`,
    description: aixEnProvence.metaDescription,
    url: `/${aixEnProvence.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteAixEnProvencePage() {
  return <LocationPageContent data={aixEnProvence} />;
}
