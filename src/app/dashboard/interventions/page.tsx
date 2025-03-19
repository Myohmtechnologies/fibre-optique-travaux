"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import { IQuote } from '@/models/Quote';

// Interface pour les interventions
interface Intervention {
  id: string;
  quoteId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  address: string;
  service: string;
  scheduledDate: string;
  technician: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes: string;
}

// Données fictives pour les interventions
const mockInterventions: Intervention[] = [
  {
    id: '1',
    quoteId: '2',
    clientName: 'Marie Martin',
    clientEmail: 'marie.martin@example.com',
    clientPhone: '06 98 76 54 32',
    address: '45 Avenue des Télécoms, Aix-en-Provence',
    service: 'Perçage et passage de gaines',
    scheduledDate: '2025-03-20T09:00:00',
    technician: 'Thomas Dubois',
    status: 'scheduled',
    notes: 'Prévoir perceuse à percussion et 5m de gaine.'
  },
  {
    id: '2',
    quoteId: '3',
    clientName: 'Pierre Leroy',
    clientEmail: 'pierre.leroy@example.com',
    clientPhone: '07 11 22 33 44',
    address: '78 Boulevard des Communications, Marseille',
    service: 'Installation de prises optiques',
    scheduledDate: '2025-03-21T14:00:00',
    technician: 'Lucas Moreau',
    status: 'scheduled',
    notes: '3 prises optiques à installer dans différentes pièces.'
  },
  {
    id: '3',
    quoteId: '7',
    clientName: 'Emma Petit',
    clientEmail: 'emma.petit@example.com',
    clientPhone: '07 44 55 66 77',
    address: '23 Rue des Connections, Sisteron',
    service: 'Déblocage d\'installation fibre',
    scheduledDate: '2025-03-19T10:30:00',
    technician: 'Thomas Dubois',
    status: 'in-progress',
    notes: 'Passage de la fibre dans le vide sanitaire. Prévoir lampe frontale et combinaison.'
  }
];

