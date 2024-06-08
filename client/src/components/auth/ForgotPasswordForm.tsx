import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ForgotPasswordFormProps {
  onSubmitEmail: (email: string) => Promise<void>; // Assurez-vous que la fonction onSubmitEmail retourne une promesse
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmitEmail }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await onSubmitEmail(email);
      setMessage('Un e-mail de réinitialisation a été envoyé à votre adresse.');
    } catch (error) {
      setError("Erreur lors de l'envoi de l'e-mail de réinitialisation. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <h1  className="text-center text-2xl font-semibold">Réinitialiser le mot de passe</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Entrez votre adresse email"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Envoyer l'e-mail de réinitialisation
            </button>
          </div>

          {message && <p className="text-green-600 text-center text-sm">{message}</p>}
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <div className="text-sm text-center">
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Retour à la page de connexion
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
