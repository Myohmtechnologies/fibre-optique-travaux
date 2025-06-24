import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware pour protéger les routes du dashboard
export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur accède à une route protégée (dashboard)
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Vérifier si l'utilisateur est authentifié (via cookie)
    const authToken = request.cookies.get('auth-token');
    
    // Si pas de token, rediriger vers la page de connexion
    if (!authToken) {
      console.log('Pas de token auth-token, redirection vers login');
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
    
    // Solution temporaire: accepter n'importe quel token
    console.log('Token trouvé, accès autorisé au dashboard');
    return NextResponse.next();
  }
  
  // Continuer la requête normalement pour les routes non protégées
  return NextResponse.next();
}

// Configuration des routes à protéger
export const config = {
  // Matcher pour les routes commençant par /dashboard
  matcher: ['/dashboard/:path*'],
};
