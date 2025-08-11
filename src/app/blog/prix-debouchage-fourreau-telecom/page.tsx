import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// SEO Metadata with JSON-LD
export function generateMetadata(): Metadata {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Quel est le prix pour le débouchage d\'un fourreau télécom ?',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/prix-debouchage-fourreau-telecom.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-07',
    dateModified: '2025-08-07',
    description: 'Découvrez les tarifs et coûts du débouchage d\'un fourreau télécom pour votre raccordement fibre optique. Comparatif entre intervention professionnelle et travaux en autonomie.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/prix-debouchage-fourreau-telecom' },
  };

  return {
    title: 'Prix du Débouchage d\'un Fourreau Télécom | Tarifs et Solutions',
    description: 'Combien coûte le débouchage d\'un fourreau télécom ? Découvrez nos tarifs transparents et forfaitaires pour débloquer votre raccordement fibre optique sans mauvaise surprise.',
    openGraph: {
      title: 'Prix du Débouchage d\'un Fourreau Télécom | Tarifs et Solutions',
      description: 'Combien coûte le débouchage d\'un fourreau télécom ? Découvrez nos tarifs transparents et forfaitaires pour débloquer votre raccordement fibre optique sans mauvaise surprise.',
      images: ['/images/blog/prix-debouchage-fourreau-telecom.jpg'],
      type: 'article',
    },
    keywords: 'prix débouchage fourreau télécom, coût débouchage gaine fibre, tarif débouchage fourreau, déboucher fourreau prix, intervention fourreau télécom coût',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function PrixDebouchageFourreauTelecom() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <article className="pt-8 pb-16">
          <div className="container mx-auto px-4">
            
            {/* Hero section */}
            <div className="relative h-80 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/blog/prix-debouchage-fourreau-telecom.jpg"
                alt="Technicien réalisant un débouchage de fourreau télécom"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 max-w-4xl">
                  Quel est le prix pour le débouchage d'un fourreau télécom ?
                </h1>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="max-w-4xl mx-auto mb-8 text-sm text-gray-600">
              <Link href="/" className="hover:text-construction-orange">Accueil</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/blog" className="hover:text-construction-orange">Blog</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-construction-orange">Prix débouchage fourreau télécom</span>
            </div>

            {/* Table des matières */}
            <div className="max-w-4xl mx-auto mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Table des matières</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#travaux-a-votre-charge" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Quels sont les travaux à votre charge ?
                  </a>
                </li>
                <li>
                  <a href="#prix-travaux-autonomie" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Prix du débouchage en autonomie : matériel et compétences nécessaires
                  </a>
                </li>
                <li>
                  <a href="#prix-intervention-pro" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Prix d'une intervention professionnelle
                  </a>
                </li>
                <li>
                  <a href="#tarifs-detailles" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Nos tarifs détaillés pour le débouchage de fourreau
                  </a>
                </li>
                <li>
                  <a href="#facteurs-variation-prix" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Facteurs de variation du prix
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="flex items-center text-construction-orange hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Conclusion
                  </a>
                </li>
              </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Le raccordement à la fibre optique est devenu essentiel pour bénéficier d'une connexion internet performante. Cependant, un obstacle fréquent peut retarder cette installation : le fourreau télécom bouché. Ce conduit, qui doit permettre le passage du câble de fibre optique jusqu'à votre domicile, peut être obstrué par divers éléments (terre, débris, racines) ou endommagé (écrasé, cassé).</p>
                
                <p className="mb-4">Lorsque le technicien de votre opérateur se présente pour l'installation et constate que le fourreau est bouché, il ne pourra pas finaliser le raccordement. Il vous informera alors que des travaux de débouchage sont nécessaires avant de pouvoir procéder à l'installation de la fibre optique.</p>
                
                <p className="mb-4">Une question se pose alors : combien coûte le débouchage d'un fourreau télécom ? Dans cet article, nous allons détailler les différentes options qui s'offrent à vous et leurs coûts respectifs, qu'il s'agisse de réaliser les travaux vous-même ou de faire appel à une entreprise spécialisée.</p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">À retenir :</p>
                  <p>Le débouchage d'un fourreau télécom est à la charge du propriétaire. Les coûts varient considérablement selon que vous réalisez les travaux vous-même (achat/location de matériel) ou que vous faites appel à un professionnel (intervention forfaitaire avec garantie de résultat).</p>
                </div>
              </div>
            </section>

            {/* Travaux à votre charge */}
            <section id="travaux-a-votre-charge" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Quels sont les travaux à votre charge ?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Avant d'aborder les coûts, il est important de comprendre pourquoi ces travaux sont à votre charge et non à celle de l'opérateur.</p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">La limite de responsabilité des opérateurs</h3>
                  <p>Les opérateurs de télécommunications (Orange, SFR, Free, Bouygues) sont responsables du déploiement de la fibre optique jusqu'au Point de Branchement Optique (PBO) le plus proche de votre domicile. Ce point se situe généralement sur le domaine public, à proximité de votre propriété.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">Votre responsabilité en tant que propriétaire</h3>
                  <p>Le dernier tronçon, qui relie le PBO à l'intérieur de votre domicile, traverse votre propriété privée. L'infrastructure sur cette portion (fourreaux, regards, gaines) est sous votre responsabilité. Si un fourreau est bouché ou endommagé, c'est donc à vous qu'incombe la charge de le déboucher ou de le réparer.</p>
                </div>

                <div className="flex items-center justify-center my-8">
                  <Image 
                    src="/images/blog/schema-raccordement-fibre.webp" 
                    alt="Schéma de raccordement fibre optique montrant la limite de responsabilité" 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-md"
                  />
                </div>

                <p className="mb-4">Cette répartition des responsabilités est similaire à celle qui s'applique pour d'autres réseaux comme l'eau ou l'électricité : le gestionnaire du réseau est responsable jusqu'au point d'entrée sur votre propriété, et vous êtes responsable de l'infrastructure sur votre terrain.</p>

                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Important :</p>
                  <p>Si le technicien de votre opérateur constate que le fourreau est bouché, il ne pourra pas finaliser l'installation de la fibre optique. Il vous proposera soit de réaliser vous-même les travaux de débouchage, soit de faire appel à une entreprise spécialisée. Dans tous les cas, un nouveau rendez-vous devra être pris une fois le fourreau débouché.</p>
                </div>
              </div>
            </section>

            {/* Prix du débouchage en autonomie */}
            <section id="prix-travaux-autonomie" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Prix du débouchage en autonomie : matériel et compétences nécessaires</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Si vous décidez de réaliser vous-même les travaux de débouchage, vous devrez prévoir l'achat ou la location du matériel nécessaire. Voici une estimation des coûts à prévoir :</p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b text-left">Matériel</th>
                        <th className="py-3 px-4 border-b text-left">Prix d'achat</th>
                        <th className="py-3 px-4 border-b text-left">Prix de location (journalier)</th>
                        <th className="py-3 px-4 border-b text-left">Utilité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b">Aiguille électromagnétique</td>
                        <td className="py-3 px-4 border-b">150€ - 300€</td>
                        <td className="py-3 px-4 border-b">30€ - 50€</td>
                        <td className="py-3 px-4 border-b">Détecter les points de blocage</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Furet de débouchage manuel</td>
                        <td className="py-3 px-4 border-b">50€ - 150€</td>
                        <td className="py-3 px-4 border-b">20€ - 40€</td>
                        <td className="py-3 px-4 border-b">Déboucher les obstructions légères</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Nettoyeur haute pression</td>
                        <td className="py-3 px-4 border-b">100€ - 500€</td>
                        <td className="py-3 px-4 border-b">40€ - 80€</td>
                        <td className="py-3 px-4 border-b">Hydrocurage pour éliminer les débris</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Caméra d'inspection</td>
                        <td className="py-3 px-4 border-b">200€ - 800€</td>
                        <td className="py-3 px-4 border-b">60€ - 100€</td>
                        <td className="py-3 px-4 border-b">Visualiser l'intérieur du fourreau</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Outils de terrassement</td>
                        <td className="py-3 px-4 border-b">Variable</td>
                        <td className="py-3 px-4 border-b">Variable</td>
                        <td className="py-3 px-4 border-b">Creuser pour accéder au fourreau si nécessaire</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4">Au-delà du coût du matériel, plusieurs facteurs doivent être pris en compte avant de vous lancer dans des travaux en autonomie :</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Compétences techniques requises</h3>
                    </div>
                    <p>Le débouchage d'un fourreau télécom nécessite des connaissances techniques spécifiques. Une mauvaise manipulation peut aggraver le problème ou endommager davantage l'infrastructure.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Risques de sécurité</h3>
                    </div>
                    <p>D'autres réseaux (eau, électricité, gaz) peuvent traverser votre terrain. Creuser sans connaître leur emplacement exact peut être dangereux et causer des dommages coûteux.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Temps nécessaire</h3>
                    </div>
                    <p>Les travaux de débouchage peuvent prendre plusieurs jours, surtout si vous n'êtes pas familier avec ce type d'intervention. Ce temps doit être pris en compte dans votre calcul de coût global.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Garantie de résultat</h3>
                    </div>
                    <p>Sans l'expérience nécessaire, il est difficile de garantir que le fourreau sera parfaitement débouché et prêt pour le passage de la fibre. Un échec peut entraîner des coûts supplémentaires.</p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="font-semibold">Attention :</p>
                  <p>Si vous décidez de réaliser vous-même les travaux, assurez-vous de localiser précisément les regards télécom sur votre propriété : celui qui fait la jonction entre le réseau public et votre réseau privé, et celui qui se trouve au départ de votre domicile. Sans cette localisation préalable, les travaux de débouchage seront impossibles.</p>
                </div>

                <p className="mb-4">En additionnant les coûts de location ou d'achat du matériel, le temps passé, et les éventuels matériaux nécessaires pour les réparations, le prix total d'un débouchage en autonomie peut varier considérablement, généralement entre 200€ et 800€ selon la complexité du problème.</p>
              </div>
            </section>

            {/* Prix d'une intervention professionnelle */}
            <section id="prix-intervention-pro" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Prix d'une intervention professionnelle</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Faire appel à une entreprise spécialisée pour le débouchage d'un fourreau télécom présente de nombreux avantages, notamment en termes de garantie de résultat et de rapidité d'exécution. Voici ce que vous devez savoir sur les tarifs pratiqués par les professionnels :</p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
                  <h3 className="text-xl font-bold mb-4">Pourquoi faire appel à un professionnel ?</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Expertise technique et matériel spécialisé adapté à chaque situation</li>
                    <li>Diagnostic précis du problème (localisation exacte du blocage, nature de l'obstruction)</li>
                    <li>Intervention rapide et efficace (généralement résolue en une journée)</li>
                    <li>Garantie de résultat (le fourreau sera effectivement débouché et prêt pour le passage de la fibre)</li>
                    <li>Sécurité (connaissance des normes et précautions à prendre)</li>
                    <li>Remise en état du terrain après intervention</li>
                  </ul>
                </div>

                <p className="mb-4">Les entreprises spécialisées dans le débouchage de fourreaux télécom proposent généralement des forfaits qui varient selon plusieurs critères :</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Distance du blocage</h3>
                    </div>
                    <p>Plus le point de blocage est éloigné ou difficile d'accès, plus l'intervention sera complexe et coûteuse.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Nature du terrain</h3>
                    </div>
                    <p>Une intervention sur un terrain meuble (terre, pelouse) sera moins coûteuse que sur une surface dure (béton, enrobé) nécessitant des travaux de démolition et de remise en état.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Complexité du blocage</h3>
                    </div>
                    <p>Un simple bouchon de terre sera plus facile à éliminer qu'un fourreau écrasé ou cassé nécessitant une réparation ou un remplacement.</p>
                  </div>
                </div>

                <p className="mb-4">En général, le prix d'une intervention professionnelle pour le débouchage d'un fourreau télécom se situe entre 300€ et 800€ pour une intervention standard. Ce prix peut augmenter en cas de difficultés particulières ou de travaux supplémentaires nécessaires.</p>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <p className="font-semibold">Bon à savoir :</p>
                  <p>Certaines entreprises proposent un diagnostic préalable (généralement entre 150€ et 250€) qui permet d'évaluer précisément la nature du problème et d'établir un devis détaillé. Ce montant est souvent déduit du prix total si vous confiez ensuite les travaux à la même entreprise.</p>
                </div>

                <div className="flex justify-center my-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-construction-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Demander un diagnostic
                  </Link>
                </div>
              </div>
            </section>

            {/* Nos tarifs détaillés */}
            <section id="tarifs-detailles" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nos tarifs détaillés pour le débouchage de fourreau</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-8">Chez Fibre Optique Travaux, nous proposons des forfaits transparents et adaptés à chaque situation. Voici le détail de nos prestations :</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
                  {/* Forfait Diagnostic */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-100 p-6 text-center border-b">
                      <h3 className="text-2xl font-bold text-gray-800">Diagnostic</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-construction-orange">230€</span>
                        <span className="text-gray-600"> TTC</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Détection du point de blocage</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Analyse de la nature du blocage</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Devis détaillé pour l'intervention</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Déductible du prix final si intervention</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact" className="block text-center w-full py-3 bg-construction-orange text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
                          Demander un diagnostic
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Forfait Standard */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 bg-construction-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      POPULAIRE
                    </div>
                    <div className="bg-gray-100 p-6 text-center border-b">
                      <h3 className="text-2xl font-bold text-gray-800">Intervention Standard</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-construction-orange">530€</span>
                        <span className="text-gray-600"> TTC</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Détection précise du point de blocage</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Débouchage complet du fourreau</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Pour surfaces molles (terre/pelouse)</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Remise en état du terrain</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Garantie de résultat</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact" className="block text-center w-full py-3 bg-construction-orange text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
                          Demander un devis
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Forfait Complexe */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-100 p-6 text-center border-b">
                      <h3 className="text-2xl font-bold text-gray-800">Intervention Complexe</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-construction-orange">710€</span>
                        <span className="text-gray-600"> TTC</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Détection précise du point de blocage</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Débouchage complet du fourreau</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Pour surfaces dures (béton/enrobé)</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Travaux de démolition et reconstruction</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Garantie de résultat</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Link href="/contact" className="block text-center w-full py-3 bg-construction-orange text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
                          Demander un devis
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                  <h3 className="text-xl font-bold mb-4">Autres prestations sur devis</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Installation de goulottes en façade</li>
                    <li>Tirage de câble en faux plafond ou dans les combles</li>
                    <li>Création de tranchée supplémentaire</li>
                    <li>Recherche de regard introuvable</li>
                    <li>Réparation ou remplacement de fourreau endommagé</li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Demander un devis personnalisé
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Facteurs de variation du prix */}
            <section id="facteurs-variation-prix" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Facteurs de variation du prix</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Plusieurs facteurs peuvent influencer le coût final d'une intervention de débouchage de fourreau télécom. Il est important de les connaître pour comprendre les éventuelles différences de prix entre les devis que vous pourriez recevoir :</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Longueur du fourreau</h3>
                    <p>Plus la distance entre le point de branchement optique (PBO) et votre domicile est importante, plus le coût peut être élevé. Un fourreau plus long présente davantage de risques de blocages multiples.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Accessibilité du terrain</h3>
                    <p>Un terrain difficile d'accès (pente, végétation dense, obstacles) peut compliquer l'intervention et augmenter le coût des travaux de débouchage.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Nature du blocage</h3>
                    <p>Un simple bouchon de terre sera moins coûteux à traiter qu'un fourreau écrasé nécessitant des travaux de remplacement. La nature et la gravité du blocage influencent directement le prix.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Urgence de l'intervention</h3>
                    <p>Une intervention en urgence (sous 24-48h) peut entraîner un surcoût par rapport à une intervention planifiée plusieurs jours à l'avance.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Localisation géographique</h3>
                    <p>Les tarifs peuvent varier selon les régions et la disponibilité des entreprises spécialisées dans votre secteur. Dans les zones rurales ou éloignées, les coûts peuvent être plus élevés.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Travaux complémentaires</h3>
                    <p>Si d'autres travaux sont nécessaires (remplacement de regard, création d'une nouvelle tranchée, installation de goulottes), le coût total sera plus élevé.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <p className="font-semibold">Conseil :</p>
                  <p>Pour obtenir le meilleur rapport qualité-prix, nous vous recommandons de demander plusieurs devis détaillés à des entreprises spécialisées. Assurez-vous que ces devis précisent bien l'étendue des travaux, les garanties offertes et les délais d'intervention.</p>
                </div>

                <p className="mb-4">N'oubliez pas que le prix ne doit pas être le seul critère de choix. L'expérience de l'entreprise, les avis clients, les garanties proposées et la qualité du matériel utilisé sont également des facteurs importants à prendre en compte.</p>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusion</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Le débouchage d'un fourreau télécom est une étape essentielle pour permettre le raccordement de votre domicile à la fibre optique. Bien que cette opération soit à la charge du propriétaire, plusieurs options s'offrent à vous :</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Réaliser les travaux vous-même : solution moins coûteuse en apparence (200€ à 800€), mais qui nécessite des compétences techniques, du matériel spécifique et n'offre pas de garantie de résultat.</li>
                  <li>Faire appel à un professionnel : solution plus sécurisante (300€ à 800€ pour une intervention standard), avec une garantie de résultat et une intervention rapide et efficace.</li>
                </ul>

                <p className="mb-4">Quelle que soit l'option choisie, il est important de traiter ce problème rapidement pour ne pas retarder davantage votre raccordement à la fibre optique. Un fourreau correctement débouché permettra non seulement l'installation de la fibre aujourd'hui, mais facilitera également les futures interventions ou mises à niveau de votre réseau.</p>

                <p className="mb-4">Chez Fibre Optique Travaux, nous disposons de l'expertise et du matériel nécessaires pour réaliser un débouchage efficace et durable de votre fourreau télécom. Notre équipe intervient rapidement dans toute la région PACA et vous garantit un résultat optimal pour permettre l'installation de votre fibre optique dans les meilleurs délais.</p>

                <div className="flex flex-col md:flex-row justify-center gap-4 my-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-construction-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Nous contacter pour un devis gratuit
                  </Link>
                  <Link href="/tarifs" className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Consulter tous nos tarifs
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                  <h3 className="text-xl font-bold mb-4">Vous avez des questions ?</h3>
                  <p className="mb-4">Notre équipe est à votre disposition pour répondre à toutes vos questions concernant le débouchage de fourreau télécom et vous accompagner dans votre projet de raccordement à la fibre optique.</p>
                  <div className="flex justify-center">
                    <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-construction-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
