import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { clermontFerrand } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${clermontFerrand.city}`,
  description: clermontFerrand.metaDescription,
  alternates: { canonical: `/${clermontFerrand.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${clermontFerrand.city}`,
    description: clermontFerrand.metaDescription,
    url: `/${clermontFerrand.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteClermontFerrandPage() {
  return <LocationPageContent data={clermontFerrand} />;
}
