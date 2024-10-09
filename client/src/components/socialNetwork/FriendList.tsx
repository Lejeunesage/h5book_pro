import React from 'react';
import { User } from '../../models/socialNetwork/User';

interface FriendListProps {
  friends: User[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div className="bg-white dark:bg-bs-dark p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Friends</h2>
      {friends.map((friend) => (
        <div key={friend.id} className="mb-4">
          <div className="flex items-center">
            <img
              src={friend.profileImageUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold dark:text-white">{friend.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{friend.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
