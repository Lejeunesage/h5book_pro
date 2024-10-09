import React, { useState, useRef, useEffect } from 'react';
import { User } from '../../models/socialNetwork/User';
import { CiSettings } from 'react-icons/ci';
import { FiEdit, FiUser } from 'react-icons/fi';

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const toggleSettings = () => {
    setIsSettingsVisible(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsVisible(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white dark:bg-bs-dark py-10 rounded-lg shadow-lg text-gray-600" ref={settingsRef}>
      <button
        onClick={toggleSettings}
        className="bg-bs-light p-1 rounded-full absolute right-5 top-5 cursor-pointer"
      >
        <CiSettings className="w-5 h-5" />
      </button>

      {isSettingsVisible && (
        <div className="absolute -right-16 top-12 bg-white dark:bg-gray-700 p-1 rounded shadow-lg text-sm">
          <div className="flex flex-col">
            <span className='flex items-center gap-2 border-b cursor-pointer p-2 hover:bg-bs-light'><FiEdit />Editer profile</span>
            <span className='flex items-center gap-2 cursor-pointer p-2 hover:bg-bs-light'><FiUser />Voir profile</span>
          </div>
        </div>
      )}

      <div className="text-center">
        <img
          src={user.profileImageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-bold dark:text-white">{user.username}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{user.email}</p>
        <p className="text-gray-600 text-sm dark:text-gray-400 mb-2 truncate">{user.bio}</p>
        <div className="flex justify-center items-center gap-3">
          <div className="flex flex-col">
            <span className="font-bold text-xl">{user.following}</span> <span>Suivis</span>
          </div>
          <div className="">|</div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">{user.followers}</span> <span>Followers</span>
          </div>
        </div>
        <button className="my-5 text-xs border px-4 py-2 rounded-md font-semibold text-white bg-bs-blue hover:bg-white hover:text-bs-blue hover:border-bs-blue">Voir le profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
