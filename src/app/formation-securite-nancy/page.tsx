import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { nancy } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${nancy.city}`,
  description: nancy.metaDescription,
  alternates: { canonical: `/${nancy.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${nancy.city}`,
    description: nancy.metaDescription,
    url: `/${nancy.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteNancyPage() {
  return <LocationPageContent data={nancy} />;
}
