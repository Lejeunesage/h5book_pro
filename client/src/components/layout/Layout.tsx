import React, { useState, useEffect } from 'react';
import Header from './Header';
import ChatIcon from '../chat/ChatIcon'; 
import ChatPanel from '../chat/ChatPanel'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isChatOpen, setIsChatOpen] = useState(false); 

  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && !isSidebarOpen) {
        setIsSidebarOpen(true);
      } else if (window.innerWidth <= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  
  const marginLeftClass = isSidebarOpen ? "md:ml-36" : "ml-0";

  return (
    <div className="flex flex-col min-h-screen  bg-bs-fond dark:bg-bs-darkfond">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      {/* <ChatIcon toggleChat={() => setIsChatOpen(!isChatOpen)} /> */}
      
      {isChatOpen && <ChatPanel />}
      <main className={`${marginLeftClass} flex-grow py-7 px-5 transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
