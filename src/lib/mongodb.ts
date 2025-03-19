import mongoose from 'mongoose';

// Définition du type pour le cache global
interface GlobalMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Déclaration du type global pour Next.js
declare global {
  var mongoose: GlobalMongoose;
}

// Initialisation du cache global
global.mongoose = global.mongoose || {
  conn: null,
  promise: null
};

/**
 * Fonction pour se connecter à la base de données MongoDB
 * Utilise un cache global pour éviter de créer plusieurs connexions
 */
export async function connectToDatabase(): Promise<mongoose.Connection> {
  // Si la connexion existe déjà, la retourner
  if (global.mongoose.conn) {
    console.log('Réutilisation de la connexion MongoDB existante');
    return global.mongoose.conn.connection;
  }

  // Si une promesse de connexion est en cours, l'attendre
  if (global.mongoose.promise) {
    try {
      console.log('Attente de la connexion MongoDB en cours...');
      const mongooseInstance = await global.mongoose.promise;
      console.log('Connexion MongoDB récupérée avec succès');
      return mongooseInstance.connection;
    } catch (error) {
      console.error('Erreur lors de l\'attente de la connexion existante:', error);
      // Réinitialiser la promesse pour permettre une nouvelle tentative
      global.mongoose.promise = null;
    }
  }

  try {
    // Récupérer l'URI de MongoDB depuis les variables d'environnement
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('La variable d\'environnement MONGODB_URI n\'est pas définie');
    }
    
    console.log('Tentative de connexion à MongoDB Atlas avec l\'URI depuis .env.local...');
    // Masquer le mot de passe pour les logs
    const maskedUri = MONGODB_URI.replace(/:([^:@]+)@/, ':****@');
    console.log('URI MongoDB (masqué):', maskedUri);
    
    mongoose.set('strictQuery', true);
    
    global.mongoose.promise = Promise.resolve()
      .then(async (): Promise<typeof mongoose> => {
        // Déconnecter d'abord toute connexion existante
        if (mongoose.connection.readyState !== 0) {
          console.log('Déconnexion de la connexion MongoDB existante...');
          await mongoose.disconnect();
        }
        
        console.log('État de la connexion avant connexion:', mongoose.connection.readyState);
        // 0 = déconnecté, 1 = connecté, 2 = connexion en cours, 3 = déconnexion en cours
        
        // Créer une nouvelle connexion
        await mongoose.connect(MONGODB_URI, {
          bufferCommands: false,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 30000,
          serverSelectionTimeoutMS: 30000,
        });
        
        console.log('Connexion à MongoDB Atlas établie avec succès');
        console.log('État de la connexion après connexion:', mongoose.connection.readyState);
        console.log('Nom de la base de données:', mongoose.connection.name);
        
        global.mongoose.conn = mongoose;
        
        // Ajouter des listeners d'événements pour la connexion
        mongoose.connection.on('error', (err) => {
          console.error('Erreur de connexion MongoDB:', err);
        });
        
        mongoose.connection.on('disconnected', () => {
          console.warn('MongoDB déconnecté');
          global.mongoose.conn = null;
          global.mongoose.promise = null;
        });
        
        mongoose.connection.on('reconnected', () => {
          console.log('MongoDB reconnecté');
        });
        
        return mongoose;
      });
    
    const mongooseInstance = await global.mongoose.promise;
    return mongooseInstance.connection;
  } catch (error) {
    console.error('Erreur fatale lors de la connexion à MongoDB:', error);
    global.mongoose.promise = null;
    throw error;
  }
}
