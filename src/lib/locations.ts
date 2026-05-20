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
  /** Image d'illustration (vue de la ville), sous public/images/locations/. */
  image: string;
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

/** Toutes les villes — pour le sitemap et le maillage interne. */
export const locations: Location[] = [
  lyon,
  villeurbanne,
  grenoble,
  saintEtienne,
  clermontFerrand,
  annecy,
  valence,
  chambery,
  bourgEnBresse,
];
