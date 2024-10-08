import React from "react";
import { CgUser, CgUserAdd } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { FiHome, FiMessageCircle } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="w-full md:hidden  fixed bottom-0  mt-8 z-50">
      <div className="flex justify-evenly p-4 bg-white text-center ">
        <div className="">
          <FiHome className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
        </div>
        <div className="">
          <CgUserAdd className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
        </div> 
        <div className="">
        <CgUser className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
        </div> 
        <div className="">
          <FiMessageCircle className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
        </div>
        <div className="">
          <FaRegBell className="w-5 h-5 text-bs-blue dark:text-bs-blue cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
