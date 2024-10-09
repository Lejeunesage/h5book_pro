import React, { useState } from 'react';
import { Story, Media } from '../../models/socialNetwork/Story';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface AddStoryModalProps {
  onClose: () => void;
  onAddStory: (story: Story) => void;
  userId: string;
  userName: string;
}

const AddStoryModal: React.FC<AddStoryModalProps> = ({ onClose, onAddStory, userId, userName }) => {
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'text'>('image');
  const [mediaContent, setMediaContent] = useState('');
  const [textBackgroundColor, setTextBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMedia: Media = {
      type: mediaType,
      ...(mediaType === 'text' 
        ? { 
            content: mediaContent,
            backgroundColor: textBackgroundColor,
            textColor: textColor,
            fontFamily: fontFamily
          } 
        : { url: mediaContent }
      )
    };

    const newStory: Story = {
      id: Date.now().toString(), // Use a more robust ID generation in production
      user: { id: userId, name: userName },
      mediaList: [newMedia],
      createdAt: new Date(),
    };

    onAddStory(newStory);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Story</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoCloseCircleOutline size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Media Type</label>
            <select
              className="w-full p-2 border rounded"
              value={mediaType}
              onChange={(e) => setMediaType(e.target.value as 'image' | 'video' | 'text')}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="text">Text</option>
            </select>
          </div>
          {mediaType === 'text' ? (
            <>
              <div className="mb-4">
                <label className="block mb-2">Text Content</label>
                <textarea
                  className="w-full p-2 border rounded"
                  value={mediaContent}
                  onChange={(e) => setMediaContent(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Background Color</label>
                <input
                  type="color"
                  value={textBackgroundColor}
                  onChange={(e) => setTextBackgroundColor(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Text Color</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Font Family</label>
                <select
                  className="w-full p-2 border rounded"
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                >
                  <option value="Arial">Arial</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                </select>
              </div>
            </>
          ) : (
            <div className="mb-4">
              <label className="block mb-2">{mediaType === 'image' ? 'Image URL' : 'Video URL'}</label>
              <input
                type="url"
                className="w-full p-2 border rounded"
                value={mediaContent}
                onChange={(e) => setMediaContent(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStoryModal;