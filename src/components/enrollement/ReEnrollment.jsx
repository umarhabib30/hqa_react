import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
export default function ReEnrollment() {
  return (
    <section className="w-full px-6 py-24">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center italic text-[#00285E] h1  font-serif  overflow-hidden "
      >
        2025–2026 Re-Enrollment <br />
        <span className="text-red-600">Checklist for Returning Students</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Left side */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-3.5/5 grid grid-cols-1 sm:grid-cols-2   gap-2"
        >
          <div className="bg-[#00285E] text-white p-8 p font-serif rounded-lg shadow-md">
            Submit completed Registration Form
          </div>
          <div className="bg-[#00285E] text-white p-8 p font-serif rounded-lg shadow-md">
            Review the Digital Parent’s Handbook
          </div>
          <div className="bg-[#00285E] text-white p-8 p font-serif rounded-lg shadow-md">
            Submit the Liability Form
          </div>
          <div className="bg-[#00285E] text-white p-8 p font-serif rounded-lg shadow-md">
            Sign the Parent’s Acceptance of Handbook and School Rules
          </div>
          <div className="bg-[#00285E] text-white p-8 p font-serif rounded-lg shadow-md">
            Provide Updated Immunization Records
          </div>
          <div className="bg-[#00285E] text-white p-8 p  font-serif rounded-lg shadow-md">
            Book & Technology Fee: $400 (Refundable)
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-2/5 bg-[#E3F1FF] text-[#00285E] rounded-lg shadow-md p-6"
        >
          <h3 className="p mb-8">
            Early Registration Fee <br />
            (Non-refundable):
          </h3>
          <ul className="list-disc list-inside space-y-4 p ">
            <li>$200 if paid between Jan 13 – Jan 31, 2025</li>
            <li>$250 if paid after Jan 31, 2025</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
