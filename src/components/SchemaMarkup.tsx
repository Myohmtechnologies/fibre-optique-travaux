import React from 'react';
import Head from 'next/head';

interface SchemaMarkupProps {
  pageType: 'home' | 'about' | 'contact' | 'realization' | 'blog' | 'services' | 'local';
  pageUrl: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  localBusiness?: {
    name: string;
    city: string;
    region: string;
  };
}

const SchemaMarkup = ({ pageType, pageUrl, title, description, image, date, localBusiness }: SchemaMarkupProps) => {
  // S'assurer que l'URL est absolue
  const absoluteUrl = pageUrl.startsWith('http') ? pageUrl : `https://fibreoptiquetravaux.fr${pageUrl}`;
  
  // Titre par défaut si non fourni
  const defaultTitle = 'Fibre Optique Travaux - Expert en travaux fibre optique';
  const pageTitle = title || defaultTitle;
  
  // Description par défaut si non fournie
  const defaultDescription = 'Expert en travaux fibre optique pour particuliers et professionnels. Installation, déblocage et maintenance fibre optique pour tous opérateurs.';
  const pageDescription = description || defaultDescription;

  // Schéma de base pour l'organisation
  const organizationSchema = {
    "@type": "LocalBusiness",
    "@id": "https://fibreoptiquetravaux.fr/#organization",
    "name": "Fibre Optique Travaux",
    "url": "https://fibreoptiquetravaux.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fibreoptiquetravaux.fr/images/logo-fibre-optique-travaux.png",
      "width": 180,
      "height": 60
    },
    "image": "https://fibreoptiquetravaux.fr/images/og-image.jpg",
    "description": "Vous n'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ? Nous intervenons pour débloquer votre installation et finaliser les travaux nécessaires.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "544 Av. Frédéric Mistral",
      "addressLocality": "Manosque",
      "postalCode": "04100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8361,
      "longitude": 5.7836
    },
    "telephone": "+33123456789",
    "email": "contact@fibreoptiquetravaux.fr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "€€"
  };

  // Schéma pour les services
  const servicesSchema = [
    {
      "@type": "Service",
      "@id": "https://fibreoptiquetravaux.fr/nos-services#installation",
      "name": "Installation Fibre Optique Complexe",
      "url": "https://fibreoptiquetravaux.fr/nos-services#installation",
      "provider": {
        "@id": "https://fibreoptiquetravaux.fr/#organization"
      },
      "description": "Installation complète de votre raccordement fibre optique, du point de branchement jusqu'à votre domicile.",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.8361,
          "longitude": 5.7836
        },
        "geoRadius": 50000
      }
    },
    {
      "@type": "Service",
      "@id": "https://fibreoptiquetravaux.fr/nos-services#depannage",
      "name": "Dépannage & Réparation Fibre Optique",
      "url": "https://fibreoptiquetravaux.fr/nos-services#depannage",
      "provider": {
        "@id": "https://fibreoptiquetravaux.fr/#organization"
      },
      "description": "Diagnostic et résolution rapide des problèmes de connexion fibre optique pour rétablir votre service internet.",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.8361,
          "longitude": 5.7836
        },
        "geoRadius": 50000
      }
    },
    {
      "@type": "Service",
      "@id": "https://fibreoptiquetravaux.fr/nos-services#deblocage",
      "name": "Déblocage Installation Fibre",
      "url": "https://fibreoptiquetravaux.fr/nos-services#deblocage",
      "provider": {
        "@id": "https://fibreoptiquetravaux.fr/#organization"
      },
      "description": "Service spécifique pour débloquer les installations de fibre optique lorsque le technicien de l'opérateur ne peut pas finaliser l'installation en raison de travaux nécessaires (perçage, passage de gaines, etc.).",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.8361,
          "longitude": 5.7836
        },
        "geoRadius": 50000
      }
    }
  ];

  // Schéma pour la page web
  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://fibreoptiquetravaux.fr/#website",
    "url": "https://fibreoptiquetravaux.fr",
    "name": "Fibre Optique Travaux",
    "description": "Services professionnels de déblocage et d'installation de fibre optique",
    "publisher": {
      "@id": "https://fibreoptiquetravaux.fr/#organization"
    }
  };

  // Schéma pour la page web actuelle
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${absoluteUrl}#webpage`,
    "url": absoluteUrl,
    "name": pageTitle,
    "isPartOf": {
      "@id": "https://fibreoptiquetravaux.fr/#website"
    },
    "about": {
      "@id": "https://fibreoptiquetravaux.fr/#organization"
    },
    "description": pageDescription
  };

  // Schéma FAQ pour la page d'accueil
  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://fibreoptiquetravaux.fr/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Que faire si le technicien de mon opérateur ne peut pas finaliser l'installation de ma fibre ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si le technicien de votre opérateur ne peut pas finaliser l'installation de votre fibre en raison de travaux nécessaires (perçage, passage de gaines, etc.), notre service de déblocage d'installation fibre peut prendre le relais pour vous éviter d'attendre un nouveau rendez-vous avec votre opérateur."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se déroule une intervention de déblocage fibre ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Notre intervention se déroule en plusieurs étapes : 1) Nous déterminons avec précision le point de blocage et sa profondeur à l'aide d'un détecteur innovant. 2) Nous effectuons un diagnostic complet et vous proposons un devis pour réaliser les travaux nécessaires. 3) Nos techniciens qualifiés interviennent rapidement pour vous permettre d'accéder à internet en très haut débit."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce un service d'urgence pour la fibre optique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, ce n'est pas un service d'urgence mais plutôt un service de déblocage qui permet au client de ne pas attendre un nouveau rendez-vous avec son opérateur. Nous intervenons lorsque des travaux spécifiques sont nécessaires pour finaliser l'installation (perçage, passage de gaines, etc.)."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la zone d'intervention de Fibre Optique Travaux ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous intervenons principalement à Manosque et dans la région PACA, dans un rayon d'environ 50 km autour de notre siège social."
        }
      }
    ]
  };

  // Schéma pour les offres de services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Travaux en fibre optique",
    "provider": {
      "@type": "Organization",
      "name": "Fibre Optique Travaux",
      "url": "https://fibreoptiquetravaux.fr/"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Diagnostic",
        "description": "Analyse complète de l'installation, Détection précise des points de blocage, Évaluation des travaux nécessaires, Proposition de solutions adaptées."
      },
      {
        "@type": "Offer",
        "name": "Travaux surface molle",
        "description": "Travaux sur surface molle uniquement de la terre, Identification du réseau cuivre en partie privative et publique, Aiguillage du fourreau à l'aide d'aiguille traçable et de sondes, Contre aiguillage réalisé pour cibler si un ou plusieurs points bloquants, Localisation du ou des blocages (regard ou fourreau bouché), Débouchage et réparation de fourreau ou de gaine, Terrassement pour rendre accessible un regard (1m max), Passage d'une ficelle de tirage une fois le problème résolu, Garantie sur le résultat des travaux, ligne fibre 100% raccordable, Compte rendu d'intervention transmis par e-mail."
      },
      {
        "@type": "Offer",
        "name": "Travaux surface dure",
        "description": "Travaux sur surface dure (béton, enrobé, pavé), Identification du réseau cuivre en partie privative et publique, Aiguillage du fourreau à l'aide d'aiguille traçable et de sondes, Contre aiguillage réalisé pour cibler si un ou plusieurs points bloquants, Localisation du ou des blocages (regard ou fourreau bouché), Débouchage et réparation de fourreau ou de gaine, Terrassement pour rendre accessible un regard (1m max), Passage d'une ficelle de tirage une fois le problème résolu, Travaux de maçonnerie pour la remise en état en fin d'intervention, Garantie sur le résultat des travaux, ligne fibre 100% raccordable, Compte rendu d'intervention transmis par e-mail."
      }
    ]
  };

  // Schéma pour les notes agrégées
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://fibreoptiquetravaux.fr/#organization",
      "name": "Fibre Optique Travaux"
    },
    "ratingValue": "5",
    "reviewCount": "100"
  };

  // Schéma pour les extraits d'avis
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness", 
      "name": "Fibre Optique Travaux",
      "description": "Services professionnels de déblocage et d'installation de fibre optique",
      "image": "https://fibreoptiquetravaux.fr/images/og-image.jpg"
    },
    "author": {
      "@type": "Person",
      "name": "Client satisfait"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "datePublished": "2025-03-20",
    "reviewBody": "Une excellente expérience avec le service de débloquage de fibre optique."
  };

  // Schéma spécifique pour les pages locales (villes)
  const localBusinessSchema = localBusiness ? {
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl}#localbusiness`,
    "name": `${localBusiness.name} ${localBusiness.city}`,
    "url": absoluteUrl,
    "image": "https://fibreoptiquetravaux.fr/images/og-image.jpg",
    "description": pageDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": localBusiness.city,
      "addressRegion": localBusiness.region,
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8361,
      "longitude": 5.7836
    },
    "telephone": "+33123456789",
    "email": "contact@fibreoptiquetravaux.fr",
    "areaServed": {
      "@type": "City",
      "name": localBusiness.city
    },
    "priceRange": "€€",
    "parentOrganization": {
      "@id": "https://fibreoptiquetravaux.fr/#organization"
    }
  } : null;

  // Schéma pour les services locaux
  const localServicesSchema = localBusiness ? [
    {
      "@type": "Service",
      "@id": `${absoluteUrl}#installation`,
      "name": `Installation Fibre Optique à ${localBusiness.city}`,
      "url": absoluteUrl,
      "provider": {
        "@id": `${absoluteUrl}#localbusiness`
      },
      "description": `Installation complète de votre raccordement fibre optique à ${localBusiness.city}, du point de branchement jusqu'à votre domicile.`,
      "areaServed": {
        "@type": "City",
        "name": localBusiness.city
      }
    },
    {
      "@type": "Service",
      "@id": `${absoluteUrl}#deblocage`,
      "name": `Déblocage Fibre Optique à ${localBusiness.city}`,
      "url": absoluteUrl,
      "provider": {
        "@id": `${absoluteUrl}#localbusiness`
      },
      "description": `Service spécifique pour débloquer les installations de fibre optique à ${localBusiness.city} lorsque le technicien de l'opérateur ne peut pas finaliser l'installation en raison de travaux nécessaires.`,
      "areaServed": {
        "@type": "City",
        "name": localBusiness.city
      }
    }
  ] : [];

  // Construction du schéma complet en fonction du type de page
  let fullSchema: any = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      webPageSchema,
      serviceSchema,
      aggregateRatingSchema,
      reviewSchema
    ]
  };

  // Ajout des services pour la page d'accueil et la page services
  if (pageType === 'home' || pageType === 'services') {
    fullSchema["@graph"] = [...fullSchema["@graph"], ...servicesSchema];
  }

  // Ajout de la FAQ pour la page d'accueil
  if (pageType === 'home') {
    fullSchema["@graph"].push(faqSchema);
  }

  // Ajout des schémas spécifiques pour les pages locales
  if (pageType === 'local' && localBusiness && localBusinessSchema) {
    fullSchema["@graph"].push(localBusinessSchema);
    if (localServicesSchema.length > 0) {
      fullSchema["@graph"] = [...fullSchema["@graph"], ...localServicesSchema];
    }
  }

  return (
    <Head>
      {/* Balises meta standard */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:type" content={pageType === 'blog' || pageType === 'realization' ? 'article' : 'website'} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fullSchema)
        }}
      />
    </Head>
  );
};

export default SchemaMarkup;
