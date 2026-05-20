import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { bourgEnBresse } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${bourgEnBresse.city}`,
  description: bourgEnBresse.metaDescription,
  alternates: { canonical: `/${bourgEnBresse.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${bourgEnBresse.city}`,
    description: bourgEnBresse.metaDescription,
    url: `/${bourgEnBresse.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteBourgEnBressePage() {
  return <LocationPageContent data={bourgEnBresse} />;
}
