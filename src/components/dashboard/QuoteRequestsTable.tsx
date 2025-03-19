"use client";

import React from 'react';
import { IQuote } from '@/models/Quote';

interface QuoteRequestsTableProps {
  quoteRequests: IQuote[];
  updateRequestStatus: (id: string, status: IQuote['status']) => void;
  setSelectedRequest: (request: IQuote) => void;
}

export default function QuoteRequestsTable({ 
  quoteRequests, 
  updateRequestStatus,
  setSelectedRequest 
}: QuoteRequestsTableProps) {
  return (
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
          {quoteRequests.map((request) => (
            <tr 
              key={request._id?.toString()} 
              className="hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setSelectedRequest(request)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-fiber-orange/10 flex items-center justify-center text-fiber-orange font-semibold">
                    {request.fullName.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{request.fullName}</div>
                    <div className="text-sm text-gray-500">{request.phone}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{`${request.environment} - ${request.housingType}`}</div>
                <div className="text-sm text-gray-500 truncate max-w-xs">{request.message ? `${request.message.substring(0, 50)}...` : 'Pas de message'}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{new Date(request.createdAt).toLocaleDateString('fr-FR')}</div>
                <div className="text-sm text-gray-500">{new Date(request.createdAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`
                  px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${request.status === 'new' ? 'bg-blue-100 text-blue-800' : ''}
                  ${request.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${request.status === 'in_progress' ? 'bg-purple-100 text-purple-800' : ''}
                  ${request.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                  ${request.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {request.status === 'new' && 'Nouveau'}
                  {request.status === 'contacted' && 'Contacté'}
                  {request.status === 'in_progress' && 'En cours'}
                  {request.status === 'completed' && 'Terminé'}
                  {request.status === 'cancelled' && 'Annulé'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex space-x-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRequest(request);
                    }}
                    className="text-fiber-orange hover:text-fiber-orange/80"
                  >
                    Voir
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextStatus = 
                        request.status === 'new' ? 'contacted' as const :
                        request.status === 'contacted' ? 'in_progress' as const :
                        request.status === 'in_progress' ? 'completed' as const : 'completed' as const;
                      
                      updateRequestStatus(request._id?.toString() || '', nextStatus);
                    }}
                    className={`
                      ${request.status === 'completed' || request.status === 'cancelled' ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-900'}
                    `}
                    disabled={request.status === 'completed' || request.status === 'cancelled'}
                  >
                    {request.status === 'new' && 'Contacter'}
                    {request.status === 'contacted' && 'En cours'}
                    {request.status === 'in_progress' && 'Terminer'}
                    {request.status === 'completed' && 'Terminé'}
                    {request.status === 'cancelled' && 'Annulé'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
