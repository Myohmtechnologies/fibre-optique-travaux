import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Entreprise de débouchage de fourreau et recherche de regard FT ',
  description: 'Vous recherchez une entreprise spécialisée dans la fibre optique pour réaliser le débouchage d&#039;un fourreau ou la recherche d&#039;un regard ?.',
};

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  color 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  color: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:-translate-y-1">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const NosServicesPage = () => {
  // Liste des services
  const services = [
    {
      title: "Déblocage d'installation fibre",
      description: "Nous intervenons lorsque votre technicien opérateur ne peut pas finaliser l'installation de votre fibre en raison de travaux nécessaires. Notre équipe prend le relais pour vous éviter d'attendre un nouveau rendez-vous.",
      icon: "/images/icons/fiber-icon.svg",
      color: "bg-fiber-glow/20"
    },
    {
      title: "Perçage et passage de gaines",
      description: "Nous réalisons les perçages nécessaires et l'installation de gaines pour permettre le passage de la fibre optique dans votre domicile ou local professionnel.",
      icon: "/images/icons/drill-icon.svg",
      color: "bg-construction-glow/20"
    },
    {
      title: "Installation de prises optiques",
      description: "Nous installons des prises optiques supplémentaires dans les pièces de votre choix pour une connexion optimale dans toute votre habitation.",
      icon: "/images/icons/outlet-icon.svg",
      color: "bg-fiber-glow/20"
    },
    {
      title: "Tirage de câbles",
      description: "Notre équipe effectue le tirage de câbles fibre optique dans les gaines existantes ou nouvellement installées pour connecter votre logement au réseau.",
      icon: "/images/icons/cable-icon.svg",
      color: "bg-construction-glow/20"
    },
    {
      title: "Raccordement au réseau",
      description: "Nous assurons le raccordement de votre installation au réseau fibre optique de votre opérateur, en coordination avec les services techniques concernés.",
      icon: "/images/icons/network-icon.svg",
      color: "bg-fiber-glow/20"
    },
    {
      title: "Diagnostic et dépannage",
      description: "En cas de problème avec votre connexion fibre, nous réalisons un diagnostic complet et effectuons les réparations nécessaires pour rétablir votre service.",
      icon: "/images/icons/diagnostic-icon.svg",
      color: "bg-construction-glow/20"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup pageType="services" pageUrl="https://fibreoptiquetravaux.fr/nos-services" />
      <Header />
      <main>
        {/* Bannière */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fiber-glow opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-construction-glow opacity-20 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Besoin de travaux pour débloquer votre fibre optique ?
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nos Services Spécialisés</h2>
              <div className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
                <p className="mb-4">
                  Travaux-Fibre-Optique est une entreprise spécialisée dans le débouchage de fourreau pour la fibre optique. Notre équipe propose la réalisation des travaux dont le technicien de votre opérateur télécoms a besoin pour finaliser le raccordement de votre domicile.
                </p>
                <p className="mb-4">
                  Qu'il s'agisse d'une gaine bloqué, d'un regard introuvable, d'une tranchée à effectuer ou d'un aiguillage de gaine, nous sommes là pour vous accompagner. Avec Travaux-Fibre-Optique plus besoin de faire appel à : un électricien, un jardinier, un maçon ou un terrassier puisque tous ces métiers sont réunis au sein de notre équipe.
                </p>
                <p className="text-xl mt-6">
                  Des solutions professionnelles pour débloquer votre installation fibre optique
                </p>
              </div>
              <Link 
                href="/demande-de-devis-travaux-de-fibre-optique" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Besoin d'un devis
              </Link>
            </div>
          </div>
        </section>

        {/* Section Présentation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre expertise à votre service</h2>
              <p className="text-lg text-gray-600">
                Spécialistes des travaux de fibre optique, nous intervenons lorsque votre technicien opérateur ne peut pas finaliser l'installation en raison de travaux nécessaires. Notre équipe qualifiée prend le relais pour vous éviter d'attendre un nouveau rendez-vous avec votre opérateur.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              <div className="w-full md:w-1/2">
                <Image 
                  src="/images/fiber-installation.jpg" 
                  alt="Installation fibre optique" 
                  width={500} 
                  height={350}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Pourquoi faire appel à nos services ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">Intervention rapide pour débloquer votre installation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">Techniciens qualifiés et expérimentés</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">Travaux propres et soignés</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">Coordination avec votre opérateur</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">Devis transparent et sans surprise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos services spécialisés</h2>
              <p className="text-lg text-gray-600">
                Découvrez notre gamme complète de services pour répondre à tous vos besoins en matière d'installation et de dépannage de fibre optique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à débloquer votre installation fibre ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ne restez pas bloqué en attente d'un nouveau rendez-vous avec votre opérateur. Contactez-nous dès maintenant pour une intervention rapide et professionnelle.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Demander un devis
                </Link>
                <Link 
                  href="tel:+33612345678" 
                  className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300"
                >
                  Nous appeler
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NosServicesPage;
