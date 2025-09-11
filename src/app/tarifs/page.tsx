"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import RequestModal from '@/components/RequestModal';

export default function Tarifs() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState<'diagnostic' | 'devis'>('diagnostic');
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const openModal = (type: 'diagnostic' | 'devis') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            {/* En-tête de la page */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Nos tarifs pour la détection de point de blocage
              </h1>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg max-w-2xl mx-auto text-neutral-dark">
                Des solutions adaptées à vos besoins avec des tarifs transparents pour tous vos travaux de déblocage fibre optique.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-br from-white via-blue-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-construction-orange rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-neutral-dark mb-4 bg-gradient-to-r from-neutral-dark to-construction-orange bg-clip-text text-transparent">
                  Comment sont calculés nos tarifs ?
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Nos tarifs transparents sont établis en fonction de critères précis qui déterminent la complexité de l'intervention nécessaire pour débloquer votre installation fibre optique
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="group bg-white p-6 rounded-xl shadow-lg border-l-4 border-construction-orange hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-construction-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-neutral-dark mb-3 group-hover:text-construction-orange transition-colors">Type de surface</h3>
                      <p className="text-gray-600 leading-relaxed">Le type de surface à traverser (terre, béton, enrobé, pavé) influence directement le coût et la technique d'intervention.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-neutral-dark mb-3 group-hover:text-blue-500 transition-colors">Distance de raccordement</h3>
                      <p className="text-gray-600 leading-relaxed">La longueur du parcours à réaliser pour le passage de la fibre est un facteur déterminant du coût final.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-neutral-dark mb-3 group-hover:text-red-500 transition-colors">Obstacles rencontrés</h3>
                      <p className="text-gray-600 leading-relaxed">La présence d'obstacles (murs porteurs, canalisations, etc.) peut nécessiter des techniques spécialisées.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-neutral-dark mb-3 group-hover:text-green-500 transition-colors">Matériel nécessaire</h3>
                      <p className="text-gray-600 leading-relaxed">Le type de gaines, goulottes et autres matériaux spécialisés requis pour votre installation.</p>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>

            {/* Forfaits */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="bg-neutral-dark text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Diagnostic</h3>
                  <div className="text-3xl font-bold mt-2">
                    <span className="text-construction-orange">230€</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Analyse complète de l'installation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Détection précise des points de blocage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Évaluation des travaux nécessaires</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Proposition de solutions adaptées</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <button 
                      onClick={() => openModal('diagnostic')}
                      className="block w-full text-center bg-construction-orange hover:bg-construction-orange-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Demander un diagnostic
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 transform scale-105 z-10">
                <div className="bg-construction-orange text-white p-6 text-center relative">
                  
                  <h3 className="text-xl font-bold">Surface Molle</h3>
                  <div className="text-3xl font-bold mt-2">
                    <span>530€</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Diagnostic complet inclus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Intervention sur terre ou pelouse</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Création de tranchée si nécessaire</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Passage de gaine et tirage de câble</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Garantie 2 ans</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <button 
                      onClick={() => openModal('devis')}
                      className="block w-full text-center bg-neutral-dark hover:bg-neutral-darker text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="bg-neutral-dark text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Surface Dure</h3>
                  <div className="text-3xl font-bold mt-2">
                    <span className="text-construction-orange">710€</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Diagnostic complet inclus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Intervention sur béton, enrobé ou pavé</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Perçage et découpe spécialisée</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Passage de gaine et tirage de câble</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-construction-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Garantie 2 ans</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <button 
                      onClick={() => openModal('devis')}
                      className="block w-full text-center bg-construction-orange hover:bg-construction-orange-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ sur les tarifs */}
            <div className="mb-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-dark mb-4 bg-gradient-to-r from-neutral-dark to-construction-orange bg-clip-text text-transparent">
                  Questions fréquentes sur nos tarifs
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Découvrez les réponses aux questions les plus courantes sur nos tarifs et modalités de paiement
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-construction-orange/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Le diagnostic est-il vraiment gratuit ?</h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaqIndex === 0 ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-200 ${openFaqIndex === 0 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 mb-4">Oui, le diagnostic initial est totalement gratuit si vous nous confiez ensuite les travaux.</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Diagnostic offert si vous acceptez notre devis
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tarif de 230€ si intervention non réalisée
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-construction-orange/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Comment se déroule le paiement ?</h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaqIndex === 1 ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-200 ${openFaqIndex === 1 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 mb-4">Nous acceptons plusieurs modalités de paiement pour votre confort :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Acompte de 30% à la signature du devis
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Solde payable à la fin des travaux
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Paiement par virement, chèque ou espèces accepté
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-construction-orange/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Les prix indiquent-ils la TVA ?</h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaqIndex === 2 ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-200 ${openFaqIndex === 2 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 mb-4">Nos tarifs sont transparents et adaptés selon votre statut :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Particuliers :</strong> Prix TTC (TVA incluse)
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Professionnels :</strong> Prix HT (Hors TVA)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-construction-orange/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Mon cas ne correspond pas aux forfaits ?</h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaqIndex === 3 ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-200 ${openFaqIndex === 3 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 mb-4">Chaque installation est unique, nous proposons des solutions personnalisées :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Devis personnalisé adapté à votre situation
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Évaluation technique précise sur site
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-construction-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Solutions innovantes pour cas complexes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-12 text-center">
                <p className="text-gray-700 mb-4">Vous avez d'autres questions sur nos tarifs ?</p>
                <button 
                  onClick={() => openModal('devis')}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-construction-orange to-construction-orange-dark text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Demander un devis personnalisé
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-construction-orange bg-opacity-10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">Besoin d'un devis personnalisé ?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Chaque installation de fibre optique est unique. Contactez-nous pour obtenir un devis précis et adapté à votre situation spécifique dans toute la région PACA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/demande-de-devis-travaux-de-fibre-optique"
                  className="bg-construction-orange hover:bg-construction-orange-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                >
                  Demander un devis gratuit
                </Link>
                <a href="tel:+33631372701" className="bg-neutral-dark hover:bg-neutral-darker text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        type={modalType} 
      />
    </div>
  );
}
