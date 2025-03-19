"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardsProps {
  stats: {
    totalRequests: number;
    newRequests: number;
    scheduledInterventions: number;
    completedInterventions: number;
    conversionRate: number;
  };
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Demandes totales',
      value: stats.totalRequests,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-500'
    },
    {
      title: 'Nouvelles demandes',
      value: stats.newRequests,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fiber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      color: 'from-orange-400 to-orange-600',
      textColor: 'text-fiber-orange'
    },
    {
      title: 'Interventions programmées',
      value: stats.scheduledInterventions,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-purple-400 to-purple-600',
      textColor: 'text-purple-500'
    },
    {
      title: 'Interventions terminées',
      value: stats.completedInterventions,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: 'from-green-400 to-green-600',
      textColor: 'text-green-500'
    },
    {
      title: 'Taux de conversion',
      value: `${stats.conversionRate}%`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fiber-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-gray-600 to-gray-800',
      textColor: 'text-fiber-gray'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`p-3 rounded-full bg-gradient-to-r ${card.color} bg-opacity-10`}>
                  {card.icon}
                </div>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm">{card.title}</p>
                <p className={`text-2xl font-bold ${card.textColor}`}>{card.value}</p>
              </div>
            </div>
          </div>
          <div className={`h-1 bg-gradient-to-r ${card.color}`}></div>
        </motion.div>
      ))}
    </div>
  );
}
