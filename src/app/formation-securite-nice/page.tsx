import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { nice } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${nice.city}`,
  description: nice.metaDescription,
  alternates: { canonical: `/${nice.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${nice.city}`,
    description: nice.metaDescription,
    url: `/${nice.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteNicePage() {
  return <LocationPageContent data={nice} />;
}
