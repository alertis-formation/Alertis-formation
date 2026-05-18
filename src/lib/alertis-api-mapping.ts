/**
 * Manual mapping between our local formation slugs (URL-stable) and the
 * Alertis back-office API formation IDs.
 *
 * Why manual? The API doesn't expose a slug field. We picked slugs early for
 * SEO continuity from the old WordPress site; mapping them by name is fragile
 * (the back-office team can rename a formation). Keeping this mapping in code
 * means a rename in the back-office doesn't silently break URLs.
 *
 * To find an ID: visit /admin/formations on the back-office, or call
 *   curl -H "X-API-Key: ..." https://alertis-back-office.onrender.com/api/external/formations
 *
 * If a slug is missing from this map, the formation page falls back to the
 * local stub data and shows "Sur demande" placeholders.
 */
export const slugToApiId: Record<string, number> = {
  // ─────── AFGSU ───────
  "formation-afgsu1": 109,
  "formation-afgsu2": 110,
  "formation-recyclage-afgsu1": 111,
  "formation-recyclage-afgsu2": 112,

  // ─────── INCENDIE ───────
  "formation-incendie": 85, // manipulation des extincteurs conforme au code du travail
  "formation-manipulation-extincteur": 86, // MEX
  "formation-premier-temoin-incendie": 87,
  "formation-incendie-en-creche": 88,
  "formation-incendie-etablissements-de-soins-type-j-u": 89,
  "formation-incendie-en-etablissement-recevant-du-public": 90, // ERP type O & R
  "formation-incendie-en-immeuble-de-grande-hauteur": 91,
  "formation-equipier-de-premiere-intervention": 92, // EPI
  "formation-incendie-evacuation-guide-serre-file": 93,
  "formation-ssi-systeme-de-securite-incendie": 94,
  "formation-incendie-en-entreprise": 95, // exercice d'évacuation
  "formation-appareil-respiratoire-isolant": 96, // ARI
  "formation-de-formateur-incendie": 97,
  "formation-incendie-en-realite-virtuelle": 99,
  "formation-equipier-de-seconde-intervention": 100,
  "formation-incendie-en-unite-mobile": 101,
  "formation-incendie-en-e-learning": 95, // best match: exercice évacuation
  // safety-day-incendie: 98 (handled below in Safety Day section)

  // ─────── SST / SECOURISME ───────
  "formation-sst-sauveteur-secouriste-du-travail": 102,
  "formation-recyclage-sst-mac-sst": 103,
  "formation-oxygenotherapie": 104, // SST oxygénothérapie
  "formation-formateur-sst": 106, // FO SST
  "formation-mac-formateur-sst": 107, // MAC FO SST

  // ─────── PSC SECOURISME ───────
  "formation-psc-premiers-secours-citoyen": 113,
  "formation-recyclage-psc": 114,
  "formation-gqs-gestes-qui-sauvent": 115, // atelier sensibilisation
  "formation-defibrillateur": 117,

  // ─────── GESTES ET POSTURES (ergonomie) ───────
  "formation-gestes-et-postures": 123,
  "formation-gestes-et-postures-en-creche": 140, // crèche dédiée
  "formation-gestes-et-postures-etablissements-de-soins-ehpad": 131,
  "formation-prevention-des-tms-troubles-musculosquelettiques": 125, // avec visite
  "formation-prap-ibc": 127,
  "formation-prap-2s-sanitaire-et-social": 128,
  "formation-de-formateur-gestes-et-postures": 122, // atelier sensibilisation (placeholder)

  // ─────── HABILITATION ÉLECTRIQUE ───────
  "habilitation-electrique-h0-b0": 77,
  "recyclage-habilitation-electrique-h0-b0": 78,
  "habilitation-electrique-bs-be-manoeuvre": 79,
  "recyclage-habilitation-electrique-bs-be": 80,
  "habilitation-electrique-br-b1-b2-bc": 81,
  "recyclage-habilitation-electrique-br-b1-b2-bc": 82,
  "habilitation-electrique-photovoltaique-bp": 157, // complément PV BR
  // "habilitation-electrique-bf-hf-fouille": NOT FOUND in API
  // "formation-formateur-habilitation-electrique": NOT FOUND in API

  // ─────── PRÉVENTION / DIVERS ───────
  "formation-menace-terroriste": 151,
  "formation-ppms-plan-particulier-mise-en-surete": 152, // gestion situations d'urgence PPMS
  "formation-gestion-des-situations-durgence-en-creche": 153, // gestes urgence petite enfance
  "formation-cse-chsct": 146, // -300 salariés (par défaut)
  "formation-hygiene-alimentaire-haccp": 144,
  "formation-travaux-en-hauteur": 147, // utilisation des EPI (par défaut)

  // ─────── SAFETY DAY ───────
  "safety-day-incendie": 98, // Safety day Incendie
  "safety-day-incendie-en-realite-virtuelle": 99, // Formation incendie en RV
  "safety-day-incendie-en-unite-mobile": 101, // Formation camion mobile
  // Les autres safety-day-* n'ont pas de correspondance directe dans l'API
};

export function getApiIdForSlug(slug: string): number | null {
  return slugToApiId[slug] ?? null;
}
