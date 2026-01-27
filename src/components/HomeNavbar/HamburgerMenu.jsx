import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";

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

export default function HamburgerMenu({
  isOpen,
  setIsOpen,
  menuItems,
  quickLinks,
  openMobileSubmenu,
  setOpenMobileSubmenu,
}) {
  const toggleMobileSubmenu = (menuName) => {
    setOpenMobileSubmenu(openMobileSubmenu === menuName ? null : menuName);
  };

  const handleSubmenuItemClick = () => {
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  };

  const handleQuickLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(8% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(8% at 100% 0%)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#0E2954] flex overflow-y-auto z-40"
        >
          <div className="flex-1 flex flex-col relative w-full">
            {/* Header inside overlay */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 gap-4 w-full">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
                />
              </div>
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                {/* Close icon */}
                <FaTimes
                  className="text-2xl sm:text-3xl md:text-4xl text-white cursor-pointer flex-shrink-0 ml-2 sm:ml-0"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            {/* Menu links */}
            <div className="flex-1 flex flex-col items-start gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8 md:mt-12 px-4 sm:px-6 md:px-10 w-full">
              {menuItems.map((item, index) => (
                <div key={index} className="relative w-full">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="w-full">
                        <div className="flex items-center justify-between w-full border-b border-white md:border-none pb-2 mb-3 sm:pb-3 md:pb-0 sm:mb-0">
                          <Link
                            to={item.path}
                            className="relative text-white h2 font-medium group truncate min-w-0"
                            onClick={() => !item.submenu && setIsOpen(false)}
                          >
                            {item.name}
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

                    {item.submenu && (
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
                                  onClick={handleSubmenuItemClick}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
