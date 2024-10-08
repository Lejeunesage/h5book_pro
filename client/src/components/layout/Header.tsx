import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Fouter from './Footer';

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <Fouter/>
    </>
  );
};

export default Header;
