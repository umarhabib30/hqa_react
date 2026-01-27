import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";

const SignatureCenters = () => {
  const cards = [
    {
      img: "/academics/l1.jpg",
      title: "Hifz Excellence Center",
      text: "Individualized Tajweed instruction, 1:1 mentorship, and surah comprehension tests—ensuring hafiz graduates who live the Quran’s lessons.",
    },
    {
      img: "/academics/STEM.jpeg",
      title: "STEM & Innovation Hub",
      text: "Planned State-of-the-art labs in near future for scientific inquiry—where students prototype solutions to real-world problems.",
    },
    {
      img: "/academics/rbotics.jpeg",
      title: "STEM Robotics Lab",
      text: "Robotics, coding, and engineering challenges designed to inspire problem-solving and teamwork skills.",
    },
    {
      img: "/academics/l4.jpg",
      title: "Language Arts Center",
      text: "Focused development of communication, writing, and public speaking skills in both English and Arabic.",
    },
    {
      img: "/academics/mentorship.jpeg",
      title: "College Counseling Suite",
      text: "Personalized guidance from Day 1: college research, application strategy, scholarship navigation, and alumni mentorship.",
    },
    {
      img: "/academics/l6.jpg",
      title: "Experiential Learning",
      bulletPoints: [
        "Global Study Tours (Umrah, Gulf, Turkey)",
        "Academic Competitions (Science fairs, Quran Bees, debate circuits)",
        "In-School Internships with local NGOs and businesses",
      ],
    },
  ];

  return (
    <section className="py-26 md:py-16 px-6 md:px-12 bg-[#FFFDF4] font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center italic h1 mb-12 text-[#CF3528]"
      >
        Signature Centers & Future Labs{" "}
      </motion.h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 cursor-pointer gap-10 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative group [perspective:1000px] rounded-2xl"
          >
            {/*  Desktop Flip Animation */}
            <div className="hidden sm:block relative h-[420px] w-full rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white rounded-2xl p-6 backface-hidden flex flex-col transition-transform">
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="h2 italic text-[#00285E] mb-3 text-left">
                  {card.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white rounded-2xl p-6 [transform:rotateY(180deg)] backface-hidden flex flex-col justify-start">
                <h3 className="h2 italic text-[#00285E] mb-3 text-left font-bold">
                  {card.title}
                </h3>

                {card.bulletPoints ? (
                  <ul className="list-disc list-outside pl-5 text-gray-800 p text-left space-y-1">
                    {card.bulletPoints.map((point, idx) => (
                      <li key={idx} className="pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-800 p text-left">{card.text}</p>
                )}
              </div>
            </div>

            {/*  Mobile  Version */}
            <div className="sm:hidden flex flex-col bg-white rounded-2xl shadow-2xl p-6">
              <div className="w-full flex justify-center mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="h2 italic text-[#00285E] mb-3 text-left">
                {card.title}
              </h3>

              {card.bulletPoints ? (
                <ul className="list-disc list-outside pl-5 text-gray-800 p text-left space-y-1">
                  {card.bulletPoints.map((point, idx) => (
                    <li key={idx} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 p text-left">{card.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignatureCenters;
