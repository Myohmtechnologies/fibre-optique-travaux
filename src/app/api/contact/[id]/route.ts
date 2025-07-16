import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();

  try {
    await connectToDatabase();

    const { status, notes, appointmentDate } = body;

    const updatedMessage = await ContactMessage.findByIdAndUpdate(
      id,
      { status, notes, appointmentDate },
      { new: true, runValidators: true }
    );

    if (!updatedMessage) {
      return NextResponse.json({ success: false, message: 'Message non trouvé.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedMessage }, { status: 200 });

  } catch (error) {
    console.error(`Erreur lors de la mise à jour du message ${id}:`, error);
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: 'Erreur de validation.', details: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
