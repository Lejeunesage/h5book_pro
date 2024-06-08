import React from 'react';

interface LikedPage {
  id: number;
  name: string;
  description: string;
}

interface LikedPageCardProps {
  likedPages: LikedPage[];
}

const LikedPageCard: React.FC<LikedPageCardProps> = ({ likedPages }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Liked Pages</h2>
      {likedPages.map((page) => (
        <div key={page.id} className="mb-4">
          <h3 className="text-lg font-bold dark:text-white">{page.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{page.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LikedPageCard;
