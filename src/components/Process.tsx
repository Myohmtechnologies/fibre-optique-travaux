"use client";

import React from 'react';
import Link from 'next/link';

const Process = () => {
  const steps = [
    {
      title: 'Diagnostic',
      description: 'Analyse complète de votre installation pour identifier les problèmes de connexion fibre optique.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      type: 'fiber'
    },
    {
      title: 'Planification',
      description: 'Élaboration d\'un plan d\'intervention adapté à votre situation et à vos besoins spécifiques.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      type: 'construction'
    },
    {
      title: 'Travaux',
      description: 'Réalisation des travaux nécessaires : tirage de câbles, raccordement, installation d\'équipements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      type: 'construction'
    },
    {
      title: 'Test & Validation',
      description: 'Vérification complète de l\'installation et mesure des performances pour garantir une connexion optimale.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      type: 'fiber'
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Arrière-plan avec motif mixte */}
      <div className="absolute inset-0 bg-fiber-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-construction-pattern opacity-10"></div>
      
      {/* Effet de lueur */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neutral-dark opacity-30 blur-3xl"></div>
      
      {/* Cônes de signalisation routière */}
      <div className="absolute top-20 right-[15%] w-10 h-16 opacity-50">
        <div className="relative w-full h-full">
          {/* Base du cône */}
          <div className="absolute bottom-0 w-10 h-2 bg-construction-orange rounded-sm"></div>
          {/* Corps du cône */}
          <div className="absolute bottom-1.5 left-1 w-8 h-14 bg-construction-orange overflow-hidden">
            <div className="w-full h-2.5 bg-white mt-1.5"></div>
            <div className="w-full h-2.5 bg-white mt-1.5"></div>
            <div className="w-full h-2.5 bg-white mt-1.5"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-24 left-[12%] w-8 h-14 opacity-40 transform rotate-6">
        <div className="relative w-full h-full">
          {/* Base du cône */}
          <div className="absolute bottom-0 w-8 h-2 bg-construction-orange rounded-sm"></div>
          {/* Corps du cône */}
          <div className="absolute bottom-1.5 left-0.5 w-7 h-11 bg-construction-orange overflow-hidden">
            <div className="w-full h-2 bg-white mt-1.5"></div>
            <div className="w-full h-2 bg-white mt-1.5"></div>
            <div className="w-full h-2 bg-white mt-1.5"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neutral-dark">Notre</span> <span className="text-construction-orange">Processus</span>
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Notre approche méthodique garantit des interventions efficaces et des résultats durables pour tous vos besoins en fibre optique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`relative ${step.type === 'fiber' ? 'fiber-card' : 'construction-card'} p-6 hover:shadow-lg transition-shadow duration-300`}>
              <div className={`${step.type === 'fiber' ? 'fiber-icon' : 'construction-icon'} relative z-10`}>
                {step.icon}
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md">
                <span className={`text-sm font-bold ${step.type === 'fiber' ? 'text-neutral-dark' : 'text-construction-orange'}`}>
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-neutral-dark">{step.description}</p>
              
              {/* Ligne de connexion entre les étapes (visible uniquement sur desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neutral-dark to-construction-orange"></div>
              )}
              
              {/* Petit cône de signalisation pour les étapes de type construction */}
              {step.type === 'construction' && (
                <div className="absolute bottom-3 right-3 w-5 h-8 opacity-40">
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-0 w-5 h-1 bg-construction-orange rounded-sm"></div>
                    <div className="absolute bottom-0.5 left-0.5 w-4 h-7 bg-construction-orange overflow-hidden">
                      <div className="w-full h-1.5 bg-white mt-1"></div>
                      <div className="w-full h-1.5 bg-white mt-1"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
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
      </div>
    </section>
  );
};

export default Process;
