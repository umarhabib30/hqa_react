import React, { useMemo, useState } from "react";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";

export default function FAQTabs({ data }) {
  const defaultData = useMemo(
    () => ({
      Admissions: [
        {
          q: "What grades does HQIA offer?",
          a: "We currently offer classes from Preschool (3 months+) through 12th grade.",
        },
        {
          q: "What is the admission process?",
          a: "Complete the online application, submit documents, and schedule an assessment.",
        },
        {
          q: "Is there an entrance test?",
          a: "Yes, applicants take an age-appropriate assessment for placement.",
        },
        {
          q: "When does enrollment begin?",
          a: "Rolling admissions are open year-round with priority for early applications.",
        },
        {
          q: "What documents are required?",
          a: "Birth certificate, immunization, transcripts, and parent/guardian ID.",
        },
        {
          q: "Are interviews part of the process?",
          a: "Yes, an interview with students and parents may be required.",
        },
      ],
      Curriculum: [
        {
          q: "What curriculum do you follow?",
          a: "Standards-aligned academics integrated with Quranic and Islamic studies.",
        },
        {
          q: "Are AP or honors courses offered?",
          a: "Yes, select honors and AP courses are offered in upper grades.",
        },
        {
          q: "How is technology integrated?",
          a: "Students use modern learning platforms and digital resources.",
        },
        {
          q: "Are electives available?",
          a: "Yes, electives include Arabic, art, and leadership development.",
        },
        {
          q: "How do you assess students?",
          a: "Through tests, projects, and participation assessments.",
        },
        {
          q: "Do students get report cards?",
          a: "Yes, progress reports are shared quarterly.",
        },
      ],
      "Tuition & Aid": [
        {
          q: "How is tuition billed?",
          a: "Annually, with monthly payment plans available.",
        },
        {
          q: "Do you offer scholarships?",
          a: "Yes, need-based and limited merit scholarships are offered.",
        },
        {
          q: "Are sibling discounts available?",
          a: "Yes, discounts apply for families with multiple enrolled students.",
        },
        {
          q: "Is financial aid guaranteed?",
          a: "No, aid depends on availability and demonstrated need.",
        },
        {
          q: "How to apply for aid?",
          a: "Submit an aid application with supporting documents.",
        },
        {
          q: "What payment methods are accepted?",
          a: "Credit card, bank transfer, and checks.",
        },
      ],
      "Student Life": [
        {
          q: "What extracurriculars are available?",
          a: "Clubs, athletics, Quran competitions, and community service.",
        },
        {
          q: "Is transportation provided?",
          a: "Limited bus routes are available depending on demand.",
        },
        {
          q: "Are there field trips?",
          a: "Yes, educational and recreational trips are scheduled annually.",
        },
        {
          q: "Do students participate in competitions?",
          a: "Yes, local and national academic and Quran competitions.",
        },
        {
          q: "Are there leadership opportunities?",
          a: "Yes, student council and mentoring programs.",
        },
        {
          q: "What about sports?",
          a: "Basketball, soccer, and physical education are offered.",
        },
      ],
      Facilities: [
        {
          q: "What facilities are available?",
          a: "Modern classrooms, labs, library, and prayer areas.",
        },
        {
          q: "Is there a cafeteria?",
          a: "Yes, providing healthy meal options.",
        },
        {
          q: "Do you have science labs?",
          a: "Yes, fully equipped labs for hands-on learning.",
        },
        {
          q: "Are there computer labs?",
          a: "Yes, with updated systems and internet access.",
        },
        {
          q: "Do you have playgrounds?",
          a: "Yes, safe and supervised play areas are available.",
        },
        {
          q: "Is the campus secure?",
          a: "Yes, with surveillance and security staff.",
        },
      ],
      Community: [
        {
          q: "How do parents get involved?",
          a: "Through PTA, volunteering, and school events.",
        },
        {
          q: "Do you host community events?",
          a: "Yes, cultural, academic, and religious programs are hosted yearly.",
        },
        {
          q: "Is there alumni engagement?",
          a: "Yes, alumni often return as mentors and supporters.",
        },
        {
          q: "Do you collaborate with mosques?",
          a: "Yes, for joint educational and community programs.",
        },
        {
          q: "Are service projects part of the curriculum?",
          a: "Yes, students participate in charity and service.",
        },
        {
          q: "How do you support new families?",
          a: "Orientation sessions and mentorship programs.",
        },
      ],
    }),
    []
  );

  const tabs = Object.keys(data || defaultData);
  const content = data || defaultData;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndexByTab, setOpenIndexByTab] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const faqs = content[activeTab] || [];
  const openIndex = openIndexByTab[activeTab] ?? -1;

  const toggle = (i) => {
    setOpenIndexByTab((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] === i ? -1 : i,
    }));
  };

  return (
    <section className="py-12 px-4 sm:px-10 font-serif ">
      <div className="w-full max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {/* Desktop */}
          <div className="hidden sm:flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-12 py-2 rounded-md border text-sm sm:text-base font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#00285E] text-white cursor-pointer border-[#00285E] shadow-lg"
                    : "bg-red-700 text-white cursor-pointer border-gray-300 "
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden relative w-full">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex justify-between items-center w-full px-5 py-3 rounded-md border text-base font-medium transition-all ${
                activeTab
                  ? "bg-[#00285E] text-white border-[#00285E] shadow-lg"
                  : "bg-white text-[#252626] border-gray-300"
              }`}
            >
              <span>{activeTab}</span>
              <FaChevronDown
                className={`${dropdownOpen ? "rotate-180" : ""} transition`}
              />
            </button>

            {/* Mobile dropdown list */}
            {dropdownOpen && (
              <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                {tabs.map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => {
                        setActiveTab(tab);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 hover:bg-gray-100 text-sm ${
                        activeTab === tab
                          ? "bg-blue-50 text-[#00285E] font-semibold border-l-4 border-[#00285E]"
                          : "text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-12">
          {activeTab} FAQs
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className={`rounded-lg shadow-xl p-6 cursor-pointer transition-all duration-300 ${
                  isOpen ? "bg-white" : "bg-[#F3F4FF]"
                }`}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#00285E]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="p text-[#252626]">{item.q}</h3>
                  </div>
                  <button className="p text-[#00285E]">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {isOpen && (
                  <div className="mt-4 border-t border-gray-300 pt-4">
                    <p className="text-gray-700 p">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
