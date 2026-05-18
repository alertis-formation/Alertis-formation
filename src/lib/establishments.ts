import { siteConfig } from "@/lib/site-config";

export type Establishment = {
  id: string;
  name: string;
  city: string;
  region?: string;
  address?: string;
  googleReviewUrl: string;
  /**
   * Formation categories handled by this establishment (matches `href` slugs
   * in `formationCategories`). Empty/undefined = all categories.
   */
  categories?: string[];
};

export const establishments: Establishment[] = [
  {
    id: "chassieu",
    name: "Alertis Formation — Chassieu",
    city: "Chassieu",
    region: "Auvergne-Rhône-Alpes",
    address: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
    googleReviewUrl: siteConfig.googleReviewUrl,
  },
];

export function getEligibleEstablishments(
  categoryHref?: string,
): Establishment[] {
  if (!categoryHref) return establishments;
  const filtered = establishments.filter(
    (e) => !e.categories || e.categories.includes(categoryHref),
  );
  return filtered.length > 0 ? filtered : establishments;
}

export function pickRandomEstablishment(
  categoryHref?: string,
): Establishment {
  const pool = getEligibleEstablishments(categoryHref);
  return pool[Math.floor(Math.random() * pool.length)];
}
