/**
 * Pages locales — une page par ville avec un contenu rédigé à la main,
 * propre au tissu économique local (pas de gabarit dupliqué).
 * Servies à la racine : /formation-securite-<ville>
 */

export type LocationFormationLink = {
  label: string;
  href: string;
  /** Pourquoi cette formation est prioritaire dans cette ville précise. */
  reason: string;
};

export type LocationSector = {
  name: string;
  detail: string;
};

export type Location = {
  slug: string;
  city: string;
  departmentName: string;
  /** Meta description propre à la ville (~155-200 caractères). */
  metaDescription: string;
  /** Paragraphe d'accroche, unique à la ville. */
  intro: string;
  /** Tissu économique local — paragraphes uniques. */
  economy: string[];
  /** Secteurs dominants et besoins de prévention associés. */
  sectors: LocationSector[];
  /** Sélection de formations prioritaires, propre à la ville. */
  priorityFormations: LocationFormationLink[];
  /** Modalités d'intervention — honnête : centre basé à Chassieu. */
  logistics: string;
};

export const lyon: Location = {
  slug: "formation-securite-lyon",
  city: "Lyon",
  departmentName: "Rhône",
  metaDescription:
    "Organisme de formation santé et sécurité au travail intervenant à Lyon et dans le Rhône : SST, incendie, AFGSU, habilitation électrique, gestes et postures. Sessions intra et inter-entreprises.",
  intro:
    "Deuxième pôle économique de France, l'agglomération lyonnaise concentre une diversité d'activités — industrie chimique, santé, logistique, tertiaire — où la prévention des risques professionnels est un enjeu quotidien. Nous formons les équipes des entreprises et établissements lyonnais à la santé et à la sécurité au travail, en intra comme en inter-entreprises.",
  economy: [
    "Lyon et sa métropole rassemblent près de 1,4 million d'habitants et l'un des tissus économiques les plus denses du pays. Au sud de l'agglomération, la Vallée de la chimie — Pierre-Bénite, Saint-Fons, Feyzin, Solaize — regroupe de nombreux sites industriels classés ICPE, dont des installations Seveso : la maîtrise du risque incendie, du risque chimique et des procédures d'évacuation y est une obligation permanente.",
    "Lyon est aussi un grand pôle de santé, structuré autour des Hospices Civils de Lyon, de nombreuses cliniques et d'établissements médico-sociaux. Ces structures génèrent une forte demande de formations AFGSU pour les professionnels de santé et de prévention des troubles musculo-squelettiques liés à la manutention de personnes.",
    "À l'est, autour de l'aéroport et des zones d'activité de Chassieu, Genas et Saint-Priest, la logistique et l'industrie emploient des milliers de salariés exposés aux risques de manutention, de circulation d'engins et d'incendie d'entrepôt. Les quartiers tertiaires comme la Part-Dieu concentrent enfin une population de bureaux pour laquelle les formations SST et incendie en ERP restent incontournables.",
  ],
  sectors: [
    {
      name: "Industrie chimique et sites ICPE",
      detail:
        "La Vallée de la chimie impose des exercices d'évacuation réguliers, des équipiers de première intervention formés et une culture du risque solide.",
    },
    {
      name: "Santé et médico-social",
      detail:
        "Hôpitaux, cliniques et EHPAD : besoins en AFGSU pour les professionnels de santé et en PRAP 2S pour la manutention de personnes.",
    },
    {
      name: "Logistique et entrepôts",
      detail:
        "Zones d'activité de l'est lyonnais : prévention des TMS, gestes et postures, sécurité incendie des entrepôts.",
    },
    {
      name: "Tertiaire et ERP",
      detail:
        "Bureaux de la Part-Dieu et commerces : SST, équipiers d'évacuation, guides-files et serres-files.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason:
        "Indispensables pour les sites industriels et les ERP nombreux dans l'agglomération.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason:
        "Pour les professionnels de santé des nombreux établissements lyonnais.",
    },
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "La base de la prévention pour tout employeur, du bureau à l'atelier.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason:
        "Pour la logistique de l'est lyonnais et la manutention en milieu de soins.",
    },
  ],
  logistics:
    "Notre centre est implanté à Chassieu, au cœur de l'est lyonnais : nos formateurs interviennent dans toute la métropole de Lyon, en intra-entreprise (dans vos locaux, avec votre matériel) comme en sessions inter-entreprises. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const villeurbanne: Location = {
  slug: "formation-securite-villeurbanne",
  city: "Villeurbanne",
  departmentName: "Rhône",
  metaDescription:
    "Formations santé et sécurité au travail à Villeurbanne : SST, sécurité incendie, AFGSU, gestes et postures, habilitation électrique. Sessions intra et inter-entreprises pour PME, ERP et médico-social.",
  intro:
    "Limitrophe de Lyon, Villeurbanne est l'une des communes les plus peuplées de France sans être préfecture. Son tissu mêle PME, établissements d'enseignement et de recherche, structures médico-sociales et commerces — autant d'employeurs soumis aux obligations de formation à la sécurité. Nous accompagnons les organisations villeurbannaises dans la prévention des risques professionnels.",
  economy: [
    "Avec plus de 150 000 habitants, Villeurbanne forme avec Lyon une continuité urbaine dense. La commune accueille le campus de la Doua, l'un des plus grands campus scientifiques de France, ainsi qu'un réseau important d'établissements d'enseignement. Ces sites, classés ERP, sont soumis à des obligations strictes d'évacuation et de formation des personnels.",
    "Le tissu économique villeurbannais repose largement sur des PME et des activités de services, de commerce et d'artisanat, notamment autour du quartier des Gratte-Ciel. Pour ces structures de taille intermédiaire, former un nombre suffisant de Sauveteurs Secouristes du Travail et organiser la formation incendie constituent les premières briques de la conformité.",
    "Villeurbanne compte également de nombreuses structures médico-sociales et de santé de proximité, pour lesquelles l'AFGSU et la prévention des troubles musculo-squelettiques liés à la manutention de personnes répondent à des besoins concrets.",
  ],
  sectors: [
    {
      name: "Enseignement et recherche",
      detail:
        "Campus de la Doua et établissements scolaires : exercices d'évacuation, formation des personnels, équipiers ERP.",
    },
    {
      name: "PME, commerce et artisanat",
      detail:
        "Structures de taille intermédiaire : SST, sécurité incendie et premiers équipiers d'intervention.",
    },
    {
      name: "Médico-social et santé de proximité",
      detail:
        "AFGSU et PRAP 2S pour les personnels au contact des patients et des résidents.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première obligation de prévention pour les PME villeurbannaises.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason:
        "Évacuation et équipiers pour les ERP, l'enseignement et le commerce.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les structures médico-sociales et de santé de la commune.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason:
        "Prévention des TMS dans le commerce, la logistique et le soin.",
    },
  ],
  logistics:
    "Villeurbanne jouxte notre zone d'implantation de l'est lyonnais : nos formateurs y interviennent rapidement, en intra-entreprise comme en inter-entreprises, avec l'ensemble du matériel pédagogique — bac à feu, mannequins, défibrillateur de formation, platines électriques.",
};

