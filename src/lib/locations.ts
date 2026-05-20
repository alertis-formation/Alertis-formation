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
  /** Codes département pour récupérer les sessions live (ex. ["31"]). */
  departments: string[];
  /** Image d'illustration (vue de la ville), sous public/images/locations/. */
  image?: string;
  /** Crédit photo, si la licence l'exige (Wikimedia Commons). */
  imageCredit?: string;
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
  departments: ["69"],
  image: "/images/locations/formation-securite-lyon.jpg",
  metaDescription:
    "Organisme de formation santé et sécurité au travail intervenant à Lyon et dans le Rhône : SST, incendie, AFGSU, habilitation électrique, gestes et postures. Sessions intra et inter-entreprises.",
  intro:
    "Deuxième pôle économique de France, l'agglomération lyonnaise concentre une diversité d'activités — industrie chimique, santé, logistique, tertiaire — où la prévention des risques professionnels est un enjeu quotidien. Nous formons les équipes des entreprises et établissements lyonnais à la santé et à la sécurité au travail, en intra comme en inter-entreprises.",
  economy: [
    "Lyon et sa métropole rassemblent près de 1,4 million d'habitants et l'un des tissus économiques les plus denses du pays. Au sud de l'agglomération, la Vallée de la chimie — Pierre-Bénite, Saint-Fons, Feyzin, Solaize — regroupe de nombreux sites industriels classés ICPE, dont des installations Seveso : la maîtrise du risque incendie, du risque chimique et des procédures d'évacuation y est une obligation permanente.",
    "Lyon est aussi un grand pôle de santé, structuré autour des Hospices Civils de Lyon, de nombreuses cliniques et d'établissements médico-sociaux. Ces structures génèrent une forte demande de formations AFGSU pour les professionnels de santé et de prévention des troubles musculo-squelettiques liés à la manutention de personnes.",
    "À l'est, autour de l'aéroport et des zones d'activité de Chassieu, Genas et Saint-Priest, la logistique et l'industrie emploient des milliers de salariés exposés aux risques de manutention, de circulation d'engins et d'incendie d'entrepôt. Les quartiers tertiaires comme la Part-Dieu concentrent une population de bureaux pour laquelle les formations SST et incendie en ERP restent incontournables.",
    "Le dynamisme de la métropole entretient enfin un secteur du bâtiment et des travaux publics soutenu et un dense maillage de TPE et de PME. Souvent dépourvues de service prévention dédié, ces structures ont besoin d'un accompagnement concret pour identifier leurs obligations et former le bon nombre de salariés.",
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
  departments: ["69"],
  image: "/images/locations/formation-securite-villeurbanne.jpg",
  imageCredit: "Photo : a.s.serov / Wikimedia Commons (CC BY-SA 4.0)",
  metaDescription:
    "Formations santé et sécurité au travail à Villeurbanne : SST, sécurité incendie, AFGSU, gestes et postures, habilitation électrique. Sessions intra et inter-entreprises pour PME, ERP et médico-social.",
  intro:
    "Limitrophe de Lyon, Villeurbanne est l'une des communes les plus peuplées de France sans être préfecture. Son tissu mêle PME, établissements d'enseignement et de recherche, structures médico-sociales et commerces — autant d'employeurs soumis aux obligations de formation à la sécurité. Nous accompagnons les organisations villeurbannaises dans la prévention des risques professionnels.",
  economy: [
    "Avec plus de 150 000 habitants, Villeurbanne forme avec Lyon une continuité urbaine dense. La commune accueille le campus de la Doua, l'un des plus grands campus scientifiques de France, ainsi qu'un réseau important d'établissements d'enseignement. Ces sites, classés ERP, sont soumis à des obligations strictes d'évacuation et de formation des personnels.",
    "Le tissu économique villeurbannais repose largement sur des PME et des activités de services, de commerce et d'artisanat, notamment autour du quartier des Gratte-Ciel. Pour ces structures de taille intermédiaire, former un nombre suffisant de Sauveteurs Secouristes du Travail et organiser la formation incendie constituent les premières briques de la conformité.",
    "Villeurbanne compte également de nombreuses structures médico-sociales et de santé de proximité, pour lesquelles l'AFGSU et la prévention des troubles musculo-squelettiques liés à la manutention de personnes répondent à des besoins concrets.",
    "La commune accueille par ailleurs de nombreux équipements culturels et sportifs recevant du public. La sécurité de ces établissements — affichage des consignes, exercices d'évacuation, personnels formés à guider le public — relève d'obligations précises que nous aidons à mettre en œuvre.",
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
  departments: ["38"],
  image: "/images/locations/formation-securite-grenoble.jpg",
  metaDescription:
    "Formations santé et sécurité au travail à Grenoble et en Isère : SST, habilitation électrique, incendie, AFGSU, gestes et postures. Adaptées à l'industrie de pointe, à la recherche et au BTP.",
  intro:
    "Capitale française de la microélectronique et des hautes technologies, Grenoble réunit un écosystème industriel et scientifique de premier plan. Cet environnement de pointe, exigeant en matière de sécurité, appelle des formations rigoureuses — de l'habilitation électrique au secourisme. Nous formons les équipes grenobloises à la prévention des risques professionnels.",
  economy: [
    "Grenoble est mondialement connue pour son pôle microélectronique et technologique : CEA, STMicroelectronics, synchrotron européen, campus d'innovation Minatec. Ces sites industriels et de recherche emploient de nombreux techniciens et exécutants intervenant sur des installations électriques complexes, ce qui fait de l'habilitation électrique et de son recyclage un enjeu majeur du bassin grenoblois.",
    "Au-delà de la haute technologie, l'agglomération conserve une industrie diversifiée et un secteur du BTP dynamique, porté par le développement urbain de la métropole. Ces activités exposent les salariés à des risques mécaniques, de chute et d'incendie qui justifient des formations SST, incendie et travail en hauteur.",
    "Enserrée entre trois massifs montagneux, Grenoble accueille aussi de nombreux laboratoires et établissements de santé pour lesquels les gestes d'urgence et la prévention des troubles musculo-squelettiques sont des besoins récurrents.",
    "Au sud de l'agglomération, la plateforme chimique de Pont-de-Claix et de Jarrie regroupe des sites industriels classés. Le risque chimique, la maîtrise des procédures d'évacuation et la présence d'équipiers d'intervention formés y constituent une exigence permanente.",
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
  departments: ["42"],
  image: "/images/locations/formation-securite-saint-etienne.jpg",
  imageCredit: "Photo : Hélène Rival / Wikimedia Commons (CC BY-SA 4.0)",
  metaDescription:
    "Formations santé et sécurité au travail à Saint-Étienne et dans la Loire : SST, incendie, gestes et postures, PRAP, AFGSU. Adaptées à l'industrie, au BTP et au secteur médico-social.",
  intro:
    "Ancrée dans une longue tradition industrielle et manufacturière, Saint-Étienne conjugue aujourd'hui PME industrielles, BTP, design et secteur médico-social. Ce tissu d'employeurs partage un même besoin : former les salariés à la prévention des risques. Nous accompagnons les organisations stéphanoises sur l'ensemble du champ santé et sécurité au travail.",
  economy: [
    "Saint-Étienne s'est construite sur l'industrie — métallurgie, manufacture, mécanique — et conserve un tissu dense de PME industrielles. Ces ateliers exposent les salariés aux risques de manutention, de manipulation et d'incendie : les formations SST, manipulation d'extincteurs et équipiers de première intervention y répondent directement.",
    "La ville est aujourd'hui reconnue pour son design et poursuit un important renouvellement urbain, soutenu par un secteur du BTP actif. Les chantiers et les activités du bâtiment appellent des formations au secourisme et à la prévention des chutes.",
    "Le bassin stéphanois compte un secteur médico-social développé — EHPAD, structures d'accueil, aide à domicile — pour lequel la formation PRAP 2S, dédiée à la manutention des personnes, et l'AFGSU constituent des priorités.",
    "La ville accueille enfin une université, des établissements d'enseignement et un secteur du commerce et des services développé. Ces lieux recevant du public imposent une organisation rigoureuse de l'évacuation et la formation de personnels capables de réagir face à un départ de feu.",
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

export const clermontFerrand: Location = {
  slug: "formation-securite-clermont-ferrand",
  city: "Clermont-Ferrand",
  departmentName: "Puy-de-Dôme",
  departments: ["63"],
  image: "/images/locations/formation-securite-clermont-ferrand.jpg",
  imageCredit: "Photo : Aavitus / Wikimedia Commons (CC BY-SA 4.0)",
  metaDescription:
    "Formations santé et sécurité au travail à Clermont-Ferrand et dans le Puy-de-Dôme : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Adaptées à l'industrie, à la santé et à l'agroalimentaire.",
  intro:
    "Capitale de l'Auvergne, Clermont-Ferrand s'appuie sur une industrie puissante, un grand pôle hospitalier et universitaire et un bassin agroalimentaire de premier plan. Ce tissu d'employeurs partage le même besoin de prévention des risques professionnels. Nous formons les équipes clermontoises à la santé et à la sécurité au travail.",
  economy: [
    "Clermont-Ferrand est une ville industrielle de tradition, marquée par la présence historique de l'industrie du pneumatique et de la mécanique, qui emploie des milliers de salariés sur des sites de production exigeants. Ces environnements imposent une culture forte de la sécurité : manipulation, incendie, habilitation électrique, premiers secours.",
    "L'agglomération est aussi un grand pôle de santé et de recherche, structuré autour du CHU de Clermont-Ferrand et de l'université. Hôpitaux, cliniques et établissements médico-sociaux y génèrent une demande soutenue de formations AFGSU et de prévention des troubles musculo-squelettiques liés à la manutention de personnes.",
    "Le Puy-de-Dôme et la plaine de la Limagne forment l'un des grands bassins agroalimentaires français. Les industries de transformation, les coopératives et les sites logistiques associés exposent les salariés aux risques de manutention, de machines et d'incendie d'entrepôt.",
    "Autour de ces grands employeurs gravite un dense réseau de PME industrielles, du bâtiment et de services. Souvent sans service prévention dédié, elles ont besoin d'un accompagnement concret pour identifier leurs obligations et former le bon nombre de salariés — SST, incendie, gestes et postures.",
  ],
  sectors: [
    {
      name: "Industrie et mécanique",
      detail:
        "Sites de production exigeants : SST, manipulation d'extincteurs, habilitation électrique, équipiers d'intervention.",
    },
    {
      name: "Santé et médico-social",
      detail:
        "CHU, cliniques et EHPAD : AFGSU pour les professionnels de santé, PRAP 2S pour la manutention de personnes.",
    },
    {
      name: "Agroalimentaire et logistique",
      detail:
        "Sites de transformation et entrepôts de la Limagne : gestes et postures, sécurité incendie, prévention des TMS.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour l'industrie comme pour les services.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites industriels, agroalimentaires et les ERP.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason:
        "Pour les professionnels de santé du pôle hospitalier clermontois.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason:
        "Prévention des TMS dans l'industrie, l'agroalimentaire et le soin.",
    },
  ],
  logistics:
    "Clermont-Ferrand se situe à environ deux heures de notre centre de l'est lyonnais. Nos formateurs s'y déplacent pour des sessions en intra-entreprise — sur votre site, avec vos équipements — comme pour des sessions inter-entreprises. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const annecy: Location = {
  slug: "formation-securite-annecy",
  city: "Annecy",
  departmentName: "Haute-Savoie",
  departments: ["74"],
  image: "/images/locations/formation-securite-annecy.jpg",
  metaDescription:
    "Formations santé et sécurité au travail à Annecy et en Haute-Savoie : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Adaptées à l'industrie de précision, au tertiaire et au tourisme.",
  intro:
    "Au bord de son lac, Annecy conjugue une industrie de précision réputée, un secteur tertiaire dynamique et une forte activité touristique. Derrière cette diversité, les mêmes obligations de prévention des risques s'imposent à chaque employeur. Nous formons les équipes annéciennes à la santé et à la sécurité au travail.",
  economy: [
    "La région d'Annecy est un haut lieu de la mécanique et de l'industrie de précision. Le bassin annécien et la proximité de la vallée de l'Arve — capitale mondiale du décolletage — concentrent un savoir-faire industriel de pointe, sur des sites où la sécurité des opérateurs et la maîtrise du risque machine sont déterminantes.",
    "Annecy accueille aussi un tissu tertiaire et de services en forte croissance, des sièges d'entreprises et des activités technologiques. Bureaux et établissements recevant du public y rendent incontournables les formations SST et incendie, notamment l'évacuation et les équipiers de première intervention.",
    "Le tourisme constitue le troisième pilier de l'économie locale : hôtellerie, restauration, loisirs et commerces emploient une main-d'œuvre nombreuse, souvent saisonnière. Ces métiers, exposés aux risques de manutention, de coupure, de brûlure et de chute, justifient des formations aux gestes et postures et au secourisme.",
    "La Haute-Savoie compte enfin de nombreux établissements de santé et médico-sociaux. Hôpitaux, cliniques, EHPAD et structures d'accueil y ont besoin de formations AFGSU et de prévention des troubles musculo-squelettiques adaptées à la manutention de personnes.",
  ],
  sectors: [
    {
      name: "Industrie de précision et mécanique",
      detail:
        "Décolletage et usinage : SST, prévention du risque machine, habilitation électrique.",
    },
    {
      name: "Tourisme, hôtellerie et commerce",
      detail:
        "Personnels saisonniers : gestes et postures, secourisme, sécurité incendie des ERP.",
    },
    {
      name: "Tertiaire et santé",
      detail:
        "Bureaux et établissements de soins : SST, évacuation, AFGSU pour les professionnels de santé.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première brique de prévention, du site industriel au commerce.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason:
        "Pour l'hôtellerie-restauration, l'industrie et la manutention en milieu de soins.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP touristiques et tertiaires.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé de Haute-Savoie.",
    },
  ],
  logistics:
    "Annecy se situe à un peu plus d'une heure de notre centre de l'est lyonnais. Nos formateurs interviennent sur tout le bassin annécien, en intra-entreprise dans vos locaux comme en sessions inter-entreprises, avec l'ensemble du matériel pédagogique. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const valence: Location = {
  slug: "formation-securite-valence",
  city: "Valence",
  departmentName: "Drôme",
  departments: ["26"],
  image: "/images/locations/formation-securite-valence.jpg",
  imageCredit: "Photo : Marianne Casamance / Wikimedia Commons (CC BY-SA 4.0)",
  metaDescription:
    "Formations santé et sécurité au travail à Valence et dans la Drôme : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Adaptées à la logistique, à l'agroalimentaire et à l'industrie.",
  intro:
    "Au cœur du couloir rhodanien, Valence est un carrefour majeur de la logistique et des transports, doublé d'un solide bassin agroalimentaire et industriel. Ces activités placent la prévention des risques au premier plan. Nous formons les équipes valentinoises à la santé et à la sécurité au travail.",
  economy: [
    "La position de Valence, sur l'axe rhodanien entre Lyon et la Méditerranée, en fait un pôle logistique de premier plan. Entrepôts, plateformes de distribution et transport routier y emploient une main-d'œuvre nombreuse, exposée aux risques de manutention, de circulation d'engins et d'incendie d'entrepôt.",
    "La Drôme est un grand département agroalimentaire. Autour de Valence, les industries de transformation, les coopératives et les sites de production agroalimentaire imposent des formations à l'hygiène, au secourisme et à la sécurité incendie adaptées à leurs ateliers.",
    "Le bassin valentinois conserve une industrie diversifiée — mécanique, énergie, sous-traitance — sur des sites où l'habilitation électrique, la manipulation d'extincteurs et les premiers secours font partie des obligations courantes de l'employeur.",
    "Valence est enfin un pôle de services et de santé pour le centre-Drôme. Établissements de soins, EHPAD et structures médico-sociales y génèrent des besoins réguliers en formations AFGSU et en prévention des troubles musculo-squelettiques.",
  ],
  sectors: [
    {
      name: "Logistique et transport",
      detail:
        "Entrepôts et plateformes du couloir rhodanien : gestes et postures, prévention des TMS, sécurité incendie.",
    },
    {
      name: "Agroalimentaire",
      detail:
        "Sites de transformation : hygiène, secourisme, équipiers de première intervention.",
    },
    {
      name: "Industrie et services",
      detail:
        "Sites de production et de sous-traitance : SST, habilitation électrique, manipulation d'extincteurs.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason:
        "Sécurité des entrepôts logistiques et des sites agroalimentaires.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans la logistique et la manutention.",
    },
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour tous les employeurs valentinois.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé du centre-Drôme.",
    },
  ],
  logistics:
    "Valence se situe à un peu plus d'une heure de notre centre de l'est lyonnais, sur l'axe rhodanien. Nos formateurs y interviennent en intra-entreprise comme en inter-entreprises, avec tout le matériel pédagogique nécessaire. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const chambery: Location = {
  slug: "formation-securite-chambery",
  city: "Chambéry",
  departmentName: "Savoie",
  departments: ["73"],
  image: "/images/locations/formation-securite-chambery.jpg",
  imageCredit: "Photo : Florian Pépellin / Wikimedia Commons (CC BY-SA 3.0)",
  metaDescription:
    "Formations santé et sécurité au travail à Chambéry et en Savoie : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Adaptées au tertiaire, à l'industrie et à l'économie de la montagne.",
  intro:
    "Préfecture de la Savoie, Chambéry associe un secteur tertiaire développé, des pôles technologiques et industriels et une économie tournée vers la montagne. Cette diversité d'activités appelle une prévention des risques rigoureuse. Nous formons les équipes chambériennes à la santé et à la sécurité au travail.",
  economy: [
    "Chambéry est un pôle administratif et tertiaire majeur des Alpes du Nord. Administrations, sièges, bureaux et commerces y concentrent une population active pour laquelle les formations SST et incendie — évacuation, équipiers, guides-files et serres-files — sont des obligations de base.",
    "L'agglomération accueille des pôles technologiques et de recherche, notamment autour du lac du Bourget, ainsi qu'une industrie diversifiée. Ces sites techniques rendent l'habilitation électrique, son recyclage et le secourisme en milieu industriel particulièrement importants.",
    "Porte des massifs savoyards, Chambéry vit aussi au rythme de l'économie de la montagne et du tourisme : hôtellerie, restauration, loisirs et commerces emploient une main-d'œuvre nombreuse, exposée aux risques de manutention et de chute, qui justifie des formations aux gestes et postures et au secourisme.",
    "La Savoie compte enfin de nombreux établissements de santé et médico-sociaux. Hôpitaux, cliniques et EHPAD du bassin chambérien ont des besoins réguliers en formations AFGSU et en prévention des troubles musculo-squelettiques liés à la manutention de personnes.",
  ],
  sectors: [
    {
      name: "Tertiaire et administrations",
      detail:
        "Bureaux et ERP : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Industrie et technologies",
      detail:
        "Sites techniques et de recherche : habilitation électrique, recyclage, SST industriel.",
    },
    {
      name: "Tourisme et santé",
      detail:
        "Hôtellerie et établissements de soins : gestes et postures, secourisme, AFGSU.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première obligation de prévention pour le tertiaire et l'industrie.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP et les sites industriels.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason:
        "Pour les sites techniques et industriels du bassin chambérien.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé de Savoie.",
    },
  ],
  logistics:
    "Chambéry se situe à environ une heure et demie de notre centre de l'est lyonnais. Nos formateurs s'y déplacent pour des sessions en intra-entreprise — sur votre site, avec vos équipements — comme pour des sessions inter-entreprises. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const bourgEnBresse: Location = {
  slug: "formation-securite-bourg-en-bresse",
  city: "Bourg-en-Bresse",
  departmentName: "Ain",
  departments: ["01"],
  image: "/images/locations/formation-securite-bourg-en-bresse.jpg",
  imageCredit: "Photo : Chabe01 / Wikimedia Commons (CC BY-SA 3.0)",
  metaDescription:
    "Formations santé et sécurité au travail à Bourg-en-Bresse et dans l'Ain : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Adaptées à l'agroalimentaire, à l'industrie et à la logistique.",
  intro:
    "Préfecture de l'Ain, Bourg-en-Bresse s'appuie sur un bassin agroalimentaire renommé, une industrie diversifiée et une activité logistique soutenue. Tous ces employeurs partagent les mêmes obligations de prévention des risques. Nous formons les équipes burgiennes à la santé et à la sécurité au travail.",
  economy: [
    "Le bassin de Bourg-en-Bresse est un territoire agroalimentaire reconnu, de la volaille de Bresse aux industries de transformation. Ces sites de production imposent des formations à l'hygiène, au secourisme et à la sécurité incendie adaptées à leurs ateliers et à leurs entrepôts.",
    "L'Ain est un département industriel dynamique. Autour de Bourg-en-Bresse, mécanique, plasturgie, sous-traitance et industrie diversifiée emploient de nombreux salariés sur des sites où l'habilitation électrique, la manipulation d'extincteurs et les premiers secours sont des obligations courantes.",
    "La situation de Bourg-en-Bresse, bien reliée aux axes autoroutiers entre Lyon, la Bourgogne et la Savoie, en fait un point d'appui logistique. Entrepôts et plateformes de distribution y exposent les salariés aux risques de manutention et de circulation d'engins.",
    "Bourg-en-Bresse est aussi le pôle de services et de santé du département. Établissements de soins, EHPAD et structures médico-sociales y génèrent des besoins réguliers en formations AFGSU et en prévention des troubles musculo-squelettiques liés à la manutention de personnes.",
  ],
  sectors: [
    {
      name: "Agroalimentaire",
      detail:
        "Sites de transformation et coopératives : hygiène, secourisme, sécurité incendie.",
    },
    {
      name: "Industrie et plasturgie",
      detail:
        "Mécanique et sous-traitance : SST, habilitation électrique, équipiers d'intervention.",
    },
    {
      name: "Logistique et santé",
      detail:
        "Entrepôts et établissements de soins : gestes et postures, prévention des TMS, AFGSU.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour l'agroalimentaire comme pour l'industrie.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites agroalimentaires, industriels et logistiques.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans la production et la logistique.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé de l'Ain.",
    },
  ],
  logistics:
    "Bourg-en-Bresse se situe à environ une heure de notre centre de l'est lyonnais. Nos formateurs y interviennent en intra-entreprise dans vos locaux comme en sessions inter-entreprises, avec l'ensemble du matériel pédagogique. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const paris: Location = {
  slug: "formation-securite-paris",
  city: "Paris",
  departmentName: "Île-de-France",
  departments: ["75", "77", "78", "91", "92", "93", "94", "95"],
  metaDescription:
    "Formations santé et sécurité au travail à Paris et en Île-de-France : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Première région économique d'Europe, l'Île-de-France concentre tous les secteurs d'activité et une densité d'employeurs unique. À Paris et en petite couronne, la prévention des risques professionnels est un enjeu quotidien. Nous formons régulièrement les équipes franciliennes à la santé et à la sécurité au travail.",
  economy: [
    "Paris et l'Île-de-France rassemblent un secteur tertiaire massif : sièges sociaux, bureaux, banques, assurances et administrations y concentrent des millions de salariés pour lesquels SST, sécurité incendie et exercices d'évacuation en ERP sont des obligations de base.",
    "La région compte aussi un grand secteur de la santé — hôpitaux, cliniques, établissements médico-sociaux — qui génère une demande soutenue de formations AFGSU et de prévention des troubles musculo-squelettiques liés à la manutention de personnes.",
    "La petite couronne abrite enfin une activité industrielle, logistique et de BTP importante. Entrepôts, sites techniques et chantiers du Grand Paris exposent les salariés aux risques de manutention, électrique et de chute, qui justifient l'habilitation électrique, les gestes et postures et le secourisme.",
  ],
  sectors: [
    {
      name: "Tertiaire et sièges sociaux",
      detail:
        "Bureaux et ERP : SST, évacuation, guides-files et serres-files.",
    },
    {
      name: "Santé et médico-social",
      detail: "Hôpitaux, cliniques et EHPAD : AFGSU, PRAP 2S, premiers secours.",
    },
    {
      name: "Industrie, logistique et BTP",
      detail:
        "Entrepôts, sites techniques et chantiers : habilitation électrique, gestes et postures, sécurité incendie.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première obligation de prévention pour tout employeur francilien.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP et les bureaux.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les professionnels de santé des nombreux établissements franciliens.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Pour les sites techniques et les chantiers du Grand Paris.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement à Paris et dans toute l'Île-de-France : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux, calibrées sur votre activité. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const toulouse: Location = {
  slug: "formation-securite-toulouse",
  city: "Toulouse",
  departmentName: "Haute-Garonne",
  departments: ["31"],
  metaDescription:
    "Formations santé et sécurité au travail à Toulouse et en Haute-Garonne : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Capitale de l'aéronautique et du spatial, Toulouse est l'une des métropoles les plus dynamiques de France. Son industrie de pointe, ses pôles de santé et de recherche et son tissu de PME partagent les mêmes obligations de prévention des risques. Nous formons régulièrement les équipes toulousaines à la santé et à la sécurité au travail.",
  economy: [
    "Toulouse est le cœur français de l'aéronautique et du spatial : Airbus, ses sous-traitants et de nombreux bureaux d'études emploient des dizaines de milliers de salariés sur des sites industriels exigeants. Manipulation, risque incendie, habilitation électrique et premiers secours y font partie du quotidien de la prévention.",
    "La métropole est aussi un grand pôle de santé et de recherche, structuré autour du CHU de Toulouse et des universités. Hôpitaux, cliniques et établissements médico-sociaux y génèrent une forte demande de formations AFGSU et de prévention des troubles musculo-squelettiques.",
    "Autour de ces grands employeurs, le secteur tertiaire, le numérique et un dense réseau de PME — notamment dans la zone d'activité de Labège, au sud-est de l'agglomération — concentrent une population pour laquelle SST, sécurité incendie et gestes et postures sont des formations de base.",
  ],
  sectors: [
    {
      name: "Aéronautique et industrie",
      detail:
        "Sites de production et sous-traitance : SST, habilitation électrique, manipulation d'extincteurs, équipiers d'intervention.",
    },
    {
      name: "Santé et médico-social",
      detail:
        "CHU, cliniques et EHPAD : AFGSU pour les professionnels de santé, PRAP 2S pour la manutention de personnes.",
    },
    {
      name: "Tertiaire, numérique et PME",
      detail:
        "Bureaux et ERP, notamment à Labège : SST, évacuation, gestes et postures.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention, de l'atelier aéronautique au bureau.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Incontournables pour l'industrie aéronautique et ses sous-traitants.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites industriels et les ERP de l'agglomération.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les professionnels de santé du pôle hospitalier toulousain.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération toulousaine et la Haute-Garonne : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux, calibrées sur votre activité. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const bordeaux: Location = {
  slug: "formation-securite-bordeaux",
  city: "Bordeaux",
  departmentName: "Gironde",
  departments: ["33"],
  metaDescription:
    "Formations santé et sécurité au travail à Bordeaux et en Gironde : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Métropole en forte croissance, Bordeaux conjugue le négoce et l'agroalimentaire, une industrie aéronautique et de défense de premier plan et un secteur tertiaire en plein essor. Tous ces employeurs sont soumis aux mêmes obligations de prévention. Nous formons régulièrement les équipes bordelaises à la santé et à la sécurité au travail.",
  economy: [
    "Bordeaux est mondialement connue pour la filière des vins et spiritueux et son agroalimentaire : négoce, chais, sites de production et logistique associée exposent les salariés aux risques de manutention, de machines et d'incendie d'entrepôt.",
    "Autour de l'aéroport et de la zone de Mérignac, l'aéronautique, le spatial et la défense rassemblent de grands sites industriels. Ces environnements de pointe imposent l'habilitation électrique, la sécurité incendie et une solide culture du secourisme.",
    "La métropole connaît enfin une forte croissance tertiaire et démographique : bureaux, commerces, établissements de santé et un dense réseau de PME rendent incontournables les formations SST, incendie en ERP et gestes et postures.",
  ],
  sectors: [
    {
      name: "Vin, négoce et agroalimentaire",
      detail:
        "Chais et sites de production : manutention, gestes et postures, sécurité incendie.",
    },
    {
      name: "Aéronautique et défense",
      detail:
        "Sites industriels de Mérignac : SST, habilitation électrique, équipiers d'intervention.",
    },
    {
      name: "Tertiaire, santé et PME",
      detail:
        "Bureaux, ERP et établissements de soins : SST, évacuation, AFGSU.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première brique de prévention pour tous les employeurs bordelais.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les chais, les sites industriels et les ERP.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Pour l'aéronautique et la défense de la zone de Mérignac.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans le négoce, l'agroalimentaire et la logistique.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération bordelaise et la Gironde : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const lille: Location = {
  slug: "formation-securite-lille",
  city: "Lille",
  departmentName: "Nord",
  departments: ["59"],
  metaDescription:
    "Formations santé et sécurité au travail à Lille et dans le Nord : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Grande métropole du Nord, Lille s'est réinventée autour des services, de la distribution et du numérique, tout en conservant un fort héritage industriel et logistique. Cette diversité d'activités appelle une prévention des risques rigoureuse. Nous formons régulièrement les équipes lilloises à la santé et à la sécurité au travail.",
  economy: [
    "Lille est un grand pôle tertiaire et de services : sièges d'entreprises, quartier d'affaires d'Euralille, banques et assurances y concentrent une population de bureaux pour laquelle SST, sécurité incendie et exercices d'évacuation sont des obligations de base.",
    "La métropole est un poids lourd de la grande distribution, du e-commerce et de la logistique. Entrepôts, plateformes et transport exposent les salariés aux risques de manutention, de circulation d'engins et d'incendie d'entrepôt — d'où l'importance des formations aux gestes et postures et à la sécurité incendie.",
    "Le territoire conserve une industrie diversifiée, héritée du textile et de la mécanique, et un secteur de la santé important. Sites industriels, hôpitaux et établissements médico-sociaux y génèrent des besoins réguliers en habilitation électrique, AFGSU et PRAP.",
  ],
  sectors: [
    {
      name: "Tertiaire et services",
      detail:
        "Euralille et sièges d'entreprises : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Distribution et logistique",
      detail:
        "Entrepôts et plateformes : gestes et postures, prévention des TMS, sécurité incendie.",
    },
    {
      name: "Industrie et santé",
      detail:
        "Sites industriels et établissements de soins : habilitation électrique, AFGSU, PRAP.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour le tertiaire comme pour l'industrie.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans la distribution et la logistique.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et sécurité des entrepôts et des ERP.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé de la métropole.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans la métropole lilloise et le Nord : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const montpellier: Location = {
  slug: "formation-securite-montpellier",
  city: "Montpellier",
  departmentName: "Hérault",
  departments: ["34"],
  metaDescription:
    "Formations santé et sécurité au travail à Montpellier et dans l'Hérault : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Parmi les métropoles les plus dynamiques de France, Montpellier s'appuie sur la santé, la recherche, le numérique et un fort essor démographique. Derrière cette croissance, les obligations de prévention des risques concernent chaque employeur. Nous formons régulièrement les équipes montpelliéraines à la santé et à la sécurité au travail.",
  economy: [
    "Montpellier est un grand pôle de santé et de recherche médicale, structuré autour du CHU et des universités. Hôpitaux, cliniques, laboratoires et établissements médico-sociaux y génèrent une forte demande de formations AFGSU et de prévention des troubles musculo-squelettiques.",
    "La métropole est aussi un pôle numérique et tertiaire en pleine expansion : bureaux, jeunes entreprises, commerces et ERP rendent incontournables les formations SST, la sécurité incendie et les exercices d'évacuation.",
    "L'Hérault conserve une activité viticole et agroalimentaire et un secteur du BTP soutenu par la croissance démographique. Ces métiers exposent les salariés aux risques de manutention, de chute et d'incendie qui justifient des formations au secourisme et aux gestes et postures.",
  ],
  sectors: [
    {
      name: "Santé et recherche",
      detail:
        "CHU, cliniques et laboratoires : AFGSU, PRAP 2S, premiers secours.",
    },
    {
      name: "Numérique et tertiaire",
      detail:
        "Bureaux et ERP : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Viticulture, agroalimentaire et BTP",
      detail:
        "Sites de production et chantiers : gestes et postures, sécurité incendie, secourisme.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les professionnels de santé du pôle médical montpelliérain.",
    },
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première obligation de prévention pour tout employeur.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP et les bureaux.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans le soin, l'agroalimentaire et le BTP.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération de Montpellier et l'Hérault : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const strasbourg: Location = {
  slug: "formation-securite-strasbourg",
  city: "Strasbourg",
  departmentName: "Bas-Rhin",
  departments: ["67"],
  metaDescription:
    "Formations santé et sécurité au travail à Strasbourg et dans le Bas-Rhin : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Capitale européenne, Strasbourg associe les institutions internationales, une industrie pharmaceutique et logistique solide et un secteur tertiaire développé. Cette diversité appelle une prévention des risques rigoureuse. Nous formons régulièrement les équipes strasbourgeoises à la santé et à la sécurité au travail.",
  economy: [
    "Strasbourg accueille les institutions européennes et un important secteur tertiaire : bureaux, administrations et établissements recevant du public y concentrent une population active pour laquelle SST et sécurité incendie — évacuation, équipiers, guides-files — sont des obligations de base.",
    "Le Bas-Rhin est un territoire industriel et pharmaceutique de premier plan. Sites de production, laboratoires et industrie de pointe rendent l'habilitation électrique, son recyclage et la sécurité incendie particulièrement importants.",
    "Adossée au Rhin, Strasbourg est un grand carrefour logistique : le port et les plateformes de distribution exposent les salariés aux risques de manutention et de circulation d'engins, qui justifient les formations aux gestes et postures et au secourisme.",
  ],
  sectors: [
    {
      name: "Tertiaire et institutions",
      detail:
        "Administrations et ERP : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Industrie et pharmacie",
      detail:
        "Sites de production et laboratoires : habilitation électrique, recyclage, sécurité incendie.",
    },
    {
      name: "Logistique rhénane",
      detail:
        "Port et entrepôts : gestes et postures, prévention des TMS, manipulation d'extincteurs.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour le tertiaire comme pour l'industrie.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Pour les sites industriels et pharmaceutiques du Bas-Rhin.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP et les sites de production.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans la logistique rhénane.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération strasbourgeoise et le Bas-Rhin : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const rouen: Location = {
  slug: "formation-securite-rouen",
  city: "Rouen",
  departmentName: "Seine-Maritime",
  departments: ["76"],
  metaDescription:
    "Formations santé et sécurité au travail à Rouen et en Seine-Maritime : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Grand port de l'axe Seine, Rouen conjugue une industrie portuaire, chimique et logistique puissante avec un secteur tertiaire et de santé développé. Ces activités placent la prévention des risques au premier plan. Nous formons régulièrement les équipes rouennaises à la santé et à la sécurité au travail.",
  economy: [
    "Rouen est un grand port et un pôle industriel majeur de la vallée de la Seine. L'industrie chimique et pétrochimique y compte de nombreux sites classés ICPE, dont des installations Seveso : la maîtrise du risque incendie, du risque chimique et des procédures d'évacuation y est une exigence permanente.",
    "La logistique et le transport occupent une place de premier plan, du port aux plateformes de distribution. Entrepôts et activités de manutention exposent les salariés aux risques de port de charges et de circulation d'engins, qui justifient les formations aux gestes et postures et à la sécurité incendie.",
    "La métropole dispose aussi d'un secteur tertiaire, pharmaceutique et de santé développé. Bureaux, sites pharmaceutiques, hôpitaux et établissements médico-sociaux y génèrent des besoins réguliers en SST, habilitation électrique, AFGSU et PRAP.",
  ],
  sectors: [
    {
      name: "Industrie chimique et portuaire",
      detail:
        "Sites ICPE de la vallée de la Seine : exercices d'évacuation, équipiers d'intervention, sécurité incendie.",
    },
    {
      name: "Logistique et transport",
      detail:
        "Port et entrepôts : gestes et postures, prévention des TMS, manipulation d'extincteurs.",
    },
    {
      name: "Tertiaire et santé",
      detail:
        "Bureaux et établissements de soins : SST, AFGSU, habilitation électrique.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Indispensables pour les sites ICPE et la vallée de la Seine.",
    },
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour l'industrie comme pour le tertiaire.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans la logistique portuaire.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé de la métropole.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération rouennaise et la Seine-Maritime : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const nantes: Location = {
  slug: "formation-securite-nantes",
  city: "Nantes",
  departmentName: "Loire-Atlantique",
  departments: ["44"],
  metaDescription:
    "Formations santé et sécurité au travail à Nantes et en Loire-Atlantique : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Métropole de l'Ouest en plein essor, Nantes associe une industrie navale et aéronautique réputée, l'agroalimentaire, le numérique et un secteur tertiaire dynamique. Tous ces employeurs partagent les mêmes obligations de prévention. Nous formons régulièrement les équipes nantaises à la santé et à la sécurité au travail.",
  economy: [
    "Nantes conserve une industrie de premier plan : construction navale, aéronautique et leurs sous-traitants emploient de nombreux salariés sur des sites exigeants, où manipulation, sécurité incendie, habilitation électrique et premiers secours sont au cœur de la prévention.",
    "L'estuaire Nantes–Saint-Nazaire est un grand pôle agroalimentaire et logistique. Sites de transformation, entrepôts et activités portuaires exposent les salariés aux risques de manutention et d'incendie d'entrepôt, d'où l'importance des formations aux gestes et postures et à la sécurité incendie.",
    "La métropole est aussi un pôle numérique et tertiaire en forte croissance, doublé d'un secteur de la santé important. Bureaux, ERP, hôpitaux et établissements médico-sociaux rendent incontournables les formations SST, AFGSU et PRAP.",
  ],
  sectors: [
    {
      name: "Industrie navale et aéronautique",
      detail:
        "Sites de production : SST, habilitation électrique, manipulation d'extincteurs.",
    },
    {
      name: "Agroalimentaire et logistique",
      detail:
        "Sites de transformation et entrepôts : gestes et postures, prévention des TMS, sécurité incendie.",
    },
    {
      name: "Numérique, tertiaire et santé",
      detail:
        "Bureaux, ERP et établissements de soins : SST, évacuation, AFGSU.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention, du chantier naval au bureau.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites industriels, l'agroalimentaire et les ERP.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans l'agroalimentaire et la logistique.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé de la métropole.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération nantaise et la Loire-Atlantique : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const nice: Location = {
  slug: "formation-securite-nice",
  city: "Nice",
  departmentName: "Alpes-Maritimes",
  departments: ["06"],
  metaDescription:
    "Formations santé et sécurité au travail à Nice et dans les Alpes-Maritimes : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Sur la Côte d'Azur, Nice conjugue une forte activité touristique avec le technopôle de Sophia-Antipolis, pôle européen du numérique et de la recherche. Derrière cette diversité, les obligations de prévention concernent chaque employeur. Nous formons régulièrement les équipes azuréennes à la santé et à la sécurité au travail.",
  economy: [
    "Le tourisme est le moteur historique de l'économie azuréenne : hôtellerie, restauration, loisirs et commerces emploient une main-d'œuvre nombreuse, souvent saisonnière, exposée aux risques de manutention, de coupure, de brûlure et de chute, qui justifie des formations au secourisme et aux gestes et postures.",
    "À l'ouest de Nice, le technopôle de Sophia-Antipolis rassemble un important écosystème de numérique, de recherche et de services. Bureaux et établissements recevant du public y rendent incontournables les formations SST, la sécurité incendie et les exercices d'évacuation.",
    "La métropole dispose enfin d'un secteur de la santé développé. Hôpitaux, cliniques et établissements médico-sociaux y génèrent une demande régulière de formations AFGSU et de prévention des troubles musculo-squelettiques.",
  ],
  sectors: [
    {
      name: "Tourisme, hôtellerie et commerce",
      detail:
        "Personnels saisonniers : secourisme, gestes et postures, sécurité incendie des ERP.",
    },
    {
      name: "Numérique et tertiaire — Sophia-Antipolis",
      detail:
        "Bureaux et ERP : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Santé et médico-social",
      detail: "Établissements de soins : AFGSU, PRAP 2S, premiers secours.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première brique de prévention, du commerce au bureau.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Pour l'hôtellerie-restauration et la manutention en milieu de soins.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP touristiques et tertiaires.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé des Alpes-Maritimes.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération niçoise et les Alpes-Maritimes : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const tours: Location = {
  slug: "formation-securite-tours",
  city: "Tours",
  departmentName: "Indre-et-Loire",
  departments: ["37"],
  metaDescription:
    "Formations santé et sécurité au travail à Tours et en Indre-et-Loire : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Au cœur du Val de Loire, Tours s'appuie sur l'industrie pharmaceutique et cosmétique, un secteur tertiaire solide et un pôle de santé important. Ces employeurs partagent les mêmes obligations de prévention des risques. Nous formons régulièrement les équipes tourangelles à la santé et à la sécurité au travail.",
  economy: [
    "Tours est un pôle reconnu de l'industrie pharmaceutique et cosmétique. Sites de production et laboratoires y imposent une prévention rigoureuse : habilitation électrique, sécurité incendie, hygiène et premiers secours.",
    "La métropole dispose d'un secteur tertiaire développé — assurances, mutuelles, services — et d'un pôle de santé structuré autour du CHU. Bureaux, ERP et établissements de soins rendent incontournables les formations SST, incendie et AFGSU.",
    "L'Indre-et-Loire conserve une activité agroalimentaire et viticole et un secteur du BTP actif. Ces métiers exposent les salariés aux risques de manutention et de chute, qui justifient les formations aux gestes et postures et au secourisme.",
  ],
  sectors: [
    {
      name: "Pharmacie et cosmétique",
      detail:
        "Sites de production et laboratoires : habilitation électrique, sécurité incendie, hygiène.",
    },
    {
      name: "Tertiaire et santé",
      detail:
        "Bureaux, ERP et établissements de soins : SST, évacuation, AFGSU.",
    },
    {
      name: "Agroalimentaire et BTP",
      detail:
        "Sites de production et chantiers : gestes et postures, secourisme.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention pour l'industrie comme pour le tertiaire.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Pour les sites pharmaceutiques et cosmétiques.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites de production et les ERP.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les professionnels de santé du pôle hospitalier tourangeau.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération de Tours et l'Indre-et-Loire : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const rennes: Location = {
  slug: "formation-securite-rennes",
  city: "Rennes",
  departmentName: "Ille-et-Vilaine",
  departments: ["35"],
  metaDescription:
    "Formations santé et sécurité au travail à Rennes et en Ille-et-Vilaine : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises planifiées et formations intra.",
  intro:
    "Capitale de la Bretagne, Rennes conjugue l'industrie automobile, un pôle numérique et de télécommunications de premier plan et un fort secteur agroalimentaire. Tous ces employeurs sont soumis aux mêmes obligations de prévention. Nous formons régulièrement les équipes rennaises à la santé et à la sécurité au travail.",
  economy: [
    "Rennes accueille un grand site automobile et son réseau de sous-traitants : ces environnements industriels exigeants placent au premier plan la manipulation, la sécurité incendie, l'habilitation électrique et les premiers secours.",
    "La métropole est un pôle majeur du numérique, des télécommunications et de la recherche. Bureaux, technopôles et établissements recevant du public y rendent incontournables les formations SST, la sécurité incendie et les exercices d'évacuation.",
    "L'Ille-et-Vilaine est un grand territoire agroalimentaire. Sites de transformation, logistique associée et secteur de la santé y génèrent des besoins réguliers en gestes et postures, prévention des TMS, AFGSU et secourisme.",
  ],
  sectors: [
    {
      name: "Industrie automobile",
      detail:
        "Sites de production et sous-traitance : SST, habilitation électrique, manipulation d'extincteurs.",
    },
    {
      name: "Numérique et tertiaire",
      detail:
        "Technopôles et bureaux : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Agroalimentaire et santé",
      detail:
        "Sites de transformation et établissements de soins : gestes et postures, AFGSU, PRAP.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Socle de prévention, de l'usine au bureau.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Pour l'industrie automobile et ses sous-traitants.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Pour les sites industriels, les technopôles et les ERP.",
    },
    {
      label: "Gestes et postures, PRAP",
      href: "/formations-ergonomie",
      reason: "Prévention des TMS dans l'agroalimentaire et la logistique.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement dans l'agglomération rennaise et l'Ille-et-Vilaine : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

export const aixEnProvence: Location = {
  slug: "formation-securite-aix-en-provence",
  city: "Aix-en-Provence",
  departmentName: "Bouches-du-Rhône",
  departments: ["13"],
  metaDescription:
    "Formations santé et sécurité au travail à Aix-en-Provence et dans les Bouches-du-Rhône : SST, incendie, habilitation électrique, AFGSU, gestes et postures. Sessions inter-entreprises et formations intra.",
  intro:
    "Au cœur de la métropole Aix-Marseille, Aix-en-Provence conjugue un secteur tertiaire et juridique de premier plan, des pôles de recherche et de technologie et une industrie de pointe. Ces employeurs partagent les mêmes obligations de prévention. Nous formons régulièrement les équipes aixoises à la santé et à la sécurité au travail.",
  economy: [
    "Aix-en-Provence est un grand pôle tertiaire, administratif et juridique. Bureaux, sièges, administrations et établissements recevant du public y concentrent une population active pour laquelle SST et sécurité incendie — évacuation, équipiers — sont des obligations de base.",
    "La région aixoise abrite des pôles de recherche et de technologie de premier plan, du technopôle de l'Arbois à la microélectronique du pays d'Aix. Ces sites techniques rendent l'habilitation électrique, son recyclage et la sécurité incendie particulièrement importants.",
    "La métropole Aix-Marseille compte enfin une industrie, une logistique et un secteur de la santé développés. Sites industriels, entrepôts, hôpitaux et établissements médico-sociaux y génèrent des besoins réguliers en gestes et postures, AFGSU et PRAP.",
  ],
  sectors: [
    {
      name: "Tertiaire, droit et administration",
      detail:
        "Bureaux et ERP : SST, évacuation, équipiers de première intervention.",
    },
    {
      name: "Recherche et technologies",
      detail:
        "Technopôles et microélectronique : habilitation électrique, recyclage, sécurité incendie.",
    },
    {
      name: "Industrie, logistique et santé",
      detail:
        "Sites industriels, entrepôts et établissements de soins : gestes et postures, AFGSU, PRAP.",
    },
  ],
  priorityFormations: [
    {
      label: "Formations SST",
      href: "/formations-secourisme",
      reason: "Première obligation de prévention pour tout employeur aixois.",
    },
    {
      label: "Formations sécurité incendie",
      href: "/formations-securite-incendie",
      reason: "Évacuation et équipiers pour les ERP et les sites techniques.",
    },
    {
      label: "Formations habilitation électrique",
      href: "/formations-habilitation-electrique",
      reason: "Pour les pôles de recherche et l'industrie du pays d'Aix.",
    },
    {
      label: "Formations AFGSU",
      href: "/nos-formations-afgsu",
      reason: "Pour les établissements de santé des Bouches-du-Rhône.",
    },
  ],
  logistics:
    "Nous intervenons régulièrement à Aix-en-Provence et dans les Bouches-du-Rhône : sessions inter-entreprises planifiées et formations intra-entreprise dans vos locaux. Le délai habituel d'organisation est de deux à quatre semaines.",
};

/** Toutes les villes — pour le sitemap et le maillage interne. */
export const locations: Location[] = [
  paris,
  lyon,
  toulouse,
  bordeaux,
  lille,
  nantes,
  strasbourg,
  montpellier,
  rennes,
  rouen,
  nice,
  tours,
  aixEnProvence,
  grenoble,
  saintEtienne,
  clermontFerrand,
  villeurbanne,
  annecy,
  chambery,
  valence,
  bourgEnBresse,
];
