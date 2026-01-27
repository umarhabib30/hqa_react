import { useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaUsers,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const mobileSubmenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function NavMenuOverlay({
  isOpen,
  menuItems,
  quickLinks,
  hovered,
  setHovered,
  closeMenus,
}) {
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  // Helper function to toggle mobile submenu state
  const toggleMobileSubmenu = (menuName) =>
    setOpenMobileSubmenu(openMobileSubmenu === menuName ? null : menuName);

  // Helper function for main menu link click
  const handleMainMenuLinkClick = (item) => {
    if (!item.submenu) {
      // closeMenus();
      // setOpenMobileSubmenu(null);
    }
  };

  const handleQuickLinkClick = () => closeMenus();

  // Reusable Component function for Mobile Submenu
  const renderMobileSubmenu = (item) => (
    <AnimatePresence>
      {openMobileSubmenu === item.name && (
        <motion.div
          variants={mobileSubmenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="md:hidden overflow-hidden w-full mt-2 sm:mt-3 md:mt-4 ml-3 sm:ml-4 md:ml-6"
        >
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            {item.submenu.map((sub, i) => (
              <Link
                key={i}
                to={sub.path}
                className="text-white p font-normal py-1 sm:py-2 hover:pl-2 transition-all duration-300 border-l-2 border-white/30 pl-2 sm:pl-3 md:pl-4 truncate"
                onClick={closeMenus}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Reusable Component function for Desktop Submenu
  const renderDesktopSubmenu = (hoveredItem) => (
    <AnimatePresence>
      {hoveredItem?.submenu && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden md:flex absolute top-0 left-80 bottom-0 gap-2 z-50"
          style={{ minWidth: "200px" }}
          onMouseEnter={() => setHovered(hoveredItem.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="w-1 bg-white rounded-full my-30"></div>
          <div className="flex flex-col gap-2 p-4 pt-34 bg-[#0E2954]">
            {hoveredItem.submenu.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link
                  to={sub.path}
                  className="block text-white text-lg font-medium py-2 hover:pl-2 transition-all duration-300 hover:bg-white/10 rounded-md px-2"
                  onClick={closeMenus}
                >
                  {sub.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const currentHoveredItem = menuItems.find((item) => item.name === hovered);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(8% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(8% at 100% 0%)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#0E2954] flex overflow-y-auto"
        >
          <div className="flex-1 flex flex-col relative w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 gap-4 w-full">
              {/* Logo and Search Bar */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <img
                  src="/logo.webp"
                  alt="Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
                />
                <div className="flex items-center bg-white/10 rounded-lg px-2 md:px-3 py-2 ml-2 sm:ml-3 flex-1 min-w-0">
                  <FaSearch className="text-white text-lg sm:text-xl mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm sm:text-base min-w-0"
                  />
                </div>
              </div>

              {/* Donation, Community, and Close Button */}
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <Link
                  to="/support"
                  className="flex-1 sm:flex-none min-w-0"
                  onClick={closeMenus}
                >
                  <button className="bg-[#1a376b] cursor-pointer text-white px-3 py-2 sm:px-6 sm:py-3 rounded-md text-xs sm:text-sm hover:bg-[#0B49BD] transition w-full text-center">
                    Giving
                  </button>
                </Link>
                <div className="relative inline-block text-left">
                  <button
                    className="bg-[#1a376b] cursor-pointer text-white px-3 py-2 sm:px-6 sm:py-3 rounded-md text-xs sm:text-sm hover:bg-[#0B49BD] transition flex-1 sm:flex-none text-center min-w-0 flex items-center justify-center"
                    onClick={() => setIsBtnOpen(!isBtnOpen)}
                    aria-expanded={isBtnOpen}
                    aria-haspopup="true"
                  >
                    <FaUsers className="mr-2 h-4 w-4" />
                    Community
                    {isBtnOpen ? (
                      <FaChevronUp className="ml-2 h-3 w-3" />
                    ) : (
                      <FaChevronDown className="ml-2 h-3 w-3" />
                    )}
                  </button>

                  {isBtnOpen && (
                    <div
                      className="absolute z-10 mt-1 w-38 bg-[#e8f1fd] rounded-lg shadow-xl text-[#1a376b] overflow-hidden right-0"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <Link
                        to="/pto"
                        className="block px-4 py-2 hover:bg-[#c9dff7] cursor-pointer font-medium"
                        role="menuitem"
                        onClick={closeMenus}
                      >
                        PTO
                      </Link>

                      <div className="border-t border-[#1a376b] mx-4" />

                      <Link
                        to="/alumni"
                        className="block px-4 py-2 hover:bg-[#c9dff7] cursor-pointer font-medium"
                        role="menuitem"
                        onClick={closeMenus}
                      >
                        Alumni
                      </Link>
                    </div>
                  )}
                </div>
                <FaTimes
                  className="text-2xl sm:text-3xl md:text-4xl text-white cursor-pointer flex-shrink-0 ml-2 sm:ml-0"
                  onClick={closeMenus}
                />
              </div>
            </div>

            {/* Menu links */}
            <div className="flex-1 flex flex-col items-start gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8 md:mt-12 px-4 sm:px-6 md:px-10 w-full">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="w-full">
                        <div className="flex items-center justify-between w-full border-b border-white md:border-none pb-2 mb-3 sm:pb-3 md:pb-0 sm:mb-0">
                          <Link
                            to={item.path}
                            className="relative text-white h2 font-medium group truncate min-w-0"
                            onClick={() => handleMainMenuLinkClick(item)}
                          >
                            {item.name}
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-6 sm:group-hover:w-8 md:group-hover:w-10"></span>
                          </Link>

                          {item.submenu && (
                            <button
                              className="md:hidden text-white text-lg sm:text-xl flex-shrink-0"
                              onClick={() => toggleMobileSubmenu(item.name)}
                            >
                              {openMobileSubmenu === item.name ? (
                                <FaChevronUp />
                              ) : (
                                <FaChevronDown />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {item.submenu && renderMobileSubmenu(item)}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links + Social media */}
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 md:absolute md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-16 md:w-[280px] lg:w-[350px] xl:w-[380px]">
              <h3 className="text-white h2 mb-2 sm:mb-3 md:mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-3">
                {quickLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="flex items-center gap-1 sm:gap-2 p border-b border-white/40 text-white hover:pl-1 transition-all duration-300 py-1 min-w-0"
                    onClick={handleQuickLinkClick}
                  >
                    <FaArrowRight
                      size={10}
                      className="flex-shrink-0 sm:size-3 md:size-4"
                    />
                    <span className="truncate">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <h3 className="text-white h2 mb-2 sm:mb-3 md:mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white h2 hover:text-blue-500 transition-all duration-300"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl sm:text-3xl hover:text-gray-400 transition-all duration-300"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white h2 hover:text-pink-500 transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white h2 hover:text-blue-400 transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Render Desktop Submenu if an item is hovered */}
          {currentHoveredItem && renderDesktopSubmenu(currentHoveredItem)}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
