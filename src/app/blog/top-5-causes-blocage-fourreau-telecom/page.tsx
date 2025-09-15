import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveSummary from './InteractiveSummary';

export function generateMetadata(): Metadata {
  const title = 'Top 5 causes de blocage dans un fourreau télécom (et comment les résoudre)';
  const description = "Comprenez les principales causes de blocage dans un fourreau télécom (boue, écrasement, ancien câble, racines, défaut de conception) et découvrez les solutions professionnelles pour débloquer la situation rapidement.";
  const canonical = 'https://fibreoptiquetravaux.fr/blog/top-5-causes-blocage-fourreau-telecom';
  const image = 'https://www.fibreoptiquetravaux.fr/images/blog/debouchage-fourreau-telecom.jpg';

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
      images: ['/images/blog/debouchage-fourreau-telecom.jpg'],
      type: 'article',
    },
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function TopCausesBlocageFourreau() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {/* Fil d'Ariane */}
            <nav className="flex mb-8 text-sm">
              <Link href="/" className="text-gray-500 hover:text-construction-orange">
                Accueil
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/blog" className="text-gray-500 hover:text-construction-orange">
                Blog
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-construction-orange">Top 5 causes de blocage dans un fourreau télécom</span>
            </nav>

            {/* Image principale */}
            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/images/blog/debouchage-fourreau-telecom.jpg"
                alt="Top 5 causes de blocage dans un fourreau télécom"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Titre et introduction */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Top 5 causes de blocage dans un fourreau télécom (et comment les résoudre)</h1>

            <div className="flex items-center text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Mis à jour le 14 août 2025</span>
              </div>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Temps de lecture: 8 min</span>
              </div>
            </div>
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600 mb-12">
              <p className="lead text-xl mb-6">
                Un fourreau télécom bouché peut bloquer l'installation de votre fibre optique pendant des semaines. Comprendre la cause du blocage est la première étape pour résoudre ce problème technique. Dans cet article, nous analysons les 5 principales causes de blocage dans un fourreau télécom et les solutions professionnelles pour y remédier.
              </p>

              {/* Encadré "Le saviez-vous" */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Le saviez-vous ?</h3>
                    <div className="text-sm text-blue-700">
                      <p>Plus de 30% des installations fibre sont retardées à cause d'un fourreau bouché ou endommagé. Ce problème technique est la première cause d'échec lors du premier rendez-vous d'installation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sommaire interactif */}
            <InteractiveSummary />
            
            <div className="prose prose-neutral max-w-none">

              {/* H2 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Obstruction par terre, sable ou boue
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Pourquoi cela arrive ?</h3>
                    <p className="text-gray-600 mb-4">Avec le temps, des infiltrations d'eau transportent sable, terre ou boue à l'intérieur du fourreau. Ces dépôts forment un bouchon qui bloque l'aiguille ou le câble.</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Gaine fissurée ou mal jointe</li>
                      <li>Regard télécom non étanche</li>
                      <li>Pente inversée favorisant l'accumulation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Comment le détecter ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                      <li>Aiguille qui bloque après quelques mètres</li>
                      <li>Traces de boue ou d'humidité sur l'aiguille</li>
                      <li>Caméra endoscopique montrant un dépôt</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Solutions professionnelles</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Nettoyage par aiguille souple/semi-rigide</li>
                      <li>Hydrocurage (jet haute pression)</li>
                      <li>Remplacement de tronçon en cas d'infiltration récurrente</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700"><strong>Conseil:</strong> Voir notre guide <Link className="text-construction-orange hover:underline" href="/blog/comment-deboucher-reparer-fourreau-gaine">Comment déboucher / réparer un fourreau télécom</Link>.</p>
                </div>
              </div>

              {/* H2 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Écrasement ou déformation de la gaine
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Pourquoi cela arrive ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                      <li>Passage d'un véhicule lourd</li>
                      <li>Travaux de terrassement mal réalisés</li>
                      <li>Affaissement du sol</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Comment le détecter ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                      <li>Blocage net au même endroit</li>
                      <li>Caméra montrant un rétrécissement</li>
                      <li>Fourreau aplati visible lors d'une ouverture</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Solutions professionnelles</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Repérage précis par détecteur électromagnétique</li>
                      <li>Remplacement du tronçon déformé</li>
                      <li>Pose d'un regard intermédiaire</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700">Complétez avec le <Link className="text-construction-orange hover:underline" href="/blog/travaux-raccordement-fibre-optique-guide-complet">guide des travaux de raccordement fibre</Link>.</p>
                </div>
              </div>

              {/* H2 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Présence d'un ancien câble coincé
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Pourquoi cela arrive ?</h3>
                    <p className="text-gray-600 mb-4">Des câbles anciens (cuivre/fibre) peuvent être restés dans la gaine et s'emmêler, empêchant tout nouveau tirage.</p>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Comment le détecter ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Aiguille qui ressort avec des traces de gaine/câble</li>
                      <li>Caméra montrant un câble en travers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Solutions professionnelles</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Extraction mécanique de l'ancien câble</li>
                      <li>Ouverture ponctuelle si nécessaire</li>
                      <li>Tirage d'un nouveau câble avec aiguille adaptée</li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-blue-800 font-medium">Conseil technique</p>
                      </div>
                      <p className="text-blue-700 mt-1 text-sm">Ne jamais tirer sur un ancien câble sans évaluer s'il est coincé ou simplement fixé à une extrémité.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700">À lire aussi : <Link className="text-construction-orange hover:underline" href="/blog/pourquoi-aiguille-cable-bloquent-fourreau-telecom">Pourquoi l'aiguille et le câble bloquent dans le fourreau ?</Link></p>
                </div>
              </div>

              {/* H2 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Racines ou végétation envahissante
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Pourquoi cela arrive ?</h3>
                    <p className="text-gray-600 mb-4">Des racines d'arbres/arbustes s'infiltrent par recherche d'humidité, notamment près des regards.</p>
                    
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Comment le détecter ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                      <li>Blocage avec résistance élastique</li>
                      <li>Caméra montrant des racines</li>
                      <li>Regard envahi de végétation</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Solutions professionnelles</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Découpe mécanique des racines</li>
                      <li>Hydrocurage de nettoyage</li>
                      <li>Traitement anti-racines (compatible environnement)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700">Ressource utile : <Link className="text-construction-orange hover:underline" href="/blog/comment-trouver-regard-france-telecom">Comment retrouver un regard enterré</Link>.</p>
                </div>
              </div>

              {/* H2 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  Défaut de conception ou mauvais raccordement
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Pourquoi cela arrive ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                      <li>Diamètre insuffisant</li>
                      <li>Coudes trop serrés</li>
                      <li>Jonctions mal alignées</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Comment le détecter ?</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Blocage récurrent au même coude</li>
                      <li>Caméra montrant un mauvais alignement</li>
                      <li>Passage possible uniquement dans un sens</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Solutions professionnelles</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                      <li>Redressage ou agrandissement des jonctions</li>
                      <li>Remplacement des sections trop étroites</li>
                      <li>Installation de courbes plus larges</li>
                    </ul>
                    <div className="mt-4 p-4 bg-orange-50 border border-construction-orange rounded-md">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-construction-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <h4 className="font-semibold text-construction-orange">Besoin d'une intervention ?</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Nos techniciens spécialisés peuvent intervenir rapidement pour résoudre votre problème de fourreau télécom.</p>
                      <Link href="/demande-de-devis-travaux-de-fibre-optique" className="mt-3 inline-block px-4 py-2 bg-construction-orange text-white rounded-md hover:bg-orange-600 transition-colors">
                        Demander un devis gratuit
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700">Besoin d'aide ? <Link className="text-construction-orange hover:underline" href="/blog/qui-appeler-debouchage-fourreau-telecom">Qui appeler pour le débouchage d'un fourreau télécom ?</Link></p>
                </div>
              </div>

              {/* Méthodes générales */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Méthodes professionnelles pour débloquer un fourreau télécom</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-5 border-t-4 border-construction-orange">
                    <div className="flex items-center mb-4">
                      <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                      <h3 className="text-xl font-semibold text-gray-700">Inspection initiale</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Caméra endoscopique pour localiser le bouchon</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Repérage du blocage en mètres linéaires</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5 border-t-4 border-construction-orange">
                    <div className="flex items-center mb-4">
                      <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                      <h3 className="text-xl font-semibold text-gray-700">Choix de la méthode</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Hydrocurage pour dépôts terre/boue</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Tirage mécanique pour ancien câble</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Ouverture ponctuelle pour écrasement</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5 border-t-4 border-construction-orange">
                    <div className="flex items-center mb-4">
                      <span className="bg-construction-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                      <h3 className="text-xl font-semibold text-gray-700">Vérification et prévention</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Étanchéifier les regards</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Poser des gaines résistantes</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Entretenir régulièrement les accès</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Erreurs à éviter */}
              <div className="bg-red-50 rounded-lg shadow-md p-6 mb-8 border-l-4 border-red-500">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Erreurs fréquentes à éviter
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <h3 className="font-semibold text-gray-800">Forcer l'aiguille</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Risque de casse et de créer un nouveau blocage plus difficile à résoudre.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <h3 className="font-semibold text-gray-800">Injecter de l'eau</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Sans inspection préalable, l'eau peut aggraver certains types de blocages.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <h3 className="font-semibold text-gray-800">Creuser sans plans</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Risques majeurs d'endommager des réseaux électriques ou de gaz.</p>
                  </div>
                </div>
              </div>

              {/* Tarifs indicatifs */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-construction-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Coûts indicatifs d'intervention
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 bg-white rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Type d'intervention</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Prix moyen HT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3">Débouchage simple</td>
                            <td className="px-4 py-3 font-medium text-construction-orange">150 – 250 €</td>
                          </tr>
                          <tr className="border-t hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3">Hydrocurage</td>
                            <td className="px-4 py-3 font-medium text-construction-orange">200 – 400 €</td>
                          </tr>
                          <tr className="border-t hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3">Remplacement de tronçon</td>
                            <td className="px-4 py-3 font-medium text-construction-orange">300 – 800 €</td>
                          </tr>
                          <tr className="border-t hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3">Localisation et inspection</td>
                            <td className="px-4 py-3 font-medium text-construction-orange">100 – 200 €</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Nos forfaits d'intervention</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</div>
                        <div>
                          <span className="font-medium block">Diagnostic à 230€</span>
                          <span className="text-sm text-gray-600">Localisation précise du point de blocage</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</div>
                        <div>
                          <span className="font-medium block">Intervention standard à 530€</span>
                          <span className="text-sm text-gray-600">Pour surfaces molles (terre/pelouse)</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</div>
                        <div>
                          <span className="font-medium block">Intervention complexe à 710€</span>
                          <span className="text-sm text-gray-600">Pour surfaces dures (béton/enrobé)</span>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-300">
                      <Link href="/tarifs" className="inline-flex items-center text-construction-orange hover:underline">
                        <span>Voir tous nos tarifs</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-construction-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Questions fréquentes
                </h2>
                
                <div className="space-y-4">
                  <details className="group border border-gray-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer group-open:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-800">Un particulier peut-il déboucher lui-même un fourreau ?</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="p-4 border-t border-gray-200">
                      <p className="text-gray-700">Oui pour un petit dépôt accessible en entrée de fourreau. Cependant, pour un blocage profond ou complexe, il est fortement recommandé de faire appel à un professionnel équipé d'outils spécialisés (caméra endoscopique, hydrocureuse, etc.) afin d'éviter d'aggraver la situation.</p>
                    </div>
                  </details>
                  
                  <details className="group border border-gray-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer group-open:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-800">Combien de temps dure un débouchage ?</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="p-4 border-t border-gray-200">
                      <p className="text-gray-700">La durée d'une intervention de débouchage varie considérablement selon :</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>La nature du blocage (boue, racines, écrasement...)</li>
                        <li>La longueur du fourreau concerné</li>
                        <li>L'accessibilité des regards</li>
                      </ul>
                      <p className="mt-2 text-gray-700">En général, comptez de 30 minutes pour un simple débouchage à plusieurs heures pour une intervention complexe.</p>
                    </div>
                  </details>
                  
                  <details className="group border border-gray-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer group-open:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-800">Un blocage peut-il empêcher complètement le raccordement fibre ?</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="p-4 border-t border-gray-200">
                      <p className="text-gray-700">Oui, absolument. Dans la grande majorité des cas, un fourreau bloqué rend impossible le passage du câble de fibre optique. Les techniciens des opérateurs ne sont généralement pas équipés pour résoudre ces problèmes et doivent déclarer un échec de raccordement. Il est alors nécessaire de faire intervenir une entreprise spécialisée pour débloquer le fourreau avant de pouvoir finaliser l'installation de la fibre.</p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Conclusion + CTA */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-construction-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conclusion
                </h2>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-construction-orange mb-6">
                  <p className="text-gray-700">Les blocages de fourreau télécom sont fréquents, mais presque toujours résolvables avec les bons outils et méthodes. Une intervention rapide par des professionnels évite des retards de raccordement et des surcoûts importants. La clé du succès réside dans l'identification précise de la cause du blocage et le choix de la technique appropriée.</p>
                </div>
                
                <div className="bg-gradient-to-r from-neutral-dark to-neutral-dark-800 text-white rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 md:flex items-center justify-between">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Besoin d'une intervention rapide ?
                      </h3>
                      <p className="mb-4 md:mb-0">Nous localisons précisément le point de blocage et intervenons sous 48h partout en région PACA.</p>
                    </div>
                    <div className="md:w-1/3 flex flex-col md:items-end space-y-3 md:space-y-4">
                      <Link href="/nos-services" className="inline-block bg-construction-orange hover:bg-construction-orange-dark text-white font-medium px-5 py-3 rounded-md text-center transition-colors w-full md:w-auto">
                        <span className="flex items-center justify-center">
                          <span>Découvrir nos services</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Link>
                      <Link href="/tarifs" className="inline-block bg-white text-neutral-dark hover:bg-gray-100 font-medium px-5 py-3 rounded-md text-center transition-colors w-full md:w-auto">
                        <span className="flex items-center justify-center">
                          <span>Voir nos tarifs</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles liés */}
            <div className="mt-12 bg-gray-50 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-construction-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Articles liés
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-construction-orange">
                  <Link href="/blog/comment-deboucher-reparer-fourreau-gaine" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-0 right-0 bg-construction-orange text-white text-xs font-bold px-2 py-1 m-2 rounded z-10">
                        Guide pratique
                      </div>
                      <Image src="/images/blog/debouchage-fourreau.jpg" alt="Débouchage de fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange transition-colors">Déboucher / réparer un fourreau</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Méthodes et outils pour rétablir le passage d'un câble dans une gaine télécom.</p>
                      <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500">5 min de lecture</span>
                        <span className="text-construction-orange text-sm font-medium flex items-center">
                          Lire l'article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-construction-orange">
                  <Link href="/blog/travaux-raccordement-fibre-optique-guide-complet" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-0 right-0 bg-construction-orange text-white text-xs font-bold px-2 py-1 m-2 rounded z-10">
                        Guide complet
                      </div>
                      <Image src="/images/blog/tranchee-fibre-optique.jpg" alt="Travaux de raccordement fibre optique" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange transition-colors">Travaux pour le raccordement fibre</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Tout ce qu'il faut savoir pour réussir votre raccordement fibre.</p>
                      <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500">7 min de lecture</span>
                        <span className="text-construction-orange text-sm font-medium flex items-center">
                          Lire l'article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-construction-orange">
                  <Link href="/blog/pourquoi-aiguille-cable-bloquent-fourreau-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-0 right-0 bg-construction-orange text-white text-xs font-bold px-2 py-1 m-2 rounded z-10">
                        Analyse technique
                      </div>
                      <Image src="/images/blog/cable-bloque-fourreau-telecom.jpg" alt="Câble bloqué dans un fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange transition-colors">Pourquoi le câble bloque ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Causes principales et solutions pour un tirage de câble réussi.</p>
                      <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500">6 min de lecture</span>
                        <span className="text-construction-orange text-sm font-medium flex items-center">
                          Lire l'article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
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
