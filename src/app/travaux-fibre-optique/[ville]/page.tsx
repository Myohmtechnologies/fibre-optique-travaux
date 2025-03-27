import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { villes } from '../data/villes';
import { getTemoignagesVille } from '../data/temoignages';
import { getPhotosRealisationsVille } from '../data/photos-realisations';
import SchemaMarkup from '@/components/SchemaMarkup';

// Générer les métadonnées dynamiquement pour chaque ville
export async function generateMetadata({ params }: { params: { ville: string } }) {
  const villeData = villes.find(v => v.slug === params.ville);
  
  if (!villeData) {
    return {
      title: 'Ville non trouvée | Fibre Optique Travaux',
      description: 'La page que vous recherchez n\'existe pas.'
    };
  }
  
  return {
    title: villeData.titre,
    description: villeData.description,
    keywords: `déblocage fibre optique ${villeData.nom}, fourreau bouché ${villeData.nom}, regard introuvable ${villeData.nom}, installation fibre ${villeData.nom}, fibre optique travaux ${villeData.nom}`
  };
}

// Générer les chemins statiques pour toutes les villes
export async function generateStaticParams() {
  return villes.map(ville => ({
    ville: ville.slug
  }));
}

export default function VillePage({ params }: { params: { ville: string } }) {
  // Trouver les données de la ville
  const villeData = villes.find(v => v.slug === params.ville);
  
  // Si la ville n'existe pas, afficher une page 404
  if (!villeData) {
    notFound();
  }
  
  // Récupérer les témoignages pour cette ville
  const temoignagesVille = getTemoignagesVille(params.ville);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Schéma pour le SEO local */}
      <SchemaMarkup 
        pageType="local" 
        pageUrl={`https://fibreoptiquetravaux.fr/travaux-fibre-optique/${villeData.slug}`}
        title={villeData.titre}
        description={villeData.description}
        localBusiness={{
          name: "Fibre Optique Travaux",
          city: villeData.nom,
          region: "PACA"
        }}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fiber-glow opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-construction-glow opacity-20 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {villeData.h1}
              </h1>
              <div className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
                <p className="mb-4">
                  {villeData.introduction}
                </p>
                <p className="text-xl mt-6">
                  Des solutions professionnelles pour débloquer votre installation fibre optique à {villeData.nom}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Demander un diagnostic
                </Link>
                <Link 
                  href="/tarifs" 
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Voir nos tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Logos des opérateurs partenaires */}
        <div className="mt-12 pt-6 border-t border-gray-200 container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500 font-medium">Nous intervenons pour tous les opérateurs</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="w-24 h-16 relative transition-all duration-300 hover:scale-110">
              <Image 
                src="/images/partnair-logo/Orange_logo.svg.png" 
                alt="Logo Orange" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-24 h-16 relative transition-all duration-300 hover:scale-110">
              <Image 
                src="/images/partnair-logo/SFR-2022-logo.svg.png" 
                alt="Logo SFR" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-24 h-16 relative transition-all duration-300 hover:scale-110">
              <Image 
                src="/images/partnair-logo/Free_logo.svg.png" 
                alt="Logo Free" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-24 h-16 relative transition-all duration-300 hover:scale-110">
              <Image 
                src="/images/partnair-logo/Bouygues_Télécom.png" 
                alt="Logo Bouygues Telecom" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-24 h-16 relative transition-all duration-300 hover:scale-110">
              <Image 
                src="/images/partnair-logo/sosh.png" 
                alt="Logo Sosh" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Problèmes spécifiques à la ville */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Problèmes courants de fibre optique à {villeData.nom}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villeData.problemes_communs.map((probleme, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Problème #{index + 1}</h3>
                  <p className="text-gray-600">{probleme}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quartiers desservis */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nous intervenons dans tous les quartiers de {villeData.nom}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {villeData.quartiers.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="font-medium">{quartier}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg mb-6">
                Population de {villeData.nom}: <strong>{villeData.population.toLocaleString('fr-FR')}</strong> habitants
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Notre équipe intervient rapidement dans toute la ville de {villeData.nom} et ses environs pour débloquer votre installation fibre optique. Nous connaissons parfaitement les spécificités de chaque quartier et les problèmes récurrents qui peuvent survenir lors de l'installation de la fibre.
              </p>
            </div>
          </div>
        </section>
        
        {/* Notre processus d'intervention */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Notre processus d'intervention à {villeData.nom}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnostic</h3>
                <p className="text-gray-600">Analyse complète de votre installation pour localiser précisément le point de blocage.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Devis</h3>
                <p className="text-gray-600">Proposition d'une solution adaptée avec un devis transparent et sans surprise.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Intervention</h3>
                <p className="text-gray-600">Réalisation des travaux nécessaires par nos techniciens experts en fibre optique.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Vérification</h3>
                <p className="text-gray-600">Tests complets pour garantir que votre installation fibre est parfaitement fonctionnelle.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                Demander une intervention à {villeData.nom}
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tarifs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nos tarifs pour le déblocage fibre optique à {villeData.nom}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="bg-gray-800 text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Diagnostic</h3>
                  <div className="text-3xl font-bold mt-2">
                    <span className="text-orange-500">230€</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Analyse complète de l'installation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Détection précise des points de blocage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Évaluation des travaux nécessaires</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Proposition de solutions adaptées</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link 
                      href="/contact" 
                      className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Demander un diagnostic
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 transform scale-105 z-10">
                <div className="bg-orange-500 text-white p-6 text-center relative">
                  <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAIRE
                  </div>
                  <h3 className="text-xl font-bold">Intervention standard</h3>
                  <div className="text-3xl font-bold mt-2">
                    <span>530€</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Diagnostic complet inclus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Intervention sur surface molle (terre, pelouse)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Débouchage de fourreau</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Garantie de résultat</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Intervention sous 48h à {villeData.nom}</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link 
                      href="/contact" 
                      className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="bg-gray-800 text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Intervention complexe</h3>
                  <div className="text-3xl font-bold mt-2">
                    <span className="text-orange-500">710€</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Diagnostic complet inclus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Intervention sur surface dure (béton, enrobé)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Débouchage de fourreau complexe</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Garantie de résultat</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Intervention prioritaire à {villeData.nom}</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link 
                      href="/contact" 
                      className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Autres prestations sur devis à {villeData.nom}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Installation de goulottes</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Tirage de câble en faux plafond/combles</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Création de tranchée supplémentaire</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Recherche de regard introuvable</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">Les prix indiqués sont TTC et peuvent varier en fonction de la complexité spécifique de chaque installation à {villeData.nom}. Contactez-nous pour un devis personnalisé.</p>
            </div>
          </div>
        </section>
        
        {/* Section Photos avant/après */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Photos avant/après des installations réalisées à {villeData.nom}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez nos interventions en images. Ces photos montrent des situations réelles avant et après notre passage dans différents quartiers de {villeData.nom}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPhotosRealisationsVille(params.ville).length > 0 ? (
                getPhotosRealisationsVille(params.ville).map((photo, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="relative">
                          <img 
                            src={photo.photoAvant} 
                            alt={`Avant: ${photo.probleme} à ${photo.quartier}`} 
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            AVANT
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={photo.photoApres} 
                            alt={`Après: ${photo.probleme} à ${photo.quartier}`} 
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            APRÈS
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{photo.probleme}</h3>
                        <span className="text-sm text-gray-500">{photo.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Quartier: <span className="font-medium">{photo.quartier}</span></p>
                      <p className="text-sm text-gray-700">{photo.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 italic">Aucune photo d'installation disponible pour {villeData.nom} pour le moment.</p>
                  <p className="mt-2 text-gray-600">Consultez nos autres réalisations ou contactez-nous pour en savoir plus sur nos interventions à {villeData.nom}.</p>
                </div>
              )}
            </div>

            <div className="text-center mt-10">
              <a
                href="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Demander une intervention à {villeData.nom}
              </a>
            </div>
          </div>
        </section>

        {/* Témoignages clients */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ce que nos clients à {villeData.nom} disent de nous
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez les témoignages de nos clients satisfaits dans différents quartiers de {villeData.nom} suite à nos interventions de déblocage de fibre optique.
                </p>
              </div>
              
              {temoignagesVille.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {temoignagesVille.map((temoignage, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-transform hover:scale-105">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{temoignage.nom}</h3>
                            <div className="flex items-center mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-sm text-gray-600 ml-1">Quartier {temoignage.quartier}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center bg-orange-100 rounded-full h-10 w-10">
                            <span className="text-orange-600 font-bold">{temoignage.note}/5</span>
                          </div>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg px-4 py-2 mb-4 inline-block">
                          <span className="text-sm font-medium text-orange-800">
                            {temoignage.probleme}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">
                          "{temoignage.commentaire}"
                        </p>
                        
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                          <span>{temoignage.date}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ${i < temoignage.note ? 'text-yellow-400' : 'text-gray-300'}`} 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <p className="text-gray-500 italic">Nous n'avons pas encore de témoignages pour {villeData.nom}.</p>
                  <p className="text-gray-600">Soyez le premier à partager votre expérience après notre intervention !</p>
                </div>
              )}
              
              <div className="mt-10 text-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Demander une intervention à {villeData.nom}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Questions fréquentes sur la fibre optique à {villeData.nom}
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Retrouvez les réponses aux questions les plus fréquemment posées par nos clients à {villeData.nom} concernant le déblocage de fibre optique.
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Question 1 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Quel est le délai d'intervention à {villeData.nom} ?</h3>
                      </div>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                        <p>Nous intervenons généralement <strong>sous 48h</strong> à {villeData.nom} et ses environs. En cas d'urgence, nous pouvons parfois proposer une intervention le jour même selon notre planning.</p>
                        <p className="mt-2">Notre équipe locale connaît parfaitement le terrain à {villeData.nom}, ce qui nous permet d'être particulièrement réactifs dans cette zone.</p>
                      </div>
                    </div>
                  </details>
                </div>
                
                {/* Question 2 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Quels opérateurs fibre couvrent {villeData.nom} ?</h3>
                      </div>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                        <p>Les principaux opérateurs présents à {villeData.nom} sont :</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                            <span className="font-medium">Orange</span>
                          </div>
                          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                            <span className="font-medium">SFR</span>
                          </div>
                          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                            <span className="font-medium">Free</span>
                          </div>
                          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                            <span className="font-medium">Bouygues</span>
                          </div>
                        </div>
                        <p className="mt-3">Nous intervenons pour débloquer les installations de tous ces opérateurs sans exception.</p>
                      </div>
                    </div>
                  </details>
                </div>
                
                {/* Question 3 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Combien coûte une intervention à {villeData.nom} ?</h3>
                      </div>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                        <p>Nos tarifs à {villeData.nom} sont les suivants :</p>
                        <ul className="mt-3 space-y-2">
                          <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                            <span>Diagnostic complet</span>
                            <span className="font-semibold text-orange-500">230€</span>
                          </li>
                          <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                            <span>Intervention standard (surface molle)</span>
                            <span className="font-semibold text-orange-500">530€</span>
                          </li>
                          <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                            <span>Intervention complexe (surface dure)</span>
                            <span className="font-semibold text-orange-500">710€</span>
                          </li>
                        </ul>
                        <p className="mt-3">Pour des interventions plus spécifiques, nous établissons un devis personnalisé gratuit.</p>
                        <div className="mt-4">
                          <Link 
                            href="/tarifs" 
                            className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                          >
                            Voir tous nos tarifs
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
                
                {/* Question 4 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Quelle garantie offrez-vous à {villeData.nom} ?</h3>
                      </div>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                        <p>Nous offrons une <strong>garantie de résultat</strong> sur toutes nos interventions à {villeData.nom}. Si nous ne parvenons pas à débloquer votre installation fibre, vous ne payez rien.</p>
                        <p className="mt-2">De plus, nous proposons une garantie de 12 mois sur tous nos travaux réalisés à {villeData.nom}.</p>
                      </div>
                    </div>
                  </details>
                </div>
                
                {/* Question 5 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Comment se déroule une intervention à {villeData.nom} ?</h3>
                      </div>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                        <ol className="space-y-3 list-decimal pl-5">
                          <li><strong>Prise de contact</strong> : Vous nous contactez pour nous expliquer votre problème de fibre à {villeData.nom}.</li>
                          <li><strong>Diagnostic</strong> : Nous effectuons un diagnostic complet pour localiser précisément le point de blocage.</li>
                          <li><strong>Devis</strong> : Nous vous proposons un devis détaillé et transparent.</li>
                          <li><strong>Intervention</strong> : Après validation du devis, nous intervenons rapidement pour débloquer votre installation.</li>
                          <li><strong>Vérification</strong> : Nous testons l'installation pour garantir que tout fonctionne parfaitement.</li>
                        </ol>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-4">Vous avez d'autres questions sur nos interventions à {villeData.nom} ?</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Contactez-nous
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA final */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d'une intervention fibre optique à {villeData.nom} ?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ne restez pas bloqué avec une installation fibre inachevée. Notre équipe d'experts intervient rapidement à {villeData.nom} pour résoudre tous vos problèmes de raccordement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Demander un diagnostic
              </Link>
              <Link 
                href="/tarifs" 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
