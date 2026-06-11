import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { macon } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${macon.city}`,
  description: macon.metaDescription,
  alternates: { canonical: `/${macon.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${macon.city}`,
    description: macon.metaDescription,
    url: `/${macon.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteMaconPage() {
  return <LocationPageContent data={macon} />;
}
