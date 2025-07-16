import { connectToDatabase } from '@/lib/mongodb';
import { Resend } from 'resend';
import mongoose from 'mongoose';

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

// Définir le schéma pour les messages de contact
const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  postalCode: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  status: { type: String, enum: ['new', 'contacted', 'scheduled', 'completed', 'archived'], default: 'new' },
  notes: { type: String, trim: true },
  appointmentDate: { type: Date },
}, { timestamps: true });

// Fonction pour obtenir le modèle (pour éviter les erreurs de compilation)
const getContactMessageModel = () => {
  return mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);
};

export async function POST(request: Request) {
  try {
    // Connexion à la base de données
    await connectToDatabase();

    // Récupération des données du formulaire
    const data = await request.json();
    const { name, email, phone, address, postalCode, message } = data;

    // Validation des données
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Création d'un nouveau message de contact
    const ContactMessageModel = getContactMessageModel();
    
    const newContactMessage = new ContactMessageModel({
      name,
      email,
      phone,
      address: address || "",
      postalCode: postalCode || "",
      message,
      status: "new",
    });

    // Sauvegarde du message dans la base de données
    await newContactMessage.save();

    // Envoi d'un email de notification
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "fibreoptiquetravaux1@gmail.com",
        subject: "Nouveau message de contact",
        html: `
          <h1>Nouveau message de contact</h1>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <p><strong>Adresse:</strong> ${address || "Non renseignée"}</p>
          <p><strong>Code postal:</strong> ${postalCode || "Non renseigné"}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      if (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
      }
    } catch (emailError) {
      // On ne bloque pas la création du message si l'envoi d'email échoue
      console.error('Exception lors de l\'envoi de l\'email de notification:', emailError);
    }

    return Response.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur API Contact:', error);
    // Gérer les erreurs de validation Mongoose
    if (error instanceof Error && error.name === 'ValidationError') {
      return Response.json(
        { success: false, message: 'Erreur de validation des données.', details: error.message },
        { status: 400 }
      );
    }
    return Response.json(
      { success: false, message: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}

// Route GET pour récupérer les messages (utile pour le débogage)
export async function GET() {
  try {
    await connectToDatabase();
    const ContactMessageModel = getContactMessageModel();
    const messages = await ContactMessageModel.find({}).sort({ createdAt: -1 });
    return Response.json(
      { success: true, data: messages },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    return Response.json(
      { success: false, message: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
