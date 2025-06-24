"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCookieBite } from 'react-icons/fa';

const SimpleCookieConsent = () => {
  // Définir isVisible à false par défaut pour éviter le flash initial
  const [isVisible, setIsVisible] = useState(false);
  // État pour suivre si le composant est monté côté client
  const [isMounted, setIsMounted] = useState(false);

  // Vérifier si nous sommes côté client
  useEffect(() => {
    setIsMounted(true);
    
    // Vérifier le consentement uniquement côté client
    try {
      const cookieConsent = localStorage.getItem('cookie-consent');
      
      // Si pas de consentement enregistré, afficher la bannière après un délai
      if (!cookieConsent) {
        console.log('Aucun consentement trouvé, affichage de la bannière...');
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      } else {
        console.log('Consentement déjà donné:', cookieConsent);
      }
    } catch (error) {
      console.error('Erreur lors de l\'accès à localStorage:', error);
    }
  }, []);

  const acceptCookies = () => {
    try {
      // Enregistrer le consentement
      localStorage.setItem('cookie-consent', 'accepted');
      localStorage.setItem('cookie-consent-date', new Date().toISOString());
      
      // Masquer la bannière
      setIsVisible(false);
      
      // Activer les cookies analytiques et marketing si nécessaire
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });
      }
      console.log('Cookies acceptés');
    } catch (error) {
      console.error('Erreur lors de l\'acceptation des cookies:', error);
    }
  };

  const declineCookies = () => {
    try {
      // Enregistrer le refus
      localStorage.setItem('cookie-consent', 'declined');
      localStorage.setItem('cookie-consent-date', new Date().toISOString());
      
      // Masquer la bannière
      setIsVisible(false);
      
      // Désactiver les cookies analytiques et marketing
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        });
      }
      console.log('Cookies refusés');
    } catch (error) {
      console.error('Erreur lors du refus des cookies:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <FaCookieBite className="text-orange-500 text-2xl mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Nous utilisons des cookies</h3>
              <p className="text-gray-600 text-sm">
                Ce site utilise des cookies pour améliorer votre expérience. 
                <Link href="/politique-confidentialite" className="text-orange-500 hover:underline ml-1">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={declineCookies}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Refuser
            </button>
            <button 
              onClick={acceptCookies}
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

export default SimpleCookieConsent;
