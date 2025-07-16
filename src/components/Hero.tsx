"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

function Hero() {
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
   
  ];

  // Fonction pour faire défiler vers la section du simulateur
  const scrollToSimulator = () => {
    const simulatorElement = document.getElementById('simulator');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      

      <div className="relative z-10 text-center pt-16 pb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black mb-4">
          Fibre optique travaux
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-orange-600">
        Là où votre opérateur bloque, nous intervenons.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-start gap-8 px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        {/* Colonne de droite : Carte existante */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full lg:w-1/2 text-center border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fourreau Bouché ? Regard Introuvable ?
          </h2>
          <p className="text-lg md:text-xl text-orange-600 font-semibold mb-8">
          Intervention rapide et efficacité garantie
          </p>

          <div className="flex justify-center w-full">
            <Link
              href="/demande-de-devis-travaux-de-fibre-optique"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-3xl shadow-lg transition-all duration-300 text-base whitespace-nowrap relative overflow-hidden group border-2 border-orange-300 hover:border-orange-400"
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

          {/* Section Évaluation Google */} 
          <div className="flex items-center justify-center mt-6 space-x-2">
            <p className="text-gray-700 font-semibold">Nos clients sont satisfaits : 5/5</p>
            <div className="flex text-yellow-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
            </div>
          </div>

          {/* Logos des opérateurs */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-8">
            <div className="w-16 h-12 md:w-20 md:h-14 relative transition-all duration-300 hover:scale-105">
              <Image 
                src="/images/partnair-logo/SFR-2022-logo.svg.png" 
                alt="Logo SFR" 
                fill
                sizes="100px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-16 h-12 md:w-20 md:h-14 relative transition-all duration-300 hover:scale-105">
              <Image 
                src="/images/partnair-logo/Orange_logo.svg.png" 
                alt="Logo Orange" 
                fill
                sizes="100px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-16 h-12 md:w-20 md:h-14 relative transition-all duration-300 hover:scale-105">
              <Image 
                src="/images/partnair-logo/Bouygues_Télécom.png" 
                alt="Logo Bouygues Telecom" 
                fill
                sizes="100px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-16 h-12 md:w-20 md:h-14 relative transition-all duration-300 hover:scale-105">
              <Image 
                src="/images/partnair-logo/Free_logo.svg.png" 
                alt="Logo Free" 
                fill
                sizes="100px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
        {/* Colonne de gauche : Carrousel d'images */}
        <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full lg:w-1/2 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nos interventions en images</h3>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            className="rounded-lg overflow-hidden"
          >
            {interventionImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 md:h-80">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center">
                    <p className="text-sm font-semibold">{image.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
      </div>
    </section>
  );
}

export default Hero;