import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Quote } from '@/models/Quote';

// GET /api/test - Récupérer toutes les demandes de devis pour tester
export async function GET(request: NextRequest) {
  try {
    // Connexion à la base de données
    try {
      await connectToDatabase();
    } catch (dbError) {
      console.error('Erreur de connexion à la base de données:', dbError);
      return NextResponse.json(
        { error: 'Erreur de connexion à la base de données. Veuillez réessayer plus tard.' },
        { status: 503 }
      );
    }

    // Récupérer toutes les demandes de devis
    try {
      const quotes = await Quote.find({}).sort({ createdAt: -1 });
      console.log(`Nombre de devis trouvés: ${quotes.length}`);
      
      // Afficher les 3 derniers devis pour vérification
      if (quotes.length > 0) {
        const recentQuotes = quotes.slice(0, Math.min(3, quotes.length));
        console.log('Derniers devis:', JSON.stringify(recentQuotes, null, 2));
      }
      
      return NextResponse.json({ success: true, quotes });
    } catch (findError) {
      console.error('Erreur lors de la récupération des devis:', findError);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des devis.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des devis' },
      { status: 500 }
    );
  }
}
