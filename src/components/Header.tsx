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

  const handlePhoneClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17366889216/44P-CKmnw5kbEIDmltlA',
        'value': 1.0,
        'currency': 'EUR',
      });
    }
  };

  const handleInterventionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = e.currentTarget.href;

    const callback = () => {
      window.location.href = url;
    };

    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17366889216/wZF5CI-Z0JkbEIDmltlA',
        'value': 1.0,
        'currency': 'EUR',
        'event_callback': callback
      });
    } else {
      callback();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      {/* NAVBAR */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="Fibre Optique Travaux"
              width={200}
              height={100}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/tarifs"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Tarifs
            </Link>

            <Link
              href="/nos-services"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Nos Services
            </Link>

            <Link
              href="/realisations"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Réalisations
            </Link>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Téléphone + CTA */}
          <div className="hidden md:flex items-center space-x-4">

            <a
              href="tel:+33631372701"
              onClick={handlePhoneClick}
              className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors"
            >
              <FiPhone className="mr-2" />
              06 31 37 27 01
            </a>

            <Link
              href="/demande-de-devis-travaux-de-fibre-optique"
              onClick={handleInterventionClick}
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full shadow-md transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Demander une intervention
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center">

            <a
              href="tel:+33631372701"
              onClick={handlePhoneClick}
              className="mr-4 px-3 py-1 bg-orange-500 text-white font-medium rounded-lg text-sm flex items-center"
            >
              <FiPhone className="mr-1" />
              06 31 37 27 01
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

      {/* ========================================================= */}
      {/* BANDEAU AIDE FIBRE */}
      {/* ========================================================= */}

      <div className="bg-orange-50 border-t border-orange-100 border-b border-orange-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 py-2.5 text-sm md:text-base text-orange-900 text-center">

            <span className="font-medium">
              Des aides de l'état peuvent être disponibles selon votre situation
            </span>

            <Link
              href="/blog/aide-raccordement-fibre-2026"
              className="font-bold underline underline-offset-2 hover:text-orange-600 whitespace-nowrap transition-colors"
            >
              En savoir plus →
            </Link>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MENU MOBILE */}
      {/* ========================================================= */}

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-gray-200">

          <Link
            href="/tarifs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tarifs
          </Link>

          <Link
            href="/nos-services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Nos Services
          </Link>

          <Link
            href="/realisations"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Réalisations
          </Link>

          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="/demande-de-devis-travaux-de-fibre-optique"
              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 mx-3"
              onClick={(e) => {
                handleInterventionClick(e);
                setIsMenuOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Demander une intervention
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;