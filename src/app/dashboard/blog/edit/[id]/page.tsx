"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import dynamic from 'next/dynamic';

// Import dynamique de l'éditeur de texte riche pour éviter les erreurs côté serveur
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

// Interface pour le formulaire d'article
interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  categories: string;
  published: boolean;
}

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    categories: '',
    published: false
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  // Récupérer les données de l'article
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/admin/${id}`);
        
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération de l\'article');
        }
        
        const post = await res.json();
        
        setFormData({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          image: post.image || '',
          author: post.author,
          categories: post.categories.join(', '),
          published: post.published
        });
        
        if (post.image) {
          setImagePreview(post.image);
        }
      } catch (err) {
        console.error('Erreur:', err);
        setError('Impossible de charger l\'article');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
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
  const handleEditorChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
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

  // Gérer l'upload d'image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Créer une URL pour la prévisualisation
    setImagePreview(URL.createObjectURL(file));
    setUploadStatus('uploading');

    // Préparer les données pour l'upload
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'upload de l\'image');
      }

      const data = await response.json();
      
      // Mettre à jour le champ image avec l'URL du fichier uploadé
      setFormData(prev => ({ ...prev, image: data.fileUrl }));
      setUploadStatus('success');
    } catch (err) {
      console.error('Erreur:', err);
      setUploadStatus('error');
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'upload de l\'image');
    }
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation de base
    if (!formData.title || !formData.slug || !formData.excerpt || !formData.content) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    setSaving(true);
    setError(null);
    
    try {
      // Préparer les données pour l'API
      const postData = {
        ...formData,
        categories: formData.categories.split(',').map(cat => cat.trim()).filter(cat => cat !== '')
      };
      
      // Envoyer les données à l'API
      const res = await fetch(`/api/blog/admin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Erreur lors de la mise à jour de l\'article');
      }
      
      // Rediriger vers la liste des articles
      router.push('/dashboard/blog');
    } catch (err) {
      console.error('Erreur:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setSaving(false);
    }
  };

  // Animation pour la page
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  if (loading) {
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
          <div className="p-8 flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fiber-orange mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement de l'article...</p>
            </div>
          </div>
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
            <h1 className="text-3xl font-bold text-gray-800">Modifier l'article</h1>
          </div>

          {/* Formulaire d'édition d'article */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Informations de l'article</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {error && (
                <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <strong className="font-bold">Erreur ! </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Titre *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange"
                      required
                    />
                    <button
                      type="button"
                      onClick={generateSlug}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
                    >
                      Générer
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Extrait *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange"
                  required
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">
                  Un court résumé de l'article qui apparaîtra dans les listes et les aperçus.
                </p>
              </div>
              
              <div className="mb-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Contenu *
                </label>
                <div className="border border-gray-300 rounded-md">
                  <ReactQuill
                    value={formData.content}
                    onChange={handleEditorChange}
                    theme="snow"
                    modules={{
                      toolbar: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'indent': '-1'}, { 'indent': '+1' }],
                        ['link', 'image'],
                        ['clean']
                      ],
                    }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image de couverture
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                      {formData.image ? 'Changer l\'image' : 'Choisir une image'}
                    </button>
                    <span className="ml-3 text-sm text-gray-500">
                      {uploadStatus === 'idle' && (formData.image ? 'Image actuelle' : 'Aucun fichier sélectionné')}
                      {uploadStatus === 'uploading' && 'Upload en cours...'}
                      {uploadStatus === 'success' && 'Image uploadée avec succès'}
                      {uploadStatus === 'error' && 'Erreur lors de l\'upload'}
                    </span>
                  </div>
                  {imagePreview && (
                    <div className="mt-3">
                      <div className="relative w-40 h-40 overflow-hidden rounded-md">
                        <img 
                          src={imagePreview} 
                          alt="Prévisualisation" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                    Auteur *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-1">
                    Catégories
                  </label>
                  <input
                    type="text"
                    id="categories"
                    name="categories"
                    value={formData.categories}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Séparez les catégories par des virgules (ex: Fibre, Installation, Conseils)
                  </p>
                </div>
                
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
                    Publier l'article
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.push('/dashboard/blog')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className={`px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors ${
                    saving ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
