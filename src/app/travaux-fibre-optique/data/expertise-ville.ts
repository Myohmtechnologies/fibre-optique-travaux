interface ExpertiseVilleData {
  slug: string;
  titre: string;
  introduction: string;
  paragraphe1: string;
  paragraphe2: string;
  paragraphe3: string;
  photo1: {
    src: string;
    alt: string;
    legende: string;
  };
  photo2: {
    src: string;
    alt: string;
    legende: string;
  };
  photo3: {
    src: string;
    alt: string;
    legende: string;
  };
  pointsForts: string[];
}

export const expertiseVille: ExpertiseVilleData[] = [
  {
    slug: "marseille",
    titre: "Notre expertise fibre optique à Marseille",
    introduction: "Marseille, première ville de la région PACA avec ses 870 731 habitants, présente une diversité architecturale unique qui influence directement les problématiques de raccordement à la fibre optique.",
    paragraphe1: "Dans les quartiers historiques comme Le Panier ou le Vieux-Port, nous intervenons régulièrement sur des infrastructures anciennes où les fourreaux sont souvent bouchés ou détériorés par le temps. La proximité maritime et l'air salin constituent également des facteurs aggravants pour les installations télécom extérieures. Notre équipe marseillaise est spécialement formée pour intervenir dans ces conditions particulières, avec des outils adaptés à la corrosion spécifique de ces zones.",
    paragraphe2: "Les quartiers plus récents comme La Joliette ou Euroméditerranée présentent d'autres défis : les nombreux travaux d'aménagement urbain ont souvent perturbé les réseaux souterrains, rendant parfois introuvables les regards télécom. Grâce à nos détecteurs de précision, nous localisons ces infrastructures avec une marge d'erreur inférieure à 5 cm, même sous les revêtements récemment posés.",
    paragraphe3: "Que vous soyez dans un immeuble haussmannien de la Canebière, une résidence moderne à Château-Gombert ou un pavillon à Mazargues, notre expertise couvre l'ensemble des configurations marseillaises. Nous intervenons aussi bien pour les particuliers que pour les professionnels, notamment dans les zones d'activités comme Valentine ou La Capelette où la fibre est devenue indispensable à l'activité économique.",
    photo1: {
      src: "/images/expertise/marseille-regard-telecom.jpg",
      alt: "Localisation d'un regard télécom à Marseille",
      legende: "Localisation d'un regard télécom dans le quartier du Panier à Marseille"
    },
    photo2: {
      src: "/images/expertise/marseille-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau bouché à Marseille",
      legende: "Débouchage d'un fourreau obstrué près du Vieux-Port"
    },
    photo3: {
      src: "/images/expertise/marseille-installation-fibre.jpg",
      alt: "Installation de fibre optique dans un immeuble à Marseille",
      legende: "Installation d'une nouvelle gaine pour fibre optique dans un immeuble ancien de La Joliette"
    },
    pointsForts: [
      "Détection de regards télécom sous les pavés historiques",
      "Débouchage de fourreaux corrodés par l'air marin",
      "Installation de nouvelles adductions dans les immeubles anciens",
      "Réparation de gaines écrasées dans les parties communes"
    ]
  },
  {
    slug: "nice",
    titre: "Notre expertise fibre optique à Nice",
    introduction: "Nice, capitale de la Côte d'Azur avec ses 342 669 habitants, présente une configuration urbaine particulière entre mer et montagne qui génère des défis spécifiques pour l'installation de la fibre optique.",
    paragraphe1: "Dans le Vieux-Nice, nous sommes confrontés à un dédale de ruelles étroites et d'immeubles anciens où les infrastructures télécom sont souvent difficiles d'accès. Les regards sont fréquemment dissimulés sous les pavés historiques ou les terrasses de restaurants. Notre équipe niçoise utilise des équipements de détection de haute précision pour localiser ces points d'accès sans endommager le patrimoine urbain.",
    paragraphe2: "Le long de la Promenade des Anglais et dans les quartiers comme Fabron ou Magnan, la proximité de la mer pose des problèmes spécifiques : ensablement des regards, corrosion accélérée des infrastructures métalliques, et fourreaux détériorés par l'humidité et le sel. Nos techniciens sont formés pour intervenir dans ces conditions particulières avec des outils adaptés à ces problématiques côtières.",
    paragraphe3: "Dans les quartiers résidentiels comme Cimiez ou Saint-Isidore, nous intervenons aussi bien dans les immeubles Belle Époque que dans les résidences modernes ou les villas individuelles. Notre expertise s'étend également aux zones d'activités et aux bureaux du quartier de l'Ariane ou de Saint-Roch, où nous assurons un service rapide et efficace pour les professionnels dépendants d'une connexion internet stable et performante.",
    photo1: {
      src: "/images/expertise/nice-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Nice",
      legende: "Recherche d'un regard télécom dans le Vieux-Nice avec détecteur de précision"
    },
    photo2: {
      src: "/images/expertise/nice-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau ensablé à Nice",
      legende: "Débouchage d'un fourreau ensablé près de la Promenade des Anglais"
    },
    photo3: {
      src: "/images/expertise/nice-tirage-fibre.jpg",
      alt: "Tirage de fibre optique dans un immeuble à Nice",
      legende: "Tirage de fibre optique dans un immeuble Belle Époque à Cimiez"
    },
    pointsForts: [
      "Localisation de regards ensablés près des plages",
      "Débouchage de fourreaux corrodés par l'air marin",
      "Installation dans les immeubles historiques du centre-ville",
      "Solutions adaptées aux contraintes des copropriétés de standing"
    ]
  },
  {
    slug: "toulon",
    titre: "Notre expertise fibre optique à Toulon",
    introduction: "Toulon, grande ville portuaire et militaire du Var avec ses 171 953 habitants, présente des caractéristiques uniques qui influencent directement les problématiques de raccordement à la fibre optique.",
    paragraphe1: "La proximité du port militaire et des installations de la Marine nationale crée des configurations particulières dans des quartiers comme Le Mourillon ou Saint-Jean-du-Var. Les infrastructures télécom y côtoient souvent des réseaux sécurisés, nécessitant une expertise particulière pour intervenir sans perturber ces installations sensibles. Notre équipe toulonnaise est habilitée et formée pour travailler dans ces environnements spécifiques.",
    paragraphe2: "Dans le centre-ville historique et les quartiers comme Pont-du-Las ou La Rode, nous sommes confrontés à des bâtiments anciens où les fourreaux sont souvent corrodés par l'humidité et l'air marin. Les regards télécom sont fréquemment dissimulés sous des places récemment rénovées ou des voies piétonnes. Nos détecteurs de précision nous permettent de localiser ces infrastructures avec une marge d'erreur minimale.",
    paragraphe3: "Les quartiers résidentiels comme Sainte-Anne, Brunet ou Escaillon présentent une grande diversité d'habitats, des maisons individuelles aux petits collectifs. Notre expertise s'adapte à toutes ces configurations, en proposant des solutions sur mesure pour chaque type de logement. Nous intervenons également dans les zones d'activités comme La Serinette ou Siblas, où la fibre est cruciale pour les entreprises locales.",
    photo1: {
      src: "/images/expertise/toulon-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Toulon",
      legende: "Détection d'un regard télécom dissimulé sous une place rénovée du centre-ville"
    },
    photo2: {
      src: "/images/expertise/toulon-reparation-fourreau.jpg",
      alt: "Réparation d'un fourreau corrodé à Toulon",
      legende: "Réparation d'un fourreau corrodé par l'air marin près du port"
    },
    photo3: {
      src: "/images/expertise/toulon-installation-gaine.jpg",
      alt: "Installation d'une nouvelle gaine pour fibre optique à Toulon",
      legende: "Installation d'une nouvelle gaine pour fibre optique dans un immeuble du Mourillon"
    },
    pointsForts: [
      "Intervention près des installations militaires sensibles",
      "Réparation de fourreaux corrodés par l'environnement maritime",
      "Localisation de regards sous les places récemment rénovées",
      "Solutions adaptées aux immeubles anciens du centre-ville"
    ]
  },
  {
    slug: "aix-en-provence",
    titre: "Notre expertise fibre optique à Aix-en-Provence",
    introduction: "Aix-en-Provence, ville d'art et d'histoire avec ses 143 097 habitants, présente un patrimoine architectural exceptionnel qui génère des défis particuliers pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique et le quartier Mazarin, nous intervenons sur des bâtiments classés et des hôtels particuliers où les contraintes patrimoniales sont fortes. Les interventions y requièrent une approche minutieuse et respectueuse du bâti ancien. Notre équipe aixoise est spécialement formée aux techniques non invasives permettant d'installer la fibre sans dénaturer ces joyaux architecturaux.",
    paragraphe2: "Les quartiers résidentiels comme Sextius-Mirabeau, La Torse ou Val Saint-André présentent une grande diversité d'habitats, des résidences de standing aux maisons individuelles. Les copropriétés haut de gamme, nombreuses à Aix, imposent souvent des exigences esthétiques élevées pour l'installation de la fibre. Nous proposons des solutions discrètes et élégantes, parfaitement intégrées à l'environnement.",
    paragraphe3: "Dans les zones d'activités comme La Duranne, Les Milles ou Puyricard, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. Notre expertise s'étend également aux quartiers périphériques comme Luynes ou Pont de l'Arc, où nous intervenons aussi bien dans les lotissements récents que dans les bastides provençales traditionnelles.",
    photo1: {
      src: "/images/expertise/aix-localisation-regard.jpg",
      alt: "Localisation d'un regard télécom à Aix-en-Provence",
      legende: "Localisation d'un regard télécom dans une rue pavée du centre historique"
    },
    photo2: {
      src: "/images/expertise/aix-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau dans un hôtel particulier à Aix-en-Provence",
      legende: "Débouchage d'un fourreau obstrué dans un hôtel particulier du quartier Mazarin"
    },
    photo3: {
      src: "/images/expertise/aix-installation-discrete.jpg",
      alt: "Installation discrète de fibre optique à Aix-en-Provence",
      legende: "Installation discrète de fibre optique dans une copropriété de standing à Sextius-Mirabeau"
    },
    pointsForts: [
      "Interventions respectueuses du patrimoine dans le centre historique",
      "Solutions esthétiques pour les copropriétés de standing",
      "Débouchage de fourreaux dans les hôtels particuliers",
      "Installations discrètes adaptées aux exigences architecturales"
    ]
  },
  {
    slug: "avignon",
    titre: "Notre expertise fibre optique à Avignon",
    introduction: "Avignon, cité des Papes avec ses 91 729 habitants, présente un patrimoine médiéval exceptionnel qui crée des défis uniques pour l'installation de la fibre optique.",
    paragraphe1: "Dans le secteur intra-muros, nous intervenons sur des bâtiments historiques où les contraintes patrimoniales sont particulièrement fortes. Les remparts et les édifices médiévaux nécessitent une approche spécifique pour le passage des câbles et l'installation des équipements. Notre équipe avignonnaise est spécialement formée pour intervenir dans ce contexte patrimonial sensible, en collaboration avec les architectes des bâtiments de France.",
    paragraphe2: "Les quartiers comme Montfavet, Saint-Chamand ou Monclar présentent des problématiques différentes, avec un mélange d'habitats collectifs et individuels. Les regards télécom y sont souvent difficiles à localiser en raison des nombreux aménagements urbains réalisés au fil des années. Nos détecteurs de précision nous permettent de retrouver ces infrastructures sans dégradation de la voirie.",
    paragraphe3: "Dans les zones résidentielles comme Champfleury, La Rocade ou Pont des Deux Eaux, nous intervenons aussi bien dans les pavillons que dans les petits collectifs. Notre expertise s'étend également aux zones plus rurales comme Barthelasse ou Réalpanier, où les distances plus importantes entre les points de raccordement nécessitent parfois des solutions techniques spécifiques.",
    photo1: {
      src: "/images/expertise/avignon-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Avignon",
      legende: "Recherche d'un regard télécom dans une rue pavée intra-muros"
    },
    photo2: {
      src: "/images/expertise/avignon-passage-remparts.jpg",
      alt: "Passage de fibre à travers les remparts d'Avignon",
      legende: "Technique spéciale pour le passage de la fibre à travers les remparts historiques"
    },
    photo3: {
      src: "/images/expertise/avignon-installation-batiment-ancien.jpg",
      alt: "Installation de fibre dans un bâtiment ancien à Avignon",
      legende: "Installation discrète de fibre optique dans un bâtiment médiéval du centre-ville"
    },
    pointsForts: [
      "Interventions respectueuses dans la cité historique des Papes",
      "Techniques spéciales pour le passage à travers les remparts",
      "Localisation de regards introuvables sous les rues pavées",
      "Solutions adaptées aux bâtiments classés monuments historiques"
    ]
  },
  {
    slug: "manosque",
    titre: "Notre expertise fibre optique à Manosque",
    introduction: "Manosque, principale ville des Alpes-de-Haute-Provence avec ses 22 105 habitants, présente une configuration particulière entre centre historique médiéval et zones résidentielles modernes.",
    paragraphe1: "Dans le centre ancien de Manosque, nous sommes confrontés à des ruelles étroites et des bâtiments médiévaux où les infrastructures télécom sont souvent difficiles d'accès. Les regards sont fréquemment dissimulés sous les pavés historiques ou les places récemment rénovées. Notre équipe utilise des équipements de détection de haute précision pour localiser ces points d'accès sans endommager le patrimoine urbain.",
    paragraphe2: "Les quartiers résidentiels comme Saint-Lazare, La Rochette ou Les Plantiers présentent une grande diversité d'habitats, des maisons individuelles aux petits collectifs. La topographie vallonnée de Manosque crée parfois des défis supplémentaires pour le raccordement, avec des dénivelés importants entre les points de branchement. Nos techniciens sont formés pour adapter leurs interventions à ces configurations particulières.",
    paragraphe3: "Dans les zones d'activités comme Saint-Maurice ou Saint-Joseph, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La proximité du centre de recherche ITER génère également une demande croissante pour des connexions très haut débit fiables, que nous sommes en mesure de satisfaire grâce à notre expertise technique et notre connaissance du terrain local.",
    photo1: {
      src: "/images/expertise/manosque-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Manosque",
      legende: "Détection d'un regard télécom dans une ruelle du centre historique de Manosque"
    },
    photo2: {
      src: "/images/expertise/manosque-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Manosque",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel de Manosque"
    },
    photo3: {
      src: "/images/expertise/manosque-installation-pavillon.jpg",
      alt: "Installation de fibre dans un pavillon à Manosque",
      legende: "Installation de fibre optique dans un pavillon du quartier Saint-Lazare"
    },
    pointsForts: [
      "Intervention dans le centre historique médiéval",
      "Solutions adaptées à la topographie vallonnée",
      "Raccordement dans les zones d'activités technologiques",
      "Expertise locale pour tous types d'habitats"
    ]
  },
  {
    slug: "digne-les-bains",
    titre: "Notre expertise fibre optique à Digne-les-Bains",
    introduction: "Digne-les-Bains, préfecture des Alpes-de-Haute-Provence avec ses 16 372 habitants, présente une configuration urbaine particulière entre ville thermale historique et relief montagneux.",
    paragraphe1: "Dans le centre-ville de Digne-les-Bains, nous intervenons sur des bâtiments anciens où les infrastructures télécom nécessitent souvent une remise à niveau complète. Les regards télécom sont fréquemment dissimulés sous les aménagements urbains réalisés au fil des rénovations successives. Notre équipe utilise des détecteurs de précision pour localiser ces infrastructures sans dégradation de la voirie.",
    paragraphe2: "La topographie montagneuse de Digne-les-Bains crée des défis supplémentaires pour le raccordement à la fibre, avec des dénivelés importants et des conditions climatiques parfois difficiles, notamment en hiver. Nos techniciens sont équipés et formés pour intervenir dans ces conditions particulières, garantissant un service fiable toute l'année.",
    paragraphe3: "Les quartiers résidentiels comme Les Thermes, Le Pigeonnier ou Les Sieyes présentent une diversité d'habitats, des immeubles du centre aux villas périphériques. Notre expertise s'adapte à toutes ces configurations, en proposant des solutions sur mesure pour chaque type de logement. Nous intervenons également dans les zones d'activités comme Saint-Christophe, où la fibre est essentielle au développement économique local.",
    photo1: {
      src: "/images/expertise/digne-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Digne-les-Bains",
      legende: "Recherche d'un regard télécom dans le centre-ville de Digne-les-Bains"
    },
    photo2: {
      src: "/images/expertise/digne-travaux-montagne.jpg",
      alt: "Travaux de fibre optique en zone montagneuse à Digne-les-Bains",
      legende: "Travaux de raccordement fibre dans un quartier en pente de Digne-les-Bains"
    },
    photo3: {
      src: "/images/expertise/digne-installation-immeuble.jpg",
      alt: "Installation de fibre dans un immeuble à Digne-les-Bains",
      legende: "Installation de fibre optique dans un immeuble ancien du quartier thermal"
    },
    pointsForts: [
      "Adaptation aux conditions climatiques montagneuses",
      "Interventions dans les bâtiments historiques du centre thermal",
      "Solutions pour les zones à fort dénivelé",
      "Expertise locale pour tous types d'habitats"
    ]
  },
  {
    slug: "briancon",
    titre: "Notre expertise fibre optique à Briançon",
    introduction: "Briançon, ville la plus haute de France avec ses 12 392 habitants, présente des défis uniques liés à son altitude et son climat montagnard pour l'installation de la fibre optique.",
    paragraphe1: "Dans la cité Vauban, classée au patrimoine mondial de l'UNESCO, nous intervenons sur des bâtiments historiques où les contraintes patrimoniales sont particulièrement fortes. Les remparts et les édifices militaires nécessitent une approche spécifique pour le passage des câbles et l'installation des équipements. Notre équipe est spécialement formée pour intervenir dans ce contexte patrimonial sensible.",
    paragraphe2: "Le climat montagnard de Briançon, avec ses hivers rigoureux et ses importantes chutes de neige, crée des défis supplémentaires pour l'installation et la maintenance des infrastructures fibre. Les regards télécom peuvent être inaccessibles pendant plusieurs mois, et les fourreaux sont soumis à des contraintes thermiques importantes. Nos techniciens sont équipés pour intervenir dans ces conditions extrêmes.",
    paragraphe3: "Les quartiers comme Sainte-Catherine, Le Prorel ou Pont-de-Cervières présentent une diversité d'habitats, des chalets traditionnels aux résidences touristiques. Notre expertise s'adapte à toutes ces configurations, en proposant des solutions sur mesure pour chaque type de logement. Nous intervenons également dans les zones d'activités et les stations de ski, où la fibre est essentielle à l'économie touristique locale.",
    photo1: {
      src: "/images/expertise/briancon-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Briançon",
      legende: "Détection d'un regard télécom sous la neige dans la cité Vauban"
    },
    photo2: {
      src: "/images/expertise/briancon-fourreau-gel.jpg",
      alt: "Réparation d'un fourreau endommagé par le gel à Briançon",
      legende: "Réparation d'un fourreau endommagé par le gel dans un quartier résidentiel"
    },
    photo3: {
      src: "/images/expertise/briancon-installation-chalet.jpg",
      alt: "Installation de fibre dans un chalet à Briançon",
      legende: "Installation de fibre optique dans un chalet traditionnel du Prorel"
    },
    pointsForts: [
      "Adaptation aux conditions climatiques extrêmes de haute montagne",
      "Interventions respectueuses du patrimoine dans la cité Vauban",
      "Solutions pour les zones difficiles d'accès en hiver",
      "Expertise pour les résidences touristiques et chalets"
    ]
  },
  {
    slug: "orange",
    titre: "Notre expertise fibre optique à Orange",
    introduction: "Orange, ville historique du Vaucluse avec ses 29 482 habitants, présente un riche patrimoine romain qui crée des défis particuliers pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique d'Orange, nous intervenons à proximité de monuments romains classés comme le Théâtre antique ou l'Arc de triomphe. Ces zones nécessitent une attention particulière et une coordination avec les services archéologiques pour toute intervention souterraine. Notre équipe est formée pour travailler dans ces contextes patrimoniaux sensibles.",
    paragraphe2: "Les quartiers résidentiels comme Le Coudoulet, L'Aygues ou La Croix-Rouge présentent une diversité d'habitats, des maisons individuelles aux petits collectifs. Les infrastructures télécom y sont parfois vieillissantes et nécessitent une remise à niveau pour supporter la fibre optique. Nos techniciens sont équipés pour réaliser ces travaux de modernisation avec un minimum d'impact.",
    paragraphe3: "Dans les zones d'activités comme le Pôle du Coudoulet ou la zone de la Brunette, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La plaine agricole qui entoure Orange présente également des défis pour le raccordement des exploitations isolées, pour lesquelles nous proposons des solutions techniques innovantes.",
    photo1: {
      src: "/images/expertise/orange-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Orange",
      legende: "Recherche d'un regard télécom près du Théâtre antique d'Orange"
    },
    photo2: {
      src: "/images/expertise/orange-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Orange",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel d'Orange"
    },
    photo3: {
      src: "/images/expertise/orange-installation-zone-activite.jpg",
      alt: "Installation de fibre dans une zone d'activité à Orange",
      legende: "Installation de fibre optique dans une entreprise de la zone du Coudoulet"
    },
    pointsForts: [
      "Interventions respectueuses du patrimoine romain",
      "Modernisation des infrastructures télécom vieillissantes",
      "Solutions pour les zones d'activités économiques",
      "Raccordement des exploitations agricoles isolées"
    ]
  },
  {
    slug: "carpentras",
    titre: "Notre expertise fibre optique à Carpentras",
    introduction: "Carpentras, sous-préfecture du Vaucluse avec ses 28 447 habitants, combine un centre médiéval préservé et des quartiers modernes, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Carpentras, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. La présence de monuments comme la Cathédrale Saint-Siffrein ou la Porte d'Orange nécessite une approche respectueuse du patrimoine. Notre équipe est formée pour travailler dans ces contextes historiques sensibles.",
    paragraphe2: "Les quartiers résidentiels comme Les Amandiers, Le Pous du Plan ou La Quintine présentent une diversité d'habitats, des maisons individuelles aux résidences collectives. La topographie vallonnée de certains secteurs crée parfois des défis supplémentaires pour le raccordement. Nos techniciens sont équipés pour s'adapter à ces configurations particulières.",
    paragraphe3: "Dans les zones d'activités comme Bellecour ou Villefranche, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La plaine agricole du Comtat Venaissin qui entoure Carpentras présente également des défis pour le raccordement des exploitations, pour lesquelles nous proposons des solutions techniques innovantes, essentielles à la modernisation de l'agriculture locale.",
    photo1: {
      src: "/images/expertise/carpentras-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Carpentras",
      legende: "Détection d'un regard télécom dans une rue pavée du centre historique"
    },
    photo2: {
      src: "/images/expertise/carpentras-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Carpentras",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel de Carpentras"
    },
    photo3: {
      src: "/images/expertise/carpentras-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à Carpentras",
      legende: "Installation de fibre optique dans une entreprise de la zone Bellecour"
    },
    pointsForts: [
      "Interventions respectueuses dans le centre médiéval",
      "Solutions adaptées à la topographie vallonnée",
      "Raccordement des zones d'activités économiques",
      "Connexion des exploitations agricoles du Comtat Venaissin"
    ]
  },
  {
    slug: "cavaillon",
    titre: "Notre expertise fibre optique à Cavaillon",
    introduction: "Cavaillon, ville du Luberon avec ses 26 689 habitants, présente une configuration particulière entre colline Saint-Jacques, centre historique et plaine agricole, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre ancien de Cavaillon, nous intervenons sur des bâtiments historiques où les infrastructures télécom nécessitent souvent une remise à niveau complète. La présence de monuments comme la Cathédrale ou la Synagogue nécessite une approche respectueuse du patrimoine. Notre équipe est formée pour travailler dans ces contextes historiques sensibles.",
    paragraphe2: "La topographie particulière de Cavaillon, avec la colline Saint-Jacques qui domine la ville, crée des défis supplémentaires pour le raccordement des habitations situées sur les pentes. Les quartiers comme Les Condamines, Saint-Baldou ou Les Ratacans présentent une diversité d'habitats qui nécessitent des approches techniques différenciées.",
    paragraphe3: "Dans les zones d'activités comme les Banquets ou le MIN (Marché d'Intérêt National), nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La plaine agricole qui entoure Cavaillon, réputée pour ses melons, présente également des défis pour le raccordement des exploitations, pour lesquelles nous proposons des solutions techniques innovantes, essentielles à l'agriculture moderne.",
    photo1: {
      src: "/images/expertise/cavaillon-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Cavaillon",
      legende: "Recherche d'un regard télécom dans une rue du centre historique de Cavaillon"
    },
    photo2: {
      src: "/images/expertise/cavaillon-travaux-colline.jpg",
      alt: "Travaux de fibre optique sur la colline Saint-Jacques à Cavaillon",
      legende: "Travaux de raccordement fibre sur les pentes de la colline Saint-Jacques"
    },
    photo3: {
      src: "/images/expertise/cavaillon-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise agricole à Cavaillon",
      legende: "Installation de fibre optique dans une entreprise du MIN de Cavaillon"
    },
    pointsForts: [
      "Interventions adaptées à la topographie entre colline et plaine",
      "Solutions respectueuses du patrimoine dans le centre ancien",
      "Raccordement des entreprises du MIN et des zones d'activités",
      "Connexion des exploitations agricoles spécialisées"
    ]
  },
  {
    slug: "menton",
    titre: "Notre expertise fibre optique à Menton",
    introduction: "Menton, perle de la Côte d'Azur avec ses 30 455 habitants, présente une configuration particulière entre mer et montagne, avec un centre historique coloré et des quartiers en pente, créant des défis uniques pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Menton, nous intervenons sur des bâtiments colorés typiques de l'architecture ligure, où les infrastructures télécom sont souvent vieillissantes. Les ruelles étroites et escarpées nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes.",
    paragraphe2: "La topographie très accidentée de Menton, avec des quartiers construits à flanc de montagne comme Garavan, Les Ciappes ou Le Borrigo, crée des défis majeurs pour le raccordement à la fibre. Les dénivelés importants et la dispersion de l'habitat nécessitent des solutions techniques innovantes que nos techniciens maîtrisent parfaitement.",
    paragraphe3: "La proximité de la frontière italienne et la présence de nombreuses résidences secondaires internationales ajoutent une dimension particulière à nos interventions. Nous sommes habitués à coordonner nos travaux avec les syndics internationaux et à respecter les normes des deux pays. Les quartiers comme Carnolès, le Cap-Martin ou Roquebrune bénéficient également de notre expertise pour des installations discrètes et efficaces.",
    photo1: {
      src: "/images/expertise/menton-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Menton",
      legende: "Détection d'un regard télécom dans une ruelle du vieux Menton"
    },
    photo2: {
      src: "/images/expertise/menton-travaux-pente.jpg",
      alt: "Travaux de fibre optique en zone pentue à Menton",
      legende: "Travaux de raccordement fibre dans le quartier en pente de Garavan"
    },
    photo3: {
      src: "/images/expertise/menton-installation-residence.jpg",
      alt: "Installation de fibre dans une résidence à Menton",
      legende: "Installation discrète de fibre optique dans une résidence de standing du bord de mer"
    },
    pointsForts: [
      "Adaptation aux fortes pentes et à la topographie accidentée",
      "Interventions discrètes dans le centre historique coloré",
      "Solutions pour les résidences internationales de standing",
      "Expertise transfrontalière France-Italie"
    ]
  },
  {
    slug: "arles",
    titre: "Notre expertise fibre optique à Arles",
    introduction: "Arles, ville d'art et d'histoire avec ses 52 729 habitants, présente un patrimoine romain et médiéval exceptionnel ainsi qu'un vaste territoire incluant une partie de la Camargue, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique d'Arles, classé au patrimoine mondial de l'UNESCO, nous intervenons à proximité de monuments romains comme les Arènes ou le Théâtre antique. Ces zones nécessitent une coordination étroite avec les services archéologiques pour toute intervention souterraine. Notre équipe est spécialement formée pour travailler dans ces contextes patrimoniaux sensibles.",
    paragraphe2: "L'étendue exceptionnelle du territoire arlésien, le plus vaste de France métropolitaine, crée des défis logistiques importants pour le déploiement de la fibre. Les quartiers périphériques comme Trinquetaille, Monplaisir ou Barriol, mais aussi les hameaux plus éloignés comme Salin-de-Giraud ou Mas-Thibert, bénéficient de notre expertise pour des raccordements adaptés à leur configuration.",
    paragraphe3: "Les zones humides de Camargue présentent des contraintes particulières pour l'installation et la maintenance des infrastructures télécom, notamment en raison de la salinité et des inondations saisonnières. Nos techniciens utilisent des matériaux et des techniques spécifiques pour garantir la durabilité des installations dans ces environnements difficiles. Nous intervenons également dans les zones d'activités comme la zone nord, essentielles à l'économie locale.",
    photo1: {
      src: "/images/expertise/arles-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Arles",
      legende: "Détection d'un regard télécom près des Arènes d'Arles"
    },
    photo2: {
      src: "/images/expertise/arles-travaux-camargue.jpg",
      alt: "Travaux de fibre optique en Camargue",
      legende: "Travaux de raccordement fibre adaptés aux contraintes de la Camargue"
    },
    photo3: {
      src: "/images/expertise/arles-installation-batiment-ancien.jpg",
      alt: "Installation de fibre dans un bâtiment ancien à Arles",
      legende: "Installation discrète de fibre optique dans un bâtiment historique du centre-ville"
    },
    pointsForts: [
      "Interventions respectueuses du patrimoine UNESCO",
      "Solutions pour les zones humides de Camargue",
      "Raccordement des hameaux isolés sur un vaste territoire",
      "Expertise en archéologie préventive pour les travaux en centre historique"
    ]
  },
  {
    slug: "saint-raphael",
    titre: "Notre expertise fibre optique à Saint-Raphaël",
    introduction: "Saint-Raphaël, station balnéaire du Var avec ses 35 042 habitants, présente une configuration particulière entre mer et massif de l'Estérel, avec un littoral étendu et des quartiers résidentiels dispersés, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Le long du littoral de Saint-Raphaël, nous intervenons dans des résidences de standing et des hôtels où les exigences esthétiques sont particulièrement élevées. La proximité de la mer pose également des défis techniques en raison de la corrosion accélérée des infrastructures métalliques. Nos techniciens utilisent des matériaux et des techniques adaptés à ces environnements marins.",
    paragraphe2: "Les quartiers résidentiels comme Valescure, Boulouris ou Agay, construits à flanc de colline dans le massif de l'Estérel, présentent des défis topographiques importants. L'habitat dispersé et les dénivelés nécessitent des solutions techniques spécifiques pour garantir un raccordement fibre de qualité. Notre équipe est formée pour intervenir dans ces configurations complexes.",
    paragraphe3: "La forte saisonnalité de Saint-Raphaël, avec une population qui triple en été, crée des contraintes particulières pour la planification des interventions. Nous adaptons notre calendrier pour minimiser l'impact sur l'activité touristique, en privilégiant les travaux hors saison. Les quartiers comme Le Dramont, Anthéor ou Le Trayas bénéficient également de notre expertise pour des installations discrètes et efficaces.",
    photo1: {
      src: "/images/expertise/saint-raphael-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Saint-Raphaël",
      legende: "Détection d'un regard télécom sur le front de mer de Saint-Raphaël"
    },
    photo2: {
      src: "/images/expertise/saint-raphael-travaux-estrel.jpg",
      alt: "Travaux de fibre optique dans l'Estérel",
      legende: "Travaux de raccordement fibre dans un quartier résidentiel de l'Estérel"
    },
    photo3: {
      src: "/images/expertise/saint-raphael-installation-hotel.jpg",
      alt: "Installation de fibre dans un hôtel à Saint-Raphaël",
      legende: "Installation discrète de fibre optique dans un hôtel du bord de mer"
    },
    pointsForts: [
      "Adaptation aux contraintes du littoral méditerranéen",
      "Solutions pour l'habitat dispersé dans le massif de l'Estérel",
      "Installations discrètes dans les résidences et hôtels de standing",
      "Planification respectueuse de la saisonnalité touristique"
    ]
  },
  {
    slug: "cannes",
    titre: "Notre expertise fibre optique à Cannes",
    introduction: "Cannes, ville emblématique de la Côte d'Azur avec ses 74 545 habitants, présente une configuration particulière entre front de mer luxueux et collines résidentielles, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Sur la célèbre Croisette et dans le quartier du Suquet, nous intervenons dans des bâtiments de prestige où les exigences esthétiques sont particulièrement élevées. La proximité de la mer pose également des défis techniques en raison de la corrosion accélérée des infrastructures métalliques. Nos techniciens utilisent des matériaux et des techniques adaptés à ces environnements marins.",
    paragraphe2: "Les quartiers résidentiels comme La Californie, Super Cannes ou La Croix des Gardes, construits sur les collines qui surplombent la baie, présentent des défis topographiques importants. L'habitat de standing et les propriétés sécurisées nécessitent des approches sur mesure et discrètes. Notre équipe est formée pour intervenir dans ces environnements prestigieux avec professionnalisme et discrétion.",
    paragraphe3: "La forte saisonnalité de Cannes, avec ses nombreux événements internationaux comme le Festival du Film, crée des contraintes particulières pour la planification des interventions. Nous adaptons notre calendrier pour minimiser l'impact sur ces événements majeurs. Les quartiers comme La Bocca, Ranguin ou Prado-République bénéficient également de notre expertise pour des installations efficaces et adaptées à leurs spécificités.",
    photo1: {
      src: "/images/expertise/cannes-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Cannes",
      legende: "Détection d'un regard télécom sur la Croisette"
    },
    photo2: {
      src: "/images/expertise/cannes-travaux-colline.jpg",
      alt: "Travaux de fibre optique dans les collines de Cannes",
      legende: "Travaux de raccordement fibre dans une propriété de La Californie"
    },
    photo3: {
      src: "/images/expertise/cannes-installation-hotel.jpg",
      alt: "Installation de fibre dans un hôtel de luxe à Cannes",
      legende: "Installation discrète de fibre optique dans un palace du boulevard de la Croisette"
    },
    pointsForts: [
      "Interventions discrètes dans les établissements de prestige",
      "Solutions adaptées aux propriétés de standing des collines",
      "Planification respectueuse des événements internationaux",
      "Expertise en environnement marin et luxueux"
    ]
  },
  {
    slug: "antibes",
    titre: "Notre expertise fibre optique à Antibes",
    introduction: "Antibes Juan-les-Pins, ville côtière des Alpes-Maritimes avec ses 73 798 habitants, présente une configuration unique entre vieille ville fortifiée, cap d'Antibes luxueux et stations balnéaires animées, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans la vieille ville fortifiée d'Antibes, nous intervenons sur des bâtiments historiques où les infrastructures télécom sont souvent difficiles d'accès. Les remparts et les ruelles étroites nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "Sur le Cap d'Antibes, nous intervenons dans des propriétés d'exception où les exigences esthétiques et de discrétion sont particulièrement élevées. La proximité de la mer et la végétation dense créent des défis supplémentaires pour le raccordement. Nos techniciens sont formés pour proposer des solutions sur mesure respectant ces environnements prestigieux.",
    paragraphe3: "Dans le secteur de Juan-les-Pins et les quartiers comme La Fontonne, Les Semboules ou Le Ponteil, nous adaptons nos interventions à la diversité de l'habitat, des résidences touristiques aux immeubles résidentiels. La saisonnalité marquée, notamment avec le festival de Jazz, nous conduit à planifier soigneusement nos interventions pour minimiser les perturbations pendant les périodes d'événements.",
    photo1: {
      src: "/images/expertise/antibes-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Antibes",
      legende: "Recherche d'un regard télécom dans une ruelle de la vieille ville fortifiée"
    },
    photo2: {
      src: "/images/expertise/antibes-travaux-cap.jpg",
      alt: "Travaux de fibre optique sur le Cap d'Antibes",
      legende: "Travaux de raccordement fibre dans une propriété du Cap d'Antibes"
    },
    photo3: {
      src: "/images/expertise/antibes-installation-residence.jpg",
      alt: "Installation de fibre dans une résidence à Juan-les-Pins",
      legende: "Installation de fibre optique dans une résidence de standing à Juan-les-Pins"
    },
    pointsForts: [
      "Interventions respectueuses dans la vieille ville fortifiée",
      "Solutions discrètes pour les propriétés d'exception du Cap",
      "Adaptation à la saisonnalité touristique et aux événements",
      "Expertise en environnement marin et patrimonial"
    ]
  },
  {
    slug: "frejus",
    titre: "Notre expertise fibre optique à Fréjus",
    introduction: "Fréjus, ville historique du Var avec ses 54 023 habitants, présente une configuration unique entre patrimoine romain, port de plaisance et quartiers résidentiels étendus, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Fréjus, riche de son passé romain, nous intervenons à proximité de monuments antiques comme l'amphithéâtre ou l'aqueduc. Ces zones nécessitent une coordination étroite avec les services archéologiques pour toute intervention souterraine. Notre équipe est spécialement formée pour travailler dans ces contextes patrimoniaux sensibles.",
    paragraphe2: "Les quartiers résidentiels comme Caïs, La Tour de Mare ou Saint-Aïgulf présentent une grande diversité d'habitats, des maisons individuelles aux résidences de vacances. La topographie variée, entre plaine et collines, crée parfois des défis supplémentaires pour le raccordement. Nos techniciens sont équipés pour s'adapter à ces configurations particulières.",
    paragraphe3: "Dans le secteur de Port-Fréjus et de la Base Nature, nous intervenons dans des environnements modernes où les infrastructures télécom sont généralement bien conçues mais peuvent nécessiter des adaptations pour la fibre. La saisonnalité touristique marquée nous conduit à planifier soigneusement nos interventions pour minimiser les perturbations pendant la haute saison estivale.",
    photo1: {
      src: "/images/expertise/frejus-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Fréjus",
      legende: "Détection d'un regard télécom près des vestiges romains du centre-ville"
    },
    photo2: {
      src: "/images/expertise/frejus-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Fréjus",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel de Fréjus"
    },
    photo3: {
      src: "/images/expertise/frejus-installation-port.jpg",
      alt: "Installation de fibre dans une marina à Fréjus",
      legende: "Installation de fibre optique dans une résidence de Port-Fréjus"
    },
    pointsForts: [
      "Interventions respectueuses du patrimoine romain",
      "Solutions adaptées aux résidences de vacances",
      "Expertise en environnement marin et portuaire",
      "Planification tenant compte de la saisonnalité touristique"
    ]
  },
  {
    slug: "hyeres",
    titre: "Notre expertise fibre optique à Hyères",
    introduction: "Hyères, ville balnéaire du Var avec ses 56 502 habitants, présente une configuration unique entre centre médiéval, littoral étendu et îles renommées, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans la vieille ville médiévale d'Hyères, perchée sur sa colline, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Les ruelles étroites et les passages voûtés nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "Les quartiers résidentiels comme Le Port, L'Ayguade ou La Capte, situés le long du littoral, présentent des défis liés à l'environnement marin et à la forte affluence touristique. La corrosion accélérée des infrastructures métalliques et l'ensablement des regards sont des problématiques que nos techniciens savent parfaitement gérer.",
    paragraphe3: "La particularité d'Hyères réside aussi dans ses îles (Porquerolles, Port-Cros, Le Levant) qui nécessitent une logistique spécifique pour les interventions. Nous coordonnons nos opérations avec les traversiers et adaptons notre équipement pour ces contextes insulaires. Les quartiers comme Costebelle, Les Salins ou Saint-Pierre des Horts bénéficient également de notre expertise pour des installations adaptées à leurs spécificités.",
    photo1: {
      src: "/images/expertise/hyeres-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Hyères",
      legende: "Recherche d'un regard télécom dans une ruelle de la vieille ville d'Hyères"
    },
    photo2: {
      src: "/images/expertise/hyeres-travaux-bord-mer.jpg",
      alt: "Travaux de fibre optique en bord de mer à Hyères",
      legende: "Travaux de raccordement fibre dans le quartier de La Capte en bord de mer"
    },
    photo3: {
      src: "/images/expertise/hyeres-installation-ile.jpg",
      alt: "Installation de fibre sur l'île de Porquerolles",
      legende: "Installation de fibre optique dans un établissement de l'île de Porquerolles"
    },
    pointsForts: [
      "Interventions dans la vieille ville médiévale perchée",
      "Solutions adaptées aux contraintes du littoral",
      "Logistique spéciale pour les interventions sur les îles",
      "Expertise en environnement marin et insulaire"
    ]
  },
  {
    slug: "gap",
    titre: "Notre expertise fibre optique à Gap",
    introduction: "Gap, préfecture des Hautes-Alpes avec ses 40 805 habitants, présente une configuration particulière de ville de montagne à 1100 mètres d'altitude, créant des défis spécifiques pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre-ville de Gap, nous intervenons sur des bâtiments anciens où les infrastructures télécom nécessitent souvent une remise à niveau complète. Les rues étroites et la densité urbaine nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes.",
    paragraphe2: "Le climat montagnard de Gap, avec ses hivers rigoureux et ses importantes chutes de neige, crée des défis supplémentaires pour l'installation et la maintenance des infrastructures fibre. Les regards télécom peuvent être inaccessibles pendant plusieurs semaines, et les fourreaux sont soumis à des contraintes thermiques importantes. Nos techniciens sont équipés pour intervenir dans ces conditions climatiques exigeantes.",
    paragraphe3: "Les quartiers résidentiels comme Sainte-Marguerite, Villarobert ou Les Fauvins présentent une diversité d'habitats, des maisons individuelles aux petits collectifs. La topographie vallonnée de Gap crée parfois des défis supplémentaires pour le raccordement, avec des dénivelés importants. Nos techniciens sont formés pour adapter leurs interventions à ces configurations particulières de moyenne montagne.",
    photo1: {
      src: "/images/expertise/gap-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Gap",
      legende: "Détection d'un regard télécom sous la neige dans le centre-ville de Gap"
    },
    photo2: {
      src: "/images/expertise/gap-reparation-fourreau.jpg",
      alt: "Réparation d'un fourreau endommagé par le gel à Gap",
      legende: "Réparation d'un fourreau endommagé par le gel dans un quartier résidentiel"
    },
    photo3: {
      src: "/images/expertise/gap-installation-immeuble.jpg",
      alt: "Installation de fibre dans un immeuble à Gap",
      legende: "Installation de fibre optique dans un immeuble du quartier de la Pep"
    },
    pointsForts: [
      "Adaptation aux conditions climatiques montagnardes",
      "Solutions pour les zones difficiles d'accès en hiver",
      "Réparation des infrastructures endommagées par le gel",
      "Expertise en topographie de moyenne montagne"
    ]
  },
  {
    slug: "draguignan",
    titre: "Notre expertise fibre optique à Draguignan",
    introduction: "Draguignan, sous-préfecture du Var avec ses 40 054 habitants, présente une configuration particulière entre centre historique et quartiers résidentiels étendus dans un environnement collinaire, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Draguignan, nous intervenons sur des bâtiments anciens où les infrastructures télécom nécessitent souvent une remise à niveau complète. Les ruelles étroites et les places pavées nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "La topographie particulière de Draguignan, avec ses nombreuses collines, crée des défis supplémentaires pour le raccordement des habitations. Les quartiers comme Les Collettes, Saint-Hermentaire ou Le Malmont présentent des dénivelés importants qui nécessitent des solutions techniques spécifiques. Nos techniciens sont équipés pour s'adapter à ces configurations particulières.",
    paragraphe3: "Dans les zones d'activités comme Les Arcs ou Saint-Hermentaire, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La présence de nombreuses administrations et établissements militaires à Draguignan nécessite également une expertise particulière pour des installations sécurisées et fiables, essentielles au bon fonctionnement de ces services.",
    photo1: {
      src: "/images/expertise/draguignan-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Draguignan",
      legende: "Détection d'un regard télécom dans une rue pavée du centre historique"
    },
    photo2: {
      src: "/images/expertise/draguignan-travaux-colline.jpg",
      alt: "Travaux de fibre optique en zone collinaire à Draguignan",
      legende: "Travaux de raccordement fibre dans un quartier en pente des Collettes"
    },
    photo3: {
      src: "/images/expertise/draguignan-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à Draguignan",
      legende: "Installation de fibre optique dans une entreprise de la zone Saint-Hermentaire"
    },
    pointsForts: [
      "Interventions dans le centre historique pavé",
      "Solutions adaptées à la topographie collinaire",
      "Installations sécurisées pour les établissements administratifs",
      "Expertise locale pour tous types d'habitats"
    ]
  },
  {
    slug: "salon-de-provence",
    titre: "Notre expertise fibre optique à Salon-de-Provence",
    introduction: "Salon-de-Provence, ville historique des Bouches-du-Rône avec ses 46 225 habitants, présente une configuration particulière entre centre médiéval, quartiers résidentiels et zones d'activités étendues, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Salon-de-Provence, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. La présence de monuments comme le Château de l'Emperi ou la Collégiale Saint-Laurent nécessite une approche respectueuse du patrimoine. Notre équipe est formée pour travailler dans ces contextes historiques sensibles.",
    paragraphe2: "Les quartiers résidentiels comme Les Canourgues, La Monaque ou Bel Air présentent une diversité d'habitats, des maisons individuelles aux grands ensembles. La configuration urbaine variée de Salon-de-Provence, avec ses zones pavillonnaires étendues et ses immeubles collectifs, nécessite des approches techniques différenciées que nos techniciens maîtrisent parfaitement.",
    paragraphe3: "Dans les zones d'activités comme la Base aérienne 701, qui abrite la Patrouille de France, ou les zones commerciales de la Gandonne et des Broquetières, nous proposons des solutions adaptées aux besoins spécifiques des entreprises et des administrations. La présence d'établissements militaires nécessite une expertise particulière pour des installations sécurisées et fiables.",
    photo1: {
      src: "/images/expertise/salon-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Salon-de-Provence",
      legende: "Recherche d'un regard télécom dans une rue du centre historique"
    },
    photo2: {
      src: "/images/expertise/salon-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Salon-de-Provence",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel"
    },
    photo3: {
      src: "/images/expertise/salon-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à Salon-de-Provence",
      legende: "Installation de fibre optique dans une entreprise de la zone de la Gandonne"
    },
    pointsForts: [
      "Interventions respectueuses dans le centre médiéval",
      "Solutions adaptées aux grands ensembles résidentiels",
      "Installations sécurisées pour les établissements militaires",
      "Expertise en zones commerciales et industrielles"
    ]
  },
  {
    slug: "istres",
    titre: "Notre expertise fibre optique à Istres",
    introduction: "Istres, ville des Bouches-du-Rhône avec ses 43 463 habitants, présente une configuration particulière entre étang de Berre, base aérienne et quartiers résidentiels étendus, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre-ville d'Istres, nous intervenons sur des bâtiments de différentes époques où les infrastructures télécom nécessitent souvent une modernisation complète. Les places et les rues récemment rénovées nécessitent une approche non invasive pour la localisation des regards télécom. Notre équipe utilise des équipements de détection de haute précision pour minimiser l'impact sur ces aménagements urbains.",
    paragraphe2: "La présence de la Base aérienne 125 crée un contexte particulier pour les interventions dans les quartiers adjacents comme Le Prépaou ou Rassuen. Nos techniciens sont formés pour travailler dans ces environnements spécifiques, en coordination avec les services concernés lorsque nécessaire. Les quartiers résidentiels comme Entressen ou Le Ranquet bénéficient également de notre expertise pour des installations adaptées à leurs spécificités.",
    paragraphe3: "La proximité de l'étang de Berre pose des défis particuliers pour les infrastructures télécom, notamment en raison de l'humidité et de la nature des sols. Nos techniciens utilisent des matériaux et des techniques spécifiques pour garantir la durabilité des installations dans ces environnements. Nous intervenons également dans les zones industrielles comme Le Tubé ou ClesudLogistique, essentielles à l'économie locale.",
    photo1: {
      src: "/images/expertise/istres-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Istres",
      legende: "Détection d'un regard télécom sur une place rénovée du centre-ville"
    },
    photo2: {
      src: "/images/expertise/istres-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Istres",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel d'Istres"
    },
    photo3: {
      src: "/images/expertise/istres-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à Istres",
      legende: "Installation de fibre optique dans une entreprise de la zone du Tubé"
    },
    pointsForts: [
      "Détection non invasive sur les aménagements urbains récents",
      "Interventions coordonnées près des zones militaires",
      "Solutions adaptées aux contraintes de l'étang de Berre",
      "Expertise en zones industrielles et logistiques"
    ]
  },
  {
    slug: "martigues",
    titre: "Notre expertise fibre optique à Martigues",
    introduction: "Martigues, la 'Venise provençale' avec ses 49 318 habitants, présente une configuration unique entre canaux, étang de Berre et complexe pétrochimique, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Martigues, notamment dans les quartiers de Jonquières, L'Île et Ferrières, nous intervenons sur des bâtiments anciens traversés par les canaux. Cette configuration unique nécessite des techniques spéciales pour le passage des câbles et la localisation des infrastructures télécom. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "Les quartiers résidentiels comme Croix-Sainte, Saint-Pierre ou Paradis-Saint-Roch présentent une diversité d'habitats, des maisons individuelles aux grands ensembles. La proximité de l'étang de Berre pose des défis particuliers pour les infrastructures télécom, notamment en raison de l'humidité et de la nature des sols. Nos techniciens utilisent des matériaux et des techniques spécifiques pour garantir la durabilité des installations.",
    paragraphe3: "La présence du complexe pétrochimique de Lavéra crée un contexte particulier pour les interventions dans cette zone et les quartiers adjacents. Nos techniciens sont spécialement formés pour travailler dans ces environnements industriels sensibles, en respectant les protocoles de sécurité stricts. Nous intervenons également dans les zones d'activités comme Ecopolis ou les Etangs, essentielles à la diversification économique de Martigues.",
    photo1: {
      src: "/images/expertise/martigues-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Martigues",
      legende: "Détection d'un regard télécom près des canaux du centre historique"
    },
    photo2: {
      src: "/images/expertise/martigues-travaux-bord-etang.jpg",
      alt: "Travaux de fibre optique en bord d'étang à Martigues",
      legende: "Travaux de raccordement fibre adaptés aux contraintes du bord de l'étang"
    },
    photo3: {
      src: "/images/expertise/martigues-installation-zone-industrielle.jpg",
      alt: "Installation de fibre dans une zone industrielle à Martigues",
      legende: "Installation sécurisée de fibre optique dans une entreprise de la zone de Lavéra"
    },
    pointsForts: [
      "Interventions spécifiques dans la 'Venise provençale'",
      "Solutions adaptées aux contraintes de l'étang de Berre",
      "Installations sécurisées en zone pétrochimique",
      "Expertise en environnement industriel sensible"
    ]
  },
  {
    slug: "aubagne",
    titre: "Notre expertise fibre optique à Aubagne",
    introduction: "Aubagne, ville des Bouches-du-Rhône avec ses 46 124 habitants, présente une configuration particulière entre massif du Garlaban, centre historique et zones d'activités étendues, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique d'Aubagne, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Les ruelles étroites et les places pavées nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes, tout en respectant le patrimoine de la ville natale de Marcel Pagnol.",
    paragraphe2: "Les quartiers résidentiels comme Le Charrel, Pin Vert ou La Tourtelle présentent une diversité d'habitats, des maisons individuelles aux grands ensembles. La topographie particulière d'Aubagne, adossée au massif du Garlaban, crée des défis supplémentaires pour le raccordement des habitations situées sur les hauteurs. Nos techniciens sont équipés pour s'adapter à ces configurations particulières.",
    paragraphe3: "Dans les zones d'activités comme les Paluds, Napollon ou la zone commerciale d'Auchan, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La présence du camp militaire de la Légion étrangère nécessite également une expertise particulière pour des installations sécurisées et fiables, dans le respect des protocoles spécifiques à ces établissements.",
    photo1: {
      src: "/images/expertise/aubagne-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Aubagne",
      legende: "Recherche d'un regard télécom dans une rue du centre historique d'Aubagne"
    },
    photo2: {
      src: "/images/expertise/aubagne-travaux-colline.jpg",
      alt: "Travaux de fibre optique sur les collines d'Aubagne",
      legende: "Travaux de raccordement fibre dans un quartier en pente au pied du Garlaban"
    },
    photo3: {
      src: "/images/expertise/aubagne-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à Aubagne",
      legende: "Installation de fibre optique dans une entreprise de la zone des Paluds"
    },
    pointsForts: [
      "Interventions respectueuses dans le centre historique",
      "Solutions adaptées à la topographie du Garlaban",
      "Installations sécurisées pour les établissements militaires",
      "Expertise en zones industrielles et commerciales"
    ]
  },
  {
    slug: "vitrolles",
    titre: "Notre expertise fibre optique à Vitrolles",
    introduction: "Vitrolles, ville des Bouches-du-Rhône avec ses 33 819 habitants, présente une configuration particulière entre plateau rocheux, zones d'activités étendues et quartiers résidentiels, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le Vieux-Village de Vitrolles, perché sur son rocher, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Cette configuration unique, avec ses ruelles étroites et ses dénivelés importants, nécessite un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et escarpés.",
    paragraphe2: "Les quartiers résidentiels comme Les Pins, La Frescoule ou Le Liourat présentent une diversité d'habitats, des maisons individuelles aux grands ensembles. La ville nouvelle de Vitrolles, conçue dans les années 1970, dispose d'infrastructures télécom qui nécessitent aujourd'hui une modernisation pour supporter la fibre optique. Nos techniciens sont équipés pour réaliser ces travaux de mise à niveau avec un minimum d'impact.",
    paragraphe3: "Dans les vastes zones d'activités comme les Estroublans, l'Anjoly ou Couperigne, qui font de Vitrolles l'une des plus grandes zones commerciales et industrielles d'Europe, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. La proximité de l'aéroport Marseille-Provence crée également un contexte particulier pour les interventions dans les secteurs adjacents, nécessitant parfois des autorisations spéciales.",
    photo1: {
      src: "/images/expertise/vitrolles-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Vitrolles",
      legende: "Détection d'un regard télécom dans une ruelle du Vieux-Village"
    },
    photo2: {
      src: "/images/expertise/vitrolles-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau à Vitrolles",
      legende: "Débouchage d'un fourreau obstrué dans un quartier résidentiel de Vitrolles"
    },
    photo3: {
      src: "/images/expertise/vitrolles-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à Vitrolles",
      legende: "Installation de fibre optique dans une entreprise de la zone des Estroublans"
    },
    pointsForts: [
      "Interventions adaptées à la topographie du Vieux-Village perché",
      "Modernisation des infrastructures de la ville nouvelle",
      "Solutions pour les grandes zones d'activités commerciales",
      "Expertise en environnement aéroportuaire"
    ]
  },
  {
    slug: "la-ciotat",
    titre: "Notre expertise fibre optique à La Ciotat",
    introduction: "La Ciotat, ville maritime des Bouches-du-Rhône avec ses 35 758 habitants, présente une configuration particulière entre calanques, centre historique et ancien chantier naval reconverti, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de La Ciotat, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Les ruelles étroites du Vieux La Ciotat et les places pavées nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "La topographie particulière de La Ciotat, entre mer et collines, crée des défis supplémentaires pour le raccordement des habitations. Les quartiers comme Fardeloup, Saint-Jean ou Les Matagots présentent une diversité d'habitats, des résidences de bord de mer aux villas perchées. La proximité maritime pose également des défis techniques en raison de la corrosion accélérée des infrastructures métalliques.",
    paragraphe3: "Dans la zone de l'ancien chantier naval, aujourd'hui reconverti en pôle d'entreprises innovantes (Athelia, La Ciotat Shipyards), nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. Cette zone en pleine transformation, mêlant bâtiments industriels historiques et constructions modernes, nécessite une approche flexible et innovante pour l'installation de la fibre optique.",
    photo1: {
      src: "/images/expertise/la-ciotat-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à La Ciotat",
      legende: "Recherche d'un regard télécom dans une ruelle du Vieux La Ciotat"
    },
    photo2: {
      src: "/images/expertise/la-ciotat-debouchage-fourreau.jpg",
      alt: "Débouchage d'un fourreau en bord de mer à La Ciotat",
      legende: "Débouchage d'un fourreau corrodé par l'air marin dans un quartier de bord de mer"
    },
    photo3: {
      src: "/images/expertise/la-ciotat-installation-entreprise.jpg",
      alt: "Installation de fibre dans une entreprise à La Ciotat",
      legende: "Installation de fibre optique dans une entreprise innovante de la zone Athelia"
    },
    pointsForts: [
      "Interventions respectueuses dans le centre historique maritime",
      "Solutions adaptées aux contraintes du littoral et de la corrosion",
      "Installations high-tech pour les entreprises innovantes",
      "Expertise en réhabilitation de zones industrielles historiques"
    ]
  },
  {
    slug: "la-seyne-sur-mer",
    titre: "Notre expertise fibre optique à La Seyne-sur-Mer",
    introduction: "La Seyne-sur-Mer, ville maritime du Var avec ses 64 675 habitants, présente une configuration particulière entre ancien chantier naval, centre historique et quartiers résidentiels étendus, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre-ville de La Seyne-sur-Mer, nous intervenons sur des bâtiments anciens où les infrastructures télécom nécessitent souvent une remise à niveau complète. Le quartier historique, avec son passé industriel et maritime, présente des configurations particulières qui demandent une expertise spécifique. Notre équipe est formée pour travailler dans ces contextes urbains complexes.",
    paragraphe2: "Les quartiers résidentiels comme Les Sablettes, Tamaris ou Mar Vivo, situés le long du littoral, présentent des défis liés à l'environnement marin. La corrosion accélérée des infrastructures métalliques et l'ensablement des regards sont des problématiques que nos techniciens savent parfaitement gérer. Les quartiers nord comme Berthe ou Joncquet bénéficient également de notre expertise pour des installations adaptées à leurs spécificités.",
    paragraphe3: "Sur le site des anciens chantiers navals, aujourd'hui en pleine reconversion avec le pôle de compétitivité Mer PACA, nous accompagnons les nouvelles entreprises avec des solutions adaptées à leurs besoins spécifiques. Cette zone en transformation, mêlant patrimoine industriel et innovation, nécessite une approche flexible et des solutions techniques sur mesure pour l'installation de la fibre optique.",
    photo1: {
      src: "/images/expertise/la-seyne-detection-regard.jpg",
      alt: "Détection d'un regard télécom à La Seyne-sur-Mer",
      legende: "Détection d'un regard télécom dans le centre-ville de La Seyne-sur-Mer"
    },
    photo2: {
      src: "/images/expertise/la-seyne-travaux-bord-mer.jpg",
      alt: "Travaux de fibre optique en bord de mer à La Seyne-sur-Mer",
      legende: "Travaux de raccordement fibre dans le quartier des Sablettes en bord de mer"
    },
    photo3: {
      src: "/images/expertise/la-seyne-installation-chantier-naval.jpg",
      alt: "Installation de fibre dans les anciens chantiers navals à La Seyne-sur-Mer",
      legende: "Installation de fibre optique dans une entreprise du pôle de compétitivité Mer PACA"
    },
    pointsForts: [
      "Interventions adaptées au patrimoine industriel et maritime",
      "Solutions pour les zones littorales et leurs contraintes spécifiques",
      "Installations high-tech pour les entreprises innovantes",
      "Expertise en réhabilitation de zones industrielles historiques"
    ]
  },
  {
    slug: "grasse",
    titre: "Notre expertise fibre optique à Grasse",
    introduction: "Grasse, capitale mondiale du parfum avec ses 50 409 habitants, présente une configuration particulière entre centre historique perché, industrie de la parfumerie et habitat dispersé sur les collines, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Grasse, perché sur sa colline, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Les ruelles étroites, les escaliers et les passages voûtés nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "La topographie très accidentée de Grasse, avec ses nombreux quartiers dispersés sur les collines comme Saint-Jacques, Saint-François ou Les Aspres, crée des défis majeurs pour le raccordement à la fibre. Les dénivelés importants et la dispersion de l'habitat nécessitent des solutions techniques innovantes que nos techniciens maîtrisent parfaitement.",
    paragraphe3: "Dans les zones industrielles dédiées à la parfumerie, comme le Plan de Grasse ou la route de Cannes, nous accompagnons les entreprises avec des solutions adaptées à leurs besoins spécifiques. Ces industries, souvent à la pointe de la technologie malgré leur ancrage traditionnel, nécessitent des connexions fiables et performantes pour leurs activités de recherche et de commerce international.",
    photo1: {
      src: "/images/expertise/grasse-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Grasse",
      legende: "Recherche d'un regard télécom dans une ruelle du centre historique de Grasse"
    },
    photo2: {
      src: "/images/expertise/grasse-travaux-colline.jpg",
      alt: "Travaux de fibre optique sur les collines de Grasse",
      legende: "Travaux de raccordement fibre dans un quartier résidentiel en pente"
    },
    photo3: {
      src: "/images/expertise/grasse-installation-parfumerie.jpg",
      alt: "Installation de fibre dans une parfumerie à Grasse",
      legende: "Installation de fibre optique dans une entreprise de parfumerie du Plan de Grasse"
    },
    pointsForts: [
      "Interventions adaptées au centre historique perché",
      "Solutions pour l'habitat dispersé sur les collines",
      "Installations spécifiques pour l'industrie de la parfumerie",
      "Expertise en topographie accidentée et forte pente"
    ]
  },
  {
    slug: "cagnes-sur-mer",
    titre: "Notre expertise fibre optique à Cagnes-sur-Mer",
    introduction: "Cagnes-sur-Mer, ville balnéaire des Alpes-Maritimes avec ses 51 311 habitants, présente une configuration particulière entre Haut-de-Cagnes médiéval, bord de mer touristique et quartiers résidentiels étendus, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le Haut-de-Cagnes, village médiéval perché sur sa colline, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Les ruelles étroites et les passages voûtés nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "Le long du bord de mer, notamment dans le quartier du Cros-de-Cagnes, nous intervenons dans des résidences touristiques et des établissements hôteliers où les exigences esthétiques et de discrétion sont particulièrement élevées. La proximité de la mer pose également des défis techniques en raison de la corrosion accélérée des infrastructures métalliques.",
    paragraphe3: "Les quartiers résidentiels comme Les Vespins, La Villette ou Le Val Fleuri présentent une diversité d'habitats, des maisons individuelles aux résidences collectives. La topographie vallonnée de Cagnes-sur-Mer crée parfois des défis supplémentaires pour le raccordement, avec des dénivelés importants. Nous intervenons également dans les zones d'activités comme les Travailères ou la Villette, essentielles à l'économie locale.",
    photo1: {
      src: "/images/expertise/cagnes-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Cagnes-sur-Mer",
      legende: "Détection d'un regard télécom dans une ruelle du Haut-de-Cagnes"
    },
    photo2: {
      src: "/images/expertise/cagnes-travaux-bord-mer.jpg",
      alt: "Travaux de fibre optique en bord de mer à Cagnes-sur-Mer",
      legende: "Travaux de raccordement fibre dans le quartier du Cros-de-Cagnes en bord de mer"
    },
    photo3: {
      src: "/images/expertise/cagnes-installation-residence.jpg",
      alt: "Installation de fibre dans une résidence à Cagnes-sur-Mer",
      legende: "Installation discrète de fibre optique dans une résidence de standing des Vespins"
    },
    pointsForts: [
      "Interventions respectueuses dans le village médiéval perché",
      "Solutions adaptées aux contraintes du littoral",
      "Installations discrètes dans les résidences touristiques",
      "Expertise en topographie vallonnée et zones résidentielles"
    ]
  },
  {
    slug: "vallauris",
    titre: "Notre expertise fibre optique à Vallauris",
    introduction: "Vallauris Golfe-Juan, ville des Alpes-Maritimes avec ses 26 783 habitants, présente une configuration particulière entre tradition céramique, port de plaisance et quartiers résidentiels en collines, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Dans le centre historique de Vallauris, célèbre pour sa tradition céramique et le passage de Picasso, nous intervenons sur des bâtiments anciens où les infrastructures télécom sont souvent difficiles d'accès. Les ruelles étroites et les ateliers d'artisans nécessitent un équipement spécifique et une grande expertise technique. Notre équipe est formée pour travailler dans ces contextes urbains complexes et patrimoniaux.",
    paragraphe2: "Dans le secteur de Golfe-Juan, avec son port de plaisance et ses résidences de bord de mer, nous intervenons dans des environnements où les exigences esthétiques sont particulièrement élevées. La proximité de la mer pose également des défis techniques en raison de la corrosion accélérée des infrastructures métalliques et de l'ensablement des regards.",
    paragraphe3: "Les quartiers résidentiels comme Super Vallauris, Les Encourdoules ou Saint-Bernard, construits à flanc de colline, présentent des défis topographiques importants. L'habitat dispersé et les dénivelés nécessitent des solutions techniques spécifiques pour garantir un raccordement fibre de qualité. Nous intervenons également auprès des nombreux ateliers de céramique qui ont besoin d'une connexion fiable pour leur activité commerciale internationale.",
    photo1: {
      src: "/images/expertise/vallauris-recherche-regard.jpg",
      alt: "Recherche d'un regard télécom à Vallauris",
      legende: "Recherche d'un regard télécom dans une rue du centre historique de Vallauris"
    },
    photo2: {
      src: "/images/expertise/vallauris-travaux-port.jpg",
      alt: "Travaux de fibre optique près du port de Golfe-Juan",
      legende: "Travaux de raccordement fibre adaptés aux contraintes maritimes de Golfe-Juan"
    },
    photo3: {
      src: "/images/expertise/vallauris-installation-atelier.jpg",
      alt: "Installation de fibre dans un atelier de céramique à Vallauris",
      legende: "Installation de fibre optique dans un atelier de céramique du centre-ville"
    },
    pointsForts: [
      "Interventions respectueuses dans la ville d'art et de céramique",
      "Solutions adaptées aux contraintes maritimes de Golfe-Juan",
      "Raccordement des ateliers d'artisans et des galeries d'art",
      "Expertise en topographie collinaire et habitat dispersé"
    ]
  },
  {
    slug: "mandelieu-la-napoule",
    titre: "Notre expertise fibre optique à Mandelieu-la-Napoule",
    introduction: "Mandelieu-la-Napoule, station balnéaire des Alpes-Maritimes avec ses 22 714 habitants, présente une configuration particulière entre littoral luxueux, massif de l'Estérel et quartiers résidentiels, créant des défis variés pour l'installation de la fibre optique.",
    paragraphe1: "Le long du littoral de Mandelieu-la-Napoule, notamment dans les quartiers de La Napoule et du Port, nous intervenons dans des résidences de standing et des établissements hôteliers où les exigences esthétiques sont particulièrement élevées. La proximité de la mer pose également des défis techniques en raison de la corrosion accélérée des infrastructures métalliques et de l'ensablement des regards.",
    paragraphe2: "Les quartiers résidentiels comme Capitou, La Théoulère ou Les Termes, construits entre mer et montagne, présentent des défis topographiques importants. L'habitat dispersé et les dénivelés nécessitent des solutions techniques spécifiques pour garantir un raccordement fibre de qualité. La présence du massif de l'Estérel crée également des contraintes particulières pour l'accès aux infrastructures.",
    paragraphe3: "La forte saisonnalité de Mandelieu-la-Napoule, avec sa population qui double en période estivale, crée des contraintes particulières pour la planification des interventions. Nous adaptons notre calendrier pour minimiser l'impact sur l'activité touristique. Les zones d'activités comme La Canardière ou Les Tourrades bénéficient également de notre expertise pour des installations adaptées à leurs besoins spécifiques.",
    photo1: {
      src: "/images/expertise/mandelieu-detection-regard.jpg",
      alt: "Détection d'un regard télécom à Mandelieu-la-Napoule",
      legende: "Détection d'un regard télécom sur le front de mer de La Napoule"
    },
    photo2: {
      src: "/images/expertise/mandelieu-travaux-estrel.jpg",
      alt: "Travaux de fibre optique dans l'Estérel",
      legende: "Travaux de raccordement fibre dans un quartier résidentiel au pied de l'Estérel"
    },
    photo3: {
      src: "/images/expertise/mandelieu-installation-marina.jpg",
      alt: "Installation de fibre dans une marina à Mandelieu",
      legende: "Installation discrète de fibre optique dans une résidence de standing du Port"
    },
    pointsForts: [
      "Interventions discrètes dans les résidences et hôtels de luxe",
      "Solutions adaptées aux contraintes du littoral",
      "Raccordement en zones difficiles d'accès près de l'Estérel",
      "Planification respectueuse de la saisonnalité touristique"
    ]
  }
];

export function getExpertiseVille(slug: string) {
  return expertiseVille.find(v => v.slug === slug) || null;
}
