/**
 * Interpolate API duration/participants into editorial prose.
 *
 * Placeholders supported (in intro/description/programme/etc.):
 *   {heures}        → numeric only ("14" or "3h30")
 *   {heuresLabel}   → labelled ("14 heures" or "3h30")
 *   {jours}         → numeric only ("2")
 *   {joursLabel}    → labelled ("2 jours" / "1 jour")
 *   {participants}  → raw nombreParticipants ("4 à 12")
 *
 * Day mapping (when API returns whole hours):
 *   > 21h → ceil(h / 7)
 *   > 14h → 3 jours
 *   > 7h  → 2 jours
 *   ≤ 7h  → 1 jour
 * Sub-hour formats (e.g. "3H30") always map to 1 jour.
 */

export type ApiFormationLike = {
  duree?: string | null;
  nombreParticipants?: string | null;
};

type Interpolations = {
  heures: string;
  heuresLabel: string;
  jours: string;
  joursLabel: string;
  participants: string;
};

function computeInterpolations(api: ApiFormationLike | null | undefined): Interpolations {
  let heures = "";
  let heuresLabel = "";
  let jours = "";
  let joursLabel = "";

  const duree = api?.duree;
  if (duree) {
    const match = duree.match(/^(\d+)H(\d{2})?$/i);
    if (match) {
      const h = parseInt(match[1], 10);
      const m = match[2] ? parseInt(match[2], 10) : 0;
      if (m > 0) {
        heures = `${h}h${match[2]}`;
        heuresLabel = `${h}h${match[2]}`;
      } else {
        heures = String(h);
        heuresLabel = h === 1 ? `${h} heure` : `${h} heures`;
      }
      let j: number;
      if (m > 0 && h < 7) j = 1;
      else if (h > 21) j = Math.ceil(h / 7);
      else if (h > 14) j = 3;
      else if (h > 7) j = 2;
      else j = 1;
      jours = String(j);
      joursLabel = `${j} jour${j > 1 ? "s" : ""}`;
    } else {
      heures = duree;
      heuresLabel = duree;
    }
  }

  return {
    heures,
    heuresLabel,
    jours,
    joursLabel,
    participants: api?.nombreParticipants ?? "",
  };
}

export function interpolateContent(
  text: string | undefined,
  api: ApiFormationLike | null | undefined,
): string {
  if (!text) return "";
  const v = computeInterpolations(api) as unknown as Record<string, string>;
  return text.replace(/\{(\w+)(?:\|([^}]*))?\}/g, (_, key: string, fallback?: string) => {
    const val = v[key];
    if (val) return val;
    return fallback ?? "";
  });
}

export function interpolateList(
  items: string[] | undefined,
  api: ApiFormationLike | null | undefined,
): string[] {
  if (!items) return [];
  return items.map((it) => interpolateContent(it, api));
}
