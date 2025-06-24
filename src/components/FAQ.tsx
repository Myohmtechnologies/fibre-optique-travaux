'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Que faire quand le technicien fibre dit que mon fourreau est bouché ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Lorsque le technicien de votre opérateur vous informe que votre fourreau est bouché, voici les étapes à suivre :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Contactez-nous pour un diagnostic précis du point de blocage
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Nous utilisons un équipement spécialisé pour localiser l'obstruction
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Nous débloquons le fourreau sans endommager les infrastructures
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Votre opérateur peut ensuite finaliser le raccordement
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Combien coûte une intervention pour débloquer une fibre optique en PACA ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Nos tarifs pour le déblocage fibre optique en PACA sont structurés comme suit :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <strong>Diagnostic complet : 230€</strong> (analyse de l'installation, détection des blocages)
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <strong>Intervention surface molle :</strong> à partir de 530€
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <strong>Intervention surface dure :</strong> à partir de 710€
            </li>
          </ul>
          <p className="text-gray-600 mt-4">Le diagnostic inclut une analyse complète de l'installation, la détection précise des points de blocage et une proposition de solutions adaptées. <strong>Important :</strong> le coût du diagnostic est offert si vous nous confiez la réalisation des travaux.</p>
        </>
      )
    },
    {
      question: "Dans quels délais pouvez-vous intervenir pour un regard introuvable ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Pour les interventions concernant un regard introuvable, nous garantissons :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Diagnostic téléphonique immédiat
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Intervention sous 24 à 48h en PACA
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Service d'urgence disponible (supplément tarifaire)
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Coordination directe avec votre opérateur
            </li>
          </ul>
          <p className="text-gray-600 mt-4">Notre équipe mobile couvre l'ensemble de la région PACA pour vous garantir une intervention rapide et efficace.</p>
        </>
      )
    },
    {
      question: "Comment se déroule une intervention de déblocage fibre optique ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Voici les étapes d'une intervention type de déblocage fibre optique :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Diagnostic initial et évaluation des obstacles
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Utilisation d'équipements spécialisés (aiguille, souffleur, caméra)
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Déblocage ou création d'un nouveau passage si nécessaire
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Test de passage et validation avec votre opérateur
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Quelles solutions quand le passage de la fibre est impossible dans les gaines ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Lorsque le passage de la fibre est impossible dans les gaines existantes, nous proposons plusieurs alternatives :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Création d'un nouveau fourreau en façade ou enterré
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Installation d'un regard intermédiaire pour faciliter le passage
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Utilisation de techniques de micro-tranchée moins invasives
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solutions aériennes conformes aux réglementations locales
            </li>
          </ul>
          <p className="text-gray-600 mt-4">Chaque situation est unique et nécessite une évaluation personnalisée. Nous vous proposons toujours la solution la plus adaptée à votre configuration et à votre budget.</p>
        </>
      )
    }
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button 
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-fiber-orange/10 rounded-xl flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-6 pb-4 transition-all duration-200 ${openIndex === index ? 'block' : 'hidden'}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-4">Vous avez d'autres questions ou besoin d'une intervention rapide ?</p>
        <a 
          href="#contact" 
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-fiber-orange to-construction-orange text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Demander un diagnostic gratuit
        </a>
      </div>
    </>
  );
};

export default FAQ; 