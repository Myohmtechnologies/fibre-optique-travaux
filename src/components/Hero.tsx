"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const Hero = () => {
  // État pour le texte SEO expansible
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Images d'interventions réelles
  const interventionImages = [
    {
      src: '/images/interventions/intervention-traveaux-fibre-optique-6.png',
      alt: 'Installation fibre optique dans un immeuble',
      caption: 'Déploiement fibre dans un immeuble collectif'
    },
    {
      src: '/images/interventions/intervention-traveaux-fibre-optique-1.png',
      alt: 'Installation fibre optique dans un immeuble',
      caption: 'Déploiement fibre dans un immeuble collectif'
    },
    {
      src: '/images/interventions/intervention-traveaux-fibre-optique-2.png',
      alt: 'Réparation de raccordement fibre',
      caption: 'Réparation d\'un raccordement défectueux'
    },
    {
      src: '/images/interventions/intervention-traveaux-fibre-optique-3.jpeg',
      alt: 'Installation fibre en zone difficile',
      caption: 'Installation en zone difficile d\'accès'
    },
    {
      src: '/images/interventions/intervention-traveaux-fibre-optique-4.jpeg',
      alt: 'Dépannage fibre optique urgent',
      caption: 'Intervention d\'urgence suite à une coupure'
    }
  ];

  // Fonction pour faire défiler vers la section du simulateur
  const scrollToSimulator = () => {
    const simulatorElement = document.getElementById('simulator');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 pt-6 pb-12 md:pt-10 md:pb-16">
      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-fiber-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Titre H1 optimisé pour SEO - prend toute la largeur en desktop */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-center lg:text-left lg:mb-8">
          <span className="text-black block lg:inline-block">Localisation Précise des Blocages Fibre</span> 
          <span className="text-orange-500 block lg:inline-block">| Regard Introuvable, Fourreau Bouché ?</span>
        </h1>
        
        {/* Structure principale en colonnes sur desktop, empilées sur mobile */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
          
          {/* Colonne de gauche: Contenu textuel */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Sous-titre */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-5">
              Nous débloquons votre raccordement fibre.
            </h2>
            
            {/* Cartes d'information - toujours visibles sur mobile */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">Raccordement bloqué ?</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Obstacle technique que votre opérateur ne peut pas résoudre ? Notre expertise débloque votre installation.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">Diagnostic précis</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Nos équipements spécialisés localisent exactement le point de blocage pour une intervention efficace.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">Solution sur mesure</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Devis personnalisé et travaux nécessaires pour vous connecter au très haut débit rapidement.</p>
                </div>
              </div>
            </div>
            
            {/* CTA principal avec texte sur une seule ligne */}
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
            
            {/* Badge de confiance - après le CTA */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center bg-orange-50 rounded-full px-3 py-1.5 text-xs font-medium text-orange-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                11 ans d'expérience
              </div>
              <div className="inline-flex items-center bg-orange-50 rounded-full px-3 py-1.5 text-xs font-medium text-orange-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Intervention sous 48h
              </div>
            </div>
          </div>
          
          {/* Colonne de droite: Carrousel d'images */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl lg:mt-10">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation
                loop={true}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80"
              >
                {interventionImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        priority={index < 2}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                        <p className="text-white font-medium text-xs sm:text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logos des opérateurs partenaires */}
      <div className="mt-12 pt-6 border-t border-gray-200">
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
    </section>
  );
};

export default Hero;
