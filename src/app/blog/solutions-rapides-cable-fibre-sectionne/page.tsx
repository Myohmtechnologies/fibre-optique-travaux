import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  const title = 'Comment sont réparées les fibres optiques coupées ou vandalisées';
  const description = "Découvrez les techniques professionnelles de réparation des fibres optiques coupées ou vandalisées : diagnostic, soudure par fusion et prévention. Guide complet pour comprendre et résoudre ce problème technique.";
  const canonical = 'https://fibreoptiquetravaux.fr/blog/solutions-rapides-cable-fibre-sectionne';
  const image = 'https://www.fibreoptiquetravaux.fr/images/blog/cable-fibre-sectionne.png';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    image,
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: { '@type': 'Organization', name: 'Fibre Optique Travaux', logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' } },
    datePublished: '2025-08-14',
    dateModified: '2025-08-14',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      images: ['/images/blog/cable-fibre-sectionne.png'],
      type: 'article',
    },
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function CableFibreSectionne() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <article className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* En-tête de l'article */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                <span className="mr-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime="2025-08-14">14 août 2025</time>
                </span>
                <span className="mr-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>8 min de lecture</span>
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span>Guide technique</span>
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6">Comment sont réparées les fibres optiques coupées ou vandalisées</h1>
              
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden mb-8">
                <Image 
                  src="/images/blog/cable-fibre-sectionne.png" 
                  alt="Câble fibre optique sectionné" 
                  fill 
                  className="object-cover" 
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Un câble fibre optique sectionné nécessite une intervention rapide et professionnelle</p>
                </div>
              </div>
            </div>
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-lg font-medium text-gray-700 mb-4">Un câble fibre optique sectionné, c'est l'assurance d'une perte de connexion Internet immédiate. Que ce soit à cause de travaux, d'un accident domestique ou d'un acte de vandalisme, la coupure peut paralyser votre activité personnelle ou professionnelle.</p>
              
              <p className="mb-4">La bonne nouvelle ? Ce problème est réparable, et dans la majorité des cas, la remise en service peut être rapide si vous adoptez les bons réflexes.</p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg my-6">
                <p className="font-medium text-gray-800 mb-2">Dans cet article, vous découvrirez :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Les causes les plus fréquentes d'une section de fibre</li>
                  <li>Les signes qui confirment que la coupure est bien physique</li>
                  <li>Les solutions rapides pour rétablir la connexion</li>
                  <li>Les mesures préventives pour éviter une nouvelle coupure</li>
                </ul>
              </div>
            </div>
            
            {/* Section 1: Causes les plus fréquentes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                Quelles sont les causes les plus fréquentes d'un câble fibre sectionné ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3 flex items-center">
                      <span className="inline-block w-6 h-6 bg-construction-orange rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">1</span>
                      Travaux publics ou privés
                    </h3>
                    <p className="text-gray-700">
                      Les travaux de voirie, de terrassement ou même de jardinage peuvent endommager les câbles enterrés.
                      Un coup de pelle mécanique ou de pioche mal placé, et la fibre est sectionnée.
                    </p>
                  </div>
                  
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3 flex items-center">
                      <span className="inline-block w-6 h-6 bg-construction-orange rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">2</span>
                      Rongeurs et nuisibles
                    </h3>
                    <p className="text-gray-700">
                      Certains rongeurs (rats, mulots) s'attaquent aux gaines et aux câbles, provoquant des coupures aléatoires.
                    </p>
                  </div>
                 
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3 flex items-center">
                      <span className="inline-block w-6 h-6 bg-construction-orange rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">3</span>
                      Usure ou vieillissement
                    </h3>
                    <p className="text-gray-700">
                      Avec le temps, l'enveloppe protectrice peut se fragiliser, surtout si la fibre est exposée aux intempéries.
                    </p>
                  </div>
                  
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3 flex items-center">
                      <span className="inline-block w-6 h-6 bg-construction-orange rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">4</span>
                      Vandalisme
                    </h3>
                    <p className="text-gray-700">
                      Dans certains cas, des coupures intentionnelles sont commises sur les réseaux extérieurs.
                    </p>
                  </div>
                  
                </div>
              </div>
            </section>
            
            {/* Section 2: Comment savoir si votre câble fibre est sectionné */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                Comment savoir si votre câble fibre est sectionné ?
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-construction-orange transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">Perte totale de connexion</h3>
                    </div>
                    <p className="text-gray-700">
                      Si plus aucun service Internet, TV ou téléphone ne fonctionne, la coupure est probablement physique.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-construction-orange transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">Voyants rouges sur la box</h3>
                    </div>
                    <p className="text-gray-700">
                      Le voyant "Fibre" ou "LOS" (Loss of Signal) clignote ou reste rouge fixe.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-construction-orange transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">Test avec un autre équipement</h3>
                    </div>
                    <p className="text-gray-700">
                      Si plusieurs appareils sont affectés, cela confirme que le problème ne vient pas d'un seul périphérique.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important :</strong> Avant de conclure à une coupure physique, vérifiez qu'il ne s'agit pas d'une panne générale dans votre quartier. Consultez le site de votre opérateur ou les réseaux sociaux pour voir si d'autres utilisateurs signalent des problèmes similaires.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 3: Que faire immédiatement */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Que faire immédiatement en cas de câble fibre sectionné ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
                    <div className="p-5 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-xl font-semibold text-neutral-dark flex items-center">
                        <span className="inline-block w-6 h-6 bg-red-500 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
                          1
                        </span>
                        Ne pas toucher au câble
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 mb-4">
                        Une fibre optique est extrêmement fragile : tenter une réparation artisanale peut rendre le câble irréparable.
                      </p>
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <p className="text-sm text-red-700">
                          <strong>Attention :</strong> Les fibres optiques sont des filaments de verre très fins. Les manipuler sans équipement spécialisé peut causer des blessures (micro-échardes) et endommager définitivement le câble.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="p-5 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-xl font-semibold text-neutral-dark flex items-center">
                        <span className="inline-block w-6 h-6 bg-red-500 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
                          2
                        </span>
                        Identifier l'emplacement de la coupure
                      </h3>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-construction-orange mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span>
                            <strong className="text-neutral-dark">À l'intérieur :</strong> souvent visible (câble arraché, sectionné net).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-construction-orange mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span>
                            <strong className="text-neutral-dark">À l'extérieur :</strong> nécessite un test avec un technicien ou un appareil OTDR (réflectomètre optique).
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
                    <div className="p-5 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-xl font-semibold text-neutral-dark flex items-center">
                        <span className="inline-block w-6 h-6 bg-red-500 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
                          3
                        </span>
                        Contacter rapidement l'opérateur
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 mb-4">
                        Déclarez le problème au service client.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-blue-700">
                          <strong>Astuce :</strong> précisez s'il y a eu des travaux récents ou un événement précis pour accélérer le diagnostic.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="p-5 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-xl font-semibold text-neutral-dark flex items-center">
                        <span className="inline-block w-6 h-6 bg-red-500 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
                          4
                        </span>
                        Faire appel à un professionnel de la fibre
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700">
                        Si l'opérateur ne prend pas en charge ou tarde à intervenir, une entreprise spécialisée peut réparer ou remplacer la section endommagée.
                      </p>
                      <div className="mt-4">
                        <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-construction-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          Contacter un spécialiste
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 4: Solutions rapides selon le type de coupure */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                Solutions rapides selon le type de coupure
              </h2>
              
              <div className="space-y-8">
                {/* Coupure à l'intérieur du logement */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-xl font-semibold text-neutral-dark">Coupure à l'intérieur du logement</h3>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2 text-neutral-dark">Solution temporaire</h4>
                        <p className="text-gray-700 mb-4">
                          Aucun vrai bricolage n'est recommandé sur fibre optique, mais on peut éviter d'aggraver la coupure en immobilisant les extrémités.
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                          <p className="text-sm text-yellow-700">
                            <strong>Important :</strong> Ne tentez pas de raccorder vous-même les fibres avec du ruban adhésif ou autre méthode artisanale. Cela ne fonctionnera pas et pourrait compliquer la réparation professionnelle ultérieure.
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2 text-neutral-dark">Solution définitive</h4>
                        <p className="text-gray-700 mb-4">
                          Remplacement du câble de la PTO (Prise Terminale Optique) à la box.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mb-4">
                          <p className="text-sm text-orange-800 mb-3">
                            <strong>Intervention spécialisée requise :</strong> Cette opération nécessite l'expertise d'un technicien qualifié pour garantir une réparation durable et conforme aux normes.
                          </p>
                          <Link 
                            href="/contact" 
                            className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contacter un spécialiste
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coupure dans le fourreau télécom */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-xl font-semibold text-neutral-dark">Coupure dans le fourreau télécom</h3>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2 text-neutral-dark">Solution rapide</h4>
                        <p className="text-gray-700 mb-4">
                          Localiser la zone endommagée via un test OTDR.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-700">
                            Un réflectomètre optique (OTDR) permet de déterminer avec précision l'emplacement de la coupure, ce qui évite de creuser inutilement.
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2 text-neutral-dark">Solution définitive</h4>
                        <p className="text-gray-700 mb-4">
                          Tirer un nouveau câble dans le fourreau.
                        </p>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <Link href="/blog/comment-deboucher-reparer-fourreau-gaine" className="text-construction-orange hover:text-orange-700 flex items-center font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            En savoir plus : Comment déboucher / réparer un fourreau télécom ?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coupure sur le domaine public */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-xl font-semibold text-neutral-dark">Coupure sur le domaine public</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 mb-4">
                      L'opérateur envoie une équipe pour effectuer une soudure sur le câble ou remplacer une portion entière.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-construction-orange text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm">
                          <strong>Bon à savoir :</strong> Si plusieurs habitations sont touchées par la coupure, l'opérateur interviendra plus rapidement car il s'agit d'un incident collectif.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 5: Les étapes techniques d'une réparation professionnelle */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </span>
                Les étapes techniques d'une réparation professionnelle
              </h2>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  {/* Étape 1 */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-construction-orange text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-dark">Diagnostic avec réflectomètre OTDR</h3>
                    </div>
                    <p className="text-gray-700">
                      L'appareil envoie un signal lumineux dans la fibre et identifie à quel mètre se situe la coupure.
                    </p>
                    <div className="mt-4">
                      <Image 
                        src="/images/blog/reflectometre-otdr.png" 
                        alt="Réflectomètre OTDR pour fibre optique" 
                        width={200}
                        height={150}
                        className="rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Étape 2 */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-construction-orange text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-dark">Préparation des fibres</h3>
                    </div>
                    <p className="text-gray-700">
                      Les extrémités sont nettoyées et coupées à l'aide d'une cliveuse pour obtenir une surface parfaite.
                    </p>
                    <div className="mt-4">
                      <Image 
                        src="/images/blog/cliveuse-fibre.png" 
                        alt="Cliveuse pour fibre optique" 
                        width={200}
                        height={150}
                        className="rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Étape 3 */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-construction-orange text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-dark">Soudure par fusion</h3>
                    </div>
                    <p className="text-gray-700">
                      Une soudeuse à fibre optique aligne les deux extrémités et les fusionne avec un arc électrique précis.
                    </p>
                    <div className="mt-4">
                      <Image 
                        src="/images/blog/soudeuse-fibre.png" 
                        alt="Soudeuse à fibre optique" 
                        width={200}
                        height={150}
                        className="rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Étape 4 */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-construction-orange text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-dark">Protection et étanchéité</h3>
                    </div>
                    <p className="text-gray-700">
                      La soudure est protégée par un manchon thermo-rétractable, puis placée dans un boîtier étanche.
                    </p>
                    <div className="mt-4">
                      <Image 
                        src="/images/blog/protection-soudure-fibre.png" 
                        alt="Protection d'une soudure fibre optique" 
                        width={200}
                        height={150}
                        className="rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 6: Coûts de réparation */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clipRule="evenodd" />
                  </svg>
                </span>
                Combien coûte la réparation d'une fibre sectionnée ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Soudure simple */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-green-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Soudure simple</h3>
                        <p className="text-sm text-gray-600">Raccordement direct des fibres</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-construction-orange">95€</span>
                      <span className="text-gray-500 ml-1">TTC</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Coupure avec mou de câble suffisant
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Soudure directe des fibres optiques
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Test de qualité du signal
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Intervention rapide (2-3h)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Retirage de câble */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-orange-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Retirage de câble</h3>
                        <p className="text-sm text-gray-600">Remplacement de section complète</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-construction-orange">195€</span>
                      <span className="text-gray-500 ml-1">TTC</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Mou de câble insuffisant pour soudure
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tirage de nouveau câble entre poteaux
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Raccordement aux deux extrémités
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Intervention complexe (4-6h)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Comment savoir quel type de réparation est nécessaire ?
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Notre technicien détermine sur place s'il reste suffisamment de mou de câble pour effectuer une soudure simple. Si la coupure se situe dans une zone tendue (entre deux points d'ancrage), un retirage complet sera nécessaire.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Besoin d'un devis personnalisé ?</h3>
                    <p className="text-gray-700 mb-4">
                      Les prix peuvent varier selon la complexité de l'intervention, l'accessibilité et la longueur de câble à remplacer. Contactez-nous pour une évaluation précise adaptée à votre situation.
                    </p>
                    <Link href="/tarifs" className="inline-flex items-center px-4 py-2 bg-construction-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      Demander un devis gratuit
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 7: Prévention des coupures */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </span>
                Comment prévenir les coupures de fibre optique ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Colonne 1 */}
                <div>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4">Pour les particuliers</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Manipulez avec précaution</p>
                          <p className="text-gray-700 text-sm mt-1">Ne pliez jamais un câble fibre optique à angle aigu et évitez de le pincer.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Protégez les câbles exposés</p>
                          <p className="text-gray-700 text-sm mt-1">Utilisez des goulottes ou des protections pour les câbles qui passent dans des zones à risque.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Documentez l'installation</p>
                          <p className="text-gray-700 text-sm mt-1">Gardez un plan des passages de câbles pour éviter de les endommager lors de futurs travaux.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Colonne 2 */}
                <div>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4">Pour les professionnels</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Consultez les DT-DICT</p>
                          <p className="text-gray-700 text-sm mt-1">Avant tous travaux de terrassement, consultez les Déclarations de Travaux et les DICT pour connaître l'emplacement des réseaux.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Utilisez des techniques adaptées</p>
                          <p className="text-gray-700 text-sm mt-1">Privilégiez les techniques douces comme l'aspiration ou le terrassement manuel à proximité des réseaux.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Formez les équipes</p>
                          <p className="text-gray-700 text-sm mt-1">Assurez-vous que tous les intervenants sont formés aux spécificités des réseaux fibre optique.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Rappel important :</strong> En cas de travaux à proximité de réseaux télécoms, la réglementation impose de faire une Déclaration de Travaux (DT) et une Déclaration d'Intention de Commencement de Travaux (DICT) sur le site <a href="https://www.reseaux-et-canalisations.ineris.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-800">reseaux-et-canalisations.ineris.fr</a>.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 8: FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-construction-orange rounded-full mr-3 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                Questions fréquentes
              </h2>
              
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
                  <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-neutral-dark">
                    <span>Puis-je réparer moi-même un câble fibre optique sectionné ?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">
                      Non, la réparation d'un câble fibre optique nécessite un équipement spécialisé (soudeuse à fibre optique) et une expertise technique. Les fibres optiques sont des filaments de verre ou de plastique très fins qui transmettent des données par impulsions lumineuses. Une réparation amateur ne permettra pas de rétablir la connexion et pourrait même aggraver le problème.
                    </p>
                  </div>
                </details>
                
                <details className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
                  <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-neutral-dark">
                    <span>Combien de temps dure une intervention pour réparer une fibre sectionnée ?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">
                      La durée dépend du type de coupure :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Pour une coupure à l'intérieur du logement : 1 à 2 heures</li>
                      <li>Pour une coupure dans le jardin ou terrain privé : 2 à 4 heures</li>
                      <li>Pour une coupure sur le domaine public nécessitant des travaux de terrassement : 1 à plusieurs jours selon la complexité</li>
                    </ul>
                  </div>
                </details>
                
                <details className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
                  <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-neutral-dark">
                    <span>Qui prend en charge les frais de réparation d'une fibre sectionnée ?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">
                      La prise en charge dépend de la cause et de l'emplacement de la coupure :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Si la coupure est due à un défaut d'installation initial : prise en charge par l'opérateur</li>
                      <li>Si la coupure est sur le domaine public et non causée par vous : prise en charge par l'opérateur</li>
                      <li>Si la coupure est sur votre propriété et causée par vous : à votre charge</li>
                      <li>Si la coupure est causée par un tiers identifié (entreprise de travaux par exemple) : à la charge du responsable</li>
                    </ul>
                  </div>
                </details>
                
                <details className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
                  <summary className="p-5 cursor-pointer flex items-center justify-between font-medium text-neutral-dark">
                    <span>Mon opérateur refuse d'intervenir, que faire ?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">
                      Si votre opérateur refuse d'intervenir, plusieurs options s'offrent à vous :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Faire une réclamation écrite auprès du service client de votre opérateur</li>
                      <li>Saisir le médiateur des communications électroniques</li>
                      <li>Contacter une entreprise spécialisée comme la nôtre pour réaliser un diagnostic et une réparation</li>
                      <li>Signaler le problème à l'ARCEP (Autorité de Régulation des Communications Électroniques et des Postes)</li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>
            
            {/* Section 9: Conclusion et CTA */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-neutral-dark mb-4">Besoin d'une intervention rapide pour votre fibre sectionnée ?</h2>
                <p className="text-gray-700 mb-6">
                  Une coupure de fibre optique peut être frustrante, mais avec l'intervention des bons professionnels, vous pouvez retrouver rapidement votre connexion. Notre équipe spécialisée dispose de l'équipement nécessaire pour localiser précisément la coupure et effectuer une réparation durable, que ce soit à l'intérieur de votre logement ou sur votre terrain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-construction-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Demander une intervention
                  </Link>
                  <Link href="/tarifs" className="inline-flex items-center justify-center px-6 py-3 bg-white text-construction-orange border border-construction-orange font-medium rounded-lg hover:bg-orange-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
                    </svg>
                    Consulter nos tarifs
                  </Link>
                </div>
              </div>
            </section>
            
            {/* Section 10: Articles liés */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6">Articles liés</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/blog/comment-deboucher-reparer-fourreau-gaine" className="group">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image 
                        src="/images/blog/debouchage-fourreau-telecom.jpg" 
                        alt="Comment déboucher un fourreau télécom" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-neutral-dark group-hover:text-construction-orange transition-colors">Comment déboucher / réparer un fourreau télécom ?</h3>
                      <p className="text-gray-600 text-sm mt-2">Découvrez les techniques pour déboucher efficacement un fourreau télécom obstrué.</p>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/top-5-causes-blocage-fourreau-telecom" className="group">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image 
                        src="/images/blog/causes-blocage-fourreau.jpg" 
                        alt="Causes de blocage dans un fourreau télécom" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-neutral-dark group-hover:text-construction-orange transition-colors">Top 5 causes de blocage dans un fourreau télécom</h3>
                      <p className="text-gray-600 text-sm mt-2">Identifiez les principales causes de blocage dans les fourreaux télécom et leurs solutions.</p>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/comment-localiser-regard-telecom-introuvable" className="group">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image 
                        src="/images/blog/localisation-regard-telecom.jpg" 
                        alt="Localisation d'un regard télécom" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-neutral-dark group-hover:text-construction-orange transition-colors">Comment localiser un regard télécom introuvable ?</h3>
                      <p className="text-gray-600 text-sm mt-2">Méthodes et outils pour retrouver un regard télécom enterré ou dissimulé.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
