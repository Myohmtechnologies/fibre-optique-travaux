export interface Temoignage {
  nom: string;
  quartier: string;
  date: string;
  note: number; // Sur 5
  commentaire: string;
  probleme: string;
  photo?: string; // URL de la photo du client ou du chantier (optionnel)
}

export interface TemoignagesVille {
  ville: string;
  slug: string;
  temoignages: Temoignage[];
}

export const temoignages: TemoignagesVille[] = [
  {
    ville: "Marseille",
    slug: "marseille",
    temoignages: [
      {
        nom: "Laurent D.",
        quartier: "Le Panier",
        date: "15 février 2025",
        note: 5,
        probleme: "Fourreau bouché",
        commentaire: "Intervention rapide et efficace. L'équipe a débloqué mon fourreau en moins de 2h alors que mon opérateur était bloqué depuis 3 semaines. Très professionnel et tarif transparent."
      },
      {
        nom: "Sophie M.",
        quartier: "Vieux-Port",
        date: "3 janvier 2025",
        note: 5,
        probleme: "Regard introuvable",
        commentaire: "Excellente prestation. Le technicien a trouvé le regard que l'opérateur cherchait depuis des semaines. Installation terminée le jour même après son intervention. Je recommande !"
      },
      {
        nom: "Karim B.",
        quartier: "La Joliette",
        date: "28 décembre 2024",
        note: 4,
        probleme: "Câble sectionné",
        commentaire: "Très bonne entreprise, réactive et compétente. Ils ont réparé un câble sectionné dans mon immeuble ancien. Seul petit bémol : le prix un peu élevé, mais la qualité est au rendez-vous."
      }
    ]
  },
  {
    ville: "Nice",
    slug: "nice",
    temoignages: [
      {
        nom: "Pierre L.",
        quartier: "Cimiez",
        date: "20 mars 2025",
        note: 5,
        probleme: "Fourreau écrasé",
        commentaire: "Service impeccable. Ils ont résolu un problème de fourreau écrasé sous ma terrasse que mon opérateur jugeait impossible à réparer. Intervention propre et soignée."
      },
      {
        nom: "Émilie T.",
        quartier: "Vieux Nice",
        date: "5 février 2025",
        note: 5,
        probleme: "Regard bétonné",
        commentaire: "Équipe très professionnelle qui a su débloquer un regard qui avait été bétonné lors de travaux de voirie. Délai respecté et travail de qualité."
      }
    ]
  },
  {
    ville: "Toulon",
    slug: "toulon",
    temoignages: [
      {
        nom: "Jean-Marc P.",
        quartier: "Le Mourillon",
        date: "12 janvier 2025",
        note: 4,
        probleme: "Fourreau bouché",
        commentaire: "Intervention efficace pour déboucher un fourreau obstrué depuis des années. Équipe ponctuelle et travail soigné. Je recommande."
      }
    ]
  },
  {
    ville: "Aix-en-Provence",
    slug: "aix-en-provence",
    temoignages: [
      {
        nom: "Claire D.",
        quartier: "Mazarin",
        date: "25 février 2025",
        note: 5,
        probleme: "Regard introuvable",
        commentaire: "Excellente prestation dans notre quartier historique où les regards sont souvent difficiles à localiser. Équipe respectueuse du patrimoine et très efficace."
      },
      {
        nom: "Thomas R.",
        quartier: "Les Milles",
        date: "10 janvier 2025",
        note: 5,
        probleme: "Fourreau écrasé",
        commentaire: "Intervention rapide dans notre zone d'activité. Problème résolu en une journée alors que nous attendions depuis 2 mois. Un grand merci !"
      }
    ]
  },
  {
    ville: "Avignon",
    slug: "avignon",
    temoignages: [
      {
        nom: "Mathilde S.",
        quartier: "Intra-muros",
        date: "5 mars 2025",
        note: 5,
        probleme: "Câble endommagé",
        commentaire: "Intervention délicate dans le centre historique parfaitement réalisée. L'équipe a su s'adapter aux contraintes des bâtiments anciens. Très satisfaite."
      }
    ]
  },
  {
    ville: "Cannes",
    slug: "cannes",
    temoignages: [
      {
        nom: "Olivier M.",
        quartier: "La Croisette",
        date: "15 janvier 2025",
        note: 5,
        probleme: "Fourreau bouché",
        commentaire: "Service premium, intervention rapide et discrète dans notre hôtel. Problème résolu sans gêner nos clients. Parfait !"
      }
    ]
  },
  {
    ville: "Antibes",
    slug: "antibes",
    temoignages: [
      {
        nom: "Nathalie P.",
        quartier: "Juan-les-Pins",
        date: "28 février 2025",
        note: 4,
        probleme: "Regard introuvable",
        commentaire: "Bonne prestation, équipe à l'écoute qui a su trouver une solution adaptée à notre problème de regard introuvable. Délai respecté."
      }
    ]
  },
  {
    ville: "Fréjus",
    slug: "frejus",
    temoignages: [
      {
        nom: "Michel D.",
        quartier: "Centre historique",
        date: "10 mars 2025",
        note: 5,
        probleme: "Fourreau bouché",
        commentaire: "Excellente entreprise, intervention rapide et efficace. Ils ont débloqué notre installation en quelques heures. Je recommande vivement."
      }
    ]
  },
  {
    ville: "Gap",
    slug: "gap",
    temoignages: [
      {
        nom: "Sylvie R.",
        quartier: "Centre-ville",
        date: "5 janvier 2025",
        note: 5,
        probleme: "Câble sectionné",
        commentaire: "Très bonne intervention malgré les conditions hivernales difficiles. Équipe réactive et professionnelle. Problème résolu rapidement."
      }
    ]
  },
  {
    ville: "Draguignan",
    slug: "draguignan",
    temoignages: [
      {
        nom: "Patrick L.",
        quartier: "Centre",
        date: "20 février 2025",
        note: 4,
        probleme: "Fourreau écrasé",
        commentaire: "Bon travail, équipe compétente qui a su résoudre notre problème de fourreau écrasé. Intervention propre et dans les délais."
      }
    ]
  },
  {
    ville: "Salon-de-Provence",
    slug: "salon-de-provence",
    temoignages: [
      {
        nom: "Christine B.",
        quartier: "Centre historique",
        date: "15 mars 2025",
        note: 5,
        probleme: "Regard introuvable",
        commentaire: "Service impeccable, équipe à l'écoute et très professionnelle. Ils ont trouvé le regard que personne n'arrivait à localiser. Bravo !"
      }
    ]
  },
  {
    ville: "Martigues",
    slug: "martigues",
    temoignages: [
      {
        nom: "Philippe G.",
        quartier: "L'Île",
        date: "28 janvier 2025",
        note: 5,
        probleme: "Fourreau bouché",
        commentaire: "Excellente prestation dans notre quartier historique. Intervention soignée et efficace. Je recommande cette entreprise sérieuse."
      }
    ]
  },
  {
    ville: "Digne-les-Bains",
    slug: "digne-les-bains",
    temoignages: [
      {
        nom: "Marie-Claude F.",
        quartier: "Centre-ville",
        date: "10 février 2025",
        note: 5,
        probleme: "Câble endommagé",
        commentaire: "Très satisfaite de l'intervention. Équipe ponctuelle et efficace qui a su réparer notre câble endommagé. Service de qualité."
      }
    ]
  },
  {
    ville: "Briançon",
    slug: "briancon",
    temoignages: [
      {
        nom: "Alain M.",
        quartier: "Vieille ville",
        date: "5 mars 2025",
        note: 4,
        probleme: "Fourreau gelé",
        commentaire: "Bonne intervention malgré les conditions difficiles en altitude. Équipe bien équipée et compétente. Problème résolu efficacement."
      }
    ]
  },
  {
    ville: "Orange",
    slug: "orange",
    temoignages: [
      {
        nom: "Valérie D.",
        quartier: "Centre",
        date: "15 janvier 2025",
        note: 5,
        probleme: "Regard introuvable",
        commentaire: "Service impeccable, équipe très professionnelle qui a su localiser notre regard perdu. Intervention rapide et efficace."
      }
    ]
  },
  {
    ville: "Carpentras",
    slug: "carpentras",
    temoignages: [
      {
        nom: "Bernard L.",
        quartier: "Centre historique",
        date: "28 février 2025",
        note: 5,
        probleme: "Fourreau bouché",
        commentaire: "Excellente prestation, équipe réactive et compétente. Problème résolu en quelques heures. Je recommande vivement."
      }
    ]
  },
  {
    ville: "Cavaillon",
    slug: "cavaillon",
    temoignages: [
      {
        nom: "Isabelle R.",
        quartier: "Centre-ville",
        date: "10 mars 2025",
        note: 4,
        probleme: "Câble sectionné",
        commentaire: "Bonne intervention, équipe sérieuse et efficace. Réparation effectuée proprement et dans les délais annoncés."
      }
    ]
  },
  {
    ville: "Menton",
    slug: "menton",
    temoignages: [
      {
        nom: "Jacques P.",
        quartier: "Vieille ville",
        date: "5 janvier 2025",
        note: 5,
        probleme: "Fourreau écrasé",
        commentaire: "Service de qualité dans notre quartier aux ruelles étroites. Équipe qui a su s'adapter aux contraintes locales. Très satisfait."
      }
    ]
  },
  {
    ville: "Arles",
    slug: "arles",
    temoignages: [
      {
        nom: "Martine S.",
        quartier: "La Roquette",
        date: "20 février 2025",
        note: 5,
        probleme: "Regard introuvable",
        commentaire: "Excellente prestation dans notre quartier historique. L'équipe a su localiser un regard que personne ne trouvait. Travail soigné et professionnel."
      }
    ]
  },
  {
    ville: "Saint-Raphaël",
    slug: "saint-raphael",
    temoignages: [
      {
        nom: "Daniel C.",
        quartier: "Valescure",
        date: "15 mars 2025",
        note: 5,
        probleme: "Fourreau bouché",
        commentaire: "Intervention rapide et efficace. Équipe très professionnelle qui a su résoudre notre problème de fourreau bouché. Je recommande !"
      }
    ]
  }
];

// Fonction pour récupérer les témoignages d'une ville spécifique
export function getTemoignagesVille(slug: string): Temoignage[] {
  const villeData = temoignages.find(v => v.slug === slug);
  return villeData ? villeData.temoignages : [];
}
