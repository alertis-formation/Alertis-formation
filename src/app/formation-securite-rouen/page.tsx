import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { rouen } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${rouen.city}`,
  description: rouen.metaDescription,
  alternates: { canonical: `/${rouen.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${rouen.city}`,
    description: rouen.metaDescription,
    url: `/${rouen.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteRouenPage() {
  return <LocationPageContent data={rouen} />;
}
