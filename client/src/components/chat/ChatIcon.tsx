import React from 'react';
import { FaComments } from 'react-icons/fa'; // Importez l'icône de chat de react-icons/fa

interface ChatIconProps {
  toggleChat: () => void;
}

const ChatIcon: React.FC<ChatIconProps> = ({ toggleChat }) => {
  return (
    <button onClick={toggleChat} className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg z-50">
      <FaComments className="h-6 w-6" />
    </button>
  );
};

export default ChatIcon;