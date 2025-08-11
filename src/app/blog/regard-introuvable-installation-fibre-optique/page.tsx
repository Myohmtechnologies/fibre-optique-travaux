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
    headline: 'Regard introuvable pour installer votre fibre optique : méthodes et solutions',
    image: 'https://www.fibreoptiquetravaux.fr/images/blog/regard-introuvable-fibre-optique.jpg',
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://www.fibreoptiquetravaux.fr/images/logo.png' },
    },
    datePublished: '2025-08-11',
    dateModified: '2025-08-11',
    description:
      "Regard télécom introuvable ? Découvrez comment le localiser sans destruction et préparer votre raccordement fibre efficacement.",
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.fibreoptiquetravaux.fr/blog/regard-introuvable-installation-fibre-optique',
    },
  };

  return {
    title: 'Regard introuvable pour installer la fibre : guide et solutions',
    description:
      "Regard France Télécom introuvable ? Méthodes professionnelles de localisation, astuces concrètes et préparation de l'accès pour finaliser votre raccordement fibre.",
    openGraph: {
      title: 'Regard introuvable pour installer la fibre : guide et solutions',
      description:
        "Regard France Télécom introuvable ? Méthodes professionnelles de localisation, astuces concrètes et préparation de l'accès pour finaliser votre raccordement fibre.",
      images: ['/images/blog/regard-introuvable-fibre-optique.jpg'],
      type: 'article',
    },
    keywords:
      'regard introuvable, regard france télécom, regard ptt, détection regard télécom, localisation regard, blocage fibre, raccordement fibre',
    other: { 'script:ld+json': JSON.stringify(jsonLd) },
  };
}

