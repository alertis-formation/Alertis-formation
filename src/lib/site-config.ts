export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const siteConfig = {
  name: "Alertis",
  fullName: "Alertis Formation",
  tagline: "Formation / Prévention des risques professionnels",
  description:
    "Centre de formation spécialisé en santé et sécurité au travail. Formateurs experts issus du terrain, présents sur tout le territoire français.",
  url: "https://alertisformation.com",
  contact: {
    email: "contact@alertisformation.com",
    phone: "04 78 90 46 30",
    phoneE164: "+33478904630",
    address: {
      street: "20 Avenue des Frères Montgolfier",
      postalCode: "69680",
      city: "Chassieu",
      country: "France",
      latitude: 45.7257863,
      longitude: 4.9679915,
      mapsUrl:
        "https://www.google.com/maps/place/Centre+de+formation+ALERTIS+CHASSIEU/@45.7258563,4.9679658,20.86z/data=!3m1!5s0x47f4c6a3f7016c5d:0xfee93edb698a7765!4m15!1m8!3m7!1s0x47f4c6a3f67d07b5:0x62b8525a90ce80ad!2s20+Av.+des+Fr%C3%A8res+Montgolfier,+69680+Chassieu!3b1!8m2!3d45.7258174!4d4.9680993!16s%2Fg%2F11b8v5j2q9!3m5!1s0x47f4c6c57eef0d35:0x825e9f31883bd96c!8m2!3d45.7257863!4d4.9679915!16s%2Fg%2F1tdd95r3",
    },
    hours: [
      { days: "Lundi — Vendredi", value: "8h30 — 17h30" },
      { days: "Samedi — Dimanche", value: "Fermé" },
    ],
  },
  legal: {
    siret: "93951657100014",
    siren: "939516571",
    vat: "FR64939516571",
    nda: "84 69 24105 69",
    ndaRegion: "Auvergne-Rhône-Alpes",
  },
  social: {
    instagram: "https://www.instagram.com/alertis_formation",
    tiktok: "https://www.tiktok.com/@alertisformation",
    youtube: "https://www.youtube.com/@alertis69",
  },
  googleReviewUrl: "https://g.page/r/CWzZO4gxn16CEAI/review",
  rating: {
    /** Google Business Profile aggregate rating. Update when refreshed. */
    value: 4.9,
    count: 594,
  },
} as const;

/**
 * Embed du formulaire de devis Alertis (back-office partagé entre tous les sites du groupe).
 * Cf. https://alertis-back-office.onrender.com/embed/form
 */
export const devisFormUrl = "https://alertis-back-office.onrender.com/embed/form";

/**
 * URL slugs are kept identical to the WordPress site to preserve SEO.
 * Category pages live at the root (e.g. /formations-securite-incendie/),
 * not under /formations/.
 */
export const formationCategories: NavItem[] = [
  {
    label: "Sécurité incendie",
    href: "/formations-securite-incendie",
    description:
      "EPI, guide-file, serre-file, manipulation d'extincteurs, évacuation",
  },
  {
    label: "Secourisme",
    href: "/formations-secourisme",
    description: "SST, MAC SST, PSC, défibrillateur, gestes qui sauvent",
  },
  {
    label: "Habilitation électrique",
    href: "/formations-habilitation-electrique",
    description: "B0, BS, BE, H0, BR, BC, BF, HF, BP photovoltaïque — initial et recyclage",
  },
  {
    label: "Ergonomie",
    href: "/formations-ergonomie",
    description: "Gestes et postures, PRAP, prévention TMS",
  },
  {
    label: "Prévention",
    href: "/formations-prevention",
    description: "CSE, document unique, risques psychosociaux, RPS",
  },
  {
    label: "Safety Day",
    href: "/formations-safety-day",
    description: "Journée sécurité sur-mesure dans vos locaux",
  },
];

/**
 * Articles live at the root of the site (WordPress permalink structure /%postname%/),
 * not under /articles/. The /articles/ path is reserved for the index page.
 * The list of slugs is exported from `@/lib/articles` to keep client bundles
 * importing site-config free of article content.
 */

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  {
    label: "Formations",
    href: "/formations",
    children: [
      ...formationCategories,
      {
        label: "AFGSU",
        href: "/nos-formations-afgsu",
        description: "Gestes et soins d'urgence pour professionnels de santé",
      },
    ],
  },
  { label: "Dossier", href: "/dossier" },
  { label: "Actualités", href: "/articles" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Découvrir",
    items: [
      { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
      { label: "Dossier", href: "/dossier" },
      { label: "Actualités", href: "/articles" },
      { label: "FAQ", href: "/faq" },
      { label: "Veille réglementaire", href: "/veille-reglementaire" },
      { label: "Indicateurs de résultats", href: "/indicateurs-de-resultats" },
      { label: "Accessibilité et handicap", href: "/accessibilite-handicap" },
      { label: "Réclamations", href: "/reclamations" },
    ],
  },
  {
    title: "Formations",
    items: [
      ...formationCategories.map((c) => ({ label: c.label, href: c.href })),
      { label: "AFGSU", href: "/nos-formations-afgsu" },
    ],
  },
];
