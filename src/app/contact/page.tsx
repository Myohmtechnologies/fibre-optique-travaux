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
                            <a href="tel:+33600000000" className="hover:text-orange-500 transition-colors">+33 6 00 00 00 00</a>
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
                      href="tel:+33600000000" 
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

        {/* Section Carte */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold mb-8 text-center">Où nous trouver</h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
                {/* Ici, vous pourriez intégrer une carte Google Maps ou une autre solution de cartographie */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Carte Google Maps à intégrer ici</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-3">Dans quelles zones intervenez-vous ?</h4>
                  <p className="text-gray-600">
                    Nous intervenons principalement dans la région parisienne et ses environs. Contactez-nous pour vérifier si votre zone est couverte par nos services.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-3">Quel est le délai d'intervention ?</h4>
                  <p className="text-gray-600">
                    Nous nous efforçons d'intervenir dans les 24 à 48 heures suivant votre demande, selon notre disponibilité et l'urgence de votre situation.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-3">Comment se déroule une intervention ?</h4>
                  <p className="text-gray-600">
                    Après votre contact, nous établissons un diagnostic par téléphone, puis nous fixons un rendez-vous. Notre technicien se déplace chez vous, réalise les travaux nécessaires et s'assure que votre installation est fonctionnelle.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="text-xl font-semibold mb-3">Proposez-vous un devis gratuit ?</h4>
                  <p className="text-gray-600">
                    Oui, nous proposons un devis gratuit et sans engagement. Contactez-nous pour en faire la demande.
                  </p>
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
