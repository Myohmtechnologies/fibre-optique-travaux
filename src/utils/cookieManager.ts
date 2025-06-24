// Gestionnaire de cookies pour le site

// Types de consentement
export interface CookieConsent {
  necessary: boolean;  // Toujours true, cookies nécessaires au fonctionnement du site
  analytics: boolean;  // Google Analytics, etc.
  marketing: boolean;  // Cookies de marketing/publicité
  preferences: boolean; // Préférences utilisateur
}

// Valeurs par défaut
const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false
};

// Sauvegarder les préférences de cookies
export const saveCookieConsent = (consent: CookieConsent): void => {
  // Enregistrer dans localStorage
  localStorage.setItem('cookie-consent', JSON.stringify(consent));
  localStorage.setItem('cookie-consent-date', new Date().toISOString());
  
  // Définir un cookie pour le serveur
  setCookie('cookie-consent', 'true', 365);
  
  // Activer/désactiver les services en fonction des préférences
  if (consent.analytics) {
    enableAnalytics();
  } else {
    disableAnalytics();
  }
  
  if (consent.marketing) {
    enableMarketing();
  } else {
    disableMarketing();
  }
};

// Récupérer les préférences de cookies
export const getCookieConsent = (): CookieConsent => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      return JSON.parse(consent);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des préférences de cookies:', error);
  }
  
  return defaultConsent;
};

// Accepter tous les cookies
export const acceptAllCookies = (): void => {
  saveCookieConsent({
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true
  });
};

// Refuser tous les cookies sauf nécessaires
export const declineAllCookies = (): void => {
  saveCookieConsent({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });
};

// Vérifier si l'utilisateur a déjà fait un choix
export const hasUserMadeChoice = (): boolean => {
  return localStorage.getItem('cookie-consent') !== null;
};

// Fonctions utilitaires pour les cookies
const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Fonctions pour activer/désactiver les services
const enableAnalytics = (): void => {
  // Code pour activer Google Analytics ou autres outils d'analyse
  console.log('Analytics activés');
  
  // Exemple pour Google Analytics (à adapter selon votre configuration)
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
};

const disableAnalytics = (): void => {
  // Code pour désactiver Google Analytics ou autres outils d'analyse
  console.log('Analytics désactivés');
  
  // Exemple pour Google Analytics (à adapter selon votre configuration)
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
};

const enableMarketing = (): void => {
  // Code pour activer les cookies marketing
  console.log('Cookies marketing activés');
  
  // Exemple pour Google Ads ou Facebook Pixel
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'ad_storage': 'granted'
    });
  }
};

const disableMarketing = (): void => {
  // Code pour désactiver les cookies marketing
  console.log('Cookies marketing désactivés');
  
  // Exemple pour Google Ads ou Facebook Pixel
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'ad_storage': 'denied'
    });
  }
};
