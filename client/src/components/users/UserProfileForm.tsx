// src/components/user/UserProfileForm.tsx
import React, { useState } from 'react';

interface UserInfo {
  lastname: string;
  firstname: string;
  username: string;
  email: string;
  bio: string;
  // Ajoutez d'autres champs selon les besoins
}

interface UserProfileFormProps {
  userInfo: UserInfo;
  onSubmit: (updatedInfo: UserInfo) => void;
  onCancel: () => void; // Fonction pour gérer l'annulation
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ userInfo, onSubmit, onCancel }) => {
  const [userForm, setUserForm] = useState<UserInfo>(userInfo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(userForm);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg space-y-4">
      <div className="flex flex-col mb-4">
        <label htmlFor="firstname" className="mb-2 text-sm font-medium text-gray-700">Prénom</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={userForm.firstname}
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="lastname" className="mb-2 text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={userForm.lastname}
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-700">Nom d'utilisateur</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userForm.username}
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userForm.email}
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="bio" className="mb-2 text-sm font-medium text-gray-700">Bio</label>
        <textarea
          name="bio"
          id="bio"
          value={userForm.bio}
          onChange={handleChange}
          rows={4}
          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
          Annuler
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default UserProfileForm;
