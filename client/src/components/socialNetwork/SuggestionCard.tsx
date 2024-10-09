import React from 'react';
import Slider from 'react-slick';
import { User } from '../../models/socialNetwork/User';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SuggestionCardProps {
  suggestions: User[];
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestions }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white dark:bg-bs-dark p-6 rounded-lg shadow-lg max-w-96">
        <h2 className="text-xl font-bold dark:text-white mb-4">Suggestions</h2>
        <Slider {...settings}>
          {suggestions.map((user) => (
            <div key={user.id} className="p-4">
              <div className="flex items-center">
                <img
                  src={user.profileImageUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold dark:text-white">{user.username}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuggestionCard;
