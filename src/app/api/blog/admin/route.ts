import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';

// GET /api/blog/admin - Récupérer tous les articles (publiés et brouillons)
export async function GET() {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    // Récupérer tous les articles, triés par date (du plus récent au plus ancien)
    const posts = await BlogPost.find()
      .sort({ date: -1 })
      .lean();
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}

// POST /api/blog/admin - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    // Récupérer les données de la requête
    const data = await request.json();
    
    // Validation de base
    if (!data.title || !data.slug || !data.content || !data.excerpt || !data.author) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }
    
    // Vérifier si un article avec le même slug existe déjà
    const existingPost = await BlogPost.findOne({ slug: data.slug });
    if (existingPost) {
      return NextResponse.json(
        { error: 'Un article avec ce slug existe déjà' },
        { status: 400 }
      );
    }
    
    // Créer le nouvel article
    const newPost = new BlogPost({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      image: data.image || '',
      author: data.author,
      date: new Date(),
      published: data.published || false,
      categories: data.categories || []
    });
    
    // Sauvegarder l'article dans la base de données
    await newPost.save();
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    );
  }
}
