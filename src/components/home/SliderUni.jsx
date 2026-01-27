import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const universities = [
  "University of Houston",
  "Texas A & M University",
  "University of Texas at Austin",
  "University of Houston",
  "Texas A & M University",
  "University of Texas at Austin",
  "Rice University",
];

const SliderUni = () => {
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) setDuration(8);
      else if (window.innerWidth < 1024) setDuration(15);
      else setDuration(20);
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="overflow-hidden py-6 font-serif relative">
      <div className="flex w-max">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="flex gap-16 pr-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration,
            }}
          >
            {universities.map((uni, index) => (
              <span
                key={`${i}-${index}`}
                className="text-2xl font-semibold text-[#0F2C56] italic whitespace-nowrap"
              >
                {uni}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SliderUni;
