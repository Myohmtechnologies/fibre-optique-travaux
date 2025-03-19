import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'Aucun fichier n\'a été fourni' },
        { status: 400 }
      );
    }

    const fileUrls: string[] = [];
    
    // Chemin où les fichiers seront enregistrés
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'realizations');
    
    // Créer le dossier s'il n'existe pas
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }
    
    // Traiter chaque fichier
    for (const file of files) {
      // Vérifier le type de fichier
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        return NextResponse.json(
          { error: `Type de fichier non pris en charge: ${file.name}. Utilisez JPG, PNG, WEBP ou GIF.` },
          { status: 400 }
        );
      }

      // Limiter la taille du fichier (5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        return NextResponse.json(
          { error: `La taille du fichier ${file.name} ne doit pas dépasser 5MB` },
          { status: 400 }
        );
      }

      // Générer un nom de fichier unique
      const fileExtension = file.name.split('.').pop() || '';
      const fileName = `${uuidv4()}.${fileExtension}`;
      
      // Chemin complet du fichier
      const filePath = path.join(uploadDir, fileName);
      
      // Convertir le fichier en buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      
      // Écrire le fichier sur le disque
      await writeFile(filePath, buffer);
      
      // Construire l'URL relative pour accéder au fichier
      const fileUrl = `/uploads/realizations/${fileName}`;
      fileUrls.push(fileUrl);
    }
    
    return NextResponse.json({ 
      success: true, 
      fileUrls 
    });
  } catch (error) {
    console.error('Erreur lors de l\'upload des fichiers:', error);
    return NextResponse.json(
      { error: `Erreur lors de l\'upload des fichiers: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}
