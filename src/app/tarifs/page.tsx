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
                Nos Tarifs
              </h1>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg max-w-2xl mx-auto text-neutral-dark">
                Des solutions adaptées à vos besoins avec des tarifs transparents pour tous vos travaux de déblocage fibre optique.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">Comment sont calculés nos tarifs ?</h2>
              <p className="mb-4">
                Nos tarifs sont établis en fonction de plusieurs critères qui déterminent la complexité de l'intervention nécessaire pour débloquer votre installation fibre optique :
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-construction-orange">
                  <h3 className="font-semibold mb-2 text-neutral-dark">Type de surface</h3>
                  <p className="text-sm">Le type de surface à traverser (terre, béton, enrobé, pavé) influence directement le coût de l'intervention.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-construction-orange">
                  <h3 className="font-semibold mb-2 text-neutral-dark">Distance de raccordement</h3>
                  <p className="text-sm">La longueur du parcours à réaliser pour le passage de la fibre est un facteur déterminant du prix.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-construction-orange">
                  <h3 className="font-semibold mb-2 text-neutral-dark">Obstacles rencontrés</h3>
                  <p className="text-sm">La présence d'obstacles (murs porteurs, canalisations, etc.) peut nécessiter des techniques spécifiques.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-construction-orange">
                  <h3 className="font-semibold mb-2 text-neutral-dark">Matériel nécessaire</h3>
                  <p className="text-sm">Le type de gaines, goulottes ou autres matériaux requis pour votre installation.</p>
                </div>
              </div>
            </div>

            {/* Grille tarifaire */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6 text-center">Grille tarifaire indicative</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg">
                  <thead>
                    <tr className="bg-neutral-dark text-white">
                      <th className="py-4 px-6 text-left rounded-tl-xl">Type d'intervention</th>
                      <th className="py-4 px-6 text-center">Prix à partir de</th>
                      <th className="py-4 px-6 text-center rounded-tr-xl">Délai estimé</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-medium">Diagnostic complet avec détection</td>
                      <td className="py-4 px-6 text-center text-construction-orange font-semibold">230€</td>
                      <td className="py-4 px-6 text-center">1-2 heures</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-4 px-6 font-medium">Intervention sur surface molle (terre, pelouse)</td>
                      <td className="py-4 px-6 text-center text-construction-orange font-semibold">530€</td>
                      <td className="py-4 px-6 text-center">2-4 heures</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-medium">Intervention sur surface dure (béton, enrobé, pavé)</td>
                      <td className="py-4 px-6 text-center text-construction-orange font-semibold">710€</td>
                      <td className="py-4 px-6 text-center">3-6 heures</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-4 px-6 font-medium">Installation de goulottes</td>
                      <td className="py-4 px-6 text-center text-construction-orange font-semibold">Sur devis</td>
                      <td className="py-4 px-6 text-center">Variable</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-medium">Tirage de câble en faux plafond/combles</td>
                      <td className="py-4 px-6 text-center text-construction-orange font-semibold">Sur devis</td>
                      <td className="py-4 px-6 text-center">Variable</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium rounded-bl-xl">Création de tranchée supplémentaire</td>
                      <td className="py-4 px-6 text-center text-construction-orange font-semibold">Sur devis</td>
                      <td className="py-4 px-6 text-center rounded-br-xl">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-3">Les prix indiqués sont TTC et peuvent varier en fonction de la complexité spécifique de chaque installation.</p>
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
                  <div className="absolute top-0 right-0 bg-neutral-dark text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                    POPULAIRE
                  </div>
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
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Questions fréquentes sur nos tarifs</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-neutral-dark mb-2">Le diagnostic est-il vraiment gratuit ?</h3>
                  <p>Oui, le diagnostic initial est totalement gratuit si vous nous confiez ensuite les travaux. Si vous décidez de ne pas faire les travaux après le diagnostic, des frais de déplacement de 50€ seront facturés.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-neutral-dark mb-2">Comment se déroule le paiement ?</h3>
                  <p>Nous acceptons les paiements par carte bancaire, virement ou chèque. Un acompte de 30% est demandé à la signature du devis, le solde étant payable à la fin des travaux.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-neutral-dark mb-2">Proposez-vous des facilités de paiement ?</h3>
                  <p>Oui, pour les interventions dépassant 500€, nous proposons un paiement en 2 ou 3 fois sans frais. N'hésitez pas à nous demander les modalités lors de l'établissement du devis.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-neutral-dark mb-2">Les prix indiqués incluent-ils la TVA ?</h3>
                  <p>Tous nos prix sont indiqués TTC (Toutes Taxes Comprises) pour les particuliers. Pour les professionnels, les tarifs sont indiqués HT (Hors Taxes).</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-neutral-dark mb-2">Que faire si mon cas ne correspond pas aux forfaits proposés ?</h3>
                  <p>Chaque installation est unique, c'est pourquoi nous proposons des devis personnalisés adaptés à votre situation spécifique. Contactez-nous pour une évaluation précise de vos besoins.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-construction-orange bg-opacity-10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">Besoin d'un devis personnalisé ?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Chaque installation de fibre optique est unique. Contactez-nous pour obtenir un devis précis et adapté à votre situation spécifique dans toute la région PACA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openModal('devis')}
                  className="bg-construction-orange hover:bg-construction-orange-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                >
                  Demander un devis gratuit
                </button>
                <a href="tel:+33123456789" className="bg-neutral-dark hover:bg-neutral-darker text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center">
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
