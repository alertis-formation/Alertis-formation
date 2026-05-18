import "server-only";
import { siteConfig } from "./site-config";

export type GoogleRating = {
  value: number;
  count: number;
  /** Provenance — utile pour debug / monitoring. */
  source: "scrape" | "fallback";
};

/**
 * URL Google "local search" (panneau Maps inline dans la SERP). Cette page
 * est rendue côté serveur — contrairement à maps.google.com — et expose la
 * note dans des attributs `aria-label` lisibles. Le `cid` cible directement
 * la fiche Alertis (CID hexa `0x825e9f31883bd96c`).
 */
const LOCAL_SEARCH_URL =
  "https://www.google.com/search?tbm=lcl&hl=fr&q=Centre+de+formation+ALERTIS+CHASSIEU";

/** Mot-clé identifiant la fiche dans le HTML retourné. */
const BUSINESS_ANCHOR = "ALERTIS";

const SCRAPE_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  "Accept-Language": "fr-FR,fr;q=0.9",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  // Bypass de la page de consentement RGPD (Google EU)
  Cookie:
    "CONSENT=YES+cb.20210720-07-p0.fr+FX+410; SOCS=CAESHAgBEhJnd3NfMjAyMzA3MjAtMF9SQzIaAmRlIAEaBgiAo8mlBg",
};

/**
 * Récupère la note Google Business de la fiche Alertis Chassieu.
 *
 * Stratégie :
 * 1. Une seule requête HTTP toutes les 24h (cache `revalidate` de Next.js).
 * 2. Parsing du HTML serveur de la page `tbm=lcl` (Google Local SERP).
 * 3. Sélection du résultat le plus proche du mot-clé "ALERTIS" dans le DOM.
 * 4. En cas d'échec (Google change le format, anti-bot, etc.), retombe sur
 *    la valeur statique de `siteConfig.rating` sans casser le rendu.
 */
export async function getGoogleRating(): Promise<GoogleRating> {
  const fallback: GoogleRating = {
    value: siteConfig.rating.value,
    count: siteConfig.rating.count,
    source: "fallback",
  };

  try {
    const res = await fetch(LOCAL_SEARCH_URL, {
      headers: SCRAPE_HEADERS,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return fallback;
    const html = await res.text();
    const parsed = parseGoogleLocalRating(html, BUSINESS_ANCHOR);
    if (!parsed) return fallback;
    return { ...parsed, source: "scrape" };
  } catch {
    return fallback;
  }
}

/**
 * Extrait la note + le nombre d'avis du HTML de Google Local Search.
 *
 * Format observé (FR) :
 *   `aria-label="Note : 4,9 sur 5 594 avis d'utilisateurs"`
 *
 * Plusieurs commerces peuvent figurer dans la même SERP — on choisit le
 * match dont la position dans le HTML est la plus proche d'une occurrence
 * du mot-clé `anchor` (ici "ALERTIS"). Validation des plages [1,5] pour la
 * note et [1, 1 000 000] pour le compteur d'avis.
 */
export function parseGoogleLocalRating(
  html: string,
  anchor: string,
): { value: number; count: number } | null {
  const ratingRe =
    /Note\s*:\s*(\d(?:[.,]\d)?)\s+sur\s+5\s+(\d{1,7})\s+avis/g;

  const anchorPositions: number[] = [];
  {
    let pos = 0;
    while ((pos = html.indexOf(anchor, pos)) >= 0) {
      anchorPositions.push(pos);
      pos += anchor.length;
    }
  }
  if (anchorPositions.length === 0) return null;

  type Match = { value: number; count: number; pos: number };
  const matches: Match[] = [];
  let m: RegExpExecArray | null;
  while ((m = ratingRe.exec(html)) !== null) {
    const value = Number(m[1].replace(",", "."));
    const count = Number(m[2]);
    if (
      Number.isFinite(value) &&
      Number.isFinite(count) &&
      value >= 1 &&
      value <= 5 &&
      count >= 1 &&
      count <= 1_000_000
    ) {
      matches.push({ value, count, pos: m.index });
    }
  }
  if (matches.length === 0) return null;

  // Match le plus proche d'une mention du mot-clé.
  const distanceTo = (p: number) =>
    Math.min(...anchorPositions.map((a) => Math.abs(a - p)));
  matches.sort((a, b) => distanceTo(a.pos) - distanceTo(b.pos));
  const best = matches[0];
  return { value: best.value, count: best.count };
}
