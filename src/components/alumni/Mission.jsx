import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const cards = [
  {
    id: 1,
    text: "Foster meaningful connections among graduates.",
    img: "/alumni/Meaningful connection.jpg",
  },
  {
    id: 2,
    text: "Celebrate the accomplishments and milestones of our alumni.",
    img: "public/alumni/Celebrate.jpg",
  },
  {
    id: 3,
    text: "Support the mission and vision of Houston Quran Academy through shared purpose and community.",
    img: "/alumni/Support the mission.png",
  },

  {
    id: 4,
    text: "Provide opportunities for mentorship, collaboration, and continued growth rooted in Qur’anic values.",
    img: "public/alumni/Mentoring .png",
  },
];

const Mission = () => {
  return (
    <section className="w-full flex flex-col gap-16 px-10 py-12 font-serif overflow-hidden">
      <div className="text-center  mb-10">
        <motion.h2
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#CF3528] font-serif  mb-4"
        >
          Our <span className="text-[#00285E]">Mission</span>
        </motion.h2>
      </div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isEven = index % 2 !== 0;
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";

        return (
          <div
            key={card.id}
            className={`relative w-full flex flex-col md:flex-row items-center ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* White Card  */}
            <motion.div
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative w-full md:w-2/5 z-20 ${
                isEven ? "md:-ml-6" : "md:-mr-6"
              }`}
            >
              <div
                className={`absolute h-28 w-40 ${colorClass} rounded-md aspect-square
                  ${isEven ? "-right-4 -bottom-4" : "-left-4 -bottom-4"}`}
              ></div>

              <div className="relative bg-white border border-black shadow-xl rounded-md px-8 py-8 md:py-12">
                <p className="p font-serif italic text-left">{card.text}</p>
              </div>
            </motion.div>

            {/* Image Box  */}
            <motion.div
              variants={SlideLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full md:w-3/5 z-10"
            >
              <div
                className={`absolute h-72 w-64 ${colorClass} rounded-md aspect-square 
                  ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"}`}
              ></div>

              <div className="relative">
                <img
                  src={card.img}
                  alt={card.text}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-md"
                />
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default Mission;
