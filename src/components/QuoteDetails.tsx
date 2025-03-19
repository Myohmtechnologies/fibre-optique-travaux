import React, { useState } from 'react';

const QuoteDetails = ({ quote }) => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleSaveNote = async () => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note, quoteId: quote._id }), // Assurez-vous d'envoyer l'ID du devis
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'enregistrement de la note');
      }

      setNote('');
      alert('Note enregistrée avec succès');
    } catch (error) {
      console.error('Erreur:', error);
      alert('Impossible d\'enregistrer la note');
    }
  };

  return (
    <div>
      <h1>Détails de la Demande de Devis</h1>
      {/* Affichez les détails du devis ici */}
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Écrivez votre note ici..."
        rows={4}
        className="mt-2 p-2 border rounded"
      />
      <button onClick={handleSaveNote} className="mt-2 bg-blue-500 text-white p-2 rounded">Enregistrer la note</button>
    </div>
  );
};

export default QuoteDetails;
 