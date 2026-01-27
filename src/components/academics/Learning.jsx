import React, { useEffect, useState } from "react";
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
import TiltCard from "../common/TiltCard";
import { Link } from "react-router-dom";

const Learning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      title: "Student Life",
      text: "Discover the vibrant activities, clubs, and experiences that help students grow beyond the classroom.",
      img: "/academics/foundations.jpeg",
      link: "/student-life",
    },
    {
      title: "Scholarship",
      text: "Explore financial aid opportunities designed to support families and make quality education accessible.",
      img: "/academics/bg.jpg",
      link: "/scholarship",
    },
    {
      title: "Quran Memorization Program",
      text: "A structured, spiritually enriching program dedicated to helping students memorize and understand the Quran.",
      img: "/academics/Qur’an Foundations.jpg",
      link: "/memorization",
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-10 font-serif bg-white overflow-hidden">
      <motion.h2
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-10 md:mb-18"
      >
        I’m looking forward to
        <br />
        <span className="text-[#CF3528]">learning more about...</span>
      </motion.h2>

      {/* Desktop Grid Layout */}
      {!isMobile && (
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <Link key={i} to={card.link}>
              <TiltCard card={card} />
            </Link>
          ))}
        </motion.div>
      )}

      {/* Mobile Horizontal Slider */}
      {isMobile && (
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto space-x-6 px-1 snap-x snap-mandatory scroll-smooth"
        >
          {cards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-[90%] snap-center">
              <Link to={card.link}>
                <TiltCard card={card} />
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Learning;
