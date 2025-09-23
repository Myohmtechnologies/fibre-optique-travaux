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
    headline: 'Qui appeler pour le débouchage d\'un fourreau télécom ?',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/debouchage-fourreau-telecom.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-07',
    dateModified: '2025-08-07',
    description: 'Fourreau télécom bouché ? Découvrez quel professionnel contacter pour déboucher votre gaine et permettre le raccordement à la fibre optique. Expertise et solutions garanties.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/qui-appeler-debouchage-fourreau-telecom' },
  };

  return {
    title: 'Qui Appeler pour Déboucher un Fourreau Télécom ? | Guide Expert',
    description: 'Fourreau télécom bouché empêchant le raccordement fibre ? Découvrez quel professionnel spécialisé contacter pour un débouchage efficace et durable de votre gaine télécom.',
    openGraph: {
      title: 'Qui Appeler pour Déboucher un Fourreau Télécom ? | Guide Expert',
      description: 'Fourreau télécom bouché empêchant le raccordement fibre ? Découvrez quel professionnel spécialisé contacter pour un débouchage efficace et durable de votre gaine télécom.',
      images: ['/images/blog/debouchage-fourreau-telecom.jpg'],
      type: 'article',
    },
    keywords: 'débouchage fourreau télécom, entreprise débouchage fourreau, gaine télécom bouchée, raccordement fibre optique, fourreau bouché, aiguille de tirage, détection fourreau',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function DebouchageArticle() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-16">
            {/* Breadcrumbs */}
            <nav className="mb-8">
              <ol className="flex flex-wrap items-center space-x-0 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center font-medium text-gray-500 hover:text-construction-orange">Accueil</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/blog" className="font-medium text-gray-500 hover:text-construction-orange">Blog</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="font-medium text-gray-800">Débouchage fourreau télécom</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Qui appeler pour le débouchage d'un fourreau télécom ?</h1>
              <p className="text-lg text-gray-600">Face à un fourreau télécom bouché, découvrez quel professionnel contacter pour résoudre efficacement ce problème et permettre votre raccordement à la fibre optique.</p>
            </header>

            {/* Main Image */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="/images/blog/debouchage-fourreau-telecom.jpg" alt="Débouchage d'un fourreau télécom par un professionnel" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>

            {/* Table des matières */}
            <div className="max-w-4xl mx-auto mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Table des matières</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#conditions" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Les conditions pour un raccordement fibre réussi
                  </a>
                </li>
                <li>
                  <a href="#causes" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Pourquoi un fourreau télécom se bouche-t-il ?
                  </a>
                </li>
                <li>
                  <a href="#qui-appeler" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Qui appeler pour déboucher un fourreau télécom ?
                  </a>
                </li>
                <li>
                  <a href="#moyens-techniques" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Les moyens techniques d'une entreprise spécialisée
                  </a>
                </li>
                <li>
                  <a href="#travaux" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    La réalisation des travaux
                  </a>
                </li>
              </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Pour effectuer votre raccordement à la fibre optique, votre opérateur Internet mandate un technicien chargé de faire la jonction entre le domaine public et votre propriété. Ce technicien doit emprunter le cheminement du fourreau télécom qui traverse votre terrain pour acheminer la fibre jusqu'à votre logement.</p>
                <p className="mb-4">Cependant, ce raccordement n'est possible que si votre gaine télécom est saine et dégagée. Si des obstacles obstruent le passage, le technicien ne pourra pas finaliser l'installation et repartira sans avoir effectué le raccordement.</p>
                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Important :</p>
                  <p>En cas de fourreau bouché, c'est à vous qu'il revient de faire appel à une entreprise spécialisée dans le débouchage de fourreau télécom. Votre opérateur ne prendra pas en charge ces travaux.</p>
                </div>
                <p>Dans cet article, nous vous expliquons pourquoi un fourreau peut se boucher et surtout, quel professionnel contacter pour résoudre efficacement ce problème et permettre enfin votre raccordement à la fibre optique.</p>
              </div>
            </section>

            {/* Call to Action 1 */}
            <div className="max-w-4xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Besoin d'un diagnostic précis ?</h3>
                  <p className="text-gray-600">Notre équipe peut localiser avec précision le point de blocage dans votre fourreau télécom et vous proposer une solution adaptée.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/diagnostic" className="inline-block px-6 py-3 bg-construction-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                    Demander un diagnostic
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Les conditions pour un raccordement fibre réussi */}
            <section id="conditions" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Les conditions pour un raccordement fibre réussi</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Que vous soyez un particulier, une entreprise ou une collectivité, le principe de raccordement à la fibre optique suit toujours le même processus en deux étapes :</p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    Déploiement du réseau public
                  </h3>
                  <p>Vous attendez que les intervenants externes (État, collectivités et opérateurs Internet) déploient le réseau dans votre commune et installent un point de branchement au réseau public, à proximité de votre habitation.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    Raccordement final
                  </h3>
                  <p>Votre opérateur Internet mandate un technicien pour tirer un câble de fibre optique entre le point situé sur le domaine public et votre logement.</p>
                </div>
                
                <p className="mb-4">Pour cette seconde étape, le technicien de votre opérateur a besoin d'accéder à votre regard télécom, ainsi qu'à la gaine qui contient votre réseau de communication actuel.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">Bon à savoir :</p>
                  <p>Au fil du temps, votre infrastructure télécom a pu se détériorer et se boucher. Si le fourreau n'est pas dégagé le jour du passage du technicien, celui-ci repartira sans avoir effectué le raccordement.</p>
                </div>
                
                <p>Vous devrez alors faire appel à une entreprise spécialisée dans le débouchage de fourreau, avant de reconvoquer le technicien de votre opérateur pour finaliser le raccordement.</p>
              </div>
            </section>

            {/* Pourquoi un fourreau télécom se bouche-t-il ? */}
            <section id="causes" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi un fourreau télécom se bouche-t-il ?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Depuis l'installation de votre fourreau télécom jusqu'à la date de raccordement de la fibre, de nombreux facteurs peuvent altérer votre gaine et provoquer des obstructions.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">L'évolution naturelle du terrain</h3>
                    </div>
                    <p>Le sol évolue avec le temps sous l'effet des conditions météorologiques et de l'hygrométrie. Les périodes de sécheresse ou d'humidité importante peuvent provoquer des tassements ou affaissements du terrain. La pousse des végétaux est également une cause majeure : les racines peuvent écraser la gaine, la percer et même la boucher complètement.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Les aménagements modifiant le sous-sol</h3>
                    </div>
                    <p>Toute modification en surface de votre propriété peut avoir un impact sur votre fourreau télécom : création d'une allée ou d'une terrasse, aménagement d'un terreplein, pose d'une piscine, etc. Ces travaux peuvent écraser, déplacer ou endommager les gaines souterraines.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-construction-orange rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Les malfaçons d'installation</h3>
                  </div>
                  <p>Il arrive parfois qu'un mauvais manchonnage permettant de joindre deux gaines s'avère défectueux et laisse la terre s'infiltrer. De même, une installation initiale de qualité médiocre peut entraîner des problèmes à long terme : gaines trop fines, coudes trop prononcés, absence de fil d'aiguillage, etc.</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Important :</p>
                  <p>Quelle que soit la cause du blocage, il est essentiel de faire appel à un professionnel qualifié pour diagnostiquer précisément le problème et proposer la solution la plus adaptée.</p>
                </div>
              </div>
            </section>

            {/* Call to Action 2 */}
            <div className="max-w-4xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Fourreau bouché ? N'attendez plus !</h3>
                  <p className="text-gray-600">Contactez-nous pour une intervention rapide et professionnelle. Nous intervenons partout en France.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact" className="inline-block px-6 py-3 bg-construction-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>

            {/* Qui appeler pour déboucher un fourreau télécom ? */}
            <section id="qui-appeler" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Qui appeler pour déboucher un fourreau télécom ?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Face à un fourreau télécom bouché, plusieurs options s'offrent à vous. Voici les différents professionnels que vous pouvez solliciter, avec leurs avantages et inconvénients :</p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">1. Une entreprise spécialisée en travaux télécom</h3>
                  <div className="pl-5 border-l-4 border-green-500 mb-4">
                    <p className="font-semibold text-green-700">Avantages :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Expertise spécifique dans les infrastructures de télécommunications</li>
                      <li>Matériel adapté aux fourreaux de petits diamètres</li>
                      <li>Connaissance des normes et réglementations télécom</li>
                      <li>Capacité à réaliser des travaux complémentaires si nécessaire</li>
                    </ul>
                  </div>
                  <div className="pl-5 border-l-4 border-red-400">
                    <p className="font-semibold text-red-700">Inconvénients :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tarifs potentiellement plus élevés qu'un plombier</li>
                      <li>Délais d'intervention variables selon la disponibilité</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">2. Un plombier ou spécialiste du débouchage</h3>
                  <div className="pl-5 border-l-4 border-green-500 mb-4">
                    <p className="font-semibold text-green-700">Avantages :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Disponibilité rapide et intervention d'urgence possible</li>
                      <li>Expérience dans le débouchage de canalisations</li>
                      <li>Tarifs généralement plus accessibles</li>
                    </ul>
                  </div>
                  <div className="pl-5 border-l-4 border-red-400">
                    <p className="font-semibold text-red-700">Inconvénients :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Matériel parfois inadapté aux fourreaux télécom (trop gros, trop rigide)</li>
                      <li>Manque de connaissance spécifique des infrastructures télécom</li>
                      <li>Risque d'endommager davantage le fourreau</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">3. Une entreprise de travaux publics</h3>
                  <div className="pl-5 border-l-4 border-green-500 mb-4">
                    <p className="font-semibold text-green-700">Avantages :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Capacité à réaliser des travaux de terrassement importants si nécessaire</li>
                      <li>Moyens techniques conséquents</li>
                      <li>Expérience dans les réseaux enterrés</li>
                    </ul>
                  </div>
                  <div className="pl-5 border-l-4 border-red-400">
                    <p className="font-semibold text-red-700">Inconvénients :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Coût élevé des interventions</li>
                      <li>Solutions souvent invasives (creusement de tranchée)</li>
                      <li>Délais d'intervention généralement longs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">Notre recommandation :</p>
                  <p>Pour un débouchage de fourreau télécom efficace et sans risque, nous vous conseillons de faire appel à une entreprise spécialisée en travaux télécom. Ces professionnels disposent du matériel adapté et de l'expertise nécessaire pour résoudre votre problème sans endommager vos infrastructures.</p>
                </div>
              </div>
            </section>

            {/* Les moyens techniques d'une entreprise spécialisée */}
            <section id="moyens-techniques" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Les moyens techniques d'une entreprise spécialisée</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Une entreprise spécialisée dans le débouchage de fourreaux télécom dispose d'un équipement spécifique et de techniques éprouvées pour résoudre efficacement votre problème. Voici les principaux moyens techniques utilisés :</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Caméra d'inspection</h3>
                    </div>
                    <p>Avant toute intervention, un technicien utilise une caméra d'inspection pour visualiser l'intérieur du fourreau. Cette étape permet d'identifier précisément la nature et la localisation du blocage, ainsi que l'état général de la gaine.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Sondes électriques</h3>
                    </div>
                    <p>Des sondes électriques permettent de localiser avec précision le parcours du fourreau sous terre et de détecter d'éventuels écrasements ou ruptures qui ne seraient pas visibles à la caméra. Cette technique non invasive évite de creuser inutilement.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Furets et cannes de débouchage</h3>
                    </div>
                    <p>Pour éliminer les obstructions, les techniciens utilisent des furets spécialement conçus pour les fourreaux télécom. Ces outils souples et de diamètre adapté permettent de naviguer dans les coudes sans endommager la gaine, tout en délogeant efficacement les obstacles.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Hydrocureuse haute pression</h3>
                    </div>
                    <p>Pour les obstructions tenaces, l'hydrocureuse projette de l'eau à haute pression dans le fourreau. Cette technique permet de déloger efficacement la terre, le sable ou les débris végétaux qui obstruent la gaine, sans risquer de l'endommager.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-construction-orange rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Aiguillage et pose de fil de tirage</h3>
                  </div>
                  <p>Une fois le fourreau débouché, les techniciens installent un fil d'aiguillage (ou fil de tirage) qui permettra au technicien de votre opérateur de tirer facilement le câble de fibre optique lors de son intervention. Cette étape finale garantit que votre raccordement pourra se faire sans difficulté.</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Important :</p>
                  <p>Après l'intervention, demandez toujours un rapport détaillé avec photos ou vidéos avant/après. Ce document vous sera utile pour prouver à votre opérateur que le fourreau est désormais fonctionnel et prêt pour le passage de la fibre optique.</p>
                </div>
              </div>
            </section>

            {/* Call to Action 3 */}
            <div className="max-w-4xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Besoin d'une intervention professionnelle ?</h3>
                  <p className="text-gray-600">Nos techniciens spécialisés disposent de tout l'équipement nécessaire pour déboucher votre fourreau télécom rapidement et efficacement.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact" className="inline-block px-6 py-3 bg-construction-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>

            {/* La réalisation des travaux */}
            <section id="travaux" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">La réalisation des travaux</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Le débouchage d'un fourreau télécom suit un processus précis qui garantit l'efficacité de l'intervention tout en préservant l'intégrité de votre infrastructure. Voici les étapes clés d'une intervention professionnelle :</p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    Diagnostic initial
                  </h3>
                  <p>Le technicien commence par localiser précisément votre fourreau télécom et ses points d'accès (regards). Il procède ensuite à une inspection visuelle et technique pour déterminer la nature exacte du problème : obstruction partielle ou totale, écrasement, rupture, etc.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    Choix de la technique appropriée
                  </h3>
                  <p>En fonction du diagnostic, le technicien détermine la méthode la plus adaptée : utilisation d'un furet, nettoyage à haute pression, ou dans les cas les plus complexes, ouverture d'une tranchée pour remplacer une section endommagée.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    Exécution des travaux
                  </h3>
                  <p>L'intervention est réalisée avec précaution pour ne pas endommager davantage le fourreau. Dans la majorité des cas, les techniques non invasives sont privilégiées pour éviter de creuser votre terrain.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                    Vérification et test
                  </h3>
                  <p>Une fois le débouchage effectué, le technicien procède à un test d'aiguillage pour s'assurer que le fourreau est parfaitement dégagé sur toute sa longueur. Il installe ensuite un fil de tirage qui facilitera le passage futur de la fibre optique.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                    Rapport d'intervention
                  </h3>
                  <p>Pour conclure l'intervention, vous recevez un rapport détaillé avec photos ou vidéos avant/après, attestant du bon état de votre fourreau. Ce document est essentiel pour prouver à votre opérateur que l'infrastructure est prête pour le raccordement.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">Délai d'intervention :</p>
                  <p>En fonction de la complexité du problème, une intervention standard dure généralement entre 2 et 4 heures. Dans les cas plus complexes nécessitant des travaux de terrassement, l'intervention peut s'étaler sur une journée entière.</p>
                </div>
              </div>
            </section>

            {/* Section tarifs */}
            <section id="tarifs" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Tarifs pour le débouchage d'un fourreau télécom</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-construction-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Diagnostic</h3>
                  <p className="text-3xl font-bold text-center mb-4">230€</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Inspection caméra du fourreau
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Localisation du point de blocage
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Rapport détaillé avec photos
                    </li>
                  </ul>
                  <Link href="/contact" className="block text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors w-full">
                    Demander un diagnostic
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-2 border-construction-orange shadow-md hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-construction-orange text-white text-sm py-1 px-3 rounded-full">
                    Le plus demandé
                  </div>
                  <div className="bg-construction-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Intervention standard</h3>
                  <p className="text-3xl font-bold text-center mb-4">530€</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Débouchage complet du fourreau
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Pose d'un fil de tirage
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Pour surfaces molles (terre/pelouse)
                    </li>
                  </ul>
                  <Link href="/contact" className="block text-center py-2 px-4 bg-construction-orange hover:bg-orange-600 text-white rounded-md transition-colors w-full">
                    Demander un devis
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-construction-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Intervention complexe</h3>
                  <p className="text-3xl font-bold text-center mb-4">710€</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Débouchage complet du fourreau
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Pour surfaces dures (béton/enrobé)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Remise en état incluse
                    </li>
                  </ul>
                  <Link href="/contact" className="block text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors w-full">
                    Demander un devis
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Autres prestations sur devis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <p>Installation de goulottes</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <p>Tirage de câble en faux plafond/combles</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <p>Création de tranchée supplémentaire</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <p>Recherche de regard introuvable</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusion</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Le débouchage d'un fourreau télécom est une étape cruciale pour permettre le raccordement de votre domicile à la fibre optique. Face à ce problème technique, il est essentiel de faire appel à des professionnels compétents et équipés pour intervenir efficacement.</p>
                
                <p className="mb-4">Les entreprises spécialisées dans les infrastructures télécom représentent le meilleur choix pour ce type d'intervention, car elles disposent des compétences techniques spécifiques et des équipements adaptés pour résoudre votre problème sans endommager vos installations.</p>
                
                <p className="mb-4">N'oubliez pas que le coût d'une intervention professionnelle est un investissement qui vous évitera des désagréments futurs et vous permettra de profiter pleinement de votre connexion fibre optique. De plus, une intervention réalisée dans les règles de l'art vous garantit que votre opérateur pourra finaliser votre raccordement sans difficulté.</p>
                
                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Conseil final :</p>
                  <p>N'attendez pas que votre opérateur vous signale un problème de fourreau bouché pour agir. Si vous constatez que votre terrain a subi des modifications importantes depuis l'installation de votre infrastructure télécom, ou si votre habitation est ancienne, anticipez en faisant vérifier l'état de votre fourreau avant de souscrire à une offre fibre.</p>
                </div>
              </div>
            </section>

            {/* Call to Action final */}
            <div className="max-w-4xl mx-auto mb-16 bg-construction-orange p-8 rounded-lg shadow-md text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Besoin d'un débouchage de fourreau télécom ?</h3>
                  <p>Nos techniciens spécialisés interviennent dans toute la région PACA pour débloquer votre raccordement fibre optique. Diagnostic précis, intervention rapide, résultat garanti.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact" className="inline-block px-6 py-3 bg-white text-construction-orange font-medium rounded-md hover:bg-gray-100 transition-colors">
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>

            {/* Articles similaires */}
            <div className="border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">À lire également</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                  <Link href="/blog/detection-regard-ptt" className="block">
                    <div className="relative h-48">
                      <Image src="/images/blog/detection-regard-ptt.jpeg" alt="Détection regard PTT" fill style={{objectFit: "cover"}}/>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 hover:text-construction-orange">Pourquoi réaliser la détection de votre regard PTT ?</h3>
                      <p className="text-sm text-gray-600 mt-2">Un regard PTT introuvable bloque votre raccordement ? Découvrez pourquoi et comment nos experts le localisent rapidement.</p>
                    </div>
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                  <Link href="/blog/comment-deboucher-reparer-fourreau-gaine" className="block">
                    <div className="relative h-48">
                      <Image src="/images/blog/debouchage-fourreau.jpg" alt="Déboucher un fourreau télécom" fill style={{objectFit: "cover"}}/>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 hover:text-construction-orange">Comment déboucher un fourreau bloqué ?</h3>
                      <p className="text-sm text-gray-600 mt-2">Le guide complet pour comprendre, localiser et résoudre un problème de gaine ou fourreau bouché.</p>
                    </div>
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                  <Link href="/blog/pourquoi-confier-travaux-telecom-entreprise" className="block">
                    <div className="relative h-48">
                      <Image src="/images/nos-service.png" alt="Pourquoi confier ses travaux télécom à une entreprise" fill style={{objectFit: "cover"}}/>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 hover:text-construction-orange">Pourquoi confier vos travaux télécom à notre entreprise ?</h3>
                      <p className="text-sm text-gray-600 mt-2">Découvrez notre expertise et notre garantie de réussite à 100% pour votre raccordement fibre optique.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