export default function RegardIntrouvablePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src="/images/blog/regard-introuvable-fibre-optique.jpg"
            alt="Regard télécom introuvable pour raccordement fibre"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
              Regard Introuvable: Comment Finaliser Votre Raccordement Fibre
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
              Méthodes fiables pour localiser votre trappe télécom et préparer l'accès
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-white py-3 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-orange-500 transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-500">Regard introuvable</span>
            </div>
          </div>
        </div>

        {/* Main content will be added step by step */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Article */}
            <article className="lg:w-2/3">
              {/* Table des matières */}
              <nav className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Sommaire</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li><a href="#intro" className="text-blue-600 hover:text-orange-500 transition-colors">Introduction</a></li>
                  <li><a href="#reconnaissance" className="text-blue-600 hover:text-orange-500 transition-colors">Reconnaître le regard</a></li>
                  <li><a href="#raisons" className="text-blue-600 hover:text-orange-500 transition-colors">Pourquoi il est introuvable</a></li>
                  <li><a href="#ou-chercher" className="text-blue-600 hover:text-orange-500 transition-colors">Où chercher</a></li>
                  <li><a href="#aiguille" className="text-blue-600 hover:text-orange-500 transition-colors">Aiguille de tirage</a></li>
                  <li><a href="#detection" className="text-blue-600 hover:text-orange-500 transition-colors">Détection électromagnétique</a></li>
                  <li><a href="#processus" className="text-blue-600 hover:text-orange-500 transition-colors">Processus d'intervention</a></li>
                  <li><a href="#exhumation" className="text-blue-600 hover:text-orange-500 transition-colors">Exhumer le regard</a></li>
                  <li><a href="#faq" className="text-blue-600 hover:text-orange-500 transition-colors">FAQ</a></li>
                </ul>
              </nav>

              {/* Introduction (à enrichir ensuite) */}
              <section id="intro" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Un regard introuvable bloque votre raccordement</h2>
                <p className="text-gray-700">Le dernier tronçon de la fibre passe sur votre domaine privé. Le technicien doit accéder à votre trappe télécom, souvent en limite de propriété. Si elle est introuvable, la mise en service est impossible. Nous allons structurer les étapes pour la localiser efficacement.</p>
              </section>

              {/* Détection électromagnétique */}
              <section id="detection" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Détection électromagnétique: fiable et non destructive</h2>
                <p className="text-gray-700">Le traçage sur câble cuivre historique et la lecture de <strong>sonde émettrice</strong> permettent d'identifier précisément la trajectoire et la position du regard pour ouvrir <strong>au bon endroit</strong>.</p>
                <p className="text-gray-700 mt-2 text-sm">Marquage au sol <strong>propre et localisé</strong> pour limiter l'emprise des travaux.</p>
              </section>

              {/* Exhumation et remise en état */}
              <section id="exhumation" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Exhumer le regard en sécurité</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li><strong>Validez le point</strong> pour limiter l'ouverture</li>
                  <li>Adaptez l'outillage à la <strong>surface</strong> (terre, gravier, dalle, enrobé)</li>
                  <li>Préservez les <strong>autres réseaux</strong> (électricité, eau)</li>
                  <li>Assurez la <strong>remise en conformité</strong> (rehausse éventuelle, scellement, propreté)</li>
                </ul>
              </section>

              {/* Processus d'intervention */}
              <section id="processus" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Processus d'intervention en 5 étapes</h2>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li><strong>Diagnostic sur site</strong> (photos, repérages, limite public/privé)</li>
                  <li><strong>Localisation</strong> par sonde/détecteur et <strong>marquage précis</strong></li>
                  <li><strong>Ouverture</strong> maîtrisée selon la surface (terre, gravier, dalle, enrobé)</li>
                  <li><strong>Accès regard</strong> et remise en conformité (nettoyage, rehausse si besoin)</li>
                  <li><strong>Compte rendu</strong> et conseils pour la venue du technicien fibre</li>
                </ol>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                  <p className="m-0"><span className="font-semibold">Bon à savoir:</span> une localisation fiable réduit la surface d'ouverture et les coûts de remise en état.</p>
                </div>
              </section>

              {/* Reconnaissance */}
              <section id="reconnaissance" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Comment reconnaître le regard télécom</h2>
                <p className="text-gray-700">Le réseau fibre utilise la <strong>gaine verte télécom</strong>. Le regard est une trappe <strong>carrée ~40 cm</strong> (béton ou polypropylène) couverte par une plaque (fonte, béton ou PP). Un simple détecteur de métaux n'est pas fiable: privilégiez des méthodes adaptées.</p>
                <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                  <li>Indices visuels: inscriptions <strong>FT/PTT/Télécom</strong>, trace de cadre, discontinuités de joints</li>
                  <li>Souvent aligné avec le <strong>portail</strong> ou les <strong>bornes</strong> de réseaux</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="m-0 text-sm"><span className="font-semibold">Note:</span> certains couvercles plastiques ne réagissent pas au détecteur de métaux.</p>
                </div>
              </section>

              {/* Raisons */}
              <section id="raisons" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Pourquoi devient‑il introuvable ?</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Évolution naturelle du sol et <strong>tassement</strong></li>
                  <li><strong>Végétation</strong> et recouvrements (graviers, terre)</li>
                  <li>Aménagements <strong>postérieurs</strong>: dalle, pavés, enrobé, muret</li>
                  <li>Mauvaise implantation d'origine, limites modifiées</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">Le regard peut se retrouver <strong>en contrebas</strong> de quelques centimètres ou au contraire <strong>recouvert</strong> après un enrobé récent.</p>
              </section>

              {/* Où chercher */}
              <section id="ou-chercher" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Où chercher en priorité</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>En <strong>limite de propriété</strong>, côté accès principal (portail/allée)</li>
                  <li>Proche des arrivées <strong>eau/électricité</strong> (souvent regroupées)</li>
                  <li>Le long des <strong>bordures</strong>, joints de dalles, zones gravillonnées</li>
                  <li>En tenant compte d'anciens <strong>travaux</strong> ou d'un <strong>changement de parcelle</strong></li>
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                  <p className="m-0 text-sm"><span className="font-semibold">Astuce:</span> posez une <strong>ligne imaginaire</strong> entre votre arrivée intérieure et la rue pour guider la recherche.</p>
                </div>
              </section>

              {/* Pistes avant d'ouvrir */}
              <section id="pistes" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">3 pistes utiles avant de creuser</h2>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Consultez le <strong>plan de récolement</strong> (constructeur, mairie, géomètre, notaire)</li>
                  <li>Demandez aux <strong>anciens propriétaires</strong> et au voisinage</li>
                  <li>Comparez avec des maisons <strong>au plan similaire</strong> (regards parfois regroupés)</li>
                </ol>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                  <p className="m-0"><span className="font-semibold">Astuce:</span> repérez la <strong>gaine verte</strong> côté maison (garage/sous-sol) et suivez l'alignement logique vers la rue.</p>
                </div>
              </section>

              {/* Aiguille de tirage */}
              <section id="aiguille" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Aiguille de tirage: localiser sans détruire</h2>
                <p className="text-gray-700">Introduisez une <strong>aiguille en fibre de verre</strong> dans la gaine depuis la maison. Longueur suffisante et diamètre 6–9 mm pour franchir les coudes.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-1">Méthode du marquage</h3>
                    <p className="text-sm text-gray-700">Marquez l'arrêt sur l'aiguille, déroulez au sol selon le tracé supposé pour cibler la zone.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-1">Sonde + détecteur</h3>
                    <p className="text-sm text-gray-700">Fixez une <strong>sonde émettrice</strong> et suivez précisément le parcours au détecteur de surface.</p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">FAQ</h2>
                <details className="mb-3">
                  <summary className="font-medium">Un détecteur de métaux suffit‑il pour trouver le regard ?</summary>
                  <p className="mt-2 text-gray-700">Pas toujours. Beaucoup de plaques sont en béton ou polypropylène. Privilégiez la <strong>sonde + détecteur</strong> ou le traçage électromagnétique.</p>
                </details>
                <details className="mb-3">
                  <summary className="font-medium">Faut‑il ouvrir une grande zone ?</summary>
                  <p className="mt-2 text-gray-700">Non, une <strong>localisation précise</strong> permet d'ouvrir proprement une petite zone au bon endroit.</p>
                </details>
                <details>
                  <summary className="font-medium">Qui s'occupe de quoi (public/privé) ?</summary>
                  <p className="mt-2 text-gray-700">Le réseau public relève du gestionnaire. Sur votre parcelle, vous êtes responsable de l'accès au regard et de la remise en état.</p>
                </details>
              </section>

              {/* CTA bas d'article */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Besoin d'aide pour retrouver votre regard ?</h3>
                <p className="text-gray-700">Nous localisons précisément votre accès télécom et préparons le terrain pour la venue du technicien fibre.</p>
                <div className="mt-3 flex gap-3">
                  <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors">Demander un diagnostic</Link>
                  <Link href="/tarifs" className="bg-white border border-orange-500 text-orange-600 hover:bg-orange-50 py-2 px-4 rounded-lg transition-colors">Voir les tarifs</Link>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Intervention sous 48h</h3>
                <p className="text-gray-700">Localisation de regard, débouchage de fourreau, préparation du site pour la venue du technicien fibre.</p>
                <div className="mt-3 flex flex-col gap-3">
                  <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-center transition-colors">Demander un diagnostic</Link>
                  <Link href="/tarifs" className="bg-white border border-orange-500 text-orange-600 hover:bg-orange-50 py-2 px-4 rounded-lg text-center transition-colors">Voir les tarifs</Link>
                </div>
              </div>

              {/* Articles liés */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-8 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Articles liés</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blog/pourquoi-aiguille-cable-bloquent-fourreau-telecom" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                        <Image src="/images/blog/cable-bloque-fourreau-telecom.jpg" alt="Câble bloqué dans fourreau télécom" fill className="object-cover rounded" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 leading-tight">Pourquoi l'aiguille et le câble bloquent dans le fourreau télécom ?</h4>
                        <p className="text-sm text-gray-500 mt-1">Causes et solutions</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/qui-appeler-debouchage-fourreau-telecom" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                        <Image src="/images/blog/debouchage-fourreau-telecom.jpg" alt="Débouchage fourreau télécom" fill className="object-cover rounded" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 leading-tight">Qui appeler pour le débouchage d'un fourreau télécom ?</h4>
                        <p className="text-sm text-gray-500 mt-1">Les bons interlocuteurs</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/quand-realiser-tranchee-fibre-optique" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                        <Image src="/images/blog/tranchee-fibre-optique.jpg" alt="Tranchée fibre optique" fill className="object-cover rounded" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 leading-tight">Quand faut-il réaliser une tranchée pour la fibre ?</h4>
                        <p className="text-sm text-gray-500 mt-1">Guide et conseils</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
