import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';

// GET /api/blog - Récupérer tous les articles de blog publiés
export async function GET() {
  try {
    await connectToDatabase();
    
    const posts = await BlogPost.find({ published: true })
      .sort({ date: -1 })
      .select('title slug excerpt image author date categories')
      .lean();
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles de blog:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles de blog' },
      { status: 500 }
    );
  }
}
