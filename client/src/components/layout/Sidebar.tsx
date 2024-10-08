import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaBlog, FaBriefcase } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoGameController, IoPower } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const sidebarClass = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <aside
      className={`fixed top-0 left-0 h-[85%]  z-40 mt-20 overflow-y-auto    pl-12  transition-transform duration-300 ease-in-out ${sidebarClass}`}
    >
      <div className="bg-white h-full py-5 shadow rounded-md dark:bg-bs-dark  flex flex-col justify-between">
        <div className="py-4 px-5">
          <ul className="space-y-10">
            <li className="group relative">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal rounded-lg bg-bs-light dark:bg-bs-douce hover:bg-bs-blue hover:text-white ${
                    isActive
                      ?"bg-bs-blue text-bs-dark dark:text-bs-light"
                      : "text-bs-blue dark:text-bs-blue"
                  }`
                }
              >
                <CgMenuGridR className="w-6 h-6" />
              </NavLink>
              {/* <span className="tooltip group-hover:opacity-100">Tableau de bord</span> */}
            </li>
            <li className="group relative">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal rounded-lg bg-bs-light dark:bg-bs-douce hover:bg-bs-blue hover:text-white ${
                    isActive
                      ? "bg-bs-blue text-bs-dark dark:text-bs-light"
                      : "text-bs-blue dark:text-bs-blue"
                  }`
                }
              >
                <FaBlog className="w-6 h-6" />
              </NavLink>
              {/* <span className="tooltip group-hover:opacity-100">Blog</span> */}
            </li>
            <li className="group relative">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal rounded-lg bg-bs-light dark:bg-bs-douce hover:bg-bs-blue hover:text-white ${
                    isActive
                      ? "bg-bs-blue text-gray-300 "
                      : "text-bs-blue dark:text-bs-blue"
                  }`
                }
              >
                <FaBriefcase className="w-6 h-6" />
              </NavLink>
              {/* <span className="tooltip group-hover:opacity-100">Portfolio</span> */}
            </li>
            <li className="group relative">
              <NavLink
                to="/chat"
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal rounded-lg bg-bs-light dark:bg-bs-douce hover:bg-bs-blue hover:text-white ${
                    isActive
                      ? "bg-bs-blue text-bs-dark dark:text-bs-light"
                      : "text-bs-blue dark:text-bs-blue"
                  }`
                }
              >
                <HiOutlineChat className="w-6 h-6" />
              </NavLink>
              {/* <span className="tooltip group-hover:opacity-100">Chat</span> */}
            </li>
            <li className="group relative">
              <NavLink
                to="/gaming"
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal rounded-lg bg-bs-light dark:bg-bs-douce hover:bg-bs-blue hover:text-white ${
                    isActive
                      ? "bg-bs-blue text-bs-dark dark:text-bs-light"
                      : "text-bs-blue dark:text-bs-blue"
                  }`
                }
              >
                <IoGameController className="w-6 h-6" />
              </NavLink>
              {/* <span className="tooltip group-hover:opacity-100">Gaming</span> */}
            </li>
          </ul>
        </div>
        <div className="py-4 px-5">
          <ul>
            <li className="group relative">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal rounded-lg bg-bs-light dark:bg-bs-douce hover:bg-bs-blue hover:text-white ${
                    isActive
                      ? "bg-bs-blue text-bs-dark dark:text-bs-light"
                      : "text-bs-blue dark:text-bs-blue"
                  }`
                }
              >
                <IoPower className="w-6 h-6" />
              </NavLink>
              {/* <span className="tooltip group-hover:opacity-100">Gaming</span> */}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
