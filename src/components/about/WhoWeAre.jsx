import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { SlideLeft, SlideRight, SlideButton } from "../../../utility/animation";

export default function WhoWeAreSection({
  title = "Who We Are",
  primaryCta = { label: "Meet the Team", href: "/faculty" },
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-[#0b2a4a] overflow-hidden py-4 font-serif"
    >
      <div className="px-10 pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={SlideRight(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative cursor-pointer order-2 lg:order-1 h-[380px] sm:h-[440px] md:h-[620px]"
          >
            {/* Main Image */}
            <motion.img
              src="/about/Who We Are.jpg"
              alt="Instructor writing on a chalkboard"
              className="absolute left-0 top-12 h-[70%] w-[78%] md:h-[85%] md:w-[70%] border-4 border-white rounded-2xl object-cover shadow-xl  ring-2 ring-white/10 transition-transform duration-500 hover:scale-105"
            />

            {/* Overlapping Image */}
            <motion.img
              src="/about/aree.jpeg"
              alt="School campus walkway"
              className="absolute bottom-20 md:bottom-34 right-0 h-[52%] w-[40%] rounded-2xl border-4 border-white object-cover shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2 space-y-12 text-slate-200">
            <motion.h1
              variants={SlideLeft(0.4)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-serif italic h1 mb-10 leading-tight text-white"
            >
              {title}
            </motion.h1>

            <div className=" md:space-y-6 p  leading-relaxed">
              <motion.p
                variants={SlideLeft(0.8)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                We are a dedicated community of educators, mentors, students,
                and families committed to fostering integrity, excellence, and
                compassion.
              </motion.p>
              <motion.p
                variants={SlideLeft(1.2)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                At HQA, every student embarks on a journey of self-discovery—
                imbued with Islamic values—to become a thoughtful, resilient,
                and purposeful individual. Our staff works tirelessly to create
                an environment where academic achievement and personal growth
                flourish side by side.
              </motion.p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 md:pt-2">
              <motion.a
                variants={SlideButton(1.4)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                href={primaryCta.href}
                className="w-46 h-12 rounded-md flex items-center justify-center  bg-[#CF3528] text-white  shadow-md hover:bg-[#b32d22] transition-all"
              >
                {primaryCta.label}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
