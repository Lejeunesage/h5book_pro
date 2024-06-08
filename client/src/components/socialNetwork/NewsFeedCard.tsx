import React from 'react';
import { NewsFeedItem } from '../../models/socialNetwork/NewsFeedItem';
import CommentSection from './CommentSection';

interface NewsFeedCardProps {
  newsFeedItem: NewsFeedItem;
}

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ newsFeedItem }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        <img
          src={newsFeedItem.authorImage}
          alt={newsFeedItem.author}
          className="w-10 h-10 rounded-full mr-2"
        />
        <p className="text-gray-600 dark:text-gray-400">{newsFeedItem.author}</p>
      </div>
      <p className="text-lg font-semibold mb-2">{newsFeedItem.title}</p>
      <p className="text-gray-600 dark:text-gray-400">{newsFeedItem.content}</p>
      <img
        src={newsFeedItem.imageUrl}
        alt="News"
        className="w-full h-64 object-cover rounded mt-2"
      />
      <CommentSection newsFeedItem={newsFeedItem} />
    </div>
  );
};

export default NewsFeedCard;
