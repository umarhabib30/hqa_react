import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation.js";
const StudentLife = () => {
  const cards = [
    { img: "/pre/c1.jpg", title: "Art, Calligraphy & Crafts" },
    { img: "/pre/c2.jpg", title: "STEM Activities & Robotics Clubs" },
    { img: "/pre/c3.jpg", title: "Quran Bees & Spelling Bees" },
    { img: "/pre/c1.jpg", title: "Field Trips & Outdoor Explorations" },
    { img: "/pre/c1.jpg", title: "Community Service Projects" },
  ];

  return (
    <div className="font-serif px-10 py-12 overflow-hidden">
      <div className="text-center items-center justify-center">
        <motion.h1
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#00285e]"
        >
          Enrichment & <span className="text-red-700">Student Life</span>
        </motion.h1>
      </div>

      <div className="flex justify-center mt-10 px-6 md:px-20">
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p max-w-4xl italic text-gray-800 text-center"
        >
          We believe education should be holistic. Our students enjoy a wide
          range of enrichment opportunities, including:
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 w-full bg-opacity-50 text-white p-3 text-center text-lg font-medium">
              {card.title}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={SlideRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mt-12 px-6 md:px-20"
      >
        <p className="h2 italic font-medium text-red-700 text-center">
          Every child is encouraged to discover their passions beyond the
          classroom.
        </p>
      </motion.div>
    </div>
  );
};

export default StudentLife;
