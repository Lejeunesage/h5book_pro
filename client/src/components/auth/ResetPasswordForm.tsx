// src/components/auth/ResetPasswordForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

interface ResetPasswordFormProps {
  onResetPassword: (password: string, confirmPassword: string) => Promise<void>;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onResetPassword }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      await onResetPassword(password, confirmPassword);
      setMessage('Votre mot de passe a été réinitialisé avec succès.');
      navigate('/login');
    } catch (error) {
      setError('Erreur lors de la réinitialisation du mot de passe.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
           <h2 className="text-center text-2xl font-semibold">Définir un nouveau mot de passe</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">Nouveau mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nouveau mot de passe"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirmez le nouveau mot de passe</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirmez le nouveau mot de passe"
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
          {message && <div className="text-green-500 text-sm text-center mt-2">{message}</div>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Réinitialiser le mot de passe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
