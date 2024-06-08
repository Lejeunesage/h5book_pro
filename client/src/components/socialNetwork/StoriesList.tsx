import React, { useState, useRef } from 'react';
import { Story } from '../../models/socialNetwork/Story';
import StoriesCard from './StoriesCard';
import StoryModal from './StoryModal';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

interface StoriesListProps {
  stories: Story[];
}

const StoriesList: React.FC<StoriesListProps> = ({ stories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStories, setModalStories] = useState<Story[]>([]);
  const storiesContainerRef = useRef<HTMLDivElement>(null);

  const handleStoryClick = (story: Story, index: number) => {
    setIsModalOpen(true);
    setModalStories(stories.slice(index));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalStories([]);
  };

  const scrollRight = () => {
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  let isDragging = false;
  let startPosition = 0;
  let scrollPosition = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    startPosition = e.pageX - (storiesContainerRef.current?.offsetLeft || 0);
    scrollPosition = storiesContainerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (storiesContainerRef.current?.offsetLeft || 0);
    const walk = x - startPosition;
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollLeft = scrollPosition - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging = true;
    startPosition = e.touches[0].pageX - (storiesContainerRef.current?.offsetLeft || 0);
    scrollPosition = storiesContainerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (storiesContainerRef.current?.offsetLeft || 0);
    const walk = x - startPosition;
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollLeft = scrollPosition - walk;
    }
  };

  const handleTouchEnd = () => {
    isDragging = false;
  };

  return (
    <div className="relative">
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
      >
        <FaAngleDoubleLeft className="h-6 w-6 text-gray-600" />
      </button>
      <div 
        className="flex max-w-[34em] overflow-x-hidden space-x-4 pb-4"
        ref={storiesContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {stories.map((story, index) => (
          <StoriesCard
            key={story.id}
            story={story}
            onClick={() => handleStoryClick(story, index)}
          />
        ))}
      </div>
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
      >
        <FaAngleDoubleRight className="h-6 w-6 text-gray-600" />
      </button>
      {isModalOpen && <StoryModal stories={modalStories} onClose={handleModalClose} />}
    </div>
  );
};

export default StoriesList;
