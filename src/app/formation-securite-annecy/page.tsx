import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { annecy } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${annecy.city}`,
  description: annecy.metaDescription,
  alternates: { canonical: `/${annecy.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${annecy.city}`,
    description: annecy.metaDescription,
    url: `/${annecy.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteAnnecyPage() {
  return <LocationPageContent data={annecy} />;
}
