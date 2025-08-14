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
    headline: 'Travaux pour le raccordement fibre optique : guide complet',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/tranchee-fibre-optique.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-14',
    dateModified: '2025-08-14',
    description: 'Le guide complet des travaux nécessaires pour le raccordement à la fibre optique : tranchée, débouchage de fourreau, réparation de câble et détection de regard.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/travaux-raccordement-fibre-optique-guide-complet' },
  };

  return {
    title: 'Travaux Raccordement Fibre Optique : Le Guide Complet',
    description: 'Découvrez tous les travaux nécessaires pour un raccordement fibre réussi : tranchée, débouchage de fourreau, réparation de câble. Guide complet, étapes et coûts.',
    openGraph: {
      title: 'Travaux Raccordement Fibre Optique : Le Guide Complet',
      description: 'Découvrez tous les travaux nécessaires pour un raccordement fibre réussi : tranchée, débouchage de fourreau, réparation de câble. Guide complet, étapes et coûts.',
      images: ['/images/blog/tranchee-fibre-optique.jpg'],
      type: 'article',
    },
    keywords: 'travaux fibre optique, raccordement fibre, tranchée fibre, débouchage fourreau, réparation câble fibre, guide complet',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function TravauxFibreGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {/* Fil d'Ariane */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center font-medium text-gray-500 hover:text-construction-orange">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Accueil
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link href="/blog" className="ms-1 font-medium text-gray-500 hover:text-construction-orange md:ms-2">Blog</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ms-1 font-medium text-gray-800 md:ms-2">Guide des travaux fibre</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* En-tête de l'article */}
            <header className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Travaux pour le raccordement fibre optique : guide complet</h1>
              <p className="text-lg text-gray-600">Un guide de référence pour comprendre, préparer et sécuriser tous les travaux préparatoires à l'installation de la fibre optique.</p>
            </header>

            {/* Image principale */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image 
                src="/images/blog/probleme-installation-fibre.jpg" 
                alt="Guide complet sur les travaux de raccordement à la fibre optique" 
                fill
                style={{objectFit: "cover"}}
                className="rounded-xl"
                priority
              />
            </div>

            {/* Introduction */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Le raccordement à la fibre optique est une étape essentielle pour accéder à l’internet très haut débit. Cependant, l'intervention du technicien de votre opérateur (Orange, SFR, Bouygues, Free) peut être bloquée si le passage du câble est impossible. Ce guide détaille tous les travaux préparatoires qui peuvent être nécessaires pour assurer un raccordement réussi.
            </p>
            
            {/* Table des matières */}
            <div className="bg-gray-50 p-6 rounded-lg mx-8 mb-10 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Sommaire
              </h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><a href="#tranchee" className="text-construction-orange hover:underline">La tranchée pour la fibre : quand et comment ?</a></li>
                <li><a href="#fourreau" className="text-construction-orange hover:underline">Fourreau télécom bouché : le problème n°1</a></li>
                <li><a href="#regard" className="text-construction-orange hover:underline">Regard France Télécom introuvable</a></li>
                <li><a href="#cable" className="text-construction-orange hover:underline">Câble fibre optique endommagé</a></li>
              </ol>
            </div>
            
            {/* Section Points Clés */}
            <section className="px-8 mb-12">
              <div className="bg-amber-50 border-l-4 border-construction-orange p-6 rounded-r-lg">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Les points clés à retenir</h2>
                <ul className="list-none space-y-3">
                  <li><strong className="font-semibold">Tranchée :</strong> Indispensable si aucun fourreau n'existe pour protéger le câble.</li>
                  <li><strong className="font-semibold">Fourreau bouché :</strong> Un obstacle fréquent qui nécessite une intervention spécialisée (air comprimé, hydrocurage).</li>
                  <li><strong className="font-semibold">Regard introuvable :</strong> La détection professionnelle évite de creuser au hasard.</li>
                  <li><strong className="font-semibold">Câble endommagé :</strong> La réparation (soudure optique) doit être faite par un expert.</li>
                </ul>
                <p className="mt-4 mb-0">Anticiper ces travaux, c'est la garantie d'un raccordement fibre rapide et sans stress.</p>
              </div>
            </section>

            {/* Section 1 */}
            <section id="tranchee" className="px-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. La tranchée pour la fibre : quand et comment ?</h2>
              
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Si votre logement est neuf ou si aucune infrastructure souterraine n'existe, la création d'une tranchée est la première étape. Elle consiste à creuser un fossé de faible profondeur (généralement entre 30 et 50 cm) entre le point de branchement optique (PBO) sur la voie publique et votre domicile.
                </p>
                
                <h3>Caractéristiques techniques :</h3>
                <ul>
                  <li><strong>Profondeur :</strong> Assez pour protéger la gaine des chocs et du gel.</li>
                  <li><strong>Gaine TPC :</strong> Une gaine rouge est obligatoirement posée pour protéger le câble.</li>
                  <li><strong>Grillage avertisseur :</strong> Un grillage de couleur verte est placé au-dessus de la gaine pour signaler sa présence lors de futurs travaux de terrassement.</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="font-medium">C'est une opération qui requiert une autorisation de voirie si elle empiète sur le domaine public.</p>
                </div>
              </div>
            </section>
            
            {/* CTA après section 1 */}
            <div className="bg-construction-orange p-6 rounded-lg mx-8 mb-10 text-white">
              <h3 className="text-xl font-bold mb-2">Besoin d'aide pour vos travaux de raccordement fibre ?</h3>
              <p className="mb-4">Notre équipe d'experts intervient dans toute la région PACA pour détecter et résoudre les points de blocage.</p>
              <Link href="/demande-de-devis-travaux-de-fibre-optique" className="inline-block bg-white text-construction-orange font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Demander un diagnostic
              </Link>
            </div>

            {/* Section 2 */}
            <section id="fourreau" className="px-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">2. Fourreau télécom bouché : le problème n°1</h2>
              </div>
              
              <div className="prose max-w-none text-gray-600 ml-12">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-l-4 border-construction-orange rounded-r-lg mb-6">
                  <p className="mb-4">
                    Le fourreau est la gaine, généralement verte, qui accueille le câble téléphonique puis la fibre. Avec le temps, il peut se boucher pour plusieurs raisons :
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <strong className="font-semibold text-gray-800">Terre et racines</strong>
                    </div>
                    <p className="text-sm">L'ennemi classique des canalisations.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      <strong className="font-semibold text-gray-800">Fourreau écrasé</strong>
                    </div>
                    <p className="text-sm">Suite à des travaux ou au passage de véhicules.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <strong className="font-semibold text-gray-800">Obstruction</strong>
                    </div>
                    <p className="text-sm">Cailloux, débris divers, volontaire ou non.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Comment le déboucher ?
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                  <p className="mb-0">
                    L'intervention professionnelle utilise un <strong>compresseur à haute pression</strong> pour envoyer de l'air et déloger le bouchon, ou une technique <strong>d'hydrocurage</strong> pour les cas plus résistants. Une <strong>caméra endoscopique</strong> peut être utilisée pour localiser précisément le point de blocage.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="regard" className="px-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">3. Regard France Télécom introuvable</h2>
              </div>
              
              <div className="prose max-w-none text-gray-600 ml-12">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-l-4 border-amber-400 rounded-r-lg mb-6">
                  <p className="mb-0">
                    Le regard est une petite chambre en béton ou en plastique qui sert de point de jonction. Il peut être enterré sous de la terre, du gazon ou même du bitume après des années sans entretien.
                  </p>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"></div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                      <div className="absolute -left-3 bg-white p-1 rounded-full border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      Comment le retrouver ?
                    </h3>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                      <p className="mb-0">
                        Un professionnel utilise un <strong>détecteur électromagnétique</strong>. Une sonde (ou aiguille détectable) est insérée dans le fourreau depuis le PBO, et le détecteur suit son signal en surface pour localiser le regard avec une <strong>précision centimétrique</strong>, évitant ainsi de creuser inutilement votre jardin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="cable" className="px-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">4. Câble fibre optique endommagé</h2>
              </div>
              
              <div className="prose max-w-none text-gray-600 ml-12">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-white p-6 border-l-4 border-construction-orange rounded-r-lg">
                    <p className="mb-0">
                      Un câble peut être sectionné lors de travaux de jardinage (coup de pioche malheureux) ou endommagé par des rongeurs. La réparation est délicate et nécessite une soudure optique.
                    </p>
                  </div>
                  <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="font-medium mb-0">Attention : Ne tentez jamais de réparer un câble fibre vous-même. La lumière laser invisible peut être dangereuse pour les yeux et une mauvaise manipulation rendra la réparation plus complexe et coûteuse.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    La soudure par fusion
                  </h3>
                  <div className="flex items-center">
                    <div className="flex-1">
                      <p className="mb-0">
                        Un technicien spécialisé, appelé <strong>soudeur fibre optique</strong>, utilise une machine (soudeuse par fusion) pour aligner et fusionner les deux brins de verre de la fibre. C'est une opération de <strong>haute précision</strong> qui garantit une perte de signal minimale.
                      </p>
                    </div>
                    <div className="hidden md:block w-24 h-24 bg-gray-100 rounded-full ml-4 flex-shrink-0 border-2 border-construction-orange flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Questions fréquentes</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-medium text-gray-900">Comment savoir où passent les câbles avant de creuser ?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="text-gray-700 mt-3">La meilleure solution est de faire appel à un professionnel équipé d'un détecteur de réseaux. Tenter de deviner est risqué et peut entraîner des dommages coûteux sur d'autres réseaux (eau, gaz, électricité).</p>
                </details>
                <details className="group bg-gray-50 p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-medium text-gray-900">Puis-je creuser moi-même une tranchée ?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="text-gray-700 mt-3">Oui, c'est possible si vous êtes un bricoleur averti. Cependant, vous devez impérativement respecter les profondeurs réglementaires (60 cm minimum) et utiliser un fourreau et un grillage avertisseur conformes.</p>
                </details>
                <details className="group bg-gray-50 p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-medium text-gray-900">Combien de temps prennent ces travaux ?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="text-gray-700 mt-3">La durée varie : un débouchage de fourreau peut prendre quelques heures, tandis qu'une tranchée complète peut nécessiter 1 à 3 jours selon la longueur et la nature du terrain.</p>
                </details>
              </div>
            </section>

            {/* Conclusion */}
            <section className="px-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Conclusion</h2>
              <div className="prose max-w-none text-gray-600">
                <p>Les travaux préparatoires au raccordement de la fibre optique sont souvent la clé d'une installation réussie et rapide. En identifiant le bon besoin et en faisant appel à un professionnel lorsque c'est nécessaire, vous vous assurez une connexion très haut débit fonctionnelle et durable.</p>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-construction-orange to-amber-500 text-white p-8 rounded-lg mx-8 mb-12">
              <h2 className="text-2xl font-bold">Un doute sur les travaux à réaliser ?</h2>
              <p className="mt-2 mb-6">Notre équipe peut réaliser un diagnostic précis sur site pour identifier le blocage et vous proposer la solution la plus adaptée.</p>
              <Link href="/contact" className="bg-white text-construction-orange font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Demander un diagnostic
              </Link>
            </div>

            {/* Articles de soutien */}
            <div className="border-t border-gray-200 pt-12 mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Pour aller plus loin</h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/quand-realiser-tranchee-fibre-optique" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/tranchee-fibre-optique.jpg" alt="Illustration d'une tranchée pour la fibre" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Quand réaliser une tranchée pour la fibre ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Découvrez dans quels cas la création d'une tranchée est une étape obligatoire pour le raccordement de votre logement à la fibre optique.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/comment-deboucher-reparer-fourreau-gaine" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/debouchage-fourreau.jpg" alt="Déboucher un fourreau de fibre optique" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Comment déboucher un fourreau télécom ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Fourreau bouché, gaine écrasée : méthodes de détection et solutions pour rétablir le passage du câble fibre.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/pourquoi-aiguille-cable-bloquent-fourreau-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/cable-bloque-fourreau-telecom.jpg" alt="Câble bloqué dans un fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Pourquoi le câble bloque dans le fourreau ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Aiguille ou câble bloqué ? Découvrez les causes principales et les solutions pour localiser et résoudre ce problème.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/comment-reparer-cable-fibre-optique" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/reparation-cable-fibre-optique.jpg" alt="Réparer un câble de fibre optique" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Comment réparer un câble fibre optique ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Câble fibre endommagé : qui appeler, comment intervenir et quelles étapes pour une remise en service fiable.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 5 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/prix-debouchage-fourreau-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/prix-debouchage-fourreau-telecom.jpg" alt="Prix du débouchage de fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Quel prix pour déboucher un fourreau ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Découvrez les tarifs pour le débouchage de fourreau télécom et les solutions pour respecter votre budget.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 6 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/comment-trouver-regard-france-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/regard-france-telecom.jpg" alt="Trouver un regard France Télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Comment trouver un regard télécom ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Le technicien vous demande de trouver le regard ? Suivez notre guide pour le localiser facilement sur votre propriété.</p>
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
