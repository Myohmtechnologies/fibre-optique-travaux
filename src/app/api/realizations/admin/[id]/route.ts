import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';
import mongoose from 'mongoose';

// GET /api/realizations/admin/[id] - Récupérer une réalisation spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Valider l'ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID de réalisation invalide' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    const realization = await Realization.findById(id);
    
    if (!realization) {
      return NextResponse.json(
        { error: 'Réalisation non trouvée' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(realization);
  } catch (error) {
    console.error('Erreur lors de la récupération de la réalisation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la réalisation' },
      { status: 500 }
    );
  }
}

// PUT /api/realizations/admin/[id] - Mettre à jour une réalisation
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await request.json();
    
    // Valider l'ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID de réalisation invalide' },
        { status: 400 }
      );
    }
    
    // Validation de base
    if (!data.title || !data.description) {
      return NextResponse.json(
        { error: 'Le titre et la description sont obligatoires' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    // Vérifier si le slug existe déjà (sauf pour cette réalisation)
    if (data.slug) {
      const existingRealization = await Realization.findOne({ 
        slug: data.slug,
        _id: { $ne: id }
      });
      
      if (existingRealization) {
        return NextResponse.json(
          { error: 'Une autre réalisation avec ce slug existe déjà' },
          { status: 400 }
        );
      }
    }
    
    // Mettre à jour la réalisation
    const updatedRealization = await Realization.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!updatedRealization) {
      return NextResponse.json(
        { error: 'Réalisation non trouvée' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedRealization);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la réalisation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la réalisation' },
      { status: 500 }
    );
  }
}

// DELETE /api/realizations/admin/[id] - Supprimer une réalisation
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Valider l'ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID de réalisation invalide' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    const deletedRealization = await Realization.findByIdAndDelete(id);
    
    if (!deletedRealization) {
      return NextResponse.json(
        { error: 'Réalisation non trouvée' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de la réalisation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la réalisation' },
      { status: 500 }
    );
  }
}
