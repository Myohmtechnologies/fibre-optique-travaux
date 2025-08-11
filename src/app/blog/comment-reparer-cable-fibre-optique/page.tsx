import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// SEO Metadata with JSON-LD
export function generateMetadata(): Metadata {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Comment réparer un câble de fibre optique endommagé ?',
    image: 'https://www.fibreoptiquetravaux.fr//images/blog/reparation-cable-fibre-optique.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-07',
    dateModified: '2025-08-07',
    description: 'Découvrez comment réparer efficacement un câble de fibre optique endommagé, qui contacter en cas de rupture et les solutions professionnelles pour une intervention rapide et garantie.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/comment-reparer-cable-fibre-optique' },
  };

  return {
    title: 'Comment Réparer un Câble de Fibre Optique Endommagé ? | Guide Expert',
    description: 'Câble fibre optique coupé ou endommagé ? Découvrez qui contacter, les solutions de réparation professionnelles et comment intervenir rapidement pour rétablir votre connexion internet avec une garantie de résultat.',
    openGraph: {
      title: 'Comment Réparer un Câble de Fibre Optique Endommagé ? | Guide Expert',
      description: 'Câble fibre optique coupé ou endommagé ? Découvrez qui contacter, les solutions de réparation professionnelles et comment intervenir rapidement pour rétablir votre connexion internet avec une garantie de résultat.',
      images: ['/images/blog/reparation-cable-fibre-optique.jpg'],
      type: 'article',
    },
    keywords: 'réparation fibre optique, câble fibre endommagé, réparer câble fibre, rupture fibre optique, soudure fibre optique, technicien fibre, intervention urgence fibre',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function CommentReparerCableFibreOptique() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
      {/* Hero Section avec image et titre */}
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/images/blog/reparation-cable-fibre-optique.jpg"
          alt="Réparation d'un câble de fibre optique endommagé"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
            Comment Réparer un Câble de Fibre Optique Endommagé ?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
            Solutions professionnelles pour une intervention rapide et garantie
          </p>
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-orange-500">Comment réparer un câble de fibre optique</span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article principal */}
          <div className="lg:w-2/3">
            {/* Table des matières */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#importance-fibre" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Pourquoi la fibre nous est-elle devenue si indispensable ?
                  </a>
                </li>
                <li>
                  <a href="#qui-appeler" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Qui appeler pour réparer un câble de fibre ?
                  </a>
                </li>
                <li>
                  <a href="#engagements" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Les engagements d'une entreprise spécialisée
                  </a>
                </li>
                <li>
                  <a href="#processus" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Comment procède un professionnel pour réparer votre fibre ?
                  </a>
                </li>
                <li>
                  <a href="#fourreau-telecom" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    En cas de rupture du fourreau télécom
                  </a>
                </li>
                <li>
                  <a href="#controle-qualite" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Remise en service et contrôle qualité
                  </a>
                </li>
              </ul>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-gray-700 mb-4">
                À notre époque si connectée, la moindre rupture de réseau nous laisse démunis. Or, en cas de dysfonctionnement, 
                il est difficile de trouver une entreprise polyvalente qui puisse résoudre votre problème rapidement. 
                Il faut en effet de multiples compétences pour identifier la nature de la rupture, puis engager les travaux indispensables ; 
                les outils ne sont pas les mêmes s'il faut réparer un câble de fibre optique dans votre maison, que dans sa gaine télécom 
                qui passe dans le sol pour rejoindre votre limite de propriété et le réseau public. Les entreprises spécialisées 
                s'engagent à vous rendre ce service dans l'urgence et avec une garantie de résultat.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-700">
                  <strong>À savoir :</strong> La réparation d'un câble de fibre optique nécessite des compétences et des outils spécifiques. 
                  Ne tentez jamais de réparer vous-même un câble de fibre optique endommagé, vous risqueriez d'aggraver le problème.
                </p>
              </div>
            </div>

            {/* Pourquoi la fibre nous est-elle devenue si indispensable ? */}
            <div id="importance-fibre" className="bg-white rounded-lg shadow-md p-6 mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Pourquoi la fibre nous est-elle devenue si indispensable ?</h2>
              
              <p className="text-gray-700 mb-4">
                La fibre optique est devenue un élément essentiel de notre quotidien, tant pour les particuliers que pour les entreprises. 
                Elle permet de transmettre des données à très haut débit, offrant ainsi une connexion internet stable et rapide, 
                indispensable pour de nombreuses activités.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Services numériques</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Télévision et streaming vidéo</li>
                    <li>Téléphonie fixe (VoIP)</li>
                    <li>Travail à distance et visioconférences</li>
                    <li>Jeux en ligne et divertissement</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Objets connectés</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Systèmes de sécurité et alarmes</li>
                    <li>Thermostats et gestion énergétique</li>
                    <li>Éclairage intelligent</li>
                    <li>Électroménager connecté</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700">
                Une rupture de connexion fibre peut donc paralyser de nombreux aspects de notre vie quotidienne et professionnelle. 
                C'est pourquoi il est crucial de pouvoir compter sur une intervention rapide et efficace en cas de problème.
              </p>
            </div>

            {/* Qui appeler pour réparer un câble de fibre ? */}
            <div id="qui-appeler" className="bg-white rounded-lg shadow-md p-6 mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Qui appeler pour réparer un câble de fibre ?</h2>
              
              <p className="text-gray-700 mb-4">
                Si votre connexion Internet s'avère défaillante, votre premier réflexe doit être d'appeler votre opérateur Internet 
                (depuis votre portable, car si vous utilisez le téléphone fixe, il ne fonctionne plus). Seul votre opérateur peut 
                en effet déterminer à quel niveau du réseau se situe la rupture.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <p className="text-orange-700">
                  <strong>Important :</strong> La responsabilité de la réparation dépend de l'emplacement du problème : domaine public ou privé.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Problème sur le domaine public</h3>
                <p className="text-gray-700 mb-2">
                  Si un dysfonctionnement survient sur le réseau public, atteignant votre limite de propriété, votre opérateur doit résoudre 
                  le problème, car il est le seul habilité à intervenir sur les réseaux et les infrastructures télécoms du domaine public.
                </p>
                <Image 
                  src="/images/blog/reseau-fibre-public.jpg" 
                  alt="Réseau fibre optique sur le domaine public" 
                  width={600} 
                  height={400} 
                  className="rounded-lg my-4"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Problème sur le domaine privé</h3>
                <p className="text-gray-700 mb-4">
                  Si le technicien vous informe que l'anomalie se situe sur votre domaine privé, vous avez deux options :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>
                    <span className="font-medium">Option 1 :</span> Demander l'envoi d'un technicien de votre opérateur, 
                    réalisé dans les 4 à 10 jours suivants (délai variable selon les opérateurs et les régions).
                  </li>
                  <li>
                    <span className="font-medium">Option 2 :</span> Contacter une entreprise spécialisée pour une intervention 
                    rapide, souvent possible en 24 à 48h.
                  </li>
                </ul>
              </div>
            </div>

            {/* Les engagements d'une entreprise spécialisée */}
            <div id="engagements" className="bg-white rounded-lg shadow-md p-6 mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Les engagements d'une entreprise spécialisée</h2>
              
              <p className="text-gray-700 mb-4">
                Une entreprise spécialisée dans l'installation et la réparation de la fibre s'engage auprès de ses clients à plusieurs titres :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Intervention en urgence</h3>
                  </div>
                  <p className="text-gray-700 pl-11">Disponibilité 24 heures sur 24 et 7 jours sur 7 pour les situations critiques.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Garantie de résultat</h3>
                  </div>
                  <p className="text-gray-700 pl-11">100% de résultats : lorsque le technicien a terminé, votre liaison de fibre optique est réparée et testée.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Diagnostic précis</h3>
                  </div>
                  <p className="text-gray-700 pl-11">Déplacement chez vous pour le diagnostic à l'aide d'un laser optique et d'équipements spécialisés.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Techniciens polyvalents</h3>
                  </div>
                  <p className="text-gray-700 pl-11">Des intervenants à même de résoudre tous les types de problèmes avec les outils et consommables nécessaires.</p>
                </div>
              </div>
            </div>

            {/* Comment procède un professionnel pour réparer votre fibre ? */}
            <div id="processus" className="bg-white rounded-lg shadow-md p-6 mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Comment procède un professionnel pour réparer votre fibre ?</h2>
              
              <div className="flex items-start mb-6">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Diagnostic avec laser</h3>
                  <p className="text-gray-700 mb-3">
                    Le technicien utilise un laser spécifique pour déterminer l'emplacement exact de la rupture ou de l'endommagement 
                    du câble de fibre optique. Cette technologie permet de localiser avec précision le problème, même à travers les murs 
                    ou sous terre.
                  </p>
                  <Image 
                    src="/images/blog/diagnostic-laser-fibre.jpg" 
                    alt="Diagnostic avec laser pour fibre optique" 
                    width={600} 
                    height={400} 
                    className="rounded-lg my-4"
                  />
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Réparation par fusion</h3>
                  <p className="text-gray-700 mb-3">
                    Une fois la rupture localisée, le technicien procède à la réparation du câble par fusion. Cette technique consiste à :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      Dénuder avec précision les deux extrémités du câble endommagé
                    </li>
                    <li>
                      Nettoyer parfaitement les fibres avec de l'alcool isopropylique
                    </li>
                    <li>
                      Cliver les fibres pour obtenir une coupe parfaitement perpendiculaire
                    </li>
                    <li>
                      Aligner les deux extrémités dans la soudeuse à fusion
                    </li>
                    <li>
                      Procéder à la fusion des fibres à très haute température (environ 1800°C)
                    </li>
                    <li>
                      Protéger la zone de fusion avec une protection thermique
                    </li>
                  </ul>
                  <Image 
                    src="/images/blog/soudeuse-fibre-optique.jpg" 
                    alt="Soudeuse de fibre optique en action" 
                    width={600} 
                    height={400} 
                    className="rounded-lg my-4"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Outils et consommables spécialisés</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Équipements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Soudeuse à fusion de précision</li>
                      <li>Réflectomètre optique (OTDR)</li>
                      <li>Photomètre pour mesurer la puissance optique</li>
                      <li>Cliveuse de précision</li>
                      <li>Détecteur de rupture par laser</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Consommables</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Manchons de protection thermique</li>
                      <li>Câbles de fibre optique de remplacement</li>
                      <li>Connecteurs optiques</li>
                      <li>Alcool isopropylique de haute pureté</li>
                      <li>Lingettes non pelucheuses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* En cas de rupture du fourreau télécom */}
            <div id="fourreau-telecom" className="bg-white rounded-lg shadow-md p-6 mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">En cas de rupture du fourreau télécom</h2>
              
              <p className="text-gray-700 mb-4">
                Depuis le PBO (Point de Branchement Optique) situé sur le domaine public et l'arrivée dans votre maison, 
                le câble optique passe sur votre domaine privé au travers d'un fourreau télécom enfoui dans le sous-sol. 
                Cette gaine pourrait subir un écrasement ou une rupture, notamment en raison de travaux réalisés à proximité 
                ou de racines d'arbre ayant gagné en volume et exerçant une pression importante.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-yellow-700">
                  <strong>Attention :</strong> Le cas échéant, les travaux à réaliser sont plus conséquents, car il faut exhumer 
                  votre fourreau télécom pour réparer le câble de fibre optique et éventuellement changer une portion de la gaine endommagée.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Localisation précise du problème</h3>
                <p className="text-gray-700 mb-4">
                  Les professionnels spécialisés proposent ce service. Le technicien détermine si le câble est coupé ou s'il est écrasé 
                  par la pression et trop endommagé pour laisser passer le signal. Pour cela, il utilise :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>
                    Une aiguille de tirage, couplée à une sonde électromagnétique
                  </li>
                  <li>
                    Un très long câble qu'il glisse dans votre gaine télécom
                  </li>
                </ul>
                <p className="text-gray-700">
                  Ces outils lui permettent de localiser avec la plus grande précision le point en surface correspondant 
                  à la portion endommagée de votre fourreau souterrain.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Travaux de réparation</h3>
                <p className="text-gray-700 mb-4">
                  En fonction de l'agencement de vos extérieurs, le technicien utilise ensuite des outils adéquats pour :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>
                    Creuser une tranchée ciblée à l'endroit précis du problème
                  </li>
                  <li>
                    Réparer le câble de fibre optique en même temps que son fourreau
                  </li>
                  <li>
                    Si votre gaine passe sous des aménagements en dur, percer avec les engins les plus fins pour limiter les dégâts
                  </li>
                  <li>
                    Effectuer les travaux de maçonnerie et de terrassement pour réhabiliter vos embellissements
                  </li>
                </ul>
                <Image 
                  src="/images/blog/reparation-fourreau-telecom.jpg" 
                  alt="Réparation d'un fourreau télécom endommagé" 
                  width={600} 
                  height={400} 
                  className="rounded-lg my-4"
                />
              </div>
            </div>

            {/* Remise en service et contrôle qualité */}
            <div id="controle-qualite" className="bg-white rounded-lg shadow-md p-6 mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Remise en service et contrôle qualité</h2>
              
              <p className="text-gray-700 mb-4">
                Une fois les réparations effectuées et votre câble de fibre réparé, votre réseau est remis en service. 
                Pour vous garantir le meilleur service, les professionnels effectuent un double contrôle.
              </p>

              <div className="flex items-start mb-6">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Contrôle technique</h3>
                  <p className="text-gray-700 mb-3">
                    Utilisation d'un photomètre pour mesurer la puissance lumineuse, assurant ainsi un contrôle 
                    efficace du signal et garantissant une réparation optimale.
                  </p>
                  <Image 
                    src="/images/blog/releve-puissance-fibre-photometre.jpg" 
                    alt="Relevé de puissance fibre avec photomètre" 
                    width={600} 
                    height={400} 
                    className="rounded-lg my-4"
                  />
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Vérification des services</h3>
                  <p className="text-gray-700 mb-3">
                    Tests pour vérifier que tous vos services fonctionnent correctement et que la synchronisation 
                    entre vos différents équipements est effective.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-green-700">
                  <strong>Garantie :</strong> Lorsque le technicien quitte votre domicile, votre connexion est rétablie. 
                  Vous profitez à nouveau des équipements liés au fonctionnement de votre maison, à votre sécurité et à vos activités de loisir.
                </p>
              </div>
            </div>

            {/* Tableau des tarifs */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Tarifs indicatifs pour la réparation de fibre optique</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Type d'intervention</th>
                      <th className="border p-3 text-left">Description</th>
                      <th className="border p-3 text-right">Tarif indicatif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3"><span className="font-medium">Diagnostic</span></td>
                      <td className="border p-3">Déplacement et analyse du problème avec équipement spécialisé</td>
                      <td className="border p-3 text-right">230€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3"><span className="font-medium">Réparation simple</span></td>
                      <td className="border p-3">Soudure de fibre optique, remplacement de connecteur ou de manchon</td>
                      <td className="border p-3 text-right">350€ à 450€</td>
                    </tr>
                    <tr>
                      <td className="border p-3"><span className="font-medium">Intervention standard</span></td>
                      <td className="border p-3">Réparation sur terrain meuble (terre, pelouse) avec tranchée limitée</td>
                      <td className="border p-3 text-right">530€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3"><span className="font-medium">Intervention complexe</span></td>
                      <td className="border p-3">Réparation sur surface dure (béton, enrobé) avec perçage et remise en état</td>
                      <td className="border p-3 text-right">710€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-3">* Les tarifs sont donnés à titre indicatif et peuvent varier selon la complexité de l'intervention et la région.</p>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                La réparation d'un câble de fibre optique endommagé nécessite des compétences techniques spécifiques et un équipement adapté. 
                Face à une rupture de connexion, il est essentiel de déterminer si le problème se situe sur le domaine public ou privé pour 
                contacter le bon interlocuteur.
              </p>

              <p className="text-gray-700 mb-4">
                Si le problème est sur votre domaine privé, faire appel à une entreprise spécialisée vous garantit une intervention rapide 
                et efficace, avec un diagnostic précis et une réparation durable, qu'il s'agisse d'une simple soudure de fibre ou d'une 
                intervention plus complexe sur votre fourreau télécom.
              </p>

              <p className="text-gray-700 mb-6">
                N'oubliez pas que la qualité de la réparation est essentielle pour garantir la pérennité de votre connexion et éviter 
                de nouveaux problèmes à l'avenir. C'est pourquoi il est recommandé de faire appel à des professionnels qui vous offrent 
                une garantie de résultat et un contrôle qualité rigoureux.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-center transition-colors font-medium">
                  Demander un diagnostic
                </Link>
                <Link href="/tarifs" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-center transition-colors font-medium">
                  Consulter nos tarifs détaillés
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Carte de contact */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Besoin d'une intervention rapide ?</h3>
              <p className="text-gray-700 mb-4">
                Notre équipe de techniciens spécialisés intervient dans les 24 à 48h pour réparer votre câble de fibre optique 
                et rétablir votre connexion internet.
              </p>
              <div className="flex flex-col space-y-3">
                <a href="tel:+33400000000" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  04 00 00 00 00
                </a>
                <a href="mailto:contact@fibre-optique-travaux.fr" className="flex items-center text-blue-600 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@fibre-optique-travaux.fr
                </a>
              </div>
              <Link href="/contact" className="block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-center mt-4 transition-colors">
                Nous contacter
              </Link>
            </div>

            {/* Articles liés */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Articles liés</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog/pourquoi-aiguille-cable-bloquent-fourreau-telecom" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                      <Image
                        src="/images/blog/cable-bloque-fourreau-telecom.jpg"
                        alt="Câble bloqué dans fourreau télécom"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 leading-tight">Pourquoi l'aiguille et le câble bloquent dans le fourreau télécom ?</h4>
                      <p className="text-sm text-gray-500 mt-1">Découvrez les causes et solutions</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/qui-appeler-debouchage-fourreau-telecom" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                      <Image
                        src="/images/blog/debouchage-fourreau-telecom.jpg"
                        alt="Débouchage fourreau télécom"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 leading-tight">Qui appeler pour le débouchage d'un fourreau télécom ?</h4>
                      <p className="text-sm text-gray-500 mt-1">Les professionnels à contacter</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/quand-realiser-tranchee-fibre-optique" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                      <Image
                        src="/images/blog/tranchee-fibre-optique.jpg"
                        alt="Tranchée fibre optique"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 leading-tight">Quand faut-il réaliser une tranchée pour la fibre ?</h4>
                      <p className="text-sm text-gray-500 mt-1">Guide complet et conseils</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      </main>
    </>
  );
}
