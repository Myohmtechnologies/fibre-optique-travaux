import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Resend } from 'resend';
// Importer le modèle avec une syntaxe compatible avec les deux modes d'exportation
import * as ContactMessageModule from '@/models/ContactMessage';

// Utiliser le modèle, qu'il soit exporté par défaut ou comme membre nommé
const ContactMessage = (ContactMessageModule.default || ContactMessageModule) as any;

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    console.log('--- REQUÊTE REÇUE (API) ---', body);

    const { name, email, phone, address, postalCode, message } = body;

    // Validation côté serveur
    if (!name || !email || !phone || !address || !postalCode || !message) {
      return NextResponse.json({ success: false, message: 'Tous les champs sont obligatoires.' }, { status: 400 });
    }

    const newMessage = new ContactMessage({
      name,
      email,
      phone,
      address,
      postalCode,
      message,
    });

    console.log('--- OBJET AVANT SAUVEGARDE ---', newMessage);

    await newMessage.save();
    
    // Envoi d'un email de notification
    try {
      const resend = new Resend(process.env.RESEND_API_KEY || '');
      
      // Préparation du contenu HTML de l'email
      const emailHtml = `
        <h1>Nouveau message de contact reçu</h1>
        <p>Un nouveau message de contact a été soumis sur votre site web.</p>
        
        <h2>Informations client</h2>
        <ul>
          <li><strong>Nom:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Téléphone:</strong> ${phone}</li>
          <li><strong>Adresse:</strong> ${address}</li>
          <li><strong>Code postal:</strong> ${postalCode}</li>
        </ul>
        
        <h2>Message</h2>
        <p>${message}</p>
        
        <p>Connectez-vous à votre tableau de bord pour gérer vos messages.</p>
      `;
      
      const { data: emailData, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Adresse vérifiée par défaut
        to: 'fibreoptiquetravaux1@gmail.com',
        subject: `Nouveau message de contact - ${name}`,
        html: emailHtml,
        text: `Nouveau message de contact de ${name} (${email}, ${phone}). Message: ${message}`
      });
      
      if (error) {
        console.error('Erreur Resend lors de l\'envoi de l\'email:', error);
      } else {
        console.log('Email de notification envoyé avec succès, ID:', emailData?.id);
      }
    } catch (emailError) {
      // On ne bloque pas la création du message si l'envoi d'email échoue
      console.error('Exception lors de l\'envoi de l\'email de notification:', emailError);
    }

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès !' }, { status: 201 });

  } catch (error) {
    console.error('Erreur API Contact:', error);
    // Gérer les erreurs de validation Mongoose
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: 'Erreur de validation des données.', details: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

// Route GET pour récupérer les messages (utile pour le débogage)
export async function GET() {
  try {
    await connectToDatabase();
    const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    return NextResponse.json({ success: false, message: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
