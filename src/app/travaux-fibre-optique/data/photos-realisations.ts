export interface PhotoRealisation {
  ville: string;
  slug: string;
  quartier: string;
  probleme: string;
  description: string;
  date: string;
  photoAvant: string;
  photoApres: string;
}

export const photosRealisations: PhotoRealisation[] = [
  {
    ville: "Marseille",
    slug: "marseille",
    quartier: "Le Panier",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par des racines d'arbres dans une rue étroite du quartier historique",
    date: "Février 2025",
    photoAvant: "/images/realisations/marseille-panier-avant.jpg",
    photoApres: "/images/realisations/marseille-panier-apres.jpg"
  },
  {
    ville: "Marseille",
    slug: "marseille",
    quartier: "Vieux-Port",
    probleme: "Regard introuvable",
    description: "Regard dissimulé sous une couche d'asphalte suite à des travaux de voirie",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/marseille-vieuxport-avant.jpg",
    photoApres: "/images/realisations/marseille-vieuxport-apres.jpg"
  },
  {
    ville: "Nice",
    slug: "nice",
    quartier: "Cimiez",
    probleme: "Fourreau écrasé",
    description: "Fourreau écrasé par le passage répété de véhicules lourds dans une zone résidentielle",
    date: "Mars 2025",
    photoAvant: "/images/realisations/nice-cimiez-avant.jpg",
    photoApres: "/images/realisations/nice-cimiez-apres.jpg"
  },
  {
    ville: "Nice",
    slug: "nice",
    quartier: "Vieux Nice",
    probleme: "Regard bétonné",
    description: "Regard accidentellement recouvert de béton lors de travaux de rénovation urbaine",
    date: "Février 2025",
    photoAvant: "/images/realisations/nice-vieux-avant.jpg",
    photoApres: "/images/realisations/nice-vieux-apres.jpg"
  },
  {
    ville: "Toulon",
    slug: "toulon",
    quartier: "Le Mourillon",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par des sédiments suite à des intempéries dans ce quartier côtier",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/toulon-mourillon-avant.jpg",
    photoApres: "/images/realisations/toulon-mourillon-apres.jpg"
  },
  {
    ville: "Aix-en-Provence",
    slug: "aix-en-provence",
    quartier: "Mazarin",
    probleme: "Regard introuvable",
    description: "Regard masqué par des aménagements paysagers dans ce quartier historique",
    date: "Février 2025",
    photoAvant: "/images/realisations/aix-mazarin-avant.jpg",
    photoApres: "/images/realisations/aix-mazarin-apres.jpg"
  },
  {
    ville: "Avignon",
    slug: "avignon",
    quartier: "Intra-muros",
    probleme: "Câble endommagé",
    description: "Câble fibre sectionné lors de travaux de rénovation dans un bâtiment ancien",
    date: "Mars 2025",
    photoAvant: "/images/realisations/avignon-intramuros-avant.jpg",
    photoApres: "/images/realisations/avignon-intramuros-apres.jpg"
  },
  {
    ville: "Cannes",
    slug: "cannes",
    quartier: "La Croisette",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par du sable sur cette avenue en bord de mer",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/cannes-croisette-avant.jpg",
    photoApres: "/images/realisations/cannes-croisette-apres.jpg"
  },
  {
    ville: "Antibes",
    slug: "antibes",
    quartier: "Juan-les-Pins",
    probleme: "Regard introuvable",
    description: "Regard dissimulé sous des aménagements urbains récents",
    date: "Février 2025",
    photoAvant: "/images/realisations/antibes-juan-avant.jpg",
    photoApres: "/images/realisations/antibes-juan-apres.jpg"
  },
  {
    ville: "Fréjus",
    slug: "frejus",
    quartier: "Centre historique",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par des débris de construction dans une ruelle étroite",
    date: "Mars 2025",
    photoAvant: "/images/realisations/frejus-centre-avant.jpg",
    photoApres: "/images/realisations/frejus-centre-apres.jpg"
  },
  {
    ville: "Gap",
    slug: "gap",
    quartier: "Centre-ville",
    probleme: "Câble sectionné",
    description: "Câble fibre sectionné par le gel intense en période hivernale",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/gap-centre-avant.jpg",
    photoApres: "/images/realisations/gap-centre-apres.jpg"
  },
  {
    ville: "Draguignan",
    slug: "draguignan",
    quartier: "Centre",
    probleme: "Fourreau écrasé",
    description: "Fourreau écrasé suite à des travaux de voirie mal exécutés",
    date: "Février 2025",
    photoAvant: "/images/realisations/draguignan-centre-avant.jpg",
    photoApres: "/images/realisations/draguignan-centre-apres.jpg"
  },
  {
    ville: "Salon-de-Provence",
    slug: "salon-de-provence",
    quartier: "Centre historique",
    probleme: "Regard introuvable",
    description: "Regard masqué par des pavés historiques lors d'une rénovation de place",
    date: "Mars 2025",
    photoAvant: "/images/realisations/salon-centre-avant.jpg",
    photoApres: "/images/realisations/salon-centre-apres.jpg"
  },
  {
    ville: "Martigues",
    slug: "martigues",
    quartier: "L'Île",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par des dépôts calcaires dans ce quartier traversé par des canaux",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/martigues-ile-avant.jpg",
    photoApres: "/images/realisations/martigues-ile-apres.jpg"
  },
  {
    ville: "Digne-les-Bains",
    slug: "digne-les-bains",
    quartier: "Centre-ville",
    probleme: "Câble endommagé",
    description: "Câble fibre endommagé par des travaux d'aménagement thermal",
    date: "Février 2025",
    photoAvant: "/images/realisations/digne-centre-avant.jpg",
    photoApres: "/images/realisations/digne-centre-apres.jpg"
  },
  {
    ville: "Briançon",
    slug: "briancon",
    quartier: "Vieille ville",
    probleme: "Fourreau gelé",
    description: "Fourreau endommagé par le gel extrême en haute altitude",
    date: "Mars 2025",
    photoAvant: "/images/realisations/briancon-vieille-avant.jpg",
    photoApres: "/images/realisations/briancon-vieille-apres.jpg"
  },
  {
    ville: "Orange",
    slug: "orange",
    quartier: "Centre",
    probleme: "Regard introuvable",
    description: "Regard dissimulé sous des aménagements liés au patrimoine romain",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/orange-centre-avant.jpg",
    photoApres: "/images/realisations/orange-centre-apres.jpg"
  },
  {
    ville: "Carpentras",
    slug: "carpentras",
    quartier: "Centre historique",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par des racines dans une rue médiévale étroite",
    date: "Février 2025",
    photoAvant: "/images/realisations/carpentras-centre-avant.jpg",
    photoApres: "/images/realisations/carpentras-centre-apres.jpg"
  },
  {
    ville: "Cavaillon",
    slug: "cavaillon",
    quartier: "Centre-ville",
    probleme: "Câble sectionné",
    description: "Câble fibre sectionné lors de travaux d'aménagement urbain",
    date: "Mars 2025",
    photoAvant: "/images/realisations/cavaillon-centre-avant.jpg",
    photoApres: "/images/realisations/cavaillon-centre-apres.jpg"
  },
  {
    ville: "Menton",
    slug: "menton",
    quartier: "Vieille ville",
    probleme: "Fourreau écrasé",
    description: "Fourreau écrasé dans les ruelles étroites aux fortes pentes",
    date: "Janvier 2025",
    photoAvant: "/images/realisations/menton-vieille-avant.jpg",
    photoApres: "/images/realisations/menton-vieille-apres.jpg"
  },
  {
    ville: "Arles",
    slug: "arles",
    quartier: "La Roquette",
    probleme: "Regard introuvable",
    description: "Regard dissimulé sous des vestiges archéologiques romains",
    date: "Février 2025",
    photoAvant: "/images/realisations/arles-roquette-avant.jpg",
    photoApres: "/images/realisations/arles-roquette-apres.jpg"
  },
  {
    ville: "Saint-Raphaël",
    slug: "saint-raphael",
    quartier: "Valescure",
    probleme: "Fourreau bouché",
    description: "Fourreau obstrué par des racines de pins parasols dans ce quartier résidentiel",
    date: "Mars 2025",
    photoAvant: "/images/realisations/saintraphael-valescure-avant.jpg",
    photoApres: "/images/realisations/saintraphael-valescure-apres.jpg"
  }
];

// Fonction pour récupérer les photos de réalisations d'une ville spécifique
export function getPhotosRealisationsVille(slug: string): PhotoRealisation[] {
  return photosRealisations.filter(photo => photo.slug === slug);
}
