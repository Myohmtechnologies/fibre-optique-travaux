"use client"; // Ajoutez cette ligne

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [alert, setAlert] = useState({
    type: '',
    message: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    console.log('Données envoyées:', data); // Log des données envoyées

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'enregistrement du message.');
      }

      const result = await response.json();
      console.log('Message enregistré:', result); // Log du résultat
      setAlert({
        type: 'success',
        message: 'Votre message a été envoyé avec succès.',
      });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur:', error); // Log de l'erreur
      setAlert({
        type: 'error',
        message: 'Une erreur est survenue lors de l’envoi de votre message.',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup pageType="contact" pageUrl="https://fibreoptiquetravaux.fr/contact" />
      <Header />
      <main>
        {/* Bannière */}
        <section className="relative bg-gray-900 text-white py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fiber-glow opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-construction-glow opacity-20 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-300">FIBRE</span><span className="text-orange-500">OPTIQUE TRAVAUX</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contactez-nous</h2>
              <p className="text-xl text-gray-300 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos travaux de fibre optique.
              </p>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Formulaire de contact */}
                <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Prénom</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Votre prénom"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Nom</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Votre nom"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input 
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Votre numéro de téléphone"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                        <select 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="devis">Demande de devis</option>
                          <option value="info">Demande d'information</option>
                          <option value="urgence">Intervention urgente</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Décrivez votre besoin en détail..."
                          required
                        ></textarea>
                      </div>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input type="checkbox" className="w-5 h-5 text-orange-500" />
                          <span className="ml-2 text-gray-700">J'accepte que mes données soient utilisées pour être recontacté</span>
                        </label>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Envoyer ma demande
                      </button>
                    </form>
                    {alert.type === 'success' && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6" role="alert">
                        <span className="block sm:inline">{alert.message}</span>
                      </div>
                    )}
                    {alert.type === 'error' && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6" role="alert">
                        <span className="block sm:inline">{alert.message}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Informations de contact */}
                <div className="w-full lg:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-orange-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">Adresse</h4>
                          <p className="text-gray-600 mt-1">
                          544 Av. Frédéric Mistral
                          <br />
                            04100 Manosque<br />
                            France
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-orange-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">Téléphone</h4>
                          <p className="text-gray-600 mt-1">
                            <a href="tel:+33787179186" className="hover:text-orange-500 transition-colors">+33 6 31 37 27 01</a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-orange-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">Email</h4>
                          <p className="text-gray-600 mt-1">
                            <a href="mailto:contact@fibre-optique-travaux.fr" className="hover:text-orange-500 transition-colors">contact@fibre-optique-travaux.fr</a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-orange-100 rounded-full p-3 mr-4">
                          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">Horaires</h4>
                          <p className="text-gray-600 mt-1">
                            Lundi - Vendredi: 8h00 - 19h00<br />
                            Samedi: 9h00 - 17h00<br />
                            Dimanche: Fermé
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-xl font-semibold mb-4">Besoin d'une intervention rapide ?</h3>
                    <p className="text-gray-600 mb-6">
                      Nous intervenons rapidement pour débloquer votre installation fibre optique. Contactez-nous par téléphone pour une prise en charge immédiate.
                    </p>
                    <Link 
                      href="tel:+33631372701" 
                      className="inline-flex items-center w-full justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      Appeler maintenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Section FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-neutral-dark mb-4 bg-gradient-to-r from-neutral-dark to-orange-500 bg-clip-text text-transparent">
                  Questions fréquentes
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Découvrez les réponses aux questions les plus courantes sur nos services
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Dans quelles zones intervenez-vous ?</h4>
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
                    <p className="text-gray-600 mb-4">Nous intervenons dans toute la région PACA (Provence-Alpes-Côte d'Azur) :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Bouches-du-Rhône (13) : Marseille, Aix-en-Provence, Arles
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Alpes-Maritimes (06) : Nice, Cannes, Antibes, Menton
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Var (83) : Toulon, Saint-Raphaël, Hyères
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Vaucluse (84) : Avignon, Orange, Carpentras, Cavaillon
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Alpes-de-Haute-Provence (04) : Manosque, Digne-les-Bains
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Hautes-Alpes (05) : Gap, Briançon
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
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Quel est le délai d'intervention ?</h4>
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
                    <p className="text-gray-600 mb-4">Nos délais d'intervention sont adaptés à l'urgence de votre situation :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Intervention urgente :</strong> Dans les 24h
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Intervention standard :</strong> Sous 48h
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Diagnostic gratuit :</strong> Rendez-vous sous 72h
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
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Comment se déroule une intervention ?</h4>
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
                    <p className="text-gray-600 mb-4">Notre processus d'intervention en 5 étapes :</p>
                    <ol className="space-y-3">
                      <li className="flex items-start text-gray-600">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">1</span>
                        <span><strong>Contact initial :</strong> Prise de contact et analyse de votre situation</span>
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">2</span>
                        <span><strong>Diagnostic téléphonique :</strong> Évaluation préliminaire du problème</span>
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">3</span>
                        <span><strong>Rendez-vous :</strong> Planification de l'intervention sur site</span>
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">4</span>
                        <span><strong>Intervention :</strong> Localisation et résolution du blocage</span>
                      </li>
                      <li className="flex items-start text-gray-600">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">5</span>
                        <span><strong>Vérification :</strong> Test de fonctionnement et validation</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Proposez-vous un devis gratuit ?</h4>
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
                    <p className="text-gray-600 mb-4">Oui, nous proposons plusieurs options gratuites :</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Devis gratuit</strong> et sans engagement sous 24h
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Diagnostic offert</strong> si vous acceptez notre intervention
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <strong>Conseils téléphoniques</strong> gratuits pour évaluer votre situation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
