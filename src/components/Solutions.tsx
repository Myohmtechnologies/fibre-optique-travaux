"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">SOLUTIONS TECHNIQUES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Localisation précise du point de blocage
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            L'identification précise du point de blocage est essentielle pour déterminer qui doit prendre en charge les travaux. 
            Notre diagnostic permet de localiser exactement le problème et d'orienter vers la solution adaptée.
          </p>
        </motion.div>

        {/* Carte de diagnostic au centre */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform rotate-1 rounded-2xl opacity-10 blur-xl"></div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative z-10 hover:shadow-2xl transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <div className="h-72 md:h-full relative overflow-hidden">
                  <Image 
                    src="/images/detection-point-de-blockage.png" 
                    alt="Diagnostic précis du point de blocage" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/30 to-transparent opacity-60"></div>
                </div>
              </div>
              <div className="md:w-3/5 p-6 md:p-10">
                <div className="flex items-center mb-5">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bg-orange-50 text-orange-700 font-semibold px-4 py-1.5 rounded-full text-sm">ÉTAPE ESSENTIELLE</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Diagnostic précis du point de blocage</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  Notre équipe réalise un diagnostic complet pour localiser avec précision le point de blocage qui empêche le passage de la fibre optique. Grâce à nos équipements spécialisés, nous déterminons si le problème se situe :
                </p>
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 001 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">En domaine privé</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">En domaine public</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cette étape est <span className="font-semibold text-gray-800">cruciale</span> car elle détermine qui doit prendre en charge les travaux et quelle solution mettre en œuvre pour débloquer votre raccordement.
                </p>
                {/* CTA principal */}
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
        </motion.div>

        {/* Flèches de direction */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-12 items-center">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400 transform -rotate-45 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-orange-600 mt-1">Domaine privé</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 transform rotate-45 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-blue-600 mt-1">Domaine public</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Carte Domaine Privé */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
          >
            <div className="relative h-56">
              <Image 
                src="/images/domaine-privé.jpeg" 
                alt="Intervention en domaine privé" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70"></div>
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Domaine privé
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-1">Intervention chez vous</h3>
                <p className="text-white text-sm opacity-90 bg-orange-500/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full">À votre charge</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-5 leading-relaxed">
                Les travaux dans votre propriété sont sous votre responsabilité. Si le technicien de votre opérateur ne peut pas finaliser l'installation à cause d'une gaine impraticable, nous intervenons directement chez vous.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 p-5 rounded-xl mb-5 shadow-sm">
                <h4 className="font-semibold text-orange-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Notre solution
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Détection précise du point de blocage</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Débouchage ou remplacement de fourreaux</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Création de passage pour la fibre</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/domaine-prive" 
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors group"
              >
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Carte Domaine Public */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
          >
            <div className="relative h-56">
              <Image 
                src="/images/domaine-public.jpeg" 
                alt="Intervention en domaine public" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70"></div>
              <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Domaine public
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-1">Intervention sur voirie</h3>
                <p className="text-white text-sm opacity-90 bg-blue-500/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full">À la charge de l'opérateur</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-5 leading-relaxed">
                Lorsque le blocage est identifié sur le domaine public, c'est normalement à votre opérateur d'effectuer les démarches nécessaires. Cependant, ces procédures peuvent prendre du temps.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-5 rounded-xl mb-5 shadow-sm">
                <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Notre solution
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Rapport technique détaillé</span>
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
              <Link 
                href="/domaine-public" 
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors group"
              >
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* CTA principal en bas de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Besoin d'une intervention rapide pour votre fibre optique ?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Notre équipe d'experts est prête à intervenir pour résoudre votre problème de raccordement fibre optique dans les plus brefs délais.            
            </p>
            <Link
              href="/demande-de-devis-travaux-de-fibre-optique"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-3 group-hover:animate-pulse" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Demander un devis gratuit
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
