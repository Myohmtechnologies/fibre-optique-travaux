import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';

// GET /api/blog/public - Récupérer tous les articles publiés
export async function GET(request: NextRequest) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    // Récupérer les articles publiés, triés par date (du plus récent au plus ancien)
    const posts = await BlogPost.find({ published: true })
      .sort({ date: -1 })
      .lean();
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles publiés:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}
