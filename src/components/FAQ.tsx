'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Comment réaliser des travaux fibre optique dans une maison ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Pour les travaux fibre optique maison, nous intervenons pour :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Perçage de murs porteurs
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Installation de fourreaux
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Réalisation de regards
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Tirage de câbles fibre
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Quelle entreprise pour les travaux fibre optique ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600">Fibre Optique Travaux est une entreprise spécialisée dans les travaux fibre optique depuis plus de 10 ans. Nous intervenons pour tous les opérateurs (Orange, Free, SFR, etc.) et réalisons tous types de travaux nécessaires à votre raccordement.</p>
          <div className="mt-4 flex items-center text-fiber-orange font-medium">
            <span>En savoir plus sur notre expertise</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </>
      )
    },
    {
      question: "Travaux fibre optique Orange : que faire en cas de blocage ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Si le technicien Orange ne peut pas finaliser votre installation, nous intervenons pour :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Débloquer les fourreaux obstrués
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Réaliser des travaux de génie civil
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Installer des regards techniques
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Effectuer des tirages de câbles
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Travaux fibre optique Free : quelles solutions ?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">Pour les travaux fibre optique Free, nous proposons :</p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solutions de déblocage adaptées
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Installation de fourreaux techniques
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Réalisation de regards
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-fiber-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Intervention rapide sous 48h
            </li>
          </ul>
        </>
      )
    }
  ];

  return (
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
  );
};

export default FAQ; 