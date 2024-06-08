import React from 'react';
import { User } from '../../models/socialNetwork/User';

interface SuggestionCardProps {
  suggestions: User[];
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestions }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Suggestions</h2>
      {suggestions.map((user) => (
        <div key={user.id} className="mb-4">
          <div className="flex items-center">
            <img
              src={user.profileImageUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold dark:text-white">{user.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionCard;
