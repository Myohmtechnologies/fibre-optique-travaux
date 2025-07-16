import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Quote } from '@/models/Quote';
import { Resend } from 'resend';

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

    // Envoi d'un email de notification
    try {
      const resend = new Resend(process.env.RESEND_API_KEY || '');
      
      // Préparation du contenu HTML de l'email
      const emailHtml = `
        <h1>Nouvelle demande de devis reçue</h1>
        <p>Une nouvelle demande de devis a été soumise sur votre site web.</p>
        
        <h2>Informations client</h2>
        <ul>
          <li><strong>Nom complet:</strong> ${data.fullName}</li>
          <li><strong>Téléphone:</strong> ${data.phone}</li>
          <li><strong>Adresse:</strong> ${data.address}</li>
          <li><strong>Code postal:</strong> ${data.postalCode}</li>
        </ul>
        
        <h2>Détails de la demande</h2>
        <ul>
          <li><strong>Environnement:</strong> ${data.environment}</li>
          <li><strong>Type de logement:</strong> ${data.housingType}</li>
          <li><strong>Opérateur:</strong> ${data.operator}</li>
        </ul>
        
        ${data.message ? `<h2>Message</h2><p>${data.message}</p>` : ''}
        
        <p>Connectez-vous à votre <a href="https://fibreoptiquetravaux.fr/dashboard/quotes">tableau de bord</a> pour gérer cette demande.</p>
      `;
      
      // Utilisation de l'adresse par défaut de Resend pour les tests
      const { data: emailData, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Adresse vérifiée par défaut
        to: 'fibreoptiquetravaux1@gmail.com',
        subject: `Nouvelle demande de devis - ${data.fullName}`,
        html: emailHtml,
        text: `Nouvelle demande de devis de ${data.fullName} (${data.phone}). Connectez-vous au tableau de bord pour plus de détails.`
      });
      
      if (error) {
        console.error('Erreur Resend lors de l\'envoi de l\'email:', error);
      } else {
        console.log('Email de notification envoyé avec succès, ID:', emailData?.id);
      }
    } catch (emailError) {
      // On ne bloque pas la création de la demande si l'envoi d'email échoue
      console.error('Exception lors de l\'envoi de l\'email de notification:', emailError);
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
