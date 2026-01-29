import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
import JobApplicationForm from "./JobApplicationForm";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // 🔹 popup state
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/jobPosts")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setJobs(data.data);
          setFilteredJobs(data.data);
          setCategories([...new Set(data.data.map((j) => j.job_category))]);
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

  const openApplyForm = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  return (
    <section className="w-full p-6 md:p-12 font-serif overflow-hidden relative">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-gray-800 mb-12 text-center"
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
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 rounded-md flex-1 bg-white"
        >
          <option value="">All Job Categories</option>
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-3 rounded-md flex-1 bg-white"
        >
          <option value="">All Job Locations</option>
          {locations.map((loc, i) => (
            <option key={i}>{loc}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-white font-semibold px-4 py-3 rounded-md hover:bg-gray-100"
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-xl border flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {job.job_category}
              </h2>
              <p className="text-gray-600 mt-2">{job.job_location}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => openApplyForm(job)}
                className="bg-[#23335D] text-white px-4 py-2 rounded-md hover:bg-[#1b2850]"
              >
                Apply to Job
              </button>
              <FaArrowRight className="text-gray-600 text-lg" />
            </div>
          </div>
        ))}
      </motion.div>

      {/* POPUP MODAL */}
      {showForm && selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-3xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <JobApplicationForm
              jobTitle={selectedJob.job_category}
              location={selectedJob.job_location}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default JobBoard;
