import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';

// GET /api/realizations - Récupérer toutes les réalisations publiées
export async function GET() {
  try {
    await connectToDatabase();
    
    const realizations = await Realization.find({ published: true })
      .sort({ date: -1 })
      .select('title slug description images date')
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
