// src/pages/ForgotPasswordPage.tsx
import React from 'react';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  const handleResetPasswordRequest = (email: string) => {
    // Implémentez la logique pour gérer la demande de réinitialisation du mot de passe ici
  };

  return (
    <div>
      <ForgotPasswordForm onSubmitEmail={handleResetPasswordRequest} />
      {/* Vous pouvez ajouter ici des instructions supplémentaires ou des messages de confirmation */}
    </div>
  );
};

export default ForgotPasswordPage;
