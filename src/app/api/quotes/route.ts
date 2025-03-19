import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Quote } from '@/models/Quote';

// POST /api/quotes - Créer une nouvelle demande de devis
export async function POST(request: NextRequest) {
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

    // Récupération des données de la requête
    let data;
    try {
      data = await request.json();
    } catch (parseError) {
      console.error('Erreur lors de l\'analyse des données JSON:', parseError);
      return NextResponse.json(
        { error: 'Format de données invalide' },
        { status: 400 }
      );
    }

    // Validation des données
    const requiredFields = ['environment', 'housingType', 'operator', 'fullName', 'phone', 'address', 'postalCode'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Le champ '${field}' est requis` },
          { status: 400 }
        );
      }
    }

    // Validation du code postal (5 chiffres)
    const postalCodeRegex = /^[0-9]{5}$/;
    if (!postalCodeRegex.test(data.postalCode)) {
      return NextResponse.json(
        { error: 'Le code postal doit contenir 5 chiffres' },
        { status: 400 }
      );
    }

    // Validation du numéro de téléphone (format français)
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Le numéro de téléphone n\'est pas valide' },
        { status: 400 }
      );
    }

    // Création d'une nouvelle demande de devis
    const newQuote = new Quote({
      environment: data.environment,
      housingType: data.housingType,
      operator: data.operator,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      postalCode: data.postalCode,
      message: data.message || '',
      status: 'new'
    });

    // Enregistrement dans la base de données
    try {
      await newQuote.save();
    } catch (saveError) {
      console.error('Erreur lors de l\'enregistrement du devis:', saveError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement de votre demande. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    // Réponse avec la demande créée
    return NextResponse.json(
      { success: true, quote: newQuote },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur lors de la création de la demande de devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la création de la demande de devis' },
      { status: 500 }
    );
  }
}

// GET /api/quotes - Récupérer toutes les demandes de devis (pour le dashboard admin)
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

    // Récupération des demandes de devis
    try {
      const quotes = await Quote.find().sort({ createdAt: -1 });
      // Réponse avec les demandes
      return NextResponse.json(quotes);
    } catch (findError) {
      console.error('Erreur lors de la récupération des devis:', findError);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des demandes de devis' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes de devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des demandes de devis' },
      { status: 500 }
    );
  }
}
