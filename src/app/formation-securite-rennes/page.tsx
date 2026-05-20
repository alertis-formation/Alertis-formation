import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { rennes } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${rennes.city}`,
  description: rennes.metaDescription,
  alternates: { canonical: `/${rennes.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${rennes.city}`,
    description: rennes.metaDescription,
    url: `/${rennes.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteRennesPage() {
  return <LocationPageContent data={rennes} />;
}
