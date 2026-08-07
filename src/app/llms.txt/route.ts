import { siteConfig, formationCategories } from "@/lib/site-config";
import { articles, articleSlugs } from "@/lib/articles";
import { locations } from "@/lib/locations";

export const revalidate = 86400;

/**
 * /llms.txt — fiche d'orientation pour les moteurs IA (ChatGPT, Claude,
 * Perplexity…). Format Markdown léger, généré à partir de la config du site
 * pour rester synchronisé avec le contenu réel.
 */
export function GET(): Response {
  const base = siteConfig.url;

  const lines: string[] = [
    `# ${siteConfig.fullName}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `Organisme de formation santé et sécurité au travail basé à ${siteConfig.contact.address.city} (${siteConfig.contact.address.postalCode}), intervenant partout en France, en intra comme en inter-entreprises. SIRET ${siteConfig.legal.siret} · NDA ${siteConfig.legal.nda} (${siteConfig.legal.ndaRegion}).`,
    "",
    `Certifié Qualiopi (certificat n° ${siteConfig.qualiopi.certificateNumber}, délivré par ${siteConfig.qualiopi.certifier}, valable jusqu'au ${siteConfig.qualiopi.validUntil.split("-").reverse().join("/")}) au titre de la catégorie d'action « actions de formation ». Certificat : ${base}${siteConfig.qualiopi.certificateUrl}`,
    "",
    "## Pages clés",
    `- [Accueil](${base}/)`,
    `- [Qui sommes-nous](${base}/qui-sommes-nous)`,
    `- [Toutes les formations](${base}/formations)`,
    `- [Formations AFGSU](${base}/nos-formations-afgsu)`,
    `- [Indicateurs de résultats](${base}/indicateurs-de-resultats)`,
    `- [FAQ](${base}/faq)`,
    `- [Veille réglementaire](${base}/veille-reglementaire)`,
    `- [Contact](${base}/contact)`,
    "",
    "## Domaines de formation",
    ...formationCategories.map((c) => `- [${c.label}](${base}${c.href})`),
    "",
    "## Couverture géographique (pages locales)",
    ...locations.map(
      (l) => `- [Formation sécurité à ${l.city}](${base}/${l.slug})`
    ),
    "",
    "## Articles & ressources",
    ...articleSlugs.map((slug) => `- [${articles[slug].title}](${base}/${slug})`),
    "",
    "## Contact",
    `- Téléphone : ${siteConfig.contact.phone}`,
    `- Email : ${siteConfig.contact.email}`,
    `- Adresse : ${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
