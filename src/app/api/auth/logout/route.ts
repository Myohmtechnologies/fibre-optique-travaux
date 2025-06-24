import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Supprimer le cookie d'authentification
    cookies().delete('auth-token');
    
    // Retourner une réponse de succès
    return NextResponse.json({ success: true, message: 'Déconnexion réussie' });
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    return NextResponse.json({ success: false, message: 'Erreur lors de la déconnexion' }, { status: 500 });
  }
}
