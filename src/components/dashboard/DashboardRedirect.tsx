"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-700">FIBRE</span>
              <span className="text-2xl font-bold text-fiber-orange ml-2">OPTIQUE</span>
            </div>
            <span className="text-xl font-bold text-fiber-orange tracking-wider">TRAVAUX</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Redirection...</h1>
          <p className="text-gray-600 mb-6">Le tableau de bord a été déplacé vers une nouvelle adresse.</p>
          <p className="text-gray-600">Vous êtes redirigé automatiquement.</p>
        </div>
      </div>
    </div>
  );
}
