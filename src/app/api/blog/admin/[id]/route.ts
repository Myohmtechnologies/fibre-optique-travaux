import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/models/BlogPost';
import mongoose from 'mongoose';

// GET /api/blog/admin/[id] - Récupérer un article spécifique par son ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    const { id } = params;
    
    // Vérifier si l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID d\'article invalide' },
        { status: 400 }
      );
    }
    
    // Récupérer l'article
    const post = await BlogPost.findById(id).lean();
    
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

// PUT /api/blog/admin/[id] - Mettre à jour un article existant
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    const { id } = params;
    
    // Vérifier si l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID d\'article invalide' },
        { status: 400 }
      );
    }
    
    // Récupérer les données de la requête
    const data = await request.json();
    
    // Validation de base
    if (!data.title || !data.slug || !data.content || !data.excerpt || !data.author) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }
    
    // Vérifier si un autre article avec le même slug existe déjà
    const existingPost = await BlogPost.findOne({ 
      slug: data.slug,
      _id: { $ne: id }
    });
    
    if (existingPost) {
      return NextResponse.json(
        { error: 'Un autre article avec ce slug existe déjà' },
        { status: 400 }
      );
    }
    
    // Mettre à jour l'article
    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image,
        author: data.author,
        published: data.published,
        categories: data.categories
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedPost) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'article' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/admin/[id] - Supprimer un article
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    const { id } = params;
    
    // Vérifier si l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID d\'article invalide' },
        { status: 400 }
      );
    }
    
    // Supprimer l'article
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Article supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
}
