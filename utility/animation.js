export const SlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
});

export const SlideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
});

export const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
});

// ✅ Special smoother animation for buttons
export const SlideButton = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
    },
  },
});

// Add these to your existing animation.js file

export const FadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});

export const StaggerChildren = (stagger = 0.1) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  },
});
// Image comes from top to its position
export const SlideDownSmooth = (delay = 0) => ({
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring",
      stiffness: 100,
    },
  },
  exit: { y: 80, opacity: 0 },
});

// Card comes from bottom to its position
export const SlideUpSmooth = (delay = 0) => ({
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring",
      stiffness: 100,
    },
  },
  exit: { y: -80, opacity: 0 },
});

// Container & item variants for staggered animation (cards come from LEFT)
// Smoother stagger container
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // controls delay between cards
      delayChildren: 0.2, // slight initial delay
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Super smooth card animation (slide + fade)
export const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic easing
      type: "tween",
    },
  },
};
