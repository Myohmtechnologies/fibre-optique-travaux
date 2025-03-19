import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier n\'a été fourni' },
        { status: 400 }
      );
    }

    // Vérifier le type de fichier
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Type de fichier non pris en charge. Utilisez JPG, PNG, WEBP ou GIF.' },
        { status: 400 }
      );
    }

    // Limiter la taille du fichier (5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'La taille du fichier ne doit pas dépasser 5MB' },
        { status: 400 }
      );
    }

    // Générer un nom de fichier unique
    const fileExtension = file.name.split('.').pop() || '';
    const fileName = `${uuidv4()}.${fileExtension}`;
    
    // Chemin où le fichier sera enregistré
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog');
    
    // Créer le dossier s'il n'existe pas
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }
    
    const filePath = path.join(uploadDir, fileName);
    
    // Convertir le fichier en buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Écrire le fichier sur le disque
    await writeFile(filePath, buffer);
    
    // Construire l'URL relative pour accéder au fichier
    const fileUrl = `/uploads/blog/${fileName}`;
    
    return NextResponse.json({ 
      success: true, 
      fileUrl 
    });
  } catch (error) {
    console.error('Erreur lors de l\'upload du fichier:', error);
    return NextResponse.json(
      { error: `Erreur lors de l\'upload du fichier: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}
