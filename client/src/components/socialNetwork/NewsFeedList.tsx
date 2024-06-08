// NewsFeedList.tsx
import React from 'react';
import NewsFeedCard from './NewsFeedCard';
import { NewsFeedItem } from '../../models/socialNetwork/NewsFeedItem';

interface NewsFeedListProps {
  newsFeedItems: NewsFeedItem[];
}

const NewsFeedList: React.FC<NewsFeedListProps> = ({ newsFeedItems }) => {

  if (!newsFeedItems || newsFeedItems.length === 0) {
    return <p>No news items available.</p>;
  }
  return (
    <div className="space-y-4">
      {newsFeedItems.map((newsFeedItems, index) => (
        <NewsFeedCard key={index} newsFeedItem={newsFeedItems} />
      ))}
    </div>
  );
};

export default NewsFeedList;
