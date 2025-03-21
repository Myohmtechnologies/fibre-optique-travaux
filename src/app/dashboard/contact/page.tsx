"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

// Messages de contact fictifs pour le développement
const mockContactMessages: ContactMessage[] = [
  {
    _id: '1',
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '06 12 34 56 78',
    subject: 'Demande d\'information',
    message: 'Bonjour, je souhaite avoir plus d\'informations sur vos services de déblocage de fibre optique. Merci.',
    status: 'new',
    createdAt: new Date('2025-03-15T14:30:00'),
    updatedAt: new Date('2025-03-15T14:30:00')
  },
  {
    _id: '2',
    name: 'Marie Martin',
    email: 'marie.martin@example.com',
    phone: '06 98 76 54 32',
    subject: 'Problème de fibre',
    message: 'J\'ai un problème avec ma fibre, le technicien n\'a pas pu finir l\'installation. Pouvez-vous m\'aider ?',
    status: 'read',
    createdAt: new Date('2025-03-14T10:15:00'),
    updatedAt: new Date('2025-03-14T10:15:00')
  },
  {
    _id: '3',
    name: 'Pierre Leroy',
    email: 'pierre.leroy@example.com',
    phone: '07 11 22 33 44',
    subject: 'Devis travaux fibre',
    message: 'Je souhaiterais obtenir un devis pour faire passer la fibre dans mon appartement. Merci de me contacter.',
    status: 'replied',
    createdAt: new Date('2025-03-13T09:45:00'),
    updatedAt: new Date('2025-03-13T09:45:00')
  },
  {
    _id: '4',
    name: 'Sophie Bernard',
    email: 'sophie.bernard@example.com',
    phone: '06 55 66 77 88',
    subject: 'Question technique',
    message: 'Est-il possible de faire passer la fibre à travers un mur porteur ? Quelles solutions proposez-vous ?',
    status: 'new',
    createdAt: new Date('2025-03-12T16:20:00'),
    updatedAt: new Date('2025-03-12T16:20:00')
  },
  {
    _id: '5',
    name: 'Thomas Petit',
    email: 'thomas.petit@example.com',
    phone: '07 99 88 77 66',
    subject: 'Remerciements',
    message: 'Je tenais à vous remercier pour votre intervention rapide et efficace. Tout fonctionne parfaitement maintenant !',
    status: 'archived',
    createdAt: new Date('2025-03-11T11:30:00'),
    updatedAt: new Date('2025-03-11T11:30:00')
  }
];

