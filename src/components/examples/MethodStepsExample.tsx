import React from 'react';
import MethodSteps from '../MethodSteps';

const MethodStepsExample: React.FC = () => {
  const detecteurSteps = [
    {
      number: 1,
      title: "Consulter les plans du réseau",
      description: "Avant toute recherche physique, il est recommandé de se procurer les plans des infrastructures souterraines auprès des opérateurs télécoms ou des services d'urbanisme. Ces documents fournissent des indications précieuses sur l'emplacement des gaines et facilitent leur repérage."
    },
    {
      number: 2,
      title: "Utiliser un détecteur de câbles et de gaines",
      description: "Les détecteurs électromagnétiques sont des outils efficaces pour repérer les câbles et gaines enterrés. Ils permettent de suivre leur tracé en détectant les signaux émis par les fils conducteurs situés à l'intérieur de la gaine.",
      details: [
        {
          letter: "a",
          title: "Calibration et réglage de l'appareil",
          content: "Avant de commencer, assurez-vous que le détecteur est bien calibré et configuré selon le type de câbles recherchés."
        },
        {
          letter: "b",
          title: "Balayage de la zone suspectée",
          content: "Déplacez lentement le détecteur sur la zone présumée du passage des gaines en surveillant les variations du signal."
        },
        {
          letter: "c",
          title: "Confirmation du tracé",
          content: "Une fois un signal capté, marquez le sol pour suivre le tracé de la gaine et affinez la recherche si nécessaire."
        }
      ]
    },
    {
      number: 3,
      title: "Inspection avec une aiguille détectable",
      description: "Dans certains cas, il est possible d'insérer une aiguille détectable dans la gaine télécom. Cette technique permet de suivre son parcours en utilisant un détecteur de signal adapté."
    },
    {
      number: 4,
      title: "Vérification avec une caméra d'inspection",
      description: "L'utilisation d'une caméra endoscopique peut s'avérer utile pour vérifier l'état et le cheminement de la gaine, notamment en cas d'obstruction ou d'incertitude sur son tracé."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-neutral-dark mb-4">Comment localiser des gaines télécom enterrées</h2>
      <MethodSteps steps={detecteurSteps} />
    </div>
  );
};

export default MethodStepsExample;
