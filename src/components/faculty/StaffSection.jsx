import React, { useState, useEffect } from "react";
import { FaPlus, FaEllipsisV, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const StaffSection = () => {
  const staffData = {
    // Note: Kept your specific spelling "Adminstration" so it matches the data key
    Adminstration: [
       {
        img: "/faculty/p4.jpg",
        name: "Dr. Hamid Ghazali",
        role: "Principal",
        description:
          "Noor Fatima is dedicated to building strong foundations for early learners.",
      },
       {
        img: "/faculty/a3.jpg",
        name: "Shamima Khalid",
        role: "Vice Principal",
        description:
          "Noor Fatima is dedicated to building strong foundations for early learners.",
      },

      {
        img: "/faculty/p3.jpg",
        name: "Dr.Dina Geumei",
        role: "Assistant Principal Elementary",
        description:
          "Ali Raza specializes in creative learning techniques for young children.",
      },
      {
        img: "/faculty/pk5.jpg",
        name: "  Humera Laique",
        role: "Director HQA Preschool",
        description:
          "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      },
       {
        img: "/faculty/p8.jpg",
        name: " Lila Sharafeldin ",
        role: "Senior Admin",
        description:
          "Noor Fatima is dedicated to building strong foundations for early learners.",
      },

      {
        img: "/faculty/p1.jpg",
        name: " Wajeeha Aleem ",
        role: "Admin",
        description:
          "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      },

      

      // {
      //   img: "/faculty/p2.jpg",
      //   name: " Dana Chehab ",
      //   role: "Elementary Counselor",
      //   description:
      //     "Emma Smith supports classroom learning and focuses on early literacy development.",
      // },
      
      // {
      //   img: "/faculty/p5.jpg",
      //   name: " Amina Ishaq",
      //   role: "Middle and High Counselor",
      //   description:
      //     "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      // },
      {
        img: "/faculty/p6.jpg",
        name: " Feda Mohammad ",
        role: "Admin",
        description:
          "Emma Smith supports classroom learning and focuses on early literacy development.",
      },
      {
        img: "/faculty/p7.jpg",
        name: " Suzan Ramadan",
        role: "Admin",
        description:
          "Ali Raza specializes in creative learning techniques for young children.",
      },
     
    
    ],

                   // Quran Staff
    Quran: [
      {
        img: "/faculty/Q1.jpg",
        name: "Dilireba Abula",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q2.jpg",
        name: "Fariza Adilby",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q3.jpg",
        name: "Samar Al Qadoumi",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q4.jpg",
        name: "Hanan Ali",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q5.jpg",
        name: "Dhuwiya Aljanabi",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q6.jpg",
        name: "Saleh Aljanabi",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q7.jpg",
        name: "Motassem Alqudah",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q8.jpg",
        name: "Sahar Botour",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q9.jpg",
        name: "Ola Darwish",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q10.jpg",
        name: "Maged Ebrahim",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q11.jpg",
        name: "Mohamed Elbess",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q12.jpg",
        name: "Refaat Elsayed",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q13.jpg",
        name: "Ghada Ibrahim",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q14.jpg",
        name: "Wafaa Ibrahim",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q15.jpg",
        name: "Arif Khan",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q16.jpg",
        name: "Aliaa Salahi",
        role: "",
        description: "",
      },
      {
        img: "/faculty/Q17.jpg",
        name: "Areej Yacoub",
        role: "",
        description: "",
      },
    ],

     // Pre school
    "Pre-K": [
      {
        img: "/faculty/pk1.jpg",
        name: "  Nida Chaklashia ",
        role: "",
        description:
          "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      },
      {
        img: "/faculty/pk2.jpg",
        name: "  Rasha Elberry ",
        role: "",
        description:
          "Emma Smith supports classroom learning and focuses on early literacy development.",
      },
      {
        img: "/faculty/pk3.jpg",
        name: " Rachida El-Hajjaji",
        role: "",
        description:
          "Ali Raza specializes in creative learning techniques for young children.",
      },
      {
        img: "/faculty/pk4.jpg",
        name: " Nahla Elshikh",
        role: "",
        description:
          "Noor Fatima is dedicated to building strong foundations for early learners.",
      },
      {
        img: "/faculty/pk5.jpg",
        name: "  Humera Laique",
        role: "",
        description:
          "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      },
      {
        img: "/faculty/pk6.jpg",
        name: "Atiya   Qureshi ",
        role: "",
        description:
          "Emma Smith supports classroom learning and focuses on early literacy development.",
      },
      {
        img: "/faculty/pk7.jpg",
        name: "   Sherin Salem",
        role: "",
        description:
          "Ali Raza specializes in creative learning techniques for young children.",
      },
      {
        img: "/faculty/pk8.jpg",
        name: " Thiab Eva ",
        role: "",
        description:
          "Noor Fatima is dedicated to building strong foundations for early learners.",
      },
    ],
    
    //  Elementary
    Elementary: [
      {
        img: "/faculty/E1.jpg",
        name: " Nareman Aamir  ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E2.jpg",
        name: "Shirin Aktar ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E3.jpg",
        name: "Adan Alhawawsheh ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E4.jpg",
        name: "Shaheera Ali",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E5.jpg",
        name: "Layla Azar",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E6.jpg",
        name: "Hajar Charafi",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E7.jpg",
        name: "Nanci Daoud ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E8.jpg",
        name: "Doaa El-Banna ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E9.jpg",
        name: "Nida Haider ",
        role: "",
        description: "",
      },

      {
        img: "/faculty/E10.jpg",
        name: "Wesam Ibrahim ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E11.jpg",
        name: "Tabassum Mughal ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E12.jpg",
        name: "Maha Osman ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E13.jpg",
        name: "Sahar Osman ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E14.jpg",
        name: "Sumera Rahim ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E15.jpg",
        name: "Amira Ramadan",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E16.jpg",
        name: "Sayed Nazira ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E17.jpg",
        name: "Suha Subeh ",
        role: "",
        description: "",
      },
      {
        img: "/faculty/E18.jpg",
        name: "Soofia Zareen ",
        role: "",
        description: "",
      },
    ],

     // Middle school
    "Middle School": [
      {
        img: "/faculty/m1.jpg",
        name: "   Noha  Abdelaziz",
        role: "",
        description:
          "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      },
      {
        img: "/faculty/m2.jpg",
        name: "   Mahwish  Farrukh",
        role: "",
        description:
          "Emma Smith supports classroom learning and focuses on early literacy development.",
      },
      {
        img: "/faculty/m3.jpg",
        name: "  Afreen Imtiaz ",
        role: "",
        description:
          "Ali Raza specializes in creative learning techniques for young children.",
      },
      {
        img: "/faculty/m4.jpg",
        name: " Dr.  Alhanbali Maha",
        role: "",
        description:
          "Noor Fatima is dedicated to building strong foundations for early learners.",
      },
      {
        img: "/faculty/m5.jpg",
        name: "Asha  Mahamud ",
        role: "",
        description:
          "John Doe has over 10 years of experience in early childhood education and is passionate about nurturing young minds.",
      },
      {
        img: "/faculty/m6.jpg",
        name: " Aamna Mian   ",
        role: "",
        description:
          "Emma Smith supports classroom learning and focuses on early literacy development.",
      },
    ],

    // High school 

    "High School": [
      {
        img: "/faculty/h1.jpg",
        name: "Dr.Ghazali Hamid",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h2.jpg",
        name: "Noha Abdelaziz",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h3.jpg",
        name: "Banafsaj Kanaan",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h4.jpg",
        name: "Lila Sharafeldin",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h5.jpg",
        name: "Salma Shahin",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h6.jpg",
        name: "Dr. Alhanbali Maha",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h7.jpg",
        name: "Jawairia Ghauri",
        role: "",
        description: "",
      },
      {
        img: "/faculty/h8.jpg",
        name: "Joe Bradford",
        role: "",
        description: "",
      },
    ],

  };

  // UPDATED: Set initial state to "Adminstration"
  const [selectedSchool, setSelectedSchool] = useState("Adminstration");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSchools, setExpandedSchools] = useState({});
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const schoolTypes = Object.keys(staffData);
  const staffToShow = staffData[selectedSchool] || [];
  const isExpanded = expandedSchools[selectedSchool] || false;

  // Adjusted visible staff logic: shows 4 initially on mobile, 8 on desktop
  const limit = isMobile ? 4 : 8;
  const visibleStaff = isExpanded ? staffToShow : staffToShow.slice(0, limit);

  const toggleExpanded = () => {
    setExpandedSchools((prev) => ({
      ...prev,
      [selectedSchool]: !prev[selectedSchool],
    }));
  };

  const openModal = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="w-full px-5 md:px-10 py-12 font-serif">
      <section
        className={`rounded-lg p-6 md:p-10 ${
          isMobile ? "" : "border-2 border-gray-300 shadow-2xl"
        }`}
      >
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-center text-[#CF3528] mb-6"
        >
          Our Staff: The Heart of Campus Life
        </motion.h1>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-center p mb-8 max-w-6xl mx-auto"
        >
          Behind every successful school day is a dedicated team of staff who
          ensure our school community thrives.
        </motion.p>

        {/* Desktop Tabs */}
        <div className="hidden md:grid bg-[#00285E] text-white p py-3 px-0 rounded-md grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-center mb-12">
          {schoolTypes.map((type) => (
            <span
              key={type}
              onClick={() => setSelectedSchool(type)}
              className={`cursor-pointer transition-colors duration-300 ${
                selectedSchool === type
                  ? "text-[#CF3528] font-bold"
                  : "hover:text-gray-300"
              }`}
            >
              {type}
            </span>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden bg-[#00285E] text-white py-3 px-4 rounded-md flex justify-between mb-6">
          <span>{selectedSchool}</span>
          <FaEllipsisV
            className="cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        </div>

        {dropdownOpen && (
          <div className="md:hidden bg-white border border-gray-200 shadow-lg rounded-md mb-6 overflow-hidden">
            {schoolTypes.map((type) => (
              <p
                key={type}
                onClick={() => {
                  setSelectedSchool(type);
                  setDropdownOpen(false);
                }}
                className={`px-4 py-3 border-b border-gray-100 last:border-0 cursor-pointer ${
                  selectedSchool === type
                    ? "bg-gray-100 text-[#CF3528] font-bold"
                    : ""
                }`}
              >
                {type}
              </p>
            ))}
          </div>
        )}

        {/* Staff Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer gap-10">
          {visibleStaff.map((person, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white rounded-md overflow-hidden shadow-lg group">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-76 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 italic">
                      {person.role}
                    </p>
                    <div
                      onClick={() => openModal(person)}
                      className="w-8 h-8 bg-[#CF3528] text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-[#b42d22] transition-colors"
                    >
                      <FaPlus size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button - Only shows if there are more items to display */}
        {staffToShow.length > limit && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleExpanded}
              className="bg-[#CF3528] cursor-pointer text-white px-8 py-2 rounded-md hover:bg-[#b42d22] transition-all font-semibold shadow-md"
            >
              {isExpanded ? "Show Less" : `More from ${selectedSchool}`}
            </button>
          </div>
        )}
      </section>

      {/* ========= MODAL ========= */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-md w-full relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-[#CF3528] z-10 p-2"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={selectedPerson.img}
                    alt={selectedPerson.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#CF3528] shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#00285E] mb-1">
                  {selectedPerson.name}
                </h3>
                <p className="text-lg italic text-[#CF3528] mb-6">
                  {selectedPerson.role}
                </p>
                <div className="h-[1px] bg-gray-200 w-2/3 mx-auto mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedPerson.description ||
                    "This staff member is dedicated to excellence in education."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StaffSection;
