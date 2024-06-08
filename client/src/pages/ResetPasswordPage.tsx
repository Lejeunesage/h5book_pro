// src/pages/ResetPasswordPage.tsx
import React from 'react';
import ResetPasswordForm from '../components/auth/ResetPasswordForm';
import { resetPassword } from '../services/authService'; // Cette fonction doit être implémentée dans vos services

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="">
   
      <ResetPasswordForm onResetPassword={resetPassword} />
    </div>
  );
};

export default ResetPasswordPage;
