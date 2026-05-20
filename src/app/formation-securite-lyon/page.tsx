import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { lyon } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${lyon.city}`,
  description: lyon.metaDescription,
  alternates: { canonical: `/${lyon.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${lyon.city}`,
    description: lyon.metaDescription,
    url: `/${lyon.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteLyonPage() {
  return <LocationPageContent data={lyon} />;
}
