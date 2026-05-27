// Editorial content per formation — hand-written, based on the WordPress source
// (scripts/extracted-formations/*.json) but rewritten with the right depth/tone.
// Preserves Alertis-specific elements: agrément CESU, formateurs INRS, intra/inter,
// référence Code du travail / arrêtés, effectifs 4-12.

export type FormationContent = {
  /** Lead paragraph (2-3 sentences) — what it is at a glance. */
  intro: string;
  /** Longer contextual paragraph — regulatory background, who it's for, value. */
  description: string;
  /** Pedagogical objectives — what trainees will be able to do at the end. */
  objectifs: string[];
  /** Programme outline — main blocks of the training. */
  programme: string[];
  /** Target audience — short sentence with examples. */
  publicConcerne: string;
  /** Prerequisites — leave undefined or "Aucun" if none. */
  prerequis?: string;
  /** Pedagogical approach — how the training is delivered. */
  pedagogie?: string;
  /** Validation — how the attestation is delivered. */
  validation?: string;
  /** Additional notes shown at the bottom (validité, certification, etc.) */
  notes?: string[];
};

/**
 * Default pedagogy & validation copy — applied when a formation doesn't override it.
 * Most Alertis formations follow the same pedagogical pattern.
 */
export const DEFAULT_PEDAGOGIE =
  "Approche terrain : 40 % de théorie (exposés interactifs, supports visuels) et 60 % de pratique sur matériel pédagogique. Les formateurs Alertis — tous diplômés et habilités dans leur spécialité, issus du terrain (sapeurs-pompiers SSIAP, soignants urgentistes, préventeurs INRS, électriciens habilités) — adaptent les cas concrets aux risques réels de votre activité. Effectif limité pour garantir un suivi individualisé.";

export const DEFAULT_VALIDATION =
  "Évaluation continue tout au long de la session (mises en situation, QCM, observation des gestes). Une attestation individuelle de fin de formation est remise à chaque participant, mentionnant les compétences acquises et la durée. Notre référent handicap accompagne les adaptations nécessaires (pédagogiques, matérielles, organisationnelles).";

