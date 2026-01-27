import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MobileScroller = ({
  students,
  active,
  centerIndex,
  handleImageClick,
  isMobile,
  isInitialLoad,
  setIsInitialLoad,
  currentPage,
}) => {
  const scrollContainerRef = useRef(null);

  // Effect to handle initial mobile centering AND re-center on page change
  useEffect(() => {
    if (
      isMobile &&
      scrollContainerRef.current &&
      isInitialLoad &&
      students.length > centerIndex
    ) {
      const container = scrollContainerRef.current;
      const scrollContent = container.querySelector(".flex");
      const centerElement = scrollContent.children[centerIndex];
      if (centerElement) {
        const scrollLeft =
          centerElement.offsetLeft -
          (container.offsetWidth - centerElement.offsetWidth) / 2;
        setTimeout(() => {
          container.scrollTo({ left: scrollLeft, behavior: "instant" });
          setIsInitialLoad(false);
        }, 100);
      }
    }
  }, [
    isMobile,
    isInitialLoad,
    students,
    centerIndex,
    setIsInitialLoad,
    currentPage,
  ]); 

  // Effect to handle mobile scroll on click
  useEffect(() => {
    if (
      isMobile &&
      scrollContainerRef.current &&
      !isInitialLoad &&
      active !== null &&
      students.length > active
    ) {
      const container = scrollContainerRef.current;
      const scrollContent = container.querySelector(".flex");
      const activeElement = scrollContent.children[active];
      if (activeElement) {
        const scrollLeft =
          activeElement.offsetLeft -
          (container.offsetWidth - activeElement.offsetWidth) / 2;
        setTimeout(() => {
          container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }, 100);
      }
    }
  }, [active, isMobile, isInitialLoad, students]);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="md:hidden flex overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar"
      >
        <div className="flex gap-4 min-w-max items-end px-8">
          {students.map((student, index) => {
            const isActive = active === index;
            const isCenter = index === centerIndex;
            const isActiveOrCenter = isActive || (active === null && isCenter);

            let width = 120;
            let height = 300;
            if (active === null && isCenter) {
              width = 200;
              height = 400;
            } else if (isActive) {
              width = 200;
              height = 400;
            }

            return (
              <div
                key={`mobile-${student.id}`}
                className="flex items-end transition-all duration-300"
              >
                <motion.div
                  className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg flex-shrink-0"
                  onClick={() => handleImageClick(index)}
                  animate={{ width, height }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    animate={{ scale: isActiveOrCenter ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* Mobile Name */}
                  <motion.p
                    className={`absolute text-white italic text-sm font-medium ${
                      isActiveOrCenter
                        ? "bottom-3 left-1/2 transform -translate-x-1/2 text-center w-full px-2"
                        : "right-2 top-1/2 transform translate-y-10"
                    }`}
                    animate={{ rotate: isActiveOrCenter ? 0 : 180 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      writingMode: !isActiveOrCenter
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
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          .hide-scrollbar {
            scroll-behavior: smooth;
          }
        }
      `}</style>
      <style jsx global>{`
        @media (max-width: 767px) {
          .hide-scrollbar {
            -webkit-overflow-scrolling: touch;
          }

          .flex-shrink-0 {
            tap-highlight-color: transparent;
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </>
  );
};

export default MobileScroller;
