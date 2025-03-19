"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import dynamic from 'next/dynamic';

// Import dynamique de l'éditeur de texte riche pour éviter les erreurs côté serveur
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

// Interface pour le formulaire de réalisation
interface RealizationFormData {
  title: string;
  slug: string;
  description: string;
  images: string[];
  published: boolean;
}

export default function EditRealization({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<RealizationFormData>({
    title: '',
    slug: '',
    description: '',
    images: [],
    published: false
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  // Récupérer les données de la réalisation
  useEffect(() => {
    const fetchRealization = async () => {
      try {
        const res = await fetch(`/api/realizations/admin/${id}`);
        
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération de la réalisation');
        }
        
        const data = await res.json();
        setFormData({
          title: data.title,
          slug: data.slug,
          description: data.description,
          images: data.images || [],
          published: data.published
        });
      } catch (err) {
        console.error('Erreur:', err);
        setError('Impossible de charger la réalisation');
      } finally {
        setFetchLoading(false);
      }
    };

    fetchRealization();
  }, [id]);

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Gérer les changements dans l'éditeur de texte riche
  const handleEditorChange = (description: string) => {
    setFormData(prev => ({ ...prev, description }));
  };

  // Générer automatiquement le slug à partir du titre
  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux
      .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
      .replace(/--+/g, '-') // Éviter les tirets multiples
      .trim();
    
    setFormData(prev => ({ ...prev, slug }));
  };

  // Gérer l'upload d'images multiples
  const handleImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadStatus('uploading');

    // Préparer les données pour l'upload
    const formDataUpload = new FormData();
    for (let i = 0; i < files.length; i++) {
      formDataUpload.append('files', files[i]);
    }

    try {
      const response = await fetch('/api/upload/multiple', {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'upload des images');
      }

      const data = await response.json();
      
      // Mettre à jour le champ images avec les URLs des fichiers uploadés
      setFormData(prev => ({ 
        ...prev, 
        images: [...prev.images, ...data.fileUrls] 
      }));
      setUploadStatus('success');
    } catch (err) {
      console.error('Erreur:', err);
      setUploadStatus('error');
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'upload des images');
    }
  };

  // Supprimer une image de la liste
  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation de base
    if (!formData.title || !formData.slug || !formData.description) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (formData.images.length === 0) {
      setError('Veuillez ajouter au moins une image');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Envoyer les données à l'API
      const res = await fetch(`/api/realizations/admin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Erreur lors de la mise à jour de la réalisation');
      }
      
      // Rediriger vers la liste des réalisations
      router.push('/dashboard/realizations');
    } catch (err) {
      console.error('Erreur:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  // Animation pour la page
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  if (fetchLoading) {
    return (
      <motion.div 
        className="flex h-screen bg-gray-100"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Sidebar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fiber-orange"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="flex h-screen bg-gray-100"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Modifier la réalisation</h1>
            <button 
              onClick={() => router.push('/dashboard/realizations')}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Informations de la réalisation</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {error && (
                <div className="mb-6 bg-red-100 p-4 rounded-md">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Titre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    onBlur={generateSlug}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fiber-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fiber-orange focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={generateSlug}
                      className="ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Générer
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <div className="h-64">
                  <ReactQuill
                    theme="snow"
                    value={formData.description}
                    onChange={handleEditorChange}
                    className="h-full"
                    modules={{
                      toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'clean']
                      ]
                    }}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Images <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImagesUpload}
                    className="hidden"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    multiple
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Ajouter des images
                  </button>
                  {uploadStatus === 'uploading' && (
                    <div className="ml-4 flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-fiber-orange mr-2"></div>
                      <span className="text-sm text-gray-600">Upload en cours...</span>
                    </div>
                  )}
                  {uploadStatus === 'success' && (
                    <span className="ml-4 text-sm text-green-600">Images uploadées avec succès!</span>
                  )}
                  {uploadStatus === 'error' && (
                    <span className="ml-4 text-sm text-red-600">Erreur lors de l'upload</span>
                  )}
                </div>
                
                {/* Prévisualisation des images */}
                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="h-32 w-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="h-4 w-4 text-fiber-orange focus:ring-fiber-orange border-gray-300 rounded"
                  />
                  <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                    Publier
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      <span>Enregistrement...</span>
                    </div>
                  ) : (
                    'Enregistrer'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
