import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Solutions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos solutions, selon l'emplacement du point de blocage
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            L'identification précise du point de blocage est essentielle pour déterminer qui doit prendre en charge les travaux. 
            Notre diagnostic permet de localiser exactement le problème et d'orienter vers la solution adaptée.
          </p>
        </div>

        {/* Carte de diagnostic au centre */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-12 border-2 border-orange-200">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="h-64 md:h-full relative">
                <Image 
                  src="/images/detection-point-de-blockage.png" 
                  alt="Diagnostic précis du point de blocage" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="bg-orange-50 inline-block px-3 py-1 rounded-full text-orange-700 font-medium text-sm mb-4">
                ÉTAPE CLÉ
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Diagnostic précis du point de blocage</h3>
              <p className="text-neutral-600 mb-4">
                Notre équipe réalise un diagnostic complet pour localiser avec précision le point de blocage qui empêche le passage de la fibre optique. Grâce à nos équipements spécialisés, nous déterminons si le problème se situe :
              </p>
              <div className="flex items-start space-x-8 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 001 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <span className="font-medium">En domaine privé</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <span className="font-medium">En domaine public</span>
                </div>
              </div>
              <p className="text-neutral-600 mb-5">
                Cette étape est cruciale car elle détermine qui doit prendre en charge les travaux et quelle solution mettre en œuvre pour débloquer votre raccordement.
              </p>
              {/* CTA principal avec un Link au lieu d'un bouton avec onClick */}
              <Link
                href="/demande-de-devis-travaux-de-fibre-optique"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-3xl shadow-lg transition-all duration-300 flex items-center justify-center text-base whitespace-nowrap mb-5 relative overflow-hidden group border-2 border-orange-300 hover:border-orange-400"
              >
                {/* Effet de halo subtil */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></span>
                
                {/* Effet de bordure qui s'illumine */}
                <span className="absolute inset-0 border-2 border-orange-300 opacity-0 group-hover:opacity-100 rounded-3xl scale-105 transition-all duration-500"></span>
                
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">DEMANDER UNE INTERVENTION</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Flèches de direction */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400 transform -rotate-45" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Domaine Privé */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-500">
            <div className="relative h-48">
              <Image 
                src="/images/domaine-privé.jpeg" 
                alt="Intervention en domaine privé" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-2xl font-bold">Domaine Privé</h3>
                <p className="text-white text-sm opacity-90">Travaux à votre charge</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-neutral-600 mb-4">
                Les travaux dans votre propriété sont sous votre responsabilité. Si le technicien de votre opérateur ne peut pas finaliser l'installation à cause d'une gaine impraticable (fourreau bouché, regard introuvable...), nous intervenons directement chez vous.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-orange-700 mb-2">Notre solution</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Détection précise du point de blocage</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Débouchage ou remplacement de fourreaux</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Création de passage pour la fibre</span>
                  </li>
                </ul>
              </div>
              <Link href="/domaine-prive" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Carte Domaine Public */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="relative h-48">
              <Image 
                src="/images/domaine-public.jpeg" 
                alt="Intervention en domaine public" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-2xl font-bold">Domaine Public</h3>
                <p className="text-white text-sm opacity-90">À la charge de l'opérateur</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-neutral-600 mb-4">
                Lorsque le blocage est identifié sur le domaine public, c'est normalement à votre opérateur d'effectuer les démarches nécessaires. Cependant, ces procédures peuvent prendre du temps.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-700 mb-2">Notre solution</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rapport technique détaillé</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Photos et localisation précise du blocage</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Accélération des démarches avec l'opérateur</span>
                  </li>
                </ul>
              </div>
              <Link href="/domaine-public" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
