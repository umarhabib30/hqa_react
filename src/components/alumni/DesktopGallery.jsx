import React from "react";
import { motion } from "framer-motion";

const DesktopGallery = ({
  students,
  active,
  centerIndex,
  handleImageClick,
}) => {
  return (
    <div className="hidden md:flex w-full justify-center gap-2 overflow-hidden rounded-xl items-end">
      {students.map((student, index) => {
        const isActive = active === index;
        const isCenter = index === centerIndex;

        let width = 212;
        let height = 508;
        if (active === null && isCenter) {
          width = 396;
          height = 580;
        } else if (isActive) {
          width = 396;
          height = 580;
        }

        return (
          <div key={student.id} className="flex items-end">
            <motion.div
              className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg flex items-end"
              onClick={() => handleImageClick(index)}
              animate={{ width, height }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={student.image}
                alt={student.name}
                className="w-full object-cover"
                style={{ height: "100%" }}
                animate={{
                  scale: isActive || (active === null && isCenter) ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Desktop Name */}
              <motion.p
                className={`absolute text-white italic text-base sm:text-lg font-medium ${
                  isActive || (active === null && isCenter)
                    ? "bottom-4 left-4"
                    : "right-4 top-1/2 transform translate-y-30"
                }`}
                animate={{
                  rotate: isActive || (active === null && isCenter) ? 0 : 180,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  writingMode:
                    !isActive && !(active === null && isCenter)
                      ? "vertical-rl"
                      : "horizontal-tb",
                }}
              >
                {student.name}
              </motion.p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopGallery;
