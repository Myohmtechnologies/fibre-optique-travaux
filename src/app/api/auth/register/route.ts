import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const { username, email, password, adminKey } = await request.json();
    
    // Vérifier la clé d'administration pour la création d'un compte admin
    // Cette clé devrait être stockée dans les variables d'environnement en production
    const secretAdminKey = process.env.ADMIN_KEY || 'fibreoptique-admin-key-2025';
    
    if (adminKey !== secretAdminKey) {
      return NextResponse.json({ 
        success: false, 
        message: 'Clé d\'administration invalide' 
      }, { status: 403 });
    }
    
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    
    if (existingUser) {
      return NextResponse.json({ 
        success: false, 
        message: 'Cet utilisateur ou cet email existe déjà' 
      }, { status: 400 });
    }
    
    // Créer un nouvel utilisateur
    const user = await User.create({
      username,
      email,
      password,
      role: 'admin'
    });
    
    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
    
  } catch (error: any) {
    console.error('Erreur d\'enregistrement:', error);
    
    // Gestion des erreurs de validation Mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ 
        success: false, 
        message: messages.join(', ') 
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Erreur de serveur' 
    }, { status: 500 });
  }
}
