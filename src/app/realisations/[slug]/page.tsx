import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const realization = await fetchRealization(params.slug);
  
  if (!realization) {
    return {
      title: 'Réalisation non trouvée | Fibre Optique Travaux',
    };
  }
  
  return {
    title: `${realization.title} | Fibre Optique Travaux`,
    description: realization.description.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

async function fetchRealization(slug: string) {
  await connectToDatabase();
  
  const realization = await Realization.findOne({ 
    slug,
    published: true
  }).lean();
  
  if (!realization) {
    return null;
  }
  
  return JSON.parse(JSON.stringify(realization));
}

export default async function RealizationPage({ params }: Props) {
  const realization = await fetchRealization(params.slug);
  
  if (!realization) {
    notFound();
  }

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/realisations" 
              className="inline-flex items-center text-fiber-orange hover:underline mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour aux réalisations
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {realization.title}
            </h1>
            
            <div className="text-gray-500 mb-8">
              Réalisé le {new Date(realization.date).toLocaleDateString('fr-FR')}
            </div>
            
            {/* Galerie d'images */}
            {realization.images && realization.images.length > 0 && (
              <div className="mb-8">
                <div className="relative h-96 w-full mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={realization.images[0]}
                    alt={realization.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {realization.images.length > 1 && (
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {realization.images.slice(1).map((image: string, index: number) => (
                      <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${realization.title} - Image ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: realization.description }} />
            </div>
            
            {/* Appel à l'action */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Vous avez un projet similaire ?
              </h2>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts est prête à intervenir pour débloquer votre installation 
                de fibre optique rapidement et efficacement.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-fiber-orange hover:bg-fiber-orange/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Demander un devis gratuit
              </Link>
            </div>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Demande de devis pour travaux de fibre optique",
                "provider": {
                  "@type": "Organization",
                  "name": "Fibre Optique Travaux",
                  "url": "https://www.fibreoptiquetravaux.fr"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Service de Déblocage de Fibre Optique",
                  "description": "Service professionnel pour débloquer les installations de fibre optique.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Fibre Optique Travaux",
                    "url": "https://www.fibreoptiquetravaux.fr",
                    "logo": "https://www.fibreoptiquetravaux.fr/images/logo-fibre-optique-travaux.png"
                  },
                  "serviceType": "Déblocage Fibre Optique",
                  "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": 43.8361,
                      "longitude": 5.7836
                    },
                    "geoRadius": 50000
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": "230.00",
                    "availability": "https://schema.org/InStock"
                  }
                }
              })}
            </script>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
