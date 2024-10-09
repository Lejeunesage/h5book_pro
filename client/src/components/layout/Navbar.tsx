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
import { CgMenuGridR, CgProfile, CgUserAdd } from "react-icons/cg";
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

  const [isNotifDropdownOpen, setIsNotifDropdownOpen] =
    useState<boolean>(false);
  const notifDropdownRef = useRef<HTMLDivElement>(null);

  const [isMessageDropdownOpen, setIsMessageDropdownOpen] =
    useState<boolean>(false);
  const messageDropdownRef = useRef<HTMLDivElement>(null);

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

      if (
        notifDropdownRef.current &&
        !notifDropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotifDropdownOpen(false);
      }

      if (
        messageDropdownRef.current &&
        !messageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMessageDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profilDropdownRef, userDropdownRef]);

  return (
    <nav className="bg-white dark:bg-bs-dark border-gray-200 border-b shadow px-4 py-3 sm:py-0 md:py-2 top-0 z-50 sticky">
      <div className="flex flex-wrap justify-between gap-5 items-center">
        <div className="flex justify-start items-center gap-5">
          <div className="flex">
            <button
              onClick={toggleSidebar}
              className=" p-2 text-bs-blue dark:text-bs-blue hover:text-gray-900 dark:hover:text-white"
            >
              <RiMenu4Fill className="hidden sm:block md:w-6  md:h-8 text-bs-blue dark:text-bs-blue cursor-pointer" />
            </button>

            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-5 md:h-8" />
            </Link>
          </div>

          <div className="flex items-center border  text-bs-blue bg-bs-light dark:bg-bs-douce dark:border-gray-600 rounded-lg px-3 py-2  h-8 text-sm">
            <FaSearch className="text-gray-500 dark:text-gray-400 mr-2 cursor-pointer" />
            <input
              type="text"
              className=" w-24 lg:w48 outline-none bg-bs-light dark:bg-bs-douce dark:text-bs-blue placeholder:truncate"
              placeholder="Rechercher amis..."
            />
          </div>

          <div className=" hidden sm:block">
            <FiHome className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
          </div>

          <div className="relative hidden sm:block" ref={userDropdownRef}>
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center justify-center p-2  rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <CgUserAdd className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
            </button>

            {isUserDropdownOpen && (
              <div className="absolute w-[26rem] left-2 top-10 py-1 bg-white dark:bg-bs-dark rounded-md shadow-lg">
                <div className="block  px-4 py-2 text-lg font-bold text-gray-700 border-b dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                  <h1>Demande d'amis</h1>
                </div>
                <div className="flex flex-col gap-2 overflow-x-auto max-h-56">
                  <div className="flex px-5 py-1.5 justify-between gap-5 hover:bg-bs-fond dark:hover:bg-bs-darkfond  cursor-pointer">
                    {" "}
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg"
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold">Paige Turner</h1>
                        <span className="text-[.7rem]">
                          01 ami(s) en commun
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-[.8rem]">
                      <button className=" border py-1 px-3 rounded-md bg-bs-blue text-white font-semibold hover:text-bs-blue hover:bg-white hover:border-bs-blue">
                        Confirmer
                      </button>
                      <button className=" border py-1 px-3 rounded-md bg-white text-red-500 font-semibold hover:text-white hover:bg-red-500 border-red-500">
                        Supprimer
                      </button>
                    </div>
                  </div>
                  <div className="flex px-5 py-1.5 justify-between gap-5 hover:bg-bs-fond dark:hover:bg-bs-darkfond  cursor-pointer">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg"
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold">Paige Turner</h1>
                        <span className="text-[.7rem]">
                          01 ami(s) en commun
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-[.8rem]">
                      <button className=" border py-1 px-3 rounded-md bg-bs-blue text-white font-semibold hover:text-bs-blue hover:bg-white hover:border-bs-blue">
                        Confirmer
                      </button>
                      <button className=" border py-1 px-3 rounded-md bg-white text-red-500 font-semibold hover:text-white hover:bg-red-500 border-red-500">
                        Supprimer
                      </button>
                    </div>
                  </div>
                  <div className="flex px-5 py-1.5 justify-between gap-5 hover:bg-bs-fond dark:hover:bg-bs-darkfond  cursor-pointer">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg"
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold">Paige Turner</h1>
                        <span className="text-[.7rem]">
                          01 ami(s) en commun
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-[.8rem]">
                      <button className=" border py-1 px-3 rounded-md bg-bs-blue text-white font-semibold hover:text-bs-blue hover:bg-white hover:border-bs-blue">
                        Confirmer
                      </button>
                      <button className=" border py-1 px-3 rounded-md bg-white text-red-500 font-semibold hover:text-white hover:bg-red-500 border-red-500">
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 ">
          <div className="hidden lg:flex items-center gap-3 px-6 py-2 border rounded-md bg-bs-light dark:bg-bs-douce  dark:border-gray-600">
            <FaFileAlt className="w-5 h-5 text-bs-blue dark:text-bs-blue" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:flex-row">
              <span className="hidden md:flex  font-semibold text-bs-blue dark:text-bs-blue">
                326
              </span>
              <span className="hidden 2xl:flex  text-bs-blue dark:text-bs-blue text-sm">
                publication(s)
              </span>
            </div>
          </div>

          <div className="hidden xl:flex flex-wrap items-center gap-3 px-6 py-2 border rounded-md  bg-bs-light dark:bg-bs-douce dark:border-gray-600">
            <FaUserFriends className="w-5 h-5 text-bs-blue dark:text-bs-blue" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:flex-row">
              <span className="hidden md:flex font-semibold  text-bs-blue dark:text-bs-blue">
                2456
              </span>
              <span className="hidden 2xl:flex text-bs-blue dark:text-bs-blue text-sm">
                ami(s)
              </span>
            </div>
          </div>

          <div className="relative mt-2 hidden sm:block" ref={messageDropdownRef}>
            <button
              className="cursor-pointer"
              onClick={() => setIsMessageDropdownOpen(!isMessageDropdownOpen)}
            >
              <FiMessageCircle className="w-4 h-4 text-bs-blue dark:text-bs-blue font-bold" />
              <span className="absolute -top-1.5 left-1.5 text-[10px] bg-green-500 text-white font-bold w-4 h-4 flex justify-center items-center rounded-full">
                2
              </span>
            </button>

            {isMessageDropdownOpen && (
              <div className="absolute w-[26rem] right-2 top-10 py-1 bg-white dark:bg-bs-dark rounded-md shadow-lg">
                <div className="block  px-4 py-2 text-lg font-bold text-gray-700 border-b dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                  <h1>Demande d'amis</h1>
                </div>
                <div className="flex flex-col gap-2 overflow-x-auto max-h-56">
                  <div className="flex px-5 py-1.5 justify-between gap-5 hover:bg-bs-fond dark:hover:bg-bs-darkfond  cursor-pointer">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg"
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold">Paige Turner</h1>
                        <span className="text-[.7rem]">
                          01 ami(s) en commun
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-[.8rem]">
                      <button className=" border py-1 px-3 rounded-md bg-bs-blue text-white font-semibold hover:text-bs-blue hover:bg-white hover:border-bs-blue">
                        Confirmer
                      </button>
                      <button className=" border py-1 px-3 rounded-md bg-white text-red-500 font-semibold hover:text-white hover:bg-red-500 border-red-500">
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
            {isDarkMode ? (
              <FiSun className="w-4 h-4 text-bs-blue dark:text-bs-blue" />
            ) : (
              <FaRegMoon className="w-4 h-4 text-bs-blue dark:text-bs-blue" />
            )}
          </div>

          
          <div className="relative mt-2 hidden sm:block" ref={notifDropdownRef}>
            <button
              className="cursor-pointer"
              onClick={() => setIsNotifDropdownOpen(!isNotifDropdownOpen)}
            >
              <FaRegBell className="w-4 h-4 text-bs-blue dark:text-bs-blue " />
              <span className="absolute -top-1.5 left-1.5 text-[10px] bg-red-500 text-white font-bold w-4 h-4 flex justify-center items-center rounded-full">
                2
              </span>
            </button>

            {isNotifDropdownOpen && (
              <div className="absolute w-[26rem] right-2 top-10 py-1 bg-white dark:bg-bs-dark rounded-md shadow-lg">
                <div className="block  px-4 py-2 text-lg font-bold text-gray-700 border-b dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                  <h1>Demande d'amis</h1>
                </div>
                <div className="flex flex-col gap-2 overflow-x-auto max-h-56">
                  <div className="flex px-5 py-1.5 justify-between gap-5 hover:bg-bs-fond dark:hover:bg-bs-darkfond  cursor-pointer">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg"
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold">Paige Turner</h1>
                        <span className="text-[.7rem]">
                          01 ami(s) en commun
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-[.8rem]">
                      <button className=" border py-1 px-3 rounded-md bg-bs-blue text-white font-semibold hover:text-bs-blue hover:bg-white hover:border-bs-blue">
                        Confirmer
                      </button>
                      <button className=" border py-1 px-3 rounded-md bg-white text-red-500 font-semibold hover:text-white hover:bg-red-500 border-red-500">
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden cursor-pointer">
            <CgMenuGridR className="w-5 h-5 text-bs-blue dark:text-bs-blue" />
          </div>


          <div
            className="relative cursor-pointer mr-5 hidden sm:block"
            ref={profilDropdownRef}
            onClick={() => setIsProfilDropdownOpen(!isProfilDropdownOpen)}
          >
            <div className="flex justify-center items-center">
              <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                <img
                  src="https://cdn.leonardo.ai/users/802f37dd-c9b1-4c49-9df7-8483e4db2cda/generations/42b7f810-1af2-47f1-949a-1d674c51daa0/variations/Default_the_boy_with_the_glassesthe_girl_with_middle_long_hair_1_42b7f810-1af2-47f1-949a-1d674c51daa0_0.jpg?w=512"
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </button>

              <div className="hidden md:flex flex-col text-sm text-gray-600 dark:text-gray-300 max-w-56">
                <span className="turuncate">Josephin Walter</span>
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
