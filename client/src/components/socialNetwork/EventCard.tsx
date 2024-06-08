import React from 'react';
import { Event } from '../../models/socialNetwork/Event';

interface EventCardProps {
  events: Event[];
}

const EventCard: React.FC<EventCardProps> = ({ events }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold dark:text-white mb-4">Events</h2>
      {events.map((event) => (
        <div key={event.id} className="mb-4">
          <h3 className="text-lg font-bold dark:text-white">{event.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
