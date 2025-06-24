"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Afficher la bannière après un court délai
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8 max-w-3xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Nous utilisons des cookies</h3>
            <p className="text-gray-600 text-sm">
              Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
              En cliquant sur "Accepter", vous consentez à notre utilisation des cookies. Vous pouvez également choisir de les refuser.
              Pour en savoir plus, consultez notre <Link href="/politique-confidentialite" className="text-orange-500 hover:underline">politique de confidentialité</Link>.
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Refuser
            </button>
            <button 
              onClick={handleAccept}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
