import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const graduates = [
  {
    img: "/public/alumni/unii.jpg",
    name: "University of Texas at Austin",
  },
  {
    img: "public/alumni/uuni.jpg",
    name: "Texas A&M University",
  },
  {
    img: "/public/alumni/uni.jpg",
    name: "Rice University",
  },
  {
    img: "/public/alumni/uniiii.jpg",
    name: "University of Houston",
  },
];

const WhereAreTheyNow = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 font-serif">
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-red-700 italic text-center mb-6"
      >
        Where Are They Now?
      </motion.h2>

      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 text-center h2 mb-12 max-w-5xl italic mx-auto"
      >
        Our graduates have gone on to attend prestigious institutions such as:
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {graduates.map((grad, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition h-96"
          >
            {/* Image */}
            <img
              src={grad.img}
              alt={grad.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-4 text-white w-full text-center">
                <h3 className="text-lg font-semibold">{grad.name}</h3>
                <p className="text-sm mt-1">{grad.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 text-center h2 max-w-6xl italic mx-auto"
      >
        Beyond academics, they serve as doctors, engineers, educators,
        entrepreneurs, and community advocates—shining examples of our mission
        in action.
      </motion.p>
    </section>
  );
};

export default WhereAreTheyNow;
