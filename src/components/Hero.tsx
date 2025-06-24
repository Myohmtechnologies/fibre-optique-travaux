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
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Motif de réseau lumineux évoquant la fibre optique */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 20%, rgba(255, 107, 0, 0.05) 0%, rgba(255, 107, 0, 0) 60%),
                                                  radial-gradient(circle at 70% 60%, rgba(0, 112, 243, 0.05) 0%, rgba(0, 112, 243, 0) 60%)` }}></div>
        <div className="network-lines absolute inset-0">
          <svg 
            className="absolute h-full w-full opacity-10" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            {/* Points de connexion */}
            <circle cx="20" cy="20" r="0.7" fill="#FF6B00" />
            <circle cx="40" cy="25" r="0.7" fill="#FF6B00" />
            <circle cx="65" cy="15" r="0.7" fill="#FF6B00" />
            <circle cx="80" cy="30" r="0.7" fill="#FF6B00" />
            <circle cx="15" cy="60" r="0.7" fill="#0070F3" />
            <circle cx="30" cy="70" r="0.7" fill="#0070F3" />
            <circle cx="55" cy="65" r="0.7" fill="#0070F3" />
            <circle cx="75" cy="75" r="0.7" fill="#0070F3" />
            <circle cx="90" cy="50" r="0.7" fill="#0070F3" />
            
            {/* Lignes de connexion */}
            <line x1="20" y1="20" x2="40" y2="25" stroke="#FF6B00" strokeWidth="0.3" />
            <line x1="40" y1="25" x2="65" y2="15" stroke="#FF6B00" strokeWidth="0.3" />
            <line x1="65" y1="15" x2="80" y2="30" stroke="#FF6B00" strokeWidth="0.3" />
            <line x1="15" y1="60" x2="30" y2="70" stroke="#0070F3" strokeWidth="0.3" />
            <line x1="30" y1="70" x2="55" y2="65" stroke="#0070F3" strokeWidth="0.3" />
            <line x1="55" y1="65" x2="75" y2="75" stroke="#0070F3" strokeWidth="0.3" />
            <line x1="75" y1="75" x2="90" y2="50" stroke="#0070F3" strokeWidth="0.3" />
            
            {/* Connexions croisées */}
            <line x1="40" y1="25" x2="55" y2="65" stroke="#9333EA" strokeWidth="0.2" strokeDasharray="1,1" />
            <line x1="65" y1="15" x2="30" y2="70" stroke="#9333EA" strokeWidth="0.2" strokeDasharray="1,1" />
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        .network-lines {
          transform: scale(1.2);
        }
        @media (min-width: 768px) {
          .network-lines {
            transform: scale(1.5);
          }
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">

          {/* Colonne de gauche: Contenu textuel */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
              Déblocage Fibre Optique <span className="text-orange-500">Express</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Fourreau Bouché ? Regard Introuvable ?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
              <span className="block font-bold text-orange-500 mb-2">Là où votre opérateur abandonne, nous intervenons.</span>
              Intervention sous 24h dans toute la région PACA.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <Link
                href="/demande-de-devis-travaux-de-fibre-optique"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Demander une intervention rapide
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center lg:text-left">
              <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:bg-white transform hover:-translate-y-1">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
                  </svg>
                  <p className="font-semibold text-gray-800 text-sm">+10 ans d'expérience</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <p className="font-semibold text-gray-800 text-sm">Intervention sous 24h</p>
                </div>
              <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:bg-white transform hover:-translate-y-1">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-gray-800 text-sm">+500 blocages résolus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite: Carrousel d'images */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                loop={true}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-white font-semibold text-sm sm:text-base drop-shadow-md">{image.caption}</p>
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
      <div className="mt-12 pt-6">
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
}

export default Hero;