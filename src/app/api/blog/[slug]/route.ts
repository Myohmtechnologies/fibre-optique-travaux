import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';

// GET /api/blog/[slug] - Récupérer un article de blog spécifique par son slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    await connectToDatabase();
    
    const post = await BlogPost.findOne({ slug, published: true }).lean();
    
    if (!post) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article de blog:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article de blog' },
      { status: 500 }
    );
  }
}
