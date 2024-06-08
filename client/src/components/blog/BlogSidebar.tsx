import React from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBriefcase } from 'react-icons/fa';
import { HiOutlineChat } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';

interface SidebarProps {
  isOpen: boolean;
}

const BlogSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const sidebarClass = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <aside
      className={`fixed top-0 left-12 z-40 w-20 mt-28 h-screen overflow-y-auto rounded-md bg-white shadow transition-transform duration-300 ease-in-out ${sidebarClass}`}
    >
      <div className="py-4 px-3">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-bs-cyan hover:text-white text-gray-900 relative group"
            >
              <FaBlog className="w-4 h-4" />
              <span className="absolute left-full ml-2 whitespace-nowrap bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block">Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-bs-cyan hover:text-white text-gray-900 relative group"
            >
              <FaBlog className="w-4 h-4" />
              <span className="absolute left-full ml-2 whitespace-nowrap bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block">Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-bs-cyan hover:text-white text-gray-900 relative group"
            >
              <FaBriefcase className="w-4 h-4" />
              <span className="absolute left-full ml-2 whitespace-nowrap bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-bs-cyan hover:text-white text-gray-900 relative group"
            >
              <HiOutlineChat className="w-5 h-5" />
              <span className="absolute left-full ml-2 whitespace-nowrap bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block">Chat</span>
            </Link>
          </li>
          <li>
            <Link
              to="/gaming"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-bs-cyan hover:text-white text-gray-900 relative group"
            >
              <IoGameController className="w-5 h-5" />
              <span className="absolute left-full ml-2 whitespace-nowrap bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block">Gaming</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
