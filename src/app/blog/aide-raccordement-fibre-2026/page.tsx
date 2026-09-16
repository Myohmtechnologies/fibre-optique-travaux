import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiCalendar,
  FiClock,
  FiPhone,
  FiFileText,
  FiTool,
  FiHelpCircle,
  FiArrowRight,
  FiUserCheck,
  FiBriefcase
} from 'react-icons/fi';

export function generateMetadata(): Metadata {
  const title = "Aide Raccordement Fibre 2026 : Jusqu'à 1 200 € pour vos Travaux (Dispositif ASP)";
  const description = "Fourreau bouché ou regard introuvable ? L'État propose une aide financière de 400 €, 800 € ou 1 200 € gérée par l'ASP pour vos travaux fibre sur propriété privée. Découvrez les conditions, montants et démarches.";
  const canonical = 'https://fibreoptiquetravaux.fr/blog/aide-raccordement-fibre-2026';
  const image = 'https://fibreoptiquetravaux.fr/images/blog/aides-de-letat.png';

  const faqItems = [
    {
      q: "Quel est le montant de l’aide fibre en 2026 ?",
      a: "L'aide prend actuellement la forme de trois forfaits : 400 €, 800 € ou 1 200 €, selon l'ampleur des travaux déterminée dans le cadre du dispositif géré par l'ASP."
    },
    {
      q: "L’aide fibre de 1 200 € est-elle automatique ?",
      a: "Non. Le montant de 1 200 € correspond au forfait prévu pour les gros travaux. L'attribution de l'aide et son montant dépendent des conditions du dispositif et de la situation concernée."
    },
    {
      q: "Un fourreau fibre bouché peut-il être concerné ?",
      a: "Un fourreau bouché peut faire partie des situations pour lesquelles des travaux sur la propriété privée sont nécessaires. Cependant, le blocage ne garantit pas à lui seul l'attribution de l'aide."
    },
    {
      q: "Qui demande l’aide à l’ASP ?",
      a: "La demande initiale est effectuée par le particulier ou la TPE concernée. Après attribution, l'entreprise qui réalise les travaux peut demander le remboursement de l'aide auprès de l'ASP."
    },
    {
      q: "Est-ce que l’entreprise avance l’aide ?",
      a: "Le montant attribué est déduit du prix de la prestation par l'entreprise de travaux, puis celle-ci demande son remboursement auprès de l'ASP après réalisation des travaux."
    },
    {
      q: "Puis-je commencer les travaux avant d’avoir reçu l’accord de l’ASP ?",
      a: "Il est recommandé d'attendre la notification d'attribution de l'aide avant de commencer les travaux concernés."
    },
    {
      q: "L’aide concerne-t-elle les locataires ?",
      a: "Oui, sous réserve de respecter les conditions du dispositif. Le locataire doit toutefois obtenir l'autorisation de son propriétaire pour réaliser les travaux nécessaires sur la propriété."
    },
    {
      q: "Une TPE peut-elle bénéficier de l’aide ?",
      a: "Oui, les TPE peuvent être concernées sous réserve de remplir les critères prévus, notamment concernant l'effectif (moins de 10 salariés), le chiffre d'affaires (moins de 2 millions d'euros), l'ancienneté (au moins un an) et le local professionnel."
    },
    {
      q: "Comment savoir si je peux bénéficier de l’aide fibre ?",
      a: "La meilleure façon de vérifier votre situation est de consulter les critères officiels et de déposer une demande auprès de l'ASP lorsque vous disposez de l'attestation d'échec de raccordement. Vous pouvez également nous contacter pour faire étudier la partie technique de votre situation."
    },
    {
      q: "Où trouver les informations officielles ?",
      a: "Les informations de référence sont disponibles sur les sites de l'ASP (Agence de services et de paiement) et du ministère de l'Économie. Les conditions pouvant évoluer, il est recommandé de vérifier les règles applicables au moment de votre demande."
    }
  ];

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    image,
    author: { '@type': 'Person', name: 'Expert Fibre Optique' },
    publisher: {
      '@type': 'Organization',
      name: 'Fibre Optique Travaux',
      logo: { '@type': 'ImageObject', url: 'https://fibreoptiquetravaux.fr/images/logo/logo-fibre-optique-light.webp' },
    },
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      images: ['/images/blog/aides-de-letat.png'],
      type: 'article',
      locale: 'fr_FR',
      siteName: 'Fibre Optique Travaux',
    },
    keywords: 'aide raccordement fibre 2026, aide etat fibre optique, aide ASP raccordement fibre, fourreau bouche aide financiere, regard telecom introuvable aide travaux, forfait 1200 euros fibre, subvention travaux fibre',
    other: {
      'script:ld+json': JSON.stringify([jsonLdArticle, jsonLdFaq]),
    },
  };
}

