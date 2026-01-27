import { motion } from "framer-motion";
import {  SlideRight, SlideUp } from "../../../utility/animation";
const ApplicantQualifications = () => {
  return (
    <section className="w-full px-10 py-12 bg-[#fdfdfd] font-serif">
      <motion.h1
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 text-[#00285E] mb-12"
      >
        Applicant Qualifications
      </motion.h1>

      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 p italic mb-4 max-w-4xl mx-auto text-left pl-2 sm:pl-14"
      >
        To be considered, applicants must:
      </motion.p>

      {/* Requirements List */}
      <motion.ul
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="list-disc pl-8 space-y-2 text-gray-800 p italic  max-w-3xl mx-auto mb-8"
      >
        <li>
          Be an HQA student for at least{" "}
          <span className="text-[#CF3528] ">one year</span>.
        </li>
        <li>
          Have memorized the following{" "}
          <span className="text-[#CF3528] ">minimum Ajzaa per grade level</span>
          .
        </li>
      </motion.ul>

      {/* Table */}
      <motion.div
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="overflow-x-auto flex justify-center pb-16 mb-8"
      >
        <div className="w-full max-w-3xl rounded-3xl shadow-[12px_12px_20px_rgba(0,0,0,0.5)] overflow-hidden">
          <table className="w-full border border-gray-300 text-sm sm:text-base border-collapse table-fixed">
            <thead>
              <tr className="bg-[#00285E] text-white">
                <td className="px-4 py-5  p italic border-r border-gray-300 text-center w-1/2">
                  Grade Level
                </td>
                <td className="px-4 py-5  p italic text-center w-1/2">
                  Minimum Ajzaa Memorized
                </td>
              </tr>
            </thead>
            <tbody>
              {[
                { grade: "1st Grade", ajzaa: "1" },
                { grade: "2nd Grade", ajzaa: "2" },
                { grade: "3rd Grade", ajzaa: "4" },
                { grade: "4th Grade", ajzaa: "6" },
                { grade: "5th Grade", ajzaa: "9" },
                { grade: "Middle School", ajzaa: "15" },
                { grade: "High School", ajzaa: "20" },
              ].map((row, i) => (
                <tr key={i} className="bg-[#F2F7FF] text-gray-800">
                  <td className="px-4 py-5 p border-r border-gray-300 border-b text-center w-1/2">
                    {row.grade}
                  </td>
                  <td className="px-4 py-5 p border-b border-gray-300 text-center w-1/2">
                    {row.ajzaa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.ul
          variants={SlideRight(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="list-disc text-gray-800 p italic mb-4 max-w-4xl mx-auto text-left pl-5 sm:pl-6"
        >
          <li>Be in good standing:</li>
        </motion.ul>

        <motion.ul
          variants={SlideRight(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="list-disc pl-10 space-y-2 text-gray-800  p italic "
        >
          <li>
            Discipline and character must reflect HQA’s values: <br />
            <span className="italic text-[#CF3528]">
              “Oh Allah, make us leaders of the righteous.”
            </span>
          </li>
          <li>
            Academically strong: Students may have only{" "}
            <span className="text-[#CF3528]">
              one B+ in the four core subjects (English, Math, Science, Social
              Studies).{" "}
            </span>
          </li>
          <li>All other grades must be A </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default ApplicantQualifications;
