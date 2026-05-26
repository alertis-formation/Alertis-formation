/**
 * Filtrage des formations selon leur présence réelle dans le back-office
 * Alertis (SERVER-SIDE ONLY — dépend de l'API).
 *
 * Une formation n'est affichée dans les listings que si :
 *  - son slug est mappé à un ID API (`alertis-api-mapping`), ET
 *  - cet ID existe toujours dans le back-office.
 *
 * Les slugs non mappés et les formations supprimées du back-office
 * disparaissent donc des listings — et leurs pages détail redirigent vers
 * /formations (voir `app/formations/[slug]/page.tsx`).
 */
import "server-only";
import {
  formationEntries,
  getFormationsByCategory,
  HIDDEN_FORMATION_SLUGS,
  type FormationEntry,
  type FormationCategory,
} from "./formations-data";
import { getApiIdForSlug } from "./alertis-api-mapping";
import { getAllFormations, type ApiFormation } from "./alertis-api";

/** Formation locale enrichie des champs renvoyés par le back-office. */
export type LiveFormationEntry = FormationEntry & {
  /** Durée affichable (ex. "2 jours", "14 heures") ou null si non renseignée. */
  duree: string | null;
};

async function getApiFormationsById(): Promise<Map<number, ApiFormation> | null> {
  const all = await getAllFormations();
  if (all.length === 0) return null;
  return new Map(all.map((f) => [f.id, f]));
}

/**
 * Ne conserve que les formations encore présentes dans le back-office,
 * en excluant celles marquées comme cachées dans `HIDDEN_FORMATION_SLUGS`,
 * et enrichit chaque entrée avec la durée renvoyée par l'API.
 * Si la liste API est indisponible (panne / cold-start Render), renvoie les
 * entrées inchangées (hors cachées) avec `duree: null` : une panne ne doit
 * jamais vider un listing.
 */
export async function filterLiveFormations(
  entries: readonly FormationEntry[],
): Promise<LiveFormationEntry[]> {
  const visible = entries.filter((e) => !HIDDEN_FORMATION_SLUGS.has(e.slug));
  const apiById = await getApiFormationsById();
  if (apiById === null) {
    return visible.map((e) => ({ ...e, duree: null }));
  }
  const enriched: LiveFormationEntry[] = [];
  for (const entry of visible) {
    const apiId = getApiIdForSlug(entry.slug);
    if (apiId === null) continue;
    const api = apiById.get(apiId);
    if (!api) continue;
    enriched.push({ ...entry, duree: api.duree });
  }
  return enriched;
}

/** Toutes les formations encore proposées, dans l'ordre du catalogue. */
export function getLiveFormations(): Promise<LiveFormationEntry[]> {
  return filterLiveFormations(formationEntries);
}

/** Formations encore proposées pour une catégorie donnée. */
export function getLiveFormationsByCategory(
  category: FormationCategory,
): Promise<LiveFormationEntry[]> {
  return filterLiveFormations(getFormationsByCategory(category));
}

/** Nombre total de formations encore proposées (catalogue complet). */
export async function getLiveFormationCount(): Promise<number> {
  return (await getLiveFormations()).length;
}
