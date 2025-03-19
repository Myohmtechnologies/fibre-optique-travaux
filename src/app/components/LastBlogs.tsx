"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
}

const LastBlogs: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles?limit=3'); // Assurez-vous que l'API supporte ce paramètre
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Erreur:', error);
        setError('Impossible de charger les articles. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Chargement des articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Nos Derniers Articles</h1>
      <div>
        {articles.map((article) => (
          <div key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Link href={`/blog/${article.slug}`}>Lire plus</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastBlogs;
