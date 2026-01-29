

import { FaBars, FaTimes, FaUser, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DesktopTopBar({ isOpen, setIsOpen }) {
  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
          />
        </a>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* MY HQA Button */}
        <a
          href="https://hqasis.com/web/login?db=hqaa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 cursor-pointer text-[#1a376b] px-4 py-2 sm:px-5 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-red-700 hover:text-white transition"
        >
          <span className="bg-gray-200 text-[#0B49BD] rounded-full p-2 flex items-center justify-center">
            <FaUser />
          </span>
          <span>MY HQA</span>
          <FaAngleRight />
        </a>

        {/* Hamburger/Close Icon */}
        {isOpen ? (
          <FaTimes
            className="text-2xl sm:text-3xl text-gray-800 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars
            className="text-2xl sm:text-3xl text-[#CECECE] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </div>
  );
}
