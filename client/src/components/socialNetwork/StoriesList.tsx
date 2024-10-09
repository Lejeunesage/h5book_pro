// components/StoriesList.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Story } from '../../models/socialNetwork/Story';
import StoriesCard from './StoriesCard';
import StoryModal from './StoryModal';
import AddStoryModal from './AddStoryModal';
import { FaPlus, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const StoriesList: React.FC<{ stories: Story[], userId: string, userName: string }> = ({ stories: initialStories, userId, userName }) => {
  const [stories, setStories] = useState(initialStories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [initialStoryIndex, setInitialStoryIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const storiesContainerRef = useRef<HTMLDivElement>(null);

  const checkForOverflow = () => {
    if (storiesContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = storiesContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkForOverflow();
    window.addEventListener('resize', checkForOverflow);
    return () => window.removeEventListener('resize', checkForOverflow);
  }, [stories]);

  const handleStoryClick = (index: number) => {
    setInitialStoryIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddStory = (newStory: Story) => {
    setStories(prevStories => [newStory, ...prevStories]);
  };

  const scrollRight = () => {
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(checkForOverflow, 400);
    }
  };

  const scrollLeft = () => {
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(checkForOverflow, 400);
    }
  };

  return (
    <div className="relative">
      {showLeftArrow && (
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10">
          <FaAngleDoubleLeft className="h-3 w-3 text-gray-600" />
        </button>
      )}
      <div 
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide" 
        ref={storiesContainerRef}
        onScroll={checkForOverflow}
      >
        <div className="flex-shrink-0 w-[8.9em] h-40 rounded-md border-2 cursor-pointer flex items-center justify-center" onClick={() => setIsAddModalOpen(true)}>
          <FaPlus className="text-4xl text-gray-500" />
        </div>
        {stories.map((story, index) => (
          <StoriesCard
            key={story.id}
            story={story}
            onClick={() => handleStoryClick(index)}
            containerClassName="mb-4 " 
            imageContainerClassName="w-[8.9em] h-40" 
            mediaClassName="w-full h-full object-cover" 
            textClassName="mt-2 text-xs font-bold text-center"
          />
        ))}

      </div>
      {showRightArrow && (
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10">
          <FaAngleDoubleRight className="h-3 w-3 text-gray-600" />
        </button>
      )}
      {isModalOpen && (
        <StoryModal
          stories={stories}
          onClose={handleModalClose}
          initialStoryIndex={initialStoryIndex}
        />
      )}
      {isAddModalOpen && (
        <AddStoryModal
          onClose={() => setIsAddModalOpen(false)}
          onAddStory={handleAddStory}
          userId={userId}
          userName={userName}
        />
      )}
    </div>
  );
};

export default StoriesList;