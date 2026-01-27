import React, { useEffect, useRef } from "react";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion, useInView } from "framer-motion";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace("+", "").replace("%", ""));
      if (start === end) return;

      let totalDuration = duration * 1000;
      let incrementTime = totalDuration / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
    </span>
  );
};

export default function StudentGrowth() {
  const stats = [
    { number: "350+", label: "Current Students (PK–12)", bg: "#E3F1FF" },
    { number: "95+", label: "Huffaz br Graduated", bg: "#FFFFFF" },
    { number: "93%", label: "AP Exam br Pass Rate", bg: "#E3F1FF" },
    { number: "98%", label: "average on br IOWA Tests", bg: "#FFFFFF" },
    {
      number: "12+",
      label: " Studnets br  from Nationalities",
      bg: "#E3F1FF",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-12 md:py-18 lg:py-30 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 font-serif overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="h1 mb-4 leading-snug px-2">
          <motion.span
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#00285E] italic inline-block"
          >
            HQA Student Growth -
          </motion.span>{" "}
          <motion.span
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#CF3528] italic inline-block"
          >
            Rising by the Numbers
          </motion.span>
        </h1>

        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h2 text-[#252626] italic mb-6 px-2"
        >
          Growing in Faith, Knowledge, and Numbers{" "}
        </motion.p>

        <motion.p
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-gray-800 p leading-relaxed mb-12 px-2"
        >
          The success of HQA is not just measured in years—but by the lives
          we've shaped and the futures we've inspired. From our modest start to
          today's thriving campus, our growth reflects the trust of families and
          the strength of our mission.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center md:px-10 cursor-pointer"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={SlideUp(0.5)}
              className={`rounded-xl md:rounded-2xl shadow-sm md:shadow-md p-3 sm:p-4 md:p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 
                ${
                  index === stats.length - 1
                    ? "col-span-2 sm:col-span-1 w-full pt-8 pb-8 mx-0"
                    : "w-full max-w-[180px] sm:max-w-[400px] mx-auto"
                }`}
              style={{ backgroundColor: item.bg }}
            >
              <h3 className="h1 font-bold text-[#00285E] mb-1 sm:mb-2 md:mb-3">
                <Counter value={item.number} duration={2} />
              </h3>
              <p
                className="text-gray-800 p text-center leading-tight"
                dangerouslySetInnerHTML={{
                  __html: item.label.replace(/br/g, "<br />"),
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
