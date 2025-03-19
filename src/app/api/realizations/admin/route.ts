import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';

// GET /api/realizations/admin - Récupérer toutes les réalisations (publiées ou non)
export async function GET() {
  try {
    await connectToDatabase();
    
    const realizations = await Realization.find()
      .sort({ date: -1 })
      .lean();
    
    return NextResponse.json(realizations);
  } catch (error) {
    console.error('Erreur lors de la récupération des réalisations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des réalisations' },
      { status: 500 }
    );
  }
}

// POST /api/realizations/admin - Créer une nouvelle réalisation
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validation de base
    if (!data.title || !data.description) {
      return NextResponse.json(
        { error: 'Le titre et la description sont obligatoires' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    // Vérifier si le slug existe déjà
    const existingRealization = await Realization.findOne({ slug: data.slug });
    if (existingRealization) {
      return NextResponse.json(
        { error: 'Une réalisation avec ce slug existe déjà' },
        { status: 400 }
      );
    }
    
    // Créer la nouvelle réalisation
    const newRealization = new Realization(data);
    await newRealization.save();
    
    return NextResponse.json(newRealization);
  } catch (error) {
    console.error('Erreur lors de la création de la réalisation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la réalisation' },
      { status: 500 }
    );
  }
}
