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
  type FormationEntry,
  type FormationCategory,
} from "./formations-data";
import { getApiIdForSlug } from "./alertis-api-mapping";
import { getLiveFormationIds } from "./alertis-api";

/**
 * Ne conserve que les formations encore présentes dans le back-office.
 * Si la liste API est indisponible (panne / cold-start Render), renvoie les
 * entrées inchangées : une panne ne doit jamais vider un listing.
 */
export async function filterLiveFormations(
  entries: readonly FormationEntry[],
): Promise<FormationEntry[]> {
  const liveIds = await getLiveFormationIds();
  if (liveIds === null) return [...entries];
  return entries.filter((entry) => {
    const apiId = getApiIdForSlug(entry.slug);
    return apiId !== null && liveIds.has(apiId);
  });
}

/** Toutes les formations encore proposées, dans l'ordre du catalogue. */
export function getLiveFormations(): Promise<FormationEntry[]> {
  return filterLiveFormations(formationEntries);
}

/** Formations encore proposées pour une catégorie donnée. */
export function getLiveFormationsByCategory(
  category: FormationCategory,
): Promise<FormationEntry[]> {
  return filterLiveFormations(getFormationsByCategory(category));
}

/** Nombre total de formations encore proposées (catalogue complet). */
export async function getLiveFormationCount(): Promise<number> {
  return (await getLiveFormations()).length;
}
