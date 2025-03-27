export interface VilleData {
  slug: string;
  nom: string;
  titre: string;
  description: string;
  h1: string;
  population: number;
  quartiers: string[];
  problemes_communs: string[];
  introduction: string;
}

export const villes: VilleData[] = [
  {
    slug: "marseille",
    nom: "Marseille",
    titre: "Déblocage Fibre Optique à Marseille | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Marseille. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Marseille ?",
    population: 870731,
    quartiers: ["Centre-ville", "Le Panier", "Vieux-Port", "La Joliette", "Castellane", "Prado", "La Valentine", "Saint-Loup", "Mazargues", "Endoume"],
    problemes_communs: ["Fourreaux bouchés dans les immeubles anciens", "Regards introuvables sous les trottoirs rénovés", "Gaines écrasées dans les parties communes"],
    introduction: "Marseille, première ville de la région PACA, présente des défis particuliers pour l'installation de la fibre optique, notamment dans ses quartiers historiques et ses immeubles anciens. Notre expertise locale nous permet d'intervenir efficacement pour débloquer votre raccordement fibre, quelle que soit la complexité de la situation."
  },
  {
    slug: "nice",
    nom: "Nice",
    titre: "Déblocage Fibre Optique à Nice | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Nice. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Nice ?",
    population: 342669,
    quartiers: ["Vieux-Nice", "Cimiez", "Libération", "Port", "Riquier", "Saint-Roch", "Ariane", "Saint-Isidore", "Fabron", "Magnan"],
    problemes_communs: ["Difficultés d'accès dans les immeubles de la Promenade des Anglais", "Regards ensablés près des plages", "Gaines saturées dans le Vieux-Nice"],
    introduction: "Nice, capitale de la Côte d'Azur, combine architecture Belle Époque et immeubles modernes, chacun présentant ses propres défis pour l'installation de la fibre. Notre équipe intervient dans tous les quartiers niçois pour résoudre les problèmes de raccordement et vous permettre de profiter du très haut débit."
  },
  {
    slug: "toulon",
    nom: "Toulon",
    titre: "Déblocage Fibre Optique à Toulon | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Toulon. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Toulon ?",
    population: 171953,
    quartiers: ["Centre-ville", "Le Mourillon", "Saint-Jean-du-Var", "Pont-du-Las", "La Serinette", "Sainte-Anne", "Brunet", "La Rode", "Siblas", "Escaillon"],
    problemes_communs: ["Fourreaux corrodés près du port", "Difficultés d'accès dans les bâtiments militaires", "Regards sous les places rénovées"],
    introduction: "Toulon, ville maritime et militaire, présente une architecture variée qui peut compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers toulonnais pour résoudre les problèmes de raccordement."
  },
  {
    slug: "aix-en-provence",
    nom: "Aix-en-Provence",
    titre: "Déblocage Fibre Optique à Aix-en-Provence | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Aix-en-Provence. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Aix-en-Provence ?",
    population: 143097,
    quartiers: ["Centre historique", "Mazarin", "Sextius-Mirabeau", "La Torse", "Val Saint-André", "Pont de l'Arc", "La Duranne", "Puyricard", "Luynes", "Les Milles"],
    problemes_communs: ["Contraintes patrimoniales dans le centre historique", "Fourreaux bouchés dans les hôtels particuliers", "Difficultés d'accès dans les copropriétés de standing"],
    introduction: "Aix-en-Provence, ville d'art et d'histoire, présente des défis particuliers pour l'installation de la fibre optique, notamment dans son centre historique classé. Notre expertise nous permet d'intervenir dans le respect du patrimoine tout en assurant un raccordement fibre efficace."
  },
  {
    slug: "avignon",
    nom: "Avignon",
    titre: "Déblocage Fibre Optique à Avignon | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Avignon. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Avignon ?",
    population: 91729,
    quartiers: ["Intra-muros", "Montfavet", "Saint-Chamand", "Monclar", "Champfleury", "La Rocade", "Pont des Deux Eaux", "Saint-Ruf", "Réalpanier", "Barthelasse"],
    problemes_communs: ["Contraintes patrimoniales dans la cité des Papes", "Regards introuvables dans les rues pavées", "Fourreaux anciens dans les remparts"],
    introduction: "Avignon, célèbre pour ses remparts et son palais des Papes, présente des défis uniques pour l'installation de la fibre optique. Notre expertise en travaux dans les bâtiments historiques nous permet d'intervenir efficacement tout en respectant le patrimoine exceptionnel de la ville."
  },
  {
    slug: "antibes",
    nom: "Antibes",
    titre: "Déblocage Fibre Optique à Antibes | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Antibes. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Antibes ?",
    population: 74982,
    quartiers: ["Vieil Antibes", "Juan-les-Pins", "Cap d'Antibes", "La Fontonne", "Les Semboules", "Les Combes", "Saint-Jean", "La Croix-Rouge", "Les Terriers", "Les Rastines"],
    problemes_communs: ["Regards ensablés près des plages", "Fourreaux corrodés par l'air marin", "Difficultés d'accès dans les villas du Cap"],
    introduction: "Antibes Juan-les-Pins, entre mer et montagne, combine bâtiments historiques et résidences de luxe. Cette diversité architecturale peut compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "cannes",
    nom: "Cannes",
    titre: "Déblocage Fibre Optique à Cannes | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Cannes. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Cannes ?",
    population: 74152,
    quartiers: ["La Croisette", "Le Suquet", "Californie", "La Bocca", "Carnot", "Prado-République", "Riou", "Croix des Gardes", "Ranguin", "La Pointe Croisette"],
    problemes_communs: ["Contraintes dans les palaces de la Croisette", "Fourreaux bouchés dans les résidences de luxe", "Regards introuvables sur les boulevards rénovés"],
    introduction: "Cannes, ville du cinéma et du luxe, présente une architecture variée qui peut compliquer l'installation de la fibre optique. Notre expertise nous permet d'intervenir discrètement et efficacement, que ce soit dans les palaces de la Croisette ou les résidences des collines."
  },
  {
    slug: "la-seyne-sur-mer",
    nom: "La Seyne-sur-Mer",
    titre: "Déblocage Fibre Optique à La Seyne-sur-Mer | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à La Seyne-sur-Mer. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à La Seyne-sur-Mer ?",
    population: 65386,
    quartiers: ["Centre-ville", "Les Sablettes", "Tamaris", "Mar Vivo", "Berthe", "Les Mouissèques", "La Rouve", "Les Playes", "Janas", "Daniel Jouventin"],
    problemes_communs: ["Fourreaux corrodés près du port", "Regards ensablés près des plages", "Gaines écrasées dans les anciens bâtiments industriels"],
    introduction: "La Seyne-sur-Mer, ancienne ville industrielle reconvertie en station balnéaire, présente des défis variés pour l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "hyeres",
    nom: "Hyères",
    titre: "Déblocage Fibre Optique à Hyères | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Hyères. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Hyères ?",
    population: 56502,
    quartiers: ["Centre-ville", "Giens", "L'Ayguade", "La Capte", "Les Salins", "Porquerolles", "Port-Cros", "Le Levant", "Costebelle", "L'Almanarre"],
    problemes_communs: ["Difficultés d'accès dans les îles", "Regards ensablés près des plages", "Fourreaux bouchés dans les résidences de vacances"],
    introduction: "Hyères-les-Palmiers, entre terre et mer, présente des défis particuliers pour l'installation de la fibre optique, notamment dans ses îles et ses zones côtières. Notre expertise locale nous permet d'intervenir efficacement pour débloquer votre raccordement fibre, même dans les zones les plus difficiles d'accès."
  },
  {
    slug: "frejus",
    nom: "Fréjus",
    titre: "Déblocage Fibre Optique à Fréjus | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Fréjus. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Fréjus ?",
    population: 54023,
    quartiers: ["Centre historique", "Fréjus-Plage", "Saint-Aygulf", "La Tour de Mare", "Caïs", "Villeneuve", "L'Agachon", "La Gabelle", "Le Capitou", "Port-Fréjus"],
    problemes_communs: ["Contraintes archéologiques dans le centre romain", "Regards ensablés près des plages", "Fourreaux bouchés dans les résidences de vacances"],
    introduction: "Fréjus, ville d'art et d'histoire fondée par les Romains, présente des défis uniques pour l'installation de la fibre optique. Notre expertise en travaux dans les zones à contraintes archéologiques nous permet d'intervenir efficacement tout en respectant le riche patrimoine de la ville."
  },
  {
    slug: "grasse",
    nom: "Grasse",
    titre: "Déblocage Fibre Optique à Grasse | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Grasse. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Grasse ?",
    population: 50409,
    quartiers: ["Centre historique", "Saint-Jacques", "Saint-Claude", "Les Aspres", "Magagnosc", "Plascassier", "Le Plan de Grasse", "Saint-François", "Saint-Antoine", "Les Marronniers"],
    problemes_communs: ["Difficultés d'accès dans le centre historique escarpé", "Fourreaux bouchés dans les vieilles bâtisses", "Regards introuvables dans les ruelles étroites"],
    introduction: "Grasse, capitale mondiale du parfum, présente une topographie escarpée et un centre historique dense qui compliquent l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "cagnes-sur-mer",
    nom: "Cagnes-sur-Mer",
    titre: "Déblocage Fibre Optique à Cagnes-sur-Mer | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Cagnes-sur-Mer. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Cagnes-sur-Mer ?",
    population: 49322,
    quartiers: ["Cagnes-Ville", "Le Cros-de-Cagnes", "Les Hauts-de-Cagnes", "La Cagne", "Le Val Fleuri", "Les Collettes", "Le Beal", "Les Vespins", "Les Malvans", "Les Travails"],
    problemes_communs: ["Difficultés d'accès dans le Haut-de-Cagnes médiéval", "Regards ensablés près des plages", "Fourreaux bouchés dans les résidences du bord de mer"],
    introduction: "Cagnes-sur-Mer, entre mer et collines, combine village médiéval et station balnéaire moderne. Cette diversité architecturale et topographique peut compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "martigues",
    nom: "Martigues",
    titre: "Déblocage Fibre Optique à Martigues | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Martigues. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Martigues ?",
    population: 49101,
    quartiers: ["L'Île", "Ferrières", "Jonquières", "Croix-Sainte", "La Couronne", "Carro", "Lavéra", "Saint-Pierre", "Saint-Julien", "Les Laurons"],
    problemes_communs: ["Fourreaux corrodés près des canaux", "Difficultés d'accès dans le centre historique", "Regards introuvables sous les places rénovées"],
    introduction: "Martigues, surnommée la 'Venise provençale', présente des défis particuliers pour l'installation de la fibre optique, notamment dans ses quartiers historiques traversés par des canaux. Notre expertise locale nous permet d'intervenir efficacement pour débloquer votre raccordement fibre, quelle que soit la complexité de la situation."
  },
  {
    slug: "aubagne",
    nom: "Aubagne",
    titre: "Déblocage Fibre Optique à Aubagne | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Aubagne. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Aubagne ?",
    population: 46124,
    quartiers: ["Centre-ville", "Le Charrel", "La Tourtelle", "Pin Vert", "Les Passons", "Beaudinard", "La Pérussonne", "Camp Major", "La Garenne", "Les Espillières"],
    problemes_communs: ["Difficultés d'accès dans le centre historique", "Fourreaux bouchés dans les zones industrielles", "Regards introuvables dans les nouveaux lotissements"],
    introduction: "Aubagne, ville natale de Marcel Pagnol, entre tradition et modernité, présente des défis variés pour l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "salon-de-provence",
    nom: "Salon-de-Provence",
    titre: "Déblocage Fibre Optique à Salon-de-Provence | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Salon-de-Provence. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Salon-de-Provence ?",
    population: 45329,
    quartiers: ["Centre-ville", "Les Canourgues", "La Monaque", "Bel Air", "Les Blazots", "La Crau", "Les Viougues", "Michelet", "Saint-Côme", "La Gandonne"],
    problemes_communs: ["Difficultés d'accès dans le centre historique", "Fourreaux bouchés par les racines des platanes", "Regards introuvables sous les places rénovées"],
    introduction: "Salon-de-Provence, ville de Nostradamus, présente un centre historique dense et des quartiers résidentiels étendus qui peuvent compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "istres",
    nom: "Istres",
    titre: "Déblocage Fibre Optique à Istres | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Istres. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Istres ?",
    population: 43463,
    quartiers: ["Centre-ville", "Prépaou", "Trigance", "Les Heures Claires", "Entressen", "Le Tubé", "Rassuen", "La Romaniquette", "La Prédina", "Le Ranquet"],
    problemes_communs: ["Difficultés d'accès près de la base aérienne", "Fourreaux bouchés près de l'étang", "Regards introuvables dans les nouveaux lotissements"],
    introduction: "Istres, ville entre étang et Crau, présente des défis particuliers pour l'installation de la fibre optique, notamment en raison de la présence de la base aérienne et de zones naturelles protégées. Notre expertise locale nous permet d'intervenir efficacement pour débloquer votre raccordement fibre."
  },
  {
    slug: "gap",
    nom: "Gap",
    titre: "Déblocage Fibre Optique à Gap | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Gap. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Gap ?",
    population: 40805,
    quartiers: ["Centre-ville", "Puymaure", "Beauregard", "La Gare", "Villarobert", "Fontreyne", "Les Fauvins", "Sainte-Marguerite", "Kapados", "Les Cèdres"],
    problemes_communs: ["Difficultés liées au gel en hiver", "Fourreaux bouchés dans les zones montagneuses", "Regards introuvables sous la neige"],
    introduction: "Gap, préfecture des Hautes-Alpes et ville la plus haute de France, présente des défis uniques pour l'installation de la fibre optique, notamment en raison de son climat montagnard. Notre expertise en conditions difficiles nous permet d'intervenir efficacement toute l'année pour résoudre les problèmes de raccordement."
  },
  {
    slug: "draguignan",
    nom: "Draguignan",
    titre: "Déblocage Fibre Optique à Draguignan | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Draguignan. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Draguignan ?",
    population: 40054,
    quartiers: ["Centre-ville", "Les Collettes", "Saint-Léger", "La Foux", "Les Incapis", "La Clappe", "Les Négadis", "Les Espartes", "La Croix", "Le Flayosquet"],
    problemes_communs: ["Difficultés d'accès dans le centre historique", "Fourreaux bouchés dans les zones inondables", "Regards introuvables sous les places rénovées"],
    introduction: "Draguignan, sous-préfecture du Var, présente un centre historique dense et des quartiers résidentiels étendus qui peuvent compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "manosque",
    nom: "Manosque",
    titre: "Déblocage Fibre Optique à Manosque | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Manosque. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Manosque ?",
    population: 22801,
    quartiers: ["Centre-ville", "La Rochette", "Saint-Lazare", "Les Plantiers", "Le Colombier", "La Trinque d'Isnard", "Saint-Alban", "Les Serrets", "Les Naves", "Le Payannet"],
    problemes_communs: ["Difficultés d'accès dans le centre historique", "Fourreaux bouchés dans les zones argileuses", "Regards introuvables sous les places rénovées"],
    introduction: "Manosque, plus grande ville des Alpes-de-Haute-Provence et siège de notre entreprise, est notre territoire d'expertise privilégié. Nous connaissons parfaitement les spécificités de chaque quartier et intervenons rapidement pour débloquer votre raccordement fibre, quelle que soit la complexité de la situation."
  },
  {
    slug: "digne-les-bains",
    nom: "Digne-les-Bains",
    titre: "Déblocage Fibre Optique à Digne-les-Bains | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Digne-les-Bains. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Digne-les-Bains ?",
    population: 16152,
    quartiers: ["Centre-ville", "Les Thermes", "Le Pigeonnier", "Les Augiers", "Le Bourg", "Saint-Christophe", "Les Sieyes", "Les Dourbes", "Courbons", "Gaubert"],
    problemes_communs: ["Difficultés liées au terrain montagneux", "Fourreaux bouchés par les glissements de terrain", "Regards introuvables après rénovation urbaine"],
    introduction: "Digne-les-Bains, préfecture des Alpes-de-Haute-Provence, présente un relief varié qui peut compliquer l'installation de la fibre optique. Notre expertise en zones montagneuses nous permet d'intervenir efficacement pour débloquer votre raccordement fibre, même dans les secteurs les plus difficiles d'accès."
  },
  {
    slug: "briancon",
    nom: "Briançon",
    titre: "Déblocage Fibre Optique à Briançon | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Briançon. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Briançon ?",
    population: 12392,
    quartiers: ["Vieille Ville", "Sainte-Catherine", "Champ de Mars", "Serre-Chevalier", "Pont de Cervières", "Fontchristiane", "Le Prorel", "Les Cros", "Pramorel", "Saint-Blaise"],
    problemes_communs: ["Difficultés liées au gel en altitude", "Fourreaux bouchés par la neige et le gel", "Contraintes patrimoniales dans la cité Vauban"],
    introduction: "Briançon, ville la plus haute de France (1326m) et classée au patrimoine mondial de l'UNESCO, présente des défis uniques pour l'installation de la fibre optique. Notre expertise en conditions de haute montagne nous permet d'intervenir efficacement pour débloquer votre raccordement fibre, même en période hivernale."
  },
  {
    slug: "orange",
    nom: "Orange",
    titre: "Déblocage Fibre Optique à Orange | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Orange. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Orange ?",
    population: 29193,
    quartiers: ["Centre-ville", "Le Coudoulet", "La Brunette", "L'Aygues", "Le Grès", "Fourchevieilles", "L'Étang", "Croix-Rouge", "La Tourre", "Les Veyrières"],
    problemes_communs: ["Contraintes patrimoniales près des monuments romains", "Fourreaux bouchés dans les zones argileuses", "Regards introuvables sous les places rénovées"],
    introduction: "Orange, ville d'art et d'histoire célèbre pour son théâtre antique, présente des défis particuliers pour l'installation de la fibre optique. Notre expertise en travaux dans les zones à contraintes archéologiques nous permet d'intervenir efficacement tout en respectant le riche patrimoine de la ville."
  },
  {
    slug: "carpentras",
    nom: "Carpentras",
    titre: "Déblocage Fibre Optique à Carpentras | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Carpentras. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Carpentras ?",
    population: 28447,
    quartiers: ["Centre-ville", "Les Amandiers", "Le Pous du Plan", "La Quintine", "Villefranche", "Serres", "Les Croisières", "Saint-Ponchon", "La Lègue", "Les Garrigues"],
    problemes_communs: ["Difficultés d'accès dans le centre historique", "Fourreaux bouchés par les racines des platanes", "Regards introuvables sous les places rénovées"],
    introduction: "Carpentras, sous-préfecture du Vaucluse au pied du Mont Ventoux, combine centre historique et quartiers modernes. Cette diversité architecturale peut compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "cavaillon",
    nom: "Cavaillon",
    titre: "Déblocage Fibre Optique à Cavaillon | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Cavaillon. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Cavaillon ?",
    population: 26689,
    quartiers: ["Centre-ville", "Les Condamines", "Les Ratacans", "Saint-Baldou", "La Clède", "Les Banquets", "Dr Ayme", "Le Camp", "Les Vignères", "Saint-Jacques"],
    problemes_communs: ["Difficultés d'accès dans le centre historique", "Fourreaux bouchés dans les zones agricoles", "Regards introuvables après réaménagement urbain"],
    introduction: "Cavaillon, ville du Luberon connue pour ses melons, présente un centre historique dense et des quartiers résidentiels étendus qui peuvent compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "menton",
    nom: "Menton",
    titre: "Déblocage Fibre Optique à Menton | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Menton. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Menton ?",
    population: 28812,
    quartiers: ["Vieille Ville", "Borrigo", "Garavan", "Carei", "Madone", "Peyronnet", "Baousset", "Gorbio", "Les Ciappes", "Carnolès"],
    problemes_communs: ["Difficultés d'accès dans la vieille ville escarpée", "Fourreaux corrodés par l'air marin", "Regards introuvables dans les ruelles étroites"],
    introduction: "Menton, ville frontalière avec l'Italie et perle de la Côte d'Azur, présente une topographie escarpée et un centre historique dense qui compliquent l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  },
  {
    slug: "arles",
    nom: "Arles",
    titre: "Déblocage Fibre Optique à Arles | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Arles. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Arles ?",
    population: 52548,
    quartiers: ["Centre historique", "La Roquette", "Trinquetaille", "Monplaisir", "Barriol", "Griffeuille", "Pont de Crau", "Raphèle", "Moulès", "Salin-de-Giraud"],
    problemes_communs: ["Contraintes patrimoniales dans le centre romain", "Fourreaux bouchés dans les zones inondables", "Regards introuvables sous les places rénovées"],
    introduction: "Arles, ville d'art et d'histoire classée au patrimoine mondial de l'UNESCO, présente des défis uniques pour l'installation de la fibre optique. Notre expertise en travaux dans les zones à contraintes archéologiques nous permet d'intervenir efficacement tout en respectant le riche patrimoine de la ville."
  },
  {
    slug: "saint-raphael",
    nom: "Saint-Raphaël",
    titre: "Déblocage Fibre Optique à Saint-Raphaël | Fourreau Bouché, Regard Introuvable",
    description: "Intervention rapide pour débloquer votre installation fibre à Saint-Raphaël. Localisation précise des points de blocage, débouchage de fourreau et recherche de regard.",
    h1: "Besoin de débloquer votre fibre optique à Saint-Raphaël ?",
    population: 34567,
    quartiers: ["Centre-ville", "Valescure", "Boulouris", "Le Dramont", "Agay", "Anthéor", "Le Trayas", "Les Plaines", "Les Golfs", "Santa Lucia"],
    problemes_communs: ["Regards ensablés près des plages", "Fourreaux corrodés par l'air marin", "Difficultés d'accès dans les résidences de luxe"],
    introduction: "Saint-Raphaël, station balnéaire de la Côte d'Azur, présente une topographie variée entre mer et massif de l'Estérel qui peut compliquer l'installation de la fibre optique. Notre expertise locale nous permet d'intervenir efficacement dans tous les quartiers pour résoudre les problèmes de raccordement."
  }
];
