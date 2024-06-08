// NewsFeedCard.tsx
import React from 'react';
import { NewsFeedItem } from '../../models/socialNetwork/NewsFeedItem';

interface NewsFeedCardProps {
  newsFeedItems: NewsFeedItem;
}

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ newsFeedItems }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        <img
          src={newsFeedItems.authorImage}
          alt={newsFeedItems.author}
          className="w-10 h-10 rounded-full mr-2"
        />
        <p className="text-gray-600 dark:text-gray-400">{newsFeedItems.author}</p>
      </div>
      <p className="text-lg font-semibold mb-2">{newsFeedItems.title}</p>
      <p className="text-gray-600 dark:text-gray-400">{newsFeedItems.content}</p>
      <img src={newsFeedItems.imageUrl} alt="News" className="w-full h-auto rounded mt-2" />
    </div>
  );
};

export default NewsFeedCard;