export default function ContactPage() {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // États pour les filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Fonction pour récupérer les messages depuis l'API
  const fetchContactMessages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/contact');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des messages de contact');
      }
      const data = await response.json();
      setContactMessages(data);
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur lors du chargement des messages. Veuillez réessayer.');
      // Utiliser les données fictives en cas d'erreur
      setContactMessages(mockContactMessages);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour mettre à jour le statut d'un message
  const updateMessageStatus = async (id: string, newStatus: ContactMessage['status']) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
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
      setContactMessages(prev => 
        prev.map(msg => 
          msg._id === id ? { ...msg, status: newStatus } : msg
        )
      );
      
      if (selectedMessage && selectedMessage._id === id) {
        setSelectedMessage({ ...selectedMessage, status: newStatus });
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la mise à jour du statut. Veuillez réessayer.');
    }
  };

  // Charger les messages au chargement de la page
  useEffect(() => {
    fetchContactMessages();
  }, []);

  // Filtrage des messages
  const filteredMessages = contactMessages.filter(message => {
    const matchesStatus = filterStatus === 'all' || message.status === filterStatus;
    const matchesSearch = searchTerm === '' || 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (message.phone && message.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (message.subject && message.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  // Tri des messages par date
  const sortedMessages = [...filteredMessages].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
  });

  // Fonction pour formater la date
  const formatDate = (dateString: string | Date) => {
    const date = dateString instanceof Date ? dateString : new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Fonction pour obtenir la couleur du badge de statut
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-yellow-100 text-yellow-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fonction pour obtenir le libellé du statut
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return 'Nouveau';
      case 'read':
        return 'Lu';
      case 'replied':
        return 'Répondu';
      case 'archived':
        return 'Archivé';
      default:
        return status;
    }
  };

  return (
    <motion.div 
      className="flex h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Messages de Contact</h1>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors"
                onClick={() => fetchContactMessages()}
              >
                Actualiser
              </button>
            </div>
          </div>

          {/* Filtres et recherche */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div>
                  <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                  <select
                    id="statusFilter"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fiber-orange"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="new">Nouveaux</option>
                    <option value="read">Lus</option>
                    <option value="replied">Répondus</option>
                    <option value="archived">Archivés</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sortDirection" className="block text-sm font-medium text-gray-700 mb-1">Tri par date</label>
                  <select
                    id="sortDirection"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fiber-orange"
                    value={sortDirection}
                    onChange={(e) => setSortDirection(e.target.value as 'asc' | 'desc')}
                  >
                    <option value="asc">Plus anciens d'abord</option>
                    <option value="desc">Plus récents d'abord</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">Recherche</label>
                <input
                  type="text"
                  id="searchTerm"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fiber-orange"
                  placeholder="Rechercher par nom, email, message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
              <p>{error}</p>
            </div>
          )}

          {/* Tableau des messages */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fiber-orange"></div>
              </div>
            ) : sortedMessages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {searchTerm || filterStatus !== 'all' ? 
                  'Aucun message ne correspond à vos critères de recherche.' : 
                  'Aucun message de contact pour le moment.'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expéditeur
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sujet
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Statut
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedMessages.map((message) => (
                      <tr 
                        key={message._id} 
                        className={`hover:bg-gray-50 transition-colors ${message.status === 'new' ? 'bg-blue-50' : ''}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-fiber-orange/10 rounded-full flex items-center justify-center">
                              <span className="text-fiber-orange text-lg font-semibold">
                                {message.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {message.name}
                              </div>
                              {message.phone && (
                                <div className="text-sm text-gray-500">
                                  {message.phone}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <a href={`mailto:${message.email}`} className="text-blue-500 hover:underline">
                              {message.email}
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {message.subject || '(Pas de sujet)'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(message.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(message.status || 'new')}`}>
                            {getStatusLabel(message.status || 'new')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            className="text-fiber-orange hover:text-fiber-orange/80 mr-3"
                            onClick={() => setSelectedMessage(message)}
                          >
                            Voir
                          </button>
                          {message.status === 'new' && (
                            <button 
                              className="text-blue-500 hover:text-blue-700 mr-3"
                              onClick={() => updateMessageStatus(message._id, 'read')}
                            >
                              Marquer comme lu
                            </button>
                          )}
                          {(message.status === 'new' || message.status === 'read') && (
                            <button 
                              className="text-green-500 hover:text-green-700 mr-3"
                              onClick={() => updateMessageStatus(message._id, 'replied')}
                            >
                              Marquer comme répondu
                            </button>
                          )}
                          {message.status !== 'archived' && (
                            <button 
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => updateMessageStatus(message._id, 'archived')}
                            >
                              Archiver
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal pour afficher les détails d'un message */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Détails du message</h3>
              <button 
                onClick={() => setSelectedMessage(null)}
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
                  <p className="font-medium">{selectedMessage.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">
                    <a href={`mailto:${selectedMessage.email}`} className="text-blue-500 hover:underline">
                      {selectedMessage.email}
                    </a>
                  </p>
                </div>
                {selectedMessage.phone && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                    <p className="font-medium">{selectedMessage.phone}</p>
                  </div>
                )}
                {selectedMessage.subject && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Sujet</p>
                    <p className="font-medium">{selectedMessage.subject}</p>
                  </div>
                )}
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Message</p>
                  <p className="font-medium whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date de réception</p>
                  <p className="font-medium">{formatDate(selectedMessage.createdAt)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Statut</p>
                  <p className="font-medium">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedMessage.status || 'new')}`}>
                      {getStatusLabel(selectedMessage.status || 'new')}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button 
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setSelectedMessage(null)}
                >
                  Fermer
                </button>
                {selectedMessage.status === 'new' && (
                  <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      updateMessageStatus(selectedMessage._id, 'read');
                    }}
                  >
                    Marquer comme lu
                  </button>
                )}
                {(selectedMessage.status === 'new' || selectedMessage.status === 'read') && (
                  <button 
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                    onClick={() => {
                      updateMessageStatus(selectedMessage._id, 'replied');
                    }}
                  >
                    Marquer comme répondu
                  </button>
                )}
                {selectedMessage.status !== 'archived' && (
                  <button 
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    onClick={() => {
                      updateMessageStatus(selectedMessage._id, 'archived');
                    }}
                  >
                    Archiver
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
} 