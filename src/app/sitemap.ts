import type { MetadataRoute } from "next";
import { siteConfig, formationCategories } from "@/lib/site-config";
import { articleSlugs, articles } from "@/lib/articles";
import { getLiveFormations } from "@/lib/formations-live";
import { faqs } from "@/lib/faq";
import { locations } from "@/lib/locations";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  // Stable date for editorial pages. Using `new Date()` here would reset the
  // <lastmod> of ~95 URLs on every deploy, teaching Google to distrust them.
  // Bump manually when a static page's content meaningfully changes.
  const lastModified = new Date("2026-05-20");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/qui-sommes-nous`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/formations`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/nos-formations-afgsu`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/dossier`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/articles`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact-formation-afgsu`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/veille-reglementaire`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/indicateurs-de-resultats`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/accessibilite-handicap`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/reclamations`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politique-de-confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = formationCategories.map(
    (c) => ({
      url: `${base}${c.href}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const liveFormations = await getLiveFormations();
  const formationRoutes: MetadataRoute.Sitemap = liveFormations.map((f) => ({
    url: `${base}/formations/${f.slug}`,
    lastModified: f.date ? new Date(f.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(articles[slug].publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const dossierRoutes: MetadataRoute.Sitemap = [
    "sst",
    "incendie",
    "prap",
    "psc-pse",
    "gestes-qui-sauvent",
  ].map((slug) => ({
    url: `${base}/dossier/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const faqRoutes: MetadataRoute.Sitemap = faqs.map((f) => ({
    url: `${base}/faq/${f.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...dossierRoutes,
    ...faqRoutes,
    ...locationRoutes,
    ...formationRoutes,
    ...articleRoutes,
  ];
}
