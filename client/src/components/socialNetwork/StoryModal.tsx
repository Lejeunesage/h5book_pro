import React, { useEffect, useRef, useState } from 'react';
import { Story } from '../../models/socialNetwork/Story';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface StoryModalProps {
  stories: Story[];
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ stories, onClose }) => {
  const [storyIndex, setStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleTimer = () => {
      timerRef.current = setTimeout(() => {
        setStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
      }, 5000);
    };

    handleTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [stories, storyIndex]);

  useEffect(() => {
    if (storyIndex === 0 && stories.length === 0) {
      onClose();
    }
  }, [storyIndex, stories, onClose]);

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleStoryClick = (index: number) => {
    setStoryIndex(index);
  };

  if (stories.length === 0) {
    return null;
  }

  const currentStory = stories[storyIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
      <div className="flex">
        {/* Liste des stories */}
        <div className="w-20 h-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-l-lg overflow-y-auto">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`w-16 h-16 rounded-full overflow-hidden border-2 mx-auto my-2 cursor-pointer ${
                index === storyIndex ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleStoryClick(index)}
            >
              {story.media ? (
                <img
                  src={story.media}
                  alt={`${story.user.name}'s Story`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">{story.user.name.charAt(0)}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Story sélectionnée */}
        <div
          className="relative w-96 max-h-full mx-4 rounded-lg overflow-hidden shadow-lg"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={onClose}
          >
            <IoCloseCircleOutline />
          </button>
          {currentStory.media ? (
            <img
              src={currentStory.media}
              alt={`${currentStory.user.name}'s Story`}
              className="max-w-full max-h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">{currentStory.user.name.charAt(0)}</span>
            </div>
          )}
          {!isPaused && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {storyIndex + 1}/{stories.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryModal;