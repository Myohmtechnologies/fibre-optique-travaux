import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Quote, IQuote } from '@/models/Quote';

// Interface pour les interventions retournées
interface Intervention {
  id: string;
  quoteId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  address: string;
  service: string;
  scheduledDate: string;
  technician: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes: string;
}

// GET /api/interventions - Récupérer toutes les interventions programmées
export async function GET(request: NextRequest) {
  try {
    // Connexion à la base de données
    await connectToDatabase();
    
    // Récupérer toutes les quotes avec status='scheduled' et appointmentDate défini
    const scheduledQuotes = await Quote.find({
      status: 'scheduled',
      appointmentDate: { $exists: true, $ne: null }
    }).sort({ appointmentDate: 1 });

    // Transformer les données en format Intervention
    const interventions: Intervention[] = scheduledQuotes.map((quote: any) => ({
      id: quote._id?.toString() || '',
      quoteId: quote._id?.toString() || '',
      clientName: quote.fullName,
      clientEmail: '', // Les quotes n'ont pas d'email, on peut l'ajouter plus tard si nécessaire
      clientPhone: quote.phone,
      address: `${quote.address}, ${quote.postalCode}`,
      service: `${quote.environment} - ${quote.housingType} (${quote.operator})`,
      scheduledDate: quote.appointmentDate.toISOString(),
      technician: 'Technicien assigné', // À améliorer avec un vrai système de techniciens
      status: quote.status === 'completed' ? 'completed' : 'scheduled',
      notes: quote.notes || quote.message || ''
    }));

    return NextResponse.json(interventions);
  } catch (error) {
    console.error('Erreur lors de la récupération des interventions:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des interventions' },
      { status: 500 }
    );
  }
}

// PUT /api/interventions - Mettre à jour une intervention
export async function PUT(request: NextRequest) {
  try {
    await connectToDatabase();
    
    const { id, status, notes, technician } = await request.json();
    
    // Mapping des statuts intervention vers statuts quote
    const quoteStatus = status === 'completed' ? 'completed' : 'scheduled';
    
    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      { 
        status: quoteStatus,
        notes: notes,
        // On pourrait ajouter un champ technicien plus tard
      },
      { new: true }
    );
    
    if (!updatedQuote) {
      return NextResponse.json(
        { error: 'Intervention non trouvée' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      intervention: {
        id: updatedQuote._id?.toString(),
        status: status,
        notes: updatedQuote.notes
      }
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'intervention:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    );
  }
}
