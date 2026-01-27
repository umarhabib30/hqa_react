import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const RedFooter = () => {
  // Define links for the middle column
  const footerLinks = [
    { name: "Employment", path: "/career" },
    { name: "Calendar", path: "/schoolCalendar" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
  ];

  return (
    <div className="bg-[#00285E]">
      <footer className="bg-red-700 min-h-screen lg:mr-20 font-serif rounded-tr-[40px] lg:rounded-tr-[70px]">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Column */}
          <div className="px-8 sm:px-12 lg:px-0 flex flex-col">
            <div className="flex flex-row items-center gap-3 pt-12 lg:pt-24 lg:pl-24 text-center lg:text-left">
              <img src="/logo.png" className="h-20 lg:h-28" alt="logo" />
              <p className="text-white text-lg lg:text-2xl">
                Houston <br /> Quran <br /> Academy
              </p>
            </div>

            <p className="text-white pt-6 text-lg lg:text-xl lg:pl-24">
              <span className="block lg:hidden">
                Established in 2008, Houston Quran Academy is a nonprofit school
                for PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
              </span>
              <span className="hidden lg:block">
                Established in 2008, Houston Quran <br />
                Academy is a nonprofit school for PK-12 <br />
                Grades 1902 Baker Rd, Houston, Texas <br />
                77407
              </span>
            </p>

            <p className="text-white pt-10 lg:pt-16 text-lg lg:text-xl lg:pl-24">
              281-717-4622
            </p>
            <p className="text-white pt-6 text-lg lg:text-xl lg:pl-24">
              Connect with Us
            </p>
            <div className="text-white text-2xl lg:text-3xl pt-3 flex gap-6 lg:pl-24">
              <FaFacebookF className="cursor-pointer hover:text-[#00285E] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#00285E] transition" />
              <FaXTwitter className="cursor-pointer hover:text-[#00285E] transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#00285E] transition" />
            </div>

            {/* Mobile Middle Column Links */}
            <div className="mt-8 lg:hidden space-y-5 px-0">
              <p className="text-white text-lg leading-relaxed mb-4">
                At Houston Quran Academy, every child’s journey is rooted in
                faith, knowledge, and character.
              </p>
              {footerLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-white border-b border-white/30 text-lg cursor-pointer hover:text-[#00285E] block transition w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Column (Desktop Only) */}
          <div className="mt-12 lg:mt-24 space-y-5 lg:space-y-7 px-8 sm:px-12 lg:px-0 hidden lg:block">
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              At Houston Quran Academy, every <br />
              child’s journey is rooted in faith, <br />
              knowledge, and character.
            </p>
            {footerLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-white border-b border-white/30 text-lg lg:text-xl cursor-pointer hover:text-[#00285E] block transition w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Column */}
          <div className="mt-12 lg:mt-24 space-y-5 lg:space-y-7 px-8 sm:px-12 lg:px-0 lg:mr-20">
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              Your support transforms lives, fueling <br />
              a future illuminated by knowledge <br />
              and guided by mercy. Together, we <br />
              rise to build a world where <br />
              compassion, wisdom, and excellence <br />
              lead the way.
            </p>
            <div className="flex flex-col gap-4">
              {["Inquire", "Visit", "Apply", "Donate"].map((btn, i) => {
                let link = "#";
                if (btn === "Inquire")
                  link = "https://hqasis.com/front/office/inquiry/form";
                else if (btn === "Visit")
                  link = "https://hqasis.com/visitor/form";
                else if (btn === "Apply" || btn === "Donate")
                  link = "https://hqasis.com/OnlineRegistration";

                return (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`h-12 w-36 lg:h-14 lg:w-40 rounded-lg cursor-pointer text-lg lg:text-xl transition ${
                        btn === "Donate"
                          ? "hover:bg-white hover:text-red-700 bg-[#00285E] text-white"
                          : "bg-white text-red-700 hover:bg-[#00285E] hover:text-white"
                      }`}
                    >
                      {btn}
                    </button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider and Bottom Bar remains the same... */}
        <div className="mt-10 lg:mt-14 px-8 sm:px-12 lg:px-0 lg:pr-12 lg:pl-12">
          <hr className="border-gray-400" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mt-6 lg:mt-8 pb-4 lg:pb-6 px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-16">
          <p className="text-white text-sm lg:text-base xl:text-[24px] text-center lg:text-left">
            Copyright © 2025 Houston Quran Academy.
          </p>

          <a
            href="https://monefaction.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 lg:h-11 xl:h-12 px-4 lg:px-6 bg-[#cf3528] cursor-pointer text-sm lg:text-base xl:text-lg flex items-center justify-center gap-2 text-white rounded-lg hover:bg-white hover:text-[#cf3528] transition whitespace-nowrap"
          >
            <img
              src="/monefaction-logo.png"
              alt="Monefaction Logo"
              className="h-5 w-5 lg:h-10 lg:w-10 object-contain"
            />
            <span>Powered by Monefaction</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RedFooter;
