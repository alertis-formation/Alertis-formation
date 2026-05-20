import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { paris } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${paris.city}`,
  description: paris.metaDescription,
  alternates: { canonical: `/${paris.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${paris.city}`,
    description: paris.metaDescription,
    url: `/${paris.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteParisPage() {
  return <LocationPageContent data={paris} />;
}
