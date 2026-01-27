import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    fetch("https://hquranacademy.com/api/jobPosts")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setJobs(data.data);
          setFilteredJobs(data.data);

          // 🔹 unique categories from jobs
          setCategories([...new Set(data.data.map((j) => j.job_category))]);

          // 🔹 unique locations from jobs
          setLocations([...new Set(data.data.map((j) => j.job_location))]);
        }
      })
      .catch((err) => console.error("Jobs API Error:", err));
  }, []);

  const handleSearch = () => {
    let result = jobs;

    if (selectedCategory) {
      result = result.filter((j) => j.job_category === selectedCategory);
    }

    if (selectedLocation) {
      result = result.filter((j) => j.job_location === selectedLocation);
    }

    setFilteredJobs(result);
  };

  return (
    <section className="w-full p-6 md:p-12 font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-gray-800 font-serif mb-12 text-center"
      >
        Job Openings
      </motion.h1>

      {/* FILTER BAR */}
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#23335D] p-6 rounded-lg flex flex-col md:flex-row gap-4 mb-12"
      >
        {/* CATEGORY SELECT */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 rounded-md flex-1 bg-white text-gray-700 font-medium"
        >
          <option value="">All Job Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* LOCATION SELECT */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-3 rounded-md flex-1 bg-white text-gray-700 font-medium"
        >
          <option value="">All Job Locations</option>
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-white text-left font-semibold px-4 py-3 rounded-md flex-1 cursor-pointer hover:bg-gray-100"
        >
          Search
        </button>
      </motion.div>

      {/* JOB CARDS */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
      >
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-xl border-1 border-gray-300 flex justify-between items-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 min-h-[150px] md:min-h-[180px]"
          >
            <div>
              <h2 className="p text-gray-700">{job.job_category}</h2>
              <p className="text-gray-700 mt-12">{job.job_location}</p>
            </div>

            <FaArrowRight className="text-gray-700 text-xl mb-18" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default JobBoard;
