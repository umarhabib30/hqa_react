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
    <section className="py-12 px-4 sm:px-6 md:px-8 font-serif bg-[#CF3528] overflow-hidden">
      {/* Heading */}
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-white mb-8"
      >
        I am interested in <br /> exploring further, especially…{" "}
      </motion.h1>
      {/* 
      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center italic text-white h2 mb-10"
      >
        Inspiring Educators. Faithful Role Models. Academic Champions
      </motion.p>

      <motion.p
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto text-white p mb-10"
      >
        At Houston Quran Academy, our Middle School teachers are more than just
        educators—they are mentors, motivators, and moral guides. Each
        instructor is handpicked for their expertise in subject matter, passion
        for teaching, and commitment to nurturing well-rounded, spiritually
        conscious students.
      </motion.p> */}

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
