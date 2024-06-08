import React, { useState } from 'react';

const AddUserForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, role });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="px-4 py-2 border rounded"
      />
      <select 
        value={role} 
        onChange={e => setRole(e.target.value)} 
        required
        className="px-4 py-2 border rounded"
      >
        <option value="">Sélectionner un rôle</option>
        <option value="admin">Admin</option>
        <option value="user">Utilisateur</option>
      </select>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Ajouter
      </button>
    </form>
  );
};


export default AddUserForm;
