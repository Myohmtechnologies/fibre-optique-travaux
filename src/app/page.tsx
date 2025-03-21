import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import Simulator from "@/components/Simulator";
import Solutions from "@/components/Solutions";
import Link from "next/link";
import Image from "next/image";
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';
import { BlogPost } from '@/models/BlogPost';

// Fonction pour récupérer les dernières réalisations
async function getLatestRealizations() {
  try {
    const { db } = await connectToDatabase();
    if (!db) throw new Error('Database connection failed');
    const realizations = await db.collection('realizations')
      .find({ published: true })
      .sort({ date: -1 })
      .limit(3)
      .toArray();
    return realizations;
  } catch (error) {
    console.error('Erreur lors de la récupération des réalisations:', error);
    return [];
  }
}

// Fonction pour récupérer les derniers articles
async function getLatestBlogPosts() {
  try {
    const { db } = await connectToDatabase();
    if (!db) throw new Error('Database connection failed');
    const posts = await db.collection('blogposts')
      .find({ published: true })
      .sort({ date: -1 })
      .limit(3)
      .toArray();
    return posts;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
}

export default async function Home() {
  const latestRealizations = await getLatestRealizations();
  const latestBlogPosts = await getLatestBlogPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup pageType="home" pageUrl="https://fibreoptiquetravaux.fr/" />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <div className="container mx-auto px-4 sm:px-6">
          <Simulator />
        </div>
   
        <Process />
        <Testimonials />

        {/* Section Nos derniers chantiers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Nos derniers chantiers</h2>
              <Link 
                href="/realisations" 
                className="text-fiber-orange hover:text-fiber-orange/80 font-medium"
              >
                Voir toutes nos réalisations
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestRealizations.map((realization: any) => (
                <Link 
                  key={realization._id} 
                  href={`/realisations/${realization.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    {realization.images && realization.images.length > 0 ? (
                      <Image
                        src={realization.images[0]}
                        alt={realization.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-fiber-orange transition-colors">
                      {realization.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {realization.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(realization.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="text-fiber-orange font-medium group-hover:underline">
                        Voir détails
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section Derniers articles */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Derniers articles</h2>
              <Link 
                href="/blog" 
                className="text-fiber-orange hover:text-fiber-orange/80 font-medium"
              >
                Voir tous les articles
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestBlogPosts.map((post: any) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-fiber-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="text-fiber-orange font-medium group-hover:underline">
                        Lire la suite
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section FAQ pour le SEO */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions fréquentes sur les travaux fibre optique</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Comment réaliser des travaux fibre optique dans une maison ?</h3>
                <p className="text-gray-600">Pour les travaux fibre optique maison, nous intervenons pour :</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Perçage de murs porteurs</li>
                  <li>Installation de fourreaux</li>
                  <li>Réalisation de regards</li>
                  <li>Tirage de câbles fibre</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quelle entreprise pour les travaux fibre optique ?</h3>
                <p className="text-gray-600">Fibre Optique Travaux est une entreprise spécialisée dans les travaux fibre optique depuis plus de 10 ans. Nous intervenons pour tous les opérateurs (Orange, Free, SFR, etc.) et réalisons tous types de travaux nécessaires à votre raccordement.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Travaux fibre optique Orange : que faire en cas de blocage ?</h3>
                <p className="text-gray-600">Si le technicien Orange ne peut pas finaliser votre installation, nous intervenons pour :</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Débloquer les fourreaux obstrués</li>
                  <li>Réaliser des travaux de génie civil</li>
                  <li>Installer des regards techniques</li>
                  <li>Effectuer des tirages de câbles</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Travaux fibre optique Free : quelles solutions ?</h3>
                <p className="text-gray-600">Pour les travaux fibre optique Free, nous proposons :</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Solutions de déblocage adaptées</li>
                  <li>Installation de fourreaux techniques</li>
                  <li>Réalisation de regards</li>
                  <li>Intervention rapide sous 48h</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services par opérateur */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos services de travaux fibre optique par opérateur</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/operators/orange.png"
                    alt="Travaux fibre optique Orange"
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Travaux fibre optique Orange</h3>
                <p className="text-gray-600">Solutions complètes pour débloquer votre installation Orange. Intervention rapide et professionnelle.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/operators/free.png"
                    alt="Travaux fibre optique Free"
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Travaux fibre optique Free</h3>
                <p className="text-gray-600">Services adaptés pour vos travaux fibre Free. Expertise et rapidité d'intervention.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src="/images/operators/sfr.png"
                    alt="Travaux fibre optique SFR"
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Travaux fibre optique SFR</h3>
                <p className="text-gray-600">Solutions professionnelles pour vos travaux fibre SFR. Qualité et efficacité garanties.</p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
 