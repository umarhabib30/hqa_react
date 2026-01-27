import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const cards = [
  {
    id: 1,
    heading: "STEM Club",
    text: "Explore hands-on science and tech experiments, coding projects, and real-world innovation with our mentors and science faculty.",
    img: "/faculty/c1.jpg",
  },
  {
    id: 2,
    heading: "Debate & Public Speaking",
    text: "Master the art of persuasive speech and critical thinking. Prepare for inter-school debate competitions and learn how to speak with impact.",
    img: "/faculty/c2.jpg",
  },
  {
    id: 3,
    heading: "Service & Leadership Club",
    text: "Engage in community service projects, organize school-wide initiatives, and take an active role in building a better Ummah.",
    img: "/faculty/c1.jpg",
  },
  {
    id: 4,
    heading: "Art & Creative Writing Club",
    text: "Unleash your imagination through painting, calligraphy, storytelling, and poetry—an outlet for creativity rooted in Islamic values.",
    img: "/faculty/c2.jpg",
  },
  {
    id: 5,
    heading: "Girls' Empowerment Circle",
    text: "A space for young Muslimah voices to grow in confidence, mentorship, and empowerment through identity-driven conversations.",
    img: "/faculty/c1.jpg",
  },
];

const Journey = () => {
  return (
    <section className="w-full flex flex-col gap-16 px-10 py-12 font-serif overflow-hidden">
      <div className="text-center mb-10">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#CF3528] font-serif mb-4"
        >
          Our Leadership Philosophy
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 p max-w-5xl mx-auto"
        >
          Journey deeper into the words of Allah through reflections, tafsir,
          and spiritually uplifting discussions.
        </motion.p>
      </div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isEven = index % 2 !== 0; // even index -> card 2,4,6...
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";
        const headingColor = isEven ? "text-[#CF3528]" : "text-[#00285E]"; // red on blue, blue on red

        return (
          <div
            key={card.id}
            className={`relative w-full flex flex-col md:flex-row items-center ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* White Card (40%) */}
            <motion.div
              variants={SlideRight(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative w-full md:w-2/5 z-20 ${
                isEven ? "md:-ml-6" : "md:-mr-6"
              }`}
            >
              {/* Accent Background */}
              <div
                className={`absolute h-28 w-40 ${colorClass} rounded-md aspect-square
                  ${isEven ? "-right-4 -bottom-4" : "-left-4 -bottom-4"}`}
              ></div>

              {/* White Box */}
              <div className="relative bg-white border border-black shadow-xl rounded-md px-8 py-8 md:py-12">
                <h3 className={`h2 leading-tight italic mb-4 ${headingColor}`}>
                  {card.heading}
                </h3>
                <p className="p font-serif italic text-left">{card.text}</p>
              </div>
            </motion.div>

            {/* Image Box (60%) */}
            <motion.div
              variants={SlideLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full md:w-3/5 z-10"
            >
              {/* Accent Background */}
              <div
                className={`absolute h-72 w-64 ${colorClass} rounded-md aspect-square 
                  ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"}`}
              ></div>

              {/* Image */}
              <div
                variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
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

export default Journey;
