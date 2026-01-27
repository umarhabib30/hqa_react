import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import TiltCard from "../../components/common/TiltCard";
import { Link } from "react-router-dom";

import { SlideRight, SlideUp } from "../../../utility/animation";
const LearningSection = () => {
  const cards = [
    {
      title: "About Us",
      text: "Discover who we are and what we stand for.",
      img: "/scholarship/Empowering.jpg",
      link: "/about",
    },
    {
      title: "Admission",
      text: "Learn about our mission and long-term goals.",
      img: "/scholarship/addmisiion.jpg",
      link: "/admission",
    },
    {
      title: "Academics",
      text: "Find out how you can join and contribute.",
      img: "/scholarship/Class room (4).jpeg",
      link: "/academics",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 px-6 sm:px-10 font-serif bg-white overflow-hidden">
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-10 md:mb-18"
      >
        I’m looking forward to <br />
        <span className="text-[#CF3528]">learning more about...</span>
      </motion.h2>

      {/* Cards */}
      {isMobile ? (
        // MOBILE SLIDER VERSION
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-5 snap-x snap-mandatory scrollbar-hide px-2"
        >
          {cards.map((card, i) => (
            <Link
              to={card.link}
              key={i}
              className="snap-center min-w-[85%] block"
            >
              <TiltCard card={card} />
            </Link>
          ))}
        </motion.div>
      ) : (
        //  DESKTOP GRID VERSION
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <Link to={card.link} key={i} className="block">
              <TiltCard card={card} />
            </Link>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default LearningSection;
