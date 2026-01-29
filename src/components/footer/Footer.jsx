import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  // Define links mapping
  const quickLinks = [
    { name: "Employment", path: "/Employment" },
    { name: "Calendar", path: "schoolCalendar" },
    { name: "Privacy Policy", path: "/privacy-policy" }, 
    { name: "Terms & Conditions", path: "/terms-conditions" }, 
  ];

  return (
    <div className="bg-red-700">
      <footer className="bg-[#00285E] min-h-screen lg:mr-20 font-serif rounded-tr-[40px] lg:rounded-tr-[70px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-start">
          {/* Left Column */}
          <div className="px-6 sm:px-8 lg:px-0 flex flex-col lg:w-1/3 xl:w-1/4">
            <div className="flex flex-row items-center gap-3 pt-8 lg:pt-20 lg:pl-16 xl:pl-24 text-center lg:text-left">
              <img
                src="/logo.png"
                className="h-16 lg:h-20 xl:h-24"
                alt="logo"
              />
              <p className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">
                Houston <br /> Quran <br /> Academy
              </p>
            </div>

            <p className="text-white pt-4 lg:pt-6 text-sm lg:text-base xl:text-xl leading-relaxed lg:pl-16 xl:pl-24">
              Established in 2008, Houston Quran Academy is a nonprofit school
              for PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
            </p>

            <p className="text-white pt-6 lg:pt-10 text-sm lg:text-base xl:text-xl lg:pl-16 xl:pl-24">
              281-717-4622
            </p>
            <p className="text-white pt-4 lg:pt-6 text-sm lg:text-base xl:text-[24px] lg:pl-16 xl:pl-24">
              Connect with Us
            </p>
            <div className="text-white text-xl lg:text-2xl pt-2 lg:pt-3 flex gap-4 lg:gap-5 lg:pl-16 xl:pl-24">
              <FaFacebookF className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaXTwitter className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#cf3528] transition" />
            </div>
          </div>

          {/* Middle Column (Universal for Mobile & Desktop) */}
          <div className="mt-8 lg:mt-20 space-y-4 lg:space-y-5 px-6 sm:px-8 lg:px-0 lg:w-1/4">
            <p className="text-white text-sm lg:text-base xl:text-xl leading-relaxed mb-4">
              At Houston Quran Academy, every child's journey is rooted in
              faith, knowledge, and character.
            </p>

            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-white border-b border-gray-400 text-sm lg:text-base xl:text-[24px] cursor-pointer hover:text-[#cf3528] transition pb-1 w-full group"
                >
                  <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-20 space-y-4 lg:space-y-6 px-6 sm:px-8 lg:px-0 lg:pr-8 xl:pr-16 2xl:pr-20 lg:w-1/3 xl:w-1/4">
            <p className="text-white text-sm lg:text-base xl:text-xl leading-relaxed">
              Your support transforms lives, fueling a future illuminated by
              knowledge and guided by mercy.
            </p>
            <div className="flex flex-col gap-3 lg:gap-4">
              {["Inquire", "Visit", "Apply", "Donate"].map((btn, i) => {
                let url = "#";
                if (btn === "Inquire")
                  url = "https://hqasis.com/front/office/inquiry/form";
                else if (btn === "Visit")
                  url = "https://hqasis.com/visitor/form";
                else if (btn === "Apply" || btn === "Donate")
                  url = "https://hqasis.com/OnlineRegistration";

                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`h-10 lg:h-11 xl:h-12 w-32 lg:w-36 xl:w-40 rounded-lg cursor-pointer text-sm lg:text-base xl:text-lg transition ${
                        btn === "Donate"
                          ? "bg-[#cf3528] text-white hover:bg-white hover:text-[#cf3528]"
                          : "bg-white text-red-700 hover:bg-[#cf3528] hover:text-white"
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

        {/* Divider & Bottom Bar (Kept the same) */}
        <div className="mt-8 lg:mt-12 px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-16">
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
            className="h-10 lg:h-11 xl:h-12 px-4 lg:px-6 bg-[#cf3528] flex items-center justify-center gap-2 text-white rounded-lg hover:bg-white hover:text-[#cf3528] transition whitespace-nowrap"
          >
            <img
              src="/monefaction-logo.png"
              alt="Monefaction"
              className="h-10 w-10 object-contain"
            />
            <span>Powered by Monefaction</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
