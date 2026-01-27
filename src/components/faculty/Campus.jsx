import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const cards = [
  {
    id: 1,
    heading: "Dana Chehab",
    text: "        Academic Counselor",
    img: "/faculty/Dana Chehab.png",
  },
  {
    id: 2,
    heading: "  Amina Ishaq",
    text: "        School Counselor Support",
    img: "/faculty/Amina Ishaq.png",
  },
  {
    id: 3,
    heading: "  Dr. Abdelhamid Moursy",
    text: "     IT Consultant",
    img: "/faculty/Male Silhouette.png",
  },
  {
    id: 4,
    heading: "          Ahmed Fahmy",
    text: "        Athletics - Head Coach (Boys)",
    img: "/faculty/Male Silhouette.png",
  },
  {
    id: 5,
    heading: "Hind Ezzet",
    text: " Athletics - Head Coach (Girls)",
    img: "/faculty/Hind Ezzet.png",
  },
];

const Campus = () => {
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
          Services Department{" "}
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 p max-w-5xl mx-auto"
        >
          The Support Services Department plays a vital role in ensuring the
          well-being, guidance, and technical support needed for a successful
          school experience. Through dedicated counseling and reliable IT
          expertise, this team helps create a safe, supportive, and efficiently
          connected environment for all students and staff.
        </motion.p>
      </div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isEven = index % 2 !== 0;
        const colorClass = isEven ? "bg-[#00285E]" : "bg-[#CF3528]";
        const headingColor = isEven ? "text-[#CF3528]" : "text-[#00285E]";

        return (
          <div
            key={card.id}
            className={`relative w-full flex flex-col md:flex-row items-center ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* White Card */}
            <motion.div
              variants={SlideRight(0.7)}
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
                <h3 className={`h2 leading-tight italic mb-4 ${headingColor}`}>
                  {card.heading}
                </h3>
                <p className="p font-serif italic text-left">{card.text}</p>
              </div>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full md:w-3/5 z-10"
            >
              <div
                className={`absolute h-72 w-64 ${colorClass} rounded-md aspect-square 
                  ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"}`}
              ></div>

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

export default Campus;