export default function InterventionsPage() {
  const [interventions, setInterventions] = useState<Intervention[]>(mockInterventions);
  const [selectedIntervention, setSelectedIntervention] = useState<Intervention | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterTechnician, setFilterTechnician] = useState<string>('all');
  const [filterDate, setFilterDate] = useState<string>('');

  // Fonction pour mettre à jour le statut d'une intervention
  const updateInterventionStatus = (id: string, newStatus: Intervention['status']) => {
    setInterventions(prev => 
      prev.map(intervention => 
        intervention.id === id ? { ...intervention, status: newStatus } : intervention
      )
    );
    if (selectedIntervention && selectedIntervention.id === id) {
      setSelectedIntervention({...selectedIntervention, status: newStatus});
    }
  };

  // Filtrage des interventions
  const filteredInterventions = interventions.filter(intervention => {
    const matchesStatus = filterStatus === 'all' || intervention.status === filterStatus;
    const matchesTechnician = filterTechnician === 'all' || intervention.technician === filterTechnician;
    const matchesDate = !filterDate || new Date(intervention.scheduledDate).toISOString().split('T')[0] === filterDate;
    
    return matchesStatus && matchesTechnician && matchesDate;
  });

  // Tri des interventions par date (les plus proches en premier)
  const sortedInterventions = [...filteredInterventions].sort((a, b) => 
    new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
  );

  // Liste des techniciens uniques pour le filtre
  const uniqueTechnicians = Array.from(new Set(interventions.map(intervention => intervention.technician)));

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
            <h1 className="text-3xl font-bold text-gray-800">Interventions programmées</h1>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90 transition-colors"
                onClick={() => {/* Fonction pour ajouter une intervention */}}
              >
                Nouvelle intervention
              </button>
            </div>
          </div>

          {/* Filtres */}
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
                  <option value="scheduled">Programmé</option>
                  <option value="in-progress">En cours</option>
                  <option value="completed">Terminé</option>
                  <option value="cancelled">Annulé</option>
                </select>
              </div>
              <div>
                <label htmlFor="technician-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtrer par technicien
                </label>
                <select
                  id="technician-filter"
                  value={filterTechnician}
                  onChange={(e) => setFilterTechnician(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange sm:text-sm rounded-md"
                >
                  <option value="all">Tous les techniciens</option>
                  {uniqueTechnicians.map(technician => (
                    <option key={technician} value={technician}>{technician}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtrer par date
                </label>
                <input
                  type="date"
                  id="date-filter"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-fiber-orange focus:border-fiber-orange sm:text-sm rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Calendrier des interventions */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Calendrier des interventions</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-7 gap-4">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
                  <div key={index} className="text-center font-medium text-gray-700">{day}</div>
                ))}
                
                {/* Simulation d'un calendrier - à remplacer par un vrai composant de calendrier */}
                {Array.from({ length: 35 }).map((_, index) => {
                  const day = index + 1;
                  const hasIntervention = interventions.some(intervention => 
                    new Date(intervention.scheduledDate).getDate() === day && 
                    new Date(intervention.scheduledDate).getMonth() === 2 // Mars
                  );
                  
                  return (
                    <div 
                      key={index} 
                      className={`
                        p-2 border rounded-md text-center cursor-pointer hover:bg-gray-50
                        ${hasIntervention ? 'border-fiber-orange bg-fiber-orange/10' : 'border-gray-200'}
                      `}
                      onClick={() => {
                        // Filtrer par cette date
                        const date = new Date(2025, 2, day); // Mars 2025
                        setFilterDate(date.toISOString().split('T')[0]);
                      }}
                    >
                      {day <= 31 ? day : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Liste des interventions */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Liste des interventions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Heure
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Technicien
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
                  {sortedInterventions.map((intervention) => (
                    <tr key={intervention.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{intervention.clientName}</div>
                            <div className="text-sm text-gray-500">{intervention.clientEmail}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{intervention.service}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{intervention.address}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(intervention.scheduledDate).toLocaleDateString('fr-FR')}
                        <br />
                        {new Date(intervention.scheduledDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {intervention.technician}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`
                          px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${intervention.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : ''}
                          ${intervention.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${intervention.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                          ${intervention.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                        `}>
                          {intervention.status === 'scheduled' && 'Programmé'}
                          {intervention.status === 'in-progress' && 'En cours'}
                          {intervention.status === 'completed' && 'Terminé'}
                          {intervention.status === 'cancelled' && 'Annulé'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => setSelectedIntervention(intervention)}
                          className="text-fiber-orange hover:text-fiber-orange/80 mr-4"
                        >
                          Voir détails
                        </button>
                        <button 
                          onClick={() => {
                            const nextStatus = 
                              intervention.status === 'scheduled' ? 'in-progress' :
                              intervention.status === 'in-progress' ? 'completed' : 'completed';
                            
                            updateInterventionStatus(intervention.id, nextStatus);
                          }}
                          className={`
                            ${intervention.status === 'completed' || intervention.status === 'cancelled' ? 'text-gray-400 cursor-not-allowed' : 'text-green-600 hover:text-green-900'}
                          `}
                          disabled={intervention.status === 'completed' || intervention.status === 'cancelled'}
                        >
                          {intervention.status === 'scheduled' && 'Démarrer'}
                          {intervention.status === 'in-progress' && 'Terminer'}
                          {intervention.status === 'completed' && 'Terminé'}
                          {intervention.status === 'cancelled' && 'Annulé'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour afficher les détails d'une intervention */}
      {selectedIntervention && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Détails de l'intervention</h3>
              <button 
                onClick={() => setSelectedIntervention(null)}
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
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="font-medium">{selectedIntervention.clientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">{selectedIntervention.clientEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <p className="font-medium">{selectedIntervention.clientPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Service</p>
                  <p className="font-medium">{selectedIntervention.service}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Adresse</p>
                  <p className="font-medium">{selectedIntervention.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date et heure</p>
                  <p className="font-medium">
                    {new Date(selectedIntervention.scheduledDate).toLocaleDateString('fr-FR')} à {' '}
                    {new Date(selectedIntervention.scheduledDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Technicien</p>
                  <p className="font-medium">{selectedIntervention.technician}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Notes</p>
                  <p className="font-medium">{selectedIntervention.notes}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Statut</p>
                  <div className={`
                    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${selectedIntervention.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : ''}
                    ${selectedIntervention.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${selectedIntervention.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                    ${selectedIntervention.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {selectedIntervention.status === 'scheduled' && 'Programmé'}
                    {selectedIntervention.status === 'in-progress' && 'En cours'}
                    {selectedIntervention.status === 'completed' && 'Terminé'}
                    {selectedIntervention.status === 'cancelled' && 'Annulé'}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => {
                    updateInterventionStatus(selectedIntervention.id, 'cancelled');
                    setSelectedIntervention(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler l'intervention
                </button>
                <button 
                  onClick={() => {
                    const nextStatus = 
                      selectedIntervention.status === 'scheduled' ? 'in-progress' :
                      selectedIntervention.status === 'in-progress' ? 'completed' : 'completed';
                    
                    updateInterventionStatus(selectedIntervention.id, nextStatus);
                    setSelectedIntervention(null);
                  }}
                  className="px-4 py-2 bg-fiber-orange text-white rounded-md hover:bg-fiber-orange/90"
                >
                  {selectedIntervention.status === 'scheduled' && 'Démarrer l\'intervention'}
                  {selectedIntervention.status === 'in-progress' && 'Marquer comme terminée'}
                  {selectedIntervention.status === 'completed' && 'Déjà terminée'}
                  {selectedIntervention.status === 'cancelled' && 'Réactiver l\'intervention'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
