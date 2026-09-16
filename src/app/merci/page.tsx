import React from 'react';
import GoogleAdsConversion from '@/components/GoogleAdsConversion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande reçue | Fibre Optique Travaux',
  description:
    'Votre demande d’intervention fibre optique a bien été reçue. Un technicien va étudier votre situation et revenir vers vous.',
  keywords:
    'confirmation demande fibre optique, travaux fibre optique, intervention fibre',
  alternates: {
    canonical: 'https://fibre-optique-travaux.fr/merci',
  },
};

export default function MerciPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        <GoogleAdsConversion />

        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-slate-50" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">

            {/* Success icon */}
            <div className="flex justify-center mb-7">
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50" />

                <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg border border-green-100">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-9 md:h-9 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Main title */}
            <div className="text-center">
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
                Demande envoyée avec succès
              </p>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
                Votre demande a bien été reçue !
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                Merci pour votre demande. Nous avons bien reçu les informations
                concernant votre situation.
              </p>
            </div>

            {/* Technician message */}
            <div className="mt-5 bg-white rounded-2xl border border-orange-100 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="h-1.5 bg-orange-500" />

              <div className="p-6 md:p-8">
                <div className="flex items-start gap-2">



                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                      Un technicien va maintenant étudier votre demande.
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                      Il vérifiera les informations transmises et reviendra
                      vers vous pour échanger sur votre situation et vous
                      proposer la solution la plus adaptée.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Et maintenant ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Step 1 */}
                <div className="text-center">
                  <div className="flex items-center justify-center w-11 h-11 mx-auto mb-3 rounded-full bg-orange-100 text-orange-600 font-bold">
                    1
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-1">
                    Étude de votre demande
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Notre technicien analyse les informations transmises.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="flex items-center justify-center w-11 h-11 mx-auto mb-3 rounded-full bg-orange-100 text-orange-600 font-bold">
                    2
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-1">
                    Échange avec vous
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Nous revenons vers vous pour comprendre précisément votre
                    situation.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="flex items-center justify-center w-11 h-11 mx-auto mb-3 rounded-full bg-orange-100 text-orange-600 font-bold">
                    3
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-1">
                    Solution adaptée
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Nous vous expliquons la solution possible pour votre
                    situation.
                  </p>
                </div>

              </div>
            </div>

            {/* Phone CTA */}
            <div className="mt-8 rounded-2xl bg-slate-900 p-6 md:p-8 text-center text-white">
              <p className="text-sm text-slate-300 mb-2">
                Une question concernant votre demande ?
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-5">
                Vous pouvez également nous contacter directement
              </h2>

              <a
                href="tel:+33631372701"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-orange-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.897 1.368l1.02 3.06a2 2 0 01-.548 2.116l-1.52 1.52a11.042 11.042 0 005.516 5.516l1.52-1.52a2 2 0 012.116-.548l3.06 1.02A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z"
                  />
                </svg>

                06 31 37 27 01
              </a>
            </div>

            {/* Reassurance */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl p-4">
                <div className="text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <span className="text-sm font-medium text-slate-700">
                  Intervention rapide
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl p-4">
                <div className="text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-.968-.115-1.91-.33-2.816z"
                    />
                  </svg>
                </div>

                <span className="text-sm font-medium text-slate-700">
                  Expertise technique
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl p-4">
                <div className="text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <span className="text-sm font-medium text-slate-700">
                  Tarifs transparents
                </span>
              </div>

            </div>

            {/* Back home */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-orange-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>

                Retour à l'accueil
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}