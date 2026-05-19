/**
 * Static list of article slugs, derived from the `articles` record below.
 * Used by `generateStaticParams` and the sitemap.
 */
export const articleSlugs = [
  "prevention-des-risques-electriques-limportance-de-lhabilitation-professionnelle",
  "formation-pssm-premiers-secours-en-sante-mentale",
  "formation-incendie-obligatoire-ce-que-dit-la-reglementation",
  "formation-securite-travail-supports",
  "proteger-alerter-secourir-pas-comment-bien-reagir",
  "appels-durgence-les-reflexes-essentiels",
  "le-112-tout-savoir-sur-le-numero-durgence-et-de-secours-europeen",
  "comment-faire-une-bonne-pls-tout-savoir-sur-la-position-laterale-de-securite",
  "est-ce-quun-sst-ou-une-entreprise-peut-transporter-une-victime-a-lhopital",
  "extincteurs-guide-essentiel-pour-bien-les-utiliser",
  "securite-incendie-guide-et-procedure-pour-utiliser-un-ria-robinet-dincendie-arme",
  "formation-epi-et-esi-tout-savoir-sur-ces-formations-incendie-guide-complet",
  "quest-ce-que-le-sprinkler-comment-fonctionne-le-sprinklage",
  "guide-complet-sur-la-methode-haccp-assurez-la-securite-alimentaire-en-7-etapes",
  "le-plan-de-prevention-un-outil-essentiel-pour-la-securite-en-entreprise",
  "est-ce-que-le-defibrillateur-est-obligatoire-dans-les-entreprises",
  "que-doit-contenir-la-trousse-de-secours-dune-entreprise-materiel-utilise-par-le-sst",
  "quels-sont-les-signes-dune-crise-cardiaque-reconnaitre-un-infarctus",
  "acceder-au-quickplace-cloud-inrs-pour-la-formation-sst-mot-de-passe-sst",
  "acceder-au-quickplace-cloud-inrs-pour-la-formation-prap-mot-de-passe-prap",
  "comment-choisir-sa-formation-en-secourisme",
  "arrete-23-fevrier-2025-installations-gaz-erp-igh",
  "arrete-1er-septembre-2025-reglement-securite-erp",
  "referentiel-apsad-r1-nouvelle-edition-2025-sprinklers",
  "referentiel-apsad-r7-mise-a-jour-detection-incendie-2025",
  "circulaire-formation-continue-2026-premiers-secours-securite-civile",
  "mise-a-jour-cnh-sst-formateurs-mars-2026",
  "brochure-inrs-ed-6403-rps-du-evaluation-risques-psychosociaux",
  "decret-2025-355-nouveau-suivi-medical-habilitation-electrique",
  "nf-c-18-510-compil-2-edition-consolidee-amendements-a1-a2",
  "suppression-majoration-sir-habilitation-electrique-2026",
  "cahier-des-charges-prap-dispositions-sectorielles-2025",
  "decret-fortes-chaleurs-juillet-2025-obligations-duerp",
  "brochure-inrs-ed-6349-rps-quatre-circonstances-agir-prevention",
  "plan-interministeriel-qualite-anti-fraude-rnq-v10-qualiopi",
  "ilcor-costr-2025-evolutions-rcp-formation-secourisme",
  "erc-guidelines-2025-rotterdam-recommandations-europeennes-rcp",
  "laerdal-qcpr-mannequins-connectes-formation-rcp",
  "formation-incendie-realite-virtuelle-vr-evacuation-extincteurs",
  "duerp-guide-pratique-rediger-et-mettre-a-jour-document-unique",
  "exercice-evacuation-incendie-comment-organiser",
] as const;

/**
 * Subset of articles that document a regulatory or innovation watch entry.
 * Linked from /veille-reglementaire and reachable via /articles?categorie=veille.
 */
export const veilleArticleSlugs = new Set<string>([
  "arrete-23-fevrier-2025-installations-gaz-erp-igh",
  "arrete-1er-septembre-2025-reglement-securite-erp",
  "referentiel-apsad-r1-nouvelle-edition-2025-sprinklers",
  "referentiel-apsad-r7-mise-a-jour-detection-incendie-2025",
  "circulaire-formation-continue-2026-premiers-secours-securite-civile",
  "mise-a-jour-cnh-sst-formateurs-mars-2026",
  "brochure-inrs-ed-6403-rps-du-evaluation-risques-psychosociaux",
  "decret-2025-355-nouveau-suivi-medical-habilitation-electrique",
  "nf-c-18-510-compil-2-edition-consolidee-amendements-a1-a2",
  "suppression-majoration-sir-habilitation-electrique-2026",
  "cahier-des-charges-prap-dispositions-sectorielles-2025",
  "decret-fortes-chaleurs-juillet-2025-obligations-duerp",
  "brochure-inrs-ed-6349-rps-quatre-circonstances-agir-prevention",
  "plan-interministeriel-qualite-anti-fraude-rnq-v10-qualiopi",
  "ilcor-costr-2025-evolutions-rcp-formation-secourisme",
  "erc-guidelines-2025-rotterdam-recommandations-europeennes-rcp",
  "laerdal-qcpr-mannequins-connectes-formation-rcp",
  "formation-incendie-realite-virtuelle-vr-evacuation-extincteurs",
]);

export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export type Article = {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readingTime: number;
  image?: string;
  content: ArticleBlock[];
};

