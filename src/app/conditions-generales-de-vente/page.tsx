import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConditionsGeneralesDeVente = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Conditions Générales de Vente</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Objet</h2>
          <p>
            Les présentes conditions générales de vente régissent les relations entre la société Fibre Optique Travaux et ses clients. Elles s'appliquent à toutes les ventes de services de déblocage d'installations de fibre optique.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Acceptation des Conditions</h2>
          <p>
            En passant commande, le client accepte sans réserve les présentes conditions générales de vente.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Tarifs</h2>
          <p>
            Les prix des services sont indiqués en euros et comprennent toutes les taxes applicables. Les tarifs peuvent être modifiés à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la commande.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Modalités de Paiement</h2>
          <p>
            Le paiement des services s'effectue à la commande par les moyens de paiement acceptés par la société. Les services seront exécutés après confirmation du paiement.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Droit de Rétractation</h2>
          <p>
            Conformément à la loi, le client dispose d'un délai de 14 jours pour exercer son droit de rétractation à compter de la date de commande, sans avoir à justifier de motifs.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Litiges</h2>
          <p>
            En cas de litige, les parties s'engagent à rechercher une solution amiable avant d'engager toute procédure judiciaire. Les présentes conditions sont régies par la loi française.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConditionsGeneralesDeVente;
