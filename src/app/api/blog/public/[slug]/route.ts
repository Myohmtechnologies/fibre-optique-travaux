import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';

// GET /api/blog/public/[slug] - Récupérer un article spécifique par son slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    const { slug } = params;
    
    // Récupérer l'article par son slug
    const post = await BlogPost.findOne({ 
      slug: slug,
      published: true // S'assurer que l'article est publié
    }).lean();
    
    if (!post) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    );
  }
}
