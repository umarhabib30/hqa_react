import React, { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Results = () => {
  const resultsData = [
    {
      id: 1,
      image: "home/result1.webp",
      alt: "IOWA",
      value: 98,
      suffix: "%",
      title: "IOWA",
    },
    {
      id: 2,
      image: "home/result2.webp",
      alt: "ACT",
      value: 28.1,
      suffix: "",
      title: "ACT",
    },
    {
      id: 3,
      image: "home/result3.webp",
      alt: "PSAT",
      value: 1400,
      suffix: "",
      title: "PSAT",
    },
    {
      id: 4,
      image: "home/result4.webp",
      alt: "SAT",
      value: 1375,
      suffix: "",
      title: "SAT",
    },
    {
      id: 5,
      image: "home/result5.webp",
      alt: "STAAR",
      value: 93,
      suffix: "%",
      title: "STAAR",
    },
  ];

  // Ref for mobile slider
  const sliderRef = useRef(null);

  const handleScroll = (dir) => {
    if (!sliderRef.current) return;
    const scrollAmount = 250;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 text-gray-900 font-serif  overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-red-700 mb-16 text-center"
        >
          Standardized Test Results
        </motion.h1>

        {/* Mobile Slider  */}
        <div className="relative sm:hidden ">
          {/* Arrow Buttons */}
          <div className="absolute -top-14 right-2 flex gap-2 ">
            <button
              onClick={() => handleScroll("left")}
              className="w-8 h-8 flex items-center justify-center rounded-full  text-red-700 border border-red-700 shadow-md hover:bg-red-700"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white shadow-md hover:bg-red-700"
            >
              <FaArrowRight size={14} />
            </button>
          </div>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide px-2"
          >
            {resultsData.map((result, index) => (
              <motion.div
                key={result.id}
                variants={SlideUp(0.3 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="min-w-[220px] snap-center p-6 flex-shrink-0 flex flex-col items-center rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <motion.img
                  src={result.image}
                  alt={result.alt}
                  className="w-20 h-20 object-contain mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <motion.p className="text-red-700 text-3xl font-bold italic">
                  <AnimatedNumber value={result.value} suffix={result.suffix} />
                  <span className="text-gray-700 text-base font-medium">
                    {" "}
                    Avg
                  </span>
                </motion.p>

                <motion.p className="text-lg font-semibold text-[#0B49BD] mt-2">
                  {result.title}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:flex flex-wrap justify-center gap-8 cursor-pointer">
          {resultsData.map((result, index) => (
            <motion.div
              key={result.id}
              variants={SlideUp(0.3 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 w-48 flex flex-col items-center rounded-lg bg-white border border-gray-100 shadow-sm"
            >
              <motion.img
                src={result.image}
                alt={result.alt}
                className="w-20 h-20 object-contain mb-4"
              />

              <motion.p className="text-red-700 text-3xl font-bold italic">
                <AnimatedNumber value={result.value} suffix={result.suffix} />
                <span className="text-gray-700 text-base font-medium">
                  {" "}
                  Avg
                </span>
              </motion.p>

              <motion.p className="text-lg font-semibold text-[#0B49BD] mt-2">
                {result.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const decimals = useMemo(() => {
    const s = String(value);
    const idx = s.indexOf(".");
    return idx === -1 ? 0 : s.length - idx - 1;
  }, [value]);

  const base = useMotionValue(0);
  const spring = useSpring(base, { stiffness: 120, damping: 20 });
  const rounded = useTransform(spring, (latest) =>
    decimals > 0
      ? Number(latest).toFixed(decimals)
      : Math.round(latest).toString()
  );

  useEffect(() => {
    if (!isInView) return;
    const target = Number(value) || 0;

    let raf;
    const start = performance.now();
    const DURATION = 800;

    const step = (t) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      base.set(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, base]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default Results;
