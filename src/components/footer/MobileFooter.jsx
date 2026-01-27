import React from "react";
import { Link } from "react-router-dom"; // Use 'a' tags if not using react-router
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const MobileFooter = () => {
  return (
    <div className="bg-red-700">
      <footer className="bg-[#00295e] font-serif py-5 px-4 sm:px-10 flex flex-col justify-center items-center space-y-10 rounded-tr-[100px]">
        {/* Logo + Name */}
        <div className="flex w-full sm:flex-row items-center justify-center gap-4 text-center">
          <img className="h-28" src="/logo.webp" alt="Logo" />
          <p className="text-white text-[24px] sm:text-[26px] ">
            Houston Quran Academy
          </p>
        </div>

        {/* Mission */}
        <div className="w-full sm:w-80 text-white px-4 sm:px-0">
          <p className="text-base sm:text-base">
            At Houston Quran Academy, every child's journey is rooted in faith,
            knowledge, and character.
          </p>
        </div>

        {/* Links */}
        <div className="w-full sm:w-2xs">
          <Link
            to="/schoolCalendar"
            className="block text-white p-2.5 text-[20px] hover:text-[#cf3527] transition"
          >
            Calender
          </Link>
          <hr className="border-white/30" />
          <Link
            to="/career"
            className="block text-white p-2.5 text-[20px] hover:text-[#cf3527] transition"
          >
            Employment
          </Link>
          <hr className="border-white/30" />
          <Link
            to="/privacy-policy"
            className="block text-white p-2.5 text-[20px] hover:text-[#cf3527] transition"
          >
            Privacy Policy
          </Link>
          <hr className="border-white/30" />

          <Link
            to="/terms-conditions"
            className="block text-white p-2.5 text-[20px] hover:text-[#cf3527] transition"
          >
            Terms & Conditions
          </Link>
          <hr className="border-white/30" />
        </div>

        {/* Support Text */}
        <div className="text-white px-4 sm:px-0">
          <p className="text-base sm:text-base">
            Your support transforms lives, fueling a future illuminated by
            knowledge and guided by mercy. Together, we rise to build a world
            where compassion, wisdom, and excellence lead the way.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center space-y-5 w-full px-4 sm:px-0">
          <a
            href="https://hqasis.com/front/office/inquiry/form"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-40"
          >
            <button className="bg-white w-full h-12 rounded-[5px] text-[#cf3527] text-[18px] sm:text-base cursor-pointer">
              Inquire
            </button>
          </a>

          <a
            href="https://hqasis.com/visitor/form"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-40"
          >
            <button className="bg-white w-full h-12 rounded-[5px] text-[#cf3527] text-[18px] sm:text-base cursor-pointer">
              Visit
            </button>
          </a>

          <a
            href="https://hqasis.com/OnlineRegistration"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-40"
          >
            <button className="bg-white w-full h-12 rounded-[5px] text-[#cf3527] text-[18px] sm:text-base cursor-pointer">
              Apply
            </button>
          </a>

          <a
            href="https://hqasis.com/OnlineRegistration"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-40"
          >
            <button className="bg-[#cf3527] w-full h-12 rounded-[5px] text-white text-[18px] sm:text-base cursor-pointer">
              Donate
            </button>
          </a>
        </div>

        {/* Address */}
        <div className="text-white px-4 sm:px-0">
          <p className="text-lg sm:text-base">
            Established in 2008, Houston Quran Academy is a nonprofit school for
            PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
          </p>
          <p className="text-white mt-9 text-lg sm:text-base">281-717-4622</p>
        </div>

        {/* Socials */}
        <div className="w-full px-4 sm:px-0">
          <h1 className="text-white mb-2 text-[24px] sm:text-base">
            Connect with Us
          </h1>
          <div className="flex items-center gap-4 text-white text-3xl">
            <FaFacebookF className="cursor-pointer hover:text-[#cf3528] transition" />
            <FaInstagram className="cursor-pointer hover:text-[#cf3528] transition" />
            <FaXTwitter className="cursor-pointer hover:text-[#cf3528] transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#cf3528] transition" />
          </div>
        </div>

        {/* Copyright + CTA */}
        <div className="flex flex-col justify-center items-center space-y-5 w-full px-4 sm:px-0 pb-6">
          <p className="text-white text-base sm:text-base text-center">
            Copyright © 2025 Houston Quran Academy.
          </p>
          <a
            href="https://monefaction.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white px-6 py-2.5 rounded-md bg-[#cf3527] text-lg sm:text-base whitespace-nowrap hover:bg-white hover:text-[#cf3527] transition-all duration-300 shadow-lg cursor-pointer"
          >
            <img
              src="/monefaction-logo.png"
              alt="Monefaction"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span className="font-medium">Powered by Monefaction</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MobileFooter;
