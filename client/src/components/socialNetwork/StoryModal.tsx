// components/StoryModal.tsx
import React, { useEffect, useRef, useState } from "react";
import { Story } from "../../models/socialNetwork/Story";
import { IoCloseCircleOutline } from "react-icons/io5";
import StoriesCard from "./StoriesCard";
import { timeAgo } from "../../utils/timeAgo";

interface StoryModalProps {
  stories: Story[];
  onClose: () => void;
  initialStoryIndex?: number;
}

const StoryModal: React.FC<StoryModalProps> = ({
  stories,
  onClose,
  initialStoryIndex = 0,
}) => {
  const [storyIndex, setStoryIndex] = useState(initialStoryIndex);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (stories.length === 0) return;

    const handleTimer = () => {
      const currentStory = stories[storyIndex];
      const totalMedia = currentStory.mediaList.length;

      if (!isPaused) {
        if (mediaIndex < totalMedia - 1) {
          timerRef.current = setTimeout(() => {
            setMediaIndex((prev) => prev + 1);
          }, 5000);
        } else {
          timerRef.current = setTimeout(() => {
            if (storyIndex < stories.length - 1) {
              setStoryIndex((prev) => prev + 1);
              setMediaIndex(0);
            } else {
              onClose();
            }
          }, 5000);
        }
      }
    };

    handleTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [stories, storyIndex, mediaIndex, isPaused]);

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleStoryCardClick = (index: number) => {
    setStoryIndex(index);
    setMediaIndex(0);
  };

  if (stories.length === 0) return null;

  const currentStory = stories[storyIndex];
  const currentMedia = currentStory.mediaList[mediaIndex];
  const authorName = `${currentStory.user.firstName} ${currentStory.user.lastName}`;
  const timeAgoText = timeAgo(currentStory.createdAt);

  return (
    <div className="fixed inset-0 p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-center z-50">
      <div className="relative w-full h-full flex justify-between items-center border rounded-md shadow-lg overflow-hidden">
        <button
          className="absolute top-4 right-4 text-white text-3xl z-10"
          onClick={onClose}
        >
          <IoCloseCircleOutline />
        </button>

        <div className="flex w-full h-full">
          <div className="overflow-x-auto bg-white flex flex-col w-1/4 p-4">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="flex flex-col mb-2" 
                onClick={() => handleStoryCardClick(index)}
              >
                <div className="flex items-center gap-5">
                  <StoriesCard
                    story={story}
                    onClick={() => {}}
                    containerClassName={`transition-all duration-300 w-[5em] h-24 ${
                      index === storyIndex
                        ? "border-4 border-blue-500 rounded-lg"
                        : ""
                    }`}
                    imageContainerClassName="w-[5em] h-24 rounded-md"
                    mediaClassName="w-full h-full object-cover"
                    textClassName="text-xs font-bold text-center mt-1"
                  />

                  <div className="flex flex-col text-black mb-1">
                    <span className="font-bold">{`${story.user.firstName} ${story.user.lastName}`}</span>
                    <span className="text-sm text-gray-500 ">
                      il y a {timeAgoText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-full w-3/4 flex items-center justify-center pt-4">
            <div
              className="relative w-96 h-[500px] mx-4 rounded-lg overflow-hidden shadow-lg"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {/* Affichage conditionnel pour chaque type de média */}
              {currentMedia.type === "image" && (
                <img
                  src={currentMedia.url}
                  alt={`Story by ${authorName}`}
                  className="w-full h-full object-cover"
                />
              )}
              {currentMedia.type === "text" && (
                <div
                  style={{
                    backgroundColor: currentMedia.backgroundColor || "white",
                    color: currentMedia.textColor || "black",
                    fontFamily: currentMedia.fontFamily || "Arial",
                  }}
                  className="w-full h-full flex items-center justify-center p-4"
                >
                  <span className="text-lg">{currentMedia.content}</span>
                </div>
              )}
              {currentMedia.type === "video" && (
                <video
                  src={currentMedia.url}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              )}
              {!isPaused && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                  {storyIndex + 1}/{stories.length} | {mediaIndex + 1}/
                  {currentStory.mediaList.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
