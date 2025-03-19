"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DetectionMethodSteps from '@/components/DetectionMethodSteps';

export default function DemoMethodSteps() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-8 text-center">
              Comment localiser des gaines télécom enterrées
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                La localisation précise des gaines télécom enterrées est une étape cruciale pour 
                l'installation de la fibre optique. Lorsque ces gaines sont enfouies ou difficiles 
                à repérer, plusieurs méthodes peuvent être employées pour les retrouver. Voici un 
                guide étape par étape pour localiser efficacement ces infrastructures souterraines.
              </p>
            </div>
            
            {/* Composant de méthodes par étapes */}
            <DetectionMethodSteps />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p>
                En suivant ces différentes méthodes, vous augmentez considérablement vos chances de 
                localiser avec précision les gaines télécom enterrées. Cependant, si malgré ces 
                techniques vous ne parvenez pas à les repérer, il est recommandé de faire appel à 
                des professionnels spécialisés dans la détection de réseaux souterrains.
              </p>
              
              <p>
                Nos équipes disposent d'équipements de pointe et d'une expertise reconnue pour 
                localiser avec précision vos gaines télécom, même dans les situations les plus 
                complexes. N'hésitez pas à nous contacter pour un diagnostic personnalisé.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
