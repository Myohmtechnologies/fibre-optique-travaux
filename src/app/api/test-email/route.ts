import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || '');
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Utilisation de l'adresse par défaut de Resend
      to: 'fibreoptiquetravaux1@gmail.com',
      subject: 'Test Email - Fibre Optique Travaux',
      html: '<p>Ceci est un email de test pour vérifier la configuration de Resend.</p>'
    });
    
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Exception lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
