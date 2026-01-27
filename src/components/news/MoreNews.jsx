import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt } from "react-icons/fa";

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 6;

export default function MoreNews() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/news")
      .then((res) => res.json())
      .then((json) => {
        if (json.status) {
          const sortedData = json.data.sort((a, b) => b.id - a.id);
          setNewsData(sortedData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const visibleNews = useMemo(() => {
    return newsData.slice(0, visibleCount);
  }, [newsData, visibleCount]);

  const totalItems = newsData.length;
  const isEnd = visibleCount >= totalItems;
  const isExpanded = visibleCount > INITIAL_ITEMS;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, totalItems));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_ITEMS);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = selectedNews ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [selectedNews]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-16 py-12 md:py-20 font-serif bg-white"
    >
      <h2 className="h1 text-[#00285E] text-center mb-16">
        HQA <span className="text-[#CF3528]">News Archive</span>
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-[500px] bg-gray-100 animate-pulse rounded-2xl"
            />
          ))}
        </div>
      ) : (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
          >
            {visibleNews.map((news) => (
              <motion.div
                key={news.id}
                variants={cardVariants}
                onClick={() => setSelectedNews(news)}
                whileHover={{ y: -12 }}
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer group h-[450px] md:h-[500px] border border-gray-100"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00285E] via-[#00285E]/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end text-white">
                  <h3 className="h1 mb-4 line-clamp-3 leading-tight">
                    {news.title}
                  </h3>

                  <div className="flex justify-between items-center border-t border-white/30 pt-6 mt-4">
                    <span className="text-sm md:text-base opacity-90 flex items-center">
                      <FaCalendarAlt className="mr-2" /> News Update
                    </span>
                    <span className="text-red-400 font-bold text-lg">
                      Read Full Story →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-20">
            {!isEnd ? (
              <button
                onClick={handleLoadMore}
                className="px-12 py-5 text-lg font-bold text-white bg-red-700 rounded-full hover:bg-red-600 transition-all shadow-2xl active:scale-95 cursor-pointer"
              >
                Load More News
              </button>
            ) : isExpanded ? (
              <button
                onClick={handleShowLess}
                className="px-12 py-5 text-lg font-bold border-2 border-red-700 text-red-700 rounded-full hover:bg-red-700 hover:text-white transition-all shadow-md cursor-pointer"
              >
                Show Less
              </button>
            ) : null}
          </div>
        </>
      )}

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-[100] p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full relative overflow-hidden flex flex-col max-h-[90vh]"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 p-3 rounded-full bg-black/40 text-white hover:bg-red-700 transition-colors z-20"
                onClick={() => setSelectedNews(null)}
              >
                <FaTimes size={24} />
              </button>

              <div className="overflow-y-auto scrollbar-hide">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-[300px] md:h-[900px] object-cover"
                />
                <div className="p-8 md:p-16">
                  <h3 className="h1 text-[#00285E] mb-8 leading-tight">
                    {selectedNews.title}
                  </h3>
                  <p className="text-gray-700 p whitespace-pre-wrap">
                    {selectedNews.description ||
                      selectedNews.title + ". Detailed coverage coming soon..."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
