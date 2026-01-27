
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.scss";
import { SlideUp } from "../../../utility/animation";

import picture1 from "../../assets/img6.jpeg";
import picture2 from "../../assets/img1.jpg";
import picture3 from "../../assets/img2.jpg";
import picture5 from "../../assets/img5.jpg";
import picture6 from "../../assets/img3.jpg";
import picture7 from "../../assets/img4.jpg";

import SloganParallax from "./SloganParallax";

const Hero = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  //  SAME animation as before
  const scale4 = useTransform(scrollYProgress, [0, 0.7], [1, 2.6]);
  const scale5 = useTransform(scrollYProgress, [0, 0.7], [1, 2.8]);
  const scale6 = useTransform(scrollYProgress, [0, 0.7], [1, 3]);
  const scale8 = useTransform(scrollYProgress, [0, 0.7], [1, 3.2]);

  const sloganY = useTransform(scrollYProgress, [0.6, 1], ["100%", "0%"]);
  const sloganOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  const elements = [
    { src: picture1, scale: scale4, className: styles.img1, type: "img" },
    { src: picture2, scale: scale5, className: styles.img2, type: "img" },
    { src: picture3, scale: scale6, className: styles.img3, type: "img" },

    //SAME animation, only source fixed
    {
      src: "/home/new (2).mp4",
      scale: scale5,
      className: styles.img4,
      type: "video",
    },

    { src: picture5, scale: scale6, className: styles.img5, type: "img" },
    { src: picture6, scale: scale6, className: styles.img6, type: "img" },
    { src: picture7, scale: scale8, className: styles.img7, type: "img" },
  ];

  return (
    <section ref={container} className={`${styles.container} bg-white`}>
      <div className={styles.sticky}>
        {elements.map(({ src, scale, className, type }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            variants={SlideUp(0.1 + index * 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ layout: false }}
            className={`${styles.el} ${className}`}
          >
            <div className={styles.imageContainer}>
              {type === "img" ? (
                <img
                  src={src}
                  alt={`hero-img-${index}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
            </div>
          </motion.div>
        ))}

        {/* SAME slogan animation */}
        <motion.div
          style={{ y: sloganY, opacity: sloganOpacity }}
          className="absolute inset-0 z-50 pointer-events-none"
        >
          <SloganParallax />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
