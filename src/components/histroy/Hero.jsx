import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";

const Hero = () => {
  const [open, setOpen] = useState(false);

  // ✅ Menu items with links
  const menuItems = [
    { text: "Inquire", link: "/inquire" },
    { text: "Enrolment", link: "/enrollement" },
    { text: "FAQs", link: "/faqs" },
    { text: "Tuition Fee", link: "/tuition-fee" },
    { text: "Scholarship", link: "/scholarship" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-8 pt-12 font-serif">
      {/* Background Image */}
      <div className="relative w-full rounded-2xl overflow-hidden">
        <img
          src="/about/hero.jpg"
          alt="About"
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl italic drop-shadow-lg text-center"
          >
            History{" "}
          </motion.h1>
        </div>
      </div>

      {/* Subheadings */}
      <div
        className="
          relative mt-[-2rem] w-[90%] sm:w-[80%] md:w-[80%] 
          rounded-2xl shadow-lg p-4 sm:p-6
          bg-white text-black
        "
      >
        {/* -------- Mobile View -------- */}
        <div className="flex justify-between items-center md:hidden">
          {/* Left Side - Menu */}
          <p className="font-semibold cursor-pointer">Menu</p>

          {/* Right Side */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-red-600 transition"
          >
            <HiDotsVertical className="text-2xl" />
          </button>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="md:hidden mt-2 flex flex-col items-center gap-2 transition-all duration-300">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="hover:bg-red-100 p-2 rounded cursor-pointer text-center w-full"
              >
                {item.text}
              </a>
            ))}
          </div>
        )}

        {/* -------- Desktop View: Grid -------- */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 text-center">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-black hover:opacity-80 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
