import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { nimes } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${nimes.city}`,
  description: nimes.metaDescription,
  alternates: { canonical: `/${nimes.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${nimes.city}`,
    description: nimes.metaDescription,
    url: `/${nimes.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteNimesPage() {
  return <LocationPageContent data={nimes} />;
}
