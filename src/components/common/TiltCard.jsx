import { FaAngleRight } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

const TiltCard = ({ card }) => {
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // smoother motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useSpring adds smoothing
  const smoothX = useSpring(x, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 15 });

  // reduce rotation range for less jitter
  const rotateX = useTransform(smoothY, [-100, 100], [15, -15]);
  const rotateY = useTransform(smoothX, [-100, 100], [-15, 15]);

  const scale = useTransform(smoothY, [-80, 0, 80], [1.01, 1, 1.01]);

  const cardTransform = useTransform(
    [rotateX, rotateY, scale],
    ([rX, rY, s]) =>
`perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale(${s})`
  );

  // movement logic
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX / 4); 
    y.set(offsetY / 4);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isMobile ? "none" : cardTransform,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[420px] md:h-[520px] rounded-lg group cursor-pointer bg-[#f8fbff]"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ transform: isMobile ? "none" : "translateZ(40px)" }}
      >
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable="false"
        />
      </motion.div>

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-t from-black/70 via-black/40 to-transparent"
            : "bg-[#C8E1F8]/0 group-hover:bg-[#00285E]/90"
        } transition-all duration-700 ease-in-out`}
        style={{ transform: isMobile ? "none" : "translateZ(30px)" }}
      />

      {/* TEXT SECTION */}
      {isMobile ? (
        // MOBILE: show text at bottom over image
        <div className="absolute bottom-0 left-0 right-0 text-white text-center p-5 z-20 ">
          <h3 className="flex items-center justify-center gap-2 text-lg font-semibold underline">
            {card.title}
            <FaAngleRight />
          </h3>
          <p className="text-sm mt-1">{card.text}</p>
        </div>
      ) : (
        //  DESKTOP: hover to show in center
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="flex items-center justify-center gap-2 text-2xl font-semibold underline opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-5 group-hover:translate-y-0">
            {card.title}
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 8 }}
            >
              <FaAngleRight />
            </motion.span>
          </h3>

          <motion.p className="mt-3 text-base max-w-[250px] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-5 group-hover:translate-y-0">
            {card.text}
          </motion.p>
        </div>
      )}

      {/* GLOW */}
      {!isMobile && (
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,40,94,0.15) 0%, transparent 70%)",
            transform: "translateZ(10px)",
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
