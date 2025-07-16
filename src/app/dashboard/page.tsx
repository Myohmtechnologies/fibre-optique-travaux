"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/authService';
import Sidebar from '@/components/admin/Sidebar';
import QuoteRequestsTable from '@/components/admin/QuoteRequestsTable';
import StatsCards from '@/components/admin/StatsCards';
import { IQuote } from '@/models/Quote';
import { IContactMessage } from '@/types/ContactMessageTypes';

// Données fictives pour les demandes de devis (format IQuote)
const mockQuoteRequests: IQuote[] = [
  {
    _id: '1',
    environment: 'terre',
    housingType: 'pavillon',
    operator: 'orange',
    fullName: 'Jean Dupont',
    phone: '06 12 34 56 78',
    address: '123 Rue de la Fibre, Manosque',
    postalCode: '04100',
    message: 'Le technicien de mon opérateur n\'a pas pu finaliser l\'installation car il faut percer un mur.',
    status: 'new',
    createdAt: new Date('2025-03-15T14:30:00'),
    updatedAt: new Date('2025-03-15T14:30:00')
  } as unknown as IQuote,
  {
    _id: '2',
    environment: 'beton',
    housingType: 'immeuble',
    operator: 'free',
    fullName: 'Marie Martin',
    phone: '06 98 76 54 32',
    address: '45 Avenue des Télécoms, Aix-en-Provence',
    postalCode: '13100',
    message: 'J\'ai besoin de faire passer la fibre entre deux pièces avec un mur porteur.',
    status: 'contacted',
    createdAt: new Date('2025-03-14T10:15:00'),
    updatedAt: new Date('2025-03-14T10:15:00')
  } as unknown as IQuote,
  {
    _id: '3',
    environment: 'pave',
    housingType: 'professionnel',
    operator: 'sfr',
    fullName: 'Pierre Leroy',
    phone: '07 11 22 33 44',
    address: '78 Boulevard des Communications, Marseille',
    postalCode: '13001',
    message: 'Je souhaite ajouter 3 prises optiques supplémentaires dans différentes pièces.',
    status: 'in_progress',
    createdAt: new Date('2025-03-13T09:45:00'),
    updatedAt: new Date('2025-03-13T09:45:00')
  } as unknown as IQuote,
  {
    _id: '4',
    environment: 'enrobe',
    housingType: 'pavillon',
    operator: 'bouygues',
    fullName: 'Sophie Dubois',
    phone: '06 55 44 33 22',
    address: '12 Rue du Réseau, Digne-les-Bains',
    postalCode: '04000',
    message: 'Mon fourreau est bouché et empêche le passage de la fibre jusqu\'à mon domicile.',
    status: 'completed',
    createdAt: new Date('2025-03-12T16:20:00'),
    updatedAt: new Date('2025-03-12T16:20:00')
  } as unknown as IQuote,
  {
    _id: '5',
    environment: 'terre',
    housingType: 'chateau',
    operator: 'autre',
    fullName: 'Lucas Moreau',
    phone: '07 99 88 77 66',
    address: '34 Chemin de l\'Internet, Gap',
    postalCode: '05000',
    message: 'J\'ai besoin de créer un regard pour faciliter l\'accès à la fibre sur ma propriété.',
    status: 'new',
    createdAt: new Date('2025-03-16T08:10:00'),
    updatedAt: new Date('2025-03-16T08:10:00')
  } as unknown as IQuote
];

// Statistiques fictives
const stats = {
  totalRequests: 42,
  newRequests: 12,
  scheduledInterventions: 8,
  completedInterventions: 22,
  conversionRate: 68
};

