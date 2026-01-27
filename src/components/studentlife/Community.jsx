import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Community = () => {
  return (
    <section className="w-full font-serif py-12 px-10 overflow-hidden">
      {/* FIRST BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* LEFT SIDE */}
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="h1 italic mb-4 leading-tight">
            <span className=" text-[#00285E]">Community Involvement &</span>{" "}
            <br />
            <span className=" text-red-700">Service Learning</span>
          </h2>
          <p className="text-gray-700 p max-w-6xl leading-tight">
            Our students actively contribute to society through various charity
            drives, volunteering initiatives, and outreach programs. We nurture
            a spirit of giving and a commitment to making a positive difference
            in the world, instilling the importance of being active and
            compassionate members of society. This includes local community
            clean-ups, visits to shelters, and participation in global relief
            efforts.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Blue Background */}
          <div className="bg-[#00285E] rounded-2xl w-[90%] h-full absolute top-2 left-6 sm:top-4 sm:left-10 md:left-20"></div>

          {/* Image */}
          <img
            src="/student/communty.jpeg"
            alt="Community Involvement"
            className="relative z-10 rounded-2xl shadow-lg w-[90%] object-cover"
          />
        </motion.div>
      </div>

      {/* SECOND BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pb-18 md:mt-26">
        {/* RIGHT SIDE */}
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center order-1 md:order-none mt-18"
        >
          {/* Blue Background  */}
          <div className="bg-[#00285E] rounded-2xl w-[80%] h-full absolute top-2 right-6 sm:-top-6 sm:right-10 md:right-30"></div>

          {/* Image */}
          <img
            src="/student/Student Life.jpg"
            alt="Community Involvement"
            className="relative z-10 rounded-2xl w-[90%] object-cover "
          />
        </motion.div>

        {/* LEFT SIDE */}
        <motion.div
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="h1 italic leading-tight mt-28">
            <span className=" text-[#00285E]">A Nurturing & </span>
            <span className="text-red-700">
              {" "}
              Safe <br /> Environment
            </span>
          </h2>
          <p className="text-gray-700 p  max-w-6xl leading-tight">
            We prioritize the emotional and physical well-being of every
            student. With caring teachers, small class sizes, and a strong focus
            on mutual respect, HQA strives to be a second home where students
            feel safe, supported, and inspired to grow. We have robust student
            support services, including counseling and academic advising, to
            ensure every student thrives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
