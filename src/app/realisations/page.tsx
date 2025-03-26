import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fourreau télécom bouché, gaine ptt bloqué, regard introuvable ?',
  description: 'Votre fourreau télécom est bouché, votre gaine est bloqué, impossible de trouver votre regard pour la fibre ? Nous avons la solution',
};

async function fetchRealizations() {
  await connectToDatabase();
  
  const realizations = await Realization.find({ published: true })
    .sort({ date: -1 })
    .lean();
  
  return JSON.parse(JSON.stringify(realizations));
}

export default async function TravauxRealiser() {
  const realizations = await fetchRealizations();

  return (
    <div>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1>Quelques exemples deTravaux Réalisés</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos interventions de déblocage d'installation de fibre optique. 
              Nous intervenons rapidement pour résoudre les problèmes de passage de câbles, 
              de perçage et d'installation complète.
            </p>
          </div>
          
          {realizations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune réalisation disponible pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realizations.map((realization: any) => (
                <Link 
                  href={`/realisations/${realization.slug}`} 
                  key={realization._id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64 w-full">
                    {realization.images && realization.images.length > 0 ? (
                      <Image
                        src={realization.images[0]}
                        alt={realization.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Aucune image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-fiber-orange transition-colors">
                      {realization.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3" 
                      dangerouslySetInnerHTML={{ 
                        __html: realization.description.substring(0, 150) + '...' 
                      }} 
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(realization.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="text-fiber-orange font-medium group-hover:underline">
                        Voir détails
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}