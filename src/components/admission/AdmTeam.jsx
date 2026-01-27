import React, { useEffect, useState } from "react";
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
import TiltCard from "../common/TiltCard";

const AdnmTeam = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      title: "Shamima Khalid",
      text: "Discover who we are and what we stand for.",
      img: "/academics/Rectangle.png",
    },
    {
      title: "Feda Mohammad",
      text: "Learn about our mission and long-term goals.",
      img: "/academics/Mohammad_Feda_Admin.jpg",
    },
    {
      title: "Suzan Ramadan",
      text: "Find out how you can join and contribute.",
      img: "/academics/Ramadan_Suzan_Admin.jpg",
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
        Meet the <br />
        <span className="text-[#CF3528]">Admissions Team</span>
      </motion.h2>

      {/*  Desktop Grid Layout */}
      {!isMobile && (
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <TiltCard key={i} card={card} />
          ))}
        </motion.div>
      )}

      {/*  Mobile Horizontal Slider */}
      {isMobile && (
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto space-x-6 px-1 snap-x snap-mandatory scroll-smooth"
        >
          {cards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-[90%]  snap-center">
              <TiltCard card={card} />
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default AdnmTeam;