export const grenoble: Location = {
  slug: "formation-securite-grenoble",
  city: "Grenoble",
  departmentName: "Isère",
  metaDescription:
    "Formations santé et sécurité au travail à Grenoble et en Isère : SST, habilitation électrique, incendie, AFGSU, gestes et postures. Adaptées à l'industrie de pointe, à la recherche et au BTP.",
  intro:
    "Capitale française de la microélectronique et des hautes technologies, Grenoble réunit un écosystème industriel et scientifique de premier plan. Cet environnement de pointe, exigeant en matière de sécurité, appelle des formations rigoureuses — de l'habilitation électrique au secourisme. Nous formons les équipes grenobloises à la prévention des risques professionnels.",
  economy: [
    "Grenoble est mondialement connue pour son pôle microélectronique et technologique : CEA, STMicroelectronics, synchrotron européen, campus d'innovation Minatec. Ces sites industriels et de recherche emploient de nombreux techniciens et exécutants intervenant sur des installations électriques complexes, ce qui fait de l'habilitation électrique et de son recyclage un enjeu majeur du bassin grenoblois.",
    "Au-delà de la haute technologie, l'agglomération conserve une industrie diversifiée et un secteur du BTP dynamique, porté par le développement urbain de la métropole. Ces activités exposent les salariés à des risques mécaniques, de chute et d'incendie qui justifient des formations SST, incendie et travail en hauteur.",
    "Enserrée entre trois massifs montagneux, Grenoble accueille aussi de nombreux laboratoires et établissements de santé pour lesquels les gestes d'urgence et la prévention des troubles musculo-squelettiques sont des besoins récurrents.",
  ],
  sectors: [
    {
      name: "Industrie de pointe et recherche",
      detail:
        "Microélectronique et laboratoires : habilitation électrique, recyclage et SST en milieu technique.",
    },
    {
      name: "BTP et aménagement urbain",
      detail:
        "Chantiers de la métropole : SST de chantier, sécurité incendie, prévention des chutes.",
    },
    {
      name: "Santé et laboratoires",
      detail:
        "AFGSU et gestes de premiers secours pour les personnels scientifiques et soignants.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason:
        "Incontournables pour l'industrie microélectronique et les laboratoires grenoblois.",
    },
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason:
        "Obligatoires sur les chantiers et recommandées dans tout site industriel.",
    },
    {
      label: "Recyclage habilitation électrique",
      href: "/recyclage-habilitation-electrique-frequence-obligation",
      reason:
        "Le recyclage triennal est un point de vigilance permanent en milieu industriel.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites industriels, les laboratoires et les ERP.",
    },
  ],
  logistics:
    "Grenoble se situe à environ une heure de notre centre de l'est lyonnais. Nos formateurs s'y déplacent pour des sessions en intra-entreprise — sur votre site et avec vos équipements — ou en inter-entreprises. Un audit préalable permet d'adapter les scénarios à votre activité.",
};

