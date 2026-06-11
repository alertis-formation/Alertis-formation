# Plan d'action SEO — alertisformation.com

Score actuel : **90/100** (↑ 86). Le site est techniquement excellent et désormais éditorialement solide. La quasi-totalité des actions High/Medium de la passe précédente a été livrée dans les commits `bb81497`, `93b355d`, `b608c40`. Ne restent que de la polish (Low) et une surveillance continue.

---

## ✅ Résolu depuis la passe de 16h35

- **Maillage interne articles** — module « Articles liés » (3 liens, sélection par catégorie puis cross-catégorie, aucun cul-de-sac) sur les 75 articles.
- **Réciprocité catégories → articles** — les 7 pages catégories listent leurs articles (`getArticlesByCategory`).
- **Maillage inter-villes** — liens contextuels vers villes voisines sur les pages locales.
- **E-E-A-T auteur nommé** — `Person` (Cyrille Gagnaire / Hugo Debois) en byline ET dans `ArticleJsonLd` (`author: {"@type":"Person"}`).
- **Couverture breadcrumb** — `BreadcrumbJsonLd` ajouté sur Dossier + 5 sous-pages + qui-sommes-nous + veille-reglementaire + indicateurs-de-resultats (9 pages).
- **Fix Course `provider.sameAs`** — auto-référence supprimée, provider lié au nœud `#organization`.
- **`aggregateRating` conforme** — sorti du nœud rendu site-wide, rattaché aux pages avec avis réels ; `googleReviewUrl` corrigé.
- **`/llms.txt`** dynamique depuis la config.

---

## 🔴 Critical — aucune
Aucun problème bloquant l'indexation ou exposant à une pénalité. 👍

---

## 🟠 High — surveillance continue

### H1. Surveiller le risque doorway sur les pages villes
- **Quoi :** 21 pages `/formation-securite-{ville}` depuis un siège unique.
- **Déjà bon :** contenu local unique (~346 mots/ville), schema `Service` + `areaServed: City` (pas de fausse adresse), sessions live, maillage inter-villes.
- **À faire :** auditer les villes sans session réelle (intra uniquement) → s'assurer que leur copie `economy`/`sectors` reste distincte et substantielle. Ne créer aucune nouvelle ville sans contenu local original.
- **Fichiers :** `src/lib/locations.ts`, `src/components/sections/location-page-content.tsx`
- **Effort :** moyen (audit) · **Impact :** protège l'indexation de 21 pages.

---

## 🟢 Low — backlog

### L1. Raccourcir les meta descriptions > 160 car.
- ~9-10 pages villes : Villeurbanne (188), Grenoble (178), Clermont-Ferrand (178), Saint-Étienne (165), Valence (162)… + faq (165), ergonomie (167), AFGSU (167). Viser ≤ 155 car.
- **Fichiers :** `src/lib/locations.ts` (champ description par ville), pages catégories concernées.

### L2. Raccourcir les titres dépassant ~60 car. (rendu final avec suffixe)
- faq (~82), ergonomie (~76), AFGSU (~75), incendie (~73). Le suffixe ` · Alertis Formation` ajoute ~20 car.
- **Fichiers :** `metadata`/`generateMetadata` des pages concernées.

### L3. Ajouter un champ `dateModified` aux articles mis à jour
- Le type `Article` n'a pas de `dateModified`/`updatedAt` → `ArticleJsonLd.dateModified` retombe sur `datePublished` (pas de vrai signal de fraîcheur).
- **Fichiers :** `src/lib/articles.ts` (type + données), `ArticleJsonLd` (déjà câblé pour le consommer).

### L4. Enrichir le hub Dossier d'un `ItemList`/`CollectionPage`
- Breadcrumb présent, mais pas de liste structurée des 5 sous-pages.
- **Fichier :** `src/app/dossier/page.tsx`.

### L5. Envisager `FAQPage` → `QAPage` sur les pages à question unique
- `src/app/faq/[question]/page.tsx` (éligibilité rich-result restreinte pour FAQPage à 1 question).

### L6. Typer le `LocalBusiness` comme `["LocalBusiness","EducationalOrganization"]`
- Aligne le `LocalBusiness` sur le type tableau déjà utilisé par l'`Organization`.
- **Fichier :** `src/components/seo/json-ld.tsx:138`

### L7. (Optionnel) Maillage article → page ville
- Lier quelques articles thématiques vers les pages villes correspondantes (la réciprocité catégorie↔article est déjà faite).

---

## 📊 Mesure & suivi (recommandé)
- Connecter **Google Search Console** : vérifier l'indexation des ~166 URLs, surveiller d'éventuels signaux doorway/thin sur les villes.
- Connecter **PageSpeed Insights / CrUX** : confirmer LCP/INP/CLS terrain (Performance estimée à 85 faute de données).
- Réexécuter cet audit après le batch Low pour rescorer (objectif : 93+).
