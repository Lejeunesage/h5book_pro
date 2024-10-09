// components/StoriesCard.tsx
import React from 'react';
import { Story } from '../../models/socialNetwork/Story';
import { timeAgo } from '../../utils/timeAgo'; 

interface StoriesCardProps {
  story: Story;
  onClick: () => void;
  containerClassName?: string;
  imageContainerClassName?: string;
  mediaClassName?: string; // Renommé pour refléter l'utilisation pour tous les types
  textClassName?: string;
}

const StoriesCard: React.FC<StoriesCardProps> = ({
  story,
  onClick,
  containerClassName,
  imageContainerClassName,
  mediaClassName, // Utilisé pour tous les types de média
  textClassName,
}) => {
  return (
    <div className={`cursor-pointer ${containerClassName}`} onClick={onClick}>
      <div className={`${imageContainerClassName} flex items-center justify-center`}>
        {/* Vérification du type du premier média */}
        {story.mediaList[0].type === 'image' && (
          <img src={story.mediaList[0].url} alt="Story" className={`rounded-md ${mediaClassName}`} />
        )}
        {story.mediaList[0].type === 'text' && (
          <div 
            className={`rounded-md flex items-center justify-center ${mediaClassName}`} 
            style={{
              backgroundColor: story.mediaList[0].backgroundColor || 'transparent', 
              color: story.mediaList[0].textColor || 'black', 
              fontFamily: story.mediaList[0].fontFamily || 'Arial', 
              textAlign: 'center'
            }}>
            <p>{story.mediaList[0].content}</p>
          </div>
        )}
        {story.mediaList[0].type === 'video' && (
          <video className={`rounded-md ${mediaClassName}`} controls>
            <source src={story.mediaList[0].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className={textClassName}>
        <div className="font-bold text-sm">
          {story.user.firstName} {story.user.lastName}
        </div>
        <div className="text-xs">il y a {timeAgo(new Date(story.createdAt))}</div>
      </div>
    </div>
  );
};

export default StoriesCard;
