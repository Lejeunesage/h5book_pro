import React from 'react';
import { User } from '../../models/socialNetwork/User';

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="text-center">
        <img
          src={user.profileImageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold dark:text-white">{user.name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
