import type { Metadata } from 'next'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

// Métadonnées SEO optimisées pour cet article spécifique avec données structurées Schema.org
export function generateMetadata(): Metadata {
  // Données structurées pour les moteurs de recherche (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Résoudre les blocages lors de l\'installation de la fibre optique : Guide complet',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/blocages-installation-fibre-optique.png',
    author: {
      '@type': 'Person',
      name: 'Expert Fibre Optique',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.fibreoptiquetravaux.fr/images/logo.png',
      },
    },
    datePublished: '2025-08-14',
    dateModified: '2025-08-14',
    description: 'Guide complet pour résoudre les blocages lors de l\'installation de la fibre optique : gaines bouchées, regards introuvables, câbles endommagés. Solutions professionnelles et outils.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.fibreoptiquetravaux.fr/blog/resoudre-blocages-installation-fibre-optique',
    },
  };

  return {
    title: "Résoudre les blocages lors de l'installation de la fibre optique : Guide complet",
    description: "Guide complet pour résoudre les blocages lors de l'installation de la fibre optique : gaines bouchées, regards introuvables, câbles endommagés. Solutions professionnelles et outils.",
    alternates: {
      canonical: "https://fibreoptiquetravaux.fr/blog/resoudre-blocages-installation-fibre-optique",
    },
    // Ajout des données structurées
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default function ResoudreBlocagesFibre() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {/* Fil d'Ariane */}
            <nav className="flex mb-8 text-sm">
              <Link href="/" className="text-gray-500 hover:text-construction-orange">
                Accueil
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/blog" className="text-gray-500 hover:text-construction-orange">
                Blog
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-construction-orange">Résoudre les blocages lors de l'installation de la fibre optique</span>
            </nav>

            {/* Image principale */}
            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/images/blog/blocages-installation-fibre-optique.png"
                alt="Résoudre les blocages lors de l'installation de la fibre optique"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Titre et introduction */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Résoudre les blocages lors de l'installation de la fibre optique : Guide complet</h1>

            <div className="prose max-w-none text-gray-600 mb-12">
              <p className="lead text-xl mb-6">
                L'installation de la fibre optique est censée être une étape simple vers un internet ultra-rapide. Mais sur le terrain, les choses ne se passent pas toujours comme prévu.
                Entre gaines bouchées, regards introuvables, câbles endommagés ou refus d'accès, les blocages techniques peuvent retarder la mise en service pendant des jours, voire des semaines.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 Ce que vous allez découvrir dans ce guide</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-construction-orange rounded-full mr-2"></span>
                      Diagnostic et identification
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Les 7 causes principales de blocages techniques</li>
                      <li>• Comment identifier rapidement la source du problème</li>
                      <li>• Les signes avant-coureurs à surveiller</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-construction-orange rounded-full mr-2"></span>
                      Solutions professionnelles
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Les techniques de déblocage éprouvées</li>
                      <li>• Les outils spécialisés et leur utilisation</li>
                      <li>• Quand faire appel aux services d'urgence</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-construction-orange">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Notre objectif :</strong> Vous fournir une méthode step-by-step pour résoudre 90% des blocages d'installation fibre, 
                    économiser des semaines d'attente et éviter les interventions coûteuses inutiles.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 font-medium">
                Que vous soyez <span className="text-construction-orange">particulier en attente de raccordement</span>, 
                <span className="text-construction-orange"> syndic gérant un immeuble</span>, 
                <span className="text-construction-orange"> entreprise pressée</span> ou 
                <span className="text-construction-orange"> technicien sur le terrain</span>, 
                ce guide vous donnera les clés pour débloquer efficacement la situation.
              </p>
            </div>

            {/* Table des matières */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Table des matières</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#comprendre-processus" className="text-construction-orange hover:underline">Comprendre le processus d'installation de la fibre</a>
                </li>
                <li>
                  <a href="#blocages-frequents" className="text-construction-orange hover:underline">Les blocages les plus fréquents</a>
                </li>
                <li>
                  <a href="#solutions-professionnelles" className="text-construction-orange hover:underline">Solutions professionnelles pour chaque blocage</a>
                </li>
                <li>
                  <a href="#outils-terrain" className="text-construction-orange hover:underline">Outils utilisés sur le terrain</a>
                </li>
                <li>
                  <a href="#etapes-deblocage" className="text-construction-orange hover:underline">Étapes pour débloquer une installation fibre</a>
                </li>
                <li>
                  <a href="#erreurs-eviter" className="text-construction-orange hover:underline">Erreurs fréquentes à éviter</a>
                </li>
                <li>
                  <a href="#cas-concrets" className="text-construction-orange hover:underline">Cas concrets</a>
                </li>
                <li>
                  <a href="#cout-interventions" className="text-construction-orange hover:underline">Coût des interventions</a>
                </li>
                <li>
                  <a href="#faq" className="text-construction-orange hover:underline">FAQ</a>
                </li>
              </ul>
            </div>
            {/* Section 1: Comprendre le processus d'installation */}
            <section id="comprendre-processus" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Comprendre le processus d'installation de la fibre</h2>
              </div>

              <div className="prose max-w-none text-gray-600 ml-12">
                <p>
                  Avant d'entrer dans le vif du sujet, il est essentiel de comprendre les étapes clés du raccordement fibre :
                </p>

                <ol className="list-decimal pl-5 space-y-2">
                  <li>Prise de rendez-vous avec un technicien.</li>
                  <li>Accès aux infrastructures existantes (gaine télécom, regard, poteau).</li>
                  <li>Passage de la fibre du point de branchement optique (PBO) à votre logement.</li>
                  <li>Installation du point de terminaison optique (PTO) à l'intérieur.</li>
                  <li>Tests et mise en service.</li>
                </ol>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Important :</strong> Un blocage peut survenir à n'importe laquelle de ces étapes, mais 80% des cas se produisent lors de l'accès à la gaine télécom.</span>
                  </p>
                </div>

                <div className="relative h-64 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/images/blog/probleme-installation-fibre.jpg"
                    alt="Processus d'installation de la fibre optique"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
            {/* Section 2: Les blocages les plus fréquents */}
            <section id="blocages-frequents" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Les blocages les plus fréquents</h2>
              </div>

              <div className="prose max-w-none text-gray-600 ml-12">
                {/* Sous-section: Gaine télécom bouchée */}
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Gaine télécom bouchée</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p><strong>Causes :</strong> terre infiltrée, racines d'arbres, câble coincé, déformation due à des travaux.</p>
                  <p><strong>Symptômes :</strong> l'aiguille du technicien ne passe pas, ou revient avec des traces de boue/terre.</p>

                  <div className="relative h-48 w-full my-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/blog/gaine-telecom.jpg"
                      alt="Gaine télécom bouchée"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Sous-section: Regard introuvable */}
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Regard introuvable</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Souvent recouvert de goudron, gravier ou végétation.</li>
                    <li>Parfois déplacé lors de travaux sur voirie.</li>
                  </ul>

                  <div className="relative h-48 w-full my-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/blog/regard-france-telecom.jpg"
                      alt="Regard télécom introuvable"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Sous-section: Câble cuivre ou fibre endommagé */}
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Câble cuivre ou fibre endommagé</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Détérioration par engins de chantier ou rongeurs.</li>
                    <li>Vieilles infrastructures fragilisées par le temps.</li>
                  </ul>
                </div>

                {/* Sous-section: Immeuble ou maison non éligible */}
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Immeuble ou maison non éligible</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p>L'opérateur annonce la fibre disponible, mais l'infrastructure n'est pas réellement raccordée.</p>
                </div>

                {/* Sous-section: Blocage administratif */}
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Blocage administratif</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p>Accès refusé par un syndic, copropriété ou propriétaire privé.</p>
                </div>
              </div>
            </section>
            {/* Section 3: Solutions professionnelles pour chaque blocage */}
            <section id="solutions-professionnelles" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m8-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Solutions professionnelles pour chaque blocage</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 ml-0 sm:ml-12">
                {/* Gaine télécom bouchée */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-800">Gaine télécom bouchée</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Inspection à l'aiguille + lubrifiant adapté (sans forcer pour ne pas percer la gaine).</li>
                    <li>Localisation précise du point de blocage par sonde + détecteur électromagnétique.</li>
                    <li>Hydrocurage basse pression si présence de terre/boue (sans endommager la gaine).</li>
                    <li>Passage de jonc spécifique et tirage progressif avec protections d'angle.</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">
                    Astuce: éviter les câbles nylon bon marché qui cassent; utiliser un jonc fibre de verre.
                  </p>
                </div>

                {/* Regard introuvable */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-800">Regard introuvable</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Recherche par détecteur + sonde insérée dans la gaine côté maison.</li>
                    <li>Analyse des plans et de l’alignement voirie (trottoir, bordure, entrées charretières).</li>
                    <li>Décapage localisé: grattage de l’enrobé/gravillons sur 20 à 30 cm si nécessaire.</li>
                    <li>Remise en affleurement + ré-identification du regard (peinture discrète).</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">
                    Important: éviter de casser à l’aveugle; toujours localiser précisément avant ouverture.
                  </p>
                </div>

                {/* Câble endommagé */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-800">Câble cuivre/fibre endommagé</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Test de continuité et mesure OTDR (réflectométrie) pour localiser la casse.</li>
                    <li>Réparation par épissure dans un boîtier étanche (si réseau éligible).</li>
                    <li>Remplacement de tronçon si le conduit le permet.</li>
                    <li>Protection et balisage pour éviter une nouvelle détérioration.</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">
                    Selon le domaine (opérateur/privé), l’intervention peut nécessiter une autorisation.
                  </p>
                </div>

                {/* Non éligible / Blocage administratif */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-800">Non éligible / Blocage administratif</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Vérification d’éligibilité et de la disponibilité PBO/PTO dans l’immeuble.</li>
                    <li>Préconisations techniques pour mise en conformité (fourreau, cheminement, goulotte).</li>
                    <li>Médiation syndic/copro: dossier photos + plan + devis des travaux nécessaires.</li>
                    <li>Planification de l’intervention après accord écrit du gestionnaire.</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">
                    Pour les copropriétés, une décision d’AG peut être requise pour les travaux en parties communes.
                  </p>
                </div>
              </div>
            </section>
            {/* Section 4: Outils utilisés sur le terrain */}
            <section id="outils-terrain" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 11-4 0 2 2 0 014 0zM6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2m6 0v-2a8 8 0 00-16 0v2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Outils utilisés sur le terrain</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 sm:ml-12">
                {/* Sonde détectable + détecteur électromagnétique */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Sonde détectable + détecteur EM</h3>
                  <p className="text-gray-600 mt-2">Permet de localiser précisément un point de blocage sous voirie ou jardin sans tout casser.</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-3">
                    <li>Précision de localisation: ±10–20 cm selon conditions.</li>
                    <li>Indispensable avant toute ouverture ciblée.</li>
                  </ul>
                </div>

                {/* Aiguille / jonc fibre de verre */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Aiguille / jonc fibre de verre</h3>
                  <p className="text-gray-600 mt-2">Outil de progression dans les gaines pour tester le passage et tirer un câble pilote.</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-3">
                    <li>Plus fiable que le nylon, évite la casse.</li>
                    <li>Utilisation avec lubrifiant adapté.</li>
                  </ul>
                </div>

                {/* Caméra endoscopique */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Caméra endoscopique</h3>
                  <p className="text-gray-600 mt-2">Inspection visuelle de l’intérieur des fourreaux pour identifier terre, écrasement, coudes.</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-3">
                    <li>Précise pour qualifier la nature du blocage.</li>
                    <li>Utile pour dossier photos avant/après.</li>
                  </ul>
                </div>

                {/* Localisateur de câbles */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Localisateur de câbles</h3>
                  <p className="text-gray-600 mt-2">Repérage des trajets de gaines et réseaux enterrés pour éviter d’endommager d’autres réseaux.</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-3">
                    <li>Sécurité: réduit le risque de touche tiers.</li>
                    <li>Complémentaire à la sonde détectable.</li>
                  </ul>
                </div>

                {/* Hydrocurage basse pression */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Hydrocurage basse pression</h3>
                  <p className="text-gray-600 mt-2">Nettoyage doux en cas de terre/boue dans la gaine sans la détériorer.</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-3">
                    <li>À utiliser avec précaution sur petits diamètres.</li>
                    <li>Suivi d’un séchage et tirage progressif.</li>
                  </ul>
                </div>

                {/* OTDR / réflectomètre */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">OTDR (réflectomètre)</h3>
                  <p className="text-gray-600 mt-2">Mesure et localisation des défauts sur les fibres (cassures, macro-courbures).</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-3">
                    <li>Indique la distance au défaut avec précision.</li>
                    <li>Indispensable pour les réparations d’épissures.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-8 ml-0 sm:ml-12 rounded">
                <p className="text-amber-800">
                  <strong>Sécurité:</strong> effectuer un marquage au sol et un balisage avant toute ouverture. Vérifier l’absence d’autres réseaux (élec, gaz, eau) avant décapage.
                </p>
              </div>
            </section>
            {/* Section 5: Étapes pour débloquer une installation fibre */}
            <section id="etapes-deblocage" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l1 2h10l1-2h2M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Étapes pour débloquer une installation fibre</h2>
              </div>

              <div className="ml-0 sm:ml-12">
                <ol className="relative border-l border-gray-200 pl-6 space-y-8">
                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">1</span>
                    <h3 className="text-lg font-semibold text-gray-800">Diagnostic initial</h3>
                    <p className="text-gray-600">Vérification du parcours (PBO → logement), test à l’aiguille et repérage des points durs.</p>
                  </li>

                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">2</span>
                    <h3 className="text-lg font-semibold text-gray-800">Localisation précise du blocage</h3>
                    <p className="text-gray-600">Sonde détectable + détecteur EM pour situer la profondeur et la distance du point bloqué.</p>
                  </li>

                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">3</span>
                    <h3 className="text-lg font-semibold text-gray-800">Ouverture ciblée si nécessaire</h3>
                    <p className="text-gray-600">Décapage localisé ou ouverture de regard, avec balisage et marquage au sol préalables.</p>
                  </li>

                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">4</span>
                    <h3 className="text-lg font-semibold text-gray-800">Traitement du blocage</h3>
                    <p className="text-gray-600">Hydrocurage doux, redressage de coude, dégagement de terre, ou réparation de gaine si possible.</p>
                  </li>

                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">5</span>
                    <h3 className="text-lg font-semibold text-gray-800">Passage et tirage</h3>
                    <p className="text-gray-600">Passage du jonc fibre de verre + tirage progressif du câble avec lubrifiant et protections d’angle.</p>
                  </li>

                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">6</span>
                    <h3 className="text-lg font-semibold text-gray-800">Contrôles et finitions</h3>
                    <p className="text-gray-600">Test de continuité, pose PTO, remise en état soignée des abords, prises de photos.</p>
                  </li>

                  <li>
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-construction-orange text-white text-sm">7</span>
                    <h3 className="text-lg font-semibold text-gray-800">Compte rendu et conseils</h3>
                    <p className="text-gray-600">Remise d’un compte rendu avec photos et recommandations pour éviter une récidive.</p>
                  </li>
                </ol>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-8 rounded">
                  <p className="text-green-800">
                    <strong>Objectif:</strong> permettre au technicien opérateur de finaliser votre raccordement sans nouvelle annulation.
                  </p>
                </div>
              </div>
            </section>
            {/* Section 6: Erreurs fréquentes à éviter */}
            <section id="erreurs-frequentes" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M8 9h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Erreurs fréquentes à éviter</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-0 sm:ml-12">
                {/* Colonne 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Ce qu’il ne faut pas faire</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Forcer avec une aiguille nylon et risquer de percer la gaine.</li>
                    <li>Creuser “au hasard” sans localisation préalable du point de blocage.</li>
                    <li>Injecter de l’eau à forte pression dans un petit fourreau.</li>
                    <li>Utiliser des produits non adaptés comme des solvants agressifs.</li>
                    <li>Tirer la fibre sans protections d’angle ni lubrifiant.</li>
                  </ul>
                </div>

                {/* Colonne 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-800">Bonnes pratiques</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Localiser précisément le blocage à la sonde + détecteur.</li>
                    <li>Privilégier un jonc en fibre de verre + lubrifiant spécifique.</li>
                    <li>Ouvrir proprement et de façon ciblée si nécessaire.</li>
                    <li>Contrôler le passage et protéger la fibre aux angles.</li>
                    <li>Documenter l’intervention (photos, distances, repères).</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-8 ml-0 sm:ml-12 rounded">
                <p className="text-amber-800">
                  <strong>Important :</strong> une mauvaise manipulation peut endommager durablement le fourreau et compliquer tout raccordement futur. Mieux vaut une localisation précise et une ouverture minimale que des essais au hasard.
                </p>
              </div>
            </section>
            {/* Section 7: Cas concrets */}
            <section id="cas-concrets" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Cas concrets</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 sm:ml-12">
                {/* Cas 1 */}
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">Gaine remplie de terre</h3>
                    <p className="text-sm text-gray-500 mt-1">Maison individuelle • Fourreau 40 mm</p>
                    <div className="mt-3 space-y-2 text-gray-700">
                      <p><strong>Problème:</strong> l’aiguille ne dépasse pas 6 m, retour boueux.</p>
                      <p><strong>Solution:</strong> localisation à la sonde à 12,4 m, hydrocurage basse pression + nouveau tirage.</p>
                      <p><strong>Résultat:</strong> fibre tirée, PTO posé, mise en service le jour même.</p>
                    </div>
                    <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Intervention 2h</span>
                  </div>
                </div>

                {/* Cas 2 */}
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">Regard recouvert d’enrobé</h3>
                    <p className="text-sm text-gray-500 mt-1">Pavillon • Entrée charretière</p>
                    <div className="mt-3 space-y-2 text-gray-700">
                      <p><strong>Problème:</strong> regard introuvable côté rue, opérateur repart.</p>
                      <p><strong>Solution:</strong> traçage par détecteur, décapage localisé (25×25 cm), remise en affleurement.</p>
                      <p><strong>Résultat:</strong> accès réseau rétabli, raccordement validé par l’opérateur.</p>
                    </div>
                    <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Ouverture ciblée</span>
                  </div>
                </div>

                {/* Cas 3 */}
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">Coude écrasé en sortie de maison</h3>
                    <p className="text-sm text-gray-500 mt-1">Rénovation • Faux-plat béton</p>
                    <div className="mt-3 space-y-2 text-gray-700">
                      <p><strong>Problème:</strong> coudes à 90° trop serrés, passage impossible.</p>
                      <p><strong>Solution:</strong> reprise du cheminement sur 1,5 m + pose goulotte extérieure + protections d’angle.</p>
                      <p><strong>Résultat:</strong> tirage fluide, signal stable, aucune micro-coupure.</p>
                    </div>
                    <span className="inline-block mt-3 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Adaptation cheminement</span>
                  </div>
                </div>
              </div>
            </section>
            {/* Section 8: Coût des interventions */}
            <section id="cout-interventions" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.5 0-4.5 2-4.5 4.5S9.5 17 12 17s4.5-2 4.5-4.5S14.5 8 12 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Coût des interventions</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 ml-0 sm:ml-12">
                {/* Diagnostic */}
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800">Diagnostic</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">230€</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Test de passage et repérage</li>
                    <li>Localisation précise du blocage</li>
                    <li>Compte rendu avec photos</li>
                  </ul>
                  <div className="mt-5">
                    <Link href="/tarifs" className="inline-block px-4 py-2 bg-construction-orange text-white rounded hover:opacity-90">Voir les tarifs</Link>
                  </div>
                </div>

                {/* Intervention standard */}
                <div className="bg-white border-2 border-construction-orange rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800">Intervention standard</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">530€</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Débouchage en sols meubles</li>
                    <li>Ouverture légère si nécessaire</li>
                    <li>Tirage du câble et protections</li>
                  </ul>
                  <div className="mt-5">
                    <Link href="/nos-services" className="inline-block px-4 py-2 bg-construction-orange text-white rounded hover:opacity-90">Demander une intervention</Link>
                  </div>
                </div>

                {/* Intervention complexe */}
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800">Intervention complexe</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">710€</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                    <li>Ouverture ciblée sur enrobé/béton</li>
                    <li>Réparation ou reprise de cheminement</li>
                    <li>Remise en état soignée</li>
                  </ul>
                  <div className="mt-5">
                    <Link href="/contact" className="inline-block px-4 py-2 bg-construction-orange text-white rounded hover:opacity-90">Obtenir un devis</Link>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 ml-0 sm:ml-12">
                Tarifs indicatifs hors conditions particulières. Consultez la page <Link href="/tarifs" className="text-construction-orange hover:underline">tarifs</Link> pour le détail.
              </p>
            </section>
            {/* Section 9: FAQ */}
            <section id="faq" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-construction-orange rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">FAQ</h2>
              </div>

              <div className="ml-0 sm:ml-12 space-y-3">
                <details className="bg-white border rounded-lg p-4 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-gray-800">Combien de temps prend une intervention de débouchage ?</summary>
                  <div className="mt-2 text-gray-600">
                    La majorité des interventions durent entre 1h30 et 3h selon l’accès et la nature du blocage.
                  </div>
                </details>

                <details className="bg-white border rounded-lg p-4 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-gray-800">Faut-il être présent lors de l’intervention ?</summary>
                  <div className="mt-2 text-gray-600">
                    Oui, pour valider le cheminement à l’intérieur et l’emplacement du PTO si besoin.
                  </div>
                </details>

                <details className="bg-white border rounded-lg p-4 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-gray-800">Intervenez-vous si l’opérateur a déjà annulé ?</summary>
                  <div className="mt-2 text-gray-600">
                    Oui. Nous préparons le terrain pour que l’opérateur puisse revenir et finaliser le raccordement.
                  </div>
                </details>

                <details className="bg-white border rounded-lg p-4 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-gray-800">Pouvez-vous retrouver un regard introuvable ?</summary>
                  <div className="mt-2 text-gray-600">
                    Oui, grâce à la sonde détectable et au détecteur EM, avec une ouverture ciblée si nécessaire.
                  </div>
                </details>
              </div>
            </section>
           
             {/* Section 10: Articles liés */}
             <div className="border-t border-gray-200 pt-12 mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Pour aller plus loin</h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/comment-trouver-regard-france-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/regard-france-telecom.jpg" alt="Illustration d'une tranchée pour la fibre" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Comment trouver un regard ou une plaque France Télécom ?
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Le déploiement de la fibre optique jusqu'à votre domicile nécessite de trouver le regard France Télécom permettant de raccorder votre réseau personnel au réseau collectif. 
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/regard-introuvable-installation-fibre-optique" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/regard-introuvable-fibre-optique.jpg" alt="Regard introuvable pour installer la fibre" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Regard Introuvable: Comment Finaliser Votre Raccordement Fibre</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Le dernier tronçon de la fibre passe sur votre domaine privé. Le technicien doit accéder à votre trappe télécom, souvent en limite de propriété.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/qui-appeler-debouchage-fourreau-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/detection-regard-ptt.jpeg" alt="Câble bloqué dans un fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Qui appeler pour le débouchage d'un fourreau télécom ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Face à un fourreau télécom bouché, découvrez quel professionnel contacter pour résoudre efficacement ce problème et permettre votre raccordement à la fibre optique. </p>
                    </div>
                  </Link>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/qui-peut-resoudre-probleme-installation-fibre" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/reparation-cable-fibre-optique.jpg" alt="Réparer un câble de fibre optique" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Qui peut résoudre mon problème d'installation fibre ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Câble fibre endommagé : qui appeler, comment intervenir et quelles étapes pour une remise en service fiable.</p>
                    </div>
                  </Link>
                </div>

                {/* Card 5 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Link href="/blog/prix-debouchage-fourreau-telecom" className="block h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/images/blog/prix-debouchage-fourreau-telecom.jpg" alt="Prix du débouchage de fourreau télécom" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-construction-orange">Quel prix pour déboucher un fourreau ?</h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Découvrez les tarifs pour le débouchage de fourreau télécom et les solutions pour respecter votre budget.</p>
                    </div>
                  </Link>
                </div>

               
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>

  );
}

