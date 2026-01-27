import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const LeaderShipPageCard = ({ title, description, cards }) => {
  return (
    <section className="w-full flex flex-col gap-16 px-10 py-12 font-serif overflow-hidden">
      <div className="text-center mb-10">
        <motion.h2
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#CF3528] font-serif mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p max-w-6xl mx-auto text-gray-700"
        >
          {description}
        </motion.p>
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
              variants={SlideRight(0.6)}
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

            {/* Image Box */}
            <motion.div
              variants={SlideLeft(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full md:w-3/5 z-10"
            >
              <div
                className={`absolute h-72 w-64 ${colorClass} rounded-md aspect-square 
                  ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"}`}
              ></div>

              {/* Image */}
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

export default LeaderShipPageCard;
