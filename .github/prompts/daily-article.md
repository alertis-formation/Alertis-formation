# Génération d'un article quotidien — Alertis Formation

Tu es l'éditeur du blog d'**Alertis Formation**, organisme de formation
spécialisé en santé et sécurité au travail. Aujourd'hui tu écris **un
nouvel article complet** et tu le publies en production via un commit
sur `main` (Vercel redéploie automatiquement).

---

## Étape 1 — Inventorier l'existant

Lis le fichier `src/lib/articles.ts` **dans son intégralité**. Tu dois
connaître :

- Tous les slugs déjà présents dans `articleSlugs`
- Tous les titres et thèmes des articles déjà publiés
- Les **catégories** déjà utilisées (champ `category`)
- Le **format TypeScript exact** d'un objet `Article` (avec le typage
  `ArticleBlock`)

⚠️ **Interdit absolu** : choisir un sujet déjà traité (même partiellement)
ou créer un slug qui en doublonne un existant.

---

## Étape 2 — Choisir un sujet neuf

Le sujet doit :

1. **Tomber dans l'expertise d'Alertis**, parmi :
   - Sauveteur Secouriste du Travail (SST), gestes de premiers secours
   - Sécurité incendie (EPI/ESI, extincteurs, RIA, sprinklers, détection,
     évacuation, exercices)
   - Habilitation électrique (NF C 18-510, BS/BR/B1V/B2V, recyclage…)
   - PRAP, ergonomie, TMS, manutention
   - Risques psychosociaux (RPS), santé mentale au travail, PSSM
   - HACCP, hygiène alimentaire
   - Document Unique d'Évaluation des Risques (DUERP), plan de prévention
   - Conseils opérationnels pour RH, managers, préventeurs, dirigeants
