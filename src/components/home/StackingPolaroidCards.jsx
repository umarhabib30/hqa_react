import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

export default function StackingPolaroidCards({ seed = 42 }) {
  const stageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Data
  const cards = [
    { text: "Academic Excellence", icon: "/home/i1.gif" },
    { text: "Leadership & Public Speaking", icon: "/home/i5.gif" },
    { text: "Community Service & Competitions", icon: "/home/i4.gif" },
    { text: "Athletics & Tournaments", icon: "/home/i2.gif" },
    { text: "Accredited & Experienced Faculty", icon: "/home/i6.gif" },
    { text: "Senior Class Umrah Experience", icon: "/home/i3.gif" },
  ];

  const rng = useMemo(() => mulberry32(seed), [seed]);
  const order = useMemo(() => shuffle([...cards.keys()], rng), [cards, rng]);
  const variations = useMemo(
    () =>
      order.map(() => ({
        rot: lerp(rng(), -12, 12),
        x: lerp(rng(), -36, 36),
        y: lerp(rng(), -18, 18),
      })),
    [order, rng]
  );

  const total = order.length;
  const step = 1 / (total + 1.4);

  return (
    <section
      ref={stageRef}
      aria-label="Building Bright Futures"
      className="relative h-[calc(100vh_*_3)] sm:h-[calc(100vh_*_3.4)] text-gray-900  "
    >
      <div className="max-w-5xl mx-auto  text-center px-4 md:py-12 font-seri  overflow-hidden">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 mb-4"
        >
          <span className="text-[#00285E] font-normal h1">Building</span>{" "}
          <span className="text-red-700 italic font-normal h1">
            Bright Futures
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-800 p"
        >
          We cultivate wisdom, strengthen character, and ignite potential.
          Rooted in faith and excellence, we empower students to lead, thrive,
          and shape a brighter future.
        </motion.p>
      </div>
      {/* Sticky stage  */}
      <div className="sticky top-0 h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden ">
        <div className="relative w-full max-w-5xl mb-2 md:mb-70 md:mt-40 h-full">
          {/* Cards */}
          {order.map((cardIndex, i) => {
            const start = step * i;
            const end = step * (i + 1);

            const progressRaw = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );
            const progress = useSpring(progressRaw, {
              stiffness: 150,
              damping: 30,
              mass: 0.5,
            });

            const opacity = useTransform(progress, [0, 0.3, 1], [0, 1, 1]);

            const translateY = useTransform(progress, [0, 1], [300, 0]);
            const scale = useTransform(progress, [0, 1], [0.85, 1]);
            const rotate = useTransform(
              progress,
              [0, 1],
              [0, variations[i].rot]
            );
            const translateX = useTransform(
              progress,
              [0, 1],
              [0, variations[i].x]
            );

            const isEven = i % 2 === 0;
            const { text, icon } = cards[cardIndex];

            return (
              <motion.figure
                key={`card-${cardIndex}`}
                style={{
                  opacity,
                  y: translateY,
                  x: translateX,
                  rotate,
                  scale,
                  zIndex: 10 + i,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[90%] max-w-[280px] md:max-w-[320px] sm:w-[320px] md:w-[420px] md:mt-14  
                  aspect-[3/4] select-none pointer-events-none"
              >
                <div
                  className={`rounded-xl shadow-2xl shadow-black/10 border-2 border-black/20 
                    p-4 sm:p-6 flex flex-col items-center justify-center h-full text-center 
                    font-serif text-3xl sm:text-3xl md:text-4xl font-medium
                    ${
                      isEven
                        ? "bg-[#00285E] text-white"
                        : "bg-[#BCDDFC] text-[#00285E]"
                    }`}
                >
                  {/* Icon */}
                  <img
                    src={icon}
                    alt="card icon"
                    className="w-20 h-20 sm:w-26 sm:h-26 mb-4 object-contain"
                  />

                  {/* Text */}
                  {text}
                </div>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- helpers ----------
function mulberry32(a) {
  let t = a + 0x6d2b79f5;
  return function () {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rand) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function lerp(t, a, b) {
  return a + t * (b - a);
}
