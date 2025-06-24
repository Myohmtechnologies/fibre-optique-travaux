"use client";

import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thomas Dupont",
      role: "Particulier",
      content: "Après des mois de problèmes avec ma connexion fibre, l'équipe de FibreOptiqueTravaux a résolu le problème en une seule intervention. Professionnels et efficaces !",
      rating: 5,
      date: "15 février 2025"
    },
    {
      id: 2,
      name: "Marie Lefevre",
      role: "Gérante de PME",
      content: "Nous avons fait appel à leurs services pour l'installation complète de la fibre dans nos nouveaux locaux. Travail soigné, délais respectés et équipe à l'écoute.",
      rating: 5,
      date: "3 janvier 2025"
    },
    {
      id: 3,
      name: "Jean-Pierre Martin",
      role: "Syndic de copropriété",
      content: "Intervention rapide et efficace pour débloquer les fourreaux de notre immeuble. Grâce à eux, tous les résidents ont enfin pu être raccordés à la fibre.",
      rating: 5,
      date: "28 décembre 2024"
    },
    {
      id: 4,
      name: "Sophie Moreau",
      role: "Particulier",
      content: "Service client exceptionnel ! Ils ont trouvé une solution à mon problème de raccordement alors que mon opérateur m'avait laissé sans solution pendant des semaines.",
      rating: 5,
      date: "10 novembre 2024"
    },
    {
      id: 5,
      name: "Laurent Petit",
      role: "Architecte",
      content: "Excellente prestation pour l'installation de la fibre dans un bâtiment classé. Ils ont su trouver des solutions techniques tout en respectant les contraintes architecturales.",
      rating: 4,
      date: "5 octobre 2024"
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = 3;

  const nextTestimonial = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1)
    );
  };

  const prevTestimonial = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - 1 + (testimonials.length - visibleTestimonials + 1)) % 
      (testimonials.length - visibleTestimonials + 1)
    );
  };

  // Fonction pour générer les étoiles selon la note
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
    ));
  };

  // Auto-scroll toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Ce que nos clients disent</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-gray-500">basé sur 127 avis</span>
          </div>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" className="mr-2">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            <span className="text-sm text-gray-600">Avis Google vérifiés</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Boutons de navigation */}
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all focus:outline-none"
            aria-label="Témoignages précédents"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all focus:outline-none"
            aria-label="Témoignages suivants"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slider de témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(startIndex, startIndex + visibleTestimonials).map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                {/* En-tête avec logo Google et date */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" className="mr-1">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    <span className="font-medium text-gray-700">Google Review</span>
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
                
                {/* Étoiles */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Contenu du témoignage */}
                <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.content}</p>
                
                {/* Informations sur l'auteur */}
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-800 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicateurs de pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === startIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Aller aux témoignages ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Bouton CTA */}
          <div className="mt-12 text-center">
            <a
              href="/demande-de-devis-travaux-de-fibre-optique"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-orange-300 hover:border-orange-400"
            >
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Demandez votre devis gratuit
              </div>
            </a>
            <p className="text-gray-600 mt-3 text-sm">Réponse sous 24h - Sans engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
