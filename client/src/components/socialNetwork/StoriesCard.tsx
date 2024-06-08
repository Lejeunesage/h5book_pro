import React from 'react';
import { Story } from '../../models/socialNetwork/Story';

interface StoriesCardProps {
  story: Story;
  onClick: () => void;
}

const StoriesCard: React.FC<StoriesCardProps> = ({ story, onClick }) => {
  return (
    <div className="text-center cursor-pointer" onClick={onClick}>
      <div className="w-24 h-32 rounded-md overflow-hidden border-2 border-red-500">
        {story.media ? (
          <img src={story.media} alt={`${story.user.name}'s Story`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">{story.user.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <span className=" bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs font-bold">
        {story.user.name}
      </span>
    </div>
  );
};

export default StoriesCard;