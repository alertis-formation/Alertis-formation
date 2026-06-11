# Audit SEO complet — alertisformation.com

**Date :** 10 juin 2026 (rafraîchi à 17h30 après les commits SEO `bb81497`, `93b355d`, `b608c40`)
**Méthode :** analyse du code source (Next.js 16, ground truth du site). Outillage de crawl live (Python) indisponible sur ce poste → audit code-grounded sur le dépôt.
**Type d'activité détecté :** Local Service / Organisme de formation (santé & sécurité au travail) — siège unique à Chassieu (69), couverture nationale, 21 pages locales par ville.

> ⚠️ **Note de version.** Une première passe de cet audit (16h35) listait comme problèmes majeurs : articles en cul-de-sac de maillage, absence d'auteur nommé (E-E-A-T), pages Dossier sans schema, et `provider.sameAs` auto-référent. **Ces points ont été corrigés à 17h08** (commit `bb81497`). Ce rapport reflète l'état actuel du code. Les findings résolus sont déplacés en bas de chaque section.

---

## Score de santé SEO global : **90 / 100** — Excellent

| Catégorie | Poids | Score | Pondéré |
|-----------|:-----:|:-----:|:-------:|
| Technical SEO | 22 % | 92 | 20.2 |
| Content Quality | 23 % | 88 | 20.2 |
| On-Page SEO | 20 % | 88 | 17.6 |
| Schema / Structured Data | 10 % | 93 | 9.3 |
| Performance (CWV)* | 10 % | 85 | 8.5 |
| AI Search Readiness | 10 % | 93 | 9.3 |
| Images | 5 % | 95 | 4.8 |
| **Total** | | | **≈ 90** |

\* *Performance estimée (pas de données de terrain CrUX/GSC dans cet audit) — voir section dédiée.*

---

## Résumé exécutif

Le site est techniquement excellent et désormais éditorialement solide. Depuis la première passe d'audit, le maillage interne (module « Articles liés » + réciprocité catégories→articles), les signaux E-E-A-T (auteur `Person` nommé en texte ET en JSON-LD), la couverture breadcrumb (Dossier + 5 sous-pages + 3 pages institutionnelles) et le `provider.sameAs` du schema Course ont tous été corrigés. L'`aggregateRating` est rattaché uniquement aux pages affichant réellement des avis — conforme à la politique Google.

Aucune anomalie bloquante pour l'indexation. Les leviers restants sont de la **polish** : longueur des meta descriptions/titres sur quelques pages, signal de fraîcheur (`dateModified`), et surveillance continue du risque doorway sur les pages villes.

### Problèmes prioritaires restants
1. **[High — surveillance]** Risque « doorway pages » sur les 21 pages villes (siège unique, pages partiellement templatées) — *bien mitigé, à surveiller pour les villes sans session réelle*.
2. **[Low]** ~9-10 des 21 pages villes ont une meta description > 160 car. (Villeurbanne 188, Grenoble 178, Clermont-Ferrand 178…) + faq/ergonomie/AFGSU.
3. **[Low]** Quelques titres > 60 car. après suffixe template (faq, ergonomie, AFGSU, incendie) → troncature SERP cosmétique.
4. **[Low]** Pas de champ `dateModified`/`updatedAt` peuplé → `ArticleJsonLd.dateModified` retombe sur `datePublished` (aucun signal de fraîcheur réel).
5. **[Low]** `LocalBusiness` de type générique — envisager `["LocalBusiness","EducationalOrganization"]`.

### Récemment résolu ✅
Maillage articles ↔ articles & catégories → articles · auteur `Person` nommé (texte + schema) · BreadcrumbJsonLd sur 9 pages · fix `provider.sameAs` Course · `aggregateRating` sorti du nœud site-wide et rattaché aux pages avec avis · maillage inter-villes · `/llms.txt` dynamique.

---

## Technical SEO — 92/100

