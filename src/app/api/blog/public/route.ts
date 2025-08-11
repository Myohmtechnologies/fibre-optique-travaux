import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';
import { STATIC_BLOG_POSTS } from '@/data/blogStaticPosts';

// GET /api/blog/public - Récupérer tous les articles publiés
export async function GET(request: NextRequest) {
  try {
    let dbPosts: {
      _id: string;
      title: string;
      slug: string;
      excerpt: string;
      image: string;
      author: string;
      date: string;
      categories: string[];
    }[] = [];
    
    try {
      // Connexion à la base de données
      await connectToDatabase();
      
      // Récupérer les articles publiés, triés par date (du plus récent au plus ancien)
      const dbDocs = await BlogPost.find({ published: true })
        .sort({ date: -1 })
        .lean();

      // Normaliser la forme publique des articles DB
      dbPosts = dbDocs.map((doc: any) => ({
        _id: String(doc._id),
        title: doc.title,
        slug: doc.slug,
        excerpt: doc.excerpt,
        image: doc.image || '',
        author: doc.author,
        date: new Date(doc.date).toISOString(),
        categories: Array.isArray(doc.categories) ? doc.categories : [],
      }));
    } catch (dbError) {
      console.error('Erreur de connexion à la base de données:', dbError);
      // Continue with empty dbPosts array
    }

    // Fusion DB + statiques par slug, priorité DB mais avec fallback sur les champs manquants (ex: image)
    const staticMap = new Map(
      STATIC_BLOG_POSTS.map((s) => [s.slug, s])
    );

    const merged = dbPosts.map((d) => {
      const s = staticMap.get(d.slug);
      return {
        ...d,
        image: d.image && d.image.trim() !== '' ? d.image : s?.image || '',
        excerpt: d.excerpt && d.excerpt.trim() !== '' ? d.excerpt : s?.excerpt || '',
        author: d.author && d.author.trim() !== '' ? d.author : s?.author || d.author,
        categories: Array.isArray(d.categories) && d.categories.length > 0 ? d.categories : (s?.categories || []),
      };
    });

    // Ajouter les statiques non présents en DB
    for (const s of STATIC_BLOG_POSTS) {
      if (!merged.find((m) => m.slug === s.slug)) {
        merged.push(s as any);
      }
    }

    // Tri par date décroissante
    merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Toujours retourner le résultat fusionné (images garanties via fallback)
    return NextResponse.json(merged);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles publiés:', error);
    
    // En cas d'erreur générale, retourner au moins les articles statiques
    try {
      // Tri par date décroissante
      const staticPosts = [...STATIC_BLOG_POSTS];
      staticPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return NextResponse.json(staticPosts);
    } catch (staticError) {
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des articles' },
        { status: 500 }
      );
    }
  }
}
