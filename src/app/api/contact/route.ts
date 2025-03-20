import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ContactMessage } from '@/models/ContactMessage';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  console.log('Données reçues:', body); // Ajout d'un log pour vérifier les données

  try {
    await connectToDatabase();

    // Créer un nouvel enregistrement de message de contact
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });

    await newMessage.save();

    return NextResponse.json({ message: 'Message envoyé avec succès !' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l’envoi du message:', error);
    return NextResponse.json({ error: 'Une erreur est survenue lors de l’envoi de votre message.' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const messages = await ContactMessage.find(); // Récupérer tous les messages
    console.log('Messages récupérés:', messages); // Log des messages récupérés
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    return NextResponse.json({ error: 'Une erreur est survenue lors de la récupération des messages.' }, { status: 500 });
  }
}
