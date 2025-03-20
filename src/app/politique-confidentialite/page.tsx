import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PolitiqueConfidentialite = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Politique de Confidentialité</h1>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Introduction</h2>
          <p className="mt-2">
            Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site.
            Nous nous engageons à respecter votre vie privée et à protéger vos données conformément aux lois en vigueur.
          </p>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Collecte des Informations</h2>
          <p className="mt-2">
            Nous pouvons collecter différentes catégories d’informations personnelles, notamment :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Informations d’identification : nom, prénom, adresse e-mail, numéro de téléphone.</li>
            <li>Informations de navigation : adresse IP, type de navigateur, pages visitées.</li>
            <li>Informations fournies via les formulaires de contact.</li>
          </ul>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Utilisation des Informations</h2>
          <p className="mt-2">
            Les informations collectées sont utilisées pour les finalités suivantes :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Fournir, gérer et améliorer nos services.</li>
            <li>Répondre à vos demandes et vous contacter.</li>
            <li>Garantir la sécurité et prévenir la fraude.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Protection des Informations</h2>
          <p className="mt-2">
            Nous mettons en place des mesures strictes pour assurer la sécurité de vos données :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Stockage sécurisé des informations.</li>
            <li>Chiffrement des données sensibles.</li>
            <li>Contrôle d’accès et surveillance des accès non autorisés.</li>
          </ul>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Droits des Utilisateurs</h2>
          <p className="mt-2">
            Conformément aux lois en vigueur, vous avez plusieurs droits concernant vos données personnelles :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Droit d’accès : Vous pouvez demander une copie de vos données personnelles.</li>
            <li>Droit de rectification : Vous pouvez corriger toute information incorrecte.</li>
            <li>Droit à l’effacement : Vous pouvez demander la suppression de vos données.</li>
            <li>Droit à la limitation du traitement : Vous pouvez restreindre l’utilisation de vos données.</li>
            <li>Droit d’opposition : Vous pouvez vous opposer au traitement de vos données.</li>
          </ul>
          <p className="mt-2">Pour exercer ces droits, contactez-nous via notre formulaire de contact.</p>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Cookies et Suivi</h2>
          <p className="mt-2">
            Notre site utilise des cookies pour améliorer votre expérience utilisateur et analyser l’audience. Vous pouvez modifier vos préférences en matière de cookies via les paramètres de votre navigateur.
          </p>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Modifications de la Politique</h2>
          <p className="mt-2">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les mises à jour seront publiées sur cette page.
          </p>
        </section>
        
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold border-b pb-2">Contact</h2>
          <p className="mt-2">
            Pour toute question concernant cette politique, veuillez nous contacter via notre formulaire de contact.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
