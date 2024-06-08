// src/pages/UserProfilePage.tsx
import React from 'react';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../components/users/UserProfile';

const UserProfilePage: React.FC = () => {

    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1);
    };


  return (
    <Layout>
      <div className="container mx-auto">
      <button
          onClick={handleBack}
          className="mb-4 inline-flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          {/* Ajoutez une icône de flèche gauche si vous le souhaitez */}
          <span>Retour</span>
        </button> 
        <h1 className="text-2xl font-bold py-2">Profil Utilisateur</h1>
        <UserProfile />
      </div>
    </Layout>
  );
};

export default UserProfilePage;