export const formationsContent: Record<string, FormationContent> = {
  // ───────────────────────── AFGSU ─────────────────────────
  "formation-afgsu1": {
    intro:
      "L'AFGSU niveau 1 forme tous les personnels non-soignants des établissements de santé à reconnaître une urgence vitale et appliquer les gestes qui sauvent en attendant l'équipe médicale. Alertis, centre habilité par des CESU pour dispenser l'AFGSU, conforme à l'arrêté du 1ᵉʳ juillet 2019.",
    description:
      "Indispensable pour les agents administratifs, techniques ou logistiques exerçant en établissement de santé, structure médico-sociale ou auprès d'un professionnel libéral, l'AFGSU 1 répond à une obligation réglementaire pour de nombreux postes. La formation donne les clés pour identifier une situation d'urgence vitale, alerter efficacement le SAMU, protéger la victime et son environnement, et réaliser les premiers gestes de secours (libération des voies aériennes, contrôle d'hémorragie, défibrillation). Elle aborde également la gestion des urgences collectives et la prise en charge des risques NRBC-E, dans le cadre du Plan Blanc hospitalier.",
    objectifs: [
      "Identifier une urgence vitale et alerter le SAMU (15)",
      "Réaliser une libération des voies aériennes en cas d'obstruction",
      "Contrôler une hémorragie externe et prendre en charge une victime inconsciente",
      "Réagir face à un arrêt cardiaque avec un défibrillateur automatisé externe (DAE)",
      "Participer à la prise en charge d'urgences collectives et de risques NRBC-E",
    ],
    programme: [
      "Cadre réglementaire et chaîne des secours hospitalière",
      "Urgences vitales : obstruction, hémorragie, inconscience, arrêt cardiaque",
      "Urgences potentielles : malaise, plaies, brûlures, traumatismes",
      "Risques collectifs et plans d'urgence (Plan Blanc, NRBC-E)",
      "Mises en situation pratiques sur mannequins et matériel de simulation",
    ],
    publicConcerne:
      "Personnels non-soignants des établissements de santé (administratifs, techniques, logistiques), structures médico-sociales et collaborateurs de professionnels libéraux de santé (secrétaires médicaux, agents d'accueil, agents d'entretien).",
    prerequis: "Aucun.",
    pedagogie:
      "Approche terrain : 40 % de théorie (exposés interactifs, supports visuels) et 60 % de pratique sur matériel d'urgence (mannequins, défibrillateur, oxygène). Les formateurs Alertis — professionnels de santé urgentistes (médecins, IDE, ARM) titulaires de l'attestation de formation de formateur AFGSU et issus du terrain — adaptent les cas concrets aux risques réels de votre activité. Effectif limité pour garantir un suivi individualisé.",
    notes: [
      "Attestation valable 4 ans · remise à niveau obligatoire pour maintien",
      "Formateurs professionnels de santé titulaires de l'attestation de formation de formateur AFGSU, à jour de leurs compétences",
      "Éligible au financement FIFPL pour les professionnels de santé libéraux (médecins, dentistes, kinés, sages-femmes…)",
    ],
  },

  "formation-afgsu2": {
    intro:
      "L'AFGSU niveau 2 s'adresse aux professionnels de santé inscrits au Code de la santé publique. {joursLabel|Trois jours} pour maîtriser la prise en charge d'une urgence vitale en équipe et le matériel d'urgence, jusqu'à l'arrivée d'une équipe médicale. L'AFGSU 1 n'est pas un prérequis : le niveau 2 intègre déjà l'ensemble des compétences du niveau 1.",
    description:
      "L'AFGSU 2 est une obligation pour la majorité des professionnels de santé exerçant en milieu hospitalier ou en structure médico-sociale. Plus exhaustive que le niveau 1, elle prépare à intervenir avec le matériel d'urgence (chariot, oxygène, défibrillateur, aspirateur, ballon insufflateur), à coordonner une équipe pluri-professionnelle face à une détresse vitale, et à reconnaître les signes précoces d'urgence potentielle (douleur thoracique, AVC, accouchement inopiné). Elle intègre également la gestion d'événements à victimes multiples dans le cadre du Plan Blanc et la prise en charge des risques NRBC-E.",
    objectifs: [
      "Prendre en charge seul ou en équipe une urgence vitale en milieu de soins",
      "Utiliser le matériel d'urgence (chariot, oxygène, défibrillateur, aspirateur)",
      "Identifier les signes d'urgence potentielle et alerter le médecin",
      "Participer à la mise en œuvre du Plan Blanc et gérer un afflux de victimes",
      "Connaître les principes de prise en charge des risques NRBC-E",
    ],
    programme: [
      "Urgences vitales : arrêt cardiaque, détresse respiratoire, hémorragie, inconscience",
      "Utilisation du matériel d'urgence et oxygénothérapie",
      "Urgences potentielles : douleur thoracique, AVC, malaises, accouchement inopiné",
      "Gestion d'un événement à victimes multiples — Plan Blanc",
      "Atelier risques NRBC-E (Nucléaire, Radiologique, Biologique, Chimique, Explosif)",
    ],
    publicConcerne:
      "Tous les professionnels de santé inscrits au Code de la santé publique : médecins, infirmiers, aides-soignants, kinés, dentistes, sages-femmes, pharmaciens, manipulateurs radio…",
    prerequis:
      "Inscription au Code de la santé publique. L'AFGSU niveau 1 n'est pas requise : le niveau 2 intègre l'ensemble des compétences du niveau 1.",
    pedagogie:
      "Approche terrain : 40 % de théorie (exposés interactifs, supports visuels) et 60 % de pratique sur matériel d'urgence (chariot, défibrillateur, mannequins, oxygène, BAVU (ballon auto-remplisseur à valve unidirectionnelle)). Les formateurs Alertis — professionnels de santé urgentistes (médecins, IDE, ARM) titulaires de l'attestation de formation de formateur AFGSU et issus du terrain — adaptent les cas concrets aux risques réels de votre activité. Effectif limité pour garantir un suivi individualisé.",
    notes: [
      "Attestation valable 4 ans · remise à niveau obligatoire pour maintien",
      "Formateurs professionnels de santé titulaires de l'attestation de formation de formateur AFGSU, à jour de leurs compétences",
      "Éligible au financement FIFPL pour les professionnels de santé libéraux (médecins, dentistes, kinés, sages-femmes…)",
    ],
  },

  "formation-recyclage-afgsu1": {
    intro:
      "La remise à niveau AFGSU 1 réactualise les compétences acquises lors de la formation initiale, tous les 4 ans. {joursLabel|Une journée} pour rafraîchir les gestes et intégrer les évolutions des recommandations ILCOR/ERC.",
    description:
      "La validité de l'attestation AFGSU 1 est de 4 ans : passé ce délai, une session de remise à niveau est obligatoire pour rester opérationnel face à une urgence. Cette journée permet de revoir l'ensemble des conduites à tenir face aux urgences vitales et potentielles, d'intégrer les dernières mises à jour des recommandations européennes (ILCOR, ERC) sur la RCP et la défibrillation, et de bénéficier d'un retour d'expérience collectif. La méthode reste centrée sur la mise en situation pratique pour ré-ancrer les gestes durablement.",
    objectifs: [
      "Réactualiser les gestes d'urgence appris en formation initiale AFGSU 1",
      "Intégrer les évolutions des recommandations de bonne pratique",
      "Renforcer la maîtrise de la défibrillation et du massage cardiaque",
      "Prolonger la validité de l'attestation pour 4 années supplémentaires",
    ],
    programme: [
      "Rappel des urgences vitales : obstruction, hémorragie, inconscience, arrêt cardiaque",
      "Mises à jour des recommandations ILCOR / ERC",
      "Ateliers pratiques sur mannequins avec retours d'expérience",
      "Évaluation continue",
    ],
    publicConcerne:
      "Toute personne titulaire d'une AFGSU 1 dont la validité expire dans l'année — personnels non-soignants des établissements de santé.",
    prerequis:
      "Être titulaire de l'AFGSU 1 en cours de validité (moins de 4 ans).",
    pedagogie:
      "Approche terrain : 40 % de théorie (exposés interactifs, supports visuels) et 60 % de pratique sur matériel d'urgence (mannequins, défibrillateur, oxygène). Les formateurs Alertis — professionnels de santé urgentistes (médecins, IDE, ARM) titulaires de l'attestation de formation de formateur AFGSU et issus du terrain — adaptent les cas concrets aux risques réels de votre activité. Effectif limité pour garantir un suivi individualisé.",
  },

  "formation-recyclage-afgsu2": {
    intro:
      "La remise à niveau AFGSU 2 maintient les compétences des professionnels de santé tous les 4 ans. Format intensif sur {joursLabel|1 jour} pour rester opérationnel face à l'urgence et conforme à la réglementation.",
    description:
      "La remise à niveau AFGSU 2 est obligatoire pour maintenir la validité de l'attestation au-delà de 4 ans, et donc pour continuer à exercer certaines fonctions en milieu hospitalier. La session reprend les urgences vitales et potentielles en mode équipe, intègre les évolutions des recommandations (HAS, ILCOR, ERC) et propose des mises en situation Plan Blanc et NRBC-E. Le format sur {joursLabel|1 jour} permet une remise en pratique ciblée avec le matériel d'urgence (chariot, oxygène, DAE).",
    objectifs: [
      "Réactualiser la prise en charge des urgences vitales en milieu de soins",
      "Maintenir la maîtrise du matériel d'urgence (chariot, DAE, oxygène)",
      "Intégrer les évolutions des protocoles et des recommandations",
      "Prolonger la validité de l'attestation pour 4 années supplémentaires",
    ],
    programme: [
      "Rappel des urgences vitales et potentielles en équipe pluri-professionnelle",
      "Évolutions ILCOR / ERC et nouvelles recommandations HAS",
      "Mises en situation Plan Blanc et risques NRBC-E",
      "Évaluation pratique sur cas concrets",
    ],
    publicConcerne:
      "Professionnels de santé titulaires d'une AFGSU 2 dont la validité expire dans l'année.",
    prerequis:
      "Être titulaire de l'AFGSU 2 en cours de validité (moins de 4 ans).",
    pedagogie:
      "Approche terrain : 40 % de théorie (exposés interactifs, supports visuels) et 60 % de pratique sur matériel d'urgence (chariot, défibrillateur, mannequins, oxygène, BAVU (ballon auto-remplisseur à valve unidirectionnelle)). Les formateurs Alertis — professionnels de santé urgentistes (médecins, IDE, ARM) titulaires de l'attestation de formation de formateur AFGSU et issus du terrain — adaptent les cas concrets aux risques réels de votre activité. Effectif limité pour garantir un suivi individualisé.",
  },

  // ───────────────────────── SECOURISME ─────────────────────────
  "formation-sst-sauveteur-secouriste-du-travail": {
    intro:
      "La formation SST forme vos salariés à porter secours en cas d'accident du travail tout en participant à la prévention des risques. Obligatoire dans les établissements à risques (Code du travail R4224-15) et fortement recommandée partout ailleurs. Certification INRS valable 24 mois.",
    description:
      "Le Sauveteur Secouriste du Travail occupe un double rôle : il sait porter secours efficacement face à un accident du travail (PLS, RCP, défibrillation, gestion des hémorragies), mais c'est aussi un acteur de la prévention au quotidien. Il sait identifier les situations dangereuses, alerter sa hiérarchie et proposer des améliorations. Sa formation, encadrée par le référentiel INRS, lui donne les outils pour réagir vite et bien — chaque seconde compte sur un arrêt cardiaque, et la présence d'un SST sur site multiplie significativement les chances de survie d'une victime. À l'issue de l'évaluation certificative, l'acteur SST reçoit son certificat SST INRS et sa carte personnelle de SST. Il bénéficie par équivalence des compétences du PSC (Premier Secours Citoyen) — sans toutefois recevoir le document PSC officiel, qui relève d'une procédure distincte. Le certificat est valable 24 mois et son maintien passe par le MAC SST.",
    objectifs: [
      "Intervenir efficacement face à un accident du travail",
      "Pratiquer les gestes de premiers secours (PLS, RCP, défibrillation, hémorragies)",
      "Identifier les risques dans l'entreprise et participer à la prévention",
      "Obtenir le certificat SST INRS et la carte de SST",
    ],
    programme: [
      "Le SST dans la démarche de prévention de l'entreprise",
      "Protéger la zone d'accident et examiner la victime",
      "Alerter et faire alerter les secours",
      "Secourir : étouffement, saignement, inconscience, arrêt cardiaque, malaise, brûlures, traumatismes",
      "Cas concrets adaptés aux risques de votre activité",
    ],
    publicConcerne:
      "Tout salarié, quel que soit le secteur d'activité — administratif, industriel, tertiaire, médical, BTP, restauration.",
    prerequis: "Aucun.",
    notes: [
      "Certificat SST INRS + carte personnelle de SST · valable 24 mois · MAC SST obligatoire pour renouveler",
      "Équivalence PSC (Premier Secours Citoyen) acquise par compétences — sans délivrance du document officiel PSC",
      "Formateurs SST habilités INRS",
    ],
  },

  "formation-recyclage-sst-mac-sst": {
    intro:
      "Le Maintien et Actualisation des Compétences (MAC SST) est obligatoire tous les 24 mois pour conserver le certificat SST. {joursLabel|Une journée} pour réviser les gestes, intégrer les évolutions du référentiel INRS et rester opérationnel.",
    description:
      "Le MAC SST n'est pas un simple rappel : c'est une session d'évaluation et d'actualisation qui conditionne la prolongation du certificat. La journée commence par un retour d'expérience sur les interventions réelles ou simulées vécues depuis la formation initiale, suivie d'une révision complète des conduites à tenir et d'un focus sur les évolutions techniques (notamment sur la RCP et l'usage du DAE). À la fin, chaque acteur SST repart avec un certificat et une carte de SST valables 24 mois de plus.",
    objectifs: [
      "Réactualiser ses compétences d'acteur SST",
      "Intégrer les évolutions du référentiel et des recommandations",
      "Renouveler son certificat SST pour 24 mois supplémentaires",
    ],
    programme: [
      "Retour d'expérience sur les interventions menées depuis la formation initiale",
      "Révision des conduites à tenir : protéger, examiner, alerter, secourir",
      "Mise à jour sur les évolutions techniques (RCP, DAE)",
      "Évaluation des compétences sur cas concrets",
    ],
    publicConcerne:
      "Acteurs SST titulaires d'un certificat SST INRS.",
    prerequis: "Certificat d'acteur SST INRS en cours de validité.",
    validation:
      "Évaluation continue par observation des gestes lors des mises en situation et évaluation certificative finale conforme au référentiel INRS V8. À l'issue, renouvellement du certificat SST INRS et de la carte personnelle de SST pour 24 mois.",
  },

  "formation-formateur-sst": {
    intro:
      "Devenez formateur SST habilité par l'INRS. {heuresLabel|56 heures} pour acquérir la pédagogie, les techniques d'animation et la maîtrise du référentiel afin de former vos propres SST en interne.",
    description:
      "Former un formateur SST, c'est démultiplier la capacité de l'entreprise à déployer la prévention. Cette formation INRS de {joursLabel|8 jours} (56 heures non consécutives, en 4 jours puis 4 jours pour permettre une intersession pratique) est exigeante : elle combine la maîtrise technique du référentiel SST, l'acquisition de méthodes pédagogiques actives adaptées à un public adulte, l'animation de séquences théoriques et pratiques (sur mannequins, DAE pédagogique), et la capacité à évaluer rigoureusement les compétences des stagiaires. Le certificat de formateur SST est délivré par l'INRS et permet ensuite d'animer des sessions SST internes ou en organisme. Un MAC formateur tous les 36 mois est obligatoire pour conserver l'habilitation.",
    objectifs: [
      "Maîtriser le référentiel SST de l'INRS",
      "Concevoir et animer une formation SST conforme",
      "Évaluer les compétences des stagiaires SST",
      "Obtenir le certificat de formateur SST",
    ],
    programme: [
      "Cadre réglementaire et démarche de prévention en entreprise",
      "Pédagogie active et techniques d'animation pour adultes",
      "Conduite d'une session SST de A à Z",
      "Évaluations certificatives selon le référentiel INRS",
    ],
    publicConcerne:
      "Personnes amenées à former des SST en interne — préventeurs, animateurs sécurité, responsables RH formation, infirmiers du travail.",
    prerequis:
      "Être acteur SST à jour de ses compétences (certificat SST INRS en cours de validité) et avoir validé en amont la base en prévention sur le site de l'INRS (autoformation @01015 « Acquérir les bases en prévention »).",
    validation:
      "Certification INRS. Évaluation continue (observation des séquences pédagogiques animées par le stagiaire tout au long de la formation), évaluation formative (retours du formateur référent, auto-évaluation) et évaluation certificative finale conforme au référentiel INRS V8. Une attestation individuelle de fin de formation est remise à chaque participant ; en cas de validation de l'évaluation certificative, la carte officielle de formateur SST INRS est délivrée par l'INRS — valable 36 mois.",
    notes: [
      "Carte de formateur SST INRS valable 36 mois (MAC tous les 36 mois)",
    ],
  },

  "formation-mac-formateur-sst": {
    intro:
      "Le MAC formateur SST maintient l'habilitation INRS tous les 36 mois. {heuresLabel|21 heures} pour réactualiser la pédagogie, intégrer les évolutions du référentiel et continuer à animer des formations SST. Rappel : le formateur SST conduit les évaluations, mais le certificat SST est délivré par l'INRS, pas par lui-même.",
    description:
      "Le formateur SST, comme l'acteur SST qu'il forme, a une obligation de maintien et actualisation de ses compétences. Le MAC formateur se déroule sur {joursLabel|3 jours} et permet de revenir sur les sessions animées, d'identifier les difficultés rencontrées, de prendre en main les évolutions du référentiel INRS (nouveaux contenus, ajustements pédagogiques) et de remettre en pratique sur des cas types. À l'issue, l'habilitation INRS est prolongée de 36 mois. Sans MAC, le formateur perd sa compétence de formateur : il ne peut plus animer de sessions SST (le certificat SST des participants est délivré par l'INRS sur la base des évaluations conduites par le formateur — sans formateur habilité, plus de certificat INRS possible).",
    objectifs: [
      "Réactualiser ses compétences de formateur SST",
      "Intégrer les évolutions du référentiel INRS",
      "Maintenir ses compétences de formateur SST pour 36 mois supplémentaires",
    ],
    programme: [
      "Retours d'expérience sur les sessions animées",
      "Mises à jour du référentiel SST INRS",
      "Pratique pédagogique sur les nouveaux contenus",
      "Évaluation des acquis",
    ],
    publicConcerne:
      "Formateurs SST habilités INRS dont le certificat arrive à échéance.",
    prerequis: "Certificat de formateur SST INRS en cours de validité.",
  },

  "formation-psc-premiers-secours-citoyen": {
    intro:
      "Le PSC (Premier Secours Citoyen, anciennement PSC1) est la formation grand public aux premiers secours. {heuresLabel|7 heures} pour apprendre à réagir face aux situations d'urgence du quotidien — au travail, à la maison, dans la rue. Le diplôme PSC est un diplôme du ministère de l'Intérieur, délivré exclusivement par une association agréée de sécurité civile (Croix-Rouge, Protection civile, FFSS…). Alertis n'est pas habilité à délivrer ce diplôme : nous dispensons le même contenu pédagogique de référence et remettons une attestation de participation Alertis.",
    description:
      "Le PSC est la formation de référence en France pour le grand public aux gestes qui sauvent. Elle prépare à intervenir face aux situations d'urgence les plus courantes — étouffement, hémorragie, perte de conscience, arrêt cardiaque, malaise — et donne les bons réflexes pour protéger, alerter et secourir une victime jusqu'à l'arrivée des secours. Dispensée par des formateurs expérimentés, elle alterne théorie courte et pratique intensive sur mannequins. Le diplôme d'État PSC relève du ministère de l'Intérieur et n'est délivré que par les associations agréées de sécurité civile (Croix-Rouge, Protection civile, Fédération française de sauvetage et de secourisme…) ou les services publics habilités. Alertis n'étant pas une telle structure, nous remettons une attestation de participation Alertis détaillant les compétences acquises. Un recyclage tous les 3 ans est fortement conseillé pour rester opérationnel.",
    objectifs: [
      "Reconnaître une situation d'urgence et alerter les secours",
      "Réaliser les gestes de premiers secours (PLS, RCP, défibrillation)",
      "Réagir face à une hémorragie, un étouffement, une brûlure, un traumatisme",
      "Recevoir une attestation de participation Alertis détaillant les compétences acquises",
    ],
    programme: [
      "Protection et alerte",
      "Victime qui s'étouffe ou saigne abondamment",
      "Victime inconsciente qui respire (PLS)",
      "Victime inconsciente qui ne respire pas (RCP + DAE)",
      "Malaise, plaies, brûlures, traumatismes",
    ],
    publicConcerne:
      "Toute personne souhaitant savoir réagir face à une urgence, à partir de 10 ans — particuliers, salariés, encadrants jeunesse.",
    prerequis: "Aucun.",
    notes: [
      "Attestation de participation Alertis · recyclage conseillé tous les 3 ans",
      "Diplôme d'État PSC : délivré uniquement par une association agréée de sécurité civile",
    ],
  },

  "formation-recyclage-psc": {
    intro:
      "Le recyclage PSC (anciennement PSC1) actualise les gestes et intègre les évolutions des recommandations. Conseillé tous les 3 ans pour rester efficace en cas d'urgence.",
    description:
      "Même si le PSC est techniquement valable à vie, les recommandations évoluent — la technique de massage cardiaque, le rythme des compressions, l'usage du DAE ont été mis à jour à plusieurs reprises depuis 2010. Sans pratique régulière, les gestes s'oublient. Cette demi-journée de recyclage permet de réactualiser l'ensemble des conduites à tenir, de reprendre confiance face à une situation d'urgence et d'intégrer les nouvelles préconisations européennes (ILCOR/ERC). C'est aussi l'occasion de partager des cas concrets et retours d'expérience entre participants.",
    objectifs: [
      "Réactualiser les gestes de premiers secours appris en PSC",
      "Intégrer les évolutions des recommandations européennes",
      "Reprendre confiance face à une situation d'urgence",
    ],
    programme: [
      "Rappels des conduites à tenir : protéger, alerter, secourir",
      "Mises à jour : nouvelles recommandations ILCOR sur la RCP et le DAE",
      "Cas concrets et retours d'expérience",
    ],
    publicConcerne:
      "Toute personne titulaire d'un PSC souhaitant maintenir ses compétences à jour.",
    prerequis: "Attestation PSC.",
  },

  "formation-gqs-gestes-qui-sauvent": {
    intro:
      "La sensibilisation aux Gestes Qui Sauvent (GQS) est une initiation courte de {heuresLabel|2 heures} aux premiers secours d'urgence vitale. Dispositif lancé en février 2016 par le ministère de l'Intérieur après les attentats de novembre 2015, dans l'objectif de former à terme 80 % de la population aux gestes qui peuvent sauver une vie. Attention : à ne pas confondre avec la formation Défibrillateur (DAE), qui est une formation distincte.",
    description:
      "La sensibilisation Gestes Qui Sauvent est née en février 2016, sous l'impulsion du ministère de l'Intérieur, dans le sillage des attentats du 13 novembre 2015. L'idée : élever rapidement le niveau de premiers secours de la population pour qu'un témoin formé soit présent dans la majorité des situations d'urgence vitale — objectif national de 80 % de la population formée. En {heuresLabel|2 heures}, le contenu officiel se concentre sur la protection, l'alerte, la surveillance, la position latérale de sécurité, le massage cardiaque avec défibrillation et la compression d'une hémorragie. Alertis n'est pas habilité à délivrer le diplôme officiel GQS (réservé aux associations agréées de sécurité civile et aux services de l'État) : nous dispensons le même contenu pédagogique et délivrons une attestation de participation Alertis. Nous ajoutons par ailleurs deux modules complémentaires qui ne figurent pas dans le référentiel officiel mais qui nous semblent indispensables en milieu professionnel : la pose de garrot tactique et la désobstruction des voies aériennes (étouffement adulte, enfant, nourrisson).",
    objectifs: [
      "Savoir protéger, alerter et surveiller une victime",
      "Réaliser une position latérale de sécurité (PLS)",
      "Reconnaître un arrêt cardiaque et utiliser un défibrillateur",
      "Réagir face à une hémorragie externe (compression, garrot)",
      "Réagir face à un étouffement (ajout Alertis hors référentiel)",
    ],
    programme: [
      "Protéger la zone, alerter les secours (15, 18, 112)",
      "Surveillance d'une victime et position latérale de sécurité (PLS)",
      "Massage cardiaque et défibrillation automatisée externe",
      "Compression manuelle d'une hémorragie externe",
      "Pose de garrot tactique (ajout Alertis hors référentiel officiel)",
      "Désobstruction des voies aériennes — étouffement adulte/enfant/nourrisson (ajout Alertis hors référentiel officiel)",
    ],
    publicConcerne:
      "Tout public adulte, dès 10 ans. Sensibilisation sans diplôme officiel — idéale pour former massivement les collaborateurs d'un site.",
    prerequis: "Aucun.",
    validation:
      "Évaluation continue par observation des gestes lors des mises en situation. Une attestation de participation Alertis est remise à chaque participant. Le diplôme d'État GQS, lui, ne peut être délivré que par une association agréée de sécurité civile ou un service public habilité.",
    notes: [
      "Attestation de participation Alertis (pas de diplôme d'État GQS)",
      "Dispositif issu de l'arrêté du 30 juin 2017 (ministère de l'Intérieur)",
    ],
  },

  "formation-defibrillateur": {
    intro:
      "Une minute perdue, c'est 10 % de chances de survie en moins. Le défibrillateur est l'outil qui peut tout changer face à un arrêt cardiaque — encore faut-il savoir s'en servir. Formation courte à l'utilisation du défibrillateur automatisé externe (DAE) : obligatoire pour les ERP de catégorie 1 à 3 équipés d'un DAE (décret n°2018-1186), fortement recommandée partout ailleurs.",
    description:
      "Un arrêt cardiaque sans intervention immédiate fait chuter les chances de survie de 10 % par minute. Le défibrillateur, déposé en libre accès dans la plupart des ERP, permet à n'importe quel témoin de relancer le cœur — à condition que celui-ci soit en fibrillation ventriculaire, et à condition de savoir utiliser l'appareil. Le DAE analyse le rythme cardiaque et ne déclenche un choc électrique que si la fibrillation est confirmée : c'est pour cela qu'il est sûr entre toutes les mains. Cette formation de {heuresLabel|3 heures} combine théorie sur la chaîne de survie, démonstration et surtout pratique intensive sur mannequin avec un DAE pédagogique. Chacun repart avec la capacité de réaliser un massage cardiaque efficace en alternance avec le DAE, et de garder son sang-froid face à une victime en arrêt cardiaque. Conformément au décret n°2018-1186, les ERP catégorie 1 à 3 équipés d'un DAE doivent former leur personnel.",
    objectifs: [
      "Reconnaître un arrêt cardiaque",
      "Utiliser un DAE en autonomie et en sécurité",
      "Réaliser un massage cardiaque efficace en alternance avec le DAE",
    ],
    programme: [
      "Chaîne de survie et arrêt cardiaque",
      "Massage cardiaque externe (technique, fréquence, profondeur)",
      "Utilisation du DAE : étapes, sécurité, cas particuliers",
      "Pratique sur mannequin avec DAE pédagogique",
    ],
    publicConcerne:
      "Tout salarié ou agent susceptible d'intervenir en cas d'arrêt cardiaque. Personnel d'ERP équipés d'un DAE (commerces, restaurants, hôtels, salles de sport, mairies).",
    prerequis: "Aucun.",
  },

  "formation-oxygenotherapie": {
    intro:
      "Formation SST enrichie du module oxygénothérapie. {heuresLabel|14 heures} pour devenir Sauveteur Secouriste du Travail et savoir administrer de l'oxygène en situation d'urgence. Attention : l'oxygène médical est classé comme médicament (ANSM) — son administration est un acte délicat qui exige une vraie maîtrise du matériel, des indications et des risques.",
    description:
      "L'oxygène médical n'est pas un gaz anodin : il est classé comme médicament par l'ANSM, ce qui encadre strictement les conditions d'administration, de stockage et de traçabilité. C'est un acte délicat — un débit mal réglé peut être inefficace ou même délétère selon la pathologie (BPCO, hypercapnie), et une bouteille mal stockée présente un risque d'explosion en cas de contact avec un corps gras. La formation reprend le contenu complet du SST (PLS, RCP, défibrillation, hémorragies, traumatismes) et y ajoute le module oxygénothérapie : choix du dispositif (lunettes nasales, masque haute concentration, BAVU — Ballon Auto-remplisseur à Valve Unidirectionnelle, utilisé pour insuffler de l'air à une victime qui ne respire plus), réglage du débit selon la situation, surveillance de l'efficacité, manipulation et sécurité de la bouteille. Mises en situation sur mannequin et cas concrets.",
    objectifs: [
      "Maîtriser les gestes du SST (PLS, RCP, défibrillation, hémorragies)",
      "Comprendre le statut médicament de l'oxygène et ses implications réglementaires",
      "Identifier les indications et contre-indications de l'oxygénothérapie",
      "Manipuler le matériel en sécurité (bouteille, manodétendeur, masques, BAVU)",
      "Adapter le débit et le dispositif à la situation clinique",
    ],
    programme: [
      "Programme complet du SST (référentiel INRS)",
      "L'oxygène médical : statut médicament, cadre réglementaire ANSM",
      "Physiologie respiratoire et indications de l'O₂",
      "Matériel : bouteilles, débitmètres, masques, lunettes, BAVU (ballon auto-remplisseur à valve unidirectionnelle)",
      "Sécurité et stockage des bouteilles d'oxygène (risque d'explosion)",
      "Mises en situation sur mannequin et cas concrets",
    ],
    publicConcerne:
      "Salariés désignés SST en milieu à risque où la disponibilité d'oxygène est pertinente : équipes de soins, ambulanciers, secouristes en milieu industriel à risques, sites isolés ou ICPE.",
    prerequis:
      "Aucun.",
    notes: [
      "Certificat SST INRS valable 24 mois · MAC SST oxygénothérapie tous les 24 mois pour renouveler",
      "Formateurs SST habilités INRS",
      "L'oxygène médical est classé comme médicament par l'ANSM",
    ],
  },

  // ───────────────────────── SÉCURITÉ INCENDIE ─────────────────────────
  "formation-incendie": {
    intro:
      "Formation incendie obligatoire pour tous les salariés (Code du travail R4227-28 et R4227-39). {heuresLabel|3 heures} pour comprendre les risques, manipuler un extincteur et réagir efficacement face à un départ de feu.",
    description:
      "Un incendie en entreprise survient en moyenne toutes les 5 minutes en France. La majorité des sinistres aurait pu être maîtrisée avec un simple extincteur dans les premières secondes — à condition que quelqu'un sache l'utiliser sans paniquer. Cette formation, obligatoire au titre des articles R4227-28 et R4227-39 du Code du travail, donne à l'ensemble du personnel les fondamentaux : comprendre comment naît et se développe un feu, identifier le bon extincteur selon le type de combustion, et maîtriser la séquence alerter-attaquer-évacuer. La partie pratique sur bac à feu écologique (ou foyer réel selon le site) est le moment-clé où les bons réflexes s'ancrent.",
    objectifs: [
      "Comprendre le triangle du feu et les classes de feux",
      "Manipuler les différents types d'extincteurs en sécurité",
      "Donner l'alerte et déclencher l'évacuation",
      "Adopter les bons réflexes face à un départ de feu",
    ],
    programme: [
      "Théorie du feu et causes d'incendie en entreprise",
      "Classes de feux (A, B, C, D, F) et agents extincteurs adaptés",
      "Manipulation pratique sur bac à feu écologique ou foyer réel",
      "Conduite à tenir : alerter, attaquer, évacuer",
    ],
    publicConcerne:
      "Tout salarié, conformément à l'article R4227-28 du Code du travail.",
    prerequis: "Aucun.",
    notes: [
      "Exercice d'évacuation recommandé tous les 6 mois (Code du travail)",
      "Formateurs issus du milieu pompier ou de la sécurité incendie",
    ],
  },

  "formation-incendie-en-etablissement-recevant-du-public": {
    intro:
      "Formation incendie spécifique aux ERP (Établissements Recevant du Public). Conforme aux exigences de la commission de sécurité et au règlement de sécurité contre l'incendie dans les ERP (arrêté du 25 juin 1980).",
    description:
      "Dans un ERP, un incendie ne met pas seulement le personnel en danger : il met aussi en jeu la sécurité de visiteurs qui ne connaissent ni les lieux ni les procédures. La formation aborde le cadre réglementaire ERP (classification par catégorie et par type, obligations en matière de SSI, de désenfumage, d'alarme), les particularités selon votre activité (commerce, restauration, hôtellerie, culture, enseignement), et la conduite à tenir : prise en charge du public, évacuation des personnes à mobilité réduite, gestion du flux jusqu'au point de rassemblement. La partie pratique combine manipulation d'extincteurs et utilisation du SSI lorsqu'il est présent.",
    objectifs: [
      "Connaître la réglementation incendie ERP",
      "Identifier les équipements de sécurité du bâtiment (SSI, désenfumage, alarmes)",
      "Maîtriser la conduite à tenir face à un sinistre dans un ERP",
      "Gérer l'évacuation du public et des personnes à mobilité réduite",
    ],
    programme: [
      "Cadre réglementaire ERP et classification (catégories, types)",
      "Risques spécifiques selon la typologie de l'établissement",
      "Manipulation des extincteurs et utilisation du SSI",
      "Évacuation : gestion du public, des PMR, point de rassemblement",
    ],
    publicConcerne:
      "Personnel d'établissements recevant du public : commerce, restauration, hôtellerie, culture, enseignement, soins.",
    prerequis: "Aucun.",
  },

  "formation-incendie-en-immeuble-de-grande-hauteur": {
    intro:
      "Formation incendie pour les Immeubles de Grande Hauteur (IGH). Conforme aux exigences spécifiques des IGH définies par l'arrêté du 30 décembre 2011.",
    description:
      "Les IGH (bâtiments d'habitation supérieurs à 50 m ou autres usages supérieurs à 28 m) sont soumis à un régime de sécurité incendie particulièrement strict, articulé autour du compartimentage, du désenfumage mécanique, d'un SSI catégorie A et d'un Service de Sécurité Incendie permanent. L'évacuation n'est presque jamais totale : elle se fait par compartiment, vers les zones refuges, en attendant l'intervention. La formation prépare le personnel à appliquer cette stratégie spécifique, à coopérer avec le PC sécurité et à connaître le rôle du chef d'équipe et du chargé d'évacuation au sein du compartiment touché.",
    objectifs: [
      "Connaître la réglementation IGH et les contraintes spécifiques",
      "Comprendre le compartimentage et les systèmes de désenfumage",
      "Appliquer la conduite à tenir spécifique en IGH",
      "Coordonner l'évacuation par compartiment",
    ],
    programme: [
      "Réglementation IGH et rôle du Service de Sécurité Incendie",
      "Compartimentage, désenfumage, SSI de catégorie A",
      "Procédures d'évacuation spécifiques en IGH",
      "Exercices pratiques sur site",
    ],
    publicConcerne:
      "Personnel travaillant dans un IGH : bureaux, hôtels, résidences, hôpitaux > 28 ou 50 mètres.",
    prerequis: "Aucun.",
  },

  "formation-incendie-etablissements-de-soins-type-j-u": {
    intro:
      "Formation incendie spécifique aux établissements de santé (type U) et structures pour personnes âgées dépendantes (type J). Approche centrée sur l'évacuation différée et le transfert horizontal.",
    description:
      "En établissement de soins, l'évacuation totale est impossible : on ne déplace pas une réanimation, un bloc opératoire ou des résidents grabataires. La stratégie réglementaire repose sur le compartimentage et le transfert horizontal — déplacer les patients du compartiment sinistré vers un compartiment voisin coupe-feu — combiné à une évacuation différée si nécessaire. La formation aborde la réglementation spécifique aux types J (établissements pour personnes âgées dépendantes) et U (établissements de santé), les techniques de transfert avec matériel (drap d'évacuation, sangles), et la coordination entre soignants pour ne pas interrompre les soins critiques. Un exercice grandeur nature dans les conditions réelles du service ancre les réflexes.",
    objectifs: [
      "Connaître les particularités incendie des établissements types J et U",
      "Mettre en œuvre la stratégie de transfert horizontal et d'évacuation différée",
      "Manipuler les équipements de sécurité du bâtiment",
      "Coordonner la prise en charge des patients/résidents non autonomes",
    ],
    programme: [
      "Réglementation types J et U et compartimentage incendie",
      "Stratégies d'évacuation spécifiques (différée, horizontale)",
      "Pratique avec drap d'évacuation et matériel de transfert",
      "Exercice complet en conditions de service",
    ],
    publicConcerne:
      "Soignants, ASH, agents techniques d'hôpitaux, cliniques, EHPAD, MAS, FAM.",
    prerequis: "Aucun.",
  },

  "formation-incendie-en-creche": {
    intro:
      "Formation incendie adaptée aux crèches, micro-crèches et structures de petite enfance. Centrée sur l'évacuation de jeunes enfants non autonomes et les contraintes pédagogiques du lieu.",
    description:
      "Évacuer une crèche, c'est évacuer 10, 20, 60 enfants en bas âge qui ne marchent pas, qui pleurent, qui dorment. La logistique est radicalement différente d'une évacuation classique. La formation aborde les techniques de portage collectif (un adulte peut transporter plusieurs nourrissons à la fois avec les bons gestes), l'utilisation du matériel spécifique (lits-bus, sangles d'évacuation), et la posture rassurante à adopter pour ne pas amplifier la panique. Elle intègre aussi la manipulation des extincteurs et l'organisation interne (qui prend les enfants, qui prévient les parents, qui contrôle les locaux). L'exercice grandeur nature dans la structure est un moment-clé.",
    objectifs: [
      "Identifier les risques incendie spécifiques d'une crèche",
      "Évacuer rapidement et en sécurité des enfants en bas âge",
      "Utiliser les extincteurs et le matériel d'évacuation (lits-bus, sangles)",
      "Adopter une posture rassurante face aux enfants",
    ],
    programme: [
      "Théorie du feu et risques en milieu petite enfance",
      "Manipulation des extincteurs",
      "Techniques de portage et d'évacuation collective d'enfants",
      "Exercice grandeur nature dans la structure",
    ],
    publicConcerne:
      "Auxiliaires de puériculture, EJE, éducateurs, agents techniques de crèche, micro-crèches, MAM, RAM.",
    prerequis: "Aucun.",
  },

  "formation-incendie-en-realite-virtuelle": {
    intro:
      "Formation incendie immersive en réalité virtuelle. Vivez un départ de feu, une fumée envahissante, une évacuation — sans risque, avec un réalisme total. Plus marquant qu'une théorie en salle.",
    description:
      "La réalité virtuelle change radicalement la mémorisation : un participant qui « vit » un incendie en VR retient durablement les bons réflexes là où une session en salle s'oublie en quelques mois. Notre dispositif propose plusieurs scénarios — départ de feu sur écran, fumée qui envahit un open space, évacuation guidée — et permet la manipulation virtuelle d'un extincteur sur différents types de feux. Particulièrement adaptée aux populations difficiles à mobiliser (cadres pressés, équipes en télétravail, populations qui ont déjà fait des formations classiques), elle se combine très bien avec une session pratique courte sur bac à feu pour ancrer le geste physique.",
    objectifs: [
      "Vivre virtuellement un sinistre incendie en conditions réalistes",
      "Tester les bons réflexes face au feu et à la fumée",
      "Manipuler virtuellement un extincteur sur différents types de feux",
      "Ancrer durablement les conduites à tenir",
    ],
    programme: [
      "Briefing théorique sur le feu et les extincteurs",
      "Sessions VR individuelles : départ de feu, fumée, évacuation",
      "Manipulation d'un extincteur virtuel sur feux variés",
      "Débriefing collectif et retours d'expérience",
    ],
    publicConcerne:
      "Tout salarié. Particulièrement adaptée aux populations difficiles à mobiliser sur des formations classiques (cadres, équipes en télétravail, sites tertiaires).",
    prerequis:
      "Aucun. Non recommandé en cas de mal des transports sévère ou d'épilepsie photosensible.",
  },

  "formation-incendie-en-unite-mobile": {
    intro:
      "Formation incendie en unité mobile : Alertis vient dans vos locaux avec sa remorque équipée d'un générateur de flammes écologique. Aucune fumée toxique, conditions réalistes, flexibilité maximale.",
    description:
      "Beaucoup de sites n'ont pas de zone extérieure adaptée pour un bac à feu classique : sites urbains, copropriétés, bureaux en étage, écoles. Notre unité mobile résout le problème : la remorque est équipée d'un générateur de flammes au gaz contrôlé qui simule différents types de feux (friteuse, écran, tableau électrique, gaz) sans aucune fumée toxique ni dégagement gênant. Les participants s'exercent en conditions très proches du réel sur les agents extincteurs adaptés (eau, poudre, CO₂). Cette flexibilité permet de former tout votre personnel sur site, en {joursLabel|une journée}, sans logistique externe complexe.",
    objectifs: [
      "S'exercer sur feux réels sans contraintes environnementales",
      "Maîtriser la technique d'attaque d'un foyer avec un extincteur",
      "Tester différents agents extincteurs (eau, poudre, CO₂)",
      "Renforcer la confiance face à la flamme",
    ],
    programme: [
      "Rappels théoriques (triangle du feu, classes, agents)",
      "Démonstrations de feux contrôlés (gaz, friteuse, écran, tableau électrique)",
      "Exercices pratiques individuels avec extincteurs adaptés",
      "Bilan et conduite à tenir",
    ],
    publicConcerne:
      "Tout salarié. Solution idéale pour les sites urbains sans extérieur disponible.",
    prerequis: "Aucun.",
  },

  "formation-equipier-de-premiere-intervention": {
    intro:
      "Formation Équipier de Première Intervention (EPI). {heuresLabel|7 heures} pour former une équipe capable d'intervenir efficacement sur un départ de feu avec les moyens disponibles avant l'arrivée des secours.",
    description:
      "L'Équipier de Première Intervention est le maillon décisif entre la détection du feu et l'arrivée des pompiers. Sa mission : éteindre le feu naissant avec les moyens du bord (extincteurs, RIA), ou — si le foyer est trop important — donner l'alerte, encadrer l'évacuation et préparer l'arrivée des secours. La formation va plus loin que la sensibilisation incendie classique : elle approfondit la théorie du feu, fait pratiquer chaque participant sur plusieurs extincteurs (eau pulvérisée, poudre, CO₂), introduit l'utilisation des Robinets d'Incendie Armés, et travaille les cas concrets en binôme. Une équipe d'EPI bien formée transforme un site en environnement résilient face au risque feu.",
    objectifs: [
      "Reconnaître un départ de feu et donner l'alerte",
      "Utiliser tous les moyens d'extinction disponibles sur site (extincteurs, RIA)",
      "Évaluer la situation et décider d'attaquer ou d'évacuer",
      "Encadrer une évacuation partielle si nécessaire",
    ],
    programme: [
      "Théorie du feu approfondie",
      "Manipulation des extincteurs (eau pulvérisée, poudre, CO₂)",
      "Utilisation des Robinets d'Incendie Armés (RIA)",
      "Cas concrets et exercices en binôme",
    ],
    publicConcerne:
      "Salariés désignés pour former l'équipe d'intervention de premier niveau dans l'entreprise — agents de maintenance, gardiens, équipes terrain.",
    prerequis: "Aucun. Formation incendie de base recommandée.",
  },

  "formation-equipier-de-seconde-intervention": {
    intro:
      "Formation Équipier de Seconde Intervention (ESI). {heuresLabel|14 heures} pour former des équipiers capables de mener une intervention soutenue sur un sinistre, jusqu'au passage de relais aux services de secours.",
    description:
      "Présent dans les sites industriels à risque élevé (chimie, pétrochimie, métallurgie, logistique de matières dangereuses) et certains tertiaires sensibles, l'Équipier de Seconde Intervention prend le relais de l'EPI quand le feu dépasse les moyens de première attaque. Sa formation aborde l'établissement de lances et l'alimentation hydraulique, la reconnaissance en milieu enfumé sous Appareil Respiratoire Isolant (ARI), le sauvetage de victime en zone enfumée et la coordination jusqu'à l'arrivée des sapeurs-pompiers. Elle exige une aptitude médicale au port de l'ARI et constitue un investissement majeur pour les sites où le délai d'intervention des secours est significatif.",
    objectifs: [
      "Maîtriser les techniques d'extinction sur feux établis",
      "Utiliser l'ensemble des moyens hydrauliques du site",
      "Travailler en équipe sous Appareils Respiratoires Isolants (ARI)",
      "Préparer l'arrivée des services de secours extérieurs",
    ],
    programme: [
      "Comportement du feu et phénomènes thermiques",
      "Établissement de lances et alimentation hydraulique",
      "Reconnaissance et progression en milieu enfumé",
      "Sauvetage et passage de relais aux pompiers",
    ],
    publicConcerne:
      "Membres désignés du Service de Sécurité Incendie d'un site industriel ou tertiaire à risques (chimie, pétrochimie, logistique MD, data center).",
    prerequis:
      "Formation EPI ou expérience équivalente · aptitude médicale au port de l'ARI.",
  },

  "formation-appareil-respiratoire-isolant": {
    intro:
      "Formation au port de l'Appareil Respiratoire Isolant (ARI). {heuresLabel|7 heures} pour évoluer en sécurité dans une atmosphère non respirable lors d'une intervention sur incendie ou en milieu confiné.",
    description:
      "L'ARI est un équipement vital — mais aussi exigeant : sa mauvaise manipulation peut transformer un sauvetage en accident grave. La formation aborde la physiologie respiratoire et la toxicologie des fumées (CO, HCN, particules), la description complète de l'appareil (bouteille, détendeur, pièce faciale, soupape à la demande), les contrôles obligatoires avant chaque utilisation, les techniques d'endossage et de mise en pression, et la gestion de l'autonomie d'air (signalisation sonore, manomètre, calcul du repli). Le parcours d'évolution sous ARI en conditions difficiles (visibilité réduite, obstacles, bruit) ancre la maîtrise du matériel et la confiance en équipe.",
    objectifs: [
      "Connaître les principes de fonctionnement d'un ARI",
      "Réaliser les contrôles avant utilisation",
      "Évoluer en sécurité sous ARI en équipe",
      "Gérer son autonomie d'air",
    ],
    programme: [
      "Physiologie respiratoire et toxicologie des fumées",
      "Description et contrôle de l'ARI",
      "Endossage, mise en pression, contrôles d'étanchéité",
      "Parcours d'évolution sous ARI et exercices d'autosauvetage",
    ],
    publicConcerne:
      "Équipiers de Seconde Intervention, membres de SSIAP, agents intervenant en milieu confiné ou ATEX, pompiers d'entreprise.",
    prerequis: "Aptitude médicale au port de l'ARI (visite médicale spécifique).",
  },

  "formation-de-formateur-incendie": {
    intro:
      "Formation de formateur incendie. {joursLabel|5 jours} pour acquérir la pédagogie, la maîtrise technique et la posture nécessaires à former à votre tour les EPI et le personnel de l'entreprise.",
    description:
      "Devenir formateur incendie, c'est combiner trois savoir-faire : la maîtrise technique pointue (réglementation, théorie du feu, équipements, conduite à tenir), la pédagogie active adaptée à un public adulte (alternance théorie/pratique, gestion de groupe, exercices), et la sécurité absolue lors des manipulations sur bac à feu. La formation aborde successivement ces trois dimensions, avec des mises en situation pédagogique où chaque stagiaire anime une séquence devant le groupe et reçoit un feedback constructif. À l'issue, le participant est capable de concevoir, animer et évaluer une formation incendie complète au sein de son entreprise — un atout majeur pour des sites qui forment beaucoup de personnes.",
    objectifs: [
      "Maîtriser les contenus techniques incendie (théorie, matériel, réglementation)",
      "Concevoir une session de formation adaptée à un public",
      "Animer une formation avec exercices pratiques et bac à feu",
      "Évaluer les acquis des stagiaires",
    ],
    programme: [
      "Réglementation incendie en milieu professionnel",
      "Techniques pédagogiques pour adultes",
      "Animation de la partie théorique et de la partie pratique",
      "Gestion du bac à feu et de la sécurité des exercices",
      "Évaluation des acquis et délivrance d'attestations",
    ],
    publicConcerne:
      "Préventeurs, animateurs sécurité, formateurs internes souhaitant être habilités à former en incendie.",
    prerequis:
      "Expérience en sécurité incendie (SSIAP, pompier volontaire, EPI/ESI) ou en pédagogie.",
  },

  "formation-incendie-evacuation-guide-serre-file": {
    intro:
      "Formation Évacuation — Guide-file et Serre-file. {heuresLabel|3h30} pour organiser une évacuation sûre et complète : qui guide, qui ferme la marche, qui contrôle les locaux. Obligatoire dans tous les établissements (arrêté du 25 juin 1980 et Code du travail R4227-39).",
    description:
      "Une évacuation efficace ne s'improvise pas : sans organisation, le personnel se disperse, certains restent dans des locaux et l'effectif au point de rassemblement est faux. Le binôme guide-file / serre-file structure l'évacuation : le guide ouvre la marche vers la sortie connue, le serre-file ferme et vérifie chaque local (toilettes, salles fermées, bureaux isolés) en s'assurant que personne n'est resté. La formation détaille les rôles, traite les cas particuliers (personnes à mobilité réduite, visiteurs, fumée dans le cheminement principal) et se conclut par un exercice d'évacuation grandeur nature dans vos locaux, suivi d'un débriefing identifiant les points à améliorer dans votre procédure.",
    objectifs: [
      "Connaître les missions du guide-file et du serre-file",
      "Maîtriser le parcours d'évacuation et le point de rassemblement",
      "Gérer une évacuation avec personnes à mobilité réduite",
      "Conduire un exercice d'évacuation et en faire le débriefing",
    ],
    programme: [
      "Cadre réglementaire de l'évacuation en entreprise et ERP",
      "Rôles et responsabilités : guide-file, serre-file, responsable d'évacuation",
      "Stratégies d'évacuation : totale, partielle, transfert horizontal",
      "Exercice pratique d'évacuation sur site",
    ],
    publicConcerne:
      "Salariés désignés comme guides ou serre-files dans le Document Unique ou le registre de sécurité.",
    prerequis: "Aucun.",
  },

  "formation-manipulation-extincteur": {
    intro:
      "Formation courte centrée sur la manipulation pratique des extincteurs. Format idéal pour sensibiliser massivement les équipes sans bloquer une demi-journée.",
    description:
      "Pour beaucoup d'entreprises, la difficulté n'est pas de former — c'est de mobiliser toute l'équipe sur une demi-journée. La formation manipulation extincteur résout ce problème avec un format compact de {heuresLabel|2 heures} qui va à l'essentiel : rappel du triangle du feu et des classes (A, B, C, D, F), choix du bon agent extincteur (eau, poudre, CO₂, mousse), et pratique intensive sur bac à feu. Chaque participant manipule plusieurs extincteurs sur différents foyers. Format particulièrement adapté pour les sessions de renforcement (entre deux formations complètes) ou pour des populations peu disponibles. Conforme à l'obligation pratique du Code du travail R4227-39.",
    objectifs: [
      "Identifier le bon extincteur selon le type de feu",
      "Manipuler en autonomie un extincteur sur un départ de feu",
      "Connaître les limites d'utilisation et les risques",
    ],
    programme: [
      "Triangle du feu et classes (A, B, C, D, F)",
      "Agents extincteurs : eau, poudre, CO₂, mousse",
      "Manipulation pratique sur bac à feu",
      "Conduite à tenir après usage d'un extincteur",
    ],
    publicConcerne: "Tout salarié.",
    prerequis: "Aucun.",
  },

  "formation-premier-temoin-incendie": {
    intro:
      "Formation Premier Témoin. Sensibilisation ultra-courte aux 3 bons réflexes face à un départ de feu : alerter, attaquer si possible, évacuer. Idéal pour un onboarding ou une piqûre de rappel.",
    description:
      "La formation Premier Témoin est la sensibilisation la plus courte du catalogue — {heuresLabel|1h30} pour donner les trois réflexes vitaux à toute personne susceptible d'être la première à apercevoir un départ de feu : alerter sans délai et avec les bonnes informations, évaluer si l'attaque est possible avec un extincteur, et évacuer correctement si le feu dépasse les moyens disponibles. Format conçu pour les nouveaux arrivants, les intérimaires, les prestataires intervenant ponctuellement ou les visiteurs réguliers. Une démonstration et une manipulation rapide d'extincteur clôt la session — pas de certification, mais des réflexes opérationnels en très peu de temps.",
    objectifs: [
      "Donner l'alerte de manière efficace",
      "Évaluer la situation et décider d'attaquer le feu ou de fuir",
      "Manipuler un extincteur sur un petit foyer",
    ],
    programme: [
      "Sensibilisation au risque incendie",
      "Conduite à tenir : alerter, attaquer, évacuer",
      "Démonstration et manipulation rapide d'un extincteur",
    ],
    publicConcerne:
      "Nouveaux arrivants, intérimaires, prestataires intervenant ponctuellement, visiteurs réguliers.",
    prerequis: "Aucun.",
  },

  "formation-ssi-systeme-de-securite-incendie": {
    intro:
      "Formation à l'exploitation d'un Système de Sécurité Incendie (SSI). {heuresLabel|7 heures} pour comprendre l'architecture du SSI, lire les centrales, mettre en/hors service les détecteurs et gérer une alarme.",
    description:
      "Le SSI est l'épine dorsale de la sécurité incendie d'un bâtiment : Système de Détection (SDI), Centralisateur de Mise en Sécurité Incendie (CMSI), Dispositifs Commandés Terminaux (DCT comme le désenfumage, le compartimentage, l'arrêt des installations techniques). Sa bonne exploitation suppose de comprendre cette architecture, de savoir lire les informations remontées par les centrales (alarme feu, dérangement, mise hors service), et de réaliser les mises en/hors service ponctuelles lors de travaux (points chauds, soudure). La formation aborde aussi la gestion des fausses alarmes — un sujet récurrent — et inclut une pratique sur centrale lorsque le matériel est disponible sur site.",
    objectifs: [
      "Comprendre l'architecture d'un SSI (catégories A à E)",
      "Lire et interpréter les informations d'une centrale incendie",
      "Effectuer les mises en/hors service ponctuelles (travaux, points chauds)",
      "Réagir face à une alarme et au déclenchement du désenfumage",
    ],
    programme: [
      "Composition du SSI : SDI, CMSI, DCT",
      "Catégories de SSI et obligations réglementaires",
      "Manipulation pratique sur centrale (selon site)",
      "Gestion d'alarmes vraies et fausses",
    ],
    publicConcerne:
      "Agents de sécurité, services techniques, gardiens d'immeuble, agents d'accueil chargés de la surveillance du SSI.",
    prerequis: "Aucun.",
  },

  // ───────────────────────── HABILITATION ÉLECTRIQUE ─────────────────────────
  "habilitation-electrique-h0-b0": {
    intro:
      "Habilitation H0/B0 pour personnel non-électricien intervenant à proximité d'installations électriques sans manipuler de tension. Conforme à la norme NF C18-510, obligatoire avant délivrance par l'employeur.",
    description:
      "L'habilitation électrique n'est pas un diplôme : c'est un titre que l'employeur attribue après avoir constaté que le salarié a les compétences nécessaires pour intervenir en sécurité. Pour les non-électriciens qui travaillent à proximité de zones sous tension (peintres dans un local électrique, agents d'entretien qui nettoient une armoire, BTP qui creuse près d'un câble), la formation H0/B0 est le préalable obligatoire. Elle apprend à reconnaître les zones d'environnement, respecter les distances de sécurité, porter les EPI adaptés, et adopter la bonne conduite en cas d'incident ou d'incendie d'origine électrique. La formation se conclut par une évaluation théorique et pratique débouchant sur un avis pour habilitation.",
    objectifs: [
      "Connaître les dangers de l'électricité et les zones d'environnement",
      "Identifier les limites de son habilitation (B0 / H0 / H0V)",
      "Adopter les bons réflexes en cas d'incident électrique",
      "Obtenir l'avis pour habilitation par l'employeur",
    ],
    programme: [
      "Effets du courant sur le corps humain",
      "Distances de sécurité et zones d'environnement",
      "Équipements de Protection Individuelle (EPI)",
      "Conduite à tenir en cas d'accident ou d'incendie d'origine électrique",
      "Évaluation théorique et pratique",
    ],
    publicConcerne:
      "Personnel non-électricien amené à intervenir dans un local électrique ou à proximité : peintres, maçons, agents d'entretien, plombiers, agents techniques de mairie.",
    prerequis:
      "Aucun pré-requis technique. Bonne compréhension du français écrit et parlé.",
    notes: [
      "Avis pour habilitation valable 3 ans · recyclage NF C18-510",
    ],
  },

  "recyclage-habilitation-electrique-h0-b0": {
    intro:
      "Recyclage de l'habilitation H0/B0, à effectuer tous les 3 ans (norme NF C18-510). {heuresLabel|7 heures} pour réactualiser ses connaissances et conserver son titre d'habilitation.",
    description:
      "La norme NF C18-510 impose un recyclage périodique pour maintenir une habilitation électrique. Pour H0/B0, l'intervalle recommandé est de 3 ans. Le recyclage n'est pas une simple répétition : il combine un retour d'expérience sur les situations rencontrées, une mise à jour des évolutions normatives (la norme NF C18-510 est régulièrement révisée), un rappel des notions fondamentales (zones, distances, EPI) et une nouvelle évaluation théorique et pratique. À l'issue, l'avis pour habilitation est renouvelé par l'employeur. Sans recyclage, le titre devient caduc et l'agent ne peut plus accéder aux zones d'environnement.",
    objectifs: [
      "Réactualiser les connaissances en prévention du risque électrique",
      "Intégrer les évolutions de la norme NF C18-510",
      "Renouveler l'avis pour habilitation",
    ],
    programme: [
      "Retour d'expérience et rappels des notions de base",
      "Mises à jour réglementaires et normatives",
      "Cas pratiques et évaluations",
    ],
    publicConcerne: "Personnel habilité H0/B0 dont le titre arrive à échéance.",
    prerequis: "Titre d'habilitation H0/B0 en cours de validité.",
  },

  "habilitation-electrique-bs-be-manoeuvre": {
    intro:
      "Habilitation BS / BE Manœuvre pour personnel chargé de petites interventions de remplacement et de manœuvres en BT (changement d'ampoule, réarmement de disjoncteur). {heuresLabel|14 heures} théorie + pratique.",
    description:
      "Entre le non-électricien (B0) et l'électricien (BR), il existe un profil intermédiaire : l'agent qui effectue des opérations simples — changer une ampoule, remplacer une prise, raccorder un appareil, réarmer un disjoncteur. La norme NF C18-510 lui attribue les indices BS (Basse tension, intervention de remplacement et de raccordement) et BE Manœuvre. La formation aborde les bases de l'électricité, les risques associés, les opérations strictement autorisées par chaque indice (et leurs limites), et conclut par une évaluation pratique sur équipements représentatifs. C'est le bon niveau pour les gardiens d'immeuble, agents techniques de collectivités, services généraux.",
    objectifs: [
      "Réaliser des opérations simples sur installations BT (remplacement, raccordement)",
      "Effectuer des manœuvres en BT (réarmement, mise sous/hors tension)",
      "Identifier et respecter les limites de son habilitation",
      "Obtenir l'avis pour habilitation BS et/ou BE Manœuvre",
    ],
    programme: [
      "Notions élémentaires d'électricité et risques associés",
      "Opérations autorisées en BS : remplacement, raccordement",
      "Manœuvres autorisées en BE : réarmement, séparation de l'alimentation",
      "Pratique sur équipements représentatifs",
      "Évaluation théorique et pratique",
    ],
    publicConcerne:
      "Agents de maintenance, gardiens d'immeuble, services généraux, agents techniques de mairie, personnels de syndic.",
    prerequis: "Aucun pré-requis technique. Aptitude médicale.",
    notes: [
      "Avis valable 3 ans · recyclage NF C18-510",
    ],
  },

  "recyclage-habilitation-electrique-bs-be": {
    intro:
      "Recyclage BS / BE Manœuvre tous les 3 ans. {heuresLabel|14 heures} pour réactualiser pratique et théorie et renouveler son habilitation.",
    description:
      "Le recyclage BS/BE Manœuvre est obligatoire tous les 3 ans pour maintenir l'habilitation. Sur {heuresLabel|14 heures}, il revient sur les opérations simples (remplacement, raccordement) et les manœuvres autorisées (réarmement, séparation), avec une part importante de pratique sur équipements. C'est aussi l'occasion d'aborder les évolutions de la norme NF C18-510 et de prendre du recul sur les situations rencontrées depuis la formation initiale. L'évaluation finale conditionne le renouvellement du titre par l'employeur.",
    objectifs: [
      "Réactualiser les opérations simples et manœuvres en BT",
      "Mettre à jour ses connaissances sur la norme NF C18-510",
      "Renouveler le titre BS et/ou BE Manœuvre",
    ],
    programme: [
      "Rappels théoriques sur les risques et la prévention",
      "Pratique BS (remplacement d'éléments) et BE (manœuvres)",
      "Retours d'expérience et cas concrets",
      "Évaluation finale",
    ],
    publicConcerne:
      "Titulaires d'une habilitation BS / BE Manœuvre arrivant à échéance.",
    prerequis:
      "Titre d'habilitation BS et/ou BE Manœuvre en cours de validité.",
  },

  "habilitation-electrique-br-b1-b2-bc": {
    intro:
      "Habilitation B1/B2/BR/BC pour électriciens intervenant en BT. {heuresLabel|21 heures} pour maîtriser les opérations électriques en toute sécurité, du dépannage simple à la consignation. Norme NF C18-510.",
    description:
      "C'est l'habilitation de référence pour les électriciens BT — celle qui permet de réaliser des travaux hors tension (B1 exécutant, B2 chargé de travaux), des interventions de dépannage et raccordement (BR), et des opérations de consignation (BC). La formation de {joursLabel|3 jours} combine la théorie pointue (réglementation, normes, schémas, EPI/EPC spécifiques), les procédures de consignation step-by-step, et une grosse partie pratique sur installations BT représentatives. À l'issue, l'avis pour habilitation est délivré et l'employeur attribue le titre. C'est l'habilitation indispensable pour les techniciens de maintenance, monteurs câbleurs, dépanneurs, électriciens industriels.",
    objectifs: [
      "Réaliser des travaux et interventions BT en sécurité",
      "Consigner et déconsigner un ouvrage électrique",
      "Encadrer une équipe d'exécutants (B2)",
      "Effectuer des dépannages BT (BR)",
    ],
    programme: [
      "Risques électriques et normes en vigueur",
      "Procédures de consignation (BC)",
      "Travaux hors tension B1/B2",
      "Dépannage et raccordement BR",
      "Travaux pratiques sur installations BT",
    ],
    publicConcerne:
      "Électriciens, techniciens de maintenance, monteurs câbleurs, dépanneurs, électriciens industriels.",
    prerequis:
      "Formation initiale en électricité ou expérience professionnelle en électricité BT.",
    notes: [
      "Avis valable 3 ans · recyclage NF C18-510",
    ],
  },

  "recyclage-habilitation-electrique-br-b1-b2-bc": {
    intro:
      "Recyclage B1/B2/BR/BC tous les 3 ans. {heuresLabel|14 heures} pour conserver son titre d'habilitation et intégrer les évolutions de la norme.",
    description:
      "Pour les électriciens BT habilités B1/B2/BR/BC, le recyclage triennal est l'occasion de réactualiser la rigueur sur la consignation, les travaux hors tension et le dépannage. La norme NF C18-510 évolue régulièrement (dernière révision 2023) : nouvelles définitions d'opérations, ajustements sur les EPI, précisions sur les zones d'environnement. Le recyclage couvre ces évolutions, propose une pratique intensive sur installations BT et conclut par une évaluation théorique et pratique. Sans ce recyclage, l'habilitation devient caduque et l'électricien ne peut plus intervenir sur les ouvrages BT.",
    objectifs: [
      "Réactualiser les opérations sur installations BT",
      "Maintenir les procédures de consignation",
      "Intégrer les évolutions normatives",
      "Renouveler le titre d'habilitation",
    ],
    programme: [
      "Rappels théoriques et retour d'expérience",
      "Procédures de consignation et travaux hors tension",
      "Pratique sur installations BT",
      "Évaluation finale théorique et pratique",
    ],
    publicConcerne:
      "Titulaires d'une habilitation B1/B2/BR/BC arrivant à échéance.",
    prerequis: "Titre d'habilitation en cours de validité.",
  },

  "habilitation-electrique-photovoltaique-bp": {
    intro:
      "Habilitation BP photovoltaïque pour techniciens intervenant sur installations solaires en BT. {heuresLabel|14 heures} pour maîtriser les spécificités du PV : courant continu, mise en sécurité, raccordement.",
    description:
      "Le photovoltaïque a des risques électriques très spécifiques que n'aborde pas une habilitation BT classique : les panneaux produisent dès qu'il y a de la lumière (impossible de « couper » la source), le courant continu présente des arcs particulièrement persistants, et la configuration string/onduleur exige une procédure de mise en sécurité bien précise. La formation BP est dédiée à ces particularités. Elle aborde l'architecture d'une installation PV, les risques liés à la non-coupure des modules, les procédures de mise en sécurité et de consignation côté DC et AC, et inclut une pratique sur installation pédagogique. Indispensable pour les installateurs et techniciens de maintenance qui étendent leur activité au solaire.",
    objectifs: [
      "Comprendre les risques spécifiques aux installations photovoltaïques",
      "Mettre en sécurité une installation PV avant intervention",
      "Réaliser le raccordement et la mise en service en sécurité",
      "Obtenir l'avis pour habilitation BP",
    ],
    programme: [
      "Architecture d'une installation photovoltaïque (modules, onduleurs, BT)",
      "Risques liés au courant continu et à la non-coupure des modules",
      "Procédures de mise en sécurité et de consignation",
      "Pratique sur installation pédagogique",
      "Évaluation théorique et pratique",
    ],
    publicConcerne:
      "Installateurs et techniciens de maintenance photovoltaïque, électriciens étendant leur activité au solaire, opérateurs de centrales PV.",
    prerequis:
      "Habilitation électrique BT (BR souhaitée) et formation initiale en électricité.",
  },

  "recyclage-habilitation-electrique-photovoltaique-bp": {
    intro:
      "Recyclage BP photovoltaïque tous les 3 ans. {heuresLabel|7 heures} pour conserver son titre d'habilitation BP et intégrer les évolutions de la norme NF C18-510 sur le solaire.",
    description:
      "Pour les techniciens habilités BP qui interviennent sur installations photovoltaïques, le recyclage triennal est l'occasion de réactualiser les bonnes pratiques de mise en sécurité côté DC et AC, et d'intégrer les évolutions normatives (amendements de la NF C18-510 sur le PV, retours d'expérience accidents). La journée alterne rappels théoriques sur les risques spécifiques du photovoltaïque, mises à jour réglementaires et pratique sur installation PV pédagogique. Sans recyclage, l'habilitation BP devient caduque et le technicien ne peut plus intervenir sur les installations solaires.",
    objectifs: [
      "Réactualiser les opérations de mise en sécurité sur installations PV",
      "Intégrer les évolutions normatives de la NF C18-510 sur le solaire",
      "Maintenir les bons réflexes face aux risques du courant continu",
      "Renouveler le titre d'habilitation BP",
    ],
    programme: [
      "Rappels théoriques et retour d'expérience accidents PV",
      "Évolutions normatives de la NF C18-510 (amendements PV)",
      "Procédures de mise en sécurité et de consignation côté DC/AC",
      "Pratique sur installation photovoltaïque pédagogique",
      "Évaluation finale théorique et pratique",
    ],
    publicConcerne:
      "Titulaires d'une habilitation BP photovoltaïque arrivant à échéance.",
    prerequis:
      "Habilitation BP en cours de validité ou expirée depuis moins de 12 mois.",
  },

  "habilitation-electrique-bf-hf-fouille": {
    intro:
      "Habilitation BF/HF pour les travaux de fouille à proximité de réseaux électriques enterrés. {heuresLabel|14 heures} pour identifier les risques, respecter les distances de sécurité et appliquer la procédure DT-DICT.",
    description:
      "Sur un chantier de terrassement, de VRD ou de plantation, le contact avec un câble enterré sous tension est l'un des accidents les plus graves du secteur — choc électrique, brûlure, arc qui peut tuer à plusieurs mètres. La norme NF C18-510 impose une habilitation BF (basse tension) ou HF (haute tension) à toute personne effectuant des travaux d'ordre non électrique à proximité de réseaux électriques enterrés. La formation aborde la lecture des plans de récolement et des réponses aux DT-DICT, le marquage-piquetage, les distances minimales d'approche, la conduite à tenir en cas d'arrachement ou de défaut, et les EPI adaptés. À ne pas confondre avec l'AIPR (autorisation d'intervention à proximité de réseaux) qui couvre tous les réseaux : la BF/HF est spécifique au risque électrique.",
    objectifs: [
      "Identifier les risques liés aux réseaux électriques enterrés (BT et HT)",
      "Respecter les distances minimales d'approche et les procédures DT-DICT",
      "Appliquer le marquage-piquetage et les règles de sécurité chantier",
      "Réagir face à un incident (arrachement, défaut d'isolement)",
      "Obtenir l'avis pour habilitation BF/HF",
    ],
    programme: [
      "Cadre réglementaire : NF C18-510, décret anti-endommagement, DT-DICT",
      "Identification et localisation des réseaux électriques enterrés",
      "Distances de sécurité, marquage-piquetage, ordre d'exécution",
      "EPI et matériel adaptés aux travaux de fouille",
      "Conduite à tenir en cas d'incident ou d'arrachement",
      "Évaluation théorique et mises en situation pratiques",
    ],
    publicConcerne:
      "Conducteurs d'engins, terrassiers, salariés du BTP / VRD, paysagistes, employés communaux, plombiers, fontainiers — toute personne effectuant des travaux de fouille ou de terrassement à proximité de réseaux électriques.",
    prerequis:
      "Aucun prérequis électrique. Connaissance des règles générales de sécurité chantier souhaitée.",
  },

  "recyclage-habilitation-electrique-bf-hf-fouille": {
    intro:
      "Recyclage BF/HF tous les 3 ans. {heuresLabel|7 heures} pour maintenir son habilitation aux travaux à proximité de réseaux enterrés et intégrer les évolutions normatives.",
    description:
      "Pour les titulaires d'une habilitation BF ou HF (terrassement, VRD, BTP), le recyclage triennal réactualise les bons réflexes face aux réseaux enterrés : distances minimales, lecture des DT-DICT, marquage-piquetage, EPI. La journée intègre les évolutions de la norme NF C18-510 et de la réglementation anti-endommagement, et s'appuie sur les retours d'expérience accidents récents — les chantiers de fouille restent l'une des principales sources d'accidents électriques mortels en France. Sans recyclage, l'habilitation devient caduque.",
    objectifs: [
      "Réactualiser les règles de sécurité face aux réseaux enterrés",
      "Intégrer les évolutions de la NF C18-510 et de la réglementation DT-DICT",
      "Analyser les retours d'expérience d'accidents récents",
      "Renouveler le titre d'habilitation BF/HF",
    ],
    programme: [
      "Rappels théoriques et évolutions normatives",
      "Retour d'expérience accidents sur chantier de fouille",
      "Procédures DT-DICT, marquage-piquetage, distances de sécurité",
      "Mises en situation pratiques",
      "Évaluation finale théorique et pratique",
    ],
    publicConcerne:
      "Titulaires d'une habilitation BF ou HF arrivant à échéance — BTP, VRD, terrassement, paysagistes, employés de collectivités.",
    prerequis:
      "Habilitation BF ou HF en cours de validité ou expirée depuis moins de 12 mois.",
  },

  // ───────────────────────── ERGONOMIE ─────────────────────────
  "formation-gestes-et-postures": {
    intro:
      "Formation Gestes et Postures. {heuresLabel|7 heures} pour adopter les bons gestes au travail et prévenir les troubles musculo-squelettiques (TMS), première cause de maladie professionnelle reconnue en France.",
    description:
      "Les TMS représentent 87 % des maladies professionnelles reconnues en France. Lombalgies, tendinites de l'épaule, syndrome du canal carpien : ces pathologies s'installent insidieusement et coûtent extrêmement cher — en arrêts de travail, en aménagements de poste, en restrictions médicales. La formation Gestes et Postures n'est pas une simple répétition de « pliez les genoux » : c'est une vraie démarche d'analyse de poste où chacun apprend à reconnaître les situations à risque dans son propre métier, à adopter des postures protectrices durables, et à proposer des aménagements simples qui réduisent la pénibilité. {joursLabel|Une journée} de pratique sur des situations concrètes de votre activité.",
    objectifs: [
      "Comprendre l'anatomie du dos et les mécanismes des TMS",
      "Identifier les situations à risque dans son poste de travail",
      "Adopter les bons gestes lors des manutentions et des postures statiques",
      "Aménager son poste de travail pour réduire la pénibilité",
    ],
    programme: [
      "Anatomie : colonne vertébrale, articulations, muscles",
      "Mécanismes d'apparition des TMS (lombalgies, tendinites)",
      "Principes de manutention et d'économie d'effort",
      "Analyse de poste et exercices pratiques in situ",
    ],
    publicConcerne:
      "Tout salarié exposé à des manutentions, postures statiques ou gestes répétitifs — manutentionnaires, opérateurs, agents logistiques, employés de bureau.",
    prerequis: "Aucun.",
  },

  "formation-gestes-et-postures-en-creche": {
    intro:
      "Gestes et Postures spécifique au métier de la petite enfance. {heuresLabel|7 heures} pour préserver dos et épaules face aux portages, changes et postures basses qui sollicitent quotidiennement les professionnels en crèche.",
    description:
      "Le métier de la petite enfance est l'un des plus exposés aux TMS : 100+ portages par jour, postures basses prolongées (jeux au sol, repas, change), genoux et bas du dos constamment sollicités. Sans technique adaptée, les douleurs s'installent dès quelques années d'exercice. La formation reprend les bases anatomiques en les appliquant aux gestes spécifiques de la crèche : techniques de portage selon l'âge de l'enfant, postures économiques pour le change, organisation du repas et des jeux pour limiter le travail au sol, aménagement des mobiliers. La pratique a lieu dans votre structure, avec votre matériel et selon votre organisation — chaque équipe repart avec des correctifs immédiatement applicables.",
    objectifs: [
      "Comprendre les TMS spécifiques aux métiers de la petite enfance",
      "Maîtriser le portage d'enfant en sécurité",
      "Optimiser les gestes au change, au repas, en accueil",
      "Aménager les espaces pour réduire les contraintes posturales",
    ],
    programme: [
      "Anatomie et physiologie appliquées à la petite enfance",
      "Portage : techniques et adaptations selon l'âge",
      "Postures basses et travail au sol",
      "Aménagement du mobilier (tables à langer, jeux, repas)",
      "Pratique dans la structure",
    ],
    publicConcerne:
      "Auxiliaires de puériculture, EJE, éducateurs, agents techniques de crèche, micro-crèches, MAM.",
    prerequis: "Aucun.",
  },

  "formation-gestes-et-postures-etablissements-de-soins-ehpad": {
    intro:
      "Gestes et Postures spécifique aux établissements de soins (EHPAD, hôpitaux). {heuresLabel|7 heures} pour maîtriser les techniques de manutention de personnes (transferts, rehaussements, retournements) et préserver à la fois la santé du soignant et la dignité du résident.",
    description:
      "La manutention de personnes est l'une des activités les plus à risque de TMS en milieu de soins. Mal pratiquée, elle abîme le dos du soignant et atteint la dignité du résident — parfois douloureusement. La formation aborde l'évaluation préalable de l'autonomie (méthode ALM, qui place le résident en acteur de son déplacement quand c'est possible), les techniques manuelles sécurisées (transfert lit-fauteuil, rehaussement, retournement) et surtout l'usage approprié des aides techniques : lève-personne, drap de glissement, verticalisateur. Sur {joursLabel|1 jour}, dont une grande partie en pratique dans votre service, chaque soignant intègre une approche qui préserve à la fois son corps et la qualité de la relation au résident.",
    objectifs: [
      "Comprendre les TMS dans les métiers du soin",
      "Maîtriser les techniques de manutention de personnes dépendantes",
      "Utiliser correctement les aides techniques (lève-personne, drap de glissement, verticalisateur)",
      "Adapter le geste à l'autonomie du résident (méthode ALM)",
    ],
    programme: [
      "Anatomie, TMS et risques psychosociaux des soignants",
      "Évaluation de l'autonomie du résident",
      "Techniques manuelles : transferts, retournements, rehaussements",
      "Aides techniques : choix, installation, utilisation",
      "Mises en situation dans le service",
    ],
    publicConcerne:
      "Aides-soignants, infirmiers, AMP, AVS, ASH d'EHPAD, MAS, FAM, services hospitaliers, aide à domicile.",
    prerequis: "Aucun.",
  },

  "formation-prap-ibc": {
    intro:
      "PRAP IBC (Prévention des Risques liés à l'Activité Physique — Industrie, BTP, Commerce). Formation INRS qui transforme le salarié en acteur de la prévention sur son propre poste.",
    description:
      "Le PRAP IBC est une démarche INRS distincte des formations Gestes et Postures : elle transforme l'opérateur en acteur de la prévention sur son propre poste de travail. Le salarié apprend à analyser sa situation de travail (postures, manutentions, organisation, environnement), à identifier les facteurs de risque et — surtout — à proposer des pistes d'amélioration concrètes à sa hiérarchie. Cette dimension « acteur » est essentielle : c'est elle qui transforme les remontées terrain en évolutions réelles du poste, du matériel ou de l'organisation. La formation se conclut par une évaluation certificative INRS débouchant sur le certificat d'acteur PRAP IBC, valable 24 mois.",
    objectifs: [
      "Identifier et signaler les situations à risque dans son activité",
      "Proposer des pistes d'amélioration de son poste",
      "Adopter les principes de sécurité physique et d'économie d'effort",
      "Obtenir le certificat d'acteur PRAP IBC",
    ],
    programme: [
      "Notions sur l'activité physique au travail et les TMS",
      "Méthode d'analyse des situations de travail",
      "Principes de sécurité physique et de manutention",
      "Élaboration de pistes d'amélioration",
      "Évaluation INRS",
    ],
    publicConcerne:
      "Salariés des secteurs industrie, BTP, commerce exposés à des risques physiques — opérateurs, manutentionnaires, ouvriers, employés de commerce.",
    prerequis: "Aucun.",
    notes: [
      "Certificat d'acteur PRAP IBC délivré à l'issue de l'évaluation certificative INRS, valable 24 mois",
    ],
  },

  "formation-prap-2s-sanitaire-et-social": {
    intro:
      "PRAP 2S ALM (Prévention des Risques liés à l'Activité Physique — Sanitaire et Social, méthode Accompagnement à la Mobilité). Formation INRS spécifique aux métiers du soin et de l'accompagnement de personnes. À l'issue, le stagiaire devient acteur PRAP 2S ALM, validé par une évaluation certificative INRS.",
    description:
      "Le PRAP 2S est une démarche INRS pour le secteur sanitaire et médico-social, parce que le geste de soin n'est pas une manutention comme une autre : il engage la dignité, l'autonomie et le ressenti du résident. La formation reprend les principes du PRAP — devenir acteur de la prévention — et les applique à la mobilisation des personnes : évaluation de l'autonomie, méthode ALM (Accompagnement à la Mobilité), techniques manuelles sécurisées, utilisation à bon escient des aides techniques. Sur {joursLabel|4 jours} (28 heures selon le référentiel INRS, déployées en 2 × 2 jours non consécutifs pour favoriser l'intersession sur le terrain), le soignant intègre une démarche durable de prévention pour lui-même et pour son équipe. La formation se conclut par une évaluation certificative INRS d'environ 40 minutes par stagiaire, donnant lieu, en cas de réussite, à la délivrance du certificat d'acteur PRAP 2S ALM valable 24 mois.",
    objectifs: [
      "Repérer les situations à risque dans son travail au contact de personnes",
      "Maîtriser les principes de mobilisation respectant l'autonomie du résident (méthode ALM)",
      "Utiliser à bon escient les aides techniques",
      "Devenir acteur de la prévention dans son service",
      "Obtenir le certificat d'acteur PRAP 2S ALM (évaluation certificative INRS)",
    ],
    programme: [
      "Activité physique en sanitaire/social et impact sur la santé",
      "Mobilisation des personnes : méthode ALM, déplacements, transferts",
      "Aides techniques : choix et utilisation",
      "Démarche d'amélioration continue dans le service",
      "Évaluation certificative INRS (~40 min/stagiaire) — délivrance du certificat d'acteur PRAP 2S ALM",
    ],
    publicConcerne:
      "Aides-soignants, AMP, AVS, ASH, infirmiers en EHPAD, MAS, FAM, hôpital, aide à domicile.",
    prerequis: "Aucun.",
    notes: [
      "Certificat d'acteur PRAP 2S ALM délivré à l'issue de l'évaluation certificative INRS (~40 min/stagiaire), valable 24 mois",
    ],
  },

  "formation-prevention-des-tms-troubles-musculosquelettiques": {
    intro:
      "Formation Prévention des TMS. {heuresLabel|7 heures} pour comprendre l'origine des troubles musculo-squelettiques, les détecter tôt et mettre en place une démarche durable de prévention dans son équipe.",
    description:
      "Cette formation s'adresse à l'encadrement et aux préventeurs, pas aux opérateurs : il s'agit de comprendre les TMS d'un point de vue managérial et organisationnel pour construire une prévention durable. La journée balaye les facteurs déclenchants (biomécaniques, organisationnels, psychosociaux — souvent négligés), les signaux faibles à détecter dans son équipe avant que les arrêts ne se cumulent, les outils d'évaluation et d'analyse, et la construction d'un plan d'action concret intégré au DUERP. Une posture de manager attentif aux TMS peut diviser par 2 ou 3 le taux d'absentéisme dans un service exposé — l'enjeu humain et économique est majeur.",
    objectifs: [
      "Comprendre les facteurs déclenchants des TMS",
      "Identifier les signaux faibles dans son équipe",
      "Mettre en œuvre une démarche de prévention durable",
      "Communiquer sur les TMS avec les salariés et le médecin du travail",
    ],
    programme: [
      "Définitions et données épidémiologiques des TMS",
      "Facteurs de risque biomécaniques, organisationnels, psychosociaux",
      "Outils d'évaluation et d'analyse",
      "Élaboration d'un plan d'action TMS dans l'entreprise",
    ],
    publicConcerne:
      "Managers, RH, préventeurs, membres du CSE / CSSCT, infirmiers du travail.",
    prerequis: "Aucun.",
  },

  // ───────────────────────── PRÉVENTION ─────────────────────────
  "formation-cse-chsct": {
    intro:
      "Formation Santé Sécurité Conditions de Travail (SSCT) des membres du CSE. 3 ou {joursLabel|5 jours} selon la taille de l'entreprise (Code du travail L2315-18). Obligatoire dès la prise de fonction.",
    description:
      "La fusion DP/CE/CHSCT en CSE n'a pas supprimé la mission SSCT — elle l'a intégrée au CSE. Les membres du CSE doivent désormais maîtriser ce champ aussi rigoureusement que l'ancien CHSCT, avec une formation obligatoire dès la prise de fonction ({joursLabel|3 jours} dans les entreprises < 300 salariés, {joursLabel|5 jours} au-delà). La formation aborde le cadre légal et les missions concrètes du CSE en SSCT, la méthode d'analyse d'accident (arbre des causes — outil-clé pour structurer une enquête), la conduite d'inspections et d'enquêtes, l'exercice du droit d'alerte et de retrait, et le DUERP comme outil central. Les travaux pratiques sur cas concrets permettent de transposer immédiatement dans la réalité de votre entreprise.",
    objectifs: [
      "Comprendre les missions SSCT du CSE",
      "Analyser un accident du travail ou une maladie professionnelle",
      "Mener une inspection sur le terrain",
      "Participer aux enquêtes et exercer le droit d'alerte",
    ],
    programme: [
      "Cadre légal et missions du CSE en SSCT",
      "Méthode d'analyse d'accident (arbre des causes)",
      "Inspections, enquêtes, droit d'alerte et de retrait",
      "Document Unique d'Évaluation des Risques (DUERP)",
      "Travaux pratiques sur cas concrets",
    ],
    publicConcerne:
      "Membres titulaires et suppléants du CSE, référents harcèlement.",
    prerequis: "Aucun.",
  },

  "formation-ppms-plan-particulier-mise-en-surete": {
    intro:
      "Formation PPMS (Plan Particulier de Mise en Sûreté). {heuresLabel|7 heures} pour concevoir et faire vivre un PPMS dans un établissement scolaire, ERP ou structure d'accueil, conformément à l'instruction ministérielle de 2017.",
    description:
      "Depuis l'instruction interministérielle d'avril 2017, tout établissement scolaire doit disposer d'un PPMS face aux risques majeurs ET face aux menaces (attentat-intrusion). Le PPMS ne se limite pas à un document rangé dans un classeur : c'est un dispositif vivant qui doit être connu et testé. La formation aborde la conception et l'actualisation du PPMS (identification des risques, scénarios de confinement, évacuation, fuite, rôles, fiches réflexes), et surtout la conduite d'exercices PPMS — fréquence, scénarios réalistes, débriefing, plan d'amélioration. Un PPMS vivant change radicalement la capacité de réaction d'une équipe face à un événement réel.",
    objectifs: [
      "Connaître le cadre réglementaire du PPMS",
      "Identifier les risques majeurs et les menaces sur le site",
      "Construire ou actualiser le PPMS de l'établissement",
      "Préparer et animer un exercice PPMS",
    ],
    programme: [
      "Risques majeurs et menaces : attentat, intrusion, risques naturels et technologiques",
      "Architecture du PPMS : confinement, évacuation, fuite",
      "Rôles et fiches réflexes",
      "Conduite d'exercices et retour d'expérience",
    ],
    publicConcerne:
      "Chefs d'établissement scolaire, directeurs de crèche, gestionnaires de site, référents sûreté.",
    prerequis: "Aucun.",
  },

  "formation-menace-terroriste": {
    intro:
      "Formation Sécurité face à la menace terroriste. {heuresLabel|4 heures} pour sensibiliser les équipes aux comportements suspects, à la conduite à tenir en cas d'attaque (« s'échapper, se cacher, alerter ») et à la prise en charge des victimes en attendant les secours.",
    description:
      "Depuis 2015, la doctrine de réaction face à une attaque a été clarifiée et largement diffusée : « s'échapper, se cacher, alerter », dans cet ordre, et seulement combattre en dernier recours. Mais entre la théorie connue et la capacité à appliquer ces réflexes sous stress, il y a une grande distance. La formation aborde la typologie des menaces actuelles, l'identification des comportements suspects (avant l'attaque), la conduite à tenir étape par étape pendant l'attaque (avec les options selon le contexte : open space, ERP, lieu de culte), et surtout les premiers gestes face à des plaies par armes (compression manuelle, garrot tourniquet) qui peuvent sauver des vies en attendant l'intervention des secours.",
    objectifs: [
      "Identifier les signaux faibles d'une menace terroriste",
      "Appliquer la doctrine « s'échapper, se cacher, alerter »",
      "Sécuriser un espace en attendant les secours",
      "Réaliser les premiers gestes face à des plaies par armes",
    ],
    programme: [
      "Typologie des menaces actuelles",
      "Détection des comportements suspects",
      "Conduite à tenir en cas d'attaque",
      "Premiers secours en cas d'attaque armée (compression, garrot)",
    ],
    publicConcerne:
      "Personnel d'accueil, agents de sécurité, équipes en ERP, écoles, lieux de culte, sites sensibles, transports.",
    prerequis: "Aucun.",
  },

  "formation-hygiene-alimentaire-haccp": {
    intro:
      "Formation HACCP (Hygiène Alimentaire). {heuresLabel|14 heures} conformes au décret 2011-731 pour les établissements de restauration commerciale. Maîtrise des bonnes pratiques d'hygiène et du Plan de Maîtrise Sanitaire (PMS).",
    description:
      "Tout établissement de restauration commerciale en France doit compter au moins une personne formée HACCP — restaurateurs, traiteurs, snacking, métiers de bouche. La formation prépare à mettre en œuvre une vraie démarche de maîtrise sanitaire dans le respect du Paquet Hygiène européen. Elle aborde la microbiologie alimentaire et les principales toxi-infections, le cadre réglementaire (CE 178/2002, 852/2004), la méthode HACCP étape par étape (identification des dangers, points critiques, surveillance, actions correctives), et — concrètement — la construction et la tenue à jour du Plan de Maîtrise Sanitaire qui structure les bonnes pratiques quotidiennes (réception, stockage, préparation, service, traçabilité).",
    objectifs: [
      "Connaître la réglementation européenne (Paquet Hygiène)",
      "Identifier les dangers microbiologiques, chimiques, physiques",
      "Mettre en œuvre la méthode HACCP",
      "Construire et tenir à jour le Plan de Maîtrise Sanitaire (PMS)",
    ],
    programme: [
      "Microbiologie alimentaire et toxi-infections",
      "Paquet Hygiène et obligations réglementaires",
      "Méthode HACCP : analyse des dangers et points critiques",
      "Plan de Maîtrise Sanitaire (BPH, traçabilité, gestion des non-conformités)",
    ],
    publicConcerne:
      "Restaurateurs, cuisiniers, traiteurs, métiers de bouche, snacking. Obligation pour au moins une personne par établissement.",
    prerequis: "Aucun.",
  },

  "formation-travaux-en-hauteur": {
    intro:
      "Formation Travaux en Hauteur. {heuresLabel|14 heures} pour travailler en sécurité au-dessus de 2 mètres avec port d'EPI antichute (harnais, longes, ligne de vie). Obligation Code du travail R4323-69.",
    description:
      "La chute de hauteur est la 2ᵉ cause de mortalité au travail en France, après le risque routier. Toute personne travaillant au-dessus de 2 mètres en port d'EPI antichute doit avoir suivi une formation spécifique (R4323-69 du Code du travail). La formation aborde la hiérarchie des protections (collective avant individuelle), le choix et le port correct des EPI antichute (harnais, longes avec absorbeur, casques, point d'ancrage), les techniques d'évolution sur toiture, échafaudage et nacelle, et surtout — point souvent négligé — la procédure de sauvetage d'un collègue suspendu après chute (mise hors souffrance, qui doit intervenir en moins de 15 minutes pour éviter le syndrome du harnais). La pratique sur structure pédagogique est essentielle pour ancrer ces gestes.",
    objectifs: [
      "Identifier les risques de chute de hauteur",
      "Choisir et utiliser correctement les EPI antichute",
      "Évoluer en sécurité sur toiture, échafaudage, nacelle",
      "Réaliser un sauvetage en hauteur (mise hors souffrance)",
    ],
    programme: [
      "Réglementation et responsabilités",
      "EPI antichute : harnais, longes, absorbeurs, casques",
      "Systèmes d'ancrage et lignes de vie",
      "Pratique sur structure pédagogique",
      "Sauvetage et mise hors souffrance du collègue suspendu",
    ],
    publicConcerne:
      "Couvreurs, monteurs, élagueurs, agents de maintenance toiture, techniciens télécoms, façadiers, charpentiers.",
    prerequis: "Aptitude médicale au travail en hauteur.",
  },

  "formation-gestion-des-situations-durgence-en-creche": {
    intro:
      "Formation Gestion des Situations d'Urgence en crèche. {heuresLabel|7 heures} pour préparer les équipes de la petite enfance à faire face à un incident : malaise d'enfant, intrusion, incendie, accident.",
    description:
      "Une crèche est confrontée à un panel d'urgences spécifique : malaise vagal, convulsion fébrile, allergie alimentaire, étouffement, mais aussi incendie, intrusion, ou risques majeurs externes. La formation aborde l'ensemble de ces typologies, avec une approche transversale : reconnaître l'urgence rapidement (les jeunes enfants ne verbalisent pas leurs symptômes), réagir avec les bons gestes (de premiers secours adaptés à la pédiatrie aux procédures d'évacuation ou de confinement), et communiquer efficacement — avec les secours, avec les parents, avec les autres adultes du lieu. {joursLabel|Une journée} centrée sur la spécificité de la petite enfance, avec des exercices pratiques dans la structure.",
    objectifs: [
      "Identifier les situations d'urgence rencontrées en crèche",
      "Réagir efficacement face à un enfant en détresse",
      "Mettre en œuvre les procédures d'évacuation et de confinement",
      "Communiquer avec les secours et les parents",
    ],
    programme: [
      "Typologie des urgences en milieu petite enfance",
      "Urgences médicales (malaises, convulsions, allergies, étouffements)",
      "Urgences environnementales (incendie, intrusion, risques majeurs)",
      "Procédures de l'établissement et exercices pratiques",
    ],
    publicConcerne:
      "Auxiliaires de puériculture, EJE, directeurs de crèche, agents techniques, équipes de micro-crèches.",
    prerequis: "Aucun.",
  },

  // ───────────────────────── SAFETY DAY ─────────────────────────
  "safety-day-incendie": {
    intro:
      "Safety Day Incendie : {joursLabel|une journée} événementielle sur votre site pour sensibiliser massivement aux risques d'incendie. Ateliers tournants, manipulation d'extincteurs, démonstrations — format dynamique idéal pour mobiliser les équipes.",
    description:
      "Le Safety Day n'est pas une formation classique : c'est un événement d'entreprise centré sur la sécurité, conçu pour toucher un grand nombre de collaborateurs en une seule journée tout en restant impactant. Le format combine stands théoriques (causes d'incendie, classes de feu, équipements présents sur le site), ateliers pratiques (manipulation d'extincteurs sur bac à feu ou unité mobile), démonstrations spectaculaires (feu de friteuse, écran, tableau électrique) et animations dynamiques (quiz, challenges par équipes). Idéal pour une semaine QHSE ou un événement annuel sécurité, il crée un moment fédérateur qui ancre les bons réflexes durablement.",
    objectifs: [
      "Sensibiliser un large public en une journée",
      "Pratiquer la manipulation d'extincteurs sur cas réels",
      "Renforcer les bons réflexes en cas de départ de feu",
      "Créer un événement fédérateur autour de la sécurité",
    ],
    programme: [
      "Stands théoriques (causes, classes de feu, équipements du site)",
      "Atelier extincteurs sur bac à feu ou unité mobile",
      "Démonstrations spectaculaires (feu de friteuse, écran)",
      "Quiz et debriefing collectif",
    ],
    publicConcerne:
      "Ensemble du personnel d'un site — idéal pour 20 à 200+ participants par jour.",
    prerequis: "Aucun.",
  },

  "safety-day-gestes-et-postures": {
    intro:
      "Safety Day Gestes et Postures. Atelier mobile sur votre site pour sensibiliser massivement aux TMS avec analyse de postes en direct et conseils personnalisés.",
    description:
      "Beaucoup d'entreprises ne savent pas comment toucher l'ensemble de leur personnel sur la prévention des TMS : les formations classiques bloquent l'activité, et tout le monde n'est pas concerné de la même manière. Le Safety Day Gestes et Postures résout l'équation en proposant un stand mobile sur le site, par lequel chacun passe quelques minutes — atelier anatomie (écran tactile interactif), atelier manutention guidé par un kiné ou ergonome, et — sur demande — analyse de poste in situ avec recommandations personnalisées. Le format crée un moment de pause utile dans la journée, sans démobiliser, et chacun repart avec des correctifs immédiatement applicables.",
    objectifs: [
      "Sensibiliser un grand nombre de salariés en peu de temps",
      "Identifier les contraintes spécifiques de chaque poste",
      "Repartir avec des gestes correctifs immédiats",
    ],
    programme: [
      "Stand anatomie et écran tactile interactif",
      "Atelier manutention guidé par un kiné/ergonome",
      "Analyse de poste in situ (sur demande)",
      "Quiz et fiches mémo personnalisées",
    ],
    publicConcerne:
      "Tout salarié exposé à des manutentions ou postures contraignantes.",
    prerequis: "Aucun.",
  },

  "safety-day-secourisme-premiers-secours": {
    intro:
      "Safety Day Premiers Secours. Format atelier mobile pour pratiquer les gestes qui sauvent : PLS, massage cardiaque, DAE, étouffement, hémorragies — par rotations de 30 minutes.",
    description:
      "Tous les collaborateurs ne peuvent pas suivre une PSC ou un SST complet, mais tous peuvent bénéficier d'une sensibilisation rapide aux gestes vitaux. Le Safety Day Premiers Secours organise 4 ateliers en parallèle sur le site (inconscience/PLS, massage cardiaque/DAE, hémorragies/garrots, étouffement), par lesquels les participants tournent par groupes de 30 minutes. Chaque atelier pratique sur mannequin avec un formateur secouriste expérimenté. En {joursLabel|une journée}, un site peut former massivement 60 à 100 personnes aux 4 gestes essentiels, avec un retour pratique immédiat — bien plus impactant qu'une simple sensibilisation théorique.",
    objectifs: [
      "Maîtriser les gestes vitaux de premiers secours",
      "Pratiquer sur mannequins avec retour formateur",
      "Sensibiliser un large public en une journée",
    ],
    programme: [
      "Atelier 1 — Inconscience et PLS",
      "Atelier 2 — Massage cardiaque et DAE",
      "Atelier 3 — Hémorragies et garrots",
      "Atelier 4 — Étouffement adulte et enfant",
    ],
    publicConcerne: "Tout salarié.",
    prerequis: "Aucun.",
  },

  "safety-day-risques-routiers": {
    intro:
      "Safety Day Risques Routiers. Le risque routier est la 1ʳᵉ cause de mortalité au travail. Atelier mobile pour sensibiliser aux risques sur les trajets professionnels et personnels.",
    description:
      "Le risque routier représente 1/3 des accidents mortels du travail en France — devant les chutes de hauteur, devant les machines, devant tous les autres risques. Il concerne tous les salariés qui se déplacent : trajet domicile-travail (souvent ignoré par les entreprises), mission, transport de matériel. Le Safety Day Risques Routiers déploie sur site plusieurs ateliers spectaculaires et marquants : voiture-tonneau (vivre une perte de contrôle), lunettes de simulation (effets de l'alcool ou des stupéfiants sur la perception), atelier de réaction-freinage chronométré, quiz Code de la route. La journée se conclut souvent par une table ronde — l'idée est de créer un déclic durable, pas seulement une information de plus.",
    objectifs: [
      "Identifier les facteurs de risque sur la route (vitesse, fatigue, alcool, téléphone)",
      "Tester ses réflexes et son temps de réaction",
      "Adopter une conduite préventive en mission",
    ],
    programme: [
      "Atelier voiture-tonneau (vivre une perte de contrôle)",
      "Atelier lunettes de simulation (alcool, drogues)",
      "Atelier réaction-freinage chronométré",
      "Quiz Code de la route et table ronde",
    ],
    publicConcerne:
      "Tout collaborateur amené à conduire pour son travail. Idéal pour flottes commerciales et techniciens itinérants.",
    prerequis: "Aucun.",
  },
  "formation-prevention-tms-sans-visite": {
    intro:
      "Formation Prévention des TMS sans visite préparatoire. {heuresLabel|7 heures} pour comprendre les TMS et adopter les bons gestes au quotidien.",
    description:
      "Variante de la formation TMS sans visite préparatoire des postes : adaptée pour une mise en œuvre rapide ou un effectif réparti sur plusieurs sites. Aborde l'origine des troubles musculo-squelettiques, les facteurs de risque et les leviers individuels de prévention.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Tout salarié exposé aux risques de TMS — administratif, industriel, logistique, tertiaire.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-preparateur-commande": {
    intro:
      "Formation Gestes et Postures spécifique aux préparateurs de commande. {heuresLabel|7 heures} pour adopter des gestes sûrs face à la manutention répétée et au port de charges en entrepôt.",
    description:
      "Le métier de préparateur de commande cumule les facteurs de risque TMS : cadences soutenues, gestes répétitifs, port de charges variables, postures contraignantes. Cette formation cible les techniques de manutention adaptées au flux logistique, l'organisation du poste et les bons réflexes d'échauffement.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Préparateurs de commande, magasiniers, opérateurs logistiques.",
    prerequis: "Aucun.",
  },

  "formation-manutention-personnes-mobilite-reduite": {
    intro:
      "Formation manutention des personnes à mobilité réduite. {heuresLabel|7 heures} pour maîtriser les techniques sûres de transfert et préserver à la fois le dos du soignant et la dignité de la personne aidée.",
    description:
      "Domicile, EHPAD, structures médico-sociales : la manutention de personnes à mobilité réduite est l'une des activités les plus à risque pour le dos des aidants. La formation aborde les principes d'ergonomie, le verbalisation/coopération avec la personne aidée, l'utilisation des aides techniques (verticalisateur, lève-personne, drap de glissement).",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Aides à domicile, auxiliaires de vie, aides-soignants, infirmiers, ASH.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-travail-ecran-3h": {
    intro:
      "Formation Gestes et Postures travail sur écran — format court de {heuresLabel|3 heures}. Réglages du poste, étirements et prévention de la sédentarité.",
    description:
      "Le travail sur écran prolongé génère lombalgies, cervicalgies, syndrome du canal carpien et fatigue visuelle. Format court pour sensibiliser rapidement aux bons réglages (hauteur écran, position du clavier, lumière), aux étirements et aux micro-pauses.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Salariés en bureau, télétravailleurs, fonctions administratives.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-travail-ecran-7h": {
    intro:
      "Formation Gestes et Postures travail sur écran — format journée complète {heuresLabel|7 heures}. Analyse de poste, ergonomie, étirements, prévention TMS et fatigue visuelle.",
    description:
      "Format journée complète permettant un travail en profondeur sur les postes de chaque participant, des mises en pratique, des étirements guidés et un plan d'action individuel pour adopter durablement les bons réflexes ergonomiques.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Salariés en bureau, télétravailleurs, fonctions administratives.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-restauration-cuisine-3h": {
    intro:
      "Gestes et Postures spécifique restauration et cuisine — format court {heuresLabel|3 heures}. Postures de travail, manutention et prévention TMS adaptées au métier.",
    description:
      "La cuisine et la restauration cumulent station debout prolongée, manutention de bacs lourds, gestes répétitifs et environnement chaud/humide. Format court pour sensibiliser aux bons gestes en peu de temps, idéal en intra entre deux services.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Cuisiniers, commis, plongeurs, serveurs, personnels de restauration collective.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-restauration-cuisine-7h": {
    intro:
      "Gestes et Postures spécifique restauration et cuisine — format journée {heuresLabel|7 heures}. Analyse des postes, manutention, postures et prévention TMS.",
    description:
      "Journée complète pour aborder en profondeur les facteurs de risque du métier de la restauration : station debout, manutention de marchandises, postures contraignantes en lavage, gestes répétitifs en service. Inclut mises en situation et plan d'action.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Cuisiniers, commis, plongeurs, serveurs, personnels de restauration collective.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-nettoyage-3h": {
    intro:
      "Gestes et Postures spécifique au personnel de nettoyage — format court {heuresLabel|3 heures}. Manutention matériel, postures basses et gestes répétitifs.",
    description:
      "Le métier de nettoyage cumule les gestes répétitifs (lavage, balayage, aspiration), les postures basses, le port de charges variables (seaux, machines). Format court pour ancrer les bons réflexes en intra-entreprise.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Agents d'entretien, agents de propreté, ASH, gouvernantes.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-nettoyage-7h": {
    intro:
      "Gestes et Postures spécifique au personnel de nettoyage — format journée {heuresLabel|7 heures}. Analyse de poste, manutention, postures et plan de prévention.",
    description:
      "Journée complète permettant un travail approfondi sur les postes : sensibilisation, mises en pratique sur matériel réel, étirements, organisation du chariot et du flux de travail. Idéale pour ancrer durablement les bons réflexes.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Agents d'entretien, agents de propreté, ASH, gouvernantes.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-hotellerie-3h": {
    intro:
      "Gestes et Postures spécifique hôtellerie — format court {heuresLabel|3 heures}. Réfection des lits, manutention bagages et postures en chambre.",
    description:
      "Femmes/valets de chambre, équipes d'accueil et bagagistes : l'hôtellerie cumule manutention répétée, postures penchées et station debout prolongée. Format compact pour sensibiliser sans bloquer une équipe pendant une journée.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Personnel de chambre, gouvernantes, bagagistes, équipes d'accueil hôtelier.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-hotellerie-7h": {
    intro:
      "Gestes et Postures spécifique hôtellerie — format journée {heuresLabel|7 heures}. Analyse de poste, manutention, réfection des lits et plan de prévention.",
    description:
      "Journée complète pour les équipes hôtelières : analyse fine des postes (chambres, accueil, bagagerie), mises en pratique sur lits et chariot, étirements ciblés, plan d'amélioration ergonomique du service.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Personnel de chambre, gouvernantes, bagagistes, équipes d'accueil hôtelier.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-conduite": {
    intro:
      "Formation Gestes et Postures spécifique à la conduite professionnelle. {heuresLabel|7 heures} pour préserver dos, nuque et épaules face à la station assise prolongée et aux montées/descentes répétées.",
    description:
      "Chauffeurs poids lourds, VL, livreurs, ambulanciers : la conduite professionnelle expose à de multiples risques TMS (lombalgie, sciatique, troubles cervicaux, fatigue). La formation aborde le réglage du poste, les bonnes pratiques en cabine et les étirements à intégrer aux pauses.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Chauffeurs poids lourds et utilitaires, livreurs, ambulanciers, conducteurs professionnels.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-centre-commercial-3h": {
    intro:
      "Gestes et Postures spécifique centre commercial et grande distribution — format à durée modulable selon vos besoins. Mise en rayon, station debout et manutention en magasin.",
    description:
      "Mise en rayon, manutention de palettes, station debout en caisse : la grande distribution cumule les sollicitations physiques. Format court pour sensibiliser les équipes sans interrompre l'activité.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Employés libre-service, hôtes/hôtesses de caisse, équipes logistiques magasin.",
    prerequis: "Aucun.",
  },

  "formation-gestes-postures-centre-commercial-7h": {
    intro:
      "Gestes et Postures spécifique centre commercial et grande distribution — format journée {heuresLabel|7 heures}. Analyse de poste, mise en rayon, manutention et prévention TMS.",
    description:
      "Journée complète pour les équipes magasin : analyse fine des postes (rayon, caisse, réception), mises en pratique sur palettes et rayonnages, étirements ciblés, plan d'amélioration ergonomique.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Employés libre-service, hôtes/hôtesses de caisse, équipes logistiques magasin.",
    prerequis: "Aucun.",
  },

  "habilitation-electrique-vehicule-electrique": {
    intro:
      "Habilitation électrique Véhicule Électrique (VE). {heuresLabel|7 heures} pour intervenir en sécurité sur les véhicules électriques et hybrides — automobile, utilitaires, deux-roues.",
    description:
      "L'électromobilité transforme le métier des mécaniciens, carrossiers et techniciens VL. Toute intervention sur la chaîne de traction haute tension d'un VE/hybride exige une habilitation spécifique selon la norme UTE C18-550. La formation aborde les risques, la consignation, les EPI et les opérations autorisées.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Mécaniciens, électriciens auto, carrossiers, dépanneurs intervenant sur véhicules électriques ou hybrides.",
    prerequis: "Aucun pré-requis électricien.",
  },

  "recyclage-habilitation-electrique-vehicule-electrique": {
    intro:
      "Recyclage de l'habilitation électrique VE. {heuresLabel|7 heures} tous les 3 ans pour conserver son titre d'habilitation et intégrer les évolutions normatives.",
    description:
      "L'UTE C18-550 impose un recyclage périodique. La session combine retour d'expérience, mise à jour des évolutions de la norme, rappel des fondamentaux (consignation, EPI, zones) et nouvelle évaluation théorique et pratique.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Mécaniciens, électriciens auto, carrossiers, dépanneurs déjà habilités VE.",
    prerequis: "Habilitation VE en cours de validité ou expirée depuis moins de 12 mois.",
  },

  "recyclage-habilitation-electrique-haute-tension": {
    intro:
      "Recyclage de l'habilitation électrique haute tension. {heuresLabel|14 heures} pour conserver les titres B1v/B2v/BR/BC/BE et H1v/H2v/HC.",
    description:
      "La norme NF C18-510 impose un recyclage périodique tous les 3 ans pour maintenir les habilitations basse et haute tension. La formation rappelle les fondamentaux, intègre les évolutions normatives récentes et propose une évaluation théorique et pratique pour le renouvellement.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Électriciens et techniciens disposant d'habilitations BT/HTA en cours de validité.",
    prerequis: "Habilitations B1v/B2v/BR/BC/BE et/ou H1v/H2v/HC en cours de validité ou expirées depuis moins de 12 mois.",
  },

  "formation-amd-alerter-masser-defibriller": {
    intro:
      "Sensibilisation courte de {heuresLabel|1 heure} aux trois gestes qui sauvent face à un arrêt cardiaque : Alerter, Masser, Défibriller. Format ultra-condensé idéal pour former massivement les collaborateurs en très peu de temps.",
    description:
      "L'arrêt cardiaque tue 40 000 à 50 000 personnes par an en France. Sans intervention immédiate, les chances de survie chutent de 10 % par minute. La formation AMD se concentre sur les trois seuls gestes qui font réellement la différence dans les premières minutes : alerter les secours (15, 18, 112), pratiquer un massage cardiaque efficace, et utiliser un défibrillateur automatisé externe (DAE). En {heuresLabel|1 heure}, chaque participant passe en pratique sur mannequin avec un DAE pédagogique. C'est le format le plus court pour sensibiliser un grand nombre de collaborateurs sur un site (jusqu'à 15 personnes par session). Pour aller plus loin — étouffement, hémorragie, PLS —, le format 2h (Initiation GQS) ou la formation PSC (7h) sont recommandés.",
    objectifs: [
      "Reconnaître un arrêt cardiaque",
      "Alerter efficacement les secours (15, 18, 112)",
      "Réaliser un massage cardiaque efficace",
      "Utiliser un défibrillateur automatisé externe (DAE) en sécurité",
    ],
    programme: [
      "La chaîne de survie et le rôle du témoin",
      "Reconnaître un arrêt cardiaque et alerter",
      "Massage cardiaque : technique, rythme, relais",
      "Utilisation du défibrillateur automatisé externe (DAE)",
      "Mises en situation pratiques sur mannequin avec DAE",
    ],
    publicConcerne:
      "Tout public — salariés, collaborateurs, étudiants, citoyens. Idéal pour sensibiliser massivement les équipes en peu de temps.",
    prerequis: "Aucun.",
  },

  "formation-gqs-initiation-3h": {
    intro:
      "Initiation Gestes Qui Sauvent. {heuresLabel|3 heures} pour ancrer les bons réflexes face aux urgences vitales — étouffement, hémorragie, arrêt cardiaque.",
    description:
      "Cette sensibilisation complète la formation AMD Alerter Masser Défibriller (1h) en allant plus loin sur la pratique et en couvrant d'autres urgences vitales — étouffement, hémorragie, position latérale de sécurité. Idéale pour les entreprises souhaitant former rapidement un grand nombre de collaborateurs avec une vraie mise en pratique sur mannequins et DAE.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Tout public — salariés, collaborateurs, étudiants, citoyens souhaitant savoir réagir.",
    prerequis: "Aucun.",
  },

  "formation-psc-creche-petite-enfance": {
    intro:
      "Formation PSC (anciennement PSC1) adaptée petite enfance. {heuresLabel|7 heures} pour maîtriser les gestes de secours spécifiques au nourrisson et à l'enfant.",
    description:
      "Les gestes de secours diffèrent radicalement chez le nourrisson et l'enfant. Cette adaptation du PSC couvre les urgences spécifiques à la petite enfance : étouffement (claques dorsales, compressions thoraciques), convulsion fébrile, malaise, traumatismes, brûlures, RCP nourrisson.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Professionnels et professionnelles de la petite enfance : crèches, micro-crèches, assistantes maternelles, MAM, écoles maternelles.",
    prerequis: "Aucun.",
  },

  "formation-recyclage-psc-creche-petite-enfance": {
    intro:
      "Recyclage du PSC (anciennement PSC1) petite enfance. {heuresLabel|3h30} pour réactualiser les gestes spécifiques nourrisson/enfant et intégrer les évolutions des recommandations.",
    description:
      "Conseillé tous les 3 ans pour conserver les bons réflexes face aux urgences pédiatriques. La session reprend les conduites à tenir, intègre les évolutions des recommandations (ILCOR/ERC), propose des mises en situation pratiques et un partage d'expériences entre professionnels.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Professionnel·le·s de la petite enfance déjà formés au PSC adapté petite enfance.",
    prerequis: "Attestation PSC petite enfance ou équivalent en cours de validité.",
  },

  "formation-psc-milieu-professionnel": {
    intro:
      "Formation PSC adaptée milieu professionnel. {heuresLabel|7 heures} pour maîtriser les gestes de premiers secours dans le contexte du lieu de travail.",
    description:
      "Variante du PSC contextualisée pour le milieu professionnel : malaise en réunion, chute dans les locaux, hémorragie sur poste de travail, étouffement à la cantine. Les mises en situation reprennent les configurations réelles rencontrées en entreprise.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Tout salarié, quel que soit le secteur d'activité.",
    prerequis: "Aucun.",
  },

  "formation-recyclage-psc-milieu-professionnel": {
    intro:
      "Recyclage du PSC milieu professionnel. {heuresLabel|3h30} pour réactualiser les gestes acquis et intégrer les évolutions des recommandations.",
    description:
      "Conseillé tous les 3 ans pour conserver les bons réflexes. La session reprend les conduites à tenir face aux urgences vitales, intègre les évolutions des recommandations (ILCOR/ERC) et propose des mises en situation au contexte professionnel.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Salariés déjà formés au PSC milieu professionnel.",
    prerequis: "Attestation PSC en cours de validité.",
  },

  "formation-travail-hauteur-port-epi": {
    intro:
      "Formation Travail en Hauteur — port des EPI antichute. {heuresLabel|7 heures} pour travailler en sécurité au-dessus de 2 mètres avec harnais, longes et ligne de vie.",
    description:
      "Le port des EPI antichute est obligatoire dès qu'un travail s'effectue à plus de 2 mètres sans protection collective (R4323-69 du Code du travail). La formation couvre le choix des EPI, leur ajustement, les techniques de mise en place, l'évacuation d'urgence et le secours à un travailleur suspendu.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Salariés amenés à travailler en hauteur — couvreurs, élagueurs, monteurs, techniciens télécom, maintenance industrielle.",
    prerequis: "Aptitude médicale au travail en hauteur.",
  },

  "formation-travail-hauteur-verification-epi": {
    intro:
      "Formation Travail en Hauteur — vérification des EPI antichute. {heuresLabel|7 heures} pour devenir vérificateur interne des EPI dans son entreprise.",
    description:
      "Le Code du travail (R4323-99) impose une vérification annuelle des EPI antichute par une personne compétente. La formation prépare cette personne au contrôle visuel et fonctionnel des harnais, longes, absorbeurs, connecteurs et lignes de vie, à la tenue du registre et aux critères de mise au rebut.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Personnes désignées vérificateurs internes — responsables sécurité, encadrants, techniciens maintenance.",
    prerequis: "Connaissance préalable des EPI antichute recommandée.",
  },

  "formation-travail-hauteur-port-harnais": {
    intro:
      "Formation Travail en Hauteur — port du harnais antichute. {heuresLabel|7 heures} centrées sur la mise en place et l'utilisation correcte du harnais.",
    description:
      "Le harnais antichute est l'EPI central de la protection individuelle. Mal ajusté, il devient inefficace — voire dangereux en cas de chute (syndrome du harnais). La formation se concentre sur l'ajustement précis, le choix des points d'ancrage, le déplacement sécurisé et la procédure d'évacuation d'urgence d'un travailleur suspendu.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Salariés amenés à travailler en hauteur sous protection individuelle.",
    prerequis: "Aptitude médicale au travail en hauteur.",
  },

  "formation-passerelle-pae-formateur-sst": {
    intro:
      "Passerelle PAE vers formateur SST. {heuresLabel|21 heures} pour transformer son expérience pédagogique PAE en habilitation officielle formateur SST INRS.",
    description:
      "Les formateurs PAE (PSE1/PSE2) disposent déjà d'une solide expérience pédagogique en secourisme. La passerelle leur permet d'acquérir les spécificités du référentiel INRS SST (lien avec la prévention, terminologie entreprise, lien employeur, certification) sans repasser l'intégralité du parcours formateur SST.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Formateurs PAE FPS / PAE 3 souhaitant intervenir comme formateurs SST en entreprise.",
    prerequis: "Habilitation formateur PAE en cours de validité (PAE FPS ou équivalent).",
  },

  "atelier-sensibilisation-gestes-et-postures": {
    intro:
      "Atelier sensibilisation gestes et postures. {heuresLabel|45 minutes} pour sensibiliser rapidement une équipe aux bons réflexes ergonomiques.",
    description:
      "Format ultra-court pour intervenir lors d'une réunion, d'une journée sécurité ou pour amorcer une démarche TMS. L'atelier donne les notions clés : facteurs de risque, bons réflexes, échauffements et pistes pour aller plus loin.",
    objectifs: [
      "Identifier les facteurs de risque TMS dans son activité",
      "Connaître les principes de la prévention par les gestes",
      "Repartir avec quelques bons réflexes immédiatement applicables",
    ],
    programme: [
      "Apports théoriques courts (TMS, statistiques, causes)",
      "Démonstrations de gestes et postures clés",
      "Échauffements et étirements à intégrer au quotidien",
    ],
    publicConcerne:
      "Tout salarié exposé à des sollicitations physiques au travail.",
    prerequis: "Aucun.",
  },

  "exercice-evacuation-incendie": {
    intro:
      "Exercice d'évacuation incendie grandeur nature dans vos locaux. {heuresLabel|1 heure} pour tester votre dispositif et entraîner vos équipes.",
    description:
      "Le Code du travail (R4227-39) impose l'organisation d'exercices d'évacuation tous les 6 mois. Nous organisons l'exercice complet sur votre site : briefing préalable des guides-files/serres-files, déclenchement, observation, débriefing avec relevé des points à améliorer (temps d'évacuation, comportements, dysfonctionnements éventuels du SSI).",
    objectifs: [
      "Tester en conditions réelles le dispositif d'évacuation",
      "Vérifier la connaissance des consignes par les équipes",
      "Identifier les points d'amélioration (signalisation, parcours, comptage)",
      "Produire un compte-rendu exploitable pour le DUERP",
    ],
    programme: [
      "Préparation et brief des guides-files / serres-files",
      "Déclenchement de l'exercice et observation",
      "Comptage au point de rassemblement",
      "Débriefing collectif et compte-rendu écrit",
    ],
    publicConcerne:
      "Tous les salariés du site concerné. Encadrement spécifique des guides-files, serres-files et chargés d'évacuation.",
    prerequis: "Aucun.",
  },

  "formation-cse-chsct-plus-300": {
    intro:
      "Formation Santé Sécurité Conditions de Travail (SSCT) des membres du CSE pour les entreprises de plus de 300 salariés. {heuresLabel|35 heures} pour maîtriser la mission SSCT héritée de l'ancien CHSCT.",
    description:
      "Au-delà de 300 salariés, le Code du travail (L2315-18) impose 35 heures de formation SSCT pour les membres du CSE. La formation couvre le cadre juridique, l'analyse des risques, les enquêtes accident, la prévention RPS, les visites de site et les relations avec l'inspection du travail et le médecin du travail.",
    objectifs: [
      
        "Comprendre les enjeux et le cadre de la formation",
        "Acquérir les compétences techniques visées",
        "Mettre en pratique les acquis sur cas concrets",
        "Adopter durablement les bons réflexes"
    
    ],
    programme: [
      
        "Cadre réglementaire et enjeux",
        "Apports théoriques et démonstrations",
        "Mises en situation pratiques",
        "Évaluation continue et plan d'action"
    
    ],
    publicConcerne:
      "Membres titulaires et suppléants du CSE — entreprises de plus de 300 salariés.",
    prerequis: "Membre élu du CSE en prise de fonction.",
  },

  // ───────────────────────── AJOUTÉES 2026-05-19 ─────────────────────────

  "habilitation-electrique-haute-tension": {
    intro:
      "Habilitation électrique HTA initiale (B1v, B2v, BR, BC, BE / H1v, H2v, HC) pour électriciens intervenant en basse et haute tension. {heuresLabel|28 heures} pour maîtriser travaux, interventions et consignation HTA conformément à la norme NF C18-510.",
    description:
      "Intervenir en haute tension exige une formation spécifique : risques décuplés, distances de sécurité élargies, procédures de consignation plus strictes. La formation combine théorie (analyse de schémas, identification des zones d'environnement, procédures de consignation/déconsignation, EPI HTA spécifiques) et pratique sur platine HTA représentative. L'évaluation théorique et pratique conditionne l'avis pour habilitation que l'employeur exploitera ensuite pour délivrer le titre d'habilitation HTA.",
    objectifs: [
      "Identifier les risques spécifiques à la haute tension (effets thermiques, induction, arcs)",
      "Maîtriser les procédures de consignation et de déconsignation en HTA",
      "Réaliser des travaux et interventions en BT et HTA en sécurité",
      "Obtenir l'avis pour habilitation B1v/B2v/BR/BC/BE et H1v/H2v/HC",
    ],
    programme: [
      "Notions de basse et haute tension — réglementation NF C18-510",
      "Zones d'environnement et distances de sécurité spécifiques HTA",
      "Procédures de consignation et déconsignation HTA",
      "EPI HTA : gants composites, écran facial, perches isolantes",
      "Travaux et interventions sous tension et hors tension",
      "Évaluations théoriques et pratiques sur platine HTA",
    ],
    publicConcerne:
      "Électriciens devant intervenir sur installations basse et haute tension : techniciens de maintenance industrielle, intervenants postes HTA/BT, agents d'exploitation réseaux.",
    prerequis:
      "Connaissances en électricité (formation initiale BT recommandée). Habilitation antérieure B0/H0 ou B1/B2 souhaitée mais non obligatoire.",
    notes: [
      "Avis pour habilitation valable 3 ans · recyclage NF C18-510 obligatoire",
    ],
  },

  "formation-recyclage-sst-oxygenotherapie": {
    intro:
      "Recyclage SST oxygénothérapie (MAC SST oxy). {heuresLabel|7 heures} tous les 24 mois pour maintenir la certification Sauveteur Secouriste du Travail oxygénothérapie, réactualiser les gestes et l'utilisation du matériel d'O₂.",
    description:
      "Le MAC SST oxygénothérapie est l'équivalent du MAC SST classique, enrichi du module spécifique à l'oxygénothérapie. La session reprend l'évaluation des compétences SST (PLS, RCP, défibrillation, hémorragies, brûlures) et y ajoute la révision des protocoles d'oxygénothérapie : indications, débits, choix du masque (haute concentration, bavu, lunettes), manipulation et sécurité de la bouteille. Une évaluation INRS conclut la session.",
    objectifs: [
      "Maintenir les compétences SST de base (gestes de premiers secours, prévention)",
      "Réactualiser les protocoles d'oxygénothérapie en situation d'urgence",
      "Maîtriser le matériel d'oxygénothérapie (bouteille, manodétendeur, masques)",
      "Conserver le certificat SST oxygénothérapie pour 24 mois supplémentaires",
    ],
    programme: [
      "Évaluation des acquis SST (gestes de premiers secours)",
      "Mises à jour des recommandations ILCOR / INRS",
      "Atelier oxygénothérapie : indications, débits, masques, sécurité",
      "Mises en situation avec matériel d'oxygénothérapie",
      "Évaluation INRS",
    ],
    publicConcerne:
      "SST oxygénothérapie en activité dont le certificat arrive à échéance dans les 12 prochains mois. Profils typiques : personnels d'établissements de soins, secouristes en milieu industriel à risques.",
    prerequis: "Certificat SST oxygénothérapie en cours de validité.",
    notes: [
      "Certificat SST oxygénothérapie valable 24 mois · MAC obligatoire pour renouveler",
      "Formateurs SST habilités INRS",
    ],
  },

  "formation-prevention-incivilites-conflits-clients": {
    intro:
      "Formation Prévention et gestion des incivilités et conflits clients. Pour les personnels en contact direct avec le public, exposés aux comportements agressifs, aux incivilités et aux situations de tension. Approche concrète et adaptée à votre secteur.",
    description:
      "Les incivilités et conflits avec la clientèle ne sont pas des aléas du métier : ce sont des risques psycho-sociaux reconnus, avec un impact réel sur la santé physique et mentale des salariés exposés. La formation outille les équipes pour anticiper les situations à risque, désamorcer les tensions avant qu'elles ne dégénèrent, gérer un client agressif sans s'exposer, et savoir alerter ou se mettre en sécurité quand la situation l'exige. L'approche est centrée sur la mise en pratique : jeux de rôle, simulations adaptées à votre activité, débriefings collectifs.",
    objectifs: [
      "Identifier les signaux faibles annonçant une montée en agressivité",
      "Maîtriser des techniques de communication apaisante (écoute active, reformulation)",
      "Désamorcer un conflit avant l'escalade",
      "Réagir face à un client agressif tout en se protégeant",
      "Savoir alerter et gérer les suites (déclaration, suivi RH)",
    ],
    programme: [
      "Cadre des RPS et obligations de l'employeur en matière d'incivilités",
      "Mécanismes de l'agressivité et signaux d'alerte",
      "Techniques de communication non-violente et désamorçage",
      "Posture, voix, distance : éléments de communication non-verbale",
      "Cas pratiques et jeux de rôle adaptés à votre secteur",
      "Procédures internes : alerte, mise en sécurité, déclaration",
    ],
    publicConcerne:
      "Tous les salariés en contact direct avec le public : accueil, guichet, caisse, service après-vente, agents d'accueil, conseillers clientèle, soignants en contact patient/famille, personnels de transport en commun, agents de la fonction publique.",
    prerequis: "Aucun.",
  },
};

export function getFormationContent(slug: string): FormationContent | undefined {
  return formationsContent[slug];
}
