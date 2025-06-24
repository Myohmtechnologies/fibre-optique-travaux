"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Interface pour les données du formulaire
interface FormData {
  environment: string;
  housingType: string;
  operator: string;
  fullName: string;
  phone: string;
  address: string;
  postalCode: string;
  message: string;
}

const Simulator = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    environment: '',
    housingType: '',
    operator: '',
    fullName: '',
    phone: '',
    address: '',
    postalCode: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fonction pour gérer la sélection d'une option
  const handleOptionSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Validation côté client avant envoi
    const requiredFields = ['environment', 'housingType', 'operator', 'fullName', 'phone', 'address', 'postalCode'] as const;
    for (const field of requiredFields) {
      if (!formData[field]) {
        setSubmitError(`Le champ ${field} est requis`);
        setIsSubmitting(false);
        return;
      }
    }
    
    // Validation du code postal (5 chiffres)
    const postalCodeRegex = /^[0-9]{5}$/;
    if (!postalCodeRegex.test(formData.postalCode)) {
      setSubmitError('Le code postal doit contenir 5 chiffres');
      setIsSubmitting(false);
      return;
    }

    // Validation du numéro de téléphone (format français)
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitError('Le numéro de téléphone n\'est pas valide');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Envoi des données au serveur
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi de votre demande');
      }
      
      // Réinitialisation du formulaire
      setCurrentStep(1);
      setFormData({
        environment: '',
        housingType: '',
        operator: '',
        fullName: '',
        phone: '',
        address: '',
        postalCode: '',
        message: ''
      });
      
      // Redirection instantanée vers la page de remerciement
      router.push('/merci');
      
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      setSubmitError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const environments = [
    { id: 'terre', name: 'Terre', icon: '🌱', description: 'Terrain naturel sans aménagement' },
    { id: 'beton', name: 'Béton', icon: '🧱', description: 'Surface en béton ou ciment' },
    { id: 'pave', name: 'Pavé', icon: '🧩', description: 'Surface en pavés ou dalles' }
  ];

  const housingTypes = [
    { id: 'immeuble', name: 'Immeuble', icon: '🏢', description: 'Bâtiment collectif avec plusieurs logements' },
    { id: 'pavillon', name: 'Pavillon', icon: '🏡', description: 'Maison individuelle' },
    { id: 'professionnel', name: 'Local Professionnel', icon: '🏬', description: 'Bureau, commerce ou espace professionnel' }
  ];

  const operators = [
    { id: 'orange', name: 'Orange', logo: '/images/partnair-logo/Orange_logo.svg.png' },
    { id: 'sosh', name: 'Sosh', logo: '/images/partnair-logo/Sosh.png' },
    { id: 'free', name: 'Free', logo: '/images/partnair-logo/Free_logo.svg.png' },
    { id: 'bouygues', name: 'Bouygues', logo: '/images/partnair-logo/Bouygues_Télécom.png' },
    { id: 'sfr', name: 'SFR', logo: '/images/partnair-logo/SFR-2022-logo.svg.png' },
    { id: 'autre', name: 'Autre', logo: '/images/partnair-logo/other-operator.png' }
  ];

  return (
    <section id="simulator" className="py-12 relative overflow-hidden mx-auto max-w-5xl my-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 py-4 px-6 bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 text-white rounded-xl shadow-md">
              Demande de devis pour vos travaux de fibre optique
            </h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Répondez à quelques questions simples pour obtenir une estimation des travaux nécessaires pour votre raccordement fibre
          </p>
          
          {/* Indicateur d'étape */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= step 
                        ? 'bg-orange-500 text-white shadow-md' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-1 transition-all duration-500 ${currentStep > step ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Contenu du formulaire */}
          <form onSubmit={handleSubmit}>
            {/* Étape 1: Environnement */}
            {currentStep === 1 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Quel est votre environnement ?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {environments.map((env) => (
                    <div 
                      key={env.id}
                      onClick={() => handleOptionSelect('environment', env.id)}
                      className={`cursor-pointer p-5 rounded-lg border-2 transition-all hover:shadow-md ${
                        formData.environment === env.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3">{env.icon}</div>
                        <h4 className="font-medium text-base">{env.name}</h4>
                        <p className="text-sm text-gray-500 mt-2">{env.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 2: Type de logement */}
            {currentStep === 2 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Type de logement</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {housingTypes.map((type) => (
                    <div 
                      key={type.id}
                      onClick={() => handleOptionSelect('housingType', type.id)}
                      className={`cursor-pointer p-5 rounded-lg border-2 transition-all hover:shadow-md ${
                        formData.housingType === type.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3">{type.icon}</div>
                        <h4 className="font-medium text-base">{type.name}</h4>
                        <p className="text-sm text-gray-500 mt-2">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 3: Opérateur */}
            {currentStep === 3 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Votre opérateur</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {operators.map((op) => (
                    <div 
                      key={op.id}
                      onClick={() => handleOptionSelect('operator', op.id)}
                      className={`cursor-pointer p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                        formData.operator === op.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center h-16">
                        <div className="relative h-10 w-16">
                          <Image 
                            src={op.logo} 
                            alt={op.name} 
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <h4 className="font-medium text-sm mt-2">{op.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 4: Coordonnées */}
            {currentStep === 4 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Vos coordonnées</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Messages d'erreur ou de succès */}
            {submitError && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
                {submitError}
              </div>
            )}
            
            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md">
                Votre demande a été envoyée avec succès ! Nous vous contacterons très prochainement.
              </div>
            )}

            {/* Boutons de navigation */}
            <div className="flex justify-between mt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Précédent
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.environment) ||
                    (currentStep === 2 && !formData.housingType) ||
                    (currentStep === 3 && !formData.operator)
                  }
                  className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer ma demande'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
