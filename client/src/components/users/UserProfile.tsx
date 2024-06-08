// src/components/user/UserProfile.tsx
import React, { useState } from 'react';
import UserProfileForm from './UserProfileForm';
import UserPreferences from './UserPreferences';

interface UserInfo {
    lastname: string;
    firstname: string;
    username: string;
    email: string;
    bio: string;
    // Ajoutez d'autres champs nécessaires
}

const UserProfile: React.FC = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const userInfo: UserInfo = {
        firstname: "John",
        lastname: "Doe",
        username: "JohnDoe",
        email: "johndoe@example.com",
        bio: "Lover of coffee and good books.",
        // Initialisez d'autres champs ici
    };

    const handleUpdate = (updatedInfo: UserInfo) => {
        console.log(updatedInfo);
        // Ici, vous appellerez une fonction pour mettre à jour les infos de l'utilisateur dans le backend
        setEditMode(false); // Quitter le mode édition après mise à jour
    };

    if (editMode) {
        return <UserProfileForm userInfo={userInfo} onSubmit={handleUpdate} />;
    }

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <p className='mb-1'><strong>Nom:</strong> {userInfo.lastname}</p>
            <p className='mb-1'><strong>Prénom:</strong> {userInfo.firstname}</p>
            <p className='mb-1'><strong>Nom d'utilisateur:</strong> {userInfo.username}</p>
            <p className='mb-1'><strong>Email:</strong> {userInfo.email}</p>
            <p className='mb-1'><strong>Bio:</strong> {userInfo.bio}</p>
            {/* Affichez d'autres informations ici */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => setEditMode(true)}>
                Modifier Profil
            </button>
            <UserPreferences /> {/* Gestion des préférences utilisateur */}
        </div>
    );
};

export default UserProfile;