export const articles: Record<string, Article> = {
  "prevention-des-risques-electriques-limportance-de-lhabilitation-professionnelle":
    {
      title:
        "Prévention des risques électriques : l'importance de l'habilitation professionnelle",
      excerpt:
        "Électrocution, électrisation, brûlures, explosions : autant de risques liés à l'électricité au travail. Tour d'horizon des habilitations qui protègent vos équipes au quotidien.",
      publishedAt: "2025-07-23",
      category: "Habilitation électrique",
      readingTime: 5,
      image:
        "/images/prevention-des-risques-electriques-l-importance-de-l-habilitation-professionne.png",
      content: [
        {
          type: "p",
          text: "Électrocution, électrisation, brûlures ou encore explosions sont autant de risques liés à l'électricité sur le lieu de travail. Pour éviter ces accidents dramatiques, des réglementations strictes ont été mises en place en termes d'habilitation électrique, qui assurent une meilleure sécurité pour les travailleurs évoluant à proximité ou directement avec des installations électriques.",
        },
        { type: "h2", text: "Qu'est-ce que l'habilitation électrique ?" },
        {
          type: "p",
          text: 'Une personne est dite "habilitée" lorsqu\'elle a reçu une formation lui permettant d\'exécuter en sécurité des travaux d\'ordre électrique. Cette habilitation, délivrée par l\'employeur, précise le niveau de compétences atteint par le professionnel, les limites de ses interventions, et atteste de ses capacités à mettre en œuvre les mesures de prévention nécessaires face aux risques électriques.',
        },
        {
          type: "p",
          text: "Pour acquérir cette habilitation, il est indispensable de suivre une formation spécifique axée sur le risque électrique. Cette formation sensibilise les apprenants aux dangers de l'électricité, aux méthodes de travail sûres et aux gestes de premier secours en cas d'accident électrique. Elle se divise en une partie théorique et une partie pratique.",
        },
        { type: "h2", text: "Les différents niveaux d'habilitation" },
        {
          type: "p",
          text: "Les habilitations électriques sont classées selon leur niveau de compétence :",
        },
        {
          type: "ul",
          items: [
            "Niveau « exécutant » : réalise les travaux sous la responsabilité d'un chargé de travaux",
            "Niveau « chargé de travaux » : supervise et planifie les interventions",
            "Sous-catégories selon le type d'environnement (tension réduite, basse tension, haute tension, avec ou sans tension)",
          ],
        },
        {
          type: "p",
          text: "L'habilitation doit être renouvelée régulièrement, à la fois pour maintenir le niveau de compétence mais aussi pour suivre les évolutions technologiques et réglementaires (recyclage tous les 3 ans recommandé).",
        },
        { type: "h2", text: "Pourquoi former vos équipes ?" },
        {
          type: "p",
          text: "L'électricité, bien que primordiale à notre quotidien, reste un élément dangereux. L'électrocution, causée par le passage du courant à travers le corps humain, peut entraîner des lésions internes graves, voire le décès. L'électrisation peut aboutir à des brûlures, traumatismes ou arrêts cardiaques.",
        },
        {
          type: "quote",
          text: "L'habilitation électrique est une pièce maîtresse dans la prévention des risques électriques. Elle garantit que seules les personnes formées et capables de travailler en toute sécurité avec de l'électricité sont autorisées à le faire.",
        },
        { type: "h2", text: "Un enjeu de conformité et de performance" },
        {
          type: "p",
          text: "L'habilitation électrique représente un enjeu majeur dans la prévention des risques professionnels. Elle garantit non seulement la sécurité des travailleurs mais aussi la qualité des interventions, la pérennité des installations électriques et, in fine, la productivité de l'entreprise.",
        },
        {
          type: "p",
          text: "Qu'il s'agisse d'un environnement à faible ou à haute tension, la sécurité des personnes reste la priorité absolue. Alors n'attendez plus : informez-vous et formez vos équipes.",
        },
      ],
    },

  "formation-pssm-premiers-secours-en-sante-mentale": {
    title: "Formation PSSM : Premiers Secours en Santé Mentale",
    excerpt:
      "Stress chronique, burn-out, dépression : les troubles psychiques représentent une part croissante des arrêts de travail. La formation PSSM forme vos équipes à les reconnaître et y réagir.",
    publishedAt: "2025-02-12",
    category: "Santé mentale",
    readingTime: 6,
    image: "/images/formation-pssm-premiers-secours-en-sante-mentale.webp",
    content: [
      {
        type: "p",
        text: "Depuis plusieurs années, la santé mentale est devenue un enjeu majeur dans le monde du travail. Stress chronique, burn-out, dépression… les troubles psychiques représentent une part croissante des arrêts maladie et des souffrances au travail. Face à ce constat, une solution concrète et efficace émerge : la formation PSSM (Premiers Secours en Santé Mentale).",
      },
      { type: "h2", text: "La santé mentale : un risque professionnel à part entière" },
      {
        type: "p",
        text: "Le Code du travail impose à l'employeur d'évaluer et prévenir tous les risques susceptibles d'altérer la santé physique et mentale des salariés (article L.4121-1). Cela inclut les risques psychosociaux (RPS) : troubles anxieux, mal-être au travail, pensées suicidaires, épuisement professionnel.",
      },
      {
        type: "p",
        text: "À l'image des gestes de premiers secours en cas d'accident physique, la formation PSSM vise à doter les collaborateurs de réflexes adaptés face à une détresse psychologique.",
      },
      { type: "h2", text: "Qu'est-ce que la formation PSSM ?" },
      {
        type: "p",
        text: "Inspirée du modèle anglo-saxon Mental Health First Aid, la formation PSSM permet de reconnaître les signes précoces de troubles psychiques et d'agir de manière appropriée. Elle est structurée autour d'un plan d'action simple, fondé sur l'écoute, le non-jugement et l'orientation vers des professionnels.",
      },
      { type: "h3", text: "Les thématiques abordées" },
      {
        type: "ul",
        items: [
          "Troubles dépressifs et anxieux",
          "Crises psychotiques",
          "Conduites suicidaires",
          "Addictions",
        ],
      },
      {
        type: "p",
        text: "La formation alterne apports théoriques, mises en situation, études de cas et échanges d'expériences.",
      },
      { type: "h2", text: "Pourquoi former en entreprise ?" },
      { type: "p", text: "Former des secouristes en santé mentale présente de nombreux bénéfices :" },
      {
        type: "ul",
        items: [
          "Prévenir les situations de crise ou de rupture",
          "Favoriser un climat de travail bienveillant et inclusif",
          "Réduire l'absentéisme et le turn-over",
          "Respecter les obligations légales de prévention",
          "Déstigmatiser les troubles psychiques au sein des équipes",
        ],
      },
      {
        type: "p",
        text: "La PSSM complète efficacement une politique QVT (Qualité de Vie au Travail) et RSE.",
      },
      { type: "h2", text: "Est-ce obligatoire ?" },
      {
        type: "p",
        text: "La formation PSSM n'est pas encore obligatoire à ce jour. Toutefois, elle peut s'inscrire dans le Document Unique d'Évaluation des Risques (DUERP), notamment en tant que mesure de prévention secondaire ou tertiaire. Elle est fortement recommandée par l'INRS et Santé Publique France.",
      },
      {
        type: "quote",
        text: "Plus qu'une simple formation, le PSSM est une démarche humaine qui favorise l'entraide, la solidarité et l'attention aux autres.",
      },
      {
        type: "p",
        text: "Dans un contexte où la santé mentale est de plus en plus fragilisée, former des salariés à détecter les signes de souffrance psychique devient un levier de sécurité, de performance et d'engagement.",
      },
    ],
  },

  "formation-incendie-obligatoire-ce-que-dit-la-reglementation": {
    title: "Formation incendie obligatoire : ce que dit la réglementation",
    excerpt:
      "La formation incendie est-elle obligatoire ? Que dit exactement la loi ? Code du travail, ERP, exercices d'évacuation : on fait le point sur les obligations.",
    publishedAt: "2025-02-07",
    category: "Sécurité incendie",
    readingTime: 5,
    image: "/formations/formation-incendie.png",
    content: [
      {
        type: "p",
        text: "En entreprise, la prévention des risques est une obligation légale. Et parmi les dangers les plus redoutés figure l'incendie. Qu'il s'agisse d'un départ de feu en entrepôt, d'un court-circuit dans un bureau ou d'une étincelle en atelier, les conséquences peuvent être graves, tant pour les personnes que pour les biens.",
      },
      { type: "h2", text: "Un cadre légal clair pour la sécurité incendie" },
      {
        type: "p",
        text: "En France, la réglementation impose aux employeurs de prendre toutes les mesures nécessaires pour assurer la sécurité des salariés, notamment en cas d'incendie. Cela est précisé dans le Code du travail, notamment dans les articles R.4227-28 à R.4227-39.",
      },
      {
        type: "quote",
        text: "Former les salariés à la sécurité incendie n'est pas une option, c'est une obligation.",
      },
      { type: "h2", text: "Qui doit suivre une formation incendie ?" },
      {
        type: "p",
        text: "La loi ne précise pas un nombre exact de salariés à former, mais elle impose qu'un nombre suffisant de personnes soient formées et présentes à tout moment sur le lieu de travail. Cela concerne :",
      },
      {
        type: "ul",
        items: [
          "Les salariés désignés comme guides-files et serre-files",
          "Les équipes de première intervention",
          "Les employés travaillant dans des environnements à risque (ateliers, entrepôts, cuisines, etc.)",
        ],
      },
      {
        type: "p",
        text: "Pour certains établissements, comme les ERP (Établissements Recevant du Public) ou les IGH (Immeubles de Grande Hauteur), des exigences spécifiques s'ajoutent : obligation de formation régulière, présence d'agents SSIAP, etc.",
      },
      { type: "h2", text: "Quel contenu pour une formation incendie ?" },
      {
        type: "p",
        text: "La formation doit être adaptée aux risques de l'établissement. En général, elle comprend :",
      },
      {
        type: "ul",
        items: [
          "La connaissance des consignes de sécurité",
          "L'identification des types de feux (électrique, chimique, graisse, etc.)",
          "L'utilisation des extincteurs portatifs et du matériel de lutte contre l'incendie",
          "Les réflexes d'évacuation en cas de déclenchement d'alarme",
          "Des exercices pratiques",
        ],
      },
      {
        type: "p",
        text: "L'objectif est de permettre aux salariés de réagir rapidement face à un départ de feu, protéger les personnes et les biens, et limiter les dégâts en attendant les secours.",
      },
      { type: "h2", text: "Quels risques en cas de non-respect ?" },
      { type: "p", text: "Ignorer cette obligation expose l'employeur à :" },
      {
        type: "ul",
        items: [
          "Des sanctions administratives ou pénales",
          "Une mise en demeure de l'inspection du travail",
          "Une responsabilité engagée en cas d'incident (amende, voire peine de prison en cas de négligence avérée)",
        ],
      },
      {
        type: "p",
        text: "Mais au-delà des sanctions, c'est la sécurité des personnes qui est en jeu. Un salarié bien formé peut sauver des vies en cas de départ de feu.",
      },
      { type: "h2", text: "Former, c'est prévenir" },
      {
        type: "p",
        text: "La formation incendie est bel et bien obligatoire dans le cadre de la réglementation sur la santé et la sécurité au travail. Elle s'inscrit dans une démarche de prévention globale, au même titre que l'affichage des consignes, la mise en place d'alarmes ou les équipements de protection.",
      },
      {
        type: "p",
        text: "Former ses salariés, c'est leur donner les moyens d'agir en cas de danger. C'est aussi un levier de performance collective, de conformité légale et de responsabilité sociale.",
      },
    ],
  },

  "formation-securite-travail-supports": {
    title:
      "Formation sécurité au travail : pourquoi les bons supports font toute la différence",
    excerpt:
      "Diaporama clair, livret participant pertinent, exercices de mise en situation : les supports d'une formation conditionnent largement sa qualité. Tour d'horizon des bons réflexes pour les formateurs en SST, incendie et prévention.",
    publishedAt: "2026-04-15",
    category: "Santé au travail",
    readingTime: 6,
    image: "/images/articles/supports-formation.jpg",
    content: [
      {
        type: "p",
        text: "Une formation à la sécurité au travail ne vaut que par ce qu'en retiennent les participants. Et ce qu'ils en retiennent dépend, à compétences pédagogiques égales, de la qualité des supports utilisés en séance. Un diaporama dense et illisible, un livret générique ou des vidéos datées suffisent à plomber des heures de transmission. À l'inverse, des supports bien pensés ancrent la mémoire et structurent la pratique.",
      },
      { type: "h2", text: "Trois familles de supports indispensables" },
      {
        type: "ul",
        items: [
          "Le diaporama d'animation : trame de la séquence, support visuel à projeter, repère pour le formateur",
          "Le livret participant : remis en main propre, support de prise de notes et aide-mémoire post-formation",
          "Les supports de mise en situation : planches d'analyse de risques, scénarios, matériel pédagogique (extincteurs d'entraînement, mannequins, DAE de formation)",
        ],
      },
      { type: "h2", text: "Les exigences propres à la sécurité au travail" },
      {
        type: "p",
        text: "Sur ces thématiques (SST, incendie, habilitation électrique, ergonomie, prévention), les supports doivent répondre à trois critères non-négociables : conformité au référentiel officiel applicable (INRS, NF C18-510, règlement ERP, etc.), actualisation au regard des dernières évolutions techniques et réglementaires, et adaptation au public (langage, niveau, exemples sectoriels).",
      },
      {
        type: "quote",
        text: "Un support obsolète n'est pas un support neutre : il diffuse une information fausse, en contradiction avec ce que le stagiaire devra appliquer sur le terrain.",
      },
      { type: "h3", text: "Le diaporama : moins, mais mieux" },
      {
        type: "p",
        text: "Évitez les diapositives surchargées de texte. Une diapo = une idée, illustrée. Privilégiez les schémas, photos terrain, vidéos courtes (1 à 2 minutes maximum). Le diaporama n'est pas le contenu de la formation, c'est son appui visuel.",
      },
      { type: "h3", text: "Le livret participant : pensé pour la post-formation" },
      {
        type: "p",
        text: "Le livret est consulté après la séance, souvent en situation réelle. Il doit contenir l'essentiel : références réglementaires, schémas, procédures, fiches synthèse par geste ou risque. L'aide-mémoire INRS pour le SST est un exemple parfait du format attendu : compact, illustré, immédiatement utilisable.",
      },
      { type: "h2", text: "Et les supports d'animation ?" },
      {
        type: "p",
        text: "Pour la sécurité au travail, le matériel pédagogique compte autant que le papier. Extincteurs de formation rechargeables, simulateurs de feu, mannequins de réanimation, défibrillateurs d'entraînement, planches d'analyse de risques TUTOPREV : la qualité du matériel détermine la qualité de la mise en pratique — et donc des compétences acquises.",
      },
      { type: "h2", text: "Concevoir ses propres supports ou utiliser les supports officiels ?" },
      {
        type: "p",
        text: "Pour les formations certifiantes (SST, PRAP, PSC, AFGSU, habilitation électrique), les référentiels officiels font foi et doivent être respectés. Les supports formateur peuvent être personnalisés (charte, exemples métier) mais doivent rester conformes au fond. Pour les sensibilisations sur-mesure, vous disposez de plus de marge — à condition de toujours pouvoir tracer la source de chaque information.",
      },
    ],
  },

  "proteger-alerter-secourir-pas-comment-bien-reagir": {
    title: "Protéger, Alerter, Secourir (PAS) : comment bien réagir face à un accident",
    excerpt:
      "Face à une situation d'urgence, trois étapes structurent l'action : protéger, alerter, secourir. La méthode PAS est la clé de voûte de toutes les formations aux premiers secours.",
    publishedAt: "2026-03-22",
    category: "Secourisme",
    readingTime: 5,
    image: "/formations/formation-gqs-gestes-qui-sauvent.jpg",
    content: [
      {
        type: "p",
        text: "Face à un accident, le premier réflexe n'est pas de toucher la victime. C'est de structurer son intervention. La méthode PAS — Protéger, Alerter, Secourir — guide pas à pas le témoin pour ne pas aggraver la situation et donner aux secours les meilleures chances d'agir.",
      },
      { type: "h2", text: "P comme Protéger" },
      {
        type: "p",
        text: "Avant tout, supprimer ou isoler le danger qui a causé l'accident, pour éviter une suraccident. Pas question de se précipiter sur une victime électrocutée sans avoir coupé le courant.",
      },
      {
        type: "ul",
        items: [
          "Identifier le danger persistant (électricité, machine, circulation, fumées, produits chimiques)",
          "Le supprimer si possible (disjoncteur, arrêt d'urgence, balisage)",
          "À défaut, soustraire la victime au danger uniquement si on peut le faire en sécurité",
          "Protéger les autres personnes présentes (témoins, collègues, public)",
        ],
      },
      { type: "h2", text: "A comme Alerter" },
      {
        type: "p",
        text: "Alerter les secours, c'est mobiliser une chaîne professionnelle. Pour qu'elle soit efficace, l'appel doit être structuré.",
      },
      { type: "h3", text: "Les numéros à connaître" },
      {
        type: "ul",
        items: [
          "15 — SAMU (urgences médicales)",
          "18 — Sapeurs-pompiers (secours, incendie, accident)",
          "17 — Police / Gendarmerie",
          "112 — Numéro européen, regroupe tous les services",
          "114 — Numéro pour personnes sourdes ou malentendantes (SMS / fax)",
        ],
      },
      { type: "h3", text: "Les informations à transmettre" },
      {
        type: "ul",
        items: [
          "Le lieu précis (adresse, étage, accès, repères visuels)",
          "La nature de l'accident (chute, brûlure, malaise…)",
          "Le nombre et l'état des victimes",
          "Les risques persistants (incendie, fuite, circulation)",
          "Votre numéro de téléphone pour rappel",
        ],
      },
      {
        type: "p",
        text: "Ne raccrochez jamais le premier. Le régulateur peut vous guider sur les gestes à effectuer en attendant l'arrivée des secours.",
      },
      { type: "h2", text: "S comme Secourir" },
      {
        type: "p",
        text: "Une fois la zone sécurisée et les secours alertés, vous pouvez agir auprès de la victime — dans la limite de vos compétences. Les gestes dépendent de l'état observé : victime consciente qui se plaint, inconsciente qui respire, en arrêt cardio-respiratoire, hémorragie, brûlure, etc.",
      },
      {
        type: "quote",
        text: "Le rôle du témoin n'est pas de soigner. C'est de gagner du temps — celui qui permettra aux professionnels de prendre le relais dans les meilleures conditions.",
      },
      { type: "h2", text: "Pourquoi cet ordre ?" },
      {
        type: "p",
        text: "L'ordre n'est pas anodin. Protéger en premier évite de créer une seconde victime (vous). Alerter ensuite déclenche la chaîne des secours en parallèle de votre intervention. Secourir en dernier garantit que les renforts professionnels sont déjà en route si la situation se dégrade.",
      },
      {
        type: "p",
        text: "Cette méthode constitue la colonne vertébrale des formations SST, PSC, GQS et AFGSU. La connaître, c'est s'équiper d'un cadre mental clair pour ne pas paniquer le jour où ça arrive.",
      },
    ],
  },

  "appels-durgence-les-reflexes-essentiels": {
    title: "Appels d'urgence : les réflexes essentiels",
    excerpt:
      "Un bon appel d'urgence peut faire gagner de précieuses minutes. Quel numéro composer ? Quelles informations donner ? Comment répondre au régulateur ? Tour d'horizon des bons réflexes.",
    publishedAt: "2026-03-05",
    category: "Secourisme",
    readingTime: 4,
    image: "/images/articles/appels-urgence.jpg",
    content: [
      {
        type: "p",
        text: "Composer un numéro d'urgence n'est pas un geste anodin. La qualité de votre appel conditionne la rapidité et l'adaptation des secours. Voici les réflexes qui structurent un appel efficace, que vous soyez témoin d'un accident, victime d'un malaise ou confronté à un départ de feu.",
      },
      { type: "h2", text: "Le bon numéro selon la situation" },
      {
        type: "ul",
        items: [
          "15 — SAMU : urgence médicale, malaise, accident avec blessé",
          "18 — Sapeurs-pompiers : incendie, accident, secours à personne",
          "17 — Police / Gendarmerie : agression, vol, accident de la route avec litige",
          "112 — Numéro européen : valable partout en Europe, redirige vers le bon service",
          "114 — Pour les sourds, malentendants et personnes en situation d'aphasie (par SMS, fax ou tchat)",
          "115 — SAMU social : sans-abri, urgence sociale",
          "119 — Allô enfance en danger",
          "191 — Recherche et sauvetage en mer (CROSS)",
        ],
      },
      { type: "h2", text: "Avant de composer : trois secondes de cadrage" },
      {
        type: "p",
        text: "Avant d'appeler, prenez trois secondes pour identifier ce que vous allez dire. Le régulateur a besoin d'informations claires, pas d'un récit confus. Un appel structuré dure souvent moins d'une minute, alors qu'un appel paniqué peut s'étirer faute de clarté.",
      },
      { type: "h2", text: "Les six informations clés à transmettre" },
      {
        type: "ul",
        items: [
          "Qui appelle (votre nom, votre rôle si pertinent)",
          "D'où vous appelez (adresse complète, étage, accès, point de repère visuel)",
          "Ce qui se passe (nature de l'événement)",
          "Combien de victimes et leur état (conscientes, respirent, hémorragie)",
          "Les risques persistants (feu, fuite, électricité, circulation)",
          "Votre numéro de rappel",
        ],
      },
      { type: "h2", text: "Pendant l'appel : se laisser guider" },
      {
        type: "p",
        text: "Le régulateur (médecin au 15, opérateur formé au 18) va vous poser des questions précises. Répondez calmement, sans embellir ni minimiser. Si la victime est consciente, le régulateur peut vous demander de poser des questions directement.",
      },
      {
        type: "p",
        text: "En cas d'arrêt cardio-respiratoire, le régulateur peut vous guider à distance pour réaliser les compressions thoraciques. Suivez ses consignes mot à mot.",
      },
      { type: "h2", text: "Ne raccrochez pas en premier" },
      {
        type: "p",
        text: "C'est le régulateur qui met fin à l'appel, jamais vous. Il peut avoir besoin de précisions, ou vous demander de rester en ligne jusqu'à l'arrivée des secours. Mettez votre téléphone sur haut-parleur pour avoir les mains libres pendant cette période.",
      },
      {
        type: "quote",
        text: "Un appel calme et structuré vaut plus que vingt minutes de tergiversations. Les secours partent dès qu'ils ont l'adresse et la nature du problème.",
      },
      { type: "h2", text: "Et après ?" },
      {
        type: "p",
        text: "Restez sur place. Allez à la rencontre des secours pour les guider (porte d'entrée, ascenseur, étage). Mettez à disposition les documents utiles si vous les avez : ordonnance, carte vitale, antécédents médicaux. Et si vous êtes témoin sans connaître la victime, restez disponible pour répondre aux questions des secouristes.",
      },
    ],
  },

  "le-112-tout-savoir-sur-le-numero-durgence-et-de-secours-europeen": {
    title: "Le 112 : tout savoir sur le numéro d'urgence et de secours européen",
    excerpt:
      "Le 112 est gratuit, accessible 24h/24, fonctionne dans toute l'Europe et sans crédit téléphonique. Pourquoi ce numéro est devenu incontournable et comment l'utiliser efficacement.",
    publishedAt: "2026-02-18",
    category: "Secourisme",
    readingTime: 4,
    image: "/formations/formation-psc-premiers-secours-citoyen.jpg",
    content: [
      {
        type: "p",
        text: "En cas d'urgence en France, on pense d'abord au 15 (SAMU), au 18 (Pompiers) ou au 17 (Police). Mais il existe un numéro unique qui regroupe tous les services : le 112. Universel à l'échelle européenne, il présente des spécificités utiles à connaître.",
      },
      { type: "h2", text: "Le 112, c'est quoi exactement ?" },
      {
        type: "p",
        text: "Le 112 est le numéro d'appel d'urgence unique européen, instauré par une directive de 1991. Il fonctionne dans les 27 États membres de l'Union européenne, ainsi qu'en Suisse, en Norvège, en Islande et dans de nombreux autres pays. Vous le composez, on vous redirige vers le service le plus pertinent : police, pompiers, ambulance.",
      },
      { type: "h2", text: "Les avantages du 112" },
      {
        type: "ul",
        items: [
          "Gratuit depuis tout téléphone fixe ou mobile",
          "Accessible 24h/24, 7j/7",
          "Fonctionne sans crédit téléphonique ni carte SIM",
          "Joignable même si votre téléphone est verrouillé",
          "Géolocalisation automatique de l'appelant (AML — Advanced Mobile Location)",
          "Disponible dans plusieurs langues selon le pays",
        ],
      },
      {
        type: "quote",
        text: "Si vous êtes à l'étranger et que vous ne connaissez pas les numéros locaux : composez le 112. Ça fonctionnera partout en Europe.",
      },
      { type: "h2", text: "112 ou 15 / 18 / 17 : lequel composer en France ?" },
      {
        type: "p",
        text: "Sur le territoire français, les numéros spécialisés (15, 17, 18) restent en vigueur et restent souvent plus rapides : vous tombez directement sur le bon régulateur. Le 112 est particulièrement recommandé quand vous ne savez pas quel service appeler, quand vous êtes en zone frontalière ou quand vous appelez d'un téléphone sans abonnement actif.",
      },
      { type: "h2", text: "Que dire au 112 ?" },
      {
        type: "p",
        text: "Les mêmes informations que pour les autres numéros d'urgence : qui appelle, d'où, ce qui se passe, combien de victimes, leur état. L'opérateur vous redirige ensuite vers le service compétent — police, pompiers, SAMU — ou prend lui-même en charge votre demande.",
      },
      { type: "h2", text: "Le saviez-vous ?" },
      {
        type: "ul",
        items: [
          "Le 11 février est la journée européenne du 112",
          "En France, près de 30 millions d'appels d'urgence sont reçus chaque année",
          "Un tiers seraient des appels abusifs ou non motivés — proscrits par la loi",
          "Un appel volontaire malveillant peut coûter jusqu'à 30 000 € d'amende et 2 ans de prison",
        ],
      },
      { type: "h2", text: "112 et 114 : ne pas confondre" },
      {
        type: "p",
        text: "Le 114 est le numéro d'urgence dédié aux personnes sourdes, malentendantes ou en situation d'aphasie. Joignable par SMS, fax ou tchat sur urgence114.fr, il complète le dispositif du 112 pour garantir l'accès aux secours à tous.",
      },
    ],
  },

  "comment-faire-une-bonne-pls-tout-savoir-sur-la-position-laterale-de-securite": {
    title: "Comment faire une PLS ? Tout savoir sur la position latérale de sécurité",
    excerpt:
      "Face à une personne inconsciente qui respire, la PLS protège les voies aériennes en attendant les secours. Étapes, indications, précautions : le guide complet.",
    publishedAt: "2026-02-04",
    category: "Secourisme",
    readingTime: 5,
    image: "/formations/formation-recyclage-psc.jpg",
    content: [
      {
        type: "p",
        text: "La position latérale de sécurité (PLS) est l'un des gestes les plus emblématiques des premiers secours. Simple en apparence, elle peut sauver une vie en empêchant une victime inconsciente de s'étouffer avec sa propre langue ou ses vomissements.",
      },
      { type: "h2", text: "Quand mettre une victime en PLS ?" },
      {
        type: "p",
        text: "La PLS s'applique à une victime inconsciente qui respire normalement. Trois conditions doivent être réunies avant tout geste :",
      },
      {
        type: "ul",
        items: [
          "La victime ne répond pas (elle ne réagit pas à la parole ni aux stimulations)",
          "Elle respire (vous percevez le mouvement du thorax et le souffle pendant 10 secondes d'observation)",
          "Vous avez sécurisé la zone et alerté les secours",
        ],
      },
      {
        type: "p",
        text: "Si la victime ne respire pas, ce n'est pas la PLS qu'il faut faire, mais une réanimation cardio-pulmonaire (RCP) avec compressions thoraciques.",
      },
      { type: "h2", text: "Les étapes de la PLS chez l'adulte" },
      {
        type: "ul",
        items: [
          "Allonger la victime sur le dos, jambes tendues",
          "Placer le bras le plus proche de vous à angle droit, paume vers le haut",
          "Replier l'autre bras sur la poitrine, main contre la joue côté secouriste",
          "Saisir la jambe la plus éloignée, plier le genou en gardant le pied au sol",
          "Faire basculer la victime vers vous en tirant sur le genou",
          "Stabiliser la position : genou plié à angle droit, tête en arrière, bouche tournée vers le sol",
          "Surveiller la respiration jusqu'à l'arrivée des secours",
        ],
      },
      { type: "h2", text: "Cas particuliers" },
      { type: "h3", text: "Femme enceinte" },
      {
        type: "p",
        text: "La PLS se fait toujours sur le côté gauche, pour éviter que l'utérus ne comprime la veine cave inférieure et perturbe le retour veineux vers le cœur.",
      },
      { type: "h3", text: "Nourrisson de moins d'un an" },
      {
        type: "p",
        text: "On ne pratique pas la PLS classique. On garde le nourrisson sur le dos, en surveillant respiration et coloration, et on alerte immédiatement les secours.",
      },
      { type: "h3", text: "Victime suspectée de traumatisme du rachis" },
      {
        type: "p",
        text: "Le moins de mobilisation possible. La PLS reste préférable à un risque d'inhalation, mais elle doit être réalisée en gardant tête, cou et tronc dans l'axe — idéalement à plusieurs personnes.",
      },
      {
        type: "quote",
        text: "Mieux vaut une PLS imparfaite qu'une victime inconsciente laissée sur le dos. L'objectif est de libérer les voies aériennes : tout positionnement qui le permet est utile.",
      },
      { type: "h2", text: "Après la PLS" },
      {
        type: "p",
        text: "Couvrir la victime pour limiter le refroidissement, parler-lui (l'audition est le dernier sens à disparaître), et surveiller la respiration en continu. Si elle s'arrête, repositionner sur le dos et démarrer la RCP.",
      },
    ],
  },

  "est-ce-quun-sst-ou-une-entreprise-peut-transporter-une-victime-a-lhopital": {
    title:
      "Est-ce qu'un SST ou une entreprise peut transporter une victime à l'hôpital ?",
    excerpt:
      "La tentation est forte, mais transporter une victime soi-même peut aggraver son état et engager la responsabilité de l'entreprise. Ce que dit la loi et la bonne conduite à tenir.",
    publishedAt: "2026-01-21",
    category: "Secourisme",
    readingTime: 4,
    image: "/images/articles/transport-victime.jpg",
    content: [
      {
        type: "p",
        text: "Un salarié se blesse au travail. Le Sauveteur Secouriste du Travail intervient, stabilise la situation, et la question se pose : et si on l'emmenait directement à l'hôpital, avec sa voiture personnelle ou un véhicule de service ? Mauvaise idée — sauf cas très particulier.",
      },
      { type: "h2", text: "La règle de principe : on n'emmène pas, on appelle" },
      {
        type: "p",
        text: "Face à un accident du travail nécessitant une prise en charge médicale, la règle est d'appeler les secours (15 ou 112). Le rôle du SST s'arrête à la mise en sécurité, l'alerte et les premiers gestes en attendant les professionnels.",
      },
      {
        type: "p",
        text: "Pourquoi ? Parce que le transport d'une victime — même apparemment légèrement blessée — peut aggraver son état (hémorragie interne non détectée, traumatisme du rachis, malaise cardiaque…) et compliquer la prise en charge médicale.",
      },
      { type: "h2", text: "Les risques d'un transport sauvage" },
      {
        type: "ul",
        items: [
          "Aggravation des lésions par les manipulations ou les vibrations du véhicule",
          "Retard de prise en charge si l'hôpital choisi n'est pas adapté (urgences vs SOS mains, par exemple)",
          "Absence de soins en route en cas de dégradation rapide de l'état",
          "Responsabilité juridique de l'entreprise et du conducteur en cas d'aggravation",
          "Couverture assurantielle complexe si l'accident survient pendant le trajet",
        ],
      },
      { type: "h2", text: "Que dit la jurisprudence ?" },
      {
        type: "p",
        text: "La Cour de cassation a déjà retenu la faute inexcusable de l'employeur dans des cas où une victime avait été transportée par un collègue ou un véhicule de service, sans que les secours aient été appelés. L'absence d'appel au 15 ou au 18 peut constituer un manquement à l'obligation de sécurité.",
      },
      {
        type: "quote",
        text: "En cas de doute, on appelle. Le régulateur du 15 décide si une ambulance est nécessaire, ou si la victime peut se rendre par ses propres moyens à un médecin.",
      },
      { type: "h2", text: "Les exceptions" },
      {
        type: "p",
        text: "Il existe des situations où un transport par véhicule personnel peut être envisagé, mais toujours après contact avec le 15 :",
      },
      {
        type: "ul",
        items: [
          "Blessure légère, victime parfaitement consciente et stable, pas de risque évolutif",
          "Régulateur du 15 qui autorise explicitement le transport par moyen personnel vers un médecin ou des urgences proches",
          "Trajet court, conducteur tiers (pas la victime elle-même), véhicule adapté",
        ],
      },
      { type: "h2", text: "Le cas du transport par ambulance privée" },
      {
        type: "p",
        text: "Si l'entreprise dispose d'un partenariat avec une ambulance privée, son intervention reste subordonnée à la régulation du 15. C'est le SAMU qui oriente la victime vers la structure adaptée — pas l'employeur ou le médecin du travail seul.",
      },
      { type: "h2", text: "Le bon réflexe SST" },
      {
        type: "p",
        text: "Appeler le 15. Décrire précisément la situation. Suivre les consignes du régulateur. Rester auprès de la victime. Documenter l'accident pour la déclaration ultérieure. C'est ce cadre clair qui protège la victime, l'employeur et le SST lui-même.",
      },
    ],
  },

  "extincteurs-guide-essentiel-pour-bien-les-utiliser": {
    title: "Extincteurs : guide essentiel pour bien les utiliser",
    excerpt:
      "Eau, poudre, CO₂, mousse : tous les extincteurs ne se valent pas selon le type de feu. Comment choisir, manipuler et entretenir son extincteur — l'essentiel à retenir.",
    publishedAt: "2026-01-08",
    category: "Sécurité incendie",
    readingTime: 5,
    image: "/formations/formation-manipulation-extincteur.jpg",
    content: [
      {
        type: "p",
        text: "L'extincteur portatif est la première ligne de défense contre un départ de feu. Encore faut-il savoir lequel utiliser, comment, et dans quelles limites. Mal utilisé, un extincteur peut aggraver l'incendie ou exposer l'utilisateur à des risques graves.",
      },
      { type: "h2", text: "Les cinq classes de feux" },
      {
        type: "p",
        text: "Avant de manipuler un extincteur, il faut savoir à quoi on a affaire. La norme NF EN 2 classe les feux selon leur combustible :",
      },
      {
        type: "ul",
        items: [
          "Classe A — Feux secs : bois, papier, carton, tissus, plastiques",
          "Classe B — Feux gras : hydrocarbures, essence, solvants, peintures",
          "Classe C — Feux de gaz : butane, propane, méthane",
          "Classe D — Feux de métaux : magnésium, sodium, aluminium en poudre",
          "Classe F — Feux d'huiles et graisses de cuisine (friteuses)",
        ],
      },
      { type: "h2", text: "Les types d'extincteurs et leurs usages" },
      { type: "h3", text: "Extincteur à eau pulvérisée (avec ou sans additif)" },
      {
        type: "p",
        text: "Adapté aux feux de classe A, et avec additif AFFF aux classes A et B. Polyvalent dans les bureaux, écoles, ERP courants. Interdit sur les feux d'origine électrique.",
      },
      { type: "h3", text: "Extincteur à poudre ABC ou BC" },
      {
        type: "p",
        text: "Polyvalent classes A, B et C (poudre ABC). Très efficace mais salissant : il provoque des dégâts collatéraux importants. À privilégier dans les zones de stockage, parkings, ateliers.",
      },
      { type: "h3", text: "Extincteur CO₂ (dioxyde de carbone)" },
      {
        type: "p",
        text: "Idéal pour les feux d'origine électrique et les locaux contenant du matériel sensible (informatique, électronique). Pas de résidu après extinction. Attention au risque d'asphyxie en milieu confiné.",
      },
      { type: "h3", text: "Extincteur à mousse" },
      {
        type: "p",
        text: "Performant sur les classes A et B, particulièrement sur les feux de liquides. Présent dans les stations-service, ateliers, lieux à risque hydrocarbures.",
      },
      { type: "h2", text: "La méthode d'utilisation : DEFI" },
      {
        type: "ul",
        items: [
          "D — Dégoupiller : retirer la goupille de sécurité",
          "E — Essayer : test à un mètre du sol, dans une direction sûre",
          "F — Foncer : avancer vers le foyer, sans courir",
          "I — Insister : viser la base des flammes, balayer de gauche à droite",
        ],
      },
      {
        type: "quote",
        text: "On combat un feu de moins de 1 m². Au-delà, on évacue et on appelle les pompiers. Un extincteur portatif a entre 6 et 12 secondes d'autonomie effective.",
      },
      { type: "h2", text: "Implantation et entretien" },
      {
        type: "p",
        text: "La réglementation impose un extincteur à eau pulvérisée de 6 litres minimum pour 200 m² de plancher, complété par des extincteurs adaptés aux risques spécifiques. Visibles, accessibles, signalés et à moins de 15 mètres de chaque poste de travail.",
      },
      {
        type: "p",
        text: "Vérification annuelle obligatoire par un organisme habilité, maintenance complète tous les 10 ans (épreuve hydraulique), formation des salariés à la manipulation : l'extincteur n'est utile que s'il est prêt et si l'on sait s'en servir.",
      },
    ],
  },

  "securite-incendie-guide-et-procedure-pour-utiliser-un-ria-robinet-dincendie-arme": {
    title:
      "Sécurité incendie : guide et procédure pour utiliser un RIA (Robinet d'Incendie Armé)",
    excerpt:
      "Le RIA est un moyen de lutte de seconde intervention contre l'incendie. À quoi sert-il, comment l'utiliser et qui peut le manipuler ? Les essentiels à connaître.",
    publishedAt: "2025-12-15",
    category: "Sécurité incendie",
    readingTime: 5,
    image: "/formations/formation-incendie-en-entreprise.jpg",
    content: [
      {
        type: "p",
        text: "Là où l'extincteur permet d'agir sur un départ de feu naissant, le RIA — Robinet d'Incendie Armé — autorise une action prolongée sur un foyer plus développé. Présent dans la plupart des ERP, IGH et établissements industriels, il reste pourtant souvent mal connu des salariés.",
      },
      { type: "h2", text: "Qu'est-ce qu'un RIA ?" },
      {
        type: "p",
        text: "Le RIA est un dispositif fixe de lutte contre l'incendie, raccordé en permanence au réseau d'eau sous pression. Il comprend un tuyau semi-rigide enroulé sur un dévidoir, une lance à jet réglable et une vanne d'arrêt. Conforme à la norme NF EN 671-1, il délivre un débit minimum de 35 litres par minute sous une pression d'au moins 2 bars.",
      },
      { type: "h2", text: "RIA et extincteur : ne pas confondre" },
      {
        type: "ul",
        items: [
          "L'extincteur est un moyen de PREMIÈRE intervention : départ de feu de moins de 1 m²",
          "Le RIA est un moyen de SECONDE intervention : feu plus développé, action prolongée",
          "L'extincteur s'épuise en 6 à 12 secondes ; le RIA permet une action de plusieurs minutes",
          "L'extincteur peut être manipulé par tout salarié formé ; le RIA suppose une formation spécifique (ESI)",
        ],
      },
      { type: "h2", text: "Procédure d'utilisation" },
      {
        type: "ul",
        items: [
          "Sortir le tuyau sur toute sa longueur (essentiel pour éviter qu'il ne se plie)",
          "Ouvrir la vanne d'arrêt pour mettre la lance en eau",
          "Régler la lance sur diffusion (cône protecteur) avant de s'approcher",
          "Avancer en se protégeant derrière le cône, sans courir",
          "À 3-4 mètres du foyer, passer en jet plein si nécessaire pour attaquer la base des flammes",
          "Refermer la vanne avant de relâcher la lance après usage",
        ],
      },
      { type: "h2", text: "Qui peut utiliser un RIA ?" },
      {
        type: "p",
        text: "Seuls les Équipiers de Seconde Intervention (ESI) formés peuvent manipuler un RIA. La formation aborde l'hydraulique de base, le risque électrique (couper le courant avant intervention), les techniques de progression et de repli, et la coordination en équipe.",
      },
      {
        type: "quote",
        text: "Un RIA mis en œuvre par une personne non formée n'est pas un secours : c'est un facteur d'aggravation. Mauvais débit, mauvais réglage, mauvais positionnement — et le feu peut s'en trouver renforcé.",
      },
      { type: "h2", text: "Précautions et limites" },
      {
        type: "ul",
        items: [
          "Couper l'alimentation électrique avant toute intervention sur un feu d'origine électrique",
          "Ne jamais intervenir seul : binôme minimum",
          "Surveiller son issue de repli en permanence",
          "Évacuer dès que le feu prend de l'ampleur ou que la fumée gêne la respiration",
          "Laisser les pompiers prendre le relais à leur arrivée",
        ],
      },
      { type: "h2", text: "Vérification et entretien" },
      {
        type: "p",
        text: "Les RIA font l'objet d'une vérification annuelle par un organisme habilité (norme NF S 61-919) : intégrité du tuyau, pression, débit, état du dévidoir, signalisation. Le registre de sécurité doit mentionner chaque contrôle.",
      },
    ],
  },

  "formation-epi-et-esi-tout-savoir-sur-ces-formations-incendie-guide-complet": {
    title:
      "Formation EPI et ESI : tout savoir sur ces formations incendie",
    excerpt:
      "Équipiers de Première Intervention, Équipiers de Seconde Intervention : deux niveaux complémentaires pour structurer la réponse interne à un départ de feu. Tour d'horizon.",
    publishedAt: "2025-11-28",
    category: "Sécurité incendie",
    readingTime: 6,
    image: "/formations/formation-equipier-de-premiere-intervention.jpg",
    content: [
      {
        type: "p",
        text: "Toute entreprise doit pouvoir réagir à un départ de feu avant l'arrivée des secours extérieurs. Deux dispositifs structurent cette réponse interne : les Équipiers de Première Intervention (EPI) et les Équipiers de Seconde Intervention (ESI). Comprendre ce qui les distingue, c'est s'assurer une organisation efficace.",
      },
      { type: "h2", text: "Pourquoi former des équipiers incendie ?" },
      {
        type: "p",
        text: "Le Code du travail (article R.4227-39) impose à l'employeur de prendre les mesures nécessaires pour que tout commencement d'incendie soit combattu rapidement et efficacement. Les EPI et ESI sont la déclinaison opérationnelle de cette obligation, complétée par la formation de tous les salariés à la manipulation d'un extincteur.",
      },
      { type: "h2", text: "Les EPI — Équipiers de Première Intervention" },
      {
        type: "p",
        text: "L'EPI est le premier maillon : un salarié formé à intervenir sur un départ de feu, avec les moyens de proximité (extincteur), avant que la situation ne s'aggrave. Sa formation dure 3 à 4 heures et combine théorie et exercices pratiques sur feux réels.",
      },
      { type: "h3", text: "Compétences acquises" },
      {
        type: "ul",
        items: [
          "Reconnaître les classes de feu et choisir l'extincteur adapté",
          "Donner l'alerte interne et externe selon la procédure de l'établissement",
          "Manipuler un extincteur (CO₂, eau, poudre) sur foyer réel",
          "Évacuer si la situation dépasse les moyens disponibles",
          "Connaître les consignes propres à son établissement",
        ],
      },
      { type: "h2", text: "Les ESI — Équipiers de Seconde Intervention" },
      {
        type: "p",
        text: "L'ESI prend le relais quand le feu dépasse les capacités d'une action individuelle. Formé sur 2 jours minimum, il intervient en équipe avec des moyens plus lourds : RIA, équipement de protection individuelle incendie, parfois ARI (Appareil Respiratoire Isolant).",
      },
      { type: "h3", text: "Compétences acquises" },
      {
        type: "ul",
        items: [
          "Utilisation d'un RIA en binôme",
          "Reconnaissance des risques liés à l'incendie (chaleur, fumées, gaz toxiques)",
          "Progression et repli dans un environnement enfumé",
          "Coordination en équipe et communication radio",
          "Transmission au commandement opérationnel à l'arrivée des secours publics",
        ],
      },
      { type: "h2", text: "Combien d'EPI et d'ESI dans une entreprise ?" },
      {
        type: "p",
        text: "Il n'existe pas de quota légal universel. La détermination du nombre d'équipiers découle de l'évaluation des risques (DUERP), de la configuration des locaux et du type d'activité. Quelques repères courants :",
      },
      {
        type: "ul",
        items: [
          "Au minimum 10 % de l'effectif formé EPI dans les ERP, avec présence permanente garantie",
          "Pour les IGH et certains établissements industriels, une équipe ESI permanente est obligatoire",
          "L'organisation doit prévoir absences, congés et travail posté pour garantir une présence en tout temps",
        ],
      },
      {
        type: "quote",
        text: "Une équipe d'EPI sans formation pratique régulière vaut moins qu'une absence d'équipe : elle crée un faux sentiment de sécurité.",
      },
      { type: "h2", text: "Recyclage et entretien des compétences" },
      {
        type: "p",
        text: "Un recyclage est fortement recommandé tous les 12 mois pour les EPI et tous les 6 à 12 mois pour les ESI, avec exercices pratiques sur foyer réel et mises en situation. C'est aussi l'occasion de vérifier que l'organisation interne (alarmes, points de rassemblement, consignes) reste à jour.",
      },
    ],
  },

  "quest-ce-que-le-sprinkler-comment-fonctionne-le-sprinklage": {
    title: "Qu'est-ce que le sprinkler ? Comment fonctionne le sprinklage ?",
    excerpt:
      "Le sprinkler est un système automatique d'extinction par eau, omniprésent dans les entrepôts et les ERP. Principe, déclenchement, idées reçues : le décryptage complet.",
    publishedAt: "2025-11-12",
    category: "Sécurité incendie",
    readingTime: 5,
    image: "/formations/formation-ssi-systeme-de-securite-incendie.jpg",
    content: [
      {
        type: "p",
        text: "Visibles au plafond des entrepôts, parkings ou centres commerciaux, les sprinklers (ou \"sprinkleurs\" en français) sont les têtes diffusantes d'un système d'extinction automatique. Leur efficacité est massive : selon les statistiques de la NFPA, plus de 96 % des incendies sont éteints ou contrôlés par les sprinklers seuls, sans intervention humaine.",
      },
      { type: "h2", text: "Le principe du sprinklage" },
      {
        type: "p",
        text: "Un système sprinkler est un réseau de canalisations sous pression alimenté en eau (ou en eau + gaz dans certains cas). Au bout du réseau, des têtes diffusantes équipées d'une ampoule thermosensible — généralement remplie d'un liquide coloré qui éclate à une température définie (57°C, 68°C, 79°C selon les modèles).",
      },
      {
        type: "p",
        text: "Quand la chaleur d'un incendie atteint le seuil de l'ampoule, celle-ci éclate, libère l'eau du réseau et la diffuse en pluie fine sur la zone. La pression et le débit sont calculés pour étouffer le feu à sa source.",
      },
      { type: "h2", text: "Idée reçue n°1 : tous les sprinklers se déclenchent en même temps" },
      {
        type: "p",
        text: "Faux. Seuls les sprinklers exposés à une chaleur suffisante se déclenchent. Le reste du réseau reste sec et inactif. Les films catastrophe ont popularisé l'image d'une douche générale, mais ce n'est jamais le cas dans la réalité.",
      },
      { type: "h2", text: "Idée reçue n°2 : la fumée déclenche les sprinklers" },
      {
        type: "p",
        text: "Faux. Seule la chaleur déclenche la tête : la fumée n'a aucun effet sur l'ampoule thermosensible. C'est d'ailleurs ce qui permet d'avoir des sprinklers dans des cuisines ou des chaufferies sans déclenchements intempestifs.",
      },
      { type: "h2", text: "Les différents types de systèmes" },
      {
        type: "ul",
        items: [
          "Sous eau (\"wet pipe\") : réseau toujours en eau, déclenchement immédiat — usage le plus courant",
          "Sous air (\"dry pipe\") : réseau sous air comprimé, l'eau arrive après ouverture — pour les zones soumises au gel",
          "Pré-action : double sécurité, l'eau n'arrive qu'après détection ET ouverture d'une tête — locaux à haute valeur (data centers, archives)",
          "Déluge : toutes les têtes s'ouvrent simultanément après déclenchement — risques industriels graves",
        ],
      },
      { type: "h2", text: "Réglementation et obligations" },
      {
        type: "p",
        text: "Le sprinklage est rendu obligatoire par diverses réglementations : règlement ERP pour certains types et catégories, IGH, ICPE, codes assureurs (APSAD règle R1). Les installations doivent être conçues, installées et entretenues selon des référentiels précis (NF EN 12845 en Europe, règle R1 de l'APSAD en France).",
      },
      {
        type: "quote",
        text: "Le sprinklage n'éteint pas tous les feux, mais il les contient le temps que les secours arrivent. Un bâtiment correctement sprinklé voit ses dégâts incendie divisés par 5 à 10 en moyenne.",
      },
      { type: "h2", text: "Maintenance et essais" },
      {
        type: "p",
        text: "Un système sprinkler nécessite des vérifications hebdomadaires (manomètres, alarmes), trimestrielles (vannes, débit) et annuelles complètes par un organisme agréé. Les rapports sont consignés dans le registre de sécurité.",
      },
    ],
  },

  "guide-complet-sur-la-methode-haccp-assurez-la-securite-alimentaire-en-7-etapes": {
    title:
      "Guide complet sur la méthode HACCP : la sécurité alimentaire en 7 étapes",
    excerpt:
      "Hazard Analysis Critical Control Point. La méthode HACCP structure la prévention des risques sanitaires dans toutes les activités liées à l'alimentation. Décryptage des 7 principes et de leur mise en œuvre.",
    publishedAt: "2025-10-25",
    category: "Hygiène alimentaire",
    readingTime: 6,
    image: "/formations/formation-hygiene-alimentaire-haccp.png",
    content: [
      {
        type: "p",
        text: "La méthode HACCP (Hazard Analysis Critical Control Point) est l'outil de référence mondial pour la maîtrise des risques sanitaires dans la chaîne alimentaire. Imposée par la réglementation européenne (Paquet hygiène, règlement CE 852/2004), elle structure la démarche de prévention de tout établissement qui manipule des denrées alimentaires.",
      },
      { type: "h2", text: "Qui est concerné par l'HACCP ?" },
      {
        type: "ul",
        items: [
          "Restaurants, cantines, restauration collective",
          "Métiers de bouche (boulangeries, boucheries, traiteurs, charcuteries)",
          "Industries agroalimentaires",
          "Grande et moyenne distribution (rayons frais)",
          "Crèches, EHPAD, hôpitaux pour la partie restauration",
        ],
      },
      {
        type: "p",
        text: "Au moins une personne formée à l'HACCP doit être présente dans chaque établissement de restauration commerciale, conformément au décret du 24 juin 2011.",
      },
      { type: "h2", text: "Les 7 principes HACCP" },
      { type: "h3", text: "1. Analyser les dangers" },
      {
        type: "p",
        text: "Identifier tous les dangers possibles à chaque étape (microbiologiques, chimiques, physiques, allergènes). Évaluer leur probabilité de survenue et leur gravité.",
      },
      { type: "h3", text: "2. Déterminer les Points Critiques de Contrôle (CCP)" },
      {
        type: "p",
        text: "Identifier les étapes où une maîtrise est essentielle pour prévenir, éliminer ou réduire un danger à un niveau acceptable (température de cuisson, refroidissement rapide, contrôle de réception).",
      },
      { type: "h3", text: "3. Fixer les seuils critiques" },
      {
        type: "p",
        text: "Pour chaque CCP, définir une limite mesurable et vérifiable (ex : cœur du produit à 63°C minimum à la cuisson, conservation positive à +3°C max).",
      },
      { type: "h3", text: "4. Surveiller les CCP" },
      {
        type: "p",
        text: "Mettre en place une surveillance régulière (relevés de température, contrôles visuels, traçabilité des lots) pour s'assurer que les seuils sont respectés.",
      },
      { type: "h3", text: "5. Définir les actions correctives" },
      {
        type: "p",
        text: "Prévoir à l'avance ce que l'on fait en cas de dérive : retraitement, destruction, déclassement du produit, ré-étalonnage du matériel.",
      },
      { type: "h3", text: "6. Vérifier le système" },
      {
        type: "p",
        text: "Audits internes, prélèvements microbiologiques, revue annuelle du plan HACCP. La vérification garantit que le système fonctionne comme prévu, dans la durée.",
      },
      { type: "h3", text: "7. Documenter" },
      {
        type: "p",
        text: "Procédures écrites, registres de contrôle, fiches de réception, plan de nettoyage, traçabilité : sans documentation, pas de preuve. Le Plan de Maîtrise Sanitaire (PMS) regroupe l'ensemble de cette documentation.",
      },
      {
        type: "quote",
        text: "L'HACCP n'est pas une formalité administrative. C'est une discipline quotidienne qui structure les gestes professionnels — du choix du fournisseur au service au client.",
      },
      { type: "h2", text: "Et la formation ?" },
      {
        type: "p",
        text: "La formation HACCP est obligatoire pour les acteurs de la restauration commerciale. D'une durée minimale de 14 heures, elle couvre les principes, la mise en œuvre du Plan de Maîtrise Sanitaire et les bonnes pratiques d'hygiène (BPH).",
      },
    ],
  },

  "le-plan-de-prevention-un-outil-essentiel-pour-la-securite-en-entreprise": {
    title:
      "Le plan de prévention : un outil essentiel pour la sécurité en entreprise",
    excerpt:
      "Quand une entreprise extérieure intervient dans vos locaux, le plan de prévention encadre les risques d'interférence. Décret 92-158, contenu obligatoire et bonnes pratiques.",
    publishedAt: "2025-10-08",
    category: "Réglementation",
    readingTime: 5,
    image: "/categories/prevention.jpg",
    content: [
      {
        type: "p",
        text: "Travaux de maintenance, opération de nettoyage industriel, chantier de rénovation : à chaque fois qu'une entreprise extérieure intervient dans une entreprise utilisatrice, des risques nouveaux apparaissent. Le plan de prévention est l'outil réglementaire qui les encadre.",
      },
      { type: "h2", text: "Le cadre réglementaire" },
      {
        type: "p",
        text: "Le plan de prévention découle du décret n° 92-158 du 20 février 1992 (codifié aux articles R.4511-1 à R.4515-11 du Code du travail). Il s'applique dès qu'une opération impliquant une ou plusieurs entreprises extérieures est réalisée dans une entreprise utilisatrice.",
      },
      { type: "h2", text: "Quand est-il obligatoire par écrit ?" },
      {
        type: "ul",
        items: [
          "Pour toute opération de plus de 400 heures de travail sur 12 mois",
          "Pour toute opération comportant des travaux dangereux figurant sur la liste de l'arrêté du 19 mars 1993, quelle que soit sa durée",
          "Travaux à risque chimique, explosion, électrocution, chute, amiante, en hauteur, en espace confiné — la liste est précise",
        ],
      },
      { type: "h2", text: "Le contenu obligatoire" },
      {
        type: "ul",
        items: [
          "Définition des phases d'activité dangereuses et des moyens de prévention spécifiques",
          "Adaptation des matériels, installations et dispositifs aux interventions",
          "Instructions à donner aux salariés (consignes, EPI, conduite à tenir)",
          "Organisation du commandement et coordination entre les entreprises",
          "Liste des postes occupés par les salariés susceptibles d'être exposés",
          "Conditions de l'examen périodique du plan",
        ],
      },
      { type: "h2", text: "Les étapes de mise en œuvre" },
      { type: "h3", text: "1. Inspection commune préalable" },
      {
        type: "p",
        text: "Avant le démarrage des travaux, l'entreprise utilisatrice et chaque entreprise extérieure réalisent une visite commune des lieux. Objectif : identifier les risques d'interférence et les conditions d'intervention.",
      },
      { type: "h3", text: "2. Analyse des risques d'interférence" },
      {
        type: "p",
        text: "Étape clé. Les risques propres à chaque entreprise sont connus. L'enjeu est d'identifier ceux qui résultent de la coexistence des activités : circulation engins, partage d'espaces, équipements communs.",
      },
      { type: "h3", text: "3. Rédaction du plan de prévention" },
      {
        type: "p",
        text: "Document écrit, signé par les chefs d'entreprise, daté et tenu à disposition de l'inspection du travail, des médecins du travail et du CSE.",
      },
      { type: "h3", text: "4. Information et formation des salariés" },
      {
        type: "p",
        text: "Chaque salarié intervenant doit être informé des risques, des consignes et des mesures de prévention spécifiques à l'opération.",
      },
      { type: "h3", text: "5. Suivi et mise à jour" },
      {
        type: "p",
        text: "Inspections périodiques, réunions de coordination, mise à jour à chaque évolution significative. Le plan n'est pas figé : il vit avec l'opération.",
      },
      {
        type: "quote",
        text: "Un plan de prévention signé puis oublié dans un classeur n'a aucune valeur — ni juridique, ni opérationnelle. Il vaut par sa mise en œuvre quotidienne et son actualisation.",
      },
      { type: "h2", text: "Plan de prévention ou PPSPS ?" },
      {
        type: "p",
        text: "Attention à ne pas confondre. Sur un chantier du BTP soumis à coordination SPS, c'est le Plan Particulier de Sécurité et de Protection de la Santé (PPSPS) qui s'applique, pas le plan de prévention. Le PPSPS répond à une logique différente (loi du 31 décembre 1993) et à un cadre spécifique au BTP.",
      },
    ],
  },

  "est-ce-que-le-defibrillateur-est-obligatoire-dans-les-entreprises": {
    title: "Est-ce que le défibrillateur est obligatoire dans les entreprises ?",
    excerpt:
      "Depuis la loi du 28 juin 2018, certains ERP doivent obligatoirement être équipés d'un Défibrillateur Automatisé Externe. Tour d'horizon de l'obligation, des catégories concernées et des bonnes pratiques.",
    publishedAt: "2025-09-20",
    category: "Secourisme",
    readingTime: 5,
    image: "/images/articles/defibrillateur-entreprise.jpg",
    content: [
      {
        type: "p",
        text: "Chaque année en France, environ 50 000 personnes sont victimes d'un arrêt cardiaque inopiné. Le défibrillateur, associé au massage cardiaque, permet de tripler les chances de survie. Depuis la loi du 28 juin 2018, son installation est devenue obligatoire dans de nombreux ERP.",
      },
      { type: "h2", text: "Le cadre légal" },
      {
        type: "p",
        text: "La loi n° 2018-527 du 28 juin 2018, complétée par le décret du 19 décembre 2018, impose l'installation d'un Défibrillateur Automatisé Externe (DAE) dans certains Établissements Recevant du Public (ERP), selon un calendrier qui s'est déployé entre 2020 et 2022.",
      },
      { type: "h2", text: "Les ERP concernés" },
      {
        type: "ul",
        items: [
          "ERP de catégorie 1, 2 et 3 (au-delà de 300 personnes) — depuis le 1ᵉʳ janvier 2020",
          "ERP de catégorie 4 (de 200 à 300 personnes) — depuis le 1ᵉʳ janvier 2021",
          "ERP de catégorie 5 spécifiques (structures d'accueil pour personnes âgées, handicapées, refuges de montagne, établissements sportifs clos avec public, gares, hôtels-restaurants en zone isolée) — depuis le 1ᵉʳ janvier 2022",
        ],
      },
      { type: "h2", text: "Et les entreprises non-ERP ?" },
      {
        type: "p",
        text: "Pour les entreprises classiques (bureaux, sites industriels, entrepôts non ouverts au public), l'installation d'un DAE n'est pas obligatoire. Mais le Code du travail (article L.4121-1) impose à l'employeur de prendre les mesures nécessaires pour protéger la santé de ses salariés. Dans une entreprise de plus de 50 salariés, ou avec des risques spécifiques (effort intense, chaleur, choc électrique), l'absence de DAE peut être questionnée.",
      },
      { type: "h2", text: "Les obligations associées" },
      {
        type: "ul",
        items: [
          "Maintenance et vérification annuelle par un organisme habilité",
          "Signalisation visible avec pictogramme normalisé",
          "Accès libre 24h/24 pour les DAE installés à l'extérieur ou en zone publique",
          "Déclaration sur la base de données nationale Géo'DAE (data.gouv.fr)",
        ],
      },
      { type: "h2", text: "Faut-il être formé pour utiliser un DAE ?" },
      {
        type: "p",
        text: "Non. Le DAE est conçu pour être utilisé par tout le monde, formé ou non. L'appareil analyse le rythme cardiaque, décide automatiquement si un choc est nécessaire, et guide vocalement l'utilisateur. La loi rend explicite qu'aucune compétence médicale n'est requise.",
      },
      {
        type: "quote",
        text: "L'usage d'un DAE par un non-soignant n'engage pas sa responsabilité civile, à condition d'agir dans un but de secours. Le Code de la santé publique le rappelle clairement.",
      },
      { type: "h2", text: "Combien coûte un DAE ?" },
      {
        type: "p",
        text: "Comptez 1 500 à 2 500 € pour un appareil d'entrée à milieu de gamme, avec un coût de maintenance annuel d'environ 100 à 200 € (remplacement des électrodes et batterie). L'investissement reste modeste au regard de l'enjeu — une vie potentiellement sauvée.",
      },
      { type: "h2", text: "Et la formation des salariés ?" },
      {
        type: "p",
        text: "Même si le DAE est utilisable sans formation, sensibiliser ses équipes aux gestes qui sauvent (GQS, PSC) et au massage cardiaque renforce massivement les chances de survie. Les formations SST intègrent systématiquement l'utilisation du DAE.",
      },
    ],
  },

  "que-doit-contenir-la-trousse-de-secours-dune-entreprise-materiel-utilise-par-le-sst": {
    title:
      "Que doit contenir la trousse de secours d'une entreprise ?",
    excerpt:
      "Pansements, compresses, désinfectant, couverture isothermique : la trousse de secours en entreprise n'est ni une pharmacie, ni un kit de premiers soins. Liste type et bonnes pratiques.",
    publishedAt: "2025-09-03",
    category: "Secourisme",
    readingTime: 4,
    image: "/formations/formation-mac-formateur-sst.jpg",
    content: [
      {
        type: "p",
        text: "Le Code du travail (article R.4224-14) impose que tout lieu de travail dispose du matériel de premiers secours adapté à la nature des risques. Mais il ne précise pas la composition exacte de la trousse — c'est au médecin du travail, en concertation avec l'employeur, de la définir.",
      },
      { type: "h2", text: "Le cadre réglementaire" },
      {
        type: "p",
        text: "La trousse de secours doit être facilement accessible, signalée, vérifiée régulièrement et adaptée aux risques spécifiques de l'entreprise. Sa localisation et son contenu figurent dans le DUERP et sont connus de tous les salariés, en particulier des SST.",
      },
      { type: "h2", text: "Liste type d'une trousse de secours en entreprise" },
      { type: "h3", text: "Soins de plaies et hémorragies" },
      {
        type: "ul",
        items: [
          "Pansements adhésifs de différentes tailles",
          "Compresses stériles individuelles",
          "Bandes extensibles",
          "Sparadrap hypoallergénique",
          "Antiseptique en unidose (chlorhexidine, pas d'alcool)",
          "Sérum physiologique en dosettes",
          "Gants en nitrile à usage unique",
          "Ciseaux à bouts ronds",
          "Pince à écharde",
        ],
      },
      { type: "h3", text: "Protection et confort" },
      {
        type: "ul",
        items: [
          "Couverture isothermique de survie",
          "Masque de bouche-à-bouche jetable",
          "Sacs poubelles pour évacuation des déchets souillés",
          "Lampe de poche",
        ],
      },
      { type: "h3", text: "Documents" },
      {
        type: "ul",
        items: [
          "Liste des numéros d'urgence",
          "Fiche de traçabilité des accidents",
          "Coordonnées du médecin du travail",
        ],
      },
      { type: "h2", text: "Ce qu'on ne met pas dans la trousse" },
      {
        type: "ul",
        items: [
          "Médicaments (paracétamol, aspirine, anti-inflammatoires) : leur usage relève du médical, pas du SST",
          "Coton hydrophile : laisse des fibres dans les plaies",
          "Pansements anti-douleur ou crèmes : automédication interdite",
          "Garrots tactiques sauf prescription médicale spécifique",
        ],
      },
      { type: "h2", text: "Adaptation aux risques spécifiques" },
      {
        type: "p",
        text: "Selon l'activité, des compléments sont indispensables :",
      },
      {
        type: "ul",
        items: [
          "Solution lave-œil pour les manipulations chimiques",
          "Hydrogel pour brûlures dans les ateliers, cuisines, soudures",
          "Couverture anti-feu en cuisine",
          "Set de premier soin spécifique pour chantiers BTP, isolés ou en hauteur",
        ],
      },
      {
        type: "quote",
        text: "La trousse de secours n'est pas une pharmacie. C'est un outil de stabilisation de la victime en attendant les secours — pas un substitut à un appel au 15.",
      },
      { type: "h2", text: "Maintenance" },
      {
        type: "p",
        text: "Inventaire mensuel, contrôle des dates de péremption tous les 6 mois, remise à niveau systématique après usage. Une trousse à moitié vide ou périmée vaut moins qu'une absence de trousse — elle crée un faux sentiment de sécurité.",
      },
    ],
  },

  "quels-sont-les-signes-dune-crise-cardiaque-reconnaitre-un-infarctus": {
    title: "Quels sont les signes d'une crise cardiaque ? Reconnaître un infarctus",
    excerpt:
      "Douleur thoracique, essoufflement, sueurs froides : reconnaître un infarctus à temps peut sauver une vie. Les signes typiques, les présentations atypiques et la conduite à tenir.",
    publishedAt: "2025-08-20",
    category: "Secourisme",
    readingTime: 5,
    image: "/images/articles/crise-cardiaque.jpg",
    content: [
      {
        type: "p",
        text: "L'infarctus du myocarde tue plus de 18 000 personnes par an en France. Pourtant, dans plus de la moitié des cas, des signes annonciateurs ont été présents — parfois plusieurs heures avant l'événement aigu. Savoir les reconnaître peut faire la différence entre une prise en charge précoce et un décès évitable.",
      },
      { type: "h2", text: "Le signe principal : la douleur thoracique" },
      {
        type: "p",
        text: "La douleur thoracique d'origine cardiaque a des caractéristiques typiques :",
      },
      {
        type: "ul",
        items: [
          "Localisation : centre du thorax, derrière le sternum",
          "Type : oppression, constriction, étau (\"comme si on me serrait\")",
          "Intensité : forte à très forte, persistante",
          "Irradiation : possible vers le bras gauche, la mâchoire, le dos, l'épigastre",
          "Durée : plus de 20 minutes, sans amélioration au repos",
          "Déclenchement : peut survenir à l'effort, au stress, ou au repos",
        ],
      },
      { type: "h2", text: "Les signes associés" },
      {
        type: "ul",
        items: [
          "Sueurs froides abondantes",
          "Pâleur du visage",
          "Nausées, parfois vomissements",
          "Essoufflement inhabituel",
          "Sensation de malaise général, angoisse",
          "Palpitations",
        ],
      },
      { type: "h2", text: "Les présentations atypiques" },
      {
        type: "p",
        text: "Attention : tous les infarctus ne se présentent pas avec une douleur typique. Certains profils — femmes, personnes âgées, diabétiques — présentent des signes trompeurs qui retardent le diagnostic.",
      },
      {
        type: "ul",
        items: [
          "Chez la femme : fatigue inhabituelle, douleur entre les omoplates, troubles digestifs",
          "Chez le diabétique : douleur souvent absente ou peu intense (neuropathie)",
          "Chez la personne âgée : essoufflement, confusion, malaise général sans douleur marquée",
          "\"Indigestion qui ne passe pas\" : à prendre au sérieux après 40 ans",
        ],
      },
      {
        type: "quote",
        text: "Une douleur thoracique qui dure plus de 20 minutes, c'est un infarctus jusqu'à preuve du contraire. On appelle le 15 — pas son médecin traitant, pas un proche.",
      },
      { type: "h2", text: "Conduite à tenir" },
      {
        type: "ul",
        items: [
          "Asseoir ou allonger la victime, en position confortable (souvent demi-assise)",
          "Desserrer ce qui peut gêner (col, ceinture, cravate)",
          "Ne rien donner à boire ni à manger",
          "Appeler le 15 immédiatement",
          "Rester auprès de la victime, parler calmement, la rassurer",
          "Si arrêt cardiaque : démarrer la RCP et utiliser un DAE",
        ],
      },
      { type: "h2", text: "L'enjeu du temps" },
      {
        type: "p",
        text: "Chaque minute compte. Le muscle cardiaque privé de sang meurt à raison d'environ 1 million de cellules par minute. La revascularisation (angioplastie) doit idéalement intervenir dans les 90 minutes suivant les premiers symptômes. C'est pourquoi le 15 doit être appelé sans tergiverser.",
      },
      { type: "h2", text: "Les facteurs de risque à surveiller" },
      {
        type: "ul",
        items: [
          "Tabagisme actif ou récent",
          "Hypertension artérielle",
          "Diabète",
          "Cholestérol élevé",
          "Antécédents familiaux d'infarctus précoce",
          "Sédentarité, obésité, stress chronique",
        ],
      },
    ],
  },

  "acceder-au-quickplace-cloud-inrs-pour-la-formation-sst-mot-de-passe-sst": {
    title:
      "Accéder au QuickPlace cloud INRS pour la formation SST",
    excerpt:
      "Le QuickPlace de l'INRS est la plateforme officielle de partage des ressources pédagogiques SST entre formateurs habilités. Comment y accéder et ce qu'on y trouve.",
    publishedAt: "2025-08-04",
    category: "SST",
    readingTime: 4,
    image: "/formations/formation-formateur-sst.jpg",
    content: [
      {
        type: "p",
        text: "Tout formateur SST habilité par l'INRS a accès à une plateforme de ressources en ligne : le QuickPlace. C'est l'espace officiel où sont mis à disposition les supports les plus récents — référentiels, vidéos techniques, outils d'animation. Encore faut-il savoir comment y entrer et quoi y chercher.",
      },
      { type: "h2", text: "Qu'est-ce que le QuickPlace INRS ?" },
      {
        type: "p",
        text: "Le QuickPlace est une plateforme collaborative gérée par l'INRS, réservée aux formateurs et formateurs de formateurs SST habilités. Elle centralise l'ensemble des supports officiels mis à jour : guide de données techniques, manuel formateur, planches TUTOPREV, vidéos de techniques gestuelles, grilles d'évaluation, déroulés pédagogiques.",
      },
      { type: "h2", text: "Qui peut y accéder ?" },
      {
        type: "ul",
        items: [
          "Les formateurs SST habilités INRS, à jour de leur certificat",
          "Les formateurs de formateurs SST (FORMASST)",
          "Les organismes de formation habilités, via leur référent pédagogique",
        ],
      },
      {
        type: "p",
        text: "L'accès se fait avec des identifiants nominatifs transmis par l'INRS au moment de l'habilitation, et renouvelés à chaque recyclage. Le partage des identifiants entre formateurs est strictement interdit.",
      },
      { type: "h2", text: "Comment se connecter ?" },
      {
        type: "ul",
        items: [
          "Accéder à l'URL du QuickPlace transmise par l'INRS lors de l'habilitation",
          "Saisir votre identifiant (généralement votre adresse email professionnelle)",
          "Saisir le mot de passe initialement transmis",
          "Procéder au renouvellement du mot de passe à la première connexion",
        ],
      },
      { type: "h2", text: "Que trouve-t-on sur la plateforme ?" },
      {
        type: "ul",
        items: [
          "Le guide de données techniques SST dans sa version la plus récente (actuellement V9)",
          "Le manuel du formateur SST avec ses mises à jour",
          "Les vidéos officielles des techniques gestuelles (RCP, DAE, PLS, hémorragie, etc.)",
          "Les outils d'animation : planches TUTOPREV, jeu PREV-ACTEURS, plan d'action prévention dématérialisé",
          "Les grilles de certification SST et MAC SST",
          "Les bulletins d'information INRS et les notes techniques",
        ],
      },
      { type: "h2", text: "Mot de passe perdu ou compte bloqué" },
      {
        type: "p",
        text: "En cas de mot de passe oublié, utiliser la fonction de réinitialisation depuis la page de connexion. Si l'accès reste bloqué (après plusieurs tentatives ou expiration du compte), contacter directement le service formation de l'INRS via l'adresse dédiée — votre organisme de formation peut vous transmettre la procédure.",
      },
      {
        type: "quote",
        text: "Garder ses identifiants QuickPlace à jour, c'est garantir que les ressources qu'on diffuse en formation sont conformes aux dernières mises à jour réglementaires et techniques.",
      },
      { type: "h2", text: "Et si je suis formateur Alertis ?" },
      {
        type: "p",
        text: "Alertis met également à disposition de ses formateurs missionnés un espace de ressources internes, complémentaire au QuickPlace INRS : supports d'animation personnalisés, déroulés adaptés à chaque type d'établissement (crèche, EHPAD, IGH, etc.), bandes sonores et vidéos contextuelles.",
      },
    ],
  },

  "acceder-au-quickplace-cloud-inrs-pour-la-formation-prap-mot-de-passe-prap": {
    title:
      "Accéder au QuickPlace cloud INRS pour la formation PRAP",
    excerpt:
      "Le QuickPlace PRAP regroupe les supports pédagogiques officiels pour les formateurs Prévention des Risques liés à l'Activité Physique. Accès, contenu et bonnes pratiques.",
    publishedAt: "2025-07-15",
    category: "PRAP",
    readingTime: 4,
    image: "/formations/formation-prap-ibc.jpg",
    content: [
      {
        type: "p",
        text: "À l'instar du QuickPlace SST, l'INRS met à disposition des formateurs PRAP habilités une plateforme dédiée de ressources : documents de référence, supports d'animation et outils d'évaluation pour les deux secteurs (IBC et 2S).",
      },
      { type: "h2", text: "Le QuickPlace PRAP en bref" },
      {
        type: "p",
        text: "Plateforme officielle de l'INRS, le QuickPlace PRAP centralise les documents structurants du dispositif Prévention des Risques liés à l'Activité Physique. Accès réservé aux formateurs habilités, identifiants personnels, mises à jour régulières.",
      },
      { type: "h2", text: "Conditions d'accès" },
      {
        type: "ul",
        items: [
          "Être formateur PRAP IBC ou 2S habilité par l'INRS",
          "Disposer d'identifiants nominatifs (transmis lors de l'habilitation)",
          "Renouveler ses droits à chaque recyclage de formateur",
        ],
      },
      { type: "h2", text: "Ressources disponibles" },
      { type: "h3", text: "Documents de cadrage" },
      {
        type: "ul",
        items: [
          "Document de référence PRAP (cadre, objectifs, architecture du dispositif)",
          "Référentiels de compétences acteur PRAP IBC et 2S",
          "Référentiel formateur PRAP",
          "Cahier des charges habilitation PRAP",
        ],
      },
      { type: "h3", text: "Supports pédagogiques" },
      {
        type: "ul",
        items: [
          "Manuel de formation acteur PRAP IBC et 2S",
          "Fiche d'observation et d'analyse de l'acteur PRAP",
          "Fiche d'observation et d'analyse du formateur PRAP",
          "Trames de séquences et exercices d'application",
        ],
      },
      { type: "h3", text: "Outils numériques" },
      {
        type: "ul",
        items: [
          "Logiciels d'analyse de poste (vidéos, photos)",
          "Vidéos pédagogiques INRS sur les TMS, l'anatomie, les principes de sécurité physique",
          "Modèles de fiches de poste et de plans d'action",
        ],
      },
      { type: "h2", text: "Connexion et perte de mot de passe" },
      {
        type: "p",
        text: "Comme pour le QuickPlace SST, la connexion se fait par identifiant + mot de passe nominatifs. En cas de perte, utiliser la fonction de réinitialisation depuis la page de connexion. En cas de blocage, contacter le service formation de l'INRS ou passer par l'organisme de formation qui a porté votre habilitation.",
      },
      {
        type: "quote",
        text: "Le partage des identifiants entre formateurs PRAP est interdit. Chaque accès est tracé et la conformité de l'habilitation peut être contrôlée à tout moment.",
      },
      { type: "h2", text: "Et pour les formateurs Alertis ?" },
      {
        type: "p",
        text: "Alertis complète l'accès au QuickPlace INRS par un espace ressources interne : déroulés pédagogiques adaptés à chaque type d'environnement (industriel, BTP, sanitaire, médico-social), livrets participants personnalisés, bibliothèque de photos et vidéos d'analyse de poste. Une demande à la coordination pédagogique suffit pour y accéder.",
      },
    ],
  },

  "comment-choisir-sa-formation-en-secourisme": {
    title: "Comment choisir sa formation en secourisme ?",
    excerpt:
      "GQS, PSC, SST, AFGSU, PSE1, PSE2 : le paysage des formations aux premiers secours est dense. Comment s'y retrouver et choisir la formation adaptée à son besoin.",
    publishedAt: "2025-06-28",
    category: "Secourisme",
    readingTime: 6,
    image: "/categories/secourisme.jpg",
    content: [
      {
        type: "p",
        text: "Vous voulez vous former aux gestes de premiers secours, mais le sigle GQS / PSC / SST / AFGSU vous laisse perplexe ? Le paysage français du secourisme est structuré, mais sa logique n'est pas toujours évidente quand on l'aborde de l'extérieur. Voici comment vous repérer.",
      },
      { type: "h2", text: "Première question : pourquoi voulez-vous vous former ?" },
      {
        type: "p",
        text: "Le bon choix de formation découle du besoin. Trois grandes intentions structurent le paysage :",
      },
      {
        type: "ul",
        items: [
          "Citoyen : connaître les gestes essentiels pour réagir face à un accident dans la vie courante",
          "Professionnel : intervenir comme premier maillon dans un contexte de travail",
          "Secouriste : faire partie d'un dispositif organisé de secours (équipe associative, service de santé au travail, etc.)",
        ],
      },
      { type: "h2", text: "Les formations citoyennes" },
      { type: "h3", text: "GQS — Gestes Qui Sauvent (2 heures)" },
      {
        type: "p",
        text: "Format court de sensibilisation, accessible à tous, sans prérequis. On apprend à alerter, protéger, et réaliser les gestes vitaux face à une hémorragie, une perte de connaissance ou un arrêt cardiaque. Idéal comme première porte d'entrée.",
      },
      { type: "h3", text: "PSC — Prévention et Secours Civiques de niveau 1 (7 heures)" },
      {
        type: "p",
        text: "La formation citoyenne de référence, valable à vie (recyclage recommandé tous les 3 ans). Aborde toute la palette des gestes de premiers secours pour un témoin non-professionnel. Souvent demandée pour les concours administratifs, les BAFA, et les fonctions d'animation.",
      },
      { type: "h2", text: "Les formations professionnelles" },
      { type: "h3", text: "SST — Sauveteur Secouriste du Travail (14 heures)" },
      {
        type: "p",
        text: "Formation INRS dédiée au milieu professionnel. Couvre les gestes de premiers secours et la dimension prévention des risques au travail. Certificat valable 24 mois, recyclage obligatoire (MAC SST de 7 heures). Idéal pour tout salarié, indispensable pour les référents secourisme.",
      },
      { type: "h3", text: "AFGSU — Attestation de Formation aux Gestes et Soins d'Urgence" },
      {
        type: "p",
        text: "Réservée aux professionnels de santé. Trois niveaux : AFGSU 1 (personnel administratif et non-soignant des établissements de santé), AFGSU 2 (professionnels paramédicaux et médicaux), spécialisation NRBC (risques nucléaires, radiologiques, biologiques, chimiques).",
      },
      { type: "h2", text: "Les formations de secouriste" },
      { type: "h3", text: "PSE1 — Premiers Secours en Équipe niveau 1 (35 heures)" },
      {
        type: "p",
        text: "Pour devenir secouriste au sein d'une association agréée de sécurité civile (Croix-Rouge, Protection civile, etc.). Travail en équipe, utilisation de matériel (immobilisation, oxygénothérapie, brancards).",
      },
      { type: "h3", text: "PSE2 — Premiers Secours en Équipe niveau 2 (28 heures)" },
      {
        type: "p",
        text: "Approfondissement du PSE1. Permet d'assurer le rôle de chef d'équipe et d'intervenir sur des situations plus complexes. Prérequis pour de nombreux concours de la sécurité civile.",
      },
      {
        type: "quote",
        text: "GQS et PSC sont pour vous-même et vos proches. SST est pour votre entreprise. PSE1/PSE2 sont pour les équipes de secours. AFGSU est pour les soignants. Voilà la carte mentale qui éclaire 90 % des choix.",
      },
      { type: "h2", text: "Tableau de synthèse" },
      {
        type: "ul",
        items: [
          "Durée 2h — sensibilisation grand public ➜ GQS",
          "Durée 7h — citoyen, à vie ➜ PSC",
          "Durée 14h — milieu professionnel, recyclable tous les 24 mois ➜ SST",
          "Durée 7h — recyclage SST ➜ MAC SST",
          "Durée 35h — secouriste associatif ou équipe de secours ➜ PSE1",
          "Durée 28h — chef d'équipe de secouristes ➜ PSE2",
          "Durée variable — professionnels de santé selon niveau ➜ AFGSU 1/2/NRBC",
        ],
      },
      { type: "h2", text: "Et après ?" },
      {
        type: "p",
        text: "Quelle que soit la formation initiale, le plus important est l'entretien des compétences. Un geste de premiers secours appris une fois et jamais répété s'estompe. Recyclage régulier, exercices pratiques et mises en situation : c'est ce qui fait qu'on saura agir le jour où ça arrivera vraiment.",
      },
    ],
  },

  "arrete-23-fevrier-2025-installations-gaz-erp-igh": {
    title:
      "Sécurité gaz dans les ERP : ce qui change avec l'arrêté du 23 février 2025",
    excerpt:
      "L'arrêté du 23 février 2025 modifie le règlement de sécurité ERP pour renforcer les exigences sur les installations gaz. Entrée en vigueur le 1er janvier 2026.",
    publishedAt: "2025-02-23",
    category: "Sécurité incendie",
    readingTime: 4,
    image: "/formations/formation-equipier-de-premiere-intervention.jpg",
    content: [
      {
        type: "p",
        text: "Publié au Journal officiel le 23 février 2025 (référence JORFTEXT000051261063), un nouvel arrêté du ministère de l'Intérieur (DGSCGC) vient modifier l'arrêté historique du 25 juin 1980 portant règlement de sécurité contre les risques d'incendie et de panique dans les établissements recevant du public (ERP). Le texte cible spécifiquement les installations gaz dans les ERP et les immeubles de grande hauteur (IGH).",
      },
      { type: "h2", text: "Ce que modifie l'arrêté" },
      {
        type: "p",
        text: "Le texte renforce les normes de sécurité applicables aux installations gaz : exigences techniques sur les équipements, modalités d'installation, vérifications périodiques et conditions d'exploitation. L'objectif affiché par la DGSCGC est d'aligner le cadre réglementaire ERP-IGH sur les évolutions techniques récentes (gaz hydrogène, biogaz, hybrides) et de tirer les enseignements d'incidents survenus ces dernières années.",
      },
      { type: "h2", text: "Quand s'applique-t-il ?" },
      {
        type: "p",
        text: "L'entrée en vigueur est fixée au 1er janvier 2026. Cela laisse aux exploitants ERP-IGH une fenêtre de mise en conformité de moins d'un an, durant laquelle ils doivent auditer leurs installations existantes et programmer les éventuels travaux.",
      },
      { type: "h2", text: "Impact sur nos formations" },
      {
        type: "p",
        text: "Côté pédagogie, l'arrêté ne touche pas directement le métier d'équipier d'évacuation, de guide-file ou de serre-file : ces fonctions n'ont pas vocation à intervenir techniquement sur le gaz. En revanche, le contexte évolue. Les modules \"Risques techniques\" des formations EPI et ESI doivent intégrer ces nouvelles obligations dans la séquence sur les sources de risque incendie.",
      },
      {
        type: "ul",
        items: [
          "Slides EPI / ESI \"Cadre réglementaire ERP\" actualisées avant fin 2025",
          "Nouvelle obligation gaz mentionnée dans la séquence \"Sources de risque\"",
          "Sensibilisation guide-file / serre-file inchangée mais le contexte est rappelé en ouverture de formation",
        ],
      },
      { type: "h2", text: "Pourquoi ça compte pour vous" },
      {
        type: "p",
        text: "Si votre établissement est un ERP comportant des installations gaz, il faut anticiper l'audit de conformité avant l'échéance du 1er janvier 2026. Nos sessions intra-entreprise intègrent désormais une introduction à ces nouvelles exigences pour que vos équipes EPI et ESI aient le bon référentiel mental.",
      },
      {
        type: "p",
        text: "Référence officielle : Arrêté du 23 février 2025 (JORFTEXT000051261063), consultable sur Légifrance.",
      },
    ],
  },

  "arrete-1er-septembre-2025-reglement-securite-erp": {
    title:
      "Règlement de sécurité ERP : l'arrêté du 1er septembre 2025 actualise les dispositions générales",
    excerpt:
      "La DGSCGC publie un nouvel arrêté modifiant les dispositions générales du règlement de sécurité ERP de 1980. Implications pour les exploitants et les formations.",
    publishedAt: "2025-09-01",
    category: "Sécurité incendie",
    readingTime: 4,
    image: "/formations/formation-incendie-en-etablissement-recevant-du-public.jpg",
    content: [
      {
        type: "p",
        text: "Publié au Journal officiel sous la référence JORFTEXT000052197683, l'arrêté du 1er septembre 2025 du ministère de l'Intérieur (DGSCGC) modifie les dispositions générales du règlement de sécurité contre les risques d'incendie et de panique dans les établissements recevant du public. C'est une révision du socle même de l'arrêté du 25 juin 1980, texte de référence depuis plus de quarante ans.",
      },
      { type: "h2", text: "Ce que change le texte" },
      {
        type: "p",
        text: "L'arrêté actualise plusieurs dispositions générales applicables transversalement à tous les types d'ERP, notamment sur le périmètre des obligations des exploitants. Sans bouleverser l'architecture du règlement, il harmonise et précise des points qui faisaient l'objet d'interprétations divergentes sur le terrain.",
      },
      {
        type: "ul",
        items: [
          "Précisions sur les obligations générales des exploitants",
          "Mise en cohérence avec les évolutions récentes du Code de la construction et de l'habitation",
          "Clarification sur certaines dispositions de mise en sécurité",
        ],
      },
      { type: "h2", text: "Pour qui ?" },
      {
        type: "p",
        text: "Tout exploitant d'ERP est concerné, indépendamment du type et de la catégorie. Les services de sécurité, les chargés de sécurité incendie, les responsables d'établissement et les équipes de seconde intervention (ESI) doivent intégrer ces évolutions dans leurs pratiques.",
      },
      { type: "h2", text: "Impact sur nos formations" },
      {
        type: "p",
        text: "Nous mettons à jour le module \"Cadre réglementaire ERP\" pour les sessions intra-entreprise se déroulant dans des ERP. Le contenu \"Guide-file et serre-file\" est révisé pour intégrer les ajustements introduits par le nouvel arrêté.",
      },
      {
        type: "p",
        text: "Si vous exploitez un ERP et que vous formez régulièrement vos équipes, c'est le bon moment pour planifier une session de mise à niveau réglementaire avant la fin de l'année 2025.",
      },
      {
        type: "p",
        text: "Référence officielle : Arrêté du 1er septembre 2025 (JORFTEXT000052197683), consultable sur Légifrance.",
      },
    ],
  },

  "referentiel-apsad-r1-nouvelle-edition-2025-sprinklers": {
    title:
      "Nouvelle édition du référentiel APSAD R1 : ce que doivent savoir les équipiers de seconde intervention",
    excerpt:
      "Le CNPP publie une refonte majeure (430 pages) du référentiel APSAD R1 sur les sprinklers. Conception, installation, maintenance et vérification entièrement revus.",
    publishedAt: "2025-10-22",
    category: "Sécurité incendie",
    readingTime: 5,
    image: "/formations/formation-equipier-de-seconde-intervention.jpg",
    content: [
      {
        type: "p",
        text: "Le CNPP (Centre National de Prévention et de Protection) a publié en octobre 2025 une nouvelle édition majeure du référentiel APSAD R1 — Extinction automatique à eau de type sprinkleur. À 430 pages, cette édition consolide et refond les évolutions cumulées des dernières années. Elle constitue désormais la référence technique pour la conception, l'installation, la maintenance et la vérification des systèmes sprinklers en France.",
      },
      { type: "h2", text: "Ce qui change" },
      {
        type: "ul",
        items: [
          "Adaptations sur la conception des systèmes (design)",
          "Mises à jour des prescriptions d'installation",
          "Évolutions sur la maintenance préventive et corrective",
          "Refonte des modalités de vérification périodique",
        ],
      },
      {
        type: "p",
        text: "Le R1 s'adresse en priorité aux concepteurs, installateurs et mainteneurs de systèmes sprinklers. Mais il est aussi une référence à connaître pour les équipiers de seconde intervention (ESI) appelés à intervenir dans des sites équipés : compréhension du fonctionnement, identification des organes de coupure, articulation avec les autres dispositifs de sécurité.",
      },
      { type: "h2", text: "Pour qui c'est essentiel ?" },
      {
        type: "p",
        text: "Tout site industriel ou tertiaire équipé d'une installation sprinkler — entrepôts logistiques, parkings couverts, IGH, sites tertiaires de grande taille — a intérêt à former ses ESI sur les nouvelles bases R1. Les équipiers de première intervention (EPI) ne sont pas concernés au même niveau : leur rôle reste l'alerte et l'utilisation d'un extincteur, pas l'exploitation d'un système d'extinction automatique.",
      },
      { type: "h2", text: "Notre intégration" },
      {
        type: "p",
        text: "Nous actualisons notre module ESI \"Systèmes fixes d'extinction\" pour intégrer les grandes lignes du R1 édition 2025 avant le premier trimestre 2026. L'objectif est que tout ESI formé chez Alertis dispose d'un référentiel technique cohérent avec ce qu'il rencontrera sur le terrain.",
      },
      {
        type: "p",
        text: "Référence officielle : nouvelle édition APSAD R1 (CNPP Éditions, octobre 2025). Disponible auprès du CNPP.",
      },
    ],
  },

  "referentiel-apsad-r7-mise-a-jour-detection-incendie-2025": {
    title:
      "Détection automatique d'incendie : la nouvelle version du référentiel APSAD R7",
    excerpt:
      "Le CNPP met à jour le référentiel APSAD R7 sur la détection automatique d'incendie. Analyse de risque, installation et maintenance des systèmes : les nouveaux repères.",
    publishedAt: "2025-09-25",
    category: "Sécurité incendie",
    readingTime: 4,
    image: "/formations/formation-ssi-systeme-de-securite-incendie.jpg",
    content: [
      {
        type: "p",
        text: "Le CNPP a publié en septembre 2025 une mise à jour du référentiel APSAD R7 — Détection automatique d'incendie. Ce document précise les exigences techniques minimales pour l'analyse de risque, l'installation et la maintenance d'un système de détection automatique d'incendie (SDI).",
      },
      { type: "h2", text: "Ce que couvre le R7" },
      {
        type: "ul",
        items: [
          "Analyse de risque préalable à la conception",
          "Choix des détecteurs adaptés (fumée, chaleur, flamme, multicritères)",
          "Implantation et zonage de détection",
          "Maintenance et vérification périodique",
        ],
      },
      {
        type: "p",
        text: "La détection automatique est souvent la première brique d'un Système de Sécurité Incendie (SSI). Sa fiabilité conditionne directement le délai d'alerte et donc le délai d'évacuation des occupants.",
      },
      { type: "h2", text: "Pourquoi cette mise à jour compte" },
      {
        type: "p",
        text: "Le R7 est référencé par les assureurs et les bureaux de contrôle : un SDI conforme au R7 dans sa dernière édition est un argument fort pour la couverture assurantielle et pour l'auto-évaluation de la sécurité du site. Les sites industriels équipés ont tout intérêt à vérifier la conformité de leur installation existante.",
      },
      { type: "h2", text: "Impact sur nos formations" },
      {
        type: "p",
        text: "Nous mettons à jour la slide \"Détection et alarme\" dans nos modules EPI et ESI. C'est particulièrement pertinent pour les sessions menées sur sites industriels équipés d'un SSI complet — les équipiers doivent savoir lire un tableau de signalisation, comprendre les zones de détection et identifier les actions associées.",
      },
      {
        type: "p",
        text: "Référence officielle : Référentiel APSAD R7 mis à jour, CNPP Éditions, septembre 2025.",
      },
    ],
  },

  "circulaire-formation-continue-2026-premiers-secours-securite-civile": {
    title:
      "Programme 2026 de formation continue aux premiers secours : ce que dit la circulaire du 20 juin 2025",
    excerpt:
      "La DGSCGC publie le programme officiel de formation continue 2026 pour les unités d'enseignement aux premiers secours des filières de sécurité civile.",
    publishedAt: "2025-06-20",
    category: "Secourisme",
    readingTime: 4,
    image: "/formations/formation-psc-premiers-secours-citoyen.jpg",
    content: [
      {
        type: "p",
        text: "La circulaire du 20 juin 2025 du ministère de l'Intérieur (DGSCGC) fixe le programme officiel de formation continue 2026 pour les unités d'enseignement aux premiers secours. Elle s'applique aux quatre filières de sécurité civile : citoyenne, opérationnelle, aquatique et pédagogique.",
      },
      { type: "h2", text: "Le cadre" },
      {
        type: "p",
        text: "Le texte est pris pour application de l'arrêté du 21 décembre 2020 portant organisation de la formation continue dans le domaine des premiers secours. Chaque année, la DGSCGC publie un programme thématique qui fixe les contenus à intégrer obligatoirement dans les sessions de formation continue des formateurs.",
      },
      { type: "h2", text: "Ce que ça implique pour les formateurs" },
      {
        type: "p",
        text: "Concrètement, tout formateur en premiers secours (PSC, PSE, MAC formateur) doit avoir validé sa formation continue annuelle pour pouvoir continuer à former dans le cadre des unités d'enseignement officielles. Le programme 2026 fixe les thèmes pédagogiques sur lesquels chaque formateur sera évalué dans l'année.",
      },
      { type: "h2", text: "Notre dispositif Alertis" },
      {
        type: "ul",
        items: [
          "Vérification du statut de formation continue de chaque formateur PSC, PSE et MAC en début d'année",
          "Planification des sessions de MAC formateurs dès le premier trimestre 2026",
          "Mise à jour des supports pour intégrer les thèmes prioritaires du programme",
          "Archivage des attestations de FC dans le dossier Qualiopi de chaque formateur",
        ],
      },
      { type: "h2", text: "Pourquoi c'est important côté qualité" },
      {
        type: "p",
        text: "Une formation PSC ou PSE dispensée par un formateur dont la formation continue n'est pas à jour n'est plus valide réglementairement. Pour les organismes comme Alertis, c'est un point d'audit Qualiopi très regardé (indicateurs 22 et 24 sur la compétence des intervenants).",
      },
      {
        type: "p",
        text: "Référence officielle : Circulaire du 20 juin 2025, ministère de l'Intérieur — DGSCGC.",
      },
    ],
  },

  "mise-a-jour-cnh-sst-formateurs-mars-2026": {
    title:
      "Dispositif SST : la Commission Nationale d'Habilitation publie une mise à jour en mars 2026",
    excerpt:
      "L'INRS, via la CNH, actualise les conditions d'habilitation des formateurs SST et les modalités d'évaluation. Notre lecture des évolutions.",
    publishedAt: "2026-03-01",
    category: "Secourisme",
    readingTime: 4,
    image: "/formations/formation-formateur-sst.jpg",
    content: [
      {
        type: "p",
        text: "L'INRS, via la Commission Nationale d'Habilitation (CNH) du dispositif SST, a publié en mars 2026 une mise à jour de son document de référence sur l'organisation de la formation au Sauveteur Secouriste du Travail. La CNH est l'instance qui définit les règles applicables aux organismes habilités à dispenser la formation SST et MAC SST.",
      },
      { type: "h2", text: "Ce que précise la mise à jour" },
      {
        type: "ul",
        items: [
          "Modalités d'habilitation des organismes formateurs",
          "Conditions d'exercice des formateurs SST",
          "Maintien des compétences des formateurs (MAC formateur tous les 3 ans, 21 h)",
          "Modalités d'évaluation et de certification des stagiaires",
        ],
      },
      {
        type: "p",
        text: "Le dispositif SST repose sur une chaîne de compétences : l'INRS habilite les organismes formateurs, ces organismes forment leurs formateurs SST, qui à leur tour forment les stagiaires SST en entreprise. Toute évolution du document de référence se diffuse donc sur l'ensemble de la chaîne.",
      },
      { type: "h2", text: "Notre lecture" },
      {
        type: "p",
        text: "Nous avons examiné le document, vérifié la conformité de l'habilitation Alertis auprès de l'INRS, et ajusté nos supports le cas échéant. Le PDF officiel est archivé dans notre dossier Qualiopi, partie indicateur 24 (veille certifications).",
      },
      { type: "h2", text: "Concrètement pour les entreprises clientes" },
      {
        type: "p",
        text: "Aucun changement opérationnel immédiat sur les sessions SST et MAC SST que nous proposons. Notre habilitation reste valide, nos formateurs sont à jour, et les certificats SST délivrés respectent les exigences INRS actualisées.",
      },
      {
        type: "p",
        text: "Référence officielle : Document INRS \"Organisme habilité SST\", mise à jour CNH de mars 2026.",
      },
    ],
  },

  "brochure-inrs-ed-6403-rps-du-evaluation-risques-psychosociaux": {
    title:
      "RPS-DU : l'outil INRS pour intégrer les risques psychosociaux au document unique",
    excerpt:
      "La brochure INRS ED 6403 propose une démarche structurée d'évaluation des RPS pour intégration dans le DUERP. Méthode, indicateurs et leviers d'action.",
    publishedAt: "2025-06-01",
    category: "Prévention",
    readingTime: 5,
    image: "/formations/formation-cse-chsct.png",
    content: [
      {
        type: "p",
        text: "L'INRS a publié en juin 2025 la brochure ED 6403 — outil RPS-DU. Le document propose une méthodologie d'évaluation des facteurs de risques psychosociaux conçue pour aboutir à une intégration explicite dans le Document Unique d'Évaluation des Risques Professionnels (DUERP). C'est une réponse opérationnelle à une difficulté que beaucoup d'entreprises rencontrent : comment passer de la sensibilisation RPS à une véritable inscription dans le DUERP ?",
      },
      { type: "h2", text: "Ce que propose la méthode RPS-DU" },
      {
        type: "ul",
        items: [
          "Une grille de lecture des six familles de facteurs de RPS (intensité du travail, exigences émotionnelles, autonomie, rapports sociaux, conflits de valeurs, insécurité)",
          "Une méthode de collecte et d'analyse des indicateurs (entretiens, observations, indicateurs RH)",
          "Une trame pour formaliser les RPS dans le DUERP",
          "Des leviers d'action prioritaires et leur déploiement",
        ],
      },
      {
        type: "p",
        text: "L'outil est particulièrement pensé pour les TPE-PME qui n'ont pas de service prévention dédié. Il fournit un cadre clé en main, contextualisable.",
      },
      { type: "h2", text: "Pourquoi c'est important pour vous" },
      {
        type: "p",
        text: "Le DUERP est obligatoire pour toutes les entreprises, dès le premier salarié. La conservation est passée à 40 ans depuis le décret 2022-395. Si le DUERP ne couvre pas les RPS, il est en réalité incomplet — et l'inspection du travail comme la médecine du travail le repèrent immédiatement.",
      },
      { type: "h2", text: "Notre intégration en formation" },
      {
        type: "p",
        text: "Nous utilisons désormais la méthode RPS-DU comme outil de référence dans plusieurs formations :",
      },
      {
        type: "ul",
        items: [
          "Formation DUERP : la méthode devient le fil conducteur du volet RPS",
          "Formation CSE : présentation comme support de dialogue avec l'employeur",
          "Formation SST : ajout d'une slide \"SST et alerte sur les RPS\" (signaux faibles)",
          "Formation PRAP : court module \"De la TMS au RPS — facteurs organisationnels\"",
        ],
      },
      {
        type: "p",
        text: "Le PDF de l'ED 6403 est remis à chaque stagiaire en ressource post-formation, ce qui leur permet de poursuivre le travail au sein de leur entreprise.",
      },
      {
        type: "p",
        text: "Référence officielle : Brochure INRS ED 6403 — \"RPS-DU : un outil pour évaluer les risques psychosociaux\", juin 2025.",
      },
    ],
  },

  "decret-2025-355-nouveau-suivi-medical-habilitation-electrique": {
    title:
      "Habilitation électrique : le décret 2025-355 change le suivi médical au 1er octobre 2025",
    excerpt:
      "À partir du 1er octobre 2025, l'habilitation électrique est subordonnée à un certificat médical d'aptitude de 5 ans délivré par le médecin du travail.",
    publishedAt: "2025-10-01",
    category: "Habilitation électrique",
    readingTime: 5,
    image: "/formations/habilitation-electrique-bs-be-manoeuvre.jpg",
    content: [
      {
        type: "p",
        text: "Le décret n° 2025-355 du 17 avril 2025 entre en application le 1er octobre 2025. Il modifie en profondeur les règles de suivi médical des travailleurs occupant un poste nécessitant une habilitation électrique ou une autorisation de conduite d'engins. C'est une évolution majeure pour tous les employeurs concernés.",
      },
      { type: "h2", text: "Ce qui change concrètement" },
      {
        type: "p",
        text: "Jusqu'ici, le suivi médical des habilités électriques relevait du Suivi Individuel Renforcé (SIR), qui imposait un examen médical avant l'embauche et un suivi périodique tous les 4 ans maximum. Le décret bascule sur un nouveau dispositif : la délivrance ou le renouvellement de l'habilitation est désormais subordonnée à un certificat médical du médecin du travail justifiant l'absence de contre-indication. Ce certificat est valable 5 ans.",
      },
      {
        type: "ul",
        items: [
          "Certificat médical d'aptitude requis pour toute habilitation électrique (et autorisation de conduite)",
          "Validité de 5 ans",
          "Délivré par le médecin du travail",
          "Remplace partiellement le mécanisme du SIR",
        ],
      },
      { type: "h2", text: "Qui est concerné ?" },
      {
        type: "p",
        text: "Toutes les habilitations électriques visées par la norme NF C 18-510 : B0, BS, BE, H0, BR, BC, BF, HF, BP photovoltaïque, en initial comme en recyclage. C'est l'employeur qui reste responsable de la vérification du certificat avant de délivrer l'habilitation.",
      },
      { type: "h2", text: "Ce que nous changeons côté Alertis" },
      {
        type: "p",
        text: "Le décret n'impose pas de modification du contenu pédagogique de la formation, mais il change le contexte dans lequel l'employeur délivre l'habilitation. Nous avons donc :",
      },
      {
        type: "ul",
        items: [
          "Ajouté une mention dans la convention de formation rappelant l'obligation employeur",
          "Mis à jour le programme stagiaire avec une fiche \"Rôle de l'employeur\"",
          "Actualisé la slide \"Cadre réglementaire\" pour décrire la nouvelle procédure",
        ],
      },
      {
        type: "p",
        text: "À noter : la suppression de la majoration SIR au 1er janvier 2026 (article distinct) constitue une économie indirecte pour les employeurs — voir notre note dédiée à ce sujet.",
      },
      {
        type: "p",
        text: "Référence officielle : Décret n° 2025-355 du 17 avril 2025, applicable au 1er octobre 2025. Consultable sur Légifrance.",
      },
    ],
  },

  "nf-c-18-510-compil-2-edition-consolidee-amendements-a1-a2": {
    title:
      "NF C 18-510 COMPIL 2 : la référence active pour 2025-2026 en habilitation électrique",
    excerpt:
      "Édition consolidée intégrant les amendements A1 et A2 : DMAC, prescriptions photovoltaïque et batteries, harmonisation avec le décret travail sous tension.",
    publishedAt: "2024-10-01",
    category: "Habilitation électrique",
    readingTime: 5,
    image: "/formations/habilitation-electrique-photovoltaique-bp.jpg",
    content: [
      {
        type: "p",
        text: "La norme NF C 18-510 est le texte technique fondamental de l'habilitation électrique en France. Sa version COMPIL 2 — édition consolidée intégrant les amendements A1 et A2 — constitue la référence active pour toute la période 2025-2026, après que l'arrêté du 5 juillet 2024 a officiellement visé les amendements pour l'application aux formations et qualifications.",
      },
      { type: "h2", text: "Ce qu'apporte la COMPIL 2" },
      {
        type: "ul",
        items: [
          "Distances Minimales d'Approche Corrigées (DMAC) actualisées",
          "Prescriptions spécifiques pour le photovoltaïque",
          "Encadrement des batteries stationnaires (BESS)",
          "Harmonisation avec le décret du 7 avril 2021 sur le travail sous tension",
        ],
      },
      {
        type: "p",
        text: "Côté formation, la conséquence est claire : tout module d'habilitation électrique doit s'appuyer sur la COMPIL 2 + A2 comme base technique. Les supports antérieurs sont obsolètes.",
      },
      { type: "h2", text: "Le cas particulier du photovoltaïque" },
      {
        type: "p",
        text: "Avec l'explosion du photovoltaïque résidentiel et tertiaire, la NF C 18-510 a dû intégrer des prescriptions spécifiques : intervention sur les onduleurs, déconnexion côté DC, gestion des coupures, port des EPI adaptés. Le module BP (Photovoltaïque) d'Alertis s'appuie désormais directement sur ces prescriptions.",
      },
      { type: "h2", text: "Notre intégration" },
      {
        type: "p",
        text: "Tous les supports de nos formations habilitation électrique (B0, BS, BE, H0, BR, BC, BF, HF, BP) sont à jour avec la COMPIL 2 + A2. Les DMAC actualisés sont intégrés dans la documentation formateurs. Le module BP photovoltaïque a été structuré sur la base des nouvelles prescriptions PV.",
      },
      {
        type: "quote",
        text: "Une formation habilitation électrique qui ne s'appuie pas sur la dernière version consolidée de la NF C 18-510 expose l'employeur à un risque de remise en cause de la validité de l'habilitation délivrée.",
      },
      {
        type: "p",
        text: "Référence officielle : NF C 18-510 COMPIL 2 + Amendements A1 et A2, AFNOR. Arrêté du 5 juillet 2024 visant les amendements pour l'application aux formations.",
      },
    ],
  },

  "suppression-majoration-sir-habilitation-electrique-2026": {
    title:
      "Au 1er janvier 2026, la majoration SIR disparaît pour l'habilitation électrique",
    excerpt:
      "La cotisation supplémentaire liée au Suivi Individuel Renforcé pour les habilités électriques et autorisations de conduite est supprimée. Économie pour les employeurs.",
    publishedAt: "2026-01-01",
    category: "Habilitation électrique",
    readingTime: 3,
    image: "/formations/habilitation-electrique-br-b1-b2-bc.jpg",
    content: [
      {
        type: "p",
        text: "À compter du 1er janvier 2026, la majoration de cotisation liée au Suivi Individuel Renforcé (SIR) est supprimée pour les employeurs ayant des salariés titulaires d'une habilitation électrique ou d'une autorisation de conduite d'engins. C'est la conséquence directe du décret n° 2025-355 du 17 avril 2025, qui bascule le contrôle médical de ces postes sur un dispositif allégé (certificat médical de 5 ans).",
      },
      { type: "h2", text: "Pourquoi cette suppression ?" },
      {
        type: "p",
        text: "Le SIR imposait jusqu'ici un suivi médical renforcé et plus coûteux. La majoration de cotisation versée à la médecine du travail compensait ce coût supplémentaire. Avec la nouvelle procédure (certificat 5 ans), le suivi est simplifié, donc la majoration n'a plus de justification économique.",
      },
      { type: "h2", text: "Quel impact financier ?" },
      {
        type: "p",
        text: "L'économie réelle dépend du nombre de salariés concernés dans votre entreprise et de votre service de santé au travail. Concrètement, c'est une baisse mécanique de la cotisation annuelle au SST pour les postes anciennement classés SIR au titre de l'habilitation électrique ou de l'autorisation de conduite.",
      },
      { type: "h2", text: "Côté formation, ça change quoi ?" },
      {
        type: "p",
        text: "Aucun impact pédagogique direct : nos formations habilitation électrique restent strictement identiques sur le fond. En revanche, c'est un argument à connaître côté commercial, et nous l'avons intégré dans la slide \"Cadre réglementaire et obligations de l'employeur\" du module habilitation électrique.",
      },
      {
        type: "p",
        text: "Pour les entreprises qui hésitaient à former massivement leurs équipes terrain (intérimaires, sous-traitants, nouveaux embauchés) à cause des coûts annexes, c'est un signal positif : le coût total d'une démarche d'habilitation électrique baisse.",
      },
      {
        type: "p",
        text: "Référence officielle : Décret n° 2025-355 du 17 avril 2025 et instructions Cnam relatives à la suppression de la majoration SIR au 1er janvier 2026.",
      },
    ],
  },

  "cahier-des-charges-prap-dispositions-sectorielles-2025": {
    title:
      "Nouveau cahier des charges PRAP de l'INRS : ASD, sanitaire, transport-logistique",
    excerpt:
      "L'INRS publie en décembre 2025 une mise à jour du cahier des charges PRAP couvrant les dispositifs sectoriels et les modalités de maintien des compétences des formateurs.",
    publishedAt: "2025-12-01",
    category: "Ergonomie",
    readingTime: 5,
    image: "/formations/formation-prap-2s-sanitaire-et-social.jpg",
    content: [
      {
        type: "p",
        text: "L'INRS a publié en décembre 2025 une mise à jour du cahier des charges PRAP (Prévention des Risques liés à l'Activité Physique). Le document couvre désormais explicitement les dispositions spécifiques pour trois dispositifs sectoriels : Aide et Soin à Domicile (ASD), Transport Routier et Logistique, Sanitaire et Social.",
      },
      { type: "h2", text: "Pourquoi ces trois secteurs ?" },
      {
        type: "p",
        text: "Ces trois secteurs concentrent une part très importante des accidents du travail et maladies professionnelles liés aux TMS (Troubles Musculo-Squelettiques) et aux manutentions. Le dispositif PRAP générique restait trop transversal pour répondre finement aux contraintes spécifiques :",
      },
      {
        type: "ul",
        items: [
          "ASD : mobilisation de personnes au domicile, conditions de travail isolées",
          "Transport-logistique : manutention répétitive, vibrations, contraintes de temps",
          "Sanitaire et social : portage de patients, postures contraignantes en EHPAD ou hôpital",
        ],
      },
      { type: "h2", text: "Maintien des compétences des formateurs" },
      {
        type: "p",
        text: "Le cahier des charges précise les modalités de MAC formateur PRAP : tous les 3 ans, avec une durée de 21 heures pour le dispositif IBC (Industrie, BTP, Commerce) et 28 heures pour le dispositif 2S (Sanitaire et Social). Tout formateur PRAP qui n'a pas validé son MAC dans les délais perd son habilitation.",
      },
      { type: "h2", text: "Notre lecture chez Alertis" },
      {
        type: "p",
        text: "Nous formons régulièrement des publics ASD, sanitaire-social et transport-logistique. Notre lecture du cahier des charges porte sur deux axes :",
      },
      {
        type: "ul",
        items: [
          "Adaptation des programmes PRAP IBC et 2S pour intégrer les nouvelles spécificités sectorielles",
          "Vérification du calendrier MAC de chaque formateur PRAP Alertis",
        ],
      },
      {
        type: "p",
        text: "Les supports de la deuxième journée PRAP IBC intègrent désormais une séquence \"De la TMS au RPS — facteurs organisationnels\" issue de l'ED 6403 sur le RPS-DU. C'est cohérent avec l'évolution générale de la doctrine INRS : la prévention TMS ne peut plus être dissociée de l'organisation du travail.",
      },
      {
        type: "p",
        text: "Référence officielle : Document de référence dispositif TMS — INRS, mise à jour décembre 2025.",
      },
    ],
  },

  "decret-fortes-chaleurs-juillet-2025-obligations-duerp": {
    title:
      "Risque chaleur en entreprise : ce qu'impose le décret de juillet 2025 sur le DUERP",
    excerpt:
      "Nouvelles obligations d'intégration du risque \"fortes chaleurs\" dans le DUERP. Eau, pauses, aménagement horaire : les mesures de prévention attendues.",
    publishedAt: "2025-07-01",
    category: "Prévention",
    readingTime: 4,
    image: "/formations/formation-cse-chsct.png",
    content: [
      {
        type: "p",
        text: "Publié en juillet 2025, un nouveau décret renforce les obligations des employeurs face au risque \"fortes chaleurs\" et impose son intégration explicite dans le Document Unique d'Évaluation des Risques Professionnels (DUERP). C'est la traduction réglementaire d'un constat évident depuis plusieurs étés : les vagues de chaleur ne sont plus exceptionnelles, elles sont structurelles.",
      },
      { type: "h2", text: "Ce que le décret impose" },
      {
        type: "p",
        text: "Le texte est centré sur le DUERP. Le risque chaleur — et plus généralement le risque \"chaleur extrême\" — doit être identifié, évalué et accompagné de mesures de prévention concrètes. L'employeur ne peut plus traiter le sujet par une simple note de service en cas d'alerte canicule.",
      },
      {
        type: "ul",
        items: [
          "Mise à disposition d'eau fraîche en quantité suffisante",
          "Aménagement des pauses (durée, fréquence, lieu)",
          "Adaptation des horaires (travail matinal ou en soirée selon les postes)",
          "Équipements de protection adaptés (vêtements clairs, casquettes, abris)",
          "Plan d'action spécifique pour les postes en extérieur ou en local non climatisé",
        ],
      },
      { type: "h2", text: "Quels postes sont prioritaires ?" },
      {
        type: "p",
        text: "Les postes exposés au plein soleil (BTP, agriculture, logistique extérieure), les locaux non climatisés (cuisines, ateliers, entrepôts), les postes physiques intensifs (manutention) doivent faire l'objet d'une évaluation renforcée. Le médecin du travail peut être sollicité pour les cas particuliers.",
      },
      { type: "h2", text: "Notre intégration en formation" },
      {
        type: "p",
        text: "Nous avons ajouté dans notre formation \"DUERP\" un module dédié \"Risque chaleur et chaleur extrême\" avec exemples concrets de mesures de prévention. Le modèle de DUERP fourni aux stagiaires intègre désormais une rubrique \"risques physiques — chaleur\" pré-formatée pour qu'ils puissent la reprendre dans leur propre document.",
      },
      {
        type: "p",
        text: "C'est aussi un point d'attention pour le CSE et la médecine du travail, qui ont un rôle de contrôle sur l'évaluation des risques.",
      },
      {
        type: "p",
        text: "Référence officielle : Décret \"fortes chaleurs\" de juillet 2025. Voir aussi la page DUERP du ministère du Travail.",
      },
    ],
  },

  "brochure-inrs-ed-6349-rps-quatre-circonstances-agir-prevention": {
    title:
      "RPS en entreprise : la brochure INRS ED 6349 et ses quatre circonstances pour agir",
    excerpt:
      "Cadrage actualisé pour piloter une politique RPS. Quatre circonstances qui déclenchent l'action, et les étapes structurantes d'une démarche durable.",
    publishedAt: "2026-03-01",
    category: "Prévention",
    readingTime: 5,
    image: "/formations/formation-cse-chsct.png",
    content: [
      {
        type: "p",
        text: "L'INRS publie en mars 2026 la brochure ED 6349 — \"Risques psychosociaux : comment agir en prévention\". Le document propose un cadrage actualisé pour piloter une politique RPS en entreprise, centré sur le travail réel et son organisation. C'est aujourd'hui la brochure de référence pour structurer une démarche RPS.",
      },
      { type: "h2", text: "Les quatre circonstances pour agir" },
      {
        type: "p",
        text: "La brochure identifie quatre circonstances types qui amènent une entreprise à engager une démarche RPS :",
      },
      {
        type: "ul",
        items: [
          "Un signal d'alerte interne (arrêts de travail, conflits, plaintes)",
          "Une demande externe (médecine du travail, inspection, CSE)",
          "Un projet de transformation (réorganisation, déménagement, fusion)",
          "Une démarche volontaire de prévention primaire",
        ],
      },
      {
        type: "p",
        text: "Cette grille de lecture est précieuse parce qu'elle permet à un DRH ou un membre du CSE de se situer rapidement et de choisir le bon point d'entrée méthodologique.",
      },
      { type: "h2", text: "Les étapes d'une démarche durable" },
      {
        type: "p",
        text: "Au-delà des quatre circonstances, la brochure structure les étapes clés d'une démarche RPS qui dure : préparation, diagnostic du travail réel, formalisation dans le DUERP, plan d'action, évaluation. L'accent est mis sur le travail réel — pas le travail prescrit — comme objet central de la prévention.",
      },
      { type: "h2", text: "Notre refonte de la formation RPS" },
      {
        type: "p",
        text: "Nous avons refondu le plan de notre module RPS pour suivre la structure ED 6349 :",
      },
      {
        type: "ul",
        items: [
          "Session ouverte sur les quatre circonstances et l'auto-positionnement des stagiaires",
          "Diagnostic du travail réel comme cœur méthodologique",
          "Articulation explicite avec l'outil RPS-DU (ED 6403) pour le passage au DUERP",
        ],
      },
      {
        type: "p",
        text: "En formation CSE, nous avons ajouté une séquence \"Rôle du CSE dans la démarche RPS\" qui s'appuie sur les étapes structurantes de la brochure. Le CSE devient un acteur du diagnostic et du plan d'action, pas seulement un destinataire d'informations.",
      },
      {
        type: "p",
        text: "Référence officielle : Brochure INRS ED 6349 — \"Risques psychosociaux : comment agir en prévention\", mars 2026.",
      },
    ],
  },

  "plan-interministeriel-qualite-anti-fraude-rnq-v10-qualiopi": {
    title:
      "Plan Qualité et anti-fraude : ce que prépare la version V10 du Référentiel National Qualité",
    excerpt:
      "Annonce en juillet 2025 d'un plan interministériel préfigurant la V10 du RNQ Qualiopi : traçabilité renforcée, évaluation des compétences, lutte contre la fraude.",
    publishedAt: "2025-07-01",
    category: "Veille qualité",
    readingTime: 5,
    image: "/images/formateurs.jpg",
    content: [
      {
        type: "p",
        text: "Le gouvernement a annoncé en juillet 2025 un plan interministériel \"Qualité et anti-fraude\" visant la formation professionnelle. Ce plan préfigure la version V10 du Référentiel National Qualité (Qualiopi), attendue fin 2025 / début 2026. Pour tout organisme de formation, c'est le sujet majeur de veille indicateur 24 sur l'année.",
      },
      { type: "h2", text: "Le contexte" },
      {
        type: "p",
        text: "Depuis 2022, plusieurs rapports parlementaires et médiatiques ont mis en lumière des dérives dans certains organismes de formation, notamment côté CFA et CPF. Le plan interministériel répond à ce constat avec deux axes : renforcer les exigences qualité (en particulier la traçabilité) et muscler les contrôles anti-fraude.",
      },
      { type: "h2", text: "Évolutions transversales attendues" },
      {
        type: "ul",
        items: [
          "Traçabilité renforcée : feuilles d'émargement, preuves de présence, archivage",
          "Évaluation des compétences plus rigoureuse, avec des modalités plus standardisées",
          "Contrôles renforcés sur les certifications et la commercialisation",
          "Sanctions élargies en cas de manquement",
        ],
      },
      {
        type: "p",
        text: "Côté CFA, les exigences seront probablement plus lourdes. Pour les organismes \"continue\" comme Alertis, les évolutions seront plus mesurées mais réelles, en particulier sur la traçabilité documentaire.",
      },
      { type: "h2", text: "Notre préparation à la V10" },
      {
        type: "p",
        text: "Nous avons engagé un audit interne anticipé sur trois points clés :",
      },
      {
        type: "ul",
        items: [
          "Feuilles d'émargement : passage progressif au format dématérialisé horodaté",
          "Évaluations : harmonisation des grilles et archivage systématique",
          "Suivi post-formation : preuve de la transmission des supports et des attestations",
        ],
      },
      {
        type: "p",
        text: "Cette démarche est aussi un atout côté dossier d'audit Qualiopi : elle démontre une veille active sur les indicateurs 22, 24 et 32 (qualité des intervenants, certifications, retours bénéficiaires).",
      },
      {
        type: "p",
        text: "Référence officielle : Plan interministériel Qualité et anti-fraude — ministère du Travail / France Compétences, annonce de juillet 2025. Documentation Qualiopi sur travail-emploi.gouv.fr.",
      },
    ],
  },

  "ilcor-costr-2025-evolutions-rcp-formation-secourisme": {
    title:
      "ILCOR CoSTR 2025 : les évolutions du consensus international sur la RCP",
    excerpt:
      "Mise à jour quinquennale du Consensus on Science with Treatment Recommendations. Éducation précoce, équité d'accès, RA-VR-gamification : les grandes lignes.",
    publishedAt: "2025-10-21",
    category: "AFGSU",
    readingTime: 5,
    image: "/formations/formation-defibrillateur.jpg",
    content: [
      {
        type: "p",
        text: "Tous les cinq ans, l'International Liaison Committee on Resuscitation (ILCOR) publie son CoSTR — Consensus on Science with Treatment Recommendations. C'est la synthèse mondiale des données scientifiques sur la réanimation, et c'est sur cette base que les sociétés savantes nationales et continentales (ERC en Europe, AHA aux États-Unis) construisent leurs recommandations.",
      },
      { type: "h2", text: "Les grandes lignes du CoSTR 2025" },
      {
        type: "ul",
        items: [
          "Éducation précoce à la RCP : alerte dès 4 ans, compressions et DAE pour les adolescents",
          "Approche systémique et équité d'accès aux soins de réanimation",
          "Intégration de la réalité augmentée, de la VR et de la gamification dans la formation RCP",
          "Adaptation des recommandations aux contextes à faibles ressources",
        ],
      },
      {
        type: "p",
        text: "Le message central reste inchangé : la qualité des compressions thoraciques et l'accès rapide au défibrillateur conditionnent la survie. Ce qui évolue, c'est la manière dont on enseigne et dont on diffuse ces gestes dans la société.",
      },
      { type: "h2", text: "L'éducation précoce, axe majeur" },
      {
        type: "p",
        text: "Le CoSTR 2025 confirme que l'apprentissage de la RCP peut commencer dès l'âge de 4 ans avec un objectif d'alerte (savoir reconnaître une situation et appeler les secours). Vers 12-15 ans, l'adolescent peut apprendre des compressions efficaces et l'utilisation d'un DAE. C'est un changement de paradigme : la formation aux gestes qui sauvent doit s'installer à l'école.",
      },
      { type: "h2", text: "Côté AFGSU et secourisme français" },
      {
        type: "p",
        text: "Le CoSTR 2025 est une référence scientifique, pas un texte réglementaire français. Les gestes officiels enseignés en AFGSU 1 et 2 ne changent qu'après transposition par l'ANCESU dans son référentiel national. Cette transposition est attendue dans les 12 à 24 mois (probablement après le congrès national de décembre 2026 à Angers).",
      },
      { type: "h2", text: "Notre anticipation chez Alertis" },
      {
        type: "p",
        text: "En attendant la transposition ANCESU, nous avons ajouté dans les remises à niveau AFGSU 1 et 2 une slide \"Évolutions 2025-2026 internationales\". Elle informe les stagiaires des grandes lignes du CoSTR 2025, sans modifier les gestes officiels enseignés. C'est important pour les professionnels de santé qui suivent l'actualité scientifique : ils savent ainsi vers quoi on va.",
      },
      {
        type: "p",
        text: "Référence officielle : 2025 ILCOR CoSTR — Circulation, octobre 2025.",
      },
    ],
  },

  "erc-guidelines-2025-rotterdam-recommandations-europeennes-rcp": {
    title:
      "ERC Guidelines 2025 : ce que change le congrès de Rotterdam pour la RCP en Europe",
    excerpt:
      "Lancement officiel à Rotterdam des nouvelles recommandations européennes de réanimation. BLS, ALS, post-resuscitation care : ce qui évolue pour la formation.",
    publishedAt: "2025-10-22",
    category: "AFGSU",
    readingTime: 5,
    image: "/formations/formation-afgsu2.jpg",
    content: [
      {
        type: "p",
        text: "Octobre 2025 : le congrès Resuscitation à Rotterdam marque le lancement officiel des nouvelles ERC Guidelines 2025. Tous les cinq ans, le European Resuscitation Council met à jour ses recommandations à partir du CoSTR ILCOR. Pour les organismes de formation au secourisme et aux gestes d'urgence en France, c'est la référence directe.",
      },
      { type: "h2", text: "Le périmètre couvert" },
      {
        type: "ul",
        items: [
          "BLS adulte (Basic Life Support) — gestes de base de réanimation",
          "ALS (Advanced Life Support) — réanimation médicalisée",
          "Situations particulières (femme enceinte, hypothermie, noyade, traumatique, etc.)",
          "Post-resuscitation care",
          "Éducation et systèmes de prise en charge",
        ],
      },
      { type: "h2", text: "Les évolutions marquantes" },
      {
        type: "p",
        text: "Plusieurs points méritent l'attention :",
      },
      {
        type: "ul",
        items: [
          "Premières mentions de l'IA dans la chaîne de survie (détection précoce, dispatching)",
          "Rôle des réseaux sociaux et du plaidoyer santé pour la diffusion des gestes",
          "Insistance sur les 3-5 premières minutes : qualité des compressions, accès au DAE",
          "Approche pédagogique renouvelée, articulée avec les outils numériques",
        ],
      },
      {
        type: "p",
        text: "Sur le geste lui-même, les principes restent stables : reconnaître, alerter, comprimer, défibriller. Ce qui change, c'est l'écosystème qui entoure le geste — formation, soutien numérique, organisation de la chaîne de survie.",
      },
      { type: "h2", text: "Lien avec l'AFGSU française" },
      {
        type: "p",
        text: "La formation AFGSU en France s'appuie historiquement sur les recommandations ERC, via la transposition de l'ANCESU. Les ERC Guidelines 2025 alimenteront donc la prochaine révision du référentiel ANCESU AFGSU, attendue après le congrès national de décembre 2026 à Angers.",
      },
      { type: "h2", text: "Notre intégration progressive" },
      {
        type: "p",
        text: "En attendant la validation ANCESU, nous préparons en parallèle la refonte des séquences pédagogiques du module RCP adulte-enfant et DAE pour les AFGSU 1 et 2. L'objectif est que dès la validation officielle, nos supports soient prêts et que la transition se fasse sans rupture pour les apprenants.",
      },
      {
        type: "p",
        text: "Référence officielle : ERC Guidelines 2025, European Resuscitation Council, lancement Rotterdam octobre 2025.",
      },
    ],
  },

  "laerdal-qcpr-mannequins-connectes-formation-rcp": {
    title:
      "Mannequins QCPR de Laerdal : la simulation connectée au service de la formation RCP",
    excerpt:
      "Mannequins avec capteurs temps réel pour mesurer la qualité des compressions et de la ventilation. Une innovation pédagogique endossée par les ERC Guidelines 2025.",
    publishedAt: "2025-10-22",
    category: "Innovation pédagogique",
    readingTime: 4,
    image: "/formations/formation-gqs-gestes-qui-sauvent.jpg",
    content: [
      {
        type: "p",
        text: "Les mannequins de réanimation cardio-pulmonaire (RCP) ne sont plus de simples bustes inertes. La gamme Resusci Anne QCPR de Laerdal Medical, par exemple, intègre des capteurs qui mesurent en temps réel la qualité du geste exécuté par le stagiaire. C'est exactement ce que les ERC Guidelines 2025 mettent en avant dans leur chapitre Éducation comme outil efficace pour la rétention des compétences.",
      },
      { type: "h2", text: "Ce que mesurent les capteurs" },
      {
        type: "ul",
        items: [
          "Fréquence des compressions thoraciques (objectif : 100-120 / minute)",
          "Profondeur des compressions (objectif : 5-6 cm chez l'adulte)",
          "Relâchement complet entre les compressions",
          "Qualité de la ventilation (volume, durée)",
        ],
      },
      {
        type: "p",
        text: "L'application QCPR Instructor (iOS / Android, gratuite) permet au formateur de visualiser plusieurs mannequins simultanément, de proposer un retour individuel ou collectif, et même d'organiser un mode \"CPR Race\" pour la motivation des apprenants.",
      },
      { type: "h2", text: "Pourquoi c'est important pour la qualité de la formation" },
      {
        type: "p",
        text: "Sans feedback objectif, un stagiaire peut faire des compressions inefficaces pendant 30 minutes sans le savoir — il aura l'impression de bien faire alors que la profondeur ou la fréquence ne sont pas au standard. Les capteurs corrigent ce biais : le retour est immédiat, mesurable, et la progression sur la session est visible.",
      },
      {
        type: "p",
        text: "C'est cohérent avec ce que la littérature scientifique montre depuis dix ans : la qualité réelle des compressions, mesurée objectivement, est l'un des prédicteurs les plus forts de la survie après un arrêt cardiaque.",
      },
      { type: "h2", text: "Pertinence pour Alertis" },
      {
        type: "p",
        text: "Plusieurs de nos formations sont directement concernées : SST, MAC SST, AFGSU 1 et 2, PSC. Notre plan d'investissement 2026 prévoit l'équipement progressif de notre salle de simulation en mannequins QCPR connectés. Au-delà de la qualité pédagogique, c'est aussi une justification claire pour l'indicateur 23 de Qualiopi (innovation pédagogique et technologique).",
      },
      {
        type: "p",
        text: "L'enjeu, ce n'est pas la technologie pour la technologie : c'est de garantir qu'à l'issue de la formation, le stagiaire sache vraiment faire un massage cardiaque efficace si la situation se présente.",
      },
      {
        type: "p",
        text: "Pour en savoir plus : Laerdal Medical, gamme Resusci Anne QCPR. Référencée dans les ERC Guidelines 2025, chapitre Éducation.",
      },
    ],
  },

  "formation-incendie-realite-virtuelle-vr-evacuation-extincteurs": {
    title:
      "Réalité virtuelle et formation incendie : l'évacuation et l'extincteur en immersion",
    excerpt:
      "Modules VR pour scénarios d'évacuation et manipulation d'extincteurs. Approche hybride VR + feu réel : engagement et mémorisation supérieurs au format classique.",
    publishedAt: "2025-11-04",
    category: "Innovation pédagogique",
    readingTime: 5,
    image: "/formations/formation-incendie-en-realite-virtuelle.jpg",
    content: [
      {
        type: "p",
        text: "La formation incendie est traditionnellement structurée autour de deux moments : une partie théorique en salle, et une mise en pratique avec un bac à feu réel pour la manipulation d'extincteurs. Depuis quelques années, plusieurs éditeurs spécialisés (Virteem, Leeveo, PreventiRisk, MSécurité, YouRescue, entre autres) proposent une troisième brique : la réalité virtuelle.",
      },
      { type: "h2", text: "Ce que permet la VR en formation incendie" },
      {
        type: "ul",
        items: [
          "Simulation d'un scénario d'évacuation complet (alarme, fumée, portes bloquées)",
          "Manipulation virtuelle d'extincteurs en condition réaliste",
          "Chronométrage du point de rassemblement",
          "Mise en situation guide-file / serre-file",
          "Multi-joueurs avec coordination d'équipe",
        ],
      },
      {
        type: "p",
        text: "L'intérêt principal : on peut reproduire des situations qu'il serait impossible (ou dangereux) de simuler en présentiel — un incendie de bureau avec fumée dense, une coupure d'électricité, des portes bloquées, un blessé immobilisé. Le stagiaire vit l'événement, apprend en faisant et révise les bons réflexes.",
      },
      { type: "h2", text: "L'approche hybride recommandée" },
      {
        type: "p",
        text: "La VR ne remplace pas le feu réel — on ne sent pas la chaleur d'un extincteur dans un casque VR, ni la fumée dans la gorge. L'approche que nous trouvons la plus pertinente est hybride : VR + feu réel. La VR pour les scénarios complexes et la répétabilité, le bac à feu pour le geste technique et l'authentification sensorielle.",
      },
      { type: "h2", text: "Engagement et mémorisation" },
      {
        type: "p",
        text: "Les retours terrain remontés par les éditeurs et la littérature pédagogique convergent : l'engagement des stagiaires en formation VR est nettement supérieur au format classique, et la mémorisation à 6 mois est meilleure. Ce n'est pas magique — c'est l'effet \"je l'ai vécu\" qui ancre la connaissance.",
      },
      { type: "h2", text: "Notre démarche chez Alertis" },
      {
        type: "p",
        text: "Nous testons un partenariat avec un éditeur français en 2026 pour proposer en option intra-entreprise une session VR complémentaire de la session présentielle EPI, ESI, guide-file/serre-file. C'est un argument différenciant côté commercial, et une vraie justification de notre veille indicateur 23 (innovation pédagogique et technologique) côté Qualiopi.",
      },
      {
        type: "p",
        text: "Pour ceux qui veulent en savoir plus : Virteem, Leeveo, PreventiRisk, MSécurité, YouRescue proposent des démonstrations sur leurs sites respectifs.",
      },
    ],
  },

  "duerp-guide-pratique-rediger-et-mettre-a-jour-document-unique": {
    title:
      "DUERP : guide pratique pour rédiger et mettre à jour le document unique",
    excerpt:
      "Le Document Unique d'Évaluation des Risques Professionnels est obligatoire dès le premier salarié. Ce guide vous accompagne, étape par étape, pour le rédiger ou le mettre à jour efficacement.",
    publishedAt: "2026-05-18",
    category: "Prévention",
    readingTime: 6,
    image:
      "/images/articles/duerp-guide-pratique-rediger-et-mettre-a-jour-document-unique.jpg",
    content: [
      {
        type: "p",
        text: "Le Document Unique d'Évaluation des Risques Professionnels (DUERP) est le socle de toute politique de prévention en entreprise. Trop souvent perçu comme une formalité administrative, il peut au contraire devenir un véritable outil de pilotage — à condition d'être construit avec méthode et mis à jour régulièrement.",
      },
      { type: "h2", text: "Qui est concerné et quelle obligation ?" },
      {
        type: "p",
        text: "Toute entreprise ou association employant au moins un salarié doit disposer d'un DUERP. Les articles L.4121-1 et L.4121-3 du Code du travail imposent à l'employeur d'évaluer les risques pour la santé et la sécurité des travailleurs et de consigner les résultats par écrit. L'absence de document ou un contenu insuffisant peut engager la responsabilité de l'employeur en cas d'accident.",
      },
      { type: "h2", text: "Les quatre étapes pour construire le DUERP" },
      {
        type: "ul",
        items: [
          "Définir les unités de travail : postes, services ou activités homogènes",
          "Identifier les dangers potentiels liés à chaque unité",
          "Évaluer le niveau de risque en croisant probabilité et gravité",
          "Rédiger un plan d'actions avec responsable, délai et indicateur de suivi",
        ],
      },
      {
        type: "h2",
        text: "Définir les unités de travail : le point de départ",
      },
      {
        type: "p",
        text: "Une unité de travail regroupe des salariés exposés aux mêmes conditions. Elle peut désigner un poste (cariste, hôte de caisse), un service (logistique, accueil) ou une activité transverse (déplacements professionnels, travail sur écran). Plus le découpage est précis, plus les risques identifiés sont utiles. Un regroupement trop large masque des expositions réelles.",
      },
      { type: "h2", text: "Coter les risques : probabilité et gravité" },
      {
        type: "p",
        text: "La méthode la plus répandue croise deux critères : la probabilité qu'un événement survienne et la gravité potentielle de ses conséquences. Le produit donne un score qui permet de classer les risques et de prioriser les actions. Ce n'est pas la seule méthode — certains secteurs ajoutent un axe « fréquence d'exposition » — mais c'est la plus accessible pour une PME ou une TPE.",
      },
      {
        type: "h2",
        text: "Le plan d'actions : ce qui donne de la valeur au DUERP",
      },
      {
        type: "p",
        text: "Sans plan d'actions, le DUERP reste un diagnostic sans suite. Chaque risque prioritaire doit déboucher sur une mesure concrète : formation, équipement de protection, réaménagement de poste, procédure. Chaque action doit avoir un pilote nommé et un délai réaliste. C'est ce plan qui transforme le document en levier opérationnel.",
      },
      { type: "h2", text: "Quand mettre à jour le DUERP ?" },
      {
        type: "ul",
        items: [
          "Au moins une fois par an pour les entreprises d'au moins 11 salariés",
          "Lors de tout aménagement modifiant de façon importante les conditions de travail",
          "Après un accident du travail ou un signalement de maladie professionnelle",
          "Lorsqu'une information nouvelle sur un risque est portée à la connaissance de l'employeur",
        ],
      },
      {
        type: "quote",
        text: "Un DUERP qui n'est pas tenu à jour perd rapidement sa valeur — à la fois comme outil de management et comme document juridique.",
      },
      {
        type: "cta",
        text: "Pour former vos équipes à l'évaluation des risques professionnels,",
        label: "prenez contact via notre page dédiée",
        href: "/contact",
      },
    ],
  },

  "exercice-evacuation-incendie-comment-organiser": {
    title:
      "Exercice d'évacuation incendie : comment l'organiser efficacement en entreprise",
    excerpt:
      "L'exercice d'évacuation incendie est obligatoire — mais son efficacité dépend entièrement de sa préparation. Voici comment le planifier, l'animer et en tirer des enseignements concrets.",
    publishedAt: "2026-05-19",
    category: "Sécurité incendie",
    readingTime: 5,
    image:
      "/images/articles/exercice-evacuation-incendie-comment-organiser.jpg",
    content: [
      {
        type: "p",
        text: "Un départ de feu dans un bâtiment laisse peu de temps pour réagir. L'exercice d'évacuation est le seul moyen de s'assurer que chaque salarié connaît les gestes à faire, le trajet à emprunter et son rôle dans le dispositif. Ce n'est pas une formalité administrative : c'est un entraînement grandeur nature dont la qualité peut faire la différence le jour où ça arrive vraiment.",
      },
      {
        type: "h2",
        text: "Ce que dit la réglementation sur les exercices",
      },
      {
        type: "p",
        text: "Le Code du travail (articles R.4227-28 et suivants) impose à tout employeur de prendre les mesures nécessaires pour assurer l'évacuation rapide du personnel en cas d'incendie. Pour les établissements recevant du public (ERP), le règlement de sécurité incendie précise les modalités et la fréquence des exercices. Hors ERP, les obligations générales de prévention s'appliquent : la pratique courante est d'organiser au moins un exercice par an, deux étant recommandés pour les sites à risque élevé.",
      },
      {
        type: "h2",
        text: "Désigner les rôles avant le jour J",
      },
      {
        type: "ul",
        items: [
          "Guide d'évacuation : accompagne les occupants vers les sorties de secours et vérifie que sa zone est vide",
          "Serre-file : ferme la marche et s'assure qu'il ne reste personne derrière lui",
          "Responsable du point de rassemblement : recense les présents et remonte l'information au responsable de sécurité",
          "Équipier de première intervention (EPI) : formé à l'usage des extincteurs, autorisé à agir sur un feu naissant avant évacuation",
        ],
      },
      {
        type: "h2",
        text: "Préparer le scénario : heure et hypothèse d'incident",
      },
      {
        type: "p",
        text: "Un exercice annoncé à l'avance avec heure précise ne teste que la mémoire, pas les réflexes. Variez les créneaux — heure de pointe, pause déjeuner, fin de journée — et prévoyez un scénario crédible : sortie principale bloquée, fumée signalée dans un couloir, ascenseur hors service. Ces contraintes forcent les participants à adapter leur itinéraire et révèlent les lacunes du dispositif.",
      },
      {
        type: "h2",
        text: "Ce qu'il faut observer pendant l'exercice",
      },
      {
        type: "ul",
        items: [
          "Temps écoulé entre le déclenchement de l'alarme et l'évacuation totale du bâtiment",
          "Respect des itinéraires et des sorties de secours désignées",
          "Comportement des guides et serre-files face à des imprévus",
          "Prise en charge des personnes à mobilité réduite (PMR) ou en situation de handicap",
          "Présence et comportement des prestataires et visiteurs le jour de l'exercice",
        ],
      },
      {
        type: "h2",
        text: "Le bilan post-exercice : la vraie valeur ajoutée",
      },
      {
        type: "p",
        text: "Réunissez guides, serre-files et responsable de sécurité dans les 48 heures pour analyser les observations : temps d'évacuation, points de blocage, comportements à risque, signalisation insuffisante. Chaque anomalie doit déboucher sur une action corrective concrète — modification des plans d'évacuation, séance de rappel, renforcement de la signalétique. Consignez tout dans le registre de sécurité : cette traçabilité est obligatoire.",
      },
      {
        type: "quote",
        text: "Un exercice sans bilan ne forme pas : il rassure faussement. Ce qui compte, c'est la liste des problèmes trouvés — pas le temps record affiché.",
      },
      {
        type: "h2",
        text: "Les erreurs les plus fréquentes",
      },
      {
        type: "ul",
        items: [
          "Organiser l'exercice toujours au même créneau : les salariés jouent le jeu sans vraiment réfléchir",
          "Omettre les intérimaires, prestataires et visiteurs présents le jour J",
          "Négliger la gestion des PMR : prévoir des zones d'attente sécurisées ou une procédure d'assistance",
          "Oublier de consigner l'exercice dans le registre de sécurité",
        ],
      },
      {
        type: "cta",
        text: "Pour former vos guides d'évacuation et équipiers de première intervention,",
        label: "consultez notre page formation incendie",
        href: "/formations/incendie",
      },
    ],
  },
};
