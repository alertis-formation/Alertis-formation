/**
 * Alertis back-office API client (SERVER-SIDE ONLY).
 * The API key MUST stay on the server — never expose it to the browser.
 *
 * Docs: https://alertis-back-office.onrender.com/api/external
 */

import "server-only";

const API_BASE =
  process.env.ALERTIS_API_BASE ??
  "https://alertis-back-office.onrender.com/api/external";

const API_KEY = process.env.ALERTIS_API_KEY;

if (!API_KEY) {
  console.warn(
    "[alertis-api] ALERTIS_API_KEY is not set — API calls will fail."
  );
}

export type ApiFormation = {
  id: number;
  categorie: string;
  nom: string;
  duree: string | null;
  nombreParticipants: string | null;
  tarifIntra: string | null;
  interDisponible: boolean;
  disponible: boolean;
  order: number;
  attribut: string | null;
  programmePdf: {
    nom: string;
    downloadUrl: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ApiSession = {
  id: number;
  entreprise: string;
  ville: string;
  adresseComplete: string;
  codePostal: string;
  departement: string;
  departementNom: string;
  formation: string;
  categorie: string;
  prixVente: number;
  dateDebut: string;
  dateFin: string;
  datesFormation: string[];
  disponibilite: number | null;
  createdAt: string;
  updatedAt: string;
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
  pagination?: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
};

async function apiFetch<T>(
  path: string,
  init: RequestInit & { revalidate?: number } = {}
): Promise<T> {
  if (!API_KEY) {
    throw new Error("ALERTIS_API_KEY missing");
  }
  const { revalidate = 3600, ...rest } = init;
  const res = await fetch(`${API_BASE}${path}`, {
    ...rest,
    headers: {
      "X-API-Key": API_KEY,
      ...(rest.headers ?? {}),
    },
    next: { revalidate },
  });
  if (!res.ok) {
    throw new Error(
      `Alertis API error ${res.status} on ${path}: ${await res.text()}`
    );
  }
  return res.json();
}

/**
 * Fetch a formation by ID. Returns null if not found.
 */
export async function getFormationById(
  id: number
): Promise<ApiFormation | null> {
  try {
    const json = await apiFetch<ApiResponse<ApiFormation>>(
      `/formations/${id}`
    );
    return json.data;
  } catch (e) {
    console.error(`[alertis-api] getFormationById(${id}) failed:`, e);
    return null;
  }
}

/**
 * Fetch upcoming inter-entreprise sessions filtered by formation name (partial match).
 * Returns an empty array on error.
 */
export async function getUpcomingSessionsForFormation(
  formationName: string,
  limit = 5
): Promise<ApiSession[]> {
  try {
    const params = new URLSearchParams({
      formation: formationName,
      limit: String(limit),
      // Default: only future sessions are returned
    });
    const json = await apiFetch<ApiResponse<ApiSession[]>>(
      `/sessions?${params}`
    );
    return json.data ?? [];
  } catch (e) {
    console.error(
      `[alertis-api] getUpcomingSessionsForFormation("${formationName}") failed:`,
      e
    );
    return [];
  }
}

/**
 * Fetch all formations (paginated). Useful at build time for the static params.
 */
export async function getAllFormations(): Promise<ApiFormation[]> {
  try {
    const all: ApiFormation[] = [];
    let offset = 0;
    const limit = 100;
    while (true) {
      const json = await apiFetch<ApiResponse<ApiFormation[]>>(
        `/formations?limit=${limit}&offset=${offset}`
      );
      all.push(...json.data);
      if (!json.pagination?.hasMore) break;
      offset += limit;
    }
    return all;
  } catch (e) {
    console.error("[alertis-api] getAllFormations failed:", e);
    return [];
  }
}

/**
 * Fetch all upcoming inter-entreprise sessions (paginated, no formation filter).
 * Cached via the fetch revalidate. Returns [] on error.
 */
export async function getAllUpcomingSessions(): Promise<ApiSession[]> {
  try {
    const all: ApiSession[] = [];
    let offset = 0;
    const limit = 100;
    for (let i = 0; i < 30; i++) {
      const json = await apiFetch<ApiResponse<ApiSession[]>>(
        `/sessions?limit=${limit}&offset=${offset}`
      );
      const data = json.data ?? [];
      all.push(...data);
      if (!json.pagination?.hasMore || data.length === 0) break;
      offset += limit;
    }
    return all;
  } catch (e) {
    console.error("[alertis-api] getAllUpcomingSessions failed:", e);
    return [];
  }
}

/**
 * Upcoming sessions located in the given department codes (e.g. ["31"],
 * ["75","92","93","94"]), sorted by start date. Used by the area landing pages.
 */
export async function getUpcomingSessionsByDepartments(
  departments: string[],
  limit = 12
): Promise<ApiSession[]> {
  if (departments.length === 0) return [];
  const set = new Set(departments);
  const all = await getAllUpcomingSessions();
  return all
    .filter((s) => set.has(s.departement))
    .sort((a, b) => a.dateDebut.localeCompare(b.dateDebut))
    .slice(0, limit);
}