export default function Dashboard() {
  const [quoteRequests, setQuoteRequests] = useState<IQuote[]>(mockQuoteRequests);
  const [selectedRequest, setSelectedRequest] = useState<IQuote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contactMessages, setContactMessages] = useState<IContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<IContactMessage | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    status: 'new' as IContactMessage['status'],
    notes: '',
    appointmentDate: ''
  });
  const router = useRouter();

  // --- CONTACT MESSAGES LOGIC ---

  const handleUpdateContactMessage = async () => {
    if (!selectedMessage) return;

    const newStatus = editFormData.appointmentDate ? 'scheduled' : editFormData.status;

    try {
      const response = await fetch(`/api/contact/${selectedMessage._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          notes: editFormData.notes,
          appointmentDate: editFormData.appointmentDate ? new Date(editFormData.appointmentDate) : undefined,
        }),
      });

      if (!response.ok) throw new Error('La mise à jour a échoué');
      
      const updatedMessage = await response.json();

      setContactMessages(prev => prev.map(msg => msg._id === selectedMessage._id ? updatedMessage.data : msg));
      closeEditModal();
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue lors de la mise à jour.');
    }
  };

  const handleStatusChange = async (message: IContactMessage, status: IContactMessage['status']) => {
    try {
      const response = await fetch(`/api/contact/${message._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update status');
      const updatedMessage = await response.json();
      setContactMessages(prev => prev.map(m => m._id === message._id ? updatedMessage.data : m));
    } catch (error) {
      console.error(error);
      alert('Erreur lors du changement de statut.');
    }
  };

  const openViewModal = (message: IContactMessage) => {
    setSelectedMessage(message);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedMessage(null);
  };

  const openEditModal = (message: IContactMessage) => {
    setSelectedMessage(message);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedMessage(null);
  };

  const getStatusPill = (status: IContactMessage['status'] | undefined) => {
    const currentStatus = status || 'new';
    const styles = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      scheduled: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      archived: 'bg-gray-100 text-gray-800',
    };
    const text = {
      new: 'Nouveau',
      contacted: 'Contacté',
      scheduled: 'Planifié',
      completed: 'Terminé',
      archived: 'Archivé',
    };

    return (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[currentStatus]}`}>
        {text[currentStatus]}
      </span>
    );
  };

  const renderActionButtons = (message: IContactMessage) => {
    const status = message.status || 'new';

    const handleContact = () => handleStatusChange(message, 'contacted');
    const handleSchedule = () => openEditModal(message);
    const handleComplete = () => handleStatusChange(message, 'completed');
    const handleArchive = () => handleStatusChange(message, 'archived');

    return (
      <div className="flex items-center gap-4">
        <button
          onClick={() => openViewModal(message)}
          className="text-indigo-600 hover:text-indigo-900 font-medium"
        >
          Voir
        </button>
        {status === 'new' && (
          <button onClick={handleContact} className="text-green-600 hover:text-green-900 font-medium">
            Contacter
          </button>
        )}
        {status === 'contacted' && (
          <button onClick={handleSchedule} className="text-blue-600 hover:text-blue-900 font-medium">
            Planifier RDV
          </button>
        )}
        {status === 'scheduled' && (
          <button onClick={handleComplete} className="text-teal-600 hover:text-teal-900 font-medium">
            Terminer
          </button>
        )}
        {status === 'completed' && (
          <button onClick={handleArchive} className="text-gray-600 hover:text-gray-900 font-medium">
            Archiver
          </button>
        )}
      </div>
    );
  };

  // Calcul des statistiques
  const dashboardStats = {
    totalRequests: quoteRequests.length,
    newRequests: quoteRequests.filter(req => req.status === 'new').length,
    scheduledInterventions: quoteRequests.filter(req => req.status === 'scheduled').length,
    completedInterventions: quoteRequests.filter(req => req.status === 'completed').length,
    conversionRate: quoteRequests.length > 0 
      ? Math.round((quoteRequests.filter(req => req.status === 'completed').length / quoteRequests.length) * 100)
      : 0
  };

  // Fonction pour récupérer les demandes de devis depuis l'API
  const fetchQuotes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/quotes');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des demandes de devis');
      }
      const data = await response.json();
      setQuoteRequests(data);
    } catch (error) {
      console.error('Erreur:', error);
      // Utiliser les données fictives en cas d'erreur
      setQuoteRequests(mockQuoteRequests);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour récupérer les messages de contact
    const fetchContactMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des messages de contact.');
      }
      const result = await response.json();
      if (result.success) {
        setContactMessages(result.data || []);
      } else {
        console.error('Failed to fetch contact messages:', result.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  // Vérifier l'authentification et charger les demandes au chargement de la page
  useEffect(() => {
    // Vérifier si l'utilisateur est authentifié
    if (typeof window !== 'undefined') {
      if (!isAuthenticated()) {
        router.push('/login');
        return;
      }
    }
    
    fetchQuotes();
    fetchContactMessages();
  }, [router]);

    useEffect(() => {
    // Pre-fill form when a message is selected for editing
    if (selectedMessage && isEditModalOpen) {
      setEditFormData({
        status: selectedMessage.status || 'new',
        notes: selectedMessage.notes || '',
        appointmentDate: selectedMessage.appointmentDate ? new Date(selectedMessage.appointmentDate).toISOString().slice(0, 16) : ''
      });
    }
  }, [selectedMessage, isEditModalOpen]);

  // --- QUOTES LOGIC (existing) ---

  // Fonction pour mettre à jour le statut d'une demande
  const updateRequestStatus = async (id: string, newStatus: IQuote['status']) => {
    try {
      const response = await fetch(`/api/quotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du statut');
      }

      // Mettre à jour l'état local
      setQuoteRequests(prev => 
        prev.map(req => 
          req._id === id ? { ...req, status: newStatus } : req
        ) as IQuote[]
      );
      
      if (selectedRequest && selectedRequest._id === id) {
        // Récupérer la demande mise à jour depuis l'API
        const updatedResponse = await fetch(`/api/quotes/${id}`);
        if (updatedResponse.ok) {
          const updatedQuote = await updatedResponse.json();
          setSelectedRequest(updatedQuote as IQuote);
        }
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la mise à jour du statut. Veuillez réessayer.');
    }
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
            <h1 className="text-3xl font-bold text-gray-800">Tableau de bord</h1>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors"
                onClick={() => fetchQuotes()}
              >
                Actualiser
              </button>
              <button 
                className="px-4 py-2 bg-fiber-gray text-white rounded-md hover:bg-fiber-gray/90 transition-colors"
                onClick={() => {/* Fonction de déconnexion */}}
              >
                Déconnexion
              </button>
            </div>
          </div>

          {/* Cartes de statistiques */}
          <div className="mb-8">
            <StatsCards stats={dashboardStats} />
          </div>

          {/* Demandes récentes */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Demandes récentes</h2>
              <Link 
                href="/dashboard/quotes"
                className="text-fiber-orange hover:text-fiber-orange/80 text-sm font-medium"
              >
                Voir toutes les demandes
              </Link>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fiber-orange"></div>
              </div>
            ) : (
              <QuoteRequestsTable 
                quoteRequests={quoteRequests.slice(0, 5)} 
                updateRequestStatus={updateRequestStatus}
                setSelectedRequest={setSelectedRequest}
              />
            )}
          </div>

          {/* Messages de contact */}
          {contactMessages && contactMessages.length > 0 ? (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Messages de Contact</h3>
                <Link 
                  href="/dashboard/contact" 
                  className="text-sm text-fiber-orange hover:text-fiber-orange/80 transition-colors"
                >
                  Voir tous les messages
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contactMessages.slice(0, 5).map((message, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{message.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{message.email}</div>
                          <div>{message.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${message.address}, ${message.postalCode}`}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <p className="w-48 truncate" title={message.message}>{message.message}</p>
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm">{new Date(message.createdAt).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ' ')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {getStatusPill(message.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {renderActionButtons(message)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Messages de Contact</h3>
                <Link 
                  href="/dashboard/contact" 
                  className="text-sm text-fiber-orange hover:text-fiber-orange/80 transition-colors"
                >
                  Voir tous les messages
                </Link>
              </div>
              <p className="text-gray-500 p-4 bg-white rounded-lg text-center">
                Aucun message de contact pour le moment.
              </p>
            </div>
          )}

          {/* Réalisations */}
          <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Réalisations</h2>
              <Link 
                href="/dashboard/realizations"
                className="text-fiber-orange hover:text-fiber-orange/80 text-sm font-medium"
              >
                Gérer les réalisations
              </Link>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Gérez vos réalisations et projets terminés pour les mettre en avant sur votre site.
              </p>
              <div className="mt-4">
                <Link 
                  href="/dashboard/realizations"
                  className="inline-flex items-center px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Ajouter une réalisation
                </Link>
              </div>
            </div>
          </div>

          {/* Information sur le service de déblocage d'installation fibre */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Service de déblocage d'installation fibre</h2>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">
                      Rappel : Ce service n'est pas un service d'urgence mais un service de déblocage qui permet au client de ne pas attendre un nouveau rendez-vous avec son opérateur.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Le site propose un service spécifique pour débloquer les installations de fibre optique lorsque le technicien de l'opérateur ne peut pas finaliser l'installation en raison de travaux nécessaires (perçage, passage de gaines, etc.).
              </p>
            </div>
          </div>

          {/* Modal pour afficher les détails d'une demande */}
          {selectedRequest && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <motion.div 
                className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">Détails de la demande</h3>
                  <button 
                    onClick={() => setSelectedRequest(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Nom</p>
                      <p className="font-medium">{selectedRequest.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                      <p className="font-medium">{selectedRequest.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Service demandé</p>
                      <p className="font-medium">{selectedRequest.operator}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500 mb-1">Adresse</p>
                      <p className="font-medium">{selectedRequest.address}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500 mb-1">Message</p>
                      <p className="font-medium">{selectedRequest.message}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Date de création</p>
                      <p className="font-medium">{new Date(selectedRequest.createdAt).toLocaleString('fr-FR')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Statut</p>
                      <div className={`
                        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${selectedRequest.status === 'new' ? 'bg-blue-100 text-blue-800' : ''}
                        ${selectedRequest.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${selectedRequest.status === 'scheduled' ? 'bg-purple-100 text-purple-800' : ''}
                        ${selectedRequest.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                      `}>
                        {selectedRequest.status === 'new' && 'Nouveau'}
                        {selectedRequest.status === 'contacted' && 'Contacté'}
                        {selectedRequest.status === 'scheduled' && 'RDV Planifié'}
                        {selectedRequest.status === 'completed' && 'Terminé'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 mt-6">
                    <button 
                      onClick={() => {
                        updateRequestStatus(selectedRequest._id?.toString() || '', 'cancelled');
                        setSelectedRequest(null);
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Annuler la demande
                    </button>
                    <button 
                      onClick={() => {
                        const nextStatus = 
                          selectedRequest.status === 'new' ? 'contacted' :
                          selectedRequest.status === 'contacted' ? 'scheduled' :
                          selectedRequest.status === 'scheduled' ? 'completed' : 'completed';
                        
                        updateRequestStatus(selectedRequest._id?.toString() || '', nextStatus);
                        setSelectedRequest(null);
                      }}
                      className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90"
                    >
                      {selectedRequest.status === 'new' && 'Marquer comme contacté'}
                      {selectedRequest.status === 'contacted' && 'Planifier RDV'}
                      {selectedRequest.status === 'scheduled' && 'Marquer comme terminé'}
                      {selectedRequest.status === 'completed' && 'Déjà terminé'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Modal pour gérer un message de contact */}
                    {/* Modal pour VOIR un message de contact */}
          {isViewModalOpen && selectedMessage && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <motion.div 
                className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Détails du Message</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Nom:</strong> {selectedMessage.name}</p>
                  <p><strong>Email:</strong> {selectedMessage.email}</p>
                  <p><strong>Téléphone:</strong> {selectedMessage.phone}</p>
                  <p><strong>Adresse:</strong> {selectedMessage.address}, {selectedMessage.postalCode}</p>
                  <p><strong>Message:</strong> {selectedMessage.message}</p>
                  <p><strong>Date de réception:</strong> {new Date(selectedMessage.createdAt).toLocaleString('fr-FR')}</p>
                  {selectedMessage.notes && <p><strong>Notes:</strong> {selectedMessage.notes}</p>}
                  {selectedMessage.appointmentDate && <p><strong>Date RDV:</strong> {new Date(selectedMessage.appointmentDate).toLocaleString('fr-FR')}</p>}
                </div>
                <div className="mt-6 flex justify-end">
                                    <button onClick={closeViewModal} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Fermer</button>
                </div>
              </motion.div>
            </div>
          )}

                    {/* Modal pour MODIFIER un message de contact (Planifier RDV) */}
          {isEditModalOpen && selectedMessage && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <motion.div 
                className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Planifier un RDV pour {selectedMessage.name}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea
                      rows={4}
                      value={editFormData.notes}
                      onChange={(e) => setEditFormData({ ...editFormData, notes: e.target.value })}
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date du RDV</label>
                    <input
                      type="datetime-local"
                      value={editFormData.appointmentDate}
                      onChange={(e) => setEditFormData({ ...editFormData, appointmentDate: e.target.value })}
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                                    <button onClick={closeEditModal} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
                  <button onClick={handleUpdateContactMessage} className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90">Enregistrer</button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
