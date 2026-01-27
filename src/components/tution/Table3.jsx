import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Table3 = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-[#fdfdfd] font-serif  overflow-hidden">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-3xl italic h1 text-[#00285E] mb-6"
      >
        Monthly Tuition with{" "}
        <span className="text-[#CF3528]">
          {" "}
          Sibling <br />
          Discounts
        </span>
      </motion.h1>
      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto text-gray-700 p"
      >
        To support our HQA families, we offer generous sibling discounts
      </motion.p>

      {/* Table Container */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center py-10"
      >
        <table className="w-full max-w-3xl text-sm sm:text-base border-collapse rounded-2xl overflow-hidden shadow-[0_15px_30px_5px_rgba(0,0,0,0.25),0_5px_10px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <thead>
            <tr className="bg-[#00285E] text-white">
              <td className="px-4 py-5     p italic text-center border-r border-gray-300">
                Number of Children
              </td>
              <td className="px-4 py-5     p italic text-center">
                Monthly Total Tuition
              </td>
            </tr>
          </thead>
          <tbody>
            {[
              { child: "1 Child", amount: "$725-750" },
              { child: "2 Child", amount: "$1405" },
              { child: "3 Child", amount: "$1990" },
              { child: "4 Or More Childrens", amount: "$2295" },
            ].map((row, i) => (
              <tr key={i} className="bg-[#F2F7FF] text-gray-800">
                <td className="px-4 py-5 p border-r border-b border-gray-300 text-center">
                  {row.child}
                </td>
                <td className="px-4 py-5 p border-b border-gray-300 text-center">
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        variants={SlideLeft(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto text-gray-700 p"
      >
        All tuition payments are due by the 5th of each month.
      </motion.p>
    </section>
  );
};

export default Table3;
