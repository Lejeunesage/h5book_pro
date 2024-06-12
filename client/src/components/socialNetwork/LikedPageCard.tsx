import React, { useState, useRef, useEffect } from 'react';
import { FaStar, FaCog } from 'react-icons/fa';
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai';

interface LikedPage {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  followers: string;
}

interface LikedPageCardProps {
  likedPages: LikedPage[];
}

const LikedPageCard: React.FC<LikedPageCardProps> = ({ likedPages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleFavorite = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Liked Pages</h2>
      <button
        onClick={toggleModal}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <FaCog className="text-gray-600 dark:text-gray-400" />
      </button>
      {likedPages.map((page) => (
        <div key={page.id} className="mb-4 flex items-center">
          <img
            src={page.imageUrl}
            alt={page.name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-bold dark:text-white">{page.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{page.description}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{page.followers} followers</p>
          </div>
          <button
            onClick={() => handleFavorite(page.id)}
            className="ml-4 text-gray-600 dark:text-gray-400 hover:text-yellow-500"
          >
            {favorites.includes(page.id) ? <AiFillStar /> : <FaStar />}
          </button>
        </div>
      ))}
      {isModalOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-64 z-50" ref={modalRef}>
          <h3 className="text-lg font-bold dark:text-white mb-2">Settings</h3>
          <ul>
            <li className="mb-2">
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                Afficher tous
              </button>
            </li>
            <li className="mb-2">
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <AiOutlineSearch className="inline mr-2" />
                Recherche
              </button>
            </li>
            <li>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                Paramètres
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LikedPageCard;
