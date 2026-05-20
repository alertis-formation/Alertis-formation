import type { Metadata } from "next";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { grenoble } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Formation sécurité au travail à ${grenoble.city}`,
  description: grenoble.metaDescription,
  alternates: { canonical: `/${grenoble.slug}` },
  openGraph: {
    title: `Formation sécurité au travail à ${grenoble.city}`,
    description: grenoble.metaDescription,
    url: `/${grenoble.slug}`,
    type: "website",
  },
};

export default function FormationSecuriteGrenoblePage() {
  return <LocationPageContent data={grenoble} />;
}
