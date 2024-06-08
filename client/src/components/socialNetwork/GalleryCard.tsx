import React from 'react';
import { Photo } from '../../models/socialNetwork/Photo';

interface GalleryCardProps {
  photos: Photo[];
}

const GalleryCard: React.FC<GalleryCardProps> = ({ photos }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={photo.description}
            className="w-full h-32 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCard;
