// NewsFeedList.tsx
import React from 'react';
import NewsFeedCard from './NewsFeedCard';
import { NewsFeedItem } from '../../models/socialNetwork/NewsFeedItem';

interface NewsFeedListProps {
  newsFeedItems: NewsFeedItem[];
}

const NewsFeedList: React.FC<NewsFeedListProps> = ({ newsFeedItems }) => {
  return (
    <div className="space-y-4">
      {newsFeedItems.map((newsFeedItems, index) => (
        <NewsFeedCard key={index} newsFeedItems={newsFeedItems} />
      ))}
    </div>
  );
};

export default NewsFeedList;
