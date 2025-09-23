import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// SEO Metadata with JSON-LD
export function generateMetadata(): Metadata {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pourquoi confier vos travaux télécom à notre entreprise ?',
    image: 'https://www.fibreoptiquetravaux.fr/images/nos-service.png',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-07',
    dateModified: '2025-08-07',
    description: 'Découvrez pourquoi notre expertise en recherche de regard, débouchage de fourreau et réparation garantit votre raccordement fibre à 100%. Solution clé en main.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/pourquoi-confier-travaux-telecom-entreprise' },
  };

  return {
    title: 'Pourquoi Confier Vos Travaux Fibre à Notre Entreprise ? | Garantie 100%',
    description: 'Raccordement fibre bloqué ? Découvrez pourquoi notre expertise en recherche de regard et débouchage de fourreau garantit une solution clé en main. 100% de réussite.',
    openGraph: {
      title: 'Pourquoi Confier Vos Travaux Fibre à Notre Entreprise ? | Garantie 100%',
      description: 'Raccordement fibre bloqué ? Découvrez pourquoi notre expertise en recherche de regard et débouchage de fourreau garantit une solution clé en main. 100% de réussite.',
      images: ['/images/nos-service.png'],
      type: 'article',
    },
    keywords: 'entreprise fibre optique, expert télécom, garantie raccordement fibre, recherche regard, débouchage fourreau, travaux fibre, solution clé en main',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function ConfierTravauxEntreprise() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <article className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center font-medium text-gray-500 hover:text-construction-orange">Accueil</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/blog" className="font-medium text-gray-500 hover:text-construction-orange">Blog</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="font-medium text-gray-800">Pourquoi nous choisir</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Pourquoi confier vos travaux télécom à notre entreprise ?</h1>
              <p className="text-lg text-gray-600">Votre raccordement fibre est bloqué ? Découvrez notre solution clé en main avec une garantie de réussite de 100% pour localiser votre regard, déboucher votre fourreau et assurer le passage du câble.</p>
            </header>

            {/* Main Image */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="/images/nos-service.png" alt="Équipe d'experts réalisant des travaux de fibre optique" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-lg text-gray-700 space-y-8">
                <p className="text-xl leading-relaxed">Vous attendez la fibre avec impatience, mais le technicien de votre opérateur repart sans vous raccorder à cause d'un regard introuvable ou d'un fourreau bouché ? C'est une situation frustrante où vous êtes laissé sans solution. <strong>Pour éviter cet échec, notre entreprise vous propose une solution clé en main, avec une garantie de réussite dans 100% des cas.</strong></p>

                {/* Section Expertise */}
                <section id="expertise" className="!mt-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre expertise : Une solution complète pour votre raccordement</h2>
                  <p className="mb-8">Spécialistes de la recherche de regard télécom, de la détection des points de blocage et de la résolution des problèmes complexes, nous vous offrons une garantie de service complète :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[ { title: 'Recherche de regard', description: 'Nous localisons votre regard télécom, où qu’il se trouve et quelle que soit sa profondeur.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' }, { title: 'Localisation de blocage', description: 'Nous identifions avec une précision centimétrique le ou les points de blocage sur votre conduit.', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' }, { title: 'Travaux de réparation', description: 'Nous réalisons tous les travaux nécessaires (débouchage, réparation) pour rendre le passage possible.', icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0z' }, { title: 'Passage du câble optique', description: 'Nous facilitons la tâche de votre opérateur en passant nous-mêmes le câble de la fibre optique.', icon: 'M9 5l7 7-7 7' }, { title: 'Remise en état impeccable', description: 'Nous nous engageons à restituer votre propriété dans son état d’origine après les travaux.', icon: 'M3 21v-4.5m0 0A1.5 1.5 0 014.5 15h15a1.5 1.5 0 011.5 1.5v4.5m-18 0h18' } ].map(item => (
                      <div key={item.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-construction-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section Équipe */}
                <section id="equipe" className="!mt-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Des techniciens experts et dédiés</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="font-semibold text-blue-800">Nous ne sous-traitons aucune de nos interventions. Notre équipe de collaborateurs expérimentés maîtrise chaque chantier pour vous garantir un service de la plus haute qualité et une réactivité maximale.</p>
                  </div>
                  <p className="mt-4">Dès que le problème est identifié, nous planifions les travaux dans les plus brefs délais. Notre qualification et nos équipements nous permettent de faire face à tous les types de situations, même les plus complexes, et nous nous engageons à une <strong>remise en état impeccable de vos extérieurs</strong> en cas de travaux lourds.</p>
                </section>

                {/* Section Technologie et Processus */}
                <section id="technologie" className="!mt-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologie de pointe et processus infaillible : Notre garantie 100% réussite</h2>
                  <p>Trouver un regard peut être un vrai défi, surtout si votre maison est ancienne. Il peut être recouvert par de la végétation, des aménagements, ou enterré profondément. C'est pourquoi nous avons investi dans un matériel de haute technologie :</p>
                  <div className="my-8 p-6 bg-gray-100 rounded-lg">
                    <h3 className="font-bold text-xl mb-4">Notre matériel professionnel :</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start"><span className="text-construction-orange font-bold mr-3">✓</span><div><strong>Aiguille traçable et microsonde (Ø 6,4 à 9 mm) :</strong> Conçues pour s'adapter à toutes les gaines, même les plus étroites.</div></li>
                      <li className="flex items-start"><span className="text-construction-orange font-bold mr-3">✓</span><div><strong>Sonde à haute fréquence (33kHz) et détecteur de précision :</strong> Nous localisons le signal avec une <strong>marge d’erreur de seulement 5 centimètres</strong>, nous évitant de creuser inutilement.</div></li>
                    </ul>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Notre processus de détection en 3 étapes :</h3>
                  <ol className="space-y-6 list-none">
                    <li className="flex"><div className="flex-shrink-0 w-10 h-10 bg-construction-orange text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div><div><strong>Identification du regard :</strong> Nous introduisons la sonde depuis votre habitation pour suivre le cheminement du fourreau et localiser le regard avec précision.</div></li>
                    <li className="flex"><div className="flex-shrink-0 w-10 h-10 bg-construction-orange text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div><div><strong>Localisation des blocages :</strong> Nous effectuons un aiguillage depuis votre logement, puis depuis le point d'accès public. Le croisement de ces données nous révèle l'emplacement exact du ou des blocages.</div></li>
                    <li className="flex"><div className="flex-shrink-0 w-10 h-10 bg-construction-orange text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div><div><strong>Débouchage et préparation :</strong> Nous réalisons les travaux pour libérer le passage et installons le câble de la fibre. Le technicien de votre opérateur n'a plus qu'à finaliser le raccordement.</div></li>
                  </ol>
                </section>

                {/* Section Avis Clients */}
                <section id="avis-clients" className="!mt-16 text-center bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">La garantie de réussite à 100%, nos clients en parlent le mieux !</h2>
                  <p className="max-w-2xl mx-auto mb-6">Ne nous croyez pas sur parole. Nous vous invitons à consulter nos avis clients pour voir comment nous avons résolu des situations complexes là où d'autres avaient échoué.</p>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      ))}
                    </div>
                    <p className="font-bold text-gray-800 text-lg">Nos 89 avis</p>
                  </div>
                </section>

                 <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                  <div className="bg-construction-orange text-white p-4">
                    <h3 className="text-xl font-bold">Nos Tarifs pour garantir votre raccordement</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg mb-2">Diagnostic</h4>
                        <p className="text-3xl font-bold text-construction-orange mb-2">230€</p>
                        <p className="text-sm text-gray-500">Localisation précise du regard ou blocage</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <h4 className="font-bold text-lg mb-2">Intervention standard</h4>
                        <p className="text-3xl font-bold text-construction-orange mb-2">530€</p>
                        <p className="text-sm text-gray-500">Détection + dégagement en surface souple</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg mb-2">Intervention complexe</h4>
                        <p className="text-3xl font-bold text-construction-orange mb-2">710€</p>
                        <p className="text-sm text-gray-500">Détection + dégagement en surface dure</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Link href="/demande-de-devis-travaux-de-fibre-optique" className="inline-flex items-center justify-center px-6 py-3 bg-construction-orange hover:bg-orange-600 text-white font-medium rounded-md shadow-sm transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Demander une intervention
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* Zone d'intervention */}
              <section id="zone-intervention" className="my-12 bg-gray-100 rounded-xl p-8 border">
                <h2 className="text-3xl font-bold mb-6 text-construction-orange text-center">ZONE D'INTERVENTION EN FRANCE</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/5">
                    <Image src="/images/carte-paca.png" alt="Carte de France des zones d'intervention" width={400} height={400} className="drop-shadow-md mx-auto"/>
                    <a 
                      href="tel:+33631372701" 
                      className="mt-6 bg-construction-orange hover:bg-orange-600 text-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200 block"
                      title="Appeler maintenant"
                    >
                      <p className="text-xl font-bold">06 31 37 27 01</p>
                      <p className="text-sm font-medium opacity-90">Contactez-nous pour une intervention</p>
                    </a>
                  </div>
                  <div className="md:w-3/5">
                    <p className="text-lg mb-4">Nous intervenons principalement partout dans la region  <strong>PACA</strong>.</p>
                    <p className="text-lg mb-4">Grâce à notre expertise, nous garantissons une solution fiable pour tout problème de fourreau bouché ou endommagé, avec une intervention sous 48h dans les grandes agglomérations.</p>
                  </div>
                </div>
              </section>

              {/* Articles similaires */}
              <div className="border-t border-gray-200 pt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">À lire également</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                    <Link href="/blog/detection-regard-ptt" className="block">
                      <div className="relative h-48"><Image src="/images/blog/detection-regard-ptt.jpeg" alt="Détection regard PTT" fill style={{objectFit: "cover"}}/></div>
                      <div className="p-4"><h3 className="font-bold text-lg text-gray-800 hover:text-construction-orange">Pourquoi réaliser la détection de votre regard PTT ?</h3><p className="text-sm text-gray-600 mt-2">Un regard PTT introuvable bloque votre raccordement ? Découvrez pourquoi et comment nos experts le localisent rapidement.</p></div>
                    </Link>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                    <Link href="/blog/comment-deboucher-reparer-fourreau-gaine" className="block">
                      <div className="relative h-48"><Image src="/images/blog/debouchage-fourreau.jpg" alt="Déboucher un fourreau télécom" fill style={{objectFit: "cover"}}/></div>
                      <div className="p-4"><h3 className="font-bold text-lg text-gray-800 hover:text-construction-orange">Comment déboucher un fourreau bloqué ?</h3><p className="text-sm text-gray-600 mt-2">Le guide complet pour comprendre, localiser et résoudre un problème de gaine ou fourreau bouché.</p></div>
                    </Link>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                    <Link href="/blog/comment-trouver-regard-france-telecom" className="block">
                      <div className="relative h-48"><Image src="/images/blog/regard-france-telecom.jpg" alt="Trouver un regard France Télécom" fill style={{objectFit: "cover"}}/></div>
                      <div className="p-4"><h3 className="font-bold text-lg text-gray-800 hover:text-construction-orange">Comment trouver un regard France Télécom ?</h3><p className="text-sm text-gray-600 mt-2">Le technicien vous demande de trouver le regard France Télécom ? Suivez notre guide pour le localiser.</p></div>
                    </Link>
                  </div>
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
