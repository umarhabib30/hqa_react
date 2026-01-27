import { SlideLeft, SlideRight, SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";
const Table2 = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-[#fdfdfd] font-serif  overflow-hidden">
      {/* Heading */}
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 text-[#00285E] mb-6"
      >
        <span className="text-[#CF3528]">One-Time</span> Annual Fees
      </motion.h2>

      {/* Table Container */}
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center py-10"
      >
        <table className="w-full max-w-4xl text-sm sm:text-base border-collapse rounded-2xl overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <td className="px-4 py-5 p italic text-center border-r border-gray-300">
                Fee type
              </td>
              <td className="px-4 py-5 p italic text-center border-r border-gray-300">
                Amount
              </td>
              <td className="px-4 py-5 p italic text-center">Notes</td>
            </tr>
          </thead>
          <tbody>
            {[
              {
                fee: "Book & Technology Fee",
                amount: "$350",
                notes: "One- Time, Per Student",
              },
              {
                fee: "Registration Fee",
                amount: "$200",
                notes: "One- Time, Per Student",
              },
            ].map((row, i) => (
              <tr key={i} className="bg-[#F2F7FF] text-gray-800">
                <td className="px-4 py-5 p border-r border-b border-gray-300 text-center">
                  {row.fee}
                </td>
                <td className="px-4 py-5 p border-r border-b border-gray-300 text-center">
                  {row.amount}
                </td>
                <td className="px-4 py-5 p border-b border-gray-300 text-center">
                  {row.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Paragraph Below Table */}
      <motion.p
        variants={SlideLeft(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto text-gray-700 p"
      >
        These fees are non-refundable and help cover learning resources and
        student systems.
      </motion.p>
    </section>
  );
};

export default Table2;
