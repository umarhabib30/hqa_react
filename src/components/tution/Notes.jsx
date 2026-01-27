import { FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Notes = () => {
  return (
    <section className="py-12 px-10 font-serif bg-[#FFFDF5] text-center  overflow-hidden">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-[#CF3528] italic mb-6"
      >
        Important <span className="text-[#00285E] ">Notes</span>
      </motion.h1>
      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 mb-10 p"
      >
        Tuition is billed monthly—no weekly or quarterly options. <br /> Late
        payments may incur a fee or affect enrolment status. <br /> For special
        payment arrangements or scholarship inquiries, please contact our
        Finance Office
      </motion.p>

      {/* Cards Container */}
      <motion.div
        variants={SlideUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto "
      >
        <div className="rounded-2xl bg-white shadow-lg p-6 flex flex-col items-center text-center ">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaPhoneAlt size={24} />
          </div>
          <p className="text-gray-800 p">
            Prefer to speak directly? Call us at <br />
            <span className="text-[#CF3528] font-semibold">281-717-4622</span>
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaBuilding size={24} />
          </div>
          <p className="text-gray-800 p">
            Send Email at: <br />
            <span className="text-[#CF3528] font-semibold cursor-pointer hover:underline">
              skhalid@hquranacademy.org{" "}
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Notes;
