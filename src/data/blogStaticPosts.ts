export type StaticBlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  date: string; // ISO string
  categories: string[];
};

// Articles statiques créés manuellement sous src/app/blog/<slug>/page.tsx
// Ajoutez ici toute nouvelle page statique pour qu'elle remonte dans /blog
export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  {
    _id: 'static-travaux-raccordement-fibre-optique-guide-complet',
    title: 'Travaux pour le raccordement fibre optique : guide complet',
    slug: 'travaux-raccordement-fibre-optique-guide-complet',
    excerpt:
      'Le guide complet des travaux nécessaires pour le raccordement à la fibre optique : tranchée, débouchage de fourreau, réparation de câble et détection de regard.',
    image: '/images/blog/tranchee-fibre-optique.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-14T00:00:00.000Z',
    categories: ['fibre optique', 'travaux', 'guide', 'infrastructure'],
  },
  {
    _id: 'static-regard-introuvable-installation-fibre-optique',
    title: "Regard introuvable pour installer votre fibre optique ?",
    slug: 'regard-introuvable-installation-fibre-optique',
    excerpt:
      "Regard télécom introuvable pour votre raccordement ? Découvrez les techniques de détection et les solutions professionnelles pour y accéder.",
    image: '/images/blog/regard-introuvable-fibre-optique.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-05T00:00:00.000Z',
    categories: ['fibre optique', 'regard télécom', 'diagnostic'],
  },
  {
    _id: 'static-comment-reparer-cable-fibre-optique',
    title: "Comment réparer un câble de fibre optique endommagé ?",
    slug: 'comment-reparer-cable-fibre-optique',
    excerpt:
      "Câble fibre endommagé : qui appeler, comment intervenir et quelles étapes pour une remise en service fiable.",
    image: '/images/blog/reparation-cable-fibre-optique.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-05T00:00:00.000Z',
    categories: ['fibre optique', 'réparation', 'intervention'],
  },
  {
    _id: 'static-comment-deboucher-reparer-fourreau-gaine',
    title: "Comment déboucher / réparer un fourreau (gaine) ?",
    slug: 'comment-deboucher-reparer-fourreau-gaine',
    excerpt:
      "Fourreau bouché, gaine écrasée : méthodes de détection et solutions pour rétablir le passage du câble fibre.",
    image: '/images/blog/debouchage-fourreau.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-06T00:00:00.000Z',
    categories: ['fibre optique', 'fourreau', 'diagnostic'],
  },
  {
    _id: 'static-comment-trouver-regard-france-telecom',
    title: 'Comment trouver un regard ou une plaque France Télécom ?',
    slug: 'comment-trouver-regard-france-telecom',
    excerpt:
      "Découvrez les méthodes efficaces pour localiser votre regard France Télécom et faciliter l'installation de votre fibre optique. Solutions professionnelles en région PACA.",
    image: '/images/blog/regard-france-telecom.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-07T00:00:00.000Z',
    categories: ['fibre optique', 'regard télécom', 'diagnostic'],
  },
  {
    _id: 'static-detection-regard-ptt',
    title: 'Pourquoi réaliser la détection de votre regard PTT ?',
    slug: 'detection-regard-ptt',
    excerpt:
      "Découvrez pourquoi la détection de votre regard PTT est essentielle pour l'installation de la fibre optique. Conseils d'experts, méthodes et tarifs.",
    image: '/images/blog/detection-regard-ptt.jpeg',
    author: 'Expert Fibre Optique',
    date: '2025-08-01T00:00:00.000Z',
    categories: ['fibre optique', 'regard télécom', 'diagnostic'],
  },
  {
    _id: 'static-pourquoi-aiguille-cable-bloquent-fourreau-telecom',
    title: "Pourquoi l'Aiguille et le Câble Bloquent dans le Fourreau Télécom ?",
    slug: 'pourquoi-aiguille-cable-bloquent-fourreau-telecom',
    excerpt:
      "Aiguille ou câble bloqué dans votre fourreau télécom ? Découvrez les causes principales et les solutions pour localiser et résoudre ce problème lors de votre raccordement fibre.",
    image: '/images/blog/cable-bloque-fourreau-telecom.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-02T00:00:00.000Z',
    categories: ['fibre optique', 'fourreau', 'diagnostic'],
  },
  {
    _id: 'static-pourquoi-confier-travaux-telecom-entreprise',
    title: 'Pourquoi confier vos travaux télécom à notre entreprise ?',
    slug: 'pourquoi-confier-travaux-telecom-entreprise',
    excerpt:
      "Raccordement fibre bloqué ? Découvrez pourquoi notre expertise en recherche de regard et débouchage de fourreau garantit une solution clé en main. 100% de réussite.",
    image: '/images/nos-service.png',
    author: 'Expert Fibre Optique',
    date: '2025-07-07T00:00:00.000Z',
    categories: ['fibre optique', 'travaux', 'entreprise'],
  },
  {
    _id: 'static-quand-realiser-tranchee-fibre-optique',
    title: 'Quand faut-il réaliser une tranchée pour la fibre ?',
    slug: 'quand-realiser-tranchee-fibre-optique',
    excerpt: 'Découvrez dans quels cas la création d\'une tranchée est une étape obligatoire pour le raccordement de votre logement à la fibre optique.',
    image: '/images/blog/tranchee-fibre-optique.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-14T00:00:00.000Z',
    categories: ['fibre optique', 'travaux', 'tranchée'],
  },
  {
    _id: 'static-prix-debouchage-fourreau-telecom',
    title: "Prix du débouchage d'un fourreau télécom | Tarifs et solutions",
    slug: 'prix-debouchage-fourreau-telecom',
    excerpt:
      "Combien coûte le débouchage d'un fourreau télécom ? Découvrez nos tarifs transparents et forfaitaires pour débloquer votre raccordement fibre optique sans mauvaise surprise.",
    image: '/images/blog/prix-debouchage-fourreau-telecom.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-07-07T00:00:00.000Z',
    categories: ['fibre optique', 'fourreau', 'tarifs'],
  },
  {
    _id: 'static-quand-realiser-tranchee-fibre-optique',
    title: 'Quand faut-il réaliser une tranchée pour la fibre ? ',
    slug: 'quand-realiser-tranchee-fibre-optique',
    excerpt:
      "Fourreau bouché ou endommagé ? Logement neuf ? Découvrez quand et pourquoi il est nécessaire de réaliser une tranchée pour votre raccordement fibre optique.",
    image: '/images/blog/tranchee-fibre-optique.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-01T00:00:00.000Z',
    categories: ['fibre optique', 'travaux', 'infrastructure'],
  },
  {
    _id: 'static-qui-appeler-debouchage-fourreau-telecom',
    title: "Qui appeler pour le débouchage d'un fourreau télécom ?",
    slug: 'qui-appeler-debouchage-fourreau-telecom',
    excerpt:
      "Fourreau télécom bouché empêchant le raccordement fibre ? Découvrez quel professionnel spécialisé contacter pour un débouchage efficace et durable de votre gaine télécom.",
    image: '/images/blog/debouchage-fourreau-telecom.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-02T00:00:00.000Z',
    categories: ['fibre optique', 'fourreau', 'intervention'],
  },
  {
    _id: 'static-qui-peut-resoudre-probleme-installation-fibre',
    title: "Qui peut résoudre mon problème d'installation fibre ?",
    slug: 'qui-peut-resoudre-probleme-installation-fibre',
    excerpt:
      "Problème de raccordement fibre ? Découvrez qui contacter selon la nature du blocage : opérateur, mairie ou entreprise spécialisée. Solutions pour regard introuvable ou fourreau bouché.",
    image: '/images/blog/probleme-installation-fibre.jpg',
    author: 'Expert Fibre Optique',
    date: '2025-08-03T00:00:00.000Z',
    categories: ['fibre optique', 'diagnostic', 'intervention'],
  },
];
