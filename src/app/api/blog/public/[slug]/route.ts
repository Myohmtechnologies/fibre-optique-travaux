import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';
import { STATIC_BLOG_POSTS } from '@/data/blogStaticPosts';

// GET /api/blog/public/[slug] - Récupérer un article spécifique par son slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  
  // Vérifier d'abord si c'est un article statique
  const staticPost = STATIC_BLOG_POSTS.find(post => post.slug === slug);
  if (staticPost) {
    return NextResponse.json(staticPost);
  }
  
  try {
    // Si ce n'est pas un article statique, chercher dans la base de données
    try {
      // Connexion à la base de données
      await connectToDatabase();
      
      // Récupérer l'article par son slug
      const post = await BlogPost.findOne({ 
        slug: slug,
        published: true // S'assurer que l'article est publié
      }).lean();
      
      if (post) {
        return NextResponse.json(post);
      }
    } catch (dbError) {
      console.error('Erreur de connexion à la base de données:', dbError);
      // Continue to return 404 if not found
    }
    
    // Si on arrive ici, l'article n'a pas été trouvé
    return NextResponse.json(
      { error: 'Article non trouvé' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    );
  }
}