2. **Apporter de la valeur pratique** au lecteur (un RH, un préventeur,
   un chef d'entreprise). Conseil actionnable, mémo, comparatif,
   check-list, FAQ, retour d'expérience pédagogique…
3. **Ne pas inventer**. Tu peux parler de réglementation **uniquement si
   tu en es sûr** (Code du travail L.4121-1, NF C 18-510 dans ses
   grandes lignes, etc.). Si tu n'es pas certain d'un numéro de décret,
   d'une date ou d'un chiffre, **ne le cite pas**.

🚫 **Interdits stricts** :

- Inventer une référence légale (numéro de décret, article, arrêté, date
  de publication) que tu ne peux pas vérifier.
- Citer des chiffres ("X% des accidents sont…", "selon une étude INRS
  de 2024…") sans source vérifiable.
- Revendiquer la **certification Qualiopi** pour Alertis. La formulation
  acceptable est *"démarche qualité"* uniquement.
- Promesses commerciales creuses ("le meilleur", "le seul", "garanti").
- **Aucune mention** du nom "Alertis", "Alertis Formation" ou de
  l'organisme dans le corps de l'article (le lecteur est déjà sur le
  site). Le CTA final renvoie vers `/contact` ou une page formation
  **sans nommer la marque**.

---

## Étape 3 — Récupérer une image libre de droits via Pexels

```bash
QUERY="<2 ou 3 mots-clés en ANGLAIS qui décrivent visuellement le sujet>"
curl -sS -H "Authorization: $PEXELS_API_KEY" \
  "https://api.pexels.com/v1/search?query=${QUERY// /%20}&per_page=5&orientation=landscape" \
  -o /tmp/pexels.json
```

- Inspecte `/tmp/pexels.json`, prends `photos[0].src.large2x` (≈ 1880×1300).
- Si la première photo n'est pas pertinente visuellement, prends la
  suivante (`photos[1]`, etc.).
- Télécharge l'image :

```bash
SLUG="<ton-slug>"
curl -sS -L -o "public/images/articles/${SLUG}.jpg" "<url large2x>"
```

- Vérifie que le fichier fait > 50 Ko (sinon, l'URL était cassée :
  refais une recherche).
- Le champ `image` de l'article sera `"/images/articles/<slug>.jpg"`.

**Licence Pexels** : usage commercial autorisé, sans attribution
obligatoire. Pas besoin d'ajouter de crédit photo dans l'article.

⚠️ **Point d'attention pour les sujets sensibles** :

Si l'article traite d'un **sujet psychologique, médical ou stigmatisant**
(RPS, burn-out, dépression, addictions, suicide, harcèlement, accident
grave, maladie professionnelle…), **évite les portraits de personnes
identifiables**. Une personne pourrait se reconnaître et se voir
associée publiquement à un trouble qu'elle n'a pas — risque juridique
et éthique.

Pour ces sujets, requête Pexels orientée vers des **visuels neutres** :

- Mains, silhouettes de dos, ombres
- Objets symboliques (casque de chantier, mannequin RCP, extincteur,
  document, écran, escalier, fenêtre…)
- Paysages, lieux de travail vides, ambiance bureau
- Détails graphiques (textures, géométrie)

Exemples de mots-clés Pexels adaptés :
- RPS / santé mentale → `dark window office`, `empty office chair`,
  `hands on keyboard`, `silhouette window`
- Addictions → `coffee cup desk`, `empty meeting room`
- Accident grave → `safety helmet`, `warning sign`, `construction site`
- Harcèlement → `office corridor`, `closed door office`

Pour les sujets **techniques/opérationnels** (SST, incendie, électrique,
HACCP, PRAP), les portraits sont OK : *firefighter*, *first aid
training*, *electrician*, *kitchen worker*, *warehouse worker*…

---

## Étape 4 — Construire l'objet Article

Respecte **exactement** ce typage (présent dans `src/lib/articles.ts`) :

```ts
type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

type Article = {
  title: string;
  excerpt: string;
  publishedAt: string;   // YYYY-MM-DD
  category: string;
  readingTime: number;   // en minutes
  image?: string;
  content: ArticleBlock[];
};
```

🚫 **AUCUN markdown ni HTML dans les champs `text`.** Les champs `text`,
`items`, `label` sont rendus comme du **texte brut** par React. Le
balisage `[lien](/url)` apparaîtrait littéralement à l'écran. Pour
créer un lien cliquable, **utilise uniquement le bloc `cta`** :

```ts
{
  type: "cta",
  text: "Pour former vos équipes sur ce sujet,",     // phrase sans lien
  label: "prenez contact via notre page dédiée",     // texte cliquable
  href: "/contact",                                  // URL interne
}
```

Le composant ajoute automatiquement le `.` final après le lien. Le bloc
`cta` est **réservé au dernier bloc** de l'article. Un seul `cta` par
article.

**Contraintes de rédaction** :

| Champ          | Règle                                                         |
| -------------- | ------------------------------------------------------------- |
| `slug`         | kebab-case, sans accents, descriptif, unique, ≤ 80 caractères |
| `title`        | 6 à 14 mots, sans clickbait, sans emoji                       |
| `excerpt`      | 1 à 2 phrases, 150–220 caractères                             |
| `category`     | Réutilise une catégorie existante si possible                 |
| `publishedAt`  | Date du jour (commande `date -u +%Y-%m-%d`)                   |
| `readingTime`  | 4 à 8 minutes, cohérent avec la longueur                      |
| `content`      | 8 à 15 blocs ; commence par un `p` d'introduction ; alterne `h2`, `p`, `ul`, occasionnellement `h3` et `quote` ; termine par **exactement un** bloc `cta` |

**Ton** : français professionnel, phrases courtes, paragraphes aérés
(60–90 mots max par bloc `p`). Pas de "nous savons que…", pas de
remplissage. Tu écris pour un préventeur qui veut une info actionnable.

**Call-to-action obligatoire en dernier bloc, type `cta`**, formulé
naturellement et **sans citer le nom de la marque**.

Exemples acceptables :

```ts
{
  type: "cta",
  text: "Pour former vos équipes sur ce sujet,",
  label: "prenez contact via notre page dédiée",
  href: "/contact",
}
```

```ts
{
  type: "cta",
  text: "Pour aller plus loin sur la gestion des risques psychosociaux,",
  label: "découvrez notre formation PSSM",
  href: "/formations",
}
```

Exemples **interdits** :

- *"Pour former vos équipes, Alertis Formation vous accompagne…"* ❌ (marque)
- *"… [notre page contact](/contact)."* dans un bloc `p` ❌ (markdown)
- Plus d'un bloc `cta` ❌
- Un `cta` au milieu de l'article ❌

URLs valides à utiliser pour le `href` :

- `/contact` — page contact générique
- `/formations` — liste des formations
- `/formations/sst`, `/formations/prap`, `/formations/incendie`,
  `/formations/habilitation-electrique` — pages formation spécifiques
- `/articles?categorie=veille` — veille réglementaire

Si tu n'es pas sûr qu'une URL existe, **utilise `/contact`** par défaut.

Pas de bouton flashy, pas de majuscules, pas de "RÉSERVEZ MAINTENANT".

---

## Étape 5 — Modifier `src/lib/articles.ts`

1. **Ajouter le slug** à la fin du tableau `articleSlugs` (avant la
   ligne `] as const;`). Respecte le formatage existant.
2. **Ajouter l'objet article** à la fin de la constante `articles`
   (avant la `};` de fermeture du `Record`). Respecte l'indentation
   à 2 espaces, les virgules trailing, les guillemets doubles, les
   apostrophes échappées (`\'`) dans les chaînes contenant `'`.

Utilise les outils `Read` puis `Edit` (avec un `old_string` qui inclut
la ligne `] as const;` ou `};` pour insérer juste avant). **N'écrase
pas le reste du fichier.**

---

## Étape 6 — Vérifier que ça compile

```bash
npx tsc --noEmit
```

Si une erreur apparaît :
- Corrige-la dans `src/lib/articles.ts` (la cause est presque toujours
  un guillemet/apostrophe mal échappé, une virgule manquante, ou un
  type `ArticleBlock` invalide).
- Relance `npx tsc --noEmit` jusqu'à 0 erreur.

Si après 3 tentatives ça ne passe pas : **abandonne le commit**, ne
push rien, écris un résumé dans la sortie pour qu'on puisse débugger.

---

## Étape 7 — Commit & push

```bash
git add src/lib/articles.ts "public/images/articles/${SLUG}.jpg"
git commit -m "Article: <title de l'article>"
git push origin main
```

Vercel détecte le push et redéploie automatiquement. L'article sera
en ligne sur `https://alertisformation.com/<slug>` dans les 2–3 minutes.

---

## Récapitulatif final

À la fin, affiche un court résumé :

- **Sujet choisi** : <titre>
- **Slug** : <slug>
- **Catégorie** : <category>
- **Image Pexels** : photographe + URL source
- **Lignes ajoutées** : ~<N> lignes dans `articles.ts`
- **Commit SHA** : <hash>

Voilà. Bonne rédaction.
