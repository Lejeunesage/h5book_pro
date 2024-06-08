// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/h5.png";
import { RiMenu4Fill } from "react-icons/ri";
import {
  FaFileAlt,
  FaRegBell,
  FaRegMoon,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiMessageCircle,
  FiSettings,
  FiSun,
} from "react-icons/fi";
import { CgProfile, CgUserAdd } from "react-icons/cg";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { MdOutlineContactSupport } from "react-icons/md";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isProfilDropdownOpen, setIsProfilDropdownOpen] =
    useState<boolean>(false);
  const profilDropdownRef = useRef<HTMLDivElement>(null);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profilDropdownRef.current &&
        !profilDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfilDropdownOpen(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profilDropdownRef, userDropdownRef]);

  return (
    <nav className="bg-white dark:bg-bs-dark border-gray-200 border-b shadow px-4 py-3 top-0 z-50 sticky">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center gap-5">
          <div className="flex mr-5">
            <button
              onClick={toggleSidebar}
              className="p-2 text-bs-blue dark:text-bs-blue hover:text-gray-900 dark:hover:text-white"
            >
              <RiMenu4Fill className="w-6 h-8  text-bs-blue dark:text-bs-blue cursor-pointer" />
            </button>

            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
          </div>

          <div className="flex items-center border  text-bs-blue bg-bs-light dark:bg-bs-douce dark:border-gray-600 rounded-lg px-3 py-2 w-64">
            <FaSearch className="text-gray-500 dark:text-gray-400 mr-2 cursor-pointer" />
            <input
              type="text"
              className="flex-grow outline-none bg-bs-light dark:bg-bs-douce dark:text-bs-blue"
              placeholder="Rechercher amis..."
            />
          </div>

          <FiHome className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />

          <div className="relative" ref={userDropdownRef}>
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <CgUserAdd className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
            </button>

            {isUserDropdownOpen && (
              <div className="absolute w-[26rem] left-2 mt-2 py-1 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                <div className="block  px-4 py-2 text-lg font-bold text-gray-700 border-b dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                  <h1>Demande d'amis</h1>
                </div>
                <div className="flex px-3 py-2 m-2 justify-between hover:bg-bs-fond cursor-pointer">
                  <div className="flex gap-2 justify-center items-center">
                    <img
                      src="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg"
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold">Paige Turner</h1>
                      <span className="text-[.7rem]">01 ami(e)(s) en commun</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 text-[.8rem]">
                    <button className=" border py-1 px-3 rounded-md bg-bs-blue text-white font-semibold hover:text-bs-blue hover:bg-white hover:border-bs-blue">Confirmer</button>
                    <button className=" border py-1 px-3 rounded-md bg-white text-red-500 font-semibold hover:text-white hover:bg-red-500 border-red-500">Supprimer</button>                 
                  </div>
                </div>

                
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 px-6 py-2 border rounded-md bg-bs-light dark:bg-bs-douce  dark:border-gray-600">
            <FaFileAlt className="w-5 h-5 text-bs-blue dark:text-bs-blue" />
            <span className="font-semibold text-lg text-bs-blue dark:text-bs-blue">
              326
            </span>
          </div>
          <div className="flex items-center gap-3 px-6 py-2 border rounded-md  bg-bs-light dark:bg-bs-douce dark:border-gray-600">
            <FaUserFriends className="w-5 h-5 text-bs-blue dark:text-bs-blue" />
            <span className="font-semibold text-lg text-bs-blue dark:text-bs-blue">
              2456
            </span>
          </div>
          <FiMessageCircle className="w-4 h-4 text-bs-blue dark:text-bs-blue cursor-pointer" />
          <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
            {isDarkMode ? (
              <FiSun className="w-4 h-4 text-bs-blue dark:text-bs-blue" />
            ) : (
              <FaRegMoon className="w-4 h-4 text-bs-blue dark:text-bs-blue" />
            )}
          </div>
          <FaRegBell className="w-4 h-4 text-bs-blue dark:text-bs-blue " />
          <div className="relative" ref={profilDropdownRef}>
            <div className="flex justify-center items-center min-w-48 max-w-56">
              <button
                onClick={() => setIsProfilDropdownOpen(!isProfilDropdownOpen)}
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <img
                  src="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </button>
              <div className="flex flex-col text-sm text-gray-600 dark:text-gray-300">
                <span>Josephin Water</span>
                <span className="text-[12px]">Actif maintenant</span>
              </div>
            </div>

            {isProfilDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 py-1 bg-white dark:bg-bs-dark rounded-md shadow-lg">
                <div className="block px-4 py-2 text-lg font-bold text-gray-700 border-b dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <h1>Profile</h1>
                </div>
                <Link
                  to="/user-profile"
                  className="block flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <CgProfile className="w-6 h-6" />
                  Profile
                </Link>
                <Link
                  to="/communications"
                  className="block flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <FiSettings className="w-6 h-6" />
                  Paramètres
                </Link>
                <Link
                  to="/communications"
                  className="block flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <MdOutlineContactSupport className="w-6 h-6" />
                  Support
                </Link>
                <Link
                  to="/logout"
                  className="block flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <FiLogOut className="w-6 h-6" />
                  Déconnexion
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
