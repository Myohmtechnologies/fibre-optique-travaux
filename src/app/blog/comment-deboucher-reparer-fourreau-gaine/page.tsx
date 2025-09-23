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
    headline: 'Comment Déboucher et Réparer un Fourreau Fibre Optique ?',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/debouchage-fourreau.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-07',
    dateModified: '2025-08-07',
    description: 'Guide complet sur les méthodes professionnelles pour déboucher un fourreau télécom bouché, localiser le blocage et réparer une gaine endommagée pour la fibre optique.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.fibreoptiquetravaux.fr/blog/comment-deboucher-reparer-fourreau-gaine' },
  };

  return {
    title: 'Déboucher Fourreau Fibre Optique Bouché | Guide Réparation Gaine',
    description: 'Fourreau télécom bouché ? Découvrez nos solutions pour localiser, déboucher et réparer votre gaine ou conduit pour le passage de la fibre. Intervention rapide.',
    openGraph: {
      title: 'Déboucher Fourreau Fibre Optique Bouché | Guide Réparation Gaine',
      description: 'Fourreau télécom bouché ? Découvrez nos solutions pour localiser, déboucher et réparer votre gaine ou conduit pour le passage de la fibre. Intervention rapide.',
      images: ['/images/blog/debouchage-fourreau.jpg'],
      type: 'article',
    },
    keywords: 'déboucher fourreau, fourreau bouché, réparation gaine télécom, passage fibre impossible, débouchage gaine, localisation blocage fibre, hydrocurage',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function DeboucherReparerFourreau() {
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
                  <Link href="/" className="inline-flex items-center font-medium text-gray-500 hover:text-construction-orange">
                    Accueil
                  </Link>
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
                    <span className="font-medium text-gray-800">Déboucher un fourreau</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Comment déboucher un fourreau télécom bloqué ?</h1>
              <p className="text-lg text-gray-600">Le guide complet pour comprendre, localiser et résoudre un problème de gaine ou fourreau bouché qui bloque votre raccordement à la fibre optique.</p>
            </header>

            {/* Main Image */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src="/images/blog/debouchage-fourreau.jpg" alt="Intervention pour déboucher un fourreau télécom" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12 shadow-inner border">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Sommaire de l'article</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li><a href="#pourquoi-fourreau-bouche" className="text-construction-orange hover:underline font-medium">Pourquoi un fourreau se bouche-t-il ?</a></li>
                  <li><a href="#comment-localiser" className="text-construction-orange hover:underline font-medium">Comment localiser le point de blocage avec précision ?</a></li>
                  <li><a href="#methodes-debouchage" className="text-construction-orange hover:underline font-medium">Quelles sont les méthodes de débouchage professionnelles ?</a></li>
                  <li><a href="#reparation-gaine" className="text-construction-orange hover:underline font-medium">Quand et comment réparer une gaine endommagée ?</a></li>
                  <li><a href="#prevention" className="text-construction-orange hover:underline font-medium">Conseils de prévention pour éviter un nouveau bouchon</a></li>
                </ul>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-construction-orange">
                <p>Le raccordement à la fibre optique est une étape clé, mais elle peut vite tourner au casse-tête si le technicien annonce : "Désolé, le fourreau est bouché". Cette situation, frustrante, est malheureusement fréquente. Heureusement, des solutions existent. Cet article détaille les causes d'un blocage et les méthodes professionnelles pour y remédier.</p>
                
                <section id="pourquoi-fourreau-bouche" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold mt-12 mb-4">Pourquoi un fourreau se bouche-t-il ?</h2>
                  <p>Un fourreau télécom, même s'il est conçu pour être résistant, peut se boucher pour plusieurs raisons :</p>
                  <ul>
                    <li><strong>Accumulation de sédiments :</strong> Avec le temps, de la terre, du sable ou des graviers peuvent s'infiltrer et créer un bouchon compact.</li>
                    <li><strong>Écrasement du conduit :</strong> Le passage de véhicules lourds, des travaux de terrassement ou un affaissement de terrain peuvent comprimer ou écraser la gaine.</li>
                    <li><strong>Racines d'arbres :</strong> La croissance des racines peut percer ou déformer le fourreau, créant une obstruction majeure.</li>
                    <li><strong>Anciens câbles ou débris :</strong> Des restes de câbles ou des débris laissés lors de précédentes installations peuvent bloquer le passage.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="text-yellow-800"><strong>Le saviez-vous ?</strong> Un simple coude trop serré dans l'installation d'origine peut également être considéré comme un point de blocage pour l'aiguille de tirage de la fibre.</p>
                  </div>
                </section>

                <section id="comment-localiser" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold mt-12 mb-4">Comment localiser le point de blocage avec précision ?</h2>
                  <p>Avant toute intervention, une localisation précise est indispensable pour éviter de creuser inutilement. Les professionnels utilisent un équipement spécifique :</p>
                  <ol>
                    <li><strong>L'aiguille de tirage :</strong> Une tige flexible est insérée dans le fourreau depuis un regard de visite.</li>
                    <li><strong>La sonde de détection :</strong> Une petite sonde émettrice est fixée à l'extrémité de l'aiguille.</li>
                    <li><strong>Le détecteur électromagnétique :</strong> En surface, un récepteur suit le signal de la sonde, permettant de tracer le parcours de la gaine et de s'arrêter précisément à l'endroit où l'aiguille est bloquée.</li>
                  </ol>
                  
                </section>

                <section id="methodes-debouchage" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold mt-12 mb-4">Quelles sont les méthodes de débouchage professionnelles ?</h2>
                  <p>Une fois le bouchon localisé, plusieurs techniques peuvent être employées selon sa nature :</p>
                  <h3 className="text-2xl font-semibold mt-6 mb-3">L'hydrocurage (Haute Pression)</h3>
                  <p>Pour les bouchons de terre, sable ou sédiments, l'hydrocurage est la solution la plus efficace. Un jet d'eau à très haute pression est projeté dans le fourreau pour désagréger et évacuer le bouchon. C'est une méthode rapide et qui n'endommage pas le conduit.</p>
                  

                  <h3 className="text-2xl font-semibold mt-6 mb-3">Le furet mécanique ou l'aspiration</h3>
                  <p>Pour des bouchons plus résistants, un furet mécanique peut être utilisé pour percer l'obstruction. Dans d'autres cas, un système d'aspiration puissant peut retirer les débris.</p>
                </section>

                <section id="reparation-gaine" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold mt-12 mb-4">Quand et comment réparer une gaine endommagée ?</h2>
                  <p>Si le blocage est dû à un écrasement ou une cassure du fourreau, le débouchage ne suffit pas. Une réparation est nécessaire. Elle implique une petite excavation (tranchée) au point précis du défaut pour :</p>
                  <ul>
                    <li>Déterrer la section endommagée.</li>
                    <li>Couper et retirer la partie défectueuse.</li>
                    <li>Poser un nouveau segment de gaine et le raccorder avec des manchons étanches.</li>
                    <li>Vérifier le bon passage de l'aiguille avant de refermer la tranchée.</li>
                  </ul>
                </section>

                <section id="prevention" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold mt-12 mb-4">Conseils de prévention pour éviter un nouveau bouchon</h2>
                  <p>Après une réparation, ou pour une installation neuve, assurez-vous que :</p>
                  <ul>
                    <li>Le fourreau est posé sur un lit de sable pour le protéger.</li>
                    <li>Un grillage avertisseur de couleur verte est placé au-dessus du conduit pour signaler sa présence lors de futurs travaux.</li>
                    <li>Les regards de visite restent accessibles et ne sont pas recouverts.</li>
                  </ul>
                </section>

                <div className="bg-construction-orange bg-opacity-10 p-6 rounded-lg my-12 border border-construction-orange text-center">
                  <h3 className="text-2xl font-bold mb-3 text-construction-orange">Un problème de fourreau bouché ?</h3>
                  <p className="mb-4">Ne laissez pas un conduit bloqué retarder votre accès à la fibre. Notre équipe intervient avec l'équipement adéquat pour localiser et résoudre le problème rapidement.</p>
                  <a href="/contact" className="inline-block bg-construction-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300 shadow-lg">Demander un diagnostic</a>
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
                      className="mt-6 bg-construction-orange hover:bg-orange-600 text-white p-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-200 block group"
                      title="Appeler maintenant"
                    >
                      <p className="text-2xl font-bold group-hover:scale-105 transition-transform">06 31 37 27 01</p>
                      <p className="uppercase text-sm font-semibold opacity-90 group-hover:opacity-100">📞 Contactez-nous pour une intervention</p>
                    </a>
                  </div>
                  <div className="md:w-3/5">
                    <p className="text-lg mb-4">Nous intervenons principalement en <strong>PACA, Occitanie, Auvergne-Rhône-Alpes et Île-de-France</strong>.</p>
                    <p className="text-lg mb-4">Grâce à notre expertise, nous garantissons une solution fiable pour tout problème de fourreau bouché ou endommagé, avec une intervention sous 48h dans les grandes agglomérations.</p>
                  </div>
                </div>
              </section>
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                  <div className="bg-construction-orange text-white p-4">
                    <h3 className="text-xl font-bold">Nos Tarifs de détection de regard PTT</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-lg mb-2">Diagnostic</h4>
                        <p className="text-3xl font-bold text-construction-orange mb-2">230€</p>
                        <p className="text-sm text-gray-500">Localisation précise du regard PTT</p>
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
                      <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-construction-orange hover:bg-orange-600 text-white font-medium rounded-md shadow-sm transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Demander une intervention
                      </Link>
                    </div>
                  </div>
                </div>

              {/* À lire également */}
              <div className="border-t border-gray-200 pt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">À lire également</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border">
                    <Link href="/blog/detection-regard-ptt" className="block">
                      <div className="relative h-48">
                        <Image src="/images/blog/detection-regard-ptt.jpeg" alt="Pourquoi réaliser la détection de votre regard PTT ?" fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Pourquoi réaliser la détection de votre regard PTT ?</h3>
                        <p className="text-sm text-gray-600">Un regard PTT introuvable bloque votre raccordement ? Découvrez pourquoi et comment nos experts le localisent rapidement.</p>
                      </div>
                    </Link>
                  </article>

                  {/* Card 2 */}
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border">
                    <Link href="/blog/qui-appeler-debouchage-fourreau-telecom" className="block">
                      <div className="relative h-48">
                        <Image src="/images/blog/debouchage-fourreau-telecom.jpg" alt="Qui appeler pour le débouchage d'un fourreau télécom" fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Qui appeler pour le débouchage d'un fourreau télécom ?</h3>
                        <p className="text-sm text-gray-600">Fourreau télécom bouché ? Découvrez quel professionnel contacter pour déboucher votre gaine efficacement.</p>
                      </div>
                    </Link>
                  </article>

                  {/* Card 3 */}
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border">
                    <Link href="/nos-services" className="block">
                      <div className="relative h-48">
                        <Image src="/images/nos-service.png" alt="Découvrez tous nos services" fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Découvrez tous nos services</h3>
                        <p className="text-sm text-gray-600">Du débouchage de fourreau à la recherche de regard, découvrez toutes nos solutions fibre optique.</p>
                      </div>
                    </Link>
                  </article>
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
