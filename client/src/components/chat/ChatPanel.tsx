import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; 

interface Message {
  text: string;
  fromUser: boolean;
}

const ChatPanel: React.FC = () => {
  const [userMessages, setUserMessages] = useState<Message[]>([]); 
  const [assistantMessages, setAssistantMessages] = useState<Message[]>([]); 
  const [inputMessage, setInputMessage] = useState(''); 
  const inputRef = useRef<HTMLInputElement>(null); 

  useEffect(() => {
    
    const panelDiv = document.getElementById('chat-panel-div');
    if (panelDiv) {
      panelDiv.scrollTop = panelDiv.scrollHeight;
    }
  }, [userMessages, assistantMessages]);

  
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  
  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setUserMessages([...userMessages, { text: inputMessage, fromUser: true }]);
      setInputMessage('');
      // Simulation de la réponse de l'assistant après un court délai
      setTimeout(() => {
        setAssistantMessages([...assistantMessages, { text: "Je suis un message de réponse de l'assistant!", fromUser: false }]);
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-16 right-4 bg-white p-2 shadow-lg shadow-red-400 rounded-lg w-80  mb-5 overflow-y-hidden z-50 transition-all duration-500">
      
      <div className="sticky top-0 bg-red-400 text-white rounded-lg p-4 flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Chat</h2>
       
      </div>
     
      <div id="chat-panel-div" className="overflow-auto h-64 p-4 ">
        {userMessages.map((message, index) => (
          <div key={index} className="flex justify-end mb-2">
            <div className="p-2 bg-blue-200 rounded-lg">
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        {assistantMessages.map((message, index) => (
          <div key={index} className="flex justify-start mb-2">
            <div className="p-2 bg-gray-200 rounded-lg">
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="sticky -bottom-2 bg-white p-4 flex items-center ">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 mr-2"
          placeholder="Votre message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
