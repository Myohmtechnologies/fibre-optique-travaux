import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { FaTools, FaNetworkWired, FaSearchLocation, FaRoad, FaWrench, FaHome, FaArrowRight, FaCheck, FaWifi, FaExchangeAlt, FaWrench as FaWrenchAlt, FaMapMarkerAlt, FaHardHat, FaNetworkWired as FaNetworkWiredAlt, FaServer } from 'react-icons/fa';

export const metadata = {
  title: 'Nos Services de Débouchage et Installation Fibre Optique | Travaux Fibre Optique',
  description: 'Découvrez nos services spécialisés : débouchage de fourreau, recherche de regard, tirage de câble et installation fibre optique par des professionnels qualifiés.',
};

const ServiceCard = ({ 
  title, 
  description, 
  iconComponent: IconComponent,
  color
}: { 
  title: string; 
  description: string;
  iconComponent: React.ElementType;
  color: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:-translate-y-1 flex flex-col h-full group overflow-hidden relative">
      <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${color} opacity-10 group-hover:opacity-20 transition-all duration-300`}></div>
      
      <div className="flex items-center mb-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color} mr-4`}>
          <IconComponent className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      
      <div className="mt-auto">
        <Link href="/demande-de-devis-travaux-de-fibre-optique" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
          Demander un devis
          <FaArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const NosServicesPage = () => {
  // Liste des services
  const services = [
    {
      title: "DÉTECTION ET RÉPARATION DE GAINE",
      description: "Besoin de localiser vos gaines télécoms pour installer votre ligne ? Nos techniciens utilisent des équipements de pointe pour détecter précisément l'emplacement de vos gaines et réaliser les réparations nécessaires.",
      iconComponent: FaMapMarkerAlt,
      color: "bg-orange-100"
    },
    {
      title: "DÉBOUCHAGE DE FOURREAU ET GAINE PTT",
      description: "Votre fourreau ou votre gaine est bouché(e) ? Nous intervenons avec des techniques spécifiques pour déboucher vos infrastructures et permettre le passage de la fibre optique.",
      iconComponent: FaTools,
      color: "bg-blue-100"
    },
    {
      title: "AIGUILLAGE ET PASSAGE DE CÂBLE FIBRE",
      description: "Vous n'arrivez pas à faire passer le câble de fibre ? Notre expertise en aiguillage permet de préparer vos gaines et d'assurer un passage fluide de vos câbles fibre optique.",
      iconComponent: FaNetworkWired,
      color: "bg-orange-100"
    },
    {
      title: "RECHERCHE DE REGARD ET TRAPPE TELECOM",
      description: "Un regard est caché ou enterré dans votre jardin ? Nos équipes disposent d'outils spécialisés pour localiser et dégager les regards et trappes télécom dissimulés ou enfouis.",
      iconComponent: FaSearchLocation,
      color: "bg-blue-100"
    },
    {
      title: "ACCÈS AUX COMBLES ET VIDE SANITAIRE",
      description: "Passage fibre dans les combles ou le vide sanitaire ? Nous créons des accès sécurisés et réalisons les passages de câbles dans les espaces difficiles d'accès de votre habitation.",
      iconComponent: FaHome,
      color: "bg-orange-100"
    },
    {
      title: "TRANCHÉE ET POSE DE FOURREAUX TÉLÉCOM",
      description: "Vous souhaitez créer une adduction souterraine ? Nous réalisons les travaux de terrassement et la pose de fourreaux conformes aux normes télécom pour votre raccordement fibre.",
      iconComponent: FaHardHat,
      color: "bg-blue-100"
    },
    {
      title: "ENFOUISSEMENT DE CÂBLE ADSL ET FIBRE",
      description: "Vous souhaitez enterrer vos câbles adsl et ftth ? Notre équipe réalise l'enfouissement complet de vos câbles aériens pour une installation plus esthétique et durable.",
      iconComponent: FaRoad,
      color: "bg-orange-100"
    },
    {
      title: "INSTALLATION DE RÉSEAUX RJ45 ET FIBRE",
      description: "Besoin de créer un réseau fibre sur mesure ? Nous concevons et installons des réseaux RJ45 et fibre optique adaptés à vos besoins résidentiels ou professionnels.",
      iconComponent: FaServer,
      color: "bg-blue-100"
    },
    {
      title: "MODIFICATION DE CÂBLAGE ADSL ET FIBRE",
      description: "Besoin de déplacer votre prise fibre ou téléphonique ? Nos techniciens réalisent toutes modifications de votre installation existante pour l'adapter à vos besoins.",
      iconComponent: FaExchangeAlt,
      color: "bg-orange-100"
    },
    {
      title: "RÉPARATION DE CÂBLE ADSL ET FTTH",
      description: "Besoin d'une réparation sur un câble optique ? Nous intervenons rapidement pour diagnostiquer et réparer les problèmes sur vos câbles ADSL et fibre optique endommagés.",
      iconComponent: FaWrenchAlt,
      color: "bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup pageType="services" pageUrl="https://fibreoptiquetravaux.fr/nos-services" />
      <Header />
      <main>
        {/* Bannière avec contenu réduit */}
        <section className="relative bg-gray-900 text-white py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fiber-glow opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-construction-glow opacity-20 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Services Spécialisés
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Solutions professionnelles pour débloquer et installer votre fibre optique
              </p>
              <Link 
                href="/demande-de-devis-travaux-de-fibre-optique" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </section>

        {/* Section Présentation avec image et texte */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre expertise à votre service</h2>
              <p className="text-lg text-gray-600">
                Spécialistes des travaux de fibre optique, nous intervenons lorsque votre technicien opérateur ne peut pas finaliser l'installation en raison de travaux nécessaires.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              <div className="w-full md:w-1/2">
                <Image 
                  src="/images/nos-service.png" 
                  alt="Installation fibre optique" 
                  width={500} 
                  height={350}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Pourquoi faire appel à nos services ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                    <span className="text-gray-700">Intervention rapide sous 48h</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                    <span className="text-gray-700">Techniciens qualifiés et expérimentés</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                    <span className="text-gray-700">Travaux propres et soignés</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                    <span className="text-gray-700">Coordination avec votre opérateur</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                    <span className="text-gray-700">Devis transparent et sans surprise</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm">
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Problèmes et Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Problèmes que nous résolvons</h2>
              <p className="text-lg text-gray-600">
                Voici les situations courantes où notre expertise fait la différence pour votre installation fibre optique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Gaine bouchée ou écrasée</h3>
                <p className="text-gray-700 mb-3">Votre technicien ne peut pas passer la fibre car la gaine est obstruée ou endommagée.</p>
                <p className="text-gray-600 font-medium">Notre solution : <span className="text-gray-700 font-normal">Débouchage spécialisé ou remplacement de la gaine pour permettre le passage de la fibre.</span></p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Regard introuvable</h3>
                <p className="text-gray-700 mb-3">Le regard télécom est enterré ou dissimulé, empêchant l'accès au réseau.</p>
                <p className="text-gray-600 font-medium">Notre solution : <span className="text-gray-700 font-normal">Localisation précise et dégagement du regard pour permettre le raccordement.</span></p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Absence d'infrastructure</h3>
                <p className="text-gray-700 mb-3">Aucune gaine ou fourreau n'existe pour faire passer la fibre jusqu'à votre habitation.</p>
                <p className="text-gray-600 font-medium">Notre solution : <span className="text-gray-700 font-normal">Travaux de génie civil adaptés pour créer le passage nécessaire.</span></p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Gaine non aiguillée</h3>
                <p className="text-gray-700 mb-3">La gaine existe mais n'est pas préparée pour recevoir le câble fibre optique.</p>
                <p className="text-gray-600 font-medium">Notre solution : <span className="text-gray-700 font-normal">Aiguillage professionnel de la gaine pour faciliter le tirage du câble.</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos services spécialisés</h2>
              <p className="text-lg text-gray-600">
                Des solutions professionnelles pour tous vos besoins en matière d'installation fibre optique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  iconComponent={service.iconComponent}
                  color={service.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section Processus d'intervention */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre processus d'intervention</h2>
              <p className="text-lg text-gray-600">
                Une approche simple et efficace pour résoudre vos problèmes de fibre optique
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center mb-8 md:mb-0 px-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Diagnostic</h3>
                <p className="text-gray-600">Évaluation précise de votre problème de raccordement fibre optique</p>
              </div>
              
              <div className="flex flex-col items-center text-center mb-8 md:mb-0 px-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Devis gratuit</h3>
                <p className="text-gray-600">Proposition détaillée et transparente adaptée à votre situation</p>
              </div>
              
              <div className="flex flex-col items-center text-center mb-8 md:mb-0 px-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Intervention</h3>
                <p className="text-gray-600">Réalisation des travaux par nos techniciens qualifiés</p>
              </div>
              
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Finalisation</h3>
                <p className="text-gray-600">Coordination avec votre opérateur pour terminer l'installation</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section CTA */}
        <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à débloquer votre installation fibre ?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Nos techniciens spécialisés interviennent rapidement pour résoudre tous vos problèmes de raccordement fibre optique. Obtenez un devis gratuit et sans engagement en quelques clics.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/demande-de-devis-travaux-de-fibre-optique" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <span>Demander un devis gratuit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  <span>Nous contacter</span>
                </Link>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center">
                  <div className="bg-orange-500/20 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Intervention sous 48h</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-orange-500/20 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Devis gratuit sans engagement</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-orange-500/20 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Support téléphonique 6j/7</span>
                </div>
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
