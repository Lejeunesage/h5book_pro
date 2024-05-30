// src/components/layout/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
// import Icon from "../icons/Icon";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const sidebarClass = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-56 mt-[4.3em] h-screen overflow-y-auto bg-white shadow transition-transform duration-300 ease-in-out ${sidebarClass}`}
    >
      <div className="py-4 px-3">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 text-base font-normal rounded-lg hover:bg-red-400 hover:text-white  ${
                  isActive ? "bg-red-400 text-white" : "text-gray-900"
                }`
              }
            >
              {/* <Icon name="square" /> */}
              <span className="ml-3">Tableau de bord</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center p-2 text-base font-normal rounded-lg hover:bg-red-400 hover:text-white  ${
                  isActive ? "bg-red-400 text-white" : "text-gray-900"
                }`
              }
            >
              {/* <Icon name="engrenage" />  */}
              <span className="ml-3">Administration</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reporting"
              className={({ isActive }) =>
                `flex items-center p-2 text-base font-normal rounded-lg hover:bg-red-400 hover:text-white  ${
                  isActive ? "bg-red-400 text-white" : "text-gray-900"
                }`
              }
            >
             
              <span className="ml-3">Reporting</span>
            </NavLink>
          </li>

      
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
