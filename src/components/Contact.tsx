"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    message: '',
  });

  const [status, setStatus] = useState({
    isSubmitting: false,
    success: false,
    error: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, success: false, error: '' });

    // Validation des champs obligatoires
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.postalCode || !formData.message) {
      setStatus({ isSubmitting: false, success: false, error: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }

    // Validation format Email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ isSubmitting: false, success: false, error: 'Veuillez entrer une adresse email valide.' });
      return;
    }

    // Validation format Téléphone (10 chiffres, FR)
    const phoneRegex = /^0[1-9](?:[ _.-]?\d{2}){4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus({ isSubmitting: false, success: false, error: 'Veuillez entrer un numéro de téléphone français valide (10 chiffres).' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Une erreur est survenue lors de l\'envoi.');
      }

      router.push('/merci');

    } catch (error: any) {
      setStatus({ isSubmitting: false, success: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-600 mb-12">Une question ? Un projet ? N'hésitez pas à nous contacter.</p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Colonne de gauche : Informations de contact */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h3>
            <p className="text-gray-600 mb-8">Contactez-nous directement ou remplissez le formulaire pour toute demande.</p>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <h4 className="font-semibold text-gray-700">Téléphone</h4>
                  <a href="tel:+33XXXXXXXXX" className="text-blue-600 hover:underline">06 31 37 27 01</a>
                </div>
              </div>
              <div className="flex items-start">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:contact@fibreoptiquetravaux.fr" className="text-blue-600 hover:underline">fibreoptiquetravaux1@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <h4 className="font-semibold text-gray-700">Adresse</h4>
                  <p className="text-gray-600">544 avenue fréderic mistral <br/>04100 Manosque, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite : Formulaire */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Adresse Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Adresse</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-2">Code Postal</label>
                    <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Votre message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required></textarea>
                </div>
                {status.error && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6 text-center">{status.error}</div>
                )}
                <div className="text-center">
                  <button type="submit" disabled={status.isSubmitting} className="w-full md:w-auto bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {status.isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
