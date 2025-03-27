import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { villes } from './data/villes';

export const metadata: Metadata = {
  title: "Travaux Fibre Optique par Ville | Déblocage et Installation Fibre",
  description: "Interventions de déblocage fibre optique dans toute la région PACA. Fourreau bouché, regard introuvable, gaine écrasée ? Nous intervenons dans votre ville sous 48h.",
  keywords: "déblocage fibre optique PACA, installation fibre par ville, fourreau bouché, regard introuvable, fibre optique travaux"
};

export default function VillesPage() {
  // Trier les villes par population (de la plus grande à la plus petite)
  const villesSorted = [...villes].sort((a, b) => b.population - a.population);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fiber-glow opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-construction-glow opacity-20 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Déblocage Fibre Optique près de chez vous
              </h1>
              <div className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
                <p className="mb-4">
                  Nous intervenons dans toute la région PACA pour débloquer votre installation fibre optique.
                  Sélectionnez votre ville pour découvrir nos services spécifiques à votre localité.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choisissez votre ville
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {villesSorted.map((ville) => (
                <Link 
                  key={ville.slug}
                  href={`/travaux-fibre-optique/${ville.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                    Déblocage Fibre Optique à {ville.nom}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {ville.introduction.substring(0, 120)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {ville.population.toLocaleString('fr-FR')} habitants
                    </span>
                    <span className="text-orange-500 font-medium group-hover:underline">
                      Voir les détails
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi choisir nos services de déblocage fibre par ville ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise locale</h3>
                <p className="text-gray-600">
                  Nous connaissons parfaitement les spécificités de chaque ville et les problèmes récurrents qui peuvent survenir lors de l'installation de la fibre optique dans votre localité.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Intervention rapide</h3>
                <p className="text-gray-600">
                  Grâce à notre présence dans toute la région PACA, nous pouvons intervenir rapidement, généralement sous 48h, pour débloquer votre installation fibre optique.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Solutions adaptées</h3>
                <p className="text-gray-600">
                  Chaque ville présente des défis uniques pour l'installation de la fibre. Nous proposons des solutions sur mesure adaptées aux spécificités de votre localité.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Votre ville n'est pas dans la liste ?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Nous intervenons dans toute la région PACA. Contactez-nous pour savoir si nous pouvons intervenir dans votre localité.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Nous contacter
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
