"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { IRealization } from '@/models/Realization';

// Composant pour afficher un tableau des réalisations
const RealizationsTable = ({ 
  realizations, 
  onEdit, 
  onDelete 
}: { 
  realizations: IRealization[], 
  onEdit: (realization: IRealization) => void, 
  onDelete: (id: string) => void 
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Titre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Images
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {realizations.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                Aucune réalisation trouvée
              </td>
            </tr>
          ) : (
            realizations.map((realization) => (
              <tr key={realization._id?.toString()} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {realization.images && realization.images.length > 0 && (
                      <div className="flex-shrink-0 h-10 w-10 mr-3">
                        <img className="h-10 w-10 rounded-md object-cover" src={realization.images[0]} alt={realization.title} />
                      </div>
                    )}
                    <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {realization.title}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(realization.date).toLocaleDateString('fr-FR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    realization.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {realization.published ? 'Publié' : 'Brouillon'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {realization.images ? realization.images.length : 0} images
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => onEdit(realization)} 
                    className="text-fiber-orange hover:text-fiber-orange/80 mr-3"
                  >
                    Modifier
                  </button>
                  <button 
                    onClick={() => onDelete(realization._id?.toString() || '')} 
                    className="text-red-600 hover:text-red-900"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default function RealizationsDashboard() {
  const [realizations, setRealizations] = useState<IRealization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Récupérer les réalisations
  useEffect(() => {
    const fetchRealizations = async () => {
      try {
        const res = await fetch('/api/realizations/admin');
        
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des réalisations');
        }
        
        const data = await res.json();
        setRealizations(data);
      } catch (err) {
        console.error('Erreur:', err);
        setError('Impossible de charger les réalisations');
      } finally {
        setLoading(false);
      }
    };

    fetchRealizations();
  }, []);

  // Fonction pour supprimer une réalisation
  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette réalisation ?')) {
      return;
    }

    try {
      const res = await fetch(`/api/realizations/admin/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Erreur lors de la suppression de la réalisation');
      }

      // Mettre à jour la liste des réalisations
      setRealizations(realizations.filter(realization => realization._id?.toString() !== id));
    } catch (err) {
      console.error('Erreur:', err);
      alert('Impossible de supprimer la réalisation');
    }
  };

  // Fonction pour éditer une réalisation
  const handleEdit = (realization: IRealization) => {
    router.push(`/dashboard/realizations/edit/${realization._id}`);
  };

  // Animation pour la page
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

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
            <h1 className="text-3xl font-bold text-gray-800">Gestion des Réalisations</h1>
            <Link 
              href="/dashboard/realizations/new"
              className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors"
            >
              Nouvelle réalisation
            </Link>
          </div>

          {/* Contenu principal */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Réalisations</h2>
            </div>
            <div className="p-6">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-fiber-orange"></div>
                </div>
              ) : error ? (
                <div className="bg-red-100 p-4 rounded-md">
                  <p className="text-red-700">{error}</p>
                </div>
              ) : (
                <RealizationsTable 
                  realizations={realizations} 
                  onEdit={handleEdit} 
                  onDelete={handleDelete} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
