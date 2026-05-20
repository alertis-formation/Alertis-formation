import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Bytespider",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // `/_next/` reste crawlable : Googlebot a besoin du CSS/JS pour rendre
        // les pages. On n'exclut que les routes sans contenu indexable.
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Crawlers IA : accès total, aucune restriction (citations AI search).
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
