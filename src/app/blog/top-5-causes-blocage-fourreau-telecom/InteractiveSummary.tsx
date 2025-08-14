'use client';

import React, { useState } from 'react';

export default function InteractiveSummary() {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm mb-12 overflow-hidden border border-gray-200">
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-construction-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Dans ce guide complet
        </h2>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-3">
          <div 
            onClick={() => setActiveTab(0)} 
            className={`cursor-pointer px-5 py-3 rounded-lg flex-1 transition-all ${activeTab === 0 
              ? 'bg-construction-orange text-white shadow-md transform scale-105' 
              : 'bg-white border border-gray-200 hover:border-construction-orange hover:bg-orange-50'}`}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white text-construction-orange border-2 border-construction-orange flex items-center justify-center font-bold mr-3 shadow-sm">
                1
              </div>
              <h3 className="font-sm">5 causes principales</h3>
            </div>
          </div>
          
          <div 
            onClick={() => setActiveTab(1)} 
            className={`cursor-pointer px-5 py-3 rounded-lg flex-1 transition-all ${activeTab === 1 
              ? 'bg-construction-orange text-white shadow-md transform scale-105' 
              : 'bg-white border border-gray-200 hover:border-construction-orange hover:bg-orange-50'}`}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white text-construction-orange border-2 border-construction-orange flex items-center justify-center font-bold mr-3 shadow-sm">
                2
              </div>
              <h3 className="font-sm">Solutions professionnelles</h3>
            </div>
          </div>
          
          <div 
            onClick={() => setActiveTab(2)} 
            className={`cursor-pointer px-5 py-3 rounded-lg flex-1 transition-all ${activeTab === 2 
              ? 'bg-construction-orange text-white shadow-md transform scale-105' 
              : 'bg-white border border-gray-200 hover:border-construction-orange hover:bg-orange-50'}`}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white text-construction-orange border-2 border-construction-orange flex items-center justify-center font-bold mr-3 shadow-sm">
                3
              </div>
              <h3 className="font-sm">Erreurs à éviter</h3>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-5 bg-white rounded-lg border border-gray-200 shadow-inner">
          {activeTab === 0 && (
            <ul className="space-y-2.5">
              {[
                'Obstruction par terre, sable ou boue',
                'Écrasement ou déformation de la gaine',
                "Présence d'un ancien câble coincé",
                'Racines ou végétation envahissante',
                'Défaut de conception ou mauvais raccordement'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-construction-orange mt-2 mr-2.5"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
          {activeTab === 1 && (
            <ul className="space-y-2.5">
              {[
                'Inspection par caméra endoscopique',
                'Hydrocurage professionnel',
                'Extraction mécanique',
                'Remplacement de tronçon',
                'Pose de regard intermédiaire'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-construction-orange mt-2 mr-2.5"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
          {activeTab === 2 && (
            <ul className="space-y-2.5">
              {[
                "Forcer l'aiguille au risque de la casser",
                "Injecter de l'eau sans inspection préalable",
                "Creuser sans plans réseaux (risque électricité/gaz)",
                'Utiliser des produits chimiques corrosifs',
                "Tenter de réparer sans équipement adapté"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-construction-orange mt-2 mr-2.5"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
