"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo/logo-fibre-optique-light.webp" 
              alt="Fibre Optique Travaux" 
              width={180} 
              height={50} 
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Navigation pour Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/tarifs" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Tarifs
            </Link>
            <Link href="/nos-services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Nos Services
            </Link>
            <Link href="/realisations" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Réalisations
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Numéro de téléphone et bouton d'intervention */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+33123456789" 
              className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <FiPhone className="mr-2" />
              07 87 17 91 86
            </a>
            
            <Link
              href="/demande-de-devis-travaux-de-fibre-optique"
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg shadow-md transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Demander une intervention
            </Link>
          </div>

          {/* Bouton de menu mobile */}
          <div className="md:hidden flex items-center">
            <a 
              href="tel:+33787179186" 
              className="mr-4 px-3 py-1 bg-orange-500 text-white font-medium rounded-lg text-sm flex items-center"
            >
              <FiPhone className="mr-1" />
              07 87 17 91 86
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link 
            href="/tarifs" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
             Tarifs
          </Link>
          <Link 
            href="/services" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            blog
          </Link>
          <Link 
            href="/realisations" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Réalisations
          </Link>
          <Link 
            href="/demande-de-devis-travaux-de-fibre-optique" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Devis
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/demande-de-devis-travaux-de-fibre-optique"
            className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg shadow-md transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Demander une intervention
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;