export const saintEtienne: Location = {
  slug: "formation-securite-saint-etienne",
  city: "Saint-Étienne",
  departmentName: "Loire",
  metaDescription:
    "Formations santé et sécurité au travail à Saint-Étienne et dans la Loire : SST, incendie, gestes et postures, PRAP, AFGSU. Adaptées à l'industrie, au BTP et au secteur médico-social.",
  intro:
    "Ancrée dans une longue tradition industrielle et manufacturière, Saint-Étienne conjugue aujourd'hui PME industrielles, BTP, design et secteur médico-social. Ce tissu d'employeurs partage un même besoin : former les salariés à la prévention des risques. Nous accompagnons les organisations stéphanoises sur l'ensemble du champ santé et sécurité au travail.",
  economy: [
    "Saint-Étienne s'est construite sur l'industrie — métallurgie, manufacture, mécanique — et conserve un tissu dense de PME industrielles. Ces ateliers exposent les salariés aux risques de manutention, de manipulation et d'incendie : les formations SST, manipulation d'extincteurs et équipiers de première intervention y répondent directement.",
    "La ville est aujourd'hui reconnue pour son design et poursuit un important renouvellement urbain, soutenu par un secteur du BTP actif. Les chantiers et les activités du bâtiment appellent des formations au secourisme et à la prévention des chutes.",
    "Le bassin stéphanois compte enfin un secteur médico-social développé — EHPAD, structures d'accueil, aide à domicile — pour lequel la formation PRAP 2S, dédiée à la manutention des personnes, et l'AFGSU constituent des priorités.",
  ],
  sectors: [
    {
      name: "Industrie manufacturière et PME",
      detail:
        "Ateliers de mécanique et de métallurgie : SST, manipulation d'extincteurs, équipiers d'intervention.",
    },
    {
      name: "BTP et renouvellement urbain",
      detail:
        "Chantiers stéphanois : secourisme, prévention des chutes, sécurité incendie.",
    },
    {
      name: "Médico-social et aide à la personne",
      detail:
        "EHPAD et aide à domicile : PRAP 2S pour la manutention des personnes, AFGSU.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason:
        "Manipulation d'extincteurs et équipiers d'intervention pour les ateliers industriels.",
    },
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour l'industrie comme pour le BTP.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason:
        "PRAP 2S pour le médico-social, gestes et postures pour l'industrie.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les nombreux établissements médico-sociaux du bassin.",
    },
  ],
  logistics:
    "Saint-Étienne est à environ trois quarts d'heure de notre centre de l'est lyonnais. Nos formateurs interviennent sur l'ensemble du bassin stéphanois, en intra-entreprise dans vos locaux comme en sessions inter-entreprises, avec tout le matériel pédagogique nécessaire.",
};

/** Toutes les villes — pour le sitemap et le maillage interne. */
export const locations: Location[] = [
  lyon,
  villeurbanne,
  grenoble,
  saintEtienne,
];
