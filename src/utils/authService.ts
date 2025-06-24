// Service d'authentification pour gérer la connexion, la déconnexion et la vérification de l'authentification

interface User {
  id: string;
  username: string;
  role: string;
  email?: string;
}

// Fonction pour vérifier si l'utilisateur est connecté
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Vérifier si l'utilisateur existe dans localStorage
  // Le cookie auth-token est géré par le serveur et vérifié par le middleware
  const user = localStorage.getItem('user');
  return !!user;
};

// Fonction pour se connecter via l'API
export const login = async (username: string, password: string): Promise<User> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Identifiants invalides');
  }

  // Stocker les informations utilisateur dans localStorage
  // Le cookie auth-token est déjà défini par l'API
  localStorage.setItem('user', JSON.stringify(data.user));
  
  return data.user;
};

// Fonction pour se déconnecter
export const logout = async (): Promise<void> => {
  try {
    // Appeler l'API de déconnexion (si elle existe)
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
  
  // Nettoyer le localStorage
  localStorage.removeItem('user');
  
  // Rediriger vers la page de connexion
  window.location.href = '/login';
};

// Fonction pour obtenir le rôle de l'utilisateur
export const getUserRole = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('user-role');
};

// Fonction pour vérifier si l'utilisateur a un rôle spécifique
export const hasRole = (role: string): boolean => {
  const userRole = getUserRole();
  return userRole === role;
};
