"use client";

import React from 'react';
import Image from 'next/image';
import { FiTool, FiHeart, FiUser } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Colonne Image */}
          <div className="md:w-1/3 w-full flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
              {/* IMPORTANT: Remplacez ce chemin par une vraie photo de vous. Par exemple : /images/votre-photo.jpg */}
              <Image
                src="/images/detection-point-de-blockage.png" 
                alt="Riadh, votre expert en fibre optique"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Colonne Contenu */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Derrière chaque intervention, une passion pour la connectivité
            </h2>
            <p className="text-orange-500 font-semibold text-xl mb-6">
              Riadh, votre artisan de la fibre optique
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Frustré de voir tant de personnes laissées pour compte par les grands opérateurs face à un problème de raccordement, j'ai fondé cette entreprise avec une mission simple : apporter une solution rapide, humaine et définitive. Chaque câble que je connecte, chaque fourreau que je débouche, c'est une famille ou une entreprise qui retrouve l'accès au monde numérique. C'est cette satisfaction qui me motive chaque jour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-500">
                    <FiTool className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Expertise Technique</h4>
                  <p className="text-gray-600 text-sm">Matériel de pointe pour un diagnostic précis et une réparation durable.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-500">
                    <FiHeart className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Approche Humaine</h4>
                  <p className="text-gray-600 text-sm">Je prends le temps de vous écouter et de vous expliquer chaque étape.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-500">
                    <FiUser className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Interlocuteur Unique</h4>
                  <p className="text-gray-600 text-sm">Vous parlez directement au technicien qui interviendra chez vous.</p>
                </div>
              </div>
            </div>
            
            {/* Bouton CTA */}
            <div className="mt-10 flex justify-center md:justify-start">
              <a
                href="/demande-de-devis-travaux-de-fibre-optique"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-base whitespace-nowrap relative overflow-hidden group border-2 border-orange-300 hover:border-orange-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Découvrez notre expertise
                <span className="absolute right-0 top-0 h-full w-12 -ml-12 bg-gradient-to-r from-transparent to-white/20 transform skew-x-30 transition-all duration-1000 group-hover:translate-x-full ease-out"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
