"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCookieBite } from 'react-icons/fa';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  // Fonction pour vérifier si le navigateur est disponible
  const isBrowser = () => typeof window !== 'undefined';

  // Fonction pour vérifier si l'utilisateur a déjà fait un choix
  const checkCookieConsent = () => {
    if (!isBrowser()) return false;
    return localStorage.getItem('cookie-consent') !== null;
  };

  // Fonction pour accepter les cookies
  const acceptCookies = () => {
    if (!isBrowser()) return;
    
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Activer les cookies analytiques et marketing
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
    
    setShowBanner(false);
  };

  // Fonction pour refuser les cookies
  const declineCookies = () => {
    if (!isBrowser()) return;
    
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Désactiver les cookies analytiques et marketing
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
    
    setShowBanner(false);
  };

  // Effet pour vérifier le consentement au chargement
  useEffect(() => {
    // Attendre que le DOM soit complètement chargé
    const timer = setTimeout(() => {
      if (!checkCookieConsent()) {
        setShowBanner(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Ne rien afficher si la bannière ne doit pas être visible
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
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
              className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
