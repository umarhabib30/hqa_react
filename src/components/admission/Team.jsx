import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SlideRight, SlideLeft } from "../../../utility/animation";
import { motion, AnimatePresence } from "framer-motion";

const students = [
  {
    id: 1,
    title: "Faith-Centered Living",
    text: "At HQA, students find strength in faith. Through daily Salah, Quran memorization, and Islamic values, we nurture hearts grounded in purpose and connection to Allah ﷻ.",
    img: "/academics/quran.jpeg",
  },
  {
    id: 2,
    title: "Academically Driven",
    text: "Our students are passionate learners, excelling in both Islamic and secular education. From science labs to Arabic calligraphy, every class builds critical thinkers with a spiritual compass.",
    img: "/academics/customized .jpeg",
  },
  {
    id: 3,
    title: "Character & Leadership",
    text: "Students at HQA lead with kindness and courage. Whether on stage, on the court, or in service to others, they are taught to lead with humility and strength.",
    img: "/academics/leader.jpeg",
  },
  {
    id: 4,
    title: "Diverse Yet United",
    text: "Our students come from all backgrounds, bringing unique stories, talents, and cultures. What unites them is a shared commitment to excellence, deen, and uplifting each other.",
    img: "/academics/Community Engagement.jpeg",
  },
  {
    id: 5,
    title: "Purposeful Community",
    text: "At HQA, every student is part of a bigger mission—uplifting the Ummah. From service projects to student councils, they grow as changemakers with vision, empathy, and drive.",
    img: "/academics/commun.jpeg",
  },
];

const Team = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === students.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full font-serif pt-12 pb-20 md:pb-32 px-6 sm:px-10 md:px-14 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 md:gap-8 items-start">
        {/* Left Side */}
        <div>
          <motion.h1
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h1 italic text-[#012974]  leading-tight mb-4"
          >
            Meet Our <span className="text-red-700">Students</span>
          </motion.h1>
          <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 p mb-2"
          >
            At Houston Quran Academy, every student arrives with a unique
            story—shaped by different cultures, dreams, and talents. Yet they
            are united by shared values: a love for learning, a commitment to
            faith, and a drive to lead with purpose.
          </motion.p>
          <motion.p
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 p mb-2"
          >
            Here, students don't just attend school—they become part of a
            vibrant, nurturing family that celebrates diversity, encourages
            excellence, and cultivates character rooted in Islamic tradition.
          </motion.p>
          <motion.p
            variants={SlideRight(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 p"
          >
            Whether they're excelling in academics, memorizing Quran, or serving
            the community, our students are growing into tomorrow's leaders—with
            hearts full of iman and minds ready to make a difference.
          </motion.p>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[95vh]">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={students[current].img}
                src={students[current].img}
                alt={students[current].title}
                className="w-full h-full object-cover"
                variants={SlideLeft(0.2)}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          {/* MOBILE ARROWS */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="border-red-700 text-red-700 bg-white p-3 rounded-full border"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#CF3528] text-white p-3 rounded-full border border-white"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={students[current].title}
              variants={SlideRight(0.2)}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bg-[#00285E] -bottom-10 sm:-bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[600px] md:max-w-[700px] lg:max-w-[600px] shadow-xl rounded-lg p-4 sm:p-6 md:p-8 mb-6"
            >
              {/* DESKTOP ARROWS */}
              <div className="hidden md:block">
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 cursor-pointer border-red-700 p-2 sm:p-3 rounded-full border text-red-700 bg-white"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 cursor-pointer bg-[#CF3528] text-white p-2 sm:p-3 rounded-full"
                >
                  <FaArrowRight />
                </button>
              </div>

              {/* CARD CONTENT */}
              <h3 className="h2 font-semibold text-white mb-2">
                {students[current].title}
              </h3>
              <p className="text-white p">{students[current].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Team;
