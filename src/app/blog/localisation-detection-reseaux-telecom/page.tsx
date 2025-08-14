import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Métadonnées SEO optimisées pour cet article spécifique avec données structurées Schema.org
export function generateMetadata(): Metadata {
  // Données structurées pour les moteurs de recherche (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Localiser un regard ou une gaine télécom : méthodes et outils de détection',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/localisation-regard-telecom.jpg',
    author: {
      '@type': 'Person',
      name: 'Expert Fibre Optique',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.fibreoptiquetravaux.fr/images/logo.png',
      },
    },
    datePublished: '2025-08-14',
    dateModified: '2025-08-14',
    description: 'Découvrez comment localiser un regard ou une gaine télécom : méthodes de détection, outils professionnels et astuces pour un repérage précis et rapide.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.fibreoptiquetravaux.fr/blog/localisation-detection-reseaux-telecom',
    },
  };

  return {
    title: "Localiser un regard ou une gaine télécom : méthodes et outils de détection",
    description: "Découvrez comment localiser un regard ou une gaine télécom : méthodes de détection, outils professionnels et astuces pour un repérage précis et rapide.",
    alternates: {
      canonical: "https://fibreoptiquetravaux.fr/blog/localisation-detection-reseaux-telecom",
    },
    // Ajout des données structurées
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default function LocalisationReseauxTelecom() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {/* Fil d'Ariane */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-construction-orange">
                    Accueil
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-construction-orange">
                    Blog
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <span className="text-gray-700 font-medium">Localiser un regard ou une gaine télécom</span>
                </li>
              </ol>
            </nav>

            {/* Image principale */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src="/images/blog/localisation-regard-telecom.jpg"
                alt="Localisation d'un regard télécom avec un détecteur électromagnétique"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                priority
              />
            </div>

            {/* Titre et introduction */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
              Localiser un regard ou une gaine télécom : méthodes et outils
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Lorsque vous devez raccorder une maison, un immeuble ou un local professionnel à la fibre optique,
              il est fréquent de se retrouver face à un problème : impossible de trouver le regard télécom ou
              de localiser la gaine souterraine. Ces éléments, souvent invisibles, sont pourtant indispensables
              pour accéder au réseau téléphonique ou fibre et réaliser les travaux nécessaires.
            </p>

            {/* Table des matières */}
            <div className="bg-gray-50 p-6 rounded-lg mx-8 mb-10 border border-gray-200">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Table des matières</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#pourquoi-localiser" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Pourquoi localiser un regard ou une gaine télécom est crucial
                  </a>
                </li>
                <li>
                  <a href="#reglementation" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Réglementation et obligations légales
                  </a>
                </li>
                <li>
                  <a href="#methodes" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Les différentes méthodes de localisation
                  </a>
                </li>
                <li>
                  <a href="#outils" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Outils utilisés par les professionnels
                  </a>
                </li>
                <li>
                  <a href="#etapes" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Étapes complètes pour localiser un regard ou une gaine
                  </a>
                </li>
                <li>
                  <a href="#erreurs" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Erreurs fréquentes à éviter
                  </a>
                </li>
                <li>
                  <a href="#cas-concrets" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Cas concrets
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="pourquoi-localiser" className="px-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Pourquoi localiser un regard ou une gaine télécom est crucial</h2>
              </div>

              <div className="prose max-w-none text-gray-600 ml-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-construction-orange hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Accès au réseau
                    </h3>
                    <p className="mb-0">
                      Le regard télécom est un point d'accès où convergent les câbles de communication. C'est souvent le seul endroit d'où l'on peut tirer la fibre ou intervenir sur un câble endommagé.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Prévention des dommages
                    </h3>
                    <p className="mb-0">
                      Lors de travaux de terrassement, une mauvaise localisation peut entraîner la coupure accidentelle d'un câble — ce qui provoque des pannes pour des dizaines d'abonnés, et peut générer des frais de réparation élevés.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Gain de temps et d'argent
                    </h3>
                    <p className="mb-0">
                      Une localisation précise dès le départ évite de perdre des heures (voire des jours) à creuser inutilement ou à démonter des infrastructures.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Respect de la réglementation
                    </h3>
                    <p className="mb-0">
                      En France, la loi anti-endommagement impose de localiser les réseaux enterrés avant tout chantier, via des procédures DT-DICT.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="methodes" className="px-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Les différentes méthodes de localisation</h2>
              </div>

              <div className="prose max-w-none text-gray-600 ml-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* Méthode 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Consultation des plans officiels</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fournis par Orange, Enedis, ou via le portail <a href="https://www.reseaux-et-canalisations.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-construction-orange hover:underline">reseaux-et-canalisations.gouv.fr</a></span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Permettent de connaître la position approximative des réseaux</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Limite : la précision est souvent de ±50 cm à ±2 mètres</span>
                      </li>
                    </ul>
                  </div>

                  {/* Méthode 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Inspection visuelle</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Repérer les plaques "PTT" ou "Télécom" sur les trottoirs ou allées</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Observer les zones où le terrain semble avoir été remblayé</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Méthode peu fiable pour les regards enterrés depuis longtemps</span>
                      </li>
                    </ul>
                  </div>

                  {/* Méthode 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Détecteurs électromagnétiques</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Idéal pour suivre le tracé des câbles cuivre ou des gaines équipées d'un fil conducteur</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Précision de localisation : ±5 cm</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Méthode professionnelle la plus efficace et non invasive</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Méthode 4 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Générateur de signal</h3>
                    </div>
                    <p className="mb-2 text-sm">
                      Injecte un signal dans un câble ou une aiguille détectable, que le détecteur peut suivre avec une grande précision, même à travers différents matériaux comme la terre ou le béton.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg text-sm">
                      <p className="font-medium mb-0">Avantage majeur : permet de suivre le parcours exact d'une gaine télécom même si elle est profondément enterrée.</p>
                    </div>
                  </div>

                  {/* Méthode 5 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Caméras d'inspection</h3>
                    </div>
                    <p className="mb-2 text-sm">
                      Permettent d'explorer l'intérieur d'un fourreau pour identifier blocages, cassures ou points de jonction. Idéal pour compléter les autres méthodes de détection.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Portée typique : jusqu'à 100m</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Haute précision</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-construction-orange mb-6">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-construction-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-700">Aiguille avec sonde</h3>
                  </div>
                  <p className="mb-0">
                    Utilisée lorsque la gaine est vide ou bouchée : insertion d'une aiguille équipée d'une sonde émettrice. Cette technique est particulièrement efficace pour les fourreaux télécom qui ont été recouverts par de la terre ou de l'enrobé au fil des années.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="reglementation" className="px-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Réglementation et obligations légales</h2>
              </div>

              <div className="prose max-w-none text-gray-600 ml-12">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-l-4 border-amber-400 rounded-r-lg mb-6">
                  <p className="mb-0">
                    En France, la réglementation anti-endommagement des réseaux est stricte et encadrée par le Code de l'environnement. Elle vise à prévenir les accidents lors des travaux à proximité des réseaux enterrés ou aériens.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    DT-DICT
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">DT (Déclaration de Travaux)</p>
                      <p className="mb-0 text-sm">Demande faite par le maître d'ouvrage avant la conception du projet pour connaître précisément l'emplacement des réseaux.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">DICT (Déclaration d'Intention de Commencement de Travaux)</p>
                      <p className="mb-0 text-sm">Effectuée par l'entreprise exécutante avant de commencer les travaux pour confirmer l'emplacement des réseaux.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Responsabilités
                  </h3>
                  <p className="mb-2">
                    <strong>Ne pas localiser correctement un réseau peut engager la responsabilité civile et pénale du responsable des travaux.</strong>
                  </p>
                  <p className="mb-0">
                    Les amendes peuvent atteindre plusieurs milliers d'euros en cas de coupure d'un réseau stratégique.
                  </p>
                </div>
                {/* Articles de soutien */}
                <div className="border-t border-gray-200 pt-12 mt-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Pour aller plus loin</h2>
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                      <Link href="/blog/comment-trouver-regard-france-telecom" className="block h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image src="/images/blog/regard-france-telecom.jpg" alt="Illustration d'une tranchée pour la fibre" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Comment trouver un regard ou une plaque France Télécom ?
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Le déploiement de la fibre optique jusqu'à votre domicile nécessite de trouver le regard France Télécom permettant de raccorder votre réseau personnel au réseau collectif.
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                      <Link href="/blog/regard-introuvable-installation-fibre-optique" className="block h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image src="/images/blog/regard-introuvable-fibre-optique.jpg" alt="Regard introuvable pour installer la fibre" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Regard Introuvable: Comment Finaliser Votre Raccordement Fibre</h3>
                          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Le dernier tronçon de la fibre passe sur votre domaine privé. Le technicien doit accéder à votre trappe télécom, souvent en limite de propriété.</p>
                        </div>
                      </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                      <Link href="/blog/detection-regard-ptt" className="block h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image src="/images/blog/detection-regard-ptt.jpeg" alt="Câble bloqué dans un fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Pourquoi réaliser la détection de votre regard PTT</h3>
                          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">L'installation de la fibre optique est attendue avec impatience dans les foyers où la connexion Internet laisse à désirer. </p>
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
