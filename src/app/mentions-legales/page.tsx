import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MentionsLegales = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Informations Générales</h2>
          <p>
            Le site <a href="https://www.fibreoptiquetravaux.fr/" className="text-blue-600">www.fibreoptiquetravaux.fr</a> est édité par la société Fibre Optique Travaux.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Identification de l’Entreprise</h2>
          <p>Nom de l’entreprise : Fibre Optique Travaux</p>
          <p>Numéro de TVA Intracommunautaire : FR78901788943</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>Vercel Inc.</p>
          <p>440 N Barranca Avenue #4133</p>
          <p>Covina, CA 91723</p>
          <p>United States</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Conditions d’utilisation</h2>
          <p>En accédant au site, l’utilisateur accepte les présentes conditions d’utilisation. Toute utilisation du site doit être conforme aux lois en vigueur.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Protection des données personnelles</h2>
          <p>Les informations collectées sur le site sont utilisées uniquement dans le cadre des services fournis. L’utilisateur dispose d’un droit d’accès, de rectification et de suppression des données personnelles.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
          <p>Tous les contenus présents sur le site sont protégés par les droits de propriété intellectuelle. Toute reproduction ou utilisation sans autorisation est interdite.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Responsabilité</h2>
          <p>Le site s’efforce de fournir des informations exactes mais ne peut garantir l’absence d’erreurs. L’utilisateur est responsable de l’usage qu’il fait du site.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Services fournis</h2>
          <p>Le site propose des informations sur les travaux de fibre optique. Ces informations sont fournies à titre indicatif et peuvent évoluer.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Litiges</h2>
          <p>Tout litige relatif à l’utilisation du site est soumis au droit français et aux tribunaux compétents.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Liens hypertextes</h2>
          <p>Le site peut contenir des liens vers d’autres sites. Fibre Optique Travaux n’est pas responsable du contenu de ces sites tiers.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. L’utilisateur peut configurer son navigateur pour refuser les cookies.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Pour toute question, vous pouvez nous contacter via notre formulaire de contact sur le site.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;