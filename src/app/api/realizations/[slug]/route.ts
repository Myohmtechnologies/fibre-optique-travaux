import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Realization } from '@/models/Realization';

// GET /api/realizations/[slug] - Récupérer une réalisation spécifique par son slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    await connectToDatabase();
    
    const realization = await Realization.findOne({ 
      slug,
      published: true
    });
    
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
