import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { avignon } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${avignon.city}`,
  description: avignon.metaDescription,
  alternates: { canonical: `/${avignon.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${avignon.city}`,
    description: avignon.metaDescription,
    url: `/${avignon.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteAvignonPage() {
  return <LocationPageContent data={avignon} />;
}
