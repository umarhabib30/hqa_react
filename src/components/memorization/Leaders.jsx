import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const Leaders = () => {
  return (
    <section className="w-full py-12 px-10 font-serif overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left */}
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <img
            src="/memorizaation/leader.jpeg"
            alt="Graduates celebrating"
            className="w-full h-full object-cover rounded-lg "
          />
        </motion.div>

        {/* Right */}
        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-[0_0_80px_rgba(0,0,0,0.25)]
 p-6 md:p-8 flex flex-col justify-between h-full"
        >
          <div>
            <h2 className="h2 italic text-[#00285E] mb-4">
              Shaping Tomorrow’s Leaders
            </h2>
            <p className="text-gray-800 p mb-6">
              This program isn’t just about completing a Hafiz journey—it’s
              about shaping future community leaders, educators, and ambassadors
              of Islamic values.With more then 100 Huffaz graduated and a team
              of 10 expert Huffaz instructors, our mission continues to empower
              the next generation.
            </p>
          </div>
          <button className="bg-[#00285E] text-white px-6 py-2 rounded-md cursor-pointer shadow-md hover:bg-[#001a40] transition self-start">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaders;
