import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Teams = () => {
  const sports = [
    { id: 1, img: "/athelatics/t1.gif", text: "Soccer (Boys & Girls)" },
    { id: 2, img: "/athelatics/t2.gif", text: "Basketball (Boys & Girls)" },
    { id: 3, img: "/athelatics/t3.gif", text: "Track & Field" },
  ];

  return (
    <section className="w-full px-10 py-12 font-serif  overflow-hidden">
      {/* Heading */}
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1  italic mb-6 text-[#00285E]"
      >
        Our Teams
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        variants={SlideUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto mb-10 p text-gray-700"
      >
        From spirited matches to championship-level tournaments, our
        student-athletes at HQA proudly represent our values on the field and
        the court. We offer a focused selection of athletic programs that
        promote physical wellness, teamwork, and leadership:
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={SlideRight(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 "
      >
        {sports.map((sport) => (
          <div
            key={sport.id}
            className="border border-black rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer 
                       hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={sport.img}
              alt={sport.text}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="p font-semibold text-gray-800">{sport.text}</h3>
          </div>
        ))}
      </motion.div>

      {/* Closing Paragraph */}
      <motion.p
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto mt-12 p  text-gray-700"
      >
        Each sport is led by committed coaches who emphasize discipline,
        sportsmanship, and fair play—while supporting students in maintaining
        high academic standards and strong Islamic character.
      </motion.p>
    </section>
  );
};

export default Teams;