export default function AideRaccordementFibre2026() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />
      <main className="flex-grow">
        <article className="py-8 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* Fil d'Ariane */}
            <nav className="flex items-center text-xs md:text-sm text-slate-500 mb-6 flex-wrap gap-2" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-construction-orange transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-construction-orange transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-construction-orange font-medium">
                Aide raccordement fibre 2026
              </span>
            </nav>

            {/* En-tête de l'article */}
            <header className="mb-10 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-construction-orange border border-orange-200">
                  ⚡ Dispositif Officiel 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                  🏛️ Aide de l&apos;État (ASP)
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  💶 Jusqu&apos;à 1 200 €
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Aide raccordement fibre 2026 : jusqu’à 1 200 € pour vos travaux
              </h1>

              <div className="flex flex-wrap items-center justify-center md:justify-start text-xs sm:text-sm text-slate-500 gap-y-2 gap-x-4 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="text-construction-orange" />
                  <span>Généralisé au <strong>1er mars 2026</strong></span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <FiClock className="text-construction-orange" />
                  <span>Temps de lecture : <strong>8 min</strong></span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <FiTool className="text-construction-orange" />
                  <span>Rédigé par : <strong>Expert Fibre Optique</strong></span>
                </div>
              </div>
            </header>

            {/* Chiffres clés / Cartes rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:border-construction-orange transition-colors">
                <span className="text-xs uppercase font-bold text-slate-400">Forfait 1</span>
                <div className="text-2xl md:text-3xl font-extrabold text-construction-orange my-1">400 €</div>
                <p className="text-xs text-slate-600">Travaux de faible ampleur</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:border-construction-orange transition-colors">
                <span className="text-xs uppercase font-bold text-slate-400">Forfait 2</span>
                <div className="text-2xl md:text-3xl font-extrabold text-construction-orange my-1">800 €</div>
                <p className="text-xs text-slate-600">Travaux d&apos;ampleur moyenne</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:border-construction-orange transition-colors">
                <span className="text-xs uppercase font-bold text-slate-400">Forfait 3</span>
                <div className="text-2xl md:text-3xl font-extrabold text-construction-orange my-1">1 200 €</div>
                <p className="text-xs text-slate-600">Gros travaux complexes</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:border-construction-orange transition-colors">
                <span className="text-xs uppercase font-bold text-slate-400">Date limite</span>
                <div className="text-xl md:text-2xl font-extrabold text-blue-600 my-1">31 Mai 2027</div>
                <p className="text-xs text-slate-600">Dépôt usagers auprès ASP</p>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden mb-10 shadow-xl border border-slate-200/80 bg-slate-900">
              <Image
                src="/images/blog/aides-de-letat.png"
                alt="Aide financière de l'État pour les travaux de raccordement fibre optique 2026"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs md:text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                  Financement officiel des travaux de déblocage fibre sur propriété privée
                </p>
              </div>
            </div>

            {/* Introduction percutante */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-10 text-base sm:text-lg leading-relaxed text-slate-700">
              <p className="mb-4 font-medium text-slate-900">
                Votre raccordement à la fibre optique est impossible à cause d’un <strong className="text-construction-orange font-bold">fourreau bouché, d’une gaine endommagée, d’un regard télécom introuvable ou d’une infrastructure absente</strong> ?
              </p>
              <p className="mb-4">
                Dans certaines situations, une <strong>aide financière de l’État pour les travaux de raccordement à la fibre</strong> peut prendre en charge une partie des travaux réalisés sur votre propriété privée.
              </p>
              <p>
                Depuis le <strong>1er mars 2026</strong>, ce dispositif est généralisé à l’ensemble du territoire où la fibre est disponible. L’aide est gérée par l’<strong>Agence de services et de paiement (ASP)</strong> et peut atteindre <strong>400 €, 800 € ou 1 200 €</strong>, selon l’ampleur des travaux.
              </p>
            </div>

            {/* CTA 1 : Éligibilité */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-12 relative overflow-hidden">
              <div className="relative z-10 md:flex items-center justify-between gap-6">
                <div className="mb-6 md:mb-0">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    Diagnostic d&apos;échec fibre
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Vous avez déjà eu un échec de raccordement fibre ?
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base max-w-xl">
                    Nous pouvons étudier votre situation technique et vous orienter sur les démarches adaptées à votre blocage.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=aide-fibre-2026"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-xl shadow-md transition-all duration-200 text-center"
                  >
                    Tester mon éligibilité
                    <FiArrowRight className="ml-2" />
                  </Link>
                  <a
                    href="tel:+33631372701"
                    className="inline-flex items-center justify-center px-5 py-3.5 bg-black/20 hover:bg-black/30 text-white font-bold rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-200 text-center"
                  >
                    <FiPhone className="mr-2" />
                    06 31 37 27 01
                  </a>
                </div>
              </div>
            </div>

            {/* Sommaire interactif */}
            <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 mb-12 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FiFileText className="text-construction-orange" />
                Sommaire du guide de l&apos;aide fibre 2026
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <a href="#en-quoi-consiste" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  1. En quoi consiste le dispositif officiel ?
                </a>
                <a href="#montant-aide" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  2. Les 3 forfaits : 400 €, 800 € ou 1 200 €
                </a>
                <a href="#qui-peut-beneficier" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  3. Qui peut bénéficier de l&apos;aide ? (Particuliers & TPE)
                </a>
                <a href="#travaux-concernes" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  4. Quels travaux sont concernés ?
                </a>
                <a href="#comment-obtenir" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  5. Les 7 étapes pour obtenir l&apos;aide ASP
                </a>
                <a href="#fourreau-bouche" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  6. Fourreau fibre bouché : que faire ?
                </a>
                <a href="#regard-introuvable" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  7. Regard télécom introuvable : comment faire ?
                </a>
                <a href="#qui-paie" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  8. Fibre impossible : qui paie les travaux ?
                </a>
                <a href="#documents-a-preparer" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  9. Quels documents préparer pour l&apos;ASP ?
                </a>
                <a href="#calendrier-dates" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  10. Dates limites de demande (2026 - 2027)
                </a>
                <a href="#attention-eligibilite" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  11. Attention : l&apos;aide n&apos;est pas automatique
                </a>
                <a href="#faq" className="hover:text-construction-orange transition-colors py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                  12. FAQ : 10 questions fréquentes
                </a>
              </div>
            </div>

            {/* Corps de l'article */}
            <div className="space-y-12">

              {/* SECTION 1 */}
              <section id="en-quoi-consiste" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">1</span>
                  Aide fibre 2026 : en quoi consiste le dispositif ?
                </h2>
                <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Dans la majorité des cas, le raccordement à la fibre optique ne nécessite pas de travaux importants à la charge du particulier : le passage dans les conduits existants s&apos;effectue sans encombre.
                  </p>
                  <p>
                    Cependant, certaines propriétés privées présentent des difficultés physiques qui empêchent le technicien de l&apos;opérateur de finaliser l&apos;intervention : <strong>gaine bouchée, fourreau cassé, regard inaccessible ou enfoui, infrastructure inexistante ou cheminement inutilisable</strong>.
                  </p>
                  <p>
                    Lorsque des travaux de génie civil ou de désobstruction s&apos;avèrent nécessaires sur la partie privative, une aide de l&apos;État peut, sous certaines conditions, contribuer à leur financement.
                  </p>
                  <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-construction-orange text-amber-950 font-medium">
                    Le dispositif concerne à la fois les <strong>particuliers</strong> et les <strong>très petites entreprises (TPE)</strong> ayant rencontré un échec de raccordement à la fibre en raison de travaux indispensables sur leur propriété privée.
                  </div>
                  <p>
                    L&apos;objectif fixé par les pouvoirs publics est simple : permettre aux foyers et entreprises bloqués de réaliser les travaux préparatoires pour pouvoir ensuite finaliser sereinement leur raccordement à la fibre optique.
                  </p>
                </div>

                {/* Callout bloc */}
                <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Votre opérateur n&apos;a pas réussi à vous raccorder ?</h4>
                    <p className="text-sm text-slate-600">Ne reprenez pas un nouveau rendez-vous fibre sans avoir identifié et traité la cause du blocage.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Demander une intervention
                  </Link>
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="montant-aide" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">2</span>
                  Quel est le montant de l’aide au raccordement fibre en 2026 ?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  L’aide au raccordement fibre fonctionne sous la forme de <strong>trois forfaits distincts</strong>, calibrés selon la complexité technique constatée :
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Forfait 400 */}
                  <div className="rounded-xl p-6 border-2 border-slate-200 hover:border-construction-orange transition-all bg-gradient-to-b from-white to-slate-50">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase">Niveau 1</span>
                      <span className="text-2xl font-black text-construction-orange">400 €</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Travaux de faible ampleur</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Ce premier niveau correspond aux interventions ponctuelles, désobstruction superficielle ou dégagement ciblé nécessitant peu de terrassement.
                    </p>
                  </div>

                  {/* Forfait 800 */}
                  <div className="rounded-xl p-6 border-2 border-orange-300 hover:border-construction-orange transition-all bg-gradient-to-b from-orange-50/50 to-white shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2.5 py-1 rounded bg-orange-200 text-orange-800 text-xs font-bold uppercase">Niveau 2</span>
                      <span className="text-2xl font-black text-construction-orange">800 €</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Ampleur moyenne</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Forfait intermédiaire attribué lorsque les travaux sont plus conséquents : réparation d&apos;une portion de gaine écrasée ou recherche approfondie de regard sous terrain.
                    </p>
                  </div>

                  {/* Forfait 1200 */}
                  <div className="rounded-xl p-6 border-2 border-emerald-400 hover:border-emerald-500 transition-all bg-gradient-to-b from-emerald-50/40 to-white shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">Niveau 3</span>
                      <span className="text-2xl font-black text-emerald-700">1 200 €</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Gros travaux</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Le montant maximal réservé aux travaux d&apos;ampleur importante : tranchée complète, pose d&apos;un nouveau réseau souterrain ou reprise structurelle complexe.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-slate-700 text-sm leading-relaxed space-y-3">
                  <p>
                    <strong>À retenir :</strong> Le montant de l&apos;aide n&apos;est <em>pas</em> choisi arbitrairement par l&apos;entreprise de travaux. Il est strictement déterminé dans le cadre du dispositif public par l&apos;ASP, en fonction de l&apos;ampleur des travaux qualifiée sur l&apos;<strong>attestation d&apos;échec de raccordement</strong> remise par votre opérateur.
                  </p>
                  <p className="text-slate-600 italic">
                    L&apos;aide peut financer une partie importante des frais, mais <strong>un reste à charge peut subsister</strong> si le devis total de l&apos;intervention dépasse le montant du forfait attribué.
                  </p>
                </div>

                {/* Callout bloc */}
                <div className="mt-6 p-5 bg-orange-50 rounded-xl border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">400 €, 800 € ou 1 200 € ?</h4>
                    <p className="text-sm text-slate-600">Le montant exact dépend de votre situation et de la typologie des travaux. Transmettez-nous vos éléments pour être guidé.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=montant-aide"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Faire vérifier ma situation
                  </Link>
                </div>
              </section>

              {/* SECTION 3 */}
              <section id="qui-peut-beneficier" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">3</span>
                  Qui peut bénéficier de l’aide fibre ?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  L&apos;aide n&apos;est pas attribuée automatiquement : plusieurs critères d&apos;éligibilité cumulatifs doivent être respectés, que vous soyez particulier ou entreprise.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Particuliers */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center gap-2 text-construction-orange font-bold text-lg mb-4">
                      <FiUserCheck className="w-6 h-6" />
                      <h3>Pour les particuliers</h3>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Avoir souscrit un abonnement à la fibre optique.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Avoir subi un <strong>échec de raccordement formellement constaté</strong> par l&apos;opérateur.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Disposer d&apos;une <strong>attestation d&apos;échec de raccordement</strong> officielle.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Habiter dans un logement individuel (maison individuelle).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Utiliser ce logement comme <strong>résidence principale</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Avoir un quotient familial inférieur à <strong>29 316 €</strong> (selon conditions ASP).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Ne pas avoir déjà bénéficié de cette aide pour le même logement.</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded-lg text-xs text-slate-500 border border-slate-200">
                      ℹ️ <em>Locataires :</em> l&apos;accord écrit préalable du propriétaire est requis avant d&apos;entreprendre les travaux sur la propriété.
                    </div>
                  </div>

                  {/* TPE */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-lg mb-4">
                      <FiBriefcase className="w-6 h-6" />
                      <h3>Pour les très petites entreprises (TPE)</h3>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Compter <strong>moins de 10 salariés</strong> au sein de la structure.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Réaliser moins de <strong>2 millions d&apos;euros</strong> de chiffre d&apos;affaires annuel.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Disposer d&apos;au moins <strong>1 an d&apos;ancienneté</strong> déclarée.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Ne pas être en situation de liquidation judiciaire lors de la demande.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Occuper un local professionnel répondant aux conditions du dispositif.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Fournir l&apos;attestation d&apos;échec remise par le technicien télécom.</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded-lg text-xs text-slate-500 border border-slate-200">
                      🏢 Les artisans, commerçants, professions libérales et TPE disposant de leur propre raccordement sont pleinement éligibles.
                    </div>
                  </div>
                </div>

                {/* Callout bloc */}
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Vous ne savez pas si vous entrez dans les critères ?</h4>
                    <p className="text-sm text-slate-600">Nous pouvons vérifier avec vous les éléments techniques et administratifs de votre dossier.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=verification-criteres"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Tester mon éligibilité
                  </Link>
                </div>
              </section>

              {/* SECTION 4 */}
              <section id="travaux-concernes" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">4</span>
                  Quels travaux peuvent être concernés par l’aide fibre ?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  L&apos;aide financière cible spécifiquement les situations où des travaux sont indispensables sur la <strong>propriété privée</strong> pour permettre au câble de fibre d&apos;atteindre le logement :
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {/* Fourreau bouché */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">🚧</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Fourreau fibre bouché</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Un fourreau télécom peut être obstrué par de la terre, des cailloux, des racines, un ancien câble coincé ou un écrasement. Lorsque l&apos;aiguille du technicien bloque, un débouchage professionnel ou un terrassement localisé est nécessaire.
                    </p>
                  </div>

                  {/* Gaine cassée */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">⚠️</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Gaine télécom cassée ou écrasée</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Une gaine enterrée subit souvent des dommages lors de travaux antérieurs (terrassement, clôture, passage de véhicules lourds). La localisation par sonde électromagnétique permet de cibler le point de rupture et de réparer le tronçon.
                    </p>
                  </div>

                  {/* Regard introuvable */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">🔍</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Regard télécom introuvable ou enfoui</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Souvent dissimulé sous du gazon, du gravier, du bitume ou une terrasse, le regard intermédiaire (chambre de tirage PTT) est invisible. Sa détection sans tranchée inutile est indispensable pour aiguiller le câble.
                    </p>
                  </div>

                  {/* Tranchée */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">⛏️</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Tranchée pour création de cheminement</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      En l&apos;absence d&apos;infrastructure existante ou en cas de fourreau irrécupérable, l&apos;ouverture d&apos;une tranchée privative et la pose d&apos;un nouveau fourreau avec regard de tirage s&apos;imposent.
                    </p>
                  </div>
                </div>

                {/* Callout bloc */}
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Fourreau bouché ? Regard introuvable ? Gaine cassée ?</h4>
                    <p className="text-sm text-slate-600">Décrivez-nous votre configuration et recevez notre analyse technique sous 24h.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Demander une intervention
                  </Link>
                </div>
              </section>

              {/* SECTION 5 */}
              <section id="comment-obtenir" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">5</span>
                  Comment obtenir l’aide pour les travaux de raccordement fibre ?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  La procédure d&apos;octroi s&apos;articule en <strong>7 étapes clés chronologiques</strong> :
                </p>

                <div className="relative border-l-2 border-orange-200 ml-4 pl-6 space-y-6">

                  {/* Étape 1 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">1</span>
                    <h3 className="font-bold text-slate-900 text-base">Souscrire une offre fibre</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Vous souscrivez d&apos;abord votre abonnement internet Très Haut Débit auprès du FAI de votre choix (Orange, Free, SFR, Bouygues Télécom...).
                    </p>
                  </div>

                  {/* Étape 2 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">2</span>
                    <h3 className="font-bold text-slate-900 text-base">Le raccordement échoue</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Le technicien mandaté intervient mais constate un blocage matériel sur votre terrain privé empêchant l&apos;aiguillage du câble.
                    </p>
                  </div>

                  {/* Étape 3 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">3</span>
                    <h3 className="font-bold text-slate-900 text-base">Obtenir l’attestation d’échec</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      L&apos;opérateur vous délivre l&apos;<strong>attestation d&apos;échec de raccordement</strong> stipulant la nature du blocage privatif. Cette pièce est capitale pour votre dossier.
                    </p>
                  </div>

                  {/* Étape 4 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">4</span>
                    <h3 className="font-bold text-slate-900 text-base">Déposer votre demande auprès de l’ASP</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Vous déposez directement votre demande de subvention sur le portail officiel de l&apos;Agence de services et de paiement (ASP) avec les justificatifs requis.
                    </p>
                  </div>

                  {/* Étape 5 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">5</span>
                    <h3 className="font-bold text-slate-900 text-base">Recevoir la notification d’attribution</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Après examen, l&apos;ASP vous transmet une notification officielle précisant le montant forfaitaire accordé (400 €, 800 € ou 1 200 €).
                    </p>
                  </div>

                  {/* Étape 6 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">6</span>
                    <h3 className="font-bold text-slate-900 text-base">Faire réaliser les travaux</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Vous présentez cette notification à notre entreprise. Nous déduisons le montant de l&apos;aide directement de votre facture selon les règles du dispositif.
                    </p>
                  </div>

                  {/* Étape 7 */}
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-construction-orange text-white text-xs font-bold">7</span>
                    <h3 className="font-bold text-slate-900 text-base">L’entreprise demande son remboursement</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Une fois les travaux achevés et le passage libéré, nous déposons le dossier de clôture auprès de l&apos;ASP pour percevoir le remboursement de l&apos;avance.
                    </p>
                  </div>

                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 text-amber-900 text-xs sm:text-sm">
                  ⚠️ <strong>Recommandation essentielle :</strong> Il est fortement conseillé d&apos;attendre la notification d&apos;attribution de l&apos;aide avant d&apos;engager les travaux éligibles.
                </div>

                {/* Callout bloc */}
                <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Vous avez déjà reçu votre notification ASP ?</h4>
                    <p className="text-sm text-slate-600">Transmettez-nous votre accord ASP pour planifier immédiatement votre intervention technique.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=notification-asp-recue"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Demander une intervention
                  </Link>
                </div>
              </section>

              {/* SECTION 6 & 7 : Fourreau bouché & Regard introuvable */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Fourreau bouché */}
                <section id="fourreau-bouche" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-100 text-construction-orange text-base">6</span>
                      Fourreau fibre bouché : que faire ?
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Le fourreau bouché est la cause numéro 1 d&apos;échec de raccordement. Lorsque la gaine est obstruée par de la terre compactée, des racines invasives ou un écrasement, forcer l&apos;aiguille risque de la casser.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Avant de creuser à l&apos;aveugle dans votre jardin ou votre allée, il est impératif de <strong>localiser le point de blocage au centimètre près</strong> grâce à une sonde de traçage et une caméra d&apos;inspection vidéo.
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-700 mb-3">Votre fourreau est bloqué ?</p>
                    <Link
                      href="/demande-de-devis-travaux-de-fibre-optique"
                      className="inline-flex items-center text-sm font-bold text-construction-orange hover:text-orange-700"
                    >
                      Demander une intervention débouchage →
                    </Link>
                  </div>
                </section>

                {/* Regard introuvable */}
                <section id="regard-introuvable" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-100 text-construction-orange text-base">7</span>
                      Regard télécom introuvable : comment faire ?
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      La trappe télécom d&apos;origine a souvent été recouverte au fil des années par :
                    </p>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-slate-600 mb-4 font-medium">
                      <li>• De la terre végétale</li>
                      <li>• Du gazon ou pelouse</li>
                      <li>• Des graviers</li>
                      <li>• Une allée pavée</li>
                      <li>• Du bitume / enrobé</li>
                      <li>• Une terrasse en bois</li>
                    </ul>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Nos détecteurs électromagnétiques permettent de localiser la position exacte et la profondeur de la plaque sans détruire vos aménagements extérieurs.
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-700 mb-3">Regard PTT introuvable ?</p>
                    <Link
                      href="/blog/comment-trouver-regard-france-telecom"
                      className="inline-flex items-center text-sm font-bold text-construction-orange hover:text-orange-700"
                    >
                      Voir le guide de détection de regard →
                    </Link>
                  </div>
                </section>

              </div>

              {/* SECTION 8 : Qui paie les travaux ? */}
              <section id="qui-paie" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">8</span>
                  Fibre impossible à installer : qui paie les travaux ?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Il est capital de distinguer la responsabilité sur le domaine public et sur le domaine privé :
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                    <h3 className="font-bold text-slate-900 text-base mb-2">1. Raccordement standard (Domaine public)</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      L&apos;installation standard depuis le point de branchement optique (PBO) dans la rue jusqu&apos;à la limite de votre propriété est prise en charge par l&apos;opérateur ou le gestionnaire de réseau d&apos;infrastructure.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-orange-200 bg-orange-50/50">
                    <h3 className="font-bold text-slate-900 text-base mb-2">2. Travaux sur la propriété privée</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Dès lors que le fourreau ou le regard se situe sur votre terrain privé, la charge des aménagements incombe légalement au propriétaire des lieux. C&apos;est exactement pour ces situations que l&apos;aide d&apos;État intervient pour amortir ce coût.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Votre opérateur exige des travaux avant de raccorder ?</h4>
                    <p className="text-sm text-slate-600">Faites-nous parvenir votre attestation d&apos;échec pour une étude personnalisée.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=qui-paie-travaux"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Faire étudier ma situation
                  </Link>
                </div>
              </section>

              {/* SECTION 9 : Documents à préparer */}
              <section id="documents-a-preparer" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">9</span>
                  Aide fibre 2026 : quels documents préparer ?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Pour déposer sans retard votre demande sur la plateforme de l&apos;ASP, préparez en amont les pièces justificatives suivantes :
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Documents particuliers */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-white">
                    <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                      <FiFileText className="text-construction-orange" />
                      Dossier Particulier
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                        Attestation d&apos;échec de raccordement opérateur
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                        Numéro fiscal d&apos;identification (avis d&apos;impôt)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                        Pièce d&apos;identité officielle en cours de validité
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-construction-orange"></span>
                        Justificatif de domicile récent (selon situation)
                      </li>
                    </ul>
                  </div>

                  {/* Documents TPE */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-white">
                    <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                      <FiBriefcase className="text-blue-600" />
                      Dossier TPE
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        Attestation d&apos;échec du technicien
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        Numéro SIRET et extrait Kbis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        Pièce d&apos;identité du représentant légal
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        Attestation certifiant l&apos;effectif &lt; 10 salariés
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECTION 10 : Calendrier & Dates limites */}
              <section id="calendrier-dates" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">10</span>
                  Jusqu’à quand peut-on demander l’aide fibre ?
                </h2>

                <div className="bg-blue-50/80 rounded-xl p-6 border border-blue-200 mb-6">
                  <div className="flex items-start gap-4">
                    <FiCalendar className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Calendrier officiel du dispositif expérimental</h3>
                      <p className="text-sm text-blue-800 leading-relaxed mb-4">
                        Le dispositif d&apos;aide au raccordement fibre est soumis à un calendrier strict fixé par les autorités :
                      </p>
                      <ul className="space-y-2 text-sm text-blue-950 font-medium">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          Pour les usagers (particuliers et TPE) : date limite de dépôt de demande fixée au <strong>31 mai 2027</strong>.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          Pour les entreprises ayant réalisé les travaux : date limite de dépôt de demande de paiement fixée au <strong>30 juin 2027</strong>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Vous voulez savoir si votre situation entre dans le dispositif ?</h4>
                    <p className="text-sm text-slate-600">Ne vous fiez pas uniquement à une simulation en ligne sommaire : faites vérifier vos pièces réelles.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=calendrier-dates"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Tester mon éligibilité
                  </Link>
                </div>
              </section>

              {/* SECTION 11 : Attention à l'éligibilité */}
              <section id="attention-eligibilite" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-construction-orange text-lg">11</span>
                  Aide raccordement fibre : attention à l’éligibilité
                </h2>

                <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 text-sm leading-relaxed space-y-3 mb-6">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
                    <FiAlertTriangle className="text-amber-600 w-5 h-5 flex-shrink-0" />
                    L&apos;aide au raccordement fibre n&apos;est pas automatique
                  </div>
                  <p>
                    Le simple fait d&apos;avoir un fourreau bouché, une gaine écrasée ou un raccordement impossible ne garantit pas à lui seul l&apos;octroi automatique de la subvention.
                  </p>
                  <p>
                    <strong>L&apos;ASP est le seul organisme décisionnaire</strong> : elle instruit et valide les dossiers sur la base des critères réglementaires. Notre mission en tant qu&apos;entreprise spécialisée consiste à vous accompagner sur la partie diagnostic technique et à réaliser les travaux conformes pour rétablir la viabilité du raccordement.
                  </p>
                  <p className="italic text-amber-800">
                    Nous ne pouvons donc pas préjuger ou garantir à l&apos;avance de l&apos;attribution définitive d&apos;une aide ni de son montant exact avant validation par l&apos;ASP.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Pourquoi faire appel à notre entreprise spécialisée ?</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Les travaux préparatoires exigent des compétences et un matériel professionnel de pointe : détection électromagnétique, endoscopie télécom, hydrocurage haute pression pulsé ou terrassement ciblé.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Une intervention spécialisée permet de diagnostiquer avec certitude <strong>pourquoi le raccordement a échoué</strong>, d&apos;éviter de détruire inutilement votre jardin ou votre allée, et de sécuriser la finalisation de votre branchement fibre.
                  </p>
                </div>

                {/* Callout bloc */}
                <div className="mt-6 p-5 bg-orange-50 rounded-xl border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Votre raccordement fibre est bloqué ?</h4>
                    <p className="text-sm text-slate-600">Expliquez-nous votre problème. Un technicien étudiera les travaux nécessaires avec vous.</p>
                  </div>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique"
                    className="inline-flex items-center px-4 py-2 bg-construction-orange hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Demander une intervention
                  </Link>
                </div>
              </section>

              {/* SECTION 12 : FAQ */}
              <section id="faq" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <FiHelpCircle className="text-construction-orange" />
                  FAQ – Aide raccordement fibre 2026
                </h2>

                <div className="space-y-4">

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Quel est le montant de l’aide fibre en 2026 ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      L&apos;aide prend actuellement la forme de trois forfaits : <strong>400 €, 800 € ou 1 200 €</strong>, selon l&apos;ampleur des travaux déterminée dans le cadre du dispositif public géré par l&apos;ASP.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">L’aide fibre de 1 200 € est-elle automatique ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Non. Le montant de 1 200 € correspond au forfait prévu pour les gros travaux. L&apos;attribution de l&apos;aide et son montant dépendent des conditions du dispositif et de la qualification figurant sur l&apos;attestation d&apos;échec.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Un fourreau fibre bouché peut-il être concerné ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Oui, un fourreau bouché fait partie des motifs classiques pour lesquels des travaux sur la propriété privée sont nécessaires. Cependant, le blocage ne dispense pas de satisfaire à l&apos;ensemble des conditions d&apos;éligibilité.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Qui demande l’aide à l’ASP ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      La demande initiale est effectuée directement par le particulier ou la TPE concernée sur le portail de l&apos;ASP. Après accord et réalisation des travaux, l&apos;entreprise qui réalise l&apos;intervention demande le remboursement du montant de l&apos;aide avancée.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Est-ce que l’entreprise avance l’aide ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Oui, le montant attribué par l&apos;ASP est déduit directement du prix de la prestation sur votre facture par l&apos;entreprise de travaux, qui se fait ensuite rembourser par l&apos;État.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Puis-je commencer les travaux avant d’avoir reçu l’accord de l’ASP ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Il est vivement recommandé d&apos;attendre la notification d&apos;attribution officielle de l&apos;aide avant d&apos;entamer les travaux concernés pour sécuriser le versement des fonds.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">L’aide concerne-t-elle les locataires ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Oui, sous réserve de respecter les conditions du dispositif. Le locataire doit obligatoirement obtenir l&apos;accord écrit de son propriétaire avant de démarrer des travaux sur la propriété.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Une TPE peut-elle bénéficier de l’aide ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Oui, les TPE sont pleinement concernées sous réserve de remplir les critères légaux : moins de 10 salariés, moins de 2 M€ de chiffre d&apos;affaires, 1 an d&apos;ancienneté minimale et non-liquidation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Comment savoir si je peux bénéficier de l’aide fibre ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      La meilleure solution consiste à consulter les critères officiels et à soumettre votre attestation d&apos;échec. Vous pouvez aussi nous contacter pour faire étudier la faisabilité technique de votre dossier.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-slate-900 text-base mb-2">Où trouver les informations officielles ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Les informations de référence sont publiées sur les sites internet de l&apos;<strong>ASP (asp-public.fr)</strong> et du <strong>ministère de l&apos;Économie</strong>.
                    </p>
                  </div>

                </div>
              </section>

            </div>

            {/* GRAND BANDEAU CONVERSION FINAL */}
            <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-700">
              <div className="relative z-10 max-w-3xl">
                <span className="px-3.5 py-1.5 bg-construction-orange text-white text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-4">
                  Diagnostic et Intervention Rapide
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Votre raccordement fibre est bloqué ?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                  Fourreau bouché, regard introuvable, gaine cassée, infrastructure absente ou travaux à prévoir sur votre propriété ? Décrivez-nous votre situation. Nous étudions les travaux nécessaires et vous accompagnons dans toutes les démarches liées au raccordement fibre.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique"
                    className="inline-flex items-center justify-center px-6 py-4 bg-construction-orange hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all text-center"
                  >
                    Demander une intervention
                    <FiArrowRight className="ml-2" />
                  </Link>
                  <Link
                    href="/demande-de-devis-travaux-de-fibre-optique?motif=tester-eligibilite"
                    className="inline-flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 backdrop-blur-sm transition-all text-center"
                  >
                    Tester mon éligibilité
                  </Link>
                  <a
                    href="tel:+33631372701"
                    className="inline-flex items-center justify-center px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all text-center"
                  >
                    <FiPhone className="mr-2" />
                    06 31 37 27 01
                  </a>
                </div>

                <p className="text-xs text-slate-400 italic">
                  * L&apos;éligibilité à l&apos;aide et son montant sont déterminés dans le cadre du dispositif géré par l&apos;ASP. Nous ne garantissons pas l&apos;attribution d&apos;une aide avant vérification formelle de votre dossier.
                </p>
              </div>
            </div>

            {/* Articles connexes */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Articles recommandés sur vos travaux fibre
              </h3>
              <div className="grid md:grid-cols-3 gap-6">

                <Link
                  href="/blog/comment-deboucher-reparer-fourreau-gaine"
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/blog/debouchage-fourreau.jpg"
                      alt="Déboucher fourreau télécom"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-bold text-slate-900 group-hover:text-construction-orange transition-colors mb-2 line-clamp-2">
                      Comment déboucher et réparer un fourreau télécom ?
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      Méthodes de localisation et solutions techniques pour rétablir le passage du câble fibre sans détruire votre allée.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/blog/comment-trouver-regard-france-telecom"
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/blog/regard-france-telecom.jpg"
                      alt="Trouver un regard France Télécom"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-bold text-slate-900 group-hover:text-construction-orange transition-colors mb-2 line-clamp-2">
                      Comment trouver un regard France Télécom enfoui ?
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      Découvrez comment localiser votre chambre de tirage PTT enterrée sous du gazon, des graviers ou du bitume.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/blog/prix-debouchage-fourreau-telecom"
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/blog/prix-debouchage-fourreau-telecom.jpg"
                      alt="Prix débouchage fourreau"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-bold text-slate-900 group-hover:text-construction-orange transition-colors mb-2 line-clamp-2">
                      Prix du débouchage d&apos;un fourreau télécom
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      Comprendre les coûts d&apos;intervention, les forfaits de détection et comment optimiser votre reste à charge.
                    </p>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
