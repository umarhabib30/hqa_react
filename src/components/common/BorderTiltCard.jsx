import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

const BorderTiltCard = ({ card }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(smoothY, [-100, 100], [15, -15]);
  const rotateY = useTransform(smoothX, [-100, 100], [-15, 15]);
  const scale = useTransform(smoothY, [-80, 0, 80], [1.01, 1, 1.01]);

  const cardTransform = useTransform(
    [rotateX, rotateY, scale],
    ([rX, rY, s]) =>
      `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale(${s})`
  );

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) / 4);
    y.set((e.clientY - (rect.top + rect.height / 2)) / 4);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={card.link} className="block h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isMobile ? "none" : cardTransform,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[420px] md:h-[520px] rounded-2xl group cursor-pointer bg-[#f8fbff] border-8 border-white"
      >
        {/* IMAGE */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ transform: isMobile ? "none" : "translateZ(40px)" }}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover select-none pointer-events-none rounded-2xl"
            draggable="false"
          />
        </motion.div>

        {/* OVERLAY */}
        <div
          className={`absolute inset-0 rounded-2xl ${
            isMobile
              ? "bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              : "bg-[#C8E1F8]/0 group-hover:bg-[#00285E]/90"
          } transition-all duration-700`}
          style={{ transform: isMobile ? "none" : "translateZ(30px)" }}
        />

        {/* TEXT */}
        {isMobile ? (
          <div className="absolute bottom-0 inset-x-0 text-white text-center p-5 z-20">
            <h3 className="flex items-center justify-center gap-2 text-lg font-semibold underline">
              {card.title}
              <FaAngleRight />
            </h3>
            <p className="text-sm mt-1">{card.text}</p>
          </div>
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20"
            style={{ transform: "translateZ(60px)" }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-semibold underline opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-5 group-hover:translate-y-0">
              {card.title}
              <FaAngleRight />
            </h3>
            <p className="mt-3 max-w-[250px] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-5 group-hover:translate-y-0">
              {card.text}
            </p>
          </div>
        )}

        {/* GLOW */}
        {!isMobile && (
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,40,94,0.15) 0%, transparent 70%)",
              transform: "translateZ(10px)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default BorderTiltCard;
