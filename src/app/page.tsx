import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

import Solutions from "@/components/Solutions";
import Link from "next/link";
import Image from "next/image";
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';
import { BlogPost } from '@/models/BlogPost';
import FAQ from "@/components/FAQ";

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
      <SchemaMarkup 
        pageType="home" 
        pageUrl="https://fibreoptiquetravaux.fr/"
        title="Fibre optique travaux | Fourreau Bouché, Regard Introuvable - Solution Rapide"
        description="Le technicien de votre opérateur ne peut pas finaliser votre raccordement fibre à cause d'un blocage ? Notre équipement spécialisé localise précisément le point de blocage et nous intervenons sous 48h."
      />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <div className="container mx-auto px-4 sm:px-6">
        
        </div>
   
        <Process />
        <About />
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes sur les travaux fibre optique</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez les réponses aux questions les plus courantes sur nos services de travaux fibre optique
              </p>
            </div>
            <FAQ />
          </div>
        </section>

     

        <Contact />
      </main>
      <Footer />
    </div>
  );
}