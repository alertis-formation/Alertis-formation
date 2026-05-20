import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { tours } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${tours.city}`,
  description: tours.metaDescription,
  alternates: { canonical: `/${tours.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${tours.city}`,
    description: tours.metaDescription,
    url: `/${tours.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteToursPage() {
  return <LocationPageContent data={tours} />;
}
