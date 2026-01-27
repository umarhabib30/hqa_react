import { useState } from "react";
import { motion } from "framer-motion";
import {
  SlideUp,
  SlideRight,
  SlideButton,
} from "../../../utility/animation.js";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "home/welcome1.webp",
    alt: "About Us",
    btn: "About Us",
    description:
      "Learn about our mission to blend Islamic teachings with modern education, shaping balanced leaders for tomorrow.",
    link: "/about",
  },
  {
    id: 2,
    src: "home/welcome2.webp",
    alt: "Admission",
    btn: "Admission",
    description:
      "Find all the information you need to apply and join our community of scholars and leaders.",
    link: "/admission",
  },
  {
    id: 3,
    src: "home/welcome3.webp",
    alt: "Quran Memorization Program",
    btn: " Memorization Program",
    description:
      "Our dedicated Quran Memorization Program helps students internalize and embody the sacred teachings of Islam.",
    link: "/memorization",
  },
  {
    id: 4,
    src: "home/welcome4.webp",
    alt: "Student Life",
    btn: "Student Life",
    description:
      "Experience a vibrant and nurturing environment where academic growth is complemented by spiritualand social development.",
    link: "/student-life",
  },
];

const Welcome = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-12 bg-[#00285E] text-white relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 relative">
          {/* Left side - Text */}
          <div className="md:w-1/2">
            <motion.h2
              className="h1 italic leading-tight mb-4 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {["When ", "& ", "Where?"].map((word, wi) => (
                <span key={wi} className="inline-flex gap-1">
                  {word.split("").map((letter, li) => (
                    <motion.span
                      key={li}
                      variants={SlideRight(wi * 0.7 + li * 0.05)}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h2>

            <motion.p
              className="p mb-6 font-serif max-w-xl"
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Clubs typically meet weekly during lunch breaks or after school. A
              detailed schedule and sign-up form is shared each semester. Club
              meetings are held in designated classrooms or school facilities.
            </motion.p>

            <motion.div
              variants={SlideButton(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link to="/donation">
                <button className="border border-[#FAF1C4] hover:bg-[#1a3f75] text-xl bg-white text-red-700 hover:text-white font-serif py-3 px-6 cursor-pointer transition duration-300 rounded-md">
                  Event & Fundraisers
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right side - Image grid */}
          <div className="md:w-1/2 border border-white p-2 rounded-md relative">
            {/* Decorative line with twinkling circle */}
            <div className="absolute left-2 top-120 -translate-y-1/2 hidden md:block">
              <div className="flex items-center">
                <div className="w-[600px] h-[3px] bg-white -ml-[600px]" />
                <motion.div
                  className="relative flex items-center justify-center -ml-[630px]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image grid */}
            <motion.div
              className="grid grid-cols-2 cursor-pointer "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.15 }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={img.id}
                  className="relative overflow-visible shadow-lg group "
                  variants={SlideUp(0.2 * (index + 1))}
                  onClick={() =>
                    setActiveId(activeId === img.id ? null : img.id)
                  }
                >
                  <div className="relative overflow-hidden h-64 ">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <a
                      href={img.link}
                      className="absolute bottom-1 left-1 
  bg-[#1a3f75]/90 text-white text-sm font-serif 
  h-12 w-40 flex items-center justify-center 
  rounded-bl-md rounded-tr-md border border-white/50 
  transition-opacity duration-300 group-hover:opacity-0"
                    >
                      {img.btn}
                    </a>
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-[#1a3f75]/80 transition-all duration-500 flex flex-col justify-end rounded-md transform origin-center shadow-2xl
                    ${
                      activeId === img.id
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-95"
                    } sm:group-hover:opacity-100 sm:group-hover:scale-120 z-20`}
                  >
                    <div className="p-4">
                      {/* Hide alt text on mobile */}
                      <h3 className="font-bold text-lg hidden sm:block">
                        {img.alt}
                      </h3>
                      <p className="text-sm">{img.description}</p>
                    </div>
                    <a
                      href={img.link}
                      className="w-full flex items-center justify-between bg-[#1a3f75] text-white text-sm font-serif py-3 px-4 rounded-bl-md rounded-tr-md border-t border-white/30 hover:bg-[#163765] transition"
                    >
                      {img.btn}
                      <FaArrowRight className="ml-2 text-white" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
