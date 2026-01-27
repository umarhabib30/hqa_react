import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const PracticeGameSchedules = () => {
  const images = {
    big: "/athelatics/athletic (21).jpeg",
    small: [
      "/athelatics/p2.jpg",
      "/athelatics/p3.jpg",
      "/athelatics/athletic (23).jpeg",
      "/athelatics/athletic (25).jpeg",
    ],
  };

  return (
    <section className="w-full px-5 sm:px-10 py-12 font-serif relative  overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-60 bg-[#00285E] -z-20"></div>

      <div className="absolute bottom-60 left-0 w-full h-20 bg-[#BCDDFC] -z-10"></div>

      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic mb-4 text-[#00285E]"
      >
        Practice & Game Schedules
      </motion.h1>

      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto mb-10 p text-gray-700"
      >
        Stay updated through our school calendar and official announcements for
        practices, games, and tournaments.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 relative z-10">
        {/* Big Image */}
        <div className="lg:w-2/5 w-full mb-4 lg:mb-0">
          <img
            src={images.big}
            alt="Big Highlight"
            className="w-full h-full rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* 4 Small Images */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4">
          {images.small.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-40 sm:h-78 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeGameSchedules;
