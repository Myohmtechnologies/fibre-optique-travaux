"use client";

import React, { useState, useEffect } from 'react';
import CookieConsent from './CookieConsent';
import { acceptAllCookies, declineAllCookies, hasUserMadeChoice } from '@/utils/cookieManager';

const CookieConsentWrapper: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const hasChoice = hasUserMadeChoice();
    if (!hasChoice) {
      // Afficher la bannière après un court délai
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    acceptAllCookies();
    setShowConsent(false);
  };

  const handleDecline = () => {
    declineAllCookies();
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <CookieConsent 
      onAccept={handleAccept}
      onDecline={handleDecline}
    />
  );
};

export default CookieConsentWrapper;
