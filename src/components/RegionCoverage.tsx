import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RegionCoverage = () => {
  // Liste des villes principales de la région PACA
  const cities = [
    { name: 'Marseille', population: '870 731 habitants' },
    { name: 'Nice', population: '342 669 habitants' },
    { name: 'Toulon', population: '171 953 habitants' },
    { name: 'Aix-en-Provence', population: '143 097 habitants' },
    { name: 'Avignon', population: '92 130 habitants' },
    { name: 'Cannes', population: '74 285 habitants' },
    { name: 'Antibes', population: '73 798 habitants' },
    { name: 'La Seyne-sur-Mer', population: '65 386 habitants' },
    { name: 'Hyères', population: '55 402 habitants' },
    { name: 'Arles', population: '52 979 habitants' },
    { name: 'Fréjus', population: '52 672 habitants' },
    { name: 'Grasse', population: '50 409 habitants' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interventions dans toute la région PACA</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre équipe de techniciens spécialisés intervient rapidement dans l'ensemble de la région Provence-Alpes-Côte d'Azur pour débloquer votre installation de fibre optique lorsque le technicien de votre opérateur ne peut pas finaliser le raccordement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Carte de la région PACA */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/carte-paca.jpg"
              alt="Carte de la région PACA"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg filter hue-rotate-[170deg] brightness-110 saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Région Provence-Alpes-Côte d'Azur</h3>
                <p>6 départements - 5 millions d'habitants</p>
              </div>
            </div>
          </div>

          {/* Liste des villes */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos zones d'intervention principales</h3>
            <p className="mb-6 text-gray-600">
              Nous intervenons dans toutes les communes de la région PACA pour réaliser les travaux nécessaires (perçage, passage de gaines, etc.) et permettre la finalisation de votre raccordement fibre :
            </p>
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-orange-600">{city.name}</h4>
                  <p className="text-sm text-gray-500">{city.population}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/demande-de-devis-travaux-de-fibre-optique"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Vérifier votre éligibilité
              </Link>
            </div>
          </div>
        </div>

        {/* Avantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Intervention rapide</h3>
            <p className="text-gray-600">
              Nos techniciens interviennent sous 48h dans toute la région PACA pour débloquer votre installation sans attendre un nouveau rendez-vous avec votre opérateur.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Équipes locales</h3>
            <p className="text-gray-600">
              Nos techniciens sont basés dans la région et connaissent parfaitement les spécificités des installations locales.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Garantie d'intervention</h3>
            <p className="text-gray-600">
              Nous garantissons la qualité de nos interventions et assurons un suivi après l'installation pour votre tranquillité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionCoverage;