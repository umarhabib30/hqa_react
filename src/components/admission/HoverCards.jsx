import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HoverCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const cards = [
    {
      id: 1,
      img: "admission/Tour & Interview.JPEG",
      alt: "Family 1",
      title: "Tour & Interview",
      desc: "There’s no better way to get to know our school than by visiting in person. Come explore our campus and community to experience firsthand what makes us special.",
      btnText: "Book a Tour",
    },
    {
      id: 2,
      img: "admission/Inquire.JPEG",
      alt: "Family 2",
      title: "Inquire",
      desc: "Begin your educational journey with us by filling out our inquiry form. We can’t wait to connect with you!",
      btnText: "Inquire",
    },
    {
      id: 3,
      img: "admission/How to Apply.JPEG",
      alt: "Family 3",
      title: "How to Apply",
      desc: "Learn the steps you need to take to share your story with us and embark on your next exciting chapter.",
      btnText: "Become a Member",
    },
  ];

  const smoothSetHovered = (newHovered) => {
    if (isTransitioning || hovered === newHovered) return;

    setIsTransitioning(true);
    setHovered(newHovered);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleMouseMove = (e, cardId) => {
    if (hovered === null || isTransitioning) return;

    const cardElement = e.currentTarget;
    const cardRect = cardElement.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const mouseX = e.clientX - cardRect.left;

    const leftZone = cardWidth * 0.25;
    const centerZone = cardWidth * 0.75;

    if (hovered === cardId) {
      if (mouseX < leftZone) {
        if (cardId === 1) return;

        smoothSetHovered(cardId - 1);
      } else if (mouseX > centerZone) {
        if (cardId === 3) return;

        smoothSetHovered(cardId + 1);
      } else {
        if (cardId !== 2) {
          smoothSetHovered(2);
        }
      }
    }
  };

  const handleMouseEnter = (cardId) => {
    if (!isTransitioning) {
      smoothSetHovered(cardId);
    }
  };

  const handleMouseLeave = () => {
    if (!isTransitioning) {
      smoothSetHovered(null);
    }
  };

  return (
    <section className="py-12 sm:pb-16 bg-white text-gray-900 font-serif overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="h1 text-center italic text-[#00285E] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Start Your <span className="italic text-red-700">Journey</span>
        </motion.h1>

        {/* Mobile cards */}
        {isMobile ? (
          <div className="flex flex-col space-y-4">
            {cards.map((card) => {
              const isActive = hovered === card.id;
              return (
                <div
                  key={card.id}
                  className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden"
                  onClick={() => setHovered(isActive ? null : card.id)}
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full transition-all duration-700"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 20, 50, 0.95) 0%, rgba(0, 30, 70, 0.85) 40%, transparent 100%)",
                      height: isActive ? "85%" : "75%",
                    }}
                  />

                  <div className="absolute bottom-4 left-4 right-4 transition-all duration-700">
                    <p className="text-white italic text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                      {card.title}
                    </p>

                    {isActive && (
                      <>
                        <p className="text-white text-base leading-relaxed mt-2">
                          {card.desc}
                        </p>
                        {/* Button */}
                        <a
                          href={
                            card.id === 1
                              ? "https://hqasis.com/visitor/form"
                              : card.id === 2
                                ? "https://hqasis.com/front/office/inquiry/form"
                                : "https://hqasis.com/OnlineRegistration"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="mt-3 border border-white text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition">
                            {card.btnText}
                          </button>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Desktop cards

          <div className="relative h-[400px] md:h-[453px] flex transition-all duration-700 overflow-hidden">
            {cards.map((card) => {
              const isActive = hovered === card.id;
              const isCenterCard = card.id === 2;
              const isLeftCard = card.id === 1;
              const isRightCard = card.id === 3;

              return (
                <div
                  key={card.id}
                  className={`relative h-full overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${hovered === null ? "w-1/3" : isActive ? "w-full" : "w-0"
                    } ${isCenterCard ? "border-l-2 border-r-2 border-white" : ""
                    } ${isLeftCard
                      ? "rounded-l-2xl"
                      : isRightCard
                        ? "rounded-r-2xl"
                        : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  onMouseMove={(e) => handleMouseMove(e, card.id)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    minWidth:
                      hovered === null ? "auto" : isActive ? "100%" : "0px",
                    transform:
                      hovered && !isActive
                        ? isLeftCard
                          ? "translateX(-100%)"
                          : isRightCard
                            ? "translateX(100%)"
                            : "translateX(0)"
                        : "translateX(0)",
                    opacity: hovered === null ? 1 : isActive ? 1 : 0,
                    zIndex: isActive ? 20 : hovered === null ? 10 : 0,
                    filter: isTransitioning && !isActive ? "blur(1px)" : "none",
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
                    style={{
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                      transition:
                        "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-1/2 transition-all duration-700"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 20, 50, 0.95) 0%, rgba(0, 30, 70, 0.85) 60%, transparent 100%)",
                    }}
                  />

                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative w-full h-full">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white opacity-70 transform -translate-x-50"></div>
                        <div className="absolute h-full left-1/2   w-0.5  bg-white opacity-70 transform translate-x-60"></div>
                      </div>
                    </div>
                  )}

                  <div
                    className={`absolute bottom-4 transition-all duration-700 z-50 ${isLeftCard
                      ? "left-6 text-left"
                      : isRightCard
                        ? "right-20 text-left"
                        : "left-1/2 transform -translate-x-1/2 text-left"
                      }`}
                  >
                    <p className="text-white italic  text-2xl sm:text-3xl md:text-4xl  font-medium mb-2">
                      {card.title}
                    </p>
                    {isActive && (
                      <>
                        <p
                          className={`text-white text-[18px] leading-relaxed mt-2 ${isLeftCard
                            ? "text-left  max-w-[300px]"
                            : isRightCard
                              ? "text-left max-w-[300px] ml-1"
                              : "text-left max-w-[300px] mx-auto"
                            }`}
                        >
                          {card.desc}
                        </p>
                        {/* Button  */}
                        <a
                          href={
                            card.id === 1
                              ? "https://hqasis.com/visitor/form"
                              : card.id === 2
                                ? "https://hqasis.com/front/office/inquiry/form"
                                : "https://hqasis.com/OnlineRegistration"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="mt-3 border border-white text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition">
                            {card.btnText}
                          </button>
                        </a>
                      </>
                    )}
                  </div>

                  {isActive && (
                    <>
                      {/* Left navigation zone */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1/4 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-30"
                        onMouseEnter={() => {
                          if (card.id > 1) smoothSetHovered(card.id - 1);
                        }}
                      />
                      {/* Center navigation zone */}
                      <div
                        className="absolute left-1/4 top-0 bottom-0 w-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-30"
                        onMouseEnter={() => {
                          if (card.id !== 2) smoothSetHovered(2);
                        }}
                      />
                      {/* Right navigation zone */}
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1/4 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-30"
                        onMouseEnter={() => {
                          if (card.id < 3) smoothSetHovered(card.id + 1);
                        }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HoverCards;
