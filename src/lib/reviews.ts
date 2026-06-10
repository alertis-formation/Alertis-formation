/**
 * Avis clients réels, copiés depuis la fiche Google Business d'Alertis
 * (Chassieu). Affichés tels quels sur la home et `/avis` afin que la note
 * agrégée du schéma `LocalBusiness` corresponde à des avis VISIBLES sur la
 * page — exigence de la politique Google sur les extraits d'avis.
 *
 * Échantillon volontairement réduit (la note globale reste portée par
 * `aggregateRating` via `siteConfig.rating` / le scrape Google). Mettre à jour
 * manuellement : pas d'accès à l'API Google Places.
 */
export type CustomerReview = {
  /** Nom de l'auteur tel qu'affiché sur Google. */
  author: string;
  /** Note sur 5 (tous nos avis sélectionnés sont à 5). */
  rating: number;
  /** Date ISO approximative (jour de publication Google). */
  date: string;
  /** Texte de l'avis, verbatim. */
  body: string;
  /** Domaine de formation concerné — sert d'étiquette éditoriale. */
  topic?: string;
};

export const reviews: CustomerReview[] = [
  {
    author: "Mamadou Balde",
    rating: 5,
    date: "2026-06-05",
    body: "Formation suivie avec Hugo ce jour. C'est la meilleure formation que j'ai suivie, le formateur est trop fort. Je recommande !",
    topic: "Sécurité incendie",
  },
  {
    author: "clara guida",
    rating: 5,
    date: "2026-05-27",
    body: "Formation top, bien expliquée et avec des mises en situation en réalité virtuelle et en réel. Très bon formateur !",
    topic: "Sécurité incendie",
  },
  {
    author: "karima b",
    rating: 5,
    date: "2025-10-15",
    body: "Très bonne formation SST avec une super formatrice, Rose Rivoirard. Très ludique, très bien expliqué et avec une partie pratique très présente. Je recommande vivement.",
    topic: "SST",
  },
  {
    author: "Léa Peslerbe",
    rating: 5,
    date: "2025-10-13",
    body: "J'ai passé la formation AFGSU 2 avec l'intervenant Mickael Gérard. Il a su donner du sens à la théorie et animer dynamiquement les journées. Je recommande !",
    topic: "AFGSU 2",
  },
  {
    author: "Remi Ribeiro",
    rating: 5,
    date: "2025-09-10",
    body: "Merci à Damien pour la formation, une personne à l'écoute qui prend le temps d'expliquer correctement. Je n'aurai plus peur d'agir grâce à cette formation. Je recommande !",
    topic: "Secourisme",
  },
  {
    author: "Myriam Cheytion",
    rating: 5,
    date: "2026-06-05",
    body: "Formation au top. Mises en pratique et explications très bien pensées. Merci Hugo !",
    topic: "Sécurité incendie",
  },
  {
    author: "Omar Kharriche",
    rating: 5,
    date: "2026-03-10",
    body: "Formation sur la manipulation des extincteurs très informative, avec de nombreuses manipulations et des cas concrets.",
    topic: "Manipulation extincteurs",
  },
  {
    author: "Charline Descotes",
    rating: 5,
    date: "2026-05-27",
    body: "Formation très intéressante et dans une bonne ambiance. Formateur de qualité. Je recommande !",
    topic: "Sécurité incendie",
  },
  {
    author: "Mélanie",
    rating: 5,
    date: "2025-09-17",
    body: "Formation de très grande qualité. L'équipe administrative est très réactive et sympathique.",
    topic: "AFGSU",
  },
  {
    author: "Amandine Dangiel",
    rating: 5,
    date: "2026-05-28",
    body: "Très pédagogique, locaux agréables, bien situé avec parking. Une expérience que je recommande.",
    topic: "Secourisme",
  },
  {
    author: "Picat Vincent",
    rating: 5,
    date: "2026-06-05",
    body: "Formation incendie intéressante. Hugo a rendu cette séance très participative et enrichissante.",
    topic: "Sécurité incendie",
  },
  {
    author: "Antonisa P.",
    rating: 5,
    date: "2026-03-31",
    body: "Formation très utile, les équipes Alertis sont très passionnées. Je recommande. Merci !",
    topic: "Secourisme",
  },
];
