"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  categories: string[];
}

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [prevPost, setPrevPost] = useState<BlogPost | null>(null);
  const [nextPost, setNextPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPostData = async () => {
      try {
        setLoading(true);
        
        // Récupérer l'article
        const response = await fetch(`/api/blog/public/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Article non trouvé');
          }
          throw new Error('Erreur lors de la récupération de l\'article');
        }
        
        const data = await response.json();
        setPost(data);
        
        // Récupérer les articles similaires
        const relatedResponse = await fetch('/api/blog/public');
        
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          // Filtrer pour exclure l'article actuel et limiter à 3
          const filtered = relatedData
            .filter((p: BlogPost) => p.slug !== slug)
            .slice(0, 3);
          setRelatedPosts(filtered);
          
          // Pour les articles précédent et suivant, on utilise les mêmes articles similaires
          // Dans une vraie application, vous pourriez avoir un endpoint spécifique
          if (filtered.length > 0) {
            setPrevPost(filtered[0]);
            if (filtered.length > 1) {
              setNextPost(filtered[1]);
            }
          }
        }
      } catch (error) {
        console.error('Erreur:', error);
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPostData();
    }
  }, [slug]);

  // Si l'article est en cours de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-construction-orange border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-neutral-dark">Chargement de l'article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Si une erreur s'est produite ou si l'article n'existe pas
  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">Article non trouvé</h1>
            <p className="mb-6">{error || "L'article que vous recherchez n'existe pas ou a été déplacé."}</p>
            <Link href="/blog" className="bg-construction-orange hover:bg-construction-orange-dark text-white font-medium py-2 px-6 rounded-xl transition-colors">
              Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <article className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 py-12">
            {/* Fil d'Ariane */}
            <div className="mb-8">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-construction-orange">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <Link href="/blog" className="ml-1 text-sm font-medium text-gray-500 hover:text-construction-orange md:ml-2">
                        Blog
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 line-clamp-1">
                        {post.title}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            
            {/* Contenu de l'article */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Image principale en haut de l'article */}
                {post.image && (
                  <div className="w-full h-64 md:h-80 relative overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6 md:p-10">
                  <style jsx global>{`
                    /* Style pour les titres numérotés */
                    .prose h2 {
                      position: relative;
                      padding: 1rem 1.5rem;
                      margin: 2.5rem 0 1.5rem;
                      font-size: 1.5rem;
                      line-height: 1.3;
                      background-color: #f97316;
                      color: white;
                      border-radius: 0.5rem;
                      font-weight: 700;
                    }
                    
                    .prose h3 {
                      position: relative;
                      padding-left: 1rem;
                      margin: 2rem 0 1rem;
                      font-size: 1.3rem;
                      line-height: 1.3;
                      border-left: 4px solid #f97316;
                      color: #333;
                    }
                    
                    /* Style pour les paragraphes */
                    .prose p {
                      margin: 1.2rem 0;
                      line-height: 1.7;
                      color: #4b5563;
                    }
                    
                    /* Style pour les listes */
                    .prose ul {
                      margin: 1.5rem 0;
                      padding-left: 1.2rem;
                    }
                    
                    .prose ul li {
                      margin: 0.7rem 0;
                      position: relative;
                      padding-left: 1.5rem;
                    }
                    
                    .prose ul li::before {
                      content: "";
                      position: absolute;
                      left: 0;
                      top: 0.6rem;
                      width: 0.5rem;
                      height: 0.5rem;
                      background-color: #f97316;
                      border-radius: 50%;
                    }
                    
                    /* Style pour les images */
                    .prose img {
                      border-radius: 0.5rem;
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                      margin: 2rem auto;
                      display: block;
                    }
                    
                    /* Style pour les sections importantes */
                    .prose blockquote {
                      background-color: #fff7ed;
                      border-left: 4px solid #f97316;
                      padding: 1rem 1.5rem;
                      margin: 1.5rem 0;
                      border-radius: 0.5rem;
                    }
                    
                    .prose blockquote p {
                      margin: 0.5rem 0;
                      font-style: italic;
                      color: #7c2d12;
                    }
                    
                    /* Style pour les tableaux */
                    .prose table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 2rem 0;
                      border-radius: 0.5rem;
                      overflow: hidden;
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    
                    .prose table th {
                      background-color: #f97316;
                      color: white;
                      padding: 0.75rem 1rem;
                      text-align: left;
                      font-weight: 600;
                    }
                    
                    .prose table td {
                      padding: 0.75rem 1rem;
                      border-bottom: 1px solid #e5e7eb;
                    }
                    
                    .prose table tr:nth-child(even) {
                      background-color: #fff7ed;
                    }
                    
                    /* Style pour les liens */
                    .prose a {
                      color: #f97316;
                      text-decoration: none;
                      transition: all 0.2s;
                    }
                    
                    .prose a:hover {
                      color: #ea580c;
                      text-decoration: underline;
                    }
                    
                    /* Séparateurs de section */
                    .prose hr {
                      margin: 2.5rem 0;
                      border: 0;
                      height: 1px;
                      background-image: linear-gradient(to right, rgba(249, 115, 22, 0), rgba(249, 115, 22, 0.75), rgba(249, 115, 22, 0));
                    }
                    
                    /* Style pour les étapes numérotées */
                    .prose h2[id^="etape-"],
                    .prose h2[id^="section-"],
                    .prose h2[id^="partie-"] {
                      counter-increment: section;
                      padding-left: 3.5rem;
                    }
                    
                    .prose h2[id^="etape-"]::before,
                    .prose h2[id^="section-"]::before,
                    .prose h2[id^="partie-"]::before {
                      content: counter(section);
                      position: absolute;
                      left: 1rem;
                      top: 50%;
                      transform: translateY(-50%);
                      width: 2rem;
                      height: 2rem;
                      background: white;
                      color: #f97316;
                      border-radius: 9999px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-weight: 700;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    
                    /* Style pour les encadrés de prix */
                    .prose div[class*="prix"],
                    .prose div[class*="tarif"] {
                      background-color: #fff7ed;
                      border: 1px solid #fed7aa;
                      border-radius: 0.5rem;
                      padding: 1.5rem;
                      margin: 2rem 0;
                      box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.1);
                    }
                  `}</style>
                  
                  {/* Titre et date */}
                  <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                    <div className="text-sm text-gray-500">
                      Publié le {new Date(post.date).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  {/* Introduction */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                  </div>
                  
                  {/* Contenu principal */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Carte de contact */}
                  <div className="mt-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-6 text-white shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Besoin d'aide pour vos travaux de fibre optique ?</h3>
                    <p className="mb-4">Notre équipe d'experts est disponible pour vous aider à débloquer votre installation.</p>
                    <Link href="/contact" className="inline-block bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-200">
                      Contactez-nous
                    </Link>
                  </div>
                  
                  {/* Auteur et tags */}
                  <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">Expert en installation fibre optique</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                        Fibre optique
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                        Installation
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-600">
                        Travaux
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Articles similaires */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Articles similaires</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="block group">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                          {relatedPost.image && (
                            <div className="relative h-48 w-full">
                              <Image 
                                src={relatedPost.image} 
                                alt={relatedPost.title} 
                                fill 
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">{relatedPost.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Zones d'intervention et tarifs */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nos zones d'intervention et tarifs</h2>
                
                {/* Carte de la région PACA */}
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold text-orange-500 mb-4">Nous intervenons dans toute la région PACA</h3>
                      <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden border-2 border-orange-200">
                        <Image 
                          src="/images/carte-paca.jpg" 
                          alt="Carte de la région PACA" 
                          fill 
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/R%C3%A9gion_Provence-Alpes-C%C3%B4te_d%27Azur.svg/800px-R%C3%A9gion_Provence-Alpes-C%C3%B4te_d%27Azur.svg.png";
                          }}
                        />
                      </div>
                      <ul className="grid grid-cols-2 gap-2 mt-4">
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Marseille
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Nice
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Toulon
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Aix-en-Provence
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Cannes
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Avignon
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold text-orange-500 mb-4">Nos tarifs</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                          <div>
                            <h4 className="font-semibold text-gray-800">Diagnostic complet avec détection</h4>
                            <p className="text-sm text-gray-600">Évaluation précise du point de blocage</p>
                          </div>
                          <span className="text-lg font-bold text-orange-500">230€</span>
                        </div>
                        
                        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                          <div>
                            <h4 className="font-semibold text-gray-800">Intervention sur surface molle</h4>
                            <p className="text-sm text-gray-600">Terre, pelouse, jardin</p>
                          </div>
                          <span className="text-lg font-bold text-orange-500">530€</span>
                        </div>
                        
                        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                          <div>
                            <h4 className="font-semibold text-gray-800">Intervention sur surface dure</h4>
                            <p className="text-sm text-gray-600">Béton, enrobé, pavé</p>
                          </div>
                          <span className="text-lg font-bold text-orange-500">710€</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-800">Devis personnalisé</h4>
                            <p className="text-sm text-gray-600">Pour situations complexes</p>
                          </div>
                          <span className="text-lg font-bold text-orange-500">Sur demande</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                        <p className="text-sm text-gray-700">
                          <strong>Note :</strong> Les tarifs peuvent varier en fonction de la complexité des travaux et des spécificités de votre logement. Contactez-nous pour un devis personnalisé et sans engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Partage et navigation */}
            <div className="max-w-5xl mx-auto px-4 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-t border-gray-200">
                {/* Boutons de partage */}
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-sm font-medium text-gray-700 mr-4">Partager :</span>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.235 2.064.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Navigation entre articles */}
                <div className="flex justify-between w-full md:w-auto">
                  {prevPost ? (
                    <Link 
                      href={`/blog/${prevPost.slug}`}
                      className="flex items-center text-sm font-medium text-gray-600 hover:text-construction-orange transition-colors"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Article précédent
                    </Link>
                  ) : (
                    <span></span>
                  )}
                  
                  {nextPost && (
                    <Link 
                      href={`/blog/${nextPost.slug}`}
                      className="flex items-center text-sm font-medium text-gray-600 hover:text-construction-orange transition-colors ml-6"
                    >
                      Article suivant
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  )}
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
