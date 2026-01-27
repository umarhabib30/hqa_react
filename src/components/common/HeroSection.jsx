import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = ({
  bgImage = "/about/hero.jpg",
  title = "About Us",
  menuItems = [],
  desktopGap = "gap-3",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center px-8 pt-12 font-serif">
      <div className="relative w-full rounded-2xl overflow-hidden">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.h1
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white h1 italic drop-shadow-lg"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      <div
        className={`
          relative mt-[-2rem] w-[90%] sm:w-[80%] md:w-[95%]
          rounded-2xl shadow-lg p-4 sm:p-6
          bg-white text-black text-center flex flex-col items-center justify-center
        `}
      >
        {/* -------- Mobile View -------- */}
        <div className="flex justify-between items-center md:hidden w-full max-w-4xl">
          <p className="font-semibold cursor-pointer">Menu</p>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-red-600 transition"
          >
            <HiDotsVertical className="text-2xl" />
          </button>
        </div>

        {/* Dropdown for Mobile */}
        {open && (
          <div className="md:hidden mt-2 flex flex-col items-center gap-2 transition-all duration-300 w-full max-w-4xl">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="hover:bg-red-100 p-2 rounded cursor-pointer text-center w-full"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* -------- Desktop View: Grid -------- */}
        <div
          className={`hidden md:flex flex-wrap justify-center items-center ${desktopGap} text-center w-full max-w-6xl`}
        >
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="text-black hover:opacity-80 cursor-pointer text-xs sm:text-sm md:text-base w-[150px] text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
