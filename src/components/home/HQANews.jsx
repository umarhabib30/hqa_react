import React, { useState, useMemo, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HQANews() {
  const [activeTab, setActiveTab] = useState("News");
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [cardsPerView, setCardsPerView] = useState(3);

  const navigate = useNavigate();
  const tabs = ["News", "Videos", "Social"];

  const getEmbedUrl = (url) => {
    if (!url) return "";
    let videoId = "";

    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0];
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("embed/")) {
      return url;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch API Data
  useEffect(() => {
    setLoading(true);
    setStartIndex(0);
    const apiUrlMap = {
      News: "https://hquranacademy.com/api/news",
      Videos: "https://hquranacademy.com/api/videos",
      Social: "https://hquranacademy.com/api/socials",
    };

    fetch(apiUrlMap[activeTab])
      .then((res) => res.json())
      .then((json) => {
        if (json.status) {
          const sorted = json.data.sort((a, b) => b.id - a.id);
          setDataList(sorted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [activeTab]);

  const visibleCards = useMemo(() => {
    return dataList.slice(startIndex, startIndex + cardsPerView);
  }, [dataList, startIndex, cardsPerView]);

  const handleNext = () =>
    startIndex + cardsPerView < dataList.length &&
    setStartIndex((prev) => prev + 1);
  const handleBack = () => startIndex > 0 && setStartIndex((prev) => prev - 1);

  const canGoNext = startIndex + cardsPerView < dataList.length;
  const canGoBack = startIndex > 0;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-serif overflow-x-hidden relative bg-white w-full">
      {/* VIDEO POPUP MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-red-500 z-10 p-2 bg-black/50 rounded-full transition-all"
              >
                <FaTimes size={24} />
              </button>
              <iframe
                src={getEmbedUrl(selectedVideo)}
                title="HQA Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12">
        <h1 className="h1 text-[#00285E] ">
          More <span className="text-[#CF3528]">HQA News</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* ARROWS */}
        <div className="flex flex-row lg:flex-col justify-center items-center gap-4 order-2 lg:order-1">
          <button
            onClick={handleBack}
            disabled={!canGoBack}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
              canGoBack
                ? "border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
                : "border-gray-200 text-gray-300"
            }`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              canGoNext
                ? "bg-red-700 text-white shadow-lg hover:bg-red-600"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 order-1 lg:order-2 min-w-0">
          <div className="flex justify-center mb-10 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-6 p cursor-pointer transition-all border-b-4 ${
                  activeTab === tab
                    ? "text-red-700 border-red-700"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[500px]">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(cardsPerView)].map((_, i) => (
                  <div
                    key={i}
                    className="h-96 bg-gray-100 animate-pulse rounded-xl"
                  />
                ))}
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${startIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {visibleCards.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100 group min-w-0"
                    >
                      <div className="aspect-[4/4] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </div>

                      <div className="p-5 sm:p-6 bg-[#00285E]  text-white flex flex-col flex-grow border-t-4 border-red-700 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-6 leading-tight break-words overflow-wrap-anywhere">
                          {item.title}
                        </h3>

                        <div className="mt-auto ">
                          <button
                            onClick={() => {
                              if (activeTab === "News")
                                navigate(`/news/${item.id}`);
                              else if (activeTab === "Videos")
                                setSelectedVideo(item.video_link);
                              else {
                                const url =
                                  item.ytlink ||
                                  item.fblink ||
                                  item.instalink ||
                                  item.tiktoklink;
                                if (url) window.open(url, "_blank");
                              }
                            }}
                            className="flex items-center p uppercase cursor-pointer  hover:text-red-400 transition-colors"
                          >
                            {activeTab === "News"
                              ? "Read Story"
                              : activeTab === "Videos"
                                ? "Play Video"
                                : "View Social"}
                            <FaArrowRight className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
