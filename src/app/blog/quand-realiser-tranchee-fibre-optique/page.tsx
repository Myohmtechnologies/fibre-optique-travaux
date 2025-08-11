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
    headline: 'À quel moment est-il nécessaire de réaliser une tranchée ?',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/tranchee-fibre-optique.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-07',
    dateModified: '2025-08-07',
    description: 'Découvrez quand et pourquoi il est nécessaire de réaliser une tranchée pour votre raccordement fibre optique. Expertise, précision et remise en état garanties.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/quand-realiser-tranchee-fibre-optique' },
  };

  return {
    title: 'Quand Faut-il Réaliser une Tranchée pour la Fibre ? | Guide Expert',
    description: 'Fourreau bouché ou endommagé ? Logement neuf ? Découvrez quand et pourquoi il est nécessaire de réaliser une tranchée pour votre raccordement fibre optique.',
    openGraph: {
      title: 'Quand Faut-il Réaliser une Tranchée pour la Fibre ? | Guide Expert',
      description: 'Fourreau bouché ou endommagé ? Logement neuf ? Découvrez quand et pourquoi il est nécessaire de réaliser une tranchée pour votre raccordement fibre optique.',
      images: ['/images/blog/tranchee-fibre-optique.jpg'],
      type: 'article',
    },
    keywords: 'tranchée fibre optique, viabilisation télécom, raccordement fibre, adduction télécom, travaux fibre, fourreau télécom, regard télécom, domaine public',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function TrancheeArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <article className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
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
                    <span className="font-medium text-gray-800">Tranchée fibre optique</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">À quel moment est-il nécessaire de réaliser une tranchée ?</h1>
              <p className="text-lg text-gray-600">L'arrivée de la fibre optique peut nécessiter des travaux importants sur votre propriété ou sur le domaine public. Découvrez quand et pourquoi la création d'une nouvelle tranchée devient indispensable.</p>
            </header>

            {/* Main Image */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="/images/blog/tranchee-fibre-optique.jpg" alt="Réalisation d'une tranchée pour fibre optique" fill style={{ objectFit: 'cover' }} priority />
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
                  <a href="#detection" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    La détection du réseau télécom
                  </a>
                </li>
                <li>
                  <a href="#pourquoi" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Pourquoi creuser une nouvelle tranchée ?
                  </a>
                </li>
                <li>
                  <a href="#domaine-public" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Intervention sur le domaine public
                  </a>
                </li>
                <li>
                  <a href="#precautions" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Précautions et normes
                  </a>
                </li>
                <li>
                  <a href="#travaux" className="text-construction-orange hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Réalisation des travaux
                  </a>
                </li>
              </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Le raccordement à la fibre optique est devenu un enjeu majeur pour les particuliers et les entreprises. Cependant, ce déploiement peut parfois nécessiter des travaux d'infrastructure importants, notamment la réalisation d'une tranchée.</p>
                <p className="mb-4">En tant qu'entreprise spécialisée dans les travaux télécom, nous intervenons quotidiennement sur des problématiques de raccordement fibre optique. Notre expertise nous permet d'évaluer précisément quand une tranchée est nécessaire et comment la réaliser dans les règles de l'art.</p>
                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Important :</p>
                  <p>Contrairement aux idées reçues, la création d'une tranchée n'est pas systématique. Elle intervient uniquement dans des cas spécifiques que nous allons détailler dans cet article.</p>
                </div>
                <p>Nous sommes une entreprise indépendante des opérateurs télécom, ce qui nous permet d'intervenir de manière objective et de vous proposer les solutions les plus adaptées à votre situation.</p>
              </div>
            </section>

            {/* Call to Action 1 */}
            <div className="max-w-4xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Besoin d'un diagnostic précis ?</h3>
                  <p className="text-gray-600">Notre équipe peut évaluer si une tranchée est nécessaire dans votre cas et vous proposer la solution la plus adaptée.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/diagnostic" className="inline-block px-6 py-3 bg-construction-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                    Demander un diagnostic
                  </Link>
                </div>
              </div>
            </div>
            
            {/* La détection du réseau télécom */}
            <section id="detection" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">La détection du réseau télécom</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Avant d'envisager la création d'une tranchée, nous procédons systématiquement à une détection précise de l'infrastructure télécom existante. Cette étape est cruciale pour déterminer si une tranchée est réellement nécessaire.</p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Nos outils de détection</h3>
                <p className="mb-4">Nous utilisons des équipements de pointe pour localiser avec précision :</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Les regards télécom enterrés ou masqués</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Le tracé des fourreaux et gaines télécom souterrains</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Les éventuels points de blocage dans les fourreaux existants</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>L'état général de l'infrastructure existante</span>
                  </li>
                </ul>
                
                <p className="mb-4">Cette phase de diagnostic nous permet d'établir un plan précis de l'infrastructure et d'évaluer les options disponibles pour votre raccordement fibre.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">Bon à savoir :</p>
                  <p>Dans plus de 60% des cas, nos équipements de détection permettent de trouver des solutions alternatives à la création d'une tranchée, comme la localisation d'un regard masqué ou le débouchage d'un fourreau obstrué.</p>
                </div>
              </div>
            </section>

            {/* Pourquoi creuser une nouvelle tranchée */}
            <section id="pourquoi" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi creuser une nouvelle tranchée ?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Après la phase de détection, nous pouvons déterminer si la création d'une tranchée est nécessaire. Voici les principales situations qui peuvent justifier cette intervention :</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Fourreaux dégradés</h3>
                    </div>
                    <p>Lorsque les fourreaux existants sont écrasés, déformés ou rompus, rendant impossible le passage de nouveaux câbles. Cette situation est fréquente sur les anciennes installations ou suite à des travaux antérieurs.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-construction-orange rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Logement neuf</h3>
                    </div>
                    <p>Pour les constructions neuves ou les terrains non viabilisés, il est nécessaire de créer une infrastructure télécom complète, incluant tranchée, fourreaux et chambres de tirage.</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Important :</p>
                  <p>La décision de réaliser une tranchée n'est jamais prise à la légère. Elle résulte d'une analyse technique approfondie et tient compte des contraintes techniques, économiques et réglementaires.</p>
                </div>
              </div>
            </section>

            {/* Intervention sur le domaine public */}
            <section id="domaine-public" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Intervention sur le domaine public</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Lorsqu'une tranchée doit être réalisée sur le domaine public (trottoir, voirie), des démarches administratives spécifiques sont nécessaires :</p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Demande de permission de voirie auprès de la mairie ou du gestionnaire de la voie</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Déclaration de projet de travaux (DT) et déclaration d'intention de commencement de travaux (DICT)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mise en place d'une signalisation temporaire conforme</span>
                  </li>
                </ul>
                
                <p className="mb-4">Notre entreprise se charge de toutes ces démarches administratives pour vous. Nous disposons des autorisations nécessaires et respectons scrupuleusement les règlementations en vigueur.</p>
              </div>
            </section>

            {/* Call to Action 3 */}
            <div className="max-w-4xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">Besoin d'un devis personnalisé ?</h3>
                  <p className="text-gray-600">Contactez-nous pour obtenir un devis détaillé pour vos travaux de tranchée et de raccordement fibre optique.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact" className="inline-block px-6 py-3 bg-construction-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>

            {/* Précautions et normes */}
            <section id="precautions" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Précautions et normes</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">La réalisation d'une tranchée pour le passage de câbles télécom doit respecter des normes précises :</p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Distances de sécurité</h3>
                <p className="mb-4">Les réseaux télécom doivent être installés à des distances minimales des autres réseaux :</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>20 cm des réseaux électriques</li>
                  <li>20 cm des réseaux d'eau potable</li>
                  <li>50 cm des canalisations de gaz</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Profondeur réglementaire</h3>
                <p className="mb-4">La profondeur minimale d'une tranchée télécom est de :</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>50 cm sous trottoir</li>
                  <li>80 cm sous chaussée</li>
                  <li>100 cm sous accotement</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Grillage avertisseur</h3>
                <p className="mb-4">Un grillage avertisseur de couleur verte doit être posé à environ 20 cm au-dessus des fourreaux télécom pour signaler leur présence lors de futurs travaux.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">Bon à savoir :</p>
                  <p>Nous installons systématiquement des regards de tirage à chaque changement de direction important de la tranchée, afin de faciliter la maintenance future et l'ajout éventuel de nouveaux câbles.</p>
                </div>
              </div>
            </section>

            {/* Réalisation des travaux */}
            <section id="travaux" className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Réalisation des travaux</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Notre entreprise dispose d'équipements adaptés pour réaliser des tranchées de manière précise et en minimisant l'impact sur votre propriété :</p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Matériel utilisé</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Mini-pelles de précision pour les espaces restreints</li>
                  <li>Trancheuses mécaniques pour les longues distances en terrain meuble</li>
                  <li>Outils spécifiques pour la découpe soignée des revêtements (béton, enrobé, dalles)</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Remise en état</h3>
                <p className="mb-4">Après la pose des fourreaux et câbles, nous procédons à une remise en état complète :</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Remblaiement avec des matériaux adaptés</li>
                  <li>Compactage par couches successives</li>
                  <li>Reconstruction à l'identique du revêtement de surface (terre, gazon, béton, enrobé, dalles)</li>
                  <li>Nettoyage complet du chantier</li>
                </ul>
                
                <div className="bg-orange-50 border-l-4 border-construction-orange p-4 my-6">
                  <p className="font-semibold">Notre engagement :</p>
                  <p>Nous nous engageons à réaliser les travaux dans les meilleurs délais, avec un souci constant de qualité et en limitant au maximum les nuisances pour vous et votre voisinage.</p>
                </div>
              </div>
            </section>

            {/* Conclusion et CTA final */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusion</h2>
                <p className="mb-4">La réalisation d'une tranchée pour votre raccordement fibre optique est parfois inévitable, mais cette solution garantit une installation pérenne et de qualité. Notre expertise technique et notre matériel spécialisé nous permettent d'intervenir avec précision, en respectant votre propriété et l'environnement.</p>
                <p className="mb-4">N'hésitez pas à nous contacter pour bénéficier d'un diagnostic précis et d'un accompagnement personnalisé pour tous vos travaux de raccordement fibre optique.</p>
              </div>
              
              <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Besoin d'une intervention pour votre raccordement fibre ?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Notre équipe de techniciens spécialisés est à votre disposition pour évaluer votre situation et vous proposer la solution la plus adaptée.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/diagnostic" className="inline-block px-6 py-3 bg-construction-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                      Demander un diagnostic
                    </Link>
                    <Link href="/contact" className="inline-block px-6 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                      Nous contacter
                    </Link>
                  </div>
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
