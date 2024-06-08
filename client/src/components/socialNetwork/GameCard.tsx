import React from 'react';
import { Game } from '../../models/socialNetwork/Game';

interface GameCardProps {
  games: Game[];
}

const GameCard: React.FC<GameCardProps> = ({ games }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Games</h2>
      {games.map((game) => (
        <div key={game.id} className="mb-4">
          <h3 className="text-lg font-bold dark:text-white">{game.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
