import React from 'react';

const DetectionMethodSteps: React.FC = () => {
  return (
    <div className="my-8 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Étape 1 */}
      <div className="border-b border-gray-100">
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-construction-orange text-white font-bold text-xl">
                1
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-bold text-neutral-dark">Consulter les plans du réseau</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Avant toute recherche physique, il est recommandé de se procurer les plans des 
                infrastructures souterraines auprès des opérateurs télécoms ou des services 
                d'urbanisme. Ces documents fournissent des indications précieuses sur l'emplacement 
                des gaines et facilitent leur repérage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Étape 2 */}
      <div className="border-b border-gray-100">
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-construction-orange text-white font-bold text-xl">
                2
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-bold text-neutral-dark">Utiliser un détecteur de câbles et de gaines</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Les détecteurs électromagnétiques sont des outils efficaces pour repérer les câbles et 
                gaines enterrés. Ils permettent de suivre leur tracé en détectant les signaux émis par les 
                fils conducteurs situés à l'intérieur de la gaine.
              </p>
              
              <div className="mt-4 space-y-4">
                <div className="pl-4 border-l-3 border-construction-orange">
                  <div className="flex items-start">
                    <span className="font-semibold text-construction-orange text-lg">a) </span>
                    <div className="ml-2">
                      <span className="font-semibold text-neutral-dark text-lg">Calibration et réglage de l'appareil</span>
                      <p className="mt-1 text-gray-600">
                        Avant de commencer, assurez-vous que le détecteur est bien calibré et configuré selon 
                        le type de câbles recherchés.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pl-4 border-l-3 border-construction-orange">
                  <div className="flex items-start">
                    <span className="font-semibold text-construction-orange text-lg">b) </span>
                    <div className="ml-2">
                      <span className="font-semibold text-neutral-dark text-lg">Balayage de la zone suspectée</span>
                      <p className="mt-1 text-gray-600">
                        Déplacez lentement le détecteur sur la zone présumée du passage des gaines en 
                        surveillant les variations du signal.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pl-4 border-l-3 border-construction-orange">
                  <div className="flex items-start">
                    <span className="font-semibold text-construction-orange text-lg">c) </span>
                    <div className="ml-2">
                      <span className="font-semibold text-neutral-dark text-lg">Confirmation du tracé</span>
                      <p className="mt-1 text-gray-600">
                        Une fois un signal capté, marquez le sol pour suivre le tracé de la gaine et affinez la 
                        recherche si nécessaire.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Étape 3 */}
      <div className="border-b border-gray-100">
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-construction-orange text-white font-bold text-xl">
                3
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-bold text-neutral-dark">Inspection avec une aiguille détectable</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Dans certains cas, il est possible d'insérer une aiguille détectable dans la gaine télécom. 
                Cette technique permet de suivre son parcours en utilisant un détecteur de signal adapté.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Étape 4 */}
      <div>
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-construction-orange text-white font-bold text-xl">
                4
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-bold text-neutral-dark">Vérification avec une caméra d'inspection</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                L'utilisation d'une caméra endoscopique peut s'avérer utile pour vérifier l'état et le 
                cheminement de la gaine, notamment en cas d'obstruction ou d'incertitude sur son tracé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionMethodSteps;
