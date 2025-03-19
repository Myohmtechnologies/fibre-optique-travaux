"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  categories: string[];
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog/public');
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Erreur:', error);
        setError('Impossible de charger les articles de blog. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            {/* En-tête de la page */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
                Notre Blog
              </h1>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg max-w-2xl mx-auto text-neutral-dark">
                Découvrez nos articles, conseils et actualités sur la fibre optique et les installations réseau.
              </p>
            </div>

            {/* État de chargement */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-construction-orange border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-neutral-dark">Chargement des articles...</p>
              </div>
            )}

            {/* Message d'erreur */}
            {error && (
              <div className="text-center py-12">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Erreur ! </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              </div>
            )}

            {/* Grille d'articles */}
            {!loading && !error && (
              <>
                {blogPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-neutral-dark">Aucun article disponible pour le moment.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post) => (
                      <article key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="relative h-48 w-full">
                          {post.image ? (
                            <Image 
                              src={post.image} 
                              alt={post.title} 
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400">Image non disponible</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span>{new Date(post.date).toLocaleDateString('fr-FR', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</span>
                            <span className="mx-2">•</span>
                            <span>{post.author}</span>
                          </div>
                          <h2 className="text-xl font-bold text-neutral-dark mb-2 line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-block text-construction-orange hover:text-construction-orange-dark font-medium transition-colors"
                          >
                            Lire la suite →
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Abonnement à la newsletter */}
            <div className="bg-neutral-dark text-white rounded-xl shadow-lg p-8 mb-12">
              <div className="md:flex items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2">Restez informé</h2>
                  <p className="text-gray-300">
                    Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils sur la fibre optique.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <form className="flex flex-col sm:flex-row">
                    <input 
                      type="email" 
                      placeholder="Votre email" 
                      className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                    />
                    <button 
                      type="submit" 
                      className="bg-construction-orange hover:bg-construction-orange-dark text-white font-medium px-4 py-2 rounded-r-lg transition-colors sm:mt-0 mt-2"
                    >
                      S'abonner
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Catégories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Catégories</h2>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/blog?categorie=installation"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  Installation
                </Link>
                <Link 
                  href="/blog?categorie=depannage"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  Dépannage
                </Link>
                <Link 
                  href="/blog?categorie=conseils"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  Conseils
                </Link>
                <Link 
                  href="/blog?categorie=technologie"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  Technologie
                </Link>
                <Link 
                  href="/blog?categorie=actualites"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  Actualités
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
