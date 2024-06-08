import React from 'react';
import { NewsFeedItem } from '../../models/socialNetwork/NewsFeedItem';
import CommentSection from './CommentSection';

interface NewsFeedCardProps {
  newsFeedItem: NewsFeedItem;
}

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ newsFeedItem }) => {
  if (!newsFeedItem) {
    return null; // Ne rien rendre si newsFeedItem est undefined
  }

  const { author, authorImage, title, content, imageUrl } = newsFeedItem;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        {authorImage && (
          <img
            src={authorImage}
            alt={author}
            className="w-10 h-10 rounded-full mr-4"
          />
        )}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{author}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-gray-800 dark:text-gray-200 mb-4">{content}</p>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded mb-4"
        />
      )}
      <CommentSection newsFeedItem={newsFeedItem} />
    </div>
  );
};

export default NewsFeedCard;
