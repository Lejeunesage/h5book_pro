import React, { useState } from 'react';
import { Story } from '../../models/socialNetwork/Story';
import StoriesCard from './StoriesCard';
import StoryModal from './StoryModal';

interface StoriesListProps {
  stories: Story[];
}

const StoriesList: React.FC<StoriesListProps> = ({ stories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStories, setModalStories] = useState<Story[]>([]);

  const handleStoryClick = (story: Story, index: number) => {
    setIsModalOpen(true);
    setModalStories(stories.slice(index));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalStories([]);
  };

  return (
    <div>
      <div className=" flex max-w-[34em] overflow-x-hidden space-x-4 pb-4">
        {stories.map((story, index) => (
          <StoriesCard
            key={story.id}
            story={story}
            onClick={() => handleStoryClick(story, index)}
          />
        ))}
      </div>
      {isModalOpen && <StoryModal stories={modalStories} onClose={handleModalClose} />}
    </div>
  );
};

export default StoriesList;