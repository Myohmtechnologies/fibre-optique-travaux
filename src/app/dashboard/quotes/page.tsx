"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import { IQuote } from '@/models/Quote';

export default function QuotesPage() {
  const [quoteRequests, setQuoteRequests] = useState<IQuote[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<IQuote | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterEnvironment, setFilterEnvironment] = useState<string>('all');
  const [filterHousingType, setFilterHousingType] = useState<string>('all');
  const [filterOperator, setFilterOperator] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Environnements pour le filtre et l'affichage
  const environments = [
    { id: 'terre', name: 'Terre', icon: '🌱', description: 'Terrain naturel sans aménagement' },
    { id: 'beton', name: 'Béton', icon: '🧱', description: 'Surface en béton ou ciment' },
    { id: 'enrobe', name: 'Enrobé', icon: '🛣️', description: 'Revêtement bitumineux (asphalte)' },
    { id: 'pave', name: 'Pavé', icon: '🧩', description: 'Surface en pavés ou dalles' }
  ];

  // Types de logement pour le filtre et l'affichage
  const housingTypes = [
    { id: 'immeuble', name: 'Immeuble', icon: '🏢', description: 'Bâtiment collectif avec plusieurs logements' },
    { id: 'pavillon', name: 'Pavillon', icon: '🏡', description: 'Maison individuelle' },
    { id: 'chateau', name: 'Château & Domaine', icon: '🏰', description: 'Grande propriété ou domaine' },
    { id: 'professionnel', name: 'Local Professionnel', icon: '🏬', description: 'Bureau, commerce ou espace professionnel' }
  ];

  // Opérateurs pour le filtre et l'affichage
  const operators = [
    { id: 'orange', name: 'Orange', logo: '/images/partnair-logo/Orange_logo.svg.png' },
    { id: 'sosh', name: 'Sosh', logo: '/images/partnair-logo/Sosh.png' },
    { id: 'free', name: 'Free', logo: '/images/partnair-logo/Free_logo.svg.png' },
    { id: 'bouygues', name: 'Bouygues', logo: '/images/partnair-logo/Bouygues_Télécom.png' },
    { id: 'sfr', name: 'SFR', logo: '/images/partnair-logo/SFR-2022-logo.svg.png' },
    { id: 'autre', name: 'Autre', logo: '/images/partnair-logo/other-operator.png' }
  ];

  // Statuts pour le filtre et l'affichage
  const statuses = [
    { id: 'new', name: 'Nouveau', color: 'bg-blue-100 text-blue-800' },
    { id: 'contacted', name: 'Contacté', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'in_progress', name: 'En cours', color: 'bg-purple-100 text-purple-800' },
    { id: 'completed', name: 'Terminé', color: 'bg-green-100 text-green-800' },
    { id: 'cancelled', name: 'Annulé', color: 'bg-red-100 text-red-800' }
  ];

  // Fonction pour récupérer les demandes de devis
  const fetchQuotes = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/quotes');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des demandes de devis');
      }
      const data = await response.json();
      setQuoteRequests(data);
    } catch (error) {
      console.error('Erreur:', error);
      setError('Impossible de charger les demandes de devis. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les demandes au chargement de la page
  useEffect(() => {
    fetchQuotes();
  }, []);

  // Fonction pour mettre à jour le statut d'une demande
  const updateRequestStatus = async (id: string, newStatus: 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled') => {
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
          req._id === id ? { ...req, status: newStatus as IQuote['status'] } : req
        ) as IQuote[]
      );
      
      if (selectedRequest && selectedRequest._id === id) {
        // Récupérer la demande mise à jour depuis l'API pour s'assurer d'avoir toutes les propriétés
        const response = await fetch(`/api/quotes/${id}`);
        if (response.ok) {
          const updatedQuote = await response.json();
          setSelectedRequest(updatedQuote as IQuote);
        }
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la mise à jour du statut. Veuillez réessayer.');
    }
  };

  // Filtrage des demandes
  const filteredRequests = quoteRequests.filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    const matchesEnvironment = filterEnvironment === 'all' || request.environment === filterEnvironment;
    const matchesHousingType = filterHousingType === 'all' || request.housingType === filterHousingType;
    const matchesOperator = filterOperator === 'all' || request.operator === filterOperator;
    const matchesSearch = searchTerm === '' || 
      request.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.postalCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (request.message && request.message.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesStatus && matchesEnvironment && matchesHousingType && matchesOperator && matchesSearch;
  });

  // Tri des demandes par date (les plus récentes en premier)
  const sortedRequests = [...filteredRequests].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

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

  // Fonction pour obtenir le nom et l'icône de l'environnement
  const getEnvironmentInfo = (id: string) => {
    const env = environments.find(e => e.id === id);
    return env ? { name: env.name, icon: env.icon } : { name: id, icon: '❓' };
  };

  // Fonction pour obtenir le nom et l'icône du type de logement
  const getHousingTypeInfo = (id: string) => {
    const type = housingTypes.find(t => t.id === id);
    return type ? { name: type.name, icon: type.icon } : { name: id, icon: '❓' };
  };

  // Fonction pour obtenir le nom et le logo de l'opérateur
  const getOperatorInfo = (id: string) => {
    const op = operators.find(o => o.id === id);
    return op ? { name: op.name, logo: op.logo } : { name: id, logo: '/images/partnair-logo/other-operator.png' };
  };

  // Fonction pour obtenir le nom et la couleur du statut
  const getStatusInfo = (id: string) => {
    const status = statuses.find(s => s.id === id);
    return status ? { name: status.name, color: status.color } : { name: id, color: 'bg-gray-100 text-gray-800' };
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
            <h1 className="text-3xl font-bold text-gray-800">Demandes de devis</h1>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors"
                onClick={() => fetchQuotes()}
              >
                Actualiser
              </button>
            </div>
          </div>

          {/* Filtres et recherche */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtrer par statut
                </label>
                <select
                  id="status-filter"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange sm:text-sm rounded-md"
                >
                  <option value="all">Tous les statuts</option>
                  {statuses.map(status => (
                    <option key={status.id} value={status.id}>{status.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="environment-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtrer par environnement
                </label>
                <select
                  id="environment-filter"
                  value={filterEnvironment}
                  onChange={(e) => setFilterEnvironment(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange sm:text-sm rounded-md"
                >
                  <option value="all">Tous les environnements</option>
                  {environments.map(env => (
                    <option key={env.id} value={env.id}>{env.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Rechercher
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="search"
                    className="focus:ring-fiber-orange focus:border-fiber-orange block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Nom, téléphone, adresse..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label htmlFor="housing-type-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtrer par type de logement
                </label>
                <select
                  id="housing-type-filter"
                  value={filterHousingType}
                  onChange={(e) => setFilterHousingType(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange sm:text-sm rounded-md"
                >
                  <option value="all">Tous les types de logement</option>
                  {housingTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="operator-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtrer par opérateur
                </label>
                <select
                  id="operator-filter"
                  value={filterOperator}
                  onChange={(e) => setFilterOperator(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange sm:text-sm rounded-md"
                >
                  <option value="all">Tous les opérateurs</option>
                  {operators.map(op => (
                    <option key={op.id} value={op.id}>{op.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Message d'erreur */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
              <p>{error}</p>
            </div>
          )}

          {/* Tableau des demandes */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fiber-orange"></div>
              </div>
            ) : sortedRequests.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {searchTerm || filterStatus !== 'all' || filterEnvironment !== 'all' || filterHousingType !== 'all' || filterOperator !== 'all' ? 
                  'Aucune demande ne correspond à vos critères de recherche.' : 
                  'Aucune demande de devis pour le moment.'}
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Environnement
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Opérateur
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
                  {sortedRequests.map((request) => {
                    const envInfo = getEnvironmentInfo(request.environment);
                    const housingInfo = getHousingTypeInfo(request.housingType);
                    const operatorInfo = getOperatorInfo(request.operator);
                    const statusInfo = getStatusInfo(request.status);
                    
                    return (
                      <tr key={request._id?.toString()} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedRequest(request)}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(request.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{request.fullName}</div>
                          <div className="text-sm text-gray-500">{request.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-xl mr-2">{envInfo.icon}</span>
                            <span className="text-sm text-gray-900">{envInfo.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-xl mr-2">{housingInfo.icon}</span>
                            <span className="text-sm text-gray-900">{housingInfo.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {operatorInfo.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusInfo.color}`}>
                            {statusInfo.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRequest(request);
                            }} 
                            className="text-fiber-orange hover:text-fiber-orange/80 mr-3"
                          >
                            Voir
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Modal de détail de la demande */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Détails de la demande</h2>
                <button 
                  onClick={() => setSelectedRequest(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Informations client</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Nom complet</p>
                      <p className="font-medium">{selectedRequest.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="font-medium">{selectedRequest.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Adresse</p>
                      <p className="font-medium">{selectedRequest.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Code postal</p>
                      <p className="font-medium">{selectedRequest.postalCode}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Informations demande</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Date de création</p>
                      <p className="font-medium">{formatDate(selectedRequest.createdAt)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Environnement</p>
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{getEnvironmentInfo(selectedRequest.environment).icon}</span>
                        <span className="font-medium">{getEnvironmentInfo(selectedRequest.environment).name}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type de logement</p>
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{getHousingTypeInfo(selectedRequest.housingType).icon}</span>
                        <span className="font-medium">{getHousingTypeInfo(selectedRequest.housingType).name}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Opérateur</p>
                      <p className="font-medium">{getOperatorInfo(selectedRequest.operator).name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Statut</p>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusInfo(selectedRequest.status).color}`}>
                        {getStatusInfo(selectedRequest.status).name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedRequest.message && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Message</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line">{selectedRequest.message}</p>
                  </div>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Changer le statut</h3>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(status => (
                    <button
                      key={status.id}
                      onClick={() => updateRequestStatus(selectedRequest._id?.toString() || '', status.id as 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled')}
                      disabled={selectedRequest.status === status.id}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedRequest.status === status.id
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : `${status.color.replace('bg-', 'hover:bg-').replace('text-', 'hover:text-')} border border-gray-200`
                      }`}
                    >
                      {status.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
