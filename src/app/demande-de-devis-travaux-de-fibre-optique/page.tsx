import React from "react";
import Link from "next/link";
import Image from "next/image";
import Simulator from "@/components/Simulator";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Demande de devis pour travaux de fibre optique | Débloquez votre installation",
  description: "Obtenez un devis rapide pour vos travaux de fibre optique. Nous intervenons sous 48h pour débloquer votre installation quand le technicien de votre opérateur ne peut pas finaliser le raccordement.",
  keywords: "devis fibre optique, travaux fibre optique, déblocage fibre, installation fibre, raccordement fibre",
};

export default function DevisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup 
        pageType="services" 
        pageUrl="https://fibreoptiquetravaux.fr/demande-de-devis-travaux-de-fibre-optique" 
      />
      
      {/* Header simplifié */}
      <header className="bg-white shadow-md py-5">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-64">
              <Image 
                src="/images/logo/logo-fibre-optique-light.webp" 
                alt="Fibre Optique Travaux" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
          
          {/* Numéro de téléphone */}
          <a 
            href="tel:0123456789" 
            className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            06 31 37 27 01
          </a>
        </div>
      </header>
      
      <main className="flex-grow">
        
        
        {/* Simulateur - priorité visuelle */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Simulator />
        </div>
        
        {/* Avantages - déplacés après le simulateur */}
        <div className="bg-gray-50 py-8 mt-8">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-center mb-6">Pourquoi choisir notre service de déblocage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">Intervention rapide</h3>
                <p className="text-sm text-gray-600 text-center">
                  Nous intervenons sous 48h pour débloquer votre installation de fibre optique sans attendre un nouveau rendez-vous avec votre opérateur.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">Expertise technique</h3>
                <p className="text-sm text-gray-600 text-center">
                  11 ans d'expérience dans le perçage, passage de gaines et autres travaux nécessaires pour finaliser votre raccordement fibre.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">Tarifs transparents</h3>
                <p className="text-sm text-gray-600 text-center">
                  Devis clair et détaillé, sans frais cachés. Vous ne payez que pour les travaux nécessaires au déblocage de votre installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
