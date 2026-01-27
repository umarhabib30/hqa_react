import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { SlideUp, SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";
import BorderTiltCard from "../common/BorderTiltCard";

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
      title: "Name Here",
      text: "Discover who we are and what we stand for.",
      img: "/admission/t1.jpg",
    },
    {
      title: "Name Here",
      text: "Learn about our mission and long-term goals.",
      img: "/admission/t2.jpg",
    },
    {
      title: "Name Here",
      text: "Find out how you can join and contribute.",
      img: "/admission/t3.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 font-serif bg-[#BCDDFC]">
      {/* Heading */}
      <h1 className="text-center h1  italic text-[#00285E] mb-8">
        Meet Our Faculty
      </h1>

      <p className="text-center max-w-8xl mx-auto text-gray-800 h2 italic mb-10">
        Inspiring Educators. Faithful Role Models. Academic Champions
      </p>
      <p className="text-center max-w-8xl mx-auto text-gray-700 p mb-10">
        At Houston Quran Academy, our Middle School teachers are more than just
        educators—they are mentors, motivators, and moral guides. Each
        instructor is handpicked for their expertise in subject matter, passion
        for teaching, and commitment to nurturing well-rounded, spiritually
        conscious students.
      </p>

      {/*  Desktop  Layout */}
      {!isMobile && (
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <BorderTiltCard key={i} card={card} />
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
          className="flex overflow-x-auto space-x-6 px-1 snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {cards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-[90%] snap-center">
              <BorderTiltCard card={card} />
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Learning;