**Points forts (code) :**
- HTTP 200, contenu réel rendu. `MAINTENANCE_MODE_DEFAULT = false`.
- `robots.ts` : `/` autorisé, `/api/` et `/admin/` bloqués, `/_next/` crawlable. 18 crawlers IA explicitement autorisés. Ligne `Sitemap:` présente.
- `sitemap.xml` valide, ~166 URLs, `lastmod` stable (`2026-05-20` figé pour l'éditorial — évite de réinitialiser le `lastmod` à chaque déploiement). `revalidate = 3600`.
- Canonicals sur toutes les pages (`alternates.canonical`), `metadataBase` défini.
- En-têtes de sécurité complets dans `next.config.ts` : HSTS preload, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. `poweredByHeader: false`.
- Redirections legacy WordPress propres (`/category/*`, `/tag/*`, `/author/*`, archives, `/feed*`, `/wp-admin*`, `/wp-login.php`).
- `lang="fr"`, viewport + themeColor définis.

**À noter :**
- **[Low]** `/avis` en `robots: { index: false }` tout en rendant `ReviewsJsonLd` — sans danger (instance indexable sur l'accueil).
- **[Info]** Aucune donnée de terrain (CrUX/GSC/GA4) intégrée — connecter Search Console + PageSpeed pour valider l'indexation réelle et les CWV terrain.

---

## Content Quality — 88/100 (↑ 82)

**Points forts :**
- 75 articles structurés en blocs, ~1 200–1 800 mots/article, 7-8 min de lecture. Profondeur adéquate.
- Date de publication visible + `<time datetime>` + `datePublished` JSON-LD sur chaque article.
- **E-E-A-T résolu :** auteur `Person` nommé désormais affiché en byline (`getArticleAuthor` : Cyrille Gagnaire pour la sécurité incendie, Hugo Debois sinon) ET émis dans `ArticleJsonLd` comme `{"@type":"Person"}` (`json-ld.tsx:407`).
- Pages villes : ~346 mots uniques écrits à la main par ville (tissu économique local réel : Vallée de la chimie à Lyon, microélectronique à Grenoble, décolletage à Annecy, aéronautique à Toulouse, ICPE Seveso à Rouen…). Ratio unique/templaté ≈ 85/15 — **pas du contenu mince générique.**

**Faiblesses :**
- **[Low]** Pas de champ `dateModified`/`updatedAt` peuplé dans le type `Article` (`articles.ts:114-122`) → `ArticleJsonLd.dateModified` retombe sur `datePublished`, donc aucun signal de fraîcheur quand un article est mis à jour.

---

## On-Page SEO — 88/100 (↑ 80)

**Points forts :**
- Toutes les pages ont titre + description. Aucun titre/description manquant, aucun doublon exact. Template `%s · Alertis Formation`.
- **H1 unique garanti** via `page-shell.tsx`. Nesting h2/h3 logique.
- **Maillage interne résolu :** module « Articles liés » (3 liens, sélection par catégorie puis cross-catégorie → aucun article en cul-de-sac) sur les 75 articles (`related-articles.tsx`, `[slug]/page.tsx:216-220`). Réciprocité : les 7 pages catégories listent désormais leurs articles (`getArticlesByCategory`). Maillage inter-villes ajouté (`93b355d`).

**Faiblesses :**
- **[Low]** Meta descriptions > 160 car. : ~9-10 pages villes (Villeurbanne 188, Grenoble 178, Clermont-Ferrand 178, Saint-Étienne 165, Valence 162…), faq (165), ergonomie (167), AFGSU (167). Moyenne villes ≈ 165 (en nette baisse vs ~198 avant, mais encore au-dessus de l'optimal).
- **[Low]** Titres > 60 car. après suffixe template : faq (~82), ergonomie (~76), AFGSU (~75), incendie (~73), safety-day (~65) → troncature SERP cosmétique. Les titres de villes (`Formation sécurité au travail à {ville}`) restent dans la cible.
- **[Info]** Maillage article → page ville encore peu développé (réciprocité catégorie↔article faite, article↔ville optionnelle).

---

## Schema & Structured Data — 93/100 (↑ 88)

**Architecture remarquable :** `@id` partagés (`#organization`, `#localbusiness`) pour la fusion des nœuds ; `aggregateRating` sorti du `LocalBusiness` site-wide vers `ReviewsJsonLd` (uniquement sur les pages affichant réellement les avis) — conforme à la politique Google.

| Type de page | Schema rendu |
|---|---|
| Toutes (layout) | Organization+EducationalOrganization, LocalBusiness, WebSite |
| Accueil | + ReviewsJsonLd |
| Pages villes | Breadcrumb + LocalService (Service, `areaServed: City`) |
| Catégories | Breadcrumb + ItemList |
| Formation détail | Breadcrumb + Course (offers + hasCourseInstance) |
| Articles | Breadcrumb + Article (**author `Person`**) |
| FAQ + FAQ/[question] | FAQPage + Breadcrumb |
| Dossier (hub + 5 sous-pages) | **Breadcrumb** ✅ (ajouté) |
| qui-sommes-nous / veille-reglementaire / indicateurs-de-resultats | **Breadcrumb** ✅ (ajouté) |
| /avis | ReviewsJsonLd |

**Résolu ✅ :** breadcrumb sur Dossier + 5 sous-pages + 3 pages institutionnelles (9 pages au total) · `provider.sameAs` auto-référent du Course supprimé (`json-ld.tsx:314-319`, provider référence le nœud `#organization` via `@id`).

**Faiblesses restantes :**
- **[Low]** Hub Dossier : breadcrumb présent mais pas de `ItemList`/`CollectionPage` listant les sous-pages (amélioration optionnelle).
- **[Low]** `FAQPage` sur une page à question unique (`faq/[question]`) — éligibilité rich-result restreinte ; envisager `QAPage`.
- **[Low]** `LocalBusiness` de type générique `"LocalBusiness"` (`json-ld.tsx:138`) — l'`Organization` utilise déjà un type tableau `["Organization","EducationalOrganization"]` ; aligner le `LocalBusiness` renforcerait le signal sectoriel.

---

## Performance (CWV) — 85/100 (estimé)

Pas de données de terrain. Signaux code favorables :
- `next/image` partout (33 instances), formats AVIF/WebP, `deviceSizes` configurés, `priority` sur les images hero (LCP), `sizes` corrects, `aspect-ratio` défini (anti-CLS).
- Police Roboto via `next/font`, `display: swap` (anti-FOIT).
- `compress: true`, cache `immutable` 1 an sur les images.

**Action :** connecter PageSpeed Insights + CrUX pour confirmer LCP/INP/CLS terrain. Score conservateur faute de mesure.

---

## Images — 95/100

- Aucun `<img>` brut dans le code applicatif (seule occurrence : page de maintenance `proxy.ts`, avec `alt`). Les `<img>` dans `entreprise/` et `etablissement/` sont des artefacts de scraping non suivis, hors site.
- Les 33 `<Image>` ont tous un `alt` descriptif. Un seul `alt=""` intentionnel sur une image décorative (`dossier/page.tsx`).
- Formats modernes, lazy-loading natif, pas de CLS détecté.

---

## AI Search Readiness (GEO) — 93/100

- `/llms.txt` généré dynamiquement depuis la config (pages clés, domaines, couverture géo, articles, contact).
- 18 crawlers IA explicitement autorisés dans `robots.ts` (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended…).
- Contenu factuel et citable (chiffres, SIRET, NDA, indicateurs de résultats), schema riche → forte citabilité pour AI Overviews / ChatGPT / Perplexity.
- **[Low]** Renforcer la citabilité passage par passage avec des réponses directes en tête de section.

---

## Local SEO

- **NAP 100 % cohérent** : source unique `site-config.ts` consommée à l'identique par le JSON-LD et le footer (`<address>` sémantique). Téléphone E.164, géo, `hasMap` vers la fiche GBP.
- **[High — surveillance] Risque doorway** sur les 21 pages villes. **Bien mitigé** : contenu local unique, sessions live filtrées par département, maillage inter-villes, schema `Service` avec `areaServed: City` (PAS de faux `LocalBusiness` avec adresse fabriquée). Risque résiduel : villes sans session réelle (intra uniquement).
- **[Résolu ✅]** `aggregateRating` : sorti du nœud rendu site-wide, rattaché aux pages avec avis (échantillon de vrais avis Google affiché + agrégat). `googleReviewUrl` corrigé (`b608c40`). Maintenir `siteConfig.rating` (fallback) aligné sur le vrai chiffre GBP.
- **[Low]** `LocalBusiness` type générique — envisager `["LocalBusiness","EducationalOrganization"]`.

---

## Annexe — décompte des pages villes

**Résolu :** 21 répertoires `src/app/formation-securite-*` ↔ 21 villes dans `locations.ts` (parité parfaite). La divergence « 21 vs 23 » de la passe précédente était un artefact de comptage (tableau `locations` + index `nearbyBySlug`), pas de pages orphelines.

Villes couvertes : Aix-en-Provence, Annecy, Bordeaux, Bourg-en-Bresse, Chambéry, Clermont-Ferrand, Grenoble, Lille, Lyon, Montpellier, Nantes, Nice, Paris, Rennes, Rouen, Saint-Étienne, Strasbourg, Toulouse, Tours, Valence, Villeurbanne.
