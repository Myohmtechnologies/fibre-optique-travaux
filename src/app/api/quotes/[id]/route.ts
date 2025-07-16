import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Quote } from '@/models/Quote';
import mongoose from 'mongoose';

// GET /api/quotes/[id] - Récupérer une demande de devis spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Vérification de la validité de l'ID
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: 'ID de demande invalide' },
        { status: 400 }
      );
    }

    // Récupération de la demande de devis
    const quote = await Quote.findById(params.id);

    // Vérification si la demande existe
    if (!quote) {
      return NextResponse.json(
        { error: 'Demande de devis non trouvée' },
        { status: 404 }
      );
    }

    // Réponse avec la demande
    return NextResponse.json(quote);
  } catch (error) {
    console.error('Erreur lors de la récupération de la demande de devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération de la demande de devis' },
      { status: 500 }
    );
  }
}

// PUT /api/quotes/[id] - Mettre à jour une demande de devis
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Vérification de la validité de l'ID
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: 'ID de demande invalide' },
        { status: 400 }
      );
    }

    // Récupération des données de la requête
    const data = await request.json();

    // Vérification des champs autorisés pour la mise à jour
    const allowedFields = ['status', 'fullName', 'phone', 'address', 'postalCode', 'message', 'notes', 'appointmentDate'];
    const updateData: Record<string, any> = {};

    for (const [key, value] of Object.entries(data)) {
      if (allowedFields.includes(key)) {
        updateData[key] = value;
      }
    }

    // Mise à jour de la demande de devis
    const updatedQuote = await Quote.findByIdAndUpdate(
      params.id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    // Vérification si la demande existe
    if (!updatedQuote) {
      return NextResponse.json(
        { error: 'Demande de devis non trouvée' },
        { status: 404 }
      );
    }

    // Réponse avec la demande mise à jour
    return NextResponse.json(updatedQuote);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la demande de devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la mise à jour de la demande de devis' },
      { status: 500 }
    );
  }
}

// DELETE /api/quotes/[id] - Supprimer une demande de devis
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Vérification de la validité de l'ID
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: 'ID de demande invalide' },
        { status: 400 }
      );
    }

    // Suppression de la demande de devis
    const deletedQuote = await Quote.findByIdAndDelete(params.id);

    // Vérification si la demande existe
    if (!deletedQuote) {
      return NextResponse.json(
        { error: 'Demande de devis non trouvée' },
        { status: 404 }
      );
    }

    // Réponse de succès
    return NextResponse.json(
      { success: true, message: 'Demande de devis supprimée avec succès' }
    );
  } catch (error) {
    console.error('Erreur lors de la suppression de la demande de devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la suppression de la demande de devis' },
      { status: 500 }
    );
  }
}
