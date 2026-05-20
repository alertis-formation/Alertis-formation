import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { toulouse } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${toulouse.city}`,
  description: toulouse.metaDescription,
  alternates: { canonical: `/${toulouse.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${toulouse.city}`,
    description: toulouse.metaDescription,
    url: `/${toulouse.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteToulousePage() {
  return <LocationPageContent data={toulouse} />;
}
